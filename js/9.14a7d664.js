(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"3afb":function(t,e,s){"use strict";(function(t){var n=s("2f62"),i=(s("3f9b"),s("37ca"));e["a"]={name:"ConvertOptions",components:{CompleteDialog:i["a"]},data(){return{sendAmount:null,tokenCurrencyName:this.$options.filters.capitalize(t.env.TOKEN_CURRENCY_NAME),stakeCurrency:t.env.STAKING_CURRENCY,currencyName:"FREEOS",convertWatch:!1}},computed:{...Object(n["c"])("freeos",["liquidOptions","isAuthenticated","accountName"])},methods:{...Object(n["b"])("freeos",["convertOptions"]),async submit(){this.convertWatch=!0;var e=await this.convertOptions({owner:this.accountName,quantity:`${parseFloat(this.sendAmount).toFixed("4")} ${t.env.TOKEN_CURRENCY_NAME}`});e instanceof Error||this.$refs.complete.openDialog({title:"Woohoo!",subtitle:"You minted",value:this.sendAmount,currency:"FREEOS"}),console.log("resultR",e),this.convertWatch=!1,this.resetForm()},resetForm(){this.sendAmount=null}}}}).call(this,s("4362"))},b8c1:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"q-pa-md"},[s("CompleteDialog",{ref:"complete"}),s("div",{staticClass:"q-gutter-y-md q-mx-auto",staticStyle:{"max-width":"600px"}},[s("div",{staticClass:"panel-wrap"},[s("q-card",{staticClass:"panel q-pa-lg"},[s("div",{staticClass:"text-h4 text-center q-ma-lg"},[t._v("Mint Your "+t._s(t.currencyName))]),s("p",{staticClass:"text-center text-subtitle1 q-mb-xs"},[t._v("Mint your "+t._s(t.tokenCurrencyName)+"s into "+t._s(t.currencyName)+".")]),s("p",{staticClass:"text-center text-negative q-mb-sm"},[t._v("This could be a Taxable event in your jurisdiction")]),s("p",{staticClass:"q-mb-md text-center",staticStyle:{"line-height":"1.4"}},[t._v("\n          For more info,\n          "),s("router-link",{attrs:{to:"/info#mint"}},[t._v("click here")])],1),s("div",{staticClass:"panel panel-strong q-pa-lg text-center q-mb-lg q-pa-lg"},[s("p",{staticClass:"q-mb-sm text-subtitle1",staticStyle:{"line-height":"1.2"}},[s("strong",[t._v("You currently have")])]),s("h4",{staticClass:"text-h4 q-ma-xs",staticStyle:{"line-height":"1"}},[t._v(t._s(t.liquidOptions))]),s("p",{staticClass:"q-ma-xs",staticStyle:{"line-height":"1"}},[s("strong",[t._v(t._s(t.tokenCurrencyName)+"s")])])]),s("div",{staticClass:"row justify-center q-mb-md q-pb-xs",staticStyle:{"align-items":"center"}},[s("div",{staticClass:"col-xs-6 col-sm-5"},[t._v("Amount to mint:")]),s("div",{staticClass:"col-xs-1"}),s("div",{staticClass:"col-xs-5 col-sm-6"},[s("label",{staticClass:"q-field row no-wrap items-start q-input q-field--outlined q-field--dense q-validation-component",attrs:{"data-v-052b630f":"",for:"f_6eee53df-da8d-4f65-9fad-d55fd4c1e7e7"}},[s("div",{staticClass:"q-field__inner relative-position col self-stretch"},[s("div",{staticClass:"q-field__control relative-position row no-wrap",attrs:{tabindex:"-1"}},[s("div",{staticClass:"q-field__control-container col relative-position row no-wrap q-anchor--skip max-btn-holder"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.sendAmount,expression:"sendAmount"}],staticClass:"q-field__native q-placeholder",attrs:{tabindex:"0",required:"required",id:"f_6eee53df-da8d-4f65-9fad-d55fd4c1e7e7",type:"number"},domProps:{value:t.sendAmount},on:{input:function(e){e.target.composing||(t.sendAmount=e.target.value)}}}),t.isAuthenticated?s("q-btn",{staticClass:"max-btn",attrs:{size:"sm",unelevated:"","no-caps":"",outline:"",color:"secondary"},on:{click:function(e){t.sendAmount=t.liquidOptions}}},[t._v("Max")]):t._e()],1)])])])])]),s("div",{staticClass:"row justify-center q-mb-md q-pb-none",staticStyle:{"align-items":"center"}},[t.isAuthenticated?s("q-btn",{attrs:{size:"lg",unelevated:"","no-caps":"",outline:"",disable:!t.sendAmount||t.sendAmount>t.liquidOptions||t.convertWatch,color:"primary"},on:{click:function(e){return t.submit()}}},[t._v("Mint to "+t._s(t.currencyName))]):t._e()],1)])],1)])],1)},i=[],a=s("3afb"),o=a["a"],c=s("2877"),l=s("f09f"),r=s("8572"),d=s("27f9"),u=s("9c40"),m=s("eebe"),p=s.n(m),v=Object(c["a"])(o,n,i,!1,null,"7542247e",null);e["default"]=v.exports;p()(v,"components",{QCard:l["a"],QField:r["a"],QInput:d["a"],QBtn:u["a"]})}}]);