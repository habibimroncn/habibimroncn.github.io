(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{438:function(t,e){},500:function(t,e,n){"use strict";n.r(e);n(13),n(22),n(85),n(408);var o,i=n(409),a=n(419),r=(n(420),n(440)),m=n(439),c={name:"About",data:function(){return{name:"Name",work:"Loading...",about:"Loading..."}},methods:{richtextToHTML:function(t){return Object(a.documentToHtmlString)(t)},markdownToHtml:function(t){return m(t)}},metaInfo:{title:"About Me",meta:[{key:"author",name:"author",content:"Habib Imron Cahyo Nugroho"},{key:"description",name:"description",content:"About me as a human being created by God Almighty."},{key:"og:title",name:"og:title",content:"About Me - habibimroncn"},{key:"twitter:title",name:"twitter:title",content:"About Me - habibimroncn"},{key:"og:description",name:"og:description",content:"About me as a human being created by God Almighty."},{key:"og:image",name:"og:image",content:"https://habibimroncn.github.io/images/mywork.jpg"},{key:"twitter:card",name:"twitter:card",content:"summary_large_image"},{key:"twitter:description",name:"twitter:description",content:"About me as a human being created by God Almighty."},{key:"twitter:image",name:"twitter:image",content:"https://habibimroncn.github.io/images/mywork.jpg"},{key:"og:url",name:"og:url",content:"https://habibimroncn.github.io/about"},{key:"twitter:url",name:"twitter:url",content:"https://habibimroncn.github.io/about"}]},mounted:(o=Object(i.a)(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=this,(n=r.createClient({space:"nxt6719tvjz8",accessToken:"oCKDeISWkHU9n7JpXT4H0Zzj5t5M9CIt87g-gDn2q8w"})).getEntry("5k9CHy6iMs3bm0TdgrqbYr").then((function(t){return t.fields})).then((function(t){e.name=m(t.name),e.about=m(t.aboutRef),e.work=m(t.workRef)})),n.getEntries().then((function(t){console.log(t),t.items.forEach((function(t){if("blogPost"==t.sys.contentType.sys.id&&t.fields.title){var e=Object(a.documentToHtmlString)(t.fields.content);console.log(e)}}))}));case 4:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)})},u=n(21),s=Object(u.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("CustomLayout",{attrs:{pageID:"about",pageTitle:"About Me",pageImage:"/images/aboutme.jpg"}},[e("div",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:this._s(this.about)}})])}),[],!1,null,null,null);e.default=s.exports}}]);