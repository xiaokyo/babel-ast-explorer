(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,n){e.exports={container:"Tags_container__1g2G8"}},112:function(e,t,n){e.exports={footer:"DrawerFooter_footer__38AeJ"}},118:function(e,t,n){e.exports=n(245)},123:function(e,t,n){},126:function(e,t,n){e.exports["7.0.0"]=n(127),e.exports["7.1.0"]=n(129),e.exports["7.2.0"]=n(131),e.exports["7.2.2"]=n(133),e.exports["7.2.3"]=n(135),e.exports["7.2.4"]=n(137),e.exports["7.2.5"]=n(139),e.exports["7.3.0"]=n(141),e.exports["7.3.1"]=n(143),e.exports["7.3.2"]=n(145),e.exports["7.3.3"]=n(147),e.exports["7.3.4"]=n(149),e.exports["7.4.0"]=n(151),e.exports["7.4.1"]=n(153),e.exports["7.4.2"]=n(155),e.exports["7.4.3"]=n(157),e.exports["7.4.4"]=n(159),e.exports["7.4.5"]=n(161)},127:function(e,t,n){e.exports=n(128)},129:function(e,t,n){e.exports=n(130)},131:function(e,t,n){e.exports=n(132)},133:function(e,t,n){e.exports=n(134)},135:function(e,t,n){e.exports=n(136)},137:function(e,t,n){e.exports=n(138)},139:function(e,t,n){e.exports=n(140)},141:function(e,t,n){e.exports=n(142)},143:function(e,t,n){e.exports=n(144)},145:function(e,t,n){e.exports=n(146)},147:function(e,t,n){e.exports=n(148)},149:function(e,t,n){e.exports=n(150)},151:function(e,t,n){e.exports=n(152)},153:function(e,t,n){e.exports=n(154)},155:function(e,t,n){e.exports=n(156)},157:function(e,t,n){e.exports=n(158)},159:function(e,t,n){e.exports=n(160)},161:function(e,t,n){e.exports=n(162)},245:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(4),c=n.n(o),l=(n(123),n(11)),i=n(76),u=n.n(i),s=n(104);function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return function(e){return f.apply(this,arguments)}(arguments.length>2&&void 0!==arguments[2]?arguments[2]:"7.4.5").then(function(n){return n.transform(e,{ast:!0,plugins:[function(){return{manipulateOptions:function(e,n){for(var a in t){var r=t[a];r.enabled&&(r.options?n.plugins.push([a,r.options]):n.plugins.push(a))}}}}]}).ast})}var m={},d=n(126);function f(){return(f=Object(s.a)(u.a.mark(function e(t){var n,a,r,o;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===m[t]){e.next=2;break}return e.abrupt("return",m[t]);case 2:return n=d[t],e.next=5,fetch(n);case 5:return a=e.sent,e.next=8,a.text();case 8:return r=e.sent,o={},new Function("exports",r)(o),r=void 0,a=void 0,e.abrupt("return",m[t]=o.Babel);case 14:case"end":return e.stop()}},e)}))).apply(this,arguments)}function v(e){Object(a.useEffect)(function(){var t;window.history.replaceState({},"","#"+(t=e,"?"+window.btoa(unescape(encodeURIComponent(JSON.stringify(t))))))},Object.values(e))}var b=n(24),h=n(20),g=n(8),y=n.n(g),E=n(249),x=n(2),k=n.n(x),O=n(80),j=n(248);function C(e){return JSON.stringify(e)}var N=r.a.createContext({hideEmpty:!1,hideLocation:!1,hideType:!1}),w=function(e,t){return Object(h.a)({},e,Object(b.a)({},t,!e[t]))},_=r.a.createContext(function(){}),S=r.a.createContext([0,0]),T=r.a.memo(function(e){var t=e.data,n=e.setMarker,a=e.selectedNode,o=e.selectedNodePath,c=e.treeSettings,l=e.toggleTreeSettings;return r.a.createElement(N.Provider,{value:c},r.a.createElement(_.Provider,{value:n},r.a.createElement(S.Provider,{value:a},r.a.createElement("div",{className:y.a.options},r.a.createElement(E.a,{checked:c.hideEmpty,onChange:function(){return l("hideEmpty")}},"Hide empty keys"),r.a.createElement(E.a,{checked:c.hideLocation,onChange:function(){return l("hideLocation")}},"Hide location data"),r.a.createElement(E.a,{checked:c.hideType,onChange:function(){return l("hideType")}},"Hide type keys")),r.a.createElement("div",{className:y.a.treeContainer},r.a.createElement(A,{data:t,root:!0})),o&&r.a.createElement("div",{className:y.a.footer},o.map(function(e,t){return r.a.createElement(Q,{key:t,value:e,onMouseOver:function(){return n(e.loc)},onMouseLeave:function(){return n(null)}})})))))});function P(e){switch(typeof e){case"object":return Array.isArray(e)?R:null===e?K:A;case"number":return M;case"string":return L;case"boolean":return V;default:return W}}function M(e){var t=e.data;return r.a.createElement("span",{className:y.a.number},t)}function L(e){var t=e.data;return r.a.createElement("span",{className:y.a.string},'"'+t+'"')}function A(e){var t=e.data,n=e.expand,o=e.root,c=e.onToggleExpand,i=Object(a.useState)(!0),u=Object(l.a)(i,2),s=u[0],p=u[1],m=function(){return p(function(e){return!e})},d=o?s:n,f=o?m:c,v=Object.keys(t),b=Object(a.useContext)(N),h={get text(){return function e(t){var n=t.type[0].toLowerCase()+t.type.slice(1);switch(t.type){case"Program":return"t.".concat(n,"([").concat(t.body.map(function(t){return e(t)}).join(", "),"])");case"ExpressionStatement":return"t.".concat(n,"(").concat(e(t.expression),")");case"CallExpression":return"t.".concat(n,"(").concat(e(t.callee),", [").concat(t.arguments.map(function(t){return e(t)}).join(", "),"])");case"MemberExpression":return"t.".concat(n,"(").concat(e(t.object),", ").concat(e(t.property),", ").concat(C(t.computed),", ").concat(C(t.optional),")");case"AssignmentExpression":return"t.".concat(n,"(").concat(C(t.operator),", ").concat(e(t.left),", ").concat(e(t.right),")");case"Identifier":return"t.".concat(n,"('").concat(t.name,"')");case"BooleanLiteral":case"NumericLiteral":case"StringLiteral":return"t.".concat(n,"(").concat(C(t.value),")");case"NullLiteral":return"t.".concat(n,"()");default:return""}}(t)}};return r.a.createElement(r.a.Fragment,null,o&&r.a.createElement(I,{expand:d,toggleExpand:m}),t.type&&r.a.createElement(O.a,{title:r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a.Text,{copyable:!0,className:y.a.tooltipText},t.type),r.a.createElement("br",null),r.a.createElement(j.a.Text,{copyable:h,className:y.a.tooltipText},"@babel/types")),trigger:"contextMenu"},r.a.createElement("span",{className:y.a.nodeType,onClick:f},t.type)),r.a.createElement("span",{className:k()(y.a.openingBracket,y.a.bracket)},"{"),!d&&r.a.createElement(J,{data:v,onClick:f}),r.a.createElement("div",{className:k()(y.a.child,!d&&y.a.hidden)},v.map(function(e){return b.hideLocation&&["loc","start","end"].includes(e)||b.hideEmpty&&null===t[e]||b.hideType&&"type"===e?null:r.a.createElement(B,{key:e,name:e,value:t[e]})})),r.a.createElement("span",{className:y.a.bracket},"}"))}function B(e){var t,n=e.name,o=e.value,c=Object(a.useState)(!0),i=Object(l.a)(c,2),u=i[0],s=i[1],p=function(){return s(function(e){return!e})},m=P(o),d=!!(t=o)&&"object"===typeof t&&(!Array.isArray(t)||t.length>0),f=Object(a.useContext)(S)===o,v=Object(a.useContext)(_);return r.a.createElement(q,{highlighted:f,onMouseOver:function(e){o&&o.loc&&(e.stopPropagation(),v(o.loc))},onMouseLeave:function(){v(null)}},!!d&&r.a.createElement(I,{expand:u,toggleExpand:p}),r.a.createElement("span",{className:k()(y.a.key,d?y.a.expandableKey:null),onClick:p},n),r.a.createElement("span",{className:y.a.colon},":"),r.a.createElement("span",{className:y.a.value},d?r.a.createElement(m,{data:o,expand:u,onToggleExpand:p}):r.a.createElement(m,{data:o})))}function J(e){var t=e.data,n=e.onClick;return r.a.createElement("span",{className:y.a.preview,onClick:n},t.slice(0,3).join(", ")+(t.length>3?"... +".concat(t.length-3):""))}function R(e){var t=e.data,n=e.expand,o=e.onToggleExpand,c=Object(a.useContext)(S),l=Object(a.useContext)(_);return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:k()(y.a.openingBracket,y.a.bracket)},"["),t.length>0&&r.a.createElement(r.a.Fragment,null,!n&&r.a.createElement(F,{data:t,onClick:o}),r.a.createElement("div",{className:k()(y.a.child,!n&&y.a.hidden)},t.map(function(e,t){var n=P(e),a=c===e;return r.a.createElement(q,{key:t,highlighted:a,onMouseOver:function(t){t.stopPropagation(),l(e.loc)},onMouseLeave:function(){l(null)}},r.a.createElement(n,{data:e,root:!0}))}))),r.a.createElement("span",{className:y.a.bracket},"]"))}function F(e){var t=e.data,n=e.onClick;return r.a.createElement("span",{className:y.a.preview,onClick:n},"".concat(t.length," element").concat(t.length>1?"s":""))}function K(){return r.a.createElement("span",{className:y.a.null},"null")}function V(e){var t=e.data;return r.a.createElement("span",{className:y.a.boolean},JSON.stringify(t))}function W(){return null}function I(e){var t=e.expand,n=e.toggleExpand;return r.a.createElement("span",{className:y.a.expandToggle,onClick:n},t?"-":"+")}function q(e){var t=e.highlighted,n=e.onMouseOver,o=e.onMouseLeave,c=e.children,l=function(e){var t=Object(a.useRef)(null);return Object(a.useEffect)(function(){t&&e&&t.current.scrollIntoView(!0)},[e]),t}(t);return r.a.createElement("div",{ref:l,className:k()(t&&y.a.highlighted),onMouseOver:n,onMouseLeave:o},c)}function Q(e){var t=e.value,n=e.onMouseOver,a=e.onMouseLeave;return r.a.createElement(O.a,{title:r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a.Text,{copyable:!0,className:y.a.tooltipText},t.node.type),!!t.keyPath&&r.a.createElement("div",null,r.a.createElement(j.a.Text,{copyable:!0,className:y.a.tooltipText},t.keyPath))),trigger:"click"},r.a.createElement("span",{onMouseOver:n,onMouseLeave:a,className:y.a.footerItem},r.a.createElement("span",{className:y.a.footerItemPath},t.key?".".concat(t.key):"")," ".concat(t.node.type)))}function U(e){return{hideEmpty:!1!==e.hideEmpty,hideLocation:!1!==e.hideLocation,hideType:!1!==e.hideType}}var Y=[{value:"jsx"},{value:"flow"},{value:"typescript"},{value:"bigInt"},{value:"classProperties"},{value:"classPrivateProperties"},{value:"classPrivateMethods"},{value:"decorators-legacy",options:[{key:"decoratorsBeforeExport",type:"boolean"}]},{value:"decorators",options:[{key:"decoratorsBeforeExport",type:"boolean"}]},{value:"doExpressions"},{value:"dynamicImport"},{value:"exportDefaultFrom"},{value:"nullishCoalescingOperator"},{value:"numericSeparator"},{value:"objectRestSpread"},{value:"optionalChaining"},{value:"optionalCatchBinding"},{value:"partialApplication"},{value:"pipelineOperator",options:[{key:"proposal",type:"enum",value:["minimal","smart","fsharp"]}]},{value:"throwExpressions"}],D=Y.reduce(function(e,t){return e[t.value]=t.options,e},{}),H=function(e){return D[e]},X=n(252),Z=n(250),z=n(247),G=n(251),$=n(111),ee=n.n($);var te=r.a.memo(function(e){var t=e.settings,n=e.onClick,a=Object.keys(t).filter(function(e){return t[e].enabled});return r.a.createElement("span",{className:ee.a.container},a.map(function(e){return r.a.createElement(G.a,{onClick:n},e)}))}),ne=n(112),ae=n.n(ne);function re(){return r.a.createElement("div",{className:ae.a.footer},"Built with ",r.a.createElement("a",{href:"https://reactjs.org/",rel:"noopener noreferrer",target:"_blank"},"React"),", ",r.a.createElement("a",{href:"https://ant.design",rel:"noopener noreferrer",target:"_blank"},"Ant Design"),", ",r.a.createElement("a",{href:"http://babeljs.io",rel:"noopener noreferrer",target:"_blank"},"Babel")," and \u2764| ",r.a.createElement("a",{href:"https://github.com/tanhauhau/babel-ast-explorer",rel:"noopener noreferrer",target:"_blank"},"Github"))}var oe=n(62),ce=n.n(oe),le=["7.0.0","7.1.0","7.2.0","7.2.2","7.2.3","7.2.4","7.2.5","7.3.0","7.3.1","7.3.2","7.3.3","7.3.4","7.4.0","7.4.1","7.4.2","7.4.3","7.4.4","7.4.5"];function ie(e,t){switch(t.type){case"toggleOn":var n=H(t.value),a=Object(h.a)({options:{}},e[t.value],{enabled:!0});return n&&n.forEach(function(e){switch(e.type){case"enum":a.options[e.key]=e.value[0];break;case"boolean":a.options[e.key]=!!a.options[e.key]}}),Object(h.a)({},e,Object(b.a)({},t.value,a));case"toggleOff":return Object(h.a)({},e,Object(b.a)({},t.value,Object(h.a)({},e[t.value],{enabled:!1})));case"setOption":return Object(h.a)({},e,Object(b.a)({},t.value,Object(h.a)({},e[t.value],{options:Object(h.a)({},e[t.value].options,Object(b.a)({},t.option,t.optionValue))})));case"setVersion":return Object(h.a)({},e,{version:t.version});default:return e}}var ue=r.a.memo(function(e){var t=e.settings,n=e.onChangeSettings,o=Object(a.useState)(!1),c=Object(l.a)(o,2),i=c[0],u=c[1],s=Object(a.useCallback)(function(){return u(!1)},[u]),p=Object(a.useCallback)(function(){return u(!0)},[u]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:ce.a.topbar},r.a.createElement(X.a,{type:"primary",shape:"circle",icon:"setting",size:"default",onClick:p}),r.a.createElement(te,{settings:t,onClick:p})),r.a.createElement(Z.a,{title:"Babel Settings",placement:"left",closable:!1,onClose:s,visible:i,width:400,className:ce.a.drawer},"Babel version ",r.a.createElement(z.a,{value:t.version,onChange:function(e){return n({type:"setVersion",version:e})}},le.map(function(e){return r.a.createElement(z.a.Option,{value:e,key:e},e)})),Y.map(function(e){var a=e.value,o=e.options,c=t[a]&&t[a].enabled;return r.a.createElement(r.a.Fragment,{key:a},r.a.createElement(E.a,{checked:c,onChange:function(e){n({type:e.target.checked?"toggleOn":"toggleOff",value:a})}},a),o?r.a.createElement("div",{className:ce.a.options},o.map(function(e){var o=t[a]&&t[a].options&&t[a].options[e.key];switch(e.type){case"boolean":return r.a.createElement("div",{key:e.key},r.a.createElement(E.a,{disabled:!c,checked:o,onChange:function(t){return n({type:"setOption",value:a,option:e.key,optionValue:t.target.checked})}},e.key));case"enum":return r.a.createElement(z.a,{key:e.key,value:o||e.value[0],disabled:!c,onChange:function(t){return n({type:"setOption",value:a,option:e.key,optionValue:t})}},e.value.map(function(e){return r.a.createElement(z.a.Option,{value:e,key:e},e)}));default:return null}})):null)}),r.a.createElement(re,null)))}),se=n(115),pe=n.n(se),me=(n(233),n(235),n(49)),de=n.n(me),fe=n(246),ve=(n(236),function(e){try{return JSON.parse(decodeURIComponent(escape(window.atob(e.replace("#?","")))))}catch(t){return{}}}(document.location.hash)),be=ve.babelSettings||{version:"7.4.5"},he=ve.code||"",ge=ve.treeSettings||"",ye={};var Ee=function(){var e,t,n=(e=be,Object(a.useReducer)(ie,e)),o=Object(l.a)(n,2),c=o[0],i=o[1],u=(t=ge,Object(a.useReducer)(w,t,U)),s=Object(l.a)(u,2),m=s[0],d=s[1],f=function(e,t){var n=Object(a.useState)(e),r=Object(l.a)(n,2),o=r[0],c=r[1],i=Object(a.useState)(null),u=Object(l.a)(i,2),s=u[0],m=u[1],d=Object(a.useState)(ye),f=Object(l.a)(d,2),v=f[0],b=f[1],h=Object(a.useCallback)(function(e){return c(e)},[c]),g=xe(o,500),y=xe(t,500);return Object(a.useEffect)(function(){var e=!1;return b(ye),p(g,y,y.version).then(function(t){e||(b(t),m(null))}).catch(function(e){m(e)}),function(){e=!0}},[g,y,b,m]),[o,v,s,h]}(he,c),b=Object(l.a)(f,4),h=b[0],g=b[1],y=b[2],E=b[3],x=function(){var e=Object(a.useState)(void 0),t=Object(l.a)(e,2),n=t[0],r=t[1],o=Object(a.useCallback)(function(e){if(e){var t=e.start,n=e.end;r([{startRow:t.line-1,startCol:t.column,endRow:n.line-1,endCol:n.column,className:"highlight-marker",type:"background"}])}else r([])},[r]);return[n,o]}(),k=Object(l.a)(x,2),O=k[0],j=k[1],C=function(e){var t=Object(a.useState)([0,0]),n=Object(l.a)(t,2),r=n[0],o=n[1],c=Object(a.useState)(null),i=Object(l.a)(c,2),u=i[0],s=i[1],p=Object(a.useState)(null),m=Object(l.a)(p,2),d=m[0],f=m[1],v=Object(a.useCallback)(function(e){o([e.selectionLead.row+1,e.selectionLead.column])},[o]);return Object(a.useEffect)(function(){var t=function(e,t){for(var n=[t],a=[{node:t}],r="";n.length;){var o=n.pop();for(var c in o)if(ke(o[c])&&Oe(e,o[c].loc)&&(n.push(o[c]),r=r?"".concat(r,".").concat(c):c,a.push({key:c,keyPath:r,node:o[c]})),Array.isArray(o[c])){var l=!0,i=!1,u=void 0;try{for(var s,p=o[c][Symbol.iterator]();!(l=(s=p.next()).done);l=!0){var m=s.value;ke(m)&&Oe(e,m.loc)&&(n.push(m),r=r?"".concat(r,".").concat(c):c,a.push({key:c,keyPath:r,node:m}))}}catch(d){i=!0,u=d}finally{try{l||null==p.return||p.return()}finally{if(i)throw u}}}if(0===n.length)return{node:o,nodePath:a}}return{node:null,nodePath:null}}(r,e),n=t.node,a=t.nodePath;s(n),f(a)},[r,e,s]),[u,d,v]}(g),N=Object(l.a)(C,3),_=N[0],S=N[1],P=N[2];return v({babelSettings:c,treeSettings:m,code:h}),r.a.createElement("div",{className:de.a.App},r.a.createElement("div",{className:de.a.codeContainer},r.a.createElement("div",{className:de.a.codeToolbar},r.a.createElement(ue,{settings:c,onChangeSettings:i})),r.a.createElement(pe.a,{mode:"javascript",theme:"github",width:"100%",height:"100%",onChange:E,name:"code",value:h,showPrintMargin:!1,editorProps:{$blockScrolling:!0},setOptions:{useWorker:!1},markers:O,onCursorChange:P})),r.a.createElement("div",{className:de.a.astContainer},y?r.a.createElement("pre",null,y.toString()):g===ye?r.a.createElement(fe.a,null):r.a.createElement(T,{data:g,selectedNode:_,selectedNodePath:S,setMarker:j,treeSettings:m,toggleTreeSettings:d})))};function xe(e,t){var n=Object(a.useState)(e),r=Object(l.a)(n,2),o=r[0],c=r[1];return Object(a.useEffect)(function(){var n=setTimeout(function(){c(e)},t);return function(){clearTimeout(n)}},[e,c]),o}function ke(e){return e&&e.type&&e.loc}function Oe(e,t){if(!t)return!1;var n=Object(l.a)(e,2),a=n[0],r=n[1],o=t.start,c=t.end;return(o.line<a||o.line===a&&o.column<=r)&&(c.line>a||c.line===a&&c.column>=r)}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},49:function(e,t,n){e.exports={App:"wmyqVrjdc0tU9zQZUhm3L",codeToolbar:"v4LbQScNgn0x-jdjEUqQW",codeContainer:"C-2c1TUYuh0DGtmJKsID8",astContainer:"_16FYGqeOtDx_OWXwTypaLx"}},62:function(e,t,n){e.exports={options:"style_options__jUN_9",drawer:"style_drawer__3UxSD",topbar:"style_topbar__1wy4K"}},8:function(e,t,n){e.exports={nodeType:"_1r46sXWciHKS0YO_YvmQ47",key:"_17Au7TC6qyGwgV596KDwEb",expandableKey:"_29fRAq6gAA1bjN8ByrfX1y",preview:"_1n-DNYdPo9f_oWWTbL6Vk_",colon:"_1RAtdlaYdI-X6JBSTfT_Mi",number:"_3VAHQrojc2ZK9zvQAK0BZn",string:"_1qZv2ytJ9QApPyW12dMurK",null:"_1l1Eo7GOvH5kBk5VNoxFSt",boolean:"_3k1T6qt_wVUPBY70JA0LEW",value:"_3oXvvKKsew2dNC3e88n2aC",child:"_1BVWBX-EzMRmI63_FTkxcR",hidden:"_37e-5Jz3QKQaX-JJxWjM82",expandToggle:"_2PNmbokB1iPZvX3FxVyNu2",bracket:"_1_bMU1YmHJJMAt-OkSzfR5",options:"_2OWKpKRMjkCKvgB58qpAr1",footer:"_2PoBnyV2Eybs5kZ74qvcNH",footerItem:"_3c1yiE4aqARnrwmtf3Qq2A",footerItemPath:"rZnXLnCgwPj8Hq72BuvYN",highlighted:"_3T06bc2YEjWenk23leJe8y",tooltipText:"_33epfuk_M2FAh4L0-a07M_",treeContainer:"_2wg6Sc8ebkPTWmqb2PO55B"}}},[[118,1,2]]]);
//# sourceMappingURL=main.a52fe335.chunk.js.map