(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{100:function(t,a,e){"use strict";var s={name:"Credits"},n=(e(107),e(4)),i=Object(n.a)(s,function(){var t=this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"credits"},[e("span",[t._v("Design inspired by "),e("a",{attrs:{href:"https://getgrav.org/"}},[t._v("Grav")])]),e("div",[e("a",{attrs:{href:"https://github.com/weserv/images/blob/5.x/Privacy-Policy.md"}},[t._v("Privacy Policy")]),e("a",{attrs:{href:"https://github.com/weserv/images/blob/5.x/CHANGELOG.md"}},[t._v("Changelog")])]),e("br"),e("a",{attrs:{href:"https://images.weserv.nl/"}},[t._v("Images.weserv.nl")]),t._v(" was "),e("i",{staticClass:"fa fa-code"}),t._v(" with "),e("i",{staticClass:"fa fa-heart-o pulse"}),t._v(" by "),e("a",{attrs:{href:"https://github.com/weserv/images/graphs/contributors"}},[t._v("our contributors")]),t._v(".\n")])}],!1,null,null,null);a.a=i.exports},102:function(t,a,e){"use strict";var s={computed:{$pagination:function(){return this.$getPagination("news")}},filters:{formatDate:function(t){return t?new Date(t).toDateString():""}}},n=(e(106),e(4)),i=Object(n.a)(s,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"news"},[t._m(0),e("ul",t._l(t.$pagination.pages,function(a,s){return e("li",{key:s,staticClass:"item"},[e("span",{staticClass:"item-date"},[t._v(t._s(t._f("formatDate")(a.frontmatter.date)))]),e("h3",{staticClass:"item-title"},[e("router-link",{attrs:{title:a.title,to:a.path}},[t._v("\n          "+t._s(a.title)+"\n        ")])],1),a.frontmatter.summary?e("p",{staticClass:"item-summary"},[t._v("\n        "+t._s(a.frontmatter.summary)+"\n      ")]):t._e()])}),0),t.$pagination.hasPrev||t.$pagination.hasNext?e("div",{staticClass:"page-nav"},[e("p",{staticClass:"inner"},[t.$pagination.hasPrev?e("span",{staticClass:"prev"},[t._v("\n        ←\n        "),t.$pagination.hasPrev?e("router-link",{staticClass:"prev",attrs:{to:t.$pagination.prevLink}},[t._v("\n          Prev\n        ")]):t._e()],1):t._e(),t.$pagination.hasNext?e("span",{staticClass:"next"},[t.$pagination.hasNext?e("router-link",{attrs:{to:t.$pagination.nextLink}},[t._v("\n          Next\n        ")]):t._e(),t._v("\n        →\n      ")],1):t._e()])]):t._e()])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"news"}},[a("a",{staticClass:"header-anchor",attrs:{href:"/news","aria-hidden":"true"}},[this._v("#")]),this._v(" News")])}],!1,null,null,null);a.a=i.exports},106:function(t,a,e){"use strict";var s=e(94);e.n(s).a},107:function(t,a,e){"use strict";var s=e(95);e.n(s).a},108:function(t,a,e){"use strict";var s=e(96);e.n(s).a},121:function(t,a,e){"use strict";var s=e(97);e.n(s).a},132:function(t,a,e){"use strict";var s={extends:e(161).a},n=(e(121),e(4)),i=Object(n.a)(s,function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.userLinks.length||t.repoLink?e("nav",{staticClass:"nav-links"},[t._l(t.userLinks,function(t){return e("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?e("DropdownLink",{attrs:{item:t}}):e("NavLink",{attrs:{item:t}})],1)}),t.repoLink?e("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),e("OutboundLink")],1):t._e(),t.repoLink?e("a",{staticClass:"github-corner",attrs:{href:t.repoLink,title:t.repoLabel,"aria-label":t.repoLabel,target:"_blank",rel:"noopener noreferrer"}},[e("svg",{staticStyle:{position:"fixed",top:"0",border:"0",right:"0"},attrs:{width:"57",height:"57",viewBox:"0 0 250 250","aria-hidden":"true"}},[e("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z",fill:"#a72376"}}),e("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"#fff"}}),e("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"#fff"}})])]):t._e()],2):t._e()},[],!1,null,null,null);a.a=i.exports},166:function(t,a,e){"use strict";var s=e(164),n=e(102),i=e(100),r={extends:s.a,components:{NewsList:n.a,Credits:i.a}},o=(e(108),e(4)),l=Object(o.a)(r,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[e("header",{staticClass:"hero"},[t.data.heroImage?e("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t.data.heroText?e("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.heroText))]):t._e(),t.data.tagline?e("h2",{staticClass:"description"},[t._v(t._s(t.data.tagline))]):t._e(),t.data.description?e("h2",{staticClass:"description"},[t._v(t._s(t.data.description))]):t._e(),t.data.actionText&&t.data.actionLink?e("p",{staticClass:"action"},[e("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),e("Content",{staticClass:"theme-default-content custom"}),e("NewsList"),e("div",{staticClass:"footer"},[e("Credits")],1)],1)},[],!1,null,null,null);a.a=l.exports},239:function(t,a,e){"use strict";e.r(a);var s=e(160),n=e(102),i=e(100),r={extends:s.a,components:{NewsList:n.a,Credits:i.a}},o=e(4),l=Object(o.a)(r,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?e("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),e("div",{staticClass:"sidebar-mask",on:{click:function(a){return t.toggleSidebar(!1)}}}),e("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._t("sidebar-bottom",null,{slot:"bottom"})],2),e("NewsList",{staticClass:"theme-default-content"}),e("Credits")],1)},[],!1,null,null,null);a.default=l.exports},94:function(t,a,e){},95:function(t,a,e){},96:function(t,a,e){},97:function(t,a,e){}}]);