webpackJsonp([0],{"+ptz":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"flex justify-center mb7"},[i("section",{staticClass:"flex flex-column items-center"},[i("section",[i("game-menu",{staticClass:"mt4 mb3",on:{apply:t.setNewParams,"is-open":function(e){t.menuOpen=e}}}),i("scores",{staticClass:"mt4 mb3 w-100"})],1),i("board",{attrs:{enabled:!t.menuOpen}})],1)])};n._withStripped=!0;var s={render:n,staticRenderFns:[]};e.a=s},"/TYz":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("N7yO"),s=i("+ptz"),a=i("VU/8")(n.a,s.a,!1,null,null,null);a.options.__file="pages/index.vue",e.default=a.exports},"0XQ6":function(t,e,i){"use strict";var n=i("Dd8w"),s=i.n(n),a=i("NYxO"),o=i("YccO"),r=(i.n(o),i("xllS")),c=i("aKx+"),l=i("pQC3"),u=i("51/C"),f=i("1exu");e.a={mixins:[o.mixin],components:{settings:r.a,reload:c.a,info:l.a,"number-input":u.a,configuration:f.a},data:function(){return{settingsAnimation:!1,reloadAnimation:!1,infoAnimation:!1,settingsVisible:!1,infoVisible:!1,columns:this.$store.getters.defaultParams.columns,rows:this.$store.getters.defaultParams.rows,mines:this.$store.getters.defaultParams.mines,minColumns:this.$store.getters.defaultSettings.minColumns,maxColumns:this.$store.getters.defaultSettings.maxColumns,minRows:this.$store.getters.defaultSettings.minRows,maxRows:this.$store.getters.defaultSettings.maxRows,minMines:this.$store.getters.defaultSettings.minMines,columnsValid:!0,rowsValid:!0,minesValid:!0}},computed:{maxMines:function(){return Math.round(this.columns*this.rows*this.$store.getters.defaultSettings.maxMinesPercent)},inputValid:function(){return this.columnsValid&&this.rowsValid&&this.minesValid}},watch:{settingsVisible:function(t,e){this.$emit("is-open",t),t&&(this.infoVisible=!1)},infoVisible:function(t,e){this.$emit("is-open",t),t&&(this.settingsVisible=!1)}},methods:s()({},Object(a.mapActions)(["populate"]),{closeSettings:function(){this.settingsVisible=!1},closeInfo:function(){this.infoVisible=!1},settings:function(){this.settingsAnimation||(this.settingsAnimation=!0,setTimeout(function(t){t.settingsAnimation=!1},300,this),this.settingsVisible=!this.settingsVisible)},reload:function(){this.reloadAnimation||(this.populate(),this.reloadAnimation=!0,setTimeout(function(t){t.reloadAnimation=!1},300,this))},info:function(){this.infoAnimation||(this.infoAnimation=!0,setTimeout(function(t){t.infoAnimation=!1},300,this),this.infoVisible=!this.infoVisible)},apply:function(){this.inputValid&&(this.$emit("apply",{columns:this.columns,rows:this.rows,mines:this.mines}),this.settingsVisible=!1,this.infoVisible=!1)}})}},"1exu":function(t,e,i){"use strict";var n=i("J9vw"),s=i("Lpp/"),a=i("VU/8")(n.a,s.a,!1,null,null,null);a.options.__file="components/Configuration.vue",e.a=a.exports},"44l9":function(t,e,i){"use strict";var n=i("KZrk"),s=i("LTyw"),a=!1;var o=function(t){a||i("Wvz9")},r=i("VU/8")(n.a,s.a,!1,o,null,null);r.options.__file="components/Board.vue",e.a=r.exports},"51/C":function(t,e,i){"use strict";var n=i("ci1E"),s=i("Edm7"),a=i("VU/8")(n.a,s.a,!1,null,null,null);a.options.__file="components/NumberInput.vue",e.a=a.exports},"5NyC":function(t,e,i){"use strict";var n=i("iic4");e.a={mixins:[n.a],computed:{paths:function(){return'<path d="M29 16 C29 22 24 29 16 29 8 29 3 22 3 16 3 10 8 3 16 3 21 3 25 6 27 9 M20 10 L27 9 28 2"/>'}}}},"8QdA":function(t,e,i){"use strict";var n=i("1exu");e.a={components:{configuration:n.a},computed:{gameOver:function(){return this.$store.state.gameOver},gameSucces:function(){return this.$store.state.gameSucces},columns:function(){return this.$store.state.params.columns},rows:function(){return this.$store.state.params.rows},mines:function(){return this.$store.state.params.mines}}}},AAwP:function(t,e,i){"use strict";var n=i("0XQ6"),s=i("didd"),a=!1;var o=function(t){a||i("CVJU")},r=i("VU/8")(n.a,s.a,!1,o,null,null);r.options.__file="components/Menu.vue",e.a=r.exports},ARlf:function(t,e,i){"use strict";var n=i("rzDO"),s=i("VU/8")(n.a,null,!1,null,null,null);s.options.__file="components/icons/ChevronRight.vue",e.a=s.exports},B7qT:function(t,e,i){"use strict";var n=i("Dd8w"),s=i.n(n),a=i("NYxO"),o=i("nqcA"),r=i("bqkd");e.a={components:{bomb:o.a,flag:r.a},props:["item","enabled"],computed:{cellDynamic:function(){return this.item.isOpened?this.item.hasMine?"bg-near-white ba b--light-gray":"bg-near-white ba b--light-gray"+(this.enabled?" pointer":""):"bg-white"+(this.enabled?" box bg-white pointer":"")}},data:function(){return{openedVisible:!1}},methods:s()({},Object(a.mapActions)(["check","setFlag","multiCheck"]),{leftClick:function(t){this.enabled&&this.check(this.item)},rightClick:function(t){this.enabled&&(this.item.isOpened?this.multiCheck(this.item):this.setFlag(this.item))},doubleClick:function(t){this.enabled},afterLeave:function(){this.openedVisible=!0},beforeLeave:function(){this.openedVisible=!this.item.hasFlag}})}},CUSN:function(t,e,i){"use strict";var n=i("iic4");e.a={mixins:[n.a],computed:{paths:function(){return'<path d="M2 30 L30 2 M30 30 L2 2" />'}}}},CVJU:function(t,e,i){var n=i("QSlJ");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("291f375a",n,!1,{sourceMap:!1})},Cjst:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,'.pa3_5{padding:20px;padding:24px;padding:1.5rem}.box{-webkit-box-shadow:0 1px 2px rgba(0,0,0,.1);box-shadow:0 1px 2px rgba(0,0,0,.1)}.box,.box:after{border-radius:3px;-webkit-transition:all .3s cubic-bezier(.165,.84,.44,1);transition:all .3s cubic-bezier(.165,.84,.44,1)}.box:after{content:"";position:absolute;z-index:-1;top:0;left:0;width:100%;height:100%;-webkit-box-shadow:0 5px 15px rgba(0,0,0,.3);box-shadow:0 5px 15px rgba(0,0,0,.3);opacity:0}.box:hover{-webkit-transform:scale(1.15);transform:scale(1.15);z-index:1}.box:hover:after{opacity:1}',""])},Edm7:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"flex items-center justify-between"},[i("input",{ref:"input",staticClass:"input-reset f5 ma0 ba bl-0 bt-0 br-0 b--dotted b--black-30 bg-transparent no-spinners w3 tc",attrs:{type:"number"},domProps:{value:t.value},on:{input:function(e){t.updateValue(e.target.value)}}}),i("section",{staticClass:"flex items-center justify-between ml3"},[i("div",{staticClass:"pointer pv1 ph3",on:{click:function(e){e.preventDefault(),t.decrease(e)}}},[i("chevron-left",{class:{"scale-down-center":t.leftAnimation}})],1),i("div",{staticClass:"pointer pv1 ph3",on:{click:function(e){e.preventDefault(),t.increase(e)}}},[i("chevron-right",{class:{"scale-down-center":t.rightAnimation}})],1),i("div",{staticClass:"ml3 f5",class:[t.outOfrange?"red":"silver"]},[t._v(t._s(t.min)+" - "+t._s(t.max)+" ")])])])};n._withStripped=!0;var s={render:n,staticRenderFns:[]};e.a=s},J9vw:function(t,e,i){"use strict";e.a={props:["columns","rows","mines"],computed:{totalCells:function(){return this.columns*this.rows},minesPercent:function(){var t=Math.round(100*this.mines/(this.columns*this.rows));return t>0&&t<100?t+"%":""}}}},JXnv:function(t,e,i){"use strict";var n=i("8QdA"),s=i("i8vd"),a=i("VU/8")(n.a,s.a,!1,null,null,null);a.options.__file="components/Scores.vue",e.a=a.exports},KU7C:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,'.cont{z-index:5;-webkit-filter:blur(15px);-moz-filter:blur(15px);-o-filter:blur(15px);-ms-filter:blur(15px);filter:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feGaussianBlur stdDeviation="15" /></filter></svg>#filter\');filter:blur(15px)}.cont,.cont:before{width:100%;height:100%}.cont:before{position:absolute;content:"";background:hsla(0,0%,96%,.6);pointer-events:none}',""])},KZrk:function(t,e,i){"use strict";var n=i("Dd8w"),s=i.n(n),a=i("NYxO"),o=i("Nv5j");e.a={layout:"default",props:["enabled"],components:{square:o.a},computed:{squares:function(){return this.$store.state.squares},gameState:function(){return this.$store.state.gameOver?"game over":"game in progress"},gameResult:function(){return this.$store.state.gameSucces?"success":"failed"}},methods:s()({},Object(a.mapActions)([""]))}},LTyw:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"flex flex-column items-center relative"},[i("div",{class:{cont:!t.enabled}}),i("div",{staticClass:"pa2"},t._l(t.squares,function(e,n){return i("div",{key:n,staticClass:"flex"},t._l(e,function(e,n){return i("div",{key:n,staticClass:"ma1"},[i("square",{attrs:{item:e,enabled:t.enabled}})],1)}))}))])};n._withStripped=!0;var s={render:n,staticRenderFns:[]};e.a=s},"Lpp/":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"flex justify-between courier silver noselect"},[i("div",[i("span",{},[t._v("CELLS: "+t._s(t.totalCells))]),i("span",{staticClass:"ml3"},[t._v("MINES: "+t._s(t.mines))])]),i("span",{staticClass:"ml3"},[t._v("MINED AT: "+t._s(t.minesPercent))])])};n._withStripped=!0;var s={render:n,staticRenderFns:[]};e.a=s},N7yO:function(t,e,i){"use strict";var n=i("Dd8w"),s=i.n(n),a=i("NYxO"),o=i("AAwP"),r=i("JXnv"),c=i("44l9");e.a={layout:"default",components:{"game-menu":o.a,scores:r.a,board:c.a},mounted:function(){this.$store.dispatch("populate")},data:function(){return{menuOpen:!1}},computed:{gameState:function(){return this.$store.state.gameOver?"game over":"game in progress"},gameResult:function(){return this.$store.state.gameSucces?"success":"failed"}},methods:s()({},Object(a.mapActions)([""]),{setNewParams:function(t){this.$store.dispatch("populate",t)}})}},Nv5j:function(t,e,i){"use strict";var n=i("B7qT"),s=i("VflL"),a=!1;var o=function(t){a||i("dDRk")},r=i("VU/8")(n.a,s.a,!1,o,null,null);r.options.__file="components/Square.vue",e.a=r.exports},PdIT:function(t,e,i){"use strict";var n=i("iic4");e.a={mixins:[n.a],computed:{paths:function(){return'<path d="M20 30 L8 16 20 2" />'}}}},QSlJ:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".popup{z-index:10}",""])},VflL:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"relative h3 w3 flex flex-column justify-center items-center noselect",class:t.cellDynamic,on:{click:function(e){return"button"in e||!t._k(e.keyCode,"left",37,e.key)?"button"in e&&0!==e.button?null:(e.preventDefault(),void t.leftClick(e)):null},contextmenu:function(e){e.preventDefault(),t.rightClick(e)},dblclick:t.doubleClick}},[i("transition",{attrs:{name:"fade"},on:{"before-leave":t.beforeLeave,"after-leave":t.afterLeave}},[t.item.isOpened?i("div",{key:"opened",staticClass:"flex items-center"},[t.openedVisible?i("div",{staticClass:"flex items-center"},[i("transition",{attrs:{name:"fade"}},[t.item.hasMine?i("div",{key:"bomb",staticClass:"flex items-center"},[i("bomb",{staticClass:"red"})],1):i("div",{key:"free",staticClass:"avenir gray f4 flex items-center"},[t.item.neighborMineCount>0?i("span",[t._v(t._s(t.item.neighborMineCount))]):t._e()])])],1):t._e()]):i("div",{key:"closed",staticClass:"flex items-center"},[t.item.hasFlag?i("flag",{staticClass:"red"}):t._e()],1)])],1)};n._withStripped=!0;var s={render:n,staticRenderFns:[]};e.a=s},Wqcy:function(t,e,i){"use strict";var n=i("PdIT"),s=i("VU/8")(n.a,null,!1,null,null,null);s.options.__file="components/icons/ChevronLeft.vue",e.a=s.exports},Wvz9:function(t,e,i){var n=i("KU7C");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("fd9a1170",n,!1,{sourceMap:!1})},YccO:function(t,e,i){(function(t){"use strict";var e=[],i=void 0;function n(t,e,i){return t.addEventListener(e,i,!1),{destroy:function(){return t.removeEventListener(e,i,!1)}}}function s(t,s){var o=s.value,r=s.modifiers;a(t),i||(i=n(document.documentElement,"click",function(t){e.forEach(function(e){return e.check(t)})})),setTimeout(function(){e.push(r.static?function(t,e){return{el:t,check:function(i){t.contains(i.target)||e(i)},destroy:function(){}}}(t,o):function(t,e){var i=!1,s=n(t,"mouseenter",function(){i=!0}),a=n(t,"mouseleave",function(){i=!1});return{el:t,check:function(t){i||e(t)},destroy:function(){s.destroy(),a.destroy()}}}(t,o))},0)}function a(t){for(var n=e.length-1;n>=0;)e[n].el===t&&(e[n].destroy(),e.splice(n,1)),n-=1;0===e.length&&i&&(i.destroy(),i=null)}var o={bind:s,unbind:a,update:function(t,e){e.value!==e.oldValue&&s(t,e)}},r={directives:{"on-click-outside":o}};t.directive=o,t.mixin=r,Object.defineProperty(t,"__esModule",{value:!0})})(e)},"aKx+":function(t,e,i){"use strict";var n=i("5NyC"),s=i("VU/8")(n.a,null,!1,null,null,null);s.options.__file="components/icons/Reload.vue",e.a=s.exports},bqkd:function(t,e,i){"use strict";var n=i("kB9d"),s=i("VU/8")(n.a,null,!1,null,null,null);s.options.__file="components/icons/Flag.vue",e.a=s.exports},ci1E:function(t,e,i){"use strict";var n=i("ARlf"),s=i("Wqcy");e.a={components:{"chevron-right":n.a,"chevron-left":s.a},props:["value","min","max"],data:function(){return{outOfrange:!1,leftAnimation:!1,rightAnimation:!1,settings:this.$store.getters.defaultSettings}},methods:{updateValue:function(t){t?(this.outOfrange=t<this.min||t>this.max,this.$emit("input",Number(t)),this.outOfrange?this.$emit("valid",!1):this.$emit("valid",!0)):(this.$refs.input.value="",this.$emit("valid",!1))},decrease:function(){var t=this.value-1;this.updateValue(t<this.min?this.min:t),this.leftAnimation||(this.leftAnimation=!0,setTimeout(function(t){t.leftAnimation=!1},200,this))},increase:function(){var t=this.value+1;this.updateValue(t>this.max?this.max:t),this.rightAnimation||(this.rightAnimation=!0,setTimeout(function(t){t.rightAnimation=!1},200,this))},adjust:function(t){return t<this.min?this.min:t>this.max?this.max:t}}}},dDRk:function(t,e,i){var n=i("Cjst");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("21fb0f3c",n,!1,{sourceMap:!1})},didd:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"flex flex-column shadow-4"},[i("div",{staticClass:"flex justify-between items-center bg-navy pv3"},[i("div",{staticClass:"flex items-center pointer w4 mh2",class:[t.settingsVisible?"yellow":"white hover-moon-gray"],on:{click:function(e){e.preventDefault(),t.settings(e)}}},[i("settings",{staticClass:"center",class:{"scale-down-center":t.settingsAnimation},attrs:{size:"3"}})],1),i("div",{staticClass:"flex items-center pointer white hover-moon-gray w4 mh2",on:{click:function(e){e.preventDefault(),t.reload(e)}}},[i("reload",{staticClass:"center",class:{"rotate-360-cw":t.reloadAnimation},attrs:{size:"3"}})],1),i("div",{staticClass:"flex items-center pointer w4 mh2",class:[t.infoVisible?"yellow":"white hover-moon-gray"],on:{click:function(e){e.preventDefault(),t.info(e)}}},[i("info",{staticClass:"center",class:{"scale-down-center":t.infoAnimation},attrs:{size:"3"}})],1)]),i("transition",{attrs:{name:"fade"}},[t.infoVisible?i("div",{directives:[{name:"on-click-outside",rawName:"v-on-click-outside.static",value:t.closeInfo,expression:"closeInfo",modifiers:{static:!0}}],staticClass:"relative popup noselect"},[i("div",{staticClass:"absolute shadow-4 overflow-y-auto w-100 pv3 bg-white flex flex-column items-center courier"},[i("div",{staticClass:"pa3 gray f4 ttu tracked measure-wide"},[t._v("MINESWEEPER")]),i("div",{staticClass:"pa3 gray"},[t._v("Build with "),i("a",{staticClass:"link underline-hover blue",attrs:{href:"https://nuxtjs.org",target:"_blank"}},[t._v("Nuxt.js")]),t._v(" framework")]),i("div",{staticClass:"pa3 gray"},[i("a",{staticClass:"link underline-hover blue",attrs:{href:"http://tachyons.io",target:"_blank"}},[t._v("Tachyons")]),t._v(" css framework")]),i("div",{staticClass:"pa3 gray"},[t._v("Source code on "),i("a",{staticClass:"link underline-hover blue",attrs:{href:"https://github.com/AlexR2D2/VueMinesweeper",target:"_blank"}},[t._v("GitHub")])]),i("div",{staticClass:"pa3 gray"},[t._v("MIT License")])])]):t._e()]),i("transition",{attrs:{name:"fade"}},[t.settingsVisible?i("div",{directives:[{name:"on-click-outside",rawName:"v-on-click-outside.static",value:t.closeSettings,expression:"closeSettings",modifiers:{static:!0}}],staticClass:"relative popup noselect"},[i("div",{staticClass:"absolute shadow-4 overflow-y-auto w-100 pt3 bg-white flex flex-column sans-serif"},[i("configuration",{staticClass:"pa3 bg-near-white",attrs:{columns:t.columns,rows:t.rows,mines:t.mines}}),i("div",{staticClass:"ma3 flex justify-start items-center courier"},[i("span",{staticClass:"w4"},[t._v("COLUMNS")]),i("number-input",{attrs:{min:t.minColumns,max:t.maxColumns},on:{valid:function(e){t.columnsValid=e}},model:{value:t.columns,callback:function(e){t.columns=e},expression:"columns"}})],1),i("div",{staticClass:"ma3 flex justify-start items-center courier"},[i("span",{staticClass:"w4"},[t._v("ROWS")]),i("number-input",{attrs:{min:t.minRows,max:t.maxRows},on:{valid:function(e){t.rowsValid=e}},model:{value:t.rows,callback:function(e){t.rows=e},expression:"rows"}})],1),i("div",{staticClass:"ma3 flex justify-start items-center courier"},[i("span",{staticClass:"w4"},[t._v("MINES")]),i("number-input",{attrs:{min:t.minMines,max:t.maxMines},on:{valid:function(e){t.minesValid=e}},model:{value:t.mines,callback:function(e){t.mines=e},expression:"mines"}})],1),i("div",{staticClass:"flex items-center justify-center white pv3 mt2 dim",class:[t.inputValid?"bg-green pointer":"bg-silver"],on:{click:function(e){e.preventDefault(),t.apply(e)}}},[t._v("\n          apply\n        ")])],1)]):t._e()])],1)};n._withStripped=!0;var s={render:n,staticRenderFns:[]};e.a=s},f8vk:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:t.iconWidth,height:t.iconHeight,fill:t.fill,stroke:t.stroke,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin,"stroke-width":t.strokeWidth},domProps:{innerHTML:t._s(t.paths)}})};n._withStripped=!0;var s={render:n,staticRenderFns:[]};e.a=s},i8vd:function(t,e,i){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"mv3 tc w-100 white",class:[this.gameOver?this.gameSucces?"bg-green shadow-4":"bg-red shadow-4":"bg-white shadow-4"]},[e("configuration",{staticClass:"pa3",class:[this.gameOver?this.gameSucces?"bg-green white":"bg-red white":"bg-white gray"],attrs:{columns:this.columns,rows:this.rows,mines:this.mines}})],1)};n._withStripped=!0;var s={render:n,staticRenderFns:[]};e.a=s},iCLd:function(t,e,i){"use strict";var n=i("iic4");e.a={mixins:[n.a],computed:{paths:function(){return'        <path d="M16 14 L16 23 M16 8 L16 10" />        <circle cx="16" cy="16" r="14" />      '}}}},iWsN:function(t,e,i){"use strict";var n={props:{size:{type:String,default:"5"},width:{type:String,default:"4"},fill:{type:String,default:"none"},stroke:{type:String,default:"currentcolor"}},computed:{iconWidth:function(){return this.toLenght(this.size)},iconHeight:function(){return this.toLenght(this.size)},strokeWidth:function(){return this.toWidth(this.width)}},methods:{toLenght:function(t){return"1"===t?"64":"2"===t?"32":"3"===t?"24":"4"===t?"20":"5"===t?"18":"6"===t?"16":"7"===t?"14":"8"===t?"12":"18"},toWidth:function(t){return"1"===t?"0.5px":"2"===t?"1.0px":"3"===t?"1.5px":"4"===t?"2.0px":"5"===t?"2.5px":"6"===t?"3.0px":"7"===t?"3.5px":"7"===this.size?"1.5px":"6"===this.size?"2.0px":"2.5px"}}};e.a={mixins:[n,{data:function(){return{strokeLinecap:"round",strokeLinejoin:"round"}}}]}},iic4:function(t,e,i){"use strict";var n=i("iWsN"),s=i("f8vk"),a=i("VU/8")(n.a,s.a,!1,null,null,null);a.options.__file="components/icons/Base.vue",e.a=a.exports},kB9d:function(t,e,i){"use strict";var n=i("iic4");e.a={mixins:[n.a],computed:{paths:function(){return'<path d="M4.79192019,29.44891564 L4.68645930,0.91434822 L25.56771559,0.91434822 L25.56771559,15.18163193 L4.79192019,15.28281834"/>'}}}},nZDq:function(t,e,i){"use strict";var n=i("iic4");e.a={mixins:[n.a],computed:{paths:function(){return'        <path d="M13 2 L13 6 11 7 8 4 4 8 7 11 6 13 2 13 2 19 6 19 7 21 4 24 8 28 11 25 13 26 13 30 19 30 19 26 21 25 24 28 28 24 25 21 26 19 30 19 30 13 26 13 25 11 28 8 24 4 21 7 19 6 19 2 Z" />        <circle cx="16" cy="16" r="4" />      '}}}},nqcA:function(t,e,i){"use strict";var n=i("CUSN"),s=i("VU/8")(n.a,null,!1,null,null,null);s.options.__file="components/icons/Close.vue",e.a=s.exports},pQC3:function(t,e,i){"use strict";var n=i("iCLd"),s=i("VU/8")(n.a,null,!1,null,null,null);s.options.__file="components/icons/info.vue",e.a=s.exports},rzDO:function(t,e,i){"use strict";var n=i("iic4");e.a={mixins:[n.a],computed:{paths:function(){return'<path d="M12 30 L24 16 12 2" />'}}}},xllS:function(t,e,i){"use strict";var n=i("nZDq"),s=i("VU/8")(n.a,null,!1,null,null,null);s.options.__file="components/icons/Settings.vue",e.a=s.exports}});