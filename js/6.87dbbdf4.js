(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"11a0":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-center relative"},[s("CompleteDialog",{ref:"complete"}),t.isFreeosEnabled?t._e():s("div",[s("b",[t._v("Freeos system is not currently operational. Please check back later.")])]),t.isFreeosEnabled&&!t.isVerified?s("div",[s("b",[t._v("User not verified. Message goes here.")])]):t._e(),t.isFreeosEnabled?s("div",[s("div",{staticClass:"bg-white panel-wrap panel-top-total q-pa-lg"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col text-left"},[t._m(0),s("p",{staticClass:"text-bold text-h4",staticStyle:{"line-height":"1","letter-spacing":"-2px"}},[t._v(t._s(t.user.pointBalance))]),t._m(1),s("p",{staticClass:"text-bold text-h4",staticStyle:{"line-height":"1","letter-spacing":"-2px"}},[t._v(t._s(t.user.freebiBalance))])]),s("div",{staticClass:"col",staticStyle:{"max-width":"40px"}},[s("router-link",{staticClass:"convert-btn",attrs:{to:"/mint"}},[s("small",[t._v("Mint")]),s("svg",{staticStyle:{"enable-background":"new 0 0 24 24"},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 24 24","xml:space":"preserve"}},[s("path",{attrs:{d:"M14,12.6H1.5c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7H14c0.4,0,0.7,0.3,0.7,0.7C14.7,12.3,14.4,12.6,14,12.6z"}}),s("path",{attrs:{d:"M10.6,16c-0.2,0-0.3-0.1-0.5-0.2c-0.3-0.3-0.3-0.7,0-0.9l3-3l-3-3c-0.3-0.3-0.3-0.7,0-0.9c0.3-0.3,0.7-0.3,0.9,0l3.5,3.5\n                                c0.3,0.3,0.3,0.7,0,0.9L11,15.9C10.9,16,10.7,16,10.6,16z"}}),s("path",{attrs:{d:"M13.2,21.5c-4,0-7.4-2.4-8.9-6.1c-0.1-0.3,0-0.7,0.4-0.8c0.3-0.1,0.7,0,0.8,0.4c1.3,3.2,4.3,5.2,7.7,5.2\n                                c4.5,0,8.3-3.7,8.3-8.3s-3.7-8.3-8.3-8.3c-3.4,0-6.4,2.1-7.7,5.2C5.4,9.2,5,9.4,4.7,9.3C4.3,9.1,4.2,8.8,4.3,8.4\n                                c1.4-3.7,4.9-6.1,8.9-6.1c5.3,0,9.6,4.3,9.6,9.6S18.5,21.5,13.2,21.5z"}})])])],1),s("div",{staticClass:"col text-right"},[t._m(2),s("p",{staticClass:"text-bold text-h4",staticStyle:{"line-height":"1","letter-spacing":"-2px"}},[t._v(t._s(t.user.freeosBalance))])])])]),s("div",{staticClass:"claim-panel bg-white panel-wrap panel-top-total q-pa-lg"},[s("div",{staticClass:"flex justify-between add-custome-width"},[s("div",{staticClass:"flex column text-left",staticStyle:{flex:"1"}},[t._m(3),s("div",{staticClass:"q-mt-xs q-mb-xs text-h5 text-capitalize",staticStyle:{background:"none",border:"none",outline:"none","padding-right":"0","text-align":"left","line-height":"1"}},[s("strong",[t._v(t._s(t.currentIteration))])])]),s("div",{staticClass:"wrap-avatar",class:{"enable-btn":t.eligibleToClaim},attrs:{disabled:t.claimWatch}},[s("div",{staticClass:"avatar claim-btn",on:{click:function(e){return t.startClaim()}}},[s("q-icon",{class:{hide:t.eligibleToClaim},staticStyle:{"margin-top":"-0px","margin-bottom":"2px"},attrs:{size:"md"}},[s("svg",{staticStyle:{"enable-background":"new 0 0 512 512"},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512","xml:space":"preserve"}},[s("path",{attrs:{fill:"#ffffff",d:"M501.362,383.95L320.497,51.474c-29.059-48.921-99.896-48.986-128.994,0L10.647,383.95\n                    c-29.706,49.989,6.259,113.291,64.482,113.291h361.736C495.039,497.241,531.068,433.99,501.362,383.95z M256,437.241\n                    c-16.538,0-30-13.462-30-30c0-16.538,13.462-30,30-30c16.538,0,30,13.462,30,30C286,423.779,272.538,437.241,256,437.241z\n                    M286,317.241c0,16.538-13.462,30-30,30c-16.538,0-30-13.462-30-30v-150c0-16.538,13.462-30,30-30c16.538,0,30,13.462,30,30\n                    V317.241z"}})])]),t._m(4),s("svg",{staticClass:"claim-btn-logo",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 84 84"}},[s("path",{attrs:{d:"M42.1.4C19.1.4.4 19.1.4 42.1s18.7 41.7 41.7 41.7 41.7-18.7 41.7-41.7S65.2.4 42.1.4zM27.3 69c-2.7 0-5.3-1-7.3-2.8C6.7 54 5.8 33.3 18 19.9c6.2-6.7 15-10.5 24.1-10.5 1.7 0 3.4.1 5.1.4h.2c-5.6 2.3-9.7 7.5-10.6 13.5-.1.6-.2 1.3-.2 1.9v1.2c-.1 4.1.1 8.2.6 12.3l-10.6 3.9c-.7.3-1.1 1.1-.8 1.8l.5 1.2c1.4 4 5.8 6 9.8 4.6.4-.2.9-.4 1.3-.6l1-.6.3-.2v.4c.2 3 .1 6-.2 9h-.1c0 .3 0 .6-.1 1-.1.6-.2 1.2-.4 1.8-1.4 4.8-5.7 8-10.6 8zm14.8 5.9c-1.8 0-3.7-.2-5.5-.5 6-2.5 10.1-8 10.8-14.5.7-5.4.7-10.9-.1-16.3l10.8-6.4c1.2-.7 1.7-2.2 1.2-3.5l-.1-.3c-.5-1.4-2-2.1-3.4-1.6l-9.5 3.6-.2.1v-.1c-.4-2.8-.5-5.7-.4-8.5.4-8.3 5.3-11.7 11.3-11.6 2.5.1 4.8.9 6.8 2.4.5.4.9.8 1.4 1.3 12.8 12.6 12.9 33.3.2 46.2-6.2 6.2-14.5 9.7-23.3 9.7z",fill:"#ffffff"}})])],1)]),s("div",{staticClass:"flex column text-right",staticStyle:{flex:"1"}},[t._m(5),s("div",{staticClass:"text-h5 q-mt-xs q-mb-xs",staticStyle:{background:"none",border:"none",outline:"none","padding-right":"0","text-align":"right","line-height":"1"}},[s("span",{domProps:{innerHTML:t._s(t.$options.filters.secondsToDhms(t.nextClaimIn))}})])])]),s("div",{staticClass:"flex justify-center text-center q-mt-lg",staticStyle:{"align-items":"center"}},[t.eligibleToClaim?t._e():s("div",{staticClass:"full-width q-mb-sm"},[t._v("Please participate in the voting process to claim.")]),t.nextActivity.type?s("div",[s("div",{staticClass:"text-h6 text-primary"},[s("b",{domProps:{innerHTML:t._s(t.nextActivity.message)}})]),s("q-btn",{staticClass:"q-mt-sm q-mb-lg full-width",attrs:{unelevated:"","no-caps":"",size:"lg",color:"primary"},on:{click:function(e){return e.preventDefault(),t.goToActivities()}}},[s("span",[t._v("Go to this week's "),s("span",{domProps:{innerHTML:t._s(t.nextActivity.type)}})])])],1):t._e(),s("div",{staticClass:"flex"},[s("small",{staticClass:"q-mr-auto"},[t._v("\n                        For more info on Claiming\n                        "),s("router-link",{attrs:{to:"/info#claiming"}},[t._v("click here")])],1)])])]),s("div",{staticClass:"q-px-md"},[s("balance")],1)]):t._e()],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"q-mb-xs",staticStyle:{"line-height":"1"}},[s("small",[t._v("POINTS")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"q-mb-xs q-mt-lg",staticStyle:{"line-height":"1"}},[s("small",[t._v("FREEBI")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"q-mb-xs",staticStyle:{"line-height":"1"}},[s("small",[t._v("FREEOS")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"q-mt-xs q-mb-xs"},[s("small",[t._v("Iteration")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"claim-text"},[s("h4",{staticStyle:{"line-height":"1",margin:"0"}},[t._v("CLAIM")]),s("p",{staticStyle:{"line-height":"1",margin:"0"}},[s("small",{staticStyle:{"font-size":"90%"}},[t._v("\n                                    Your Freeos\n                                    "),s("br"),t._v("\n                                    Points\n                                ")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"q-mt-xs q-mb-xs"},[s("small",[t._v("Next Claim")])])}],l=s("2f62"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"balance bg-white panel-wrap panel-top-total q-pa-lg q-mt-lg"},[s("div",{staticClass:"flex justify-between q-mb-md"},[s("div",{staticClass:"flex items-center  text-h5"},[t._v("\n               Locked Points:\n            ")]),s("div",{staticClass:"col-5 text-h5"},[t._v(t._s(t.user.lockedBalance||"0"))])]),s("div",{staticClass:"flex"},[s("small",{staticClass:"q-mr-auto"},[t._v("For more info on Locked Points "),s("router-link",{attrs:{to:"/info#vested-options"}},[t._v("click here")])],1)]),t.systemRow.unlockpercent>0?s("q-btn",{staticClass:"q-mt-lg",attrs:{disabled:t.user.record.last_unlock==t.currentIteration,unelevated:"","no-caps":"",size:"lg",outline:"",color:"primary"},on:{click:function(e){return t.submit()}}},[s("span",[t._v("Unlock"),s("span",[t._v(" "+t._s(t.systemRow.unlockpercent||0)+"%")])])]):t._e(),s("CompleteDialog",{ref:"complete"})],1)])},c=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-5 text-grey"},[t._v("Vested FREEOS: ")]),s("div",{staticClass:"col-5 text-grey text-weight-bold"},[t._v(t._s(t.vestedOptions))]),t.canUnvest?s("div",{staticClass:"col-2"},[s("q-btn",{attrs:{size:"sm",label:"Unvest",color:"primary","no-caps":""}})],1):t._e()])},r=[],m={computed:{...Object(l["d"])("freeos",["vestedOptions","canUnvest"])},methods:{...Object(l["b"])({})},mounted(){}},p=m,u=s("2877"),v=s("9c40"),d=s("eebe"),h=s.n(d),f=Object(u["a"])(p,o,r,!1,null,null,null),x=f.exports;h()(f,"components",{QBtn:v["a"]});var g=s("37ca"),b={computed:{...Object(l["c"])("freeos",["user","systemRow","currentIteration","accountName"]),unlockedAmount:function(){var t=this.user.lockedBalance&&this.systemRow.unlockpercent?Math.ceil(this.systemRow.unlockpercent/100*this.user.lockedBalance):0;return t}},methods:{...Object(l["b"])("freeos",["unlock"]),async submit(){var t=await this.unlock();t instanceof Error||this.$refs.complete.openDialog({title:"Unlocked",subtitle:"You Unlocked",value:this.unlockedAmount,currency:"Points"})}},components:{BalanceVest:x,CompleteDialog:g["a"]}},_=b,C=(s("c5e1"),s("05c0")),w=Object(u["a"])(_,n,c,!1,null,"3fd65064",null),y=w.exports;h()(w,"components",{QBtn:v["a"],QTooltip:C["a"]});var k={name:"Claim",data(){return{claimWatch:null}},components:{Balance:y,CompleteDialog:g["a"]},computed:{...Object(l["c"])("freeos",["isFreeosEnabled","isVerified","user","accountType","nextClaimIn","currentIteration","eligibleToClaim","nextActivity","accountName"])},methods:{...Object(l["b"])("freeos",["fetch","claim"]),async goToActivities(){this.$router.push({path:"/activities"})},async startClaim(){if(this.eligibleToClaim){const a=this;this.claimWatch=!0;var t=this.user.pointBalance,e=await a.claim();if(!(e instanceof Error)){var s=this.user.pointBalance;console.warn("currentPointBalance",t),console.warn("newPointsBalance",s),this.$refs.complete.openDialog({title:"Woohoo",subtitle:"Your claim is being processed.",value:null,currency:null})}this.claimWatch=!1}}},mounted(){}},q=k,S=(s("e794"),s("0016")),E=s("b498"),B=Object(u["a"])(q,a,i,!1,null,null,null);e["default"]=B.exports;h()(B,"components",{QIcon:S["a"],QBtn:v["a"],QColor:E["a"]})},"57c1":function(t,e,s){},"58f0":function(t,e,s){},c5e1:function(t,e,s){"use strict";s("58f0")},e794:function(t,e,s){"use strict";s("57c1")}}]);