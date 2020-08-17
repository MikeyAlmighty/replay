(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{139:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,f=s["".concat(i,".").concat(m)]||s[m]||b[m]||a;return n?o.a.createElement(f,c(c({ref:t},l),{},{components:n})):o.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(6),a=(n(0),n(139)),i={},c={unversionedId:"tutorial/7",id:"tutorial/7",isDocsHomePage:!1,title:"7",description:"7 - Game Loop",source:"@site/docs/tutorial/7.md",permalink:"/docs/tutorial/7",editUrl:"https://github.com/edbentley/replay/edit/master/website/docs/tutorial/7.md"},p=[],l={rightToc:p};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"7---game-loop"},"7 - Game Loop"),Object(a.b)("p",null,"We have state, but we still don't have movement since the state never changes."),Object(a.b)("p",null,"We can update the state in the ",Object(a.b)("inlineCode",{parentName:"p"},"loop")," Sprite method. ",Object(a.b)("inlineCode",{parentName:"p"},"loop"),", which runs 60 times per second, takes an existing ",Object(a.b)("inlineCode",{parentName:"p"},"state")," and returns the next frame's ",Object(a.b)("inlineCode",{parentName:"p"},"state"),". ",Object(a.b)("inlineCode",{parentName:"p"},"loop")," should be a ",Object(a.b)("em",{parentName:"p"},"pure")," function: avoid directly mutating ",Object(a.b)("inlineCode",{parentName:"p"},"state"),"."),Object(a.b)("p",null,"In our game, every frame of the ",Object(a.b)("inlineCode",{parentName:"p"},"loop")," we're updating the ",Object(a.b)("inlineCode",{parentName:"p"},"birdY"),' state, as well as the gravity for a more "flappy" effect. This provides some movement!'),Object(a.b)("p",null,"You'll need to refresh the preview on the right to see it since our bird is currently falling forever."))}u.isMDXComponent=!0}}]);