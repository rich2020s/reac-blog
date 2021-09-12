(this["webpackJsonpreact-router-practice"]=this["webpackJsonpreact-router-practice"]||[]).push([[0],{33:function(t,e,n){},41:function(t,e,n){},42:function(t,e,n){"use strict";n.r(e);var c,a,i,o,r,l,s,j,d,b,u,h,x=n(1),O=n.n(x),p=n(22),f=n.n(p),g=(n(33),n(6)),v=n(10),m=n(2),y=n(4),k=n(5),w=n(0),C=k.a.div(c||(c=Object(y.a)(["\n  max-width: 800px;\n  min-height: 600px;\n  margin: 20px auto;\n  border: 1px solid #ccc;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n"]))),S=k.a.div(a||(a=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  div + div {\n    margin-top: 30px;\n  }\n"]))),P=k.a.h1(i||(i=Object(y.a)(["\n  text-align: left;\n  margin-top: 0;\n"]))),I=k.a.a(o||(o=Object(y.a)(["\n  display: block;\n  text-align: center;\n  background: #ddd;\n  padding: 5px;\n  border: none;\n  margin-top: 30px;\n  transition: all 0.3s;\n  font-size: 16px;\n  :hover {\n    cursor: pointer;\n    background: white;\n  }\n"]))),_=function(t){var e=t.input,n=t.handleInputChange,c=!1;return"Password"===e.label&&(c=!0),Object(w.jsxs)("div",{children:[Object(w.jsxs)("div",{children:[e.label,":"]}),Object(w.jsx)("input",{placeholder:"\u60a8\u7684 ".concat(e.label),name:e.label,value:e.value,onChange:n,type:!0===c?"password":void 0})]})},L=k.a.div(r||(r=Object(y.a)(["\n  max-width: 60%;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  div + div {\n    margin-top: 30px;\n  }\n"]))),N=k.a.h2(l||(l=Object(y.a)(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"]))),E=k.a.div(s||(s=Object(y.a)(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n"]))),A=k.a.p(j||(j=Object(y.a)(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  line-height: 30px;\n"]))),B=function(t){var e=t.post,n=new Date(e.createdAt).toLocaleString();return Object(w.jsxs)("div",{style:{paddingBottom:"20px",borderBottom:"1px solid #ccc",width:"60%"},children:[Object(w.jsx)(N,{children:e.title}),Object(w.jsx)("div",{children:n}),Object(w.jsx)(A,{children:e.body}),Object(w.jsx)(v.b,{to:"/posts/".concat(e.id),style:{cursor:"pointer",color:"black"},children:"\u7e7c\u7e8c\u95b1\u8b80"})]})},T=function(t){var e=t.postContent,n=t.handlePostChange,c=t.handleAddNewPost,a=t.errorMessage;return Object(w.jsxs)(C,{style:{justifyContent:"flex-start",height:"100%"},children:[Object(w.jsx)(P,{style:{marginTop:"30px"},children:"\u65b0\u589e\u6587\u7ae0"}),Object(w.jsxs)(S,{style:{width:"90%",height:"100%",justifyContent:"center"},children:[Object(w.jsxs)(E,{children:[Object(w.jsx)("h3",{children:"\u6587\u7ae0\u6a19\u984c\uff1a"}),Object(w.jsx)("input",{style:{height:"29px"},placeholder:"\u6a19\u984c",value:e.title,onChange:function(t){n(t,"title")}})]}),Object(w.jsx)(P,{as:"h3",children:"\u6587\u7ae0\u5167\u5bb9"}),Object(w.jsx)("textarea",{value:e.content,style:{margin:"0 auto",height:"230px",width:"80%"},onChange:function(t){n(t,"content")}}),Object(w.jsx)("div",{style:{display:"visibility",margin:"10px auto",color:"red"},children:a}),Object(w.jsx)(I,{style:{margin:"30px auto",padding:"10px",width:"70px",borderRadius:"3px"},onClick:c,children:"\u65b0\u589e"})]})]})},J=k.a.div(d||(d=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n  margin-top: 80px;\n"]))),z=k.a.div(b||(b=Object(y.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 35px;\n  div + div {\n    margin-left: 20px;\n  }\n  a + a {\n    margin-left: 20px;\n  }\n"]))),F=k.a.div(u||(u=Object(y.a)(["\n  border-radius: 50%;\n  height: 30px;\n  width: 30px;\n  margin: 0 20px;\n  text-align: center;\n  line-height: 30px;\n  background-color: #ddd;\n  color: black;\n"]))),M=Object(k.a)(v.b)(h||(h=Object(y.a)(["\n  color: black;\n  text-decoration: none;\n  :hover {\n    text-decoration: underline;\n  }\n"]))),D=function(t){var e=t.currentPage,n=t.totalPostCount,c=t.handleClickPage,a=Math.floor(n/5);return n%5!==0&&(a+=1),Object(w.jsxs)(J,{children:[Object(w.jsxs)(z,{children:[1===e?"":Object(w.jsx)(M,{onClick:c,to:"/all-post/".concat(e-1),children:"\u4e0a\u4e00\u9801"}),e-2>=1?Object(w.jsx)(M,{onClick:c,to:"/all-post/".concat(e-2),children:e-2}):"",e-1>=1?Object(w.jsx)(M,{onClick:c,to:"/all-post/".concat(e-1),children:e-1}):"",Object(w.jsx)(F,{children:e}),a-e>=1?Object(w.jsx)(M,{onClick:c,to:"/all-post/".concat(e+1),children:e+1}):"",a-e>=2?Object(w.jsx)(M,{onClick:c,to:"/all-post/".concat(e+2),children:e+2}):"",Object(w.jsx)(M,{onClick:c,to:"/all-post/".concat(e+1),children:"\u4e0b\u4e00\u9801"})]}),Object(w.jsxs)(z,{children:[1!==e?Object(w.jsx)(M,{onClick:c,to:"/all-post/1",children:"\u7b2c\u4e00\u9801"}):"",e!==a?Object(w.jsx)(M,{onClick:c,to:"/all-post/".concat(a),children:"\u6700\u5f8c\u4e00\u9801"}):""]})]})};function R(){return Object(w.jsxs)(L,{children:[Object(w.jsx)("h1",{children:"\u54c8\u56c9\uff5e\u4f60\u4f86\u5230\u9996\u9801"}),Object(w.jsx)("p",{children:"\u9019\u88e1\u662f\u9996\u9801\uff0c\u4f46\u6211\u4e0d\u77e5\u9053\u653e\u4ec0\u9ebc\u3002\u8981\u770b\u6587\u7ae0\u8acb\u53bb\u6240\u6709\u6587\u7ae0\uff5e"})]})}function U(){return Object(w.jsxs)(L,{children:[Object(w.jsx)("h1",{children:"\u95dc\u65bc\u6211"}),Object(w.jsx)("p",{children:"\u5982\u6709\u96f7\u540c\uff0c\u7d14\u5c6c\u6284\u8972\u3002"})]})}var H=n(17),q="https://student-json-api.lidemy.me",G=Object(x.createContext)(null);function K(){var t=!1,e=Object(m.f)(),n=Object(x.useContext)(G).setIsLogin,c=Object(x.useState)([{label:"Username",value:""},{label:"Password",value:""}]),a=Object(g.a)(c,2),i=a[0],o=a[1],r=function(t){var e=Object(H.a)(i);e.forEach((function(e){e.label===t.target.name&&(e.value=t.target.value)})),o(e)};return Object(w.jsx)(C,{children:Object(w.jsxs)(S,{children:[Object(w.jsx)(P,{children:"\u767b\u5165"}),i.map((function(t,e){return Object(w.jsx)(_,{input:t,handleInputChange:r},e)})),Object(w.jsx)(I,{onClick:function(){t||(t=!0,function(t,e){return fetch("".concat(q,"/login"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:t,password:e})}).then((function(t){return t.json()}))}(i[0].value,i[1].value).then((function(c){c.ok&&(localStorage.setItem("user_token",c.token),n(!0),e.push("/")),t=!1})))},children:"\u63d0\u4ea4"})]})})}function Q(){var t=!1,e=Object(m.f)(),n=Object(x.useState)([{label:"Nickname",value:""},{label:"Username",value:""},{label:"Password",value:""}]),c=Object(g.a)(n,2),a=c[0],i=c[1],o=function(t){var e=Object(H.a)(a);e.forEach((function(e){e.label===t.target.name&&(e.value=t.target.value)})),i(e)};return Object(w.jsx)(C,{children:Object(w.jsxs)(S,{children:[Object(w.jsx)(P,{children:"\u8a3b\u518a"}),a.map((function(t,e){return Object(w.jsx)(_,{input:t,handleInputChange:o},e)})),Object(w.jsx)(I,{onClick:function(){t||(t=!0,function(t,e,n){return fetch("".concat(q,"/register"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({nickname:t,username:e,password:n})}).then((function(t){return t.json()}))}(a[0].value,a[1].value,a[2].value).then((function(n){n.ok&&e.push("/login"),t=!1})))},children:"\u63d0\u4ea4"})]})})}n(41);var V,W,X,Y,Z,$=k.a.div(V||(V=Object(y.a)(["\n  width: 100%;\n  height: 55px;\n  border-bottom: 1px solid #dbdbdb;\n"]))),tt=k.a.div(W||(W=Object(y.a)(["\n  max-width: 1200px;\n  height: 100%;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),et=k.a.div(X||(X=Object(y.a)(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n  a + a {\n    margin-left: 30px;\n  }\n  div + a {\n    margin-left: 30px;\n  }\n"]))),nt=k.a.div(Y||(Y=Object(y.a)(["\n  font-weight: 600;\n  font-size: 24px;\n"]))),ct=Object(k.a)(v.b)(Z||(Z=Object(y.a)(["\n  display: block;\n  height: 100%;\n  line-height: 54px;\n  text-decoration: none;\n  padding: 0 10px;\n  color: black;\n  background-color: ",";\n  :hover {\n    cursor: pointer;\n  }\n"])),(function(t){return t.active?"#ccc":""}));function at(t){var e=t.label,n=t.to,c=t.exact,a=Object(m.h)({path:n,exact:c});return Object(w.jsx)(ct,{to:n,label:e,active:a&&"true",children:e})}function it(){var t=Object(x.useContext)(G),e=t.isLogin,n=t.setIsLogin,c=Object(m.f)();return Object(x.useEffect)((function(){(function(){var t=localStorage.getItem("user_token");return fetch("".concat(q,"/me"),{headers:{authorization:"Bearer ".concat(t)}}).then((function(t){return t.json()}))})().then((function(t){t.ok||(n(!1),localStorage.setItem("user_token",null)),t.ok&&n(!0)}))}),[]),Object(w.jsx)($,{children:Object(w.jsxs)(tt,{children:[Object(w.jsxs)(et,{children:[Object(w.jsx)(nt,{children:"\b\bRich"}),Object(w.jsx)(at,{exact:!0,to:"/",label:"\u9996\u9801"}),Object(w.jsx)(at,{to:"/all-post/1",label:"\u6240\u6709\u6587\u7ae0"}),Object(w.jsx)(at,{to:"/about",label:"About"})]}),Object(w.jsxs)(et,{children:[!e&&Object(w.jsx)(at,{to:"/login",label:"\u767b\u5165"}),!e&&Object(w.jsx)(at,{to:"/register",label:"\u8a3b\u518a"}),e&&Object(w.jsx)(ct,{as:"div",onClick:function(){n(!1),localStorage.setItem("user_token",""),c.push("/")},children:"\u767b\u51fa"}),e&&Object(w.jsx)(at,{to:"/add-post",label:"\u767c\u8868\u6587\u7ae0"})]})]})})}var ot=n(28);function rt(){var t=!1,e=Object(m.f)(),n=Object(x.useState)({title:"",content:""}),c=Object(g.a)(n,2),a=c[0],i=c[1],o=Object(x.useState)(""),r=Object(g.a)(o,2),l=r[0],s=r[1];return Object(w.jsx)(T,{handlePostChange:function(t,e){var n=Object(ot.a)({},a);n[e]=t.target.value,i(n)},postContent:a,handleAddNewPost:function(){t||(t=!0,""!==a.title&&""!==a.content?function(t,e){var n=localStorage.getItem("user_token");return fetch("".concat(q,"/posts"),{method:"POST",headers:{authorization:"Bearer ".concat(n),"content-type":"application/json"},body:JSON.stringify({title:t,body:e})}).then((function(t){return t.json()}))}(a.title,a.content).then((function(n){0!==n.ok?(t=!1,e.push("/")):s(n.message)})):s("\u6587\u7ae0\u6a19\u984c\u6216\u5167\u5bb9\u4e0d\u5f97\u70ba\u7a7a"))},errorMessage:l})}function lt(){var t=Object(m.g)(),e=Object(x.useState)({title:"",time:"",content:""}),n=Object(g.a)(e,2),c=n[0],a=n[1];return Object(x.useEffect)((function(){var e;(e=t.id,fetch("".concat(q,"/posts?id=").concat(e)).then((function(t){return t.json()}))).then((function(t){t=t[0];var e=new Date(t.createdAt).toLocaleString();a({title:t.title,time:e,content:t.body})}))}),[]),Object(w.jsxs)(L,{children:[Object(w.jsx)(N,{children:c.title}),Object(w.jsx)("div",{children:c.time}),Object(w.jsx)("p",{style:{lineHeight:"30px"},children:c.content})]})}var st=n(27);function jt(){var t=Object(x.useState)(!0),e=Object(g.a)(t,2),n=e[0],c=e[1],a=Object(x.useState)([]),i=Object(g.a)(a,2),o=i[0],r=i[1],l=Object(m.g)().page,s=Object(x.useState)(""),j=Object(g.a)(s,2),d=j[0],b=j[1];return Object(x.useEffect)((function(){(function(t){return fetch("".concat(q,"/posts?_page=").concat(t,"&_sort=createdAt&_order=desc&_limit=5"))})(Number(l)).then((function(t){var e,n=Object(st.a)(t.headers.entries());try{for(n.s();!(e=n.n()).done;){var c=e.value;"x-total-count"===c[0]&&b(Number(c[1]))}}catch(a){n.e(a)}finally{n.f()}return t.json()})).then((function(t){r(t),c(!1)}))}),[l]),Object(x.useEffect)((function(){window.scroll(0,0)}),[o]),Object(w.jsxs)(L,{children:[o.map((function(t,e){return Object(w.jsx)(B,{post:t},e)})),!n&&Object(w.jsx)(D,{currentPage:Number(l),totalPostCount:d,handleClickPage:function(){c(!0),r([])}})]})}function dt(){var t=Object(x.useState)(!1),e=Object(g.a)(t,2),n=e[0],c=e[1];return Object(x.useEffect)((function(){localStorage.getItem("user_token")&&c(!0)}),[]),Object(w.jsx)(v.a,{children:Object(w.jsx)(G.Provider,{value:{isLogin:n,setIsLogin:c},children:Object(w.jsxs)("div",{children:[Object(w.jsx)(it,{}),Object(w.jsxs)(m.c,{children:[Object(w.jsx)(m.a,{exact:!0,path:"/",children:Object(w.jsx)(R,{})}),Object(w.jsx)(m.a,{path:"/all-post/:page",children:Object(w.jsx)(jt,{})}),Object(w.jsx)(m.a,{path:"/about",children:Object(w.jsx)(U,{})}),Object(w.jsx)(m.a,{path:"/login",children:Object(w.jsx)(K,{})}),Object(w.jsx)(m.a,{path:"/register",children:Object(w.jsx)(Q,{})}),Object(w.jsx)(m.a,{path:"/add-post",children:Object(w.jsx)(rt,{})}),Object(w.jsx)(m.a,{path:"/posts/:id",children:Object(w.jsx)(lt,{})})]})]})})})}var bt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),c(t),a(t),i(t),o(t)}))};f.a.render(Object(w.jsx)(O.a.StrictMode,{children:Object(w.jsx)(dt,{})}),document.getElementById("root")),bt()}},[[42,1,2]]]);
//# sourceMappingURL=main.60eb9dbe.chunk.js.map