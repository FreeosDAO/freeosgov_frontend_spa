(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"5d0b":function(t,e,s){},a3fc:function(t,e,s){"use strict";s("5d0b")},f1da:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("CompleteDialog",{ref:"complete"}),t.isFreeosEnabled?s("div",{staticClass:"panel-wrap panel bg-white"},[s("h4",{staticClass:"q-mb-lg q-mt-lg text-center"},[t._v("Mint or Convert Options")]),s("div",{staticClass:"flex justify-center",staticStyle:{"flex-direction":"row"}},[s("q-btn",{staticClass:"tab-btn",class:{"tab-btn--unselected":!t.isMintTabSelected},attrs:{outline:"",unelevated:"","no-caps":""},on:{click:function(e){t.isMintTabSelected=!t.isMintTabSelected}}},[t._v("Mint FREEOS")]),s("q-btn",{staticClass:"tab-btn",class:{"tab-btn--unselected":t.isMintTabSelected},attrs:{outline:"",unelevated:"","no-caps":""},on:{click:function(e){t.isMintTabSelected=!t.isMintTabSelected}}},[t._v("Points to FREEBI")])],1),t.isMintTabSelected?s("section",[s("p",{staticClass:"bg-primary text-h5 text-center text-white q-py-md"},[t._v("\n          This could be a taxable event in your jurisdiction\n        ")]),t._m(0),s("section",{staticClass:"q-ma-md panel"},[s("div",{staticClass:"text-primary text-subtitle1 text-bold text-center q-pa-sm"},[t._v("Your Current balances:")]),s("div",{staticClass:"balance-list"},[s("div",{staticClass:"q-mb-sm q-mr-xs q-ml-xs bg-info text-center"},[s("div",{staticClass:"text-bold text-subtitle1 font-bold",staticStyle:{"line-height":"1"}},[s("AbbreviateNumber",{attrs:{value:t.user.pointBalance}})],1),s("div",{staticClass:"text-bold text-primary"},[t._v("POINTS")])]),s("div",{staticClass:"q-mb-sm q-mr-xs q-ml-xs bg-info text-center"},[s("div",{staticClass:"text-bold text-subtitle1 font-bold",staticStyle:{"line-height":"1"}},[s("AbbreviateNumber",{attrs:{value:t.user.freebiBalance}})],1),s("div",{staticClass:"text-bold text-primary"},[t._v("FREEBI")])]),s("div",{staticClass:"q-mb-sm q-mr-xs q-ml-xs bg-info text-center"},[s("div",{staticClass:"text-bold text-subtitle1 font-bold",staticStyle:{"line-height":"1"}},[s("AbbreviateNumber",{attrs:{value:t.user.freeosBalance}})],1),s("div",{staticClass:"text-bold text-primary"},[t._v("FREEOS")])]),s("div",{staticClass:"q-mb-sm q-mr-xs q-ml-xs bg-info text-center"},[s("div",{staticClass:"text-bold text-subtitle1 font-bold",staticStyle:{"line-height":"1"}},[s("AbbreviateNumber",{attrs:{value:t.user.XPRBalance}})],1),s("div",{staticClass:"text-bold text-primary"},[t._v("XPR")])])]),s("hr",{staticClass:"q-mb-none"}),t.user.mffBalance>0?s("div",{staticClass:"text-primary text-subtitle1 text-bold text-center q-pa-sm"},[t._v("AirClaim Points balance:")]):t._e(),t.user.mffBalance>0?s("div",{staticClass:"balance-list"},[s("div",{staticClass:"q-mb-sm q-mr-xs q-ml-xs bg-info text-center"},[s("div",{staticClass:"text-bold text-subtitle1 font-bold",staticStyle:{"line-height":"1"}},[s("AbbreviateNumber",{attrs:{value:t.user.mffBalance}})],1),s("div",{staticClass:"text-bold text-primary"},[t._v("of your POINTS")])])]):t._e()]),s("section",{staticClass:"q-ma-md panel"},[s("div",{staticClass:"q-mt-sm text-primary text-subtitle1 text-bold text-center v q-pb-none"},[t._v("Mint Fee Details:")]),s("div",{staticClass:"text-bold text-center q-mt-none q-pt-none q-pb-sm"},[s("span",{staticClass:"q-pr-sm"},[t._v("FREEOS = "+t._s(t._f("roundTo4Decimal")(t.rewardsPrevious["mint_fee_percent"]))+"%")]),s("span",{staticClass:"q-px-xs"},[t._v("XPR = "+t._s(t._f("roundTo4Decimal")(t.rewardsPrevious["mint_fee_percent_xpr"]))+"%")]),s("span",{staticClass:"q-pl-sm"},[t._v("XUSDC = "+t._s(t._f("roundTo4Decimal")(t.rewardsPrevious["mint_fee_percent_xusdc"]))+"%")])]),s("div",{staticClass:"bg-info text-center"},[s("div",{staticClass:"text-primary text-bold q-pt-sm q-pb-none"},[t._v("Minimum Mint Fee")]),s("div",{staticClass:"text-subtitle2 q-mt-none q-pt-xs"},[s("strong",[t._v(t._s(t._f("roundTo4Decimal")(t.mintFeeMin))+" FREEOS")])]),s("div",{staticClass:"text-subtitle2 q-mt-none"},[s("small",{staticClass:"q-pr-sm"},[t._v("or")]),s("strong",[t._v(t._s(t._f("roundTo4Decimal")(t.xprMinMintfee))+" XPR")])]),s("div",{staticClass:"text-subtitle2 q-mt-none q-pb-md"},[s("small",{staticClass:"q-pr-sm"},[t._v("or")]),s("strong",[t._v(t._s(t._f("roundTo6Decimal")(t.usdMinMintfee))+" XUSDC")])])])]),s("section",{staticClass:"q-ma-md panel"},[s("div",{staticClass:"text-primary text-subtitle1 text-bold text-center q-pa-sm"},[t._v("Create a MINT Transaction")]),s("div",{staticClass:"bg-info q-pa-md"},[s("div",{staticClass:"row justify-center q-mb-sm q-pb-xs"},[t._m(1),s("div",{staticClass:"col-xs-6 col-sm-6"},[s("q-select",{attrs:{label:"Select","option-value":"value","option-label":"label","option-disable":"disabled","emit-value":"",required:"",dense:"",outlined:"",options:t.balOptions},model:{value:t.submitData.from,callback:function(e){t.$set(t.submitData,"from",e)},expression:"submitData.from"}})],1)]),"POINT"===t.submitData.from?s("div",{staticClass:"row justify-center q-mb-md q-pb-xs"},[t._m(2),s("div",{staticClass:"col-xs-6 col-sm-6"},[s("p",{staticClass:"q-mt-none q-mb-none text-primary text-bold"},[t._v(t._s(t.user.pointBalance))])])]):t._e(),"FREEBI"===t.submitData.from?s("div",{staticClass:"row justify-center q-mb-md q-pb-xs"},[t._m(3),s("div",{staticClass:"col-xs-6 col-sm-6"},[s("p",{staticClass:"q-mt-none q-mb-none text-primary text-bold"},[t._v(t._s(t.user.freebiBalance))])])]):t._e(),s("div",{staticClass:"row justify-center q-mb-sm q-pb-xs"},[s("div",{staticClass:"col-xs-5 col-sm-6"},[s("div",{staticClass:"q-mt-xs",staticStyle:{"line-height":"1"}},[s("small",{staticClass:"text-bold"},[t._v("2. Amount to\n                    Mint:")]),s("br"),s("small",{staticStyle:{"font-style":"italic"}},[t._v("from account '"+t._s(this.accountName)+"'")])])]),s("div",{staticClass:"col-xs-6 col-sm-6"},[s("label",{staticClass:"q-field row no-wrap items-start q-input q-field--outlined q-field--dense q-validation-component",attrs:{"data-v-052b630f":"",for:"f_8b8778e2-d74d-4d9f-8e69-cd43d21fcac5"}},[s("div",{staticClass:"q-field__inner relative-position col self-stretch"},[s("div",{staticClass:"q-field__control relative-position row no-wrap",attrs:{tabindex:"-1"}},[s("div",{staticClass:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.submitData.quantity,expression:"submitData.quantity"}],staticClass:"q-field__native q-placeholder",attrs:{tabindex:"0",required:"required",id:"f_8b8778e2-d74d-4d9f-8e69-cd43d21fcac5",type:"number"},domProps:{value:t.submitData.quantity},on:{input:function(e){e.target.composing||t.$set(t.submitData,"quantity",e.target.value)}}}),s("q-btn",{staticClass:"max-btn",attrs:{disabled:!t.submitData.from,size:"sm",unelevated:"","no-caps":"",color:"secondary"},on:{click:function(e){return t.setMintMaxAmount()}}},[t._v("Max\n                        ")])],1)])])])])]),"AIRCLAIM POINT"!==t.submitData.from?s("div",{staticClass:"row justify-center q-mb-sm q-pb-xs"},[t._m(4),s("div",{staticClass:"col-xs-6 col-sm-6"},[s("q-select",{attrs:{label:"Select","option-value":"value","option-label":"label","option-disable":"disabled","emit-value":"",required:"",dense:"",outlined:"",options:t.mintFeeOptions},model:{value:t.submitData.pay,callback:function(e){t.$set(t.submitData,"pay",e)},expression:"submitData.pay"}})],1)]):t._e(),s("hr"),t.submitData.from&&(t.submitData.pay||"AIRCLAIM POINT"===t.submitData.from)&&t.submitData.quantity>0&&t.submitData.quantity<=t.mintMaxAmount?s("div",[t._m(5),s("div",{staticClass:"row justify-center"},[t._m(6),"XUSDC"!==t.submitData.pay?s("div",{staticClass:"col-xs-6 col-sm-6"},[s("p",{staticClass:"q-mt-xs q-mb-none text-bold"},[t._v(t._s(t._f("roundTo4Decimal")(t.finalMintFeeFreeos))+" "+t._s(t.submitData.pay))])]):t._e(),"XUSDC"===t.submitData.pay?s("div",{staticClass:"col-xs-6 col-sm-6"},[s("p",{staticClass:"q-mt-xs q-mb-none text-bold"},[t._v(t._s(t._f("roundTo6Decimal")(t.finalMintFeeFreeos))+" "+t._s(t.submitData.pay))])]):t._e()]),t.user.mffBalance>0?s("div",{staticClass:"row justify-center"},[t._m(7),s("div",{staticClass:"col-xs-6 col-sm-6"},[s("p",{staticClass:"q-mt-xs q-mb-none text-bold"},[t._v(t._s(t._f("roundTo4Decimal")(t.mintFeeFreePointsUsed))+" Points")])])]):t._e(),t.user.mffBalance>0&&"AIRCLAIM POINT"===t.submitData.pay?s("div",{staticClass:"row justify-center"},[t._m(8),s("div",{staticClass:"col-xs-6 col-sm-6"},[s("p",{staticClass:"q-mt-xs q-mb-none text-bold"},[t._v(t._s(t._f("roundTo4Decimal")(t.user.mffBalance))+" Points")])])]):t._e(),t._m(9),"FREEBI"!==t.submitData.from?s("div",{staticClass:"row justify-center"},[t._m(10),s("div",{staticClass:"col-xs-6 col-sm-6"},[s("p",{staticClass:"q-mt-xs q-mb-none text-bold"},[t._v(t._s(t._f("roundTo4Decimal")(t.user.pointBalance-parseFloat(t.submitData.quantity)))+" Points")])])]):t._e(),"FREEBI"===t.submitData.from?s("div",{staticClass:"row justify-center"},[t._m(11),s("div",{staticClass:"col-xs-6 col-sm-6"},[s("p",{staticClass:"q-mt-xs q-mb-none text-bold"},[t._v(t._s(t._f("roundTo4Decimal")(t.user.freebiBalance-parseFloat(t.submitData.quantity)))+" FREEBI")])])]):t._e(),"XPR"===t.submitData.pay?s("div",{staticClass:"row justify-center"},[t._m(12),s("div",{staticClass:"col-xs-6 col-sm-6"},[s("p",{staticClass:"q-mt-xs q-mb-none text-bold"},[t._v(t._s(t._f("roundTo4Decimal")(parseFloat(t.user.XPRBalance-t.finalMintFeeFreeos)))+" Points")])])]):t._e(),"XUSDC"===t.submitData.pay?s("div",{staticClass:"row justify-center"},[t._m(13),s("div",{staticClass:"col-xs-6 col-sm-6"},[s("p",{staticClass:"q-mt-xs q-mb-none text-bold"},[t._v(t._s(t._f("roundTo6Decimal")(parseFloat(t.user.XUSDCBalance-t.finalMintFeeFreeos)))+" Points")])])]):t._e(),t.user.mffBalance>0&&"AIRCLAIM POINT"===t.submitData.pay?s("div",{staticClass:"row justify-center"},[t._m(14),s("div",{staticClass:"col-xs-6 col-sm-6"},[s("p",{staticClass:"q-mt-xs q-mb-none text-bold"},[t._v(t._s(t._f("roundTo4Decimal")(parseFloat(t.user.mffBalance-t.mintFeeFreePointsUsed)))+" Points")])])]):t._e(),s("div",{staticClass:"row justify-center"},[t._m(15),s("div",{staticClass:"col-xs-6 col-sm-6"},[s("p",{staticClass:"q-mt-xs q-mb-none text-bold",class:{"text-negative":t.freeosBalance<0},attrs:{"text-negative":""}},[t._v(t._s(t._f("roundTo4Decimal")(t.freeosBalance))+" FREEOS")])])])]):t._e(),s("div",{staticClass:"row justify-center q-mt-lg ",staticStyle:{"align-items":"center"}},[s("q-btn",{staticClass:"full-width",attrs:{disabled:t.freeosBalance<0||!t.submitData.from||!t.submitData.pay&&"AIRCLAIM POINT"!==t.submitData.from||!(t.submitData.quantity>0&&t.submitData.quantity<=t.mintMaxAmount),size:"xl",unelevated:"","no-caps":"",color:"primary"},on:{click:function(e){return t.mintSubmit()}}},[t._v("\n                Mint FREEOS")])],1)])])]):t._e(),t.isMintTabSelected?t._e():s("section",[s("p",{staticClass:"bg-primary text-h5 text-center text-white q-py-md"},[t._v("\n      Converting Points to FREEBI\n    ")]),t._m(16),s("section",{staticClass:"q-ma-md panel"},[s("div",{staticClass:"text-primary text-subtitle1 text-bold text-center q-pa-sm"},[t._v("Your current balances:")]),s("div",{staticClass:"balance-list"},[s("div",{staticClass:"q-mb-sm q-mr-xs q-ml-xs bg-info text-center"},[s("div",{staticClass:"text-bold text-subtitle1 font-bold",staticStyle:{"line-height":"1"}},[s("AbbreviateNumber",{attrs:{value:t.user.pointBalance}})],1),s("div",{staticClass:"text-bold text-primary"},[t._v("POINTS")])]),s("div",{staticClass:"q-mb-sm q-mr-xs q-ml-xs bg-info text-center"},[s("div",{staticClass:"text-bold text-subtitle1 font-bold",staticStyle:{"line-height":"1"}},[s("AbbreviateNumber",{attrs:{value:t.user.freebiBalance}})],1),s("div",{staticClass:"text-bold text-primary"},[t._v("FREEBI")])]),s("div",{staticClass:"q-mb-sm q-mr-xs q-ml-xs bg-info text-center"},[s("div",{staticClass:"text-bold text-subtitle1 font-bold",staticStyle:{"line-height":"1"}},[s("AbbreviateNumber",{attrs:{value:t.user.freeosBalance}})],1),s("div",{staticClass:"text-bold text-primary"},[t._v("FREEOS")])])])]),s("section",{staticClass:"q-ma-md panel"},[s("div",{staticClass:"text-primary text-subtitle1 text-bold text-center q-pa-sm"},[t._v("Convert Your Points to FREEBI")]),s("div",{staticClass:"bg-info q-pa-md"},[s("div",{staticClass:"row justify-center q-mb-sm q-pb-xs"},[t._m(17),s("div",{staticClass:"col-xs-6 col-sm-6"},[s("p",{staticClass:"q-mt-sm q-mb-none text-primary text-bold"},[t._v(t._s(t.user.pointBalance))])])]),s("div",{staticClass:"row justify-center q-mb-sm q-pb-xs"},[s("div",{staticClass:"col-xs-5 col-sm-6"},[s("div",{staticClass:"q-mt-xs",staticStyle:{"line-height":"1"}},[s("small",{staticClass:"text-bold"},[t._v("Amount to Convert:")]),s("br"),s("small",{staticStyle:{"font-style":"italic"}},[t._v("from account '"+t._s(this.accountName)+"'")])])]),s("div",{staticClass:"col-xs-6 col-sm-6"},[s("label",{staticClass:"q-field row no-wrap items-start q-input q-field--outlined q-field--dense q-validation-component",attrs:{"data-v-052b630f":"",for:"f_8b8778e2-d74d-4d9f-8e69-cd43d21fcac5"}},[s("div",{staticClass:"q-field__inner relative-position col self-stretch"},[s("div",{staticClass:"q-field__control relative-position row no-wrap",attrs:{tabindex:"-1"}},[s("div",{staticClass:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.sendAmount,expression:"sendAmount"}],staticClass:"q-field__native q-placeholder",attrs:{tabindex:"0",required:"required",id:"f_8b8778e2-d74d-4d9f-8e69-cd43d21fcac5",type:"number"},domProps:{value:t.sendAmount},on:{input:function(e){e.target.composing||(t.sendAmount=e.target.value)}}}),s("q-btn",{staticClass:"max-btn",attrs:{size:"sm",unelevated:"","no-caps":"",color:"secondary"},on:{click:function(e){return t.freebiMaxAmount()}}},[t._v("Max\n                    ")])],1)])])])])]),s("hr"),t.sendAmount?s("div",[t._m(18),s("div",{staticClass:"row justify-center"},[t._m(19),s("div",{staticClass:"col-xs-6 col-sm-6"},[s("p",{staticClass:"q-mt-xs q-mb-none text-bold"},[t._v(t._s(t._f("roundTo4Decimal")(parseFloat(t.user.pointBalance)-parseFloat(t.sendAmount))))])])]),s("div",{staticClass:"row justify-center"},[t._m(20),s("div",{staticClass:"col-xs-6 col-sm-6"},[s("p",{staticClass:"q-mt-xs q-mb-none text-bold"},[t._v(t._s(t._f("roundTo4Decimal")(parseFloat(t.user.freebiBalance)+parseFloat(t.sendAmount))))])])])]):t._e(),s("div",{staticClass:"row justify-center q-mt-lg ",staticStyle:{"align-items":"center"}},[s("q-btn",{staticClass:"full-width",attrs:{disabled:!(parseFloat(t.sendAmount)>0)||parseFloat(t.sendAmount)>parseFloat(t.user.pointBalance),size:"xl",unelevated:"","no-caps":"",disable:!1,color:"primary"},on:{click:function(e){return t.submit()}}},[t._v("\n            Convert to FREEBI")])],1)])])])]):t._e()],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"q-py-md q-px-lg"},[t._v("When Minting FREEOS a Mint Fee is charged which is a key component of the FREEOS\n          economic engine to keep the value buoyant. The Mint Fee applies when you convert your ‘Claimed Points’ or FREEBI\n          into a tradable token (FREEOS). Only FREEBI and Points are exempt. The Fee will be stewarded by your VOTE when\n          it comes available. Minting may be a taxable event. FREEOS is our key trading token in crypto-markets like\n          Alcor, and FREEBI is our internal trading token within the community. More info "),s("a",{attrs:{target:"_blank",title:"Minting FREEOS",href:"https://docs.freeos.io/d/h/6k0z3-408/43bbcca7c54387a/6k0z3-1562"}},[t._v(" click here")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-xs-5 col-sm-6"},[s("div",{staticClass:"q-mt-xs",staticStyle:{"line-height":"1"}},[s("small",{staticClass:"text-bold"},[t._v("1. Choose a balance to Mint\n                    from:")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-xs-5 col-sm-6"},[s("p",{staticClass:"q-mt-none q-mb-none"},[s("small",{staticClass:"text-bold text-primary"},[t._v("Your Available Points Balance:")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-xs-5 col-sm-6"},[s("p",{staticClass:"q-mt-none q-mb-none"},[s("small",{staticClass:"text-bold text-primary"},[t._v("Your Available FREEBI Balance:")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-xs-5 col-sm-6"},[s("div",{staticClass:"q-mt-xs",staticStyle:{"line-height":"1"}},[s("small",{staticClass:"text-bold"},[t._v("3. Pay the Mint Fee with:")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"q-mt-md text-primary text-bold"},[s("small",[t._v("Transaction Mint Fee Charge:")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-xs-5 col-sm-6"},[s("p",{staticClass:"q-mt-xs q-mb-none"},[s("small",{staticClass:"text-bold"},[t._v("Total Mint Fee will be:")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-xs-5 col-sm-6"},[s("p",{staticClass:"q-mt-xs q-mb-none"},[s("small",{staticClass:"text-bold"},[t._v("AirClaim Points used:")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-xs-5 col-sm-6"},[s("p",{staticClass:"q-mt-xs q-mb-none"},[s("small",{staticClass:"text-bold"},[t._v("AirClaim Points balance to charge:")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"q-mt-md text-primary text-bold"},[s("small",[t._v("Expected Transaction Balances:")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-xs-5 col-sm-6"},[s("p",{staticClass:"q-mt-xs q-mb-none"},[s("small",{staticClass:"text-bold"},[t._v("Points balance:")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-xs-5 col-sm-6"},[s("p",{staticClass:"q-mt-xs q-mb-none"},[s("small",{staticClass:"text-bold"},[t._v("FREEBI balance:")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-xs-5 col-sm-6"},[s("p",{staticClass:"q-mt-xs q-mb-none"},[s("small",{staticClass:"text-bold"},[t._v("XPR balance:")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-xs-5 col-sm-6"},[s("p",{staticClass:"q-mt-xs q-mb-none"},[s("small",{staticClass:"text-bold"},[t._v("XUSDC balance:")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-xs-5 col-sm-6"},[s("p",{staticClass:"q-mt-xs q-mb-none"},[s("small",{staticClass:"text-bold"},[t._v("AirClaim Points balance:")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-xs-5 col-sm-6"},[s("p",{staticClass:"q-mt-xs q-mb-none"},[s("small",{staticClass:"text-bold"},[t._v("FREEOS balance:")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"q-py-md q-px-lg"},[t._v("FREEBI is our internal trading token within the community and isn't subject to a Mint\n      Fee. The FREEBI tokens exist as a way for participants to have a limited, but tradable, token that can be used\n      for Peer-to-Peer activities, while protecting the FREEOS token's circulating supply. More info "),s("a",{attrs:{href:"https://docs.freeos.io/d/h/6k0z3-408/43bbcca7c54387a/6k0z3-1582",target:"_blank"}},[t._v("click\n        here")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-xs-5 col-sm-6"},[s("p",{staticClass:"q-mt-sm q-mb-none"},[s("small",{staticClass:"text-bold text-primary"},[t._v("Your Available Points Balance:")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"q-mt-md text-primary text-bold"},[s("small",[t._v("Expected conversion transaction balances will show\n              here")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-xs-5 col-sm-6"},[s("p",{staticClass:"q-mt-xs q-mb-none"},[s("small",{staticClass:"text-bold"},[t._v("POINTS balance will be:")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-xs-5 col-sm-6"},[s("p",{staticClass:"q-mt-xs q-mb-none"},[s("small",{staticClass:"text-bold"},[t._v("FREEBI balance will be:")])])])}],n=s("2f62");s("5319");var l=s("37ca"),o=s("1852"),r=(s("ee95"),s("9fda"),{name:"Convert",components:{CompleteDialog:l["a"],AbbreviateNumber:o["a"]},data(){return{isMintTabSelected:!0,submitData:{pay:null,quantity:0,from:null},balOptions:[],mintFeeOptions:[],isMintTab:!0,sendAmount:0,tokenCurrencyName:this.$options.filters.capitalize("POINT"),stakeCurrency:"XPR",currencyName:"FREEOS",convertWatch:!1}},computed:{mintfeePayable(){const t=parseFloat(this.submitData.quantity);return t},mintFeeInFreeos(){return this.mintfeePayable*(parseFloat(this.rewardsPrevious["mint_fee_percent"])/100)},mintFeeInXPR(){return this.mintfeePayable*(parseFloat(this.rewardsPrevious["mint_fee_percent_xpr"])/100)},mintFeeInXUSDC(){return this.mintfeePayable*(parseFloat(this.rewardsPrevious["mint_fee_percent_xusdc"])/100)},finalMintFeeFreeos(){return"FREEOS"===this.submitData.pay?this.mintFeeInFreeos<this.mintFeeMin?this.mintFeeMin:this.mintFeeInFreeos:"XPR"===this.submitData.pay?this.mintFeeInXPR<this.xprMinMintfee?this.mintFeeMin*(parseFloat(this.freeosContract["usdrate"])/parseFloat(this.xprContract["usdrate"])):this.mintFeeInXPR:"XUSDC"===this.submitData.pay?this.mintFeeInXUSDC<this.usdMinMintfee?this.mintFeeMin*(parseFloat(this.freeosContract["usdrate"])/parseFloat(this.usdContract["usdrate"])):this.mintFeeInXPR:0},xprMinMintfee(){var t=0;return this.mintFeeMin&&this.xprContract&&this.freeosContract["usdrate"]&&(t=this.mintFeeMin*(parseFloat(this.freeosContract["usdrate"])/parseFloat(this.xprContract["usdrate"]))),t},usdMinMintfee(){var t=0;return this.mintFeeMin&&this.usdContract&&this.freeosContract["usdrate"]&&(t=this.mintFeeMin*(parseFloat(this.freeosContract["usdrate"])/parseFloat(this.usdContract["usdrate"]))),t},mintFeeFreePointsUsed(){const t=parseFloat(this.submitData.quantity);return"AIRCLAIM POINT"===this.submitData.from?t:0},mintMaxAmount(){return"POINT"===this.submitData.from?this.user.pointBalance:"FREEBI"===this.submitData.from?this.user.freebiBalance:"AIRCLAIM POINT"===this.submitData.from?this.user.pointBalance>this.user.mffBalance?this.user.mffBalance:this.user.pointBalance:0},freeosBalance(){const t=parseFloat(this.submitData.quantity);return"FREEOS"===this.submitData.pay?this.user.freeosBalance+t-this.finalMintFeeFreeos:this.user.freeosBalance+t},...Object(n["c"])("freeos",["isFreeosEnabled","isVerified","user","accountType","nextClaimIn","currentIteration","eligibleToClaim","nextActivity","accountName","mintFeeMin","rewardsPrevious","dparametersTable","xprContract","usdContract","freeosContract"])},methods:{...Object(n["b"])("freeos",["mintFreeBI","mintFreeos"]),setMintMaxAmount(){this.submitData.quantity=this.mintMaxAmount},checkIfDisabled(t){return!t},freebiMaxAmount(){this.user.pointBalance&&(this.sendAmount=this.user.pointBalance)},async submit(){this.convertWatch=!0;var t=await this.mintFreeBI({owner:this.accountName,quantity:`${parseFloat(this.sendAmount).toFixed("4")} POINT`});t instanceof Error||this.$refs.complete.openDialog({title:"Woohoo!",subtitle:"You Converted",value:this.sendAmount,currency:"FREEBI"}),console.log("resultR",t),this.convertWatch=!1,this.resetForm()},async mintSubmit(){this.convertWatch=!0;var t=parseFloat(this.submitData.quantity),e=[];if("FREEBI"===this.submitData.from){var s={};s.from=this.accountName,s.quantity=`${t.toFixed("4")} ${this.submitData.from}`,s.memo="freeos mint credit",s.to="freeosgov2",s.contract="freebi",e.push(s)}if(console.log("finalMintFeeFreeo",this.finalMintFeeFreeos),this.finalMintFeeFreeos){s={};s.from=this.accountName,s.memo="freeos mint fee",s.to="freeosgov2",console.log("mintFeeInFreeos",this.mintFeeInFreeos),"FREEOS"===this.submitData.pay?(s.contract=this.freeosContract["contract"],s.quantity=`${parseFloat(this.finalMintFeeFreeos).toFixed("4")} POINT`):"XPR"===this.submitData.pay?(s.contract=this.xprContract["contract"],s.quantity=`${parseFloat(this.finalMintFeeFreeos).toFixed("4")} ${this.submitData.pay}`):"XUSDC"===this.submitData.pay&&(s.contract=this.usdContract["contract"],s.quantity=`${parseFloat(this.finalMintFeeFreeos).toFixed(6)} ${this.submitData.pay}`),e.push(s)}console.log();s={};s.user=this.accountName,"AIRCLAIM POINT"===this.submitData.from?s.input_quantity=`${t.toFixed("4")} POINT`:s.input_quantity=`${t.toFixed("4")} ${this.submitData.from}`,s.mint_fee_currency="4,FREEOS","XPR"===this.submitData.pay?s.mint_fee_currency="4,"+this.submitData.pay:"XUSDC"===this.submitData.pay&&(s.mint_fee_currency="6,"+this.submitData.pay),s.use_airclaim_points="AIRCLAIM POINT"===this.submitData.from,s.contract="freeosgov2",e.push(s);var a=await this.mintFreeos(e);a instanceof Error||this.$refs.complete.openDialog({title:"Woohoo!",subtitle:"You Converted",value:t,currency:"FREEOS"}),console.log("resultR",a),this.convertWatch=!1,this.resetForm()},resetForm(){this.sendAmount=0}},created(){this.balOptions=[{label:"Points",value:"POINT",disabled:this.checkIfDisabled(this.user.pointBalance)},{label:"FREEBI",value:"FREEBI",disabled:this.checkIfDisabled(this.user.freebiBalance)}],this.user.mffBalance&&this.balOptions.unshift({label:"Airclaim Points <small>(No mint fee)</small>",value:"AIRCLAIM POINT",disabled:!1}),this.mintFeeOptions=[{label:"FREEOS <small>("+this.$options.filters.roundTo4Decimal(this.rewardsPrevious["mint_fee_percent"])+"%)</small>",value:"FREEOS",disabled:this.checkIfDisabled(this.user.freeosBalance)},{label:"XPR <small>("+this.$options.filters.roundTo4Decimal(this.rewardsPrevious["mint_fee_percent_xpr"])+"%)</small>",value:"XPR",disabled:this.checkIfDisabled(this.user.XPRBalance)},{label:"XUSDC <small>("+this.$options.filters.roundTo6Decimal(this.rewardsPrevious["mint_fee_percent_xusdc"])+"%)</small>",value:"XUSDC",disabled:this.checkIfDisabled(this.user.XUSDCBalance)}]}}),c=r,m=(s("a3fc"),s("2877")),u=s("9c40"),d=s("ddd8"),b=s("8572"),v=s("27f9"),f=s("eebe"),p=s.n(f),x=Object(m["a"])(c,a,i,!1,null,"d4352be2",null);e["default"]=x.exports;p()(x,"components",{QBtn:u["a"],QSelect:d["a"],QField:b["a"],QInput:v["a"]})}}]);