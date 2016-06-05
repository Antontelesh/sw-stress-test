# Service Workers Stress Test

This is a sample project to test how much data can Service Workers cache.
Images are used as data.

In order to perform this test on your own, please follow the steps below:

1. Clone the repo
2. Run `npm install`
3. Create a directory called `pictures` within the project root
4. Place as many images as you want to the `pictures` directory. All pictures should be in JPG format and have extention `.jpg` or `.JPG`.
5. Run `npm run compile`. It will create a bundle.
6. Run `npm start`. It will start two web-servers. One for serving your static, another for serving the pictures.
7. Go to `127.0.0.1:8080`, check in dev tools if service worker is installed and wait until all images are downloaded. It may take some time. Loaded images have an `OK` badge in the sidebar. They will load one by one, so you can scroll to the bottom of the list and wait until the last image is loaded.
8. Check cache in dev tools. Go to `Resources → Cache Storage → pictures`.
9. Go to the `Network` tab and enable offline mode under the `Network Throttling` select. Or simply turn off your servers.
10. Relaunch the page. Cached images should load again and `OK` badges should appear near them. If you see any red `E` badge it means that the image was not cached and is unreachable.

## Disclaimer

I've written this code only for my own purposes.
It was not intended to be cross-platform or something.
So if it does not work for you, you have a choice to find the bug yourself or to not bother with it. Though, you may create an issue or pull request.
