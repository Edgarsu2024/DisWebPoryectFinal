import{Ba as pe,Ca as T,Da as me,K as le,M as fe,N as w,O as he,Q as B,S as v,T as L,Ua as m,Va as f,eb as Ce,ga as Z,h as de,hb as Fe,ib as Ee,ka as ge,qa as De,sa as p,ua as W,wa as K,xa as X}from"./chunk-GCXAFFYP.js";var Ie=null;function q(){return Ie}function Qt(e){Ie??=e}var ye=class{};var se=new B(""),oe=(()=>{class e{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||e)};static \u0275prov=w({token:e,factory:()=>L(Te),providedIn:"platform"})}return e})(),en=new B(""),Te=(()=>{class e extends oe{_location;_history;_doc=L(se);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return q().getBaseHref(this._doc)}onPopState(t){let i=q().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",t,!1),()=>i.removeEventListener("popstate",t)}onHashChange(t){let i=q().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",t,!1),()=>i.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,i,r){this._history.pushState(t,i,r)}replaceState(t,i,r){this._history.replaceState(t,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||e)};static \u0275prov=w({token:e,factory:()=>new e,providedIn:"platform"})}return e})();function ue(e,n){if(e.length==0)return n;if(n.length==0)return e;let t=0;return e.endsWith("/")&&t++,n.startsWith("/")&&t++,t==2?e+n.substring(1):t==1?e+n:e+"/"+n}function we(e){let n=e.match(/#|\?|$/),t=n&&n.index||e.length,i=t-(e[t-1]==="/"?1:0);return e.slice(0,i)+e.slice(t)}function S(e){return e&&e[0]!=="?"?"?"+e:e}var G=(()=>{class e{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||e)};static \u0275prov=w({token:e,factory:()=>L(Pe),providedIn:"root"})}return e})(),Me=new B(""),Pe=(()=>{class e extends G{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,i){super(),this._platformLocation=t,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??L(se).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return ue(this._baseHref,t)}path(t=!1){let i=this._platformLocation.pathname+S(this._platformLocation.search),r=this._platformLocation.hash;return r&&t?`${i}${r}`:i}pushState(t,i,r,s){let o=this.prepareExternalUrl(r+S(s));this._platformLocation.pushState(t,i,o)}replaceState(t,i,r,s){let o=this.prepareExternalUrl(r+S(s));this._platformLocation.replaceState(t,i,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(i){return new(i||e)(v(oe),v(Me,8))};static \u0275prov=w({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),tn=(()=>{class e extends G{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(t,i){super(),this._platformLocation=t,i!=null&&(this._baseHref=i)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}path(t=!1){let i=this._platformLocation.hash??"#";return i.length>0?i.substring(1):i}prepareExternalUrl(t){let i=ue(this._baseHref,t);return i.length>0?"#"+i:i}pushState(t,i,r,s){let o=this.prepareExternalUrl(r+S(s));o.length==0&&(o=this._platformLocation.pathname),this._platformLocation.pushState(t,i,o)}replaceState(t,i,r,s){let o=this.prepareExternalUrl(r+S(s));o.length==0&&(o=this._platformLocation.pathname),this._platformLocation.replaceState(t,i,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(i){return new(i||e)(v(oe),v(Me,8))};static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})(),Ne=(()=>{class e{_subject=new de;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let i=this._locationStrategy.getBaseHref();this._basePath=xe(we(Ae(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,i=""){return this.path()==this.normalize(t+S(i))}normalize(t){return e.stripTrailingSlash($e(this._basePath,Ae(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,i="",r=null){this._locationStrategy.pushState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+S(i)),r)}replaceState(t,i="",r=null){this._locationStrategy.replaceState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+S(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",i){this._urlChangeListeners.forEach(r=>r(t,i))}subscribe(t,i,r){return this._subject.subscribe({next:t,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=S;static joinWithSlash=ue;static stripTrailingSlash=we;static \u0275fac=function(i){return new(i||e)(v(G))};static \u0275prov=w({token:e,factory:()=>ke(),providedIn:"root"})}return e})();function ke(){return new Ne(v(G))}function $e(e,n){if(!e||!n.startsWith(e))return n;let t=n.substring(e.length);return t===""||["/",";","?","#"].includes(t[0])?t:n}function Ae(e){return e.replace(/\/index.html$/,"")}function xe(e){if(new RegExp("^(https?:)?//").test(e)){let[,t]=e.split(/\/\/[^\/]+/);return t}return e}var g=function(e){return e[e.Format=0]="Format",e[e.Standalone=1]="Standalone",e}(g||{}),d=function(e){return e[e.Narrow=0]="Narrow",e[e.Abbreviated=1]="Abbreviated",e[e.Wide=2]="Wide",e[e.Short=3]="Short",e}(d||{}),D=function(e){return e[e.Short=0]="Short",e[e.Medium=1]="Medium",e[e.Long=2]="Long",e[e.Full=3]="Full",e}(D||{}),I={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function Ue(e){return m(e)[f.LocaleId]}function ze(e,n,t){let i=m(e),r=[i[f.DayPeriodsFormat],i[f.DayPeriodsStandalone]],s=C(r,n);return C(s,t)}function Ve(e,n,t){let i=m(e),r=[i[f.DaysFormat],i[f.DaysStandalone]],s=C(r,n);return C(s,t)}function je(e,n,t){let i=m(e),r=[i[f.MonthsFormat],i[f.MonthsStandalone]],s=C(r,n);return C(s,t)}function Ge(e,n){let i=m(e)[f.Eras];return C(i,n)}function P(e,n){let t=m(e);return C(t[f.DateFormat],n)}function N(e,n){let t=m(e);return C(t[f.TimeFormat],n)}function k(e,n){let i=m(e)[f.DateTimeFormat];return C(i,n)}function H(e,n){let t=m(e),i=t[f.NumberSymbols][n];if(typeof i>"u"){if(n===I.CurrencyDecimal)return t[f.NumberSymbols][I.Decimal];if(n===I.CurrencyGroup)return t[f.NumberSymbols][I.Group]}return i}function Le(e){if(!e[f.ExtraData])throw new Error(`Missing extra locale data for the locale "${e[f.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`)}function He(e){let n=m(e);return Le(n),(n[f.ExtraData][2]||[]).map(i=>typeof i=="string"?J(i):[J(i[0]),J(i[1])])}function Ye(e,n,t){let i=m(e);Le(i);let r=[i[f.ExtraData][0],i[f.ExtraData][1]],s=C(r,n)||[];return C(s,t)||[]}function C(e,n){for(let t=n;t>-1;t--)if(typeof e[t]<"u")return e[t];throw new Error("Locale data API: locale data undefined")}function J(e){let[n,t]=e.split(":");return{hours:+n,minutes:+t}}var Ze=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,$={},We=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,_=function(e){return e[e.Short=0]="Short",e[e.ShortGMT=1]="ShortGMT",e[e.Long=2]="Long",e[e.Extended=3]="Extended",e}(_||{}),c=function(e){return e[e.FullYear=0]="FullYear",e[e.Month=1]="Month",e[e.Date=2]="Date",e[e.Hours=3]="Hours",e[e.Minutes=4]="Minutes",e[e.Seconds=5]="Seconds",e[e.FractionalSeconds=6]="FractionalSeconds",e[e.Day=7]="Day",e}(c||{}),a=function(e){return e[e.DayPeriods=0]="DayPeriods",e[e.Days=1]="Days",e[e.Months=2]="Months",e[e.Eras=3]="Eras",e}(a||{});function Ke(e,n,t,i){let r=rt(e);n=A(t,n)||n;let o=[],u;for(;n;)if(u=We.exec(n),u){o=o.concat(u.slice(1));let y=o.pop();if(!y)break;n=y}else{o.push(n);break}let F=r.getTimezoneOffset();i&&(F=Oe(i,F),r=it(r,i,!0));let b="";return o.forEach(y=>{let M=tt(y);b+=M?M(r,t,F):y==="''"?"'":y.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),b}function j(e,n,t){let i=new Date(0);return i.setFullYear(e,n,t),i.setHours(0,0,0),i}function A(e,n){let t=Ue(e);if($[t]??={},$[t][n])return $[t][n];let i="";switch(n){case"shortDate":i=P(e,D.Short);break;case"mediumDate":i=P(e,D.Medium);break;case"longDate":i=P(e,D.Long);break;case"fullDate":i=P(e,D.Full);break;case"shortTime":i=N(e,D.Short);break;case"mediumTime":i=N(e,D.Medium);break;case"longTime":i=N(e,D.Long);break;case"fullTime":i=N(e,D.Full);break;case"short":let r=A(e,"shortTime"),s=A(e,"shortDate");i=x(k(e,D.Short),[r,s]);break;case"medium":let o=A(e,"mediumTime"),u=A(e,"mediumDate");i=x(k(e,D.Medium),[o,u]);break;case"long":let F=A(e,"longTime"),b=A(e,"longDate");i=x(k(e,D.Long),[F,b]);break;case"full":let y=A(e,"fullTime"),M=A(e,"fullDate");i=x(k(e,D.Full),[y,M]);break}return i&&($[t][n]=i),i}function x(e,n){return n&&(e=e.replace(/\{([^}]+)}/g,function(t,i){return n!=null&&i in n?n[i]:t})),e}function E(e,n,t="-",i,r){let s="";(e<0||r&&e<=0)&&(r?e=-e+1:(e=-e,s=t));let o=String(e);for(;o.length<n;)o="0"+o;return i&&(o=o.slice(o.length-n)),s+o}function Xe(e,n){return E(e,3).substring(0,n)}function h(e,n,t=0,i=!1,r=!1){return function(s,o){let u=qe(e,s);if((t>0||u>-t)&&(u+=t),e===c.Hours)u===0&&t===-12&&(u=12);else if(e===c.FractionalSeconds)return Xe(u,n);let F=H(o,I.MinusSign);return E(u,n,F,i,r)}}function qe(e,n){switch(e){case c.FullYear:return n.getFullYear();case c.Month:return n.getMonth();case c.Date:return n.getDate();case c.Hours:return n.getHours();case c.Minutes:return n.getMinutes();case c.Seconds:return n.getSeconds();case c.FractionalSeconds:return n.getMilliseconds();case c.Day:return n.getDay();default:throw new Error(`Unknown DateType value "${e}".`)}}function l(e,n,t=g.Format,i=!1){return function(r,s){return Je(r,s,e,n,t,i)}}function Je(e,n,t,i,r,s){switch(t){case a.Months:return je(n,r,i)[e.getMonth()];case a.Days:return Ve(n,r,i)[e.getDay()];case a.DayPeriods:let o=e.getHours(),u=e.getMinutes();if(s){let b=He(n),y=Ye(n,r,i),M=b.findIndex(O=>{if(Array.isArray(O)){let[Y,R]=O,ae=o>=Y.hours&&u>=Y.minutes,ce=o<R.hours||o===R.hours&&u<R.minutes;if(Y.hours<R.hours){if(ae&&ce)return!0}else if(ae||ce)return!0}else if(O.hours===o&&O.minutes===u)return!0;return!1});if(M!==-1)return y[M]}return ze(n,r,i)[o<12?0:1];case a.Eras:return Ge(n,i)[e.getFullYear()<=0?0:1];default:let F=t;throw new Error(`unexpected translation type ${F}`)}}function U(e){return function(n,t,i){let r=-1*i,s=H(t,I.MinusSign),o=r>0?Math.floor(r/60):Math.ceil(r/60);switch(e){case _.Short:return(r>=0?"+":"")+E(o,2,s)+E(Math.abs(r%60),2,s);case _.ShortGMT:return"GMT"+(r>=0?"+":"")+E(o,1,s);case _.Long:return"GMT"+(r>=0?"+":"")+E(o,2,s)+":"+E(Math.abs(r%60),2,s);case _.Extended:return i===0?"Z":(r>=0?"+":"")+E(o,2,s)+":"+E(Math.abs(r%60),2,s);default:throw new Error(`Unknown zone width "${e}"`)}}}var Qe=0,V=4;function et(e){let n=j(e,Qe,1).getDay();return j(e,0,1+(n<=V?V:V+7)-n)}function Be(e){let n=e.getDay(),t=n===0?-3:V-n;return j(e.getFullYear(),e.getMonth(),e.getDate()+t)}function Q(e,n=!1){return function(t,i){let r;if(n){let s=new Date(t.getFullYear(),t.getMonth(),1).getDay()-1,o=t.getDate();r=1+Math.floor((o+s)/7)}else{let s=Be(t),o=et(s.getFullYear()),u=s.getTime()-o.getTime();r=1+Math.round(u/6048e5)}return E(r,e,H(i,I.MinusSign))}}function z(e,n=!1){return function(t,i){let s=Be(t).getFullYear();return E(s,e,H(i,I.MinusSign),n)}}var ee={};function tt(e){if(ee[e])return ee[e];let n;switch(e){case"G":case"GG":case"GGG":n=l(a.Eras,d.Abbreviated);break;case"GGGG":n=l(a.Eras,d.Wide);break;case"GGGGG":n=l(a.Eras,d.Narrow);break;case"y":n=h(c.FullYear,1,0,!1,!0);break;case"yy":n=h(c.FullYear,2,0,!0,!0);break;case"yyy":n=h(c.FullYear,3,0,!1,!0);break;case"yyyy":n=h(c.FullYear,4,0,!1,!0);break;case"Y":n=z(1);break;case"YY":n=z(2,!0);break;case"YYY":n=z(3);break;case"YYYY":n=z(4);break;case"M":case"L":n=h(c.Month,1,1);break;case"MM":case"LL":n=h(c.Month,2,1);break;case"MMM":n=l(a.Months,d.Abbreviated);break;case"MMMM":n=l(a.Months,d.Wide);break;case"MMMMM":n=l(a.Months,d.Narrow);break;case"LLL":n=l(a.Months,d.Abbreviated,g.Standalone);break;case"LLLL":n=l(a.Months,d.Wide,g.Standalone);break;case"LLLLL":n=l(a.Months,d.Narrow,g.Standalone);break;case"w":n=Q(1);break;case"ww":n=Q(2);break;case"W":n=Q(1,!0);break;case"d":n=h(c.Date,1);break;case"dd":n=h(c.Date,2);break;case"c":case"cc":n=h(c.Day,1);break;case"ccc":n=l(a.Days,d.Abbreviated,g.Standalone);break;case"cccc":n=l(a.Days,d.Wide,g.Standalone);break;case"ccccc":n=l(a.Days,d.Narrow,g.Standalone);break;case"cccccc":n=l(a.Days,d.Short,g.Standalone);break;case"E":case"EE":case"EEE":n=l(a.Days,d.Abbreviated);break;case"EEEE":n=l(a.Days,d.Wide);break;case"EEEEE":n=l(a.Days,d.Narrow);break;case"EEEEEE":n=l(a.Days,d.Short);break;case"a":case"aa":case"aaa":n=l(a.DayPeriods,d.Abbreviated);break;case"aaaa":n=l(a.DayPeriods,d.Wide);break;case"aaaaa":n=l(a.DayPeriods,d.Narrow);break;case"b":case"bb":case"bbb":n=l(a.DayPeriods,d.Abbreviated,g.Standalone,!0);break;case"bbbb":n=l(a.DayPeriods,d.Wide,g.Standalone,!0);break;case"bbbbb":n=l(a.DayPeriods,d.Narrow,g.Standalone,!0);break;case"B":case"BB":case"BBB":n=l(a.DayPeriods,d.Abbreviated,g.Format,!0);break;case"BBBB":n=l(a.DayPeriods,d.Wide,g.Format,!0);break;case"BBBBB":n=l(a.DayPeriods,d.Narrow,g.Format,!0);break;case"h":n=h(c.Hours,1,-12);break;case"hh":n=h(c.Hours,2,-12);break;case"H":n=h(c.Hours,1);break;case"HH":n=h(c.Hours,2);break;case"m":n=h(c.Minutes,1);break;case"mm":n=h(c.Minutes,2);break;case"s":n=h(c.Seconds,1);break;case"ss":n=h(c.Seconds,2);break;case"S":n=h(c.FractionalSeconds,1);break;case"SS":n=h(c.FractionalSeconds,2);break;case"SSS":n=h(c.FractionalSeconds,3);break;case"Z":case"ZZ":case"ZZZ":n=U(_.Short);break;case"ZZZZZ":n=U(_.Extended);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":n=U(_.ShortGMT);break;case"OOOO":case"ZZZZ":case"zzzz":n=U(_.Long);break;default:return null}return ee[e]=n,n}function Oe(e,n){e=e.replace(/:/g,"");let t=Date.parse("Jan 01, 1970 00:00:00 "+e)/6e4;return isNaN(t)?n:t}function nt(e,n){return e=new Date(e.getTime()),e.setMinutes(e.getMinutes()+n),e}function it(e,n,t){let i=t?-1:1,r=e.getTimezoneOffset(),s=Oe(n,r);return nt(e,i*(s-r))}function rt(e){if(Se(e))return e;if(typeof e=="number"&&!isNaN(e))return new Date(e);if(typeof e=="string"){if(e=e.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(e)){let[r,s=1,o=1]=e.split("-").map(u=>+u);return j(r,s-1,o)}let t=parseFloat(e);if(!isNaN(e-t))return new Date(t);let i;if(i=e.match(Ze))return st(i)}let n=new Date(e);if(!Se(n))throw new Error(`Unable to convert "${e}" into a date`);return n}function st(e){let n=new Date(0),t=0,i=0,r=e[8]?n.setUTCFullYear:n.setFullYear,s=e[8]?n.setUTCHours:n.setHours;e[9]&&(t=Number(e[9]+e[10]),i=Number(e[9]+e[11])),r.call(n,Number(e[1]),Number(e[2])-1,Number(e[3]));let o=Number(e[4]||0)-t,u=Number(e[5]||0)-i,F=Number(e[6]||0),b=Math.floor(parseFloat("0."+(e[7]||0))*1e3);return s.call(n,o,u,F,b),n}function Se(e){return e instanceof Date&&!isNaN(e.valueOf())}function nn(e,n){n=encodeURIComponent(n);for(let t of e.split(";")){let i=t.indexOf("="),[r,s]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===n)return decodeURIComponent(s)}return null}var te=class{$implicit;ngForOf;index;count;constructor(n,t,i,r){this.$implicit=n,this.ngForOf=t,this.index=i,this.count=r}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},rn=(()=>{class e{_viewContainer;_template;_differs;set ngForOf(t){this._ngForOf=t,this._ngForOfDirty=!0}set ngForTrackBy(t){this._trackByFn=t}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(t,i,r){this._viewContainer=t,this._template=i,this._differs=r}set ngForTemplate(t){t&&(this._template=t)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let t=this._ngForOf;if(!this._differ&&t)if(0)try{}catch{}else this._differ=this._differs.find(t).create(this.ngForTrackBy)}if(this._differ){let t=this._differ.diff(this._ngForOf);t&&this._applyChanges(t)}}_applyChanges(t){let i=this._viewContainer;t.forEachOperation((r,s,o)=>{if(r.previousIndex==null)i.createEmbeddedView(this._template,new te(r.item,this._ngForOf,-1,-1),o===null?void 0:o);else if(o==null)i.remove(s===null?void 0:s);else if(s!==null){let u=i.get(s);i.move(u,o),_e(u,r)}});for(let r=0,s=i.length;r<s;r++){let u=i.get(r).context;u.index=r,u.count=s,u.ngForOf=this._ngForOf}t.forEachIdentityChange(r=>{let s=i.get(r.currentIndex);_e(s,r)})}static ngTemplateContextGuard(t,i){return!0}static \u0275fac=function(i){return new(i||e)(p(X),p(W),p(Fe))};static \u0275dir=T({type:e,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return e})();function _e(e,n){e.context.$implicit=n.item}var sn=(()=>{class e{_viewContainer;_context=new ne;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(t,i){this._viewContainer=t,this._thenTemplateRef=i}set ngIf(t){this._context.$implicit=this._context.ngIf=t,this._updateView()}set ngIfThen(t){be("ngIfThen",t),this._thenTemplateRef=t,this._thenViewRef=null,this._updateView()}set ngIfElse(t){be("ngIfElse",t),this._elseTemplateRef=t,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(t,i){return!0}static \u0275fac=function(i){return new(i||e)(p(X),p(W))};static \u0275dir=T({type:e,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return e})(),ne=class{$implicit=null;ngIf=null};function be(e,n){if(!!!(!n||n.createEmbeddedView))throw new Error(`${e} must be a TemplateRef, but received '${fe(n)}'.`)}var on=(()=>{class e{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(t,i,r){this._ngEl=t,this._differs=i,this._renderer=r}set ngStyle(t){this._ngStyle=t,!this._differ&&t&&(this._differ=this._differs.find(t).create())}ngDoCheck(){if(this._differ){let t=this._differ.diff(this._ngStyle);t&&this._applyChanges(t)}}_setStyle(t,i){let[r,s]=t.split("."),o=r.indexOf("-")===-1?void 0:De.DashCase;i!=null?this._renderer.setStyle(this._ngEl.nativeElement,r,s?`${i}${s}`:i,o):this._renderer.removeStyle(this._ngEl.nativeElement,r,o)}_applyChanges(t){t.forEachRemovedItem(i=>this._setStyle(i.key,null)),t.forEachAddedItem(i=>this._setStyle(i.key,i.currentValue)),t.forEachChangedItem(i=>this._setStyle(i.key,i.currentValue))}static \u0275fac=function(i){return new(i||e)(p(Z),p(Ee),p(K))};static \u0275dir=T({type:e,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return e})();function ot(e,n){return new le(2100,!1)}var ut="mediumDate",at=new B(""),ct=new B(""),un=(()=>{class e{locale;defaultTimezone;defaultOptions;constructor(t,i,r){this.locale=t,this.defaultTimezone=i,this.defaultOptions=r}transform(t,i,r,s){if(t==null||t===""||t!==t)return null;try{let o=i??this.defaultOptions?.dateFormat??ut,u=r??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return Ke(t,o,s||this.locale,u)}catch(o){throw ot(e,o.message)}}static \u0275fac=function(i){return new(i||e)(p(Ce,16),p(at,24),p(ct,24))};static \u0275pipe=me({name:"date",type:e,pure:!0})}return e})();var an=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=pe({type:e});static \u0275inj=he({})}return e})(),dt="browser",lt="server";function ft(e){return e===dt}function cn(e){return e===lt}var dn=(()=>{class e{static \u0275prov=w({token:e,providedIn:"root",factory:()=>ft(L(ge))?new ie(L(se),window):new re})}return e})(),ie=class{document;window;offset=()=>[0,0];constructor(n,t){this.document=n,this.window=t}setOffset(n){Array.isArray(n)?this.offset=()=>n:this.offset=n}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(n){this.window.scrollTo(n[0],n[1])}scrollToAnchor(n){let t=ht(this.document,n);t&&(this.scrollToElement(t),t.focus())}setHistoryScrollRestoration(n){this.window.history.scrollRestoration=n}scrollToElement(n){let t=n.getBoundingClientRect(),i=t.left+this.window.pageXOffset,r=t.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(i-s[0],r-s[1])}};function ht(e,n){let t=e.getElementById(n)||e.getElementsByName(n)[0];if(t)return t;if(typeof e.createTreeWalker=="function"&&e.body&&typeof e.body.attachShadow=="function"){let i=e.createTreeWalker(e.body,NodeFilter.SHOW_ELEMENT),r=i.currentNode;for(;r;){let s=r.shadowRoot;if(s){let o=s.getElementById(n)||s.querySelector(`[name="${n}"]`);if(o)return o}r=i.nextNode()}}return null}var re=class{setOffset(n){}getScrollPosition(){return[0,0]}scrollToPosition(n){}scrollToAnchor(n){}setHistoryScrollRestoration(n){}},ve=class{};export{q as a,Qt as b,ye as c,se as d,en as e,G as f,Pe as g,tn as h,Ne as i,nn as j,rn as k,sn as l,on as m,un as n,an as o,dt as p,cn as q,dn as r,ve as s};