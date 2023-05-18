(()=>{var t={126:(t,e,n)=>{var r={"./OpenSans-Bold.ttf":815,"./OpenSans-Regular.ttf":715};function a(t){var e=o(t);return n(e)}function o(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}a.keys=function(){return Object.keys(r)},a.resolve=o,t.exports=a,a.id=126},310:(t,e,n)=>{var r={"./check.svg":970,"./clipboard-check.svg":108,"./list.svg":11,"./plus.svg":789,"./three-dots.svg":411,"./trash.svg":791};function a(t){var e=o(t);return n(e)}function o(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}a.keys=function(){return Object.keys(r)},a.resolve=o,t.exports=a,a.id=310},815:(t,e,n)=>{"use strict";t.exports=n.p+"728c265bc5aed977c34f.ttf"},715:(t,e,n)=>{"use strict";t.exports=n.p+"a5fe783dd47c116806f9.ttf"},970:(t,e,n)=>{"use strict";t.exports=n.p+"4db2e6cc06dd8ff2972b.svg"},108:(t,e,n)=>{"use strict";t.exports=n.p+"bfdcffc5a485ac149ec2.svg"},11:(t,e,n)=>{"use strict";t.exports=n.p+"9386c761c67ed88eec1f.svg"},789:(t,e,n)=>{"use strict";t.exports=n.p+"220c9e2941557f267da2.svg"},411:(t,e,n)=>{"use strict";t.exports=n.p+"2d7eda27c937cb6da5a1.svg"},791:(t,e,n)=>{"use strict";t.exports=n.p+"a97e8c89a73c26b03b7d.svg"}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!t;)t=r[a--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function r(n){e(1,arguments);var r=Object.prototype.toString.call(n);return n instanceof Date||"object"===t(n)&&"[object Date]"===r?new Date(n.getTime()):"number"==typeof n||"[object Number]"===r?new Date(n):("string"!=typeof n&&"[object String]"!==r||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function a(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function o(t){e(1,arguments);var n=r(t),a=n.getUTCDay(),o=(a<1?7:0)+a-1;return n.setUTCDate(n.getUTCDate()-o),n.setUTCHours(0,0,0,0),n}function i(t){e(1,arguments);var n=r(t),a=n.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(a+1,0,4),i.setUTCHours(0,0,0,0);var s=o(i),u=new Date(0);u.setUTCFullYear(a,0,4),u.setUTCHours(0,0,0,0);var c=o(u);return n.getTime()>=s.getTime()?a+1:n.getTime()>=c.getTime()?a:a-1}var s={};function u(){return s}function c(t,n){var o,i,s,c,d,l,h,f;e(1,arguments);var m=u(),g=a(null!==(o=null!==(i=null!==(s=null!==(c=null==n?void 0:n.weekStartsOn)&&void 0!==c?c:null==n||null===(d=n.locale)||void 0===d||null===(l=d.options)||void 0===l?void 0:l.weekStartsOn)&&void 0!==s?s:m.weekStartsOn)&&void 0!==i?i:null===(h=m.locale)||void 0===h||null===(f=h.options)||void 0===f?void 0:f.weekStartsOn)&&void 0!==o?o:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var v=r(t),b=v.getUTCDay(),p=(b<g?7:0)+b-g;return v.setUTCDate(v.getUTCDate()-p),v.setUTCHours(0,0,0,0),v}function d(t,n){var o,i,s,d,l,h,f,m;e(1,arguments);var g=r(t),v=g.getUTCFullYear(),b=u(),p=a(null!==(o=null!==(i=null!==(s=null!==(d=null==n?void 0:n.firstWeekContainsDate)&&void 0!==d?d:null==n||null===(l=n.locale)||void 0===l||null===(h=l.options)||void 0===h?void 0:h.firstWeekContainsDate)&&void 0!==s?s:b.firstWeekContainsDate)&&void 0!==i?i:null===(f=b.locale)||void 0===f||null===(m=f.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==o?o:1);if(!(p>=1&&p<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var w=new Date(0);w.setUTCFullYear(v+1,0,p),w.setUTCHours(0,0,0,0);var y=c(w,n),T=new Date(0);T.setUTCFullYear(v,0,p),T.setUTCHours(0,0,0,0);var k=c(T,n);return g.getTime()>=y.getTime()?v+1:g.getTime()>=k.getTime()?v:v-1}function l(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const h=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return l("yy"===e?r%100:r,e.length)},f=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):l(n+1,2)},m=function(t,e){return l(t.getUTCDate(),e.length)},g=function(t,e){return l(t.getUTCHours()%12||12,e.length)},v=function(t,e){return l(t.getUTCHours(),e.length)},b=function(t,e){return l(t.getUTCMinutes(),e.length)},p=function(t,e){return l(t.getUTCSeconds(),e.length)},w=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return l(Math.floor(r*Math.pow(10,n-3)),e.length)};var y={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return h(t,e)},Y:function(t,e,n,r){var a=d(t,r),o=a>0?a:1-a;return"YY"===e?l(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):l(o,e.length)},R:function(t,e){return l(i(t),e.length)},u:function(t,e){return l(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return l(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return l(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return f(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return l(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,n,o,i){var s=function(t,n){e(1,arguments);var o=r(t),i=c(o,n).getTime()-function(t,n){var r,o,i,s,l,h,f,m;e(1,arguments);var g=u(),v=a(null!==(r=null!==(o=null!==(i=null!==(s=null==n?void 0:n.firstWeekContainsDate)&&void 0!==s?s:null==n||null===(l=n.locale)||void 0===l||null===(h=l.options)||void 0===h?void 0:h.firstWeekContainsDate)&&void 0!==i?i:g.firstWeekContainsDate)&&void 0!==o?o:null===(f=g.locale)||void 0===f||null===(m=f.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==r?r:1),b=d(t,n),p=new Date(0);return p.setUTCFullYear(b,0,v),p.setUTCHours(0,0,0,0),c(p,n)}(o,n).getTime();return Math.round(i/6048e5)+1}(t,i);return"wo"===n?o.ordinalNumber(s,{unit:"week"}):l(s,n.length)},I:function(t,n,a){var s=function(t){e(1,arguments);var n=r(t),a=o(n).getTime()-function(t){e(1,arguments);var n=i(t),r=new Date(0);return r.setUTCFullYear(n,0,4),r.setUTCHours(0,0,0,0),o(r)}(n).getTime();return Math.round(a/6048e5)+1}(t);return"Io"===n?a.ordinalNumber(s,{unit:"week"}):l(s,n.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):m(t,e)},D:function(t,n,a){var o=function(t){e(1,arguments);var n=r(t),a=n.getTime();n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0);var o=a-n.getTime();return Math.floor(o/864e5)+1}(t);return"Do"===n?a.ordinalNumber(o,{unit:"dayOfYear"}):l(o,n.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return l(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return l(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return l(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return g(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):v(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):l(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):l(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):b(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):p(t,e)},S:function(t,e){return w(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return k(a);case"XXXX":case"XX":return M(a);default:return M(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return k(a);case"xxxx":case"xx":return M(a);default:return M(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+T(a,":");default:return"GMT"+M(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+T(a,":");default:return"GMT"+M(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return l(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return l((r._originalDate||t).getTime(),e.length)}};function T(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=e||"";return n+String(a)+i+l(o,2)}function k(t,e){return t%60==0?(t>0?"-":"+")+l(Math.abs(t)/60,2):M(t,e)}function M(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+l(Math.floor(a/60),2)+n+l(a%60,2)}const C=y;var S=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},x=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},D={p:x,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return S(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",S(a,e)).replace("{{time}}",x(o,e))}};const _=D;var j=["D","DD"],U=["YY","YYYY"];function P(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var E={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function L(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}var q,W={date:L({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:L({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:L({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},O={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function N(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,o=null!=n&&n.width?String(n.width):a;r=t.formattingValues[o]||t.formattingValues[a]}else{var i=t.defaultWidth,s=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[s]||t.values[i]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function H(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;var i,s=o[0],u=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(u)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(s))return n}(u):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(s))return n}(u);return i=t.valueCallback?t.valueCallback(c):c,{value:i=n.valueCallback?n.valueCallback(i):i,rest:e.slice(s.length)}}}const Y={code:"en-US",formatDistance:function(t,e,n){var r,a=E[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:W,formatRelative:function(t,e,n,r){return O[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:N({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:N({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:N({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:N({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:N({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(q={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(q.matchPattern);if(!n)return null;var r=n[0],a=t.match(q.parsePattern);if(!a)return null;var o=q.valueCallback?q.valueCallback(a[0]):a[0];return{value:o=e.valueCallback?e.valueCallback(o):o,rest:t.slice(r.length)}}),era:H({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:H({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:H({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:H({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:H({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var F=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,A=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,z=/^'([^]*?)'?$/,Q=/''/g,B=/[a-zA-Z]/;function G(n,o,i){var s,c,d,l,h,f,m,g,v,b,p,w,y,T,k,M,S,x;e(2,arguments);var D=String(o),E=u(),L=null!==(s=null!==(c=null==i?void 0:i.locale)&&void 0!==c?c:E.locale)&&void 0!==s?s:Y,q=a(null!==(d=null!==(l=null!==(h=null!==(f=null==i?void 0:i.firstWeekContainsDate)&&void 0!==f?f:null==i||null===(m=i.locale)||void 0===m||null===(g=m.options)||void 0===g?void 0:g.firstWeekContainsDate)&&void 0!==h?h:E.firstWeekContainsDate)&&void 0!==l?l:null===(v=E.locale)||void 0===v||null===(b=v.options)||void 0===b?void 0:b.firstWeekContainsDate)&&void 0!==d?d:1);if(!(q>=1&&q<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var W=a(null!==(p=null!==(w=null!==(y=null!==(T=null==i?void 0:i.weekStartsOn)&&void 0!==T?T:null==i||null===(k=i.locale)||void 0===k||null===(M=k.options)||void 0===M?void 0:M.weekStartsOn)&&void 0!==y?y:E.weekStartsOn)&&void 0!==w?w:null===(S=E.locale)||void 0===S||null===(x=S.options)||void 0===x?void 0:x.weekStartsOn)&&void 0!==p?p:0);if(!(W>=0&&W<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!L.localize)throw new RangeError("locale must contain localize property");if(!L.formatLong)throw new RangeError("locale must contain formatLong property");var O=r(n);if(!function(n){if(e(1,arguments),!function(n){return e(1,arguments),n instanceof Date||"object"===t(n)&&"[object Date]"===Object.prototype.toString.call(n)}(n)&&"number"!=typeof n)return!1;var a=r(n);return!isNaN(Number(a))}(O))throw new RangeError("Invalid time value");var N=function(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}(O),H=function(t,n){return e(2,arguments),function(t,n){e(2,arguments);var o=r(t).getTime(),i=a(n);return new Date(o+i)}(t,-a(n))}(O,N),G={firstWeekContainsDate:q,weekStartsOn:W,locale:L,_originalDate:O};return D.match(A).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,_[e])(t,L.formatLong):t})).join("").match(F).map((function(t){if("''"===t)return"'";var e,r,a=t[0];if("'"===a)return(r=(e=t).match(z))?r[1].replace(Q,"'"):e;var s,u=C[a];if(u)return null!=i&&i.useAdditionalWeekYearTokens||(s=t,-1===U.indexOf(s))||P(t,o,String(n)),null!=i&&i.useAdditionalDayOfYearTokens||!function(t){return-1!==j.indexOf(t)}(t)||P(t,o,String(n)),u(H,t,L.localize,G);if(a.match(B))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return t})).join("")}function X(){"true"===document.querySelector(".aside").dataset.shown&&(document.querySelector(".aside").setAttribute("data-shown","false"),document.querySelector("#transparent-background").style.display="none")}n(310),n(126),document.querySelector("#menu-btn").addEventListener("click",(function(){"false"===document.querySelector(".aside").dataset.shown&&(document.querySelector(".aside").setAttribute("data-shown","true"),document.querySelector("#transparent-background").style.display="block")})),document.querySelector("#transparent-background").addEventListener("click",X),document.querySelector("#theme-toggle").addEventListener("click",(function(){document.body.classList.toggle("light"),document.body.classList.toggle("dark")}));class R{constructor(t){this.text=t,this.isDone=!1}toggle(){this.isDone=!this.isDone}}class ${constructor(t){this.name=t,this.tasks=[],this.datetime=new Date}changeName(t){this.name=t}addTask(t){const e=new R(t);this.tasks.push(e)}deleteTask(t){this.tasks.splice(t,1)}get tasksUnfinished(){let t=0;for(let e of this.tasks)!1===e.isDone&&t++;return t}get percentComplete(){let t=0;for(let e of this.tasks)!0===e.isDone&&t++;return Math.round(t/this.tasks.length*100)}}const J={projects:[],logbook:{projects:[],deleteProject:function(t){this.projects.splice(t,1)}},createProject:function(t){const e=new $(t);this.projects.push(e)},deleteProject:function(t){this.projects.splice(t,1)},renameProject:function(t,e){this.projects[t].changeName(e)},moveToLogbook:function(t){const e=this.projects.splice(t,1)[0];this.logbook.projects.push(e)}};function I(t){const e=document.querySelector(".main").querySelector(".container");e.innerHTML="";const n=function(e){let n;n="log"===t?J.logbook.projects[e]:J.projects[e];const r=document.createElement("section");r.classList.add("section"),r.dataset.index=e,r.innerHTML+=`\n      <div class="section__header">\n        <h3 class="section__title">${n.name}</h3>\n        <button class="button section__opt section--add-task">\n          <p>New task</p>\n          <div class="icon section__opt__icon"></div>\n        </button>\n        <button class="button section__opt section--delete">\n          <p>Delete project</p>\n          <div class="icon section__opt__icon"></div>\n        </button>\n      </div>`;for(let t of n.tasks){let e="task";!0===t.isDone&&(e="task task--checked"),r.innerHTML+=`\n        <div class="${e}">\n          <div class="button task__tick"></div>\n          <p class="button task__text">${t.text}</p>\n        </div>\n        `}r.innerHTML+=`\n      <div class="section__subtext">\n        <p class="section__subtext__completion">${n.percentComplete}% completed</p>\n        <p class="section__subtext__date">${"Created on "+G(n.datetime,"EEE dd-MM-yyyy HH:mm")}</p>\n      </div>\n    `,document.querySelector(".main").querySelector(".container").appendChild(r)};if("number"==typeof t)n(t);else if("all"===t){e.innerHTML+='<h2 class="main__title">My tasks</h2>';for(let t=0;t<J.projects.length;t++)n(t)}else if("log"===t){e.innerHTML+='<h2 class="main__title">Logbook</h2>';for(let t=0;t<J.logbook.projects.length;t++)n(t)}}J.createProject("Chores"),J.projects[0].addTask("Do laundry"),J.projects[0].addTask("Wash the dishes"),J.projects[0].addTask("Feed the cat"),J.projects[0].tasks[1].toggle(),J.createProject("Super project!!!"),J.projects[1].addTask("Make tea"),J.projects[1].addTask("Drink tea"),J.projects[1].tasks[0].toggle(),function(){const t=document.querySelector(".aside"),e=t.querySelector(".my-projects");let n=0;e.innerHTML="",e.innerHTML+='<h6 class="my-projects-heading">My projects</h6>';for(let t of J.projects)t.tasksUnfinished>0?e.innerHTML+=`\n        <button class="button aside__item" data-index="${J.projects.indexOf(t)}">\n        <p>${t.name}</p>\n        <div class="aside__indicator">${t.tasksUnfinished}</div>\n        </button>\n      `:e.innerHTML+=`\n        <button class="button aside__item">\n        <p>${t.name}</p>\n        </button>\n      `,n+=t.tasksUnfinished;e.innerHTML+='\n  <button class="button aside__item" id="new-project-btn">\n  <p>New project</p>\n  <div class="aside__indicator"></div>\n  </button>',t.querySelector(".aside__indicator").textContent=n}(),I("all"),document.querySelector(".aside").addEventListener("click",(t=>{if(t.target.classList.contains("button")||t.target.parentElement.classList.contains("button")){const e=t.target.closest(".button");if(e.dataset.index?I(parseInt(e.dataset.index)):"all-tasks-btn"===e.id?I("all"):"logbook-btn"===e.id&&I("log"),"theme-toggle"===e.id){const t=e.querySelector("p").innerHTML;e.querySelector("p").innerHTML="Switch to Dark theme"===t?"Switch to Light theme":"Switch to Dark theme"}"new-project-btn"===e.id&&function(){const t=document.querySelector(".main").querySelector(".container");t.innerHTML="",t.innerHTML+='<h2 class="main__title">New project</h2>';const e=document.createElement("section");e.classList.add("section"),e.innerHTML+='\n    <div class="section__header">\n      <form autocomplete="off">\n        <input class="section__title" type="text" id="project-name-field" maxlength="30" placeholder="Enter name">\n        <button type="submit" id="project-submit-btn" class="button section__opt section--add-task">\n          <p>Create new project</p>\n          <div class="section__opt__icon icon"></div>\n        </button>\n      </form>\n    </div>',t.appendChild(e)}(),X()}})),document.querySelector(".main").addEventListener("click",(t=>{function e(){document.querySelectorAll(".task__delete-button").forEach((t=>{t.remove()}))}if(t.target.classList.contains("button")||t.target.parentElement.classList.contains("button")){const n=t.target.closest(".button");if(n.classList.contains("task__text")){document.querySelectorAll(".task__delete-button").forEach((t=>{t.remove()}));const t=document.createElement("div");t.classList.add("task__delete-button","button"),n.parentElement.appendChild(t)}else e();n.classList.contains("section--add-task"),"project-submit-btn"===n.id&&(t.preventDefault(),console.log("HAHAHA"))}else e()}))})()})();