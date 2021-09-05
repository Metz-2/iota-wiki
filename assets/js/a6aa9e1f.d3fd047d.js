"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[3089,9514],{52935:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(67294),r=a(6832),l=a(18607),i=a(91891),o=a(51384),c=a(54416);var s=function(e){var t=e.metadata,a=t.previousPage,r=t.nextPage;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,c.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(o.Z,{className:"pagination-nav__link",to:a},n.createElement("div",{className:"pagination-nav__label"},"\xab"," ",n.createElement(c.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},r&&n.createElement(o.Z,{className:"pagination-nav__link",to:r},n.createElement("div",{className:"pagination-nav__label"},n.createElement(c.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},m=a(19257);var u=function(e){var t=e.metadata,a=e.items,o=e.sidebar,c=(0,r.Z)().siteConfig.title,u=t.blogDescription,d=t.blogTitle,v="/"===t.permalink?c:d;return n.createElement(l.Z,{title:v,description:u,wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"},sidebar:o},a.map((function(e){var t=e.content;return n.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},n.createElement(t,null))})),n.createElement(s,{metadata:t}))}},91891:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(67294),r=a(86010),l=a(3905),i=a(54416),o=a(51384),c=a(51402),s=a(19257),m=a(83949),u=a(30513),d="blogPostTitle_nmLu",v="blogPostData_3WzT",g="blogPostDetailsFull_3bEF",f="blogPostDataContainer_1pWc",p=a(21192),b=a(16509);var h=function(e){var t,a,h,E,_=(h=(0,s.c2)().selectMessage,function(e){var t=Math.ceil(e);return h(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),k=(0,c.C)().withBaseUrl,N=e.children,w=e.frontMatter,Z=e.assets,y=e.metadata,C=e.truncated,D=e.isBlogPostPage,I=void 0!==D&&D,x=y.date,T=y.formattedDate,B=y.permalink,P=y.tags,S=y.readingTime,L=y.title,U=y.editUrl,A=y.authors,R=null!=(t=Z.image)?t:w.image;return n.createElement("article",{className:I?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(E=I?"h1":"h2",n.createElement("header",null,n.createElement(E,{className:d,itemProp:"headline"},I?L:n.createElement(o.Z,{itemProp:"url",to:B},L)),n.createElement("div",{className:"row row--no-gutters"},n.createElement("div",{className:"col"},n.createElement(b.Z,{authors:A,assets:Z})),n.createElement("div",{className:(0,r.Z)(v,"margin-vert--md","col")},n.createElement("div",{className:f},n.createElement("time",{dateTime:x,itemProp:"datePublished"},T),void 0!==S&&n.createElement(n.Fragment,null," \xb7 ",_(S))))))),R&&n.createElement("meta",{itemProp:"image",content:k(R,{absolute:!0})}),n.createElement("div",{className:"markdown",itemProp:"articleBody"},n.createElement(l.Zo,{components:m.Z},N)),(P.length>0||C)&&n.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",(a={},a[g]=I,a))},P.length>0&&n.createElement("div",{className:(0,r.Z)("col",{"col--9":!I})},n.createElement(p.Z,{tags:P})),I&&U&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(u.Z,{editUrl:U})),!I&&C&&n.createElement("div",{className:"col col--3 text--right"},n.createElement(o.Z,{to:y.permalink,"aria-label":"Read more about "+L},n.createElement("b",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},30513:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(67294),r=a(54416),l=a(23779),i=a(15987);function o(e){var t=e.editUrl,a=function(e){var t=new RegExp("external/[^/]*/","i");return e.replace(t,"")}(t);return n.createElement(n.Fragment,null,function(e){return new RegExp("external/[^/]*/","i").test(e)}(t)?n.createElement("a",{href:a,target:"_blank",rel:"noreferrer noopener"},n.createElement(l.Z,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page")):n.createElement(i.Z,{editUrl:t}))}},91148:function(e,t,a){a.d(t,{Z:function(){return k}});var n=a(22122),r=a(19756),l=a(67294),i=a(86010),o=a(51384),c=a(19257),s=a(51402),m=a(34455),u="socialBar_2nY3",d="socialLink_1As6",v="socialImage_2plZ",g="socialTitle_3JEm",f=[{title:"Youtube",imageUrl:"/img/youtube.svg",url:"https://www.youtube.com/c/iotafoundation",backgroundColor:"var(--ifm-color-gray-900)"},{title:"GitHub",imageUrl:"/img/github.svg",url:"https://www.github.com/iotaledger/",backgroundColor:"#2C3850"},{title:"Discord",imageUrl:"/img/discord.svg",url:"https://discord.iota.org/",backgroundColor:"#4B576F"},{title:"Twitter",imageUrl:"/img/twitter.svg",url:"https://www.twitter.com/iota/",backgroundColor:"#6A768E"},{title:"Reddit",imageUrl:"/img/reddit.svg",url:"https://www.reddit.com/r/iota/",backgroundColor:"#7D89A1"},{title:"Linkedin",imageUrl:"/img/linkedin.svg",url:"https://www.linkedin.com/company/iotafoundation/",backgroundColor:"#8995AD"},{title:"Instagram",imageUrl:"/img/instagram.svg",url:"https://www.instagram.com/iotafoundation/",backgroundColor:"#99A5BD"},{title:"Facebook",imageUrl:"/img/facebook.svg",url:"https://www.facebook.com/TheIOTAFoundation/",backgroundColor:"#BAC6DE"}];function p(e){var t=e.title,a=e.imageUrl,n=e.url,r=e.backgroundColor;return l.createElement("a",{className:(0,i.Z)("padding-horiz--sm padding-vert--md",d),style:{backgroundColor:r},href:n},l.createElement("img",{className:(0,i.Z)(v),src:(0,s.Z)(a)}),l.createElement("div",{className:(0,i.Z)(g)},t))}var b=function(){return l.createElement("div",{className:(0,i.Z)(u)},f.map((function(e,t){return l.createElement(p,(0,n.Z)({key:t},e))})))},h=["to","href","label","prependBaseUrlToHref"];function E(e){var t=e.to,a=e.href,i=e.label,c=e.prependBaseUrlToHref,m=(0,r.Z)(e,h),u=(0,s.Z)(t),d=(0,s.Z)(a,{forcePrependBaseUrl:!0});return l.createElement(o.Z,(0,n.Z)({className:"footer__link-item"},a?{href:c?d:a}:{to:u},m),i)}var _=function(e){var t=e.sources,a=e.alt;return l.createElement(m.Z,{className:"footer__logo",alt:a,sources:t})};var k=function(){var e=(0,c.LU)().footer,t=e||{},a=t.copyright,n=t.links,r=void 0===n?[]:n,m=t.logo,u=void 0===m?{}:m,d={light:(0,s.Z)(u.src),dark:(0,s.Z)(u.srcDark||u.src)};return e?l.createElement(l.Fragment,null,l.createElement("footer",{className:(0,i.Z)("footer","padding--none","padding-top--xl",{"footer--dark":"dark"===e.style})},l.createElement("div",{className:"footer-container"},r&&r.length>0&&l.createElement("div",{className:"row footer__links padding-top--lg padding-bottom--xl"},r.map((function(e,t){return l.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?l.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):l.createElement("li",{key:e.href||e.to,className:"footer__item"},l.createElement(E,e))}))):null)}))),(u||a)&&l.createElement("div",{className:"footer__bottom padding-top--xl padding-bottom--lg"},u&&(u.src||u.srcDark)&&l.createElement("div",null,u.href?l.createElement(o.Z,{href:u.href},l.createElement(_,{alt:u.alt,sources:d})):l.createElement(_,{alt:u.alt,sources:d})),a?l.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:a}}):null)),l.createElement(b,null))):null}},65660:function(e,t,a){a.d(t,{Z:function(){return x}});var n=a(22122),r=a(67294),l=a(86010),i=a(54416),o=a(78239),c=a(19257),s=a(5730),m={toggle:"toggle_3D-N"},u=function(e){var t=e.icon,a=e.style;return r.createElement("span",{className:(0,l.Z)(m.toggle,m.dark),style:a},t)},d=function(e){var t=e.icon,a=e.style;return r.createElement("span",{className:(0,l.Z)(m.toggle,m.light),style:a},t)},v=(0,r.memo)((function(e){var t=e.className,a=e.icons,n=e.checked,i=e.disabled,o=e.onChange,c=(0,r.useState)(n),s=c[0],m=c[1],u=(0,r.useState)(!1),d=u[0],v=u[1],g=(0,r.useRef)(null);return r.createElement("div",{className:(0,l.Z)("react-toggle",t,{"react-toggle--checked":s,"react-toggle--focus":d,"react-toggle--disabled":i})},r.createElement("div",{className:"react-toggle-track",role:"button",tabIndex:-1,onClick:function(){var e;return null==(e=g.current)?void 0:e.click()}},r.createElement("div",{className:"react-toggle-track-check"},a.checked),r.createElement("div",{className:"react-toggle-track-x"},a.unchecked),r.createElement("div",{className:"react-toggle-thumb"})),r.createElement("input",{ref:g,checked:s,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:o,onClick:function(){return m(!s)},onFocus:function(){return v(!0)},onBlur:function(){return v(!1)},onKeyDown:function(e){var t;"Enter"===e.key&&(null==(t=g.current)||t.click())}}))}));function g(e){var t=(0,c.LU)().colorMode.switchConfig,a=t.darkIcon,l=t.darkIconStyle,i=t.lightIcon,o=t.lightIconStyle,m=(0,s.Z)();return r.createElement(v,(0,n.Z)({disabled:!m,icons:{checked:r.createElement(u,{icon:a,style:l}),unchecked:r.createElement(d,{icon:i,style:o})}},e))}var f=a(26266),p=a(98565),b=a(74909),h=a(27213),E=a(64090),_=a(90974),k=a(3089),N="toggle_2xs0",w="navbarHideable_1VR7",Z="navbarHidden_1FmO",y="right";function C(){return(0,c.LU)().navbar.items}function D(){var e=(0,c.LU)().colorMode.disableSwitch,t=(0,f.Z)(),a=t.isDarkTheme,n=t.setLightTheme,l=t.setDarkTheme;return{isDarkTheme:a,toggle:(0,r.useCallback)((function(e){return e.target.checked?l():n()}),[n,l]),disabled:e}}function I(e){var t=e.sidebarShown,a=e.toggleSidebar;(0,b.Z)(t);var o=C(),s=D(),m=function(e){var t,a=e.sidebarShown,n=e.toggleSidebar,l=null==(t=(0,c.g8)())?void 0:t({toggleSidebar:n}),i=(0,c.D9)(l),o=(0,r.useState)((function(){return!1})),s=o[0],m=o[1];(0,r.useEffect)((function(){l&&!i&&m(!0)}),[l,i]);var u=!!l;return(0,r.useEffect)((function(){u?a||m(!0):m(!1)}),[a,u]),{shown:s,hide:(0,r.useCallback)((function(){m(!1)}),[]),content:l}}({sidebarShown:t,toggleSidebar:a});return r.createElement("div",{className:"navbar-sidebar"},r.createElement("div",{className:"navbar-sidebar__brand"},r.createElement(_.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!s.disabled&&t&&r.createElement(g,{checked:s.isDarkTheme,onChange:s.toggle})),r.createElement("div",{className:(0,l.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":m.shown})},r.createElement("div",{className:"navbar-sidebar__item menu"},r.createElement("ul",{className:"menu__list"},o.map((function(e,t){return r.createElement(E.Z,(0,n.Z)({mobile:!0},e,{onClick:a,key:t}))})))),r.createElement("div",{className:"navbar-sidebar__item navbar-sidebar__item--secondary menu"},r.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:m.hide},r.createElement(i.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),m.content)))}var x=function(){var e,t,a,i,s,m,u,d=(0,c.LU)().navbar,v=d.hideOnScroll,f=d.style,b=(t=(0,h.Z)(),a="mobile"===t,i=(0,r.useState)(!1),s=i[0],m=i[1],u=(0,r.useCallback)((function(){m((function(e){return!e}))}),[]),(0,r.useEffect)((function(){"desktop"===t&&m(!1)}),[t]),{shouldRender:a,toggle:u,shown:s}),x=D(),T=(0,p.Z)(v),B=T.navbarRef,P=T.isNavbarVisible,S=C(),L=S.some((function(e){return"search"===e.type})),U=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:y)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:y)}))}}(S),A=U.leftItems,R=U.rightItems;return r.createElement("nav",{ref:B,className:(0,l.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===f,"navbar--primary":"primary"===f,"navbar-sidebar--show":b.shown},e[w]=v,e[Z]=v&&!P,e))},r.createElement("div",{className:"navbar__inner"},r.createElement("div",{className:"navbar__items"},r.createElement(_.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),A.map((function(e,t){return r.createElement(E.Z,(0,n.Z)({},e,{key:t}))}))),r.createElement("div",{className:"navbar__items navbar__items--right"},R.map((function(e,t){return r.createElement(E.Z,(0,n.Z)({},e,{key:t}))})),!L&&r.createElement(o.Z,null),!x.disabled&&r.createElement(g,{className:N,checked:x.isDarkTheme,onChange:x.toggle}),(null==S?void 0:S.length)>0&&r.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:b.toggle,onKeyDown:b.toggle},r.createElement(k.Z,null)))),r.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:b.toggle}),b.shouldRender&&r.createElement(I,{sidebarShown:b.shown,toggleSidebar:b.toggle}))}},78358:function(e,t,a){a.d(t,{O:function(){return f}});var n=a(22122),r=a(19756),l=a(67294),i=a(86010),o=a(51384),c=a(51402),s=a(78168),m=a(71699),u=["activeBasePath","activeBaseRegex","to","href","label","sublabel","icon","activeClassName","prependBaseUrlToHref"],d=["className","isDropdownItem"],v=["className","isDropdownItem"],g=["mobile","position"];function f(e){var t=e.activeBasePath,a=e.activeBaseRegex,i=e.to,d=e.href,v=e.label,g=e.sublabel,f=e.icon,p=e.activeClassName,b=void 0===p?"navbar__link--active":p,h=e.prependBaseUrlToHref,E=(0,r.Z)(e,u),_=(0,c.Z)(i),k=(0,c.Z)(t),N=(0,c.Z)(d,{forcePrependBaseUrl:!0}),w=v&&d&&!(0,m.Z)(d),Z="dropdown__link--active"===b;return l.createElement(o.Z,(0,n.Z)({},d?{href:h?N:d}:Object.assign({isNavLink:!0,activeClassName:b,to:_},t||a?{isActive:function(e,t){return a?new RegExp(a).test(t.pathname):t.pathname.startsWith(k)}}:null),E),l.createElement("div",{className:"link"},f&&l.createElement("div",{className:"link__icon"},f),l.createElement("div",{className:"link__body"},l.createElement("div",{className:"link__label"},w?l.createElement("span",null,v,l.createElement(s.Z,Z&&{width:12,height:12})):v),g&&l.createElement("div",{className:"link__sublabel"},g))))}function p(e){var t=e.className,a=e.isDropdownItem,o=void 0!==a&&a,c=(0,r.Z)(e,d),s=l.createElement(f,(0,n.Z)({className:(0,i.Z)(o?"dropdown__link":"navbar__item navbar__link",t)},c));return o?l.createElement("li",null,s):s}function b(e){var t=e.className,a=(e.isDropdownItem,(0,r.Z)(e,v));return l.createElement("li",{className:"menu__list-item"},l.createElement(f,(0,n.Z)({className:(0,i.Z)("menu__link",t)},a)))}t.Z=function(e){var t=e.mobile,a=void 0!==t&&t,n=(e.position,(0,r.Z)(e,g));if("category-header"===n.to){return l.createElement("li",{style:{fontSize:"10px",color:"var(--ifm-color-emphasis-600)",paddingTop:"10px"}},n.label)}var i=a?b:p;return l.createElement(i,n)}},16679:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(22122),r=a(19756),l=a(67294),i=a(78358),o=a(57617),c=a(86010),s=a(19257),m=a(79861),u=["docId","activeSidebarClassName","label","docsPluginId"];function d(e){var t,a=e.docId,d=e.activeSidebarClassName,v=e.label,g=e.docsPluginId,f=(0,r.Z)(e,u),p=(0,o.useActiveDocContext)(g),b=p.activeVersion,h=p.activeDoc,E=(0,s.J)(g).preferredVersion,_=(0,o.useLatestVersion)(g),k=function(e,t){var a=e.flatMap((function(e){return e.docs})),n=a.find((function(e){return e.id===t}));if(!n){var r=a.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id \""+t+'" in version'+(e.length?"s":"")+" "+e.map((function(e){return e.name})).join(", ")+'".\nAvailable doc ids are:\n- '+r)}return n}((0,m.uniq)([b,E,_].filter(Boolean)),a);return l.createElement(i.Z,(0,n.Z)({exact:!0},f,{className:(0,c.Z)(f.className,(t={},t[d]=h&&h.sidebar===k.sidebar,t)),label:null!=v?v:k.id,to:k.path}))}},68510:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(22122),r=a(19756),l=a(67294),i=a(78358),o=a(61142),c=a(57617),s=a(19257),m=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],u=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function d(e){var t,a,d=e.mobile,v=e.docsPluginId,g=e.dropdownActiveClassDisabled,f=e.dropdownItemsBefore,p=e.dropdownItemsAfter,b=(0,r.Z)(e,m),h=(0,c.useActiveDocContext)(v),E=(0,c.useVersions)(v),_=(0,c.useLatestVersion)(v),k=(0,s.J)(v),N=k.preferredVersion,w=k.savePreferredVersionName;var Z,y=(Z=E.map((function(e){var t=(null==h?void 0:h.alternateDocVersions[e.name])||u(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==h?void 0:h.activeVersion)},onClick:function(){w(e.name)}}})),[].concat(f,Z,p)),C=null!=(t=null!=(a=h.activeVersion)?a:N)?t:_,D=d&&y?"Versions":C.label,I=d&&y?void 0:u(C).path;return y.length<=1?l.createElement(i.Z,(0,n.Z)({},b,{mobile:d,label:D,to:I,isActive:g?function(){return!1}:void 0})):l.createElement(o.Z,(0,n.Z)({},b,{mobile:d,label:D,to:I,items:y,isActive:g?function(){return!1}:void 0}))}},18384:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(22122),r=a(19756),l=a(67294),i=a(78358),o=a(57617),c=a(19257),s=["label","to","docsPluginId"];function m(e){var t,a=e.label,m=e.to,u=e.docsPluginId,d=(0,r.Z)(e,s),v=(0,o.useActiveVersion)(u),g=(0,c.J)(u).preferredVersion,f=(0,o.useLatestVersion)(u),p=null!=(t=null!=v?v:g)?t:f,b=null!=a?a:p.label,h=null!=m?m:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(p).path;return l.createElement(i.Z,(0,n.Z)({},d,{label:b,to:h}))}},61142:function(e,t,a){var n=a(22122),r=a(19756),l=a(67294),i=a(86010),o=a(19257),c=a(78358),s=a(64090),m=["items","position","className"],u=["items","className","position"],d=["mobile","isDropdownItem"];function v(e,t){return!!(0,o.Mg)(e.to,t)||(!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath)))}function g(e){var t,a=e.items,u=e.position,d=e.className,g=(0,r.Z)(e,m),f=(0,l.useRef)(null),p=(0,l.useRef)(null),b=(0,l.useState)(!1),h=b[0],E=b[1],_=function(e,t,a){var n=t.filter((function(e){return v(e,(0,o.be)())})),r=e;return n.length&&(r=Object.assign({},n[0],{label:e.label+" > "+n[0].label})),r}(g,a,(0,o.be)());return(0,l.useEffect)((function(){var e=function(e){f.current&&!f.current.contains(e.target)&&E(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[f]),l.createElement("div",{ref:f,className:(0,i.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===u,"dropdown--show":h})},l.createElement(c.O,(0,n.Z)({className:(0,i.Z)("navbar__item navbar__link",d)},_,{onClick:g.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),E(!h))}}),null!=(t=g.children)?t:g.label),l.createElement("ul",{ref:p,className:"dropdown__menu"},a.map((function(e,t){return l.createElement(s.Z,(0,n.Z)({isDropdownItem:!0,onKeyDown:function(e){if(t===a.length-1&&"Tab"===e.key){e.preventDefault(),E(!1);var n=f.current.nextElementSibling;n&&n.focus()}},activeClassName:"dropdown__link--active"},e,{key:t}))}))))}function f(e){var t,a=e.items,m=e.className,d=(e.position,(0,r.Z)(e,u)),g=(0,o.be)(),f=function(e,t){return e.some((function(e){return v(e,t)}))}(a,g),p=(0,o.uR)({initialState:function(){return!f}}),b=p.collapsed,h=p.toggleCollapsed,E=p.setCollapsed;return(0,l.useEffect)((function(){f&&E(!f)}),[g,f]),l.createElement("li",{className:(0,i.Z)("menu__list-item",{"menu__list-item--collapsed":b})},l.createElement(c.O,(0,n.Z)({role:"button",className:(0,i.Z)("menu__link menu__link--sublist",m)},d,{onClick:function(e){e.preventDefault(),h()}}),null!=(t=d.children)?t:d.label),l.createElement(o.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:b},a.map((function(e,t){return l.createElement(s.Z,(0,n.Z)({mobile:!0,isDropdownItem:!0,onClick:d.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}t.Z=function(e){var t=e.mobile,a=void 0!==t&&t,n=(e.isDropdownItem,(0,r.Z)(e,d)),i=a?f:g;return l.createElement(i,n)}},64090:function(e,t,a){a.d(t,{Z:function(){return x}});var n=a(19756),r=a(67294),l=a(78358),i=a(61142),o=a(22122),c=a(86010),s=a(19257),m=["items","label","className"],u=["className"],d=["items_","layout","position","className"],v=["items_","className","position","layout"],g=["mobile"];function f(e,t){return e.some((function(e){e.items?f(e.items,t):function(e,t){!!(0,s.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||(!e.activeBasePath||t.startsWith(e.activeBasePath))}(e,t)}))}function p(e){var t,a=e.items,r=e.label,l=e.className,i=(0,n.Z)(e,m),o={items:[],index:0};a?(r&&o.items.push({label:r,className:l}),(t=o.items).push.apply(t,a)):o.items.push(Object.assign({label:r,className:l},i));return o}function b(e){var t=e.className,a=(0,n.Z)(e,u);if(a.to||a.href)return r.createElement(l.O,(0,o.Z)({className:(0,c.Z)("dropdown__link",t),activeClassName:"dropdown__link--active"},a));if(a.label)return r.createElement("div",{className:"mega-dropdown__label"},a.label);throw"Mega dropdown item must be a link or a category header."}function h(e){var t,a=e.items_,i=e.layout,m=e.position,u=e.className,v=(0,n.Z)(e,d),g=f(a,(0,s.be)()),h=(0,r.useRef)(null),E=(0,r.useState)(!1),_=E[0],k=E[1],N=a.map(p),w=i.length,Z=Math.max.apply(Math,i.map((function(e){return e.split(/\s+/).length}))),y=[];i.forEach((function(e,t){e.split(/\s+/).forEach((function(e,a){e&&"."!==e&&(y[t+a*w]=e)}))}));for(var C=y.map((function(e){var t,a=N[e];if(a)return null!=(t=a.items[a.index++])?t:null})),D=[],I=null,x=0;x<w;x++){for(var T=[],B=0;B<Z;B++){var P=C[x+B*w];T.push(P),P&&(I=P)}D.push(T)}return I.onKeyDown=function(e){"Tab"===e.key&&k(!1)},(0,r.useEffect)((function(){var e=function(e){h.current&&!h.current.contains(e.target)&&k(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[h]),r.createElement(r.Fragment,null,r.createElement("div",{ref:h,className:(0,c.Z)("navbar__item","dropdown",{"dropdown--right":"right"===m}),onMouseEnter:function(){return k(!0)},onMouseLeave:function(){return k(!1)}},r.createElement(l.O,(0,o.Z)({className:(0,c.Z)("navbar__item navbar__link",{"navbar__link--active":g},u)},v,{onClick:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),k(!_))}}),null!=(t=v.children)?t:v.label)),r.createElement("div",{className:(0,c.Z)("mega-dropdown__container",{"mega-dropdown__container--show":_})},r.createElement("div",{className:"mega-dropdown__menu"},r.createElement("div",{className:"mega-dropdown__grid"},D.map((function(e,t){return r.createElement("div",{className:"row row--no-gutters mega-dropdown__row",key:t},e.map((function(e,t){return r.createElement("div",{className:"col margin-horiz--xs mega-dropdown__col",key:t},e?r.createElement(b,e):null)})))}))))))}function E(e){var t,a=e.items_,i=e.className,m=(e.position,e.layout,(0,n.Z)(e,v)),u=(0,s.be)(),d=f(a,u),g=(0,s.uR)({initialState:function(){return!d}}),p=g.collapsed,b=g.toggleCollapsed,h=g.setCollapsed;return(0,r.useEffect)((function(){d&&h(!d)}),[u,d]),r.createElement("li",{className:(0,c.Z)("menu__list-item",{"menu__list-item--collapsed":p})},r.createElement(l.O,(0,o.Z)({role:"button",className:(0,c.Z)("menu__link menu__link--sublist",i)},m,{onClick:function(e){e.preventDefault(),b()}}),null!=(t=m.children)?t:m.label),r.createElement(s.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:p},a.map((function(e,t){return r.createElement(x,(0,o.Z)({mobile:!0,isDropdownItem:!0,onClick:m.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}var _=function(e){var t=e.mobile,a=void 0!==t&&t,l=(0,n.Z)(e,g),i=a?E:h;return r.createElement(i,l)},k=a(4194),N=a(6832),w=["mobile","dropdownItemsBefore","dropdownItemsAfter"];function Z(e){var t=e.mobile,a=e.dropdownItemsBefore,l=e.dropdownItemsAfter,c=(0,n.Z)(e,w),m=(0,N.Z)().i18n,u=m.currentLocale,d=m.locales,v=m.localeConfigs,g=(0,s.l5)();function f(e){return v[e].label}var p=d.map((function(e){var t="pathname://"+g.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:f(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===u?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),b=[].concat(a,p,l),h=t?"Languages":f(u);return r.createElement(i.Z,(0,o.Z)({},c,{href:"#",mobile:t,label:r.createElement("span",null,r.createElement(k.Z,{style:{verticalAlign:"text-bottom",marginRight:5}}),r.createElement("span",null,h)),items:b}))}var y=a(78239);function C(e){return e.mobile?null:r.createElement(y.Z,null)}var D=["type"],I={default:function(){return l.Z},localeDropdown:function(){return Z},search:function(){return C},dropdown:function(){return i.Z},megaDropdown:function(){return _},docsVersion:function(){return a(18384).Z},docsVersionDropdown:function(){return a(68510).Z},doc:function(){return a(16679).Z}};function x(e){var t=e.type,a=(0,n.Z)(e,D),l=function(e){var t=I[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(function(e,t,a){return a?"megaDropdown":e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==a.items,void 0!==a.layout));return r.createElement(l,a)}},78239:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(67294),r=a(19257),l=a(86010),i="toggle_10iL",o=(0,n.memo)((function(){var e=(0,r.LU)().searchMode.switchConfig,t=e.closeIcon,a=e.closeIconStyle,o=e.searchIcon,c=e.searchIconStyle,s=(0,n.useState)(!1),m=s[0],u=s[1],d=(0,n.useRef)(null),v=function(e){var t=d.current;if(t)return e.target!==t?(e.preventDefault(),t.focus(),void t.click()):void u(null==t?void 0:t.checked)};return n.createElement(n.Fragment,null,n.createElement("div",{className:(0,l.Z)("wiki-search",{"wiki-search--checked":m}),role:"button",tabIndex:-1,onClick:v},n.createElement("div",{className:"wiki-search-opened"},n.createElement("span",{className:(0,l.Z)(i),style:a},t)),n.createElement("div",{className:"wiki-search-closed"},n.createElement("span",{className:(0,l.Z)(i),style:c},o)),n.createElement("input",{ref:d,checked:m,type:"checkbox",className:"wiki-search-screenreader-only","aria-label":"Open and close search",onChange:v})),n.createElement("div",{className:(0,l.Z)("wiki-search-page",{"wiki-search-page--checked":m})},n.createElement("div",{className:"wiki-search-header"}),n.createElement("div",{className:"wiki-search-main"},n.createElement("div",{className:"wiki-search-bar"},n.createElement("div",{className:"wiki-search-logo"},n.createElement("span",{className:(0,l.Z)(i),style:c},o)),n.createElement("input",{className:"wiki-search-input",type:"text"})))))}))}}]);