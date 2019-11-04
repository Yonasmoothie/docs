(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{253:function(t,e,a){"use strict";a.r(e);var r=a(4),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"introducing-api-version-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introducing-api-version-5"}},[t._v("#")]),t._v(" Introducing API version 5")]),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),a("p",[t._v("We've just released API version 5, which contains many enhancements and new features. Since the\nintroduction of "),a("router-link",{attrs:{to:"/news/2018/07/29/introducing-api-4/"}},[t._v("API version 4")]),t._v(", our website traffic has tripled. Nowadays we handle 6 million requests per\nhour. It's an accomplishment that we're very proud of, handling such large amounts of traffic is a great\nchallenge. This service would not have been reliable without the CDN provided by "),a("a",{attrs:{href:"https://www.cloudflare.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cloudflare"),a("OutboundLink")],1),t._v(" and\neffective software (such as "),a("a",{attrs:{href:"https://nginx.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("nginx"),a("OutboundLink")],1),t._v(" and "),a("a",{attrs:{href:"https://github.com/libvips/libvips",target:"_blank",rel:"noopener noreferrer"}},[t._v("libvips"),a("OutboundLink")],1),t._v(").")],1),a("p",[t._v("Here's a summary of the changes. To maintain backward compatibility, all parameters listed on API 4 still\nwork on API 5. The source code is available on the "),a("a",{attrs:{href:"https://github.com/weserv/images/tree/5.x",target:"_blank",rel:"noopener noreferrer"}},[t._v("5.x branch"),a("OutboundLink")],1),t._v(", this will become the default branch in\nthe future.")]),a("h2",{attrs:{id:"luajit-→-c"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#luajit-→-c"}},[t._v("#")]),t._v(" LuaJIT → C++")]),a("p",[t._v("With API version 5 we've rewrote the entire codebase to C++ as a nginx module. The reason for this\nrewrite is to tighten the control over memory allocation. We found out that the current garbage collector\n(GC) in LuaJIT 2, which is essentially the same as the one in vanilla Lua 5.1, is not very fast for large\nworkloads. "),a("a",{attrs:{href:"http://wiki.luajit.org/New-Garbage-Collector",target:"_blank",rel:"noopener noreferrer"}},[t._v("A new GC is already proposed"),a("OutboundLink")],1),t._v(" for LuaJIT 3.0, but it has not yet been implemented.")]),a("p",[t._v("We also worried about the future of LuaJIT, given that "),a("a",{attrs:{href:"https://www.freelists.org/post/luajit/Looking-for-new-LuaJIT-maintainers",target:"_blank",rel:"noopener noreferrer"}},[t._v("the author of LuaJIT is stepping down"),a("OutboundLink")],1),t._v(". It is\ndoubtful whether anyone will fill his shoes. The new C++ codebase ensures that we can continue our\nservice for many years to come.")]),a("h2",{attrs:{id:"revamped-front-end"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#revamped-front-end"}},[t._v("#")]),t._v(" Revamped front-end")]),a("p",[t._v("The old single index page had to be improved. We've completely revamped the front-end using\n"),a("a",{attrs:{href:"https://vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress"),a("OutboundLink")],1),t._v(", which allows us to write the documentation as regular Markdown files.")]),a("p",[t._v("The documentation is available in our "),a("a",{attrs:{href:"https://github.com/weserv/docs",target:"_blank",rel:"noopener noreferrer"}},[t._v("weserv/docs"),a("OutboundLink")],1),t._v(" GitHub repository.")]),a("h2",{attrs:{id:"improved-rate-limiter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#improved-rate-limiter"}},[t._v("#")]),t._v(" Improved rate limiter")]),a("p",[t._v("We have improved our "),a("a",{attrs:{href:"https://redis.io/commands/incr#pattern-rate-limiter-2",target:"_blank",rel:"noopener noreferrer"}},[t._v("basic Redis rate limiter"),a("OutboundLink")],1),t._v(". Our new rate limiter is written in C and runs inside a\nRedis backed nginx module. The implementation is based on the "),a("a",{attrs:{href:"https://github.com/onsigntv/redis-rate-limiter",target:"_blank",rel:"noopener noreferrer"}},[t._v("onsigntv/redis-rate-limiter"),a("OutboundLink")],1),t._v(" module,\nwhich offers a straightforward implementation of the fairly sophisticated "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Generic_cell_rate_algorithm",target:"_blank",rel:"noopener noreferrer"}},[t._v("generic cell rate algorithm"),a("OutboundLink")],1),t._v(",\nin 130 lines of C, without external dependencies.")]),a("p",[t._v("An additional feature of this module is that it's easy to check show your current rate limit quota:")]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -i https://images.weserv.nl/quota\nHTTP/1.1 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" OK\nDate: Sun, 01 Sep "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v(" 00:00:00 GMT\nX-RateLimit-Limit: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("700")]),t._v("\nX-RateLimit-Remaining: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("700")]),t._v("\nX-RateLimit-Reset: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"X-RateLimit-Limit"')]),t._v(":700, "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"X-RateLimit-Remaining"')]),t._v(":700, "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"X-RateLimit-Reset"')]),t._v(":0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),a("p",[t._v("Our limit is around 700 images per 3 minutes. Accessing this endpoint does not count against\nyour rate limit.")])]),a("p",[t._v("The source code of the rate limiter can be viewed on GitHub: "),a("a",{attrs:{href:"https://github.com/weserv/rate-limit-nginx-module",target:"_blank",rel:"noopener noreferrer"}},[t._v("weserv/rate-limit-nginx-module"),a("OutboundLink")],1),t._v(".")]),a("h2",{attrs:{id:"support-for-animated-images"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#support-for-animated-images"}},[t._v("#")]),t._v(" Support for animated images")]),a("p",[t._v("Thanks to "),a("a",{attrs:{href:"https://libvips.github.io/libvips/2019/04/22/What's-new-in-8.8.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("libvips 8.8"),a("OutboundLink")],1),t._v(", we've now enabled support for "),a("router-link",{attrs:{to:"/docs/format.html#number-of-pages"}},[t._v("animated WebP and GIF images")]),t._v(".")],1),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("//images.weserv.nl/?url=images.weserv.nl/banana.webp&h=300&output=gif&n=-1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[a("a",{attrs:{href:"/?url=images.weserv.nl/banana.webp&h=300&output=gif&n=-1"}},[a("img",{attrs:{src:"/static/banana.webp?h=300&output=gif&n=-1",alt:"Animated image"}})])]),a("h2",{attrs:{id:"support-for-loading-heic-images"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#support-for-loading-heic-images"}},[t._v("#")]),t._v(" Support for loading HEIC images")]),a("p",[t._v("We've added support for loading HEIC-images. This is the new image compression standard being used by\nApple and others. HEIC files are typically half the size of JPEG files at similar quality.")]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),a("p",[t._v("Saving to HEIC-images isn't supported due to patent issues. Hopefully the use of royalty-free\nencoding formats such as "),a("a",{attrs:{href:"https://aomediacodec.github.io/av1-avif/",target:"_blank",rel:"noopener noreferrer"}},[t._v("AVIF"),a("OutboundLink")],1),t._v(" will become more widely used in the future.")])]),a("h2",{attrs:{id:"css-inspired-fit-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-inspired-fit-parameters"}},[t._v("#")]),t._v(" CSS-inspired fit parameters")]),a("p",[t._v("We've deprecated the confusing fit ("),a("code",[t._v("&t=")]),t._v(") parameters ("),a("code",[t._v("fit")]),t._v(", "),a("code",[t._v("fitup")]),t._v(", "),a("code",[t._v("square")]),t._v(", "),a("code",[t._v("squaredown")]),t._v(", "),a("code",[t._v("absolute")]),t._v("\nand "),a("code",[t._v("letterbox")]),t._v(") and aligned it with the CSS terminology.")]),a("p",[t._v("Here's a handy table to help users migrating to these new CSS-inspired parameters:")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Before")]),a("th",[t._v("After")])])]),a("tbody",[a("tr",[a("td",[a("code",[t._v("&t=fit")])]),a("td",[a("router-link",{attrs:{to:"/docs/fit.html#inside"}},[a("code",[t._v("&fit=inside&we")])])],1)]),a("tr",[a("td",[a("code",[t._v("&t=fitup")])]),a("td",[a("router-link",{attrs:{to:"/docs/fit.html#inside"}},[a("code",[t._v("&fit=inside")])])],1)]),a("tr",[a("td",[a("code",[t._v("&t=square")])]),a("td",[a("router-link",{attrs:{to:"/docs/fit.html#cover"}},[a("code",[t._v("&fit=cover")])])],1)]),a("tr",[a("td",[a("code",[t._v("&t=squaredown")])]),a("td",[a("router-link",{attrs:{to:"/docs/fit.html#cover"}},[a("code",[t._v("&fit=cover&we")])])],1)]),a("tr",[a("td",[a("code",[t._v("&t=absolute")])]),a("td",[a("router-link",{attrs:{to:"/docs/fit.html#fill"}},[a("code",[t._v("&fit=fill")])])],1)]),a("tr",[a("td",[a("code",[t._v("&t=letterbox")])]),a("td",[a("router-link",{attrs:{to:"/docs/fit.html#contain"}},[a("code",[t._v("&fit=contain")])])],1)])])]),a("p",[t._v("The new without enlargement parameter ("),a("router-link",{attrs:{to:"/docs/fit.html#without-enlargement"}},[a("code",[t._v("&we")])]),t._v(") can be used in combination with all "),a("router-link",{attrs:{to:"/docs/fit.html"}},[a("code",[t._v("&fit=")])]),t._v("\nparameters. We also introduced a new parameter named "),a("router-link",{attrs:{to:"/docs/fit.html#outside"}},[a("code",[t._v("&fit=outside")])]),t._v(", which will resize an image to\nbe as small as possible while ensuring its dimensions are greater than or equal to both those specified.")],1),a("h2",{attrs:{id:"tinting-images"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tinting-images"}},[t._v("#")]),t._v(" Tinting images")]),a("p",[t._v("We introduced a new parameter named "),a("router-link",{attrs:{to:"/docs/adjustment.html#tint"}},[a("code",[t._v("&tint")])]),t._v(" to tint an image using the provided chroma\nwhile preserving the image luminance.")],1),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("//images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&w=300&tint=red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[a("a",{attrs:{href:"/?url=images.weserv.nl/lichtenstein.jpg&w=300&tint=red"}},[a("img",{attrs:{src:"/static/lichtenstein.jpg?w=300&tint=red",alt:"Tint"}})])]),a("h2",{attrs:{id:"arbitrary-rotation-angles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arbitrary-rotation-angles"}},[t._v("#")]),t._v(" Arbitrary rotation angles")]),a("p",[t._v("Instead of only being able to rotate multiples of 90 degrees, any angle can now be given. The remaining\nspace can be filled with a background color by using "),a("code",[t._v("&rbg=")]),t._v(". To reflect this change, the "),a("code",[t._v("&or=")]),t._v("\nparameter has been renamed to "),a("router-link",{attrs:{to:"/docs/orientation.html#rotation"}},[a("code",[t._v("&ro=")])]),t._v(".")],1),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("//images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&h=300&ro=45"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[a("a",{attrs:{href:"/?url=images.weserv.nl/lichtenstein.jpg&h=300&ro=45"}},[a("img",{attrs:{src:"/static/lichtenstein.jpg?h=300&ro=45",alt:"Rotation"}})])]),a("h2",{attrs:{id:"adaptive-filter-and-compression-level"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adaptive-filter-and-compression-level"}},[t._v("#")]),t._v(" Adaptive filter and compression level")]),a("p",[t._v("To minimize the size of PNG images and thus reduce their load time we've introduced some new\nparameters named "),a("router-link",{attrs:{to:"/docs/format.html#adaptive-filter"}},[a("code",[t._v("&af")])]),t._v(" and "),a("router-link",{attrs:{to:"/docs/format.html#compression-level"}},[a("code",[t._v("&l")])]),t._v(".")],1),a("h2",{attrs:{id:"metadata-output"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#metadata-output"}},[t._v("#")]),t._v(" Metadata output")]),a("p",[t._v("To quickly view the metadata of an image, we've added support for "),a("router-link",{attrs:{to:"/docs/format.html#output"}},[a("code",[t._v("&output=json")])]),t._v(".\nSee "),a("a",{attrs:{href:"/?url=images.weserv.nl/zebra.jpg&output=json"}},[t._v("here")]),t._v(" for an example.")],1),a("h2",{attrs:{id:"flip-flop-an-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flip-flop-an-image"}},[t._v("#")]),t._v(" Flip / flop an image")]),a("p",[t._v("We've added support for flipping an image "),a("router-link",{attrs:{to:"/docs/orientation.html#flop"}},[t._v("horizontally")]),t._v(" or "),a("router-link",{attrs:{to:"/docs/orientation.html#flip"}},[t._v("vertically")]),t._v(". You can combine these parameters\nto flip along both axes.")],1),a("h2",{attrs:{id:"json-for-error-messages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json-for-error-messages"}},[t._v("#")]),t._v(" JSON for error messages")]),a("p",[t._v("Instead of returning our error messages as plain text, you'll now receive a JSON-formatted response with\nthe appropriate "),a("code",[t._v("application/json")]),t._v(" MIME-type. This makes it easier to integrate our service into any\ntype of website or application.")]),a("h2",{attrs:{id:"other-improvements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-improvements"}},[t._v("#")]),t._v(" Other improvements")]),a("ul",[a("li",[t._v("Improve Docker image and deployment ("),a("a",{attrs:{href:"https://github.com/weserv/images/issues/180",target:"_blank",rel:"noopener noreferrer"}},[t._v("#180"),a("OutboundLink")],1),t._v(").")]),a("li",[t._v("A pre-resize crop behaviour ("),a("router-link",{attrs:{to:"/docs/crop.html#rectangle-crop"}},[a("code",[t._v("&precrop")])]),t._v(" - "),a("a",{attrs:{href:"https://github.com/weserv/images/issues/176",target:"_blank",rel:"noopener noreferrer"}},[t._v("#176"),a("OutboundLink")],1),t._v(").")],1),a("li",[t._v("Letterboxing without oversampling ("),a("router-link",{attrs:{to:"/docs/fit.html#without-enlargement"}},[a("code",[t._v("&fit=contain&we")])]),t._v(" - "),a("a",{attrs:{href:"https://github.com/weserv/images/issues/173",target:"_blank",rel:"noopener noreferrer"}},[t._v("#173"),a("OutboundLink")],1),t._v(").")],1),a("li",[t._v("Retrieving the largest/smallest page from a multi-resolution image ("),a("router-link",{attrs:{to:"/docs/format.html#page"}},[a("code",[t._v("&page=-1")])]),t._v(" /\n"),a("router-link",{attrs:{to:"/docs/format.html#page"}},[a("code",[t._v("&page=-2")])]),t._v(" - "),a("a",{attrs:{href:"https://github.com/weserv/images/issues/170",target:"_blank",rel:"noopener noreferrer"}},[t._v("#170"),a("OutboundLink")],1),t._v(").")],1),a("li",[t._v("Defining the "),a("code",[t._v("max-age")]),t._v(" of the "),a("code",[t._v("Cache-Control")]),t._v(" HTTP-header ("),a("router-link",{attrs:{to:"/docs/format.html#cache-control"}},[a("code",[t._v("&maxage=31d")])]),t._v(" - "),a("a",{attrs:{href:"https://github.com/weserv/images/issues/186",target:"_blank",rel:"noopener noreferrer"}},[t._v("#186"),a("OutboundLink")],1),t._v(").")],1),a("li",[t._v("Applying a duotone filter to an image ("),a("router-link",{attrs:{to:"/docs/adjustment.html#filter"}},[a("code",[t._v("&filt=duotone")])]),t._v(").")],1),a("li",[t._v("Background color when using "),a("code",[t._v("&fit=contain")]),t._v(" ("),a("router-link",{attrs:{to:"/docs/fit.html#contain"}},[a("code",[t._v("&cbg=")])]),t._v(").")],1),a("li",[a("code",[t._v("&a=crop-x%-y%")]),t._v(" has been renamed to "),a("router-link",{attrs:{to:"/docs/crop.html#focal-point"}},[a("code",[t._v("&a=focal-x%-y%")])]),t._v(".")],1),a("li",[a("code",[t._v("&errorredirect=")]),t._v(" has been renamed to "),a("router-link",{attrs:{to:"/docs/format.html#default-image"}},[a("code",[t._v("&default=")])]),t._v(".")],1)])])}),[],!1,null,null,null);e.default=s.exports}}]);