(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{155:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(1),i=n(9),a=(n(0),n(221)),o={},c={id:"tutorial/2",title:"2",description:"# 2 - Bird Sprite",source:"@site/docs/tutorial/2.md",permalink:"/docs/tutorial/2",editUrl:"https://github.com/edbentley/replay/edit/master/website/docs/tutorial/2.md"},s=[],u={rightToc:s};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"2---bird-sprite"},"2 - Bird Sprite"),Object(a.b)("p",null,"Let's start off by creating our bird in a new file within the ",Object(a.b)("inlineCode",{parentName:"p"},"src")," folder, as you can see in the code block on the right."),Object(a.b)("p",null,"We'll represent our bird as a ",Object(a.b)("em",{parentName:"p"},"Sprite"),". Sprites are the building blocks of Replay, and provide a neat way to modularise our code."),Object(a.b)("p",null,"For now we'll just render a yellow rectangle in the middle of the screen. To do this we create a new Sprite with ",Object(a.b)("inlineCode",{parentName:"p"},"makeSprite"),", passing in an object with a ",Object(a.b)("inlineCode",{parentName:"p"},"render")," method."),Object(a.b)("p",null,"All Sprites need a ",Object(a.b)("inlineCode",{parentName:"p"},"render")," method which returns an array of other Sprites. For our bird, we return a rectangle ",Object(a.b)("em",{parentName:"p"},"Texture"),". Textures are elements to draw onto the screen like text, images and shapes. In this case, we use Replay's ",Object(a.b)("inlineCode",{parentName:"p"},"t.rectangle")," Texture, and pass in the width, height and color ",Object(a.b)("em",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"em"},"props")),"."))}l.isMDXComponent=!0},215:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),a=n(227),o=n(249),c=n(155);t.default=function(){return i.a.createElement(a.a,{part:2,MDXContent:c.default,codesTs:[{file:"bird.ts",code:'import { makeSprite, t } from "@replay/core";\n\nexport const birdWidth = 50;\nexport const birdHeight = 40;\n\nexport const Bird = makeSprite({\n  render() {\n    return [\n      t.rectangle({\n        width: birdWidth,\n        height: birdHeight,\n        color: "yellow",\n      }),\n    ];\n  },\n});\n'}],codesJs:[{file:"bird.js",code:'import { makeSprite, t } from "@replay/core";\n\nexport const birdWidth = 50;\nexport const birdHeight = 40;\n\nexport const Bird = makeSprite({\n  render() {\n    return [\n      t.rectangle({\n        width: birdWidth,\n        height: birdHeight,\n        color: "yellow",\n      }),\n    ];\n  },\n});\n'}],Game:o.a,gameProps:o.b})}},220:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}));n(52);var r=n(222),i={text:function(e){return{type:"text",props:Object.assign(Object.assign({testId:e.testId},Object(r.a)(e)),{},{font:e.font,text:e.text,align:e.align||"center",color:e.color})}},circle:function(e){return{type:"circle",props:Object.assign(Object.assign({testId:e.testId},Object(r.a)(e)),{},{radius:e.radius,color:e.color})}},rectangle:function(e){return{type:"rectangle",props:Object.assign(Object.assign({testId:e.testId},Object(r.a)(e)),{},{width:e.width,height:e.height,color:e.color})}},line:function(e){var t;return{type:"line",props:Object.assign(Object.assign({testId:e.testId},Object(r.a)(e)),{},{color:e.color,thickness:null!==(t=e.thickness)&&void 0!==t?t:1,path:e.path})}},image:function(e){return{type:"image",props:Object.assign(Object.assign({testId:e.testId},Object(r.a)(e)),{},{fileName:e.fileName,width:e.width,height:e.height})}},spriteSheet:function(e){return{type:"spriteSheet",props:Object.assign(Object.assign({testId:e.testId},Object(r.a)(e)),{},{fileName:e.fileName,columns:e.columns,rows:e.rows,index:e.index,width:e.width,height:e.height})}}};function a(e){return function(t){return{type:"custom",spriteObj:e,props:t}}}},222:function(e,t,n){"use strict";function r(e){var t,n,r;return{x:e.x||0,y:e.y||0,rotation:e.rotation||0,opacity:Math.min(1,Math.max(0,null!==(t=e.opacity)&&void 0!==t?t:1)),scaleX:null!==(n=e.scaleX)&&void 0!==n?n:1,scaleY:null!==(r=e.scaleY)&&void 0!==r?r:1,anchorX:e.anchorX||0,anchorY:e.anchorY||0,mask:e.mask||null}}n.d(t,"a",(function(){return r}))},227:function(e,t,n){"use strict";n.d(t,"a",(function(){return U}));var r=n(0),i=n.n(r),a=n(231),o=n(228),c=n(236),s=n(1),u=(n(223),n(224),n(78),n(237),n(232),n(79),n(238),n(80),n(233),n(235)),l=n(234),d=n(230),p=n(229),h=n(226),f=n.n(h),m=n(132),g=n.n(m);function v(e){var t=e.codesTs,n=e.codesJs;return i.a.createElement(d.a,{defaultValue:"js",groupId:"code",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}]},i.a.createElement(p.a,{value:"js"},i.a.createElement(w,{lang:"js",codes:n})),i.a.createElement(p.a,{value:"ts"},i.a.createElement(w,{lang:"ts",codes:t})))}function w(e){var t=e.lang,n=e.codes,a=n.map((function(e){return e.file})),o=Object(r.useState)(a[0]),c=o[0],s=o[1],u=n.find((function(e){return e.file===c}));return i.a.createElement("div",{style:{marginTop:-12}},i.a.createElement("div",{style:{position:"sticky",top:0,backgroundColor:"white",zIndex:1}},a.map((function(e){return i.a.createElement("button",{className:g.a.fileButton+(c===e?" "+g.a.fileButtonSelected:""),key:e,onClick:function(){return s(e)}},e)}))),i.a.createElement(b,{key:u.file,lang:t,code:u.code,highlight:u.highlight}))}function b(e){var t=e.lang,n=e.code,r=e.highlight,a=n.replace("/img/bird.png","bird.png").replace("/audio/boop.wav","boop.wav");return i.a.createElement(u.a,Object(s.a)({},u.b,{theme:l.a,code:a,language:t}),(function(e){var t=e.className,n=e.style,a=e.tokens,o=e.getLineProps,c=e.getTokenProps;return i.a.createElement("div",{className:g.a.codeBlockContent},i.a.createElement("div",{tabIndex:"0",className:f()(t,g.a.codeBlock)},i.a.createElement("div",{className:g.a.codeBlockLines,style:n},a.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=o({line:e,key:t}),a=null==r?void 0:r.flatMap((function(e){if("number"==typeof e)return e;var t=e.split("-").map(Number),n=t[0],r=t[1];return Array.from({length:r-n+1}).map((function(e,t){return t+n}))}));return(null==a?void 0:a.includes(t+1))&&(n.className+=" docusaurus-highlight-code-line"),i.a.createElement("div",n,i.a.createElement("span",{style:{display:"inline-block",width:30,textAlign:"right",marginRight:16,opacity:.5,userSelect:"none"}},t+1),e.map((function(e,t){return i.a.createElement("span",c({token:e,key:t}))})))})))))}))}n(52),n(239),n(81);var y=n(240),j=n.n(y),E=(n(25),n(20),n(54),n(21),n(241),n(242)),x=(n(53),n(225),n(222));function O(e,t,n,r,i,a,o,c,s,u){var l=Object(x.a)(t);l.opacity*=c;var d=u.nativeSpriteMap,p=u.nativeSpriteUtils,h=function(e){var t=r(e);return function(e){var t=Math.PI/180,n=-(e.rotation||0)*t;return function(t){var r=t.x,i=t.y,a=r-e.x,o=i-e.y,c=a*Math.cos(n)+o*Math.sin(n),s=-a*Math.sin(n)+o*Math.cos(n),u=c/e.scaleX,l=s/e.scaleY;return{x:u+e.anchorX,y:l+e.anchorY}}}(l)(t)},f=n(h),m=e.getSprites(t,f,i,a,o),g=[],v=m.map((function(t){if(!t)return t;if("native"===t.type){g.push(t.props.id);var r=d[t.name];if(!r)throw Error('Cannot find Native Sprite "'+t.name+'"');var i=e.childContainers[t.props.id];return i&&"native"===i.type||(i={type:"native",state:r.create({props:t.props,parentGlobalId:s,getState:function(){return i.state},updateState:function(e){i.state=Object.assign(Object.assign({},i.state),e)},utils:p}),cleanup:r.cleanup},e.childContainers[t.props.id]=i),i.state=r.loop({props:t.props,state:i.state,parentGlobalId:s,utils:p}),p.didResize=!1,null}if("custom"===t.type){g.push(t.props.id);var c=!1,m=e.childContainers[t.props.id];return m&&"custom"===m.type||(c=!0,m=M(t,f,e.prevTime),e.childContainers[t.props.id]=m),O(m,t.props,n,h,c,a,o,l.opacity,s+"--"+t.props.id,u)}return t})).filter(P);return function e(t){Object.keys(t).forEach((function(n){if(!g.includes(n)){var r=t[n];"native"===r.type?r.cleanup({state:r.state,parentGlobalId:s}):e(r.childContainers),delete t[n]}}))}(e.childContainers),{id:t.id,baseProps:l,textures:v}}var k=1/60*1e3;function M(e,t,n){var r,i=e.spriteObj,a=e.props,o=[],c=function(e){o.push(e)};return i.init&&(r=i.init({props:a,device:t,updateState:c})),{type:"custom",state:r,childContainers:{},prevTime:n,currentLag:0,getSprites:function(e,t,n,r,a){var s=this,u=function(){s.state=o.reduce((function(e,t){return t(e)}),s.state),o.length=0};u(),!n&&i.loop&&(this.state=i.loop({props:e,state:this.state,device:t,updateState:c})),u();var l=i[r];l||(l="renderPXL"===r&&i.renderXL?i.renderXL:i.render);var d=l({props:e,state:this.state,device:t,updateState:c,extrapolateFactor:a});return u(),d}}}function S(e,t){var n,r=e.deviceHeight>e.deviceWidth,i=!1;return"portrait"in t?(n=r?t.portrait:t.landscape,i=!0):n=t,n.minHeightXL&&e.deviceHeight>=n.minHeightXL||n.minWidthXL&&e.deviceWidth>=n.minWidthXL?i&&r?"renderPXL":"renderXL":i&&r?"renderP":"render"}function P(e){return null!==e}var T={keysDown:{},keysJustPressed:{},pointer:{pressed:!1,justPressed:!1,justReleased:!1,x:0,y:0}};function L(e){return function(e,t){var n=e(t.pointer);return Object.assign(Object.assign({},t),{},{pointer:Object.assign(Object.assign({},t.pointer),{},{x:n.x,y:n.y})})}(e,T)}function C(e){["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"," "].includes(e.key)&&!(e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLInputElement)&&e.preventDefault(),T.keysDown[e.key]=!0,T.keysJustPressed[e.key]=!0}function I(e){delete T.keysDown[e.key]}function N(){T.pointer.justPressed=!1,T.pointer.pressed=!1}function X(){T={keysDown:T.keysDown,keysJustPressed:{},pointer:Object.assign(Object.assign({},T.pointer),{},{justPressed:!1,justReleased:!1})}}n(243);function R(e,t,n,r){var i=t.width,a=t.height,o=t.widthMargin,c=t.heightMargin,s=t.deviceWidth,u=t.deviceHeight;e.save();var l=Math.min(s/i,u/a),d=i+2*o,p=a+2*c;return e.translate(s/2,u/2),e.scale(l,l),{scale:l,render:function(t){e.clearRect(-s/2/l,-u/2/l,s/l,u/l),e.fillStyle="white",e.fillRect(-d/2,-p/2,d,p),function e(t,n,r,i){var a=t.baseProps,o=t.textures;n.save(),z(n,a),o.forEach((function(t){if("type"in t){var o=W(n);return n.save(),z(n,t.props,a.opacity),function(e,t,n,r){switch(e.type){case"text":return t.text(e.props.font||r,e.props.text,e.props.align,e.props.color),0;case"circle":return t.circle(e.props.radius,e.props.color),0;case"rectangle":return t.rectangle(e.props.width,e.props.height,e.props.color),0;case"line":return t.line(e.props.path,e.props.thickness,e.props.color),0;case"image":var i=n[e.props.fileName];if(!i)throw Error('Cannot find image file "'+e.props.fileName+'"');return t.image(i,e.props.width,e.props.height),0;case"spriteSheet":t.spriteSheet(n[e.props.fileName],e.props.columns,e.props.rows,e.props.index,e.props.width,e.props.height)}}(t,o,r,i),void n.restore()}e(t,n,r,i)})),n.restore()}(t,e,n,r)}}}var H=Math.PI/180,z=function(e,t,n){void 0===n&&(n=1);var r=t.x,i=t.y,a=t.rotation,o=t.scaleX,c=t.scaleY,s=t.anchorX,u=t.anchorY,l=t.opacity;e.translate(r,-i),e.rotate(a*H),e.scale(o,c),e.translate(-s,u),e.globalAlpha=l*n,function(e,t){if(!t)return 0;switch(t.type){case"lineMask":var n=t.path,r=n[0],i=r[0],a=r[1],o=n.slice(1);return e.beginPath(),e.moveTo(i,-a),o.forEach((function(t){var n=t[0],r=t[1];e.lineTo(n,-r)})),e.clip(),0;case"circleMask":return e.beginPath(),e.arc(t.x,-t.y,Math.round(t.radius),0,2*Math.PI),e.clip(),0;case"rectangleMask":e.beginPath(),e.rect(t.x-t.width/2,-t.y-t.height/2,t.width,t.height),e.clip()}}(e,t.mask)};var D,W=function(e){return{circle:function(t,n){e.beginPath(),e.arc(0,0,Math.round(t),0,2*Math.PI),e.fillStyle=n,e.fill(),e.closePath()},rectangle:function(t,n,r){e.fillStyle=r,e.fillRect(-t/2,-n/2,t,n),e.closePath()},line:function(t,n,r){if(!(t.length<2)){var i=t[0],a=i[0],o=i[1],c=t.slice(1);e.strokeStyle=r,e.lineWidth=n,e.beginPath(),e.moveTo(a,-o),c.forEach((function(t){var n=t[0],r=t[1];e.lineTo(n,-r)})),e.stroke()}},text:function(t,n,r,i){var a=t.size+"px "+t.name;e.font=a,e.textBaseline="middle",e.textAlign=r,e.fillStyle=i,e.fillText(n,0,0)},image:function(t,n,r){e.drawImage(t,-n/2,-r/2,n,r)},spriteSheet:function(t,n,r,i,a,o){var c=t.width/n,s=t.height/r,u=i%n,l=Math.floor(i/n)%r;e.drawImage(t,u*c,l*s,c,s,-a/2,-o/2,a,o)}}};function B(e,t,n,r){var i;"portrait"in r?i=t>e?r.portrait:r.landscape:i=r;var a=i,o=a.width,c=a.height,s=a.maxWidthMargin,u=void 0===s?0:s,l=a.maxHeightMargin;if("game-coords"===n)return{width:o,height:c,widthMargin:0,heightMargin:0,deviceWidth:o,deviceHeight:c};var d=o/c;if(d>e/t){var p=e,h=p/d,f=h/c*(void 0===l?0:l),m=Math.min(t,h+2*f);return{width:o,height:c,widthMargin:0,heightMargin:(m-h)/2*(c/h),deviceWidth:p,deviceHeight:m}}var g=t,v=g*d,w=v/o*u,b=Math.min(e,v+2*w);return{width:o,height:c,widthMargin:(b-v)/2*(o/v),heightMargin:0,deviceWidth:b,deviceHeight:g}}var F={name:"sans-serif",size:12};function A(e,t,n,r,i,a,o){var c;void 0===t&&(t=[]),void 0===n&&(n={}),void 0===r&&(r="game-coords");var s=a||document.createElement("canvas");a||document.body.appendChild(s);var u,l,d,p,h,f=s.getContext("2d",{alpha:!1}),m=!0;document.addEventListener("keydown",(function(e){m&&C(e)}),!1),document.addEventListener("keyup",(function(e){m&&I(e)}),!1),window.addEventListener("resize",v,!1);var g={didResize:!1,scale:1,gameXToPlatformX:function(e){return e},gameYToPlatformY:function(e){return e}};function v(t){if(!u||(f.restore(),document.removeEventListener("pointerdown",l),document.removeEventListener("pointermove",d),document.removeEventListener("pointerup",p),document.removeEventListener("pointerout",N),!0!==t)){var n=function(e,t,n,r){var i=B(e,t,n,r);return D=i,i}((null==o?void 0:o.width)||window.innerWidth,(null==o?void 0:o.height)||window.innerHeight,r,e.props.size);s.width=n.deviceWidth,s.height=n.deviceHeight;var i=e.props.defaultFont||F,a=R(f,n,b,i);h=a.scale,P.ref=a.render,g.gameXToPlatformX=function(e){var t=e.canvasOffsetLeft,n=e.widthMargin,r=e.scale,i=e.width;return function(e){return t+r*(e+i/2+n)}}({canvasOffsetLeft:s.offsetLeft,width:n.width,widthMargin:n.widthMargin,scale:h}),g.gameYToPlatformY=function(e){var t=e.canvasOffsetTop,n=e.heightMargin,r=e.scale,i=e.height;return function(e){return t-r*(e-i/2-n)}}({canvasOffsetTop:s.offsetTop,height:n.height,heightMargin:n.heightMargin,scale:h}),g.didResize=!0,g.scale=h;var c=function(e){var t=e.canvasOffsetLeft,n=e.widthMargin,r=e.scale,i=e.width;return function(e){return(e.clientX-t)/r-n-i/2}}({canvasOffsetLeft:s.offsetLeft,width:n.width,widthMargin:n.widthMargin,scale:h}),v=function(e){var t=e.canvasOffsetTop,n=e.heightMargin,r=e.scale,i=e.height;return function(e){return-(e.clientY-t)/r+n+i/2}}({canvasOffsetTop:s.offsetTop,height:n.height,heightMargin:n.heightMargin,scale:h}),w=function(e,t){return e>n.width/2+n.widthMargin||e<-n.width/2-n.widthMargin||t>n.height/2+n.heightMargin||t<-n.height/2-n.heightMargin};l=function(e){var t=c(e),n=v(e);w(t,n)?m=!1:(m=!0,function(e,t){T.pointer={pressed:!0,justPressed:!0,justReleased:!1,x:e,y:t}}(t,n))},d=function(e){var t=c(e),n=v(e);w(t,n)||function(e,t){T.pointer.x=e,T.pointer.y=t}(t,n)},p=function(e){var t=c(e),n=v(e);w(t,n)?N():function(e,t){T.pointer.justPressed=!1,T.pointer.pressed=!1,T.pointer.justReleased=!0,T.pointer.x=e,T.pointer.y=t}(t,n)},document.addEventListener("pointerdown",l,!1),document.addEventListener("pointermove",d,!1),document.addEventListener("pointerup",p,!1),document.addEventListener("pointerout",N,!1),u=n}}var w={},b={},y={getGetDevice:G(w,B((null==o?void 0:o.width)||window.innerWidth,(null==o?void 0:o.height)||window.innerHeight,r,e.props.size))},P={ref:null};v();var L=!1,H=function(){var e=Object(E.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],(n.audioFileNames||[]).forEach((function(e){w[e]=new Audio(e),t.push(new Promise((function(t,n){w[e].addEventListener("canplaythrough",t),w[e].addEventListener("error",n)}))),w[e].load()})),(n.imageFileNames||[]).forEach((function(e){b[e]=new Image,t.push(new Promise((function(t,n){b[e].addEventListener("load",t),b[e].addEventListener("error",n),b[e].src=e})))})),e.next=5,Promise.all(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return null===(c=P.ref)||void 0===c||c.call(P,{id:"Loading",baseProps:Object(x.a)({}),textures:t}),{cleanup:function(){s.width=s.width,a||document.body.removeChild(s),L=!0,document.removeEventListener("keydown",C,!1),document.removeEventListener("keyup",I,!1),window.removeEventListener("resize",v,!1),v(!0)},loadPromise:H().then((function(){var t=function e(){document.removeEventListener("keydown",e,!1),document.removeEventListener("pointerdown",e,!1),Object.values(w).forEach((function(e){e.muted=!0,e.play().then((function(){e.pause(),e.muted=!1}))}))};document.addEventListener("keydown",t,!1),document.addEventListener("pointerdown",t,!1);var n=function(e,t,n,r){var i=n||game.Game(game.gameProps),a=function(e){return{x:e.x,y:e.y}},o=e.getGetDevice(),c=o(a),s=M(i,o(a),0),u=r||i.props.size,l=S(c.size,u),d=0,p=0,h=O(s,i.props,o,a,!0,l,0,1,i.props.id,t);return{initTextures:h,getNextFrameTextures:function(n,r){var o=n-d;for(d=n,p+=o;p>=k;){var c=(p-=k)/k,l=e.getGetDevice(),f=S(l(a).size,u);h=O(s,i.props,l,a,!1,f,c,1,i.props.id,t),r()}return h}}}(y,{nativeSpriteMap:i||{},nativeSpriteUtils:g},e),r=n.initTextures,a=n.getNextFrameTextures,o=null;!function e(t){var n;null===(n=P.ref)||void 0===n||n.call(P,t),window.requestAnimationFrame((function(t){L||(null===o&&(o=t-1/60),e(a(t-o,X)))}))}(r)})),audioElements:w}}function G(e,t){var n,r={log:console.log,random:Math.random,timer:(n={},{start:function(e,t){var r=window.setTimeout((function(){delete n[i],e()}),t),i=String(r);return n[i]={timeoutId:r,callback:e,timeStartedMs:Date.now(),timeRemainingMs:t,isPaused:!1},i},pause:function(e){var t=n[e];if(t&&!t.isPaused){var r=Date.now()-t.timeStartedMs;t.timeRemainingMs-=r,t.isPaused=!0,window.clearTimeout(t.timeoutId)}},resume:function(e){var t=n[e];if(t&&t.isPaused){t.timeStartedMs=Date.now(),t.isPaused=!1;var r=window.setTimeout((function(){delete n[e],t.callback()}),t.timeRemainingMs);t.timeoutId=r}},cancel:function(e){var t=n[e];t&&(window.clearTimeout(t.timeoutId),delete n[e])}}),audio:function(t){function n(n){var r=e[t];if(!r)throw Error("Cannot find audio file "+t);return n&&!r.paused&&(r=new Audio(t)),r}return{getPosition:function(){return n(!1).currentTime},play:function(e,t){var r=n(!0);r.play(),void 0!==e&&(r.currentTime=e),t&&(r.loop=!0)},pause:function(){n(!1).pause()}}},network:{get:function(e,t){fetch(e).then((function(e){return e.json()})).then(t)},post:function(e,t,n){fetch(e,{method:"POST",body:JSON.stringify(t)}).then((function(e){return e.json()})).then(n)},put:function(e,t,n){fetch(e,{method:"PUT",body:JSON.stringify(t)}).then((function(e){return e.json()})).then(n)},delete:function(e,t){fetch(e,{method:"DELETE"}).then((function(e){return e.json()})).then(t)}},storage:{getStore:function(){for(var e,t={},n=0;n<localStorage.length;n++){var r=localStorage.key(n);r&&(t[r]=null!==(e=localStorage.getItem(r))&&void 0!==e?e:void 0)}return t},setStore:function(e){Object.entries(e).forEach((function(e){var t=e[0],n=e[1];void 0===n?localStorage.removeItem(t):localStorage.setItem(t,n)}))}},alert:{ok:function(e,t){alert(e),null==t||t()},okCancel:function(e,t){t(confirm(e))}},clipboard:{copy:function(e,t){navigator.clipboard?navigator.clipboard.writeText(e).then((function(){t()})).catch((function(e){t(e)})):t(new Error(window.isSecureContext?"Couldn't access clipboard":"Clipboard only available on HTTPS or localhost"))}}};return function(){var e=Object.assign(Object.assign({},r),{},{size:D||t,now:function(){return new Date}});return function(t){return Object.assign(Object.assign({},e),{},{inputs:L(t)})}}}var Y=n(220);function J(e){var t=e.Game,n=e.gameProps,a=e.showReload,o=e.assets,c=function(){var e=Object(r.useRef)(null),t=Object(r.useState)(null),n=t[0],i=t[1],a=function(){i(e.current.getBoundingClientRect())};Object(r.useEffect)((function(){return window.addEventListener("resize",a,!1),function(){return window.removeEventListener("resize",a,!1)}}),[]);var o=Object(r.useCallback)((function(t){null!==t&&(e.current=t,a())}),[]);return Object(r.useEffect)((function(){document.getElementById("iphone-img").onload=function(){a()}}),[]),[n,o]}(),s=c[0],u=c[1],l=Object(r.useState)(0),d=l[0],p=l[1],h=0,f=0,m=0;if(s&&s.height&&s.width){s.width/s.height>375/667?(f=s.height*(667/900),h=f*(375/667)):(h=s.width*(375/460),f=h/(375/667));var v=n.size.maxHeightMargin?0:.08*f;m=(s.height-f)/2+v}return Object(r.useEffect)((function(){if(h&&f){var e=document.getElementById("myCanvas"),r=A(t(n),[Y.b.text({color:"black",text:"Loading..."})],o,"scale-up",{},e,{width:h,height:f}).cleanup;return function(){r()}}}),[h,f,d]),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{ref:u,style:{height:"100%",width:"100%",display:"flex",justifyContent:"center"}},i.a.createElement("img",{id:"iphone-img",style:{userSelect:"none",objectFit:"contain",maxHeight:"100%"},src:"/img/iPhone8-Portrait-SpaceGray.png"})),a&&i.a.createElement("img",{className:g.a.refresh,src:"/img/reload.svg",width:20,height:20,onClick:function(){return p((function(e){return e+1}))}}),i.a.createElement("canvas",{id:"myCanvas",style:{position:"absolute",marginTop:m},width:h,height:f}))}function U(e){var t=e.part,n=e.MDXContent,r=e.codesTs,s=e.codesJs,u=e.Game,l=e.gameProps,d=e.image,p=e.isEnd,h=e.assets,f=r&&s,m=u&&l?i.a.createElement(c.a,{fallback:i.a.createElement("div",null,"Preview")},(function(){return i.a.createElement(J,{Game:u,gameProps:l,showReload:f,assets:h})})):i.a.createElement("div",null,i.a.createElement("img",{src:d}));return i.a.createElement(a.a,{title:"Tutorial - Part "+t,noFooter:!0},i.a.createElement("div",{style:{display:"flex",minWidth:1024,height:"calc(100vh - 60px)"}},i.a.createElement("div",{style:{flex:"1",overflow:"auto",padding:16,borderRight:"1px solid #ededed"}},i.a.createElement(n,null),i.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},t>1?i.a.createElement(o.a,{to:"/tutorial/"+(t-1)},"Back"):i.a.createElement("div",null),p?i.a.createElement("div",null):i.a.createElement(o.a,{to:"/tutorial/"+(t+1)},"Next"))),f?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{flex:"1",overflow:"auto",borderRight:"1px solid #ededed"}},i.a.createElement(v,{codesTs:r,codesJs:s})),i.a.createElement("div",{style:{flex:"1",display:"flex",justifyContent:"center"}},m)):i.a.createElement("div",{style:{flex:"2",display:"flex",justifyContent:"center"}},m)))}},249:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var r=n(220),i=Object(r.a)({render:function(){return[r.b.rectangle({width:50,height:40,color:"yellow"})]}}),a=Object(r.a)({render:function(){return[i({id:"bird"})]}}),o={id:"Game",size:{width:400,height:600},defaultFont:{name:"Helvetica",size:24}}}}]);