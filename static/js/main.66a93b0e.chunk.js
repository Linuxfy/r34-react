(this["webpackJsonpr34-browser"]=this["webpackJsonpr34-browser"]||[]).push([[0],{37:function(e,t,n){e.exports=n(61)},42:function(e,t,n){},47:function(e,t,n){},52:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(28),i=n.n(c),o=(n(42),n(8)),u=n(13),s=n(15),l=n(14),f=n(16),m=n(3),p=n(9),d=n(12),h=n(10);function b(e,t){switch(t.type){case"ADD_TAG":return v(e,t.tag);case"REMOVE_TAG":return O(e,t.tag);case"TOGGLE_TAG":return E(e,t.tag);case"ADD_POSTS":return j(e,t.posts);case"SET_POSTS":return k(e,t.posts,t.count);case"SET_OPTION":return y(e,t.key,t.value);case"FOCUS_POST":return x(e,t.id);case"UNFOCUS_POST":return x(e,void 0);default:throw new Error("Unrecognized Action: ".concat(t.type))}}function g(e,t){return e.findIndex((function(e){return e.name===t.name}))}var v=function(e,t){return Object(h.a)(e,(function(n){var a=g(e.tags,t);n.tags=Object(d.a)(e.tags),-1!==a?n.tags[a]=t:n.tags=[].concat(Object(d.a)(n.tags),[t])}))},O=function(e,t){return Object(h.a)(e,(function(n){var a=g(e.tags,t);-1!==a&&(n.tags=Object(d.a)(e.tags),n.tags.splice(a,1))}))},E=function(e,t){return-1!==g(e.tags,t)?O(e,t):v(e,t)},j=function(e,t){return Object(h.a)(e,(function(n){n.results.posts=[].concat(Object(d.a)(e.results.posts),Object(d.a)(t)),n.results.page=e.results.page+1}))},k=function(e,t,n){return Object(h.a)(e,(function(e){e.results.posts=Object(d.a)(t),e.results.count=n,e.results.page=0}))},y=function(e,t,n){return Object(h.a)(e,(function(e){e.options[t]=n}))},x=function(e,t){return Object(h.a)(e,(function(e){e.context.focusedPost=t}))},w={results:{posts:[],page:0,count:void 0},context:{focusedPost:void 0},tags:[],options:{infinite:!0,rated:void 0,originals:!1}};function _(){var e=function(e){var t=localStorage.getItem("state");return[null!==t&&"undefined"!==t?JSON.parse(t):e,function(e){return localStorage.setItem("state",JSON.stringify(e))}]}(w),t=Object(m.a)(e,2),n=t[0],r=t[1],c=Object(a.useReducer)(b,n),i=Object(m.a)(c,2),o=i[0],u=i[1];return Object(a.useEffect)((function(){r(o)}),[r,o]),[o,u]}var C=n(1),T=n(2);function N(){var e=Object(C.a)(["\n  min-width: 48px;\n"]);return N=function(){return e},e}function S(){var e=Object(C.a)(["\n  border-radius: 0 "," "," 0;\n"]);return S=function(){return e},e}function P(){var e=Object(C.a)(["\n  width: 100%;\n  border-radius: ",";\n"]);return P=function(){return e},e}function A(){var e=Object(C.a)(["\n  height: 32px;\n  color: ",";\n  background: ",";\n  border: "," thin solid;\n\n  :hover {\n    color: ",";\n    background-color: ",";\n    cursor: pointer;\n  }\n"]);return A=function(){return e},e}function F(){var e=Object(C.a)(["\n  position: absolute;\n"]);return F=function(){return e},e}function I(){var e=Object(C.a)(["\n  background: none;\n  border: none;\n\n  :focus {\n    outline: none;\n  }\n"]);return I=function(){return e},e}var z=T.a.button(I()),R=Object(T.a)(z)(F()),D=T.a.button(A(),"red","black","red","black","red"),G=Object(T.a)(D)(P(),"3px"),U=Object(T.a)(D)(S(),"3px","3px"),L=Object(T.a)(z)(N());function B(e){var t,n=e.type,a=e.children,c=e.onClick;e.disabled;switch(n){case"invisible":t=z;break;case"block":t=G;break;case"topLeft":t=R;break;case"modifier":t=L;break;case"add":t=U;break;default:t=D}return r.a.createElement(t,{onClick:c},a)}function H(){var e=Object(C.a)(["\n  ","\n  ","\n"]);return H=function(){return e},e}function M(){var e=Object(C.a)(["\n  ","\n"]);return M=function(){return e},e}var J=T.a.i(M(),(function(e){var t=e.color,n=e.size;return"\n    color: ".concat(t,";\n    width: ").concat(n,"px;\n    height: ").concat(n,"px;\n  ")})),W=T.a.span(H(),(function(e){return e.left?"margin-right: 5px;":""}),(function(e){return e.right?"margin-left: 5px;":""})),V=function(e){var t=e.className,n=e.icon,a=e.color,c=e.size,i=e.onClick,o=e.left,u=e.right;return r.a.createElement(W,{onClick:i,left:o,right:u},r.a.createElement(J,{className:"fas ".concat(n," ").concat(t),color:a,size:c}))};function $(e){return r.a.createElement(V,Object.assign({icon:"fa-user"},e))}function q(e){return r.a.createElement(V,Object.assign({icon:"fa-pen"},e))}function K(e){return r.a.createElement(V,Object.assign({icon:"fa-copyright"},e))}function Q(e){return r.a.createElement(V,Object.assign({icon:"fa-plus-circle"},e))}function X(e){return r.a.createElement(V,Object.assign({icon:"fa-minus-circle"},e))}function Y(e){return r.a.createElement(V,Object.assign({icon:"fa-times"},e))}function Z(e){return r.a.createElement(V,Object.assign({icon:"fa-expand"},e))}function ee(e){return r.a.createElement(V,Object.assign({icon:"fa-caret-down"},e))}function te(e){return r.a.createElement(V,Object.assign({icon:"fa-external-link-alt"},e))}function ne(e){return r.a.createElement(V,Object.assign({icon:"fa-hashtag"},e))}function ae(e){return r.a.createElement(V,Object.assign({icon:"fa-registered"},e))}function re(e){return r.a.createElement(V,Object.assign({icon:"fa-heart"},e))}function ce(){var e=Object(C.a)(["\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n"]);return ce=function(){return e},e}function ie(){var e=Object(C.a)(["\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n"]);return ie=function(){return e},e}V.defaultProps={color:"black",size:14};var oe,ue=T.a.img(ie()),se=T.a.video(ce());function le(e){var t=e.type,n=e.src,c=e.thumbnail_src,i=e.isFullscreen,o=e.onFullscreen,u=e.onClick,s=Object(a.useCallback)((function(){oe=!0}),[]),l=Object(a.useCallback)((function(e){oe||(u(e),e.preventDefault()),oe=!1}),[u]);return"video"===t?r.a.createElement(se,{controls:!0,loop:!0,src:n,alt:n,poster:c,preload:"none",onClick:u,onTouchMove:s,onTouchEnd:l}):r.a.createElement(r.a.Fragment,null,r.a.createElement(B,{type:"topLeft",onClick:o},i?r.a.createElement(Y,{color:"white"}):r.a.createElement(Z,{color:"white"})),r.a.createElement(ue,{src:n,alt:n,onClick:u}))}function fe(){var e=Object(C.a)(["\n  position: fixed;\n  left: 100%;\n  right: 100%;\n"]);return fe=function(){return e},e}function me(){var e=Object(C.a)(["\n  position: fixed;\n  left: 0;\n  bottom: 0;\n"]);return me=function(){return e},e}function pe(){var e=Object(C.a)(["\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  overflow: scroll;\n  background-color: black;\n"]);return pe=function(){return e},e}var de=T.a.div(pe()),he=T.a.div(me()),be=T.a.img(fe());function ge(e){var t=e.focusedPost,n=e.posts,c=e.dispatch,i=n.findIndex((function(e){return e.id===t})),o=n[i],u=o.big_src,s=o.media_type,l=o.thumbnail_src,f=n[i>0?i-1:i].big_src,m=n[i<n.length-1?i+1:i].big_src,p=Object(a.useCallback)((function(){return i>0&&c({type:"FOCUS_POST",id:n[i-1].id})}),[i,c,n]),d=Object(a.useCallback)((function(){return i<n.length-1&&c({type:"FOCUS_POST",id:n[i+1].id})}),[i,c,n]);return r.a.createElement(de,null,r.a.createElement(le,{type:s,src:u,thumbnail_src:l,isFullscreen:!0,onFullscreen:function(){return c({type:"UNFOCUS_POST"})},onClick:function(){}}),r.a.createElement(he,null,r.a.createElement(X,{onClick:p,color:"white"}),r.a.createElement(Q,{onClick:d,color:"white"})),r.a.createElement(be,{src:f}),r.a.createElement(be,{src:m}))}var ve=n(31),Oe=n(11),Ee=n.n(Oe),je=n(21),ke=20,ye="https://r34-json.herokuapp.com";fetch(ye).catch((function(){return ye="https://r34-api-clone.herokuapp.com"}));var xe={getTags:function(){var e=Object(je.a)(Ee.a.mark((function e(t){var n;return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(ye+"/tags?limit="+ke+"&name="+t+"*&order_by=posts");case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getPosts:function(){var e=Object(je.a)(Ee.a.mark((function e(t){var n,a,r,c=arguments;return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:0,a=c.length>2&&void 0!==c[2]?c[2]:0,e.next=4,fetch(we(n,t,a));case 4:return r=e.sent,e.next=7,r.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getAliases:function(){var e=Object(je.a)(Ee.a.mark((function e(t){var n;return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(ye+"/alias/"+t);case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};function we(e,t,n){var a=ye+"/posts";return a+="?pid="+e,a+="&limit="+ke,a+="&tags="+t.map((function(e){return(e.modifier?e.modifier:"")+encodeURIComponent(e.name)})).join("+"),a+=encodeURIComponent("+score:>="+n)}var _e=function e(t,n,a,r,c,i,u,s,l,f,m,p,d,h,b,g,v,O,E,j,k){Object(o.a)(this,e),this.id=t,this.score=n,this.rating=a,this.source=r,this.tags=c,this.media_type=i,this.small_src=u,this.big_src=s,this.thumbnail_src=l,this.width=f,this.height=m,this.creator_id=p,this.creator_url=d,this.status=h,this.parent_id=b,this.has_children=g,this.has_comments=v,this.comments_url=O,this.has_notes=E,this.created_at=j,this.change=k},Ce=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=arguments.length>2?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"+";Object(o.a)(this,e),this.name=t,this.types=n,this.count=a,this.modifier=r},Te=function(e){return e.name?function(e){var t=e.name,n=e.types,a=e.count,r=e.modifier;return new Ce(t,n,Number(a),r)}(e):function(e){var t=e.id,n=e.type,a=e.score,r=e.rating,c=e.source,i=e.tags,o=e.file_url,u=e.width,s=e.height,l=e.creator_id,f=e.creator_url,m=e.sample_url,p=e.preview_url,d=e.status,h=e.parent_id,b=e.has_children,g=e.has_comments,v=e.comments_url,O=e.has_notes,E=e.created_at,j=e.change;return new _e(Number(t),Number(a),r,c,i?i.map((function(e){return new Ce(e)})):[],n,m,o,p,Number(u),Number(s),Number(l),f,d,h,b,g,v,O,E,j)}(e)};function Ne(){var e=Object(C.a)(["\n  width: 100%;\n  border: none;\n  outline: none;\n  background: none;\n"]);return Ne=function(){return e},e}var Se=T.a.input(Ne());function Pe(e){var t=e.value,n=e.setValue;return r.a.createElement(Se,{id:"tag-input",value:t,onChange:function(e){return n(e.target.value)},placeholder:"Search for tags"})}function Ae(e){var t=e.types,n=e.className,a=e.onClick;switch(t.find((function(e){return!e.match(/^[general|ambiguous]$/)}))){case"character":return r.a.createElement($,{className:n,onClick:a,left:!0});case"copyright":return r.a.createElement(K,{className:n,onClick:a,left:!0});case"artist":return r.a.createElement(q,{className:n,onClick:a,left:!0});default:return r.a.createElement("div",{className:n})}}Ae.defaultProps={types:[]};var Fe=Ae;function Ie(e){var t=Number(e);return t>=1e6?"~".concat((t/1e6).toFixed(0),"M"):t>=1e3?"~".concat((t/1e3).toFixed(0),"K"):t}function ze(){var e=Object(C.a)(["\n  flex: 0 0 48px;\n  text-align: center;\n"]);return ze=function(){return e},e}function Re(){var e=Object(C.a)(["\n  display: flex;\n  border-top: 1px grey solid;\n  padding: 2px 0;\n"]);return Re=function(){return e},e}function De(){var e=Object(C.a)(["\n  position: absolute;\n  ",";\n  background: white;\n  border-radius: 0 0 3px 3px;\n  color: black;\n  z-index: 1;\n"]);return De=function(){return e},e}var Ge=T.a.div(De(),(function(e){var t=e.inputRef;return t?"\n    top: ".concat(t.getBoundingClientRect().top+t.clientHeight,"px;\n    left: ").concat(t.getBoundingClientRect().left,"px;\n    width: ").concat(t.clientWidth,"px;\n    "):""}));var Ue=T.a.div(Re()),Le=T.a.span(ze());function Be(e){var t=e.name,n=e.posts,a=e.types,c=e.onClick;return r.a.createElement(Ue,{onClick:c},r.a.createElement(Le,null,r.a.createElement(Fe,{types:a})),r.a.createElement("span",{style:{flexGrow:1}},t),r.a.createElement("span",{style:{paddingRight:5}},Ie(n)," posts"))}var He=function(e){var t=e.inputRef,n=e.entries,a=e.onClick;return r.a.createElement(Ge,{inputRef:t},n.map((function(e){return r.a.createElement(Be,Object.assign({key:e.name},e,{onClick:function(){return a(e)}}))})))};function Me(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Je(){var e=Object(C.a)(["\n  display: flex;\n  width: 100%;\n  background: ",";\n  border-radius: ",";\n"]);return Je=function(){return e},e}var We=T.a.div(Je(),"white",(function(e){return e.closed?"3px":"".concat("3px"," ").concat("3px"," 0 0 ")}));var Ve=function(e){var t=e.dispatch,n=Object(a.useState)(),c=Object(m.a)(n,2),i=c[0],o=c[1],u=Object(a.useState)(""),s=Object(m.a)(u,2),l=s[0],f=s[1],p=Object(a.useState)("+"),d=Object(m.a)(p,2),h=d[0],b=d[1],g=Object(a.useState)([]),v=Object(m.a)(g,2),O=v[0],E=v[1],j=Object(a.useCallback)((function(e){t({type:"ADD_TAG",tag:Te({name:e.name,modifier:h,count:e.posts,types:e.types})}),f(""),E([])}),[t,h]);return Object(a.useEffect)((function(){var e=setTimeout((function(){var e;l&&""!==l&&xe.getTags((e=l,e.toLowerCase().replace(/ /g,"_"))).then((function(e){E(e)}))}),400);return function(){return clearTimeout(e)}}),[l]),r.a.createElement(We,{ref:o,closed:0===O.length},r.a.createElement(B,{type:"modifier",onClick:function(){return b("+"===h?"-":"+")}},h),r.a.createElement(Pe,{value:l,setValue:f}),r.a.createElement(B,{type:"add",onClick:function(){if(l&&""!==l.trim()){var e=O.find((function(e){return e.name===l}))||{};j(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Me(n,!0).forEach((function(t){Object(ve.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Me(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{name:l}))}}},"Add"),r.a.createElement(He,{inputRef:i,entries:O,onClick:function(e){j(e)}}))};n(47);function $e(){var e=Object(C.a)(["\n  ","\n  ","\n"]);return $e=function(){return e},e}function qe(){var e=Object(C.a)(["\n  display: inline-block;\n  padding: 0.25rem 0.4rem;\n  border-radius: ","\n  font-size: 0.8rem;\n  line-height: 1.2;\n  vertical-align: baseline;\n  margin-block-end: 5px;\n  margin-inline-end: 5px;\n  ","\n"]);return qe=function(){return e},e}var Ke=T.a.div(qe(),(function(e){return e.collapsed?"3px":"".concat("3px"," ").concat("3px"," 0 0")}),(function(e){var t=e.active,n=t?"red":"black";return"\n    color: ".concat(t?"black":"red",";\n    background-color: ").concat(n,";\n    border: ").concat("red"," thin solid;\n\n    :hover {\n      color: ").concat("white",";\n      border: ").concat("white"," thin solid;\n\n      ").concat(J," {\n        color: ").concat("white",";\n      }\n    }\n  ")})),Qe=T.a.span($e(),(function(e){return e.left?"margin-right: 5px;":""}),(function(e){return e.right?"margin-left: 5px;":""}));function Xe(e){var t=e.name,n=e.count,c=e.modifier,i=e.types,o=e.activeTags,u=e.loadAliases,s=e.dispatch,l=Object(a.useState)(),f=Object(m.a)(l,2),p=f[0],d=f[1],h=Object(a.useState)(!0),b=Object(m.a)(h,2),g=b[0],v=b[1];Object(a.useEffect)((function(){o.some((function(e){return e.name===t}))&&xe.getAliases(t).then((function(e){e.sort((function(e,t){return Number(t.posts)-Number(e.posts)})),d(e.filter((function(e){return!o.some((function(t){return t.name===e.name}))})))}))}),[t,o]);var O=o.some((function(e){return e.name===t})),E=u&&p&&p.length>0;return r.a.createElement(Ke,{active:O,collapsed:g,onMouseLeave:function(){return v(!0)}},r.a.createElement(Fe,{types:i,left:!0}),r.a.createElement(Ye,{name:t,count:n,modifier:c,types:i,activeTags:o,dispatch:s}),E&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Qe,{right:!0,onClick:function(){return v(!g)}},r.a.createElement(ee,null)),r.a.createElement("div",{className:"dropdown-list"+(g?"":" visible")},p.map((function(e){var t=e.name,n=e.posts;return r.a.createElement(Ze,{key:"t_"+t,name:t,count:n,dispatch:s})})))))}function Ye(e){var t=e.name,n=e.count,a=e.types,c=e.modifier,i=e.dispatch,o=n?"".concat(t," (").concat(n,")"):t;return r.a.createElement("span",{onClick:function(){return i({type:"TOGGLE_TAG",tag:{name:t,count:n,types:a,modifier:c}})}},"-"===c?r.a.createElement("s",null,o):o)}function Ze(e){var t=e.name,n=e.count,a=e.dispatch;return r.a.createElement("div",{className:"alias"},r.a.createElement(Ye,{name:t,count:n,dispatch:a}))}Xe.defaultProps={types:[],onClick:function(){}},Ye.defaultProps={modifier:"+",types:[],activeTags:[],onClick:function(){}};var et=Xe;function tt(e){var t=e.tags,n=e.activeTags,a=e.loadAliases,c=e.dispatch;return r.a.createElement("div",{className:"tag-list"},t.map((function(e){return r.a.createElement(et,Object.assign({key:"t_"+e.name},e,{activeTags:n,loadAliases:a,dispatch:c}))})))}tt.defaultProps={activeTags:[],onItemClick:function(){},onItemItemClick:function(){}};var nt=tt,at=n(32),rt=n.n(at);n(52);function ct(){var e=Object(C.a)(["\n  margin-inline-start: 5px;\n"]);return ct=function(){return e},e}function it(){var e=Object(C.a)(["\n  display: flex;\n  margin-block-end: 5px;\n"]);return it=function(){return e},e}var ot=T.a.label(it()),ut=T.a.span(ct());function st(e){var t=e.children,n=e.initial,a=e.onChange;return r.a.createElement(ot,null,r.a.createElement(rt.a,{defaultChecked:n,icons:{checked:null,unchecked:null},onChange:a}),r.a.createElement(ut,null,t))}function lt(){var e=Object(C.a)(["\n  background: none;\n  border: none;\n  outline: none;\n  color: red;\n  margin-left: 5px;\n  margin-right: 5px;\n  width: ","em;\n  text-align: right;\n"]);return lt=function(){return e},e}st.defaultProps={initial:!1};var ft=T.a.input(lt(),(function(e){var t=e.value;return.57*String(t).length}));function mt(e){var t=e.options,n=e.dispatch,c=Object(a.useState)(1),i=Object(m.a)(c,2),o=i[0],u=i[1];return r.a.createElement("div",null,r.a.createElement(st,{initial:t.infinite,onChange:function(){return n({type:"SET_OPTION",key:"infinite",value:!t.infinite})}},"Infinite Scrolling"),r.a.createElement(st,{initial:Boolean(t.rated),onChange:function(){n({type:"SET_OPTION",key:"rated",value:t.rated?void 0:o})}},t.rated?r.a.createElement("div",{style:{display:"flex"}},"Above",r.a.createElement(ft,{type:"text",value:o,onChange:function(e){return u(Number(e.target.value))},onBlur:function(e){return n({type:"SET_OPTION",key:"rated",value:Number(e.target.value)})}}),"likes"):"Only show Rated Posts"),r.a.createElement(st,{initial:t.originals,onChange:function(){return n({type:"SET_OPTION",key:"originals",value:!t.originals})}},"Load Original Sizes"))}var pt=function(e){var t=e.options,n=e.tags,c=e.dispatch,i=Object(a.useCallback)((function(){xe.getPosts(n,0,t.rated).then((function(e){c({type:"SET_POSTS",posts:e.posts.map(Te),count:Number(e.count)})}))}),[c,t.rated,n]);return r.a.createElement("section",{className:"search"},r.a.createElement("h3",{className:"centered"},r.a.createElement("label",{htmlFor:"tag-input"},"Search")),r.a.createElement(Ve,{dispatch:c}),n.length>0?r.a.createElement("label",null,"Tags:",r.a.createElement(nt,{tags:n,activeTags:n,dispatch:c,loadAliases:!0})):r.a.createElement("div",{className:"mb-1"}),r.a.createElement(mt,{options:t,dispatch:c}),r.a.createElement(B,{type:"block",onClick:i},"Search"))};function dt(){var e=Object(C.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-left: 5px;\n  margin-right: 5px;\n"]);return dt=function(){return e},e}function ht(){var e=Object(C.a)(["\n  margin-left: 5px;\n"]);return ht=function(){return e},e}var bt=T.a.div(ht()),gt=T.a.div(dt());var vt=function(e){var t=e.rating,n=e.score,a=e.source,c=e.tags,i=e.activeTags,o=e.dispatch;return r.a.createElement(bt,null,r.a.createElement(gt,null,t&&r.a.createElement(Ot,{value:t}),n&&r.a.createElement(Et,{value:n}),a&&r.a.createElement(jt,{value:a})),r.a.createElement(nt,{tags:c,activeTags:i,dispatch:o}))},Ot=function(e){var t=e.value;return r.a.createElement("span",null,r.a.createElement(ae,{color:"white",left:!0}),t[0].toUpperCase())},Et=function(e){var t=e.value;return r.a.createElement("span",null,t,r.a.createElement(re,{color:"white",right:!0}))};function jt(e){var t=e.value;return t.startsWith("http")?r.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:"source"},r.a.createElement(te,{color:"red",left:!0}),"Source"):r.a.createElement("span",null,r.a.createElement(ne,{color:"white",left:!0}),t)}function kt(){var e=Object(C.a)(["\n  background: #101010;\n  transition: height 0.5s ease-in-out;\n\n  :not(:last-of-type) {\n    margin-bottom: 10px;\n  }\n"]);return kt=function(){return e},e}var yt=T.a.div(kt());function xt(e){var t=e.id,n=e.media_type,c=e.small_src,i=e.big_src,o=e.thumbnail_src,u=e.rating,s=e.score,l=e.source,f=e.tags,p=e.loadOriginal,d=e.activeTags,h=e.dispatch,b=function(e,t,n,a){var r;return e?r=t:(r="".concat(n,"?").concat(a)).includes("//images")&&(r=r.replace("//images","/images")),r}(p,i,c,t),g=Object(a.useState)(!0),v=Object(m.a)(g,2),O=v[0],E=v[1];return r.a.createElement(yt,null,r.a.createElement(le,{type:n,src:b,thumbnail_src:o,isFullscreen:!1,onFullscreen:function(){return h({type:"FOCUS_POST",id:t})},onClick:function(){return E(!O)}}),!O&&r.a.createElement(vt,{rating:u,score:s,source:l,tags:f,activeTags:d,dispatch:h}))}var wt=function(e){var t=e.posts,n=e.activeTags,a=e.loadOriginal,c=e.dispatch;return r.a.createElement("div",{className:"post-list list-group list-group-flush"},t.map((function(e){return r.a.createElement(xt,Object.assign({key:"p_".concat(e.id)},e,{loadOriginal:a,activeTags:n,dispatch:c}))})))},_t=!0;var Ct=function(e){var t=e.options,n=e.dispatch,c=e.tags,i=e.results,o=Object(a.useCallback)((function(){xe.getPosts(c,i.page+1,t.rated).then((function(e){n({type:"ADD_POSTS",posts:e.posts.map(Te)}),_t=!0}))}),[n,t.rated,i.page,c]);return window.onscroll=Object(a.useCallback)((function(){t.infinite&&_t&&window.innerHeight+document.documentElement.scrollTop>=document.documentElement.scrollHeight-window.innerHeight&&(_t=!1,o())}),[o,t.infinite]),r.a.createElement("section",{className:"results"},r.a.createElement("h3",{className:"centered"},Ie(i.count)," results"),r.a.createElement(wt,{posts:i.posts,activeTags:c,loadOriginal:t.originals,dispatch:n}),!t.infinite&&r.a.createElement(B,{type:"block",onClick:o},"Load More"))};function Tt(e){var t=e.tags,n=e.options,a=e.results,c=e.dispatch;return r.a.createElement("main",null,r.a.createElement(pt,{options:n,tags:t,dispatch:c}),a.posts.length>0&&r.a.createElement(Ct,{options:n,dispatch:c,tags:t,results:a}))}var Nt=Object(p.e)((function(){var e=_(),t=Object(m.a)(e,2),n=t[0],a=t[1],c=n.results,i=n.tags,o=n.options,u=n.context;return u.focusedPost?r.a.createElement(ge,{focusedPost:u.focusedPost,posts:c.posts,dispatch:a}):r.a.createElement(Tt,{tags:i,options:o,results:c,dispatch:a})})),St=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement("main",null,r.a.createElement("p",null,"Helpful things")))}}]),t}(a.Component),Pt=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement("header",null,r.a.createElement("h1",null,"404 - not found")),r.a.createElement("main",null,r.a.createElement("p",null,"Go away")))}}]),t}(a.Component),At=n(20),Ft=(n(59),n(60),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(At.a,{basename:"/r34-react"},r.a.createElement("header",{className:"centered"},r.a.createElement("h1",{className:"centered"},"Browse ",r.a.createElement("a",{href:"https://rule34.xxx"},"Rule34")),r.a.createElement("div",{className:"container d-flex justify-content-center menu-bar"},r.a.createElement(At.b,{to:"/",className:"menu-item"},"Search"),r.a.createElement(At.b,{to:"/help",className:"menu-item"},"Help"))),r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",render:function(){return r.a.createElement(Nt,null)}}),r.a.createElement(p.a,{exact:!0,path:"/help",component:St}),r.a.createElement(p.a,{component:Pt})),r.a.createElement("div",{className:"spacer"}),r.a.createElement("footer",null,r.a.createElement("small",null,r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/kurozenzen/r34"},"Github Repository"))),r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("p",null,"Please, if you notice"," ",r.a.createElement("a",{href:"https://github.com/kurozenzen/r34/issues/new?template=bug_report.md"}," ","something isn't right"),", or you"," ",r.a.createElement("a",{href:"https://github.com/kurozenzen/r34/issues/new?template=feature_request.md"},"want a feature")," ","to be implemented take the time to let me know.")),r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("p",null,"Hosted with Github Pages.")))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Ft,null),document.getElementById("app-root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.66a93b0e.chunk.js.map