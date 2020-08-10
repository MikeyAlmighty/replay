(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{177:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(1),a=n(9),i=(n(0),n(221)),o={id:"ios",title:"iOS"},c={id:"ios",title:"iOS",description:"## Swift Package",source:"@site/docs/ios.md",permalink:"/docs/ios",editUrl:"https://github.com/edbentley/replay/edit/master/website/docs/ios.md",sidebar:"someSidebar",previous:{title:"Web",permalink:"/docs/web"},next:{title:"Native Sprites",permalink:"/docs/native-sprites"}},p=[{value:"Swift Package",id:"swift-package",children:[{value:"<code>ReplayViewController(nativeSpriteMap, hideStatusBar)</code>",id:"replayviewcontrollernativespritemap-hidestatusbar",children:[]}]},{value:"Inputs",id:"inputs",children:[]}],l={rightToc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"swift-package"},"Swift Package"),Object(i.b)("p",null,"The Replay Swift package is ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/edbentley/replay-swift"}),"hosted on GitHub"),". Once ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.apple.com/documentation/xcode/adding_package_dependencies_to_your_app"}),"added as a package dependency")," to your Xcode project, you can replace the ",Object(i.b)("inlineCode",{parentName:"p"},"rootViewController"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-swift",metastring:"{1,8}","{1,8}":!0}),"import Replay\n\nclass SceneDelegate: UIResponder, UIWindowSceneDelegate {\n\n    func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {\n        if let windowScene = scene as? UIWindowScene {\n            let window = UIWindow(windowScene: windowScene)\n            window.rootViewController = ReplayViewController()\n            self.window = window\n            window.makeKeyAndVisible()\n        }\n    }\n\n}\n")),Object(i.b)("p",null,"Your image and audio assets also need to be added to your Xcode project. See ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/starter"}),"Replay Starter")," for an example setup."),Object(i.b)("h3",{id:"replayviewcontrollernativespritemap-hidestatusbar"},Object(i.b)("inlineCode",{parentName:"h3"},"ReplayViewController(nativeSpriteMap, hideStatusBar)")),Object(i.b)("h4",{id:"parameters"},"Parameters"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"nativeSpriteMap"),": (Optional) A dictionary of ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/native-sprites"}),"Native Sprite")," names and their iOS implementation."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"hideStatusBar"),": (Optional) A boolean to set if the status bar is hidden or not. Default ",Object(i.b)("inlineCode",{parentName:"li"},"true"),".")),Object(i.b)("h2",{id:"inputs"},"Inputs"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"device.inputs")," parameter of Sprite methods is of type:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"type iOSInputs = {\n  pointer: {\n    pressed: boolean;\n    justPressed: boolean;\n    justReleased: boolean;\n    x: number;\n    y: number;\n  };\n};\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"@replay/swift")," package exports this type for TypeScript projects."))}s.isMDXComponent=!0},221:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,m=d["".concat(o,".").concat(u)]||d[u]||b[u]||i;return n?a.a.createElement(m,c({ref:t},l,{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);