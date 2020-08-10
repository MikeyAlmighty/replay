(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{152:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var i=n(1),r=n(9),a=(n(0),n(221)),o={},s={id:"tutorial/6",title:"6",description:"# 6 - State",source:"@site/docs/tutorial/6.md",permalink:"/docs/tutorial/6",editUrl:"https://github.com/edbentley/replay/edit/master/website/docs/tutorial/6.md"},c=[],l={rightToc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"6---state"},"6 - State"),Object(a.b)("p",null,"Our game isn't very interesting right now, we need the bird to move! To do this we'll create a Sprite with ",Object(a.b)("em",{parentName:"p"},"state"),"."),Object(a.b)("p",null,"In a new file ",Object(a.b)("inlineCode",{parentName:"p"},"level")," let's add a Sprite called ",Object(a.b)("inlineCode",{parentName:"p"},"Level"),", which will hold most of our game logic."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"Level")," Sprite has an ",Object(a.b)("inlineCode",{parentName:"p"},"init")," method which returns our initial state. We then access our ",Object(a.b)("inlineCode",{parentName:"p"},"state")," in the ",Object(a.b)("inlineCode",{parentName:"p"},"render")," method."),Object(a.b)("p",null,"To set the bird's position, we can add an ",Object(a.b)("inlineCode",{parentName:"p"},"x")," and ",Object(a.b)("inlineCode",{parentName:"p"},"y")," coordinate ",Object(a.b)("inlineCode",{parentName:"p"},"prop")," to the ",Object(a.b)("inlineCode",{parentName:"p"},"Bird")," Sprite. All Sprites (including Textures) take an ",Object(a.b)("inlineCode",{parentName:"p"},"x")," and ",Object(a.b)("inlineCode",{parentName:"p"},"y")," prop."),Object(a.b)("p",null,"In our top-level ",Object(a.b)("inlineCode",{parentName:"p"},"Game")," Sprite we should also import the ",Object(a.b)("inlineCode",{parentName:"p"},"Level")," Sprite instead of the ",Object(a.b)("inlineCode",{parentName:"p"},"Bird")," Sprite."))}d.isMDXComponent=!0},204:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),a=n(227),o=n(220),s=Object(o.a)({render:function(){return[o.b.rectangle({width:50,height:40,color:"yellow"})]}}),c=Object(o.a)({init:function(){return{birdY:10,birdGravity:-12}},render:function(e){var t=e.state;return[s({id:"bird",x:0,y:t.birdY})]}}),l=Object(o.a)({render:function(){return[c({id:"level"})]}}),d={id:"Game",size:{width:400,height:600,maxHeightMargin:150},defaultFont:{name:"Helvetica",size:24}},u=n(152);t.default=function(){return r.a.createElement(a.a,{part:6,MDXContent:u.default,codesTs:[{file:"level.ts",code:'import { makeSprite } from "@replay/core";\nimport { WebInputs } from "@replay/web";\nimport { iOSInputs } from "@replay/swift";\nimport { Bird } from "./bird";\n\nconst birdX = 0;\n\ntype LevelState = {\n  birdY: number;\n  birdGravity: number;\n};\n\nexport const Level = makeSprite<{}, LevelState, WebInputs | iOSInputs>({\n  init() {\n    return {\n      birdY: 10,\n      birdGravity: -12,\n    };\n  },\n\n  render({ state }) {\n    return [\n      Bird({\n        id: "bird",\n        x: birdX,\n        y: state.birdY,\n      }),\n    ];\n  },\n});\n'},{file:"index.ts",code:'import { makeSprite, GameProps } from "@replay/core";\nimport { Level } from "./level";\n\nexport const Game = makeSprite<GameProps>({\n  render() {\n    return [\n      Level({\n        id: "level",\n      }),\n    ];\n  },\n});\n\nexport const gameProps: GameProps = {\n  id: "Game",\n  size: {\n    width: 400,\n    height: 600,\n    maxHeightMargin: 150,\n  },\n  defaultFont: {\n    name: "Helvetica",\n    size: 24,\n  },\n};\n',highlight:[2,7,8,9]}],codesJs:[{file:"level.js",code:'import { makeSprite } from "@replay/core";\nimport { Bird } from "./bird";\n\nconst birdX = 0;\n\nexport const Level = makeSprite({\n  init() {\n    return {\n      birdY: 10,\n      birdGravity: -12,\n    };\n  },\n\n  render({ state }) {\n    return [\n      Bird({\n        id: "bird",\n        x: birdX,\n        y: state.birdY,\n      }),\n    ];\n  },\n});\n'},{file:"index.js",code:'import { makeSprite } from "@replay/core";\nimport { Level } from "./level";\n\nexport const Game = makeSprite({\n  render() {\n    return [\n      Level({\n        id: "level",\n      }),\n    ];\n  },\n});\n\nexport const gameProps = {\n  id: "Game",\n  size: {\n    width: 400,\n    height: 600,\n    maxHeightMargin: 150,\n  },\n  defaultFont: {\n    name: "Helvetica",\n    size: 24,\n  },\n};\n',highlight:[2,7,8,9]}],Game:l,gameProps:d})}},220:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));n(52);var i=n(222),r={text:function(e){return{type:"text",props:Object.assign(Object.assign({testId:e.testId},Object(i.a)(e)),{},{font:e.font,text:e.text,align:e.align||"center",color:e.color})}},circle:function(e){return{type:"circle",props:Object.assign(Object.assign({testId:e.testId},Object(i.a)(e)),{},{radius:e.radius,color:e.color})}},rectangle:function(e){return{type:"rectangle",props:Object.assign(Object.assign({testId:e.testId},Object(i.a)(e)),{},{width:e.width,height:e.height,color:e.color})}},line:function(e){var t;return{type:"line",props:Object.assign(Object.assign({testId:e.testId},Object(i.a)(e)),{},{color:e.color,thickness:null!==(t=e.thickness)&&void 0!==t?t:1,path:e.path})}},image:function(e){return{type:"image",props:Object.assign(Object.assign({testId:e.testId},Object(i.a)(e)),{},{fileName:e.fileName,width:e.width,height:e.height})}},spriteSheet:function(e){return{type:"spriteSheet",props:Object.assign(Object.assign({testId:e.testId},Object(i.a)(e)),{},{fileName:e.fileName,columns:e.columns,rows:e.rows,index:e.index,width:e.width,height:e.height})}}};function a(e){return function(t){return{type:"custom",spriteObj:e,props:t}}}},222:function(e,t,n){"use strict";function i(e){var t,n,i;return{x:e.x||0,y:e.y||0,rotation:e.rotation||0,opacity:Math.min(1,Math.max(0,null!==(t=e.opacity)&&void 0!==t?t:1)),scaleX:null!==(n=e.scaleX)&&void 0!==n?n:1,scaleY:null!==(i=e.scaleY)&&void 0!==i?i:1,anchorX:e.anchorX||0,anchorY:e.anchorY||0,mask:e.mask||null}}n.d(t,"a",(function(){return i}))},227:function(e,t,n){"use strict";n.d(t,"a",(function(){return U}));var i=n(0),r=n.n(i),a=n(231),o=n(228),s=n(236),c=n(1),l=(n(223),n(224),n(78),n(237),n(232),n(79),n(238),n(80),n(233),n(235)),d=n(234),u=n(230),p=n(229),h=n(226),f=n.n(h),m=n(132),v=n.n(m);function g(e){var t=e.codesTs,n=e.codesJs;return r.a.createElement(u.a,{defaultValue:"js",groupId:"code",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}]},r.a.createElement(p.a,{value:"js"},r.a.createElement(b,{lang:"js",codes:n})),r.a.createElement(p.a,{value:"ts"},r.a.createElement(b,{lang:"ts",codes:t})))}function b(e){var t=e.lang,n=e.codes,a=n.map((function(e){return e.file})),o=Object(i.useState)(a[0]),s=o[0],c=o[1],l=n.find((function(e){return e.file===s}));return r.a.createElement("div",{style:{marginTop:-12}},r.a.createElement("div",{style:{position:"sticky",top:0,backgroundColor:"white",zIndex:1}},a.map((function(e){return r.a.createElement("button",{className:v.a.fileButton+(s===e?" "+v.a.fileButtonSelected:""),key:e,onClick:function(){return c(e)}},e)}))),r.a.createElement(w,{key:l.file,lang:t,code:l.code,highlight:l.highlight}))}function w(e){var t=e.lang,n=e.code,i=e.highlight,a=n.replace("/img/bird.png","bird.png").replace("/audio/boop.wav","boop.wav");return r.a.createElement(l.a,Object(c.a)({},l.b,{theme:d.a,code:a,language:t}),(function(e){var t=e.className,n=e.style,a=e.tokens,o=e.getLineProps,s=e.getTokenProps;return r.a.createElement("div",{className:v.a.codeBlockContent},r.a.createElement("div",{tabIndex:"0",className:f()(t,v.a.codeBlock)},r.a.createElement("div",{className:v.a.codeBlockLines,style:n},a.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=o({line:e,key:t}),a=null==i?void 0:i.flatMap((function(e){if("number"==typeof e)return e;var t=e.split("-").map(Number),n=t[0],i=t[1];return Array.from({length:i-n+1}).map((function(e,t){return t+n}))}));return(null==a?void 0:a.includes(t+1))&&(n.className+=" docusaurus-highlight-code-line"),r.a.createElement("div",n,r.a.createElement("span",{style:{display:"inline-block",width:30,textAlign:"right",marginRight:16,opacity:.5,userSelect:"none"}},t+1),e.map((function(e,t){return r.a.createElement("span",s({token:e,key:t}))})))})))))}))}n(52),n(239),n(81);var y=n(240),j=n.n(y),E=(n(25),n(20),n(54),n(21),n(241),n(242)),O=(n(53),n(225),n(222));function x(e,t,n,i,r,a,o,s,c,l){var d=Object(O.a)(t);d.opacity*=s;var u=l.nativeSpriteMap,p=l.nativeSpriteUtils,h=function(e){var t=i(e);return function(e){var t=Math.PI/180,n=-(e.rotation||0)*t;return function(t){var i=t.x,r=t.y,a=i-e.x,o=r-e.y,s=a*Math.cos(n)+o*Math.sin(n),c=-a*Math.sin(n)+o*Math.cos(n),l=s/e.scaleX,d=c/e.scaleY;return{x:l+e.anchorX,y:d+e.anchorY}}}(d)(t)},f=n(h),m=e.getSprites(t,f,r,a,o),v=[],g=m.map((function(t){if(!t)return t;if("native"===t.type){v.push(t.props.id);var i=u[t.name];if(!i)throw Error('Cannot find Native Sprite "'+t.name+'"');var r=e.childContainers[t.props.id];return r&&"native"===r.type||(r={type:"native",state:i.create({props:t.props,parentGlobalId:c,getState:function(){return r.state},updateState:function(e){r.state=Object.assign(Object.assign({},r.state),e)},utils:p}),cleanup:i.cleanup},e.childContainers[t.props.id]=r),r.state=i.loop({props:t.props,state:r.state,parentGlobalId:c,utils:p}),p.didResize=!1,null}if("custom"===t.type){v.push(t.props.id);var s=!1,m=e.childContainers[t.props.id];return m&&"custom"===m.type||(s=!0,m=k(t,f,e.prevTime),e.childContainers[t.props.id]=m),x(m,t.props,n,h,s,a,o,d.opacity,c+"--"+t.props.id,l)}return t})).filter(L);return function e(t){Object.keys(t).forEach((function(n){if(!v.includes(n)){var i=t[n];"native"===i.type?i.cleanup({state:i.state,parentGlobalId:c}):e(i.childContainers),delete t[n]}}))}(e.childContainers),{id:t.id,baseProps:d,textures:g}}var S=1/60*1e3;function k(e,t,n){var i,r=e.spriteObj,a=e.props,o=[],s=function(e){o.push(e)};return r.init&&(i=r.init({props:a,device:t,updateState:s})),{type:"custom",state:i,childContainers:{},prevTime:n,currentLag:0,getSprites:function(e,t,n,i,a){var c=this,l=function(){c.state=o.reduce((function(e,t){return t(e)}),c.state),o.length=0};l(),!n&&r.loop&&(this.state=r.loop({props:e,state:this.state,device:t,updateState:s})),l();var d=r[i];d||(d="renderPXL"===i&&r.renderXL?r.renderXL:r.render);var u=d({props:e,state:this.state,device:t,updateState:s,extrapolateFactor:a});return l(),u}}}function M(e,t){var n,i=e.deviceHeight>e.deviceWidth,r=!1;return"portrait"in t?(n=i?t.portrait:t.landscape,r=!0):n=t,n.minHeightXL&&e.deviceHeight>=n.minHeightXL||n.minWidthXL&&e.deviceWidth>=n.minWidthXL?r&&i?"renderPXL":"renderXL":r&&i?"renderP":"render"}function L(e){return null!==e}var P={keysDown:{},keysJustPressed:{},pointer:{pressed:!1,justPressed:!1,justReleased:!1,x:0,y:0}};function T(e){return function(e,t){var n=e(t.pointer);return Object.assign(Object.assign({},t),{},{pointer:Object.assign(Object.assign({},t.pointer),{},{x:n.x,y:n.y})})}(e,P)}function C(e){["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"," "].includes(e.key)&&!(e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLInputElement)&&e.preventDefault(),P.keysDown[e.key]=!0,P.keysJustPressed[e.key]=!0}function I(e){delete P.keysDown[e.key]}function N(){P.pointer.justPressed=!1,P.pointer.pressed=!1}function X(){P={keysDown:P.keysDown,keysJustPressed:{},pointer:Object.assign(Object.assign({},P.pointer),{},{justPressed:!1,justReleased:!1})}}n(243);function G(e,t,n,i){var r=t.width,a=t.height,o=t.widthMargin,s=t.heightMargin,c=t.deviceWidth,l=t.deviceHeight;e.save();var d=Math.min(c/r,l/a),u=r+2*o,p=a+2*s;return e.translate(c/2,l/2),e.scale(d,d),{scale:d,render:function(t){e.clearRect(-c/2/d,-l/2/d,c/d,l/d),e.fillStyle="white",e.fillRect(-u/2,-p/2,u,p),function e(t,n,i,r){var a=t.baseProps,o=t.textures;n.save(),H(n,a),o.forEach((function(t){if("type"in t){var o=Y(n);return n.save(),H(n,t.props,a.opacity),function(e,t,n,i){switch(e.type){case"text":return t.text(e.props.font||i,e.props.text,e.props.align,e.props.color),0;case"circle":return t.circle(e.props.radius,e.props.color),0;case"rectangle":return t.rectangle(e.props.width,e.props.height,e.props.color),0;case"line":return t.line(e.props.path,e.props.thickness,e.props.color),0;case"image":var r=n[e.props.fileName];if(!r)throw Error('Cannot find image file "'+e.props.fileName+'"');return t.image(r,e.props.width,e.props.height),0;case"spriteSheet":t.spriteSheet(n[e.props.fileName],e.props.columns,e.props.rows,e.props.index,e.props.width,e.props.height)}}(t,o,i,r),void n.restore()}e(t,n,i,r)})),n.restore()}(t,e,n,i)}}}var z=Math.PI/180,H=function(e,t,n){void 0===n&&(n=1);var i=t.x,r=t.y,a=t.rotation,o=t.scaleX,s=t.scaleY,c=t.anchorX,l=t.anchorY,d=t.opacity;e.translate(i,-r),e.rotate(a*z),e.scale(o,s),e.translate(-c,l),e.globalAlpha=d*n,function(e,t){if(!t)return 0;switch(t.type){case"lineMask":var n=t.path,i=n[0],r=i[0],a=i[1],o=n.slice(1);return e.beginPath(),e.moveTo(r,-a),o.forEach((function(t){var n=t[0],i=t[1];e.lineTo(n,-i)})),e.clip(),0;case"circleMask":return e.beginPath(),e.arc(t.x,-t.y,Math.round(t.radius),0,2*Math.PI),e.clip(),0;case"rectangleMask":e.beginPath(),e.rect(t.x-t.width/2,-t.y-t.height/2,t.width,t.height),e.clip()}}(e,t.mask)};var R,Y=function(e){return{circle:function(t,n){e.beginPath(),e.arc(0,0,Math.round(t),0,2*Math.PI),e.fillStyle=n,e.fill(),e.closePath()},rectangle:function(t,n,i){e.fillStyle=i,e.fillRect(-t/2,-n/2,t,n),e.closePath()},line:function(t,n,i){if(!(t.length<2)){var r=t[0],a=r[0],o=r[1],s=t.slice(1);e.strokeStyle=i,e.lineWidth=n,e.beginPath(),e.moveTo(a,-o),s.forEach((function(t){var n=t[0],i=t[1];e.lineTo(n,-i)})),e.stroke()}},text:function(t,n,i,r){var a=t.size+"px "+t.name;e.font=a,e.textBaseline="middle",e.textAlign=i,e.fillStyle=r,e.fillText(n,0,0)},image:function(t,n,i){e.drawImage(t,-n/2,-i/2,n,i)},spriteSheet:function(t,n,i,r,a,o){var s=t.width/n,c=t.height/i,l=r%n,d=Math.floor(r/n)%i;e.drawImage(t,l*s,d*c,s,c,-a/2,-o/2,a,o)}}};function D(e,t,n,i){var r;"portrait"in i?r=t>e?i.portrait:i.landscape:r=i;var a=r,o=a.width,s=a.height,c=a.maxWidthMargin,l=void 0===c?0:c,d=a.maxHeightMargin;if("game-coords"===n)return{width:o,height:s,widthMargin:0,heightMargin:0,deviceWidth:o,deviceHeight:s};var u=o/s;if(u>e/t){var p=e,h=p/u,f=h/s*(void 0===d?0:d),m=Math.min(t,h+2*f);return{width:o,height:s,widthMargin:0,heightMargin:(m-h)/2*(s/h),deviceWidth:p,deviceHeight:m}}var v=t,g=v*u,b=g/o*l,w=Math.min(e,g+2*b);return{width:o,height:s,widthMargin:(w-g)/2*(o/g),heightMargin:0,deviceWidth:w,deviceHeight:v}}var W={name:"sans-serif",size:12};function B(e,t,n,i,r,a,o){var s;void 0===t&&(t=[]),void 0===n&&(n={}),void 0===i&&(i="game-coords");var c=a||document.createElement("canvas");a||document.body.appendChild(c);var l,d,u,p,h,f=c.getContext("2d",{alpha:!1}),m=!0;document.addEventListener("keydown",(function(e){m&&C(e)}),!1),document.addEventListener("keyup",(function(e){m&&I(e)}),!1),window.addEventListener("resize",g,!1);var v={didResize:!1,scale:1,gameXToPlatformX:function(e){return e},gameYToPlatformY:function(e){return e}};function g(t){if(!l||(f.restore(),document.removeEventListener("pointerdown",d),document.removeEventListener("pointermove",u),document.removeEventListener("pointerup",p),document.removeEventListener("pointerout",N),!0!==t)){var n=function(e,t,n,i){var r=D(e,t,n,i);return R=r,r}((null==o?void 0:o.width)||window.innerWidth,(null==o?void 0:o.height)||window.innerHeight,i,e.props.size);c.width=n.deviceWidth,c.height=n.deviceHeight;var r=e.props.defaultFont||W,a=G(f,n,w,r);h=a.scale,L.ref=a.render,v.gameXToPlatformX=function(e){var t=e.canvasOffsetLeft,n=e.widthMargin,i=e.scale,r=e.width;return function(e){return t+i*(e+r/2+n)}}({canvasOffsetLeft:c.offsetLeft,width:n.width,widthMargin:n.widthMargin,scale:h}),v.gameYToPlatformY=function(e){var t=e.canvasOffsetTop,n=e.heightMargin,i=e.scale,r=e.height;return function(e){return t-i*(e-r/2-n)}}({canvasOffsetTop:c.offsetTop,height:n.height,heightMargin:n.heightMargin,scale:h}),v.didResize=!0,v.scale=h;var s=function(e){var t=e.canvasOffsetLeft,n=e.widthMargin,i=e.scale,r=e.width;return function(e){return(e.clientX-t)/i-n-r/2}}({canvasOffsetLeft:c.offsetLeft,width:n.width,widthMargin:n.widthMargin,scale:h}),g=function(e){var t=e.canvasOffsetTop,n=e.heightMargin,i=e.scale,r=e.height;return function(e){return-(e.clientY-t)/i+n+r/2}}({canvasOffsetTop:c.offsetTop,height:n.height,heightMargin:n.heightMargin,scale:h}),b=function(e,t){return e>n.width/2+n.widthMargin||e<-n.width/2-n.widthMargin||t>n.height/2+n.heightMargin||t<-n.height/2-n.heightMargin};d=function(e){var t=s(e),n=g(e);b(t,n)?m=!1:(m=!0,function(e,t){P.pointer={pressed:!0,justPressed:!0,justReleased:!1,x:e,y:t}}(t,n))},u=function(e){var t=s(e),n=g(e);b(t,n)||function(e,t){P.pointer.x=e,P.pointer.y=t}(t,n)},p=function(e){var t=s(e),n=g(e);b(t,n)?N():function(e,t){P.pointer.justPressed=!1,P.pointer.pressed=!1,P.pointer.justReleased=!0,P.pointer.x=e,P.pointer.y=t}(t,n)},document.addEventListener("pointerdown",d,!1),document.addEventListener("pointermove",u,!1),document.addEventListener("pointerup",p,!1),document.addEventListener("pointerout",N,!1),l=n}}var b={},w={},y={getGetDevice:F(b,D((null==o?void 0:o.width)||window.innerWidth,(null==o?void 0:o.height)||window.innerHeight,i,e.props.size))},L={ref:null};g();var T=!1,z=function(){var e=Object(E.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],(n.audioFileNames||[]).forEach((function(e){b[e]=new Audio(e),t.push(new Promise((function(t,n){b[e].addEventListener("canplaythrough",t),b[e].addEventListener("error",n)}))),b[e].load()})),(n.imageFileNames||[]).forEach((function(e){w[e]=new Image,t.push(new Promise((function(t,n){w[e].addEventListener("load",t),w[e].addEventListener("error",n),w[e].src=e})))})),e.next=5,Promise.all(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return null===(s=L.ref)||void 0===s||s.call(L,{id:"Loading",baseProps:Object(O.a)({}),textures:t}),{cleanup:function(){c.width=c.width,a||document.body.removeChild(c),T=!0,document.removeEventListener("keydown",C,!1),document.removeEventListener("keyup",I,!1),window.removeEventListener("resize",g,!1),g(!0)},loadPromise:z().then((function(){var t=function e(){document.removeEventListener("keydown",e,!1),document.removeEventListener("pointerdown",e,!1),Object.values(b).forEach((function(e){e.muted=!0,e.play().then((function(){e.pause(),e.muted=!1}))}))};document.addEventListener("keydown",t,!1),document.addEventListener("pointerdown",t,!1);var n=function(e,t,n,i){var r=n||game.Game(game.gameProps),a=function(e){return{x:e.x,y:e.y}},o=e.getGetDevice(),s=o(a),c=k(r,o(a),0),l=i||r.props.size,d=M(s.size,l),u=0,p=0,h=x(c,r.props,o,a,!0,d,0,1,r.props.id,t);return{initTextures:h,getNextFrameTextures:function(n,i){var o=n-u;for(u=n,p+=o;p>=S;){var s=(p-=S)/S,d=e.getGetDevice(),f=M(d(a).size,l);h=x(c,r.props,d,a,!1,f,s,1,r.props.id,t),i()}return h}}}(y,{nativeSpriteMap:r||{},nativeSpriteUtils:v},e),i=n.initTextures,a=n.getNextFrameTextures,o=null;!function e(t){var n;null===(n=L.ref)||void 0===n||n.call(L,t),window.requestAnimationFrame((function(t){T||(null===o&&(o=t-1/60),e(a(t-o,X)))}))}(i)})),audioElements:b}}function F(e,t){var n,i={log:console.log,random:Math.random,timer:(n={},{start:function(e,t){var i=window.setTimeout((function(){delete n[r],e()}),t),r=String(i);return n[r]={timeoutId:i,callback:e,timeStartedMs:Date.now(),timeRemainingMs:t,isPaused:!1},r},pause:function(e){var t=n[e];if(t&&!t.isPaused){var i=Date.now()-t.timeStartedMs;t.timeRemainingMs-=i,t.isPaused=!0,window.clearTimeout(t.timeoutId)}},resume:function(e){var t=n[e];if(t&&t.isPaused){t.timeStartedMs=Date.now(),t.isPaused=!1;var i=window.setTimeout((function(){delete n[e],t.callback()}),t.timeRemainingMs);t.timeoutId=i}},cancel:function(e){var t=n[e];t&&(window.clearTimeout(t.timeoutId),delete n[e])}}),audio:function(t){function n(n){var i=e[t];if(!i)throw Error("Cannot find audio file "+t);return n&&!i.paused&&(i=new Audio(t)),i}return{getPosition:function(){return n(!1).currentTime},play:function(e,t){var i=n(!0);i.play(),void 0!==e&&(i.currentTime=e),t&&(i.loop=!0)},pause:function(){n(!1).pause()}}},network:{get:function(e,t){fetch(e).then((function(e){return e.json()})).then(t)},post:function(e,t,n){fetch(e,{method:"POST",body:JSON.stringify(t)}).then((function(e){return e.json()})).then(n)},put:function(e,t,n){fetch(e,{method:"PUT",body:JSON.stringify(t)}).then((function(e){return e.json()})).then(n)},delete:function(e,t){fetch(e,{method:"DELETE"}).then((function(e){return e.json()})).then(t)}},storage:{getStore:function(){for(var e,t={},n=0;n<localStorage.length;n++){var i=localStorage.key(n);i&&(t[i]=null!==(e=localStorage.getItem(i))&&void 0!==e?e:void 0)}return t},setStore:function(e){Object.entries(e).forEach((function(e){var t=e[0],n=e[1];void 0===n?localStorage.removeItem(t):localStorage.setItem(t,n)}))}},alert:{ok:function(e,t){alert(e),null==t||t()},okCancel:function(e,t){t(confirm(e))}},clipboard:{copy:function(e,t){navigator.clipboard?navigator.clipboard.writeText(e).then((function(){t()})).catch((function(e){t(e)})):t(new Error(window.isSecureContext?"Couldn't access clipboard":"Clipboard only available on HTTPS or localhost"))}}};return function(){var e=Object.assign(Object.assign({},i),{},{size:R||t,now:function(){return new Date}});return function(t){return Object.assign(Object.assign({},e),{},{inputs:T(t)})}}}var A=n(220);function J(e){var t=e.Game,n=e.gameProps,a=e.showReload,o=e.assets,s=function(){var e=Object(i.useRef)(null),t=Object(i.useState)(null),n=t[0],r=t[1],a=function(){r(e.current.getBoundingClientRect())};Object(i.useEffect)((function(){return window.addEventListener("resize",a,!1),function(){return window.removeEventListener("resize",a,!1)}}),[]);var o=Object(i.useCallback)((function(t){null!==t&&(e.current=t,a())}),[]);return Object(i.useEffect)((function(){document.getElementById("iphone-img").onload=function(){a()}}),[]),[n,o]}(),c=s[0],l=s[1],d=Object(i.useState)(0),u=d[0],p=d[1],h=0,f=0,m=0;if(c&&c.height&&c.width){c.width/c.height>375/667?(f=c.height*(667/900),h=f*(375/667)):(h=c.width*(375/460),f=h/(375/667));var g=n.size.maxHeightMargin?0:.08*f;m=(c.height-f)/2+g}return Object(i.useEffect)((function(){if(h&&f){var e=document.getElementById("myCanvas"),i=B(t(n),[A.b.text({color:"black",text:"Loading..."})],o,"scale-up",{},e,{width:h,height:f}).cleanup;return function(){i()}}}),[h,f,u]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{ref:l,style:{height:"100%",width:"100%",display:"flex",justifyContent:"center"}},r.a.createElement("img",{id:"iphone-img",style:{userSelect:"none",objectFit:"contain",maxHeight:"100%"},src:"/img/iPhone8-Portrait-SpaceGray.png"})),a&&r.a.createElement("img",{className:v.a.refresh,src:"/img/reload.svg",width:20,height:20,onClick:function(){return p((function(e){return e+1}))}}),r.a.createElement("canvas",{id:"myCanvas",style:{position:"absolute",marginTop:m},width:h,height:f}))}function U(e){var t=e.part,n=e.MDXContent,i=e.codesTs,c=e.codesJs,l=e.Game,d=e.gameProps,u=e.image,p=e.isEnd,h=e.assets,f=i&&c,m=l&&d?r.a.createElement(s.a,{fallback:r.a.createElement("div",null,"Preview")},(function(){return r.a.createElement(J,{Game:l,gameProps:d,showReload:f,assets:h})})):r.a.createElement("div",null,r.a.createElement("img",{src:u}));return r.a.createElement(a.a,{title:"Tutorial - Part "+t,noFooter:!0},r.a.createElement("div",{style:{display:"flex",minWidth:1024,height:"calc(100vh - 60px)"}},r.a.createElement("div",{style:{flex:"1",overflow:"auto",padding:16,borderRight:"1px solid #ededed"}},r.a.createElement(n,null),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},t>1?r.a.createElement(o.a,{to:"/tutorial/"+(t-1)},"Back"):r.a.createElement("div",null),p?r.a.createElement("div",null):r.a.createElement(o.a,{to:"/tutorial/"+(t+1)},"Next"))),f?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{flex:"1",overflow:"auto",borderRight:"1px solid #ededed"}},r.a.createElement(g,{codesTs:i,codesJs:c})),r.a.createElement("div",{style:{flex:"1",display:"flex",justifyContent:"center"}},m)):r.a.createElement("div",{style:{flex:"2",display:"flex",justifyContent:"center"}},m)))}}}]);