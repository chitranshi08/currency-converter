(function(e){function r(r){for(var n,a,l=r[0],c=r[1],i=r[2],p=0,f=[];p<l.length;p++)a=l[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);s&&s(r);while(f.length)f.shift()();return u.push.apply(u,i||[]),t()}function t(){for(var e,r=0;r<u.length;r++){for(var t=u[r],n=!0,l=1;l<t.length;l++){var c=t[l];0!==o[c]&&(n=!1)}n&&(u.splice(r--,1),e=a(a.s=t[0]))}return e}var n={},o={app:0},u=[];function a(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=n,a.d=function(e,r,t){a.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,r){if(1&r&&(e=a(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)a.d(t,n,function(r){return e[r]}.bind(null,n));return t},a.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(r,"a",r),r},a.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},a.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=r,l=l.slice();for(var i=0;i<l.length;i++)r(l[i]);var s=c;u.push([0,"chunk-vendors"]),t()})({0:function(e,r,t){e.exports=t("56d7")},"034f":function(e,r,t){"use strict";var n=t("85ec"),o=t.n(n);o.a},"3dc4":function(e,r,t){"use strict";var n=t("8837"),o=t.n(n);o.a},"56d7":function(e,r,t){"use strict";t.r(r);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),o=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{attrs:{id:"app"}},[t("Currency")],1)},u=[],a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("h1",[e._v("Currency Converter")]),t("div",{staticClass:"mainContainer"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.enterValue,expression:"enterValue"}],attrs:{placeholder:"Please enter USD value",type:"text"},domProps:{value:e.enterValue},on:{input:function(r){r.target.composing||(e.enterValue=r.target.value)}}}),t("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedCurrency,expression:"selectedCurrency"}],attrs:{name:"",id:""},on:{change:function(r){var t=Array.prototype.filter.call(r.target.options,(function(e){return e.selected})).map((function(e){var r="_value"in e?e._value:e.value;return r}));e.selectedCurrency=r.target.multiple?t:t[0]}}},e._l(e.currencyNames,(function(r){return t("option",{key:r.shortForm,domProps:{value:r.shortForm}},[e._v(e._s(r.fullForm))])})),0),e.getValue?t("div",{staticClass:"result"},[e._v(" "+e._s(e.getValue)+" "+e._s(e.selectedCurrency))]):e._e()])])},l=[],c=(t("b680"),t("d3b7"),{name:"Currency",data:function(){return{enterValue:"",response:"",currencyNames:[{fullForm:"Indian National Rupees",shortForm:"INR"},{fullForm:"Chilean peso",shortForm:"CLP"},{fullForm:"Colombian peso",shortForm:"COP"},{fullForm:"Dominican peso",shortForm:"DOP"},{fullForm:"Czech koruna",shortForm:"CZK"},{fullForm:"British pound",shortForm:"GBP"}],selectedCurrency:"INR"}},created:function(){var e=this;fetch("https://prime.exchangerate-api.com/v5/2f3e36f1317d1c7e8c2dffa8/latest/USD").then((function(e){return e.json()})).then((function(r){e.response=r}))},computed:{getValue:function(){return this.enterValue&&this.response&&(this.enterValue*this.response.conversion_rates[this.selectedCurrency]).toFixed(2)}}}),i=c,s=(t("3dc4"),t("2877")),p=Object(s["a"])(i,a,l,!1,null,"8dc3a66e",null),f=p.exports,d={name:"App",components:{Currency:f}},m=d,v=(t("034f"),Object(s["a"])(m,o,u,!1,null,null,null)),h=v.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(h)}}).$mount("#app")},"85ec":function(e,r,t){},8837:function(e,r,t){}});
//# sourceMappingURL=app.0a57fa8f.js.map