(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{4693:function(t,e,s){},afaa:function(t,e,s){"use strict";s("4693")},f1da:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"q-pa-sm"},[s("CompleteDialog",{ref:"complete"}),t.isFreeosEnabled?s("div",{staticClass:"panel-wrap panel bg-white"},[s("h4",{staticClass:"q-mb-lg q-mt-lg text-center"},[t._v("Mint")]),s("div",{staticClass:"flex justify-center",staticStyle:{"flex-direction":"row"}},[s("q-btn",{staticClass:"tab-btn",class:{"tab-btn--unselected":!t.isMintTabSelected},attrs:{outline:"",unelevated:"","no-caps":""},on:{click:function(e){t.isMintTabSelected=!t.isMintTabSelected}}},[t._v("Mint "+t._s(t.currencies.freeos))]),s("q-btn",{staticClass:"tab-btn",class:{"tab-btn--unselected":t.isMintTabSelected},attrs:{outline:"",unelevated:"","no-caps":""},on:{click:function(e){t.isMintTabSelected=!t.isMintTabSelected}}},[t._v("Mint "+t._s(t.currencies.freebi))])],1),t.isMintTabSelected?s("section",[s("p",{staticClass:"bg-primary text-h5 text-center text-white q-py-md"},[t._v("\n        This could be a taxable event in your jurisdiction\n      ")]),s("p",{staticClass:"q-py-md q-px-lg"},[t._v("The Mint Fee applies when you mint your ‘Claimed "+t._s(t.currencies.point)+"S’ or "+t._s(t.currencies.freebi)+" into a tradable\n        token ("+t._s(t.currencies.freeos)+").\n        For more info "),s("a",{attrs:{target:"_blank",title:"Minting FREEOS",href:"https://docs.freeos.io/d/h/6k0z3-408/43bbcca7c54387a/6k0z3-1562"}},[t._v(" click here.")])]),s("section",{staticClass:"q-ma-md panel"},[s("div",{staticClass:"text-primary text-subtitle1 text-bold text-center q-pa-sm"},[t._v("Your Current balances:")]),s("div",{staticClass:"balance-list"},[s("div",{staticClass:"q-mb-sm q-mr-xs q-ml-xs bg-info text-center"},[s("div",{staticClass:"text-bold text-subtitle1 font-bold",staticStyle:{"line-height":"1"}},[s("AbbreviateNumber",{attrs:{value:t.user.pointBalance}})],1),s("div",{staticClass:"text-bold text-primary"},[t._v(t._s(t.currencies.point))])]),s("div",{staticClass:"q-mb-sm q-mr-xs q-ml-xs bg-info text-center"},[s("div",{staticClass:"text-bold text-subtitle1 font-bold",staticStyle:{"line-height":"1"}},[s("AbbreviateNumber",{attrs:{value:t.user.freebiBalance}})],1),s("div",{staticClass:"text-bold text-primary"},[t._v(t._s(t.currencies.freebi))])]),s("div",{staticClass:"q-mb-sm q-mr-xs q-ml-xs bg-info text-center"},[s("div",{staticClass:"text-bold text-subtitle1 font-bold",staticStyle:{"line-height":"1"}},[s("AbbreviateNumber",{attrs:{value:t.user.freeosBalance}})],1),s("div",{staticClass:"text-bold text-primary"},[t._v(t._s(t.currencies.freeos))])]),s("div",{staticClass:"q-mb-sm q-mr-xs q-ml-xs bg-info text-center"},[s("div",{staticClass:"text-bold text-subtitle1 font-bold",staticStyle:{"line-height":"1"}},[s("AbbreviateNumber",{attrs:{value:t.user.XPRBalance}})],1),s("div",{staticClass:"text-bold text-primary"},[t._v(t._s(t.currencies.xpr))])]),t.user.XUSDCBalance?s("div",{staticClass:"q-mb-sm q-mr-xs q-ml-xs bg-info text-center"},[s("div",{staticClass:"text-bold text-subtitle1 font-bold",staticStyle:{"line-height":"1"}},[s("AbbreviateNumber",{attrs:{value:t.user.XUSDCBalance}})],1),s("div",{staticClass:"text-bold text-primary"},[t._v(t._s(t.currencies.xusdc))])]):t._e()]),t.user.mffBalance>0?s("div",[s("hr",{staticClass:"q-mb-none"}),s("div",{staticClass:"text-primary text-subtitle1 text-bold text-center q-pa-sm"},[t._v("AirClaim Allowance balance:")]),s("div",{staticClass:"balance-list"},[s("div",{staticClass:"q-mb-sm q-mr-xs q-ml-xs bg-info text-center"},[s("div",{staticClass:"text-bold text-subtitle1 font-bold",staticStyle:{"line-height":"1"}},[s("AbbreviateNumber",{attrs:{value:t.user.mffBalance}})],1),s("div",{staticClass:"text-bold text-primary"},[t._v("of your "+t._s(t.currencies.point)+"S")])])])]):t._e()]),s("section",{staticClass:"q-ma-md panel"},[s("div",{staticClass:"q-mt-sm text-primary text-subtitle1 text-bold text-center v q-pb-none"},[t._v("Mint Fee Details:")]),s("div",{staticClass:"text-bold text-center q-mt-none q-pt-none q-pb-sm"},[s("span",{staticClass:"q-pr-sm"},[t._v(t._s(t.currencies.freeos)+" = "+t._s(t._f("roundTo4Decimal")(t.rewardsPrevious["mint_fee_percent"]))+"%")]),s("span",{staticClass:"q-px-xs"},[t._v(t._s(t.currencies.xpr)+" = "+t._s(t._f("roundTo4Decimal")(t.rewardsPrevious["mint_fee_percent_xpr"]))+"%")]),s("span",{staticClass:"q-pl-sm"},[t._v(t._s(t.currencies.xusdc)+" = "+t._s(t._f("roundTo4Decimal")(t.rewardsPrevious["mint_fee_percent_xusdc"]))+"%")])]),s("div",{staticClass:"bg-info text-center"},[s("div",{staticClass:"text-primary text-bold q-pt-sm q-pb-none"},[t._v("Minimum Mint Fee")]),s("div",{staticClass:"text-subtitle2 q-mt-none q-pt-xs"},[s("strong",[t._v(t._s(t._f("roundTo4Decimal")(t.mintFeeMin))+" "+t._s(t.currencies.freeos))])]),s("div",{staticClass:"text-subtitle2 q-mt-none"},[s("small",{staticClass:"q-pr-sm"},[t._v("or")]),s("strong",[t._v(t._s(t._f("roundTo4Decimal")(t.xprMinMintfee))+" "+t._s(t.currencies.xpr))])]),s("div",{staticClass:"text-subtitle2 q-mt-none q-pb-md"},[s("small",{staticClass:"q-pr-sm"},[t._v("or")]),s("strong",[t._v(t._s(t._f("roundTo6Decimal")(t.usdMinMintfee))+" "+t._s(t.currencies.xusdc))])])]),this.user.hasNFT?s("div",{staticClass:"bg-primary text-center text-white q-py-md"},[s("div",{staticClass:"text-bold q-pb-none"},[t._v("You have a FREEDAO NFT")]),t._m(0)]):t._e()]),s("section",{staticClass:"q-ma-md panel"},[s("div",{staticClass:"text-primary text-subtitle1 text-bold text-center q-pa-sm"},[t._v("Create a MINT Transaction")]),s("div",{staticClass:"bg-info q-pa-md"},[s("div",{staticClass:"row justify-center q-mb-sm q-pb-xs"},[t._m(1),s("div",{staticClass:"col-xs-6 col-sm-6"},[s("q-select",{attrs:{label:"Select","option-value":"value","option-label":"label","option-disable":"disabled","emit-value":"",required:"",dense:"",outlined:"",options:t.balOptions},on:{input:function(e){t.submitData.quantity=0,t.submitData.pay=null}},model:{value:t.submitData.from,callback:function(e){t.$set(t.submitData,"from",e)},expression:"submitData.from"}})],1)]),t.submitData.from===t.currencies.point?s("div",{staticClass:"row justify-center q-mb-md q-pb-xs"},[s("div",{staticClass:"col-xs-6 col-sm-5"},[s("p",{staticClass:"q-mt-none q-mb-none"},[s("small",{staticClass:"text-bold text-primary"},[t._v("Your Available "+t._s(t.currencies.point)+"S\n                  Balance:")])])]),s("div",{staticClass:"col-xs-6 col-sm-6"},[s("p",{staticClass:"q-mt-none q-mb-none text-primary text-bold"},[t._v(t._s(t.user.pointBalance))])])]):t._e(),t.submitData.from===t.currencies.freebi?s("div",{staticClass:"row justify-center q-mb-md q-pb-xs"},[s("div",{staticClass:"col-xs-6 col-sm-5"},[s("p",{staticClass:"q-mt-none q-mb-none"},[s("small",{staticClass:"text-bold text-primary"},[t._v("Your Available "+t._s(t.currencies.freebi)+"\n                  Balance:")])])]),s("div",{staticClass:"col-xs-6 col-sm-6"},[s("p",{staticClass:"q-mt-none q-mb-none text-primary text-bold"},[t._v(t._s(t.user.freebiBalance))])])]):t._e(),s("div",{staticClass:"row justify-center q-mb-sm q-pb-xs"},[s("div",{staticClass:"col-xs-6 col-sm-5"},[s("div",{staticClass:"q-mt-xs",staticStyle:{"line-height":"1"}},[s("small",{staticClass:"text-bold"},[t._v("2. Amount to\n                  Mint:")]),s("br"),s("small",{staticStyle:{"font-style":"italic"}},[t._v("from account '"+t._s(this.accountName)+"'")])])]),s("div",{staticClass:"col-xs-6 col-sm-6"},[s("label",{staticClass:"q-field row no-wrap items-start q-input q-field--outlined q-field--dense q-validation-component",attrs:{"data-v-052b630f":"",for:"f_8b8778e2-d74d-4d9f-8e69-cd43d21fcac5"}},[s("div",{staticClass:"q-field__inner relative-position col self-stretch"},[s("div",{staticClass:"q-field__control relative-position row no-wrap",attrs:{tabindex:"-1"}},[s("div",{staticClass:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.submitData.quantity,expression:"submitData.quantity"}],staticClass:"q-field__native q-placeholder",attrs:{tabindex:"0",required:"required",id:"f_8b8778e2-d74d-4d9f-8e69-cd43d21fcac5",type:"number"},domProps:{value:t.submitData.quantity},on:{input:function(e){e.target.composing||t.$set(t.submitData,"quantity",e.target.value)}}}),s("q-btn",{staticClass:"max-btn",attrs:{disabled:!t.submitData.from,size:"sm",unelevated:"","no-caps":"",color:"secondary"},on:{click:function(e){return t.setMintMaxAmount()}}},[t._v("Max\n                      ")])],1)])])])])]),"AIRCLAIM ALLOWANCE"!==t.submitData.from?s("div",{staticClass:"row justify-center q-mb-sm q-pb-xs"},[t._m(2),s("div",{staticClass:"col-xs-6 col-sm-6"},[s("q-select",{attrs:{label:"Select","option-value":"value","option-label":"label","option-disable":"disabled","emit-value":"",required:"",dense:"",outlined:"",options:t.mintFeeOptions},model:{value:t.submitData.pay,callback:function(e){t.$set(t.submitData,"pay",e)},expression:"submitData.pay"}})],1)]):t._e(),s("hr"),t.submitData.from&&(t.submitData.pay||"AIRCLAIM ALLOWANCE"===t.submitData.from)&&t.submitData.quantity>0&&t.submitData.quantity<=t.mintMaxAmount?s("div",[this.user.hasNFT?t._e():s("div",[t._m(3),s("div",{staticClass:"row justify-center"},[t._m(4),t.submitData.pay!==t.currencies.xusdc?s("div",{staticClass:"col-xs-6 col-sm-6"},[s("p",{staticClass:"q-mt-xs q-mb-none text-bold"},[t._v(t._s(t._f("roundTo4Decimal")(t.finalMintFeeFreeos))+" "+t._s(t.submitData.pay)+"\n                  ")])]):t._e(),t.submitData.pay===t.currencies.xusdc?s("div",{staticClass:"col-xs-6 col-sm-6"},[s("p",{staticClass:"q-mt-xs q-mb-none text-bold"},[t._v(t._s(t._f("roundTo6Decimal")(t.finalMintFeeFreeos))+" "+t._s(t.submitData.pay)+"\n                  ")])]):t._e()])]),t.user.mffBalance>0&&"AIRCLAIM ALLOWANCE"===t.submitData.pay?s("div",{staticClass:"row justify-center"},[t._m(5),s("div",{staticClass:"col-xs-6 col-sm-6"},[s("p",{staticClass:"q-mt-xs q-mb-none text-bold"},[t._v(t._s(t._f("roundTo4Decimal")(t.mintFeeFreePointsUsed))+" "+t._s(t.currencies.point)+"S")])])]):t._e(),t.user.mffBalance>0&&"AIRCLAIM ALLOWANCE"===t.submitData.pay?s("div",{staticClass:"row justify-center"},[t._m(6),s("div",{staticClass:"col-xs-6 col-sm-6"},[s("p",{staticClass:"q-mt-xs q-mb-none text-bold"},[t._v(t._s(t._f("roundTo4Decimal")(t.user.mffBalance))+" "+t._s(t.currencies.point)+"S")])])]):t._e(),t.showMintFeeError?t._e():s("div",{staticClass:"q-mt-md text-primary text-bold"},[s("small",[t._v("Expected Transaction Balances:")])]),t.showMintFeeError||t.submitData.from===t.currencies.freebi?t._e():s("div",{staticClass:"row justify-center"},[s("div",{staticClass:"col-xs-6 col-sm-5"},[s("p",{staticClass:"q-mt-xs q-mb-none"},[s("small",{staticClass:"text-bold"},[t._v(t._s(t.currencies.point)+"S balance:")])])]),s("div",{staticClass:"col-xs-6 col-sm-6"},[s("p",{staticClass:"q-mt-xs q-mb-none text-bold"},[t._v(t._s(t._f("roundTo4Decimal")(t.user.pointBalance-parseFloat(t.submitData.quantity)))+" "+t._s(t.currencies.point)+"S")])])]),t.showMintFeeError||t.submitData.from!==t.currencies.freebi?t._e():s("div",{staticClass:"row justify-center"},[s("div",{staticClass:"col-xs-6 col-sm-5"},[s("p",{staticClass:"q-mt-xs q-mb-none"},[s("small",{staticClass:"text-bold"},[t._v(t._s(t.currencies.freebi)+" balance:")])])]),s("div",{staticClass:"col-xs-6 col-sm-6"},[s("p",{staticClass:"q-mt-xs q-mb-none text-bold"},[t._v(t._s(t._f("roundTo4Decimal")(t.user.freebiBalance-parseFloat(t.submitData.quantity)))+" "+t._s(t.currencies.freebi))])])]),t.showMintFeeError||t.submitData.pay!==t.currencies.xpr?t._e():s("div",{staticClass:"row justify-center"},[s("div",{staticClass:"col-xs-6 col-sm-5"},[s("p",{staticClass:"q-mt-xs q-mb-none"},[s("small",{staticClass:"text-bold"},[t._v(t._s(t.currencies.xpr)+" balance:")])])]),s("div",{staticClass:"col-xs-6 col-sm-6"},[s("p",{staticClass:"q-mt-xs q-mb-none text-bold"},[t._v(t._s(t._f("roundTo4Decimal")(parseFloat(t.user.XPRBalance-t.finalMintFeeFreeos)))+" "+t._s(t.currencies.xpr))])])]),t.showMintFeeError||t.submitData.pay!==t.currencies.xusdc?t._e():s("div",{staticClass:"row justify-center"},[s("div",{staticClass:"col-xs-6 col-sm-5"},[s("p",{staticClass:"q-mt-xs q-mb-none"},[s("small",{staticClass:"text-bold"},[t._v(t._s(t.currencies.xusdc)+" balance:")])])]),s("div",{staticClass:"col-xs-6 col-sm-6"},[s("p",{staticClass:"q-mt-xs q-mb-none text-bold"},[t._v(t._s(t._f("roundTo6Decimal")(parseFloat(t.user.XUSDCBalance-t.finalMintFeeFreeos)))+" "+t._s(t.currencies.xusdc))])])]),!t.showMintFeeError&&t.user.mffBalance>0&&"AIRCLAIM ALLOWANCE"===t.submitData.pay?s("div",{staticClass:"row justify-center"},[t._m(7),s("div",{staticClass:"col-xs-6 col-sm-6"},[s("p",{staticClass:"q-mt-xs q-mb-none text-bold"},[t._v(t._s(t._f("roundTo4Decimal")(parseFloat(t.user.mffBalance-t.mintFeeFreePointsUsed)))+" "+t._s(t.currencies.point)+"S")])])]):t._e(),s("div",{staticClass:"row justify-center"},[s("div",{staticClass:"col-xs-6 col-sm-5"},[s("p",{staticClass:"q-mt-xs q-mb-none"},[s("small",{staticClass:"text-bold"},[t._v(t._s(t.currencies.freeos)+" balance:")])])]),s("div",{staticClass:"col-xs-6 col-sm-6"},[s("p",{staticClass:"q-mt-xs q-mb-none text-bold",class:{"text-negative":t.freeosBalance<0},attrs:{"text-negative":""}},[t._v(t._s(t._f("roundTo4Decimal")(t.freeosBalance))+" "+t._s(t.currencies.freeos))])])])]):t._e(),t.showMintFeeError?s("div",{staticClass:"text-negative text-center q-mt-md"},[s("strong",[t._v("You do not have enough to\n              complete the transaction")])]):t._e(),s("div",{staticClass:"row justify-center q-mt-lg ",staticStyle:{"align-items":"center"}},[s("q-btn",{staticClass:"full-width",attrs:{disabled:t.disableMintFeeButton,size:"xl",unelevated:"","no-caps":"",color:"primary"},on:{click:function(e){return t.mintSubmit()}}},[t._v("\n              Mint "+t._s(t.currencies.freeos))])],1)])])]):t._e(),t.isMintTabSelected?t._e():s("section",[s("p",{staticClass:"bg-primary text-h5 text-center text-white q-py-md"},[t._v("\n        Mint "+t._s(t.currencies.point)+"S to "+t._s(t.currencies.freebi)+"\n      ")]),s("p",{staticClass:"q-py-md q-px-lg"},[t._v(t._s(t.currencies.freebi)+" is our internal trading token within the community and isn't subject to a Mint\n        Fee. The "+t._s(t.currencies.freebi)+" tokens exist as a way for participants to have a limited, but tradable, token that can be used\n        for Peer-to-Peer activities, while protecting the "+t._s(t.currencies.freeos)+" token's circulating supply. For more info "),s("a",{attrs:{href:"https://docs.freeos.io/d/h/6k0z3-408/43bbcca7c54387a/6k0z3-1582",target:"_blank"}},[t._v("click\n          here.")])]),s("section",{staticClass:"q-ma-md panel"},[s("div",{staticClass:"text-primary text-subtitle1 text-bold text-center q-pa-sm"},[t._v("Your current balances:")]),s("div",{staticClass:"balance-list"},[s("div",{staticClass:"q-mb-sm q-mr-xs q-ml-xs bg-info text-center"},[s("div",{staticClass:"text-bold text-subtitle1 font-bold",staticStyle:{"line-height":"1"}},[s("AbbreviateNumber",{attrs:{value:t.user.pointBalance}})],1),s("div",{staticClass:"text-bold text-primary"},[t._v(t._s(t.currencies.point))])]),s("div",{staticClass:"q-mb-sm q-mr-xs q-ml-xs bg-info text-center"},[s("div",{staticClass:"text-bold text-subtitle1 font-bold",staticStyle:{"line-height":"1"}},[s("AbbreviateNumber",{attrs:{value:t.user.freebiBalance}})],1),s("div",{staticClass:"text-bold text-primary"},[t._v(t._s(t.currencies.freebi))])]),s("div",{staticClass:"q-mb-sm q-mr-xs q-ml-xs bg-info text-center"},[s("div",{staticClass:"text-bold text-subtitle1 font-bold",staticStyle:{"line-height":"1"}},[s("AbbreviateNumber",{attrs:{value:t.user.freeosBalance}})],1),s("div",{staticClass:"text-bold text-primary"},[t._v(t._s(t.currencies.freeos))])])])]),s("section",{staticClass:"q-ma-md"},[s("GetVerified",{attrs:{message:"You must be verified to mint FREEBI"}})],1),t.isVerified?s("section",{staticClass:"q-ma-md panel"},[s("div",{staticClass:"text-primary text-subtitle1 text-bold text-center q-pa-sm"},[t._v("Mint Your "+t._s(t.currencies.point)+"S to "+t._s(t.currencies.freebi))]),s("div",{staticClass:"bg-info q-pa-md"},[s("div",{staticClass:"row justify-center q-mb-sm q-pb-xs"},[s("div",{staticClass:"col-xs-6 col-sm-5"},[s("p",{staticClass:"q-mt-sm q-mb-none"},[s("small",{staticClass:"text-bold text-primary"},[t._v("Your Available "+t._s(t.currencies.point)+"S\n                  Balance:")])])]),s("div",{staticClass:"col-xs-6 col-sm-5"},[s("p",{staticClass:"q-mt-sm q-mb-none text-primary text-bold"},[t._v(t._s(t.user.pointBalance))])])]),s("div",{staticClass:"row justify-center q-mb-sm q-pb-xs"},[s("div",{staticClass:"col-xs-6 col-sm-5"},[s("div",{staticClass:"q-mt-xs",staticStyle:{"line-height":"1"}},[s("small",{staticClass:"text-bold"},[t._v("Amount to Mint:")]),s("br"),s("small",{staticStyle:{"font-style":"italic"}},[t._v("from account '"+t._s(this.accountName)+"'")])])]),s("div",{staticClass:"col-xs-6 col-sm-5"},[s("label",{staticClass:"q-field row no-wrap items-start q-input q-field--outlined q-field--dense q-validation-component",attrs:{"data-v-052b630f":"",for:"f_8b8778e2-d74d-4d9f-8e69-cd43d21fcac5"}},[s("div",{staticClass:"q-field__inner relative-position col self-stretch"},[s("div",{staticClass:"q-field__control relative-position row no-wrap",attrs:{tabindex:"-1"}},[s("div",{staticClass:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.sendAmount,expression:"sendAmount"}],staticClass:"q-field__native q-placeholder",attrs:{tabindex:"0",required:"required",id:"f_8b8778e2-d74d-4d9f-8e69-cd43d21fcac5",type:"number"},domProps:{value:t.sendAmount},on:{input:function(e){e.target.composing||(t.sendAmount=e.target.value)}}}),s("q-btn",{staticClass:"max-btn",attrs:{size:"sm",unelevated:"","no-caps":"",color:"secondary"},on:{click:function(e){return t.freebiMaxAmount()}}},[t._v("Max\n                      ")])],1)])])])])]),s("hr"),t.sendAmount?s("div",[t._m(8),s("div",{staticClass:"row justify-center"},[s("div",{staticClass:"col-xs-6 col-sm-5"},[s("p",{staticClass:"q-mt-xs q-mb-none"},[s("small",{staticClass:"text-bold"},[t._v(t._s(t.currencies.point)+"S balance will be:")])])]),s("div",{staticClass:"col-xs-6 col-sm-5"},[s("p",{staticClass:"q-mt-xs q-mb-none text-bold"},[t._v(t._s(t._f("roundTo4Decimal")(parseFloat(t.user.pointBalance)-parseFloat(t.sendAmount))))])])]),s("div",{staticClass:"row justify-center"},[s("div",{staticClass:"col-xs-6 col-sm-5"},[s("p",{staticClass:"q-mt-xs q-mb-none"},[s("small",{staticClass:"text-bold"},[t._v(t._s(t.currencies.freebi)+" balance will be:")])])]),s("div",{staticClass:"col-xs-6 col-sm-5"},[s("p",{staticClass:"q-mt-xs q-mb-none text-bold"},[t._v(t._s(t._f("roundTo4Decimal")(parseFloat(t.user.freebiBalance)+parseFloat(t.sendAmount))))])])])]):t._e(),s("div",{staticClass:"row justify-center q-mt-lg ",staticStyle:{"align-items":"center"}},[s("q-btn",{staticClass:"full-width",attrs:{disabled:!(parseFloat(t.sendAmount)>0)||parseFloat(t.sendAmount)>parseFloat(t.user.pointBalance),size:"xl",unelevated:"","no-caps":"",disable:!1,color:"primary"},on:{click:function(e){return t.submit()}}},[t._v("\n              Mint "+t._s(t.currencies.freebi))])],1)])]):t._e()])]):t._e()],1)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-subtitle2 q-mt-none"},[s("strong",[t._v("No mint fee is required.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-xs-6 col-sm-5"},[s("div",{staticClass:"q-mt-xs",staticStyle:{"line-height":"1"}},[s("small",{staticClass:"text-bold"},[t._v("1. Choose a balance to Mint\n                  from:")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-xs-6 col-sm-5"},[s("div",{staticClass:"q-mt-xs",staticStyle:{"line-height":"1"}},[s("small",{staticClass:"text-bold"},[t._v("3. Pay the Mint Fee with:")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"q-mt-md text-primary text-bold"},[s("small",[t._v("Transaction Mint Fee Charge:")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-xs-6 col-sm-5"},[s("p",{staticClass:"q-mt-xs q-mb-none"},[s("small",{staticClass:"text-bold"},[t._v("Total Mint Fee will be:")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-xs-6 col-sm-5"},[s("p",{staticClass:"q-mt-xs q-mb-none"},[s("small",{staticClass:"text-bold"},[t._v("AirClaim Allowance used:")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-xs-6 col-sm-5"},[s("p",{staticClass:"q-mt-xs q-mb-none"},[s("small",{staticClass:"text-bold"},[t._v("AirClaim Allowance balance to charge:")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-xs-6 col-sm-5"},[s("p",{staticClass:"q-mt-xs q-mb-none"},[s("small",{staticClass:"text-bold"},[t._v("AirClaim Allowance balance:")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"q-mt-md text-primary text-bold"},[s("small",[t._v("Expected Transaction Balances:")])])}],n=s("2f62");s("5319");var r=s("37ca"),l=s("1852"),c=(s("ee95"),s("9fda"),s("0791")),o={name:"Convert",components:{CompleteDialog:r["a"],AbbreviateNumber:l["a"],GetVerified:c["a"]},data(){return{isMintTabSelected:!0,submitData:{pay:null,quantity:0,from:null},mintFeeOptions:[],isMintTab:!0,sendAmount:0,tokenCurrencyName:this.$options.filters.capitalize("POINT"),currencyName:"FREEOS"}},computed:{balOptions(){var t=[{label:this.currencies.point+"S",value:this.currencies.point,disabled:this.checkIfDisabled(this.user.pointBalance)},{label:this.currencies.freebi,value:this.currencies.freebi,disabled:this.checkIfDisabled(this.user.freebiBalance)}];return this.user.mffBalance&&t.unshift({label:"AirClaim Allowance <small>(No mint fee)</small>",value:"AIRCLAIM ALLOWANCE",disabled:!1}),t},mintfeePayable(){const t=parseFloat(this.submitData.quantity);return t},showMintFeeError(){let t=!1;return this.submitData.pay===this.currencies.freeos?this.finalMintFeeFreeos>this.user.freeosBalance&&(t=!0):this.submitData.pay===this.currencies.xpr?this.finalMintFeeFreeos>this.user.XPRBalance&&(t=!0):this.submitData.pay===this.currencies.xusdc&&this.finalMintFeeFreeos>this.user.XUSDCBalance&&(t=!0),this.submitData.from&&this.submitData.quantity>0&&(this.freeosBalance<0||this.submitData.quantity>this.mintMaxAmount)||t},disableMintFeeButton(){let t=!1;return this.submitData.pay===this.currencies.freeos?this.finalMintFeeFreeos>this.user.freeosBalance&&(t=!0):this.submitData.pay===this.currencies.xpr?this.finalMintFeeFreeos>this.user.XPRBalance&&(t=!0):this.submitData.pay===this.currencies.xusdc&&this.finalMintFeeFreeos>this.user.XUSDCBalance&&(t=!0),this.freeosBalance<0||!this.submitData.from||!this.submitData.pay&&"AIRCLAIM ALLOWANCE"!==this.submitData.from||!(this.submitData.quantity>0&&this.submitData.quantity<=this.mintMaxAmount)||t},mintFeeInFreeos(){return this.mintfeePayable*(parseFloat(this.rewardsPrevious["mint_fee_percent"])/100)},mintFeeInXPR(){return this.mintfeePayable*(parseFloat(this.rewardsPrevious["mint_fee_percent_xpr"])/100)},mintFeeInXUSDC(){return this.mintfeePayable*(parseFloat(this.rewardsPrevious["mint_fee_percent_xusdc"])/100)},finalMintFeeFreeos(){if(this.submitData.pay===this.currencies.freeos)return this.mintFeeInFreeos<this.mintFeeMin?this.mintFeeMin:this.mintFeeInFreeos;if(this.submitData.pay===this.currencies.xpr){var t=this.mintFeeInXPR*(parseFloat(this.freeosContract["usdrate"])/parseFloat(this.xprContract["usdrate"]));return t>this.xprMinMintfee?t:this.xprMinMintfee}if(this.submitData.pay===this.currencies.xusdc){var e=this.mintFeeInXUSDC*(parseFloat(this.freeosContract["usdrate"])/parseFloat(this.usdContract["usdrate"]));return e>this.usdMinMintfee?e:this.usdMinMintfee}return 0},xprMinMintfee(){var t=0;return this.mintFeeMin&&this.xprContract&&this.freeosContract["usdrate"]&&(t=this.mintFeeMin*(parseFloat(this.freeosContract["usdrate"])/parseFloat(this.xprContract["usdrate"]))),t},usdMinMintfee(){var t=0;return this.mintFeeMin&&this.usdContract&&this.freeosContract["usdrate"]&&(t=this.mintFeeMin*(parseFloat(this.freeosContract["usdrate"])/parseFloat(this.usdContract["usdrate"]))),t},mintFeeFreePointsUsed(){const t=parseFloat(this.submitData.quantity);return"AIRCLAIM ALLOWANCE"===this.submitData.from?t:0},mintMaxAmount(){return this.submitData.from===this.currencies.point?this.user.pointBalance:this.submitData.from===this.currencies.freebi?this.user.freebiBalance:"AIRCLAIM ALLOWANCE"===this.submitData.from?this.user.pointBalance>this.user.mffBalance?this.user.mffBalance:this.user.pointBalance:0},freeosBalance(){const t=parseFloat(this.submitData.quantity);return this.submitData.pay===this.currencies.freeos?this.user.freeosBalance+t-this.finalMintFeeFreeos:this.user.freeosBalance+t},...Object(n["c"])("freeos",["isFreeosEnabled","isVerified","user","accountType","nextClaimIn","currentIteration","eligibleToClaim","nextActivity","accountName","mintFeeMin","rewardsPrevious","dparametersTable","xprContract","usdContract","freeosContract","currencies"])},methods:{...Object(n["b"])("freeos",["mintFreeBI","mintFreeos"]),setMintMaxAmount(){this.submitData.quantity=this.mintMaxAmount},checkIfDisabled(t){return!t},freebiMaxAmount(){this.user.pointBalance&&(this.sendAmount=this.user.pointBalance)},async submit(){var t=await this.mintFreeBI({owner:this.accountName,quantity:`${parseFloat(this.sendAmount).toFixed("4")} POINT`});if(!(t instanceof Error)){var e=this.sendAmount;this.$refs.complete.openDialog({title:"Woohoo!",subtitle:"You minted",value:e,currency:this.currencies.freebi}),this.resetForm()}console.log("resultR",t)},async mintSubmit(){const t=this;var e=parseFloat(this.submitData.quantity),s=[];if(this.submitData.from===this.currencies.freebi){var i={};i.from=this.accountName,i.quantity=`${e.toFixed("4")} ${this.submitData.from}`,i.memo="freeos mint credit",i.to="freeosclaim",i.contract="freebitokens",s.push(i)}if(console.log("finalMintFeeFreeo",this.finalMintFeeFreeos),this.finalMintFeeFreeos){i={};i.from=this.accountName,i.memo="freeos mint fee",i.to="freeosclaim",console.log("mintFeeInFreeos",this.mintFeeInFreeos),this.submitData.pay===this.currencies.freeos?(i.contract=this.freeosContract["contract"],i.quantity=`${parseFloat(this.finalMintFeeFreeos).toFixed("4")} ${this.submitData.pay}`):this.submitData.pay===this.currencies.xpr?(i.contract=this.xprContract["contract"],i.quantity=`${parseFloat(this.finalMintFeeFreeos).toFixed("4")} ${this.submitData.pay}`):this.submitData.pay===this.currencies.xusdc&&(i.contract=this.usdContract["contract"],i.quantity=`${parseFloat(this.finalMintFeeFreeos).toFixed("6")} ${this.submitData.pay}`),s.push(i)}console.log();i={};i.user=this.accountName,"AIRCLAIM ALLOWANCE"===this.submitData.from?i.input_quantity=`${e.toFixed("4")} ${this.currencies.point}`:i.input_quantity=`${e.toFixed("4")} ${this.submitData.from}`,i.mint_fee_currency="4,"+this.currencies.freeos,this.submitData.pay===this.currencies.xpr?i.mint_fee_currency="4,"+this.submitData.pay:this.submitData.pay===this.currencies.xusdc&&(i.mint_fee_currency="6,"+this.submitData.pay),i.use_airclaim_points="AIRCLAIM ALLOWANCE"===this.submitData.from,i.contract="freeosclaim",s.push(i);var a=await this.mintFreeos(s);a instanceof Error||(this.$refs.complete.openDialog({title:"Woohoo!",subtitle:"You minted",value:e,currency:this.currencies.freeos}),t.resetForm()),console.log("resultR",a)},resetForm(){this.sendAmount=0,this.submitData={pay:null,quantity:0,from:null}}},created(){this.mintFeeOptions=[{label:this.currencies.freeos+" <small>("+this.$options.filters.roundTo4Decimal(this.rewardsPrevious["mint_fee_percent"])+"%)</small>",value:this.currencies.freeos,disabled:this.checkIfDisabled(this.user.freeosBalance)},{label:this.currencies.xpr+" <small>("+this.$options.filters.roundTo4Decimal(this.rewardsPrevious["mint_fee_percent_xpr"])+"%)</small>",value:this.currencies.xpr,disabled:this.checkIfDisabled(this.user.XPRBalance)},{label:this.currencies.xusdc+" <small>("+this.$options.filters.roundTo6Decimal(this.rewardsPrevious["mint_fee_percent_xusdc"])+"%)</small>",value:this.currencies.xusdc,disabled:this.checkIfDisabled(this.user.XUSDCBalance)}],this.user.hasNFT&&(this.mintFeeOptions=[{label:"NFT <small>(Zero Mint Fee)</small>",value:"NFT",disabled:this.checkIfDisabled(this.user.hasNFT)}],this.submitData.pay="NFT")}},m=o,u=(s("afaa"),s("2877")),d=s("9c40"),b=s("ddd8"),f=s("8572"),p=s("27f9"),v=s("eebe"),x=s.n(v),h=Object(u["a"])(m,i,a,!1,null,"ec9876dc",null);e["default"]=h.exports;x()(h,"components",{QBtn:d["a"],QSelect:b["a"],QField:f["a"],QInput:p["a"]})}}]);