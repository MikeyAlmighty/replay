(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{139:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,m=s["".concat(o,".").concat(d)]||s[d]||b[d]||a;return n?i.a.createElement(m,c(c({ref:t},l),{},{components:n})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(2),i=n(6),a=(n(0),n(139)),o={},c={unversionedId:"tutorial/3",id:"tutorial/3",isDocsHomePage:!1,title:"3",description:"3 - Game Sprite",source:"@site/docs/tutorial/3.md",permalink:"/docs/tutorial/3",editUrl:"https://github.com/edbentley/replay/edit/master/website/docs/tutorial/3.md"},p=[],l={rightToc:p};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"3---game-sprite"},"3 - Game Sprite"),Object(a.b)("p",null,"On its own, our ",Object(a.b)("inlineCode",{parentName:"p"},"Bird")," Sprite doesn't do anything - we need to import it in another Sprite. Open ",Object(a.b)("inlineCode",{parentName:"p"},"src/index")," and replace the starter code with what's shown on the right."),Object(a.b)("p",null,"Firstly you'll see we've made a new ",Object(a.b)("inlineCode",{parentName:"p"},"Game")," Sprite. This is our top-level Sprite which contains our entire game."),Object(a.b)("p",null,"Again, it has a ",Object(a.b)("inlineCode",{parentName:"p"},"render")," function returning an array of Sprites. In this case, we return our ",Object(a.b)("inlineCode",{parentName:"p"},"Bird")," Sprite we just made. We need to pass a locally unique ",Object(a.b)("inlineCode",{parentName:"p"},"id")," ",Object(a.b)("inlineCode",{parentName:"p"},"prop")," to any custom Sprites we've made - here we pass an ",Object(a.b)("inlineCode",{parentName:"p"},"id")," of ",Object(a.b)("inlineCode",{parentName:"p"},'"bird"')," by ",Object(a.b)("em",{parentName:"p"},"calling")," the ",Object(a.b)("inlineCode",{parentName:"p"},"Bird")," Sprite like ",Object(a.b)("inlineCode",{parentName:"p"},"Bird(props)"),"."))}u.isMDXComponent=!0}}]);