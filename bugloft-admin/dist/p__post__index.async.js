(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{"kH+W":function(e,t,n){e.exports={table:"table___2XRqi"}},rHAy:function(e,t,n){"use strict";n.r(t);n("14J3");var a,r,o=n("BMrR"),i=(n("jCWc"),n("kPKH")),c=(n("P2fV"),n("NJEC")),l=(n("+L6B"),n("2/Rp")),u=n("p0pE"),s=n.n(u),d=n("2Taf"),f=n.n(d),p=n("vZ4D"),m=n.n(p),h=n("MhPg"),y=n.n(h),g=n("l4Ni"),v=n.n(g),E=n("ujKo"),T=n.n(E),k=n("q1tI"),R=n.n(k),C=(n("17x9"),n("7Qib")),b=n("/MKj"),w=n("ZD0w"),I=n("Kvkj"),P=n("Qyje"),S=(n("g9YV"),n("wCAj")),O=n("jehZ"),F=n.n(O),x=(n("+BJd"),n("mr32")),D=n("Y/ft"),_=n.n(D),A=(n("2qtc"),n("kLXV")),B=n("kH+W"),V=n.n(B);function M(e){var t=j();return function(){var n,a=T()(e);if(t){var r=T()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return v()(this,n)}}function j(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var L,N,Y,q=A["a"].confirm,H=(a=Object(w["withI18n"])(),a(r=function(e){y()(n,e);var t=M(n);function n(){var e;f()(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return e=t.call.apply(t,[this].concat(r)),e.handleMenuClick=function(t,n){var a=e.props,r=a.onDeleteItem,o=a.onEditItem,i=a.i18n;"1"===n.key?o(t):"2"===n.key&&q({title:i._("Are you sure delete this record?"),onOk:function(){r(t._id)}})},e.topicStatus=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";switch(e){case"PUBLISH":return"PUBLISH";case"DRAFT":return"DRAFT";default:return" "}},e}return m()(n,[{key:"render",value:function(){var e=this,t=this.props,n=(t.onDeleteItem,t.onEditItem,t.i18n),a=_()(t,["onDeleteItem","onEditItem","i18n"]),r=[{title:R.a.createElement(w["Trans"],{id:"ID"}),render:function(e,t,n){return R.a.createElement("span",null,n+1)}},{title:R.a.createElement(w["Trans"],{id:"PostTitle"}),dataIndex:"topicTitle",key:"topicTitle"},{title:R.a.createElement(w["Trans"],{id:"PostAuther"}),dataIndex:"userName",key:"userName"},{title:R.a.createElement(w["Trans"],{id:"PostStatus"}),dataIndex:"status",key:"status",render:function(t){return R.a.createElement("span",null,R.a.createElement(x["a"],{color:"PUBLISH"===t?"green":"red"},e.topicStatus(t)))}},{title:R.a.createElement(w["Trans"],{id:"PostCategory"}),dataIndex:"categoryName",key:"categoryName",render:function(e){return R.a.createElement(x["a"],null,e)}},{title:R.a.createElement(w["Trans"],{id:"CreateTime"}),dataIndex:"createTime",key:"createTime"},{title:R.a.createElement(w["Trans"],{id:"Operation"}),key:"operation",render:function(t,a){return R.a.createElement(I["a"],{onMenuClick:function(t){return e.handleMenuClick(a,t)},menuOptions:[{key:"1",name:n._("Update")},{key:"2",name:n._("Delete")}]})}}];return R.a.createElement(S["a"],F()({},a,{pagination:s()({},a.pagination,{showTotal:function(e){return n._("Total {total} Items",{total:e})}}),style:{width:"100%"},className:V.a.table,bordered:!0,scroll:{x:!0},columns:r,simple:!0,rowKey:function(e){return e._id}}))}}]),n}(k["PureComponent"]))||r),K=H,U=(n("y8nQ"),n("Vl3Y")),z=(n("iQDF"),n("+eQT")),J=(n("5NDa"),n("5rEg")),Q=n("wd/R"),W=n.n(Q);function Z(e){var t=X();return function(){var n,a=T()(e);if(t){var r=T()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return v()(this,n)}}function X(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var G,$,ee,te=J["a"].Search,ne=z["a"].RangePicker,ae={xs:24,sm:12,style:{marginBottom:16}},re=s()({},ae,{xl:96}),oe=(L=Object(w["withI18n"])(),N=U["a"].create(),L(Y=N(Y=function(e){y()(n,e);var t=Z(n);function n(){var e;f()(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return e=t.call.apply(t,[this].concat(r)),e.handleFields=function(e){var t=e.createTime;return t.length&&(e.createTime=[W()(t[0]).format("YYYY-MM-DD hh:mm:ss"),W()(t[1]).format("YYYY-MM-DD hh:mm:ss")]),e},e.handleSubmit=function(){var t=e.props,n=t.onFilterChange,a=t.form,r=a.getFieldsValue,o=r();o=e.handleFields(o),n(o)},e.handleReset=function(){var t=e.props.form,n=t.getFieldsValue,a=t.setFieldsValue,r=n();for(var o in r)({}).hasOwnProperty.call(r,o)&&(r[o]instanceof Array?r[o]=[]:r[o]=void 0);a(r),e.handleSubmit()},e.handleChange=function(t,n){var a=e.props,r=a.form,o=a.onFilterChange,i=r.getFieldsValue,c=i();c[t]=n,c=e.handleFields(c),o(c)},e}return m()(n,[{key:"render",value:function(){var e=this.props,t=e.onAdd,n=e.filter,a=e.form,r=e.i18n,c=a.getFieldDecorator,u=n.topicTitle,s=[];return n.createTime&&n.createTime[0]&&(s[0]=W()(n.createTime[0])),n.createTime&&n.createTime[1]&&(s[1]=W()(n.createTime[1])),R.a.createElement(o["a"],{gutter:24},R.a.createElement(i["a"],F()({},ae,{xl:{span:4},md:{span:8}}),c("topicTitle",{initialValue:u})(R.a.createElement(te,{placeholder:r._("Search Post Title"),onSearch:this.handleSubmit}))),R.a.createElement(i["a"],F()({},ae,{xl:{span:6},md:{span:8},sm:{span:12},id:"createTimeRangePicker"}),R.a.createElement(I["c"],{label:r._("CreateTime")},c("createTime",{initialValue:s})(R.a.createElement(ne,{style:{width:"100%"},onChange:this.handleChange.bind(this,"createTime"),getCalendarContainer:function(){return document.getElementById("createTimeRangePicker")}})))),R.a.createElement(i["a"],F()({},re,{xl:{span:10},md:{span:24},sm:{span:24}}),R.a.createElement(o["a"],{type:"flex",align:"middle",justify:"space-between"},R.a.createElement("div",null,R.a.createElement(l["a"],{type:"primary",className:"margin-right",onClick:this.handleSubmit},R.a.createElement(w["Trans"],{id:"Search"})),R.a.createElement(l["a"],{onClick:this.handleReset},R.a.createElement(w["Trans"],{id:"Reset"}))),R.a.createElement(l["a"],{type:"ghost",onClick:t},R.a.createElement(w["Trans"],{id:"Create"})))))}}]),n}(k["Component"]))||Y)||Y),ie=oe,ce=(n("OaEy"),n("2fM7")),le=n("yEr3"),ue=n.n(le);n("Lzxq");function se(e){var t=de();return function(){var n,a=T()(e);if(t){var r=T()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return v()(this,n)}}function de(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var fe,pe,me,he=U["a"].Item,ye={labelCol:{span:3},wrapperCol:{span:20}},ge=(G=Object(w["withI18n"])(),$=U["a"].create(),G(ee=$(ee=function(e){y()(n,e);var t=se(n);function n(){var e;f()(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return e=t.call.apply(t,[this].concat(r)),e.state={userAvatar:""},e.handleOk=function(){var t=e.props,n=t.item,a=void 0===n?{}:n,r=t.onOk,o=t.form,i=t.userInfo,c=o.validateFields,l=o.getFieldsValue;c(function(t){if(!t){var n=s()({},l());n.desc=n.content.toRAW(!0).blocks[0].text.slice(0,50),n.content=n.content.toHTML(),n._id=a._id,n.userAvatar=e.state.userAvatar,n.userName=i.userName,r(n)}})},e.handleSelectChange=function(t){e.props.form.setFieldsValue({content:t})},e}return m()(n,[{key:"render",value:function(){var e=this.props,t=e.item,n=void 0===t?{}:t,a=(e.onOk,e.form),r=e.i18n,o=e.categoryList,i=_()(e,["item","onOk","form","i18n","categoryList"]),c=a.getFieldDecorator,l=ue.a.createEditorState(n.content);return R.a.createElement(A["a"],F()({},i,{onOk:this.handleOk}),R.a.createElement(U["a"],{layout:"horizontal"},R.a.createElement(he,F()({label:r._("PostTitle"),hasFeedback:!0},ye),c("topicTitle",{initialValue:n.topicTitle?n.topicTitle:"",rules:[{required:!0}]})(R.a.createElement(J["a"],null))),R.a.createElement(he,F()({label:r._("PostCategory"),hasFeedback:!0},ye),c("categoryName",{initialValue:n.category,rules:[{required:!0}]})(R.a.createElement(ce["a"],null,o.map(function(e,t){return R.a.createElement(ce["a"].Option,{value:e.categoryName,key:t},e.categoryName)})))),R.a.createElement(he,F()({label:r._("PostStatus"),hasFeedback:!0},ye),c("status",{initialValue:n.status,rules:[{required:!0}]})(R.a.createElement(ce["a"],null,R.a.createElement(ce["a"].Option,{value:"PUBLISH"},R.a.createElement(w["Trans"],{id:"Publish"})),R.a.createElement(ce["a"].Option,{value:"DRAFT"},R.a.createElement(w["Trans"],{id:"Draft"}))))),R.a.createElement(he,F()({label:r._("PostContent"),hasFeedback:!0},ye),c("content",{initialValue:l})(R.a.createElement(ue.a,{onChange:this.handleSelectChange,style:{border:"1px #dddddd solid",borderRadius:"2px"}})))))}}]),n}(k["PureComponent"]))||ee)||ee),ve=ge;function Ee(e){var t=Te();return function(){var n,a=T()(e);if(t){var r=T()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return v()(this,n)}}function Te(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var ke=(fe=Object(w["withI18n"])(),pe=Object(b["c"])(function(e){var t=e.app,n=e.post,a=e.loading;return{app:t,post:n,loading:a}}),fe(me=pe(me=function(e){y()(n,e);var t=Ee(n);function n(){return f()(this,n),t.apply(this,arguments)}return m()(n,[{key:"render",value:function(){var e=this.props,t=e.location,n=e.dispatch,a=e.post,r=e.loading,u=e.i18n,d=e.app,f=t.query,p=t.pathname,m=a.list,h=a.pagination,y=a.currentItem,g=a.modalVisible,v=a.modalType,E=a.selectedRowKeys,T=a.categoryList,k=d.userInfo,b={dataSource:m,loading:r.effects["post/query"],pagination:h,onChange:function(e){w({page:e.current,pageSize:e.pageSize})},onDeleteItem:function(e){n({type:"post/delete",payload:e}).then(function(){w({page:1===m.length&&h.current>1?h.current-1:h.current})})},onEditItem:function(e){n({type:"post/showModal",payload:{modalType:"update",currentItem:e}})},rowSelection:{selectedRowKeys:E,onChange:function(e){n({type:"post/updateState",payload:{selectedRowKeys:e}})}}},w=function(e){C["k"].push({pathname:p,search:Object(P["stringify"])(s()({},f,e),{arrayFormat:"repeat"})})},S={filter:s()({},f),onFilterChange:function(e){w(s()({},e,{page:1}))},onAdd:function(){n({type:"post/showModal",payload:{modalType:"create"}})}},O={userInfo:k,categoryList:T,width:1e3,item:"create"===v?{}:y,visible:g,maskClosable:!1,confirmLoading:r.effects["post/".concat(v)],title:"".concat("create"===v?u._("Create Post"):u._("Update Post")),centered:!0,onOk:function(e){n({type:"post/".concat(v),payload:e}).then(function(){w()})},onCancel:function(){n({type:"post/hideModal"})}},F=function(){n({type:"post/multiDelete",payload:{_id:E}}).then(function(){w({page:m.length===E.length&&h.current>1?h.current-1:h.current})})};return R.a.createElement(I["f"],{inner:!0},R.a.createElement(ie,S),E.length>0&&R.a.createElement(o["a"],{style:{marginBottom:24,textAlign:"right",fontSize:13}},R.a.createElement(i["a"],null,"Selected ".concat(E.length," items "),R.a.createElement(c["a"],{title:"Are you sure delete these items?",placement:"left",onConfirm:F},R.a.createElement(l["a"],{type:"primary",style:{marginLeft:8}},"Remove")))),R.a.createElement(K,b),g&&R.a.createElement(ve,O))}}]),n}(k["PureComponent"]))||me)||me);t["default"]=ke}}]);