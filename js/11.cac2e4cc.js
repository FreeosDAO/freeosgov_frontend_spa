(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"9a5e":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"q-pa-md"},[s("div",{staticClass:"q-gutter-y-md q-mx-auto",staticStyle:{"max-width":"600px"}},[s("div",{staticClass:"panel-wrap"},[s("q-card",{staticClass:"panel  q-pa-lg"},[s("div",{staticClass:"text-h4 text-center q-ma-lg"},[e._v("Registration")]),s("p",{staticClass:"q-mb-md text-center",staticStyle:{"line-height":"1.4"}},[e._v("\n                    For more info, "),s("a",{attrs:{target:"_blank",title:"Info on registration",href:"https://docs.freeos.io/d/h/6k0z3-408/43bbcca7c54387a/6k0z3-1382"}},[e._v("click here")])]),s("q-checkbox",{attrs:{id:"termsCheckbox"},model:{value:e.termsCheckbox,callback:function(t){e.termsCheckbox=t},expression:"termsCheckbox"}}),s("label",{attrs:{for:"termsCheckbox"}},[e._v("I accept Freeos's "),s("a",{staticClass:"cursor-pointer",staticStyle:{"text-decoration":"underline"},attrs:{target:"_blank",href:"https://www.freedao.io/t-cs"}},[e._v("Terms of Service")])]),s("q-card-actions",{attrs:{align:"center"}},[s("q-btn",{staticClass:"q-mb-m",attrs:{disabled:!e.termsCheckbox,unelevated:"",size:"lg",outline:"",color:"primary"},on:{click:function(t){return e.submit()}}},[e._v("ReRegister")])],1),s("q-card-actions",{attrs:{align:"center"}},[s("q-btn",{staticClass:"q-mb-m",attrs:{disabled:!e.termsCheckbox,unelevated:"",size:"lg",outline:"",color:"primary"},on:{click:function(t){return e.submit()}}},[e._v("Register")])],1)],1),s("CompleteDialog",{ref:"complete"})],1)])])},a=[],c=s("2f62"),o=s("37ca"),i={name:"Re-register",data(){return{termsCheckbox:!1,showTerms:!1}},components:{CompleteDialog:o["a"]},computed:{...Object(c["c"])("freeos",["accountName","XPRBalance","liquidFreeos","isAuthenticated"])},methods:{...Object(c["b"])("freeos",["reregister","register"]),async submit(){var e=await this.reregister();console.log("registerResult",e),e instanceof Error||this.$refs.complete.openDialog({title:"Woohoo!",subtitle:"You have successfully re-registered",text:null,value:null,currency:null,time:3e3,closeFunc:()=>{}})},async register(){var e=await this.register();console.log("registerResult",e),e instanceof Error||this.$refs.complete.openDialog({title:"Woohoo!",subtitle:"You have successfully re-registered",text:null,value:null,currency:null,time:3e3,closeFunc:()=>{}})}}},l=i,n=s("2877"),u=s("f09f"),m=s("8f8e"),d=s("4b7e"),b=s("9c40"),h=s("eebe"),g=s.n(h),p=Object(n["a"])(l,r,a,!1,null,"12a9edc2",null);t["default"]=p.exports;g()(p,"components",{QCard:u["a"],QCheckbox:m["a"],QCardActions:d["a"],QBtn:b["a"]})}}]);