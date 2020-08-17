(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{139:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=u(n),s=r,m=b["".concat(i,".").concat(s)]||b[s]||d[s]||o;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(139)),i={},c={unversionedId:"tutorial/6",id:"tutorial/6",isDocsHomePage:!1,title:"6",description:"6 - State",source:"@site/docs/tutorial/6.md",permalink:"/docs/tutorial/6",editUrl:"https://github.com/edbentley/replay/edit/master/website/docs/tutorial/6.md"},p=[],l={rightToc:p};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"6---state"},"6 - State"),Object(o.b)("p",null,"Our game isn't very interesting right now, we need the bird to move! To do this we'll create a Sprite with ",Object(o.b)("em",{parentName:"p"},"state"),"."),Object(o.b)("p",null,"In a new file ",Object(o.b)("inlineCode",{parentName:"p"},"level")," let's add a Sprite called ",Object(o.b)("inlineCode",{parentName:"p"},"Level"),", which will hold most of our game logic."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Level")," Sprite has an ",Object(o.b)("inlineCode",{parentName:"p"},"init")," method which returns our initial state. We then access our ",Object(o.b)("inlineCode",{parentName:"p"},"state")," in the ",Object(o.b)("inlineCode",{parentName:"p"},"render")," method."),Object(o.b)("p",null,"To set the bird's position, we can add an ",Object(o.b)("inlineCode",{parentName:"p"},"x")," and ",Object(o.b)("inlineCode",{parentName:"p"},"y")," coordinate ",Object(o.b)("inlineCode",{parentName:"p"},"prop")," to the ",Object(o.b)("inlineCode",{parentName:"p"},"Bird")," Sprite. All Sprites (including Textures) take an ",Object(o.b)("inlineCode",{parentName:"p"},"x")," and ",Object(o.b)("inlineCode",{parentName:"p"},"y")," prop."),Object(o.b)("p",null,"In our top-level ",Object(o.b)("inlineCode",{parentName:"p"},"Game")," Sprite we should also import the ",Object(o.b)("inlineCode",{parentName:"p"},"Level")," Sprite instead of the ",Object(o.b)("inlineCode",{parentName:"p"},"Bird")," Sprite."))}u.isMDXComponent=!0}}]);