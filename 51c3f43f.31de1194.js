(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{117:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),a=n(141),o=n(138),s=Object(o.a)({render:function(){return[o.b.rectangle({width:50,height:40,color:"yellow"})]}}),c=Object(o.a)({init:function(){return{birdY:10,birdGravity:-12}},loop:function(e){var t=e.props,n=e.state,i=e.device;if(t.paused)return n;var r=i.inputs,a=n.birdGravity,o=n.birdY;return o-=a+=.8,(r.pointer.justPressed||r.keysJustPressed[" "])&&(a=-12),{birdGravity:a,birdY:o}},render:function(e){var t=e.state,n=e.device.size;return[o.b.rectangle({color:"#add8e6",width:n.width+2*n.widthMargin,height:n.height+2*n.heightMargin}),s({id:"bird",x:0,y:t.birdY,rotation:Math.max(-30,3*t.birdGravity-30)})]}}),u=Object(o.a)({render:function(e){var t=e.props,n=e.device,i=n.inputs;return(i.pointer.justReleased||i.keysJustPressed[" "])&&t.start(),[o.b.text({text:n.isTouchScreen?"Tap to Start":"Click or Space Bar to Start",color:"white",y:100})]}}),d=Object(o.a)({init:function(){return{view:"menu"}},render:function(e){var t=e.state,n=e.updateState,i="menu"===t.view;return[c({id:"level",paused:i}),i?u({id:"menu",start:function(){n((function(e){return Object.assign({},e,{view:"level"})}))}}):null]}}),l={id:"Game",size:{width:400,height:600,maxHeightMargin:150},defaultFont:{name:"Helvetica",size:24}},p=n(61);t.default=function(){return r.a.createElement(a.a,{part:13,MDXContent:p.default,codesTs:[{file:"menu.ts",code:'import { makeSprite, t } from "@replay/core";\nimport { WebInputs } from "@replay/web";\nimport { iOSInputs } from "@replay/swift";\n\ntype MenuProps = {\n  start: () => void;\n};\n\nexport const Menu = makeSprite<MenuProps, undefined, WebInputs | iOSInputs>({\n  render({ props, device }) {\n    const { inputs } = device;\n\n    if (inputs.pointer.justReleased || inputs.keysJustPressed[" "]) {\n      props.start();\n    }\n\n    return [\n      t.text({\n        text: device.isTouchScreen\n          ? "Tap to Start"\n          : "Click or Space Bar to Start",\n        color: "white",\n        y: 100,\n      }),\n    ];\n  },\n});\n'},{file:"index.ts",code:'import { makeSprite, GameProps } from "@replay/core";\nimport { Level } from "./level";\nimport { Menu } from "./menu";\n\ntype GameState = {\n  view: "menu" | "level";\n};\n\nexport const Game = makeSprite<GameProps, GameState>({\n  init() {\n    return { view: "menu" };\n  },\n\n  render({ state, updateState }) {\n    const inMenuScreen = state.view === "menu";\n\n    return [\n      Level({\n        id: "level",\n        paused: inMenuScreen,\n      }),\n      inMenuScreen\n        ? Menu({\n            id: "menu",\n            start: () => {\n              updateState((prevState) => {\n                return {\n                  ...prevState,\n                  view: "level",\n                };\n              });\n            },\n          })\n        : null,\n    ];\n  },\n});\n\nexport const gameProps: GameProps = {\n  id: "Game",\n  size: {\n    width: 400,\n    height: 600,\n    maxHeightMargin: 150,\n  },\n  defaultFont: {\n    name: "Helvetica",\n    size: 24,\n  },\n};\n',highlight:[3,14,"22-34"]}],codesJs:[{file:"menu.js",code:'import { makeSprite, t } from "@replay/core";\n\nexport const Menu = makeSprite({\n  render({ props, device }) {\n    const { inputs } = device;\n\n    if (inputs.pointer.justReleased || inputs.keysJustPressed[" "]) {\n      props.start();\n    }\n\n    return [\n      t.text({\n        text: device.isTouchScreen\n          ? "Tap to Start"\n          : "Click or Space Bar to Start",\n        color: "white",\n        y: 100,\n      }),\n    ];\n  },\n});\n'},{file:"index.js",code:'import { makeSprite } from "@replay/core";\nimport { Level } from "./level";\nimport { Menu } from "./menu";\n\nexport const Game = makeSprite({\n  init() {\n    return { view: "menu" };\n  },\n\n  render({ state, updateState }) {\n    const inMenuScreen = state.view === "menu";\n\n    return [\n      Level({\n        id: "level",\n        paused: inMenuScreen,\n      }),\n      inMenuScreen\n        ? Menu({\n            id: "menu",\n            start: () => {\n              updateState((prevState) => {\n                return {\n                  ...prevState,\n                  view: "level",\n                };\n              });\n            },\n          })\n        : null,\n    ];\n  },\n});\n\nexport const gameProps = {\n  id: "Game",\n  size: {\n    width: 400,\n    height: 600,\n    maxHeightMargin: 150,\n  },\n  defaultFont: {\n    name: "Helvetica",\n    size: 24,\n  },\n};\n',highlight:[3,10,"18-30"]}],Game:d,gameProps:l})}},138:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var i=n(140),r={text:function(e){return{type:"text",props:Object.assign({testId:e.testId},Object(i.a)(e),{font:e.font,text:e.text,align:e.align||"center",color:e.color})}},circle:function(e){return{type:"circle",props:Object.assign({testId:e.testId},Object(i.a)(e),{radius:e.radius,color:e.color})}},rectangle:function(e){return{type:"rectangle",props:Object.assign({testId:e.testId},Object(i.a)(e),{width:e.width,height:e.height,color:e.color})}},line:function(e){var t;return{type:"line",props:Object.assign({testId:e.testId},Object(i.a)(e),{color:e.color,thickness:null!==(t=e.thickness)&&void 0!==t?t:1,path:e.path})}},image:function(e){return{type:"image",props:Object.assign({testId:e.testId},Object(i.a)(e),{fileName:e.fileName,width:e.width,height:e.height})}},spriteSheet:function(e){return{type:"spriteSheet",props:Object.assign({testId:e.testId},Object(i.a)(e),{fileName:e.fileName,columns:e.columns,rows:e.rows,index:e.index,width:e.width,height:e.height})}}};function a(e){return function(t){return{type:"custom",spriteObj:e,props:t}}}},140:function(e,t,n){"use strict";function i(e){var t,n,i;return{x:e.x||0,y:e.y||0,rotation:e.rotation||0,opacity:Math.min(1,Math.max(0,null!==(t=e.opacity)&&void 0!==t?t:1)),scaleX:null!==(n=e.scaleX)&&void 0!==n?n:1,scaleY:null!==(i=e.scaleY)&&void 0!==i?i:1,anchorX:e.anchorX||0,anchorY:e.anchorY||0,mask:e.mask||null}}n.d(t,"a",(function(){return i}))},141:function(e,t,n){"use strict";n.d(t,"a",(function(){return K}));var i=n(0),r=n.n(i),a=n(145),o=n(142),s=n(149),c=n(2),u=n(148),d=n(147),l=n(143),p=n(144),h=n(146),f=n.n(h),m=n(48),v=n.n(m);function g(e){var t=e.codesTs,n=e.codesJs;return r.a.createElement(l.a,{defaultValue:"js",groupId:"code",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}]},r.a.createElement(p.a,{value:"js"},r.a.createElement(w,{lang:"js",codes:n})),r.a.createElement(p.a,{value:"ts"},r.a.createElement(w,{lang:"ts",codes:t})))}function w(e){var t=e.lang,n=e.codes,a=n.map((function(e){return e.file})),o=Object(i.useState)(a[0]),s=o[0],c=o[1],u=n.find((function(e){return e.file===s}));return r.a.createElement("div",{style:{marginTop:-12}},r.a.createElement("div",{style:{position:"sticky",top:0,backgroundColor:"white",zIndex:1}},a.map((function(e){return r.a.createElement("button",{className:v.a.fileButton+(s===e?" "+v.a.fileButtonSelected:""),key:e,onClick:function(){return c(e)}},e)}))),r.a.createElement(b,{key:u.file,lang:t,code:u.code,highlight:u.highlight}))}function b(e){var t=e.lang,n=e.code,i=e.highlight,a=n.replace("/img/bird.png","bird.png").replace("/audio/boop.wav","boop.wav");return r.a.createElement(u.a,Object(c.a)({},u.b,{theme:d.a,code:a,language:t}),(function(e){var t=e.className,n=e.style,a=e.tokens,o=e.getLineProps,s=e.getTokenProps;return r.a.createElement("div",{className:v.a.codeBlockContent},r.a.createElement("div",{tabIndex:"0",className:f()(t,v.a.codeBlock)},r.a.createElement("div",{className:v.a.codeBlockLines,style:n},a.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=o({line:e,key:t}),a=null==i?void 0:i.flatMap((function(e){if("number"==typeof e)return e;var t=e.split("-").map(Number),n=t[0],i=t[1];return Array.from({length:i-n+1}).map((function(e,t){return t+n}))}));return(null==a?void 0:a.includes(t+1))&&(n.className+=" docusaurus-highlight-code-line"),r.a.createElement("div",n,r.a.createElement("span",{style:{display:"inline-block",width:30,textAlign:"right",marginRight:16,opacity:.5,userSelect:"none"}},t+1),e.map((function(e,t){return r.a.createElement("span",s({token:e,key:t}))})))})))))}))}var y=n(150),x=n.n(y),S=n(151),M=n(140);function j(e,t,n,i,r,a,o,s,c,u){var d=Object(M.a)(t);d.opacity*=s;var l=u.nativeSpriteMap,p=u.nativeSpriteUtils,h=function(e){var t=i(e);return function(e){var t=Math.PI/180,n=-(e.rotation||0)*t;return function(t){var i=t.x,r=t.y,a=i-e.x,o=r-e.y,s=a*Math.cos(n)+o*Math.sin(n),c=-a*Math.sin(n)+o*Math.cos(n),u=s/e.scaleX,d=c/e.scaleY;return{x:u+e.anchorX,y:d+e.anchorY}}}(d)(t)},f=n(h),m=e.getSprites(t,f,r,a,o),v=[],g=m.map((function(t){if(!t)return t;if("native"===t.type){v.push(t.props.id);var i=l[t.name];if(!i)throw Error('Cannot find Native Sprite "'+t.name+'"');var r=e.childContainers[t.props.id];return r&&"native"===r.type||(r={type:"native",state:i.create({props:t.props,parentGlobalId:c,getState:function(){return r.state},updateState:function(e){r.state=Object.assign({},r.state,e)},utils:p}),cleanup:i.cleanup},e.childContainers[t.props.id]=r),r.state=i.loop({props:t.props,state:r.state,parentGlobalId:c,utils:p}),p.didResize=!1,null}if("custom"===t.type){v.push(t.props.id);var s=!1,m=e.childContainers[t.props.id];return m&&"custom"===m.type||(s=!0,m=k(t,f,e.prevTime),e.childContainers[t.props.id]=m),j(m,t.props,n,h,s,a,o,d.opacity,c+"--"+t.props.id,u)}return t})).filter(P);return function e(t){Object.keys(t).forEach((function(n){if(!v.includes(n)){var i=t[n];"native"===i.type?i.cleanup({state:i.state,parentGlobalId:c}):e(i.childContainers),delete t[n]}}))}(e.childContainers),{id:t.id,baseProps:d,textures:g}}var E=1/60*1e3;function k(e,t,n){var i,r=e.spriteObj,a=e.props,o=[],s=function(e){o.push(e)};return r.init&&(i=r.init({props:a,device:t,updateState:s})),{type:"custom",state:i,childContainers:{},prevTime:n,currentLag:0,getSprites:function(e,t,n,i,a){var c=this,u=function(){c.state=o.reduce((function(e,t){return t(e)}),c.state),o.length=0};u(),!n&&r.loop&&(this.state=r.loop({props:e,state:this.state,device:t,updateState:s})),u();var d=r[i];d||(d="renderPXL"===i&&r.renderXL?r.renderXL:r.render);var l=d({props:e,state:this.state,device:t,updateState:s,extrapolateFactor:a});return u(),l}}}function O(e,t){var n,i=e.deviceHeight>e.deviceWidth,r=!1;return"portrait"in t?(n=i?t.portrait:t.landscape,r=!0):n=t,n.minHeightXL&&e.deviceHeight>=n.minHeightXL||n.minWidthXL&&e.deviceWidth>=n.minWidthXL?r&&i?"renderPXL":"renderXL":r&&i?"renderP":"render"}function P(e){return null!==e}var T={keysDown:{},keysJustPressed:{},pointer:{pressed:!1,numberPressed:0,justPressed:!1,justReleased:!1,x:0,y:0}},L=[];function C(e){return function(e,t){var n=e(t.pointer);return Object.assign({},t,{pointer:Object.assign({},t.pointer,{x:n.x,y:n.y})})}(e,T)}function I(e){["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"," "].includes(e.key)&&!(e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLInputElement)&&e.preventDefault(),T.keysDown[e.key]=!0,T.keysJustPressed[e.key]=!0}function N(e){delete T.keysDown[e.key]}function G(e){L=L.filter((function(t){return t!==e})),T.pointer.numberPressed=L.length,0===L.length&&(T.pointer.justPressed=!1,T.pointer.pressed=!1)}function z(){T={keysDown:T.keysDown,keysJustPressed:{},pointer:Object.assign({},T.pointer,{justPressed:!1,justReleased:!1})}}function X(e,t,n,i){var r=t.width,a=t.height,o=t.widthMargin,s=t.heightMargin,c=t.deviceWidth,u=t.deviceHeight;e.save();var d=Math.min(c/r,u/a),l=r+2*o,p=a+2*s;return e.translate(c/2,u/2),e.scale(d,d),{scale:d,render:function(t){e.clearRect(-c/2/d,-u/2/d,c/d,u/d),e.fillStyle="white",e.fillRect(-l/2,-p/2,l,p),function e(t,n,i,r){var a=t.baseProps,o=t.textures;n.save(),R(n,a),o.forEach((function(t){if("type"in t){var o=W(n);return n.save(),R(n,t.props,a.opacity),function(e,t,n,i){switch(e.type){case"text":return t.text(e.props.font||i,e.props.text,e.props.align,e.props.color),0;case"circle":return t.circle(e.props.radius,e.props.color),0;case"rectangle":return t.rectangle(e.props.width,e.props.height,e.props.color),0;case"line":return t.line(e.props.path,e.props.thickness,e.props.color),0;case"image":var r=n[e.props.fileName];if(!r)throw Error('Cannot find image file "'+e.props.fileName+'"');return t.image(r,e.props.width,e.props.height),0;case"spriteSheet":t.spriteSheet(n[e.props.fileName],e.props.columns,e.props.rows,e.props.index,e.props.width,e.props.height)}}(t,o,i,r),void n.restore()}e(t,n,i,r)})),n.restore()}(t,e,n,i)}}}var H=Math.PI/180,R=function(e,t,n){void 0===n&&(n=1);var i=t.x,r=t.y,a=t.rotation,o=t.scaleX,s=t.scaleY,c=t.anchorX,u=t.anchorY,d=t.opacity;e.translate(i,-r),e.rotate(a*H),e.scale(o,s),e.translate(-c,u),e.globalAlpha=d*n,function(e,t){if(!t)return 0;switch(t.type){case"lineMask":var n=t.path,i=n[0],r=i[0],a=i[1],o=n.slice(1);return e.beginPath(),e.moveTo(r,-a),o.forEach((function(t){var n=t[0],i=t[1];e.lineTo(n,-i)})),e.clip(),0;case"circleMask":return e.beginPath(),e.arc(t.x,-t.y,Math.round(t.radius),0,2*Math.PI),e.clip(),0;case"rectangleMask":e.beginPath(),e.rect(t.x-t.width/2,-t.y-t.height/2,t.width,t.height),e.clip()}}(e,t.mask)};var D,W=function(e){return{circle:function(t,n){e.beginPath(),e.arc(0,0,Math.round(t),0,2*Math.PI),e.fillStyle=n,e.fill(),e.closePath()},rectangle:function(t,n,i){e.fillStyle=i,e.fillRect(-t/2,-n/2,t,n),e.closePath()},line:function(t,n,i){if(!(t.length<2)){var r=t[0],a=r[0],o=r[1],s=t.slice(1);e.strokeStyle=i,e.lineWidth=n,e.beginPath(),e.moveTo(a,-o),s.forEach((function(t){var n=t[0],i=t[1];e.lineTo(n,-i)})),e.stroke()}},text:function(t,n,i,r){var a=t.size+"px "+t.name;e.font=a,e.textBaseline="middle",e.textAlign=i,e.fillStyle=r,e.fillText(n,0,0)},image:function(t,n,i){e.drawImage(t,-n/2,-i/2,n,i)},spriteSheet:function(t,n,i,r,a,o){var s=t.width/n,c=t.height/i,u=r%n,d=Math.floor(r/n)%i;e.drawImage(t,u*s,d*c,s,c,-a/2,-o/2,a,o)}}};function Y(e,t,n,i){var r;"portrait"in i?r=t>e?i.portrait:i.landscape:r=i;var a=r,o=a.width,s=a.height,c=a.maxWidthMargin,u=void 0===c?0:c,d=a.maxHeightMargin;if("game-coords"===n)return{width:o,height:s,widthMargin:0,heightMargin:0,deviceWidth:o,deviceHeight:s};var l=o/s;if(l>e/t){var p=e,h=p/l,f=h/s*(void 0===d?0:d),m=Math.min(t,h+2*f);return{width:o,height:s,widthMargin:0,heightMargin:(m-h)/2*(s/h),deviceWidth:p,deviceHeight:m}}var v=t,g=v*l,w=g/o*u,b=Math.min(e,g+2*w);return{width:o,height:s,widthMargin:(b-g)/2*(o/g),heightMargin:0,deviceWidth:b,deviceHeight:v}}function J(e){return function(t){function n(n){var i=e[t];if(!i)throw Error("Cannot find audio file "+t);return n&&!i.paused&&(i=new Audio(t)),i}return{getPosition:function(){return n(!1).currentTime},play:function(e,t){var i=n(!0);i.play(),void 0!==e&&(i.currentTime=e),t&&(i.loop=!0)},pause:function(){n(!1).pause()}}}}function B(){if("ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch)return!0;return window.matchMedia("(touch-enabled),(-webkit-touch-enabled),(-moz-touch-enabled),(-o-touch-enabled),(-ms-touch-enabled)").matches}var A={name:"sans-serif",size:12};function F(e,t){var n,i=t.loadingTextures,r=void 0===i?[]:i,a=t.assets,o=void 0===a?{}:a,s=t.dimensions,c=void 0===s?"game-coords":s,u=t.nativeSpriteMap,d=void 0===u?{}:u,l=t.canvas,p=t.windowSize,h=l||document.createElement("canvas");l||document.body.appendChild(h);var f=h.getContext("2d",{alpha:!1}),m=window.AudioContext||window.webkitAudioContext;m&&new m;var v,g,w,b,y,P,C=!0;document.addEventListener("keydown",(function(e){C&&I(e)}),!1),document.addEventListener("keyup",(function(e){C&&N(e)}),!1),window.addEventListener("resize",R,!1);var H={didResize:!1,scale:1,gameXToPlatformX:function(e){return e},gameYToPlatformY:function(e){return e}};function R(t){if(!v||(f.restore(),document.removeEventListener("pointerdown",g),document.removeEventListener("pointermove",w),document.removeEventListener("pointerup",b),document.removeEventListener("pointerout",y),!0!==t)){var n=function(e,t,n,i){var r=Y(e,t,n,i);return D=r,r}((null==p?void 0:p.width)||window.innerWidth,(null==p?void 0:p.height)||window.innerHeight,c,e.props.size);h.width=n.deviceWidth,h.height=n.deviceHeight;var i=e.props.defaultFont||A,r=X(f,n,J,i);P=r.scale,F.ref=r.render,H.gameXToPlatformX=function(e){var t=e.canvasOffsetLeft,n=e.widthMargin,i=e.scale,r=e.width;return function(e){return t+i*(e+r/2+n)}}({canvasOffsetLeft:h.offsetLeft,width:n.width,widthMargin:n.widthMargin,scale:P}),H.gameYToPlatformY=function(e){var t=e.canvasOffsetTop,n=e.heightMargin,i=e.scale,r=e.height;return function(e){return t-i*(e-r/2-n)}}({canvasOffsetTop:h.offsetTop,height:n.height,heightMargin:n.heightMargin,scale:P}),H.didResize=!0,H.scale=P;var a=function(e){var t=e.canvasOffsetLeft,n=e.widthMargin,i=e.scale,r=e.width;return function(e){return(e.clientX-t)/i-n-r/2}}({canvasOffsetLeft:h.offsetLeft,width:n.width,widthMargin:n.widthMargin,scale:P}),o=function(e){var t=e.canvasOffsetTop,n=e.heightMargin,i=e.scale,r=e.height;return function(e){return-(e.clientY-t)/i+n+r/2}}({canvasOffsetTop:h.offsetTop,height:n.height,heightMargin:n.heightMargin,scale:P}),s=function(e,t){return e>n.width/2+n.widthMargin||e<-n.width/2-n.widthMargin||t>n.height/2+n.heightMargin||t<-n.height/2-n.heightMargin};g=function(e){var t=a(e),n=o(e);s(t,n)?C=!1:(C=!0,function(e,t,n){L.includes(n)||(L=[].concat(L,[n])),T.pointer.pressed=!0,T.pointer.numberPressed=L.length,T.pointer.justPressed=!0,T.pointer.x=e,T.pointer.y=t}(t,n,e.pointerId))},w=function(e){var t=a(e),n=o(e);s(t,n)||function(e,t){T.pointer.x=e,T.pointer.y=t}(t,n)},b=function(e){var t=a(e),n=o(e);s(t,n)?G(e.pointerId):function(e,t,n){0===(L=L.filter((function(e){return e!==n}))).length&&(T.pointer.justPressed=!1,T.pointer.pressed=!1),T.pointer.numberPressed=L.length,T.pointer.justReleased=!0,T.pointer.x=e,T.pointer.y=t}(t,n,e.pointerId)},y=function(e){G(e.pointerId)},document.addEventListener("pointerdown",g,!1),document.addEventListener("pointermove",w,!1),document.addEventListener("pointerup",b,!1),document.addEventListener("pointerout",y,!1),v=n}}var W={},J={},B={getGetDevice:U(W,Y((null==p?void 0:p.width)||window.innerWidth,(null==p?void 0:p.height)||window.innerHeight,c,e.props.size))},F={ref:null};R();var q=!1,V=function(){var e=Object(S.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],(o.audioFileNames||[]).forEach((function(e){W[e]=new Audio(e),t.push(new Promise((function(t,n){W[e].addEventListener("canplaythrough",t),W[e].addEventListener("error",n)}))),W[e].load()})),(o.imageFileNames||[]).forEach((function(e){J[e]=new Image,t.push(new Promise((function(t,n){J[e].addEventListener("load",t),J[e].addEventListener("error",n),J[e].src=e})))})),e.next=5,Promise.all(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return null===(n=F.ref)||void 0===n||n.call(F,{id:"Loading",baseProps:Object(M.a)({}),textures:r}),{cleanup:function(){h.width=h.width,l||document.body.removeChild(h),q=!0,document.removeEventListener("keydown",I,!1),document.removeEventListener("keyup",N,!1),window.removeEventListener("resize",R,!1),R(!0)},loadPromise:V().then((function(){var t=function e(){document.removeEventListener("keydown",e,!1),document.removeEventListener("pointerdown",e,!1),Object.values(W).forEach((function(e){e.muted=!0,e.play().then((function(){e.pause(),e.muted=!1}))}))};document.addEventListener("keydown",t,!1),document.addEventListener("pointerdown",t,!1);var n=function(e,t,n,i){var r=function(e){return{x:e.x,y:e.y}},a=e.getGetDevice(),o=a(r),s=k(n,a(r),0),c=i||n.props.size,u=O(o.size,c),d=0,l=0,p=j(s,n.props,a,r,!0,u,0,1,n.props.id,t);return{initTextures:p,getNextFrameTextures:function(i,a){var o=i-d;for(d=i,l+=o;l>=E;){var u=(l-=E)/E,h=e.getGetDevice(),f=O(h(r).size,c);p=j(s,n.props,h,r,!1,f,u,1,n.props.id,t),a()}return p}}}(B,{nativeSpriteMap:d,nativeSpriteUtils:H},e),i=n.initTextures,r=n.getNextFrameTextures,a=null;!function e(t){var n;null===(n=F.ref)||void 0===n||n.call(F,t),window.requestAnimationFrame((function(t){q||(null===a&&(a=t-1/60),e(r(t-a,z)))}))}(i)})),audioElements:W}}function U(e,t){var n,i={isTouchScreen:B(),log:console.log,random:Math.random,timer:(n={},{start:function(e,t){var i=window.setTimeout((function(){delete n[r],e()}),t),r=String(i);return n[r]={timeoutId:i,callback:e,timeStartedMs:Date.now(),timeRemainingMs:t,isPaused:!1},r},pause:function(e){var t=n[e];if(t&&!t.isPaused){var i=Date.now()-t.timeStartedMs;t.timeRemainingMs-=i,t.isPaused=!0,window.clearTimeout(t.timeoutId)}},resume:function(e){var t=n[e];if(t&&t.isPaused){t.timeStartedMs=Date.now(),t.isPaused=!1;var i=window.setTimeout((function(){delete n[e],t.callback()}),t.timeRemainingMs);t.timeoutId=i}},cancel:function(e){var t=n[e];t&&(window.clearTimeout(t.timeoutId),delete n[e])}}),audio:J(e),network:{get:function(e,t){fetch(e).then((function(e){return e.json()})).then(t)},post:function(e,t,n){fetch(e,{method:"POST",body:JSON.stringify(t)}).then((function(e){return e.json()})).then(n)},put:function(e,t,n){fetch(e,{method:"PUT",body:JSON.stringify(t)}).then((function(e){return e.json()})).then(n)},delete:function(e,t){fetch(e,{method:"DELETE"}).then((function(e){return e.json()})).then(t)}},storage:{getStore:function(){for(var e,t={},n=0;n<localStorage.length;n++){var i=localStorage.key(n);i&&(t[i]=null!==(e=localStorage.getItem(i))&&void 0!==e?e:void 0)}return t},setStore:function(e){Object.entries(e).forEach((function(e){var t=e[0],n=e[1];void 0===n?localStorage.removeItem(t):localStorage.setItem(t,n)}))}},alert:{ok:function(e,t){alert(e),null==t||t()},okCancel:function(e,t){t(confirm(e))}},clipboard:{copy:function(e,t){navigator.clipboard?navigator.clipboard.writeText(e).then((function(){t()})).catch((function(e){t(e)})):t(new Error(window.isSecureContext?"Couldn't access clipboard":"Clipboard only available on HTTPS or localhost"))}}};return function(){var e=Object.assign({},i,{size:D||t,now:function(){return new Date}});return function(t){return Object.assign({},e,{inputs:C(t)})}}}var q=n(138);function V(e){var t=e.Game,n=e.gameProps,a=e.showReload,o=e.assets,s=function(){var e=Object(i.useRef)(null),t=Object(i.useState)(null),n=t[0],r=t[1],a=function(){r(e.current.getBoundingClientRect())};Object(i.useEffect)((function(){return window.addEventListener("resize",a,!1),function(){return window.removeEventListener("resize",a,!1)}}),[]);var o=Object(i.useCallback)((function(t){null!==t&&(e.current=t,a())}),[]);return Object(i.useEffect)((function(){document.getElementById("iphone-img").onload=function(){a()}}),[]),[n,o]}(),c=s[0],u=s[1],d=Object(i.useState)(0),l=d[0],p=d[1],h=0,f=0,m=0;if(c&&c.height&&c.width){c.width/c.height>375/667?(f=c.height*(667/900),h=f*(375/667)):(h=c.width*(375/460),f=h/(375/667));var g=n.size.maxHeightMargin?0:.08*f;m=(c.height-f)/2+g}return Object(i.useEffect)((function(){if(h&&f){var e=document.getElementById("myCanvas"),i=F(t(n),{loadingTextures:[q.b.text({color:"black",text:"Loading..."})],assets:o,dimensions:"scale-up",canvas:e,windowSize:{width:h,height:f}}).cleanup;return function(){i()}}}),[h,f,l]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{ref:u,style:{height:"100%",width:"100%",display:"flex",justifyContent:"center"}},r.a.createElement("img",{id:"iphone-img",style:{userSelect:"none",objectFit:"contain",maxHeight:"100%"},src:"/img/iPhone8-Portrait-SpaceGray.png"})),a&&r.a.createElement("img",{className:v.a.refresh,src:"/img/reload.svg",width:20,height:20,onClick:function(){return p((function(e){return e+1}))}}),r.a.createElement("canvas",{id:"myCanvas",style:{position:"absolute",marginTop:m},width:h,height:f}))}function K(e){var t=e.part,n=e.MDXContent,i=e.codesTs,c=e.codesJs,u=e.Game,d=e.gameProps,l=e.image,p=e.isEnd,h=e.assets,f=i&&c,m=u&&d?r.a.createElement(s.a,{fallback:r.a.createElement("div",null,"Preview")},(function(){return r.a.createElement(V,{Game:u,gameProps:d,showReload:f,assets:h})})):r.a.createElement("div",null,r.a.createElement("img",{src:l}));return r.a.createElement(a.a,{title:"Tutorial - Part "+t,noFooter:!0},r.a.createElement("div",{style:{display:"flex",minWidth:1024,height:"calc(100vh - 60px)"}},r.a.createElement("div",{style:{flex:"1",overflow:"auto",padding:16,borderRight:"1px solid #ededed"}},r.a.createElement(n,null),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},t>1?r.a.createElement(o.a,{to:"/tutorial/"+(t-1)},"Back"):r.a.createElement("div",null),p?r.a.createElement("div",null):r.a.createElement(o.a,{to:"/tutorial/"+(t+1)},"Next"))),f?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{flex:"1",overflow:"auto",borderRight:"1px solid #ededed"}},r.a.createElement(g,{codesTs:i,codesJs:c})),r.a.createElement("div",{style:{flex:"1",display:"flex",justifyContent:"center"}},m)):r.a.createElement("div",{style:{flex:"2",display:"flex",justifyContent:"center"}},m)))}},61:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var i=n(2),r=n(6),a=(n(0),n(139)),o={},s={unversionedId:"tutorial/13",id:"tutorial/13",isDocsHomePage:!1,title:"13",description:"13 - Main Menu",source:"@site/docs/tutorial/13.md",permalink:"/docs/tutorial/13",editUrl:"https://github.com/edbentley/replay/edit/master/website/docs/tutorial/13.md"},c=[],u={rightToc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"13---main-menu"},"13 - Main Menu"),Object(a.b)("p",null,"Let's now create a menu to unpause our game so we can actually play it again!"),Object(a.b)("p",null,"We create a ",Object(a.b)("inlineCode",{parentName:"p"},"Menu")," Sprite like we did before, the only new thing here being the ",Object(a.b)("inlineCode",{parentName:"p"},"t.text")," Texture Replay provides to draw text to the screen. We can set a different message for different types of devices by checking the ",Object(a.b)("inlineCode",{parentName:"p"},"device.isTouchScreen")," field."),Object(a.b)("p",null,"In our top-level ",Object(a.b)("inlineCode",{parentName:"p"},"Game")," Sprite we can render the ",Object(a.b)("inlineCode",{parentName:"p"},"Menu")," Sprite on top of the ",Object(a.b)("inlineCode",{parentName:"p"},"Level")," Sprite. But when we're playing the game, we return ",Object(a.b)("inlineCode",{parentName:"p"},"null")," to hide it."),Object(a.b)("p",null,"Notice how ",Object(a.b)("inlineCode",{parentName:"p"},"Menu")," takes a ",Object(a.b)("em",{parentName:"p"},"callback")," prop ",Object(a.b)("inlineCode",{parentName:"p"},"start"),". By passing a function as a prop, we can use ",Object(a.b)("inlineCode",{parentName:"p"},"updateState")," in the ",Object(a.b)("inlineCode",{parentName:"p"},"render")," method to update the ",Object(a.b)("inlineCode",{parentName:"p"},"Game")," Sprite's state. ",Object(a.b)("inlineCode",{parentName:"p"},"updateState")," is a function which takes the existing state and returns a new state to render on the next frame."),Object(a.b)("p",null,"This pattern is how child Sprites can update their parent's state, while still keeping a one-way data flow. In doing so, ",Object(a.b)("inlineCode",{parentName:"p"},"Game")," is always in control of how its own state changes."))}d.isMDXComponent=!0}}]);