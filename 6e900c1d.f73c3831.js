(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{139:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,d=u["".concat(o,".").concat(m)]||u[m]||b[m]||i;return n?r.a.createElement(d,l(l({ref:t},s),{},{components:n})):r.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},143:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(155),o=n(152),l=n(49),c=n.n(l),s=37,p=39;t.a=function(e){var t=e.block,n=e.children,l=e.defaultValue,u=e.values,b=e.groupId,m=Object(i.a)(),d=m.tabGroupChoices,h=m.setTabGroupChoices,f=Object(a.useState)(l),y=f[0],g=f[1],j=Object(a.useState)(!1),O=j[0],v=j[1];if(null!=b){var w=d[b];null!=w&&w!==y&&u.some((function(e){return e.value===w}))&&g(w)}var k=function(e){g(e),null!=b&&h(b,e)},N=[],S=function(e){e.metaKey||e.altKey||e.ctrlKey||v(!0)},T=function(){v(!1)};return Object(a.useEffect)((function(){window.addEventListener("keydown",S),window.addEventListener("mousedown",T)}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t})},u.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":y===t}),style:O?{}:{outline:"none"},key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e),S(e)},onFocus:function(){return k(t)},onClick:function(){k(t),v(!1)},onPointerDown:function(){return v(!1)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===y}))[0]))}},144:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},152:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},155:function(e,t,n){"use strict";var a=n(0),r=n(156);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},156:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),i=(n(0),n(139)),o=n(143),l=n(144),c={id:"thinking-in-replay",title:"Thinking in Replay"},s={unversionedId:"thinking-in-replay",id:"thinking-in-replay",isDocsHomePage:!1,title:"Thinking in Replay",description:"There's an excellent article in the React docs called Thinking in React, which is well worth a read. Here we'll show how some of those ideas apply to Replay, and why building games with it is a refreshing take on how you might have done them before.",source:"@site/docs/thinking-in-replay.md",permalink:"/docs/thinking-in-replay",editUrl:"https://github.com/edbentley/replay/edit/master/website/docs/thinking-in-replay.md",sidebar:"someSidebar",previous:{title:"Top-Level Game",permalink:"/docs/top-level-game"},next:{title:"Mask",permalink:"/docs/mask"}},p=[],u={rightToc:p};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"There's an excellent article in the React docs called ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org/docs/thinking-in-react.html"}),"Thinking in React"),", which is well worth a read. Here we'll show how some of those ideas apply to Replay, and why building games with it is a refreshing take on how you might have done them before."),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/player-platform.png",alt:"Diagram of player and platform"}))),Object(i.b)("p",null,"In this game we need to do 2 things:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Have the player jump"),Object(i.b)("li",{parentName:"ol"},"Handle the player landing on the platform")),Object(i.b)("p",null,"Many game engines will represent the player in a ",Object(i.b)("inlineCode",{parentName:"p"},"class"),". We might have something like:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class Player {\n  loop() {\n    if (this.jump) {\n      this.position.y += 4;\n    }\n  }\n}\n")),Object(i.b)("p",null,"Next we need to check if the player is touching the platform. Let's imagine we have some parent class to handle this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class Level {\n  player = new Player();\n  platform = new Platform();\n\n  loop() {\n    if (this.player.hits(this.platform)) {\n      this.player.position.y = this.platform.position.y + this.platform.height;\n    }\n  }\n}\n")),Object(i.b)("p",null,"Our player's position is being read and mutated in 2 different classes. When you scale this up to a large game, it can be confusing which classes are changing what values."),Object(i.b)("p",null,"Replay uses a one-way data flow approach. We model our player's position as ",Object(i.b)("em",{parentName:"p"},"state"),", and the state only lives in one place. Other Sprites can read the state (through their props), but only the Sprite which owns the state is allowed to change it. What's more, the state is changed through pure functions - no mutation required."),Object(i.b)("p",null,"If multiple Sprites need to access some state, we need to lift the state to a common parent Sprite. That parent Sprite is then responsible for managing the state."),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/state-flow.png",alt:"State flow diagram"}))),Object(i.b)("p",null,"Here we've lifted the player's position state to the ",Object(i.b)("inlineCode",{parentName:"p"},"Level")," Sprite, not the ",Object(i.b)("inlineCode",{parentName:"p"},"Player")," Sprite. If ",Object(i.b)("inlineCode",{parentName:"p"},"Player")," needs to update the position, it does so through a ",Object(i.b)("em",{parentName:"p"},"callback")," prop, e.g:"),Object(i.b)(o.a,{defaultValue:"js",groupId:"code",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"js",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'{10-14} title="level.js"',"{10-14}":!0,title:'"level.js"'}),'const Level = makeSprite({\n  init() {\n    return { playerX: 0 };\n  },\n\n  render({ updateState }) {\n    return [\n      Player({\n        id: "player",\n        increaseX: () => {\n          updateState((prevState) => ({\n            ...prevState,\n            playerX: prevState.playerX + 5,\n          }));\n        },\n      }),\n    ];\n  },\n});\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'{4} title="player.js"',"{4}":!0,title:'"player.js"'}),"const Player = makeSprite({\n\n  loop({ props }) {\n    props.increaseX();\n  },\n\n});\n"))),Object(i.b)(l.a,{value:"ts",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'{10-14} title="level.ts"',"{10-14}":!0,title:'"level.ts"'}),'const Level = makeSprite<{}, { playerX: number }>({\n  init() {\n    return { playerX: 0 };\n  },\n\n  render({ updateState }) {\n    return [\n      Player({\n        id: "player",\n        increaseX: () => {\n          updateState((prevState) => ({\n            ...prevState,\n            playerX: prevState.playerX + 5,\n          }));\n        },\n      }),\n    ];\n  },\n});\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'{4} title="player.ts"',"{4}":!0,title:'"player.ts"'}),"const Player = makeSprite<{ increaseX: () => void }>({\n\n  loop({ props }) {\n    props.increaseX();\n  },\n\n});\n")))),Object(i.b)("p",null,"This is certainly more verbose than before, but it's arguably easier to understand how your code works since only ",Object(i.b)("inlineCode",{parentName:"p"},"Level")," is able to directly change its own state - it manages how its state changes through callbacks."),Object(i.b)("p",null,"This single way of building your game helps to keep game architecture both modular and consistent as your project scales in size."))}b.isMDXComponent=!0}}]);