import router from '@/router'
import { userSessionStore } from '@/store/userSession'
import { UserApi, type UserDto } from '@transmitsecurity-dev/ts-demo-client-lib'
import { reportAction, Action, clearUser, setUserId } from './risk'

const backendAPI = import.meta.env.VITE_BACKEND_URL
export async function logout() {
  const sessionStore = userSessionStore()
  if (!sessionStore.isAuthenticated) {
    return
  }
  reportAction(Action.LOGOUT)
  clearSession()
  const userApi = new UserApi(undefined, backendAPI)
  // Dispatch an event other components can subscribe to
  // when the user logs out
  const event = new CustomEvent('userLoggedOut')
  document.dispatchEvent(event)
  await userApi.logout()
  router.push({ name: 'home' })
}

export async function clearSession() {
  const sessionStore = userSessionStore()
  sessionStore.clear()
  // Clear user from risk SDK
  clearUser()
}

export async function loadSession(): Promise<{ user: UserDto } | undefined> {
  // The session is stored in a cookie sent
  // automatically whenever a new request is made
  // To check if there is a valid session, we simply
  // try to get the user information
  const userApi = new UserApi(undefined, backendAPI)
  try {
    const currentUser = await userApi.getCurrentUser()
    console.log(currentUser.data)
    if (currentUser.status !== 200) {
      console.log('Session expired')
      clearSession()
      return
    }
    // The user is authenticated, set the user in the risk SDK
    setUserId(currentUser.data.user_id)
    // Save the user information locally
    const sessionStore = userSessionStore()
    sessionStore.setUserData(currentUser.data)
    sessionStore.setAuthenticated(true)
    // Dispatch an event indicating that the user logged in
    // this is helpful if other components need to populate
    // things at this stage (cart for example)
    const event = new CustomEvent('userLoggedIn')
    document.dispatchEvent(event)
    return { user: currentUser.data }
  } catch (error) {
    console.log(error)
    return
  }
}

export async function deleteCookie(name: string) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;'
}
