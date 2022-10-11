                        importScripts("/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"/js/lazysizes.min.js","revision":"45bacd312d5098b4b59f563d8756c15d"},{"url":"/js/wow.min.js","revision":"50aad71438d49dd3ecae2559249f687c"},{"url":"/js/app.js","revision":"a0be622f5f911e23c40e7522608b9823"},{"url":"/css/animate.min.css","revision":"d14d93614583b5e1211adba58181854c"},{"url":"/css/style.css","revision":"efb169aa96cdf26822c1c2e0ba2f3ba5"},{"url":"/index.html","revision":"e8cb402009868bdf27c7db1c9c3d1d7d"},{"url":"/development/2022/08/20/aviatorfarms-themes.html","revision":"002e82fe43d71b86169f919a9365394e"},{"url":"/development/2022/08/20/customcalculator-themes.html","revision":"d73855a684bafddc517d81cea579364a"},{"url":"/development/2022/08/20/edgedatasolutions-themes.html","revision":"d3d92efb04d0886795d09bc2c638d995"},{"url":"/development/2022/08/20/generationsskincare-themes.html","revision":"c5844f3127ca19760887c9c72fc4edaa"},{"url":"/development/2022/08/20/poodlepet-themes.html","revision":"a12367652b1643e4918b330ccb8291a7"}];
            // service-worker.js

// set names for both precache & runtime cache
workbox.core.setCacheNameDetails({
    prefix: 'my-blog',
    suffix: 'v1.0',
    precache: 'precache',
    runtime: 'runtime-cache'
});

// let Service Worker take control of pages ASAP
workbox.core.skipWaiting();
workbox.core.clientsClaim();

// let Workbox handle our precache list
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// use `NetworkFirst` strategy for html
workbox.routing.registerRoute(
    /\.html$/,
    new workbox.strategies.NetworkFirst()
);

// use `NetworkFirst` strategy for css and js
workbox.routing.registerRoute(
    /\.(?:js|css)$/,
    new workbox.strategies.NetworkFirst()
);

// use `CacheFirst` strategy for images
workbox.routing.registerRoute(
    /assets\/(img|icons)/,
    new workbox.strategies.CacheFirst()
);

// use `StaleWhileRevalidate` third party files
workbox.routing.registerRoute(
    /^https?:\/\/cdn.staticfile.org/,
    new workbox.strategies.StaleWhileRevalidate()
);
