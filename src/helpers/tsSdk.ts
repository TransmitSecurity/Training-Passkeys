import { userSessionStore } from '@/store/userSession'
import { ConfigApi } from '@transmitsecurity-dev/ts-demo-client-lib'

const backendAPI = import.meta.env.VITE_BACKEND_URL
const configApi = new ConfigApi(undefined, backendAPI)

export const sdkSourceUrl = import.meta.env.VITE_RISKID_SDK_SOURCE_URL

export function initWhenLoaded() {
  console.log('Transmit Security platform SDK - adding initialization listener')
  const platformScript = document.getElementById('ts-platform-script')
  if (platformScript) {
    platformScript.addEventListener('load', async function () {
      try {
        // We need the client ID to initialize the SDK
        // in this case our backend is providing it to us
        const response = await configApi.getClientId()
        console.log('Retrieved client id')
        console.log(response)

        if (response.status == 200) {
          console.log('TSPlatform -- Starting init')
          // <----------------------- WEBINAR - add code here ----------------------->
          // TODO initialize the platform SDK here
          // https://developer.transmitsecurity.com/guides/webauthn/quick_start_sdk/#step-3-initialize-the-sdk
          console.log('TSPlatform -- End init')

          // Dispatch an event indicating that the SDK was initialized
          // this is helpful whenever webauthn authentication needs to be used
          // and we need to wait for the SDK
          const event = new CustomEvent('tsPlatformLoaded', {
            detail: {
              message: 'TSPlatform loaded',
              time: new Date(),
            },
          })

          document.dispatchEvent(event)
          const userSession = userSessionStore()
          userSession.setTsPlatformLoaded(true)
        }
      } catch (error) {
        console.log('Error while retrieving the client ID')
        console.log(error)
      }
    })
  } else {
    console.log('Platform element not found')
  }
}
