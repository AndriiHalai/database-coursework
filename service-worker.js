/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "409d4e05ee8b0365ace380dc83440e5b"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.1895703e.css",
    "revision": "e2694897af5072c3c9441558e38454c0"
  },
  {
    "url": "assets/img/photo_2023-12-20_22-26-36.781011b2.png",
    "revision": "781011b239ce16d5dd995cd95b26ba35"
  },
  {
    "url": "assets/img/photo_2023-12-20_22-26-38.25081821.png",
    "revision": "25081821d55dcb244ebf75a9fccc5062"
  },
  {
    "url": "assets/img/photo_2023-12-20_22-26-40.609cdcba.png",
    "revision": "609cdcba87c9e419ba59c78c87ba9845"
  },
  {
    "url": "assets/img/photo_2023-12-20_22-26-41.86008ecc.png",
    "revision": "86008ecc49debef6ea5f7e88da658bef"
  },
  {
    "url": "assets/img/photo_2023-12-20_22-26-42.927a04ca.png",
    "revision": "927a04caf85bbb3c09971a79500619f6"
  },
  {
    "url": "assets/img/photo_2023-12-20_22-26-45.107c8866.png",
    "revision": "107c8866d34476b066b8f64b0087c6e4"
  },
  {
    "url": "assets/img/photo_2023-12-20_22-36-39.8effcc33.png",
    "revision": "8effcc334502d351b592d9e4a0fc6764"
  },
  {
    "url": "assets/img/photo_2023-12-20_22-59-09.b3302e6b.png",
    "revision": "b3302e6b703d8236eda22356a0b98dd3"
  },
  {
    "url": "assets/img/photo_2023-12-21_11-05-33.1ba0491c.png",
    "revision": "1ba0491c6d9b7ff26e71f56768b92d14"
  },
  {
    "url": "assets/img/relational_scheme.44c970b0.png",
    "revision": "44c970b0a143ec6fead87694514ea610"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.7b6d8610.js",
    "revision": "49109c99ed8e4255c0468c9efde9d755"
  },
  {
    "url": "assets/js/10.6195c7ff.js",
    "revision": "6b79d2cdb25cbabbb27f497be50e0456"
  },
  {
    "url": "assets/js/13.f5bbdb4b.js",
    "revision": "f43cbcc5e002360038310b13eb2b6464"
  },
  {
    "url": "assets/js/14.a8c1079f.js",
    "revision": "89bc0b0b4810dcc2e7a0a0e4caba1119"
  },
  {
    "url": "assets/js/15.2c7307fb.js",
    "revision": "79c78b49260ea691eac787909aa52f11"
  },
  {
    "url": "assets/js/16.67d37a8a.js",
    "revision": "b451d73cd7d708925a953b3bfdb988b4"
  },
  {
    "url": "assets/js/17.10cb1bcb.js",
    "revision": "cd978f2c9f845ef246649d6c83768343"
  },
  {
    "url": "assets/js/18.e09d80d7.js",
    "revision": "d12dba1a9a7706c8b37cca889e347d37"
  },
  {
    "url": "assets/js/19.bca954a1.js",
    "revision": "4892856f92a3216b9bba4673ac4d367d"
  },
  {
    "url": "assets/js/2.99bcbcdc.js",
    "revision": "1b49af1b29072dd881170b9c8fc7862d"
  },
  {
    "url": "assets/js/20.732d4eb0.js",
    "revision": "873cd9d532c8f960d39c80666545f393"
  },
  {
    "url": "assets/js/21.25c3404c.js",
    "revision": "4a55c78f428654422992b19cbfcb6c9e"
  },
  {
    "url": "assets/js/22.f4100a6d.js",
    "revision": "2d2aefcd7cb000ccfc7354d5c4d7992b"
  },
  {
    "url": "assets/js/23.7279c42d.js",
    "revision": "05c3867aa6d44f09d35b28d89ffa8c7b"
  },
  {
    "url": "assets/js/24.7053c58f.js",
    "revision": "737c6d87912a4312c9a54083fd0ec224"
  },
  {
    "url": "assets/js/25.f80cb9fa.js",
    "revision": "b9f0f7fdbd160f6264d23c9893ce1523"
  },
  {
    "url": "assets/js/26.5bfe8cfc.js",
    "revision": "25097d4b15d164877a074855c62d5254"
  },
  {
    "url": "assets/js/27.f5a3806c.js",
    "revision": "4275865bc39b449b651ba1b1f3bd0baa"
  },
  {
    "url": "assets/js/28.acddc5e3.js",
    "revision": "69c4f6dcd43ce3df405e7d74a639e732"
  },
  {
    "url": "assets/js/29.111b5c63.js",
    "revision": "178976665ef9bfb9f143a398d231d8bc"
  },
  {
    "url": "assets/js/3.9512e6a8.js",
    "revision": "ba785f5ef9f15b19603ffb18aee7c990"
  },
  {
    "url": "assets/js/30.79c85336.js",
    "revision": "7f312b8a5954fa8204b09e375ea5f827"
  },
  {
    "url": "assets/js/31.88cf9b05.js",
    "revision": "d3d54f4a335fe298e7523b53e9e08abb"
  },
  {
    "url": "assets/js/32.acded436.js",
    "revision": "75dbf9e53eb55d217596734d28e84a0c"
  },
  {
    "url": "assets/js/33.7207f4c2.js",
    "revision": "c696716dcbe0cfc97e28da72c4b57402"
  },
  {
    "url": "assets/js/34.0893a2d5.js",
    "revision": "5c6c93f1990e7b18b529ddf8b18aee2a"
  },
  {
    "url": "assets/js/35.60deaa3e.js",
    "revision": "9988af4fb3d50a4ceb77e81e60318eb5"
  },
  {
    "url": "assets/js/36.f0d91f96.js",
    "revision": "1f3aee1f73294a94a10f9e1d7d09bd8c"
  },
  {
    "url": "assets/js/37.05ced758.js",
    "revision": "f45615f26734ad53045e5768c8813949"
  },
  {
    "url": "assets/js/38.217719f2.js",
    "revision": "7eee4425c06d86f09662963b966ddc74"
  },
  {
    "url": "assets/js/39.6b45c506.js",
    "revision": "ef08abfdb29c53f07693eadec10412d2"
  },
  {
    "url": "assets/js/4.aa699241.js",
    "revision": "1cc710a4c035479b572a96e5c9f2c831"
  },
  {
    "url": "assets/js/41.e9c523c3.js",
    "revision": "f712af388623757709fce28041249cee"
  },
  {
    "url": "assets/js/5.38d0951a.js",
    "revision": "a03c5faed94d744dadf2de62a9d0529f"
  },
  {
    "url": "assets/js/6.c7e716f9.js",
    "revision": "21a2e5023eb57e163d2d9c69279182e1"
  },
  {
    "url": "assets/js/7.b9b91855.js",
    "revision": "859716bfa08ae5bc00a4711ab3a064c1"
  },
  {
    "url": "assets/js/8.25391f9d.js",
    "revision": "37c1bb2c31a2f9ba1bcc7e1f275264da"
  },
  {
    "url": "assets/js/9.5c736c11.js",
    "revision": "c61d0abe3a271839a4febb0e94e9216c"
  },
  {
    "url": "assets/js/app.f159c4c4.js",
    "revision": "7066129489ab9acafbc9a851b03f1c2b"
  },
  {
    "url": "assets/js/vendors~docsearch.582062d6.js",
    "revision": "734bc0771880ad27b5f6f444919ba18c"
  },
  {
    "url": "conclusion/index.html",
    "revision": "e314d6e22f41f816f75844b14090bfa3"
  },
  {
    "url": "design/index.html",
    "revision": "377edc8901db8de8de63fc7e6d386602"
  },
  {
    "url": "index.html",
    "revision": "b4408a5130521d17e7a57ac7f22c2315"
  },
  {
    "url": "intro/index.html",
    "revision": "0c60366c3ffa25f93d285b1c2bce8628"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "4817979282bdf9413c4d2d7129c02277"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "0d298f9932f57eed84510a62a45ab690"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "3208670b6579a9d29f0e0754542cd18a"
  },
  {
    "url": "software/index.html",
    "revision": "45dc04d7bcb37a890a43263adcdb5974"
  },
  {
    "url": "test/index.html",
    "revision": "497f4792b634c1a25254c512140f41e0"
  },
  {
    "url": "use cases/index.html",
    "revision": "16ab4be8025597d528c23478b193be2d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
