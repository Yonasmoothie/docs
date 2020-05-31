(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{493:function(e,t,a){"use strict";a.r(t);var s=a(34),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#format"}},[e._v("#")]),e._v(" Format")]),a("p",[e._v("Controls the output properties of the image.")]),a("h2",{attrs:{id:"adaptive-filter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adaptive-filter"}},[e._v("#")]),e._v(" Adaptive filter "),a("Parameter",{attrs:{text:"&af"}}),a("Badge",{attrs:{text:"New!",type:"warn",vertical:"middle"}})],1),a("p",[e._v("Use adaptive row filtering for reducing the PNG file size. This only works when the output image is "),a("code",[e._v("png")]),e._v(".")]),a("h2",{attrs:{id:"base64-data-url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#base64-data-url"}},[e._v("#")]),e._v(" Base64 (data URL) "),a("Parameter",{attrs:{text:"&encoding=base64",vertical:"middle"}})],1),a("p",[e._v("Encodes the image to be used directly in the src= of the "),a("code",[e._v("<img>")]),e._v("-tag.\nUse "),a("a",{attrs:{href:"/?url=images.weserv.nl/lichtenstein.jpg&crop=100,100,720,530&encoding=base64"}},[e._v("this link")]),e._v(" to see the output result.")]),a("p",[e._v("More info: "),a("a",{attrs:{href:"https://github.com/weserv/images/issues/59",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issue #59 - Return image base64 encoded"),a("OutboundLink")],1),e._v(".")]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("//images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&crop=100,100,720,530&encoding=base64\n")])])]),a("h2",{attrs:{id:"cache-control"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cache-control"}},[e._v("#")]),e._v(" Cache-Control "),a("Parameter",{attrs:{text:"&maxage=",vertical:"middle"}}),a("Badge",{attrs:{text:"New!",type:"warn",vertical:"middle"}})],1),a("p",[e._v("Defines for how long an image should be cached by the browser. This will change the "),a("code",[e._v("max-age")]),e._v(" of the\n"),a("code",[e._v("Cache-Control")]),e._v(" HTTP-header.")]),a("p",[e._v('We define a "far-future expiration" of 1 year by default. Valid durations that can be specified are:')]),a("ul",[a("li",[e._v("1 month (31 days)")]),a("li",[e._v("2 months")]),a("li",[e._v("3 months")]),a("li",[e._v("6 months")]),a("li",[e._v("1 year (365 days) - default")])]),a("p",[e._v("The duration can be specified in days and years, using the following suffixes:")]),a("ul",[a("li",[a("code",[e._v("d")]),e._v(": days")]),a("li",[a("code",[e._v("y")]),e._v(": years, 365 days")])]),a("p",[e._v("A value without a suffix means seconds. It is recommended to always specify a suffix.")]),a("p",[e._v("More info: "),a("a",{attrs:{href:"https://github.com/weserv/images/issues/186",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issue #186 - Increase Cache-Control: max-age= to 1 year instead of 1 month"),a("OutboundLink")],1),e._v(".")]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("//images.weserv.nl?url=images.weserv.nl/lichtenstein.jpg&w=100&maxage=31d\n")])])]),a("h2",{attrs:{id:"compression-level"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compression-level"}},[e._v("#")]),e._v(" Compression level "),a("Parameter",{attrs:{text:"&l="}}),a("Badge",{attrs:{text:"New!",type:"warn",vertical:"middle"}})],1),a("p",[e._v("The zlib compression level. Use a value between "),a("code",[e._v("0")]),e._v(" (no Deflate) and "),a("code",[e._v("9")]),e._v(" (maximum Deflate). The default\nvalue is "),a("code",[e._v("6")]),e._v(". This only works when the output image is "),a("code",[e._v("png")]),e._v(".")]),a("h2",{attrs:{id:"default-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#default-image"}},[e._v("#")]),e._v(" Default image "),a("Parameter",{attrs:{text:"&default="}})],1),a("p",[e._v("If there is a problem loading an image, then an error is shown. However, there might be a need where\ninstead of giving a broken image to the user, you want a default image to be delivered.")]),a("p",[e._v("More info: "),a("a",{attrs:{href:"https://github.com/weserv/images/issues/37",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issue #37 - Return default image if the image's URL not found"),a("OutboundLink")],1),e._v(".")]),a("p",[e._v("The URL must not include a "),a("code",[e._v("default")]),e._v(" querystring (if it does, it will be ignored).")]),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("img")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("//images.weserv.nl/?url=example.org/noimage.jpg&default=ssl:images.weserv.nl%2F%3Furl%3Dimages.weserv.nl/lichtenstein.jpg%26w%3D300"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n")])])]),a("p",[a("a",{attrs:{href:"/?url=example.org/noimage.jpg&default=ssl:images.weserv.nl%2F%3Furl%3Dimages.weserv.nl/lichtenstein.jpg%26w%3D300"}},[a("img",{attrs:{src:"/static/lichtenstein.jpg?w=300",alt:"Default image"}})])]),a("h2",{attrs:{id:"filename"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#filename"}},[e._v("#")]),e._v(" Filename "),a("Parameter",{attrs:{text:"&filename="}})],1),a("p",[e._v("To specify the filename returned in the "),a("code",[e._v("Content-Disposition")]),e._v(" header. The filename must only contain\nalphanumeric characters.")]),a("p",[e._v("More info: "),a("a",{attrs:{href:"https://github.com/weserv/images/issues/122",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issue #122 - Specify filename"),a("OutboundLink")],1),e._v(".")]),a("h2",{attrs:{id:"interlace-progressive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interlace-progressive"}},[e._v("#")]),e._v(" Interlace / progressive "),a("Parameter",{attrs:{text:"&il",vertical:"middle"}})],1),a("p",[e._v("Adds interlacing to GIF and PNG. JPEGs become progressive.")]),a("p",[e._v("More info: "),a("a",{attrs:{href:"https://github.com/weserv/images/issues/50",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issue #50 - Add parameter to use progressive JPEGs"),a("OutboundLink")],1),e._v(".")]),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("img")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("//images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&w=300&il"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n")])])]),a("p",[a("a",{attrs:{href:"/?url=images.weserv.nl/lichtenstein.jpg&w=300&il"}},[a("img",{attrs:{src:"/static/lichtenstein.jpg?w=300&il",alt:"Interlace / progressive"}})])]),a("h2",{attrs:{id:"number-of-pages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#number-of-pages"}},[e._v("#")]),e._v(" Number of pages "),a("Parameter",{attrs:{text:"&n="}}),a("Badge",{attrs:{text:"New!",type:"warn",vertical:"middle"}})],1),a("p",[e._v("To select the number of pages to render. The default value is "),a("code",[e._v("1")]),e._v(". Set to "),a("code",[e._v("-1")]),e._v(' to mean "until the end of\nthe document".')]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),a("p",[a("code",[e._v("-1")]),e._v(" will be useful if you need to resize an animated WebP or GIF image.")])]),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("img")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("//images.weserv.nl/?url=images.weserv.nl/banana.webp&h=300&output=gif&n=-1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n")])])]),a("p",[a("a",{attrs:{href:"/?url=images.weserv.nl/banana.webp&h=300&output=gif&n=-1"}},[a("img",{attrs:{src:"/static/banana.webp?h=300&output=gif&n=-1",alt:"Number of pages"}})])]),a("h2",{attrs:{id:"output"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output"}},[e._v("#")]),e._v(" Output "),a("Parameter",{attrs:{text:"&output=",vertical:"middle"}})],1),a("p",[e._v("Encodes the image to a specific format. Accepts "),a("code",[e._v("jpg")]),e._v(", "),a("code",[e._v("png")]),e._v(", "),a("code",[e._v("gif")]),e._v(", "),a("code",[e._v("tiff")]),e._v(", "),a("code",[e._v("webp")]),e._v(" or "),a("code",[e._v("json")]),e._v(". If none is\ngiven, it will honor the origin image format.")]),a("p",[e._v("More info: "),a("a",{attrs:{href:"https://github.com/weserv/images/issues/62",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issue #62 - Format conversion"),a("OutboundLink")],1),e._v(".")]),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("img")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("//images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&w=300&output=webp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n")])])]),a("p",[a("a",{attrs:{href:"/?url=images.weserv.nl/lichtenstein.jpg&w=300&output=webp"}},[a("img",{attrs:{src:"/static/lichtenstein.jpg?w=300&output=webp",alt:"Output"}})])]),a("h2",{attrs:{id:"page"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#page"}},[e._v("#")]),e._v(" Page "),a("Parameter",{attrs:{text:"&page="}})],1),a("p",[e._v("To load a given page (for an PDF, TIFF and multi-size ICO file). The value is numbered from zero. For a\nmulti-resolution image, you can use "),a("code",[e._v("-1")]),e._v(" to get the largest page and "),a("code",[e._v("-2")]),e._v(" to get the smallest page.")]),a("h2",{attrs:{id:"quality"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quality"}},[e._v("#")]),e._v(" Quality "),a("Parameter",{attrs:{text:"&q=",vertical:"middle"}})],1),a("p",[e._v("Defines the quality of the image. Use values between "),a("code",[e._v("0")]),e._v(" and "),a("code",[e._v("100")]),e._v(". Defaults to "),a("code",[e._v("85")]),e._v(". This only works\nwhen the output image is "),a("code",[e._v("jpg")]),e._v(", "),a("code",[e._v("tiff")]),e._v(" or "),a("code",[e._v("webp")]),e._v(".")]),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("img")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("//images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&w=300&q=20"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n")])])]),a("p",[a("a",{attrs:{href:"/?url=images.weserv.nl/lichtenstein.jpg&w=300&q=20"}},[a("img",{attrs:{src:"/static/lichtenstein.jpg?w=300&q=20",alt:"Quality"}})])])])}),[],!1,null,null,null);t.default=r.exports}}]);