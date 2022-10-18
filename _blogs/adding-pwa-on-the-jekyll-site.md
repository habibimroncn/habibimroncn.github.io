---
layout: blog
title: Adding PWA on the Jekyll Site
permalink: /blog/adding-pwa-on-the-jekyll-site
seo_description: Adding PWA on the Jekyll Site
main_class: blog
date: 2022-10-13T04:18:34.299Z
---
**A progressive web application (PWA)**, commonly known as a progressive web app, is a type of application software delivered through the web, built using common web technologies including HTML, CSS, JavaScript, and WebAssembly. It is intended to work on any platform with a standards-compliant browser, including desktop and mobile devices. \[wikipedia]

If you want to make your jekyll project a PWA it's very easy, just add the manifest.json and sw.js files.

The following are examples of manifest.json and sw.js files that I use on this site.

**m﻿anifest.json**

`{
  "$schema": "https://json.schemastore.org/web-manifest-combined.json",
  "name": "Habib Nugroho",
  "background_color": "#000",
  "theme_color": "#00a880",
  "id":"/",
  "scope": "/",
  "start_url": "/",
  "display": "standalone",
  "description": "Developer blog sharing ideas and smart solutions to others",
  "icons": [
    {
        "src": "/icon-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
    },
    {
        "src": "/icon-256x256.png",
        "sizes": "256x256",
        "type": "image/png"
    },
    {
        "src": "/icon-384x384.png",
        "sizes": "384x384",
        "type": "image/png"
    },
    {
        "src": "/icon-512x512.png",
        "sizes": "512x512",
        "type": "image/png"
    }
  ]
}`

**s﻿w.js (Service Workers)**

<https://raw.githubusercontent.com/habibimroncn/habibimroncn.github.io/main/sw.js>

The data in both files is adjusted to the site you are using. 

And to make a manifest icon you can use this site: <https://www.simicart.com/manifest-generator.html/>