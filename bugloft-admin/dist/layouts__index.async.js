(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"3IEG":function(e,t,n){e.exports={"text-overflow":"text-overflow___3k1XW","text-gradient":"text-gradient___XwD7H","background-hover":"background-hover___1aFTl","nprogress-spinner":"nprogress-spinner___3pDd2"}},"3Tgd":function(e,t,n){var a={"./en/messages.json":["sI6f",1],"./pt-br/messages.json":["yQuI",2],"./zh/messages.json":["vsgf",3]};function r(e){if(!n.o(a,e))return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=a[e],r=t[0];return n.e(t[1]).then(function(){return n.t(r,7)})}r.keys=function(){return Object.keys(a)},r.id="3Tgd",e.exports=r},H1Kz:function(e,t,n){e.exports={"text-overflow":"text-overflow___1xkzF","text-gradient":"text-gradient___1F-so","background-hover":"background-hover___tMUWq",backTop:"backTop___1Ybmn",content:"content___2H7DU",container:"container___3XaHA",footer:"footer___1PzA6"}},aArQ:function(e,t,n){"use strict";n.r(t);n("Ksrn");var a,r,o=n("MR/8"),c=n("d6i3"),i=n.n(c),l=n("eHn4"),u=n.n(l),s=n("p0pE"),f=n.n(s),p=n("1l/V"),h=n.n(p),d=n("2Taf"),m=n.n(d),v=n("vZ4D"),g=n.n(v),y=n("MhPg"),b=n.n(y),_=n("l4Ni"),k=n.n(_),E=n("ujKo"),w=n.n(E),C=n("ZD0w"),x=n("SftL"),j=n.n(x),O=n("q1tI"),R=n.n(O),M=n("bKel"),P=n.n(M),T=n("7Qib"),H=(n("17x9"),n("/MKj")),N=n("TJpk"),S=n("Kvkj"),q=n("Mj6V"),B=n.n(q),D=n("Aeqt"),I=n.n(D),A=function(e){var t=e.children;return t},K=(n("d4SM"),n("wraB")),L=n.n(K),z=(n("4eJr"),n("3LgI")),F=(n("bbsP"),n("/wGt")),U=n("jehZ"),G=n.n(U),J=n("Y/ft"),Q=n.n(J),W=(n("B9cy"),n("Ol7k")),X=n("4zCG"),Z=n("w2l6"),V=n("H1Kz"),Y=n.n(V);function $(e){var t=ee();return function(){var n,a=w()(e);if(t){var r=w()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return k()(this,n)}}function ee(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var te,ne,ae=W["a"].Content,re=S["e"].Header,oe=S["e"].Bread,ce=S["e"].Sider,ie=(a=Object(H["c"])(function(e){var t=e.app,n=e.loading;return{app:t,loading:n}}),P()(r=a(r=function(e){b()(n,e);var t=$(n);function n(){var e;m()(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return e=t.call.apply(t,[this].concat(r)),e.state={isMobile:!1},e.onCollapseChange=function(t){e.props.dispatch({type:"app/handleCollapseChange",payload:t})},e}return g()(n,[{key:"componentDidMount",value:function(){var e=this;this.enquireHandler=Object(X["enquireScreen"])(function(t){var n=e.state.isMobile;n!==t&&e.setState({isMobile:t})})}},{key:"componentWillUnmount",value:function(){Object(X["unenquireScreen"])(this.enquireHandler)}},{key:"render",value:function(){var e=this.props,t=e.app,n=e.location,a=e.dispatch,r=e.children,o=t.userInfo,c=t.theme,i=t.routeList,l=t.collapsed,u=t.permissions,s=t.notifications,p=this.state.isMobile,h=this.onCollapseChange,d=Object(T["f"])(n.pathname),m="en"!==d?i.map(function(e){var t=e.name,n=Q()(e,["name"]);return f()({},n,{name:(e[d]||{}).name||t})}):i,v=m.find(function(e){return e.route&&Object(T["g"])(e.route,n.pathname)}),g=!!v&&u.visit.includes(v.id),y=m.filter(function(e){return"-1"!==e.menuParentId}),b={menus:y,collapsed:l,notifications:s,onCollapseChange:h,avatar:o.avatar,username:o.username,fixed:T["c"].fixedHeader,onAllNotificationsRead:function(){a({type:"app/allNotificationsRead"})},onSignOut:function(){a({type:"app/signOut"})}},_={theme:c,menus:y,isMobile:p,collapsed:l,onCollapseChange:h,onThemeChange:function(e){a({type:"app/handleThemeChange",payload:e})}};return R.a.createElement(O["Fragment"],null,R.a.createElement(W["a"],null,p?R.a.createElement(F["a"],{maskClosable:!0,closable:!1,onClose:h.bind(this,!l),visible:!l,placement:"left",width:200,style:{padding:0,height:"100vh"}},R.a.createElement(ce,G()({},_,{collapsed:!1}))):R.a.createElement(ce,_),R.a.createElement("div",{className:Y.a.container,style:{paddingTop:T["c"].fixedHeader?72:0},id:"primaryLayout"},R.a.createElement(re,b),R.a.createElement(ae,{className:Y.a.content},R.a.createElement(oe,{routeList:m}),g?r:R.a.createElement(Z["default"],null)),R.a.createElement(z["a"],{className:Y.a.backTop,target:function(){return document.querySelector("#primaryLayout")}}),R.a.createElement(L.a,{className:Y.a.footer,copyright:T["c"].copyright}))))}}]),n}(O["PureComponent"]))||r)||r),le=ie;n("3IEG");function ue(e){var t=se();return function(){var n,a=w()(e);if(t){var r=w()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return k()(this,n)}}function se(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var fe,pe={primary:le,public:A},he=(te=Object(H["c"])(function(e){var t=e.loading;return{loading:t}}),P()(ne=te(ne=function(e){b()(n,e);var t=ue(n);function n(){var e;m()(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return e=t.call.apply(t,[this].concat(r)),e.previousPath="",e}return g()(n,[{key:"render",value:function(){var e=this.props,t=e.loading,n=e.children,a=e.location,r=pe[Object(T["i"])(I.a.layouts,a.pathname)],o=a.pathname+a.search;return o!==this.previousPath&&B.a.start(),t.global||(B.a.done(),this.previousPath=o),R.a.createElement(O["Fragment"],null,R.a.createElement(N["Helmet"],null,R.a.createElement("title",null,I.a.siteName)),R.a.createElement(S["d"],{fullScreen:!0,spinning:t.effects["app/query"]}),R.a.createElement(r,null,n))}}]),n}(O["PureComponent"]))||ne)||ne),de=he;function me(e){var t=ve();return function(){var n,a=w()(e);if(t){var r=w()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return k()(this,n)}}function ve(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var ge={en:j.a},ye=P()(fe=function(e){b()(a,e);var t=me(a);function a(){var e;m()(this,a);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return e=t.call.apply(t,[this].concat(o)),e.state={catalogs:{}},e.language=T["d"],e.loadCatalog=function(){var t=h()(i.a.mark(function t(a){var r;return i.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n("3Tgd")("./".concat(a,"/messages.json"));case 2:r=t.sent,e.setState(function(e){return{catalogs:f()({},e.catalogs,u()({},a,r))}});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),e}return g()(a,[{key:"componentDidMount",value:function(){var e=Object(T["f"])(this.props.location.pathname);this.language=e,this.loadCatalog(e)}},{key:"shouldComponentUpdate",value:function(e,t){var n=Object(T["f"])(e.location.pathname),a=this.language,r=t.catalogs;return a===n||r[n]?(this.language=n,!0):(this.loadCatalog(n),this.language=n,!1)}},{key:"render",value:function(){var e=this.props,t=e.location,n=e.children,a=this.state.catalogs,r=Object(T["f"])(t.pathname);return a[r]||(r=T["d"]),R.a.createElement(o["a"],{locale:ge[r]},R.a.createElement(C["I18nProvider"],{language:r,catalogs:a},R.a.createElement(de,null,n)))}}]),a}(O["Component"]))||fe;t["default"]=ye}}]);