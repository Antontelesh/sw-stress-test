/* eslint-env worker */

(global => {
  'use strict'

  importScripts('/sw-toolbox/sw-toolbox.js')

  global.toolbox.options.debug = true

  // unfortunately, no regexp flags support
  global.toolbox.router.get(/\.(JPE?G|jpe?g)$/, global.toolbox.cacheFirst, {
    cache: {
      name: 'pictures',
      maxEntries: 20000,
      maxAgeSeconds: 1 * 24 * 60 * 60,
    },
  })

  global.toolbox.router.default = global.toolbox.networkFirst

  // Boilerplate to ensure our service worker takes control of the page as soon
  // as possible.
  global.addEventListener('install',
      event => event.waitUntil(global.skipWaiting()))
  global.addEventListener('activate',
      event => event.waitUntil(global.clients.claim()))
})(self)
