(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{"9McV":function(e,t,n){e.exports={table:"table___21hL5"}},fqp2:function(e,t,n){"use strict";n.r(t);n("14J3");var r,a,o=n("BMrR"),i=(n("jCWc"),n("kPKH")),l=(n("P2fV"),n("NJEC")),c=(n("+L6B"),n("2/Rp")),u=n("p0pE"),s=n.n(u),m=n("2Taf"),f=n.n(m),p=n("vZ4D"),d=n.n(p),h=n("MhPg"),y=n.n(h),v=n("l4Ni"),g=n.n(v),E=n("ujKo"),R=n.n(E),k=n("q1tI"),C=n.n(k),w=(n("17x9"),n("7Qib")),b=n("/MKj"),T=n("ZD0w"),O=n("Kvkj"),I=n("Qyje"),F=(n("g9YV"),n("wCAj")),_=n("jehZ"),x=n.n(_),P=(n("+BJd"),n("mr32")),D=n("Y/ft"),M=n.n(D),V=(n("2qtc"),n("kLXV")),B=n("9McV"),S=n.n(B);function j(e){var t=N();return function(){var n,r=R()(e);if(t){var a=R()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return g()(this,n)}}function N(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var L,Y,A,K=V["a"].confirm,q=(r=Object(T["withI18n"])(),r(a=function(e){y()(n,e);var t=j(n);function n(){var e;f()(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return e=t.call.apply(t,[this].concat(a)),e.handleMenuClick=function(t,n){var r=e.props,a=r.onDeleteItem,o=r.onEditItem,i=r.i18n;"1"===n.key?o(t):"2"===n.key&&K({title:i._("Are you sure delete this record?"),onOk:function(){a(t._id)}})},e}return d()(n,[{key:"render",value:function(){var e=this,t=this.props,n=(t.onDeleteItem,t.onEditItem,t.i18n),r=t.menuList,a=M()(t,["onDeleteItem","onEditItem","i18n","menuList"]),o=[{title:C.a.createElement(T["Trans"],{id:"RoleName"}),dataIndex:"roleName",key:"roleName"},{title:C.a.createElement(T["Trans"],{id:"RolePermission"}),dataIndex:"permission",key:"permission",render:function(e){return C.a.createElement("span",null,e.map(function(e){var t=r[e];return C.a.createElement(P["a"],{color:"blue",key:t},t)}))}},{title:C.a.createElement(T["Trans"],{id:"Operation"}),key:"operation",render:function(t,r){return C.a.createElement(O["a"],{onMenuClick:function(t){return e.handleMenuClick(r,t)},menuOptions:[{key:"1",name:n._("Update")},{key:"2",name:n._("Delete")}]})}}];return C.a.createElement(F["a"],x()({},a,{pagination:s()({},a.pagination,{showTotal:function(e){return n._("Total {total} Items",{total:e})}}),style:{width:"100%"},className:S.a.table,bordered:!0,scroll:{x:!0},columns:o,simple:!0,rowKey:function(e){return e._id}}))}}]),n}(k["PureComponent"]))||a),J=q,Q=(n("y8nQ"),n("Vl3Y")),z=(n("iQDF"),n("+eQT")),Z=(n("5NDa"),n("5rEg")),U=n("wd/R"),H=n.n(U);function W(e){var t=X();return function(){var n,r=R()(e);if(t){var a=R()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return g()(this,n)}}function X(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var G,$,ee,te=Z["a"].Search,ne=z["a"].RangePicker,re={xs:24,sm:12,style:{marginBottom:16}},ae=s()({},re,{xl:96}),oe=(L=Object(T["withI18n"])(),Y=Q["a"].create(),L(A=Y(A=function(e){y()(n,e);var t=W(n);function n(){var e;f()(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return e=t.call.apply(t,[this].concat(a)),e.handleFields=function(e){var t=e.createTime;return t.length&&(e.createTime=[H()(t[0]).format("YYYY-MM-DD hh:mm:ss"),H()(t[1]).format("YYYY-MM-DD hh:mm:ss")]),e},e.handleSubmit=function(){var t=e.props,n=t.onFilterChange,r=t.form,a=r.getFieldsValue,o=a();o=e.handleFields(o),n(o)},e.handleReset=function(){var t=e.props.form,n=t.getFieldsValue,r=t.setFieldsValue,a=n();for(var o in a)({}).hasOwnProperty.call(a,o)&&(a[o]instanceof Array?a[o]=[]:a[o]=void 0);r(a),e.handleSubmit()},e.handleChange=function(t,n){var r=e.props,a=r.form,o=r.onFilterChange,i=a.getFieldsValue,l=i();l[t]=n,l=e.handleFields(l),o(l)},e}return d()(n,[{key:"render",value:function(){var e=this.props,t=e.onAdd,n=e.filter,r=e.form,a=e.i18n,l=r.getFieldDecorator,u=n.roleName,s=[];return n.createTime&&n.createTime[0]&&(s[0]=H()(n.createTime[0])),n.createTime&&n.createTime[1]&&(s[1]=H()(n.createTime[1])),C.a.createElement(o["a"],{gutter:24},C.a.createElement(i["a"],x()({},re,{xl:{span:4},md:{span:8}}),l("RoleName",{initialValue:u||null})(C.a.createElement(te,{placeholder:a._("Search RoleName"),onSearch:this.handleSubmit}))),C.a.createElement(i["a"],x()({},re,{xl:{span:6},md:{span:8},sm:{span:12},id:"createTimeRangePicker"}),C.a.createElement(O["c"],{label:a._("CreateTime")},l("createTime",{initialValue:s})(C.a.createElement(ne,{style:{width:"100%"},onChange:this.handleChange.bind(this,"createTime"),getCalendarContainer:function(){return document.getElementById("createTimeRangePicker")}})))),C.a.createElement(i["a"],x()({},ae,{xl:{span:10},md:{span:24},sm:{span:24}}),C.a.createElement(o["a"],{type:"flex",align:"middle",justify:"space-between"},C.a.createElement("div",null,C.a.createElement(c["a"],{type:"primary",className:"margin-right",onClick:this.handleSubmit},C.a.createElement(T["Trans"],{id:"Search"})),C.a.createElement(c["a"],{onClick:this.handleReset},C.a.createElement(T["Trans"],{id:"Reset"}))),C.a.createElement(c["a"],{type:"ghost",onClick:t},C.a.createElement(T["Trans"],{id:"Create"})))))}}]),n}(k["Component"]))||A)||A),ie=oe,le=(n("OaEy"),n("2fM7")),ce=n("BkRI"),ue=n.n(ce);function se(e){var t=me();return function(){var n,r=R()(e);if(t){var a=R()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return g()(this,n)}}function me(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var fe,pe,de,he=Q["a"].Item,ye={labelCol:{span:6},wrapperCol:{span:14}},ve=(G=Object(T["withI18n"])(),$=Q["a"].create(),G(ee=$(ee=function(e){y()(n,e);var t=se(n);function n(){var e;f()(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return e=t.call.apply(t,[this].concat(a)),e.handleOk=function(){var t=e.props,n=t.item,r=void 0===n?{}:n,a=t.onOk,o=t.form,i=o.validateFields,l=o.getFieldsValue;i(function(e){if(!e){var t=s()({},l()),n=ue()(t);n.permission.indexOf("0")<0&&n.permission.unshift("0"),n._id=r._id,a(n)}})},e}return d()(n,[{key:"render",value:function(){var e=this.props,t=e.item,n=void 0===t?{}:t,r=(e.onOk,e.form),a=e.i18n,o=e.menuList,i=M()(e,["item","onOk","form","i18n","menuList"]),l=r.getFieldDecorator;return C.a.createElement(V["a"],x()({},i,{onOk:this.handleOk}),C.a.createElement(Q["a"],{layout:"horizontal"},C.a.createElement(he,x()({label:a._("RoleName"),hasFeedback:!0},ye),l("roleName",{initialValue:n.roleName,rules:[{required:!0}]})(C.a.createElement(Z["a"],null))),C.a.createElement(he,x()({label:a._("RolePermission"),hasFeedback:!0},ye),l("permission",{initialValue:n.permission?n.permission:[],rules:[{required:!0}]})(C.a.createElement(le["a"],{mode:"multiple",placeholder:"Please select",style:{width:"100%"}},o.map(function(e,t){return C.a.createElement(le["a"].Option,{key:t},e)}))))))}}]),n}(k["PureComponent"]))||ee)||ee),ge=ve;function Ee(e){var t=Re();return function(){var n,r=R()(e);if(t){var a=R()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return g()(this,n)}}function Re(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var ke=(fe=Object(T["withI18n"])(),pe=Object(b["c"])(function(e){var t=e.app,n=e.role,r=e.loading;return{app:t,role:n,loading:r}}),fe(de=pe(de=function(e){y()(n,e);var t=Ee(n);function n(){return f()(this,n),t.apply(this,arguments)}return d()(n,[{key:"render",value:function(){var e=this.props,t=e.location,n=e.dispatch,r=e.role,a=e.loading,u=e.i18n,m=t.query,f=t.pathname,p=r.list,d=r.pagination,h=r.currentItem,y=r.modalVisible,v=r.modalType,g=r.selectedRowKeys,E=r.menuList,R=function(e){w["k"].push({pathname:f,search:Object(I["stringify"])(s()({},m,e),{arrayFormat:"repeat"})})},k={menuList:E,item:"create"===v?{}:h,visible:y,maskClosable:!1,confirmLoading:a.effects["role/".concat(v)],title:"".concat("create"===v?u._("Create Role"):u._("Update Role")),centered:!0,onOk:function(e){n({type:"role/".concat(v),payload:e}).then(function(){R()})},onCancel:function(){n({type:"role/hideModal"})}},b={menuList:E,dataSource:p,loading:a.effects["role/query"],pagination:d,onChange:function(e){R({page:e.current,pageSize:e.pageSize})},onDeleteItem:function(e){n({type:"role/delete",payload:e}).then(function(){R({page:1===p.length&&d.current>1?d.current-1:d.current})})},onEditItem:function(e){n({type:"role/showModal",payload:{modalType:"update",currentItem:e}})},rowSelection:{selectedRowKeys:g,onChange:function(e){n({type:"role/updateState",payload:{selectedRowKeys:e}})}}},T={filter:s()({},m),onFilterChange:function(e){R(s()({},e,{page:1}))},onAdd:function(){n({type:"role/showModal",payload:{modalType:"create"}})}},F=function(){n({type:"role/multiDelete",payload:{_id:g}}).then(function(){R({page:p.length===g.length&&d.current>1?d.current-1:d.current})})};return C.a.createElement(O["f"],{inner:!0},C.a.createElement(ie,T),g.length>0&&C.a.createElement(o["a"],{style:{marginBottom:24,textAlign:"right",fontSize:13}},C.a.createElement(i["a"],null,"Selected ".concat(g.length," items "),C.a.createElement(l["a"],{title:"Are you sure delete these items?",placement:"left",onConfirm:F},C.a.createElement(c["a"],{type:"primary",style:{marginLeft:8}},"Remove")))),C.a.createElement(J,b),y&&C.a.createElement(ge,k))}}]),n}(k["PureComponent"]))||de)||de);t["default"]=ke}}]);