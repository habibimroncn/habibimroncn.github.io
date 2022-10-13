importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

const { registerRoute } = workbox.routing;
const { CacheFirst, NetworkFirst, StaleWhileRevalidate } = workbox.strategies;
const { CacheableResponse } = workbox.cacheableResponse;

workbox.core.setCacheNameDetails({
  prefix: 'habibimroncn.github.io',
  suffix: '2022-10'
});

registerRoute(
  '/',
  new NetworkFirst()
);

registerRoute(
  /page[0-99]/,
  new NetworkFirst()
)

registerRoute(
  new RegExp('/\\d{4}/\\d{2}/\\d{2}/.+'),
  new StaleWhileRevalidate()
)

workbox.precaching.precacheAndRoute([
  { url: '/development/2022/08/20/aviatorfarms-themes.html', revision: '2022-08-20' },
  { url: '/development/2022/08/20/customcalculator-themes.html', revision: '2022-08-20' },
  { url: '/development/2022/08/20/edgedatasolutions-themes.html', revision: '2022-08-20' },
  { url: '/development/2022/08/20/generationsskincare-themes.html', revision: '2022-08-20' },
  { url: '/development/2022/08/20/poodlepet-themes.html', revision: '2022-08-20' },
  { url: '/development/2022/08/20/nuspecies-themes.html', revision: '2022-08-20' },
  { url: '/development/2022/08/20/hope-connect-themes.html', revision: '2022-08-20' },
  { url: '/snippet/enable-product-search-by-sku-in-free-version-of-ivory-search-plugin', revision: '2022-08-20' },
  { url: '/snippet/woof-wc-products-filter-fixing-price-filter/', revision: '2022-08-21' },
  { url: '/snippet/remove-all-orders-woocommerce-using-query-sql', revision: '2022-09-20' },
  { url: '/snippet/sort-woocommerce-products-by-sku/', revision: '2022-10-05' },
  { url: '/', revision: '202210131103' },
  { url: '/about', revision: '202210131103' },
  { url: '/snippets', revision: '202210131103' },
  { url: '/blog', revision: '202210131103' },
  { url: '/css/style.css', revision: '202210131103' },
  { url: '/css/font-awesome-4.7.0/css/font-awesome.min.css', revision: '202210131103' }
])

registerRoute(
  ({request}) => request.destination === 'image' ,
  new CacheFirst({
    plugins: [
      new CacheableResponse({statuses: [0, 200]})
    ],
  })
);

registerRoute(
  /assets\/(images|icons|css)/,
  new CacheFirst()
);