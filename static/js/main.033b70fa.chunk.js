(this.webpackJsonpcards=this.webpackJsonpcards||[]).push([[0],{10:function(e,t,n){e.exports={wrapperOfAuth:"Auth_wrapperOfAuth__3XmyS"}},12:function(e,t,n){e.exports={forLinks:"Common_forLinks__1l5g1",forInput:"Common_forInput__3E9bg",forButton:"Common_forButton__3VnRI"}},16:function(e,t,n){e.exports={DeckBorder:"DecksTable_DeckBorder__n3nip",Table:"DecksTable_Table__2kI9u",cells:"DecksTable_cells__1E7On",updateCard:"DecksTable_updateCard__1yuSK",fieldOfUpdate:"DecksTable_fieldOfUpdate__1A4nG"}},17:function(e,t,n){e.exports={settings:"Search_settings__2FJo-",button:"Search_button__k6Vd9",input:"Search_input__2E0SQ",strip:"Search_strip__3Gbiw"}},18:function(e,t,n){e.exports={DeckBorder:"CardsTable_DeckBorder__1BYyA",Table:"CardsTable_Table__14Ccy",cells:"CardsTable_cells__3dB0k",updateCard:"CardsTable_updateCard__18pZt",fieldOfUpdate:"CardsTable_fieldOfUpdate__2HBzJ"}},44:function(e,t,n){e.exports={wrapperOfHeader:"Header_wrapperOfHeader__3r8LB"}},50:function(e,t,n){e.exports=n(81)},55:function(e,t,n){},56:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(19),c=n.n(o),l=(n(55),n(56),n(22)),u=n(4),i=n(3),s=function(e){return r.a.createElement("div",null,r.a.createElement("h2",null,e.title))},d=n(12),f=n.n(d),m=function(e){return r.a.createElement("input",{className:f.a.forInput,onFocus:e.onFocus,onBlur:e.onBlur,value:e.value,onChange:e.onChange,placeholder:e.placeholder,type:e.type})},p=function(e){return r.a.createElement("button",{className:f.a.forButton,type:e.typeOfButton,onClick:e.actionOfButton,disabled:e.disabled},e.nameOfButton)},E=function(e){return r.a.createElement(l.b,{className:f.a.forLinks,to:e.way},e.wordOfLink)},O=n(10),g=n.n(O),h=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),o=n[0],c=n[1],l=Object(a.useState)(""),d=Object(i.a)(l,2),f=d[0],O=d[1],h=Object(u.f)().token,b=function(){e.toCleanErrorField()};return r.a.createElement("div",{className:g.a.wrapperOfAuth},r.a.createElement(s,{title:"Set New Password"}),e.error?r.a.createElement("div",null,e.error):null,e.loading?r.a.createElement("div",null,"Loading..."):null,r.a.createElement("div",null,r.a.createElement(m,{placeholder:"new pass",type:"password",value:o,onBlur:b,onFocus:b,onChange:function(e){c(e.currentTarget.value)}})),r.a.createElement("div",null,r.a.createElement(m,{placeholder:"repeat pass",type:"password",value:f,onBlur:b,onFocus:b,onChange:function(e){O(e.currentTarget.value)}})),r.a.createElement("div",null,r.a.createElement(p,{typeOfButton:"button",disabled:e.disabled,actionOfButton:function(){e.setValueOfSetNewPassForm(o,f,h),c(""),O("")},nameOfButton:"Set new password"})),r.a.createElement("div",null,r.a.createElement(E,{way:"/sign-in",wordOfLink:"Sign In"})))},b=n(5),k="auth/register/WAITING-FOR-RESPONSE",v="auth/register/SET-ERROR-REGISTER-PAGE",w=n(2),S=n.n(w),y=n(6),C=n(1),j=n(43),A=n.n(j).a.create({baseURL:"https://cards-nya-back.herokuapp.com/1.0/"}),T=function(e,t,n){return A.post("auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},B=function(e,t,n){return A.post("auth/forgot",{email:e,html1:t,html2:n}).then((function(e){return console.log(e)}))},D=function(e,t){return A.post("auth/register",{email:e,password:t}).then((function(e){return e}))},_=function(e){return A.post("auth/me",{token:e}).then((function(e){console.log(e.data),localStorage.removeItem("auth-token"),localStorage.setItem("auth-token",e.data.token)})).catch((function(e){return e}))},I=function(e,t){return A.post("auth/set-new-password",{resetPasswordToken:e,password:t}).then((function(e){return e}))},R=function(e,t){return A.post("cards/pack",{cardsPack:e,token:t}).then((function(e){return localStorage.removeItem("auth-token"),localStorage.setItem("auth-token",e.data.token),e.data}))},N=function(e){var t=localStorage.getItem("auth-token");return A.delete("cards/pack?token=".concat(t,"&id=").concat(e)).then((function(e){return console.log(e),localStorage.removeItem("auth-token"),localStorage.setItem("auth-token",e.data.token),e}))},x=function(e){return A.get("cards/pack?token=".concat(e)).then((function(e){return console.log(e.data),localStorage.removeItem("auth-token"),localStorage.setItem("auth-token",e.data.token),e.data}))},P=function(e){var t=localStorage.getItem("auth-token");return A.put("cards/pack",{cardsPack:e,token:t}).then((function(e){return localStorage.removeItem("auth-token"),localStorage.setItem("auth-token",e.data.token),e.data.updatedCardsPack}))},F=function(e){return A.post("cards/card",e).then((function(e){return localStorage.removeItem("auth-token"),localStorage.setItem("auth-token",e.data.token),e.data}))},L=function(e){var t=localStorage.getItem("auth-token");return A.delete("cards/card?token=".concat(t,"&id=").concat(e)).then((function(e){return localStorage.removeItem("auth-token"),localStorage.setItem("auth-token",e.data.token),e.data}))},G=function(e){var t=localStorage.getItem("auth-token");return A.get("cards/card?cardsPack_id=".concat(e,"&token=").concat(t)).then((function(t){return localStorage.removeItem("auth-token"),localStorage.setItem("auth-token",t.data.token),localStorage.removeItem("cardsPack_id"),localStorage.setItem("cardsPack_id",e),t.data}))},U=function(e){var t=localStorage.getItem("auth-token");return A.put("cards/card",{card:e,token:t}).then((function(e){return localStorage.removeItem("auth-token"),localStorage.setItem("auth-token",e.data.token),e.data.updatedCard}))},V={error:"",token:"",loading:null,disabled:!1},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW-ERROR":return Object(C.a)({},e,{error:t.error});case"SET-NEW-TOKEN":return Object(C.a)({},e,{token:t.token});case"SET-LOADING-VALUE":return Object(C.a)({},e,{loading:t.loading});case"TO-CLEAN-ERROR-FIELD":return Object(C.a)({},e,{error:t.error});default:return e}},W=Object(b.b)(null,{setValueOfSetNewPassForm:function(e,t,n){return function(){var a=Object(y.a)(S.a.mark((function a(r,o){return S.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!(e===t&&e.length>7)){a.next=7;break}return r({type:"SET-LOADING-VALUE",loading:!0,disabled:!0}),a.next=4,I(n,e);case 4:try{r({type:"SET-NEW-TOKEN",token:n}),r({type:"SET-LOADING-VALUE",loading:!1,disabled:!1})}catch(o){console.log(o.response),r({type:"SHOW-ERROR",error:o.response.data.error}),r({type:"SET-LOADING-VALUE",loading:!1,disabled:!1})}a.next=8;break;case 7:r({type:"SHOW-ERROR",error:"Incorrect Password! Password should have min 8 values and each one fields should be same!"});case 8:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()}})((function(e){var t=Object(b.c)(),n=Object(b.d)((function(e){return e.setNewPass}));return r.a.createElement(h,{setValueOfSetNewPassForm:e.setValueOfSetNewPassForm,error:n.error,loading:n.loading,disabled:n.disabled,toCleanErrorField:function(){t({type:"TO-CLEAN-ERROR-FIELD",error:null})}})})),M=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),o=n[0],c=n[1],l=Object(a.useState)(""),u=Object(i.a)(l,2),d=u[0],f=u[1],O=Object(a.useState)(!1),h=Object(i.a)(O,2),b=h[0],k=h[1],v=function(){e.toCleanErrorField()};return r.a.createElement("div",{className:g.a.wrapperOfAuth},r.a.createElement(s,{title:"sign-in"}),e.loading?r.a.createElement("div",null,"loading..."):null,e.error?r.a.createElement("div",null,e.error):null,r.a.createElement("div",null,r.a.createElement(m,{type:"text",placeholder:"email",value:o,onFocus:v,onBlur:v,onChange:function(e){c(e.currentTarget.value)}})),r.a.createElement("div",null,r.a.createElement(m,{type:"password",placeholder:"password",value:d,onFocus:v,onBlur:v,onChange:function(e){f(e.currentTarget.value)}})),r.a.createElement("div",null,r.a.createElement(E,{way:"/forgot",wordOfLink:"Forgot password?"})),r.a.createElement("div",null,r.a.createElement(m,{type:"checkbox",checked:b,onChange:function(e){k(!b)}}),"Remember Me"),r.a.createElement("div",null,r.a.createElement(p,{typeOfButton:"button",actionOfButton:function(){e.setSignInFormValues(o,d,b)},disabled:e.disabled,nameOfButton:"Sign In"})),r.a.createElement("div",null,r.a.createElement(E,{way:"/register",wordOfLink:"Registration"})))},H={email:"",password:"",rememberMe:!1,loading:!1,disabled:!1,error:null,token:"",redirect:!1,authToken:""},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-SIGN-IN-FORM-VALUES":return Object(C.a)({},e,{email:t.email,password:t.password,rememberMe:t.rememberMe,token:t.token,redirect:t.redirect});case"SET-LOADING-DATA":return Object(C.a)({},e,{loading:t.loading,disabled:t.disabled,redirect:t.redirect});case"SET-ERROR-SIGN-IN-PAGE":return Object(C.a)({},e,{error:t.error});case"IS-TOKEN-HAS":return Object(C.a)({},e,{authToken:t.authToken});default:return e}},z=Object(b.b)(null,{setSignInFormValues:function(e,t,n){return function(){var a=Object(y.a)(S.a.mark((function a(r,o){return S.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r({type:"SET-LOADING-DATA",loading:!0,disabled:!0}),a.next=3,T(e,t,n).then((function(e){r({type:"SET-LOADING-DATA",loading:!1,disabled:!1}),r({type:"SET-SIGN-IN-FORM-VALUES",email:e.email,password:t,rememberMe:e.rememberMe,token:e.token,redirect:!0}),localStorage.setItem("auth-token",e.token),localStorage.setItem("user-id",e._id);var n=localStorage.getItem("auth-token");r({type:"IS-TOKEN-HAS",authToken:n})})).catch((function(e){console.log(e.response);var t=e.response.data.error;r({type:"SET-LOADING-DATA",loading:!1,disabled:!1,redirect:!1}),r({type:"SET-ERROR-SIGN-IN-PAGE",error:t})}));case 3:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()}})((function(e){var t=Object(b.c)(),n=Object(b.d)((function(e){return e.signIn}));return n.redirect?r.a.createElement(u.a,{to:"/profile"}):r.a.createElement(M,{setSignInFormValues:e.setSignInFormValues,loading:n.loading,disabled:n.disabled,error:n.error,toCleanErrorField:function(){t({type:"SET-ERROR-SIGN-IN-PAGE",error:null})}})})),J=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),o=n[0],c=n[1],l=function(){e.toCleanError()};return r.a.createElement("div",{className:g.a.wrapperOfAuth},r.a.createElement(s,{title:"forgot"}),e.loading?r.a.createElement("div",null,"Loading..."):null,e.error?r.a.createElement("div",null,e.error):null,r.a.createElement("div",null,r.a.createElement(m,{placeholder:"email address",type:"text",value:o,onBlur:l,onFocus:l,onChange:function(e){c(e.currentTarget.value)}})),r.a.createElement("div",null,r.a.createElement(p,{typeOfButton:"button",actionOfButton:function(){e.setForgotPassword(o),c("")},nameOfButton:"Send email",disabled:e.disabled})),r.a.createElement("div",null,r.a.createElement(E,{way:"/sign-in",wordOfLink:"Sign In"})))},Z={email:"",loading:!1,disabled:!1,error:null,emailApproved:!1},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RESTORE-FORGOT-PASSWORD":return Object(C.a)({},e,{email:t.email});case"SET-LOADING-DATA-FORGOT-PAGE":return Object(C.a)({},e,{loading:t.loading,disabled:t.disabled,emailApproved:t.emailApproved});case"SET-VALUE-ERROR-FORGOT-PAGE":return Object(C.a)({},e,{error:t.error});default:return e}},Y=Object(b.b)(null,{setForgotPassword:function(e){return function(){var t=Object(y.a)(S.a.mark((function t(n,a){var r,o;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"SET-LOADING-DATA-FORGOT-PAGE",loading:!0,disabled:!0}),t.prev=1,t.next=4,B(e,"<a href=http://localhost:3000/template-typescript#/set-new-pass/",">reset-password-link</a>");case 4:r=t.sent,console.log(r),n({type:"SET-LOADING-DATA-FORGOT-PAGE",loading:!1,disabled:!1,emailApproved:!0}),n({type:"RESTORE-FORGOT-PASSWORD",email:e}),t.next=16;break;case 10:t.prev=10,t.t0=t.catch(1),console.log(t.t0.response.data.error),o=t.t0.response.data.error,n({type:"SET-VALUE-ERROR-FORGOT-PAGE",error:o}),n({type:"SET-LOADING-DATA-FORGOT-PAGE",loading:!1,disabled:!1});case 16:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,n){return t.apply(this,arguments)}}()},toCleanError:function(){return function(){var e=Object(y.a)(S.a.mark((function e(t,n){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t({type:"SET-VALUE-ERROR-FORGOT-PAGE",error:null})}catch(n){console.log(n)}case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}})((function(e){var t=Object(b.d)((function(e){return e.forgot}));return t.emailApproved?r.a.createElement(u.a,{to:"/set-new-pass/:token"}):r.a.createElement(J,{setForgotPassword:e.setForgotPassword,toCleanError:e.toCleanError,loading:t.loading,disabled:t.disabled,error:t.error})})),X=function(e){var t=e.setRegisterFormValues,n=e.loading,o=e.error,c=e.CancelErrorPosition,l=Object(a.useState)(""),u=Object(i.a)(l,2),d=u[0],f=u[1],O=Object(a.useState)(""),h=Object(i.a)(O,2),b=h[0],k=h[1],v=Object(a.useState)(""),w=Object(i.a)(v,2),S=w[0],y=w[1],C=function(){return c()};return r.a.createElement("div",{className:g.a.wrapperOfAuth},r.a.createElement(s,{title:"Register"}),n&&r.a.createElement("div",null,"wait"),o&&r.a.createElement("label",null,o),r.a.createElement("div",null,r.a.createElement(m,{placeholder:"email",type:"email",onBlur:C,onFocus:C,onChange:function(e){return f(e.currentTarget.value)}})),r.a.createElement("div",null,r.a.createElement(m,{placeholder:"password",type:"password",onBlur:C,onFocus:C,onChange:function(e){return k(e.currentTarget.value)}})),r.a.createElement("div",null,r.a.createElement(m,{placeholder:"repeat password",type:"password",onBlur:C,onFocus:C,onChange:function(e){return y(e.currentTarget.value)}})),r.a.createElement(p,{typeOfButton:"button",actionOfButton:function(){return t(d,b,S)},nameOfButton:"Register"}),r.a.createElement(E,{way:"/sign-in",wordOfLink:"Sign In"}))},$=function(){var e=Object(b.c)(),t=Object(b.d)((function(e){return e.register}));return r.a.createElement(r.a.Fragment,null,t.redirect&&r.a.createElement(u.a,{to:"/profile"}),r.a.createElement(X,{setRegisterFormValues:function(t,n,a){if(n!==a){e({type:v,error:"fields password and repeat password should be the same"})}else{if(!(n.length<=7&&t!==/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/))return e({type:k,loading:!0}),D(t,n).then((function(a){e({type:k,loading:!1}),e({type:"auth/register/REGISTER-SUCCESS",email:t,password:n,redirect:!0})})).catch((function(t){e({type:k,loading:!1}),e({type:v,error:"your email is invalid or is already registered"})}));e({type:v,error:"your email of password is not valid"})}},loading:t.loading,error:t.error,CancelErrorPosition:function(){return e({type:v,error:null})}}))},ee=n(44),te=n.n(ee),ne=function(e){return r.a.createElement("div",{className:te.a.wrapperOfHeader},r.a.createElement(E,{way:"/sign-in",wordOfLink:"sign-in"}),r.a.createElement(E,{way:"/register",wordOfLink:"register"}),r.a.createElement(E,{way:"/forgot",wordOfLink:"forgot"}),r.a.createElement(E,{way:"/set-new-pass/:token",wordOfLink:"set-new-pass"}),r.a.createElement(E,{way:"/profile",wordOfLink:"profile"}),r.a.createElement(E,{way:"/decks-table",wordOfLink:"decks"}),r.a.createElement(E,{way:"/cards-table",wordOfLink:"cards"}),e.login?r.a.createElement(p,{typeOfButton:"button",actionOfButton:function(){e.tokenIsClear()},nameOfButton:"logout"}):null)},ae=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],o=t[1],c=localStorage.getItem("auth-token");Object(a.useEffect)((function(){o(!!c)}),[]);return r.a.createElement(ne,{login:n,tokenIsClear:function(){localStorage.removeItem("auth-token"),localStorage.removeItem("user-id"),o(!1)}})},re={},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re;return e},ce=Object(b.b)(null,{approveAuth:function(){return function(){var e=Object(y.a)(S.a.mark((function e(t,n){var a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("auth-token"),e.next=3,_(a).then((function(e){}));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}})((function(e){return e.approveAuth(),r.a.createElement("div",null,r.a.createElement("h1",null,"Profile page"))})),le=n(16),ue=n.n(le),ie=n(45),se=n(46),de=n(48),fe=n(49),me=n(29),pe=function(e){Object(fe.a)(n,e);var t=Object(de.a)(n);function n(){var e;Object(ie.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={values:[0,50]},e}return Object(se.a)(n,[{key:"render",value:function(){var e=this;return a.createElement("div",{style:{display:"flex",justifyContent:"center",flexWrap:"wrap",margin:"0 2em"}},a.createElement(me.Range,{values:this.state.values,step:1,min:0,max:200,onChange:function(t){return e.setState({values:t})},renderTrack:function(t){var n=t.props,r=t.children;return a.createElement("span",{onMouseDown:n.onMouseDown,onTouchStart:n.onTouchStart,style:Object(C.a)({},n.style,{height:"36px",display:"flex",width:"100%"})},a.createElement("div",{ref:n.ref,style:{height:"5px",width:"100%",borderRadius:"4px",background:Object(me.getTrackBackground)({values:e.state.values,colors:["#000","#ccc","#000"],min:0,max:200}),alignSelf:"center"}},r))},renderThumb:function(e){var t=e.props,n=e.isDragged;return a.createElement("div",Object.assign({},t,{style:Object(C.a)({},t.style,{height:"20px",width:"20px",borderRadius:"4px",backgroundColor:"#FFF",display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"0px 2px 6px #AAA"})}),a.createElement("div",{style:{height:"16px",width:"5px",backgroundColor:n?"#000":"#CCC"}}))}}),a.createElement("label",{style:{margin:"10px"},id:"output"},this.state.values[0].toFixed(1)),a.createElement("label",{style:{margin:"10px"},id:"output"},this.state.values[1].toFixed(1)))}}]),n}(a.Component),Ee=n(17),Oe=n.n(Ee),ge=function(){return r.a.createElement("div",{className:Oe.a.settings},r.a.createElement("div",{className:Oe.a.input},r.a.createElement(m,{type:"text",placeholder:"Search"})),r.a.createElement("div",{className:Oe.a.strip},r.a.createElement(pe,null)),r.a.createElement("div",{className:Oe.a.button},r.a.createElement(p,{actionOfButton:function(){},nameOfButton:"Search",typeOfButton:"button"})))},he=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),o=n[0],c=n[1],l=Object(a.useState)(0),u=Object(i.a)(l,2),d=u[0],f=u[1],O=Object(a.useState)(!1),g=Object(i.a)(O,2),h=g[0],b=g[1],k=Object(a.useState)(""),v=Object(i.a)(k,2),w=v[0],S=v[1],y=Object(a.useState)({}),j=Object(i.a)(y,2),A=j[0],T=j[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(ge,null),r.a.createElement(s,{title:"DECKS"}),r.a.createElement("table",{className:ue.a.Table},r.a.createElement("tr",null,r.a.createElement("th",null,r.a.createElement(m,{type:"text",value:o,placeholder:"Deck's name",onChange:function(e){c(e.currentTarget.value)}})),r.a.createElement("th",null,"Rating "," "," ",d," "," ",r.a.createElement(p,{actionOfButton:function(){f(d+1)},nameOfButton:"\u2191",typeOfButton:"button"})," "," ",r.a.createElement(p,{actionOfButton:function(){f(d-1)},nameOfButton:"\u2193",typeOfButton:"button"})),r.a.createElement("th",null,r.a.createElement(p,{actionOfButton:function(){e.addNewDeck(o,d)},nameOfButton:"add",typeOfButton:"button"}))),e.decks.map((function(t){return r.a.createElement("tr",{className:ue.a.cells,key:t._id},r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.rating),r.a.createElement("td",null,r.a.createElement(p,{actionOfButton:function(){return function(e){b(!0),S(e.name),T(e)}(t)},nameOfButton:"Update",typeOfButton:"button"})," ",r.a.createElement(p,{actionOfButton:function(){return n=t._id,void e.deleteADeck(n);var n},nameOfButton:"Delete",typeOfButton:"button"})," ",r.a.createElement("span",{onClick:function(){return e.getCards(t._id)}},r.a.createElement(E,{way:"/cards-table",wordOfLink:"cards"}))," ",r.a.createElement("span",{onClick:function(){return e.getCards(t._id)}},r.a.createElement(E,{way:"/play",wordOfLink:"play"}))))}))),h?r.a.createElement("div",{className:ue.a.updateCard},r.a.createElement("div",{className:ue.a.fieldOfUpdate},r.a.createElement("h1",null,"UPDATE YOUR DECK"),r.a.createElement("textarea",{placeholder:"Name",onChange:function(e){S(e.currentTarget.value)},value:w}),r.a.createElement("button",{onClick:function(){b(!1);var t=Object(C.a)({},A,{name:w});e.updateDeck(t)}},"Save"),r.a.createElement("button",{onClick:function(){return b(!1)}},"Cancel"))):null)},be=n(23),ke={decks:[{grade:0,name:"7777",path:"/def",rating:0,shots:0,type:"pack",_id:"5ebd1e6d5af2c800049590de"}]},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-NEW-DECK":return Object(C.a)({},e,{decks:[].concat(Object(be.a)(e.decks),[t.newCardsPack])});case"DELETE-DECK":return Object(C.a)({},e,{decks:e.decks.filter((function(e){return e._id!==t._id}))});case"GET-DECKS":return Object(C.a)({},e,{decks:t.cardPacks});case"UPDATE-DECK":return Object(C.a)({},e,{decks:e.decks.map((function(e){return e._id===t.updateCardsDeck._id?t.updateCardsDeck:e}))});default:return e}},we={theCards:[{cardsPack_id:"5ebe22ad7b58e90004b4b1e0",_id:"",question:"something",answer:"something else",grade:2}]},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-NEW-CARD":return Object(C.a)({},e,{theCards:[].concat(Object(be.a)(e.theCards),[{cardsPack_id:t.cardsPack_id,_id:t._id,answer:t.answer,question:t.question,grade:t.grade}])});case"GET-CARDS":return Object(C.a)({},e,{theCards:t.cards});case"UPDATE-CARD":return Object(C.a)({},e,{theCards:e.theCards.map((function(e){return e._id===t.updatedCard._id?t.updatedCard:e}))});case"DELETE-CARD":return Object(C.a)({},e,{theCards:e.theCards.filter((function(e){return e._id!==t._id}))});default:return e}},ye=Object(b.b)(null,{addNewDeck:function(e,t){return function(){var n=Object(y.a)(S.a.mark((function n(a,r){var o,c;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=localStorage.getItem("auth-token"),c=localStorage.getItem("user-id"),n.next=4,R({name:e,user_id:c,rating:t},o).then((function(e){var t=e.newCardsPack;a({type:"ADD-NEW-DECK",newCardsPack:t}),console.log(e)}));case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},deleteADeck:function(e){return function(){var t=Object(y.a)(S.a.mark((function t(n,a){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(e).then((function(t){n({type:"DELETE-DECK",_id:e})}));case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},getDecks:function(){return function(){var e=Object(y.a)(S.a.mark((function e(t,n){var a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("auth-token"),e.next=3,x(a).then((function(e){localStorage.removeItem("auth-token"),localStorage.setItem("auth-token",e.token);var n=e.cardPacks;t({type:"GET-DECKS",cardPacks:n})}));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},getCards:function(e){return function(){var t=Object(y.a)(S.a.mark((function t(n,a){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G(e).then((function(e){var t=e.cards,a=localStorage.getItem("cardsPack_id");n({type:"GET-CARDS",cards:t,cardsPack_id:a})}));case 2:try{console.log(we.theCards)}catch(a){console.log(a)}case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},updateDeck:function(e){return function(){var t=Object(y.a)(S.a.mark((function t(n,a){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P(e).then((function(e){n({type:"UPDATE-DECK",updateCardsDeck:e})}));case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}})((function(e){var t=Object(b.d)((function(e){return e.decks.decks}));return Object(a.useEffect)((function(){e.getDecks()}),[]),r.a.createElement(he,{decks:t,addNewDeck:e.addNewDeck,deleteADeck:e.deleteADeck,updateDeck:e.updateDeck,getCards:e.getCards})})),Ce=n(18),je=n.n(Ce),Ae=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),o=n[0],c=n[1],l=Object(a.useState)(""),u=Object(i.a)(l,2),d=u[0],f=u[1],E=Object(a.useState)(0),O=Object(i.a)(E,2),g=O[0],h=O[1],b=Object(a.useState)(!1),k=Object(i.a)(b,2),v=k[0],w=k[1],S=Object(a.useState)(""),y=Object(i.a)(S,2),j=y[0],A=y[1],T=Object(a.useState)(""),B=Object(i.a)(T,2),D=B[0],_=B[1],I=Object(a.useState)({}),R=Object(i.a)(I,2),N=R[0],x=R[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(ge,null),r.a.createElement(s,{title:"CARDS"}),r.a.createElement("table",{className:je.a.Table},r.a.createElement("tr",null,r.a.createElement("th",null,r.a.createElement(m,{type:"text",value:o,placeholder:"Question",onChange:function(e){c(e.currentTarget.value)}})),r.a.createElement("th",null,"Grade "," "," ",g," "," ",r.a.createElement(p,{actionOfButton:function(){h(g+1)},nameOfButton:"\u2191",typeOfButton:"button"})," "," ",r.a.createElement(p,{actionOfButton:function(){h(g-1)},nameOfButton:"\u2193",typeOfButton:"button"})),r.a.createElement("th",null,r.a.createElement(m,{type:"text",value:d,placeholder:"Answer",onChange:function(e){f(e.currentTarget.value)}})," ",r.a.createElement(p,{actionOfButton:function(){e.addNewCard(o,d,g)},nameOfButton:"add",typeOfButton:"button"}))),e.cards.map((function(t){return r.a.createElement("tr",{className:je.a.cells},r.a.createElement("td",null,t.question," "),r.a.createElement("td",null,t.grade),r.a.createElement("td",null,t.answer," ",r.a.createElement(p,{actionOfButton:function(){return function(e){w(!0),A(e.question),_(e.answer),x(e)}(t)},nameOfButton:"Update",typeOfButton:"button"}),r.a.createElement(p,{actionOfButton:function(){return n=t._id,void e.deleteACard(n);var n},nameOfButton:"Delete",typeOfButton:"button"})))}))),v?r.a.createElement("div",{className:je.a.updateCard},r.a.createElement("div",{className:je.a.fieldOfUpdate},r.a.createElement("h1",null,"UPDATE YOUR CARD"),r.a.createElement("textarea",{placeholder:"Question",onChange:function(e){A(e.currentTarget.value)},value:j}),r.a.createElement("textarea",{placeholder:"Answer",onChange:function(e){_(e.currentTarget.value)},value:D}),r.a.createElement("button",{onClick:function(){w(!1);var t=Object(C.a)({},N,{question:j,answer:D});e.updateCards(t)}},"Save"),r.a.createElement("button",{onClick:function(){return w(!1)}},"Cancel"))):null)},Te=Object(b.b)(null,{addNewCard:function(e,t,n){return function(){var a=Object(y.a)(S.a.mark((function a(r,o){var c,l;return S.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c=localStorage.getItem("auth-token"),l=localStorage.getItem("cardsPack_id"),a.next=4,F({card:{cardsPack_id:l,question:e,answer:t,grade:n},token:c}).then((function(a){console.log(a),r({type:"ADD-NEW-CARD",question:e,answer:t,grade:n,cardsPack_id:l})}));case 4:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()},deleteACard:function(e){return function(){var t=Object(y.a)(S.a.mark((function t(n,a){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L(e).then((function(e){var t=e.deletedCard._id;n({type:"DELETE-CARD",_id:t})}));case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},updateCards:function(e){return function(){var t=Object(y.a)(S.a.mark((function t(n,a){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U(e).then((function(e){n({type:"UPDATE-CARD",updatedCard:e})}));case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}})((function(e){var t=Object(b.d)((function(e){return e.cards.theCards}));return r.a.createElement(Ae,{addNewCard:e.addNewCard,deleteACard:e.deleteACard,updateCards:e.updateCards,cards:t})})),Be=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"question"),r.a.createElement(p,{typeOfButton:"button",actionOfButton:function(){},nameOfButton:"check"}),r.a.createElement("div",null,"answer"),r.a.createElement("div",null,r.a.createElement(p,{typeOfButton:"button",actionOfButton:function(){},nameOfButton:"didn't know"})," ",r.a.createElement(p,{typeOfButton:"button",actionOfButton:function(){},nameOfButton:"forgot"})," ",r.a.createElement(p,{typeOfButton:"button",actionOfButton:function(){},nameOfButton:"spend a lot of time"})," ",r.a.createElement(p,{typeOfButton:"button",actionOfButton:function(){},nameOfButton:"mixed up"})," ",r.a.createElement(p,{typeOfButton:"button",actionOfButton:function(){},nameOfButton:"knew"})," ",r.a.createElement(p,{typeOfButton:"button",actionOfButton:function(){},nameOfButton:"NEXT"})))},De=function(){return r.a.createElement(Be,null)},_e=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ae,null),r.a.createElement("div",{className:g.a.wrapperOfAuth},r.a.createElement(u.b,{path:"/sign-in",render:function(){return r.a.createElement(z,null)}}),r.a.createElement(u.b,{path:"/register",render:function(){return r.a.createElement($,null)}}),r.a.createElement(u.b,{path:"/forgot",render:function(){return r.a.createElement(Y,null)}}),r.a.createElement(u.b,{path:"/set-new-pass/:token",render:function(){return r.a.createElement(W,null)}}),r.a.createElement(u.b,{path:"/profile",render:function(){return r.a.createElement(ce,null)}}),r.a.createElement(u.b,{path:"/decks-table",render:function(){return r.a.createElement(ye,null)}}),r.a.createElement(u.b,{path:"/cards-table",render:function(){return r.a.createElement(Te,null)}}),r.a.createElement(u.b,{path:"/play",render:function(){return r.a.createElement(De,null)}})))},Ie=n(13),Re=n(47),Ne={email:"",password:"",loading:!1,error:!1,redirect:!1},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/register/REGISTER-SUCCESS":return Object(C.a)({},e,{email:t.email,password:t.password,redirect:!0});case k:return Object(C.a)({},e,{loading:t.loading});case v:return Object(C.a)({},e,{error:t.error})}return e},Pe=Object(Ie.c)({forgot:Q,register:xe,setNewPass:K,signIn:q,profile:oe,cards:Se,decks:ve}),Fe=Object(Ie.d)(Pe,Object(Ie.a)(Re.a));var Le=function(){return r.a.createElement(l.a,null,r.a.createElement(b.a,{store:Fe},r.a.createElement(_e,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.033b70fa.chunk.js.map