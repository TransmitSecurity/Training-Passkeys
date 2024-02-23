#

App.vue

```js
onBeforeMount(() => {
  // Add a script tag to the page to download the ts-platform sdk
  const platformScript = document.createElement('script')
  platformScript.src = import.meta.env.VITE_PLATFORM_SDK_URL
  platformScript.defer = true
  platformScript.id = 'ts-platform-script'
  document.head.appendChild(platformScript)

  // Then, initialize the ts-platform sdk
  tsSdk.initWhenLoaded()
})
```


helpers/tsSdk.ts

```js

export function initWhenLoaded() {
  console.log('Transmit Security platform SDK - adding initialization listener')
  const platformScript = document.getElementById('ts-platform-script')
  if (platformScript) {
    platformScript.addEventListener('load', async function () {
      try {
        const response = await configApi.getClientId()

        console.log('Retrieved client id')
        console.log(response)
        if (response.status == 200) {
          console.log('TSPlatform -- Starting init')
          await window.tsPlatform.initialize({
            clientId: response.data.clientId,
            webauthn: { serverPath: import.meta.env.VITE_TS_SERVER_PATH },
          })
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
```