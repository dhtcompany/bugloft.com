(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{iNDe:function(e,t,a){"use strict";a.r(t);var n=a("p0pE"),r=a.n(n),s=a("d6i3"),c=a.n(s),u=a("GIZZ"),i=a.n(u),o=a("7Qib"),l=a("3eXy"),p=a("3Unq"),d=l["a"].queryRoleList,w=l["a"].createRole,f=l["a"].removeRole,m=l["a"].updateRole;t["default"]=i()(p["a"],{namespace:"role",state:{currentItem:{},menuList:["panel","User Management","Role Management","Classification management","Theme management","Comment management"],modalVisible:!1,modalType:"create",selectedRowKeys:[]},subscriptions:{setup:function(e){var t=e.dispatch,a=e.history;a.listen(function(e){if(Object(o["g"])("/role",e.pathname)){var a=e.query||{page:1,pageSize:10};t({type:"query",payload:a})}})}},effects:{query:c.a.mark(function e(t,a){var n,r,s,u,i,o;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=void 0===n?{}:n,s=a.call,u=a.put,e.next=4,s(d,r);case 4:if(i=e.sent,o=i.data,!o){e.next=9;break}return e.next=9,u({type:"querySuccess",payload:{list:o.list,pagination:{current:Number(r.page)||1,pageSize:Number(r.pageSize)||10,total:o.total}}});case 9:case"end":return e.stop()}},e)}),delete:c.a.mark(function e(t,a){var n,r,s,u,i,o,l;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,s=a.put,u=a.select,e.next=4,r(f,{_id:n});case 4:return i=e.sent,e.next=7,u(function(e){return e.role});case 7:if(o=e.sent,l=o.selectedRowKeys,!i.success){e.next=14;break}return e.next=12,s({type:"updateState",payload:{selectedRowKeys:l.filter(function(e){return e!==n})}});case 12:e.next=15;break;case 14:throw i;case 15:case"end":return e.stop()}},e)}),multiDelete:c.a.mark(function e(t,a){var n,r,s,u;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,s=a.put,e.next=4,r(f,n);case 4:if(u=e.sent,!u.success){e.next=10;break}return e.next=8,s({type:"updateState",payload:{selectedRowKeys:[]}});case 8:e.next=11;break;case 10:throw u;case 11:case"end":return e.stop()}},e)}),create:c.a.mark(function e(t,a){var n,r,s,u;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,s=a.put,e.next=4,r(w,n);case 4:if(u=e.sent,!u.success){e.next=10;break}return e.next=8,s({type:"hideModal"});case 8:e.next=11;break;case 10:throw u;case 11:case"end":return e.stop()}},e)}),update:c.a.mark(function e(t,a){var n,s,u,i,o,l,p;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,s=a.select,u=a.call,i=a.put,e.next=4,s(function(e){var t=e.role;return t.currentItem.id});case 4:return o=e.sent,l=r()({},n,{id:o}),e.next=8,u(m,l);case 8:if(p=e.sent,!p.success){e.next=14;break}return e.next=12,i({type:"hideModal"});case 12:e.next=15;break;case 14:throw p;case 15:case"end":return e.stop()}},e)})},reducers:{showModal:function(e,t){var a=t.payload;return r()({},e,a,{modalVisible:!0})},hideModal:function(e){return r()({},e,{modalVisible:!1})}}})}}]);