(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{139:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(c,".").concat(d)]||p[d]||y[d]||o;return n?a.a.createElement(f,l(l({ref:t},s),{},{components:n})):a.a.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},147:function(e,t,n){"use strict";t.a={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]}},148:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var r=n(20),a={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},o=n(0),c={Prism:r.a,theme:a};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var s=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},y=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=i({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=i({},n,{backgroundColor:null}),a};function d(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var f=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),l(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?y(e.theme,e.language):void 0;return t.themeDict=n})),l(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=i({},d(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(o.style=c.plain),void 0!==a&&(o.style=void 0!==o.style?i({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),l(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var c=r?{display:"inline-block"}:{},l=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[c].concat(l))}})),l(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,c=i({},d(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(c.style=void 0!==c.style?i({},c.style,a):a),void 0!==n&&(c.key=n),r&&(c.className+=" "+r),c}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),c=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,c=0,l=[],i=[l];c>-1;){for(;(o=r[c]++)<a[c];){var y=void 0,d=t[c],f=n[c][o];if("string"==typeof f?(d=c>0?d:["plain"],y=f):(d=p(d,f.type),f.alias&&(d=p(d,f.alias)),y=f.content),"string"==typeof y){var h=y.split(s),g=h.length;l.push({types:d,content:h[0]});for(var m=1;m<g;m++)u(l),i.push(l=[]),l.push({types:d,content:h[m]})}else c++,t.push(d),n.push(y),r.push(0),a.push(y.length)}c--,t.pop(),n.pop(),r.pop(),a.pop()}return u(l),i}(void 0!==c?t.tokenize(r,c,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);t.a=f},166:function(e,t,n){"use strict";var r=n(2),a=n(0),o=n.n(a),c=n(142),l=n(152),i=n(148),s=n(183),u=n.n(s),p=n(184),y=n.n(p),d=n(153),f=n(147),h=n(163),g=function(){var e=Object(d.a)().siteConfig.themeConfig.prism,t=void 0===e?{}:e,n=Object(h.a)().isDarkTheme,r=t.theme||f.a,a=t.darkTheme||r;return n?a:r},m=n(84),v=n.n(m),b=/{([\d,-]+)}/,j=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+r+")\\s*$")},k=/title=".*"/,O=function(e){var t=e.children,n=e.className,c=e.metastring,s=Object(d.a)().siteConfig.themeConfig.prism,p=void 0===s?{}:s,f=Object(a.useState)(!1),h=f[0],m=f[1],O=Object(a.useState)(!1),E=O[0],x=O[1];Object(a.useEffect)((function(){x(!0)}),[]);var w=Object(a.useRef)(null),P=[],T="",N=g();if(c&&b.test(c)){var C=c.match(b)[1];P=y.a.parse(C).filter((function(e){return e>0}))}c&&k.test(c)&&(T=c.match(k)[0].split("title=")[1].replace(/"+/g,""));var S=n&&n.replace(/language-/,"");!S&&p.defaultLanguage&&(S=p.defaultLanguage);var D=t.replace(/\n$/,"");if(0===P.length&&void 0!==S){for(var B,A="",L=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return j(["js","jsBlock"]);case"jsx":case"tsx":return j(["js","jsBlock","jsx"]);case"html":return j(["js","jsBlock","html"]);case"python":case"py":return j(["python"]);default:return j()}}(S),I=t.replace(/\n$/,"").split("\n"),R=0;R<I.length;){var F=R+1,$=I[R].match(L);if(null!==$){switch($.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":A+=F+",";break;case"highlight-start":B=F;break;case"highlight-end":A+=B+"-"+(F-1)+","}I.splice(R,1)}else R+=1}P=y.a.parse(A),D=I.join("\n")}var _=function(){u()(D),m(!0),setTimeout((function(){return m(!1)}),2e3)};return o.a.createElement(i.a,Object(r.a)({},i.b,{key:String(E),theme:N,code:D,language:S}),(function(e){var t,n,a=e.className,c=e.style,i=e.tokens,s=e.getLineProps,u=e.getTokenProps;return o.a.createElement(o.a.Fragment,null,T&&o.a.createElement("div",{style:c,className:v.a.codeBlockTitle},T),o.a.createElement("div",{className:v.a.codeBlockContent},o.a.createElement("button",{ref:w,type:"button","aria-label":"Copy code to clipboard",className:Object(l.a)(v.a.copyButton,(t={},t[v.a.copyButtonWithTitle]=T,t)),onClick:_},h?"Copied":"Copy"),o.a.createElement("div",{tabIndex:0,className:Object(l.a)(a,v.a.codeBlock,(n={},n[v.a.codeBlockWithTitle]=T,n))},o.a.createElement("div",{className:v.a.codeBlockLines,style:c},i.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=s({line:e,key:t});return P.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),o.a.createElement("div",Object(r.a)({key:t},n),e.map((function(e,t){return o.a.createElement("span",Object(r.a)({key:t},u({token:e,key:t})))})))}))))))}))},E=n(6),x=(n(85),n(86)),w=n.n(x),P=function(e){return function(t){var n,r=t.id,a=Object(E.a)(t,["id"]),c=Object(d.a)().siteConfig,i=(c=void 0===c?{}:c).themeConfig,s=(i=void 0===i?{}:i).navbar,u=(s=void 0===s?{}:s).hideOnScroll,p=void 0!==u&&u;return r?o.a.createElement(e,a,o.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(l.a)("anchor",(n={},n[w.a.enhancedAnchor]=!p,n)),id:r}),a.children,o.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:"hash-link",href:"#"+r,title:"Direct link to heading"},"#")):o.a.createElement(e,a)}},T=n(87),N=n.n(T);t.a={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?o.a.createElement(O,e):o.a.createElement("code",e):t},a:function(e){return o.a.createElement(c.a,e)},pre:function(e){return o.a.createElement("div",Object(r.a)({className:N.a.mdxCodeBlock},e))},h1:P("h1"),h2:P("h2"),h3:P("h3"),h4:P("h4"),h5:P("h5"),h6:P("h6")}},183:function(e,t,n){"use strict";const r=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const a=document.getSelection();let o=!1;a.rangeCount>0&&(o=a.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch(l){}return n.remove(),o&&(a.removeAllRanges(),a.addRange(o)),r&&r.focus(),c};e.exports=r,e.exports.default=r},184:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var n=t[1],r=t[2],a=t[3];if(n&&a){var o=[],c=(n=parseInt(n))<(a=parseInt(a))?1:-1;"-"!=r&&".."!=r&&"\u2025"!=r||(a+=c);for(var l=n;l!=a;l+=c)o.push(l);return o}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}}}]);