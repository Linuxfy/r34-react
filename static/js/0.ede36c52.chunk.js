(this["webpackJsonpr34-browser"]=this["webpackJsonpr34-browser"]||[]).push([[0],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return D}));var c,o=n(28),r=n(79),i=n(6),a=n(0),s=n(2),d=n(32),l=n(34),b=n(41),u=n(3);const j=s.d.input((e=>Object(s.c)(c||(c=Object(i.a)(["\n    width: 100%;\n    border: none;\n    outline: none;\n    background: none;\n    font-size: ",";\n    border-top: "," "," solid;\n    border-bottom: "," "," solid;\n  "])),e.theme.fontSizes.content,e.theme.colors.accentColor,e.theme.dimensions.borderWidth,e.theme.colors.accentColor,e.theme.dimensions.borderWidth)));function O(e){const t=e.value,n=e.setValue;return Object(u.jsx)(j,{id:"tag-input",value:t,onChange:e=>n(e.target.value),placeholder:"Search for tags","aria-label":"Search"})}var f,h,m,g,p=n(98),x=n(87);const v=s.d.div((({theme:e})=>Object(s.c)(f||(f=Object(i.a)(["\n    display: grid;\n    grid-template-columns: 48px 1fr auto;\n    height: ",";\n    background: white;\n    align-items: center;\n  "])),e.dimensions.blockHeight))),k=s.d.span(h||(h=Object(i.a)(["\n  grid-column: 2/3;\n"]))),C=s.d.span(m||(m=Object(i.a)(["\n  grid-column: 3/4;\n"]))),w=s.d.div(g||(g=Object(i.a)(["\n  grid-column: 1/2;\n  text-align: center;\n"])));function S(e){const t=e.name,n=e.posts,c=e.types,o=e.onClick;return Object(u.jsxs)(v,{onClick:o,children:[Object(u.jsx)(w,{children:Object(u.jsx)(p.a,{types:c})}),Object(u.jsx)(k,{children:Object(x.d)(t)}),Object(u.jsxs)(C,{children:[Object(x.a)(n)," posts"]})]})}var y,z;const R=s.d.div((e=>Object(s.c)(z||(z=Object(i.a)(["\n    display: flex;\n    flex-direction: column;\n    ",";\n    background: lightgrey;\n    gap: 1px;\n    box-sizing: border-box;\n    border: "," "," solid;\n    border-top: none;\n    border-radius: 0 0 3px 3px;\n    color: black;\n    z-index: 3;\n  "])),function(e){if(e){const t=e.offsetTop,n=e.clientHeight,c=e.offsetLeft,o=e.clientWidth;return Object(s.c)(y||(y=Object(i.a)(["\n      position: absolute;\n      top: ","px;\n      left: ","px;\n      width: ","px;\n      max-height: 50vh;\n      overflow-y: scroll;\n    "])),t+n,c,o)}return""}(e.tagSelectorRef),e.theme.dimensions.borderWidth,e.theme.colors.accentColor)));function T(e){const t=e.tagSelectorRef,n=e.entries,c=e.onClick;return n&&n.length>0?Object(u.jsx)(R,{tagSelectorRef:t,children:n.map((e=>Object(u.jsx)(S,Object(o.a)({onClick:()=>c(e)},e),e.name)))}):null}var A=n(23),N=n(7),L=n(9),W=n(99),H=n(10);const M=[H.c.PLUS,H.c.MINUS,H.c.OR];var P,E,B;const U=s.d.div((e=>Object(s.c)(P||(P=Object(i.a)(["\n    display: flex;\n    background: white;\n    ","\n  "])),e.closed?Object(s.c)(E||(E=Object(i.a)(["\n          border-radius: ",";\n        "])),e.theme.dimensions.borderRadius):Object(s.c)(B||(B=Object(i.a)(["\n          border-radius: "," "," 0 0;\n\n          > "," {\n            border-radius: 0 "," 0 0;\n          }\n\n          > "," {\n            border-radius: "," 0 0 0;\n          }\n        "])),e.theme.dimensions.borderRadius,e.theme.dimensions.borderRadius,b.a,e.theme.dimensions.borderRadius,b.d,e.theme.dimensions.borderRadius))));function D(){const e=Object(A.b)(),t=Object(a.useState)(""),n=Object(r.a)(t,2),c=n[0],i=n[1],s=Object(a.useState)([]),j=Object(r.a)(s,2),f=j[0],h=j[1],m=Object(a.useState)(null),g=Object(r.a)(m,2),p=g[0],v=g[1],k=function(e=H.c.PLUS){const t=Object(a.useState)(e),n=Object(r.a)(t,2),c=n[0],o=n[1],i=Object(a.useCallback)((()=>{const e=M.indexOf(c);o(M[(e+1)%M.length])}),[c]);return[c,i]}(),C=Object(r.a)(k,2),w=C[0],S=C[1],y=Object(A.c)(L.n).tagSuggestionsCount,z=Object(a.useCallback)((({name:t,posts:n,types:c})=>{e(Object(N.o)(Object(l.b)({name:t,types:c,modifier:w,count:n}))),i(""),h([])}),[e,w]);Object(W.a)((()=>{c?d.a.getTags(Object(x.f)(c),y).then((e=>{h(e)})):h([])}),300,[y,c]);const R=Object(a.useCallback)((()=>{if(c&&c.trim()){const e=f.find((e=>e.name===c))||{};z(Object(o.a)(Object(o.a)({},e),{},{name:c}))}}),[c,z,f]),P=Object(a.useCallback)((e=>z(e)),[z]);return Object(u.jsxs)(U,{ref:v,closed:0===f.length,children:[Object(u.jsx)(b.d,{onClick:S,"aria-label":"Tag Modifier",children:w}),Object(u.jsx)(O,{value:c,setValue:i}),Object(u.jsx)(b.a,{onClick:R,"aria-label":"Add Tag",children:"Add"}),f.length>0&&Object(u.jsx)(T,{tagSelectorRef:p,entries:f,onClick:P})]})}},105:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var c=n(79),o=n(6),r=n(0),i=n(2),a=n(90),s=n(95),d=n(3);function l(e){const t=e.children,n=e.value,c=e.onToggle;return Object(d.jsxs)(a.a,{children:[Object(d.jsx)(s.a,{value:n,onToggle:c}),Object(d.jsx)("span",{children:t})]})}var b,u,j=n(10),O=n(96);const f=i.d.div((({theme:e})=>Object(i.c)(b||(b=Object(o.a)(["\n    display: grid;\n    gap: ",";\n  "])),e.dimensions.gutter))),h=i.d.input((e=>Object(i.c)(u||(u=Object(o.a)(["\n    background: none;\n    border: none;\n    outline: none;\n    color: ",";\n    width: ","em;\n    text-align: right;\n    font-size: ",";\n    margin: -1px 0.2em 0 0.2em;\n\n    ::-webkit-inner-spin-button,\n    ::-webkit-outer-spin-button {\n      -webkit-appearance: none;\n      margin: 0;\n    }\n    -moz-appearance: textfield;\n  "])),e.theme.colors.accentColor,.65*e.value.length,e.theme.fontSizes.content)));function m(){const e=Object(O.a)(j.f.RATED),t=Object(c.a)(e,2),n=t[0],o=t[1],i=Object(O.a)(j.f.RATEDTRESHOLD),a=Object(c.a)(i,2),s=a[0],b=a[1],u=Object(r.useCallback)((()=>o(!n)),[n,o]),m=Object(r.useState)(s.toString()),g=Object(c.a)(m,2),p=g[0],x=g[1],v=Object(r.useCallback)((e=>x(e.target.value)),[]),k=Object(r.useCallback)((()=>b(Number(p))),[p,b]);return Object(d.jsx)(f,{children:Object(d.jsx)(l,{value:n,onToggle:u,children:n?Object(d.jsxs)("div",{style:{display:"flex"},children:[Object(d.jsx)("span",{children:"More than"}),Object(d.jsx)(h,{type:"text",value:p,onChange:v,onBlur:k}),Object(d.jsx)("span",{children:"likes"})]}):"Only show Rated Posts"})})}},84:function(e,t,n){"use strict";n.d(t,"d",(function(){return d})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return b})),n.d(t,"b",(function(){return u}));var c,o,r,i,a=n(6),s=n(2);const d=s.d.h2((({theme:e})=>Object(s.c)(c||(c=Object(a.a)(["\n    font-size: ",";\n    font-weight: lighter;\n    text-align: center;\n  "])),e.fontSizes.bigTitle))),l=s.d.h1((({theme:e})=>Object(s.c)(o||(o=Object(a.a)(["\n    display: flex;\n    justify-content: center;\n    font-size: ",";\n    font-weight: lighter;\n    text-align: center;\n    gap: ",";\n  "])),e.fontSizes.bigTitle,e.dimensions.gutter))),b=s.d.h3((({theme:e})=>Object(s.c)(r||(r=Object(a.a)(["\n    font-size: ",";\n  "])),e.fontSizes.content))),u=s.d.span((({theme:e})=>Object(s.c)(i||(i=Object(a.a)(["\n    color: ",";\n  "])),e.colors.subduedText)))},85:function(e,t,n){"use strict";n.d(t,"d",(function(){return H})),n.d(t,"b",(function(){return M})),n.d(t,"g",(function(){return P})),n.d(t,"e",(function(){return E})),n.d(t,"h",(function(){return B})),n.d(t,"i",(function(){return U})),n.d(t,"o",(function(){return D})),n.d(t,"n",(function(){return F})),n.d(t,"j",(function(){return V})),n.d(t,"k",(function(){return I})),n.d(t,"c",(function(){return _})),n.d(t,"m",(function(){return J})),n.d(t,"l",(function(){return G})),n.d(t,"a",(function(){return K})),n.d(t,"f",(function(){return Z}));var c,o,r,i,a,s,d,l,b,u,j,O,f,h,m,g,p,x,v,k,C,w,S=n(28),y=n(6),z=n(0),R=n(2),T=n(10),A=n(3);const N=R.d.i((e=>Object(R.c)(c||(c=Object(y.a)(["\n    color: ",";\n    min-width: ","px;\n    height: ","px;\n\n    svg {\n      color: ",";\n    }\n  "])),e.color,e.size,e.size,e.color))),L=R.d.svg((e=>Object(R.c)(o||(o=Object(y.a)(["\n    width: ","px;\n    height: ","px;\n  "])),e.size,e.size))),W=e=>{const t=e.icon,n=e.className,c=void 0===n?"":n,o=e.color,r=void 0===o?"black":o,i=e.size,a=void 0===i?14:i,s=e.onClick,d=void 0===s?T.d:s,l=e.prefix,b=void 0===l?"fas":l;return"pixiv"===t?Object(A.jsx)($,Object(S.a)({},e)):Object(A.jsx)("div",{onClick:d,children:Object(A.jsx)(N,{className:"".concat(b," ").concat(t," ").concat(c),color:r,size:a})})},H=Object(R.d)(W).attrs({icon:"fa-user"})(r||(r=Object(y.a)([""]))),M=Object(R.d)(W).attrs({icon:"fa-pen"})(i||(i=Object(y.a)([""]))),P=Object(R.d)(W).attrs({icon:"fa-copyright"})(a||(a=Object(y.a)([""]))),E=(Object(R.d)(W).attrs({icon:"fa-plus-circle"})(s||(s=Object(y.a)([""]))),Object(R.d)(W).attrs({icon:"fa-minus-circle"})(d||(d=Object(y.a)([""]))),Object(R.d)(W).attrs({icon:"fa-times"})(l||(l=Object(y.a)([""])))),B=Object(z.memo)(Object(R.d)(W).attrs({icon:"fa-expand"})(b||(b=Object(y.a)([""])))),U=Object(R.d)(W).attrs({icon:"fa-external-link-alt"})(u||(u=Object(y.a)([""]))),D=Object(R.d)(W).attrs({icon:"fa-hashtag"})(j||(j=Object(y.a)([""]))),F=Object(R.d)(W).attrs({icon:"fa-registered"})(O||(O=Object(y.a)([""]))),V=Object(R.d)(W).attrs({icon:"fa-heart"})(f||(f=Object(y.a)([""]))),I=Object(R.d)(W).attrs({icon:"fa-link"})(h||(h=Object(y.a)([""]))),_=Object(R.d)(W).attrs({prefix:"fab"})(m||(m=Object(y.a)([""]))),J=Object(z.memo)(Object(R.d)(W).attrs({icon:"fa-play"})(g||(g=Object(y.a)([""])))),G=Object(z.memo)(Object(R.d)(W).attrs({icon:"fa-pause"})(p||(p=Object(y.a)([""])))),K=(Object(R.d)(W).attrs({icon:"fa-caret-down"})(x||(x=Object(y.a)([""]))),Object(R.d)(W).attrs({icon:"fa-caret-up"})(v||(v=Object(y.a)([""])))),Z=(Object(R.d)(W).attrs({icon:"fa-caret-left"})(k||(k=Object(y.a)([""]))),Object(R.d)(W).attrs({icon:"fa-caret-right"})(C||(C=Object(y.a)([""]))),Object(R.d)(W).attrs({icon:" fa-code-branch"})(w||(w=Object(y.a)([""])))),$=e=>{const t=e.color,n=void 0===t?"black":t,c=e.size,o=void 0===c?14:c,r=e.onClick,i=void 0===r?T.d:r;return Object(A.jsx)(L,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",size:o,onClick:i,children:Object(A.jsx)("path",{fill:n,d:"M4.935 0A4.924 4.924 0 0 0 0 4.935v14.13A4.924 4.924 0 0 0 4.935 24h14.13A4.924 4.924 0 0 0 24 19.065V4.935A4.924 4.924 0 0 0 19.065 0zm7.81 4.547c2.181 0 4.058.676 5.399 1.847a6.118 6.118 0 0 1 2.116 4.66c.005 1.854-.88 3.476-2.257 4.563-1.375 1.092-3.225 1.697-5.258 1.697-2.314 0-4.46-.842-4.46-.842v2.718c.397.116 1.048.365.635.779H5.79c-.41-.41.19-.65.644-.779V7.666c-1.053.81-1.593 1.51-1.868 2.031.32 1.02-.284.969-.284.969l-1.09-1.73s3.868-4.39 9.553-4.39zm-.19.971c-1.423-.003-3.184.473-4.27 1.244v8.646c.988.487 2.484.832 4.26.832h.01c1.596 0 2.98-.593 3.93-1.533.952-.948 1.486-2.183 1.492-3.683-.005-1.54-.504-2.864-1.42-3.86-.918-.992-2.274-1.645-4.002-1.646Z"})})}},86:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return s}));var c,o,r=n(6),i=n(2);const a=i.d.div((e=>Object(i.c)(c||(c=Object(r.a)(["\n    align-self: stretch;\n    height: 1px;\n    background: ",";\n  "])),e.theme.colors.layerBg))),s=i.d.div((e=>Object(i.c)(o||(o=Object(r.a)(["\n    width: 1px;\n    align-self: stretch;\n    background: ",";\n  "])),e.theme.colors.layerBg)))},87:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return r})),n.d(t,"d",(function(){return i})),n.d(t,"f",(function(){return a})),n.d(t,"e",(function(){return s}));const c=e=>{const t=e;return t>=1e6?"".concat((t/1e6).toFixed(0),"M"):t>=1e3?"".concat((t/1e3).toFixed(0),"K"):t},o=e=>{if(e.includes("http:")||e.includes("https:")||e.includes("www.")||e.includes(".com")){let t=e.replace(/https?:\/\//,"").replace(/ww[w\d]\./,"").replace(".com","").replace(".org","").replace(".net","");return t.substring(0,t.indexOf("/"))}return e};function r(e){const t=Math.trunc(e/60),n=Math.trunc(e%60);return t+":"+(n<10?"0":"")+n}function i(e){return e.replace(/_/g," ")}function a(e){return e.toLowerCase().replace(/ /g,"_")}function s(e,t){return t?"".concat(i(e)," (").concat(c(t),")"):i(e)}},89:function(e,t,n){"use strict";var c,o=n(6),r=n(2),i=n(25);t.a=r.d.div((e=>Object(r.c)(c||(c=Object(o.a)(["\n    display: grid;\n    ","\n    ","\n    ",";\n    border-radius: ",";\n    width: 100%;\n  "])),Object(i.f)(e),Object(i.g)(e),e.theme.shadow.box,e.theme.dimensions.borderRadius)))},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var c,o=n(6),r=(n(0),n(2)),i=n(3);const a=r.d.div((({theme:e})=>Object(r.c)(c||(c=Object(o.a)(["\n    display: flex;\n    align-items: center;\n    gap: ",";\n  "])),e.dimensions.gutter)));function s({children:e}){return Object(i.jsx)(a,{children:e})}},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(79),o=n(0);function r(e=!1){const t=Object(o.useState)(e),n=Object(c.a)(t,2),r=n[0],i=n[1],a=Object(o.useCallback)((()=>i(!r)),[r]),s=Object(o.useCallback)((()=>i(e)),[e]);return[r,a,s]}},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var c,o,r=n(6),i=n(2),a=n(25);const s=i.d.div(c||(c=Object(r.a)(["\n  ","\n  width: 100%;\n  min-height: 100%;\n"])),a.d);t.b=s;const d=Object(i.d)(s)(o||(o=Object(r.a)(["\n  ","\n  ","\n"])),a.f,a.a)},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return B}));var c,o,r=n(28),i=n(6),a=n(0),s=n(2),d=n(79),l=n(32),b=n(98),u=n(85),j=n(33),O=n(23),f=n(9),h=n(7),m=n(91);var g,p,x,v,k=s.d.div((e=>{return Object(s.c)(o||(o=Object(i.a)(["\n      display: flex;\n      padding: 0 ",";\n      gap: ",";\n      align-items: center;\n      height: ",";\n      border-radius: ",";\n      font-size: ",";\n      ","\n    "])),e.theme.dimensions.gutter,e.theme.dimensions.gutter,e.theme.dimensions.blockHeight,(t=e.collapsed,n=e.theme,t?n.dimensions.borderRadius:"".concat(n.dimensions.borderRadius," ").concat(n.dimensions.borderRadius," 0 0")),e.theme.fontSizes.content,((e,t)=>{const n=e?t.colors.backgroundColor:t.colors.accentColor,o=e?t.colors.accentColor:t.colors.backgroundColor;return Object(s.c)(c||(c=Object(i.a)(["\n    color: ",";\n    background-color: ",";\n    border: "," "," solid;\n    transition: background-color 0.4s ease-in-out;\n\n    cursor: pointer;\n\n    :hover,\n    :focus,\n    :active {\n      border-color: ",";\n      color: ",";\n\n      svg {\n        color: "," !important;\n      }\n    }\n  "])),n,o,t.colors.accentColor,t.dimensions.borderWidth,t.colors.backgroundColor2,t.colors.backgroundColor2,t.colors.backgroundColor2)})(e.active,e.theme));var t,n})),C=n(10),w=n(87),S=n(3);const y={[C.c.PLUS]:Object(s.c)(g||(g=Object(i.a)([""]))),[C.c.MINUS]:Object(s.c)(p||(p=Object(i.a)(["\n    text-decoration: line-through;\n  "]))),[C.c.OR]:Object(s.c)(x||(x=Object(i.a)(["\n    font-style: italic;\n  "])))},z=s.d.span((({modifier:e=C.c.PLUS})=>Object(s.c)(v||(v=Object(i.a)(["\n    ",";\n  "])),y[e])));function R(e){const t=e.modifier,n=e.name,c=e.count,o=Object(w.e)(n,c);return Object(S.jsx)(z,{modifier:t,tabIndex:0,children:o})}var T;const A=s.d.div((({theme:e})=>Object(s.c)(T||(T=Object(i.a)(["\n    display: flex;\n    padding: 0 ",";\n    gap: ",";\n    align-items: center;\n    height: ",";\n    font-size: ",";\n  "])),e.dimensions.bigSpacing,e.dimensions.gutter,e.dimensions.blockHeight,e.fontSizes.content)));function N(e){const t=e.modifier,n=e.name,c=e.count;return Object(S.jsx)(A,{children:Object(S.jsx)(R,{modifier:t,name:n,count:c})})}var L;const W=s.d.div((({theme:e,parentRef:t})=>Object(s.c)(L||(L=Object(i.a)(["\n    position: absolute;\n    top: ","px;\n    left: ","px;\n    width: ","px;\n\n    display: flex;\n    flex-direction: column;\n\n    border-bottom-left-radius: ",";\n    border-bottom-right-radius: ",";\n    border: "," solid ",";\n    border-top: none;\n\n    background: ",";\n    z-index: 3;\n    color: ",";\n\n    > :not(:last-child) {\n      border-bottom: "," solid ",";\n    }\n  "])),t.offsetTop+t.clientHeight+4,t.offsetLeft,t.clientWidth+4,e.dimensions.borderRadius,e.dimensions.borderRadius,e.dimensions.borderWidth,e.colors.accentColor,e.colors.backgroundColor,e.colors.accentColor,e.dimensions.borderWidth,e.colors.accentColor)));function H(e){const t=e.aliases,n=e.modifier,c=e.parentRef;return Object(S.jsx)(W,{parentRef:c,children:t.map((({name:e,count:t})=>Object(S.jsx)(N,{modifier:n,name:e,count:t},"a_"+e)))})}function M(e){const t=e.name,n=e.count,c=e.modifier,o=void 0===c?C.c.PLUS:c,r=e.types,i=e.loadAliases,s=Object(a.useState)(null),g=Object(d.a)(s,2),p=g[0],x=g[1],v=Object(m.a)(!0),w=Object(d.a)(v,3),y=w[0],z=w[1],T=w[2],A=Object(O.b)(),N=Object(O.c)(f.a),L=Object(O.c)(Object(f.c)(t)),W=t in N,M=(null===L||void 0===L?void 0:L.length)>0,P=Object(a.useCallback)((e=>{e.stopPropagation();const c=new j.a(t,r,n,o);A(t in N?Object(h.u)(c):Object(h.o)(c))}),[N,n,A,o,t,r]),E=Object(a.useCallback)((e=>{e.stopPropagation(),z()}),[z]);return Object(a.useEffect)((()=>{i&&N[t]&&l.a.getAliases(t).then((e=>{e.sort(((e,t)=>t.posts-e.posts));const n=e.filter((e=>!N[e.name])).map((e=>new j.a(e.name,[],e.posts)));A(Object(h.m)(n,t))}))}),[i,t,N,A]),Object(S.jsxs)(k,{active:W,collapsed:y,onClick:P,onMouseLeave:T,ref:x,children:[Object(S.jsx)(b.a,{types:r}),Object(S.jsx)(R,{modifier:o,name:t,count:n}),i&&M&&Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(u.a,{onClick:E}),!y&&p&&Object(S.jsx)(H,{aliases:L,modifier:o,parentRef:p})]})]})}var P;const E=s.d.div((({theme:e})=>Object(s.c)(P||(P=Object(i.a)(["\n    display: inline-flex;\n    flex-wrap: wrap;\n    gap: ",";\n  "])),e.dimensions.gutter)));function B(e){const t=e.tags,n=e.loadAliases,c=void 0!==n&&n,o=e.className;return Object(S.jsx)(E,{className:o,children:Object.entries(t).map((([e,t])=>Object(S.jsx)(M,Object(r.a)(Object(r.a)({},t),{},{loadAliases:c}),e)))})}},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var c=n(6),o=(n(0),n(43)),r=n(8),i=n(2),a=n(10),s=n(3);function d(e){const t=Object(i.f)();return Object(s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"0 0 12.7 12.7",children:Object(s.jsxs)("g",{transform:"translate(0,-284.3)",children:[Object(s.jsx)("circle",{id:"path18",cx:"6.3499999",cy:"290.65002",fill:"none",stroke:t.colors.accentColor,strokeWidth:"0.50848764",strokeMiterlimit:"4",strokeDasharray:"none",strokeOpacity:"1",r:"6.0957561"}),Object(s.jsx)("text",{fontStyle:"normal",fontWeight:"normal",fontSize:"8.3113203px",fontFamily:"sansSerif",letterSpacing:"0px",wordSpacing:"0px",fill:t.colors.accentColor,fillOpacity:"1",x:"2.1363549",y:"289.02704",id:"text4533",transform:"scale(0.98538224,1.0148346)",children:Object(s.jsx)("tspan",{id:"tspan4531",x:"2",y:"289.1",fontStyle:"normal",fontVariant:"normal",fontWeight:"300",fontStretch:"normal",fontFamily:"Calibri",fill:t.colors.accentColor,fillOpacity:"1",children:"34"})})]})})}var l,b,u,j,O=n(25),f=n(86),h=n(84);const m=i.d.header((({theme:e})=>Object(i.c)(l||(l=Object(c.a)(["\n    ","\n    gap: ",";\n  "])),Object(O.d)(),e.dimensions.bigSpacing))),g=i.d.div((({theme:e})=>Object(i.c)(b||(b=Object(c.a)(["\n    display: flex;\n    gap: ",";\n    align-items: center;\n    justify-content: center;\n    background: ",";\n    padding: "," 0;\n    ",";\n  "])),e.dimensions.bigSpacing,e.colors.layerBgSolid,e.dimensions.gutter,e.shadow.box))),p=i.d.nav((({theme:e})=>Object(i.c)(u||(u=Object(c.a)(["\n    display: flex;\n    justify-content: center;\n    padding: ",";\n    gap: ",";\n  "])),e.dimensions.bigSpacing,e.dimensions.hugeSpacing))),x=Object(i.d)(o.b)((({to:e,current:t,theme:n})=>Object(i.c)(j||(j=Object(c.a)(["\n    color: ",";\n  "])),e===t?n.colors.accentColor:n.colors.backgroundColor2)));function v(){const e=Object(r.f)().pathname;return Object(s.jsxs)(m,{role:"cell",children:[Object(s.jsxs)(g,{children:[Object(s.jsx)(d,{size:32}),Object(s.jsx)(f.b,{}),Object(s.jsxs)(h.a,{children:[Object(s.jsx)("span",{children:"Browse"})," ",Object(s.jsx)("a",{href:"https://rule34.xxx",children:"Rule34"})]})]}),Object(s.jsxs)(p,{role:"cell",children:[Object(s.jsx)(x,{current:e,to:a.h.SEARCH,children:"Search"}),Object(s.jsx)(f.b,{}),Object(s.jsx)(x,{current:e,to:a.h.HELP,children:"Help"}),Object(s.jsx)(f.b,{}),Object(s.jsx)(x,{current:e,to:a.h.SETTINGS,children:"Settings"})]})]})}},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var c,o,r=n(6),i=(n(0),n(2)),a=n(25),s=n(3);const d=i.d.div((e=>Object(i.c)(c||(c=Object(r.a)(["\n    height: 24px;\n    width: 50px;\n    ","\n    border-radius: 30px;\n    background-color: ",";\n    transition: transform "," ease-in-out;\n  "])),Object(a.c)(e),e.theme.colors.backgroundColor,e.theme.timings.longTransitionTime))),l=i.d.div((e=>Object(i.c)(o||(o=Object(r.a)(["\n    height: 100%;\n    aspect-ratio: 1/1;\n    background-color: ",";\n    border-radius: 50%;\n    transition: all 0.2s ease-in-out;\n    transform: translate(",");\n  "])),e.value?e.theme.colors.accentColor:e.theme.colors.backgroundColor2,e.value?"26px":"0px")));function b(e){const t=e.value,n=e.onToggle;return Object(s.jsx)(d,{onClick:n,children:Object(s.jsx)(l,{value:t})})}},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(0),o=n(23),r=n(7),i=n(9);function a(e){const t=Object(o.b)(),n=Object(o.c)(i.n),a=Object(c.useCallback)((n=>t(Object(r.w)(e,n))),[t,e]);return[n[e],a]}},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(0);var c=n(10),o=n(85),r=n(3);function i(e){const t=e.types,n=void 0===t?[]:t,i=e.className,a=void 0===i?"":i,s=e.onClick,d=void 0===s?c.d:s;switch(n.find((e=>!e.match(/^[general|ambiguous]$/)))){case"character":return Object(r.jsx)(o.d,{className:a,onClick:d});case"copyright":return Object(r.jsx)(o.g,{className:a,onClick:d});case"artist":return Object(r.jsx)(o.b,{className:a,onClick:d});default:return null}}},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(0);function o(e,t,n=[]){const o=Object(c.useRef)(Date.now());Object(c.useEffect)((()=>{const n=setTimeout((()=>{const n=Date.now();n-o.current>=t&&(e(),o.current=n)}),t);return()=>{clearTimeout(n)}}),[t,...n])}}}]);
//# sourceMappingURL=0.ede36c52.chunk.js.map