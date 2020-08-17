(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{126:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),a=n(141),o=n(138),s=Object(o.a)({render:function(){return[o.b.rectangle({width:50,height:40,color:"yellow"})]}}),c=Object(o.a)({render:function(){return[s({id:"bird"})]}}),u={id:"Game",size:{width:400,height:600,maxHeightMargin:150},defaultFont:{name:"Helvetica",size:24}},d=n(57);t.default=function(){return r.a.createElement(a.a,{part:5,MDXContent:d.default,codesTs:[{file:"index.ts",code:'import { makeSprite, GameProps } from "@replay/core";\nimport { Bird } from "./bird";\n\nexport const Game = makeSprite<GameProps>({\n  render() {\n    return [\n      Bird({\n        id: "bird",\n      }),\n    ];\n  },\n});\n\nexport const gameProps: GameProps = {\n  id: "Game",\n  size: {\n    width: 400,\n    height: 600,\n    maxHeightMargin: 150,\n  },\n  defaultFont: {\n    name: "Helvetica",\n    size: 24,\n  },\n};\n',highlight:[19]}],codesJs:[{file:"index.js",code:'import { makeSprite } from "@replay/core";\nimport { Bird } from "./bird";\n\nexport const Game = makeSprite({\n  render() {\n    return [\n      Bird({\n        id: "bird",\n      }),\n    ];\n  },\n});\n\nexport const gameProps = {\n  id: "Game",\n  size: {\n    width: 400,\n    height: 600,\n    maxHeightMargin: 150,\n  },\n  defaultFont: {\n    name: "Helvetica",\n    size: 24,\n  },\n};\n',highlight:[19]}],Game:c,gameProps:u})}},138:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var i=n(140),r={text:function(e){return{type:"text",props:Object.assign({testId:e.testId},Object(i.a)(e),{font:e.font,text:e.text,align:e.align||"center",color:e.color})}},circle:function(e){return{type:"circle",props:Object.assign({testId:e.testId},Object(i.a)(e),{radius:e.radius,color:e.color})}},rectangle:function(e){return{type:"rectangle",props:Object.assign({testId:e.testId},Object(i.a)(e),{width:e.width,height:e.height,color:e.color})}},line:function(e){var t;return{type:"line",props:Object.assign({testId:e.testId},Object(i.a)(e),{color:e.color,thickness:null!==(t=e.thickness)&&void 0!==t?t:1,path:e.path})}},image:function(e){return{type:"image",props:Object.assign({testId:e.testId},Object(i.a)(e),{fileName:e.fileName,width:e.width,height:e.height})}},spriteSheet:function(e){return{type:"spriteSheet",props:Object.assign({testId:e.testId},Object(i.a)(e),{fileName:e.fileName,columns:e.columns,rows:e.rows,index:e.index,width:e.width,height:e.height})}}};function a(e){return function(t){return{type:"custom",spriteObj:e,props:t}}}},140:function(e,t,n){"use strict";function i(e){var t,n,i;return{x:e.x||0,y:e.y||0,rotation:e.rotation||0,opacity:Math.min(1,Math.max(0,null!==(t=e.opacity)&&void 0!==t?t:1)),scaleX:null!==(n=e.scaleX)&&void 0!==n?n:1,scaleY:null!==(i=e.scaleY)&&void 0!==i?i:1,anchorX:e.anchorX||0,anchorY:e.anchorY||0,mask:e.mask||null}}n.d(t,"a",(function(){return i}))},141:function(e,t,n){"use strict";n.d(t,"a",(function(){return K}));var i=n(0),r=n.n(i),a=n(145),o=n(142),s=n(149),c=n(2),u=n(148),d=n(147),l=n(143),p=n(144),h=n(146),f=n.n(h),m=n(48),g=n.n(m);function v(e){var t=e.codesTs,n=e.codesJs;return r.a.createElement(l.a,{defaultValue:"js",groupId:"code",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}]},r.a.createElement(p.a,{value:"js"},r.a.createElement(w,{lang:"js",codes:n})),r.a.createElement(p.a,{value:"ts"},r.a.createElement(w,{lang:"ts",codes:t})))}function w(e){var t=e.lang,n=e.codes,a=n.map((function(e){return e.file})),o=Object(i.useState)(a[0]),s=o[0],c=o[1],u=n.find((function(e){return e.file===s}));return r.a.createElement("div",{style:{marginTop:-12}},r.a.createElement("div",{style:{position:"sticky",top:0,backgroundColor:"white",zIndex:1}},a.map((function(e){return r.a.createElement("button",{className:g.a.fileButton+(s===e?" "+g.a.fileButtonSelected:""),key:e,onClick:function(){return c(e)}},e)}))),r.a.createElement(b,{key:u.file,lang:t,code:u.code,highlight:u.highlight}))}function b(e){var t=e.lang,n=e.code,i=e.highlight,a=n.replace("/img/bird.png","bird.png").replace("/audio/boop.wav","boop.wav");return r.a.createElement(u.a,Object(c.a)({},u.b,{theme:d.a,code:a,language:t}),(function(e){var t=e.className,n=e.style,a=e.tokens,o=e.getLineProps,s=e.getTokenProps;return r.a.createElement("div",{className:g.a.codeBlockContent},r.a.createElement("div",{tabIndex:"0",className:f()(t,g.a.codeBlock)},r.a.createElement("div",{className:g.a.codeBlockLines,style:n},a.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=o({line:e,key:t}),a=null==i?void 0:i.flatMap((function(e){if("number"==typeof e)return e;var t=e.split("-").map(Number),n=t[0],i=t[1];return Array.from({length:i-n+1}).map((function(e,t){return t+n}))}));return(null==a?void 0:a.includes(t+1))&&(n.className+=" docusaurus-highlight-code-line"),r.a.createElement("div",n,r.a.createElement("span",{style:{display:"inline-block",width:30,textAlign:"right",marginRight:16,opacity:.5,userSelect:"none"}},t+1),e.map((function(e,t){return r.a.createElement("span",s({token:e,key:t}))})))})))))}))}var y=n(150),E=n.n(y),x=n(151),j=n(140);function k(e,t,n,i,r,a,o,s,c,u){var d=Object(j.a)(t);d.opacity*=s;var l=u.nativeSpriteMap,p=u.nativeSpriteUtils,h=function(e){var t=i(e);return function(e){var t=Math.PI/180,n=-(e.rotation||0)*t;return function(t){var i=t.x,r=t.y,a=i-e.x,o=r-e.y,s=a*Math.cos(n)+o*Math.sin(n),c=-a*Math.sin(n)+o*Math.cos(n),u=s/e.scaleX,d=c/e.scaleY;return{x:u+e.anchorX,y:d+e.anchorY}}}(d)(t)},f=n(h),m=e.getSprites(t,f,r,a,o),g=[],v=m.map((function(t){if(!t)return t;if("native"===t.type){g.push(t.props.id);var i=l[t.name];if(!i)throw Error('Cannot find Native Sprite "'+t.name+'"');var r=e.childContainers[t.props.id];return r&&"native"===r.type||(r={type:"native",state:i.create({props:t.props,parentGlobalId:c,getState:function(){return r.state},updateState:function(e){r.state=Object.assign({},r.state,e)},utils:p}),cleanup:i.cleanup},e.childContainers[t.props.id]=r),r.state=i.loop({props:t.props,state:r.state,parentGlobalId:c,utils:p}),p.didResize=!1,null}if("custom"===t.type){g.push(t.props.id);var s=!1,m=e.childContainers[t.props.id];return m&&"custom"===m.type||(s=!0,m=O(t,f,e.prevTime),e.childContainers[t.props.id]=m),k(m,t.props,n,h,s,a,o,d.opacity,c+"--"+t.props.id,u)}return t})).filter(S);return function e(t){Object.keys(t).forEach((function(n){if(!g.includes(n)){var i=t[n];"native"===i.type?i.cleanup({state:i.state,parentGlobalId:c}):e(i.childContainers),delete t[n]}}))}(e.childContainers),{id:t.id,baseProps:d,textures:v}}var M=1/60*1e3;function O(e,t,n){var i,r=e.spriteObj,a=e.props,o=[],s=function(e){o.push(e)};return r.init&&(i=r.init({props:a,device:t,updateState:s})),{type:"custom",state:i,childContainers:{},prevTime:n,currentLag:0,getSprites:function(e,t,n,i,a){var c=this,u=function(){c.state=o.reduce((function(e,t){return t(e)}),c.state),o.length=0};u(),!n&&r.loop&&(this.state=r.loop({props:e,state:this.state,device:t,updateState:s})),u();var d=r[i];d||(d="renderPXL"===i&&r.renderXL?r.renderXL:r.render);var l=d({props:e,state:this.state,device:t,updateState:s,extrapolateFactor:a});return u(),l}}}function P(e,t){var n,i=e.deviceHeight>e.deviceWidth,r=!1;return"portrait"in t?(n=i?t.portrait:t.landscape,r=!0):n=t,n.minHeightXL&&e.deviceHeight>=n.minHeightXL||n.minWidthXL&&e.deviceWidth>=n.minWidthXL?r&&i?"renderPXL":"renderXL":r&&i?"renderP":"render"}function S(e){return null!==e}var T={keysDown:{},keysJustPressed:{},pointer:{pressed:!1,numberPressed:0,justPressed:!1,justReleased:!1,x:0,y:0}},L=[];function I(e){return function(e,t){var n=e(t.pointer);return Object.assign({},t,{pointer:Object.assign({},t.pointer,{x:n.x,y:n.y})})}(e,T)}function C(e){["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"," "].includes(e.key)&&!(e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLInputElement)&&e.preventDefault(),T.keysDown[e.key]=!0,T.keysJustPressed[e.key]=!0}function z(e){delete T.keysDown[e.key]}function N(e){L=L.filter((function(t){return t!==e})),T.pointer.numberPressed=L.length,0===L.length&&(T.pointer.justPressed=!1,T.pointer.pressed=!1)}function X(){T={keysDown:T.keysDown,keysJustPressed:{},pointer:Object.assign({},T.pointer,{justPressed:!1,justReleased:!1})}}function H(e,t,n,i){var r=t.width,a=t.height,o=t.widthMargin,s=t.heightMargin,c=t.deviceWidth,u=t.deviceHeight;e.save();var d=Math.min(c/r,u/a),l=r+2*o,p=a+2*s;return e.translate(c/2,u/2),e.scale(d,d),{scale:d,render:function(t){e.clearRect(-c/2/d,-u/2/d,c/d,u/d),e.fillStyle="white",e.fillRect(-l/2,-p/2,l,p),function e(t,n,i,r){var a=t.baseProps,o=t.textures;n.save(),G(n,a),o.forEach((function(t){if("type"in t){var o=A(n);return n.save(),G(n,t.props,a.opacity),function(e,t,n,i){switch(e.type){case"text":return t.text(e.props.font||i,e.props.text,e.props.align,e.props.color),0;case"circle":return t.circle(e.props.radius,e.props.color),0;case"rectangle":return t.rectangle(e.props.width,e.props.height,e.props.color),0;case"line":return t.line(e.props.path,e.props.thickness,e.props.color),0;case"image":var r=n[e.props.fileName];if(!r)throw Error('Cannot find image file "'+e.props.fileName+'"');return t.image(r,e.props.width,e.props.height),0;case"spriteSheet":t.spriteSheet(n[e.props.fileName],e.props.columns,e.props.rows,e.props.index,e.props.width,e.props.height)}}(t,o,i,r),void n.restore()}e(t,n,i,r)})),n.restore()}(t,e,n,i)}}}var D=Math.PI/180,G=function(e,t,n){void 0===n&&(n=1);var i=t.x,r=t.y,a=t.rotation,o=t.scaleX,s=t.scaleY,c=t.anchorX,u=t.anchorY,d=t.opacity;e.translate(i,-r),e.rotate(a*D),e.scale(o,s),e.translate(-c,u),e.globalAlpha=d*n,function(e,t){if(!t)return 0;switch(t.type){case"lineMask":var n=t.path,i=n[0],r=i[0],a=i[1],o=n.slice(1);return e.beginPath(),e.moveTo(r,-a),o.forEach((function(t){var n=t[0],i=t[1];e.lineTo(n,-i)})),e.clip(),0;case"circleMask":return e.beginPath(),e.arc(t.x,-t.y,Math.round(t.radius),0,2*Math.PI),e.clip(),0;case"rectangleMask":e.beginPath(),e.rect(t.x-t.width/2,-t.y-t.height/2,t.width,t.height),e.clip()}}(e,t.mask)};var R,A=function(e){return{circle:function(t,n){e.beginPath(),e.arc(0,0,Math.round(t),0,2*Math.PI),e.fillStyle=n,e.fill(),e.closePath()},rectangle:function(t,n,i){e.fillStyle=i,e.fillRect(-t/2,-n/2,t,n),e.closePath()},line:function(t,n,i){if(!(t.length<2)){var r=t[0],a=r[0],o=r[1],s=t.slice(1);e.strokeStyle=i,e.lineWidth=n,e.beginPath(),e.moveTo(a,-o),s.forEach((function(t){var n=t[0],i=t[1];e.lineTo(n,-i)})),e.stroke()}},text:function(t,n,i,r){var a=t.size+"px "+t.name;e.font=a,e.textBaseline="middle",e.textAlign=i,e.fillStyle=r,e.fillText(n,0,0)},image:function(t,n,i){e.drawImage(t,-n/2,-i/2,n,i)},spriteSheet:function(t,n,i,r,a,o){var s=t.width/n,c=t.height/i,u=r%n,d=Math.floor(r/n)%i;e.drawImage(t,u*s,d*c,s,c,-a/2,-o/2,a,o)}}};function B(e,t,n,i){var r;"portrait"in i?r=t>e?i.portrait:i.landscape:r=i;var a=r,o=a.width,s=a.height,c=a.maxWidthMargin,u=void 0===c?0:c,d=a.maxHeightMargin;if("game-coords"===n)return{width:o,height:s,widthMargin:0,heightMargin:0,deviceWidth:o,deviceHeight:s};var l=o/s;if(l>e/t){var p=e,h=p/l,f=h/s*(void 0===d?0:d),m=Math.min(t,h+2*f);return{width:o,height:s,widthMargin:0,heightMargin:(m-h)/2*(s/h),deviceWidth:p,deviceHeight:m}}var g=t,v=g*l,w=v/o*u,b=Math.min(e,v+2*w);return{width:o,height:s,widthMargin:(b-v)/2*(o/v),heightMargin:0,deviceWidth:b,deviceHeight:g}}function F(e){return function(t){function n(n){var i=e[t];if(!i)throw Error("Cannot find audio file "+t);return n&&!i.paused&&(i=new Audio(t)),i}return{getPosition:function(){return n(!1).currentTime},play:function(e,t){var i=n(!0);i.play(),void 0!==e&&(i.currentTime=e),t&&(i.loop=!0)},pause:function(){n(!1).pause()}}}}function W(){if("ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch)return!0;return window.matchMedia("(touch-enabled),(-webkit-touch-enabled),(-moz-touch-enabled),(-o-touch-enabled),(-ms-touch-enabled)").matches}var Y={name:"sans-serif",size:12};function J(e,t){var n,i=t.loadingTextures,r=void 0===i?[]:i,a=t.assets,o=void 0===a?{}:a,s=t.dimensions,c=void 0===s?"game-coords":s,u=t.nativeSpriteMap,d=void 0===u?{}:u,l=t.canvas,p=t.windowSize,h=l||document.createElement("canvas");l||document.body.appendChild(h);var f=h.getContext("2d",{alpha:!1}),m=window.AudioContext||window.webkitAudioContext;m&&new m;var g,v,w,b,y,S,I=!0;document.addEventListener("keydown",(function(e){I&&C(e)}),!1),document.addEventListener("keyup",(function(e){I&&z(e)}),!1),window.addEventListener("resize",G,!1);var D={didResize:!1,scale:1,gameXToPlatformX:function(e){return e},gameYToPlatformY:function(e){return e}};function G(t){if(!g||(f.restore(),document.removeEventListener("pointerdown",v),document.removeEventListener("pointermove",w),document.removeEventListener("pointerup",b),document.removeEventListener("pointerout",y),!0!==t)){var n=function(e,t,n,i){var r=B(e,t,n,i);return R=r,r}((null==p?void 0:p.width)||window.innerWidth,(null==p?void 0:p.height)||window.innerHeight,c,e.props.size);h.width=n.deviceWidth,h.height=n.deviceHeight;var i=e.props.defaultFont||Y,r=H(f,n,F,i);S=r.scale,J.ref=r.render,D.gameXToPlatformX=function(e){var t=e.canvasOffsetLeft,n=e.widthMargin,i=e.scale,r=e.width;return function(e){return t+i*(e+r/2+n)}}({canvasOffsetLeft:h.offsetLeft,width:n.width,widthMargin:n.widthMargin,scale:S}),D.gameYToPlatformY=function(e){var t=e.canvasOffsetTop,n=e.heightMargin,i=e.scale,r=e.height;return function(e){return t-i*(e-r/2-n)}}({canvasOffsetTop:h.offsetTop,height:n.height,heightMargin:n.heightMargin,scale:S}),D.didResize=!0,D.scale=S;var a=function(e){var t=e.canvasOffsetLeft,n=e.widthMargin,i=e.scale,r=e.width;return function(e){return(e.clientX-t)/i-n-r/2}}({canvasOffsetLeft:h.offsetLeft,width:n.width,widthMargin:n.widthMargin,scale:S}),o=function(e){var t=e.canvasOffsetTop,n=e.heightMargin,i=e.scale,r=e.height;return function(e){return-(e.clientY-t)/i+n+r/2}}({canvasOffsetTop:h.offsetTop,height:n.height,heightMargin:n.heightMargin,scale:S}),s=function(e,t){return e>n.width/2+n.widthMargin||e<-n.width/2-n.widthMargin||t>n.height/2+n.heightMargin||t<-n.height/2-n.heightMargin};v=function(e){var t=a(e),n=o(e);s(t,n)?I=!1:(I=!0,function(e,t,n){L.includes(n)||(L=[].concat(L,[n])),T.pointer.pressed=!0,T.pointer.numberPressed=L.length,T.pointer.justPressed=!0,T.pointer.x=e,T.pointer.y=t}(t,n,e.pointerId))},w=function(e){var t=a(e),n=o(e);s(t,n)||function(e,t){T.pointer.x=e,T.pointer.y=t}(t,n)},b=function(e){var t=a(e),n=o(e);s(t,n)?N(e.pointerId):function(e,t,n){0===(L=L.filter((function(e){return e!==n}))).length&&(T.pointer.justPressed=!1,T.pointer.pressed=!1),T.pointer.numberPressed=L.length,T.pointer.justReleased=!0,T.pointer.x=e,T.pointer.y=t}(t,n,e.pointerId)},y=function(e){N(e.pointerId)},document.addEventListener("pointerdown",v,!1),document.addEventListener("pointermove",w,!1),document.addEventListener("pointerup",b,!1),document.addEventListener("pointerout",y,!1),g=n}}var A={},F={},W={getGetDevice:U(A,B((null==p?void 0:p.width)||window.innerWidth,(null==p?void 0:p.height)||window.innerHeight,c,e.props.size))},J={ref:null};G();var q=!1,V=function(){var e=Object(x.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],(o.audioFileNames||[]).forEach((function(e){A[e]=new Audio(e),t.push(new Promise((function(t,n){A[e].addEventListener("canplaythrough",t),A[e].addEventListener("error",n)}))),A[e].load()})),(o.imageFileNames||[]).forEach((function(e){F[e]=new Image,t.push(new Promise((function(t,n){F[e].addEventListener("load",t),F[e].addEventListener("error",n),F[e].src=e})))})),e.next=5,Promise.all(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return null===(n=J.ref)||void 0===n||n.call(J,{id:"Loading",baseProps:Object(j.a)({}),textures:r}),{cleanup:function(){h.width=h.width,l||document.body.removeChild(h),q=!0,document.removeEventListener("keydown",C,!1),document.removeEventListener("keyup",z,!1),window.removeEventListener("resize",G,!1),G(!0)},loadPromise:V().then((function(){var t=function e(){document.removeEventListener("keydown",e,!1),document.removeEventListener("pointerdown",e,!1),Object.values(A).forEach((function(e){e.muted=!0,e.play().then((function(){e.pause(),e.muted=!1}))}))};document.addEventListener("keydown",t,!1),document.addEventListener("pointerdown",t,!1);var n=function(e,t,n,i){var r=function(e){return{x:e.x,y:e.y}},a=e.getGetDevice(),o=a(r),s=O(n,a(r),0),c=i||n.props.size,u=P(o.size,c),d=0,l=0,p=k(s,n.props,a,r,!0,u,0,1,n.props.id,t);return{initTextures:p,getNextFrameTextures:function(i,a){var o=i-d;for(d=i,l+=o;l>=M;){var u=(l-=M)/M,h=e.getGetDevice(),f=P(h(r).size,c);p=k(s,n.props,h,r,!1,f,u,1,n.props.id,t),a()}return p}}}(W,{nativeSpriteMap:d,nativeSpriteUtils:D},e),i=n.initTextures,r=n.getNextFrameTextures,a=null;!function e(t){var n;null===(n=J.ref)||void 0===n||n.call(J,t),window.requestAnimationFrame((function(t){q||(null===a&&(a=t-1/60),e(r(t-a,X)))}))}(i)})),audioElements:A}}function U(e,t){var n,i={isTouchScreen:W(),log:console.log,random:Math.random,timer:(n={},{start:function(e,t){var i=window.setTimeout((function(){delete n[r],e()}),t),r=String(i);return n[r]={timeoutId:i,callback:e,timeStartedMs:Date.now(),timeRemainingMs:t,isPaused:!1},r},pause:function(e){var t=n[e];if(t&&!t.isPaused){var i=Date.now()-t.timeStartedMs;t.timeRemainingMs-=i,t.isPaused=!0,window.clearTimeout(t.timeoutId)}},resume:function(e){var t=n[e];if(t&&t.isPaused){t.timeStartedMs=Date.now(),t.isPaused=!1;var i=window.setTimeout((function(){delete n[e],t.callback()}),t.timeRemainingMs);t.timeoutId=i}},cancel:function(e){var t=n[e];t&&(window.clearTimeout(t.timeoutId),delete n[e])}}),audio:F(e),network:{get:function(e,t){fetch(e).then((function(e){return e.json()})).then(t)},post:function(e,t,n){fetch(e,{method:"POST",body:JSON.stringify(t)}).then((function(e){return e.json()})).then(n)},put:function(e,t,n){fetch(e,{method:"PUT",body:JSON.stringify(t)}).then((function(e){return e.json()})).then(n)},delete:function(e,t){fetch(e,{method:"DELETE"}).then((function(e){return e.json()})).then(t)}},storage:{getStore:function(){for(var e,t={},n=0;n<localStorage.length;n++){var i=localStorage.key(n);i&&(t[i]=null!==(e=localStorage.getItem(i))&&void 0!==e?e:void 0)}return t},setStore:function(e){Object.entries(e).forEach((function(e){var t=e[0],n=e[1];void 0===n?localStorage.removeItem(t):localStorage.setItem(t,n)}))}},alert:{ok:function(e,t){alert(e),null==t||t()},okCancel:function(e,t){t(confirm(e))}},clipboard:{copy:function(e,t){navigator.clipboard?navigator.clipboard.writeText(e).then((function(){t()})).catch((function(e){t(e)})):t(new Error(window.isSecureContext?"Couldn't access clipboard":"Clipboard only available on HTTPS or localhost"))}}};return function(){var e=Object.assign({},i,{size:R||t,now:function(){return new Date}});return function(t){return Object.assign({},e,{inputs:I(t)})}}}var q=n(138);function V(e){var t=e.Game,n=e.gameProps,a=e.showReload,o=e.assets,s=function(){var e=Object(i.useRef)(null),t=Object(i.useState)(null),n=t[0],r=t[1],a=function(){r(e.current.getBoundingClientRect())};Object(i.useEffect)((function(){return window.addEventListener("resize",a,!1),function(){return window.removeEventListener("resize",a,!1)}}),[]);var o=Object(i.useCallback)((function(t){null!==t&&(e.current=t,a())}),[]);return Object(i.useEffect)((function(){document.getElementById("iphone-img").onload=function(){a()}}),[]),[n,o]}(),c=s[0],u=s[1],d=Object(i.useState)(0),l=d[0],p=d[1],h=0,f=0,m=0;if(c&&c.height&&c.width){c.width/c.height>375/667?(f=c.height*(667/900),h=f*(375/667)):(h=c.width*(375/460),f=h/(375/667));var v=n.size.maxHeightMargin?0:.08*f;m=(c.height-f)/2+v}return Object(i.useEffect)((function(){if(h&&f){var e=document.getElementById("myCanvas"),i=J(t(n),{loadingTextures:[q.b.text({color:"black",text:"Loading..."})],assets:o,dimensions:"scale-up",canvas:e,windowSize:{width:h,height:f}}).cleanup;return function(){i()}}}),[h,f,l]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{ref:u,style:{height:"100%",width:"100%",display:"flex",justifyContent:"center"}},r.a.createElement("img",{id:"iphone-img",style:{userSelect:"none",objectFit:"contain",maxHeight:"100%"},src:"/img/iPhone8-Portrait-SpaceGray.png"})),a&&r.a.createElement("img",{className:g.a.refresh,src:"/img/reload.svg",width:20,height:20,onClick:function(){return p((function(e){return e+1}))}}),r.a.createElement("canvas",{id:"myCanvas",style:{position:"absolute",marginTop:m},width:h,height:f}))}function K(e){var t=e.part,n=e.MDXContent,i=e.codesTs,c=e.codesJs,u=e.Game,d=e.gameProps,l=e.image,p=e.isEnd,h=e.assets,f=i&&c,m=u&&d?r.a.createElement(s.a,{fallback:r.a.createElement("div",null,"Preview")},(function(){return r.a.createElement(V,{Game:u,gameProps:d,showReload:f,assets:h})})):r.a.createElement("div",null,r.a.createElement("img",{src:l}));return r.a.createElement(a.a,{title:"Tutorial - Part "+t,noFooter:!0},r.a.createElement("div",{style:{display:"flex",minWidth:1024,height:"calc(100vh - 60px)"}},r.a.createElement("div",{style:{flex:"1",overflow:"auto",padding:16,borderRight:"1px solid #ededed"}},r.a.createElement(n,null),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},t>1?r.a.createElement(o.a,{to:"/tutorial/"+(t-1)},"Back"):r.a.createElement("div",null),p?r.a.createElement("div",null):r.a.createElement(o.a,{to:"/tutorial/"+(t+1)},"Next"))),f?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{flex:"1",overflow:"auto",borderRight:"1px solid #ededed"}},r.a.createElement(v,{codesTs:i,codesJs:c})),r.a.createElement("div",{style:{flex:"1",display:"flex",justifyContent:"center"}},m)):r.a.createElement("div",{style:{flex:"2",display:"flex",justifyContent:"center"}},m)))}},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var i=n(2),r=n(6),a=(n(0),n(139)),o={},s={unversionedId:"tutorial/5",id:"tutorial/5",isDocsHomePage:!1,title:"5",description:"5 - Game Size",source:"@site/docs/tutorial/5.md",permalink:"/docs/tutorial/5",editUrl:"https://github.com/edbentley/replay/edit/master/website/docs/tutorial/5.md"},c=[],u={rightToc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"5---game-size"},"5 - Game Size"),Object(a.b)("p",null,"In our ",Object(a.b)("inlineCode",{parentName:"p"},"gameProps")," ",Object(a.b)("inlineCode",{parentName:"p"},"size"),", we set a height of 600 and width of 400, which works well for portrait devices. Note that these are game coordinates, not pixels! The important thing is the ",Object(a.b)("em",{parentName:"p"},"aspect ratio")," (width and height ratio)."),Object(a.b)("p",null,"Our game has a 3:2 aspect ratio, but our iPhone on the right has a 16:9 aspect ratio, which caused black bars to be rendered at the top and bottom before."),Object(a.b)("p",null,"To fix this we can add a height ",Object(a.b)("em",{parentName:"p"},"margin"),". Update ",Object(a.b)("inlineCode",{parentName:"p"},"gameProps")," with a ",Object(a.b)("inlineCode",{parentName:"p"},"maxHeightMargin")," to remove the black bars."),Object(a.b)("p",null,"Our 400x600 area is the ",Object(a.b)("em",{parentName:"p"},"safe zone")," where we put important things. Outside of this area may not be visible on some screens, depending on their size, but you can still fill it up with visuals like backgrounds."))}d.isMDXComponent=!0}}]);