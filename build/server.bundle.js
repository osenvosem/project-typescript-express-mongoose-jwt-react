!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=44)}([function(e,t){e.exports=require("react")},function(e,t,r){"use strict";r.d(t,"k",function(){return s}),r.d(t,"g",function(){return c}),r.d(t,"a",function(){return i}),r.d(t,"j",function(){return l}),r.d(t,"d",function(){return u}),r.d(t,"f",function(){return d}),r.d(t,"h",function(){return m}),r.d(t,"c",function(){return E}),r.d(t,"e",function(){return f}),r.d(t,"b",function(){return p}),r.d(t,"i",function(){return g});var n=r(2),a=r(14),o=r(3);const s=n["b"].h1`
  font-size: ${({theme:e})=>e.scale.second};
  font-weight: 100;
  color: rgba(0, 0, 0, 0.54);
  text-align: center;
  padding: 0 0 ${({theme:e})=>e.scale.base} 0;
  margin: 0;
`,c=n["b"].p`
  color: ${({theme:e})=>e.colors.secondary};
  text-align: center;
`,i=n["b"].button`
  display: block;
  height: 40px;
  width: 150px;
  font-size: ${({theme:e})=>e.scale.base};
  background-color: ${({theme:e})=>e.colors.primary};
  color: white;
  border-radius: 40px;
  font-weight: 100;
  border: none;
  :disabled {
    opacity: 0.5;
  }
`,l=i.extend``,u=n["b"].p`
  min-height: 40px;
  max-width: 280px;
  padding: 0 0 0 10px;
  font-style: italic;
  color: ${({theme:e})=>e.colors.secondary};
  margin: 6px 20px 6px 0px;
`,d=n["b"].label`
  font-style: italic;
  color: rgba(0, 0, 0, 0.54);
  margin-left: 20px;
  span {
    color: ${({theme:e})=>e.colors.secondary};
  }
`,m=Object(n["b"])(a["Field"])`
  border: 2px solid ${({theme:e})=>e.colors.quaternary};
  height: 40px;
  width: 300px;
  border-radius: 30px;
  font-size: ${({theme:e})=>e.scale.base};
  color: rgba(0, 0, 0, 0.87);
  padding-left: 16px;
`,E=Object(n["b"])(o["Link"])`
  margin-top: ${({theme:e})=>e.scale.first};
  font-style: italic;
  color: ${({theme:e})=>e.colors.quaternary};
  text-align: center;
  :hover {
    color: ${({theme:e})=>e.colors.tertiary};
  }
  align-self: stretch;
`,f=n["b"].div``,p=n["b"].div`
  flex-basis: 100%;
  display: flex;
  justify-content: center;
`,g=Object(n["b"])(a["Form"])`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 600px) {
    justify-content: center;
  }
`},function(e,t,r){"use strict";r.d(t,"c",function(){return s}),r.d(t,"a",function(){return i}),r.d(t,"d",function(){return l});var n=r(23);const{default:a,css:o,injectGlobal:s,keyframes:c,ThemeProvider:i,withTheme:l}=n;t.b=a},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("redux-saga/effects")},function(e,t,r){"use strict";r.r(t);var n=r(17),a=r.n(n),o=r(24),s=r.n(o),c=r(11),i=r.n(c);const l=new a.a.Schema({username:{type:String,required:!0,minlength:3,maxlength:30,trim:!0,lowercase:!0,unique:!0},email:{type:String,required:!0,lowercase:!0,maxlength:60,trim:!0,unique:!0},firstName:{type:String,trim:!0,maxlength:30},lastName:{type:String,trim:!0,maxlength:30},password:{type:String,required:!0,minlength:6,maxlength:30},salt:{type:String}});l.set("timestamps",!0),l.statics={publicFields:["_id","username","firstName","lastName","email","createdAt","updatedAt"],updateFields:["username","firstName","lastName","email","password"],filterPublicFields(e){return Array.isArray(e)?e.map(e=>this.publicFields.reduce((t,r)=>(t[r]=e[r],t),{})):l.statics.publicFields.reduce((t,r)=>(t[r]=e[r],t),{})},filterUpdateFields:e=>l.statics.updateFields.reduce((t,r)=>(t[r]=e[r],t),{})};const{length:u,iterations:d,algorithm:m}=i.a.get("crypto");l.pre("save",function(e){s.a.randomBytes(u,(t,r)=>{if(t)return e(t);const n=this.salt=r.toString("base64");s.a.pbkdf2(this.password,n,d,u,m,(t,r)=>{if(t)return e(t);this.password=r.toString("base64"),e()})})}),l.methods.checkPassword=function(e){return new Promise((t,r)=>{if(!(e=e.trim()))return r(new Error("You must provide a password to check."));s.a.pbkdf2(e,this.salt,d,u,m,(e,n)=>{if(e)return r(e);t(this.password===n.toString("base64"))})})},t.default=a.a.model("User",l)},function(e,t){e.exports=require("polished")},function(e,t,r){"use strict";let n,a;r.d(t,"a",function(){return n}),r.d(t,"b",function(){return a}),function(e){e.FETCH_SINGLE_USER_REQUESTED="FETCH_SINGLE_USER_REQUESTED",e.FETCH_SINGLE_USER_SUCCEEDED="FETCH_SINGLE_USER_SUCCEEDED",e.FETCH_SINGLE_USER_FAILED="FETCH_SINGLE_USER_FAILED"}(n||(n={})),function(e){e.REMOVE_USER="REMOVE_USER"}(a||(a={}))},function(e,t){e.exports=require("yup")},function(e,t){e.exports=require("react-redux")},function(e,t,r){"use strict";let n;r.d(t,"a",function(){return n}),function(e){e.USERS_FETCH_REQUESTED="USERS_FETCH_REQUESTED",e.USERS_FETCH_SUCCEEDED="USERS_FETCH_SUCCEEDED",e.USERS_FETCH_FAILED="USERS_FETCH_FAILED"}(n||(n={}))},function(e,t){e.exports=require("config")},function(e,t,r){"use strict";let n,a;r.d(t,"a",function(){return n}),r.d(t,"b",function(){return a}),function(e){e.USER_FETCH_REQUESTED="USER_FETCH_REQUESTED",e.USER_FETCH_SUCCEEDED="USER_FETCH_SUCCEEDED",e.USER_FETCH_FAILED="USER_FETCH_FAILED"}(n||(n={})),function(e){e.USER_UPDATE_SUCCEEDED="USER_UPDATE_SUCCEEDED"}(a||(a={}))},function(e,t){e.exports=require("axios")},function(e,t){e.exports=require("formik")},function(e,t){e.exports=require("express")},function(e,t,r){"use strict";r.r(t),r.d(t,"addLoggedInUser",function(){return a}),r.d(t,"removeLoggedInUser",function(){return o});var n=r(18);const a=e=>({type:n.a.ADD_LOGGED_IN_USER,user:e}),o=()=>({type:n.a.REMOVE_LOGGED_IN_USER})},function(e,t){e.exports=require("mongoose")},function(e,t,r){"use strict";let n;r.d(t,"a",function(){return n}),function(e){e.ADD_LOGGED_IN_USER="ADD_AUTHED_USER",e.REMOVE_LOGGED_IN_USER="REMOVE_AUTHED_USER"}(n||(n={}))},function(e,t){e.exports=require("passport")},function(e,t,r){"use strict";r.d(t,"b",function(){return a}),r.d(t,"c",function(){return o}),r.d(t,"a",function(){return s}),r.d(t,"d",function(){return c});var n=r(12);const a=e=>({type:n.a.USER_FETCH_REQUESTED,id:e}),o=e=>({type:n.a.USER_FETCH_SUCCEEDED,user:e}),s=e=>({type:n.a.USER_FETCH_FAILED,error:e}),c=e=>({type:n.b.USER_UPDATE_SUCCEEDED,user:e})},function(e,t){e.exports=require("redux")},function(e,t,r){"use strict";r.r(t),r.d(t,"fetchSingleUserRequested",function(){return a}),r.d(t,"fetchSingleUserSucceeded",function(){return o}),r.d(t,"fetchSingleUserFailed",function(){return s}),r.d(t,"removeUser",function(){return c});var n=r(7);const a=e=>({type:n.a.FETCH_SINGLE_USER_REQUESTED,id:e}),o=e=>({type:n.a.FETCH_SINGLE_USER_SUCCEEDED,user:e}),s=e=>({type:n.a.FETCH_SINGLE_USER_FAILED,error:e}),c=e=>({type:n.b.REMOVE_USER,id:e})},function(e,t){e.exports=require("styled-components")},function(e,t){e.exports=require("crypto")},function(e,t){e.exports=require("redux-saga")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("jsonwebtoken")},function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(14),s=r(13),c=r.n(s),i=r(9),l=r(3),u=r(1),d=r(8),m=Object(d.object)().shape({username:Object(d.string)().min(3).max(30).required(),email:Object(d.string)().email().max(60).required(),firstName:Object(d.string)().min(2).max(30),lastName:Object(d.string)().min(2).max(30),password:Object(d.string)().min(6).max(30).required()}),E=r(16);const f={username:"",email:"",firstName:"",lastName:"",password:"",serverErrorMessage:""};t.a=Object(i.connect)(function(e){return{loggedInUser:e.loggedInUser}},{addLoggedInUser:E.addLoggedInUser})(e=>a.a.createElement(o.Formik,{initialValues:f,validationSchema:m,onSubmit:function(e,t,r){r.setSubmitting(!0),c.a.post("/api/registration",t).then(t=>{r.setSubmitting(!1),e.addLoggedInUser(t.data),e.history.replace("/")}).catch(e=>{r.setSubmitting(!1),r.setErrors({serverErrorMessage:e.response.data})})}.bind(null,e),render:({touched:t,errors:r,isSubmitting:n})=>e.loggedInUser?a.a.createElement(l.Redirect,{to:"/"}):a.a.createElement(a.a.Fragment,null,a.a.createElement(u.k,null," Registration "),r.serverErrorMessage&&a.a.createElement(u.g,null,"Server error: ",r.serverErrorMessage),a.a.createElement(u.i,null,a.a.createElement(u.e,null,a.a.createElement(u.f,{htmlFor:"username"},"Username ",a.a.createElement("span",null,"*")),a.a.createElement("br",null),a.a.createElement(u.h,{type:"text",name:"username",id:"username"}),a.a.createElement(u.d,null,t.username&&r.username&&r.username)),a.a.createElement(u.e,null,a.a.createElement(u.f,{htmlFor:"email"},"Email ",a.a.createElement("span",null,"*")),a.a.createElement("br",null),a.a.createElement(u.h,{type:"email",name:"email",id:"email"}),a.a.createElement(u.d,null,t.email&&r.email&&r.email)),a.a.createElement(u.e,null,a.a.createElement(u.f,{htmlFor:"firstName"},"First Name"),a.a.createElement("br",null),a.a.createElement(u.h,{type:"text",name:"firstName",id:"firstName"}),a.a.createElement(u.d,null,t.firstName&&r.firstName&&r.firstName)),a.a.createElement(u.e,null,a.a.createElement(u.f,{htmlFor:"lastName"},"Last Name"),a.a.createElement("br",null),a.a.createElement(u.h,{type:"text",name:"lastName",id:"lastName"}),a.a.createElement(u.d,null,t.lastName&&r.lastName&&r.lastName)),a.a.createElement(u.b,null,a.a.createElement(u.e,null,a.a.createElement(u.f,{htmlFor:"password"},"Password ",a.a.createElement("span",null,"*")),a.a.createElement("br",null),a.a.createElement(u.h,{type:"password",name:"password",id:"password"}),a.a.createElement(u.d,null,t.password&&r.password&&r.password))),a.a.createElement(u.b,null,a.a.createElement(u.j,{type:"submit",disabled:n},"Submit")),a.a.createElement(u.b,null,a.a.createElement(u.c,{to:"/login"},"…or log in if you have an account."))))}))},function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(14),s=r(13),c=r.n(s),i=r(9),l=r(3),u=r(1),d=r(2);const m=Object(d["b"])(o["Form"])`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin: 0 auto;
`,E=d["b"].div`
  width: 300px;
`,f=d["b"].div`
  margin-top: ${({theme:e})=>e.scale.base};
  padding: ${({theme:e})=>e.scale.base};
  color: rgba(0, 0, 0, 0.38);
  font-weight: 100;
  font-style: italic;
  text-align: center;
  > span {
    font-weight: bold;
  }
`;var p=r(8),g=Object(p.object)().shape({username:Object(p.string)().min(3).max(30).required(),password:Object(p.string)().min(6).max(30).required()}),b=r(16);let h={username:"",password:"",serverErrorMessage:""};t.a=Object(i.connect)(function(e){return{loggedInUser:e.loggedInUser}},b)(e=>a.a.createElement(o.Formik,{initialValues:h,validationSchema:g,onSubmit:function(e,t,r){r.setSubmitting(!0),delete t.serverErrorMessage,c.a.post("/api/login",t).then(t=>{r.setSubmitting(!1),e.addLoggedInUser(t.data),e.history.replace("/")}).catch(e=>{r.setSubmitting(!1),r.setErrors({serverErrorMessage:e.response.data})})}.bind(null,e),render:({touched:t,errors:r,isSubmitting:n})=>e.loggedInUser?a.a.createElement(l.Redirect,{to:"/"}):a.a.createElement(a.a.Fragment,null,a.a.createElement(u.k,null,"Login"),r.serverErrorMessage&&a.a.createElement(u.g,null,"Server error: ",r.serverErrorMessage),a.a.createElement(m,null,a.a.createElement(E,null,a.a.createElement(u.f,{htmlFor:"username"},"Username ",a.a.createElement("span",null,"*")),a.a.createElement("br",null),a.a.createElement(u.h,{type:"text",name:"username",id:"username"}),a.a.createElement(u.d,null,t.username&&r.username&&r.username)),a.a.createElement(E,null,a.a.createElement(u.f,{htmlFor:"password"},"Password ",a.a.createElement("span",null,"*")),a.a.createElement("br",null),a.a.createElement(u.h,{type:"password",name:"password",id:"password"}),a.a.createElement(u.d,null,t.password&&r.password&&r.password)),a.a.createElement(u.j,null,"Log in"),a.a.createElement(u.c,{to:"/registration"},"...or register a new account if you don't have one."),a.a.createElement(f,null,"The default profile username is ",a.a.createElement("span",null,"elon")," and the password is ",a.a.createElement("span",null,"123123"))))}))},function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(9),s=r(3),c=r(2),i=r(6);const l=c["b"].article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: ${({theme:e})=>e.scale.first};
  padding: ${({theme:e})=>e.scale.first};
  box-shadow: 0 4px 16px ${({theme:e})=>Object(i.rgba)(e.colors.quaternary,.54)};
`,u=c["b"].h2`
  margin: 0;
  font-size: ${({theme:e})=>e.scale.second};
  color: rgba(0, 0, 0 0.87);
  font-weight: normal;
`,d=c["b"].h3`
  margin: 0;
  color: rgba(0, 0, 0, 0.54);
  font-weight: normal;
`,m=c["b"].p`
  margin: ${({theme:e})=>e.scale.second} 0 0 0;
  color: rgba(0, 0, 0, 0.54);
  span {
    font-weight: bold;
  }
`,E=c["b"].p`
  margin: ${({theme:e})=>e.scale.first} 0 0 0;
  color: rgba(0, 0, 0, 0.54);
  span {
    font-weight: bold;
  }
`,f=c["b"].section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: ${({theme:e})=>e.scale.third};
`,p=Object(c["b"])(s["Link"])`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: ${({theme:e})=>e.scale.fifth};
  height: ${({theme:e})=>e.scale.second};
  border: none;
  border-radius: ${({theme:e})=>e.scale.second};
  color: white;
  font-size: ${({theme:e})=>e.scale.base};
  text-decoration: none;
  :last-child {
    margin-left: ${({theme:e})=>e.scale.second};
  }
  padding: 0;
`,g=p.extend`
  background-color: ${({theme:e})=>e.colors.tertiary};
`,b=p.withComponent("button").extend`
  background-color: ${({theme:e})=>e.colors.secondary};
  cursor: pointer;
`,h=Object(c["b"])(s["Link"])`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: ${({theme:e})=>e.scale.first};
  width: ${({theme:e})=>e.scale.fourth};
  height: ${({theme:e})=>e.scale.second};
  border: 2px solid ${({theme:e})=>e.colors.tertiary};
  border-radius: ${({theme:e})=>e.scale.second};
  text-decoration: none;
  color: ${({theme:e})=>e.colors.tertiary};
  opacity: 0.6;
  transition: opacity 100ms;
  :hover {
    opacity: 1;
    background-color: rgba(255, 255, 255, 0.6);
  }
`;var S=Object(c.d)(({theme:e,width:t=18,height:r=18})=>a.a.createElement("svg",{width:t,height:r,xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{d:"M18 7.895v2.21H4.311l6.279 6.305L9 18 0 9l9-9 1.59 1.59L4.31 7.895z",fill:e.colors.tertiary,fillRule:"evenodd"}))),y=r(22),_=r(16);function U(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t.a=Object(o.connect)(e=>e,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){U(e,t,r[t])})}return e}({},y,{removeLoggedInUser:_.removeLoggedInUser}))(class extends n.Component{constructor(e){super(e),U(this,"removeUser",()=>{const{history:e,match:{params:{id:t}},removeUser:r,removeLoggedInUser:n}=this.props;r(t),n(),e.push("/login")}),e.fetchSingleUserRequested(this.props.match.params.id)}render(){const{users:e,match:{params:{id:t}}}=this.props;if(!/^[0-9a-fA-F]{24}$/.test(t)||!e.length)return a.a.createElement(s.Redirect,{to:"/"});const{firstName:r,lastName:n,username:o,email:c,createdAt:i}=e.find(e=>e._id===t),{_id:p}=this.props.loggedInUser;return a.a.createElement(a.a.Fragment,null,a.a.createElement(h,{to:"/"},a.a.createElement(S,null),a.a.createElement("p",null,"Back")),a.a.createElement(l,null,r||n?a.a.createElement(a.a.Fragment,null,a.a.createElement(u,null,r," ",n),a.a.createElement(d,null,"@",o)):a.a.createElement(u,null,"@",o),a.a.createElement(m,null,a.a.createElement("span",null,"Email:")," ",c),a.a.createElement(E,null,a.a.createElement("span",null,"Registered since: "),new Date(i).toDateString()),p===t&&a.a.createElement(f,null,a.a.createElement(g,{to:`/${t}/edit`},"Edit profile"),a.a.createElement(b,{to:"",onClick:this.removeUser},"Delete account"))))}})},function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(9),s=r(14),c=r(3),i=r(13),l=r.n(i),u=r(1);const d=u["a"].extend`
  background-color: ${({theme:e})=>e.colors.secondary};
  margin-right: ${({theme:e})=>e.scale.base};
`;var m=r(8),E=Object(m.object)().shape({username:Object(m.string)().min(3).max(30).required(),email:Object(m.string)().email().max(60).required(),firstName:Object(m.string)().min(2).max(30),lastName:Object(m.string)().min(2).max(30),password:Object(m.string)().min(6).max(30)}),f=r(20);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const g={userFetchRequested:f.b,userUpdateSucceeded:f.d};t.a=Object(o.connect)(e=>e,g)(e=>{const{id:t}=e.match.params;e.users.length||e.userFetchRequested(t);const r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){p(e,t,r[t])})}return e}({serverErrorMessage:null,password:""},e.loggedInUser);return a.a.createElement(s.Formik,{initialValues:r,validationSchema:E,onSubmit:function(e,t,r){const{match:{params:{id:n}}}=e;r.setSubmitting(!0),delete t.serverErrorMessage,l.a.post(`/api/${n}/edit`,t).then(t=>{r.setSubmitting(!1),e.userUpdateSucceeded(t.data),e.history.push(`/${n}`)}).catch(e=>{r.setSubmitting(!1),r.setErrors({serverErrorMessage:e.response.data})})}.bind(null,e),render:({errors:t,touched:r,isSubmitting:n})=>e.loggedInUser?a.a.createElement(a.a.Fragment,null,a.a.createElement(u.k,null,"Edit profile"),t.serverErrorMessage&&a.a.createElement(u.g,null,"Server error: ",t.serverErrorMessage),a.a.createElement(u.i,null,a.a.createElement(u.e,null,a.a.createElement(u.f,{htmlFor:"username"},"Username ",a.a.createElement("span",null,"*")),a.a.createElement("br",null),a.a.createElement(u.h,{type:"text",name:"username",id:"username"}),a.a.createElement(u.d,null,r.username&&t.username&&t.username)),a.a.createElement(u.e,null,a.a.createElement(u.f,{htmlFor:"email"},"Email ",a.a.createElement("span",null,"*")),a.a.createElement("br",null),a.a.createElement(u.h,{type:"email",name:"email",id:"email"}),a.a.createElement(u.d,null,r.email&&t.email&&t.email)),a.a.createElement(u.e,null,a.a.createElement(u.f,{htmlFor:"firstName"},"First Name"),a.a.createElement("br",null),a.a.createElement(u.h,{type:"text",name:"firstName",id:"firstName"}),a.a.createElement(u.d,null,r.firstName&&t.firstName&&t.firstName)),a.a.createElement(u.e,null,a.a.createElement(u.f,{htmlFor:"lastName"},"Last Name"),a.a.createElement("br",null),a.a.createElement(u.h,{type:"text",name:"lastName",id:"lastName"}),a.a.createElement(u.d,null,r.lastName&&t.lastName&&t.lastName)),a.a.createElement(u.b,null,a.a.createElement(u.e,null,a.a.createElement(u.f,{htmlFor:"password"},"Password ",a.a.createElement("span",null,"*")),a.a.createElement("br",null),a.a.createElement(u.h,{type:"password",name:"password",id:"password"}),a.a.createElement(u.d,null,r.password&&t.password&&t.password))),a.a.createElement(u.b,null,a.a.createElement(d,{onClick:()=>{e.history.goBack()}},"Cancel"),a.a.createElement(u.j,{type:"submit",disabled:n},"Submit")))):a.a.createElement(c.Redirect,{to:"/login"})})})},function(e,t,r){"use strict";var n={};r.d(n,"usersFetchRequested",function(){return l}),r.d(n,"usersFetchSucceeded",function(){return u}),r.d(n,"usersFetchFailed",function(){return d});var a=r(0),o=r.n(a),s=r(9),c=r(3),i=r(10);const l=()=>({type:i.a.USERS_FETCH_REQUESTED}),u=e=>({type:i.a.USERS_FETCH_SUCCEEDED,users:e}),d=e=>({type:i.a.USERS_FETCH_FAILED,error:e});var m=r(2),E=r(6);const f=Object(m["b"])(c["Link"])`
  flex-basis: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({theme:e})=>e.scale.third};
  padding: 0 ${({theme:e})=>e.scale.first} 0;
  :not(:first-child) {
    margin-top: ${({theme:e})=>e.scale.first};
  }
  box-shadow: 0 4px 16px ${({theme:e})=>Object(E.rgba)(e.colors.quaternary,.54)};
  text-decoration: none;
  border: 2px solid transparent;
  :hover {
    border: 2px solid ${({theme:e})=>e.colors.primary};
  }
  background-color: white;
  border-radius: ${({theme:e})=>e.scale.mFirst};
`,p=Object(m["b"])("h2")`
  display: block;
  margin: 0;
  font-size: ${({theme:e})=>e.scale.base};
  font-weight: ${({bold:e})=>e?"bold":"normal"}
  color: rgba(0, 0, 0, 0.87);
`,g=m["b"].h3`
  display: block;
  margin: 0;
  font-size: ${({theme:e})=>e.scale.base};
  font-weight: 100;
  color: rgba(0, 0, 0, 0.54);
`,b=m["b"].p`
  display: inline-block;
  margin: 0;
  font-size: ${({theme:e})=>e.scale.base};
  font-style: italic;
  font-weight: normal;
  color: ${({theme:e})=>e.colors.quaternary};
`;var h=({loggedInUserId:e,userId:t})=>e===t?o.a.createElement(b,null,"   — this is you"):null;t.a=Object(s.connect)(e=>e,n)(class extends a.Component{constructor(e){super(e),this.props.loggedInUser&&this.props.usersFetchRequested()}render(){if(this.props.loggedInUser){const{loggedInUser:e,users:t}=this.props,r=e._id;return t.map(e=>{const{firstName:t,lastName:n,username:a}=e;let s=e._id;return o.a.createElement(f,{key:s,to:`/${s}`},t||n?o.a.createElement(o.a.Fragment,null,o.a.createElement(p,{bold:r===s},t," ",n,o.a.createElement(h,{loggedInUserId:r,userId:s})),o.a.createElement(g,null,"@",a)):o.a.createElement(p,{bold:r===s},"@",a,o.a.createElement(h,{loggedInUserId:r,userId:s})))})}return o.a.createElement(c.Redirect,{to:"/login"})}})},function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(3),s=r(2),c=r(6);const i=s["b"].header`
  display: flex;
  flex: 0 0 ${({theme:e})=>e.scale.second};
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: 0 4px 16px ${({theme:e})=>Object(c.rgba)(e.colors.quaternary,.54)};
`,l=s["b"].section``,u=s["b"].nav`
  margin: 0 ${({theme:e})=>e.scale.first} 0 auto;
`,d=Object(s["b"])(o["Link"])`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.54);
  :hover {
    color: rgba(0, 0, 0, 0.87);
  }
`;t.a=(e=>["/login","/registration"].includes(e.location.pathname)?null:a.a.createElement(i,null,a.a.createElement(l,null),a.a.createElement(u,null,a.a.createElement(d,{to:"/logout"},"Logout"))))},function(e,t,r){"use strict";var n=r(6);const a={colors:{primary:"#58CDF7",secondary:"#FD739F",tertiary:"#84F4E1",quaternary:"#D3C4D1"},scale:{sixth:Object(n.modularScale)(6,1,"goldenSection"),fifth:Object(n.modularScale)(5,1,"goldenSection"),fourth:Object(n.modularScale)(4,1,"goldenSection"),third:Object(n.modularScale)(3,1,"goldenSection"),second:Object(n.modularScale)(2,1,"goldenSection"),first:Object(n.modularScale)(1,1,"goldenSection"),base:Object(n.modularScale)(0,1,"goldenSection"),mFirst:Object(n.modularScale)(-1,1,"goldenSection"),mSecond:Object(n.modularScale)(-2,1,"goldenSection")}};t.a=a},function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(3),s=r(13),c=r.n(s),i=r(9),l=r(21),u=r(16);t.a=Object(i.connect)(function(e){return{loggedInUser:e.loggedInUser}},function(e){return Object(l.bindActionCreators)({removeLoggedInUser:u.removeLoggedInUser},e)})(class extends n.Component{constructor(...e){var t,r,n,a;return t=super(...e),a={loggedOut:!1},(n="state")in(r=this)?Object.defineProperty(r,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[n]=a,t}componentDidMount(){c.a.post("/api/logout").then(()=>{this.props.removeLoggedInUser(),this.setState({loggedOut:!0})}).catch(e=>{console.error(e)})}render(){return this.state.loggedOut?a.a.createElement(o.Redirect,{to:"/login"}):"Redirecting..."}})},function(e,t){e.exports=require("react-hot-loader")},function(e,t,r){"use strict";(function(e){var n=r(0),a=r.n(n),o=r(3),s=r(36),c=r(2),i=r(9),l=r(6),u=r(32),d=r(30),m=r(29),E=r(28),f=r(35),p=r(31),g=r(34),b=r(33);const h=Object(c["b"])("main")`
padding-top: ${({theme:e})=>e.scale.second}
  flex-grow: 1;
  background-color: ${({theme:e,location:t})=>["/login","/registration"].includes(t.pathname)?"white":Object(l.rgba)(e.colors.quaternary,.12)};
  border-top: 1px solid transparent;
`,S=c["b"].div`
  max-width: 630px;
  margin: 0 auto;
`;t.a=Object(s.hot)(e)(Object(o.withRouter)(Object(i.connect)(function(e){return{loggedInUser:e.loggedInUser}})(e=>a.a.createElement(c.a,{theme:g.a},a.a.createElement(a.a.Fragment,null,a.a.createElement(b.a,{loggedInUser:e.loggedInUser,location:e.location}),a.a.createElement(h,{location:e.location},a.a.createElement(S,null,a.a.createElement(o.Switch,null,a.a.createElement(o.Route,{exact:!0,path:"/registration",component:E.a}),a.a.createElement(o.Route,{exact:!0,path:"/login",component:m.a}),a.a.createElement(o.Route,{exact:!0,path:"/logout",component:f.a}),a.a.createElement(o.Route,{exact:!0,path:"/",component:u.a}),a.a.createElement(o.Route,{exact:!0,path:"/:id",component:d.a}),a.a.createElement(o.Route,{exact:!0,path:"/:id/edit",component:p.a}),a.a.createElement(o.Route,{render:e=>a.a.createElement("h2",null,"404 Not Found")})))))))))}).call(this,r(46)(e))},function(e,t){e.exports=require("react-router")},function(e,t){e.exports=require("lodash/pick")},function(e,t){e.exports=require("passport-jwt")},function(e,t){e.exports=require("serve-favicon")},function(e,t){e.exports=require("cookie-parser")},function(e,t){e.exports=require("path")},function(e,t,r){"use strict";r.r(t);var n=r(11),a=r.n(n),o=r(43),s=r.n(o),c=r(42),i=r.n(c),l=r(41),u=r.n(l),d=r(15),m=r.n(d),E=r(17),f=r.n(E);f.a.connect(a.a.get("dbUrl")),f.a.connection.on("error",e=>{console.error("Connection error: ",e)});var p=r(19),g=r.n(p),b=r(40),h=r(39),S=r.n(h),y=r(5),_=r(27),U=r.n(_);const O=Object(d.Router)(),j=g.a.authenticate("jwt",{session:!1}),w={httpOnly:!0,expires:new Date(Date.now()+Number.parseInt(a.a.get("cookies.expires"))),signed:!0},x={expiresIn:a.a.get("jwt.expiresIn")},v=(e,t,r)=>{if(!f.a.Types.ObjectId.isValid(e.params.id)){const e=new Error("User id is invalid.");return e.statusCode=400,r(e)}r()};O.get("/",j,(e,t,r)=>{y.default.find().lean().then(e=>{const r=y.default.filterPublicFields(e);t.json(r)}).catch(r)}),O.get("/:id",j,v,(e,t,r)=>{const{id:n}=e.params;y.default.findById(n).lean().then(e=>{const r=y.default.filterPublicFields(e);t.json(r)}).catch(r)}),O.post("/:id/edit",j,v,(e,t,r)=>{const{id:n}=e.params,a={};for(const t in e.body)e.body[t]&&(a[t]=e.body[t]);a.password?y.default.findById(n).then(e=>{e.set(a),e.save().then(e=>{t.send(y.default.filterPublicFields(e))}).catch(r)}).catch(r):y.default.findByIdAndUpdate(n,a,{new:!0}).then(e=>{const r=y.default.filterPublicFields(e);t.json(r)}).catch(r)}),O.post("/registration",(e,t,r)=>{new y.default(e.body).save().then(e=>{const n=y.default.filterPublicFields(e),o={id:n._id};U.a.sign(o,a.a.get("jwt.secret"),x,(e,a)=>{if(e)return r(e);t.cookie("access_token",a,w),t.send(n)})}).catch(r)}),O.post("/login",(e,t,r)=>{const{body:{username:n,password:o}}=e;if(!n||!o){const e=new Error("You must provide username and password.");return e.statusCode=400,r(e)}y.default.findOne({username:n},(e,n)=>{if(e)return r(e);if(!n){const e=new Error("Incorrect username or password.");return e.statusCode=400,r(e)}n.checkPassword(o).then(e=>{if(!e){const e=new Error("Password is incorrect");return e.statusCode=400,r(e)}const o=y.default.filterPublicFields(n.toObject());U.a.sign({id:o._id},a.a.get("jwt.secret"),x,(e,n)=>{if(e)return r(e);t.cookie("access_token",n,w),t.json(o)})}).catch(r)})}),O.post("/logout",(e,t,r)=>{t.clearCookie("access_token"),delete e.user,t.status(200).send("Logged out")}),O.delete("/delete/:id",j,v,(e,t,r)=>{const{id:n}=e.params;y.default.findByIdAndRemove(n).catch(r)});var F=O,R=r(0),D=r.n(R),I=r(26),C=r(38),T=r(9),N=r(23),P=r(37),L=r(21),k=r(25),q=r.n(k),$=r(10);function H(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){A(e,t,r[t])})}return e}function A(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var G=r(7);function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){Q(e,t,r[t])})}return e}function Q(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var V=r(12);function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){B(e,t,r[t])})}return e}function B(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Y=r(18);function J(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){K(e,t,r[t])})}return e}function K(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function X(e,t){switch(t.type){case Y.a.ADD_LOGGED_IN_USER:return J({},e,{loggedInUser:t.user});case Y.a.REMOVE_LOGGED_IN_USER:return J({},e,{loggedInUser:null});case $.a.USERS_FETCH_REQUESTED:case $.a.USERS_FETCH_SUCCEEDED:case $.a.USERS_FETCH_FAILED:return function(e,t){switch(t.type){case $.a.USERS_FETCH_REQUESTED:return H({},e,{requestInProgress:!0});case $.a.USERS_FETCH_SUCCEEDED:return H({},e,{users:t.users,requestInProgress:!1});case $.a.USERS_FETCH_FAILED:return H({},e,{error:t.error,requestInProgress:!1});default:return e}}(e,t);case G.a.FETCH_SINGLE_USER_REQUESTED:case G.a.FETCH_SINGLE_USER_SUCCEEDED:case G.a.FETCH_SINGLE_USER_FAILED:return function(e,t){switch(t.type){case G.a.FETCH_SINGLE_USER_REQUESTED:return M({},e,{requestInProgress:!0});case G.a.FETCH_SINGLE_USER_SUCCEEDED:return M({},e,{users:[...e.users,M({},t.user)],requestInProgress:!1});case G.a.FETCH_SINGLE_USER_FAILED:return M({},e,{error:t.error,requestInProgress:!1});case G.b.REMOVE_USER:const{users:r}=e,n=r.findIndex(e=>e._id===t.id);return M({},e,{users:[...r.slice(0,n),...r.slice(n+1)]});default:return e}}(e,t);case V.b.USER_UPDATE_SUCCEEDED:return function(e,t){switch(t.type){case V.a.USER_FETCH_REQUESTED:return z({},e,{requestInProgress:!0});case V.a.USER_FETCH_SUCCEEDED:return z({},e,{requestInProgress:!1,users:[...e.users,t.user]});case V.a.USER_FETCH_FAILED:return z({},e,{requestInProgress:!1,error:t.error});case V.b.USER_UPDATE_SUCCEEDED:const{users:r}=e;let n=r.findIndex(e=>e._id===t.user._id);return z({},e,{requestInProgress:!1,users:[...r.slice(0,n),t.user,...r.slice(++n)],loggedInUser:t.user});default:return e}}(e,t);default:return e}}const W={users:[],loggedInUser:null,requestInProgress:!1,error:null};var Z=r(2);Z["c"]`
  * {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    margin: 0;
    font-family: "Inter UI", sans-serif;
  }
  
  #root {
    display: flex;
    height: 100%;
    flex-direction: column;
  }
`;var ee=r(4),te=r(13),re=r.n(te);const ne=()=>{{const e=r(5).default;return e.find({},e.publicFields).lean().then(e=>e.map(e=>(e._id=e._id.toString(),e)))}};function*ae(){try{const e=yield Object(ee.call)(ne);yield Object(ee.put)({type:$.a.USERS_FETCH_SUCCEEDED,users:e})}catch(e){yield Object(ee.put)({type:$.a.USERS_FETCH_FAILED,error:e})}}function*oe(){yield Object(ee.takeLatest)($.a.USERS_FETCH_REQUESTED,ae)}const se=e=>{{const t=r(5).default;return t.findById(e,t.publicFields).lean().then(e=>(e._id=e._id.toString(),e))}},ce=e=>re.a.delete(`/api/delete/${e}`);var ie=r(22);function*le(e){if(e.type===G.a.FETCH_SINGLE_USER_REQUESTED)try{const t=yield Object(ee.call)(se,e.id);yield Object(ee.put)(Object(ie.fetchSingleUserSucceeded)(t))}catch(e){yield Object(ee.put)(Object(ie.fetchSingleUserFailed)(e))}}function*ue(e){try{yield Object(ee.call)(ce,e.id)}catch(e){console.error(e)}}function*de(){yield Object(ee.all)([Object(ee.takeLatest)(G.a.FETCH_SINGLE_USER_REQUESTED,le),Object(ee.takeLatest)(G.b.REMOVE_USER,ue)])}var me=e=>{{const t=r(5).default;return t.findById(e,t.publicFields).lean().then(e=>(e._id=e._id.toString(),e))}},Ee=r(20);function*fe({id:e}){try{const t=yield Object(ee.call)(me,e);yield Object(ee.put)(Object(Ee.c)(t))}catch(e){yield Object(ee.put)(Object(Ee.a)(e))}}function*pe(){yield Object(ee.takeLatest)(V.a.USER_FETCH_REQUESTED,fe)}function*ge(){yield Object(ee.all)([Object(ee.fork)(oe),Object(ee.fork)(de),Object(ee.fork)(pe)])}r(45);function be(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const he=JSON.parse('["/assets/vendors~main.68f368908ea42c7d7786.js","/assets/main.533560ae9c6e7ea0d503.js"]').filter(e=>/.js$/.test(e));var Se=[(e,t,r)=>{g.a.authenticate("jwt",{session:!1},(t,n,a)=>{if(t)return r(t);n&&(e.user=n),r()})(e,t,r)},(e,t,r)=>{const n={},a=new N.ServerStyleSheet,o=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){be(e,t,r[t])})}return e}({},W);if(e.user){const{user:t}=e;t._id=t._id.toString(),o.loggedInUser=t}const s=function(e=W){const t=[],r=q()();t.push(Object(L.applyMiddleware)(r));const n=Object(L.createStore)(X,e,Object(L.compose)(...t));return n.runSaga=r.run,n.close=(()=>n.dispatch(k.END)),n}(o),c=D.a.createElement(T.Provider,{store:s},D.a.createElement(C.StaticRouter,{location:e.originalUrl,context:n},D.a.createElement(P.a,null)));n.url?t.redirect(n.status||301,n.url):(s.runSaga(ge).done.then(()=>{const e=`\n        <!DOCTYPE html>\n        <html lang="en">\n        \n        <head>\n          <meta charset="UTF-8">\n          <meta name="viewport" content="width=device-width, initial-scale=1.0">\n          <meta http-equiv="X-UA-Compatible" content="ie=edge">\n          <title>User accounts</title>\n          ${a.getStyleTags()}\n          <script>window.__INITIAL_STATE__ = ${JSON.stringify(s.getState())}<\/script>\n        </head>\n        \n        <body>\n          <div id="root">${Object(I.renderToString)(c)}</div>\n        \n          ${he.slice().reverse().map(e=>`<script src="${e}"><\/script>`).join("\n")}\n        </body>\n        </html>\n      `;t.send(e)}),Object(I.renderToString)(c),s.close())}];const ye=m()();ye.disable("x-powered-by"),ye.use("/assets/",m.a.static("public")),ye.use(u()(s.a.resolve("./public/favicon.ico"))),ye.use("/assets",m.a.static("public")),ye.use(i()(a.a.get("cookies.secret"))),ye.use(m.a.json()),ye.use(m.a.urlencoded({extended:!1})),(e=>{e.use(g.a.initialize());const t={jwtFromRequest(e){let t=null;return e&&e.signedCookies&&(t=e.signedCookies.access_token),t},secretOrKey:a.a.get("jwt.secret")};g.a.use(new b.Strategy(t,(e,t)=>{y.default.findById(e.id,(e,r)=>e?t(e):t(null,!!r&&S()(r,y.default.publicFields)))}))})(ye),ye.use("/api/",F),ye.use("/*",Se);ye.use((e,t,r,n)=>{r.status(e.statusCode||500).send(e.message)}),ye.listen(a.a.get("serverPort"))},function(e,t){},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}}]);
//# sourceMappingURL=server.bundle.js.map