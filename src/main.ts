import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { enableProdMode } from '@angular/core'
import { environment } from './environments/environment'
import { AppModule } from './app/'

import { hmrBootstrap } from './hmr'

if (environment.PROD) {
  enableProdMode()
}

const bootstrap = () => {
  return platformBrowserDynamic().bootstrapModule(AppModule)
}

if (environment.HMR) {
  if (module['hot']) {
    hmrBootstrap(module, bootstrap)
  } else {
    console.error('HMR is not enabled for webpack-dev-server!')
    console.log('Are you using the --hmr flag for ng serve?')
  }
} else {
  bootstrap()
}
