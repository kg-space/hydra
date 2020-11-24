(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{220:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(7),i=(n(0),n(240)),o={id:"defaults_list_interpolation",title:"Defaults List interpolation",hide_title:!0},l={unversionedId:"upgrades/1.0_to_1.1/defaults_list_interpolation",id:"upgrades/1.0_to_1.1/defaults_list_interpolation",isDocsHomePage:!1,title:"Defaults List interpolation",description:"Defaults List interpolation",source:"@site/docs/upgrades/1.0_to_1.1/defaults_list_interpolation_changes.md",slug:"/upgrades/1.0_to_1.1/defaults_list_interpolation",permalink:"/docs/next/upgrades/1.0_to_1.1/defaults_list_interpolation",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/upgrades/1.0_to_1.1/defaults_list_interpolation_changes.md",version:"current",lastUpdatedBy:"Shagun Sodhani",lastUpdatedAt:1606185073,sidebar:"docs",previous:{title:"Release process",permalink:"/docs/next/development/release"},next:{title:"Config path changes",permalink:"/docs/next/upgrades/0.11_to_1.0/config_path_changes"}},s=[{value:"Defaults List interpolation",id:"defaults-list-interpolation",children:[]},{value:"Migration examples",id:"migration-examples",children:[]}],c={rightToc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"defaults-list-interpolation"},"Defaults List interpolation"),Object(i.b)("p",null,"The defaults lists are used to compose the final config object.\nHydra supports a limited form of interpolation in the defaults list.\nThe interpolation style described there is deprecated in favor of a cleaner style more\nappropriate to recursive default lists."),Object(i.b)("h2",{id:"migration-examples"},"Migration examples"),Object(i.b)("p",null,"For example, the following snippet from Hydra 1.0 or older: "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"defaults:\n  - dataset: imagenet\n  - model: alexnet\n  - dataset_model: ${defaults.0.dataset}_${defaults.1.model}\n")),Object(i.b)("p",null,"Changes to this in Hydra 1.1 or newer:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"defaults:\n  - dataset: imagenet\n  - model: alexnet\n  - dataset_model: ${dataset}_${model}\n")),Object(i.b)("p",null,"The new style is more compact and does not require specifying the exact index of the element in the defaults list.\nThis is enables interpolating using config group values that are coming from recursive defaults."),Object(i.b)("p",null,"Note that:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"This is non-standard interpolation support that is unique to the defaults list"),Object(i.b)("li",{parentName:"ul"},"interpolation keys in the defaults list can not access values from the composed config because it does not yet\nexist when Hydra is processing the defaults list")),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Support for the old style will be removed in Hydra 1.2."))))}p.isMDXComponent=!0},240:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(o,".").concat(f)]||d[f]||u[f]||i;return n?r.a.createElement(m,l(l({ref:t},c),{},{components:n})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);