/*
 AngularJS v1.4.8
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(S,X,u){'use strict';function G(a){return function(){var b=arguments[0],d;d="["+(a?a+":":"")+b+"] http://errors.angularjs.org/1.4.8/"+(a?a+"/":"")+b;for(b=1;b<arguments.length;b++){d=d+(1==b?"?":"&")+"p"+(b-1)+"=";var c=encodeURIComponent,e;e=arguments[b];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;d+=c(e)}return Error(d)}}function za(a){if(null==a||Xa(a))return!1;if(I(a)||E(a)||B&&a instanceof B)return!0;
var b="length"in Object(a)&&a.length;return Q(b)&&(0<=b&&b-1 in a||"function"==typeof a.item)}function n(a,b,d){var c,e;if(a)if(z(a))for(c in a)"prototype"==c||"length"==c||"name"==c||a.hasOwnProperty&&!a.hasOwnProperty(c)||b.call(d,a[c],c,a);else if(I(a)||za(a)){var f="object"!==typeof a;c=0;for(e=a.length;c<e;c++)(f||c in a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==n)a.forEach(b,d,a);else if(nc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&
b.call(d,a[c],c,a);else for(c in a)qa.call(a,c)&&b.call(d,a[c],c,a);return a}function oc(a,b,d){for(var c=Object.keys(a).sort(),e=0;e<c.length;e++)b.call(d,a[c[e]],c[e]);return c}function pc(a){return function(b,d){a(d,b)}}function Td(){return++nb}function Mb(a,b,d){for(var c=a.$$hashKey,e=0,f=b.length;e<f;++e){var g=b[e];if(H(g)||z(g))for(var h=Object.keys(g),k=0,l=h.length;k<l;k++){var m=h[k],r=g[m];d&&H(r)?da(r)?a[m]=new Date(r.valueOf()):Ma(r)?a[m]=new RegExp(r):r.nodeName?a[m]=r.cloneNode(!0):
Nb(r)?a[m]=r.clone():(H(a[m])||(a[m]=I(r)?[]:{}),Mb(a[m],[r],!0)):a[m]=r}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function M(a){return Mb(a,ra.call(arguments,1),!1)}function Ud(a){return Mb(a,ra.call(arguments,1),!0)}function ea(a){return parseInt(a,10)}function Ob(a,b){return M(Object.create(a),b)}function x(){}function Ya(a){return a}function na(a){return function(){return a}}function qc(a){return z(a.toString)&&a.toString!==sa}function q(a){return"undefined"===typeof a}function y(a){return"undefined"!==
typeof a}function H(a){return null!==a&&"object"===typeof a}function nc(a){return null!==a&&"object"===typeof a&&!rc(a)}function E(a){return"string"===typeof a}function Q(a){return"number"===typeof a}function da(a){return"[object Date]"===sa.call(a)}function z(a){return"function"===typeof a}function Ma(a){return"[object RegExp]"===sa.call(a)}function Xa(a){return a&&a.window===a}function Za(a){return a&&a.$evalAsync&&a.$watch}function $a(a){return"boolean"===typeof a}function sc(a){return a&&Q(a.length)&&
Vd.test(sa.call(a))}function Nb(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function Wd(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++)b[a[d]]=!0;return b}function ta(a){return F(a.nodeName||a[0]&&a[0].nodeName)}function ab(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function bb(a,b){function d(a,b){var d=b.$$hashKey,e;if(I(a)){e=0;for(var f=a.length;e<f;e++)b.push(c(a[e]))}else if(nc(a))for(e in a)b[e]=c(a[e]);else if(a&&"function"===typeof a.hasOwnProperty)for(e in a)a.hasOwnProperty(e)&&
(b[e]=c(a[e]));else for(e in a)qa.call(a,e)&&(b[e]=c(a[e]));d?b.$$hashKey=d:delete b.$$hashKey;return b}function c(a){if(!H(a))return a;var b=e.indexOf(a);if(-1!==b)return f[b];if(Xa(a)||Za(a))throw Aa("cpws");var b=!1,c;I(a)?(c=[],b=!0):sc(a)?c=new a.constructor(a):da(a)?c=new Date(a.getTime()):Ma(a)?(c=new RegExp(a.source,a.toString().match(/[^\/]*$/)[0]),c.lastIndex=a.lastIndex):z(a.cloneNode)?c=a.cloneNode(!0):(c=Object.create(rc(a)),b=!0);e.push(a);f.push(c);return b?d(a,c):c}var e=[],f=[];if(b){if(sc(b))throw Aa("cpta");
if(a===b)throw Aa("cpi");I(b)?b.length=0:n(b,function(a,c){"$$hashKey"!==c&&delete b[c]});e.push(a);f.push(b);return d(a,b)}return c(a)}function ia(a,b){if(I(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(H(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function ma(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d==typeof b&&"object"==d)if(I(a)){if(!I(b))return!1;if((d=a.length)==b.length){for(c=
0;c<d;c++)if(!ma(a[c],b[c]))return!1;return!0}}else{if(da(a))return da(b)?ma(a.getTime(),b.getTime()):!1;if(Ma(a))return Ma(b)?a.toString()==b.toString():!1;if(Za(a)||Za(b)||Xa(a)||Xa(b)||I(b)||da(b)||Ma(b))return!1;d=$();for(c in a)if("$"!==c.charAt(0)&&!z(a[c])){if(!ma(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&y(b[c])&&!z(b[c]))return!1;return!0}return!1}function cb(a,b,d){return a.concat(ra.call(b,d))}function tc(a,b){var d=2<arguments.length?ra.call(arguments,2):
[];return!z(b)||b instanceof RegExp?b:d.length?function(){return arguments.length?b.apply(a,cb(d,arguments,0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function Xd(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=u:Xa(b)?d="$WINDOW":b&&X===b?d="$DOCUMENT":Za(b)&&(d="$SCOPE");return d}function db(a,b){if("undefined"===typeof a)return u;Q(b)||(b=b?2:null);return JSON.stringify(a,Xd,b)}function uc(a){return E(a)?JSON.parse(a):a}function vc(a,
b){var d=Date.parse("Jan 01, 1970 00:00:00 "+a)/6E4;return isNaN(d)?b:d}function Pb(a,b,d){d=d?-1:1;var c=vc(b,a.getTimezoneOffset());b=a;a=d*(c-a.getTimezoneOffset());b=new Date(b.getTime());b.setMinutes(b.getMinutes()+a);return b}function ua(a){a=B(a).clone();try{a.empty()}catch(b){}var d=B("<div>").append(a).html();try{return a[0].nodeType===Na?F(d):d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+F(b)})}catch(c){return F(d)}}function wc(a){try{return decodeURIComponent(a)}catch(b){}}
function xc(a){var b={};n((a||"").split("&"),function(a){var c,e,f;a&&(e=a=a.replace(/\+/g,"%20"),c=a.indexOf("="),-1!==c&&(e=a.substring(0,c),f=a.substring(c+1)),e=wc(e),y(e)&&(f=y(f)?wc(f):!0,qa.call(b,e)?I(b[e])?b[e].push(f):b[e]=[b[e],f]:b[e]=f))});return b}function Qb(a){var b=[];n(a,function(a,c){I(a)?n(a,function(a){b.push(ja(c,!0)+(!0===a?"":"="+ja(a,!0)))}):b.push(ja(c,!0)+(!0===a?"":"="+ja(a,!0)))});return b.length?b.join("&"):""}function ob(a){return ja(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,
"=").replace(/%2B/gi,"+")}function ja(a,b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function Yd(a,b){var d,c,e=Oa.length;for(c=0;c<e;++c)if(d=Oa[c]+b,E(d=a.getAttribute(d)))return d;return null}function Zd(a,b){var d,c,e={};n(Oa,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});n(Oa,function(b){b+="app";var e;!d&&(e=a.querySelector("["+b.replace(":",
"\\:")+"]"))&&(d=e,c=e.getAttribute(b))});d&&(e.strictDi=null!==Yd(d,"strict-di"),b(d,c?[c]:[],e))}function yc(a,b,d){H(d)||(d={});d=M({strictDi:!1},d);var c=function(){a=B(a);if(a.injector()){var c=a[0]===X?"document":ua(a);throw Aa("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);b.unshift("ng");c=eb(b,d.strictDi);c.invoke(["$rootScope",
"$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;S&&e.test(S.name)&&(d.debugInfoEnabled=!0,S.name=S.name.replace(e,""));if(S&&!f.test(S.name))return c();S.name=S.name.replace(f,"");fa.resumeBootstrap=function(a){n(a,function(a){b.push(a)});return c()};z(fa.resumeDeferredBootstrap)&&fa.resumeDeferredBootstrap()}function $d(){S.name="NG_ENABLE_DEBUG_INFO!"+S.name;S.location.reload()}
function ae(a){a=fa.element(a).injector();if(!a)throw Aa("test");return a.get("$$testability")}function zc(a,b){b=b||"_";return a.replace(be,function(a,c){return(c?b:"")+a.toLowerCase()})}function ce(){var a;if(!Ac){var b=pb();(oa=q(b)?S.jQuery:b?S[b]:u)&&oa.fn.on?(B=oa,M(oa.fn,{scope:Pa.scope,isolateScope:Pa.isolateScope,controller:Pa.controller,injector:Pa.injector,inheritedData:Pa.inheritedData}),a=oa.cleanData,oa.cleanData=function(b){var c;if(Rb)Rb=!1;else for(var e=0,f;null!=(f=b[e]);e++)(c=
oa._data(f,"events"))&&c.$destroy&&oa(f).triggerHandler("$destroy");a(b)}):B=N;fa.element=B;Ac=!0}}function qb(a,b,d){if(!a)throw Aa("areq",b||"?",d||"required");return a}function Qa(a,b,d){d&&I(a)&&(a=a[a.length-1]);qb(z(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Ra(a,b){if("hasOwnProperty"===a)throw Aa("badname",b);}function Bc(a,b,d){if(!b)return a;b=b.split(".");for(var c,e=a,f=b.length,g=0;g<f;g++)c=b[g],a&&(a=(e=a)[c]);return!d&&
z(a)?tc(e,a):a}function rb(a){for(var b=a[0],d=a[a.length-1],c,e=1;b!==d&&(b=b.nextSibling);e++)if(c||a[e]!==b)c||(c=B(ra.call(a,0,e))),c.push(b);return c||a}function $(){return Object.create(null)}function de(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=G("$injector"),c=G("ng");a=b(a,"angular",Object);a.$$minErr=a.$$minErr||G;return b(a,"module",function(){var a={};return function(f,g,h){if("hasOwnProperty"===f)throw c("badname","module");g&&a.hasOwnProperty(f)&&(a[f]=null);return b(a,f,function(){function a(b,
d,e,f){f||(f=c);return function(){f[e||"push"]([b,d,arguments]);return v}}function b(a,d){return function(b,e){e&&z(e)&&(e.$$moduleName=f);c.push([a,d,arguments]);return v}}if(!g)throw d("nomod",f);var c=[],e=[],t=[],A=a("$injector","invoke","push",e),v={_invokeQueue:c,_configBlocks:e,_runBlocks:t,requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide",
"decorator"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:A,run:function(a){t.push(a);return this}};h&&A(h);return v})}})}function ee(a){M(a,{bootstrap:yc,copy:bb,extend:M,merge:Ud,equals:ma,element:B,forEach:n,injector:eb,noop:x,bind:tc,toJson:db,fromJson:uc,identity:Ya,isUndefined:q,isDefined:y,isString:E,isFunction:z,isObject:H,isNumber:Q,isElement:Nb,isArray:I,
version:fe,isDate:da,lowercase:F,uppercase:sb,callbacks:{counter:0},getTestability:ae,$$minErr:G,$$csp:Ba,reloadWithDebugInfo:$d});Sb=de(S);Sb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:ge});a.provider("$compile",Cc).directive({a:he,input:Dc,textarea:Dc,form:ie,script:je,select:ke,style:le,option:me,ngBind:ne,ngBindHtml:oe,ngBindTemplate:pe,ngClass:qe,ngClassEven:re,ngClassOdd:se,ngCloak:te,ngController:ue,ngForm:ve,ngHide:we,ngIf:xe,ngInclude:ye,ngInit:ze,ngNonBindable:Ae,
ngPluralize:Be,ngRepeat:Ce,ngShow:De,ngStyle:Ee,ngSwitch:Fe,ngSwitchWhen:Ge,ngSwitchDefault:He,ngOptions:Ie,ngTransclude:Je,ngModel:Ke,ngList:Le,ngChange:Me,pattern:Ec,ngPattern:Ec,required:Fc,ngRequired:Fc,minlength:Gc,ngMinlength:Gc,maxlength:Hc,ngMaxlength:Hc,ngValue:Ne,ngModelOptions:Oe}).directive({ngInclude:Pe}).directive(tb).directive(Ic);a.provider({$anchorScroll:Qe,$animate:Re,$animateCss:Se,$$animateQueue:Te,$$AnimateRunner:Ue,$browser:Ve,$cacheFactory:We,$controller:Xe,$document:Ye,$exceptionHandler:Ze,
$filter:Jc,$$forceReflow:$e,$interpolate:af,$interval:bf,$http:cf,$httpParamSerializer:df,$httpParamSerializerJQLike:ef,$httpBackend:ff,$xhrFactory:gf,$location:hf,$log:jf,$parse:kf,$rootScope:lf,$q:mf,$$q:nf,$sce:of,$sceDelegate:pf,$sniffer:qf,$templateCache:rf,$templateRequest:sf,$$testability:tf,$timeout:uf,$window:vf,$$rAF:wf,$$jqLite:xf,$$HashMap:yf,$$cookieReader:zf})}])}function fb(a){return a.replace(Af,function(a,d,c,e){return e?c.toUpperCase():c}).replace(Bf,"Moz$1")}function Kc(a){a=a.nodeType;
return 1===a||!a||9===a}function Lc(a,b){var d,c,e=b.createDocumentFragment(),f=[];if(Tb.test(a)){d=d||e.appendChild(b.createElement("div"));c=(Cf.exec(a)||["",""])[1].toLowerCase();c=ka[c]||ka._default;d.innerHTML=c[1]+a.replace(Df,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;f=cb(f,d.childNodes);d=e.firstChild;d.textContent=""}else f.push(b.createTextNode(a));e.textContent="";e.innerHTML="";n(f,function(a){e.appendChild(a)});return e}function N(a){if(a instanceof N)return a;var b;E(a)&&(a=U(a),
b=!0);if(!(this instanceof N)){if(b&&"<"!=a.charAt(0))throw Ub("nosel");return new N(a)}if(b){b=X;var d;a=(d=Ef.exec(a))?[b.createElement(d[1])]:(d=Lc(a,b))?d.childNodes:[]}Mc(this,a)}function Vb(a){return a.cloneNode(!0)}function ub(a,b){b||vb(a);if(a.querySelectorAll)for(var d=a.querySelectorAll("*"),c=0,e=d.length;c<e;c++)vb(d[c])}function Nc(a,b,d,c){if(y(c))throw Ub("offargs");var e=(c=wb(a))&&c.events,f=c&&c.handle;if(f)if(b){var g=function(b){var c=e[b];y(d)&&ab(c||[],d);y(d)&&c&&0<c.length||
(a.removeEventListener(b,f,!1),delete e[b])};n(b.split(" "),function(a){g(a);xb[a]&&g(xb[a])})}else for(b in e)"$destroy"!==b&&a.removeEventListener(b,f,!1),delete e[b]}function vb(a,b){var d=a.ng339,c=d&&gb[d];c&&(b?delete c.data[b]:(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),Nc(a)),delete gb[d],a.ng339=u))}function wb(a,b){var d=a.ng339,d=d&&gb[d];b&&!d&&(a.ng339=d=++Ff,d=gb[d]={events:{},data:{},handle:u});return d}function Wb(a,b,d){if(Kc(a)){var c=y(d),e=!c&&b&&!H(b),f=!b;a=(a=wb(a,
!e))&&a.data;if(c)a[b]=d;else{if(f)return a;if(e)return a&&a[b];M(a,b)}}}function yb(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function zb(a,b){b&&a.setAttribute&&n(b.split(" "),function(b){a.setAttribute("class",U((" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+U(b)+" "," ")))})}function Ab(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");n(b.split(" "),
function(a){a=U(a);-1===d.indexOf(" "+a+" ")&&(d+=a+" ")});a.setAttribute("class",U(d))}}function Mc(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=b}}function Oc(a,b){return Bb(a,"$"+(b||"ngController")+"Controller")}function Bb(a,b,d){9==a.nodeType&&(a=a.documentElement);for(b=I(b)?b:[b];a;){for(var c=0,e=b.length;c<e;c++)if(y(d=B.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&
a.host}}function Pc(a){for(ub(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Xb(a,b){b||ub(a);var d=a.parentNode;d&&d.removeChild(a)}function Gf(a,b){b=b||S;if("complete"===b.document.readyState)b.setTimeout(a);else B(b).on("load",a)}function Qc(a,b){var d=Cb[b.toLowerCase()];return d&&Rc[ta(a)]&&d}function Hf(a,b){var d=function(c,d){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=b[d||c.type],g=f?f.length:0;if(g){if(q(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;
c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};var k=f.specialHandlerWrapper||If;1<g&&(f=ia(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||k(a,c,f[l])}};d.elem=a;return d}function If(a,b,d){d.call(a,b)}function Jf(a,b,d){var c=b.relatedTarget;c&&(c===a||Kf.call(a,c))||d.call(a,b)}function xf(){this.$get=function(){return M(N,
{hasClass:function(a,b){a.attr&&(a=a[0]);return yb(a,b)},addClass:function(a,b){a.attr&&(a=a[0]);return Ab(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return zb(a,b)}})}}function Ca(a,b){var d=a&&a.$$hashKey;if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"==d||"object"==d&&null!==a?a.$$hashKey=d+":"+(b||Td)():d+":"+a}function Sa(a,b){if(b){var d=0;this.nextUid=function(){return++d}}n(a,this.put,this)}function Lf(a){return(a=a.toString().replace(Sc,"").match(Tc))?
"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function eb(a,b){function d(a){return function(b,c){if(H(b))n(b,pc(a));else return a(b,c)}}function c(a,b){Ra(a,"service");if(z(b)||I(b))b=t.instantiate(b);if(!b.$get)throw Da("pget",a);return r[a+"Provider"]=b}function e(a,b){return function(){var c=v.invoke(b,this);if(q(c))throw Da("undef",a);return c}}function f(a,b,d){return c(a,{$get:!1!==d?e(a,b):b})}function g(a){qb(q(a)||I(a),"modulesToLoad","not an array");var b=[],c;n(a,function(a){function d(a){var b,
c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=t.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,!0);try{E(a)?(c=Sb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):z(a)?b.push(t.invoke(a)):I(a)?b.push(t.invoke(a)):Qa(a,"module")}catch(e){throw I(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Da("modulerr",a,e.stack||e.message||e);}}});return b}function h(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===
k)throw Da("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=k,a[b]=c(b,e)}catch(f){throw a[b]===k&&delete a[b],f;}finally{l.shift()}}function e(a,c,f,g){"string"===typeof f&&(g=f,f=null);var h=[],k=eb.$$annotate(a,b,g),l,m,t;m=0;for(l=k.length;m<l;m++){t=k[m];if("string"!==typeof t)throw Da("itkn",t);h.push(f&&f.hasOwnProperty(t)?f[t]:d(t,g))}I(a)&&(a=a[l]);return a.apply(c,h)}return{invoke:e,instantiate:function(a,b,c){var d=Object.create((I(a)?a[a.length-1]:a).prototype||
null);a=e(a,d,b,c);return H(a)||z(a)?a:d},get:d,annotate:eb.$$annotate,has:function(b){return r.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var k={},l=[],m=new Sa([],!0),r={$provide:{provider:d(c),factory:d(f),service:d(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return f(a,na(b),!1)}),constant:d(function(a,b){Ra(a,"constant");r[a]=b;A[a]=b}),decorator:function(a,b){var c=t.get(a+"Provider"),d=c.$get;c.$get=function(){var a=
v.invoke(d,c);return v.invoke(b,null,{$delegate:a})}}}},t=r.$injector=h(r,function(a,b){fa.isString(b)&&l.push(b);throw Da("unpr",l.join(" <- "));}),A={},v=A.$injector=h(A,function(a,b){var c=t.get(a+"Provider",b);return v.invoke(c.$get,c,u,a)});n(g(a),function(a){a&&v.invoke(a)});return v}function Qe(){var a=!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window","$location","$rootScope",function(b,d,c){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===ta(a))return b=
a,!0});return b}function f(a){if(a){a.scrollIntoView();var c;c=g.yOffset;z(c)?c=c():Nb(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):Q(c)||(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=E(a)?a:d.hash();var b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var h=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===b&&""===a||Gf(function(){c.$evalAsync(g)})});
return g}]}function hb(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;I(a)&&(a=a.join(" "));I(b)&&(b=b.join(" "));return a+" "+b}function Mf(a){E(a)&&(a=a.split(" "));var b=$();n(a,function(a){a.length&&(b[a]=!0)});return b}function Ea(a){return H(a)?a:{}}function Nf(a,b,d,c){function e(a){try{a.apply(null,ra.call(arguments,1))}finally{if(v--,0===v)for(;T.length;)try{T.pop()()}catch(b){d.error(b)}}}function f(){L=null;g();h()}function g(){a:{try{p=m.state;break a}catch(a){}p=void 0}p=q(p)?
null:p;ma(p,J)&&(p=J);J=p}function h(){if(w!==k.url()||C!==p)w=k.url(),C=p,n(aa,function(a){a(k.url(),p)})}var k=this,l=a.location,m=a.history,r=a.setTimeout,t=a.clearTimeout,A={};k.isMock=!1;var v=0,T=[];k.$$completeOutstandingRequest=e;k.$$incOutstandingRequestCount=function(){v++};k.notifyWhenNoOutstandingRequests=function(a){0===v?a():T.push(a)};var p,C,w=l.href,ga=b.find("base"),L=null;g();C=p;k.url=function(b,d,e){q(e)&&(e=null);l!==a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=
C===e;if(w===b&&(!c.history||f))return k;var h=w&&Fa(w)===Fa(b);w=b;C=e;if(!c.history||h&&f){if(!h||L)L=b;d?l.replace(b):h?(d=l,e=b.indexOf("#"),e=-1===e?"":b.substr(e),d.hash=e):l.href=b;l.href!==b&&(L=b)}else m[d?"replaceState":"pushState"](e,"",b),g(),C=p;return k}return L||l.href.replace(/%27/g,"'")};k.state=function(){return p};var aa=[],D=!1,J=null;k.onUrlChange=function(b){if(!D){if(c.history)B(a).on("popstate",f);B(a).on("hashchange",f);D=!0}aa.push(b);return b};k.$$applicationDestroyed=function(){B(a).off("hashchange popstate",
f)};k.$$checkUrlChange=h;k.baseHref=function(){var a=ga.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};k.defer=function(a,b){var c;v++;c=r(function(){delete A[c];e(a)},b||0);A[c]=!0;return c};k.defer.cancel=function(a){return A[a]?(delete A[a],t(a),e(x),!0):!1}}function Ve(){this.$get=["$window","$log","$sniffer","$document",function(a,b,d,c){return new Nf(a,c,b,d)}]}function We(){this.$get=function(){function a(a,c){function e(a){a!=r&&(t?t==a&&(t=a.n):t=a,f(a.n,a.p),f(a,r),r=a,
r.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw G("$cacheFactory")("iid",a);var g=0,h=M({},c,{id:a}),k=$(),l=c&&c.capacity||Number.MAX_VALUE,m=$(),r=null,t=null;return b[a]={put:function(a,b){if(!q(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}a in k||g++;k[a]=b;g>l&&this.remove(t.key);return b}},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return k[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b==r&&(r=b.p);b==t&&
(t=b.n);f(b.n,b.p);delete m[a]}a in k&&(delete k[a],g--)},removeAll:function(){k=$();g=0;m=$();r=t=null},destroy:function(){m=h=k=null;delete b[a]},info:function(){return M({},h,{size:g})}}}var b={};a.info=function(){var a={};n(b,function(b,e){a[e]=b.info()});return a};a.get=function(a){return b[a]};return a}}function rf(){this.$get=["$cacheFactory",function(a){return a("templates")}]}function Cc(a,b){function d(a,b,c){var d=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,e={};n(a,function(a,f){var g=a.match(d);
if(!g)throw ha("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f}});return e}function c(a){var b=a.charAt(0);if(!b||b!==F(b))throw ha("baddir",a);if(a!==a.trim())throw ha("baddir",a);}var e={},f=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,g=/(([\w\-]+)(?:\:([^;]+))?;?)/,h=Wd("ngSrc,ngSrcset,src,srcset"),k=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,l=/^(on[a-z]+|formaction)$/;this.directive=function t(b,f){Ra(b,"directive");
E(b)?(c(b),qb(f,"directiveFactory"),e.hasOwnProperty(b)||(e[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var f=[];n(e[b],function(e,g){try{var h=a.invoke(e);z(h)?h={compile:na(h)}:!h.compile&&h.link&&(h.compile=na(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||b;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"EA";var k=h,l=h,m=h.name,t={isolateScope:null,bindToController:null};H(l.scope)&&(!0===l.bindToController?(t.bindToController=d(l.scope,
m,!0),t.isolateScope={}):t.isolateScope=d(l.scope,m,!1));H(l.bindToController)&&(t.bindToController=d(l.bindToController,m,!0));if(H(t.bindToController)){var v=l.controller,R=l.controllerAs;if(!v)throw ha("noctrl",m);var V;a:if(R&&E(R))V=R;else{if(E(v)){var n=Uc.exec(v);if(n){V=n[3];break a}}V=void 0}if(!V)throw ha("noident",m);}var s=k.$$bindings=t;H(s.isolateScope)&&(h.$$isolateBindings=s.isolateScope);h.$$moduleName=e.$$moduleName;f.push(h)}catch(u){c(u)}});return f}])),e[b].push(f)):n(b,pc(t));
return this};this.aHrefSanitizationWhitelist=function(a){return y(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(a){return y(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};var m=!0;this.debugInfoEnabled=function(a){return y(a)?(m=a,this):m};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,
b,c,d,p,C,w,ga,L,aa,D){function J(a,b){try{a.addClass(b)}catch(c){}}function K(a,b,c,d,e){a instanceof B||(a=B(a));n(a,function(b,c){b.nodeType==Na&&b.nodeValue.match(/\S+/)&&(a[c]=B(b).wrap("<span></span>").parent()[0])});var f=O(a,b,a,c,d,e);K.$$addScopeClass(a);var g=null;return function(b,c,d){qb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var h=d.parentBoundTranscludeFn,k=d.transcludeControllers;d=d.futureParentElement;h&&h.$$boundTransclude&&(h=h.$$boundTransclude);g||(g=(d=
d&&d[0])?"foreignobject"!==ta(d)&&d.toString().match(/SVG/)?"svg":"html":"html");d="html"!==g?B(Yb(g,B("<div>").append(a).html())):c?Pa.clone.call(a):a;if(k)for(var l in k)d.data("$"+l+"Controller",k[l].instance);K.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,h);return d}}function O(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,m,t,w,D;if(p)for(D=Array(c.length),m=0;m<h.length;m+=3)f=h[m],D[f]=c[f];else D=c;m=0;for(t=h.length;m<t;)k=D[h[m++]],c=h[m++],f=h[m++],c?(c.scope?(l=a.$new(),K.$$addScopeInfo(B(k),
l)):l=a,w=c.transcludeOnThisElement?R(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?R(a,b):null,c(f,l,k,d,w)):f&&f(a,k.childNodes,u,e)}for(var h=[],k,l,m,t,p,w=0;w<a.length;w++){k=new fa;l=V(a[w],[],k,0===w?d:u,e);(f=l.length?Z(l,a[w],k,b,c,null,[],[],f):null)&&f.scope&&K.$$addScopeClass(k.$$element);k=f&&f.terminal||!(m=a[w].childNodes)||!m.length?null:O(m,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)h.push(w,f,k),t=!0,p=p||f;f=null}return t?g:null}function R(a,
b,c){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})}}function V(a,b,c,d,e){var h=c.$attr,k;switch(a.nodeType){case 1:P(b,va(ta(a)),"E",d,e);for(var l,m,t,p=a.attributes,w=0,D=p&&p.length;w<D;w++){var K=!1,A=!1;l=p[w];k=l.name;m=U(l.value);l=va(k);if(t=ka.test(l))k=k.replace(Vc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});(l=l.match(la))&&G(l[1])&&(K=k,A=k.substr(0,k.length-
5)+"end",k=k.substr(0,k.length-6));l=va(k.toLowerCase());h[l]=k;if(t||!c.hasOwnProperty(l))c[l]=m,Qc(a,l)&&(c[l]=!0);W(a,b,m,l,t);P(b,l,"A",d,e,K,A)}a=a.className;H(a)&&(a=a.animVal);if(E(a)&&""!==a)for(;k=g.exec(a);)l=va(k[2]),P(b,l,"C",d,e)&&(c[l]=U(k[3])),a=a.substr(k.index+k[0].length);break;case Na:if(11===Ha)for(;a.parentNode&&a.nextSibling&&a.nextSibling.nodeType===Na;)a.nodeValue+=a.nextSibling.nodeValue,a.parentNode.removeChild(a.nextSibling);N(b,a.nodeValue);break;case 8:try{if(k=f.exec(a.nodeValue))l=
va(k[1]),P(b,l,"M",d,e)&&(c[l]=U(k[2]))}catch(R){}}b.sort(Ia);return b}function Ta(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ha("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return B(d)}function s(a,b,c){return function(d,e,f,g,h){e=Ta(e[0],b,c);return a(d,e,f,g,h)}}function Z(a,b,d,e,f,g,h,l,m){function t(a,b,c,d){if(a){c&&(a=s(a,c,d));a.require=q.require;a.directiveName=x;if(O===
q||q.$$isolateScope)a=ca(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=s(b,c,d));b.require=q.require;b.directiveName=x;if(O===q||q.$$isolateScope)b=ca(b,{isolateScope:!0});l.push(b)}}function p(a,b,c,d){var e;if(E(b)){var f=b.match(k);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;e||(d="$"+b+"Controller",e=g?c.inheritedData(d):c.data(d));if(!e&&!f)throw ha("ctreq",b,a);}else if(I(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=p(a,b[g],c,d);return e||
null}function w(a,b,c,d,e,f){var g=$(),h;for(h in d){var k=d[h],l={$scope:k===O||k.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},m=k.controller;"@"==m&&(m=b[k.name]);l=C(m,l,!0,k.controllerAs);g[k.name]=l;aa||a.data("$"+k.name+"Controller",l.instance)}return g}function D(a,c,e,f,g){function k(a,b,c){var d;Za(a)||(c=b,b=a,a=u);aa&&(d=v);c||(c=aa?V.parent():V);return g(a,b,d,c,Ta)}var m,t,A,v,C,V,Ga;b===e?(f=d,V=d.$$element):(V=B(e),f=new fa(V,d));A=c;O?t=c.$new(!0):R&&(A=c.$parent);g&&(C=k,
C.$$boundTransclude=g);T&&(v=w(V,f,C,T,t,c));O&&(K.$$addScopeInfo(V,t,!0,!(J&&(J===O||J===O.$$originalDirective))),K.$$addScopeClass(V,!0),t.$$isolateBindings=O.$$isolateBindings,(Ga=ba(c,f,t,t.$$isolateBindings,O))&&t.$on("$destroy",Ga));for(var n in v){Ga=T[n];var ga=v[n],L=Ga.$$bindings.bindToController;ga.identifier&&L&&(m=ba(A,f,ga.instance,L,Ga));var q=ga();q!==ga.instance&&(ga.instance=q,V.data("$"+Ga.name+"Controller",q),m&&m(),m=ba(A,f,ga.instance,L,Ga))}F=0;for(M=h.length;F<M;F++)m=h[F],
ea(m,m.isolateScope?t:c,V,f,m.require&&p(m.directiveName,m.require,V,v),C);var Ta=c;O&&(O.template||null===O.templateUrl)&&(Ta=t);a&&a(Ta,e.childNodes,u,g);for(F=l.length-1;0<=F;F--)m=l[F],ea(m,m.isolateScope?t:c,V,f,m.require&&p(m.directiveName,m.require,V,v),C)}m=m||{};for(var A=-Number.MAX_VALUE,R=m.newScopeDirective,T=m.controllerDirectives,O=m.newIsolateScopeDirective,J=m.templateDirective,n=m.nonTlbTranscludeDirective,ga=!1,L=!1,aa=m.hasElementTranscludeDirective,Z=d.$$element=B(b),q,x,P,Ia=
e,G,F=0,M=a.length;F<M;F++){q=a[F];var N=q.$$start,Q=q.$$end;N&&(Z=Ta(b,N,Q));P=u;if(A>q.priority)break;if(P=q.scope)q.templateUrl||(H(P)?(Ua("new/isolated scope",O||R,q,Z),O=q):Ua("new/isolated scope",O,q,Z)),R=R||q;x=q.name;!q.templateUrl&&q.controller&&(P=q.controller,T=T||$(),Ua("'"+x+"' controller",T[x],q,Z),T[x]=q);if(P=q.transclude)ga=!0,q.$$tlb||(Ua("transclusion",n,q,Z),n=q),"element"==P?(aa=!0,A=q.priority,P=Z,Z=d.$$element=B(X.createComment(" "+x+": "+d[x]+" ")),b=Z[0],Y(f,ra.call(P,0),
b),Ia=K(P,e,A,g&&g.name,{nonTlbTranscludeDirective:n})):(P=B(Vb(b)).contents(),Z.empty(),Ia=K(P,e,u,u,{needsNewScope:q.$$isolateScope||q.$$newScope}));if(q.template)if(L=!0,Ua("template",J,q,Z),J=q,P=z(q.template)?q.template(Z,d):q.template,P=ja(P),q.replace){g=q;P=Tb.test(P)?Xc(Yb(q.templateNamespace,U(P))):[];b=P[0];if(1!=P.length||1!==b.nodeType)throw ha("tplrt",x,"");Y(f,Z,b);P={$attr:{}};var Wc=V(b,[],P),W=a.splice(F+1,a.length-(F+1));(O||R)&&y(Wc,O,R);a=a.concat(Wc).concat(W);S(d,P);M=a.length}else Z.html(P);
if(q.templateUrl)L=!0,Ua("template",J,q,Z),J=q,q.replace&&(g=q),D=Of(a.splice(F,a.length-F),Z,d,f,ga&&Ia,h,l,{controllerDirectives:T,newScopeDirective:R!==q&&R,newIsolateScopeDirective:O,templateDirective:J,nonTlbTranscludeDirective:n}),M=a.length;else if(q.compile)try{G=q.compile(Z,d,Ia),z(G)?t(null,G,N,Q):G&&t(G.pre,G.post,N,Q)}catch(da){c(da,ua(Z))}q.terminal&&(D.terminal=!0,A=Math.max(A,q.priority))}D.scope=R&&!0===R.scope;D.transcludeOnThisElement=ga;D.templateOnThisElement=L;D.transclude=Ia;
m.hasElementTranscludeDirective=aa;return D}function y(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=Ob(a[d],{$$isolateScope:b,$$newScope:c})}function P(b,d,f,g,h,k,l){if(d===h)return null;h=null;if(e.hasOwnProperty(d)){var m;d=a.get(d+"Directive");for(var p=0,w=d.length;p<w;p++)try{m=d[p],(q(g)||g>m.priority)&&-1!=m.restrict.indexOf(f)&&(k&&(m=Ob(m,{$$start:k,$$end:l})),b.push(m),h=m)}catch(D){c(D)}}return h}function G(b){if(e.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,f=c.length;d<f;d++)if(b=
c[d],b.multiElement)return!0;return!1}function S(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;n(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});n(b,function(b,f){"class"==f?(J(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function Of(a,b,c,e,f,g,h,k){var l=[],m,t,p=b[0],w=a.shift(),D=Ob(w,{templateUrl:null,
transclude:null,replace:null,$$originalDirective:w}),A=z(w.templateUrl)?w.templateUrl(b,c):w.templateUrl,K=w.templateNamespace;b.empty();d(A).then(function(d){var T,v;d=ja(d);if(w.replace){d=Tb.test(d)?Xc(Yb(K,U(d))):[];T=d[0];if(1!=d.length||1!==T.nodeType)throw ha("tplrt",w.name,A);d={$attr:{}};Y(e,b,T);var C=V(T,[],d);H(w.scope)&&y(C,!0);a=C.concat(a);S(c,d)}else T=p,b.html(d);a.unshift(D);m=Z(a,T,c,f,b,w,g,h,k);n(e,function(a,c){a==T&&(e[c]=b[0])});for(t=O(b[0].childNodes,f);l.length;){d=l.shift();
v=l.shift();var ga=l.shift(),L=l.shift(),C=b[0];if(!d.$$destroyed){if(v!==p){var q=v.className;k.hasElementTranscludeDirective&&w.replace||(C=Vb(T));Y(ga,B(v),C);J(B(C),q)}v=m.transcludeOnThisElement?R(d,m.transclude,L):L;m(t,d,C,e,v)}}l=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(l?l.push(b,c,d,a):(m.transcludeOnThisElement&&(a=R(b,m.transclude,e)),m(t,b,c,d,a)))}}function Ia(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function Ua(a,
b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw ha("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,ua(d));}function N(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&K.$$addBindingClass(a);return function(a,c){var e=c.parent();b||K.$$addBindingClass(e);K.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function Yb(a,b){a=F(a||"html");switch(a){case "svg":case "math":var c=X.createElement("div");
c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function Q(a,b){if("srcdoc"==b)return L.HTML;var c=ta(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return L.RESOURCE_URL}function W(a,c,d,e,f){var g=Q(a,e);f=h[e]||f;var k=b(d,!0,g,f);if(k){if("multiple"===e&&"select"===ta(a))throw ha("selmulti",ua(a));c.push({priority:100,compile:function(){return{pre:function(a,c,h){c=h.$$observers||(h.$$observers=$());if(l.test(e))throw ha("nodomevents");
var m=h[e];m!==d&&(k=m&&b(m,!0,g,f),d=m);k&&(h[e]=k(a),(c[e]||(c[e]=[])).$$inter=!0,(h.$$observers&&h.$$observers[e].$$scope||a).$watch(k,function(a,b){"class"===e&&a!=b?h.$updateClass(a,b):h.$set(e,a)}))}}}})}}function Y(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=X.createDocumentFragment();a.appendChild(d);
B.hasData(d)&&(B.data(c,B.data(d)),oa?(Rb=!0,oa.cleanData([d])):delete B.cache[d[B.expando]]);d=1;for(e=b.length;d<e;d++)f=b[d],B(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function ca(a,b){return M(function(){return a.apply(null,arguments)},a,b)}function ea(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,ua(d))}}function ba(a,c,d,e,f){var g=[];n(e,function(e,h){var k=e.attrName,l=e.optional,m,t,w,D;switch(e.mode){case "@":l||qa.call(c,k)||(d[h]=c[k]=void 0);c.$observe(k,function(a){E(a)&&
(d[h]=a)});c.$$observers[k].$$scope=a;E(c[k])&&(d[h]=b(c[k])(a));break;case "=":if(!qa.call(c,k)){if(l)break;c[k]=void 0}if(l&&!c[k])break;t=p(c[k]);D=t.literal?ma:function(a,b){return a===b||a!==a&&b!==b};w=t.assign||function(){m=d[h]=t(a);throw ha("nonassign",c[k],f.name);};m=d[h]=t(a);l=function(b){D(b,d[h])||(D(b,m)?w(a,b=d[h]):d[h]=b);return m=b};l.$stateful=!0;l=e.collection?a.$watchCollection(c[k],l):a.$watch(p(c[k],l),null,t.literal);g.push(l);break;case "&":t=c.hasOwnProperty(k)?p(c[k]):
x;if(t===x&&l)break;d[h]=function(b){return t(a,b)}}});return g.length&&function(){for(var a=0,b=g.length;a<b;++a)g[a]()}}var fa=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a};fa.prototype={$normalize:va,$addClass:function(a){a&&0<a.length&&aa.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&aa.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=Yc(a,b);c&&c.length&&aa.addClass(this.$$element,
c);(c=Yc(b,a))&&c.length&&aa.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=Qc(this.$$element[0],a),g=Zc[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=zc(a,"-"));f=ta(this.$$element);if("a"===f&&"href"===a||"img"===f&&"src"===a)this[a]=b=D(b,"src"===a);else if("img"===f&&"srcset"===a){for(var f="",g=U(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(g)?k:/(,)/,g=g.split(k),k=Math.floor(g.length/2),l=0;l<
k;l++)var m=2*l,f=f+D(U(g[m]),!0),f=f+(" "+U(g[m+1]));g=U(g[2*l]).split(/\s/);f+=D(U(g[0]),!0);2===g.length&&(f+=" "+U(g[1]));this[a]=b=f}!1!==d&&(null===b||q(b)?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=this.$$observers)&&n(a[h],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=$()),e=d[a]||(d[a]=[]);e.push(b);w.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||q(c[a])||b(c[a])});return function(){ab(e,b)}}};var da=b.startSymbol(),
ia=b.endSymbol(),ja="{{"==da||"}}"==ia?Ya:function(a){return a.replace(/\{\{/g,da).replace(/}}/g,ia)},ka=/^ngAttr[A-Z]/,la=/^(.+)Start$/;K.$$addBindingInfo=m?function(a,b){var c=a.data("$binding")||[];I(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:x;K.$$addBindingClass=m?function(a){J(a,"ng-binding")}:x;K.$$addScopeInfo=m?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:x;K.$$addScopeClass=m?function(a,b){J(a,b?"ng-isolate-scope":"ng-scope")}:x;return K}]}function va(a){return fb(a.replace(Vc,
""))}function Yc(a,b){var d="",c=a.split(/\s+/),e=b.split(/\s+/),f=0;a:for(;f<c.length;f++){for(var g=c[f],h=0;h<e.length;h++)if(g==e[h])continue a;d+=(0<d.length?" ":"")+g}return d}function Xc(a){a=B(a);var b=a.length;if(1>=b)return a;for(;b--;)8===a[b].nodeType&&Pf.call(a,b,1);return a}function Xe(){var a={},b=!1;this.register=function(b,c){Ra(b,"controller");H(b)?M(a,b):a[b]=c};this.allowGlobals=function(){b=!0};this.$get=["$injector","$window",function(d,c){function e(a,b,c,d){if(!a||!H(a.$scope))throw G("$controller")("noscp",
d,b);a.$scope[b]=c}return function(f,g,h,k){var l,m,r;h=!0===h;k&&E(k)&&(r=k);if(E(f)){k=f.match(Uc);if(!k)throw Qf("ctrlfmt",f);m=k[1];r=r||k[3];f=a.hasOwnProperty(m)?a[m]:Bc(g.$scope,m,!0)||(b?Bc(c,m,!0):u);Qa(f,m,!0)}if(h)return h=(I(f)?f[f.length-1]:f).prototype,l=Object.create(h||null),r&&e(g,r,l,m||f.name),M(function(){var a=d.invoke(f,l,g,m);a!==l&&(H(a)||z(a))&&(l=a,r&&e(g,r,l,m||f.name));return l},{instance:l,identifier:r});l=d.instantiate(f,g,m);r&&e(g,r,l,m||f.name);return l}}]}function Ye(){this.$get=
["$window",function(a){return B(a.document)}]}function Ze(){this.$get=["$log",function(a){return function(b,d){a.error.apply(a,arguments)}}]}function Zb(a){return H(a)?da(a)?a.toISOString():db(a):a}function df(){this.$get=function(){return function(a){if(!a)return"";var b=[];oc(a,function(a,c){null===a||q(a)||(I(a)?n(a,function(a,d){b.push(ja(c)+"="+ja(Zb(a)))}):b.push(ja(c)+"="+ja(Zb(a))))});return b.join("&")}}}function ef(){this.$get=function(){return function(a){function b(a,e,f){null===a||q(a)||
(I(a)?n(a,function(a,c){b(a,e+"["+(H(a)?c:"")+"]")}):H(a)&&!da(a)?oc(a,function(a,c){b(a,e+(f?"":"[")+c+(f?"":"]"))}):d.push(ja(e)+"="+ja(Zb(a))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function $b(a,b){if(E(a)){var d=a.replace(Rf,"").trim();if(d){var c=b("Content-Type");(c=c&&0===c.indexOf($c))||(c=(c=d.match(Sf))&&Tf[c[0]].test(d));c&&(a=uc(d))}}return a}function ad(a){var b=$(),d;E(a)?n(a.split("\n"),function(a){d=a.indexOf(":");var e=F(U(a.substr(0,d)));a=U(a.substr(d+1));e&&
(b[e]=b[e]?b[e]+", "+a:a)}):H(a)&&n(a,function(a,d){var f=F(d),g=U(a);f&&(b[f]=b[f]?b[f]+", "+g:g)});return b}function bd(a){var b;return function(d){b||(b=ad(a));return d?(d=b[F(d)],void 0===d&&(d=null),d):b}}function cd(a,b,d,c){if(z(c))return c(a,b,d);n(c,function(c){a=c(a,b,d)});return a}function cf(){var a=this.defaults={transformResponse:[$b],transformRequest:[function(a){return H(a)&&"[object File]"!==sa.call(a)&&"[object Blob]"!==sa.call(a)&&"[object FormData]"!==sa.call(a)?db(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},
post:ia(ac),put:ia(ac),patch:ia(ac)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer"},b=!1;this.useApplyAsync=function(a){return y(a)?(b=!!a,this):b};var d=!0;this.useLegacyPromiseExtensions=function(a){return y(a)?(d=!!a,this):d};var c=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",function(e,f,g,h,k,l){function m(b){function c(a){var b=M({},a);b.data=cd(a.data,a.headers,a.status,f.transformResponse);
a=a.status;return 200<=a&&300>a?b:k.reject(b)}function e(a,b){var c,d={};n(a,function(a,e){z(a)?(c=a(b),null!=c&&(d[e]=c)):d[e]=a});return d}if(!fa.isObject(b))throw G("$http")("badreq",b);var f=M({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer},b);f.headers=function(b){var c=a.headers,d=M({},b.headers),f,g,h,c=M({},c.common,c[F(b.method)]);a:for(f in c){g=F(f);for(h in d)if(F(h)===g)continue a;d[f]=c[f]}return e(d,ia(b))}(b);
f.method=sb(f.method);f.paramSerializer=E(f.paramSerializer)?l.get(f.paramSerializer):f.paramSerializer;var g=[function(b){var d=b.headers,e=cd(b.data,bd(d),u,b.transformRequest);q(e)&&n(d,function(a,b){"content-type"===F(b)&&delete d[b]});q(b.withCredentials)&&!q(a.withCredentials)&&(b.withCredentials=a.withCredentials);return r(b,e).then(c,c)},u],h=k.when(f);for(n(v,function(a){(a.request||a.requestError)&&g.unshift(a.request,a.requestError);(a.response||a.responseError)&&g.push(a.response,a.responseError)});g.length;){b=
g.shift();var m=g.shift(),h=h.then(b,m)}d?(h.success=function(a){Qa(a,"fn");h.then(function(b){a(b.data,b.status,b.headers,f)});return h},h.error=function(a){Qa(a,"fn");h.then(null,function(b){a(b.data,b.status,b.headers,f)});return h}):(h.success=dd("success"),h.error=dd("error"));return h}function r(c,d){function g(a,c,d,e){function f(){l(c,a,d,e)}J&&(200<=a&&300>a?J.put(R,[a,c,ad(d),e]):J.remove(R));b?h.$applyAsync(f):(f(),h.$$phase||h.$apply())}function l(a,b,d,e){b=-1<=b?b:0;(200<=b&&300>b?n.resolve:
n.reject)({data:a,status:b,headers:bd(d),config:c,statusText:e})}function r(a){l(a.data,a.status,ia(a.headers()),a.statusText)}function v(){var a=m.pendingRequests.indexOf(c);-1!==a&&m.pendingRequests.splice(a,1)}var n=k.defer(),D=n.promise,J,K,O=c.headers,R=t(c.url,c.paramSerializer(c.params));m.pendingRequests.push(c);D.then(v,v);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(J=H(c.cache)?c.cache:H(a.cache)?a.cache:A);J&&(K=J.get(R),y(K)?K&&z(K.then)?K.then(r,r):I(K)?l(K[1],
K[0],ia(K[2]),K[3]):l(K,200,{},"OK"):J.put(R,D));q(K)&&((K=ed(c.url)?f()[c.xsrfCookieName||a.xsrfCookieName]:u)&&(O[c.xsrfHeaderName||a.xsrfHeaderName]=K),e(c.method,R,d,g,O,c.timeout,c.withCredentials,c.responseType));return D}function t(a,b){0<b.length&&(a+=(-1==a.indexOf("?")?"?":"&")+b);return a}var A=g("$http");a.paramSerializer=E(a.paramSerializer)?l.get(a.paramSerializer):a.paramSerializer;var v=[];n(c,function(a){v.unshift(E(a)?l.get(a):l.invoke(a))});m.pendingRequests=[];(function(a){n(arguments,
function(a){m[a]=function(b,c){return m(M({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){n(arguments,function(a){m[a]=function(b,c,d){return m(M({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");m.defaults=a;return m}]}function gf(){this.$get=function(){return function(){return new S.XMLHttpRequest}}}function ff(){this.$get=["$browser","$window","$document","$xhrFactory",function(a,b,d,c){return Uf(a,c,a.defer,b.angular.callbacks,d[0])}]}function Uf(a,b,d,
c,e){function f(a,b,d){var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m,!1);f.removeEventListener("error",m,!1);e.body.removeChild(f);f=null;var g=-1,A="unknown";a&&("load"!==a.type||c[b].called||(a={type:"error"}),A=a.type,g="error"===a.type?404:200);d&&d(g,A)};f.addEventListener("load",m,!1);f.addEventListener("error",m,!1);e.body.appendChild(f);return m}return function(e,h,k,l,m,r,t,A){function v(){C&&C();w&&w.abort()}
function T(b,c,e,f,g){y(L)&&d.cancel(L);C=w=null;b(c,e,f,g);a.$$completeOutstandingRequest(x)}a.$$incOutstandingRequestCount();h=h||a.url();if("jsonp"==F(e)){var p="_"+(c.counter++).toString(36);c[p]=function(a){c[p].data=a;c[p].called=!0};var C=f(h.replace("JSON_CALLBACK","angular.callbacks."+p),p,function(a,b){T(l,a,c[p].data,"",b);c[p]=x})}else{var w=b(e,h);w.open(e,h,!0);n(m,function(a,b){y(a)&&w.setRequestHeader(b,a)});w.onload=function(){var a=w.statusText||"",b="response"in w?w.response:w.responseText,
c=1223===w.status?204:w.status;0===c&&(c=b?200:"file"==wa(h).protocol?404:0);T(l,c,b,w.getAllResponseHeaders(),a)};e=function(){T(l,-1,null,null,"")};w.onerror=e;w.onabort=e;t&&(w.withCredentials=!0);if(A)try{w.responseType=A}catch(ga){if("json"!==A)throw ga;}w.send(q(k)?null:k)}if(0<r)var L=d(v,r);else r&&z(r.then)&&r.then(v)}}function af(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler",
"$sce",function(d,c,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(m,a).replace(r,b)}function h(f,h,m,r){function p(a){try{var b=a;a=m?e.getTrusted(m,b):e.valueOf(b);var d;if(r&&!y(a))d=a;else if(null==a)d="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=db(a)}d=a}return d}catch(g){c(Ja.interr(f,g))}}r=!!r;for(var C,w,n=0,L=[],s=[],D=f.length,J=[],K=[];n<D;)if(-1!=(C=f.indexOf(a,n))&&-1!=(w=f.indexOf(b,C+k)))n!==C&&J.push(g(f.substring(n,C))),n=f.substring(C+
k,w),L.push(n),s.push(d(n,p)),n=w+l,K.push(J.length),J.push("");else{n!==D&&J.push(g(f.substring(n)));break}m&&1<J.length&&Ja.throwNoconcat(f);if(!h||L.length){var O=function(a){for(var b=0,c=L.length;b<c;b++){if(r&&q(a[b]))return;J[K[b]]=a[b]}return J.join("")};return M(function(a){var b=0,d=L.length,e=Array(d);try{for(;b<d;b++)e[b]=s[b](a);return O(e)}catch(g){c(Ja.interr(f,g))}},{exp:f,expressions:L,$$watchDelegate:function(a,b){var c;return a.$watchGroup(s,function(d,e){var f=O(d);z(b)&&b.call(this,
f,d!==e?c:f,a);c=f})}})}}var k=a.length,l=b.length,m=new RegExp(a.replace(/./g,f),"g"),r=new RegExp(b.replace(/./g,f),"g");h.startSymbol=function(){return a};h.endSymbol=function(){return b};return h}]}function bf(){this.$get=["$rootScope","$window","$q","$$q",function(a,b,d,c){function e(e,h,k,l){var m=4<arguments.length,r=m?ra.call(arguments,4):[],t=b.setInterval,A=b.clearInterval,v=0,n=y(l)&&!l,p=(n?c:d).defer(),C=p.promise;k=y(k)?k:0;C.then(null,null,m?function(){e.apply(null,r)}:e);C.$$intervalId=
t(function(){p.notify(v++);0<k&&v>=k&&(p.resolve(v),A(C.$$intervalId),delete f[C.$$intervalId]);n||a.$apply()},h);f[C.$$intervalId]=p;return C}var f={};e.cancel=function(a){return a&&a.$$intervalId in f?(f[a.$$intervalId].reject("canceled"),b.clearInterval(a.$$intervalId),delete f[a.$$intervalId],!0):!1};return e}]}function bc(a){a=a.split("/");for(var b=a.length;b--;)a[b]=ob(a[b]);return a.join("/")}function fd(a,b){var d=wa(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=ea(d.port)||Vf[d.protocol]||
null}function gd(a,b){var d="/"!==a.charAt(0);d&&(a="/"+a);var c=wa(a);b.$$path=decodeURIComponent(d&&"/"===c.pathname.charAt(0)?c.pathname.substring(1):c.pathname);b.$$search=xc(c.search);b.$$hash=decodeURIComponent(c.hash);b.$$path&&"/"!=b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function pa(a,b){if(0===b.indexOf(a))return b.substr(a.length)}function Fa(a){var b=a.indexOf("#");return-1==b?a:a.substr(0,b)}function ib(a){return a.replace(/(#.+)|#$/,"$1")}function cc(a,b,d){this.$$html5=!0;d=d||"";
fd(a,this);this.$$parse=function(a){var d=pa(b,a);if(!E(d))throw Db("ipthprfx",a,b);gd(d,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Qb(this.$$search),d=this.$$hash?"#"+ob(this.$$hash):"";this.$$url=bc(this.$$path)+(a?"?"+a:"")+d;this.$$absUrl=b+this.$$url.substr(1)};this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;y(f=pa(a,c))?(g=f,g=y(f=pa(d,f))?b+(pa("/",f)||f):a+g):y(f=pa(b,c))?g=b+f:b==c+"/"&&(g=b);g&&this.$$parse(g);
return!!g}}function dc(a,b,d){fd(a,this);this.$$parse=function(c){var e=pa(a,c)||pa(b,c),f;q(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",q(e)&&(a=c,this.replace())):(f=pa(d,e),q(f)&&(f=e));gd(f,this);c=this.$$path;var e=a,g=/^\/[A-Z]:(\/.*)/;0===f.indexOf(e)&&(f=f.replace(e,""));g.exec(f)||(c=(f=g.exec(c))?f[1]:c);this.$$path=c;this.$$compose()};this.$$compose=function(){var b=Qb(this.$$search),e=this.$$hash?"#"+ob(this.$$hash):"";this.$$url=bc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+(this.$$url?
d+this.$$url:"")};this.$$parseLinkUrl=function(b,d){return Fa(a)==Fa(b)?(this.$$parse(b),!0):!1}}function hd(a,b,d){this.$$html5=!0;dc.apply(this,arguments);this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;a==Fa(c)?f=c:(g=pa(b,c))?f=a+d+g:b===c+"/"&&(f=b);f&&this.$$parse(f);return!!f};this.$$compose=function(){var b=Qb(this.$$search),e=this.$$hash?"#"+ob(this.$$hash):"";this.$$url=bc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+d+this.$$url}}function Eb(a){return function(){return this[a]}}
function id(a,b){return function(d){if(q(d))return this[a];this[a]=b(d);this.$$compose();return this}}function hf(){var a="",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return y(b)?(a=b,this):a};this.html5Mode=function(a){return $a(a)?(b.enabled=a,this):H(a)?($a(a.enabled)&&(b.enabled=a.enabled),$a(a.requireBase)&&(b.requireBase=a.requireBase),$a(a.rewriteLinks)&&(b.rewriteLinks=a.rewriteLinks),this):b};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",
function(d,c,e,f,g){function h(a,b,d){var e=l.url(),f=l.$$state;try{c.url(a,b,d),l.$$state=c.state()}catch(g){throw l.url(e),l.$$state=f,g;}}function k(a,b){d.$broadcast("$locationChangeSuccess",l.absUrl(),a,l.$$state,b)}var l,m;m=c.baseHref();var r=c.url(),t;if(b.enabled){if(!m&&b.requireBase)throw Db("nobase");t=r.substring(0,r.indexOf("/",r.indexOf("//")+2))+(m||"/");m=e.history?cc:hd}else t=Fa(r),m=dc;var A=t.substr(0,Fa(t).lastIndexOf("/")+1);l=new m(t,A,"#"+a);l.$$parseLinkUrl(r,r);l.$$state=
c.state();var v=/^\s*(javascript|mailto):/i;f.on("click",function(a){if(b.rewriteLinks&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!=a.which&&2!=a.button){for(var e=B(a.target);"a"!==ta(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href"),k=e.attr("href")||e.attr("xlink:href");H(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=wa(h.animVal).href);v.test(h)||!h||e.attr("target")||a.isDefaultPrevented()||!l.$$parseLinkUrl(h,k)||(a.preventDefault(),l.absUrl()!=c.url()&&(d.$apply(),g.angular["ff-684208-preventDefault"]=
!0))}});ib(l.absUrl())!=ib(r)&&c.url(l.absUrl(),!0);var n=!0;c.onUrlChange(function(a,b){q(pa(A,a))?g.location.href=a:(d.$evalAsync(function(){var c=l.absUrl(),e=l.$$state,f;a=ib(a);l.$$parse(a);l.$$state=b;f=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;l.absUrl()===a&&(f?(l.$$parse(c),l.$$state=e,h(c,!1,e)):(n=!1,k(c,e)))}),d.$$phase||d.$digest())});d.$watch(function(){var a=ib(c.url()),b=ib(l.absUrl()),f=c.state(),g=l.$$replace,m=a!==b||l.$$html5&&e.history&&f!==l.$$state;if(n||
m)n=!1,d.$evalAsync(function(){var b=l.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,l.$$state,f).defaultPrevented;l.absUrl()===b&&(c?(l.$$parse(a),l.$$state=f):(m&&h(b,g,f===l.$$state?null:l.$$state),k(a,f)))});l.$$replace=!1});return l}]}function jf(){var a=!0,b=this;this.debugEnabled=function(b){return y(b)?(a=b,this):a};this.$get=["$window",function(d){function c(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&
(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=d.console||{},e=b[a]||b.log||x;a=!1;try{a=!!e.apply}catch(k){}return a?function(){var a=[];n(arguments,function(b){a.push(c(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){a&&c.apply(b,arguments)}}()}}]}function Va(a,b){if("__defineGetter__"===a||"__defineSetter__"===a||"__lookupGetter__"===a||"__lookupSetter__"===
a||"__proto__"===a)throw ba("isecfld",b);return a}function jd(a,b){a+="";if(!E(a))throw ba("iseccst",b);return a}function xa(a,b){if(a){if(a.constructor===a)throw ba("isecfn",b);if(a.window===a)throw ba("isecwindow",b);if(a.children&&(a.nodeName||a.prop&&a.attr&&a.find))throw ba("isecdom",b);if(a===Object)throw ba("isecobj",b);}return a}function kd(a,b){if(a){if(a.constructor===a)throw ba("isecfn",b);if(a===Wf||a===Xf||a===Yf)throw ba("isecff",b);}}function ld(a,b){if(a&&(a===(0).constructor||a===
(!1).constructor||a==="".constructor||a==={}.constructor||a===[].constructor||a===Function.constructor))throw ba("isecaf",b);}function Zf(a,b){return"undefined"!==typeof a?a:b}function md(a,b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b}function W(a,b){var d,c;switch(a.type){case s.Program:d=!0;n(a.body,function(a){W(a.expression,b);d=d&&a.expression.constant});a.constant=d;break;case s.Literal:a.constant=!0;a.toWatch=[];break;case s.UnaryExpression:W(a.argument,b);a.constant=a.argument.constant;
a.toWatch=a.argument.toWatch;break;case s.BinaryExpression:W(a.left,b);W(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case s.LogicalExpression:W(a.left,b);W(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case s.ConditionalExpression:W(a.test,b);W(a.alternate,b);W(a.consequent,b);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case s.Identifier:a.constant=
!1;a.toWatch=[a];break;case s.MemberExpression:W(a.object,b);a.computed&&W(a.property,b);a.constant=a.object.constant&&(!a.computed||a.property.constant);a.toWatch=[a];break;case s.CallExpression:d=a.filter?!b(a.callee.name).$stateful:!1;c=[];n(a.arguments,function(a){W(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=a.filter&&!b(a.callee.name).$stateful?c:[a];break;case s.AssignmentExpression:W(a.left,b);W(a.right,b);a.constant=a.left.constant&&a.right.constant;
a.toWatch=[a];break;case s.ArrayExpression:d=!0;c=[];n(a.elements,function(a){W(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=c;break;case s.ObjectExpression:d=!0;c=[];n(a.properties,function(a){W(a.value,b);d=d&&a.value.constant;a.value.constant||c.push.apply(c,a.value.toWatch)});a.constant=d;a.toWatch=c;break;case s.ThisExpression:a.constant=!1,a.toWatch=[]}}function nd(a){if(1==a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:u}}
function od(a){return a.type===s.Identifier||a.type===s.MemberExpression}function pd(a){if(1===a.body.length&&od(a.body[0].expression))return{type:s.AssignmentExpression,left:a.body[0].expression,right:{type:s.NGValueParameter},operator:"="}}function qd(a){return 0===a.body.length||1===a.body.length&&(a.body[0].expression.type===s.Literal||a.body[0].expression.type===s.ArrayExpression||a.body[0].expression.type===s.ObjectExpression)}function rd(a,b){this.astBuilder=a;this.$filter=b}function sd(a,
b){this.astBuilder=a;this.$filter=b}function Fb(a){return"constructor"==a}function ec(a){return z(a.valueOf)?a.valueOf():$f.call(a)}function kf(){var a=$(),b=$();this.$get=["$filter",function(d){function c(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=ec(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function e(a,b,d,e,f){var g=e.inputs,h;if(1===g.length){var k=c,g=g[0];return a.$watch(function(a){var b=g(a);c(b,k)||(h=e(a,u,u,[b]),k=b&&ec(b));return h},b,d,f)}for(var l=[],m=[],r=0,n=
g.length;r<n;r++)l[r]=c,m[r]=null;return a.$watch(function(a){for(var b=!1,d=0,f=g.length;d<f;d++){var k=g[d](a);if(b||(b=!c(k,l[d])))m[d]=k,l[d]=k&&ec(k)}b&&(h=e(a,u,u,m));return h},b,d,f)}function f(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;z(b)&&b.apply(this,arguments);y(a)&&d.$$postDigest(function(){y(f)&&e()})},c)}function g(a,b,c,d){function e(a){var b=!0;n(a,function(a){y(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,
c,d){g=a;z(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function h(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){z(b)&&b.apply(this,arguments);e()},c)}function k(a,b){if(!b)return a;var c=a.$$watchDelegate,d=!1,c=c!==g&&c!==f?function(c,e,f,g){f=d&&g?g[0]:a(c,e,f,g);return b(f,c,e)}:function(c,d,e,f){e=a(c,d,e,f);c=b(e,c,d);return y(e)?c:e};a.$$watchDelegate&&a.$$watchDelegate!==e?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=
e,d=!a.inputs,c.inputs=a.inputs?a.inputs:[a]);return c}var l=Ba().noUnsafeEval,m={csp:l,expensiveChecks:!1},r={csp:l,expensiveChecks:!0};return function(c,l,v){var n,p,q;switch(typeof c){case "string":q=c=c.trim();var w=v?b:a;n=w[q];n||(":"===c.charAt(0)&&":"===c.charAt(1)&&(p=!0,c=c.substring(2)),v=v?r:m,n=new fc(v),n=(new gc(n,d,v)).parse(c),n.constant?n.$$watchDelegate=h:p?n.$$watchDelegate=n.literal?g:f:n.inputs&&(n.$$watchDelegate=e),w[q]=n);return k(n,l);case "function":return k(c,l);default:return x}}}]}
function mf(){this.$get=["$rootScope","$exceptionHandler",function(a,b){return td(function(b){a.$evalAsync(b)},b)}]}function nf(){this.$get=["$browser","$exceptionHandler",function(a,b){return td(function(b){a.defer(b)},b)}]}function td(a,b){function d(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function c(){this.$$state={status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,a(function(){var a,
d,e;e=c.pending;c.processScheduled=!1;c.pending=u;for(var f=0,g=e.length;f<g;++f){d=e[f][0];a=e[f][c.status];try{z(a)?d.resolve(a(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),b(h)}}}))}function g(){this.promise=new c;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var h=G("$q",TypeError);M(c.prototype,{then:function(a,b,c){if(q(a)&&q(b)&&q(c))return this;var d=new g;this.$$state.pending=this.$$state.pending||[];
this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return l(b,!0,a)},function(b){return l(b,!1,a)},b)}});M(g.prototype,{resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(h("qcycle",a)):this.$$resolve(a))},$$resolve:function(a){var c,e;e=d(this,this.$$resolve,this.$$reject);try{if(H(a)||z(a))c=a&&a.then;z(c)?(this.promise.$$state.status=
-1,c.call(a,e[0],e[1],this.notify)):(this.promise.$$state.value=a,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),b(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&a(function(){for(var a,e,f=0,g=d.length;f<g;f++){e=d[f][0];a=d[f][3];try{e.notify(z(a)?
a(c):c)}catch(h){b(h)}}})}});var k=function(a,b){var c=new g;b?c.resolve(a):c.reject(a);return c.promise},l=function(a,b,c){var d=null;try{z(c)&&(d=c())}catch(e){return k(e,!1)}return d&&z(d.then)?d.then(function(){return k(a,b)},function(a){return k(a,!1)}):k(a,b)},m=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},r=function A(a){if(!z(a))throw h("norslvr",a);if(!(this instanceof A))return new A(a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};
r.defer=function(){return new g};r.reject=function(a){var b=new g;b.reject(a);return b.promise};r.when=m;r.resolve=m;r.all=function(a){var b=new g,c=0,d=I(a)?[]:{};n(a,function(a,e){c++;m(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return r}function wf(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||
a.webkitCancelRequestAnimationFrame,e=!!d,f=e?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=b(a,16.66,!1);return function(){b.cancel(c)}};f.supported=e;return f}]}function lf(){function a(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++nb;this.$$ChildScope=null}b.prototype=a;return b}var b=10,d=G("$rootScope"),c=null,e=null;this.digestTtl=function(a){arguments.length&&
(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(f,g,h,k){function l(a){a.currentScope.$$destroyed=!0}function m(a){9===Ha&&(a.$$childHead&&m(a.$$childHead),a.$$nextSibling&&m(a.$$nextSibling));a.$parent=a.$$nextSibling=a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function r(){this.$id=++nb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=
!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function t(a){if(w.$$phase)throw d("inprog",w.$$phase);w.$$phase=a}function A(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function v(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function s(){}function p(){for(;aa.length;)try{aa.shift()()}catch(a){g(a)}e=null}function C(){null===e&&(e=k.defer(function(){w.$apply(p)}))}r.prototype={constructor:r,
$new:function(b,c){var d;c=c||this;b?(d=new r,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(b||c!=this)&&d.$on("$destroy",l);return d},$watch:function(a,b,d,e){var f=h(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var g=this,k=g.$$watchers,l={fn:b,last:s,get:f,exp:e||a,eq:!!d};c=null;z(b)||(l.fn=x);k||
(k=g.$$watchers=[]);k.unshift(l);A(this,1);return function(){0<=ab(k,l)&&A(g,-1);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});n(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},
$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!q(e)){if(H(e))if(za(e))for(f!==r&&(f=r,n=f.length=0,l++),a=e.length,n!==a&&(l++,f.length=n=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==t&&(f=t={},n=0,l++);a=0;for(b in e)qa.call(e,b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(n++,f[b]=g,l++));if(n>a)for(b in l++,f)qa.call(e,b)||(n--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,g,k=1<b.length,l=0,m=
h(a,c),r=[],t={},p=!0,n=0;return this.$watch(m,function(){p?(p=!1,b(e,e,d)):b(e,g,d);if(k)if(H(e))if(za(e)){g=Array(e.length);for(var a=0;a<e.length;a++)g[a]=e[a]}else for(a in g={},e)qa.call(e,a)&&(g[a]=e[a]);else g=e})},$digest:function(){var a,f,h,l,m,r,n=b,A,q=[],v,C;t("$digest");k.$$checkUrlChange();this===w&&null!==e&&(k.defer.cancel(e),p());c=null;do{r=!1;for(A=this;u.length;){try{C=u.shift(),C.scope.$eval(C.expression,C.locals)}catch(aa){g(aa)}c=null}a:do{if(l=A.$$watchers)for(m=l.length;m--;)try{if(a=
l[m])if((f=a.get(A))!==(h=a.last)&&!(a.eq?ma(f,h):"number"===typeof f&&"number"===typeof h&&isNaN(f)&&isNaN(h)))r=!0,c=a,a.last=a.eq?bb(f,null):f,a.fn(f,h===s?f:h,A),5>n&&(v=4-n,q[v]||(q[v]=[]),q[v].push({msg:z(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:f,oldVal:h}));else if(a===c){r=!1;break a}}catch(y){g(y)}if(!(l=A.$$watchersCount&&A.$$childHead||A!==this&&A.$$nextSibling))for(;A!==this&&!(l=A.$$nextSibling);)A=A.$parent}while(A=l);if((r||u.length)&&!n--)throw w.$$phase=null,d("infdig",
b,q);}while(r||u.length);for(w.$$phase=null;L.length;)try{L.shift()()}catch(x){g(x)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===w&&k.$$applicationDestroyed();A(this,-this.$$watchersCount);for(var b in this.$$listenerCount)v(this,this.$$listenerCount[b],b);a&&a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=
this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=x;this.$on=this.$watch=this.$watchGroup=function(){return x};this.$$listeners={};this.$$nextSibling=null;m(this)}},$eval:function(a,b){return h(a)(this,b)},$evalAsync:function(a,b){w.$$phase||u.length||k.defer(function(){u.length&&w.$digest()});u.push({scope:this,expression:a,locals:b})},$$postDigest:function(a){L.push(a)},$apply:function(a){try{t("$apply");
try{return this.$eval(a)}finally{w.$$phase=null}}catch(b){g(b)}finally{try{w.$digest()}catch(c){throw g(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&aa.push(b);C()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,v(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,f=!1,h=
{name:a,targetScope:e,stopPropagation:function(){f=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=cb([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(r){g(r)}else d.splice(l,1),l--,m--;if(f)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};
if(!this.$$listenerCount[a])return e;for(var f=cb([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,f)}catch(l){g(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var w=new r,u=w.$$asyncQueue=[],L=w.$$postDigestQueue=[],aa=w.$$applyAsyncQueue=[];return w}]}function ge(){var a=/^\s*(https?|ftp|mailto|tel|file):/,
b=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(b){return y(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return y(a)?(b=a,this):b};this.$get=function(){return function(d,c){var e=c?b:a,f;f=wa(d).href;return""===f||f.match(e)?d:"unsafe:"+f}}}function ag(a){if("self"===a)return a;if(E(a)){if(-1<a.indexOf("***"))throw ya("iwcard",a);a=ud(a).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+a+"$")}if(Ma(a))return new RegExp("^"+
a.source+"$");throw ya("imatcher");}function vd(a){var b=[];y(a)&&n(a,function(a){b.push(ag(a))});return b}function pf(){this.SCE_CONTEXTS=la;var a=["self"],b=[];this.resourceUrlWhitelist=function(b){arguments.length&&(a=vd(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=vd(a));return b};this.$get=["$injector",function(d){function c(a,b){return"self"===a?ed(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=
new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw ya("unsafe");};d.has("$sanitize")&&(f=d.get("$sanitize"));var g=e(),h={};h[la.HTML]=e(g);h[la.CSS]=e(g);h[la.URL]=e(g);h[la.JS]=e(g);h[la.RESOURCE_URL]=e(h[la.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw ya("icontext",a,b);if(null===b||q(b)||""===b)return b;if("string"!==typeof b)throw ya("itype",
a);return new c(b)},getTrusted:function(d,e){if(null===e||q(e)||""===e)return e;var g=h.hasOwnProperty(d)?h[d]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(d===la.RESOURCE_URL){var g=wa(e.toString()),r,t,n=!1;r=0;for(t=a.length;r<t;r++)if(c(a[r],g)){n=!0;break}if(n)for(r=0,t=b.length;r<t;r++)if(c(b[r],g)){n=!1;break}if(n)return e;throw ya("insecurl",e.toString());}if(d===la.HTML)return f(e);throw ya("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}
function of(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>Ha)throw ya("iequirks");var c=ia(la);c.isEnabled=function(){return a};c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},c.valueOf=Ya);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var e=c.parseAs,f=c.getTrusted,g=c.trustAs;n(la,function(a,
b){var d=F(b);c[fb("parse_as_"+d)]=function(b){return e(a,b)};c[fb("get_trusted_"+d)]=function(b){return f(a,b)};c[fb("trust_as_"+d)]=function(b){return g(a,b)}});return c}]}function qf(){this.$get=["$window","$document",function(a,b){var d={},c=ea((/android (\d+)/.exec(F((a.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((a.navigator||{}).userAgent),f=b[0]||{},g,h=/^(Moz|webkit|ms)(?=[A-Z])/,k=f.body&&f.body.style,l=!1,m=!1;if(k){for(var r in k)if(l=h.exec(r)){g=l[0];g=g.substr(0,1).toUpperCase()+
g.substr(1);break}g||(g="WebkitOpacity"in k&&"webkit");l=!!("transition"in k||g+"Transition"in k);m=!!("animation"in k||g+"Animation"in k);!c||l&&m||(l=E(k.webkitTransition),m=E(k.webkitAnimation))}return{history:!(!a.history||!a.history.pushState||4>c||e),hasEvent:function(a){if("input"===a&&11>=Ha)return!1;if(q(d[a])){var b=f.createElement("div");d[a]="on"+a in b}return d[a]},csp:Ba(),vendorPrefix:g,transitions:l,animations:m,android:c}}]}function sf(){this.$get=["$templateCache","$http","$q","$sce",
function(a,b,d,c){function e(f,g){e.totalPendingRequests++;E(f)&&a.get(f)||(f=c.getTrustedResourceUrl(f));var h=b.defaults&&b.defaults.transformResponse;I(h)?h=h.filter(function(a){return a!==$b}):h===$b&&(h=null);return b.get(f,{cache:a,transformResponse:h})["finally"](function(){e.totalPendingRequests--}).then(function(b){a.put(f,b.data);return b.data},function(a){if(!g)throw ha("tpload",f,a.status,a.statusText);return d.reject(a)})}e.totalPendingRequests=0;return e}]}function tf(){this.$get=["$rootScope",
"$browser","$location",function(a,b,d){return{findBindings:function(a,b,d){a=a.getElementsByClassName("ng-binding");var g=[];n(a,function(a){var c=fa.element(a).data("$binding");c&&n(c,function(c){d?(new RegExp("(^|\\s)"+ud(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!=c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var k=a.querySelectorAll("["+g[h]+"model"+(d?"=":"*=")+'"'+b+'"]');if(k.length)return k}},getLocation:function(){return d.url()},
setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}function uf(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,e){function f(f,k,l){z(f)||(l=k,k=f,f=x);var m=ra.call(arguments,3),r=y(l)&&!l,t=(r?c:d).defer(),n=t.promise,q;q=b.defer(function(){try{t.resolve(f.apply(null,m))}catch(b){t.reject(b),e(b)}finally{delete g[n.$$timeoutId]}r||a.$apply()},k);n.$$timeoutId=q;g[q]=t;return n}var g={};
f.cancel=function(a){return a&&a.$$timeoutId in g?(g[a.$$timeoutId].reject("canceled"),delete g[a.$$timeoutId],b.defer.cancel(a.$$timeoutId)):!1};return f}]}function wa(a){Ha&&(Y.setAttribute("href",a),a=Y.href);Y.setAttribute("href",a);return{href:Y.href,protocol:Y.protocol?Y.protocol.replace(/:$/,""):"",host:Y.host,search:Y.search?Y.search.replace(/^\?/,""):"",hash:Y.hash?Y.hash.replace(/^#/,""):"",hostname:Y.hostname,port:Y.port,pathname:"/"===Y.pathname.charAt(0)?Y.pathname:"/"+Y.pathname}}function ed(a){a=
E(a)?wa(a):a;return a.protocol===wd.protocol&&a.host===wd.host}function vf(){this.$get=na(S)}function xd(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}var d=a[0]||{},c={},e="";return function(){var a,g,h,k,l;a=d.cookie||"";if(a!==e)for(e=a,a=e.split("; "),c={},h=0;h<a.length;h++)g=a[h],k=g.indexOf("="),0<k&&(l=b(g.substring(0,k)),q(c[l])&&(c[l]=b(g.substring(k+1))));return c}}function zf(){this.$get=xd}function Jc(a){function b(d,c){if(H(d)){var e={};n(d,function(a,c){e[c]=
b(c,a)});return e}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",yd);b("date",zd);b("filter",bg);b("json",cg);b("limitTo",dg);b("lowercase",eg);b("number",Ad);b("orderBy",Bd);b("uppercase",fg)}function bg(){return function(a,b,d){if(!za(a)){if(null==a)return a;throw G("filter")("notarray",a);}var c;switch(hc(b)){case "function":break;case "boolean":case "null":case "number":case "string":c=!0;case "object":b=
gg(b,d,c);break;default:return a}return Array.prototype.filter.call(a,b)}}function gg(a,b,d){var c=H(a)&&"$"in a;!0===b?b=ma:z(b)||(b=function(a,b){if(q(a))return!1;if(null===a||null===b)return a===b;if(H(b)||H(a)&&!qc(a))return!1;a=F(""+a);b=F(""+b);return-1!==a.indexOf(b)});return function(e){return c&&!H(e)?Ka(e,a.$,b,!1):Ka(e,a,b,d)}}function Ka(a,b,d,c,e){var f=hc(a),g=hc(b);if("string"===g&&"!"===b.charAt(0))return!Ka(a,b.substring(1),d,c);if(I(a))return a.some(function(a){return Ka(a,b,d,c)});
switch(f){case "object":var h;if(c){for(h in a)if("$"!==h.charAt(0)&&Ka(a[h],b,d,!0))return!0;return e?!1:Ka(a,b,d,!1)}if("object"===g){for(h in b)if(e=b[h],!z(e)&&!q(e)&&(f="$"===h,!Ka(f?a:a[h],e,d,f,f)))return!1;return!0}return d(a,b);case "function":return!1;default:return d(a,b)}}function hc(a){return null===a?"null":typeof a}function yd(a){var b=a.NUMBER_FORMATS;return function(a,c,e){q(c)&&(c=b.CURRENCY_SYM);q(e)&&(e=b.PATTERNS[1].maxFrac);return null==a?a:Cd(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,
e).replace(/\u00A4/g,c)}}function Ad(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Cd(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function Cd(a,b,d,c,e){if(H(a))return"";var f=0>a;a=Math.abs(a);var g=Infinity===a;if(!g&&!isFinite(a))return"";var h=a+"",k="",l=!1,m=[];g&&(k="\u221e");if(!g&&-1!==h.indexOf("e")){var r=h.match(/([\d\.]+)e(-?)(\d+)/);r&&"-"==r[2]&&r[3]>e+1?a=0:(k=h,l=!0)}if(g||l)0<e&&1>a&&(k=a.toFixed(e),a=parseFloat(k),k=k.replace(ic,c));else{g=(h.split(ic)[1]||"").length;
q(e)&&(e=Math.min(Math.max(b.minFrac,g),b.maxFrac));a=+(Math.round(+(a.toString()+"e"+e)).toString()+"e"+-e);var g=(""+a).split(ic),h=g[0],g=g[1]||"",r=0,t=b.lgSize,n=b.gSize;if(h.length>=t+n)for(r=h.length-t,l=0;l<r;l++)0===(r-l)%n&&0!==l&&(k+=d),k+=h.charAt(l);for(l=r;l<h.length;l++)0===(h.length-l)%t&&0!==l&&(k+=d),k+=h.charAt(l);for(;g.length<e;)g+="0";e&&"0"!==e&&(k+=c+g.substr(0,e))}0===a&&(f=!1);m.push(f?b.negPre:b.posPre,k,f?b.negSuf:b.posSuf);return m.join("")}function Gb(a,b,d){var c="";
0>a&&(c="-",a=-a);for(a=""+a;a.length<b;)a="0"+a;d&&(a=a.substr(a.length-b));return c+a}function ca(a,b,d,c){d=d||0;return function(e){e=e["get"+a]();if(0<d||e>-d)e+=d;0===e&&-12==d&&(e=12);return Gb(e,b,c)}}function Hb(a,b){return function(d,c){var e=d["get"+a](),f=sb(b?"SHORT"+a:a);return c[f][e]}}function Dd(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Ed(a){return function(b){var d=Dd(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-
+d;b=1+Math.round(b/6048E5);return Gb(b,a)}}function jc(a,b){return 0>=a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function zd(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,k=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=ea(b[9]+b[10]),g=ea(b[9]+b[11]));h.call(a,ea(b[1]),ea(b[2])-1,ea(b[3]));f=ea(b[4]||0)-f;g=ea(b[5]||0)-g;h=ea(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));k.call(a,f,g,h,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
return function(c,d,f){var g="",h=[],k,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;E(c)&&(c=hg.test(c)?ea(c):b(c));Q(c)&&(c=new Date(c));if(!da(c)||!isFinite(c.getTime()))return c;for(;d;)(l=ig.exec(d))?(h=cb(h,l,1),d=h.pop()):(h.push(d),d=null);var m=c.getTimezoneOffset();f&&(m=vc(f,c.getTimezoneOffset()),c=Pb(c,f,!0));n(h,function(b){k=jg[b];g+=k?k(c,a.DATETIME_FORMATS,m):b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function cg(){return function(a,b){q(b)&&(b=2);return db(a,b)}}function dg(){return function(a,
b,d){b=Infinity===Math.abs(Number(b))?Number(b):ea(b);if(isNaN(b))return a;Q(a)&&(a=a.toString());if(!I(a)&&!E(a))return a;d=!d||isNaN(d)?0:ea(d);d=0>d?Math.max(0,a.length+d):d;return 0<=b?a.slice(d,d+b):0===d?a.slice(b,a.length):a.slice(Math.max(0,d+b),d)}}function Bd(a){function b(b,d){d=d?-1:1;return b.map(function(b){var c=1,h=Ya;if(z(b))h=b;else if(E(b)){if("+"==b.charAt(0)||"-"==b.charAt(0))c="-"==b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(h=a(b),h.constant))var k=h(),h=function(a){return a[k]}}return{get:h,
descending:c*d}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}return function(a,e,f){if(!za(a))return a;I(e)||(e=[e]);0===e.length&&(e=["+"]);var g=b(e,f);g.push({get:function(){return{}},descending:f?-1:1});a=Array.prototype.map.call(a,function(a,b){return{value:a,predicateValues:g.map(function(c){var e=c.get(a);c=typeof e;if(null===e)c="string",e="null";else if("string"===c)e=e.toLowerCase();else if("object"===c)a:{if("function"===typeof e.valueOf&&
(e=e.valueOf(),d(e)))break a;if(qc(e)&&(e=e.toString(),d(e)))break a;e=b}return{value:e,type:c}})}});a.sort(function(a,b){for(var c=0,d=0,e=g.length;d<e;++d){var c=a.predicateValues[d],f=b.predicateValues[d],n=0;c.type===f.type?c.value!==f.value&&(n=c.value<f.value?-1:1):n=c.type<f.type?-1:1;if(c=n*g[d].descending)break}return c});return a=a.map(function(a){return a.value})}}function La(a){z(a)&&(a={link:a});a.restrict=a.restrict||"AC";return na(a)}function Fd(a,b,d,c,e){var f=this,g=[];f.$error=
{};f.$$success={};f.$pending=u;f.$name=e(b.name||b.ngForm||"")(d);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;f.$$parentForm=Ib;f.$rollbackViewValue=function(){n(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){n(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){Ra(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a);a.$$parentForm=f};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&
f[a.$name]===a&&delete f[a.$name];n(f.$pending,function(b,c){f.$setValidity(c,null,a)});n(f.$error,function(b,c){f.$setValidity(c,null,a)});n(f.$$success,function(b,c){f.$setValidity(c,null,a)});ab(g,a);a.$$parentForm=Ib};Gd({ctrl:this,$element:a,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(ab(d,c),0===d.length&&delete a[b])},$animate:c});f.$setDirty=function(){c.removeClass(a,Wa);c.addClass(a,Jb);f.$dirty=!0;f.$pristine=!1;f.$$parentForm.$setDirty()};
f.$setPristine=function(){c.setClass(a,Wa,Jb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;n(g,function(a){a.$setPristine()})};f.$setUntouched=function(){n(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){c.addClass(a,"ng-submitted");f.$submitted=!0;f.$$parentForm.$setSubmitted()}}function kc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function jb(a,b,d,c,e,f){var g=F(b[0].type);if(!e.android){var h=!1;b.on("compositionstart",function(a){h=!0});
b.on("compositionend",function(){h=!1;k()})}var k=function(a){l&&(f.defer.cancel(l),l=null);if(!h){var e=b.val();a=a&&a.type;"password"===g||d.ngTrim&&"false"===d.ngTrim||(e=U(e));(c.$viewValue!==e||""===e&&c.$$hasNativeValidators)&&c.$setViewValue(e,a)}};if(e.hasEvent("input"))b.on("input",k);else{var l,m=function(a,b,c){l||(l=f.defer(function(){l=null;b&&b.value===c||k(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))b.on("paste cut",
m)}b.on("change",k);c.$render=function(){var a=c.$isEmpty(c.$viewValue)?"":c.$viewValue;b.val()!==a&&b.val(a)}}function Kb(a,b){return function(d,c){var e,f;if(da(d))return d;if(E(d)){'"'==d.charAt(0)&&'"'==d.charAt(d.length-1)&&(d=d.substring(1,d.length-1));if(kg.test(d))return new Date(d);a.lastIndex=0;if(e=a.exec(d))return e.shift(),f=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,
mm:0,ss:0,sss:0},n(e,function(a,c){c<b.length&&(f[b[c]]=+a)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function kb(a,b,d,c){return function(e,f,g,h,k,l,m){function r(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function n(a){return y(a)&&!da(a)?d(a)||u:a}Hd(e,f,g,h);jb(e,f,g,h,k,l);var A=h&&h.$options&&h.$options.timezone,v;h.$$parserName=a;h.$parsers.push(function(a){return h.$isEmpty(a)?null:b.test(a)?(a=d(a,v),A&&(a=Pb(a,A)),a):u});h.$formatters.push(function(a){if(a&&
!da(a))throw lb("datefmt",a);if(r(a))return(v=a)&&A&&(v=Pb(v,A,!0)),m("date")(a,c,A);v=null;return""});if(y(g.min)||g.ngMin){var s;h.$validators.min=function(a){return!r(a)||q(s)||d(a)>=s};g.$observe("min",function(a){s=n(a);h.$validate()})}if(y(g.max)||g.ngMax){var p;h.$validators.max=function(a){return!r(a)||q(p)||d(a)<=p};g.$observe("max",function(a){p=n(a);h.$validate()})}}}function Hd(a,b,d,c){(c.$$hasNativeValidators=H(b[0].validity))&&c.$parsers.push(function(a){var c=b.prop("validity")||{};
return c.badInput&&!c.typeMismatch?u:a})}function Id(a,b,d,c,e){if(y(c)){a=a(c);if(!a.constant)throw lb("constexpr",d,c);return a(b)}return e}function lc(a,b){a="ngClass"+a;return["$animate",function(d){function c(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}function e(a){var b=[];return I(a)?(n(a,function(a){b=b.concat(e(a))}),b):E(a)?a.split(" "):H(a)?(n(a,function(a,c){a&&(b=b.concat(c.split(" ")))}),b):a}return{restrict:"AC",
link:function(f,g,h){function k(a,b){var c=g.data("$classCounts")||$(),d=[];n(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function l(a){if(!0===b||f.$index%2===b){var l=e(a||[]);if(!m){var n=k(l,1);h.$addClass(n)}else if(!ma(a,m)){var q=e(m),n=c(l,q),l=c(q,l),n=k(n,1),l=k(l,-1);n&&n.length&&d.addClass(g,n);l&&l.length&&d.removeClass(g,l)}}m=ia(a)}var m;f.$watch(h[a],l,!0);h.$observe("class",function(b){l(f.$eval(h[a]))});"ngClass"!==
a&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var l=e(f.$eval(h[a]));g===b?(g=k(l,1),h.$addClass(g)):(g=k(l,-1),h.$removeClass(g))}})}}}]}function Gd(a){function b(a,b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function d(a,c){a=a?"-"+zc(a,"-"):"";b(mb+a,!0===c);b(Jd+a,!1===c)}var c=a.ctrl,e=a.$element,f={},g=a.set,h=a.unset,k=a.$animate;f[Jd]=!(f[mb]=e.hasClass(mb));c.$setValidity=function(a,e,f){q(e)?(c.$pending||(c.$pending={}),g(c.$pending,a,f)):(c.$pending&&
h(c.$pending,a,f),Kd(c.$pending)&&(c.$pending=u));$a(e)?e?(h(c.$error,a,f),g(c.$$success,a,f)):(g(c.$error,a,f),h(c.$$success,a,f)):(h(c.$error,a,f),h(c.$$success,a,f));c.$pending?(b(Ld,!0),c.$valid=c.$invalid=u,d("",null)):(b(Ld,!1),c.$valid=Kd(c.$error),c.$invalid=!c.$valid,d("",c.$valid));e=c.$pending&&c.$pending[a]?u:c.$error[a]?!1:c.$$success[a]?!0:null;d(a,e);c.$$parentForm.$setValidity(a,e,c)}}function Kd(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}var lg=/^\/(.+)\/([a-z]*)$/,
F=function(a){return E(a)?a.toLowerCase():a},qa=Object.prototype.hasOwnProperty,sb=function(a){return E(a)?a.toUpperCase():a},Ha,B,oa,ra=[].slice,Pf=[].splice,mg=[].push,sa=Object.prototype.toString,rc=Object.getPrototypeOf,Aa=G("ng"),fa=S.angular||(S.angular={}),Sb,nb=0;Ha=X.documentMode;x.$inject=[];Ya.$inject=[];var I=Array.isArray,Vd=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,U=function(a){return E(a)?a.trim():a},ud=function(a){return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,
"\\$1").replace(/\x08/g,"\\x08")},Ba=function(){if(!y(Ba.rules)){var a=X.querySelector("[ng-csp]")||X.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");Ba.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==b.indexOf("no-inline-style")}}else{a=Ba;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return Ba.rules},pb=function(){if(y(pb.name_))return pb.name_;var a,b,d=Oa.length,c,e;for(b=0;b<
d;++b)if(c=Oa[b],a=X.querySelector("["+c.replace(":","\\:")+"jq]")){e=a.getAttribute(c+"jq");break}return pb.name_=e},Oa=["ng-","data-ng-","ng:","x-ng-"],be=/[A-Z]/g,Ac=!1,Rb,Na=3,fe={full:"1.4.8",major:1,minor:4,dot:8,codeName:"ice-manipulation"};N.expando="ng339";var gb=N.cache={},Ff=1;N._data=function(a){return this.cache[a[this.expando]]||{}};var Af=/([\:\-\_]+(.))/g,Bf=/^moz([A-Z])/,xb={mouseleave:"mouseout",mouseenter:"mouseover"},Ub=G("jqLite"),Ef=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,Tb=/<|&#?\w+;/,
Cf=/<([\w:-]+)/,Df=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,ka={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ka.optgroup=ka.option;ka.tbody=ka.tfoot=ka.colgroup=ka.caption=ka.thead;ka.th=ka.td;var Kf=Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&
16)},Pa=N.prototype={ready:function(a){function b(){d||(d=!0,a())}var d=!1;"complete"===X.readyState?setTimeout(b):(this.on("DOMContentLoaded",b),N(S).on("load",b))},toString:function(){var a=[];n(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},eq:function(a){return 0<=a?B(this[a]):B(this[this.length+a])},length:0,push:mg,sort:[].sort,splice:[].splice},Cb={};n("multiple selected checked disabled readOnly required open".split(" "),function(a){Cb[F(a)]=a});var Rc={};n("input select option textarea button form details".split(" "),
function(a){Rc[a]=!0});var Zc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};n({data:Wb,removeData:vb,hasData:function(a){for(var b in gb[a.ng339])return!0;return!1}},function(a,b){N[b]=a});n({data:Wb,inheritedData:Bb,scope:function(a){return B.data(a,"$scope")||Bb(a.parentNode||a,["$isolateScope","$scope"])},isolateScope:function(a){return B.data(a,"$isolateScope")||B.data(a,"$isolateScopeNoTemplate")},controller:Oc,injector:function(a){return Bb(a,
"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:yb,css:function(a,b,d){b=fb(b);if(y(d))a.style[b]=d;else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==Na&&2!==c&&8!==c)if(c=F(b),Cb[c])if(y(d))d?(a[b]=!0,a.setAttribute(b,c)):(a[b]=!1,a.removeAttribute(c));else return a[b]||(a.attributes.getNamedItem(b)||x).specified?c:u;else if(y(d))a.setAttribute(b,d);else if(a.getAttribute)return a=a.getAttribute(b,2),null===a?u:a},prop:function(a,b,d){if(y(d))a[b]=d;else return a[b]},
text:function(){function a(a,d){if(q(d)){var c=a.nodeType;return 1===c||c===Na?a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(q(b)){if(a.multiple&&"select"===ta(a)){var d=[];n(a.options,function(a){a.selected&&d.push(a.value||a.text)});return 0===d.length?null:d}return a.value}a.value=b},html:function(a,b){if(q(b))return a.innerHTML;ub(a,!0);a.innerHTML=b},empty:Pc},function(a,b){N.prototype[b]=function(b,c){var e,f,g=this.length;if(a!==Pc&&q(2==a.length&&a!==yb&&a!==Oc?
b:c)){if(H(b)){for(e=0;e<g;e++)if(a===Wb)a(this[e],b);else for(f in b)a(this[e],f,b[f]);return this}e=a.$dv;g=q(e)?Math.min(g,1):g;for(f=0;f<g;f++){var h=a(this[f],b,c);e=e?e+h:h}return e}for(e=0;e<g;e++)a(this[e],b,c);return this}});n({removeData:vb,on:function(a,b,d,c){if(y(c))throw Ub("onargs");if(Kc(a)){c=wb(a,!0);var e=c.events,f=c.handle;f||(f=c.handle=Hf(a,e));c=0<=b.indexOf(" ")?b.split(" "):[b];for(var g=c.length,h=function(b,c,g){var h=e[b];h||(h=e[b]=[],h.specialHandlerWrapper=c,"$destroy"===
b||g||a.addEventListener(b,f,!1));h.push(d)};g--;)b=c[g],xb[b]?(h(xb[b],Jf),h(b,u,!0)):h(b)}},off:Nc,one:function(a,b,d){a=B(a);a.on(b,function e(){a.off(b,d);a.off(b,e)});a.on(b,d)},replaceWith:function(a,b){var d,c=a.parentNode;ub(a);n(new N(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];n(a.childNodes,function(a){1===a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,b){var d=
a.nodeType;if(1===d||11===d){b=new N(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;n(new N(b),function(b){a.insertBefore(b,d)})}},wrap:function(a,b){b=B(b).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(b,a);b.appendChild(a)},remove:Xb,detach:function(a){Xb(a,!0)},after:function(a,b){var d=a,c=a.parentNode;b=new N(b);for(var e=0,f=b.length;e<f;e++){var g=b[e];c.insertBefore(g,d.nextSibling);d=g}},addClass:Ab,removeClass:zb,
toggleClass:function(a,b,d){b&&n(b.split(" "),function(b){var e=d;q(e)&&(e=!yb(a,b));(e?Ab:zb)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:Vb,triggerHandler:function(a,b,d){var c,e,f=b.type||b,g=wb(a);if(g=(g=g&&g.events)&&g[f])c={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},
stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:x,type:f,target:a},b.type&&(c=M(c,b)),b=ia(g),e=d?[c].concat(d):[c],n(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,e)})}},function(a,b){N.prototype[b]=function(b,c,e){for(var f,g=0,h=this.length;g<h;g++)q(f)?(f=a(this[g],b,c,e),y(f)&&(f=B(f))):Mc(f,a(this[g],b,c,e));return y(f)?f:this};N.prototype.bind=N.prototype.on;
N.prototype.unbind=N.prototype.off});Sa.prototype={put:function(a,b){this[Ca(a,this.nextUid)]=b},get:function(a){return this[Ca(a,this.nextUid)]},remove:function(a){var b=this[a=Ca(a,this.nextUid)];delete this[a];return b}};var yf=[function(){this.$get=[function(){return Sa}]}],Tc=/^[^\(]*\(\s*([^\)]*)\)/m,ng=/,/,og=/^\s*(_?)(\S+?)\1\s*$/,Sc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Da=G("$injector");eb.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw E(d)&&
d||(d=a.name||Lf(a)),Da("strictdi",d);b=a.toString().replace(Sc,"");b=b.match(Tc);n(b[1].split(ng),function(a){a.replace(og,function(a,b,d){c.push(d)})})}a.$inject=c}}else I(a)?(b=a.length-1,Qa(a[b],"fn"),c=a.slice(0,b)):Qa(a,"fn",!0);return c};var Md=G("$animate"),Ue=function(){this.$get=["$q","$$rAF",function(a,b){function d(){}d.all=x;d.chain=x;d.prototype={end:x,cancel:x,resume:x,pause:x,complete:x,then:function(c,d){return a(function(a){b(function(){a()})}).then(c,d)}};return d}]},Te=function(){var a=
new Sa,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function e(a,b,c){var d=!1;b&&(b=E(b)?b.split(" "):I(b)?b:[],n(b,function(b){b&&(d=!0,a[b]=c)}));return d}function f(){n(b,function(b){var c=a.get(b);if(c){var d=Mf(b.attr("class")),e="",f="";n(c,function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});n(b,function(a){e&&Ab(a,e);f&&zb(a,f)});a.remove(b)}});b.length=0}return{enabled:x,on:x,off:x,pin:x,push:function(g,h,k,l){l&&l();k=k||{};k.from&&g.css(k.from);
k.to&&g.css(k.to);if(k.addClass||k.removeClass)if(h=k.addClass,l=k.removeClass,k=a.get(g)||{},h=e(k,h,!0),l=e(k,l,!1),h||l)a.put(g,k),b.push(g),1===b.length&&c.$$postDigest(f);return new d}}}]},Re=["$provide",function(a){var b=this;this.$$registeredAnimations=Object.create(null);this.register=function(d,c){if(d&&"."!==d.charAt(0))throw Md("notcsel",d);var e=d+"-animation";b.$$registeredAnimations[d.substr(1)]=e;a.factory(e,c)};this.classNameFilter=function(a){if(1===arguments.length&&(this.$$classNameFilter=
a instanceof RegExp?a:null)&&/(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw Md("nongcls","ng-animate");return this.$$classNameFilter};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var h;a:{for(h=0;h<d.length;h++){var k=d[h];if(1===k.nodeType){h=k;break a}}h=void 0}!h||h.parentNode||h.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},enter:function(e,f,g,h){f=
f&&B(f);g=g&&B(g);f=f||g.parent();b(e,f,g);return a.push(e,"enter",Ea(h))},move:function(e,f,g,h){f=f&&B(f);g=g&&B(g);f=f||g.parent();b(e,f,g);return a.push(e,"move",Ea(h))},leave:function(b,c){return a.push(b,"leave",Ea(c),function(){b.remove()})},addClass:function(b,c,g){g=Ea(g);g.addClass=hb(g.addclass,c);return a.push(b,"addClass",g)},removeClass:function(b,c,g){g=Ea(g);g.removeClass=hb(g.removeClass,c);return a.push(b,"removeClass",g)},setClass:function(b,c,g,h){h=Ea(h);h.addClass=hb(h.addClass,
c);h.removeClass=hb(h.removeClass,g);return a.push(b,"setClass",h)},animate:function(b,c,g,h,k){k=Ea(k);k.from=k.from?M(k.from,c):c;k.to=k.to?M(k.to,g):g;k.tempClasses=hb(k.tempClasses,h||"ng-inline-animate");return a.push(b,"animate",k)}}}]}],Se=function(){this.$get=["$$rAF","$q",function(a,b){var d=function(){};d.prototype={done:function(a){this.defer&&this.defer[!0===a?"reject":"resolve"]()},end:function(){this.done()},cancel:function(){this.done(!0)},getPromise:function(){this.defer||(this.defer=
b.defer());return this.defer.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)}};return function(b,e){function f(){a(function(){e.addClass&&(b.addClass(e.addClass),e.addClass=null);e.removeClass&&(b.removeClass(e.removeClass),e.removeClass=null);e.to&&(b.css(e.to),e.to=null);g||h.done();g=!0});return h}e.cleanupStyles&&(e.from=e.to=null);e.from&&(b.css(e.from),e.from=
null);var g,h=new d;return{start:f,end:f}}}]},ha=G("$compile");Cc.$inject=["$provide","$$sanitizeUriProvider"];var Vc=/^((?:x|data)[\:\-_])/i,Qf=G("$controller"),Uc=/^(\S+)(\s+as\s+(\w+))?$/,$e=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&b instanceof B&&(b=b[0]):b=a[0].body;return b.offsetWidth+1}}]},$c="application/json",ac={"Content-Type":$c+";charset=utf-8"},Sf=/^\[|^\{(?!\{)/,Tf={"[":/]$/,"{":/}$/},Rf=/^\)\]\}',?\n/,pg=G("$http"),dd=function(a){return function(){throw pg("legacy",
a);}},Ja=fa.$interpolateMinErr=G("$interpolate");Ja.throwNoconcat=function(a){throw Ja("noconcat",a);};Ja.interr=function(a,b){return Ja("interr",a,b.toString())};var qg=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,Vf={http:80,https:443,ftp:21},Db=G("$location"),rg={$$html5:!1,$$replace:!1,absUrl:Eb("$$absUrl"),url:function(a){if(q(a))return this.$$url;var b=qg.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Eb("$$protocol"),
host:Eb("$$host"),port:Eb("$$port"),path:id("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(E(a)||Q(a))a=a.toString(),this.$$search=xc(a);else if(H(a))a=bb(a,{}),n(a,function(b,c){null==b&&delete a[c]}),this.$$search=a;else throw Db("isrcharg");break;default:q(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:id("$$hash",function(a){return null!==
a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};n([hd,dc,cc],function(a){a.prototype=Object.create(rg);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==cc||!this.$$html5)throw Db("nostate");this.$$state=q(b)?null:b;return this}});var ba=G("$parse"),Wf=Function.prototype.call,Xf=Function.prototype.apply,Yf=Function.prototype.bind,Lb=$();n("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Lb[a]=!0});var sg={n:"\n",f:"\f",r:"\r",
t:"\t",v:"\v","'":"'",'"':'"'},fc=function(a){this.options=a};fc.prototype={constructor:fc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(a))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;
else{var b=a+this.peek(),d=b+this.peek(2),c=Lb[b],e=Lb[d];Lb[a]||c||e?(a=e?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||
"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=y(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw ba("lexerr",a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<this.text.length;){var d=F(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var c=this.peek();
if("e"==d&&this.isExpOperator(c))a+=d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||c&&this.isNumber(c)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=this.index;this.index<this.text.length;){var b=this.text.charAt(this.index);if(!this.isIdent(b)&&!this.isNumber(b))break;this.index++}this.tokens.push({index:a,
text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;for(var d="",c=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),c=c+f;if(e)"u"===f?(e=this.text.substring(this.index+1,this.index+5),e.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+e+"]"),this.index+=4,d+=String.fromCharCode(parseInt(e,16))):d+=sg[f]||f,e=!1;else if("\\"===f)e=!0;else{if(f===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,
value:d});return}d+=f}this.index++}this.throwError("Unterminated quote",b)}};var s=function(a,b){this.lexer=a;this.options=b};s.Program="Program";s.ExpressionStatement="ExpressionStatement";s.AssignmentExpression="AssignmentExpression";s.ConditionalExpression="ConditionalExpression";s.LogicalExpression="LogicalExpression";s.BinaryExpression="BinaryExpression";s.UnaryExpression="UnaryExpression";s.CallExpression="CallExpression";s.MemberExpression="MemberExpression";s.Identifier="Identifier";s.Literal=
"Literal";s.ArrayExpression="ArrayExpression";s.Property="Property";s.ObjectExpression="ObjectExpression";s.ThisExpression="ThisExpression";s.NGValueParameter="NGValueParameter";s.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:s.Program,
body:a}},expressionStatement:function(){return{type:s.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();this.expect("=")&&(a={type:s.AssignmentExpression,left:a,right:this.assignment(),operator:"="});return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?
(d=this.expression(),{type:s.ConditionalExpression,test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:s.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={type:s.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=","===","!==");)a={type:s.BinaryExpression,
operator:b.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),b;b=this.expect("+","-");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*","/","%");)a={type:s.BinaryExpression,operator:b.text,
left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:s.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.constants.hasOwnProperty(this.peek().text)?a=bb(this.constants[this.consume().text]):this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():
this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:s.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===b.text?(a={type:s.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:s.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var b={type:s.CallExpression,callee:this.identifier(),
arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.expression());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:s.Identifier,name:a.text}},constant:function(){return{type:s.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;
a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:s.ArrayExpression,elements:a}},object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;b={type:s.Property,kind:"init"};this.peek().constant?b.key=this.constant():this.peek().identifier?b.key=this.identifier():this.throwError("invalid key",this.peek());this.consume(":");b.value=this.expression();a.push(b)}while(this.expect(","))}this.consume("}");return{type:s.ObjectExpression,properties:a}},
throwError:function(a,b){throw ba("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));},consume:function(a){if(0===this.tokens.length)throw ba("ueoe",this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw ba("ueoe",this.text);return this.tokens[0]},peek:function(a,b,d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,e){if(this.tokens.length>a){a=this.tokens[a];
var f=a.text;if(f===b||f===d||f===c||f===e||!(b||d||c||e))return a}return!1},expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},constants:{"true":{type:s.Literal,value:!0},"false":{type:s.Literal,value:!1},"null":{type:s.Literal,value:null},undefined:{type:s.Literal,value:u},"this":{type:s.ThisExpression}}};rd.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.state={nextId:0,filters:{},expensiveChecks:b,fn:{vars:[],body:[],own:{}},assign:{vars:[],
body:[],own:{}},inputs:[]};W(c,d.$filter);var e="",f;this.stage="assign";if(f=pd(c))this.state.computing="assign",e=this.nextId(),this.recurse(f,e),this.return_(e),e="fn.assign="+this.generateFunction("assign","s,v,l");f=nd(c.body);d.stage="inputs";n(f,function(a,b){var c="fn"+b;d.state[c]={vars:[],body:[],own:{}};d.state.computing=c;var e=d.nextId();d.recurse(a,e);d.return_(e);d.state.inputs.push(c);a.watchId=b});this.state.computing="fn";this.stage="main";this.recurse(c);e='"'+this.USE+" "+this.STRICT+
'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+e+this.watchFns()+"return fn;";e=(new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","getStringValue","ensureSafeAssignContext","ifDefined","plus","text",e))(this.$filter,Va,xa,kd,jd,ld,Zf,md,a);this.state=this.stage=u;e.literal=qd(c);e.constant=c.constant;return e},USE:"use",STRICT:"strict",watchFns:function(){var a=[],b=this.state.inputs,d=this;n(b,function(b){a.push("var "+b+"="+d.generateFunction(b,
"s"))});b.length&&a.push("fn.inputs=["+b.join(",")+"];");return a.join("")},generateFunction:function(a,b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;n(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,b,
d,c,e,f){var g,h,k=this,l,m;c=c||x;if(!f&&y(a.watchId))b=b||this.nextId(),this.if_("i",this.lazyAssign(b,this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,e,!0));else switch(a.type){case s.Program:n(a.body,function(b,c){k.recurse(b.expression,u,u,function(a){h=a});c!==a.body.length-1?k.current().body.push(h,";"):k.return_(h)});break;case s.Literal:m=this.escape(a.value);this.assign(b,m);c(m);break;case s.UnaryExpression:this.recurse(a.argument,u,u,function(a){h=a});m=a.operator+"("+this.ifDefined(h,
0)+")";this.assign(b,m);c(m);break;case s.BinaryExpression:this.recurse(a.left,u,u,function(a){g=a});this.recurse(a.right,u,u,function(a){h=a});m="+"===a.operator?this.plus(g,h):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(h,0):"("+g+")"+a.operator+"("+h+")";this.assign(b,m);c(m);break;case s.LogicalExpression:b=b||this.nextId();k.recurse(a.left,b);k.if_("&&"===a.operator?b:k.not(b),k.lazyRecurse(a.right,b));c(b);break;case s.ConditionalExpression:b=b||this.nextId();k.recurse(a.test,
b);k.if_(b,k.lazyRecurse(a.alternate,b),k.lazyRecurse(a.consequent,b));c(b);break;case s.Identifier:b=b||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);Va(a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),function(){k.if_("inputs"===k.stage||"s",function(){e&&1!==e&&k.if_(k.not(k.nonComputedMember("s",a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(b,k.nonComputedMember("s",
a.name))})},b&&k.lazyAssign(b,k.nonComputedMember("l",a.name)));(k.state.expensiveChecks||Fb(a.name))&&k.addEnsureSafeObject(b);c(b);break;case s.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();k.recurse(a.object,g,u,function(){k.if_(k.notNull(g),function(){if(a.computed)h=k.nextId(),k.recurse(a.property,h),k.getStringValue(h),k.addEnsureSafeMemberName(h),e&&1!==e&&k.if_(k.not(k.computedMember(g,h)),k.lazyAssign(k.computedMember(g,h),"{}")),m=k.ensureSafeObject(k.computedMember(g,
h)),k.assign(b,m),d&&(d.computed=!0,d.name=h);else{Va(a.property.name);e&&1!==e&&k.if_(k.not(k.nonComputedMember(g,a.property.name)),k.lazyAssign(k.nonComputedMember(g,a.property.name),"{}"));m=k.nonComputedMember(g,a.property.name);if(k.state.expensiveChecks||Fb(a.property.name))m=k.ensureSafeObject(m);k.assign(b,m);d&&(d.computed=!1,d.name=a.property.name)}},function(){k.assign(b,"undefined")});c(b)},!!e);break;case s.CallExpression:b=b||this.nextId();a.filter?(h=k.filter(a.callee.name),l=[],n(a.arguments,
function(a){var b=k.nextId();k.recurse(a,b);l.push(b)}),m=h+"("+l.join(",")+")",k.assign(b,m),c(b)):(h=k.nextId(),g={},l=[],k.recurse(a.callee,h,g,function(){k.if_(k.notNull(h),function(){k.addEnsureSafeFunction(h);n(a.arguments,function(a){k.recurse(a,k.nextId(),u,function(a){l.push(k.ensureSafeObject(a))})});g.name?(k.state.expensiveChecks||k.addEnsureSafeObject(g.context),m=k.member(g.context,g.name,g.computed)+"("+l.join(",")+")"):m=h+"("+l.join(",")+")";m=k.ensureSafeObject(m);k.assign(b,m)},
function(){k.assign(b,"undefined")});c(b)}));break;case s.AssignmentExpression:h=this.nextId();g={};if(!od(a.left))throw ba("lval");this.recurse(a.left,u,g,function(){k.if_(k.notNull(g.context),function(){k.recurse(a.right,h);k.addEnsureSafeObject(k.member(g.context,g.name,g.computed));k.addEnsureSafeAssignContext(g.context);m=k.member(g.context,g.name,g.computed)+a.operator+h;k.assign(b,m);c(b||m)})},1);break;case s.ArrayExpression:l=[];n(a.elements,function(a){k.recurse(a,k.nextId(),u,function(a){l.push(a)})});
m="["+l.join(",")+"]";this.assign(b,m);c(m);break;case s.ObjectExpression:l=[];n(a.properties,function(a){k.recurse(a.value,k.nextId(),u,function(b){l.push(k.escape(a.key.type===s.Identifier?a.key.name:""+a.key.value)+":"+b)})});m="{"+l.join(",")+"}";this.assign(b,m);c(m);break;case s.ThisExpression:this.assign(b,"s");c("s");break;case s.NGValueParameter:this.assign(b,"v"),c("v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=this.nextId(!1,a+"&&("+
this.escape(b)+" in "+a+")"));return c[d]},assign:function(a,b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;c.push("if(",a,
"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},not:function(a){return"!("+a+")"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){return a+"."+b},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,b)},addEnsureSafeObject:function(a){this.current().body.push(this.ensureSafeObject(a),";")},addEnsureSafeMemberName:function(a){this.current().body.push(this.ensureSafeMemberName(a),";")},
addEnsureSafeFunction:function(a){this.current().body.push(this.ensureSafeFunction(a),";")},addEnsureSafeAssignContext:function(a){this.current().body.push(this.ensureSafeAssignContext(a),";")},ensureSafeObject:function(a){return"ensureSafeObject("+a+",text)"},ensureSafeMemberName:function(a){return"ensureSafeMemberName("+a+",text)"},ensureSafeFunction:function(a){return"ensureSafeFunction("+a+",text)"},getStringValue:function(a){this.assign(a,"getStringValue("+a+",text)")},ensureSafeAssignContext:function(a){return"ensureSafeAssignContext("+
a+",text)"},lazyRecurse:function(a,b,d,c,e,f){var g=this;return function(){g.recurse(a,b,d,c,e,f)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(E(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(Q(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===
typeof a)return"undefined";throw ba("esc");},nextId:function(a,b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};sd.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.expression=a;this.expensiveChecks=b;W(c,d.$filter);var e,f;if(e=pd(c))f=this.recurse(e);e=nd(c.body);var g;e&&(g=[],n(e,function(a,b){var c=d.recurse(a);a.input=c;g.push(c);a.watchId=b}));var h=[];n(c.body,function(a){h.push(d.recurse(a.expression))});
e=0===c.body.length?function(){}:1===c.body.length?h[0]:function(a,b){var c;n(h,function(d){c=d(a,b)});return c};f&&(e.assign=function(a,b,c){return f(a,c,b)});g&&(e.inputs=g);e.literal=qd(c);e.constant=c.constant;return e},recurse:function(a,b,d){var c,e,f=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case s.Literal:return this.value(a.value,b);case s.UnaryExpression:return e=this.recurse(a.argument),this["unary"+a.operator](e,b);case s.BinaryExpression:return c=this.recurse(a.left),
e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case s.LogicalExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case s.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);case s.Identifier:return Va(a.name,f.expression),f.identifier(a.name,f.expensiveChecks||Fb(a.name),b,d,f.expression);case s.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(Va(a.property.name,
f.expression),e=a.property.name),a.computed&&(e=this.recurse(a.property)),a.computed?this.computedMember(c,e,b,d,f.expression):this.nonComputedMember(c,e,f.expensiveChecks,b,d,f.expression);case s.CallExpression:return g=[],n(a.arguments,function(a){g.push(f.recurse(a))}),a.filter&&(e=this.$filter(a.callee.name)),a.filter||(e=this.recurse(a.callee,!0)),a.filter?function(a,c,d,f){for(var r=[],n=0;n<g.length;++n)r.push(g[n](a,c,d,f));a=e.apply(u,r,f);return b?{context:u,name:u,value:a}:a}:function(a,
c,d,m){var r=e(a,c,d,m),n;if(null!=r.value){xa(r.context,f.expression);kd(r.value,f.expression);n=[];for(var q=0;q<g.length;++q)n.push(xa(g[q](a,c,d,m),f.expression));n=xa(r.value.apply(r.context,n),f.expression)}return b?{value:n}:n};case s.AssignmentExpression:return c=this.recurse(a.left,!0,1),e=this.recurse(a.right),function(a,d,g,m){var n=c(a,d,g,m);a=e(a,d,g,m);xa(n.value,f.expression);ld(n.context);n.context[n.name]=a;return b?{value:a}:a};case s.ArrayExpression:return g=[],n(a.elements,function(a){g.push(f.recurse(a))}),
function(a,c,d,e){for(var f=[],n=0;n<g.length;++n)f.push(g[n](a,c,d,e));return b?{value:f}:f};case s.ObjectExpression:return g=[],n(a.properties,function(a){g.push({key:a.key.type===s.Identifier?a.key.name:""+a.key.value,value:f.recurse(a.value)})}),function(a,c,d,e){for(var f={},n=0;n<g.length;++n)f[g[n].key]=g[n].value(a,c,d,e);return b?{value:f}:f};case s.ThisExpression:return function(a){return b?{value:a}:a};case s.NGValueParameter:return function(a,c,d,e){return b?{value:d}:d}}},"unary+":function(a,
b){return function(d,c,e,f){d=a(d,c,e,f);d=y(d)?+d:0;return b?{value:d}:d}},"unary-":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=y(d)?-d:0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,e,f){d=!a(d,c,e,f);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=md(h,c);return d?{value:h}:h}},"binary-":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=(y(h)?h:0)-(y(c)?c:0);return d?{value:h}:h}},"binary*":function(a,
b,d){return function(c,e,f,g){c=a(c,e,f,g)*b(c,e,f,g);return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)/b(c,e,f,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)%b(c,e,f,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)===b(c,e,f,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!==b(c,e,f,g);return d?{value:c}:c}},"binary==":function(a,b,
d){return function(c,e,f,g){c=a(c,e,f,g)==b(c,e,f,g);return d?{value:c}:c}},"binary!=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!=b(c,e,f,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<b(c,e,f,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>b(c,e,f,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<=b(c,e,f,g);return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,
e,f,g){c=a(c,e,f,g)>=b(c,e,f,g);return d?{value:c}:c}},"binary&&":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)&&b(c,e,f,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)||b(c,e,f,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(e,f,g,h){e=a(e,f,g,h)?b(e,f,g,h):d(e,f,g,h);return c?{value:e}:e}},value:function(a,b){return function(){return b?{context:u,name:u,value:a}:a}},identifier:function(a,b,d,c,e){return function(f,g,h,k){f=
g&&a in g?g:f;c&&1!==c&&f&&!f[a]&&(f[a]={});g=f?f[a]:u;b&&xa(g,e);return d?{context:f,name:a,value:g}:g}},computedMember:function(a,b,d,c,e){return function(f,g,h,k){var l=a(f,g,h,k),m,n;null!=l&&(m=b(f,g,h,k),m=jd(m),Va(m,e),c&&1!==c&&l&&!l[m]&&(l[m]={}),n=l[m],xa(n,e));return d?{context:l,name:m,value:n}:n}},nonComputedMember:function(a,b,d,c,e,f){return function(g,h,k,l){g=a(g,h,k,l);e&&1!==e&&g&&!g[b]&&(g[b]={});h=null!=g?g[b]:u;(d||Fb(b))&&xa(h,f);return c?{context:g,name:b,value:h}:h}},inputs:function(a,
b){return function(d,c,e,f){return f?f[b]:a(d,c,e)}}};var gc=function(a,b,d){this.lexer=a;this.$filter=b;this.options=d;this.ast=new s(this.lexer);this.astCompiler=d.csp?new sd(this.ast,b):new rd(this.ast,b)};gc.prototype={constructor:gc,parse:function(a){return this.astCompiler.compile(a,this.options.expensiveChecks)}};$();$();var $f=Object.prototype.valueOf,ya=G("$sce"),la={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},ha=G("$compile"),Y=X.createElement("a"),wd=wa(S.location.href);
xd.$inject=["$document"];Jc.$inject=["$provide"];yd.$inject=["$locale"];Ad.$inject=["$locale"];var ic=".",jg={yyyy:ca("FullYear",4),yy:ca("FullYear",2,0,!0),y:ca("FullYear",1),MMMM:Hb("Month"),MMM:Hb("Month",!0),MM:ca("Month",2,1),M:ca("Month",1,1),dd:ca("Date",2),d:ca("Date",1),HH:ca("Hours",2),H:ca("Hours",1),hh:ca("Hours",2,-12),h:ca("Hours",1,-12),mm:ca("Minutes",2),m:ca("Minutes",1),ss:ca("Seconds",2),s:ca("Seconds",1),sss:ca("Milliseconds",3),EEEE:Hb("Day"),EEE:Hb("Day",!0),a:function(a,b){return 12>
a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Gb(Math[0<a?"floor":"ceil"](a/60),2)+Gb(Math.abs(a%60),2))},ww:Ed(2),w:Ed(1),G:jc,GG:jc,GGG:jc,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},ig=/((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,hg=/^\-?\d+$/;zd.$inject=["$locale"];var eg=na(F),fg=na(sb);Bd.$inject=["$parse"];var he=na({restrict:"E",compile:function(a,b){if(!b.href&&!b.xlinkHref)return function(a,
b){if("a"===b[0].nodeName.toLowerCase()){var e="[object SVGAnimatedString]"===sa.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(e)||a.preventDefault()})}}}}),tb={};n(Cb,function(a,b){function d(a,d,e){a.$watch(e[c],function(a){e.$set(b,!!a)})}if("multiple"!=a){var c=va("ng-"+b),e=d;"checked"===a&&(e=function(a,b,e){e.ngModel!==e[c]&&d(a,b,e)});tb[c]=function(){return{restrict:"A",priority:100,link:e}}}});n(Zc,function(a,b){tb[b]=function(){return{priority:100,link:function(a,
c,e){if("ngPattern"===b&&"/"==e.ngPattern.charAt(0)&&(c=e.ngPattern.match(lg))){e.$set("ngPattern",new RegExp(c[1],c[2]));return}a.$watch(e[b],function(a){e.$set(b,a)})}}}});n(["src","srcset","href"],function(a){var b=va("ng-"+a);tb[b]=function(){return{priority:99,link:function(d,c,e){var f=a,g=a;"href"===a&&"[object SVGAnimatedString]"===sa.call(c.prop("href"))&&(g="xlinkHref",e.$attr[g]="xlink:href",f=null);e.$observe(b,function(b){b?(e.$set(g,b),Ha&&f&&c.prop(f,e[g])):"href"===a&&e.$set(g,null)})}}}});
var Ib={$addControl:x,$$renameControl:function(a,b){a.$name=b},$removeControl:x,$setValidity:x,$setDirty:x,$setPristine:x,$setSubmitted:x};Fd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var Nd=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||x}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Fd,compile:function(d,f){d.addClass(Wa).addClass(mb);var g=f.name?"name":a&&f.ngForm?"ngForm":
!1;return{pre:function(a,d,e,f){var n=f[0];if(!("action"in e)){var q=function(b){a.$apply(function(){n.$commitViewValue();n.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",q,!1);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",q,!1)},0,!1)})}(f[1]||n.$$parentForm).$addControl(n);var s=g?c(n.$name):x;g&&(s(a,n),e.$observe(g,function(b){n.$name!==b&&(s(a,u),n.$$parentForm.$$renameControl(n,b),s=c(n.$name),s(a,n))}));d.on("$destroy",function(){n.$$parentForm.$removeControl(n);
s(a,u);M(n,Ib)})}}}}}]},ie=Nd(),ve=Nd(!0),kg=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,tg=/^[A-Za-z][A-Za-z\d.+-]*:\/*(?:\w+(?::\w+)?@)?[^\s/]+(?::\d+)?(?:\/[\w#!:.?+=&%@\-/]*)?$/,ug=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,vg=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,Od=/^(\d{4})-(\d{2})-(\d{2})$/,Pd=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,mc=/^(\d{4})-W(\d\d)$/,Qd=/^(\d{4})-(\d\d)$/,
Rd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Sd={text:function(a,b,d,c,e,f){jb(a,b,d,c,e,f);kc(c)},date:kb("date",Od,Kb(Od,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":kb("datetimelocal",Pd,Kb(Pd,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:kb("time",Rd,Kb(Rd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:kb("week",mc,function(a,b){if(da(a))return a;if(E(a)){mc.lastIndex=0;var d=mc.exec(a);if(d){var c=+d[1],e=+d[2],f=d=0,g=0,h=0,k=Dd(c),e=7*(e-1);b&&(d=b.getHours(),f=
b.getMinutes(),g=b.getSeconds(),h=b.getMilliseconds());return new Date(c,0,k.getDate()+e,d,f,g,h)}}return NaN},"yyyy-Www"),month:kb("month",Qd,Kb(Qd,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,e,f){Hd(a,b,d,c);jb(a,b,d,c,e,f);c.$$parserName="number";c.$parsers.push(function(a){return c.$isEmpty(a)?null:vg.test(a)?parseFloat(a):u});c.$formatters.push(function(a){if(!c.$isEmpty(a)){if(!Q(a))throw lb("numfmt",a);a=a.toString()}return a});if(y(d.min)||d.ngMin){var g;c.$validators.min=function(a){return c.$isEmpty(a)||
q(g)||a>=g};d.$observe("min",function(a){y(a)&&!Q(a)&&(a=parseFloat(a,10));g=Q(a)&&!isNaN(a)?a:u;c.$validate()})}if(y(d.max)||d.ngMax){var h;c.$validators.max=function(a){return c.$isEmpty(a)||q(h)||a<=h};d.$observe("max",function(a){y(a)&&!Q(a)&&(a=parseFloat(a,10));h=Q(a)&&!isNaN(a)?a:u;c.$validate()})}},url:function(a,b,d,c,e,f){jb(a,b,d,c,e,f);kc(c);c.$$parserName="url";c.$validators.url=function(a,b){var d=a||b;return c.$isEmpty(d)||tg.test(d)}},email:function(a,b,d,c,e,f){jb(a,b,d,c,e,f);kc(c);
c.$$parserName="email";c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||ug.test(d)}},radio:function(a,b,d,c){q(d.name)&&b.attr("name",++nb);b.on("click",function(a){b[0].checked&&c.$setViewValue(d.value,a&&a.type)});c.$render=function(){b[0].checked=d.value==c.$viewValue};d.$observe("value",c.$render)},checkbox:function(a,b,d,c,e,f,g,h){var k=Id(h,a,"ngTrueValue",d.ngTrueValue,!0),l=Id(h,a,"ngFalseValue",d.ngFalseValue,!1);b.on("click",function(a){c.$setViewValue(b[0].checked,a&&
a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return ma(a,k)});c.$parsers.push(function(a){return a?k:l})},hidden:x,button:x,submit:x,reset:x,file:x},Dc=["$browser","$sniffer","$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(e,f,g,h){h[0]&&(Sd[F(g.type)]||Sd.text)(e,f,g,h[0],b,a,d,c)}}}}],wg=/^(true|false|\d+)$/,Ne=function(){return{restrict:"A",priority:100,compile:function(a,
b){return wg.test(b.ngValue)?function(a,b,e){e.$set("value",a.$eval(e.ngValue))}:function(a,b,e){a.$watch(e.ngValue,function(a){e.$set("value",a)})}}}},ne=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);return function(b,c,e){a.$$addBindingInfo(c,e.ngBind);c=c[0];b.$watch(e.ngBind,function(a){c.textContent=q(a)?"":a})}}}}],pe=["$interpolate","$compile",function(a,b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,f){c=a(d.attr(f.$attr.ngBindTemplate));
b.$$addBindingInfo(d,c.expressions);d=d[0];f.$observe("ngBindTemplate",function(a){d.textContent=q(a)?"":a})}}}}],oe=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,e){var f=b(e.ngBindHtml),g=b(e.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(c);return function(b,c,e){d.$$addBindingInfo(c,e.ngBindHtml);b.$watch(g,function(){c.html(a.getTrustedHtml(f(b))||"")})}}}}],Me=na({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),
qe=lc("",!0),se=lc("Odd",0),re=lc("Even",1),te=La({compile:function(a,b){b.$set("ngCloak",u);a.removeClass("ng-cloak")}}),ue=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Ic={},xg={blur:!0,focus:!0};n("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var b=va("ng-"+a);Ic[b]=["$parse","$rootScope",function(d,c){return{restrict:"A",compile:function(e,f){var g=
d(f[b],null,!0);return function(b,d){d.on(a,function(d){var e=function(){g(b,{$event:d})};xg[a]&&c.$$phase?b.$evalAsync(e):b.$apply(e)})}}}}]});var xe=["$animate",function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(b,d,c,e,f){var g,h,k;b.$watch(c.ngIf,function(b){b?h||f(function(b,e){h=e;b[b.length++]=X.createComment(" end ngIf: "+c.ngIf+" ");g={clone:b};a.enter(b,d.parent(),d)}):(k&&(k.remove(),k=null),h&&(h.$destroy(),h=null),g&&(k=
rb(g.clone),a.leave(k).then(function(){k=null}),g=null))})}}}],ye=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:fa.noop,compile:function(c,e){var f=e.ngInclude||e.src,g=e.onload||"",h=e.autoscroll;return function(c,e,m,n,q){var s=0,v,u,p,C=function(){u&&(u.remove(),u=null);v&&(v.$destroy(),v=null);p&&(d.leave(p).then(function(){u=null}),u=p,p=null)};c.$watch(f,function(f){var m=function(){!y(h)||h&&!c.$eval(h)||
b()},u=++s;f?(a(f,!0).then(function(a){if(u===s){var b=c.$new();n.template=a;a=q(b,function(a){C();d.enter(a,null,e).then(m)});v=b;p=a;v.$emit("$includeContentLoaded",f);c.$eval(g)}},function(){u===s&&(C(),c.$emit("$includeContentError",f))}),c.$emit("$includeContentRequested",f)):(C(),n.template=null)})}}}}],Pe=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(b,d,c,e){/SVG/.test(d[0].toString())?(d.empty(),a(Lc(e.template,X).childNodes)(b,function(a){d.append(a)},
{futureParentElement:d})):(d.html(e.template),a(d.contents())(b))}}}],ze=La({priority:450,compile:function(){return{pre:function(a,b,d){a.$eval(d.ngInit)}}}}),Le=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var e=b.attr(d.$attr.ngList)||", ",f="false"!==d.ngTrim,g=f?U(e):e;c.$parsers.push(function(a){if(!q(a)){var b=[];a&&n(a.split(g),function(a){a&&b.push(f?U(a):a)});return b}});c.$formatters.push(function(a){return I(a)?a.join(e):u});c.$isEmpty=function(a){return!a||
!a.length}}}},mb="ng-valid",Jd="ng-invalid",Wa="ng-pristine",Jb="ng-dirty",Ld="ng-pending",lb=G("ngModel"),yg=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,b,d,c,e,f,g,h,k,l){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=u;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;
this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=u;this.$name=l(d.name||"",!1)(a);this.$$parentForm=Ib;var m=e(d.ngModel),r=m.assign,t=m,s=r,v=null,B,p=this;this.$$setOptions=function(a){if((p.$options=a)&&a.getterSetter){var b=e(d.ngModel+"()"),f=e(d.ngModel+"($$$p)");t=function(a){var c=m(a);z(c)&&(c=b(a));return c};s=function(a,b){z(m(a))?f(a,{$$$p:p.$modelValue}):r(a,p.$modelValue)}}else if(!m.assign)throw lb("nonassign",d.ngModel,ua(c));};this.$render=x;this.$isEmpty=
function(a){return q(a)||""===a||null===a||a!==a};var C=0;Gd({ctrl:this,$element:c,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]},$animate:f});this.$setPristine=function(){p.$dirty=!1;p.$pristine=!0;f.removeClass(c,Jb);f.addClass(c,Wa)};this.$setDirty=function(){p.$dirty=!0;p.$pristine=!1;f.removeClass(c,Wa);f.addClass(c,Jb);p.$$parentForm.$setDirty()};this.$setUntouched=function(){p.$touched=!1;p.$untouched=!0;f.setClass(c,"ng-untouched","ng-touched")};this.$setTouched=function(){p.$touched=
!0;p.$untouched=!1;f.setClass(c,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){g.cancel(v);p.$viewValue=p.$$lastCommittedViewValue;p.$render()};this.$validate=function(){if(!Q(p.$modelValue)||!isNaN(p.$modelValue)){var a=p.$$rawModelValue,b=p.$valid,c=p.$modelValue,d=p.$options&&p.$options.allowInvalid;p.$$runValidators(a,p.$$lastCommittedViewValue,function(e){d||b===e||(p.$modelValue=e?a:u,p.$modelValue!==c&&p.$$writeModelToScope())})}};this.$$runValidators=function(a,b,c){function d(){var c=
!0;n(p.$validators,function(d,e){var g=d(a,b);c=c&&g;f(e,g)});return c?!0:(n(p.$asyncValidators,function(a,b){f(b,null)}),!1)}function e(){var c=[],d=!0;n(p.$asyncValidators,function(e,g){var h=e(a,b);if(!h||!z(h.then))throw lb("$asyncValidators",h);f(g,u);c.push(h.then(function(){f(g,!0)},function(a){d=!1;f(g,!1)}))});c.length?k.all(c).then(function(){g(d)},x):g(!0)}function f(a,b){h===C&&p.$setValidity(a,b)}function g(a){h===C&&c(a)}C++;var h=C;(function(){var a=p.$$parserName||"parse";if(q(B))f(a,
null);else return B||(n(p.$validators,function(a,b){f(b,null)}),n(p.$asyncValidators,function(a,b){f(b,null)})),f(a,B),B;return!0})()?d()?e():g(!1):g(!1)};this.$commitViewValue=function(){var a=p.$viewValue;g.cancel(v);if(p.$$lastCommittedViewValue!==a||""===a&&p.$$hasNativeValidators)p.$$lastCommittedViewValue=a,p.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var b=p.$$lastCommittedViewValue;if(B=q(b)?u:!0)for(var c=0;c<p.$parsers.length;c++)if(b=p.$parsers[c](b),
q(b)){B=!1;break}Q(p.$modelValue)&&isNaN(p.$modelValue)&&(p.$modelValue=t(a));var d=p.$modelValue,e=p.$options&&p.$options.allowInvalid;p.$$rawModelValue=b;e&&(p.$modelValue=b,p.$modelValue!==d&&p.$$writeModelToScope());p.$$runValidators(b,p.$$lastCommittedViewValue,function(a){e||(p.$modelValue=a?b:u,p.$modelValue!==d&&p.$$writeModelToScope())})};this.$$writeModelToScope=function(){s(a,p.$modelValue);n(p.$viewChangeListeners,function(a){try{a()}catch(c){b(c)}})};this.$setViewValue=function(a,b){p.$viewValue=
a;p.$options&&!p.$options.updateOnDefault||p.$$debounceViewValueCommit(b)};this.$$debounceViewValueCommit=function(b){var c=0,d=p.$options;d&&y(d.debounce)&&(d=d.debounce,Q(d)?c=d:Q(d[b])?c=d[b]:Q(d["default"])&&(c=d["default"]));g.cancel(v);c?v=g(function(){p.$commitViewValue()},c):h.$$phase?p.$commitViewValue():a.$apply(function(){p.$commitViewValue()})};a.$watch(function(){var b=t(a);if(b!==p.$modelValue&&(p.$modelValue===p.$modelValue||b===b)){p.$modelValue=p.$$rawModelValue=b;B=u;for(var c=p.$formatters,
d=c.length,e=b;d--;)e=c[d](e);p.$viewValue!==e&&(p.$viewValue=p.$$lastCommittedViewValue=e,p.$render(),p.$$runValidators(b,e,x))}return b})}],Ke=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:yg,priority:1,compile:function(b){b.addClass(Wa).addClass("ng-untouched").addClass(mb);return{pre:function(a,b,e,f){var g=f[0];b=f[1]||g.$$parentForm;g.$$setOptions(f[2]&&f[2].$options);b.$addControl(g);e.$observe("name",function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,
a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,c,e,f){var g=f[0];if(g.$options&&g.$options.updateOn)c.on(g.$options.updateOn,function(a){g.$$debounceViewValueCommit(a&&a.type)});c.on("blur",function(c){g.$touched||(a.$$phase?b.$evalAsync(g.$setTouched):b.$apply(g.$setTouched))})}}}}}],zg=/(\s+|^)default(\s+|$)/,Oe=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,b){var d=this;this.$options=bb(a.$eval(b.ngModelOptions));y(this.$options.updateOn)?
(this.$options.updateOnDefault=!1,this.$options.updateOn=U(this.$options.updateOn.replace(zg,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},Ae=La({terminal:!0,priority:1E3}),Ag=G("ngOptions"),Bg=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,Ie=["$compile","$parse",function(a,
b){function d(a,c,d){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=b;this.label=c;this.group=d;this.disabled=f}function l(a){var b;if(!q&&za(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&"$"!==c.charAt(0)&&b.push(c)}return b}var m=a.match(Bg);if(!m)throw Ag("iexp",a,ua(c));var n=m[5]||m[7],q=m[6];a=/ as /.test(m[0])&&m[1];var s=m[9];c=b(m[2]?m[1]:n);var v=a&&b(a)||c,u=s&&b(s),p=s?function(a,b){return u(d,b)}:function(a){return Ca(a)},C=function(a,b){return p(a,z(a,b))},w=b(m[2]||
m[1]),y=b(m[3]||""),B=b(m[4]||""),x=b(m[8]),D={},z=q?function(a,b){D[q]=b;D[n]=a;return D}:function(a){D[n]=a;return D};return{trackBy:s,getTrackByValue:C,getWatchables:b(x,function(a){var b=[];a=a||[];for(var c=l(a),e=c.length,f=0;f<e;f++){var g=a===c?f:c[f],k=z(a[g],g),g=p(a[g],k);b.push(g);if(m[2]||m[1])g=w(d,k),b.push(g);m[4]&&(k=B(d,k),b.push(k))}return b}),getOptions:function(){for(var a=[],b={},c=x(d)||[],f=l(c),g=f.length,m=0;m<g;m++){var n=c===f?m:f[m],r=z(c[n],n),q=v(d,r),n=p(q,r),t=w(d,
r),u=y(d,r),r=B(d,r),q=new e(n,q,t,u,r);a.push(q);b[n]=q}return{items:a,selectValueMap:b,getOptionFromViewValue:function(a){return b[C(a)]},getViewValueFromOption:function(a){return s?fa.copy(a.viewValue):a.viewValue}}}}}var c=X.createElement("option"),e=X.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","?ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=x},post:function(b,g,h,k){function l(a,b){a.element=b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,
b.textContent=a.label);a.value!==b.value&&(b.value=a.selectValue)}function m(a,b,c,d){b&&F(b.nodeName)===c?c=b:(c=d.cloneNode(!1),b?a.insertBefore(c,b):a.appendChild(c));return c}function r(a){for(var b;a;)b=a.nextSibling,Xb(a),a=b}function q(a){var b=p&&p[0],c=z&&z[0];if(b||c)for(;a&&(a===b||a===c||8===a.nodeType||""===a.value);)a=a.nextSibling;return a}function s(){var a=D&&u.readValue();D=E.getOptions();var b={},d=g[0].firstChild;x&&g.prepend(p);d=q(d);D.items.forEach(function(a){var f,h;a.group?
(f=b[a.group],f||(f=m(g[0],d,"optgroup",e),d=f.nextSibling,f.label=a.group,f=b[a.group]={groupElement:f,currentOptionElement:f.firstChild}),h=m(f.groupElement,f.currentOptionElement,"option",c),l(a,h),f.currentOptionElement=h.nextSibling):(h=m(g[0],d,"option",c),l(a,h),d=h.nextSibling)});Object.keys(b).forEach(function(a){r(b[a].currentOptionElement)});r(d);v.$render();if(!v.$isEmpty(a)){var f=u.readValue();(E.trackBy?ma(a,f):a===f)||(v.$setViewValue(f),v.$render())}}var v=k[1];if(v){var u=k[0];k=
h.multiple;for(var p,C=0,w=g.children(),y=w.length;C<y;C++)if(""===w[C].value){p=w.eq(C);break}var x=!!p,z=B(c.cloneNode(!1));z.val("?");var D,E=d(h.ngOptions,g,b);k?(v.$isEmpty=function(a){return!a||0===a.length},u.writeValue=function(a){D.items.forEach(function(a){a.element.selected=!1});a&&a.forEach(function(a){(a=D.getOptionFromViewValue(a))&&!a.disabled&&(a.element.selected=!0)})},u.readValue=function(){var a=g.val()||[],b=[];n(a,function(a){(a=D.selectValueMap[a])&&!a.disabled&&b.push(D.getViewValueFromOption(a))});
return b},E.trackBy&&b.$watchCollection(function(){if(I(v.$viewValue))return v.$viewValue.map(function(a){return E.getTrackByValue(a)})},function(){v.$render()})):(u.writeValue=function(a){var b=D.getOptionFromViewValue(a);b&&!b.disabled?g[0].value!==b.selectValue&&(z.remove(),x||p.remove(),g[0].value=b.selectValue,b.element.selected=!0,b.element.setAttribute("selected","selected")):null===a||x?(z.remove(),x||g.prepend(p),g.val(""),p.prop("selected",!0),p.attr("selected",!0)):(x||p.remove(),g.prepend(z),
g.val("?"),z.prop("selected",!0),z.attr("selected",!0))},u.readValue=function(){var a=D.selectValueMap[g.val()];return a&&!a.disabled?(x||p.remove(),z.remove(),D.getViewValueFromOption(a)):null},E.trackBy&&b.$watch(function(){return E.getTrackByValue(v.$viewValue)},function(){v.$render()}));x?(p.remove(),a(p)(b),p.removeClass("ng-scope")):p=B(c.cloneNode(!1));s();b.$watchCollection(E.getWatchables,s)}}}}}],Be=["$locale","$interpolate","$log",function(a,b,d){var c=/{}/g,e=/^when(Minus)?(.+)$/;return{link:function(f,
g,h){function k(a){g.text(a||"")}var l=h.count,m=h.$attr.when&&g.attr(h.$attr.when),r=h.offset||0,s=f.$eval(m)||{},u={},v=b.startSymbol(),y=b.endSymbol(),p=v+l+"-"+r+y,C=fa.noop,w;n(h,function(a,b){var c=e.exec(b);c&&(c=(c[1]?"-":"")+F(c[2]),s[c]=g.attr(h.$attr[b]))});n(s,function(a,d){u[d]=b(a.replace(c,p))});f.$watch(l,function(b){var c=parseFloat(b),e=isNaN(c);e||c in s||(c=a.pluralCat(c-r));c===w||e&&Q(w)&&isNaN(w)||(C(),e=u[c],q(e)?(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+
m),C=x,k()):C=f.$watch(e,k),w=c)})}}}],Ce=["$parse","$animate",function(a,b){var d=G("ngRepeat"),c=function(a,b,c,d,k,l,m){a[c]=d;k&&(a[k]=l);a.$index=b;a.$first=0===b;a.$last=b===m-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(b&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(e,f){var g=f.ngRepeat,h=X.createComment(" end ngRepeat: "+g+" "),k=g.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
if(!k)throw d("iexp",g);var l=k[1],m=k[2],r=k[3],q=k[4],k=l.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!k)throw d("iidexp",l);var s=k[3]||k[1],v=k[2];if(r&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(r)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(r)))throw d("badident",r);var x,p,y,w,z={$id:Ca};q?x=a(q):(y=function(a,b){return Ca(b)},w=function(a){return a});return function(a,e,f,k,l){x&&(p=function(b,c,d){v&&(z[v]=b);z[s]=c;z.$index=
d;return x(a,z)});var q=$();a.$watchCollection(m,function(f){var k,m,t=e[0],x,z=$(),D,E,H,F,I,G,J;r&&(a[r]=f);if(za(f))I=f,m=p||y;else for(J in m=p||w,I=[],f)qa.call(f,J)&&"$"!==J.charAt(0)&&I.push(J);D=I.length;J=Array(D);for(k=0;k<D;k++)if(E=f===I?k:I[k],H=f[E],F=m(E,H,k),q[F])G=q[F],delete q[F],z[F]=G,J[k]=G;else{if(z[F])throw n(J,function(a){a&&a.scope&&(q[a.id]=a)}),d("dupes",g,F,H);J[k]={id:F,scope:u,clone:u};z[F]=!0}for(x in q){G=q[x];F=rb(G.clone);b.leave(F);if(F[0].parentNode)for(k=0,m=F.length;k<
m;k++)F[k].$$NG_REMOVED=!0;G.scope.$destroy()}for(k=0;k<D;k++)if(E=f===I?k:I[k],H=f[E],G=J[k],G.scope){x=t;do x=x.nextSibling;while(x&&x.$$NG_REMOVED);G.clone[0]!=x&&b.move(rb(G.clone),null,B(t));t=G.clone[G.clone.length-1];c(G.scope,k,s,H,v,E,D)}else l(function(a,d){G.scope=d;var e=h.cloneNode(!1);a[a.length++]=e;b.enter(a,null,B(t));t=e;G.clone=a;z[G.id]=G;c(G.scope,k,s,H,v,E,D)});q=z})}}}}],De=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,function(b){a[b?
"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],we=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Ee=La(function(a,b,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&n(d,function(a,c){b.css(c,"")});a&&b.css(a)},!0)}),Fe=["$animate",function(a){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(b,
d,c,e){var f=[],g=[],h=[],k=[],l=function(a,b){return function(){a.splice(b,1)}};b.$watch(c.ngSwitch||c.on,function(b){var c,d;c=0;for(d=h.length;c<d;++c)a.cancel(h[c]);c=h.length=0;for(d=k.length;c<d;++c){var q=rb(g[c].clone);k[c].$destroy();(h[c]=a.leave(q)).then(l(h,c))}g.length=0;k.length=0;(f=e.cases["!"+b]||e.cases["?"])&&n(f,function(b){b.transclude(function(c,d){k.push(d);var e=b.element;c[c.length++]=X.createComment(" end ngSwitchWhen: ");g.push({clone:c});a.enter(c,e.parent(),e)})})})}}}],
Ge=La({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["!"+d.ngSwitchWhen]=c.cases["!"+d.ngSwitchWhen]||[];c.cases["!"+d.ngSwitchWhen].push({transclude:e,element:b})}}),He=La({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:e,element:b})}}),Je=La({restrict:"EAC",link:function(a,b,d,c,e){if(!e)throw G("ngTransclude")("orphan",ua(b));e(function(a){b.empty();
b.append(a)})}}),je=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,d){"text/ng-template"==d.type&&a.put(d.id,b[0].text)}}}],Cg={$setViewValue:x,$render:x},Dg=["$element","$scope","$attrs",function(a,b,d){var c=this,e=new Sa;c.ngModelCtrl=Cg;c.unknownOption=B(X.createElement("option"));c.renderUnknownOption=function(b){b="? "+Ca(b)+" ?";c.unknownOption.val(b);a.prepend(c.unknownOption);a.val(b)};b.$on("$destroy",function(){c.renderUnknownOption=x});c.removeUnknownOption=
function(){c.unknownOption.parent()&&c.unknownOption.remove()};c.readValue=function(){c.removeUnknownOption();return a.val()};c.writeValue=function(b){c.hasOption(b)?(c.removeUnknownOption(),a.val(b),""===b&&c.emptyOption.prop("selected",!0)):null==b&&c.emptyOption?(c.removeUnknownOption(),a.val("")):c.renderUnknownOption(b)};c.addOption=function(a,b){Ra(a,'"option value"');""===a&&(c.emptyOption=b);var d=e.get(a)||0;e.put(a,d+1);c.ngModelCtrl.$render();b[0].hasAttribute("selected")&&(b[0].selected=
!0)};c.removeOption=function(a){var b=e.get(a);b&&(1===b?(e.remove(a),""===a&&(c.emptyOption=u)):e.put(a,b-1))};c.hasOption=function(a){return!!e.get(a)};c.registerOption=function(a,b,d,e,l){if(e){var m;d.$observe("value",function(a){y(m)&&c.removeOption(m);m=a;c.addOption(a,b)})}else l?a.$watch(l,function(a,e){d.$set("value",a);e!==a&&c.removeOption(e);c.addOption(a,b)}):c.addOption(d.value,b);b.on("$destroy",function(){c.removeOption(d.value);c.ngModelCtrl.$render()})}}],ke=function(){return{restrict:"E",
require:["select","?ngModel"],controller:Dg,priority:1,link:{pre:function(a,b,d,c){var e=c[1];if(e){var f=c[0];f.ngModelCtrl=e;e.$render=function(){f.writeValue(e.$viewValue)};b.on("change",function(){a.$apply(function(){e.$setViewValue(f.readValue())})});if(d.multiple){f.readValue=function(){var a=[];n(b.find("option"),function(b){b.selected&&a.push(b.value)});return a};f.writeValue=function(a){var c=new Sa(a);n(b.find("option"),function(a){a.selected=y(c.get(a.value))})};var g,h=NaN;a.$watch(function(){h!==
e.$viewValue||ma(g,e.$viewValue)||(g=ia(e.$viewValue),e.$render());h=e.$viewValue});e.$isEmpty=function(a){return!a||0===a.length}}}}}}},me=["$interpolate",function(a){return{restrict:"E",priority:100,compile:function(b,d){if(y(d.value))var c=a(d.value,!0);else{var e=a(b.text(),!0);e||d.$set("value",b.text())}return function(a,b,d){var k=b.parent();(k=k.data("$selectController")||k.parent().data("$selectController"))&&k.registerOption(a,b,d,c,e)}}}}],le=na({restrict:"E",terminal:!1}),Fc=function(){return{restrict:"A",
require:"?ngModel",link:function(a,b,d,c){c&&(d.required=!0,c.$validators.required=function(a,b){return!d.required||!c.$isEmpty(b)},d.$observe("required",function(){c.$validate()}))}}},Ec=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e,f=d.ngPattern||d.pattern;d.$observe("pattern",function(a){E(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw G("ngPattern")("noregexp",f,a,ua(b));e=a||u;c.$validate()});c.$validators.pattern=function(a,b){return c.$isEmpty(b)||
q(e)||e.test(b)}}}}},Hc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=-1;d.$observe("maxlength",function(a){a=ea(a);e=isNaN(a)?-1:a;c.$validate()});c.$validators.maxlength=function(a,b){return 0>e||c.$isEmpty(b)||b.length<=e}}}}},Gc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=0;d.$observe("minlength",function(a){e=ea(a)||0;c.$validate()});c.$validators.minlength=function(a,b){return c.$isEmpty(b)||b.length>=e}}}}};S.angular.bootstrap?
console.log("WARNING: Tried to load angular more than once."):(ce(),ee(fa),fa.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),
SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",
negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",pluralCat:function(a,c){var e=a|0,f=c;u===f&&(f=Math.min(b(a),3));Math.pow(10,f);return 1==e&&0==f?"one":"other"}})}]),B(X).ready(function(){Zd(X,yc)}))})(window,document);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

/*! markdown-it 7.0.0 https://github.com//markdown-it/markdown-it @license MIT */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r;r="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,r.markdownit=e()}}(function(){var e;return function r(e,t,n){function s(i,a){if(!t[i]){if(!e[i]){var c="function"==typeof require&&require;if(!a&&c)return c(i,!0);if(o)return o(i,!0);var l=new Error("Cannot find module '"+i+"'");throw l.code="MODULE_NOT_FOUND",l}var u=t[i]={exports:{}};e[i][0].call(u.exports,function(r){var t=e[i][1][r];return s(t?t:r)},u,u.exports,r,e,t,n)}return t[i].exports}for(var o="function"==typeof require&&require,i=0;i<n.length;i++)s(n[i]);return s}({1:[function(e,r,t){"use strict";r.exports=e("entities/maps/entities.json")},{"entities/maps/entities.json":53}],2:[function(e,r,t){"use strict";r.exports=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","meta","nav","noframes","ol","optgroup","option","p","param","pre","section","source","title","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"]},{}],3:[function(e,r,t){"use strict";var n="[a-zA-Z_:][a-zA-Z0-9:._-]*",s="[^\"'=<>`\\x00-\\x20]+",o="'[^']*'",i='"[^"]*"',a="(?:"+s+"|"+o+"|"+i+")",c="(?:\\s+"+n+"(?:\\s*=\\s*"+a+")?)",l="<[A-Za-z][A-Za-z0-9\\-]*"+c+"*\\s*\\/?>",u="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",p="<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->",h="<[?].*?[?]>",f="<![A-Z]+\\s+[^>]*>",d="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",m=new RegExp("^(?:"+l+"|"+u+"|"+p+"|"+h+"|"+f+"|"+d+")"),_=new RegExp("^(?:"+l+"|"+u+")");r.exports.HTML_TAG_RE=m,r.exports.HTML_OPEN_CLOSE_TAG_RE=_},{}],4:[function(e,r,t){"use strict";function n(e){return Object.prototype.toString.call(e)}function s(e){return"[object String]"===n(e)}function o(e,r){return x.call(e,r)}function i(e){var r=Array.prototype.slice.call(arguments,1);return r.forEach(function(r){if(r){if("object"!=typeof r)throw new TypeError(r+"must be object");Object.keys(r).forEach(function(t){e[t]=r[t]})}}),e}function a(e,r,t){return[].concat(e.slice(0,r),t,e.slice(r+1))}function c(e){return!(e>=55296&&e<=57343)&&(!(e>=64976&&e<=65007)&&(65535!==(65535&e)&&65534!==(65535&e)&&(!(e>=0&&e<=8)&&(11!==e&&(!(e>=14&&e<=31)&&(!(e>=127&&e<=159)&&!(e>1114111)))))))}function l(e){if(e>65535){e-=65536;var r=55296+(e>>10),t=56320+(1023&e);return String.fromCharCode(r,t)}return String.fromCharCode(e)}function u(e,r){var t=0;return o(D,r)?D[r]:35===r.charCodeAt(0)&&w.test(r)&&(t="x"===r[1].toLowerCase()?parseInt(r.slice(2),16):parseInt(r.slice(1),10),c(t))?l(t):e}function p(e){return e.indexOf("\\")<0?e:e.replace(y,"$1")}function h(e){return e.indexOf("\\")<0&&e.indexOf("&")<0?e:e.replace(A,function(e,r,t){return r?r:u(e,t)})}function f(e){return S[e]}function d(e){return q.test(e)?e.replace(E,f):e}function m(e){return e.replace(F,"\\$&")}function _(e){switch(e){case 9:case 32:return!0}return!1}function g(e){if(e>=8192&&e<=8202)return!0;switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function k(e){return z.test(e)}function b(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function v(e){return e.trim().replace(/\s+/g," ").toUpperCase()}var x=Object.prototype.hasOwnProperty,y=/\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g,C=/&([a-z#][a-z0-9]{1,31});/gi,A=new RegExp(y.source+"|"+C.source,"gi"),w=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i,D=e("./entities"),q=/[&<>"]/,E=/[&<>"]/g,S={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"},F=/[.?*+^$[\]\\(){}|-]/g,z=e("uc.micro/categories/P/regex");t.lib={},t.lib.mdurl=e("mdurl"),t.lib.ucmicro=e("uc.micro"),t.assign=i,t.isString=s,t.has=o,t.unescapeMd=p,t.unescapeAll=h,t.isValidEntityCode=c,t.fromCodePoint=l,t.escapeHtml=d,t.arrayReplaceAt=a,t.isSpace=_,t.isWhiteSpace=g,t.isMdAsciiPunct=b,t.isPunctChar=k,t.escapeRE=m,t.normalizeReference=v},{"./entities":1,mdurl:59,"uc.micro":65,"uc.micro/categories/P/regex":63}],5:[function(e,r,t){"use strict";t.parseLinkLabel=e("./parse_link_label"),t.parseLinkDestination=e("./parse_link_destination"),t.parseLinkTitle=e("./parse_link_title")},{"./parse_link_destination":6,"./parse_link_label":7,"./parse_link_title":8}],6:[function(e,r,t){"use strict";var n=e("../common/utils").isSpace,s=e("../common/utils").unescapeAll;r.exports=function(e,r,t){var o,i,a=0,c=r,l={ok:!1,pos:0,lines:0,str:""};if(60===e.charCodeAt(r)){for(r++;r<t;){if(o=e.charCodeAt(r),10===o||n(o))return l;if(62===o)return l.pos=r+1,l.str=s(e.slice(c+1,r)),l.ok=!0,l;92===o&&r+1<t?r+=2:r++}return l}for(i=0;r<t&&(o=e.charCodeAt(r),32!==o)&&!(o<32||127===o);)if(92===o&&r+1<t)r+=2;else{if(40===o&&(i++,i>1))break;if(41===o&&(i--,i<0))break;r++}return c===r?l:(l.str=s(e.slice(c,r)),l.lines=a,l.pos=r,l.ok=!0,l)}},{"../common/utils":4}],7:[function(e,r,t){"use strict";r.exports=function(e,r,t){var n,s,o,i,a=-1,c=e.posMax,l=e.pos;for(e.pos=r+1,n=1;e.pos<c;){if(o=e.src.charCodeAt(e.pos),93===o&&(n--,0===n)){s=!0;break}if(i=e.pos,e.md.inline.skipToken(e),91===o)if(i===e.pos-1)n++;else if(t)return e.pos=l,-1}return s&&(a=e.pos),e.pos=l,a}},{}],8:[function(e,r,t){"use strict";var n=e("../common/utils").unescapeAll;r.exports=function(e,r,t){var s,o,i=0,a=r,c={ok:!1,pos:0,lines:0,str:""};if(r>=t)return c;if(o=e.charCodeAt(r),34!==o&&39!==o&&40!==o)return c;for(r++,40===o&&(o=41);r<t;){if(s=e.charCodeAt(r),s===o)return c.pos=r+1,c.lines=i,c.str=n(e.slice(a+1,r)),c.ok=!0,c;10===s?i++:92===s&&r+1<t&&(r++,10===e.charCodeAt(r)&&i++),r++}return c}},{"../common/utils":4}],9:[function(e,r,t){"use strict";function n(e){var r=e.trim().toLowerCase();return!g.test(r)||!!k.test(r)}function s(e){var r=d.parse(e,!0);if(r.hostname&&(!r.protocol||b.indexOf(r.protocol)>=0))try{r.hostname=m.toASCII(r.hostname)}catch(t){}return d.encode(d.format(r))}function o(e){var r=d.parse(e,!0);if(r.hostname&&(!r.protocol||b.indexOf(r.protocol)>=0))try{r.hostname=m.toUnicode(r.hostname)}catch(t){}return d.decode(d.format(r))}function i(e,r){return this instanceof i?(r||a.isString(e)||(r=e||{},e="default"),this.inline=new h,this.block=new p,this.core=new u,this.renderer=new l,this.linkify=new f,this.validateLink=n,this.normalizeLink=s,this.normalizeLinkText=o,this.utils=a,this.helpers=c,this.options={},this.configure(e),void(r&&this.set(r))):new i(e,r)}var a=e("./common/utils"),c=e("./helpers"),l=e("./renderer"),u=e("./parser_core"),p=e("./parser_block"),h=e("./parser_inline"),f=e("linkify-it"),d=e("mdurl"),m=e("punycode"),_={"default":e("./presets/default"),zero:e("./presets/zero"),commonmark:e("./presets/commonmark")},g=/^(vbscript|javascript|file|data):/,k=/^data:image\/(gif|png|jpeg|webp);/,b=["http:","https:","mailto:"];i.prototype.set=function(e){return a.assign(this.options,e),this},i.prototype.configure=function(e){var r,t=this;if(a.isString(e)&&(r=e,e=_[r],!e))throw new Error('Wrong `markdown-it` preset "'+r+'", check name');if(!e)throw new Error("Wrong `markdown-it` preset, can't be empty");return e.options&&t.set(e.options),e.components&&Object.keys(e.components).forEach(function(r){e.components[r].rules&&t[r].ruler.enableOnly(e.components[r].rules),e.components[r].rules2&&t[r].ruler2.enableOnly(e.components[r].rules2)}),this},i.prototype.enable=function(e,r){var t=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(r){t=t.concat(this[r].ruler.enable(e,!0))},this),t=t.concat(this.inline.ruler2.enable(e,!0));var n=e.filter(function(e){return t.indexOf(e)<0});if(n.length&&!r)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+n);return this},i.prototype.disable=function(e,r){var t=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(r){t=t.concat(this[r].ruler.disable(e,!0))},this),t=t.concat(this.inline.ruler2.disable(e,!0));var n=e.filter(function(e){return t.indexOf(e)<0});if(n.length&&!r)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+n);return this},i.prototype.use=function(e){var r=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,r),this},i.prototype.parse=function(e,r){var t=new this.core.State(e,this,r);return this.core.process(t),t.tokens},i.prototype.render=function(e,r){return r=r||{},this.renderer.render(this.parse(e,r),this.options,r)},i.prototype.parseInline=function(e,r){var t=new this.core.State(e,this,r);return t.inlineMode=!0,this.core.process(t),t.tokens},i.prototype.renderInline=function(e,r){return r=r||{},this.renderer.render(this.parseInline(e,r),this.options,r)},r.exports=i},{"./common/utils":4,"./helpers":5,"./parser_block":10,"./parser_core":11,"./parser_inline":12,"./presets/commonmark":13,"./presets/default":14,"./presets/zero":15,"./renderer":16,"linkify-it":54,mdurl:59,punycode:52}],10:[function(e,r,t){"use strict";function n(){this.ruler=new s;for(var e=0;e<o.length;e++)this.ruler.push(o[e][0],o[e][1],{alt:(o[e][2]||[]).slice()})}var s=e("./ruler"),o=[["table",e("./rules_block/table"),["paragraph","reference"]],["code",e("./rules_block/code")],["fence",e("./rules_block/fence"),["paragraph","reference","blockquote","list"]],["blockquote",e("./rules_block/blockquote"),["paragraph","reference","list"]],["hr",e("./rules_block/hr"),["paragraph","reference","blockquote","list"]],["list",e("./rules_block/list"),["paragraph","reference","blockquote"]],["reference",e("./rules_block/reference")],["heading",e("./rules_block/heading"),["paragraph","reference","blockquote"]],["lheading",e("./rules_block/lheading")],["html_block",e("./rules_block/html_block"),["paragraph","reference","blockquote"]],["paragraph",e("./rules_block/paragraph")]];n.prototype.tokenize=function(e,r,t){for(var n,s,o=this.ruler.getRules(""),i=o.length,a=r,c=!1,l=e.md.options.maxNesting;a<t&&(e.line=a=e.skipEmptyLines(a),!(a>=t))&&!(e.sCount[a]<e.blkIndent);){if(e.level>=l){e.line=t;break}for(s=0;s<i&&!(n=o[s](e,a,t,!1));s++);if(e.tight=!c,e.isEmpty(e.line-1)&&(c=!0),a=e.line,a<t&&e.isEmpty(a)){if(c=!0,a++,a<t&&"list"===e.parentType&&e.isEmpty(a))break;e.line=a}}},n.prototype.parse=function(e,r,t,n){var s;e&&(s=new this.State(e,r,t,n),this.tokenize(s,s.line,s.lineMax))},n.prototype.State=e("./rules_block/state_block"),r.exports=n},{"./ruler":17,"./rules_block/blockquote":18,"./rules_block/code":19,"./rules_block/fence":20,"./rules_block/heading":21,"./rules_block/hr":22,"./rules_block/html_block":23,"./rules_block/lheading":24,"./rules_block/list":25,"./rules_block/paragraph":26,"./rules_block/reference":27,"./rules_block/state_block":28,"./rules_block/table":29}],11:[function(e,r,t){"use strict";function n(){this.ruler=new s;for(var e=0;e<o.length;e++)this.ruler.push(o[e][0],o[e][1])}var s=e("./ruler"),o=[["normalize",e("./rules_core/normalize")],["block",e("./rules_core/block")],["inline",e("./rules_core/inline")],["linkify",e("./rules_core/linkify")],["replacements",e("./rules_core/replacements")],["smartquotes",e("./rules_core/smartquotes")]];n.prototype.process=function(e){var r,t,n;for(n=this.ruler.getRules(""),r=0,t=n.length;r<t;r++)n[r](e)},n.prototype.State=e("./rules_core/state_core"),r.exports=n},{"./ruler":17,"./rules_core/block":30,"./rules_core/inline":31,"./rules_core/linkify":32,"./rules_core/normalize":33,"./rules_core/replacements":34,"./rules_core/smartquotes":35,"./rules_core/state_core":36}],12:[function(e,r,t){"use strict";function n(){var e;for(this.ruler=new s,e=0;e<o.length;e++)this.ruler.push(o[e][0],o[e][1]);for(this.ruler2=new s,e=0;e<i.length;e++)this.ruler2.push(i[e][0],i[e][1])}var s=e("./ruler"),o=[["text",e("./rules_inline/text")],["newline",e("./rules_inline/newline")],["escape",e("./rules_inline/escape")],["backticks",e("./rules_inline/backticks")],["strikethrough",e("./rules_inline/strikethrough").tokenize],["emphasis",e("./rules_inline/emphasis").tokenize],["link",e("./rules_inline/link")],["image",e("./rules_inline/image")],["autolink",e("./rules_inline/autolink")],["html_inline",e("./rules_inline/html_inline")],["entity",e("./rules_inline/entity")]],i=[["balance_pairs",e("./rules_inline/balance_pairs")],["strikethrough",e("./rules_inline/strikethrough").postProcess],["emphasis",e("./rules_inline/emphasis").postProcess],["text_collapse",e("./rules_inline/text_collapse")]];n.prototype.skipToken=function(e){var r,t,n=e.pos,s=this.ruler.getRules(""),o=s.length,i=e.md.options.maxNesting,a=e.cache;if("undefined"!=typeof a[n])return void(e.pos=a[n]);if(e.level<i)for(t=0;t<o&&(e.level++,r=s[t](e,!0),e.level--,!r);t++);else e.pos=e.posMax;r||e.pos++,a[n]=e.pos},n.prototype.tokenize=function(e){for(var r,t,n=this.ruler.getRules(""),s=n.length,o=e.posMax,i=e.md.options.maxNesting;e.pos<o;){if(e.level<i)for(t=0;t<s&&!(r=n[t](e,!1));t++);if(r){if(e.pos>=o)break}else e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()},n.prototype.parse=function(e,r,t,n){var s,o,i,a=new this.State(e,r,t,n);for(this.tokenize(a),o=this.ruler2.getRules(""),i=o.length,s=0;s<i;s++)o[s](a)},n.prototype.State=e("./rules_inline/state_inline"),r.exports=n},{"./ruler":17,"./rules_inline/autolink":37,"./rules_inline/backticks":38,"./rules_inline/balance_pairs":39,"./rules_inline/emphasis":40,"./rules_inline/entity":41,"./rules_inline/escape":42,"./rules_inline/html_inline":43,"./rules_inline/image":44,"./rules_inline/link":45,"./rules_inline/newline":46,"./rules_inline/state_inline":47,"./rules_inline/strikethrough":48,"./rules_inline/text":49,"./rules_inline/text_collapse":50}],13:[function(e,r,t){"use strict";r.exports={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"\u201c\u201d\u2018\u2019",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","text_collapse"]}}}},{}],14:[function(e,r,t){"use strict";r.exports={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"\u201c\u201d\u2018\u2019",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}}},{}],15:[function(e,r,t){"use strict";r.exports={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"\u201c\u201d\u2018\u2019",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","text_collapse"]}}}},{}],16:[function(e,r,t){"use strict";function n(){this.rules=s({},a)}var s=e("./common/utils").assign,o=e("./common/utils").unescapeAll,i=e("./common/utils").escapeHtml,a={};a.code_inline=function(e,r,t,n,s){var o=e[r],a=s.renderAttrs(o);return"<code"+(a?" "+a:"")+">"+i(e[r].content)+"</code>"},a.code_block=function(e,r,t,n,s){var o=e[r],a=s.renderAttrs(o);return"<pre"+(a?" "+a:"")+"><code>"+i(e[r].content)+"</code></pre>\n"},a.fence=function(e,r,t,n,s){var a,c,l,u,p=e[r],h=p.info?o(p.info).trim():"",f="";return h&&(f=h.split(/\s+/g)[0]),a=t.highlight?t.highlight(p.content,f)||i(p.content):i(p.content),0===a.indexOf("<pre")?a+"\n":h?(c=p.attrIndex("class"),l=p.attrs?p.attrs.slice():[],c<0?l.push(["class",t.langPrefix+f]):l[c]+=" "+t.langPrefix+f,u={attrs:l},"<pre><code"+s.renderAttrs(u)+">"+a+"</code></pre>\n"):"<pre><code"+s.renderAttrs(p)+">"+a+"</code></pre>\n"},a.image=function(e,r,t,n,s){var o=e[r];return o.attrs[o.attrIndex("alt")][1]=s.renderInlineAsText(o.children,t,n),s.renderToken(e,r,t)},a.hardbreak=function(e,r,t){return t.xhtmlOut?"<br />\n":"<br>\n"},a.softbreak=function(e,r,t){return t.breaks?t.xhtmlOut?"<br />\n":"<br>\n":"\n"},a.text=function(e,r){return i(e[r].content)},a.html_block=function(e,r){return e[r].content},a.html_inline=function(e,r){return e[r].content},n.prototype.renderAttrs=function(e){var r,t,n;if(!e.attrs)return"";for(n="",r=0,t=e.attrs.length;r<t;r++)n+=" "+i(e.attrs[r][0])+'="'+i(e.attrs[r][1])+'"';return n},n.prototype.renderToken=function(e,r,t){var n,s="",o=!1,i=e[r];return i.hidden?"":(i.block&&i.nesting!==-1&&r&&e[r-1].hidden&&(s+="\n"),s+=(i.nesting===-1?"</":"<")+i.tag,s+=this.renderAttrs(i),0===i.nesting&&t.xhtmlOut&&(s+=" /"),i.block&&(o=!0,1===i.nesting&&r+1<e.length&&(n=e[r+1],"inline"===n.type||n.hidden?o=!1:n.nesting===-1&&n.tag===i.tag&&(o=!1))),s+=o?">\n":">")},n.prototype.renderInline=function(e,r,t){for(var n,s="",o=this.rules,i=0,a=e.length;i<a;i++)n=e[i].type,s+="undefined"!=typeof o[n]?o[n](e,i,r,t,this):this.renderToken(e,i,r);return s},n.prototype.renderInlineAsText=function(e,r,t){for(var n="",s=0,o=e.length;s<o;s++)"text"===e[s].type?n+=e[s].content:"image"===e[s].type&&(n+=this.renderInlineAsText(e[s].children,r,t));return n},n.prototype.render=function(e,r,t){var n,s,o,i="",a=this.rules;for(n=0,s=e.length;n<s;n++)o=e[n].type,i+="inline"===o?this.renderInline(e[n].children,r,t):"undefined"!=typeof a[o]?a[e[n].type](e,n,r,t,this):this.renderToken(e,n,r,t);return i},r.exports=n},{"./common/utils":4}],17:[function(e,r,t){"use strict";function n(){this.__rules__=[],this.__cache__=null}n.prototype.__find__=function(e){for(var r=0;r<this.__rules__.length;r++)if(this.__rules__[r].name===e)return r;return-1},n.prototype.__compile__=function(){var e=this,r=[""];e.__rules__.forEach(function(e){e.enabled&&e.alt.forEach(function(e){r.indexOf(e)<0&&r.push(e)})}),e.__cache__={},r.forEach(function(r){e.__cache__[r]=[],e.__rules__.forEach(function(t){t.enabled&&(r&&t.alt.indexOf(r)<0||e.__cache__[r].push(t.fn))})})},n.prototype.at=function(e,r,t){var n=this.__find__(e),s=t||{};if(n===-1)throw new Error("Parser rule not found: "+e);this.__rules__[n].fn=r,this.__rules__[n].alt=s.alt||[],this.__cache__=null},n.prototype.before=function(e,r,t,n){var s=this.__find__(e),o=n||{};if(s===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(s,0,{name:r,enabled:!0,fn:t,alt:o.alt||[]}),this.__cache__=null},n.prototype.after=function(e,r,t,n){var s=this.__find__(e),o=n||{};if(s===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(s+1,0,{name:r,enabled:!0,fn:t,alt:o.alt||[]}),this.__cache__=null},n.prototype.push=function(e,r,t){var n=t||{};this.__rules__.push({name:e,enabled:!0,fn:r,alt:n.alt||[]}),this.__cache__=null},n.prototype.enable=function(e,r){Array.isArray(e)||(e=[e]);var t=[];return e.forEach(function(e){var n=this.__find__(e);if(n<0){if(r)return;throw new Error("Rules manager: invalid rule name "+e)}this.__rules__[n].enabled=!0,t.push(e)},this),this.__cache__=null,t},n.prototype.enableOnly=function(e,r){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(e){e.enabled=!1}),this.enable(e,r)},n.prototype.disable=function(e,r){Array.isArray(e)||(e=[e]);var t=[];return e.forEach(function(e){var n=this.__find__(e);if(n<0){if(r)return;throw new Error("Rules manager: invalid rule name "+e)}this.__rules__[n].enabled=!1,t.push(e)},this),this.__cache__=null,t},n.prototype.getRules=function(e){return null===this.__cache__&&this.__compile__(),this.__cache__[e]||[]},r.exports=n},{}],18:[function(e,r,t){"use strict";var n=e("../common/utils").isSpace;r.exports=function(e,r,t,s){var o,i,a,c,l,u,p,h,f,d,m,_,g,k,b,v,x=e.bMarks[r]+e.tShift[r],y=e.eMarks[r];if(62!==e.src.charCodeAt(x++))return!1;if(s)return!0;for(32===e.src.charCodeAt(x)&&x++,u=e.blkIndent,e.blkIndent=0,f=d=e.sCount[r]+x-(e.bMarks[r]+e.tShift[r]),l=[e.bMarks[r]],e.bMarks[r]=x;x<y&&(m=e.src.charCodeAt(x),n(m));)9===m?d+=4-d%4:d++,x++;for(i=x>=y,c=[e.sCount[r]],e.sCount[r]=d-f,a=[e.tShift[r]],e.tShift[r]=x-e.bMarks[r],_=e.md.block.ruler.getRules("blockquote"),o=r+1;o<t&&!(e.sCount[o]<u)&&(x=e.bMarks[o]+e.tShift[o],y=e.eMarks[o],!(x>=y));o++)if(62!==e.src.charCodeAt(x++)){if(i)break;for(v=!1,k=0,b=_.length;k<b;k++)if(_[k](e,o,t,!0)){v=!0;break}if(v)break;l.push(e.bMarks[o]),a.push(e.tShift[o]),c.push(e.sCount[o]),e.sCount[o]=-1}else{for(32===e.src.charCodeAt(x)&&x++,f=d=e.sCount[o]+x-(e.bMarks[o]+e.tShift[o]),l.push(e.bMarks[o]),e.bMarks[o]=x;x<y&&(m=e.src.charCodeAt(x),n(m));)9===m?d+=4-d%4:d++,x++;i=x>=y,c.push(e.sCount[o]),e.sCount[o]=d-f,a.push(e.tShift[o]),e.tShift[o]=x-e.bMarks[o]}for(p=e.parentType,e.parentType="blockquote",g=e.push("blockquote_open","blockquote",1),g.markup=">",g.map=h=[r,0],e.md.block.tokenize(e,r,o),g=e.push("blockquote_close","blockquote",-1),g.markup=">",e.parentType=p,h[1]=e.line,k=0;k<a.length;k++)e.bMarks[k+r]=l[k],e.tShift[k+r]=a[k],e.sCount[k+r]=c[k];return e.blkIndent=u,!0}},{"../common/utils":4}],19:[function(e,r,t){"use strict";r.exports=function(e,r,t){var n,s,o,i=0;if(e.sCount[r]-e.blkIndent<4)return!1;for(s=n=r+1;n<t;)if(e.isEmpty(n)){if(i++,i>=2&&"list"===e.parentType)break;n++}else{if(i=0,!(e.sCount[n]-e.blkIndent>=4))break;n++,s=n}return e.line=s,o=e.push("code_block","code",0),o.content=e.getLines(r,s,4+e.blkIndent,!0),o.map=[r,e.line],!0}},{}],20:[function(e,r,t){"use strict";r.exports=function(e,r,t,n){var s,o,i,a,c,l,u,p=!1,h=e.bMarks[r]+e.tShift[r],f=e.eMarks[r];if(h+3>f)return!1;if(s=e.src.charCodeAt(h),126!==s&&96!==s)return!1;if(c=h,h=e.skipChars(h,s),o=h-c,o<3)return!1;if(u=e.src.slice(c,h),i=e.src.slice(h,f),i.indexOf("`")>=0)return!1;if(n)return!0;for(a=r;(a++,!(a>=t))&&(h=c=e.bMarks[a]+e.tShift[a],f=e.eMarks[a],!(h<f&&e.sCount[a]<e.blkIndent));)if(e.src.charCodeAt(h)===s&&!(e.sCount[a]-e.blkIndent>=4||(h=e.skipChars(h,s),h-c<o||(h=e.skipSpaces(h),h<f)))){p=!0;break}return o=e.sCount[r],e.line=a+(p?1:0),l=e.push("fence","code",0),l.info=i,l.content=e.getLines(r+1,a,o,!0),l.markup=u,l.map=[r,e.line],!0}},{}],21:[function(e,r,t){"use strict";var n=e("../common/utils").isSpace;r.exports=function(e,r,t,s){var o,i,a,c,l=e.bMarks[r]+e.tShift[r],u=e.eMarks[r];if(o=e.src.charCodeAt(l),35!==o||l>=u)return!1;for(i=1,o=e.src.charCodeAt(++l);35===o&&l<u&&i<=6;)i++,o=e.src.charCodeAt(++l);return!(i>6||l<u&&32!==o)&&(!!s||(u=e.skipSpacesBack(u,l),a=e.skipCharsBack(u,35,l),a>l&&n(e.src.charCodeAt(a-1))&&(u=a),e.line=r+1,c=e.push("heading_open","h"+String(i),1),c.markup="########".slice(0,i),c.map=[r,e.line],c=e.push("inline","",0),c.content=e.src.slice(l,u).trim(),c.map=[r,e.line],c.children=[],c=e.push("heading_close","h"+String(i),-1),c.markup="########".slice(0,i),!0))}},{"../common/utils":4}],22:[function(e,r,t){"use strict";var n=e("../common/utils").isSpace;r.exports=function(e,r,t,s){var o,i,a,c,l=e.bMarks[r]+e.tShift[r],u=e.eMarks[r];if(o=e.src.charCodeAt(l++),42!==o&&45!==o&&95!==o)return!1;for(i=1;l<u;){if(a=e.src.charCodeAt(l++),a!==o&&!n(a))return!1;a===o&&i++}return!(i<3)&&(!!s||(e.line=r+1,c=e.push("hr","hr",0),c.map=[r,e.line],c.markup=Array(i+1).join(String.fromCharCode(o)),!0))}},{"../common/utils":4}],23:[function(e,r,t){"use strict";var n=e("../common/html_blocks"),s=e("../common/html_re").HTML_OPEN_CLOSE_TAG_RE,o=[[/^<(script|pre|style)(?=(\s|>|$))/i,/<\/(script|pre|style)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+n.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(s.source+"\\s*$"),/^$/,!1]];r.exports=function(e,r,t,n){var s,i,a,c,l=e.bMarks[r]+e.tShift[r],u=e.eMarks[r];if(!e.md.options.html)return!1;if(60!==e.src.charCodeAt(l))return!1;for(c=e.src.slice(l,u),s=0;s<o.length&&!o[s][0].test(c);s++);if(s===o.length)return!1;if(n)return o[s][2];if(i=r+1,!o[s][1].test(c))for(;i<t&&!(e.sCount[i]<e.blkIndent);i++)if(l=e.bMarks[i]+e.tShift[i],u=e.eMarks[i],c=e.src.slice(l,u),o[s][1].test(c)){0!==c.length&&i++;break}return e.line=i,a=e.push("html_block","",0),a.map=[r,i],a.content=e.getLines(r,i,e.blkIndent,!0),!0}},{"../common/html_blocks":2,"../common/html_re":3}],24:[function(e,r,t){"use strict";r.exports=function(e,r,t){for(var n,s,o,i,a,c,l,u,p,h=r+1,f=e.md.block.ruler.getRules("paragraph");h<t&&!e.isEmpty(h);h++)if(!(e.sCount[h]-e.blkIndent>3)){if(e.sCount[h]>=e.blkIndent&&(c=e.bMarks[h]+e.tShift[h],l=e.eMarks[h],c<l&&(p=e.src.charCodeAt(c),(45===p||61===p)&&(c=e.skipChars(c,p),c=e.skipSpaces(c),c>=l)))){u=61===p?1:2;break}if(!(e.sCount[h]<0)){for(s=!1,o=0,i=f.length;o<i;o++)if(f[o](e,h,t,!0)){s=!0;break}if(s)break}}return!!u&&(n=e.getLines(r,h,e.blkIndent,!1).trim(),e.line=h+1,a=e.push("heading_open","h"+String(u),1),a.markup=String.fromCharCode(p),a.map=[r,e.line],a=e.push("inline","",0),a.content=n,a.map=[r,e.line-1],a.children=[],a=e.push("heading_close","h"+String(u),-1),a.markup=String.fromCharCode(p),!0)}},{}],25:[function(e,r,t){"use strict";function n(e,r){var t,n,s,o;return n=e.bMarks[r]+e.tShift[r],s=e.eMarks[r],t=e.src.charCodeAt(n++),42!==t&&45!==t&&43!==t?-1:n<s&&(o=e.src.charCodeAt(n),!i(o))?-1:n}function s(e,r){var t,n=e.bMarks[r]+e.tShift[r],s=n,o=e.eMarks[r];if(s+1>=o)return-1;if(t=e.src.charCodeAt(s++),t<48||t>57)return-1;for(;;){if(s>=o)return-1;t=e.src.charCodeAt(s++);{if(!(t>=48&&t<=57)){if(41===t||46===t)break;return-1}if(s-n>=10)return-1}}return s<o&&(t=e.src.charCodeAt(s),!i(t))?-1:s}function o(e,r){var t,n,s=e.level+2;for(t=r+2,n=e.tokens.length-2;t<n;t++)e.tokens[t].level===s&&"paragraph_open"===e.tokens[t].type&&(e.tokens[t+2].hidden=!0,e.tokens[t].hidden=!0,t+=2)}var i=e("../common/utils").isSpace;r.exports=function(e,r,t,a){var c,l,u,p,h,f,d,m,_,g,k,b,v,x,y,C,A,w,D,q,E,S,F,z,L,T,R,M,I=!0;if((k=s(e,r))>=0)w=!0;else{if(!((k=n(e,r))>=0))return!1;w=!1}if(A=e.src.charCodeAt(k-1),a)return!0;for(q=e.tokens.length,w?(g=e.bMarks[r]+e.tShift[r],C=Number(e.src.substr(g,k-g-1)),L=e.push("ordered_list_open","ol",1),1!==C&&(L.attrs=[["start",C]])):L=e.push("bullet_list_open","ul",1),L.map=S=[r,0],L.markup=String.fromCharCode(A),c=r,E=!1,z=e.md.block.ruler.getRules("list");c<t;){for(v=k,x=e.eMarks[c],l=u=e.sCount[c]+k-(e.bMarks[r]+e.tShift[r]);v<x&&(b=e.src.charCodeAt(v),i(b));)9===b?u+=4-u%4:u++,v++;if(D=v,y=D>=x?1:u-l,y>4&&(y=1),p=l+y,L=e.push("list_item_open","li",1),L.markup=String.fromCharCode(A),L.map=F=[r,0],f=e.blkIndent,m=e.tight,h=e.tShift[r],d=e.sCount[r],_=e.parentType,e.blkIndent=p,e.tight=!0,e.parentType="list",e.tShift[r]=D-e.bMarks[r],e.sCount[r]=u,D>=x&&e.isEmpty(r+1)?e.line=Math.min(e.line+2,t):e.md.block.tokenize(e,r,t,!0),e.tight&&!E||(I=!1),E=e.line-r>1&&e.isEmpty(e.line-1),e.blkIndent=f,e.tShift[r]=h,e.sCount[r]=d,e.tight=m,e.parentType=_,L=e.push("list_item_close","li",-1),L.markup=String.fromCharCode(A),c=r=e.line,F[1]=c,D=e.bMarks[r],c>=t)break;if(e.isEmpty(c))break;if(e.sCount[c]<e.blkIndent)break;for(M=!1,T=0,R=z.length;T<R;T++)if(z[T](e,c,t,!0)){M=!0;break}if(M)break;if(w){if(k=s(e,c),k<0)break}else if(k=n(e,c),k<0)break;if(A!==e.src.charCodeAt(k-1))break}return L=w?e.push("ordered_list_close","ol",-1):e.push("bullet_list_close","ul",-1),L.markup=String.fromCharCode(A),S[1]=c,e.line=c,I&&o(e,q),!0}},{"../common/utils":4}],26:[function(e,r,t){"use strict";r.exports=function(e,r){for(var t,n,s,o,i,a=r+1,c=e.md.block.ruler.getRules("paragraph"),l=e.lineMax;a<l&&!e.isEmpty(a);a++)if(!(e.sCount[a]-e.blkIndent>3||e.sCount[a]<0)){for(n=!1,s=0,o=c.length;s<o;s++)if(c[s](e,a,l,!0)){n=!0;break}if(n)break}return t=e.getLines(r,a,e.blkIndent,!1).trim(),e.line=a,i=e.push("paragraph_open","p",1),i.map=[r,e.line],i=e.push("inline","",0),i.content=t,i.map=[r,e.line],i.children=[],i=e.push("paragraph_close","p",-1),!0}},{}],27:[function(e,r,t){"use strict";var n=e("../helpers/parse_link_destination"),s=e("../helpers/parse_link_title"),o=e("../common/utils").normalizeReference,i=e("../common/utils").isSpace;r.exports=function(e,r,t,a){var c,l,u,p,h,f,d,m,_,g,k,b,v,x,y,C=0,A=e.bMarks[r]+e.tShift[r],w=e.eMarks[r],D=r+1;if(91!==e.src.charCodeAt(A))return!1;for(;++A<w;)if(93===e.src.charCodeAt(A)&&92!==e.src.charCodeAt(A-1)){if(A+1===w)return!1;if(58!==e.src.charCodeAt(A+1))return!1;break}for(p=e.lineMax,x=e.md.block.ruler.getRules("reference");D<p&&!e.isEmpty(D);D++)if(!(e.sCount[D]-e.blkIndent>3||e.sCount[D]<0)){for(v=!1,f=0,d=x.length;f<d;f++)if(x[f](e,D,p,!0)){v=!0;break}if(v)break}for(b=e.getLines(r,D,e.blkIndent,!1).trim(),w=b.length,A=1;A<w;A++){if(c=b.charCodeAt(A),91===c)return!1;if(93===c){_=A;break}10===c?C++:92===c&&(A++,A<w&&10===b.charCodeAt(A)&&C++)}if(_<0||58!==b.charCodeAt(_+1))return!1;for(A=_+2;A<w;A++)if(c=b.charCodeAt(A),10===c)C++;else if(!i(c))break;if(g=n(b,A,w),!g.ok)return!1;if(h=e.md.normalizeLink(g.str),!e.md.validateLink(h))return!1;for(A=g.pos,C+=g.lines,l=A,u=C,k=A;A<w;A++)if(c=b.charCodeAt(A),10===c)C++;else if(!i(c))break;for(g=s(b,A,w),A<w&&k!==A&&g.ok?(y=g.str,A=g.pos,C+=g.lines):(y="",A=l,C=u);A<w&&(c=b.charCodeAt(A),i(c));)A++;if(A<w&&10!==b.charCodeAt(A)&&y)for(y="",A=l,C=u;A<w&&(c=b.charCodeAt(A),i(c));)A++;return!(A<w&&10!==b.charCodeAt(A))&&(!!(m=o(b.slice(1,_)))&&(!!a||("undefined"==typeof e.env.references&&(e.env.references={}),"undefined"==typeof e.env.references[m]&&(e.env.references[m]={title:y,href:h}),e.line=r+C+1,!0)))}},{"../common/utils":4,"../helpers/parse_link_destination":6,"../helpers/parse_link_title":8}],28:[function(e,r,t){"use strict";function n(e,r,t,n){var s,i,a,c,l,u,p,h;for(this.src=e,this.md=r,this.env=t,this.tokens=n,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.parentType="root",this.ddIndent=-1,this.level=0,this.result="",i=this.src,h=!1,a=c=u=p=0,l=i.length;c<l;c++){if(s=i.charCodeAt(c),!h){if(o(s)){u++,9===s?p+=4-p%4:p++;continue}h=!0}10!==s&&c!==l-1||(10!==s&&c++,this.bMarks.push(a),this.eMarks.push(c),this.tShift.push(u),this.sCount.push(p),h=!1,u=0,p=0,a=c+1)}this.bMarks.push(i.length),this.eMarks.push(i.length),this.tShift.push(0),this.sCount.push(0),this.lineMax=this.bMarks.length-1}var s=e("../token"),o=e("../common/utils").isSpace;n.prototype.push=function(e,r,t){var n=new s(e,r,t);return n.block=!0,t<0&&this.level--,n.level=this.level,t>0&&this.level++,this.tokens.push(n),n},n.prototype.isEmpty=function(e){return this.bMarks[e]+this.tShift[e]>=this.eMarks[e]},n.prototype.skipEmptyLines=function(e){for(var r=this.lineMax;e<r&&!(this.bMarks[e]+this.tShift[e]<this.eMarks[e]);e++);return e},n.prototype.skipSpaces=function(e){for(var r,t=this.src.length;e<t&&(r=this.src.charCodeAt(e),o(r));e++);return e},n.prototype.skipSpacesBack=function(e,r){if(e<=r)return e;for(;e>r;)if(!o(this.src.charCodeAt(--e)))return e+1;return e},n.prototype.skipChars=function(e,r){for(var t=this.src.length;e<t&&this.src.charCodeAt(e)===r;e++);return e},n.prototype.skipCharsBack=function(e,r,t){if(e<=t)return e;for(;e>t;)if(r!==this.src.charCodeAt(--e))return e+1;return e},n.prototype.getLines=function(e,r,t,n){var s,i,a,c,l,u,p,h=e;if(e>=r)return"";for(u=new Array(r-e),s=0;h<r;h++,s++){for(i=0,p=c=this.bMarks[h],l=h+1<r||n?this.eMarks[h]+1:this.eMarks[h];c<l&&i<t;){if(a=this.src.charCodeAt(c),o(a))9===a?i+=4-i%4:i++;else{if(!(c-p<this.tShift[h]))break;i++}c++}u[s]=this.src.slice(c,l)}return u.join("")},n.prototype.Token=s,r.exports=n},{"../common/utils":4,"../token":51}],29:[function(e,r,t){"use strict";function n(e,r){var t=e.bMarks[r]+e.blkIndent,n=e.eMarks[r];return e.src.substr(t,n-t)}function s(e){var r,t=[],n=0,s=e.length,o=0,i=0,a=!1,c=0;for(r=e.charCodeAt(n);n<s;)96===r&&o%2===0?(a=!a,c=n):124!==r||o%2!==0||a?92===r?o++:o=0:(t.push(e.substring(i,n)),i=n+1),n++,n===s&&a&&(a=!1,n=c+1),r=e.charCodeAt(n);return t.push(e.substring(i)),t}r.exports=function(e,r,t,o){var i,a,c,l,u,p,h,f,d,m,_,g;if(r+2>t)return!1;if(u=r+1,e.sCount[u]<e.blkIndent)return!1;if(c=e.bMarks[u]+e.tShift[u],c>=e.eMarks[u])return!1;if(i=e.src.charCodeAt(c),124!==i&&45!==i&&58!==i)return!1;if(a=n(e,r+1),!/^[-:| ]+$/.test(a))return!1;for(p=a.split("|"),d=[],l=0;l<p.length;l++){if(m=p[l].trim(),!m){if(0===l||l===p.length-1)continue;
return!1}if(!/^:?-+:?$/.test(m))return!1;58===m.charCodeAt(m.length-1)?d.push(58===m.charCodeAt(0)?"center":"right"):58===m.charCodeAt(0)?d.push("left"):d.push("")}if(a=n(e,r).trim(),a.indexOf("|")===-1)return!1;if(p=s(a.replace(/^\||\|$/g,"")),h=p.length,h>d.length)return!1;if(o)return!0;for(f=e.push("table_open","table",1),f.map=_=[r,0],f=e.push("thead_open","thead",1),f.map=[r,r+1],f=e.push("tr_open","tr",1),f.map=[r,r+1],l=0;l<p.length;l++)f=e.push("th_open","th",1),f.map=[r,r+1],d[l]&&(f.attrs=[["style","text-align:"+d[l]]]),f=e.push("inline","",0),f.content=p[l].trim(),f.map=[r,r+1],f.children=[],f=e.push("th_close","th",-1);for(f=e.push("tr_close","tr",-1),f=e.push("thead_close","thead",-1),f=e.push("tbody_open","tbody",1),f.map=g=[r+2,0],u=r+2;u<t&&!(e.sCount[u]<e.blkIndent)&&(a=n(e,u),a.indexOf("|")!==-1);u++){for(p=s(a.replace(/^\||\|\s*$/g,"")),f=e.push("tr_open","tr",1),l=0;l<h;l++)f=e.push("td_open","td",1),d[l]&&(f.attrs=[["style","text-align:"+d[l]]]),f=e.push("inline","",0),f.content=p[l]?p[l].trim():"",f.children=[],f=e.push("td_close","td",-1);f=e.push("tr_close","tr",-1)}return f=e.push("tbody_close","tbody",-1),f=e.push("table_close","table",-1),_[1]=g[1]=u,e.line=u,!0}},{}],30:[function(e,r,t){"use strict";r.exports=function(e){var r;e.inlineMode?(r=new e.Token("inline","",0),r.content=e.src,r.map=[0,1],r.children=[],e.tokens.push(r)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}},{}],31:[function(e,r,t){"use strict";r.exports=function(e){var r,t,n,s=e.tokens;for(t=0,n=s.length;t<n;t++)r=s[t],"inline"===r.type&&e.md.inline.parse(r.content,e.md,e.env,r.children)}},{}],32:[function(e,r,t){"use strict";function n(e){return/^<a[>\s]/i.test(e)}function s(e){return/^<\/a\s*>/i.test(e)}var o=e("../common/utils").arrayReplaceAt;r.exports=function(e){var r,t,i,a,c,l,u,p,h,f,d,m,_,g,k,b,v,x=e.tokens;if(e.md.options.linkify)for(t=0,i=x.length;t<i;t++)if("inline"===x[t].type&&e.md.linkify.pretest(x[t].content))for(a=x[t].children,_=0,r=a.length-1;r>=0;r--)if(l=a[r],"link_close"!==l.type){if("html_inline"===l.type&&(n(l.content)&&_>0&&_--,s(l.content)&&_++),!(_>0)&&"text"===l.type&&e.md.linkify.test(l.content)){for(h=l.content,v=e.md.linkify.match(h),u=[],m=l.level,d=0,p=0;p<v.length;p++)g=v[p].url,k=e.md.normalizeLink(g),e.md.validateLink(k)&&(b=v[p].text,b=v[p].schema?"mailto:"!==v[p].schema||/^mailto:/i.test(b)?e.md.normalizeLinkText(b):e.md.normalizeLinkText("mailto:"+b).replace(/^mailto:/,""):e.md.normalizeLinkText("http://"+b).replace(/^http:\/\//,""),f=v[p].index,f>d&&(c=new e.Token("text","",0),c.content=h.slice(d,f),c.level=m,u.push(c)),c=new e.Token("link_open","a",1),c.attrs=[["href",k]],c.level=m++,c.markup="linkify",c.info="auto",u.push(c),c=new e.Token("text","",0),c.content=b,c.level=m,u.push(c),c=new e.Token("link_close","a",(-1)),c.level=--m,c.markup="linkify",c.info="auto",u.push(c),d=v[p].lastIndex);d<h.length&&(c=new e.Token("text","",0),c.content=h.slice(d),c.level=m,u.push(c)),x[t].children=a=o(a,r,u)}}else for(r--;a[r].level!==l.level&&"link_open"!==a[r].type;)r--}},{"../common/utils":4}],33:[function(e,r,t){"use strict";var n=/\r[\n\u0085]?|[\u2424\u2028\u0085]/g,s=/\u0000/g;r.exports=function(e){var r;r=e.src.replace(n,"\n"),r=r.replace(s,"\ufffd"),e.src=r}},{}],34:[function(e,r,t){"use strict";function n(e,r){return l[r.toLowerCase()]}function s(e){var r,t;for(r=e.length-1;r>=0;r--)t=e[r],"text"===t.type&&(t.content=t.content.replace(c,n))}function o(e){var r,t;for(r=e.length-1;r>=0;r--)t=e[r],"text"===t.type&&i.test(t.content)&&(t.content=t.content.replace(/\+-/g,"\xb1").replace(/\.{2,}/g,"\u2026").replace(/([?!])\u2026/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---([^-]|$)/gm,"$1\u2014$2").replace(/(^|\s)--(\s|$)/gm,"$1\u2013$2").replace(/(^|[^-\s])--([^-\s]|$)/gm,"$1\u2013$2"))}var i=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,a=/\((c|tm|r|p)\)/i,c=/\((c|tm|r|p)\)/gi,l={c:"\xa9",r:"\xae",p:"\xa7",tm:"\u2122"};r.exports=function(e){var r;if(e.md.options.typographer)for(r=e.tokens.length-1;r>=0;r--)"inline"===e.tokens[r].type&&(a.test(e.tokens[r].content)&&s(e.tokens[r].children),i.test(e.tokens[r].content)&&o(e.tokens[r].children))}},{}],35:[function(e,r,t){"use strict";function n(e,r,t){return e.substr(0,r)+t+e.substr(r+1)}function s(e,r){var t,s,c,p,h,f,d,m,_,g,k,b,v,x,y,C,A,w,D,q,E;for(D=[],t=0;t<e.length;t++){for(s=e[t],d=e[t].level,A=D.length-1;A>=0&&!(D[A].level<=d);A--);if(D.length=A+1,"text"===s.type){c=s.content,h=0,f=c.length;e:for(;h<f&&(l.lastIndex=h,p=l.exec(c));){if(y=C=!0,h=p.index+1,w="'"===p[0],_=32,p.index-1>=0)_=c.charCodeAt(p.index-1);else for(A=t-1;A>=0;A--)if("text"===e[A].type){_=e[A].content.charCodeAt(e[A].content.length-1);break}if(g=32,h<f)g=c.charCodeAt(h);else for(A=t+1;A<e.length;A++)if("text"===e[A].type){g=e[A].content.charCodeAt(0);break}if(k=a(_)||i(String.fromCharCode(_)),b=a(g)||i(String.fromCharCode(g)),v=o(_),x=o(g),x?y=!1:b&&(v||k||(y=!1)),v?C=!1:k&&(x||b||(C=!1)),34===g&&'"'===p[0]&&_>=48&&_<=57&&(C=y=!1),y&&C&&(y=!1,C=b),y||C){if(C)for(A=D.length-1;A>=0&&(m=D[A],!(D[A].level<d));A--)if(m.single===w&&D[A].level===d){m=D[A],w?(q=r.md.options.quotes[2],E=r.md.options.quotes[3]):(q=r.md.options.quotes[0],E=r.md.options.quotes[1]),s.content=n(s.content,p.index,E),e[m.token].content=n(e[m.token].content,m.pos,q),h+=E.length-1,m.token===t&&(h+=q.length-1),c=s.content,f=c.length,D.length=A;continue e}y?D.push({token:t,pos:p.index,single:w,level:d}):C&&w&&(s.content=n(s.content,p.index,u))}else w&&(s.content=n(s.content,p.index,u))}}}}var o=e("../common/utils").isWhiteSpace,i=e("../common/utils").isPunctChar,a=e("../common/utils").isMdAsciiPunct,c=/['"]/,l=/['"]/g,u="\u2019";r.exports=function(e){var r;if(e.md.options.typographer)for(r=e.tokens.length-1;r>=0;r--)"inline"===e.tokens[r].type&&c.test(e.tokens[r].content)&&s(e.tokens[r].children,e)}},{"../common/utils":4}],36:[function(e,r,t){"use strict";function n(e,r,t){this.src=e,this.env=t,this.tokens=[],this.inlineMode=!1,this.md=r}var s=e("../token");n.prototype.Token=s,r.exports=n},{"../token":51}],37:[function(e,r,t){"use strict";var n=/^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/,s=/^<([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)>/;r.exports=function(e,r){var t,o,i,a,c,l,u=e.pos;return 60===e.src.charCodeAt(u)&&(t=e.src.slice(u),!(t.indexOf(">")<0)&&(s.test(t)?(o=t.match(s),a=o[0].slice(1,-1),c=e.md.normalizeLink(a),!!e.md.validateLink(c)&&(r||(l=e.push("link_open","a",1),l.attrs=[["href",c]],l.markup="autolink",l.info="auto",l=e.push("text","",0),l.content=e.md.normalizeLinkText(a),l=e.push("link_close","a",-1),l.markup="autolink",l.info="auto"),e.pos+=o[0].length,!0)):!!n.test(t)&&(i=t.match(n),a=i[0].slice(1,-1),c=e.md.normalizeLink("mailto:"+a),!!e.md.validateLink(c)&&(r||(l=e.push("link_open","a",1),l.attrs=[["href",c]],l.markup="autolink",l.info="auto",l=e.push("text","",0),l.content=e.md.normalizeLinkText(a),l=e.push("link_close","a",-1),l.markup="autolink",l.info="auto"),e.pos+=i[0].length,!0))))}},{}],38:[function(e,r,t){"use strict";r.exports=function(e,r){var t,n,s,o,i,a,c=e.pos,l=e.src.charCodeAt(c);if(96!==l)return!1;for(t=c,c++,n=e.posMax;c<n&&96===e.src.charCodeAt(c);)c++;for(s=e.src.slice(t,c),o=i=c;(o=e.src.indexOf("`",i))!==-1;){for(i=o+1;i<n&&96===e.src.charCodeAt(i);)i++;if(i-o===s.length)return r||(a=e.push("code_inline","code",0),a.markup=s,a.content=e.src.slice(c,o).replace(/[ \n]+/g," ").trim()),e.pos=i,!0}return r||(e.pending+=s),e.pos+=s.length,!0}},{}],39:[function(e,r,t){"use strict";r.exports=function(e){var r,t,n,s,o=e.delimiters,i=e.delimiters.length;for(r=0;r<i;r++)if(n=o[r],n.close)for(t=r-n.jump-1;t>=0;){if(s=o[t],s.open&&s.marker===n.marker&&s.end<0&&s.level===n.level){n.jump=r-t,n.open=!1,s.end=r,s.jump=0;break}t-=s.jump+1}}},{}],40:[function(e,r,t){"use strict";r.exports.tokenize=function(e,r){var t,n,s,o=e.pos,i=e.src.charCodeAt(o);if(r)return!1;if(95!==i&&42!==i)return!1;for(n=e.scanDelims(e.pos,42===i),t=0;t<n.length;t++)s=e.push("text","",0),s.content=String.fromCharCode(i),e.delimiters.push({marker:i,jump:t,token:e.tokens.length-1,level:e.level,end:-1,open:n.can_open,close:n.can_close});return e.pos+=n.length,!0},r.exports.postProcess=function(e){var r,t,n,s,o,i,a=e.delimiters,c=e.delimiters.length;for(r=0;r<c;r++)t=a[r],95!==t.marker&&42!==t.marker||t.end!==-1&&(n=a[t.end],i=r+1<c&&a[r+1].end===t.end-1&&a[r+1].token===t.token+1&&a[t.end-1].token===n.token-1&&a[r+1].marker===t.marker,o=String.fromCharCode(t.marker),s=e.tokens[t.token],s.type=i?"strong_open":"em_open",s.tag=i?"strong":"em",s.nesting=1,s.markup=i?o+o:o,s.content="",s=e.tokens[n.token],s.type=i?"strong_close":"em_close",s.tag=i?"strong":"em",s.nesting=-1,s.markup=i?o+o:o,s.content="",i&&(e.tokens[a[r+1].token].content="",e.tokens[a[t.end-1].token].content="",r++))}},{}],41:[function(e,r,t){"use strict";var n=e("../common/entities"),s=e("../common/utils").has,o=e("../common/utils").isValidEntityCode,i=e("../common/utils").fromCodePoint,a=/^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i,c=/^&([a-z][a-z0-9]{1,31});/i;r.exports=function(e,r){var t,l,u,p=e.pos,h=e.posMax;if(38!==e.src.charCodeAt(p))return!1;if(p+1<h)if(t=e.src.charCodeAt(p+1),35===t){if(u=e.src.slice(p).match(a))return r||(l="x"===u[1][0].toLowerCase()?parseInt(u[1].slice(1),16):parseInt(u[1],10),e.pending+=i(o(l)?l:65533)),e.pos+=u[0].length,!0}else if(u=e.src.slice(p).match(c),u&&s(n,u[1]))return r||(e.pending+=n[u[1]]),e.pos+=u[0].length,!0;return r||(e.pending+="&"),e.pos++,!0}},{"../common/entities":1,"../common/utils":4}],42:[function(e,r,t){"use strict";for(var n=e("../common/utils").isSpace,s=[],o=0;o<256;o++)s.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e){s[e.charCodeAt(0)]=1}),r.exports=function(e,r){var t,o=e.pos,i=e.posMax;if(92!==e.src.charCodeAt(o))return!1;if(o++,o<i){if(t=e.src.charCodeAt(o),t<256&&0!==s[t])return r||(e.pending+=e.src[o]),e.pos+=2,!0;if(10===t){for(r||e.push("hardbreak","br",0),o++;o<i&&(t=e.src.charCodeAt(o),n(t));)o++;return e.pos=o,!0}}return r||(e.pending+="\\"),e.pos++,!0}},{"../common/utils":4}],43:[function(e,r,t){"use strict";function n(e){var r=32|e;return r>=97&&r<=122}var s=e("../common/html_re").HTML_TAG_RE;r.exports=function(e,r){var t,o,i,a,c=e.pos;return!!e.md.options.html&&(i=e.posMax,!(60!==e.src.charCodeAt(c)||c+2>=i)&&(t=e.src.charCodeAt(c+1),!(33!==t&&63!==t&&47!==t&&!n(t))&&(!!(o=e.src.slice(c).match(s))&&(r||(a=e.push("html_inline","",0),a.content=e.src.slice(c,c+o[0].length)),e.pos+=o[0].length,!0))))}},{"../common/html_re":3}],44:[function(e,r,t){"use strict";var n=e("../helpers/parse_link_label"),s=e("../helpers/parse_link_destination"),o=e("../helpers/parse_link_title"),i=e("../common/utils").normalizeReference,a=e("../common/utils").isSpace;r.exports=function(e,r){var t,c,l,u,p,h,f,d,m,_,g,k,b,v="",x=e.pos,y=e.posMax;if(33!==e.src.charCodeAt(e.pos))return!1;if(91!==e.src.charCodeAt(e.pos+1))return!1;if(h=e.pos+2,p=n(e,e.pos+1,!1),p<0)return!1;if(f=p+1,f<y&&40===e.src.charCodeAt(f)){for(f++;f<y&&(c=e.src.charCodeAt(f),a(c)||10===c);f++);if(f>=y)return!1;for(b=f,m=s(e.src,f,e.posMax),m.ok&&(v=e.md.normalizeLink(m.str),e.md.validateLink(v)?f=m.pos:v=""),b=f;f<y&&(c=e.src.charCodeAt(f),a(c)||10===c);f++);if(m=o(e.src,f,e.posMax),f<y&&b!==f&&m.ok)for(_=m.str,f=m.pos;f<y&&(c=e.src.charCodeAt(f),a(c)||10===c);f++);else _="";if(f>=y||41!==e.src.charCodeAt(f))return e.pos=x,!1;f++}else{if("undefined"==typeof e.env.references)return!1;if(f<y&&91===e.src.charCodeAt(f)?(b=f+1,f=n(e,f),f>=0?u=e.src.slice(b,f++):f=p+1):f=p+1,u||(u=e.src.slice(h,p)),d=e.env.references[i(u)],!d)return e.pos=x,!1;v=d.href,_=d.title}return r||(l=e.src.slice(h,p),e.md.inline.parse(l,e.md,e.env,k=[]),g=e.push("image","img",0),g.attrs=t=[["src",v],["alt",""]],g.children=k,g.content=l,_&&t.push(["title",_])),e.pos=f,e.posMax=y,!0}},{"../common/utils":4,"../helpers/parse_link_destination":6,"../helpers/parse_link_label":7,"../helpers/parse_link_title":8}],45:[function(e,r,t){"use strict";var n=e("../helpers/parse_link_label"),s=e("../helpers/parse_link_destination"),o=e("../helpers/parse_link_title"),i=e("../common/utils").normalizeReference,a=e("../common/utils").isSpace;r.exports=function(e,r){var t,c,l,u,p,h,f,d,m,_,g="",k=e.pos,b=e.posMax,v=e.pos;if(91!==e.src.charCodeAt(e.pos))return!1;if(p=e.pos+1,u=n(e,e.pos,!0),u<0)return!1;if(h=u+1,h<b&&40===e.src.charCodeAt(h)){for(h++;h<b&&(c=e.src.charCodeAt(h),a(c)||10===c);h++);if(h>=b)return!1;for(v=h,f=s(e.src,h,e.posMax),f.ok&&(g=e.md.normalizeLink(f.str),e.md.validateLink(g)?h=f.pos:g=""),v=h;h<b&&(c=e.src.charCodeAt(h),a(c)||10===c);h++);if(f=o(e.src,h,e.posMax),h<b&&v!==h&&f.ok)for(m=f.str,h=f.pos;h<b&&(c=e.src.charCodeAt(h),a(c)||10===c);h++);else m="";if(h>=b||41!==e.src.charCodeAt(h))return e.pos=k,!1;h++}else{if("undefined"==typeof e.env.references)return!1;if(h<b&&91===e.src.charCodeAt(h)?(v=h+1,h=n(e,h),h>=0?l=e.src.slice(v,h++):h=u+1):h=u+1,l||(l=e.src.slice(p,u)),d=e.env.references[i(l)],!d)return e.pos=k,!1;g=d.href,m=d.title}return r||(e.pos=p,e.posMax=u,_=e.push("link_open","a",1),_.attrs=t=[["href",g]],m&&t.push(["title",m]),e.md.inline.tokenize(e),_=e.push("link_close","a",-1)),e.pos=h,e.posMax=b,!0}},{"../common/utils":4,"../helpers/parse_link_destination":6,"../helpers/parse_link_label":7,"../helpers/parse_link_title":8}],46:[function(e,r,t){"use strict";r.exports=function(e,r){var t,n,s=e.pos;if(10!==e.src.charCodeAt(s))return!1;for(t=e.pending.length-1,n=e.posMax,r||(t>=0&&32===e.pending.charCodeAt(t)?t>=1&&32===e.pending.charCodeAt(t-1)?(e.pending=e.pending.replace(/ +$/,""),e.push("hardbreak","br",0)):(e.pending=e.pending.slice(0,-1),e.push("softbreak","br",0)):e.push("softbreak","br",0)),s++;s<n&&32===e.src.charCodeAt(s);)s++;return e.pos=s,!0}},{}],47:[function(e,r,t){"use strict";function n(e,r,t,n){this.src=e,this.env=t,this.md=r,this.tokens=n,this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[]}var s=e("../token"),o=e("../common/utils").isWhiteSpace,i=e("../common/utils").isPunctChar,a=e("../common/utils").isMdAsciiPunct;n.prototype.pushPending=function(){var e=new s("text","",0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending="",e},n.prototype.push=function(e,r,t){this.pending&&this.pushPending();var n=new s(e,r,t);return t<0&&this.level--,n.level=this.level,t>0&&this.level++,this.pendingLevel=this.level,this.tokens.push(n),n},n.prototype.scanDelims=function(e,r){var t,n,s,c,l,u,p,h,f,d=e,m=!0,_=!0,g=this.posMax,k=this.src.charCodeAt(e);for(t=e>0?this.src.charCodeAt(e-1):32;d<g&&this.src.charCodeAt(d)===k;)d++;return s=d-e,n=d<g?this.src.charCodeAt(d):32,p=a(t)||i(String.fromCharCode(t)),f=a(n)||i(String.fromCharCode(n)),u=o(t),h=o(n),h?m=!1:f&&(u||p||(m=!1)),u?_=!1:p&&(h||f||(_=!1)),r?(c=m,l=_):(c=m&&(!_||p),l=_&&(!m||f)),{can_open:c,can_close:l,length:s}},n.prototype.Token=s,r.exports=n},{"../common/utils":4,"../token":51}],48:[function(e,r,t){"use strict";r.exports.tokenize=function(e,r){var t,n,s,o,i,a=e.pos,c=e.src.charCodeAt(a);if(r)return!1;if(126!==c)return!1;if(n=e.scanDelims(e.pos,!0),o=n.length,i=String.fromCharCode(c),o<2)return!1;for(o%2&&(s=e.push("text","",0),s.content=i,o--),t=0;t<o;t+=2)s=e.push("text","",0),s.content=i+i,e.delimiters.push({marker:c,jump:t,token:e.tokens.length-1,level:e.level,end:-1,open:n.can_open,close:n.can_close});return e.pos+=n.length,!0},r.exports.postProcess=function(e){var r,t,n,s,o,i=[],a=e.delimiters,c=e.delimiters.length;for(r=0;r<c;r++)n=a[r],126===n.marker&&n.end!==-1&&(s=a[n.end],o=e.tokens[n.token],o.type="s_open",o.tag="s",o.nesting=1,o.markup="~~",o.content="",o=e.tokens[s.token],o.type="s_close",o.tag="s",o.nesting=-1,o.markup="~~",o.content="","text"===e.tokens[s.token-1].type&&"~"===e.tokens[s.token-1].content&&i.push(s.token-1));for(;i.length;){for(r=i.pop(),t=r+1;t<e.tokens.length&&"s_close"===e.tokens[t].type;)t++;t--,r!==t&&(o=e.tokens[t],e.tokens[t]=e.tokens[r],e.tokens[r]=o)}}},{}],49:[function(e,r,t){"use strict";function n(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}r.exports=function(e,r){for(var t=e.pos;t<e.posMax&&!n(e.src.charCodeAt(t));)t++;return t!==e.pos&&(r||(e.pending+=e.src.slice(e.pos,t)),e.pos=t,!0)}},{}],50:[function(e,r,t){"use strict";r.exports=function(e){var r,t,n=0,s=e.tokens,o=e.tokens.length;for(r=t=0;r<o;r++)n+=s[r].nesting,s[r].level=n,"text"===s[r].type&&r+1<o&&"text"===s[r+1].type?s[r+1].content=s[r].content+s[r+1].content:(r!==t&&(s[t]=s[r]),t++);r!==t&&(s.length=t)}},{}],51:[function(e,r,t){"use strict";function n(e,r,t){this.type=e,this.tag=r,this.attrs=null,this.map=null,this.nesting=t,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}n.prototype.attrIndex=function(e){var r,t,n;if(!this.attrs)return-1;for(r=this.attrs,t=0,n=r.length;t<n;t++)if(r[t][0]===e)return t;return-1},n.prototype.attrPush=function(e){this.attrs?this.attrs.push(e):this.attrs=[e]},n.prototype.attrSet=function(e,r){var t=this.attrIndex(e),n=[e,r];t<0?this.attrPush(n):this.attrs[t]=n},n.prototype.attrGet=function(e){var r=this.attrIndex(e),t=null;return r>=0&&(t=this.attrs[r][1]),t},n.prototype.attrJoin=function(e,r){var t=this.attrIndex(e);t<0?this.attrPush([e,r]):this.attrs[t][1]=this.attrs[t][1]+" "+r},r.exports=n},{}],52:[function(r,t,n){(function(r){!function(s){function o(e){throw new RangeError(R[e])}function i(e,r){for(var t=e.length,n=[];t--;)n[t]=r(e[t]);return n}function a(e,r){var t=e.split("@"),n="";t.length>1&&(n=t[0]+"@",e=t[1]),e=e.replace(T,".");var s=e.split("."),o=i(s,r).join(".");return n+o}function c(e){for(var r,t,n=[],s=0,o=e.length;s<o;)r=e.charCodeAt(s++),r>=55296&&r<=56319&&s<o?(t=e.charCodeAt(s++),56320==(64512&t)?n.push(((1023&r)<<10)+(1023&t)+65536):(n.push(r),s--)):n.push(r);return n}function l(e){return i(e,function(e){var r="";return e>65535&&(e-=65536,r+=B(e>>>10&1023|55296),e=56320|1023&e),r+=B(e)}).join("")}function u(e){return e-48<10?e-22:e-65<26?e-65:e-97<26?e-97:C}function p(e,r){return e+22+75*(e<26)-((0!=r)<<5)}function h(e,r,t){var n=0;for(e=t?I(e/q):e>>1,e+=I(e/r);e>M*w>>1;n+=C)e=I(e/M);return I(n+(M+1)*e/(e+D))}function f(e){var r,t,n,s,i,a,c,p,f,d,m=[],_=e.length,g=0,k=S,b=E;for(t=e.lastIndexOf(F),t<0&&(t=0),n=0;n<t;++n)e.charCodeAt(n)>=128&&o("not-basic"),m.push(e.charCodeAt(n));for(s=t>0?t+1:0;s<_;){for(i=g,a=1,c=C;s>=_&&o("invalid-input"),p=u(e.charCodeAt(s++)),(p>=C||p>I((y-g)/a))&&o("overflow"),g+=p*a,f=c<=b?A:c>=b+w?w:c-b,!(p<f);c+=C)d=C-f,a>I(y/d)&&o("overflow"),a*=d;r=m.length+1,b=h(g-i,r,0==i),I(g/r)>y-k&&o("overflow"),k+=I(g/r),g%=r,m.splice(g++,0,k)}return l(m)}function d(e){var r,t,n,s,i,a,l,u,f,d,m,_,g,k,b,v=[];for(e=c(e),_=e.length,r=S,t=0,i=E,a=0;a<_;++a)m=e[a],m<128&&v.push(B(m));for(n=s=v.length,s&&v.push(F);n<_;){for(l=y,a=0;a<_;++a)m=e[a],m>=r&&m<l&&(l=m);for(g=n+1,l-r>I((y-t)/g)&&o("overflow"),t+=(l-r)*g,r=l,a=0;a<_;++a)if(m=e[a],m<r&&++t>y&&o("overflow"),m==r){for(u=t,f=C;d=f<=i?A:f>=i+w?w:f-i,!(u<d);f+=C)b=u-d,k=C-d,v.push(B(p(d+b%k,0))),u=I(b/k);v.push(B(p(u,0))),i=h(t,g,n==s),t=0,++n}++t,++r}return v.join("")}function m(e){return a(e,function(e){return z.test(e)?f(e.slice(4).toLowerCase()):e})}function _(e){return a(e,function(e){return L.test(e)?"xn--"+d(e):e})}var g="object"==typeof n&&n&&!n.nodeType&&n,k="object"==typeof t&&t&&!t.nodeType&&t,b="object"==typeof r&&r;b.global!==b&&b.window!==b&&b.self!==b||(s=b);var v,x,y=2147483647,C=36,A=1,w=26,D=38,q=700,E=72,S=128,F="-",z=/^xn--/,L=/[^\x20-\x7E]/,T=/[\x2E\u3002\uFF0E\uFF61]/g,R={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},M=C-A,I=Math.floor,B=String.fromCharCode;if(v={version:"1.4.1",ucs2:{decode:c,encode:l},decode:f,encode:d,toASCII:_,toUnicode:m},"function"==typeof e&&"object"==typeof e.amd&&e.amd)e("punycode",function(){return v});else if(g&&k)if(t.exports==g)k.exports=v;else for(x in v)v.hasOwnProperty(x)&&(g[x]=v[x]);else s.punycode=v}(this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],53:[function(e,r,t){r.exports={Aacute:"\xc1",aacute:"\xe1",Abreve:"\u0102",abreve:"\u0103",ac:"\u223e",acd:"\u223f",acE:"\u223e\u0333",Acirc:"\xc2",acirc:"\xe2",acute:"\xb4",Acy:"\u0410",acy:"\u0430",AElig:"\xc6",aelig:"\xe6",af:"\u2061",Afr:"\ud835\udd04",afr:"\ud835\udd1e",Agrave:"\xc0",agrave:"\xe0",alefsym:"\u2135",aleph:"\u2135",Alpha:"\u0391",alpha:"\u03b1",Amacr:"\u0100",amacr:"\u0101",amalg:"\u2a3f",amp:"&",AMP:"&",andand:"\u2a55",And:"\u2a53",and:"\u2227",andd:"\u2a5c",andslope:"\u2a58",andv:"\u2a5a",ang:"\u2220",ange:"\u29a4",angle:"\u2220",angmsdaa:"\u29a8",angmsdab:"\u29a9",angmsdac:"\u29aa",angmsdad:"\u29ab",angmsdae:"\u29ac",angmsdaf:"\u29ad",angmsdag:"\u29ae",angmsdah:"\u29af",angmsd:"\u2221",angrt:"\u221f",angrtvb:"\u22be",angrtvbd:"\u299d",angsph:"\u2222",angst:"\xc5",angzarr:"\u237c",Aogon:"\u0104",aogon:"\u0105",Aopf:"\ud835\udd38",aopf:"\ud835\udd52",apacir:"\u2a6f",ap:"\u2248",apE:"\u2a70",ape:"\u224a",apid:"\u224b",apos:"'",ApplyFunction:"\u2061",approx:"\u2248",approxeq:"\u224a",Aring:"\xc5",aring:"\xe5",Ascr:"\ud835\udc9c",ascr:"\ud835\udcb6",Assign:"\u2254",ast:"*",asymp:"\u2248",asympeq:"\u224d",Atilde:"\xc3",atilde:"\xe3",Auml:"\xc4",auml:"\xe4",awconint:"\u2233",awint:"\u2a11",backcong:"\u224c",backepsilon:"\u03f6",backprime:"\u2035",backsim:"\u223d",backsimeq:"\u22cd",Backslash:"\u2216",Barv:"\u2ae7",barvee:"\u22bd",barwed:"\u2305",Barwed:"\u2306",barwedge:"\u2305",bbrk:"\u23b5",bbrktbrk:"\u23b6",bcong:"\u224c",Bcy:"\u0411",bcy:"\u0431",bdquo:"\u201e",becaus:"\u2235",because:"\u2235",Because:"\u2235",bemptyv:"\u29b0",bepsi:"\u03f6",bernou:"\u212c",Bernoullis:"\u212c",Beta:"\u0392",beta:"\u03b2",beth:"\u2136",between:"\u226c",Bfr:"\ud835\udd05",bfr:"\ud835\udd1f",bigcap:"\u22c2",bigcirc:"\u25ef",bigcup:"\u22c3",bigodot:"\u2a00",bigoplus:"\u2a01",bigotimes:"\u2a02",bigsqcup:"\u2a06",bigstar:"\u2605",bigtriangledown:"\u25bd",bigtriangleup:"\u25b3",biguplus:"\u2a04",bigvee:"\u22c1",bigwedge:"\u22c0",bkarow:"\u290d",blacklozenge:"\u29eb",blacksquare:"\u25aa",blacktriangle:"\u25b4",blacktriangledown:"\u25be",blacktriangleleft:"\u25c2",blacktriangleright:"\u25b8",blank:"\u2423",blk12:"\u2592",blk14:"\u2591",blk34:"\u2593",block:"\u2588",bne:"=\u20e5",bnequiv:"\u2261\u20e5",bNot:"\u2aed",bnot:"\u2310",Bopf:"\ud835\udd39",bopf:"\ud835\udd53",bot:"\u22a5",bottom:"\u22a5",bowtie:"\u22c8",boxbox:"\u29c9",boxdl:"\u2510",boxdL:"\u2555",boxDl:"\u2556",boxDL:"\u2557",boxdr:"\u250c",boxdR:"\u2552",boxDr:"\u2553",boxDR:"\u2554",boxh:"\u2500",boxH:"\u2550",boxhd:"\u252c",boxHd:"\u2564",boxhD:"\u2565",boxHD:"\u2566",boxhu:"\u2534",boxHu:"\u2567",boxhU:"\u2568",boxHU:"\u2569",boxminus:"\u229f",boxplus:"\u229e",boxtimes:"\u22a0",boxul:"\u2518",boxuL:"\u255b",boxUl:"\u255c",boxUL:"\u255d",boxur:"\u2514",boxuR:"\u2558",boxUr:"\u2559",boxUR:"\u255a",boxv:"\u2502",boxV:"\u2551",boxvh:"\u253c",boxvH:"\u256a",boxVh:"\u256b",boxVH:"\u256c",boxvl:"\u2524",boxvL:"\u2561",boxVl:"\u2562",boxVL:"\u2563",boxvr:"\u251c",boxvR:"\u255e",boxVr:"\u255f",boxVR:"\u2560",bprime:"\u2035",breve:"\u02d8",Breve:"\u02d8",brvbar:"\xa6",bscr:"\ud835\udcb7",Bscr:"\u212c",bsemi:"\u204f",bsim:"\u223d",bsime:"\u22cd",bsolb:"\u29c5",bsol:"\\",bsolhsub:"\u27c8",bull:"\u2022",bullet:"\u2022",bump:"\u224e",bumpE:"\u2aae",bumpe:"\u224f",Bumpeq:"\u224e",bumpeq:"\u224f",Cacute:"\u0106",cacute:"\u0107",capand:"\u2a44",capbrcup:"\u2a49",capcap:"\u2a4b",cap:"\u2229",Cap:"\u22d2",capcup:"\u2a47",capdot:"\u2a40",CapitalDifferentialD:"\u2145",caps:"\u2229\ufe00",caret:"\u2041",caron:"\u02c7",Cayleys:"\u212d",ccaps:"\u2a4d",Ccaron:"\u010c",ccaron:"\u010d",Ccedil:"\xc7",ccedil:"\xe7",Ccirc:"\u0108",ccirc:"\u0109",Cconint:"\u2230",ccups:"\u2a4c",ccupssm:"\u2a50",Cdot:"\u010a",cdot:"\u010b",cedil:"\xb8",Cedilla:"\xb8",cemptyv:"\u29b2",cent:"\xa2",centerdot:"\xb7",CenterDot:"\xb7",cfr:"\ud835\udd20",Cfr:"\u212d",CHcy:"\u0427",chcy:"\u0447",check:"\u2713",checkmark:"\u2713",Chi:"\u03a7",chi:"\u03c7",circ:"\u02c6",circeq:"\u2257",circlearrowleft:"\u21ba",circlearrowright:"\u21bb",circledast:"\u229b",circledcirc:"\u229a",circleddash:"\u229d",CircleDot:"\u2299",circledR:"\xae",circledS:"\u24c8",CircleMinus:"\u2296",CirclePlus:"\u2295",CircleTimes:"\u2297",cir:"\u25cb",cirE:"\u29c3",cire:"\u2257",cirfnint:"\u2a10",cirmid:"\u2aef",cirscir:"\u29c2",ClockwiseContourIntegral:"\u2232",CloseCurlyDoubleQuote:"\u201d",CloseCurlyQuote:"\u2019",clubs:"\u2663",clubsuit:"\u2663",colon:":",Colon:"\u2237",Colone:"\u2a74",colone:"\u2254",coloneq:"\u2254",comma:",",commat:"@",comp:"\u2201",compfn:"\u2218",complement:"\u2201",complexes:"\u2102",cong:"\u2245",congdot:"\u2a6d",Congruent:"\u2261",conint:"\u222e",Conint:"\u222f",ContourIntegral:"\u222e",copf:"\ud835\udd54",Copf:"\u2102",coprod:"\u2210",Coproduct:"\u2210",copy:"\xa9",COPY:"\xa9",copysr:"\u2117",CounterClockwiseContourIntegral:"\u2233",crarr:"\u21b5",cross:"\u2717",Cross:"\u2a2f",Cscr:"\ud835\udc9e",cscr:"\ud835\udcb8",csub:"\u2acf",csube:"\u2ad1",csup:"\u2ad0",csupe:"\u2ad2",ctdot:"\u22ef",cudarrl:"\u2938",cudarrr:"\u2935",cuepr:"\u22de",cuesc:"\u22df",cularr:"\u21b6",cularrp:"\u293d",cupbrcap:"\u2a48",cupcap:"\u2a46",CupCap:"\u224d",cup:"\u222a",Cup:"\u22d3",cupcup:"\u2a4a",cupdot:"\u228d",cupor:"\u2a45",cups:"\u222a\ufe00",curarr:"\u21b7",curarrm:"\u293c",curlyeqprec:"\u22de",curlyeqsucc:"\u22df",curlyvee:"\u22ce",curlywedge:"\u22cf",curren:"\xa4",curvearrowleft:"\u21b6",curvearrowright:"\u21b7",cuvee:"\u22ce",cuwed:"\u22cf",cwconint:"\u2232",cwint:"\u2231",cylcty:"\u232d",dagger:"\u2020",Dagger:"\u2021",daleth:"\u2138",darr:"\u2193",Darr:"\u21a1",dArr:"\u21d3",dash:"\u2010",Dashv:"\u2ae4",dashv:"\u22a3",dbkarow:"\u290f",dblac:"\u02dd",Dcaron:"\u010e",dcaron:"\u010f",Dcy:"\u0414",dcy:"\u0434",ddagger:"\u2021",ddarr:"\u21ca",DD:"\u2145",dd:"\u2146",DDotrahd:"\u2911",ddotseq:"\u2a77",deg:"\xb0",Del:"\u2207",Delta:"\u0394",delta:"\u03b4",demptyv:"\u29b1",dfisht:"\u297f",Dfr:"\ud835\udd07",dfr:"\ud835\udd21",dHar:"\u2965",dharl:"\u21c3",dharr:"\u21c2",DiacriticalAcute:"\xb4",DiacriticalDot:"\u02d9",DiacriticalDoubleAcute:"\u02dd",DiacriticalGrave:"`",DiacriticalTilde:"\u02dc",diam:"\u22c4",diamond:"\u22c4",Diamond:"\u22c4",diamondsuit:"\u2666",diams:"\u2666",die:"\xa8",DifferentialD:"\u2146",digamma:"\u03dd",disin:"\u22f2",div:"\xf7",divide:"\xf7",divideontimes:"\u22c7",divonx:"\u22c7",DJcy:"\u0402",djcy:"\u0452",dlcorn:"\u231e",dlcrop:"\u230d",dollar:"$",Dopf:"\ud835\udd3b",dopf:"\ud835\udd55",Dot:"\xa8",dot:"\u02d9",DotDot:"\u20dc",doteq:"\u2250",doteqdot:"\u2251",DotEqual:"\u2250",dotminus:"\u2238",dotplus:"\u2214",dotsquare:"\u22a1",doublebarwedge:"\u2306",DoubleContourIntegral:"\u222f",DoubleDot:"\xa8",DoubleDownArrow:"\u21d3",DoubleLeftArrow:"\u21d0",DoubleLeftRightArrow:"\u21d4",DoubleLeftTee:"\u2ae4",DoubleLongLeftArrow:"\u27f8",DoubleLongLeftRightArrow:"\u27fa",DoubleLongRightArrow:"\u27f9",DoubleRightArrow:"\u21d2",DoubleRightTee:"\u22a8",DoubleUpArrow:"\u21d1",DoubleUpDownArrow:"\u21d5",DoubleVerticalBar:"\u2225",DownArrowBar:"\u2913",downarrow:"\u2193",DownArrow:"\u2193",Downarrow:"\u21d3",DownArrowUpArrow:"\u21f5",DownBreve:"\u0311",downdownarrows:"\u21ca",downharpoonleft:"\u21c3",downharpoonright:"\u21c2",DownLeftRightVector:"\u2950",DownLeftTeeVector:"\u295e",DownLeftVectorBar:"\u2956",DownLeftVector:"\u21bd",DownRightTeeVector:"\u295f",DownRightVectorBar:"\u2957",DownRightVector:"\u21c1",DownTeeArrow:"\u21a7",DownTee:"\u22a4",drbkarow:"\u2910",drcorn:"\u231f",drcrop:"\u230c",Dscr:"\ud835\udc9f",dscr:"\ud835\udcb9",DScy:"\u0405",dscy:"\u0455",dsol:"\u29f6",Dstrok:"\u0110",dstrok:"\u0111",dtdot:"\u22f1",dtri:"\u25bf",dtrif:"\u25be",duarr:"\u21f5",duhar:"\u296f",dwangle:"\u29a6",DZcy:"\u040f",dzcy:"\u045f",dzigrarr:"\u27ff",Eacute:"\xc9",eacute:"\xe9",easter:"\u2a6e",Ecaron:"\u011a",ecaron:"\u011b",Ecirc:"\xca",ecirc:"\xea",ecir:"\u2256",ecolon:"\u2255",Ecy:"\u042d",ecy:"\u044d",eDDot:"\u2a77",Edot:"\u0116",edot:"\u0117",eDot:"\u2251",ee:"\u2147",efDot:"\u2252",Efr:"\ud835\udd08",efr:"\ud835\udd22",eg:"\u2a9a",Egrave:"\xc8",egrave:"\xe8",egs:"\u2a96",egsdot:"\u2a98",el:"\u2a99",Element:"\u2208",elinters:"\u23e7",ell:"\u2113",els:"\u2a95",elsdot:"\u2a97",Emacr:"\u0112",emacr:"\u0113",empty:"\u2205",emptyset:"\u2205",EmptySmallSquare:"\u25fb",emptyv:"\u2205",EmptyVerySmallSquare:"\u25ab",emsp13:"\u2004",emsp14:"\u2005",emsp:"\u2003",ENG:"\u014a",eng:"\u014b",ensp:"\u2002",Eogon:"\u0118",eogon:"\u0119",Eopf:"\ud835\udd3c",eopf:"\ud835\udd56",epar:"\u22d5",eparsl:"\u29e3",eplus:"\u2a71",epsi:"\u03b5",Epsilon:"\u0395",epsilon:"\u03b5",epsiv:"\u03f5",eqcirc:"\u2256",eqcolon:"\u2255",eqsim:"\u2242",eqslantgtr:"\u2a96",eqslantless:"\u2a95",Equal:"\u2a75",equals:"=",EqualTilde:"\u2242",equest:"\u225f",Equilibrium:"\u21cc",equiv:"\u2261",equivDD:"\u2a78",eqvparsl:"\u29e5",erarr:"\u2971",erDot:"\u2253",escr:"\u212f",Escr:"\u2130",esdot:"\u2250",Esim:"\u2a73",esim:"\u2242",Eta:"\u0397",eta:"\u03b7",ETH:"\xd0",eth:"\xf0",Euml:"\xcb",euml:"\xeb",euro:"\u20ac",excl:"!",exist:"\u2203",Exists:"\u2203",expectation:"\u2130",exponentiale:"\u2147",ExponentialE:"\u2147",fallingdotseq:"\u2252",Fcy:"\u0424",fcy:"\u0444",female:"\u2640",ffilig:"\ufb03",fflig:"\ufb00",ffllig:"\ufb04",Ffr:"\ud835\udd09",ffr:"\ud835\udd23",filig:"\ufb01",FilledSmallSquare:"\u25fc",FilledVerySmallSquare:"\u25aa",fjlig:"fj",flat:"\u266d",fllig:"\ufb02",fltns:"\u25b1",fnof:"\u0192",Fopf:"\ud835\udd3d",fopf:"\ud835\udd57",forall:"\u2200",ForAll:"\u2200",fork:"\u22d4",forkv:"\u2ad9",Fouriertrf:"\u2131",fpartint:"\u2a0d",frac12:"\xbd",frac13:"\u2153",frac14:"\xbc",frac15:"\u2155",frac16:"\u2159",frac18:"\u215b",frac23:"\u2154",frac25:"\u2156",frac34:"\xbe",frac35:"\u2157",frac38:"\u215c",frac45:"\u2158",frac56:"\u215a",frac58:"\u215d",frac78:"\u215e",frasl:"\u2044",frown:"\u2322",fscr:"\ud835\udcbb",Fscr:"\u2131",gacute:"\u01f5",Gamma:"\u0393",gamma:"\u03b3",Gammad:"\u03dc",gammad:"\u03dd",gap:"\u2a86",Gbreve:"\u011e",gbreve:"\u011f",Gcedil:"\u0122",Gcirc:"\u011c",gcirc:"\u011d",Gcy:"\u0413",gcy:"\u0433",Gdot:"\u0120",gdot:"\u0121",ge:"\u2265",gE:"\u2267",gEl:"\u2a8c",gel:"\u22db",geq:"\u2265",geqq:"\u2267",geqslant:"\u2a7e",gescc:"\u2aa9",ges:"\u2a7e",gesdot:"\u2a80",gesdoto:"\u2a82",gesdotol:"\u2a84",gesl:"\u22db\ufe00",gesles:"\u2a94",Gfr:"\ud835\udd0a",gfr:"\ud835\udd24",gg:"\u226b",Gg:"\u22d9",ggg:"\u22d9",gimel:"\u2137",GJcy:"\u0403",gjcy:"\u0453",gla:"\u2aa5",gl:"\u2277",glE:"\u2a92",glj:"\u2aa4",gnap:"\u2a8a",gnapprox:"\u2a8a",gne:"\u2a88",gnE:"\u2269",gneq:"\u2a88",gneqq:"\u2269",gnsim:"\u22e7",Gopf:"\ud835\udd3e",gopf:"\ud835\udd58",grave:"`",GreaterEqual:"\u2265",GreaterEqualLess:"\u22db",GreaterFullEqual:"\u2267",GreaterGreater:"\u2aa2",GreaterLess:"\u2277",GreaterSlantEqual:"\u2a7e",GreaterTilde:"\u2273",Gscr:"\ud835\udca2",gscr:"\u210a",gsim:"\u2273",gsime:"\u2a8e",gsiml:"\u2a90",gtcc:"\u2aa7",gtcir:"\u2a7a",gt:">",GT:">",Gt:"\u226b",gtdot:"\u22d7",gtlPar:"\u2995",gtquest:"\u2a7c",gtrapprox:"\u2a86",gtrarr:"\u2978",gtrdot:"\u22d7",gtreqless:"\u22db",gtreqqless:"\u2a8c",gtrless:"\u2277",gtrsim:"\u2273",gvertneqq:"\u2269\ufe00",gvnE:"\u2269\ufe00",Hacek:"\u02c7",hairsp:"\u200a",half:"\xbd",hamilt:"\u210b",HARDcy:"\u042a",hardcy:"\u044a",harrcir:"\u2948",harr:"\u2194",hArr:"\u21d4",harrw:"\u21ad",Hat:"^",hbar:"\u210f",Hcirc:"\u0124",hcirc:"\u0125",hearts:"\u2665",heartsuit:"\u2665",hellip:"\u2026",hercon:"\u22b9",hfr:"\ud835\udd25",Hfr:"\u210c",HilbertSpace:"\u210b",hksearow:"\u2925",hkswarow:"\u2926",hoarr:"\u21ff",homtht:"\u223b",hookleftarrow:"\u21a9",hookrightarrow:"\u21aa",hopf:"\ud835\udd59",Hopf:"\u210d",horbar:"\u2015",HorizontalLine:"\u2500",hscr:"\ud835\udcbd",Hscr:"\u210b",
hslash:"\u210f",Hstrok:"\u0126",hstrok:"\u0127",HumpDownHump:"\u224e",HumpEqual:"\u224f",hybull:"\u2043",hyphen:"\u2010",Iacute:"\xcd",iacute:"\xed",ic:"\u2063",Icirc:"\xce",icirc:"\xee",Icy:"\u0418",icy:"\u0438",Idot:"\u0130",IEcy:"\u0415",iecy:"\u0435",iexcl:"\xa1",iff:"\u21d4",ifr:"\ud835\udd26",Ifr:"\u2111",Igrave:"\xcc",igrave:"\xec",ii:"\u2148",iiiint:"\u2a0c",iiint:"\u222d",iinfin:"\u29dc",iiota:"\u2129",IJlig:"\u0132",ijlig:"\u0133",Imacr:"\u012a",imacr:"\u012b",image:"\u2111",ImaginaryI:"\u2148",imagline:"\u2110",imagpart:"\u2111",imath:"\u0131",Im:"\u2111",imof:"\u22b7",imped:"\u01b5",Implies:"\u21d2",incare:"\u2105","in":"\u2208",infin:"\u221e",infintie:"\u29dd",inodot:"\u0131",intcal:"\u22ba","int":"\u222b",Int:"\u222c",integers:"\u2124",Integral:"\u222b",intercal:"\u22ba",Intersection:"\u22c2",intlarhk:"\u2a17",intprod:"\u2a3c",InvisibleComma:"\u2063",InvisibleTimes:"\u2062",IOcy:"\u0401",iocy:"\u0451",Iogon:"\u012e",iogon:"\u012f",Iopf:"\ud835\udd40",iopf:"\ud835\udd5a",Iota:"\u0399",iota:"\u03b9",iprod:"\u2a3c",iquest:"\xbf",iscr:"\ud835\udcbe",Iscr:"\u2110",isin:"\u2208",isindot:"\u22f5",isinE:"\u22f9",isins:"\u22f4",isinsv:"\u22f3",isinv:"\u2208",it:"\u2062",Itilde:"\u0128",itilde:"\u0129",Iukcy:"\u0406",iukcy:"\u0456",Iuml:"\xcf",iuml:"\xef",Jcirc:"\u0134",jcirc:"\u0135",Jcy:"\u0419",jcy:"\u0439",Jfr:"\ud835\udd0d",jfr:"\ud835\udd27",jmath:"\u0237",Jopf:"\ud835\udd41",jopf:"\ud835\udd5b",Jscr:"\ud835\udca5",jscr:"\ud835\udcbf",Jsercy:"\u0408",jsercy:"\u0458",Jukcy:"\u0404",jukcy:"\u0454",Kappa:"\u039a",kappa:"\u03ba",kappav:"\u03f0",Kcedil:"\u0136",kcedil:"\u0137",Kcy:"\u041a",kcy:"\u043a",Kfr:"\ud835\udd0e",kfr:"\ud835\udd28",kgreen:"\u0138",KHcy:"\u0425",khcy:"\u0445",KJcy:"\u040c",kjcy:"\u045c",Kopf:"\ud835\udd42",kopf:"\ud835\udd5c",Kscr:"\ud835\udca6",kscr:"\ud835\udcc0",lAarr:"\u21da",Lacute:"\u0139",lacute:"\u013a",laemptyv:"\u29b4",lagran:"\u2112",Lambda:"\u039b",lambda:"\u03bb",lang:"\u27e8",Lang:"\u27ea",langd:"\u2991",langle:"\u27e8",lap:"\u2a85",Laplacetrf:"\u2112",laquo:"\xab",larrb:"\u21e4",larrbfs:"\u291f",larr:"\u2190",Larr:"\u219e",lArr:"\u21d0",larrfs:"\u291d",larrhk:"\u21a9",larrlp:"\u21ab",larrpl:"\u2939",larrsim:"\u2973",larrtl:"\u21a2",latail:"\u2919",lAtail:"\u291b",lat:"\u2aab",late:"\u2aad",lates:"\u2aad\ufe00",lbarr:"\u290c",lBarr:"\u290e",lbbrk:"\u2772",lbrace:"{",lbrack:"[",lbrke:"\u298b",lbrksld:"\u298f",lbrkslu:"\u298d",Lcaron:"\u013d",lcaron:"\u013e",Lcedil:"\u013b",lcedil:"\u013c",lceil:"\u2308",lcub:"{",Lcy:"\u041b",lcy:"\u043b",ldca:"\u2936",ldquo:"\u201c",ldquor:"\u201e",ldrdhar:"\u2967",ldrushar:"\u294b",ldsh:"\u21b2",le:"\u2264",lE:"\u2266",LeftAngleBracket:"\u27e8",LeftArrowBar:"\u21e4",leftarrow:"\u2190",LeftArrow:"\u2190",Leftarrow:"\u21d0",LeftArrowRightArrow:"\u21c6",leftarrowtail:"\u21a2",LeftCeiling:"\u2308",LeftDoubleBracket:"\u27e6",LeftDownTeeVector:"\u2961",LeftDownVectorBar:"\u2959",LeftDownVector:"\u21c3",LeftFloor:"\u230a",leftharpoondown:"\u21bd",leftharpoonup:"\u21bc",leftleftarrows:"\u21c7",leftrightarrow:"\u2194",LeftRightArrow:"\u2194",Leftrightarrow:"\u21d4",leftrightarrows:"\u21c6",leftrightharpoons:"\u21cb",leftrightsquigarrow:"\u21ad",LeftRightVector:"\u294e",LeftTeeArrow:"\u21a4",LeftTee:"\u22a3",LeftTeeVector:"\u295a",leftthreetimes:"\u22cb",LeftTriangleBar:"\u29cf",LeftTriangle:"\u22b2",LeftTriangleEqual:"\u22b4",LeftUpDownVector:"\u2951",LeftUpTeeVector:"\u2960",LeftUpVectorBar:"\u2958",LeftUpVector:"\u21bf",LeftVectorBar:"\u2952",LeftVector:"\u21bc",lEg:"\u2a8b",leg:"\u22da",leq:"\u2264",leqq:"\u2266",leqslant:"\u2a7d",lescc:"\u2aa8",les:"\u2a7d",lesdot:"\u2a7f",lesdoto:"\u2a81",lesdotor:"\u2a83",lesg:"\u22da\ufe00",lesges:"\u2a93",lessapprox:"\u2a85",lessdot:"\u22d6",lesseqgtr:"\u22da",lesseqqgtr:"\u2a8b",LessEqualGreater:"\u22da",LessFullEqual:"\u2266",LessGreater:"\u2276",lessgtr:"\u2276",LessLess:"\u2aa1",lesssim:"\u2272",LessSlantEqual:"\u2a7d",LessTilde:"\u2272",lfisht:"\u297c",lfloor:"\u230a",Lfr:"\ud835\udd0f",lfr:"\ud835\udd29",lg:"\u2276",lgE:"\u2a91",lHar:"\u2962",lhard:"\u21bd",lharu:"\u21bc",lharul:"\u296a",lhblk:"\u2584",LJcy:"\u0409",ljcy:"\u0459",llarr:"\u21c7",ll:"\u226a",Ll:"\u22d8",llcorner:"\u231e",Lleftarrow:"\u21da",llhard:"\u296b",lltri:"\u25fa",Lmidot:"\u013f",lmidot:"\u0140",lmoustache:"\u23b0",lmoust:"\u23b0",lnap:"\u2a89",lnapprox:"\u2a89",lne:"\u2a87",lnE:"\u2268",lneq:"\u2a87",lneqq:"\u2268",lnsim:"\u22e6",loang:"\u27ec",loarr:"\u21fd",lobrk:"\u27e6",longleftarrow:"\u27f5",LongLeftArrow:"\u27f5",Longleftarrow:"\u27f8",longleftrightarrow:"\u27f7",LongLeftRightArrow:"\u27f7",Longleftrightarrow:"\u27fa",longmapsto:"\u27fc",longrightarrow:"\u27f6",LongRightArrow:"\u27f6",Longrightarrow:"\u27f9",looparrowleft:"\u21ab",looparrowright:"\u21ac",lopar:"\u2985",Lopf:"\ud835\udd43",lopf:"\ud835\udd5d",loplus:"\u2a2d",lotimes:"\u2a34",lowast:"\u2217",lowbar:"_",LowerLeftArrow:"\u2199",LowerRightArrow:"\u2198",loz:"\u25ca",lozenge:"\u25ca",lozf:"\u29eb",lpar:"(",lparlt:"\u2993",lrarr:"\u21c6",lrcorner:"\u231f",lrhar:"\u21cb",lrhard:"\u296d",lrm:"\u200e",lrtri:"\u22bf",lsaquo:"\u2039",lscr:"\ud835\udcc1",Lscr:"\u2112",lsh:"\u21b0",Lsh:"\u21b0",lsim:"\u2272",lsime:"\u2a8d",lsimg:"\u2a8f",lsqb:"[",lsquo:"\u2018",lsquor:"\u201a",Lstrok:"\u0141",lstrok:"\u0142",ltcc:"\u2aa6",ltcir:"\u2a79",lt:"<",LT:"<",Lt:"\u226a",ltdot:"\u22d6",lthree:"\u22cb",ltimes:"\u22c9",ltlarr:"\u2976",ltquest:"\u2a7b",ltri:"\u25c3",ltrie:"\u22b4",ltrif:"\u25c2",ltrPar:"\u2996",lurdshar:"\u294a",luruhar:"\u2966",lvertneqq:"\u2268\ufe00",lvnE:"\u2268\ufe00",macr:"\xaf",male:"\u2642",malt:"\u2720",maltese:"\u2720",Map:"\u2905",map:"\u21a6",mapsto:"\u21a6",mapstodown:"\u21a7",mapstoleft:"\u21a4",mapstoup:"\u21a5",marker:"\u25ae",mcomma:"\u2a29",Mcy:"\u041c",mcy:"\u043c",mdash:"\u2014",mDDot:"\u223a",measuredangle:"\u2221",MediumSpace:"\u205f",Mellintrf:"\u2133",Mfr:"\ud835\udd10",mfr:"\ud835\udd2a",mho:"\u2127",micro:"\xb5",midast:"*",midcir:"\u2af0",mid:"\u2223",middot:"\xb7",minusb:"\u229f",minus:"\u2212",minusd:"\u2238",minusdu:"\u2a2a",MinusPlus:"\u2213",mlcp:"\u2adb",mldr:"\u2026",mnplus:"\u2213",models:"\u22a7",Mopf:"\ud835\udd44",mopf:"\ud835\udd5e",mp:"\u2213",mscr:"\ud835\udcc2",Mscr:"\u2133",mstpos:"\u223e",Mu:"\u039c",mu:"\u03bc",multimap:"\u22b8",mumap:"\u22b8",nabla:"\u2207",Nacute:"\u0143",nacute:"\u0144",nang:"\u2220\u20d2",nap:"\u2249",napE:"\u2a70\u0338",napid:"\u224b\u0338",napos:"\u0149",napprox:"\u2249",natural:"\u266e",naturals:"\u2115",natur:"\u266e",nbsp:"\xa0",nbump:"\u224e\u0338",nbumpe:"\u224f\u0338",ncap:"\u2a43",Ncaron:"\u0147",ncaron:"\u0148",Ncedil:"\u0145",ncedil:"\u0146",ncong:"\u2247",ncongdot:"\u2a6d\u0338",ncup:"\u2a42",Ncy:"\u041d",ncy:"\u043d",ndash:"\u2013",nearhk:"\u2924",nearr:"\u2197",neArr:"\u21d7",nearrow:"\u2197",ne:"\u2260",nedot:"\u2250\u0338",NegativeMediumSpace:"\u200b",NegativeThickSpace:"\u200b",NegativeThinSpace:"\u200b",NegativeVeryThinSpace:"\u200b",nequiv:"\u2262",nesear:"\u2928",nesim:"\u2242\u0338",NestedGreaterGreater:"\u226b",NestedLessLess:"\u226a",NewLine:"\n",nexist:"\u2204",nexists:"\u2204",Nfr:"\ud835\udd11",nfr:"\ud835\udd2b",ngE:"\u2267\u0338",nge:"\u2271",ngeq:"\u2271",ngeqq:"\u2267\u0338",ngeqslant:"\u2a7e\u0338",nges:"\u2a7e\u0338",nGg:"\u22d9\u0338",ngsim:"\u2275",nGt:"\u226b\u20d2",ngt:"\u226f",ngtr:"\u226f",nGtv:"\u226b\u0338",nharr:"\u21ae",nhArr:"\u21ce",nhpar:"\u2af2",ni:"\u220b",nis:"\u22fc",nisd:"\u22fa",niv:"\u220b",NJcy:"\u040a",njcy:"\u045a",nlarr:"\u219a",nlArr:"\u21cd",nldr:"\u2025",nlE:"\u2266\u0338",nle:"\u2270",nleftarrow:"\u219a",nLeftarrow:"\u21cd",nleftrightarrow:"\u21ae",nLeftrightarrow:"\u21ce",nleq:"\u2270",nleqq:"\u2266\u0338",nleqslant:"\u2a7d\u0338",nles:"\u2a7d\u0338",nless:"\u226e",nLl:"\u22d8\u0338",nlsim:"\u2274",nLt:"\u226a\u20d2",nlt:"\u226e",nltri:"\u22ea",nltrie:"\u22ec",nLtv:"\u226a\u0338",nmid:"\u2224",NoBreak:"\u2060",NonBreakingSpace:"\xa0",nopf:"\ud835\udd5f",Nopf:"\u2115",Not:"\u2aec",not:"\xac",NotCongruent:"\u2262",NotCupCap:"\u226d",NotDoubleVerticalBar:"\u2226",NotElement:"\u2209",NotEqual:"\u2260",NotEqualTilde:"\u2242\u0338",NotExists:"\u2204",NotGreater:"\u226f",NotGreaterEqual:"\u2271",NotGreaterFullEqual:"\u2267\u0338",NotGreaterGreater:"\u226b\u0338",NotGreaterLess:"\u2279",NotGreaterSlantEqual:"\u2a7e\u0338",NotGreaterTilde:"\u2275",NotHumpDownHump:"\u224e\u0338",NotHumpEqual:"\u224f\u0338",notin:"\u2209",notindot:"\u22f5\u0338",notinE:"\u22f9\u0338",notinva:"\u2209",notinvb:"\u22f7",notinvc:"\u22f6",NotLeftTriangleBar:"\u29cf\u0338",NotLeftTriangle:"\u22ea",NotLeftTriangleEqual:"\u22ec",NotLess:"\u226e",NotLessEqual:"\u2270",NotLessGreater:"\u2278",NotLessLess:"\u226a\u0338",NotLessSlantEqual:"\u2a7d\u0338",NotLessTilde:"\u2274",NotNestedGreaterGreater:"\u2aa2\u0338",NotNestedLessLess:"\u2aa1\u0338",notni:"\u220c",notniva:"\u220c",notnivb:"\u22fe",notnivc:"\u22fd",NotPrecedes:"\u2280",NotPrecedesEqual:"\u2aaf\u0338",NotPrecedesSlantEqual:"\u22e0",NotReverseElement:"\u220c",NotRightTriangleBar:"\u29d0\u0338",NotRightTriangle:"\u22eb",NotRightTriangleEqual:"\u22ed",NotSquareSubset:"\u228f\u0338",NotSquareSubsetEqual:"\u22e2",NotSquareSuperset:"\u2290\u0338",NotSquareSupersetEqual:"\u22e3",NotSubset:"\u2282\u20d2",NotSubsetEqual:"\u2288",NotSucceeds:"\u2281",NotSucceedsEqual:"\u2ab0\u0338",NotSucceedsSlantEqual:"\u22e1",NotSucceedsTilde:"\u227f\u0338",NotSuperset:"\u2283\u20d2",NotSupersetEqual:"\u2289",NotTilde:"\u2241",NotTildeEqual:"\u2244",NotTildeFullEqual:"\u2247",NotTildeTilde:"\u2249",NotVerticalBar:"\u2224",nparallel:"\u2226",npar:"\u2226",nparsl:"\u2afd\u20e5",npart:"\u2202\u0338",npolint:"\u2a14",npr:"\u2280",nprcue:"\u22e0",nprec:"\u2280",npreceq:"\u2aaf\u0338",npre:"\u2aaf\u0338",nrarrc:"\u2933\u0338",nrarr:"\u219b",nrArr:"\u21cf",nrarrw:"\u219d\u0338",nrightarrow:"\u219b",nRightarrow:"\u21cf",nrtri:"\u22eb",nrtrie:"\u22ed",nsc:"\u2281",nsccue:"\u22e1",nsce:"\u2ab0\u0338",Nscr:"\ud835\udca9",nscr:"\ud835\udcc3",nshortmid:"\u2224",nshortparallel:"\u2226",nsim:"\u2241",nsime:"\u2244",nsimeq:"\u2244",nsmid:"\u2224",nspar:"\u2226",nsqsube:"\u22e2",nsqsupe:"\u22e3",nsub:"\u2284",nsubE:"\u2ac5\u0338",nsube:"\u2288",nsubset:"\u2282\u20d2",nsubseteq:"\u2288",nsubseteqq:"\u2ac5\u0338",nsucc:"\u2281",nsucceq:"\u2ab0\u0338",nsup:"\u2285",nsupE:"\u2ac6\u0338",nsupe:"\u2289",nsupset:"\u2283\u20d2",nsupseteq:"\u2289",nsupseteqq:"\u2ac6\u0338",ntgl:"\u2279",Ntilde:"\xd1",ntilde:"\xf1",ntlg:"\u2278",ntriangleleft:"\u22ea",ntrianglelefteq:"\u22ec",ntriangleright:"\u22eb",ntrianglerighteq:"\u22ed",Nu:"\u039d",nu:"\u03bd",num:"#",numero:"\u2116",numsp:"\u2007",nvap:"\u224d\u20d2",nvdash:"\u22ac",nvDash:"\u22ad",nVdash:"\u22ae",nVDash:"\u22af",nvge:"\u2265\u20d2",nvgt:">\u20d2",nvHarr:"\u2904",nvinfin:"\u29de",nvlArr:"\u2902",nvle:"\u2264\u20d2",nvlt:"<\u20d2",nvltrie:"\u22b4\u20d2",nvrArr:"\u2903",nvrtrie:"\u22b5\u20d2",nvsim:"\u223c\u20d2",nwarhk:"\u2923",nwarr:"\u2196",nwArr:"\u21d6",nwarrow:"\u2196",nwnear:"\u2927",Oacute:"\xd3",oacute:"\xf3",oast:"\u229b",Ocirc:"\xd4",ocirc:"\xf4",ocir:"\u229a",Ocy:"\u041e",ocy:"\u043e",odash:"\u229d",Odblac:"\u0150",odblac:"\u0151",odiv:"\u2a38",odot:"\u2299",odsold:"\u29bc",OElig:"\u0152",oelig:"\u0153",ofcir:"\u29bf",Ofr:"\ud835\udd12",ofr:"\ud835\udd2c",ogon:"\u02db",Ograve:"\xd2",ograve:"\xf2",ogt:"\u29c1",ohbar:"\u29b5",ohm:"\u03a9",oint:"\u222e",olarr:"\u21ba",olcir:"\u29be",olcross:"\u29bb",oline:"\u203e",olt:"\u29c0",Omacr:"\u014c",omacr:"\u014d",Omega:"\u03a9",omega:"\u03c9",Omicron:"\u039f",omicron:"\u03bf",omid:"\u29b6",ominus:"\u2296",Oopf:"\ud835\udd46",oopf:"\ud835\udd60",opar:"\u29b7",OpenCurlyDoubleQuote:"\u201c",OpenCurlyQuote:"\u2018",operp:"\u29b9",oplus:"\u2295",orarr:"\u21bb",Or:"\u2a54",or:"\u2228",ord:"\u2a5d",order:"\u2134",orderof:"\u2134",ordf:"\xaa",ordm:"\xba",origof:"\u22b6",oror:"\u2a56",orslope:"\u2a57",orv:"\u2a5b",oS:"\u24c8",Oscr:"\ud835\udcaa",oscr:"\u2134",Oslash:"\xd8",oslash:"\xf8",osol:"\u2298",Otilde:"\xd5",otilde:"\xf5",otimesas:"\u2a36",Otimes:"\u2a37",otimes:"\u2297",Ouml:"\xd6",ouml:"\xf6",ovbar:"\u233d",OverBar:"\u203e",OverBrace:"\u23de",OverBracket:"\u23b4",OverParenthesis:"\u23dc",para:"\xb6",parallel:"\u2225",par:"\u2225",parsim:"\u2af3",parsl:"\u2afd",part:"\u2202",PartialD:"\u2202",Pcy:"\u041f",pcy:"\u043f",percnt:"%",period:".",permil:"\u2030",perp:"\u22a5",pertenk:"\u2031",Pfr:"\ud835\udd13",pfr:"\ud835\udd2d",Phi:"\u03a6",phi:"\u03c6",phiv:"\u03d5",phmmat:"\u2133",phone:"\u260e",Pi:"\u03a0",pi:"\u03c0",pitchfork:"\u22d4",piv:"\u03d6",planck:"\u210f",planckh:"\u210e",plankv:"\u210f",plusacir:"\u2a23",plusb:"\u229e",pluscir:"\u2a22",plus:"+",plusdo:"\u2214",plusdu:"\u2a25",pluse:"\u2a72",PlusMinus:"\xb1",plusmn:"\xb1",plussim:"\u2a26",plustwo:"\u2a27",pm:"\xb1",Poincareplane:"\u210c",pointint:"\u2a15",popf:"\ud835\udd61",Popf:"\u2119",pound:"\xa3",prap:"\u2ab7",Pr:"\u2abb",pr:"\u227a",prcue:"\u227c",precapprox:"\u2ab7",prec:"\u227a",preccurlyeq:"\u227c",Precedes:"\u227a",PrecedesEqual:"\u2aaf",PrecedesSlantEqual:"\u227c",PrecedesTilde:"\u227e",preceq:"\u2aaf",precnapprox:"\u2ab9",precneqq:"\u2ab5",precnsim:"\u22e8",pre:"\u2aaf",prE:"\u2ab3",precsim:"\u227e",prime:"\u2032",Prime:"\u2033",primes:"\u2119",prnap:"\u2ab9",prnE:"\u2ab5",prnsim:"\u22e8",prod:"\u220f",Product:"\u220f",profalar:"\u232e",profline:"\u2312",profsurf:"\u2313",prop:"\u221d",Proportional:"\u221d",Proportion:"\u2237",propto:"\u221d",prsim:"\u227e",prurel:"\u22b0",Pscr:"\ud835\udcab",pscr:"\ud835\udcc5",Psi:"\u03a8",psi:"\u03c8",puncsp:"\u2008",Qfr:"\ud835\udd14",qfr:"\ud835\udd2e",qint:"\u2a0c",qopf:"\ud835\udd62",Qopf:"\u211a",qprime:"\u2057",Qscr:"\ud835\udcac",qscr:"\ud835\udcc6",quaternions:"\u210d",quatint:"\u2a16",quest:"?",questeq:"\u225f",quot:'"',QUOT:'"',rAarr:"\u21db",race:"\u223d\u0331",Racute:"\u0154",racute:"\u0155",radic:"\u221a",raemptyv:"\u29b3",rang:"\u27e9",Rang:"\u27eb",rangd:"\u2992",range:"\u29a5",rangle:"\u27e9",raquo:"\xbb",rarrap:"\u2975",rarrb:"\u21e5",rarrbfs:"\u2920",rarrc:"\u2933",rarr:"\u2192",Rarr:"\u21a0",rArr:"\u21d2",rarrfs:"\u291e",rarrhk:"\u21aa",rarrlp:"\u21ac",rarrpl:"\u2945",rarrsim:"\u2974",Rarrtl:"\u2916",rarrtl:"\u21a3",rarrw:"\u219d",ratail:"\u291a",rAtail:"\u291c",ratio:"\u2236",rationals:"\u211a",rbarr:"\u290d",rBarr:"\u290f",RBarr:"\u2910",rbbrk:"\u2773",rbrace:"}",rbrack:"]",rbrke:"\u298c",rbrksld:"\u298e",rbrkslu:"\u2990",Rcaron:"\u0158",rcaron:"\u0159",Rcedil:"\u0156",rcedil:"\u0157",rceil:"\u2309",rcub:"}",Rcy:"\u0420",rcy:"\u0440",rdca:"\u2937",rdldhar:"\u2969",rdquo:"\u201d",rdquor:"\u201d",rdsh:"\u21b3",real:"\u211c",realine:"\u211b",realpart:"\u211c",reals:"\u211d",Re:"\u211c",rect:"\u25ad",reg:"\xae",REG:"\xae",ReverseElement:"\u220b",ReverseEquilibrium:"\u21cb",ReverseUpEquilibrium:"\u296f",rfisht:"\u297d",rfloor:"\u230b",rfr:"\ud835\udd2f",Rfr:"\u211c",rHar:"\u2964",rhard:"\u21c1",rharu:"\u21c0",rharul:"\u296c",Rho:"\u03a1",rho:"\u03c1",rhov:"\u03f1",RightAngleBracket:"\u27e9",RightArrowBar:"\u21e5",rightarrow:"\u2192",RightArrow:"\u2192",Rightarrow:"\u21d2",RightArrowLeftArrow:"\u21c4",rightarrowtail:"\u21a3",RightCeiling:"\u2309",RightDoubleBracket:"\u27e7",RightDownTeeVector:"\u295d",RightDownVectorBar:"\u2955",RightDownVector:"\u21c2",RightFloor:"\u230b",rightharpoondown:"\u21c1",rightharpoonup:"\u21c0",rightleftarrows:"\u21c4",rightleftharpoons:"\u21cc",rightrightarrows:"\u21c9",rightsquigarrow:"\u219d",RightTeeArrow:"\u21a6",RightTee:"\u22a2",RightTeeVector:"\u295b",rightthreetimes:"\u22cc",RightTriangleBar:"\u29d0",RightTriangle:"\u22b3",RightTriangleEqual:"\u22b5",RightUpDownVector:"\u294f",RightUpTeeVector:"\u295c",RightUpVectorBar:"\u2954",RightUpVector:"\u21be",RightVectorBar:"\u2953",RightVector:"\u21c0",ring:"\u02da",risingdotseq:"\u2253",rlarr:"\u21c4",rlhar:"\u21cc",rlm:"\u200f",rmoustache:"\u23b1",rmoust:"\u23b1",rnmid:"\u2aee",roang:"\u27ed",roarr:"\u21fe",robrk:"\u27e7",ropar:"\u2986",ropf:"\ud835\udd63",Ropf:"\u211d",roplus:"\u2a2e",rotimes:"\u2a35",RoundImplies:"\u2970",rpar:")",rpargt:"\u2994",rppolint:"\u2a12",rrarr:"\u21c9",Rrightarrow:"\u21db",rsaquo:"\u203a",rscr:"\ud835\udcc7",Rscr:"\u211b",rsh:"\u21b1",Rsh:"\u21b1",rsqb:"]",rsquo:"\u2019",rsquor:"\u2019",rthree:"\u22cc",rtimes:"\u22ca",rtri:"\u25b9",rtrie:"\u22b5",rtrif:"\u25b8",rtriltri:"\u29ce",RuleDelayed:"\u29f4",ruluhar:"\u2968",rx:"\u211e",Sacute:"\u015a",sacute:"\u015b",sbquo:"\u201a",scap:"\u2ab8",Scaron:"\u0160",scaron:"\u0161",Sc:"\u2abc",sc:"\u227b",sccue:"\u227d",sce:"\u2ab0",scE:"\u2ab4",Scedil:"\u015e",scedil:"\u015f",Scirc:"\u015c",scirc:"\u015d",scnap:"\u2aba",scnE:"\u2ab6",scnsim:"\u22e9",scpolint:"\u2a13",scsim:"\u227f",Scy:"\u0421",scy:"\u0441",sdotb:"\u22a1",sdot:"\u22c5",sdote:"\u2a66",searhk:"\u2925",searr:"\u2198",seArr:"\u21d8",searrow:"\u2198",sect:"\xa7",semi:";",seswar:"\u2929",setminus:"\u2216",setmn:"\u2216",sext:"\u2736",Sfr:"\ud835\udd16",sfr:"\ud835\udd30",sfrown:"\u2322",sharp:"\u266f",SHCHcy:"\u0429",shchcy:"\u0449",SHcy:"\u0428",shcy:"\u0448",ShortDownArrow:"\u2193",ShortLeftArrow:"\u2190",shortmid:"\u2223",shortparallel:"\u2225",ShortRightArrow:"\u2192",ShortUpArrow:"\u2191",shy:"\xad",Sigma:"\u03a3",sigma:"\u03c3",sigmaf:"\u03c2",sigmav:"\u03c2",sim:"\u223c",simdot:"\u2a6a",sime:"\u2243",simeq:"\u2243",simg:"\u2a9e",simgE:"\u2aa0",siml:"\u2a9d",simlE:"\u2a9f",simne:"\u2246",simplus:"\u2a24",simrarr:"\u2972",slarr:"\u2190",SmallCircle:"\u2218",smallsetminus:"\u2216",smashp:"\u2a33",smeparsl:"\u29e4",smid:"\u2223",smile:"\u2323",smt:"\u2aaa",smte:"\u2aac",smtes:"\u2aac\ufe00",SOFTcy:"\u042c",softcy:"\u044c",solbar:"\u233f",solb:"\u29c4",sol:"/",Sopf:"\ud835\udd4a",sopf:"\ud835\udd64",spades:"\u2660",spadesuit:"\u2660",spar:"\u2225",sqcap:"\u2293",sqcaps:"\u2293\ufe00",sqcup:"\u2294",sqcups:"\u2294\ufe00",Sqrt:"\u221a",sqsub:"\u228f",sqsube:"\u2291",sqsubset:"\u228f",sqsubseteq:"\u2291",sqsup:"\u2290",sqsupe:"\u2292",sqsupset:"\u2290",sqsupseteq:"\u2292",square:"\u25a1",Square:"\u25a1",SquareIntersection:"\u2293",SquareSubset:"\u228f",SquareSubsetEqual:"\u2291",SquareSuperset:"\u2290",SquareSupersetEqual:"\u2292",SquareUnion:"\u2294",squarf:"\u25aa",squ:"\u25a1",squf:"\u25aa",srarr:"\u2192",Sscr:"\ud835\udcae",sscr:"\ud835\udcc8",ssetmn:"\u2216",ssmile:"\u2323",sstarf:"\u22c6",Star:"\u22c6",star:"\u2606",starf:"\u2605",straightepsilon:"\u03f5",straightphi:"\u03d5",strns:"\xaf",sub:"\u2282",Sub:"\u22d0",subdot:"\u2abd",subE:"\u2ac5",sube:"\u2286",subedot:"\u2ac3",submult:"\u2ac1",subnE:"\u2acb",subne:"\u228a",subplus:"\u2abf",subrarr:"\u2979",subset:"\u2282",Subset:"\u22d0",subseteq:"\u2286",subseteqq:"\u2ac5",SubsetEqual:"\u2286",subsetneq:"\u228a",subsetneqq:"\u2acb",subsim:"\u2ac7",subsub:"\u2ad5",subsup:"\u2ad3",succapprox:"\u2ab8",succ:"\u227b",succcurlyeq:"\u227d",Succeeds:"\u227b",SucceedsEqual:"\u2ab0",SucceedsSlantEqual:"\u227d",SucceedsTilde:"\u227f",succeq:"\u2ab0",succnapprox:"\u2aba",succneqq:"\u2ab6",succnsim:"\u22e9",succsim:"\u227f",SuchThat:"\u220b",sum:"\u2211",Sum:"\u2211",sung:"\u266a",sup1:"\xb9",sup2:"\xb2",sup3:"\xb3",sup:"\u2283",Sup:"\u22d1",supdot:"\u2abe",supdsub:"\u2ad8",supE:"\u2ac6",supe:"\u2287",supedot:"\u2ac4",Superset:"\u2283",SupersetEqual:"\u2287",suphsol:"\u27c9",suphsub:"\u2ad7",suplarr:"\u297b",supmult:"\u2ac2",supnE:"\u2acc",supne:"\u228b",supplus:"\u2ac0",supset:"\u2283",Supset:"\u22d1",supseteq:"\u2287",supseteqq:"\u2ac6",supsetneq:"\u228b",supsetneqq:"\u2acc",supsim:"\u2ac8",supsub:"\u2ad4",supsup:"\u2ad6",swarhk:"\u2926",swarr:"\u2199",swArr:"\u21d9",swarrow:"\u2199",swnwar:"\u292a",szlig:"\xdf",Tab:"\t",target:"\u2316",Tau:"\u03a4",tau:"\u03c4",tbrk:"\u23b4",Tcaron:"\u0164",tcaron:"\u0165",Tcedil:"\u0162",tcedil:"\u0163",Tcy:"\u0422",tcy:"\u0442",tdot:"\u20db",telrec:"\u2315",Tfr:"\ud835\udd17",tfr:"\ud835\udd31",there4:"\u2234",therefore:"\u2234",Therefore:"\u2234",Theta:"\u0398",theta:"\u03b8",thetasym:"\u03d1",thetav:"\u03d1",thickapprox:"\u2248",thicksim:"\u223c",ThickSpace:"\u205f\u200a",ThinSpace:"\u2009",thinsp:"\u2009",thkap:"\u2248",thksim:"\u223c",THORN:"\xde",thorn:"\xfe",tilde:"\u02dc",Tilde:"\u223c",TildeEqual:"\u2243",TildeFullEqual:"\u2245",TildeTilde:"\u2248",timesbar:"\u2a31",timesb:"\u22a0",times:"\xd7",timesd:"\u2a30",tint:"\u222d",toea:"\u2928",topbot:"\u2336",topcir:"\u2af1",top:"\u22a4",Topf:"\ud835\udd4b",topf:"\ud835\udd65",topfork:"\u2ada",tosa:"\u2929",tprime:"\u2034",trade:"\u2122",TRADE:"\u2122",triangle:"\u25b5",triangledown:"\u25bf",triangleleft:"\u25c3",trianglelefteq:"\u22b4",triangleq:"\u225c",triangleright:"\u25b9",trianglerighteq:"\u22b5",tridot:"\u25ec",trie:"\u225c",triminus:"\u2a3a",TripleDot:"\u20db",triplus:"\u2a39",trisb:"\u29cd",tritime:"\u2a3b",trpezium:"\u23e2",Tscr:"\ud835\udcaf",tscr:"\ud835\udcc9",TScy:"\u0426",tscy:"\u0446",TSHcy:"\u040b",tshcy:"\u045b",Tstrok:"\u0166",tstrok:"\u0167",twixt:"\u226c",twoheadleftarrow:"\u219e",twoheadrightarrow:"\u21a0",Uacute:"\xda",uacute:"\xfa",uarr:"\u2191",Uarr:"\u219f",uArr:"\u21d1",Uarrocir:"\u2949",Ubrcy:"\u040e",ubrcy:"\u045e",Ubreve:"\u016c",ubreve:"\u016d",Ucirc:"\xdb",ucirc:"\xfb",Ucy:"\u0423",ucy:"\u0443",udarr:"\u21c5",Udblac:"\u0170",udblac:"\u0171",udhar:"\u296e",ufisht:"\u297e",Ufr:"\ud835\udd18",ufr:"\ud835\udd32",Ugrave:"\xd9",ugrave:"\xf9",uHar:"\u2963",uharl:"\u21bf",uharr:"\u21be",uhblk:"\u2580",ulcorn:"\u231c",ulcorner:"\u231c",ulcrop:"\u230f",ultri:"\u25f8",Umacr:"\u016a",umacr:"\u016b",uml:"\xa8",UnderBar:"_",UnderBrace:"\u23df",UnderBracket:"\u23b5",UnderParenthesis:"\u23dd",Union:"\u22c3",UnionPlus:"\u228e",Uogon:"\u0172",uogon:"\u0173",Uopf:"\ud835\udd4c",uopf:"\ud835\udd66",UpArrowBar:"\u2912",uparrow:"\u2191",UpArrow:"\u2191",Uparrow:"\u21d1",UpArrowDownArrow:"\u21c5",updownarrow:"\u2195",UpDownArrow:"\u2195",Updownarrow:"\u21d5",UpEquilibrium:"\u296e",upharpoonleft:"\u21bf",upharpoonright:"\u21be",uplus:"\u228e",UpperLeftArrow:"\u2196",UpperRightArrow:"\u2197",upsi:"\u03c5",Upsi:"\u03d2",upsih:"\u03d2",Upsilon:"\u03a5",upsilon:"\u03c5",UpTeeArrow:"\u21a5",UpTee:"\u22a5",upuparrows:"\u21c8",urcorn:"\u231d",urcorner:"\u231d",urcrop:"\u230e",Uring:"\u016e",uring:"\u016f",urtri:"\u25f9",Uscr:"\ud835\udcb0",uscr:"\ud835\udcca",utdot:"\u22f0",Utilde:"\u0168",utilde:"\u0169",utri:"\u25b5",utrif:"\u25b4",uuarr:"\u21c8",Uuml:"\xdc",uuml:"\xfc",uwangle:"\u29a7",vangrt:"\u299c",varepsilon:"\u03f5",varkappa:"\u03f0",varnothing:"\u2205",varphi:"\u03d5",varpi:"\u03d6",varpropto:"\u221d",varr:"\u2195",vArr:"\u21d5",varrho:"\u03f1",varsigma:"\u03c2",varsubsetneq:"\u228a\ufe00",varsubsetneqq:"\u2acb\ufe00",varsupsetneq:"\u228b\ufe00",varsupsetneqq:"\u2acc\ufe00",vartheta:"\u03d1",vartriangleleft:"\u22b2",vartriangleright:"\u22b3",vBar:"\u2ae8",Vbar:"\u2aeb",vBarv:"\u2ae9",Vcy:"\u0412",vcy:"\u0432",vdash:"\u22a2",vDash:"\u22a8",Vdash:"\u22a9",VDash:"\u22ab",Vdashl:"\u2ae6",veebar:"\u22bb",vee:"\u2228",Vee:"\u22c1",veeeq:"\u225a",vellip:"\u22ee",verbar:"|",Verbar:"\u2016",vert:"|",Vert:"\u2016",VerticalBar:"\u2223",VerticalLine:"|",VerticalSeparator:"\u2758",VerticalTilde:"\u2240",VeryThinSpace:"\u200a",Vfr:"\ud835\udd19",vfr:"\ud835\udd33",vltri:"\u22b2",vnsub:"\u2282\u20d2",vnsup:"\u2283\u20d2",Vopf:"\ud835\udd4d",vopf:"\ud835\udd67",vprop:"\u221d",vrtri:"\u22b3",Vscr:"\ud835\udcb1",vscr:"\ud835\udccb",vsubnE:"\u2acb\ufe00",vsubne:"\u228a\ufe00",vsupnE:"\u2acc\ufe00",vsupne:"\u228b\ufe00",Vvdash:"\u22aa",vzigzag:"\u299a",Wcirc:"\u0174",wcirc:"\u0175",wedbar:"\u2a5f",wedge:"\u2227",Wedge:"\u22c0",wedgeq:"\u2259",weierp:"\u2118",Wfr:"\ud835\udd1a",wfr:"\ud835\udd34",Wopf:"\ud835\udd4e",wopf:"\ud835\udd68",wp:"\u2118",wr:"\u2240",wreath:"\u2240",Wscr:"\ud835\udcb2",wscr:"\ud835\udccc",xcap:"\u22c2",xcirc:"\u25ef",xcup:"\u22c3",xdtri:"\u25bd",Xfr:"\ud835\udd1b",xfr:"\ud835\udd35",xharr:"\u27f7",xhArr:"\u27fa",Xi:"\u039e",xi:"\u03be",xlarr:"\u27f5",xlArr:"\u27f8",xmap:"\u27fc",xnis:"\u22fb",xodot:"\u2a00",Xopf:"\ud835\udd4f",xopf:"\ud835\udd69",xoplus:"\u2a01",xotime:"\u2a02",xrarr:"\u27f6",xrArr:"\u27f9",Xscr:"\ud835\udcb3",xscr:"\ud835\udccd",xsqcup:"\u2a06",xuplus:"\u2a04",xutri:"\u25b3",xvee:"\u22c1",xwedge:"\u22c0",Yacute:"\xdd",yacute:"\xfd",YAcy:"\u042f",yacy:"\u044f",Ycirc:"\u0176",ycirc:"\u0177",Ycy:"\u042b",ycy:"\u044b",yen:"\xa5",Yfr:"\ud835\udd1c",yfr:"\ud835\udd36",YIcy:"\u0407",yicy:"\u0457",Yopf:"\ud835\udd50",yopf:"\ud835\udd6a",Yscr:"\ud835\udcb4",yscr:"\ud835\udcce",YUcy:"\u042e",yucy:"\u044e",yuml:"\xff",Yuml:"\u0178",Zacute:"\u0179",zacute:"\u017a",Zcaron:"\u017d",zcaron:"\u017e",Zcy:"\u0417",zcy:"\u0437",Zdot:"\u017b",zdot:"\u017c",zeetrf:"\u2128",ZeroWidthSpace:"\u200b",Zeta:"\u0396",zeta:"\u03b6",zfr:"\ud835\udd37",Zfr:"\u2128",ZHcy:"\u0416",zhcy:"\u0436",zigrarr:"\u21dd",zopf:"\ud835\udd6b",Zopf:"\u2124",Zscr:"\ud835\udcb5",zscr:"\ud835\udccf",zwj:"\u200d",zwnj:"\u200c"}},{}],54:[function(e,r,t){"use strict";function n(e){var r=Array.prototype.slice.call(arguments,1);return r.forEach(function(r){r&&Object.keys(r).forEach(function(t){e[t]=r[t]})}),e}function s(e){return Object.prototype.toString.call(e)}function o(e){return"[object String]"===s(e)}function i(e){return"[object Object]"===s(e)}function a(e){return"[object RegExp]"===s(e)}function c(e){return"[object Function]"===s(e)}function l(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}function u(e){return Object.keys(e||{}).reduce(function(e,r){return e||k.hasOwnProperty(r)},!1)}function p(e){e.__index__=-1,e.__text_cache__=""}function h(e){return function(r,t){var n=r.slice(t);return e.test(n)?n.match(e)[0].length:0}}function f(){return function(e,r){r.normalize(e)}}function d(r){function t(e){return e.replace("%TLDS%",s.src_tlds)}function n(e,r){throw new Error('(LinkifyIt) Invalid schema "'+e+'": '+r)}var s=r.re=e("./lib/re")(r.__opts__),u=r.__tlds__.slice();r.onCompile(),r.__tlds_replaced__||u.push(v),u.push(s.src_xn),s.src_tlds=u.join("|"),s.email_fuzzy=RegExp(t(s.tpl_email_fuzzy),"i"),s.link_fuzzy=RegExp(t(s.tpl_link_fuzzy),"i"),s.link_no_ip_fuzzy=RegExp(t(s.tpl_link_no_ip_fuzzy),"i"),s.host_fuzzy_test=RegExp(t(s.tpl_host_fuzzy_test),"i");var d=[];r.__compiled__={},Object.keys(r.__schemas__).forEach(function(e){var t=r.__schemas__[e];if(null!==t){var s={validate:null,link:null};return r.__compiled__[e]=s,i(t)?(a(t.validate)?s.validate=h(t.validate):c(t.validate)?s.validate=t.validate:n(e,t),void(c(t.normalize)?s.normalize=t.normalize:t.normalize?n(e,t):s.normalize=f())):o(t)?void d.push(e):void n(e,t)}}),d.forEach(function(e){r.__compiled__[r.__schemas__[e]]&&(r.__compiled__[e].validate=r.__compiled__[r.__schemas__[e]].validate,r.__compiled__[e].normalize=r.__compiled__[r.__schemas__[e]].normalize)}),r.__compiled__[""]={validate:null,normalize:f()};var m=Object.keys(r.__compiled__).filter(function(e){return e.length>0&&r.__compiled__[e]}).map(l).join("|");r.re.schema_test=RegExp("(^|(?!_)(?:[><]|"+s.src_ZPCc+"))("+m+")","i"),r.re.schema_search=RegExp("(^|(?!_)(?:[><]|"+s.src_ZPCc+"))("+m+")","ig"),r.re.pretest=RegExp("("+r.re.schema_test.source+")|("+r.re.host_fuzzy_test.source+")|@","i"),p(r)}function m(e,r){var t=e.__index__,n=e.__last_index__,s=e.__text_cache__.slice(t,n);this.schema=e.__schema__.toLowerCase(),this.index=t+r,this.lastIndex=n+r,this.raw=s,this.text=s,this.url=s}function _(e,r){var t=new m(e,r);return e.__compiled__[t.schema].normalize(t,e),t}function g(e,r){return this instanceof g?(r||u(e)&&(r=e,e={}),this.__opts__=n({},k,r),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=n({},b,e),this.__compiled__={},this.__tlds__=x,this.__tlds_replaced__=!1,this.re={},void d(this)):new g(e,r)}var k={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1},b={"http:":{validate:function(e,r,t){var n=e.slice(r);return t.re.http||(t.re.http=new RegExp("^\\/\\/"+t.re.src_auth+t.re.src_host_port_strict+t.re.src_path,"i")),t.re.http.test(n)?n.match(t.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(e,r,t){var n=e.slice(r);return t.re.no_http||(t.re.no_http=new RegExp("^"+t.re.src_auth+"(?:localhost|(?:(?:"+t.re.src_domain+")\\.)+"+t.re.src_domain_root+")"+t.re.src_port+t.re.src_host_terminator+t.re.src_path,"i")),t.re.no_http.test(n)?r>=3&&":"===e[r-3]?0:r>=3&&"/"===e[r-3]?0:n.match(t.re.no_http)[0].length:0}},"mailto:":{validate:function(e,r,t){var n=e.slice(r);return t.re.mailto||(t.re.mailto=new RegExp("^"+t.re.src_email_name+"@"+t.re.src_host_strict,"i")),t.re.mailto.test(n)?n.match(t.re.mailto)[0].length:0}}},v="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",x="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split("|");g.prototype.add=function(e,r){return this.__schemas__[e]=r,d(this),this},g.prototype.set=function(e){return this.__opts__=n(this.__opts__,e),this},g.prototype.test=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return!1;var r,t,n,s,o,i,a,c,l;if(this.re.schema_test.test(e))for(a=this.re.schema_search,a.lastIndex=0;null!==(r=a.exec(e));)if(s=this.testSchemaAt(e,r[2],a.lastIndex)){this.__schema__=r[2],this.__index__=r.index+r[1].length,this.__last_index__=r.index+r[0].length+s;break}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(c=e.search(this.re.host_fuzzy_test),c>=0&&(this.__index__<0||c<this.__index__)&&null!==(t=e.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))&&(o=t.index+t[1].length,(this.__index__<0||o<this.__index__)&&(this.__schema__="",this.__index__=o,this.__last_index__=t.index+t[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(l=e.indexOf("@"),l>=0&&null!==(n=e.match(this.re.email_fuzzy))&&(o=n.index+n[1].length,i=n.index+n[0].length,(this.__index__<0||o<this.__index__||o===this.__index__&&i>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=o,this.__last_index__=i))),this.__index__>=0},g.prototype.pretest=function(e){return this.re.pretest.test(e)},g.prototype.testSchemaAt=function(e,r,t){return this.__compiled__[r.toLowerCase()]?this.__compiled__[r.toLowerCase()].validate(e,t,this):0},g.prototype.match=function(e){var r=0,t=[];this.__index__>=0&&this.__text_cache__===e&&(t.push(_(this,r)),r=this.__last_index__);for(var n=r?e.slice(r):e;this.test(n);)t.push(_(this,r)),n=n.slice(this.__last_index__),r+=this.__last_index__;return t.length?t:null},g.prototype.tlds=function(e,r){return e=Array.isArray(e)?e:[e],r?(this.__tlds__=this.__tlds__.concat(e).sort().filter(function(e,r,t){return e!==t[r-1]}).reverse(),d(this),this):(this.__tlds__=e.slice(),this.__tlds_replaced__=!0,d(this),this)},g.prototype.normalize=function(e){e.schema||(e.url="http://"+e.url),"mailto:"!==e.schema||/^mailto:/i.test(e.url)||(e.url="mailto:"+e.url)},g.prototype.onCompile=function(){},r.exports=g},{"./lib/re":55}],55:[function(e,r,t){"use strict";r.exports=function(r){var t={};return t.src_Any=e("uc.micro/properties/Any/regex").source,t.src_Cc=e("uc.micro/categories/Cc/regex").source,t.src_Z=e("uc.micro/categories/Z/regex").source,t.src_P=e("uc.micro/categories/P/regex").source,t.src_ZPCc=[t.src_Z,t.src_P,t.src_Cc].join("|"),t.src_ZCc=[t.src_Z,t.src_Cc].join("|"),t.src_pseudo_letter="(?:(?!>|<|"+t.src_ZPCc+")"+t.src_Any+")",t.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",t.src_auth="(?:(?:(?!"+t.src_ZCc+"|[@/]).)+@)?",t.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",t.src_host_terminator="(?=$|>|<|"+t.src_ZPCc+")(?!-|_|:\\d|\\.-|\\.(?!$|"+t.src_ZPCc+"))",t.src_path="(?:[/?#](?:(?!"+t.src_ZCc+"|[()[\\]{}.,\"'?!\\-<>]).|\\[(?:(?!"+t.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+t.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+t.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+t.src_ZCc+'|["]).)+\\"|\\\'(?:(?!'+t.src_ZCc+"|[']).)+\\'|\\'(?="+t.src_pseudo_letter+"|[-]).|\\.{2,3}[a-zA-Z0-9%/]|\\.(?!"+t.src_ZCc+"|[.]).|"+(r&&r["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+"\\,(?!"+t.src_ZCc+").|\\!(?!"+t.src_ZCc+"|[!]).|\\?(?!"+t.src_ZCc+"|[?]).)+|\\/)?",
t.src_email_name='[\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]+',t.src_xn="xn--[a-z0-9\\-]{1,59}",t.src_domain_root="(?:"+t.src_xn+"|"+t.src_pseudo_letter+"{1,63})",t.src_domain="(?:"+t.src_xn+"|(?:"+t.src_pseudo_letter+")|(?:"+t.src_pseudo_letter+"(?:-(?!-)|"+t.src_pseudo_letter+"){0,61}"+t.src_pseudo_letter+"))",t.src_host="(?:(?:(?:(?:"+t.src_domain+")\\.)*"+t.src_domain_root+"))",t.tpl_host_fuzzy="(?:"+t.src_ip4+"|(?:(?:(?:"+t.src_domain+")\\.)+(?:%TLDS%)))",t.tpl_host_no_ip_fuzzy="(?:(?:(?:"+t.src_domain+")\\.)+(?:%TLDS%))",t.src_host_strict=t.src_host+t.src_host_terminator,t.tpl_host_fuzzy_strict=t.tpl_host_fuzzy+t.src_host_terminator,t.src_host_port_strict=t.src_host+t.src_port+t.src_host_terminator,t.tpl_host_port_fuzzy_strict=t.tpl_host_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_port_no_ip_fuzzy_strict=t.tpl_host_no_ip_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+t.src_ZPCc+"|>|$))",t.tpl_email_fuzzy="(^|<|>|\\(|"+t.src_ZCc+")("+t.src_email_name+"@"+t.tpl_host_fuzzy_strict+")",t.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|]|"+t.src_ZPCc+"))((?![$+<=>^`|])"+t.tpl_host_port_fuzzy_strict+t.src_path+")",t.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|]|"+t.src_ZPCc+"))((?![$+<=>^`|])"+t.tpl_host_port_no_ip_fuzzy_strict+t.src_path+")",t}},{"uc.micro/categories/Cc/regex":61,"uc.micro/categories/P/regex":63,"uc.micro/categories/Z/regex":64,"uc.micro/properties/Any/regex":66}],56:[function(e,r,t){"use strict";function n(e){var r,t,n=o[e];if(n)return n;for(n=o[e]=[],r=0;r<128;r++)t=String.fromCharCode(r),n.push(t);for(r=0;r<e.length;r++)t=e.charCodeAt(r),n[t]="%"+("0"+t.toString(16).toUpperCase()).slice(-2);return n}function s(e,r){var t;return"string"!=typeof r&&(r=s.defaultChars),t=n(r),e.replace(/(%[a-f0-9]{2})+/gi,function(e){var r,n,s,o,i,a,c,l="";for(r=0,n=e.length;r<n;r+=3)s=parseInt(e.slice(r+1,r+3),16),s<128?l+=t[s]:192===(224&s)&&r+3<n&&(o=parseInt(e.slice(r+4,r+6),16),128===(192&o))?(c=s<<6&1984|63&o,l+=c<128?"\ufffd\ufffd":String.fromCharCode(c),r+=3):224===(240&s)&&r+6<n&&(o=parseInt(e.slice(r+4,r+6),16),i=parseInt(e.slice(r+7,r+9),16),128===(192&o)&&128===(192&i))?(c=s<<12&61440|o<<6&4032|63&i,l+=c<2048||c>=55296&&c<=57343?"\ufffd\ufffd\ufffd":String.fromCharCode(c),r+=6):240===(248&s)&&r+9<n&&(o=parseInt(e.slice(r+4,r+6),16),i=parseInt(e.slice(r+7,r+9),16),a=parseInt(e.slice(r+10,r+12),16),128===(192&o)&&128===(192&i)&&128===(192&a))?(c=s<<18&1835008|o<<12&258048|i<<6&4032|63&a,c<65536||c>1114111?l+="\ufffd\ufffd\ufffd\ufffd":(c-=65536,l+=String.fromCharCode(55296+(c>>10),56320+(1023&c))),r+=9):l+="\ufffd";return l})}var o={};s.defaultChars=";/?:@&=+$,#",s.componentChars="",r.exports=s},{}],57:[function(e,r,t){"use strict";function n(e){var r,t,n=o[e];if(n)return n;for(n=o[e]=[],r=0;r<128;r++)t=String.fromCharCode(r),/^[0-9a-z]$/i.test(t)?n.push(t):n.push("%"+("0"+r.toString(16).toUpperCase()).slice(-2));for(r=0;r<e.length;r++)n[e.charCodeAt(r)]=e[r];return n}function s(e,r,t){var o,i,a,c,l,u="";for("string"!=typeof r&&(t=r,r=s.defaultChars),"undefined"==typeof t&&(t=!0),l=n(r),o=0,i=e.length;o<i;o++)if(a=e.charCodeAt(o),t&&37===a&&o+2<i&&/^[0-9a-f]{2}$/i.test(e.slice(o+1,o+3)))u+=e.slice(o,o+3),o+=2;else if(a<128)u+=l[a];else if(a>=55296&&a<=57343){if(a>=55296&&a<=56319&&o+1<i&&(c=e.charCodeAt(o+1),c>=56320&&c<=57343)){u+=encodeURIComponent(e[o]+e[o+1]),o++;continue}u+="%EF%BF%BD"}else u+=encodeURIComponent(e[o]);return u}var o={};s.defaultChars=";/?:@&=+$,-_.!~*'()#",s.componentChars="-_.!~*'()",r.exports=s},{}],58:[function(e,r,t){"use strict";r.exports=function(e){var r="";return r+=e.protocol||"",r+=e.slashes?"//":"",r+=e.auth?e.auth+"@":"",r+=e.hostname&&e.hostname.indexOf(":")!==-1?"["+e.hostname+"]":e.hostname||"",r+=e.port?":"+e.port:"",r+=e.pathname||"",r+=e.search||"",r+=e.hash||""}},{}],59:[function(e,r,t){"use strict";r.exports.encode=e("./encode"),r.exports.decode=e("./decode"),r.exports.format=e("./format"),r.exports.parse=e("./parse")},{"./decode":56,"./encode":57,"./format":58,"./parse":60}],60:[function(e,r,t){"use strict";function n(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}function s(e,r){if(e&&e instanceof n)return e;var t=new n;return t.parse(e,r),t}var o=/^([a-z0-9.+-]+:)/i,i=/:[0-9]*$/,a=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,c=["<",">",'"',"`"," ","\r","\n","\t"],l=["{","}","|","\\","^","`"].concat(c),u=["'"].concat(l),p=["%","/","?",";","#"].concat(u),h=["/","?","#"],f=255,d=/^[+a-z0-9A-Z_-]{0,63}$/,m=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,_={javascript:!0,"javascript:":!0},g={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};n.prototype.parse=function(e,r){var t,n,s,i,c,l=e;if(l=l.trim(),!r&&1===e.split("#").length){var u=a.exec(l);if(u)return this.pathname=u[1],u[2]&&(this.search=u[2]),this}var k=o.exec(l);if(k&&(k=k[0],s=k.toLowerCase(),this.protocol=k,l=l.substr(k.length)),(r||k||l.match(/^\/\/[^@\/]+@[^@\/]+/))&&(c="//"===l.substr(0,2),!c||k&&_[k]||(l=l.substr(2),this.slashes=!0)),!_[k]&&(c||k&&!g[k])){var b=-1;for(t=0;t<h.length;t++)i=l.indexOf(h[t]),i!==-1&&(b===-1||i<b)&&(b=i);var v,x;for(x=b===-1?l.lastIndexOf("@"):l.lastIndexOf("@",b),x!==-1&&(v=l.slice(0,x),l=l.slice(x+1),this.auth=v),b=-1,t=0;t<p.length;t++)i=l.indexOf(p[t]),i!==-1&&(b===-1||i<b)&&(b=i);b===-1&&(b=l.length),":"===l[b-1]&&b--;var y=l.slice(0,b);l=l.slice(b),this.parseHost(y),this.hostname=this.hostname||"";var C="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!C){var A=this.hostname.split(/\./);for(t=0,n=A.length;t<n;t++){var w=A[t];if(w&&!w.match(d)){for(var D="",q=0,E=w.length;q<E;q++)D+=w.charCodeAt(q)>127?"x":w[q];if(!D.match(d)){var S=A.slice(0,t),F=A.slice(t+1),z=w.match(m);z&&(S.push(z[1]),F.unshift(z[2])),F.length&&(l=F.join(".")+l),this.hostname=S.join(".");break}}}}this.hostname.length>f&&(this.hostname=""),C&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}var L=l.indexOf("#");L!==-1&&(this.hash=l.substr(L),l=l.slice(0,L));var T=l.indexOf("?");return T!==-1&&(this.search=l.substr(T),l=l.slice(0,T)),l&&(this.pathname=l),g[s]&&this.hostname&&!this.pathname&&(this.pathname=""),this},n.prototype.parseHost=function(e){var r=i.exec(e);r&&(r=r[0],":"!==r&&(this.port=r.substr(1)),e=e.substr(0,e.length-r.length)),e&&(this.hostname=e)},r.exports=s},{}],61:[function(e,r,t){r.exports=/[\0-\x1F\x7F-\x9F]/},{}],62:[function(e,r,t){r.exports=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804\uDCBD|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/},{}],63:[function(e,r,t){r.exports=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDF3C-\uDF3E]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]/},{}],64:[function(e,r,t){r.exports=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/},{}],65:[function(e,r,t){r.exports.Any=e("./properties/Any/regex"),r.exports.Cc=e("./categories/Cc/regex"),r.exports.Cf=e("./categories/Cf/regex"),r.exports.P=e("./categories/P/regex"),r.exports.Z=e("./categories/Z/regex")},{"./categories/Cc/regex":61,"./categories/Cf/regex":62,"./categories/P/regex":63,"./categories/Z/regex":64,"./properties/Any/regex":66}],66:[function(e,r,t){r.exports=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/},{}],67:[function(e,r,t){"use strict";r.exports=e("./lib/")},{"./lib/":9}]},{},[67])(67)});

/**
 * @license
 * lodash 3.10.1 (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash modern -o ./lodash.js`
 */
;(function(){function n(n,t){if(n!==t){var r=null===n,e=n===w,u=n===n,o=null===t,i=t===w,f=t===t;if(n>t&&!o||!u||r&&!i&&f||e&&f)return 1;if(n<t&&!r||!f||o&&!e&&u||i&&u)return-1}return 0}function t(n,t,r){for(var e=n.length,u=r?e:-1;r?u--:++u<e;)if(t(n[u],u,n))return u;return-1}function r(n,t,r){if(t!==t)return p(n,r);r-=1;for(var e=n.length;++r<e;)if(n[r]===t)return r;return-1}function e(n){return typeof n=="function"||false}function u(n){return null==n?"":n+""}function o(n,t){for(var r=-1,e=n.length;++r<e&&-1<t.indexOf(n.charAt(r)););
return r}function i(n,t){for(var r=n.length;r--&&-1<t.indexOf(n.charAt(r)););return r}function f(t,r){return n(t.a,r.a)||t.b-r.b}function a(n){return Nn[n]}function c(n){return Tn[n]}function l(n,t,r){return t?n=Bn[n]:r&&(n=Dn[n]),"\\"+n}function s(n){return"\\"+Dn[n]}function p(n,t,r){var e=n.length;for(t+=r?0:-1;r?t--:++t<e;){var u=n[t];if(u!==u)return t}return-1}function h(n){return!!n&&typeof n=="object"}function _(n){return 160>=n&&9<=n&&13>=n||32==n||160==n||5760==n||6158==n||8192<=n&&(8202>=n||8232==n||8233==n||8239==n||8287==n||12288==n||65279==n);
}function v(n,t){for(var r=-1,e=n.length,u=-1,o=[];++r<e;)n[r]===t&&(n[r]=z,o[++u]=r);return o}function g(n){for(var t=-1,r=n.length;++t<r&&_(n.charCodeAt(t)););return t}function y(n){for(var t=n.length;t--&&_(n.charCodeAt(t)););return t}function d(n){return Ln[n]}function m(_){function Nn(n){if(h(n)&&!(Oo(n)||n instanceof zn)){if(n instanceof Ln)return n;if(nu.call(n,"__chain__")&&nu.call(n,"__wrapped__"))return Mr(n)}return new Ln(n)}function Tn(){}function Ln(n,t,r){this.__wrapped__=n,this.__actions__=r||[],
this.__chain__=!!t}function zn(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=false,this.__iteratees__=[],this.__takeCount__=Ru,this.__views__=[]}function Bn(){this.__data__={}}function Dn(n){var t=n?n.length:0;for(this.data={hash:gu(null),set:new lu};t--;)this.push(n[t])}function Mn(n,t){var r=n.data;return(typeof t=="string"||ge(t)?r.set.has(t):r.hash[t])?0:-1}function qn(n,t){var r=-1,e=n.length;for(t||(t=Be(e));++r<e;)t[r]=n[r];return t}function Pn(n,t){for(var r=-1,e=n.length;++r<e&&false!==t(n[r],r,n););
return n}function Kn(n,t){for(var r=-1,e=n.length;++r<e;)if(!t(n[r],r,n))return false;return true}function Vn(n,t){for(var r=-1,e=n.length,u=-1,o=[];++r<e;){var i=n[r];t(i,r,n)&&(o[++u]=i)}return o}function Gn(n,t){for(var r=-1,e=n.length,u=Be(e);++r<e;)u[r]=t(n[r],r,n);return u}function Jn(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function Xn(n,t,r,e){var u=-1,o=n.length;for(e&&o&&(r=n[++u]);++u<o;)r=t(r,n[u],u,n);return r}function Hn(n,t){for(var r=-1,e=n.length;++r<e;)if(t(n[r],r,n))return true;
return false}function Qn(n,t,r,e){return n!==w&&nu.call(e,r)?n:t}function nt(n,t,r){for(var e=-1,u=zo(t),o=u.length;++e<o;){var i=u[e],f=n[i],a=r(f,t[i],i,n,t);(a===a?a===f:f!==f)&&(f!==w||i in n)||(n[i]=a)}return n}function tt(n,t){return null==t?n:et(t,zo(t),n)}function rt(n,t){for(var r=-1,e=null==n,u=!e&&Er(n),o=u?n.length:0,i=t.length,f=Be(i);++r<i;){var a=t[r];f[r]=u?Cr(a,o)?n[a]:w:e?w:n[a]}return f}function et(n,t,r){r||(r={});for(var e=-1,u=t.length;++e<u;){var o=t[e];r[o]=n[o]}return r}function ut(n,t,r){
var e=typeof n;return"function"==e?t===w?n:Bt(n,t,r):null==n?Fe:"object"==e?bt(n):t===w?ze(n):xt(n,t)}function ot(n,t,r,e,u,o,i){var f;if(r&&(f=u?r(n,e,u):r(n)),f!==w)return f;if(!ge(n))return n;if(e=Oo(n)){if(f=kr(n),!t)return qn(n,f)}else{var a=ru.call(n),c=a==K;if(a!=Z&&a!=B&&(!c||u))return Fn[a]?Rr(n,a,t):u?n:{};if(f=Ir(c?{}:n),!t)return tt(f,n)}for(o||(o=[]),i||(i=[]),u=o.length;u--;)if(o[u]==n)return i[u];return o.push(n),i.push(f),(e?Pn:_t)(n,function(e,u){f[u]=ot(e,t,r,u,n,o,i)}),f}function it(n,t,r){
if(typeof n!="function")throw new Ge(L);return su(function(){n.apply(w,r)},t)}function ft(n,t){var e=n?n.length:0,u=[];if(!e)return u;var o=-1,i=xr(),f=i===r,a=f&&t.length>=F&&gu&&lu?new Dn(t):null,c=t.length;a&&(i=Mn,f=false,t=a);n:for(;++o<e;)if(a=n[o],f&&a===a){for(var l=c;l--;)if(t[l]===a)continue n;u.push(a)}else 0>i(t,a,0)&&u.push(a);return u}function at(n,t){var r=true;return Su(n,function(n,e,u){return r=!!t(n,e,u)}),r}function ct(n,t,r,e){var u=e,o=u;return Su(n,function(n,i,f){i=+t(n,i,f),(r(i,u)||i===e&&i===o)&&(u=i,
o=n)}),o}function lt(n,t){var r=[];return Su(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function st(n,t,r,e){var u;return r(n,function(n,r,o){return t(n,r,o)?(u=e?r:n,false):void 0}),u}function pt(n,t,r,e){e||(e=[]);for(var u=-1,o=n.length;++u<o;){var i=n[u];h(i)&&Er(i)&&(r||Oo(i)||pe(i))?t?pt(i,t,r,e):Jn(e,i):r||(e[e.length]=i)}return e}function ht(n,t){Nu(n,t,Re)}function _t(n,t){return Nu(n,t,zo)}function vt(n,t){return Tu(n,t,zo)}function gt(n,t){for(var r=-1,e=t.length,u=-1,o=[];++r<e;){var i=t[r];
ve(n[i])&&(o[++u]=i)}return o}function yt(n,t,r){if(null!=n){r!==w&&r in Br(n)&&(t=[r]),r=0;for(var e=t.length;null!=n&&r<e;)n=n[t[r++]];return r&&r==e?n:w}}function dt(n,t,r,e,u,o){if(n===t)n=true;else if(null==n||null==t||!ge(n)&&!h(t))n=n!==n&&t!==t;else n:{var i=dt,f=Oo(n),a=Oo(t),c=D,l=D;f||(c=ru.call(n),c==B?c=Z:c!=Z&&(f=xe(n))),a||(l=ru.call(t),l==B?l=Z:l!=Z&&xe(t));var s=c==Z,a=l==Z,l=c==l;if(!l||f||s){if(!e&&(c=s&&nu.call(n,"__wrapped__"),a=a&&nu.call(t,"__wrapped__"),c||a)){n=i(c?n.value():n,a?t.value():t,r,e,u,o);
break n}if(l){for(u||(u=[]),o||(o=[]),c=u.length;c--;)if(u[c]==n){n=o[c]==t;break n}u.push(n),o.push(t),n=(f?yr:mr)(n,t,i,r,e,u,o),u.pop(),o.pop()}else n=false}else n=dr(n,t,c)}return n}function mt(n,t,r){var e=t.length,u=e,o=!r;if(null==n)return!u;for(n=Br(n);e--;){var i=t[e];if(o&&i[2]?i[1]!==n[i[0]]:!(i[0]in n))return false}for(;++e<u;){var i=t[e],f=i[0],a=n[f],c=i[1];if(o&&i[2]){if(a===w&&!(f in n))return false}else if(i=r?r(a,c,f):w,i===w?!dt(c,a,r,true):!i)return false}return true}function wt(n,t){var r=-1,e=Er(n)?Be(n.length):[];
return Su(n,function(n,u,o){e[++r]=t(n,u,o)}),e}function bt(n){var t=Ar(n);if(1==t.length&&t[0][2]){var r=t[0][0],e=t[0][1];return function(n){return null==n?false:n[r]===e&&(e!==w||r in Br(n))}}return function(n){return mt(n,t)}}function xt(n,t){var r=Oo(n),e=Wr(n)&&t===t&&!ge(t),u=n+"";return n=Dr(n),function(o){if(null==o)return false;var i=u;if(o=Br(o),!(!r&&e||i in o)){if(o=1==n.length?o:yt(o,Et(n,0,-1)),null==o)return false;i=Zr(n),o=Br(o)}return o[i]===t?t!==w||i in o:dt(t,o[i],w,true)}}function At(n,t,r,e,u){
if(!ge(n))return n;var o=Er(t)&&(Oo(t)||xe(t)),i=o?w:zo(t);return Pn(i||t,function(f,a){if(i&&(a=f,f=t[a]),h(f)){e||(e=[]),u||(u=[]);n:{for(var c=a,l=e,s=u,p=l.length,_=t[c];p--;)if(l[p]==_){n[c]=s[p];break n}var p=n[c],v=r?r(p,_,c,n,t):w,g=v===w;g&&(v=_,Er(_)&&(Oo(_)||xe(_))?v=Oo(p)?p:Er(p)?qn(p):[]:me(_)||pe(_)?v=pe(p)?ke(p):me(p)?p:{}:g=false),l.push(_),s.push(v),g?n[c]=At(v,_,r,l,s):(v===v?v!==p:p===p)&&(n[c]=v)}}else c=n[a],l=r?r(c,f,a,n,t):w,(s=l===w)&&(l=f),l===w&&(!o||a in n)||!s&&(l===l?l===c:c!==c)||(n[a]=l);
}),n}function jt(n){return function(t){return null==t?w:t[n]}}function kt(n){var t=n+"";return n=Dr(n),function(r){return yt(r,n,t)}}function It(n,t){for(var r=n?t.length:0;r--;){var e=t[r];if(e!=u&&Cr(e)){var u=e;pu.call(n,e,1)}}}function Rt(n,t){return n+yu(ku()*(t-n+1))}function Ot(n,t,r,e,u){return u(n,function(n,u,o){r=e?(e=false,n):t(r,n,u,o)}),r}function Et(n,t,r){var e=-1,u=n.length;for(t=null==t?0:+t||0,0>t&&(t=-t>u?0:u+t),r=r===w||r>u?u:+r||0,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0,r=Be(u);++e<u;)r[e]=n[e+t];
return r}function Ct(n,t){var r;return Su(n,function(n,e,u){return r=t(n,e,u),!r}),!!r}function Ut(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].c;return n}function Wt(t,r,e){var u=wr(),o=-1;return r=Gn(r,function(n){return u(n)}),t=wt(t,function(n){return{a:Gn(r,function(t){return t(n)}),b:++o,c:n}}),Ut(t,function(t,r){var u;n:{for(var o=-1,i=t.a,f=r.a,a=i.length,c=e.length;++o<a;)if(u=n(i[o],f[o])){if(o>=c)break n;o=e[o],u*="asc"===o||true===o?1:-1;break n}u=t.b-r.b}return u})}function $t(n,t){
var r=0;return Su(n,function(n,e,u){r+=+t(n,e,u)||0}),r}function St(n,t){var e=-1,u=xr(),o=n.length,i=u===r,f=i&&o>=F,a=f&&gu&&lu?new Dn(void 0):null,c=[];a?(u=Mn,i=false):(f=false,a=t?[]:c);n:for(;++e<o;){var l=n[e],s=t?t(l,e,n):l;if(i&&l===l){for(var p=a.length;p--;)if(a[p]===s)continue n;t&&a.push(s),c.push(l)}else 0>u(a,s,0)&&((t||f)&&a.push(s),c.push(l))}return c}function Ft(n,t){for(var r=-1,e=t.length,u=Be(e);++r<e;)u[r]=n[t[r]];return u}function Nt(n,t,r,e){for(var u=n.length,o=e?u:-1;(e?o--:++o<u)&&t(n[o],o,n););
return r?Et(n,e?0:o,e?o+1:u):Et(n,e?o+1:0,e?u:o)}function Tt(n,t){var r=n;r instanceof zn&&(r=r.value());for(var e=-1,u=t.length;++e<u;)var o=t[e],r=o.func.apply(o.thisArg,Jn([r],o.args));return r}function Lt(n,t,r){var e=0,u=n?n.length:e;if(typeof t=="number"&&t===t&&u<=Eu){for(;e<u;){var o=e+u>>>1,i=n[o];(r?i<=t:i<t)&&null!==i?e=o+1:u=o}return u}return zt(n,t,Fe,r)}function zt(n,t,r,e){t=r(t);for(var u=0,o=n?n.length:0,i=t!==t,f=null===t,a=t===w;u<o;){var c=yu((u+o)/2),l=r(n[c]),s=l!==w,p=l===l;
(i?p||e:f?p&&s&&(e||null!=l):a?p&&(e||s):null==l?0:e?l<=t:l<t)?u=c+1:o=c}return xu(o,Ou)}function Bt(n,t,r){if(typeof n!="function")return Fe;if(t===w)return n;switch(r){case 1:return function(r){return n.call(t,r)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,o){return n.call(t,r,e,u,o)};case 5:return function(r,e,u,o,i){return n.call(t,r,e,u,o,i)}}return function(){return n.apply(t,arguments)}}function Dt(n){var t=new ou(n.byteLength);return new hu(t).set(new hu(n)),
t}function Mt(n,t,r){for(var e=r.length,u=-1,o=bu(n.length-e,0),i=-1,f=t.length,a=Be(f+o);++i<f;)a[i]=t[i];for(;++u<e;)a[r[u]]=n[u];for(;o--;)a[i++]=n[u++];return a}function qt(n,t,r){for(var e=-1,u=r.length,o=-1,i=bu(n.length-u,0),f=-1,a=t.length,c=Be(i+a);++o<i;)c[o]=n[o];for(i=o;++f<a;)c[i+f]=t[f];for(;++e<u;)c[i+r[e]]=n[o++];return c}function Pt(n,t){return function(r,e,u){var o=t?t():{};if(e=wr(e,u,3),Oo(r)){u=-1;for(var i=r.length;++u<i;){var f=r[u];n(o,f,e(f,u,r),r)}}else Su(r,function(t,r,u){
n(o,t,e(t,r,u),u)});return o}}function Kt(n){return le(function(t,r){var e=-1,u=null==t?0:r.length,o=2<u?r[u-2]:w,i=2<u?r[2]:w,f=1<u?r[u-1]:w;for(typeof o=="function"?(o=Bt(o,f,5),u-=2):(o=typeof f=="function"?f:w,u-=o?1:0),i&&Ur(r[0],r[1],i)&&(o=3>u?w:o,u=1);++e<u;)(i=r[e])&&n(t,i,o);return t})}function Vt(n,t){return function(r,e){var u=r?Bu(r):0;if(!Sr(u))return n(r,e);for(var o=t?u:-1,i=Br(r);(t?o--:++o<u)&&false!==e(i[o],o,i););return r}}function Zt(n){return function(t,r,e){var u=Br(t);e=e(t);for(var o=e.length,i=n?o:-1;n?i--:++i<o;){
var f=e[i];if(false===r(u[f],f,u))break}return t}}function Yt(n,t){function r(){return(this&&this!==Zn&&this instanceof r?e:n).apply(t,arguments)}var e=Jt(n);return r}function Gt(n){return function(t){var r=-1;t=$e(Ce(t));for(var e=t.length,u="";++r<e;)u=n(u,t[r],r);return u}}function Jt(n){return function(){var t=arguments;switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:
return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=$u(n.prototype),t=n.apply(r,t);return ge(t)?t:r}}function Xt(n){function t(r,e,u){return u&&Ur(r,e,u)&&(e=w),r=gr(r,n,w,w,w,w,w,e),r.placeholder=t.placeholder,r}return t}function Ht(n,t){return le(function(r){var e=r[0];return null==e?e:(r.push(t),n.apply(w,r))})}function Qt(n,t){return function(r,e,u){if(u&&Ur(r,e,u)&&(e=w),e=wr(e,u,3),1==e.length){
u=r=Oo(r)?r:zr(r);for(var o=e,i=-1,f=u.length,a=t,c=a;++i<f;){var l=u[i],s=+o(l);n(s,a)&&(a=s,c=l)}if(u=c,!r.length||u!==t)return u}return ct(r,e,n,t)}}function nr(n,r){return function(e,u,o){return u=wr(u,o,3),Oo(e)?(u=t(e,u,r),-1<u?e[u]:w):st(e,u,n)}}function tr(n){return function(r,e,u){return r&&r.length?(e=wr(e,u,3),t(r,e,n)):-1}}function rr(n){return function(t,r,e){return r=wr(r,e,3),st(t,r,n,true)}}function er(n){return function(){for(var t,r=arguments.length,e=n?r:-1,u=0,o=Be(r);n?e--:++e<r;){
var i=o[u++]=arguments[e];if(typeof i!="function")throw new Ge(L);!t&&Ln.prototype.thru&&"wrapper"==br(i)&&(t=new Ln([],true))}for(e=t?-1:r;++e<r;){var i=o[e],u=br(i),f="wrapper"==u?zu(i):w;t=f&&$r(f[0])&&f[1]==(E|k|R|C)&&!f[4].length&&1==f[9]?t[br(f[0])].apply(t,f[3]):1==i.length&&$r(i)?t[u]():t.thru(i)}return function(){var n=arguments,e=n[0];if(t&&1==n.length&&Oo(e)&&e.length>=F)return t.plant(e).value();for(var u=0,n=r?o[u].apply(this,n):e;++u<r;)n=o[u].call(this,n);return n}}}function ur(n,t){
return function(r,e,u){return typeof e=="function"&&u===w&&Oo(r)?n(r,e):t(r,Bt(e,u,3))}}function or(n){return function(t,r,e){return(typeof r!="function"||e!==w)&&(r=Bt(r,e,3)),n(t,r,Re)}}function ir(n){return function(t,r,e){return(typeof r!="function"||e!==w)&&(r=Bt(r,e,3)),n(t,r)}}function fr(n){return function(t,r,e){var u={};return r=wr(r,e,3),_t(t,function(t,e,o){o=r(t,e,o),e=n?o:e,t=n?t:o,u[e]=t}),u}}function ar(n){return function(t,r,e){return t=u(t),(n?t:"")+pr(t,r,e)+(n?"":t)}}function cr(n){
var t=le(function(r,e){var u=v(e,t.placeholder);return gr(r,n,w,e,u)});return t}function lr(n,t){return function(r,e,u,o){var i=3>arguments.length;return typeof e=="function"&&o===w&&Oo(r)?n(r,e,u,i):Ot(r,wr(e,o,4),u,i,t)}}function sr(n,t,r,e,u,o,i,f,a,c){function l(){for(var m=arguments.length,b=m,j=Be(m);b--;)j[b]=arguments[b];if(e&&(j=Mt(j,e,u)),o&&(j=qt(j,o,i)),_||y){var b=l.placeholder,k=v(j,b),m=m-k.length;if(m<c){var I=f?qn(f):w,m=bu(c-m,0),E=_?k:w,k=_?w:k,C=_?j:w,j=_?w:j;return t|=_?R:O,t&=~(_?O:R),
g||(t&=~(x|A)),j=[n,t,r,C,E,j,k,I,a,m],I=sr.apply(w,j),$r(n)&&Du(I,j),I.placeholder=b,I}}if(b=p?r:this,I=h?b[n]:n,f)for(m=j.length,E=xu(f.length,m),k=qn(j);E--;)C=f[E],j[E]=Cr(C,m)?k[C]:w;return s&&a<j.length&&(j.length=a),this&&this!==Zn&&this instanceof l&&(I=d||Jt(n)),I.apply(b,j)}var s=t&E,p=t&x,h=t&A,_=t&k,g=t&j,y=t&I,d=h?w:Jt(n);return l}function pr(n,t,r){return n=n.length,t=+t,n<t&&mu(t)?(t-=n,r=null==r?" ":r+"",Ue(r,vu(t/r.length)).slice(0,t)):""}function hr(n,t,r,e){function u(){for(var t=-1,f=arguments.length,a=-1,c=e.length,l=Be(c+f);++a<c;)l[a]=e[a];
for(;f--;)l[a++]=arguments[++t];return(this&&this!==Zn&&this instanceof u?i:n).apply(o?r:this,l)}var o=t&x,i=Jt(n);return u}function _r(n){var t=Pe[n];return function(n,r){return(r=r===w?0:+r||0)?(r=au(10,r),t(n*r)/r):t(n)}}function vr(n){return function(t,r,e,u){var o=wr(e);return null==e&&o===ut?Lt(t,r,n):zt(t,r,o(e,u,1),n)}}function gr(n,t,r,e,u,o,i,f){var a=t&A;if(!a&&typeof n!="function")throw new Ge(L);var c=e?e.length:0;if(c||(t&=~(R|O),e=u=w),c-=u?u.length:0,t&O){var l=e,s=u;e=u=w}var p=a?w:zu(n);
return r=[n,t,r,e,u,l,s,o,i,f],p&&(e=r[1],t=p[1],f=e|t,u=t==E&&e==k||t==E&&e==C&&r[7].length<=p[8]||t==(E|C)&&e==k,(f<E||u)&&(t&x&&(r[2]=p[2],f|=e&x?0:j),(e=p[3])&&(u=r[3],r[3]=u?Mt(u,e,p[4]):qn(e),r[4]=u?v(r[3],z):qn(p[4])),(e=p[5])&&(u=r[5],r[5]=u?qt(u,e,p[6]):qn(e),r[6]=u?v(r[5],z):qn(p[6])),(e=p[7])&&(r[7]=qn(e)),t&E&&(r[8]=null==r[8]?p[8]:xu(r[8],p[8])),null==r[9]&&(r[9]=p[9]),r[0]=p[0],r[1]=f),t=r[1],f=r[9]),r[9]=null==f?a?0:n.length:bu(f-c,0)||0,(p?Lu:Du)(t==x?Yt(r[0],r[2]):t!=R&&t!=(x|R)||r[4].length?sr.apply(w,r):hr.apply(w,r),r);
}function yr(n,t,r,e,u,o,i){var f=-1,a=n.length,c=t.length;if(a!=c&&(!u||c<=a))return false;for(;++f<a;){var l=n[f],c=t[f],s=e?e(u?c:l,u?l:c,f):w;if(s!==w){if(s)continue;return false}if(u){if(!Hn(t,function(n){return l===n||r(l,n,e,u,o,i)}))return false}else if(l!==c&&!r(l,c,e,u,o,i))return false}return true}function dr(n,t,r){switch(r){case M:case q:return+n==+t;case P:return n.name==t.name&&n.message==t.message;case V:return n!=+n?t!=+t:n==+t;case Y:case G:return n==t+""}return false}function mr(n,t,r,e,u,o,i){var f=zo(n),a=f.length,c=zo(t).length;
if(a!=c&&!u)return false;for(c=a;c--;){var l=f[c];if(!(u?l in t:nu.call(t,l)))return false}for(var s=u;++c<a;){var l=f[c],p=n[l],h=t[l],_=e?e(u?h:p,u?p:h,l):w;if(_===w?!r(p,h,e,u,o,i):!_)return false;s||(s="constructor"==l)}return s||(r=n.constructor,e=t.constructor,!(r!=e&&"constructor"in n&&"constructor"in t)||typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)?true:false}function wr(n,t,r){var e=Nn.callback||Se,e=e===Se?ut:e;return r?e(n,t,r):e}function br(n){for(var t=n.name+"",r=Wu[t],e=r?r.length:0;e--;){
var u=r[e],o=u.func;if(null==o||o==n)return u.name}return t}function xr(n,t,e){var u=Nn.indexOf||Vr,u=u===Vr?r:u;return n?u(n,t,e):u}function Ar(n){n=Oe(n);for(var t=n.length;t--;){var r=n[t][1];n[t][2]=r===r&&!ge(r)}return n}function jr(n,t){var r=null==n?w:n[t];return ye(r)?r:w}function kr(n){var t=n.length,r=new n.constructor(t);return t&&"string"==typeof n[0]&&nu.call(n,"index")&&(r.index=n.index,r.input=n.input),r}function Ir(n){return n=n.constructor,typeof n=="function"&&n instanceof n||(n=Ve),
new n}function Rr(n,t,r){var e=n.constructor;switch(t){case J:return Dt(n);case M:case q:return new e(+n);case X:case H:case Q:case nn:case tn:case rn:case en:case un:case on:return t=n.buffer,new e(r?Dt(t):t,n.byteOffset,n.length);case V:case G:return new e(n);case Y:var u=new e(n.source,kn.exec(n));u.lastIndex=n.lastIndex}return u}function Or(n,t,r){return null==n||Wr(t,n)||(t=Dr(t),n=1==t.length?n:yt(n,Et(t,0,-1)),t=Zr(t)),t=null==n?n:n[t],null==t?w:t.apply(n,r)}function Er(n){return null!=n&&Sr(Bu(n));
}function Cr(n,t){return n=typeof n=="number"||On.test(n)?+n:-1,t=null==t?Cu:t,-1<n&&0==n%1&&n<t}function Ur(n,t,r){if(!ge(r))return false;var e=typeof t;return("number"==e?Er(r)&&Cr(t,r.length):"string"==e&&t in r)?(t=r[t],n===n?n===t:t!==t):false}function Wr(n,t){var r=typeof n;return"string"==r&&dn.test(n)||"number"==r?true:Oo(n)?false:!yn.test(n)||null!=t&&n in Br(t)}function $r(n){var t=br(n),r=Nn[t];return typeof r=="function"&&t in zn.prototype?n===r?true:(t=zu(r),!!t&&n===t[0]):false}function Sr(n){return typeof n=="number"&&-1<n&&0==n%1&&n<=Cu;
}function Fr(n,t){return n===w?t:Eo(n,t,Fr)}function Nr(n,t){n=Br(n);for(var r=-1,e=t.length,u={};++r<e;){var o=t[r];o in n&&(u[o]=n[o])}return u}function Tr(n,t){var r={};return ht(n,function(n,e,u){t(n,e,u)&&(r[e]=n)}),r}function Lr(n){for(var t=Re(n),r=t.length,e=r&&n.length,u=!!e&&Sr(e)&&(Oo(n)||pe(n)),o=-1,i=[];++o<r;){var f=t[o];(u&&Cr(f,e)||nu.call(n,f))&&i.push(f)}return i}function zr(n){return null==n?[]:Er(n)?ge(n)?n:Ve(n):Ee(n)}function Br(n){return ge(n)?n:Ve(n)}function Dr(n){if(Oo(n))return n;
var t=[];return u(n).replace(mn,function(n,r,e,u){t.push(e?u.replace(An,"$1"):r||n)}),t}function Mr(n){return n instanceof zn?n.clone():new Ln(n.__wrapped__,n.__chain__,qn(n.__actions__))}function qr(n,t,r){return n&&n.length?((r?Ur(n,t,r):null==t)&&(t=1),Et(n,0>t?0:t)):[]}function Pr(n,t,r){var e=n?n.length:0;return e?((r?Ur(n,t,r):null==t)&&(t=1),t=e-(+t||0),Et(n,0,0>t?0:t)):[]}function Kr(n){return n?n[0]:w}function Vr(n,t,e){var u=n?n.length:0;if(!u)return-1;if(typeof e=="number")e=0>e?bu(u+e,0):e;else if(e)return e=Lt(n,t),
e<u&&(t===t?t===n[e]:n[e]!==n[e])?e:-1;return r(n,t,e||0)}function Zr(n){var t=n?n.length:0;return t?n[t-1]:w}function Yr(n){return qr(n,1)}function Gr(n,t,e,u){if(!n||!n.length)return[];null!=t&&typeof t!="boolean"&&(u=e,e=Ur(n,t,u)?w:t,t=false);var o=wr();if((null!=e||o!==ut)&&(e=o(e,u,3)),t&&xr()===r){t=e;var i;e=-1,u=n.length;for(var o=-1,f=[];++e<u;){var a=n[e],c=t?t(a,e,n):a;e&&i===c||(i=c,f[++o]=a)}n=f}else n=St(n,e);return n}function Jr(n){if(!n||!n.length)return[];var t=-1,r=0;n=Vn(n,function(n){
return Er(n)?(r=bu(n.length,r),true):void 0});for(var e=Be(r);++t<r;)e[t]=Gn(n,jt(t));return e}function Xr(n,t,r){return n&&n.length?(n=Jr(n),null==t?n:(t=Bt(t,r,4),Gn(n,function(n){return Xn(n,t,w,true)}))):[]}function Hr(n,t){var r=-1,e=n?n.length:0,u={};for(!e||t||Oo(n[0])||(t=[]);++r<e;){var o=n[r];t?u[o]=t[r]:o&&(u[o[0]]=o[1])}return u}function Qr(n){return n=Nn(n),n.__chain__=true,n}function ne(n,t,r){return t.call(r,n)}function te(n,t,r){var e=Oo(n)?Kn:at;return r&&Ur(n,t,r)&&(t=w),(typeof t!="function"||r!==w)&&(t=wr(t,r,3)),
e(n,t)}function re(n,t,r){var e=Oo(n)?Vn:lt;return t=wr(t,r,3),e(n,t)}function ee(n,t,r,e){var u=n?Bu(n):0;return Sr(u)||(n=Ee(n),u=n.length),r=typeof r!="number"||e&&Ur(t,r,e)?0:0>r?bu(u+r,0):r||0,typeof n=="string"||!Oo(n)&&be(n)?r<=u&&-1<n.indexOf(t,r):!!u&&-1<xr(n,t,r)}function ue(n,t,r){var e=Oo(n)?Gn:wt;return t=wr(t,r,3),e(n,t)}function oe(n,t,r){if(r?Ur(n,t,r):null==t){n=zr(n);var e=n.length;return 0<e?n[Rt(0,e-1)]:w}r=-1,n=je(n);var e=n.length,u=e-1;for(t=xu(0>t?0:+t||0,e);++r<t;){var e=Rt(r,u),o=n[e];
n[e]=n[r],n[r]=o}return n.length=t,n}function ie(n,t,r){var e=Oo(n)?Hn:Ct;return r&&Ur(n,t,r)&&(t=w),(typeof t!="function"||r!==w)&&(t=wr(t,r,3)),e(n,t)}function fe(n,t){var r;if(typeof t!="function"){if(typeof n!="function")throw new Ge(L);var e=n;n=t,t=e}return function(){return 0<--n&&(r=t.apply(this,arguments)),1>=n&&(t=w),r}}function ae(n,t,r){function e(t,r){r&&iu(r),a=p=h=w,t&&(_=ho(),c=n.apply(s,f),p||a||(f=s=w))}function u(){var n=t-(ho()-l);0>=n||n>t?e(h,a):p=su(u,n)}function o(){e(g,p);
}function i(){if(f=arguments,l=ho(),s=this,h=g&&(p||!y),false===v)var r=y&&!p;else{a||y||(_=l);var e=v-(l-_),i=0>=e||e>v;i?(a&&(a=iu(a)),_=l,c=n.apply(s,f)):a||(a=su(o,e))}return i&&p?p=iu(p):p||t===v||(p=su(u,t)),r&&(i=true,c=n.apply(s,f)),!i||p||a||(f=s=w),c}var f,a,c,l,s,p,h,_=0,v=false,g=true;if(typeof n!="function")throw new Ge(L);if(t=0>t?0:+t||0,true===r)var y=true,g=false;else ge(r)&&(y=!!r.leading,v="maxWait"in r&&bu(+r.maxWait||0,t),g="trailing"in r?!!r.trailing:g);return i.cancel=function(){p&&iu(p),a&&iu(a),
_=0,a=p=h=w},i}function ce(n,t){function r(){var e=arguments,u=t?t.apply(this,e):e[0],o=r.cache;return o.has(u)?o.get(u):(e=n.apply(this,e),r.cache=o.set(u,e),e)}if(typeof n!="function"||t&&typeof t!="function")throw new Ge(L);return r.cache=new ce.Cache,r}function le(n,t){if(typeof n!="function")throw new Ge(L);return t=bu(t===w?n.length-1:+t||0,0),function(){for(var r=arguments,e=-1,u=bu(r.length-t,0),o=Be(u);++e<u;)o[e]=r[t+e];switch(t){case 0:return n.call(this,o);case 1:return n.call(this,r[0],o);
case 2:return n.call(this,r[0],r[1],o)}for(u=Be(t+1),e=-1;++e<t;)u[e]=r[e];return u[t]=o,n.apply(this,u)}}function se(n,t){return n>t}function pe(n){return h(n)&&Er(n)&&nu.call(n,"callee")&&!cu.call(n,"callee")}function he(n,t,r,e){return e=(r=typeof r=="function"?Bt(r,e,3):w)?r(n,t):w,e===w?dt(n,t,r):!!e}function _e(n){return h(n)&&typeof n.message=="string"&&ru.call(n)==P}function ve(n){return ge(n)&&ru.call(n)==K}function ge(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function ye(n){
return null==n?false:ve(n)?uu.test(Qe.call(n)):h(n)&&Rn.test(n)}function de(n){return typeof n=="number"||h(n)&&ru.call(n)==V}function me(n){var t;if(!h(n)||ru.call(n)!=Z||pe(n)||!(nu.call(n,"constructor")||(t=n.constructor,typeof t!="function"||t instanceof t)))return false;var r;return ht(n,function(n,t){r=t}),r===w||nu.call(n,r)}function we(n){return ge(n)&&ru.call(n)==Y}function be(n){return typeof n=="string"||h(n)&&ru.call(n)==G}function xe(n){return h(n)&&Sr(n.length)&&!!Sn[ru.call(n)]}function Ae(n,t){
return n<t}function je(n){var t=n?Bu(n):0;return Sr(t)?t?qn(n):[]:Ee(n)}function ke(n){return et(n,Re(n))}function Ie(n){return gt(n,Re(n))}function Re(n){if(null==n)return[];ge(n)||(n=Ve(n));for(var t=n.length,t=t&&Sr(t)&&(Oo(n)||pe(n))&&t||0,r=n.constructor,e=-1,r=typeof r=="function"&&r.prototype===n,u=Be(t),o=0<t;++e<t;)u[e]=e+"";for(var i in n)o&&Cr(i,t)||"constructor"==i&&(r||!nu.call(n,i))||u.push(i);return u}function Oe(n){n=Br(n);for(var t=-1,r=zo(n),e=r.length,u=Be(e);++t<e;){var o=r[t];
u[t]=[o,n[o]]}return u}function Ee(n){return Ft(n,zo(n))}function Ce(n){return(n=u(n))&&n.replace(En,a).replace(xn,"")}function Ue(n,t){var r="";if(n=u(n),t=+t,1>t||!n||!mu(t))return r;do t%2&&(r+=n),t=yu(t/2),n+=n;while(t);return r}function We(n,t,r){var e=n;return(n=u(n))?(r?Ur(e,t,r):null==t)?n.slice(g(n),y(n)+1):(t+="",n.slice(o(n,t),i(n,t)+1)):n}function $e(n,t,r){return r&&Ur(n,t,r)&&(t=w),n=u(n),n.match(t||Wn)||[]}function Se(n,t,r){return r&&Ur(n,t,r)&&(t=w),h(n)?Ne(n):ut(n,t)}function Fe(n){
return n}function Ne(n){return bt(ot(n,true))}function Te(n,t,r){if(null==r){var e=ge(t),u=e?zo(t):w;((u=u&&u.length?gt(t,u):w)?u.length:e)||(u=false,r=t,t=n,n=this)}u||(u=gt(t,zo(t)));var o=true,e=-1,i=ve(n),f=u.length;false===r?o=false:ge(r)&&"chain"in r&&(o=r.chain);for(;++e<f;){r=u[e];var a=t[r];n[r]=a,i&&(n.prototype[r]=function(t){return function(){var r=this.__chain__;if(o||r){var e=n(this.__wrapped__);return(e.__actions__=qn(this.__actions__)).push({func:t,args:arguments,thisArg:n}),e.__chain__=r,e}return t.apply(n,Jn([this.value()],arguments));
}}(a))}return n}function Le(){}function ze(n){return Wr(n)?jt(n):kt(n)}_=_?Yn.defaults(Zn.Object(),_,Yn.pick(Zn,$n)):Zn;var Be=_.Array,De=_.Date,Me=_.Error,qe=_.Function,Pe=_.Math,Ke=_.Number,Ve=_.Object,Ze=_.RegExp,Ye=_.String,Ge=_.TypeError,Je=Be.prototype,Xe=Ve.prototype,He=Ye.prototype,Qe=qe.prototype.toString,nu=Xe.hasOwnProperty,tu=0,ru=Xe.toString,eu=Zn._,uu=Ze("^"+Qe.call(nu).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ou=_.ArrayBuffer,iu=_.clearTimeout,fu=_.parseFloat,au=Pe.pow,cu=Xe.propertyIsEnumerable,lu=jr(_,"Set"),su=_.setTimeout,pu=Je.splice,hu=_.Uint8Array,_u=jr(_,"WeakMap"),vu=Pe.ceil,gu=jr(Ve,"create"),yu=Pe.floor,du=jr(Be,"isArray"),mu=_.isFinite,wu=jr(Ve,"keys"),bu=Pe.max,xu=Pe.min,Au=jr(De,"now"),ju=_.parseInt,ku=Pe.random,Iu=Ke.NEGATIVE_INFINITY,Ru=Ke.POSITIVE_INFINITY,Ou=4294967294,Eu=2147483647,Cu=9007199254740991,Uu=_u&&new _u,Wu={};
Nn.support={},Nn.templateSettings={escape:_n,evaluate:vn,interpolate:gn,variable:"",imports:{_:Nn}};var $u=function(){function n(){}return function(t){if(ge(t)){n.prototype=t;var r=new n;n.prototype=w}return r||{}}}(),Su=Vt(_t),Fu=Vt(vt,true),Nu=Zt(),Tu=Zt(true),Lu=Uu?function(n,t){return Uu.set(n,t),n}:Fe,zu=Uu?function(n){return Uu.get(n)}:Le,Bu=jt("length"),Du=function(){var n=0,t=0;return function(r,e){var u=ho(),o=S-(u-t);if(t=u,0<o){if(++n>=$)return r}else n=0;return Lu(r,e)}}(),Mu=le(function(n,t){
return h(n)&&Er(n)?ft(n,pt(t,false,true)):[]}),qu=tr(),Pu=tr(true),Ku=le(function(n){for(var t=n.length,e=t,u=Be(l),o=xr(),i=o===r,f=[];e--;){var a=n[e]=Er(a=n[e])?a:[];u[e]=i&&120<=a.length&&gu&&lu?new Dn(e&&a):null}var i=n[0],c=-1,l=i?i.length:0,s=u[0];n:for(;++c<l;)if(a=i[c],0>(s?Mn(s,a):o(f,a,0))){for(e=t;--e;){var p=u[e];if(0>(p?Mn(p,a):o(n[e],a,0)))continue n}s&&s.push(a),f.push(a)}return f}),Vu=le(function(t,r){r=pt(r);var e=rt(t,r);return It(t,r.sort(n)),e}),Zu=vr(),Yu=vr(true),Gu=le(function(n){return St(pt(n,false,true));
}),Ju=le(function(n,t){return Er(n)?ft(n,t):[]}),Xu=le(Jr),Hu=le(function(n){var t=n.length,r=2<t?n[t-2]:w,e=1<t?n[t-1]:w;return 2<t&&typeof r=="function"?t-=2:(r=1<t&&typeof e=="function"?(--t,e):w,e=w),n.length=t,Xr(n,r,e)}),Qu=le(function(n){return n=pt(n),this.thru(function(t){t=Oo(t)?t:[Br(t)];for(var r=n,e=-1,u=t.length,o=-1,i=r.length,f=Be(u+i);++e<u;)f[e]=t[e];for(;++o<i;)f[e++]=r[o];return f})}),no=le(function(n,t){return rt(n,pt(t))}),to=Pt(function(n,t,r){nu.call(n,r)?++n[r]:n[r]=1}),ro=nr(Su),eo=nr(Fu,true),uo=ur(Pn,Su),oo=ur(function(n,t){
for(var r=n.length;r--&&false!==t(n[r],r,n););return n},Fu),io=Pt(function(n,t,r){nu.call(n,r)?n[r].push(t):n[r]=[t]}),fo=Pt(function(n,t,r){n[r]=t}),ao=le(function(n,t,r){var e=-1,u=typeof t=="function",o=Wr(t),i=Er(n)?Be(n.length):[];return Su(n,function(n){var f=u?t:o&&null!=n?n[t]:w;i[++e]=f?f.apply(n,r):Or(n,t,r)}),i}),co=Pt(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]}),lo=lr(Xn,Su),so=lr(function(n,t,r,e){var u=n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r},Fu),po=le(function(n,t){
if(null==n)return[];var r=t[2];return r&&Ur(t[0],t[1],r)&&(t.length=1),Wt(n,pt(t),[])}),ho=Au||function(){return(new De).getTime()},_o=le(function(n,t,r){var e=x;if(r.length)var u=v(r,_o.placeholder),e=e|R;return gr(n,e,t,r,u)}),vo=le(function(n,t){t=t.length?pt(t):Ie(n);for(var r=-1,e=t.length;++r<e;){var u=t[r];n[u]=gr(n[u],x,n)}return n}),go=le(function(n,t,r){var e=x|A;if(r.length)var u=v(r,go.placeholder),e=e|R;return gr(t,e,n,r,u)}),yo=Xt(k),mo=Xt(I),wo=le(function(n,t){return it(n,1,t)}),bo=le(function(n,t,r){
return it(n,t,r)}),xo=er(),Ao=er(true),jo=le(function(n,t){if(t=pt(t),typeof n!="function"||!Kn(t,e))throw new Ge(L);var r=t.length;return le(function(e){for(var u=xu(e.length,r);u--;)e[u]=t[u](e[u]);return n.apply(this,e)})}),ko=cr(R),Io=cr(O),Ro=le(function(n,t){return gr(n,C,w,w,w,pt(t))}),Oo=du||function(n){return h(n)&&Sr(n.length)&&ru.call(n)==D},Eo=Kt(At),Co=Kt(function(n,t,r){return r?nt(n,t,r):tt(n,t)}),Uo=Ht(Co,function(n,t){return n===w?t:n}),Wo=Ht(Eo,Fr),$o=rr(_t),So=rr(vt),Fo=or(Nu),No=or(Tu),To=ir(_t),Lo=ir(vt),zo=wu?function(n){
var t=null==n?w:n.constructor;return typeof t=="function"&&t.prototype===n||typeof n!="function"&&Er(n)?Lr(n):ge(n)?wu(n):[]}:Lr,Bo=fr(true),Do=fr(),Mo=le(function(n,t){if(null==n)return{};if("function"!=typeof t[0])return t=Gn(pt(t),Ye),Nr(n,ft(Re(n),t));var r=Bt(t[0],t[1],3);return Tr(n,function(n,t,e){return!r(n,t,e)})}),qo=le(function(n,t){return null==n?{}:"function"==typeof t[0]?Tr(n,Bt(t[0],t[1],3)):Nr(n,pt(t))}),Po=Gt(function(n,t,r){return t=t.toLowerCase(),n+(r?t.charAt(0).toUpperCase()+t.slice(1):t);
}),Ko=Gt(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()}),Vo=ar(),Zo=ar(true),Yo=Gt(function(n,t,r){return n+(r?"_":"")+t.toLowerCase()}),Go=Gt(function(n,t,r){return n+(r?" ":"")+(t.charAt(0).toUpperCase()+t.slice(1))}),Jo=le(function(n,t){try{return n.apply(w,t)}catch(r){return _e(r)?r:new Me(r)}}),Xo=le(function(n,t){return function(r){return Or(r,n,t)}}),Ho=le(function(n,t){return function(r){return Or(n,r,t)}}),Qo=_r("ceil"),ni=_r("floor"),ti=Qt(se,Iu),ri=Qt(Ae,Ru),ei=_r("round");return Nn.prototype=Tn.prototype,
Ln.prototype=$u(Tn.prototype),Ln.prototype.constructor=Ln,zn.prototype=$u(Tn.prototype),zn.prototype.constructor=zn,Bn.prototype["delete"]=function(n){return this.has(n)&&delete this.__data__[n]},Bn.prototype.get=function(n){return"__proto__"==n?w:this.__data__[n]},Bn.prototype.has=function(n){return"__proto__"!=n&&nu.call(this.__data__,n)},Bn.prototype.set=function(n,t){return"__proto__"!=n&&(this.__data__[n]=t),this},Dn.prototype.push=function(n){var t=this.data;typeof n=="string"||ge(n)?t.set.add(n):t.hash[n]=true;
},ce.Cache=Bn,Nn.after=function(n,t){if(typeof t!="function"){if(typeof n!="function")throw new Ge(L);var r=n;n=t,t=r}return n=mu(n=+n)?n:0,function(){return 1>--n?t.apply(this,arguments):void 0}},Nn.ary=function(n,t,r){return r&&Ur(n,t,r)&&(t=w),t=n&&null==t?n.length:bu(+t||0,0),gr(n,E,w,w,w,w,t)},Nn.assign=Co,Nn.at=no,Nn.before=fe,Nn.bind=_o,Nn.bindAll=vo,Nn.bindKey=go,Nn.callback=Se,Nn.chain=Qr,Nn.chunk=function(n,t,r){t=(r?Ur(n,t,r):null==t)?1:bu(yu(t)||1,1),r=0;for(var e=n?n.length:0,u=-1,o=Be(vu(e/t));r<e;)o[++u]=Et(n,r,r+=t);
return o},Nn.compact=function(n){for(var t=-1,r=n?n.length:0,e=-1,u=[];++t<r;){var o=n[t];o&&(u[++e]=o)}return u},Nn.constant=function(n){return function(){return n}},Nn.countBy=to,Nn.create=function(n,t,r){var e=$u(n);return r&&Ur(n,t,r)&&(t=w),t?tt(e,t):e},Nn.curry=yo,Nn.curryRight=mo,Nn.debounce=ae,Nn.defaults=Uo,Nn.defaultsDeep=Wo,Nn.defer=wo,Nn.delay=bo,Nn.difference=Mu,Nn.drop=qr,Nn.dropRight=Pr,Nn.dropRightWhile=function(n,t,r){return n&&n.length?Nt(n,wr(t,r,3),true,true):[]},Nn.dropWhile=function(n,t,r){
return n&&n.length?Nt(n,wr(t,r,3),true):[]},Nn.fill=function(n,t,r,e){var u=n?n.length:0;if(!u)return[];for(r&&typeof r!="number"&&Ur(n,t,r)&&(r=0,e=u),u=n.length,r=null==r?0:+r||0,0>r&&(r=-r>u?0:u+r),e=e===w||e>u?u:+e||0,0>e&&(e+=u),u=r>e?0:e>>>0,r>>>=0;r<u;)n[r++]=t;return n},Nn.filter=re,Nn.flatten=function(n,t,r){var e=n?n.length:0;return r&&Ur(n,t,r)&&(t=false),e?pt(n,t):[]},Nn.flattenDeep=function(n){return n&&n.length?pt(n,true):[]},Nn.flow=xo,Nn.flowRight=Ao,Nn.forEach=uo,Nn.forEachRight=oo,Nn.forIn=Fo,
Nn.forInRight=No,Nn.forOwn=To,Nn.forOwnRight=Lo,Nn.functions=Ie,Nn.groupBy=io,Nn.indexBy=fo,Nn.initial=function(n){return Pr(n,1)},Nn.intersection=Ku,Nn.invert=function(n,t,r){r&&Ur(n,t,r)&&(t=w),r=-1;for(var e=zo(n),u=e.length,o={};++r<u;){var i=e[r],f=n[i];t?nu.call(o,f)?o[f].push(i):o[f]=[i]:o[f]=i}return o},Nn.invoke=ao,Nn.keys=zo,Nn.keysIn=Re,Nn.map=ue,Nn.mapKeys=Bo,Nn.mapValues=Do,Nn.matches=Ne,Nn.matchesProperty=function(n,t){return xt(n,ot(t,true))},Nn.memoize=ce,Nn.merge=Eo,Nn.method=Xo,Nn.methodOf=Ho,
Nn.mixin=Te,Nn.modArgs=jo,Nn.negate=function(n){if(typeof n!="function")throw new Ge(L);return function(){return!n.apply(this,arguments)}},Nn.omit=Mo,Nn.once=function(n){return fe(2,n)},Nn.pairs=Oe,Nn.partial=ko,Nn.partialRight=Io,Nn.partition=co,Nn.pick=qo,Nn.pluck=function(n,t){return ue(n,ze(t))},Nn.property=ze,Nn.propertyOf=function(n){return function(t){return yt(n,Dr(t),t+"")}},Nn.pull=function(){var n=arguments,t=n[0];if(!t||!t.length)return t;for(var r=0,e=xr(),u=n.length;++r<u;)for(var o=0,i=n[r];-1<(o=e(t,i,o));)pu.call(t,o,1);
return t},Nn.pullAt=Vu,Nn.range=function(n,t,r){r&&Ur(n,t,r)&&(t=r=w),n=+n||0,r=null==r?1:+r||0,null==t?(t=n,n=0):t=+t||0;var e=-1;t=bu(vu((t-n)/(r||1)),0);for(var u=Be(t);++e<t;)u[e]=n,n+=r;return u},Nn.rearg=Ro,Nn.reject=function(n,t,r){var e=Oo(n)?Vn:lt;return t=wr(t,r,3),e(n,function(n,r,e){return!t(n,r,e)})},Nn.remove=function(n,t,r){var e=[];if(!n||!n.length)return e;var u=-1,o=[],i=n.length;for(t=wr(t,r,3);++u<i;)r=n[u],t(r,u,n)&&(e.push(r),o.push(u));return It(n,o),e},Nn.rest=Yr,Nn.restParam=le,
Nn.set=function(n,t,r){if(null==n)return n;var e=t+"";t=null!=n[e]||Wr(t,n)?[e]:Dr(t);for(var e=-1,u=t.length,o=u-1,i=n;null!=i&&++e<u;){var f=t[e];ge(i)&&(e==o?i[f]=r:null==i[f]&&(i[f]=Cr(t[e+1])?[]:{})),i=i[f]}return n},Nn.shuffle=function(n){return oe(n,Ru)},Nn.slice=function(n,t,r){var e=n?n.length:0;return e?(r&&typeof r!="number"&&Ur(n,t,r)&&(t=0,r=e),Et(n,t,r)):[]},Nn.sortBy=function(n,t,r){if(null==n)return[];r&&Ur(n,t,r)&&(t=w);var e=-1;return t=wr(t,r,3),n=wt(n,function(n,r,u){return{a:t(n,r,u),
b:++e,c:n}}),Ut(n,f)},Nn.sortByAll=po,Nn.sortByOrder=function(n,t,r,e){return null==n?[]:(e&&Ur(t,r,e)&&(r=w),Oo(t)||(t=null==t?[]:[t]),Oo(r)||(r=null==r?[]:[r]),Wt(n,t,r))},Nn.spread=function(n){if(typeof n!="function")throw new Ge(L);return function(t){return n.apply(this,t)}},Nn.take=function(n,t,r){return n&&n.length?((r?Ur(n,t,r):null==t)&&(t=1),Et(n,0,0>t?0:t)):[]},Nn.takeRight=function(n,t,r){var e=n?n.length:0;return e?((r?Ur(n,t,r):null==t)&&(t=1),t=e-(+t||0),Et(n,0>t?0:t)):[]},Nn.takeRightWhile=function(n,t,r){
return n&&n.length?Nt(n,wr(t,r,3),false,true):[]},Nn.takeWhile=function(n,t,r){return n&&n.length?Nt(n,wr(t,r,3)):[]},Nn.tap=function(n,t,r){return t.call(r,n),n},Nn.throttle=function(n,t,r){var e=true,u=true;if(typeof n!="function")throw new Ge(L);return false===r?e=false:ge(r)&&(e="leading"in r?!!r.leading:e,u="trailing"in r?!!r.trailing:u),ae(n,t,{leading:e,maxWait:+t,trailing:u})},Nn.thru=ne,Nn.times=function(n,t,r){if(n=yu(n),1>n||!mu(n))return[];var e=-1,u=Be(xu(n,4294967295));for(t=Bt(t,r,1);++e<n;)4294967295>e?u[e]=t(e):t(e);
return u},Nn.toArray=je,Nn.toPlainObject=ke,Nn.transform=function(n,t,r,e){var u=Oo(n)||xe(n);return t=wr(t,e,4),null==r&&(u||ge(n)?(e=n.constructor,r=u?Oo(n)?new e:[]:$u(ve(e)?e.prototype:w)):r={}),(u?Pn:_t)(n,function(n,e,u){return t(r,n,e,u)}),r},Nn.union=Gu,Nn.uniq=Gr,Nn.unzip=Jr,Nn.unzipWith=Xr,Nn.values=Ee,Nn.valuesIn=function(n){return Ft(n,Re(n))},Nn.where=function(n,t){return re(n,bt(t))},Nn.without=Ju,Nn.wrap=function(n,t){return t=null==t?Fe:t,gr(t,R,w,[n],[])},Nn.xor=function(){for(var n=-1,t=arguments.length;++n<t;){
var r=arguments[n];if(Er(r))var e=e?Jn(ft(e,r),ft(r,e)):r}return e?St(e):[]},Nn.zip=Xu,Nn.zipObject=Hr,Nn.zipWith=Hu,Nn.backflow=Ao,Nn.collect=ue,Nn.compose=Ao,Nn.each=uo,Nn.eachRight=oo,Nn.extend=Co,Nn.iteratee=Se,Nn.methods=Ie,Nn.object=Hr,Nn.select=re,Nn.tail=Yr,Nn.unique=Gr,Te(Nn,Nn),Nn.add=function(n,t){return(+n||0)+(+t||0)},Nn.attempt=Jo,Nn.camelCase=Po,Nn.capitalize=function(n){return(n=u(n))&&n.charAt(0).toUpperCase()+n.slice(1)},Nn.ceil=Qo,Nn.clone=function(n,t,r,e){return t&&typeof t!="boolean"&&Ur(n,t,r)?t=false:typeof t=="function"&&(e=r,
r=t,t=false),typeof r=="function"?ot(n,t,Bt(r,e,3)):ot(n,t)},Nn.cloneDeep=function(n,t,r){return typeof t=="function"?ot(n,true,Bt(t,r,3)):ot(n,true)},Nn.deburr=Ce,Nn.endsWith=function(n,t,r){n=u(n),t+="";var e=n.length;return r=r===w?e:xu(0>r?0:+r||0,e),r-=t.length,0<=r&&n.indexOf(t,r)==r},Nn.escape=function(n){return(n=u(n))&&hn.test(n)?n.replace(sn,c):n},Nn.escapeRegExp=function(n){return(n=u(n))&&bn.test(n)?n.replace(wn,l):n||"(?:)"},Nn.every=te,Nn.find=ro,Nn.findIndex=qu,Nn.findKey=$o,Nn.findLast=eo,
Nn.findLastIndex=Pu,Nn.findLastKey=So,Nn.findWhere=function(n,t){return ro(n,bt(t))},Nn.first=Kr,Nn.floor=ni,Nn.get=function(n,t,r){return n=null==n?w:yt(n,Dr(t),t+""),n===w?r:n},Nn.gt=se,Nn.gte=function(n,t){return n>=t},Nn.has=function(n,t){if(null==n)return false;var r=nu.call(n,t);if(!r&&!Wr(t)){if(t=Dr(t),n=1==t.length?n:yt(n,Et(t,0,-1)),null==n)return false;t=Zr(t),r=nu.call(n,t)}return r||Sr(n.length)&&Cr(t,n.length)&&(Oo(n)||pe(n))},Nn.identity=Fe,Nn.includes=ee,Nn.indexOf=Vr,Nn.inRange=function(n,t,r){
return t=+t||0,r===w?(r=t,t=0):r=+r||0,n>=xu(t,r)&&n<bu(t,r)},Nn.isArguments=pe,Nn.isArray=Oo,Nn.isBoolean=function(n){return true===n||false===n||h(n)&&ru.call(n)==M},Nn.isDate=function(n){return h(n)&&ru.call(n)==q},Nn.isElement=function(n){return!!n&&1===n.nodeType&&h(n)&&!me(n)},Nn.isEmpty=function(n){return null==n?true:Er(n)&&(Oo(n)||be(n)||pe(n)||h(n)&&ve(n.splice))?!n.length:!zo(n).length},Nn.isEqual=he,Nn.isError=_e,Nn.isFinite=function(n){return typeof n=="number"&&mu(n)},Nn.isFunction=ve,Nn.isMatch=function(n,t,r,e){
return r=typeof r=="function"?Bt(r,e,3):w,mt(n,Ar(t),r)},Nn.isNaN=function(n){return de(n)&&n!=+n},Nn.isNative=ye,Nn.isNull=function(n){return null===n},Nn.isNumber=de,Nn.isObject=ge,Nn.isPlainObject=me,Nn.isRegExp=we,Nn.isString=be,Nn.isTypedArray=xe,Nn.isUndefined=function(n){return n===w},Nn.kebabCase=Ko,Nn.last=Zr,Nn.lastIndexOf=function(n,t,r){var e=n?n.length:0;if(!e)return-1;var u=e;if(typeof r=="number")u=(0>r?bu(e+r,0):xu(r||0,e-1))+1;else if(r)return u=Lt(n,t,true)-1,n=n[u],(t===t?t===n:n!==n)?u:-1;
if(t!==t)return p(n,u,true);for(;u--;)if(n[u]===t)return u;return-1},Nn.lt=Ae,Nn.lte=function(n,t){return n<=t},Nn.max=ti,Nn.min=ri,Nn.noConflict=function(){return Zn._=eu,this},Nn.noop=Le,Nn.now=ho,Nn.pad=function(n,t,r){n=u(n),t=+t;var e=n.length;return e<t&&mu(t)?(e=(t-e)/2,t=yu(e),e=vu(e),r=pr("",e,r),r.slice(0,t)+n+r):n},Nn.padLeft=Vo,Nn.padRight=Zo,Nn.parseInt=function(n,t,r){return(r?Ur(n,t,r):null==t)?t=0:t&&(t=+t),n=We(n),ju(n,t||(In.test(n)?16:10))},Nn.random=function(n,t,r){r&&Ur(n,t,r)&&(t=r=w);
var e=null==n,u=null==t;return null==r&&(u&&typeof n=="boolean"?(r=n,n=1):typeof t=="boolean"&&(r=t,u=true)),e&&u&&(t=1,u=false),n=+n||0,u?(t=n,n=0):t=+t||0,r||n%1||t%1?(r=ku(),xu(n+r*(t-n+fu("1e-"+((r+"").length-1))),t)):Rt(n,t)},Nn.reduce=lo,Nn.reduceRight=so,Nn.repeat=Ue,Nn.result=function(n,t,r){var e=null==n?w:n[t];return e===w&&(null==n||Wr(t,n)||(t=Dr(t),n=1==t.length?n:yt(n,Et(t,0,-1)),e=null==n?w:n[Zr(t)]),e=e===w?r:e),ve(e)?e.call(n):e},Nn.round=ei,Nn.runInContext=m,Nn.size=function(n){var t=n?Bu(n):0;
return Sr(t)?t:zo(n).length},Nn.snakeCase=Yo,Nn.some=ie,Nn.sortedIndex=Zu,Nn.sortedLastIndex=Yu,Nn.startCase=Go,Nn.startsWith=function(n,t,r){return n=u(n),r=null==r?0:xu(0>r?0:+r||0,n.length),n.lastIndexOf(t,r)==r},Nn.sum=function(n,t,r){if(r&&Ur(n,t,r)&&(t=w),t=wr(t,r,3),1==t.length){n=Oo(n)?n:zr(n),r=n.length;for(var e=0;r--;)e+=+t(n[r])||0;n=e}else n=$t(n,t);return n},Nn.template=function(n,t,r){var e=Nn.templateSettings;r&&Ur(n,t,r)&&(t=r=w),n=u(n),t=nt(tt({},r||t),e,Qn),r=nt(tt({},t.imports),e.imports,Qn);
var o,i,f=zo(r),a=Ft(r,f),c=0;r=t.interpolate||Cn;var l="__p+='";r=Ze((t.escape||Cn).source+"|"+r.source+"|"+(r===gn?jn:Cn).source+"|"+(t.evaluate||Cn).source+"|$","g");var p="sourceURL"in t?"//# sourceURL="+t.sourceURL+"\n":"";if(n.replace(r,function(t,r,e,u,f,a){return e||(e=u),l+=n.slice(c,a).replace(Un,s),r&&(o=true,l+="'+__e("+r+")+'"),f&&(i=true,l+="';"+f+";\n__p+='"),e&&(l+="'+((__t=("+e+"))==null?'':__t)+'"),c=a+t.length,t}),l+="';",(t=t.variable)||(l="with(obj){"+l+"}"),l=(i?l.replace(fn,""):l).replace(an,"$1").replace(cn,"$1;"),
l="function("+(t||"obj")+"){"+(t?"":"obj||(obj={});")+"var __t,__p=''"+(o?",__e=_.escape":"")+(i?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+l+"return __p}",t=Jo(function(){return qe(f,p+"return "+l).apply(w,a)}),t.source=l,_e(t))throw t;return t},Nn.trim=We,Nn.trimLeft=function(n,t,r){var e=n;return(n=u(n))?n.slice((r?Ur(e,t,r):null==t)?g(n):o(n,t+"")):n},Nn.trimRight=function(n,t,r){var e=n;return(n=u(n))?(r?Ur(e,t,r):null==t)?n.slice(0,y(n)+1):n.slice(0,i(n,t+"")+1):n;
},Nn.trunc=function(n,t,r){r&&Ur(n,t,r)&&(t=w);var e=U;if(r=W,null!=t)if(ge(t)){var o="separator"in t?t.separator:o,e="length"in t?+t.length||0:e;r="omission"in t?u(t.omission):r}else e=+t||0;if(n=u(n),e>=n.length)return n;if(e-=r.length,1>e)return r;if(t=n.slice(0,e),null==o)return t+r;if(we(o)){if(n.slice(e).search(o)){var i,f=n.slice(0,e);for(o.global||(o=Ze(o.source,(kn.exec(o)||"")+"g")),o.lastIndex=0;n=o.exec(f);)i=n.index;t=t.slice(0,null==i?e:i)}}else n.indexOf(o,e)!=e&&(o=t.lastIndexOf(o),
-1<o&&(t=t.slice(0,o)));return t+r},Nn.unescape=function(n){return(n=u(n))&&pn.test(n)?n.replace(ln,d):n},Nn.uniqueId=function(n){var t=++tu;return u(n)+t},Nn.words=$e,Nn.all=te,Nn.any=ie,Nn.contains=ee,Nn.eq=he,Nn.detect=ro,Nn.foldl=lo,Nn.foldr=so,Nn.head=Kr,Nn.include=ee,Nn.inject=lo,Te(Nn,function(){var n={};return _t(Nn,function(t,r){Nn.prototype[r]||(n[r]=t)}),n}(),false),Nn.sample=oe,Nn.prototype.sample=function(n){return this.__chain__||null!=n?this.thru(function(t){return oe(t,n)}):oe(this.value());
},Nn.VERSION=b,Pn("bind bindKey curry curryRight partial partialRight".split(" "),function(n){Nn[n].placeholder=Nn}),Pn(["drop","take"],function(n,t){zn.prototype[n]=function(r){var e=this.__filtered__;if(e&&!t)return new zn(this);r=null==r?1:bu(yu(r)||0,0);var u=this.clone();return e?u.__takeCount__=xu(u.__takeCount__,r):u.__views__.push({size:r,type:n+(0>u.__dir__?"Right":"")}),u},zn.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()}}),Pn(["filter","map","takeWhile"],function(n,t){
var r=t+1,e=r!=T;zn.prototype[n]=function(n,t){var u=this.clone();return u.__iteratees__.push({iteratee:wr(n,t,1),type:r}),u.__filtered__=u.__filtered__||e,u}}),Pn(["first","last"],function(n,t){var r="take"+(t?"Right":"");zn.prototype[n]=function(){return this[r](1).value()[0]}}),Pn(["initial","rest"],function(n,t){var r="drop"+(t?"":"Right");zn.prototype[n]=function(){return this.__filtered__?new zn(this):this[r](1)}}),Pn(["pluck","where"],function(n,t){var r=t?"filter":"map",e=t?bt:ze;zn.prototype[n]=function(n){
return this[r](e(n))}}),zn.prototype.compact=function(){return this.filter(Fe)},zn.prototype.reject=function(n,t){return n=wr(n,t,1),this.filter(function(t){return!n(t)})},zn.prototype.slice=function(n,t){n=null==n?0:+n||0;var r=this;return r.__filtered__&&(0<n||0>t)?new zn(r):(0>n?r=r.takeRight(-n):n&&(r=r.drop(n)),t!==w&&(t=+t||0,r=0>t?r.dropRight(-t):r.take(t-n)),r)},zn.prototype.takeRightWhile=function(n,t){return this.reverse().takeWhile(n,t).reverse()},zn.prototype.toArray=function(){return this.take(Ru);
},_t(zn.prototype,function(n,t){var r=/^(?:filter|map|reject)|While$/.test(t),e=/^(?:first|last)$/.test(t),u=Nn[e?"take"+("last"==t?"Right":""):t];u&&(Nn.prototype[t]=function(){function t(n){return e&&i?u(n,1)[0]:u.apply(w,Jn([n],o))}var o=e?[1]:arguments,i=this.__chain__,f=this.__wrapped__,a=!!this.__actions__.length,c=f instanceof zn,l=o[0],s=c||Oo(f);return s&&r&&typeof l=="function"&&1!=l.length&&(c=s=false),l={func:ne,args:[t],thisArg:w},a=c&&!a,e&&!i?a?(f=f.clone(),f.__actions__.push(l),n.call(f)):u.call(w,this.value())[0]:!e&&s?(f=a?f:new zn(this),
f=n.apply(f,o),f.__actions__.push(l),new Ln(f,i)):this.thru(t)})}),Pn("join pop push replace shift sort splice split unshift".split(" "),function(n){var t=(/^(?:replace|split)$/.test(n)?He:Je)[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:join|pop|replace|shift)$/.test(n);Nn.prototype[n]=function(){var n=arguments;return e&&!this.__chain__?t.apply(this.value(),n):this[r](function(r){return t.apply(r,n)})}}),_t(zn.prototype,function(n,t){var r=Nn[t];if(r){var e=r.name+"";(Wu[e]||(Wu[e]=[])).push({
name:t,func:r})}}),Wu[sr(w,A).name]=[{name:"wrapper",func:w}],zn.prototype.clone=function(){var n=new zn(this.__wrapped__);return n.__actions__=qn(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=qn(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=qn(this.__views__),n},zn.prototype.reverse=function(){if(this.__filtered__){var n=new zn(this);n.__dir__=-1,n.__filtered__=true}else n=this.clone(),n.__dir__*=-1;return n},zn.prototype.value=function(){
var n,t=this.__wrapped__.value(),r=this.__dir__,e=Oo(t),u=0>r,o=e?t.length:0;n=o;for(var i=this.__views__,f=0,a=-1,c=i.length;++a<c;){var l=i[a],s=l.size;switch(l.type){case"drop":f+=s;break;case"dropRight":n-=s;break;case"take":n=xu(n,f+s);break;case"takeRight":f=bu(f,n-s)}}if(n={start:f,end:n},i=n.start,f=n.end,n=f-i,u=u?f:i-1,i=this.__iteratees__,f=i.length,a=0,c=xu(n,this.__takeCount__),!e||o<F||o==n&&c==n)return Tt(t,this.__actions__);e=[];n:for(;n--&&a<c;){for(u+=r,o=-1,l=t[u];++o<f;){var p=i[o],s=p.type,p=p.iteratee(l);
if(s==T)l=p;else if(!p){if(s==N)continue n;break n}}e[a++]=l}return e},Nn.prototype.chain=function(){return Qr(this)},Nn.prototype.commit=function(){return new Ln(this.value(),this.__chain__)},Nn.prototype.concat=Qu,Nn.prototype.plant=function(n){for(var t,r=this;r instanceof Tn;){var e=Mr(r);t?u.__wrapped__=e:t=e;var u=e,r=r.__wrapped__}return u.__wrapped__=n,t},Nn.prototype.reverse=function(){function n(n){return n.reverse()}var t=this.__wrapped__;return t instanceof zn?(this.__actions__.length&&(t=new zn(this)),
t=t.reverse(),t.__actions__.push({func:ne,args:[n],thisArg:w}),new Ln(t,this.__chain__)):this.thru(n)},Nn.prototype.toString=function(){return this.value()+""},Nn.prototype.run=Nn.prototype.toJSON=Nn.prototype.valueOf=Nn.prototype.value=function(){return Tt(this.__wrapped__,this.__actions__)},Nn.prototype.collect=Nn.prototype.map,Nn.prototype.head=Nn.prototype.first,Nn.prototype.select=Nn.prototype.filter,Nn.prototype.tail=Nn.prototype.rest,Nn}var w,b="3.10.1",x=1,A=2,j=4,k=8,I=16,R=32,O=64,E=128,C=256,U=30,W="...",$=150,S=16,F=200,N=1,T=2,L="Expected a function",z="__lodash_placeholder__",B="[object Arguments]",D="[object Array]",M="[object Boolean]",q="[object Date]",P="[object Error]",K="[object Function]",V="[object Number]",Z="[object Object]",Y="[object RegExp]",G="[object String]",J="[object ArrayBuffer]",X="[object Float32Array]",H="[object Float64Array]",Q="[object Int8Array]",nn="[object Int16Array]",tn="[object Int32Array]",rn="[object Uint8Array]",en="[object Uint8ClampedArray]",un="[object Uint16Array]",on="[object Uint32Array]",fn=/\b__p\+='';/g,an=/\b(__p\+=)''\+/g,cn=/(__e\(.*?\)|\b__t\))\+'';/g,ln=/&(?:amp|lt|gt|quot|#39|#96);/g,sn=/[&<>"'`]/g,pn=RegExp(ln.source),hn=RegExp(sn.source),_n=/<%-([\s\S]+?)%>/g,vn=/<%([\s\S]+?)%>/g,gn=/<%=([\s\S]+?)%>/g,yn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,dn=/^\w*$/,mn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,wn=/^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g,bn=RegExp(wn.source),xn=/[\u0300-\u036f\ufe20-\ufe23]/g,An=/\\(\\)?/g,jn=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,kn=/\w*$/,In=/^0[xX]/,Rn=/^\[object .+?Constructor\]$/,On=/^\d+$/,En=/[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,Cn=/($^)/,Un=/['\n\r\u2028\u2029\\]/g,Wn=RegExp("[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?=[A-Z\\xc0-\\xd6\\xd8-\\xde][a-z\\xdf-\\xf6\\xf8-\\xff]+)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+|[A-Z\\xc0-\\xd6\\xd8-\\xde]+|[0-9]+","g"),$n="Array ArrayBuffer Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Math Number Object RegExp Set String _ clearTimeout isFinite parseFloat parseInt setTimeout TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap".split(" "),Sn={};
Sn[X]=Sn[H]=Sn[Q]=Sn[nn]=Sn[tn]=Sn[rn]=Sn[en]=Sn[un]=Sn[on]=true,Sn[B]=Sn[D]=Sn[J]=Sn[M]=Sn[q]=Sn[P]=Sn[K]=Sn["[object Map]"]=Sn[V]=Sn[Z]=Sn[Y]=Sn["[object Set]"]=Sn[G]=Sn["[object WeakMap]"]=false;var Fn={};Fn[B]=Fn[D]=Fn[J]=Fn[M]=Fn[q]=Fn[X]=Fn[H]=Fn[Q]=Fn[nn]=Fn[tn]=Fn[V]=Fn[Z]=Fn[Y]=Fn[G]=Fn[rn]=Fn[en]=Fn[un]=Fn[on]=true,Fn[P]=Fn[K]=Fn["[object Map]"]=Fn["[object Set]"]=Fn["[object WeakMap]"]=false;var Nn={"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a",
"\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y",
"\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss"},Tn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},Ln={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&#96;":"`"},zn={"function":true,object:true},Bn={0:"x30",1:"x31",2:"x32",3:"x33",4:"x34",5:"x35",6:"x36",7:"x37",8:"x38",9:"x39",A:"x41",B:"x42",C:"x43",D:"x44",E:"x45",F:"x46",a:"x61",b:"x62",c:"x63",d:"x64",e:"x65",f:"x66",n:"x6e",r:"x72",t:"x74",u:"x75",v:"x76",x:"x78"},Dn={"\\":"\\",
"'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Mn=zn[typeof exports]&&exports&&!exports.nodeType&&exports,qn=zn[typeof module]&&module&&!module.nodeType&&module,Pn=zn[typeof self]&&self&&self.Object&&self,Kn=zn[typeof window]&&window&&window.Object&&window,Vn=qn&&qn.exports===Mn&&Mn,Zn=Mn&&qn&&typeof global=="object"&&global&&global.Object&&global||Kn!==(this&&this.window)&&Kn||Pn||this,Yn=m();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(Zn._=Yn, define(function(){
return Yn})):Mn&&qn?Vn?(qn.exports=Yn)._=Yn:Mn._=Yn:Zn._=Yn}).call(this);
/*
 AngularJS v1.4.8
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(n,h,p){'use strict';function E(a){var f=[];r(f,h.noop).chars(a);return f.join("")}function g(a,f){var d={},c=a.split(","),b;for(b=0;b<c.length;b++)d[f?h.lowercase(c[b]):c[b]]=!0;return d}function F(a,f){function d(a,b,d,l){b=h.lowercase(b);if(s[b])for(;e.last()&&t[e.last()];)c("",e.last());u[b]&&e.last()==b&&c("",b);(l=v[b]||!!l)||e.push(b);var m={};d.replace(G,function(b,a,f,c,d){m[a]=q(f||c||d||"")});f.start&&f.start(b,m,l)}function c(b,a){var c=0,d;if(a=h.lowercase(a))for(c=e.length-
1;0<=c&&e[c]!=a;c--);if(0<=c){for(d=e.length-1;d>=c;d--)f.end&&f.end(e[d]);e.length=c}}"string"!==typeof a&&(a=null===a||"undefined"===typeof a?"":""+a);var b,k,e=[],m=a,l;for(e.last=function(){return e[e.length-1]};a;){l="";k=!0;if(e.last()&&w[e.last()])a=a.replace(new RegExp("([\\W\\w]*)<\\s*\\/\\s*"+e.last()+"[^>]*>","i"),function(a,b){b=b.replace(H,"$1").replace(I,"$1");f.chars&&f.chars(q(b));return""}),c("",e.last());else{if(0===a.indexOf("\x3c!--"))b=a.indexOf("--",4),0<=b&&a.lastIndexOf("--\x3e",
b)===b&&(f.comment&&f.comment(a.substring(4,b)),a=a.substring(b+3),k=!1);else if(x.test(a)){if(b=a.match(x))a=a.replace(b[0],""),k=!1}else if(J.test(a)){if(b=a.match(y))a=a.substring(b[0].length),b[0].replace(y,c),k=!1}else K.test(a)&&((b=a.match(z))?(b[4]&&(a=a.substring(b[0].length),b[0].replace(z,d)),k=!1):(l+="<",a=a.substring(1)));k&&(b=a.indexOf("<"),l+=0>b?a:a.substring(0,b),a=0>b?"":a.substring(b),f.chars&&f.chars(q(l)))}if(a==m)throw L("badparse",a);m=a}c()}function q(a){if(!a)return"";A.innerHTML=
a.replace(/</g,"&lt;");return A.textContent}function B(a){return a.replace(/&/g,"&amp;").replace(M,function(a){var d=a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(d-55296)+(a-56320)+65536)+";"}).replace(N,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function r(a,f){var d=!1,c=h.bind(a,a.push);return{start:function(a,k,e){a=h.lowercase(a);!d&&w[a]&&(d=a);d||!0!==C[a]||(c("<"),c(a),h.forEach(k,function(d,e){var k=h.lowercase(e),g="img"===a&&"src"===k||
"background"===k;!0!==O[k]||!0===D[k]&&!f(d,g)||(c(" "),c(e),c('="'),c(B(d)),c('"'))}),c(e?"/>":">"))},end:function(a){a=h.lowercase(a);d||!0!==C[a]||(c("</"),c(a),c(">"));a==d&&(d=!1)},chars:function(a){d||c(B(a))}}}var L=h.$$minErr("$sanitize"),z=/^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,y=/^<\/\s*([\w:-]+)[^>]*>/,G=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,K=/^</,J=/^<\//,H=/\x3c!--(.*?)--\x3e/g,x=/<!DOCTYPE([^>]*?)>/i,
I=/<!\[CDATA\[(.*?)]]\x3e/g,M=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,N=/([^\#-~| |!])/g,v=g("area,br,col,hr,img,wbr");n=g("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");p=g("rp,rt");var u=h.extend({},p,n),s=h.extend({},n,g("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),t=h.extend({},p,g("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var"));
n=g("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan,use");var w=g("script,style"),C=h.extend({},v,s,t,u,n),D=g("background,cite,href,longdesc,src,usemap,xlink:href");n=g("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width");
p=g("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",
!0);var O=h.extend({},D,p,n),A=document.createElement("pre");h.module("ngSanitize",[]).provider("$sanitize",function(){this.$get=["$$sanitizeUri",function(a){return function(f){var d=[];F(f,r(d,function(c,b){return!/^unsafe/.test(a(c,b))}));return d.join("")}}]});h.module("ngSanitize").filter("linky",["$sanitize",function(a){var f=/((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,d=/^mailto:/i;return function(c,b){function k(a){a&&g.push(E(a))}function e(a,
c){g.push("<a ");h.isDefined(b)&&g.push('target="',b,'" ');g.push('href="',a.replace(/"/g,"&quot;"),'">');k(c);g.push("</a>")}if(!c)return c;for(var m,l=c,g=[],n,p;m=l.match(f);)n=m[0],m[2]||m[4]||(n=(m[3]?"http://":"mailto:")+n),p=m.index,k(l.substr(0,p)),e(n,m[0].replace(d,"")),l=l.substring(p+m[0].length);k(l);return a(g.join(""))}}])})(window,window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map

/**
 * State-based routing for AngularJS
 * @version v0.2.15
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="ui.router"),function(a,b,c){"use strict";function d(a,b){return N(new(N(function(){},{prototype:a})),b)}function e(a){return M(arguments,function(b){b!==a&&M(b,function(b,c){a.hasOwnProperty(c)||(a[c]=b)})}),a}function f(a,b){var c=[];for(var d in a.path){if(a.path[d]!==b.path[d])break;c.push(a.path[d])}return c}function g(a){if(Object.keys)return Object.keys(a);var b=[];return M(a,function(a,c){b.push(c)}),b}function h(a,b){if(Array.prototype.indexOf)return a.indexOf(b,Number(arguments[2])||0);var c=a.length>>>0,d=Number(arguments[2])||0;for(d=0>d?Math.ceil(d):Math.floor(d),0>d&&(d+=c);c>d;d++)if(d in a&&a[d]===b)return d;return-1}function i(a,b,c,d){var e,i=f(c,d),j={},k=[];for(var l in i)if(i[l].params&&(e=g(i[l].params),e.length))for(var m in e)h(k,e[m])>=0||(k.push(e[m]),j[e[m]]=a[e[m]]);return N({},j,b)}function j(a,b,c){if(!c){c=[];for(var d in a)c.push(d)}for(var e=0;e<c.length;e++){var f=c[e];if(a[f]!=b[f])return!1}return!0}function k(a,b){var c={};return M(a,function(a){c[a]=b[a]}),c}function l(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));return M(c,function(c){c in a&&(b[c]=a[c])}),b}function m(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));for(var d in a)-1==h(c,d)&&(b[d]=a[d]);return b}function n(a,b){var c=L(a),d=c?[]:{};return M(a,function(a,e){b(a,e)&&(d[c?d.length:e]=a)}),d}function o(a,b){var c=L(a)?[]:{};return M(a,function(a,d){c[d]=b(a,d)}),c}function p(a,b){var d=1,f=2,i={},j=[],k=i,l=N(a.when(i),{$$promises:i,$$values:i});this.study=function(i){function n(a,c){if(s[c]!==f){if(r.push(c),s[c]===d)throw r.splice(0,h(r,c)),new Error("Cyclic dependency: "+r.join(" -> "));if(s[c]=d,J(a))q.push(c,[function(){return b.get(a)}],j);else{var e=b.annotate(a);M(e,function(a){a!==c&&i.hasOwnProperty(a)&&n(i[a],a)}),q.push(c,a,e)}r.pop(),s[c]=f}}function o(a){return K(a)&&a.then&&a.$$promises}if(!K(i))throw new Error("'invocables' must be an object");var p=g(i||{}),q=[],r=[],s={};return M(i,n),i=r=s=null,function(d,f,g){function h(){--u||(v||e(t,f.$$values),r.$$values=t,r.$$promises=r.$$promises||!0,delete r.$$inheritedValues,n.resolve(t))}function i(a){r.$$failure=a,n.reject(a)}function j(c,e,f){function j(a){l.reject(a),i(a)}function k(){if(!H(r.$$failure))try{l.resolve(b.invoke(e,g,t)),l.promise.then(function(a){t[c]=a,h()},j)}catch(a){j(a)}}var l=a.defer(),m=0;M(f,function(a){s.hasOwnProperty(a)&&!d.hasOwnProperty(a)&&(m++,s[a].then(function(b){t[a]=b,--m||k()},j))}),m||k(),s[c]=l.promise}if(o(d)&&g===c&&(g=f,f=d,d=null),d){if(!K(d))throw new Error("'locals' must be an object")}else d=k;if(f){if(!o(f))throw new Error("'parent' must be a promise returned by $resolve.resolve()")}else f=l;var n=a.defer(),r=n.promise,s=r.$$promises={},t=N({},d),u=1+q.length/3,v=!1;if(H(f.$$failure))return i(f.$$failure),r;f.$$inheritedValues&&e(t,m(f.$$inheritedValues,p)),N(s,f.$$promises),f.$$values?(v=e(t,m(f.$$values,p)),r.$$inheritedValues=m(f.$$values,p),h()):(f.$$inheritedValues&&(r.$$inheritedValues=m(f.$$inheritedValues,p)),f.then(h,i));for(var w=0,x=q.length;x>w;w+=3)d.hasOwnProperty(q[w])?h():j(q[w],q[w+1],q[w+2]);return r}},this.resolve=function(a,b,c,d){return this.study(a)(b,c,d)}}function q(a,b,c){this.fromConfig=function(a,b,c){return H(a.template)?this.fromString(a.template,b):H(a.templateUrl)?this.fromUrl(a.templateUrl,b):H(a.templateProvider)?this.fromProvider(a.templateProvider,b,c):null},this.fromString=function(a,b){return I(a)?a(b):a},this.fromUrl=function(c,d){return I(c)&&(c=c(d)),null==c?null:a.get(c,{cache:b,headers:{Accept:"text/html"}}).then(function(a){return a.data})},this.fromProvider=function(a,b,d){return c.invoke(a,null,d||{params:b})}}function r(a,b,e){function f(b,c,d,e){if(q.push(b),o[b])return o[b];if(!/^\w+(-+\w+)*(?:\[\])?$/.test(b))throw new Error("Invalid parameter name '"+b+"' in pattern '"+a+"'");if(p[b])throw new Error("Duplicate parameter name '"+b+"' in pattern '"+a+"'");return p[b]=new P.Param(b,c,d,e),p[b]}function g(a,b,c,d){var e=["",""],f=a.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&");if(!b)return f;switch(c){case!1:e=["(",")"+(d?"?":"")];break;case!0:e=["?(",")?"];break;default:e=["("+c+"|",")?"]}return f+e[0]+b+e[1]}function h(e,f){var g,h,i,j,k;return g=e[2]||e[3],k=b.params[g],i=a.substring(m,e.index),h=f?e[4]:e[4]||("*"==e[1]?".*":null),j=P.type(h||"string")||d(P.type("string"),{pattern:new RegExp(h,b.caseInsensitive?"i":c)}),{id:g,regexp:h,segment:i,type:j,cfg:k}}b=N({params:{}},K(b)?b:{});var i,j=/([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,k=/([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,l="^",m=0,n=this.segments=[],o=e?e.params:{},p=this.params=e?e.params.$$new():new P.ParamSet,q=[];this.source=a;for(var r,s,t;(i=j.exec(a))&&(r=h(i,!1),!(r.segment.indexOf("?")>=0));)s=f(r.id,r.type,r.cfg,"path"),l+=g(r.segment,s.type.pattern.source,s.squash,s.isOptional),n.push(r.segment),m=j.lastIndex;t=a.substring(m);var u=t.indexOf("?");if(u>=0){var v=this.sourceSearch=t.substring(u);if(t=t.substring(0,u),this.sourcePath=a.substring(0,m+u),v.length>0)for(m=0;i=k.exec(v);)r=h(i,!0),s=f(r.id,r.type,r.cfg,"search"),m=j.lastIndex}else this.sourcePath=a,this.sourceSearch="";l+=g(t)+(b.strict===!1?"/?":"")+"$",n.push(t),this.regexp=new RegExp(l,b.caseInsensitive?"i":c),this.prefix=n[0],this.$$paramNames=q}function s(a){N(this,a)}function t(){function a(a){return null!=a?a.toString().replace(/\//g,"%2F"):a}function e(a){return null!=a?a.toString().replace(/%2F/g,"/"):a}function f(){return{strict:p,caseInsensitive:m}}function i(a){return I(a)||L(a)&&I(a[a.length-1])}function j(){for(;w.length;){var a=w.shift();if(a.pattern)throw new Error("You cannot override a type's .pattern at runtime.");b.extend(u[a.name],l.invoke(a.def))}}function k(a){N(this,a||{})}P=this;var l,m=!1,p=!0,q=!1,u={},v=!0,w=[],x={string:{encode:a,decode:e,is:function(a){return null==a||!H(a)||"string"==typeof a},pattern:/[^/]*/},"int":{encode:a,decode:function(a){return parseInt(a,10)},is:function(a){return H(a)&&this.decode(a.toString())===a},pattern:/\d+/},bool:{encode:function(a){return a?1:0},decode:function(a){return 0!==parseInt(a,10)},is:function(a){return a===!0||a===!1},pattern:/0|1/},date:{encode:function(a){return this.is(a)?[a.getFullYear(),("0"+(a.getMonth()+1)).slice(-2),("0"+a.getDate()).slice(-2)].join("-"):c},decode:function(a){if(this.is(a))return a;var b=this.capture.exec(a);return b?new Date(b[1],b[2]-1,b[3]):c},is:function(a){return a instanceof Date&&!isNaN(a.valueOf())},equals:function(a,b){return this.is(a)&&this.is(b)&&a.toISOString()===b.toISOString()},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/},json:{encode:b.toJson,decode:b.fromJson,is:b.isObject,equals:b.equals,pattern:/[^/]*/},any:{encode:b.identity,decode:b.identity,equals:b.equals,pattern:/.*/}};t.$$getDefaultValue=function(a){if(!i(a.value))return a.value;if(!l)throw new Error("Injectable functions cannot be called at configuration time");return l.invoke(a.value)},this.caseInsensitive=function(a){return H(a)&&(m=a),m},this.strictMode=function(a){return H(a)&&(p=a),p},this.defaultSquashPolicy=function(a){if(!H(a))return q;if(a!==!0&&a!==!1&&!J(a))throw new Error("Invalid squash policy: "+a+". Valid policies: false, true, arbitrary-string");return q=a,a},this.compile=function(a,b){return new r(a,N(f(),b))},this.isMatcher=function(a){if(!K(a))return!1;var b=!0;return M(r.prototype,function(c,d){I(c)&&(b=b&&H(a[d])&&I(a[d]))}),b},this.type=function(a,b,c){if(!H(b))return u[a];if(u.hasOwnProperty(a))throw new Error("A type named '"+a+"' has already been defined.");return u[a]=new s(N({name:a},b)),c&&(w.push({name:a,def:c}),v||j()),this},M(x,function(a,b){u[b]=new s(N({name:b},a))}),u=d(u,{}),this.$get=["$injector",function(a){return l=a,v=!1,j(),M(x,function(a,b){u[b]||(u[b]=new s(a))}),this}],this.Param=function(a,b,d,e){function f(a){var b=K(a)?g(a):[],c=-1===h(b,"value")&&-1===h(b,"type")&&-1===h(b,"squash")&&-1===h(b,"array");return c&&(a={value:a}),a.$$fn=i(a.value)?a.value:function(){return a.value},a}function j(b,c,d){if(b.type&&c)throw new Error("Param '"+a+"' has two type configurations.");return c?c:b.type?b.type instanceof s?b.type:new s(b.type):"config"===d?u.any:u.string}function k(){var b={array:"search"===e?"auto":!1},c=a.match(/\[\]$/)?{array:!0}:{};return N(b,c,d).array}function m(a,b){var c=a.squash;if(!b||c===!1)return!1;if(!H(c)||null==c)return q;if(c===!0||J(c))return c;throw new Error("Invalid squash policy: '"+c+"'. Valid policies: false, true, or arbitrary string")}function p(a,b,d,e){var f,g,i=[{from:"",to:d||b?c:""},{from:null,to:d||b?c:""}];return f=L(a.replace)?a.replace:[],J(e)&&f.push({from:e,to:c}),g=o(f,function(a){return a.from}),n(i,function(a){return-1===h(g,a.from)}).concat(f)}function r(){if(!l)throw new Error("Injectable functions cannot be called at configuration time");var a=l.invoke(d.$$fn);if(null!==a&&a!==c&&!w.type.is(a))throw new Error("Default value ("+a+") for parameter '"+w.id+"' is not an instance of Type ("+w.type.name+")");return a}function t(a){function b(a){return function(b){return b.from===a}}function c(a){var c=o(n(w.replace,b(a)),function(a){return a.to});return c.length?c[0]:a}return a=c(a),H(a)?w.type.$normalize(a):r()}function v(){return"{Param:"+a+" "+b+" squash: '"+z+"' optional: "+y+"}"}var w=this;d=f(d),b=j(d,b,e);var x=k();b=x?b.$asArray(x,"search"===e):b,"string"!==b.name||x||"path"!==e||d.value!==c||(d.value="");var y=d.value!==c,z=m(d,y),A=p(d,x,y,z);N(this,{id:a,type:b,location:e,array:x,squash:z,replace:A,isOptional:y,value:t,dynamic:c,config:d,toString:v})},k.prototype={$$new:function(){return d(this,N(new k,{$$parent:this}))},$$keys:function(){for(var a=[],b=[],c=this,d=g(k.prototype);c;)b.push(c),c=c.$$parent;return b.reverse(),M(b,function(b){M(g(b),function(b){-1===h(a,b)&&-1===h(d,b)&&a.push(b)})}),a},$$values:function(a){var b={},c=this;return M(c.$$keys(),function(d){b[d]=c[d].value(a&&a[d])}),b},$$equals:function(a,b){var c=!0,d=this;return M(d.$$keys(),function(e){var f=a&&a[e],g=b&&b[e];d[e].type.equals(f,g)||(c=!1)}),c},$$validates:function(a){var d,e,f,g,h,i=this.$$keys();for(d=0;d<i.length&&(e=this[i[d]],f=a[i[d]],f!==c&&null!==f||!e.isOptional);d++){if(g=e.type.$normalize(f),!e.type.is(g))return!1;if(h=e.type.encode(g),b.isString(h)&&!e.type.pattern.exec(h))return!1}return!0},$$parent:c},this.ParamSet=k}function u(a,d){function e(a){var b=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);return null!=b?b[1].replace(/\\(.)/g,"$1"):""}function f(a,b){return a.replace(/\$(\$|\d{1,2})/,function(a,c){return b["$"===c?0:Number(c)]})}function g(a,b,c){if(!c)return!1;var d=a.invoke(b,b,{$match:c});return H(d)?d:!0}function h(d,e,f,g){function h(a,b,c){return"/"===p?a:b?p.slice(0,-1)+a:c?p.slice(1)+a:a}function m(a){function b(a){var b=a(f,d);return b?(J(b)&&d.replace().url(b),!0):!1}if(!a||!a.defaultPrevented){o&&d.url()===o;o=c;var e,g=j.length;for(e=0;g>e;e++)if(b(j[e]))return;k&&b(k)}}function n(){return i=i||e.$on("$locationChangeSuccess",m)}var o,p=g.baseHref(),q=d.url();return l||n(),{sync:function(){m()},listen:function(){return n()},update:function(a){return a?void(q=d.url()):void(d.url()!==q&&(d.url(q),d.replace()))},push:function(a,b,e){var f=a.format(b||{});null!==f&&b&&b["#"]&&(f+="#"+b["#"]),d.url(f),o=e&&e.$$avoidResync?d.url():c,e&&e.replace&&d.replace()},href:function(c,e,f){if(!c.validates(e))return null;var g=a.html5Mode();b.isObject(g)&&(g=g.enabled);var i=c.format(e);if(f=f||{},g||null===i||(i="#"+a.hashPrefix()+i),null!==i&&e&&e["#"]&&(i+="#"+e["#"]),i=h(i,g,f.absolute),!f.absolute||!i)return i;var j=!g&&i?"/":"",k=d.port();return k=80===k||443===k?"":":"+k,[d.protocol(),"://",d.host(),k,j,i].join("")}}}var i,j=[],k=null,l=!1;this.rule=function(a){if(!I(a))throw new Error("'rule' must be a function");return j.push(a),this},this.otherwise=function(a){if(J(a)){var b=a;a=function(){return b}}else if(!I(a))throw new Error("'rule' must be a function");return k=a,this},this.when=function(a,b){var c,h=J(b);if(J(a)&&(a=d.compile(a)),!h&&!I(b)&&!L(b))throw new Error("invalid 'handler' in when()");var i={matcher:function(a,b){return h&&(c=d.compile(b),b=["$match",function(a){return c.format(a)}]),N(function(c,d){return g(c,b,a.exec(d.path(),d.search()))},{prefix:J(a.prefix)?a.prefix:""})},regex:function(a,b){if(a.global||a.sticky)throw new Error("when() RegExp must not be global or sticky");return h&&(c=b,b=["$match",function(a){return f(c,a)}]),N(function(c,d){return g(c,b,a.exec(d.path()))},{prefix:e(a)})}},j={matcher:d.isMatcher(a),regex:a instanceof RegExp};for(var k in j)if(j[k])return this.rule(i[k](a,b));throw new Error("invalid 'what' in when()")},this.deferIntercept=function(a){a===c&&(a=!0),l=a},this.$get=h,h.$inject=["$location","$rootScope","$injector","$browser"]}function v(a,e){function f(a){return 0===a.indexOf(".")||0===a.indexOf("^")}function m(a,b){if(!a)return c;var d=J(a),e=d?a:a.name,g=f(e);if(g){if(!b)throw new Error("No reference point given for path '"+e+"'");b=m(b);for(var h=e.split("."),i=0,j=h.length,k=b;j>i;i++)if(""!==h[i]||0!==i){if("^"!==h[i])break;if(!k.parent)throw new Error("Path '"+e+"' not valid for state '"+b.name+"'");k=k.parent}else k=b;h=h.slice(i).join("."),e=k.name+(k.name&&h?".":"")+h}var l=z[e];return!l||!d&&(d||l!==a&&l.self!==a)?c:l}function n(a,b){A[a]||(A[a]=[]),A[a].push(b)}function p(a){for(var b=A[a]||[];b.length;)q(b.shift())}function q(b){b=d(b,{self:b,resolve:b.resolve||{},toString:function(){return this.name}});var c=b.name;if(!J(c)||c.indexOf("@")>=0)throw new Error("State must have a valid name");if(z.hasOwnProperty(c))throw new Error("State '"+c+"'' is already defined");var e=-1!==c.indexOf(".")?c.substring(0,c.lastIndexOf(".")):J(b.parent)?b.parent:K(b.parent)&&J(b.parent.name)?b.parent.name:"";if(e&&!z[e])return n(e,b.self);for(var f in C)I(C[f])&&(b[f]=C[f](b,C.$delegates[f]));return z[c]=b,!b[B]&&b.url&&a.when(b.url,["$match","$stateParams",function(a,c){y.$current.navigable==b&&j(a,c)||y.transitionTo(b,a,{inherit:!0,location:!1})}]),p(c),b}function r(a){return a.indexOf("*")>-1}function s(a){for(var b=a.split("."),c=y.$current.name.split("."),d=0,e=b.length;e>d;d++)"*"===b[d]&&(c[d]="*");return"**"===b[0]&&(c=c.slice(h(c,b[1])),c.unshift("**")),"**"===b[b.length-1]&&(c.splice(h(c,b[b.length-2])+1,Number.MAX_VALUE),c.push("**")),b.length!=c.length?!1:c.join("")===b.join("")}function t(a,b){return J(a)&&!H(b)?C[a]:I(b)&&J(a)?(C[a]&&!C.$delegates[a]&&(C.$delegates[a]=C[a]),C[a]=b,this):this}function u(a,b){return K(a)?b=a:b.name=a,q(b),this}function v(a,e,f,h,l,n,p,q,t){function u(b,c,d,f){var g=a.$broadcast("$stateNotFound",b,c,d);if(g.defaultPrevented)return p.update(),D;if(!g.retry)return null;if(f.$retry)return p.update(),E;var h=y.transition=e.when(g.retry);return h.then(function(){return h!==y.transition?A:(b.options.$retry=!0,y.transitionTo(b.to,b.toParams,b.options))},function(){return D}),p.update(),h}function v(a,c,d,g,i,j){function m(){var c=[];return M(a.views,function(d,e){var g=d.resolve&&d.resolve!==a.resolve?d.resolve:{};g.$template=[function(){return f.load(e,{view:d,locals:i.globals,params:n,notify:j.notify})||""}],c.push(l.resolve(g,i.globals,i.resolve,a).then(function(c){if(I(d.controllerProvider)||L(d.controllerProvider)){var f=b.extend({},g,i.globals);c.$$controller=h.invoke(d.controllerProvider,null,f)}else c.$$controller=d.controller;c.$$state=a,c.$$controllerAs=d.controllerAs,i[e]=c}))}),e.all(c).then(function(){return i.globals})}var n=d?c:k(a.params.$$keys(),c),o={$stateParams:n};i.resolve=l.resolve(a.resolve,o,i.resolve,a);var p=[i.resolve.then(function(a){i.globals=a})];return g&&p.push(g),e.all(p).then(m).then(function(a){return i})}var A=e.reject(new Error("transition superseded")),C=e.reject(new Error("transition prevented")),D=e.reject(new Error("transition aborted")),E=e.reject(new Error("transition failed"));return x.locals={resolve:null,globals:{$stateParams:{}}},y={params:{},current:x.self,$current:x,transition:null},y.reload=function(a){return y.transitionTo(y.current,n,{reload:a||!0,inherit:!1,notify:!0})},y.go=function(a,b,c){return y.transitionTo(a,b,N({inherit:!0,relative:y.$current},c))},y.transitionTo=function(b,c,f){c=c||{},f=N({location:!0,inherit:!1,relative:null,notify:!0,reload:!1,$retry:!1},f||{});var g,j=y.$current,l=y.params,o=j.path,q=m(b,f.relative),r=c["#"];if(!H(q)){var s={to:b,toParams:c,options:f},t=u(s,j.self,l,f);if(t)return t;if(b=s.to,c=s.toParams,f=s.options,q=m(b,f.relative),!H(q)){if(!f.relative)throw new Error("No such state '"+b+"'");throw new Error("Could not resolve '"+b+"' from state '"+f.relative+"'")}}if(q[B])throw new Error("Cannot transition to abstract state '"+b+"'");if(f.inherit&&(c=i(n,c||{},y.$current,q)),!q.params.$$validates(c))return E;c=q.params.$$values(c),b=q;var z=b.path,D=0,F=z[D],G=x.locals,I=[];if(f.reload){if(J(f.reload)||K(f.reload)){if(K(f.reload)&&!f.reload.name)throw new Error("Invalid reload state object");var L=f.reload===!0?o[0]:m(f.reload);if(f.reload&&!L)throw new Error("No such reload state '"+(J(f.reload)?f.reload:f.reload.name)+"'");for(;F&&F===o[D]&&F!==L;)G=I[D]=F.locals,D++,F=z[D]}}else for(;F&&F===o[D]&&F.ownParams.$$equals(c,l);)G=I[D]=F.locals,D++,F=z[D];if(w(b,c,j,l,G,f))return r&&(c["#"]=r),y.params=c,O(y.params,n),f.location&&b.navigable&&b.navigable.url&&(p.push(b.navigable.url,c,{$$avoidResync:!0,replace:"replace"===f.location}),p.update(!0)),y.transition=null,e.when(y.current);if(c=k(b.params.$$keys(),c||{}),f.notify&&a.$broadcast("$stateChangeStart",b.self,c,j.self,l).defaultPrevented)return a.$broadcast("$stateChangeCancel",b.self,c,j.self,l),p.update(),C;for(var M=e.when(G),P=D;P<z.length;P++,F=z[P])G=I[P]=d(G),M=v(F,c,F===b,M,G,f);var Q=y.transition=M.then(function(){var d,e,g;if(y.transition!==Q)return A;for(d=o.length-1;d>=D;d--)g=o[d],g.self.onExit&&h.invoke(g.self.onExit,g.self,g.locals.globals),g.locals=null;for(d=D;d<z.length;d++)e=z[d],e.locals=I[d],e.self.onEnter&&h.invoke(e.self.onEnter,e.self,e.locals.globals);return r&&(c["#"]=r),y.transition!==Q?A:(y.$current=b,y.current=b.self,y.params=c,O(y.params,n),y.transition=null,f.location&&b.navigable&&p.push(b.navigable.url,b.navigable.locals.globals.$stateParams,{$$avoidResync:!0,replace:"replace"===f.location}),f.notify&&a.$broadcast("$stateChangeSuccess",b.self,c,j.self,l),p.update(!0),y.current)},function(d){return y.transition!==Q?A:(y.transition=null,g=a.$broadcast("$stateChangeError",b.self,c,j.self,l,d),g.defaultPrevented||p.update(),e.reject(d))});return Q},y.is=function(a,b,d){d=N({relative:y.$current},d||{});var e=m(a,d.relative);return H(e)?y.$current!==e?!1:b?j(e.params.$$values(b),n):!0:c},y.includes=function(a,b,d){if(d=N({relative:y.$current},d||{}),J(a)&&r(a)){if(!s(a))return!1;a=y.$current.name}var e=m(a,d.relative);return H(e)?H(y.$current.includes[e.name])?b?j(e.params.$$values(b),n,g(b)):!0:!1:c},y.href=function(a,b,d){d=N({lossy:!0,inherit:!0,absolute:!1,relative:y.$current},d||{});var e=m(a,d.relative);if(!H(e))return null;d.inherit&&(b=i(n,b||{},y.$current,e));var f=e&&d.lossy?e.navigable:e;return f&&f.url!==c&&null!==f.url?p.href(f.url,k(e.params.$$keys().concat("#"),b||{}),{absolute:d.absolute}):null},y.get=function(a,b){if(0===arguments.length)return o(g(z),function(a){return z[a].self});var c=m(a,b||y.$current);return c&&c.self?c.self:null},y}function w(a,b,c,d,e,f){function g(a,b,c){function d(b){return"search"!=a.params[b].location}var e=a.params.$$keys().filter(d),f=l.apply({},[a.params].concat(e)),g=new P.ParamSet(f);return g.$$equals(b,c)}return!f.reload&&a===c&&(e===c.locals||a.self.reloadOnSearch===!1&&g(c,d,b))?!0:void 0}var x,y,z={},A={},B="abstract",C={parent:function(a){if(H(a.parent)&&a.parent)return m(a.parent);var b=/^(.+)\.[^.]+$/.exec(a.name);return b?m(b[1]):x},data:function(a){return a.parent&&a.parent.data&&(a.data=a.self.data=N({},a.parent.data,a.data)),a.data},url:function(a){var b=a.url,c={params:a.params||{}};if(J(b))return"^"==b.charAt(0)?e.compile(b.substring(1),c):(a.parent.navigable||x).url.concat(b,c);if(!b||e.isMatcher(b))return b;throw new Error("Invalid url '"+b+"' in state '"+a+"'")},navigable:function(a){return a.url?a:a.parent?a.parent.navigable:null},ownParams:function(a){var b=a.url&&a.url.params||new P.ParamSet;return M(a.params||{},function(a,c){b[c]||(b[c]=new P.Param(c,null,a,"config"))}),b},params:function(a){return a.parent&&a.parent.params?N(a.parent.params.$$new(),a.ownParams):new P.ParamSet},views:function(a){var b={};return M(H(a.views)?a.views:{"":a},function(c,d){d.indexOf("@")<0&&(d+="@"+a.parent.name),b[d]=c}),b},path:function(a){return a.parent?a.parent.path.concat(a):[]},includes:function(a){var b=a.parent?N({},a.parent.includes):{};return b[a.name]=!0,b},$delegates:{}};x=q({name:"",url:"^",views:null,"abstract":!0}),x.navigable=null,this.decorator=t,this.state=u,this.$get=v,v.$inject=["$rootScope","$q","$view","$injector","$resolve","$stateParams","$urlRouter","$location","$urlMatcherFactory"]}function w(){function a(a,b){return{load:function(c,d){var e,f={template:null,controller:null,view:null,locals:null,notify:!0,async:!0,params:{}};return d=N(f,d),d.view&&(e=b.fromConfig(d.view,d.params,d.locals)),e&&d.notify&&a.$broadcast("$viewContentLoading",d),e}}}this.$get=a,a.$inject=["$rootScope","$templateFactory"]}function x(){var a=!1;this.useAnchorScroll=function(){a=!0},this.$get=["$anchorScroll","$timeout",function(b,c){return a?b:function(a){return c(function(){a[0].scrollIntoView()},0,!1)}}]}function y(a,c,d,e){function f(){return c.has?function(a){return c.has(a)?c.get(a):null}:function(a){try{return c.get(a)}catch(b){return null}}}function g(a,b){var c=function(){return{enter:function(a,b,c){b.after(a),c()},leave:function(a,b){a.remove(),b()}}};if(j)return{enter:function(a,b,c){var d=j.enter(a,null,b,c);d&&d.then&&d.then(c)},leave:function(a,b){var c=j.leave(a,b);c&&c.then&&c.then(b)}};if(i){var d=i&&i(b,a);return{enter:function(a,b,c){d.enter(a,null,b),c()},leave:function(a,b){d.leave(a),b()}}}return c()}var h=f(),i=h("$animator"),j=h("$animate"),k={restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(c,f,h){return function(c,f,i){function j(){l&&(l.remove(),l=null),n&&(n.$destroy(),n=null),m&&(r.leave(m,function(){l=null}),l=m,m=null)}function k(g){var k,l=A(c,i,f,e),s=l&&a.$current&&a.$current.locals[l];if(g||s!==o){k=c.$new(),o=a.$current.locals[l];var t=h(k,function(a){r.enter(a,f,function(){n&&n.$emit("$viewContentAnimationEnded"),(b.isDefined(q)&&!q||c.$eval(q))&&d(a)}),j()});m=t,n=k,n.$emit("$viewContentLoaded"),n.$eval(p)}}var l,m,n,o,p=i.onload||"",q=i.autoscroll,r=g(i,c);c.$on("$stateChangeSuccess",function(){k(!1)}),c.$on("$viewContentLoading",function(){k(!1)}),k(!0)}}};return k}function z(a,b,c,d){return{restrict:"ECA",priority:-400,compile:function(e){var f=e.html();return function(e,g,h){var i=c.$current,j=A(e,h,g,d),k=i&&i.locals[j];if(k){g.data("$uiView",{name:j,state:k.$$state}),g.html(k.$template?k.$template:f);var l=a(g.contents());if(k.$$controller){k.$scope=e,k.$element=g;var m=b(k.$$controller,k);k.$$controllerAs&&(e[k.$$controllerAs]=m),g.data("$ngControllerController",m),g.children().data("$ngControllerController",m)}l(e)}}}}}function A(a,b,c,d){var e=d(b.uiView||b.name||"")(a),f=c.inheritedData("$uiView");return e.indexOf("@")>=0?e:e+"@"+(f?f.state.name:"")}function B(a,b){var c,d=a.match(/^\s*({[^}]*})\s*$/);if(d&&(a=b+"("+d[1]+")"),c=a.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/),!c||4!==c.length)throw new Error("Invalid state ref '"+a+"'");return{state:c[1],paramExpr:c[3]||null}}function C(a){var b=a.parent().inheritedData("$uiView");return b&&b.state&&b.state.name?b.state:void 0}function D(a,c){var d=["location","inherit","reload","absolute"];return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(e,f,g,h){var i=B(g.uiSref,a.current.name),j=null,k=C(f)||a.$current,l="[object SVGAnimatedString]"===Object.prototype.toString.call(f.prop("href"))?"xlink:href":"href",m=null,n="A"===f.prop("tagName").toUpperCase(),o="FORM"===f[0].nodeName,p=o?"action":l,q=!0,r={relative:k,inherit:!0},s=e.$eval(g.uiSrefOpts)||{};b.forEach(d,function(a){a in s&&(r[a]=s[a])});var t=function(c){if(c&&(j=b.copy(c)),q){m=a.href(i.state,j,r);var d=h[1]||h[0];return d&&d.$$addStateInfo(i.state,j),null===m?(q=!1,!1):void g.$set(p,m)}};i.paramExpr&&(e.$watch(i.paramExpr,function(a,b){a!==j&&t(a)},!0),j=b.copy(e.$eval(i.paramExpr))),t(),o||f.bind("click",function(b){var d=b.which||b.button;if(!(d>1||b.ctrlKey||b.metaKey||b.shiftKey||f.attr("target"))){var e=c(function(){a.go(i.state,j,r)});b.preventDefault();var g=n&&!m?1:0;b.preventDefault=function(){g--<=0&&c.cancel(e)}}})}}}function E(a,b,c){return{restrict:"A",controller:["$scope","$element","$attrs",function(b,d,e){function f(){g()?d.addClass(i):d.removeClass(i)}function g(){for(var a=0;a<j.length;a++)if(h(j[a].state,j[a].params))return!0;return!1}function h(b,c){return"undefined"!=typeof e.uiSrefActiveEq?a.is(b.name,c):a.includes(b.name,c)}var i,j=[];i=c(e.uiSrefActiveEq||e.uiSrefActive||"",!1)(b),this.$$addStateInfo=function(b,c){var e=a.get(b,C(d));j.push({state:e||{name:b},params:c}),f()},b.$on("$stateChangeSuccess",f)}]}}function F(a){var b=function(b){return a.is(b)};return b.$stateful=!0,b}function G(a){var b=function(b){return a.includes(b)};return b.$stateful=!0,b}var H=b.isDefined,I=b.isFunction,J=b.isString,K=b.isObject,L=b.isArray,M=b.forEach,N=b.extend,O=b.copy;b.module("ui.router.util",["ng"]),b.module("ui.router.router",["ui.router.util"]),b.module("ui.router.state",["ui.router.router","ui.router.util"]),b.module("ui.router",["ui.router.state"]),b.module("ui.router.compat",["ui.router"]),p.$inject=["$q","$injector"],b.module("ui.router.util").service("$resolve",p),q.$inject=["$http","$templateCache","$injector"],b.module("ui.router.util").service("$templateFactory",q);var P;r.prototype.concat=function(a,b){var c={caseInsensitive:P.caseInsensitive(),strict:P.strictMode(),squash:P.defaultSquashPolicy()};return new r(this.sourcePath+a+this.sourceSearch,N(c,b),this)},r.prototype.toString=function(){return this.source},r.prototype.exec=function(a,b){function c(a){function b(a){return a.split("").reverse().join("")}function c(a){return a.replace(/\\-/g,"-")}var d=b(a).split(/-(?!\\)/),e=o(d,b);return o(e,c).reverse()}var d=this.regexp.exec(a);if(!d)return null;b=b||{};var e,f,g,h=this.parameters(),i=h.length,j=this.segments.length-1,k={};if(j!==d.length-1)throw new Error("Unbalanced capture group in route '"+this.source+"'");for(e=0;j>e;e++){g=h[e];var l=this.params[g],m=d[e+1];for(f=0;f<l.replace;f++)l.replace[f].from===m&&(m=l.replace[f].to);m&&l.array===!0&&(m=c(m)),k[g]=l.value(m)}for(;i>e;e++)g=h[e],k[g]=this.params[g].value(b[g]);return k},r.prototype.parameters=function(a){return H(a)?this.params[a]||null:this.$$paramNames},r.prototype.validates=function(a){return this.params.$$validates(a)},r.prototype.format=function(a){function b(a){return encodeURIComponent(a).replace(/-/g,function(a){return"%5C%"+a.charCodeAt(0).toString(16).toUpperCase()})}a=a||{};var c=this.segments,d=this.parameters(),e=this.params;if(!this.validates(a))return null;var f,g=!1,h=c.length-1,i=d.length,j=c[0];for(f=0;i>f;f++){var k=h>f,l=d[f],m=e[l],n=m.value(a[l]),p=m.isOptional&&m.type.equals(m.value(),n),q=p?m.squash:!1,r=m.type.encode(n);if(k){var s=c[f+1];if(q===!1)null!=r&&(j+=L(r)?o(r,b).join("-"):encodeURIComponent(r)),j+=s;else if(q===!0){var t=j.match(/\/$/)?/\/?(.*)/:/(.*)/;j+=s.match(t)[1]}else J(q)&&(j+=q+s)}else{if(null==r||p&&q!==!1)continue;L(r)||(r=[r]),r=o(r,encodeURIComponent).join("&"+l+"="),j+=(g?"&":"?")+(l+"="+r),g=!0}}return j},s.prototype.is=function(a,b){return!0},s.prototype.encode=function(a,b){return a},s.prototype.decode=function(a,b){return a},s.prototype.equals=function(a,b){return a==b},s.prototype.$subPattern=function(){var a=this.pattern.toString();return a.substr(1,a.length-2)},s.prototype.pattern=/.*/,s.prototype.toString=function(){return"{Type:"+this.name+"}"},s.prototype.$normalize=function(a){return this.is(a)?a:this.decode(a)},s.prototype.$asArray=function(a,b){function d(a,b){function d(a,b){return function(){return a[b].apply(a,arguments)}}function e(a){return L(a)?a:H(a)?[a]:[]}function f(a){switch(a.length){case 0:return c;case 1:return"auto"===b?a[0]:a;default:return a}}function g(a){return!a}function h(a,b){return function(c){c=e(c);var d=o(c,a);return b===!0?0===n(d,g).length:f(d)}}function i(a){return function(b,c){var d=e(b),f=e(c);if(d.length!==f.length)return!1;for(var g=0;g<d.length;g++)if(!a(d[g],f[g]))return!1;return!0}}this.encode=h(d(a,"encode")),this.decode=h(d(a,"decode")),this.is=h(d(a,"is"),!0),this.equals=i(d(a,"equals")),this.pattern=a.pattern,this.$normalize=h(d(a,"$normalize")),this.name=a.name,this.$arrayMode=b}if(!a)return this;if("auto"===a&&!b)throw new Error("'auto' array mode is for query parameters only");return new d(this,a)},b.module("ui.router.util").provider("$urlMatcherFactory",t),b.module("ui.router.util").run(["$urlMatcherFactory",function(a){}]),u.$inject=["$locationProvider","$urlMatcherFactoryProvider"],b.module("ui.router.router").provider("$urlRouter",u),v.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider"],b.module("ui.router.state").value("$stateParams",{}).provider("$state",v),w.$inject=[],b.module("ui.router.state").provider("$view",w),b.module("ui.router.state").provider("$uiViewScroll",x),y.$inject=["$state","$injector","$uiViewScroll","$interpolate"],z.$inject=["$compile","$controller","$state","$interpolate"],b.module("ui.router.state").directive("uiView",y),b.module("ui.router.state").directive("uiView",z),D.$inject=["$state","$timeout"],E.$inject=["$state","$stateParams","$interpolate"],b.module("ui.router.state").directive("uiSref",D).directive("uiSrefActive",E).directive("uiSrefActiveEq",E),F.$inject=["$state"],G.$inject=["$state"],b.module("ui.router.state").filter("isState",F).filter("includedByState",G)}(window,window.angular);
/**
 * Restful Resources service for AngularJS apps
 * @version v1.4.0 - 2015-04-03 * @link https://github.com/mgonto/restangular
 * @author Martin Gontovnikas <martin@gon.to>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */!function(){var a=angular.module("restangular",[]);a.provider("Restangular",function(){var a={};a.init=function(a,b){function c(a,b,c,d){var e={};return _.each(_.keys(d),function(f){var g=d[f];g.params=_.extend({},g.params,a.defaultRequestParams[g.method.toLowerCase()]),_.isEmpty(g.params)&&delete g.params,e[f]=a.isSafe(g.method)?function(){return b(_.extend(g,{url:c}))}:function(a){return b(_.extend(g,{url:c,data:a}))}}),e}a.configuration=b;var d=["get","head","options","trace","getlist"];b.isSafe=function(a){return _.contains(d,a.toLowerCase())};var e=/^https?:\/\//i;b.isAbsoluteUrl=function(a){return _.isUndefined(b.absoluteUrl)||_.isNull(b.absoluteUrl)?a&&e.test(a):b.absoluteUrl},b.absoluteUrl=_.isUndefined(b.absoluteUrl)?!0:b.absoluteUrl,a.setSelfLinkAbsoluteUrl=function(a){b.absoluteUrl=a},b.baseUrl=_.isUndefined(b.baseUrl)?"":b.baseUrl,a.setBaseUrl=function(a){return b.baseUrl=/\/$/.test(a)?a.substring(0,a.length-1):a,this},b.extraFields=b.extraFields||[],a.setExtraFields=function(a){return b.extraFields=a,this},b.defaultHttpFields=b.defaultHttpFields||{},a.setDefaultHttpFields=function(a){return b.defaultHttpFields=a,this},b.withHttpValues=function(a,c){return _.defaults(c,a,b.defaultHttpFields)},b.encodeIds=_.isUndefined(b.encodeIds)?!0:b.encodeIds,a.setEncodeIds=function(a){b.encodeIds=a},b.defaultRequestParams=b.defaultRequestParams||{get:{},post:{},put:{},remove:{},common:{}},a.setDefaultRequestParams=function(a,c){var d=[],e=c||a;return _.isUndefined(c)?d.push("common"):_.isArray(a)?d=a:d.push(a),_.each(d,function(a){b.defaultRequestParams[a]=e}),this},a.requestParams=b.defaultRequestParams,b.defaultHeaders=b.defaultHeaders||{},a.setDefaultHeaders=function(c){return b.defaultHeaders=c,a.defaultHeaders=b.defaultHeaders,this},a.defaultHeaders=b.defaultHeaders,b.methodOverriders=b.methodOverriders||[],a.setMethodOverriders=function(a){var c=_.extend([],a);return b.isOverridenMethod("delete",c)&&c.push("remove"),b.methodOverriders=c,this},b.jsonp=_.isUndefined(b.jsonp)?!1:b.jsonp,a.setJsonp=function(a){b.jsonp=a},b.isOverridenMethod=function(a,c){var d=c||b.methodOverriders;return!_.isUndefined(_.find(d,function(b){return b.toLowerCase()===a.toLowerCase()}))},b.urlCreator=b.urlCreator||"path",a.setUrlCreator=function(a){if(!_.has(b.urlCreatorFactory,a))throw new Error("URL Path selected isn't valid");return b.urlCreator=a,this},b.restangularFields=b.restangularFields||{id:"id",route:"route",parentResource:"parentResource",restangularCollection:"restangularCollection",cannonicalId:"__cannonicalId",etag:"restangularEtag",selfLink:"href",get:"get",getList:"getList",put:"put",post:"post",remove:"remove",head:"head",trace:"trace",options:"options",patch:"patch",getRestangularUrl:"getRestangularUrl",getRequestedUrl:"getRequestedUrl",putElement:"putElement",addRestangularMethod:"addRestangularMethod",getParentList:"getParentList",clone:"clone",ids:"ids",httpConfig:"_$httpConfig",reqParams:"reqParams",one:"one",all:"all",several:"several",oneUrl:"oneUrl",allUrl:"allUrl",customPUT:"customPUT",customPOST:"customPOST",customDELETE:"customDELETE",customGET:"customGET",customGETLIST:"customGETLIST",customOperation:"customOperation",doPUT:"doPUT",doPOST:"doPOST",doDELETE:"doDELETE",doGET:"doGET",doGETLIST:"doGETLIST",fromServer:"fromServer",withConfig:"withConfig",withHttpConfig:"withHttpConfig",singleOne:"singleOne",plain:"plain",save:"save",restangularized:"restangularized"},a.setRestangularFields=function(a){return b.restangularFields=_.extend(b.restangularFields,a),this},b.isRestangularized=function(a){return!!a[b.restangularFields.restangularized]},b.setFieldToElem=function(a,b,c){var d=a.split("."),e=b;return _.each(_.initial(d),function(a){e[a]={},e=e[a]}),e[_.last(d)]=c,this},b.getFieldFromElem=function(a,b){var c=a.split("."),d=b;return _.each(c,function(a){d&&(d=d[a])}),angular.copy(d)},b.setIdToElem=function(a,c){return b.setFieldToElem(b.restangularFields.id,a,c),this},b.getIdFromElem=function(a){return b.getFieldFromElem(b.restangularFields.id,a)},b.isValidId=function(a){return""!==a&&!_.isUndefined(a)&&!_.isNull(a)},b.setUrlToElem=function(a,c){return b.setFieldToElem(b.restangularFields.selfLink,a,c),this},b.getUrlFromElem=function(a){return b.getFieldFromElem(b.restangularFields.selfLink,a)},b.useCannonicalId=_.isUndefined(b.useCannonicalId)?!1:b.useCannonicalId,a.setUseCannonicalId=function(a){return b.useCannonicalId=a,this},b.getCannonicalIdFromElem=function(a){var c=a[b.restangularFields.cannonicalId],d=b.isValidId(c)?c:b.getIdFromElem(a);return d},b.responseInterceptors=b.responseInterceptors||[],b.defaultResponseInterceptor=function(a){return a},b.responseExtractor=function(a,c,d,e,f,g){var h=angular.copy(b.responseInterceptors);h.push(b.defaultResponseInterceptor);var i=a;return _.each(h,function(a){i=a(i,c,d,e,f,g)}),i},a.addResponseInterceptor=function(a){return b.responseInterceptors.push(a),this},b.errorInterceptors=b.errorInterceptors||[],a.addErrorInterceptor=function(a){return b.errorInterceptors.push(a),this},a.setResponseInterceptor=a.addResponseInterceptor,a.setResponseExtractor=a.addResponseInterceptor,a.setErrorInterceptor=a.addErrorInterceptor,b.requestInterceptors=b.requestInterceptors||[],b.defaultInterceptor=function(a,b,c,d,e,f,g){return{element:a,headers:e,params:f,httpConfig:g}},b.fullRequestInterceptor=function(a,c,d,e,f,g,h){var i=angular.copy(b.requestInterceptors),j=b.defaultInterceptor(a,c,d,e,f,g,h);return _.reduce(i,function(a,b){return _.extend(a,b(a.element,c,d,e,a.headers,a.params,a.httpConfig))},j)},a.addRequestInterceptor=function(a){return b.requestInterceptors.push(function(b,c,d,e,f,g,h){return{headers:f,params:g,element:a(b,c,d,e),httpConfig:h}}),this},a.setRequestInterceptor=a.addRequestInterceptor,a.addFullRequestInterceptor=function(a){return b.requestInterceptors.push(a),this},a.setFullRequestInterceptor=a.addFullRequestInterceptor,b.onBeforeElemRestangularized=b.onBeforeElemRestangularized||function(a){return a},a.setOnBeforeElemRestangularized=function(a){return b.onBeforeElemRestangularized=a,this},a.setRestangularizePromiseInterceptor=function(a){return b.restangularizePromiseInterceptor=a,this},b.onElemRestangularized=b.onElemRestangularized||function(a){return a},a.setOnElemRestangularized=function(a){return b.onElemRestangularized=a,this},b.shouldSaveParent=b.shouldSaveParent||function(){return!0},a.setParentless=function(a){return _.isArray(a)?b.shouldSaveParent=function(b){return!_.contains(a,b)}:_.isBoolean(a)&&(b.shouldSaveParent=function(){return!a}),this},b.suffix=_.isUndefined(b.suffix)?null:b.suffix,a.setRequestSuffix=function(a){return b.suffix=a,this},b.transformers=b.transformers||{},a.addElementTransformer=function(c,d,e){var f=null,g=null;2===arguments.length?g=d:(g=e,f=d);var h=b.transformers[c];return h||(h=b.transformers[c]=[]),h.push(function(a,b){return _.isNull(f)||a===f?g(b):b}),a},a.extendCollection=function(b,c){return a.addElementTransformer(b,!0,c)},a.extendModel=function(b,c){return a.addElementTransformer(b,!1,c)},b.transformElem=function(a,c,d,e,f){if(!f&&!b.transformLocalElements&&!a[b.restangularFields.fromServer])return a;var g=b.transformers[d],h=a;return g&&_.each(g,function(a){h=a(c,h)}),b.onElemRestangularized(h,c,d,e)},b.transformLocalElements=_.isUndefined(b.transformLocalElements)?!1:b.transformLocalElements,a.setTransformOnlyServerElements=function(a){b.transformLocalElements=!a},b.fullResponse=_.isUndefined(b.fullResponse)?!1:b.fullResponse,a.setFullResponse=function(a){return b.fullResponse=a,this},b.urlCreatorFactory={};var f=function(){};f.prototype.setConfig=function(a){return this.config=a,this},f.prototype.parentsArray=function(a){for(var b=[];a;)b.push(a),a=a[this.config.restangularFields.parentResource];return b.reverse()},f.prototype.resource=function(a,d,e,f,g,h,i,j){var k=_.defaults(g||{},this.config.defaultRequestParams.common),l=_.defaults(f||{},this.config.defaultHeaders);i&&(b.isSafe(j)?l["If-None-Match"]=i:l["If-Match"]=i);var m=this.base(a);if(h){var n="";/\/$/.test(m)||(n+="/"),n+=h,m+=n}return this.config.suffix&&-1===m.indexOf(this.config.suffix,m.length-this.config.suffix.length)&&!this.config.getUrlFromElem(a)&&(m+=this.config.suffix),a[this.config.restangularFields.httpConfig]=void 0,c(this.config,d,m,{getList:this.config.withHttpValues(e,{method:"GET",params:k,headers:l}),get:this.config.withHttpValues(e,{method:"GET",params:k,headers:l}),jsonp:this.config.withHttpValues(e,{method:"jsonp",params:k,headers:l}),put:this.config.withHttpValues(e,{method:"PUT",params:k,headers:l}),post:this.config.withHttpValues(e,{method:"POST",params:k,headers:l}),remove:this.config.withHttpValues(e,{method:"DELETE",params:k,headers:l}),head:this.config.withHttpValues(e,{method:"HEAD",params:k,headers:l}),trace:this.config.withHttpValues(e,{method:"TRACE",params:k,headers:l}),options:this.config.withHttpValues(e,{method:"OPTIONS",params:k,headers:l}),patch:this.config.withHttpValues(e,{method:"PATCH",params:k,headers:l})})};var g=function(){};g.prototype=new f,g.prototype.normalizeUrl=function(a){var b=/(http[s]?:\/\/)?(.*)?/.exec(a);return b[2]=b[2].replace(/[\\\/]+/g,"/"),"undefined"!=typeof b[1]?b[1]+b[2]:b[2]},g.prototype.base=function(a){var c=this;return _.reduce(this.parentsArray(a),function(a,d){var e,f=c.config.getUrlFromElem(d);if(f){if(c.config.isAbsoluteUrl(f))return f;e=f}else if(e=d[c.config.restangularFields.route],d[c.config.restangularFields.restangularCollection]){var g=d[c.config.restangularFields.ids];g&&(e+="/"+g.join(","))}else{var h;h=c.config.useCannonicalId?c.config.getCannonicalIdFromElem(d):c.config.getIdFromElem(d),b.isValidId(h)&&!d.singleOne&&(e+="/"+(c.config.encodeIds?encodeURIComponent(h):h))}return a=a.replace(/\/$/,"")+"/"+e,c.normalizeUrl(a)},this.config.baseUrl)},g.prototype.fetchUrl=function(a,b){var c=this.base(a);return b&&(c+="/"+b),c},g.prototype.fetchRequestedUrl=function(a,c){function d(a){var b=[];for(var c in a)a.hasOwnProperty(c)&&b.push(c);return b.sort()}function e(a,b,c){for(var e=d(a),f=0;f<e.length;f++)b.call(c,a[e[f]],e[f]);return e}function f(a,b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,b?"%20":"+")}var g=this.fetchUrl(a,c),h=a[b.restangularFields.reqParams];if(!h)return g+(this.config.suffix||"");var i=[];return e(h,function(a,b){null!==a&&void 0!==a&&(angular.isArray(a)||(a=[a]),angular.forEach(a,function(a){angular.isObject(a)&&(a=angular.toJson(a)),i.push(f(b)+"="+f(a))}))}),g+(this.config.suffix||"")+(-1===g.indexOf("?")?"?":"&")+i.join("&")},b.urlCreatorFactory.path=g};var b={};a.init(this,b),this.$get=["$http","$q",function(c,d){function e(b){function f(a,c,d,e,f){if(c[b.restangularFields.route]=d,c[b.restangularFields.getRestangularUrl]=_.bind(P.fetchUrl,P,c),c[b.restangularFields.getRequestedUrl]=_.bind(P.fetchRequestedUrl,P,c),c[b.restangularFields.addRestangularMethod]=_.bind(L,c),c[b.restangularFields.clone]=_.bind(r,c,c),c[b.restangularFields.reqParams]=_.isEmpty(e)?null:e,c[b.restangularFields.withHttpConfig]=_.bind(z,c),c[b.restangularFields.plain]=_.bind(p,c,c),c[b.restangularFields.restangularized]=!0,c[b.restangularFields.one]=_.bind(g,c,c),c[b.restangularFields.all]=_.bind(h,c,c),c[b.restangularFields.several]=_.bind(i,c,c),c[b.restangularFields.oneUrl]=_.bind(j,c,c),c[b.restangularFields.allUrl]=_.bind(k,c,c),c[b.restangularFields.fromServer]=!!f,a&&b.shouldSaveParent(d)){var l=b.getIdFromElem(a),m=b.getUrlFromElem(a),n=_.union(_.values(_.pick(b.restangularFields,["route","singleOne","parentResource"])),b.extraFields),o=_.pick(a,n);b.isValidId(l)&&b.setIdToElem(o,l,d),b.isValidId(m)&&b.setUrlToElem(o,m,d),c[b.restangularFields.parentResource]=o}else c[b.restangularFields.parentResource]=null;return c}function g(a,c,d,e){var f;if(_.isNumber(c)||_.isNumber(a))throw f="You're creating a Restangular entity with the number ",f+="instead of the route or the parent. For example, you can't call .one(12).",new Error(f);if(_.isUndefined(c))throw f="You're creating a Restangular entity either without the path. ",f+="For example you can't call .one(). Please check if your arguments are valid.",new Error(f);var g={};return b.setIdToElem(g,d,c),b.setFieldToElem(b.restangularFields.singleOne,g,e),s(a,g,c,!1)}function h(a,b){return t(a,[],b,!1)}function i(a,c){var d=[];return d[b.restangularFields.ids]=Array.prototype.splice.call(arguments,2),t(a,d,c,!1)}function j(a,c,d){if(!c)throw new Error("Route is mandatory when creating new Restangular objects.");var e={};return b.setUrlToElem(e,d,c),s(a,e,c,!1)}function k(a,c,d){if(!c)throw new Error("Route is mandatory when creating new Restangular objects.");var e={};return b.setUrlToElem(e,d,c),t(a,e,c,!1)}function l(a,c,d){return a.call=_.bind(m,a),a.get=_.bind(n,a),a[b.restangularFields.restangularCollection]=c,c&&(a.push=_.bind(m,a,"push")),a.$object=d,b.restangularizePromiseInterceptor&&b.restangularizePromiseInterceptor(a),a}function m(a){var c=d.defer(),e=arguments,f={};return this.then(function(b){var d=Array.prototype.slice.call(e,1),g=b[a];g.apply(b,d),f=b,c.resolve(b)}),l(c.promise,this[b.restangularFields.restangularCollection],f)}function n(a){var c=d.defer(),e={};return this.then(function(b){e=b[a],c.resolve(e)}),l(c.promise,this[b.restangularFields.restangularCollection],e)}function o(a,c,d,e){return _.extend(e,d),b.fullResponse?a.resolve(_.extend(c,{data:d})):(a.resolve(d),void 0)}function p(a){if(_.isArray(a)){var c=[];return _.each(a,function(a){c.push(b.isRestangularized(a)?p(a):a)}),c}return _.omit(a,_.values(_.omit(b.restangularFields,"id")))}function q(a){a[b.restangularFields.customOperation]=_.bind(K,a),_.each(["put","post","get","delete"],function(b){_.each(["do","custom"],function(c){var d,e="delete"===b?"remove":b,f=c+b.toUpperCase();d="put"!==e&&"post"!==e?K:function(a,b,c,d,e){return _.bind(K,this)(a,c,d,e,b)},a[f]=_.bind(d,a,e)})}),a[b.restangularFields.customGETLIST]=_.bind(y,a),a[b.restangularFields.doGETLIST]=a[b.restangularFields.customGETLIST]}function r(a,c){var d=angular.copy(a,c);return s(d[b.restangularFields.parentResource],d,d[b.restangularFields.route],!0)}function s(a,c,d,e,g,h){var i=b.onBeforeElemRestangularized(c,!1,d),j=f(a,i,d,h,e);return b.useCannonicalId&&(j[b.restangularFields.cannonicalId]=b.getIdFromElem(j)),g&&(j[b.restangularFields.getParentList]=function(){return g}),j[b.restangularFields.restangularCollection]=!1,j[b.restangularFields.get]=_.bind(C,j),j[b.restangularFields.getList]=_.bind(y,j),j[b.restangularFields.put]=_.bind(E,j),j[b.restangularFields.post]=_.bind(F,j),j[b.restangularFields.remove]=_.bind(D,j),j[b.restangularFields.head]=_.bind(G,j),j[b.restangularFields.trace]=_.bind(H,j),j[b.restangularFields.options]=_.bind(I,j),j[b.restangularFields.patch]=_.bind(J,j),j[b.restangularFields.save]=_.bind(A,j),q(j),b.transformElem(j,!1,d,O,!0)}function t(a,c,d,e,g){var h=b.onBeforeElemRestangularized(c,!0,d),i=f(a,h,d,g,e);return i[b.restangularFields.restangularCollection]=!0,i[b.restangularFields.post]=_.bind(F,i,null),i[b.restangularFields.remove]=_.bind(D,i),i[b.restangularFields.head]=_.bind(G,i),i[b.restangularFields.trace]=_.bind(H,i),i[b.restangularFields.putElement]=_.bind(w,i),i[b.restangularFields.options]=_.bind(I,i),i[b.restangularFields.patch]=_.bind(J,i),i[b.restangularFields.get]=_.bind(v,i),i[b.restangularFields.getList]=_.bind(y,i,null),q(i),b.transformElem(i,!0,d,O,!0)}function u(a,b,c){var d=t(a,b,c,!1);return _.each(d,function(b){s(a,b,c,!1)}),d}function v(a,b,c){return this.customGET(a.toString(),b,c)}function w(a,c,e){var f=this,g=this[a],h=d.defer(),i=[];return i=b.transformElem(i,!0,g[b.restangularFields.route],O),g.put(c,e).then(function(b){var c=r(f);c[a]=b,i=c,h.resolve(c)},function(a){h.reject(a)}),l(h.promise,!0,i)}function x(a,c,d,e,f,g){var h=b.responseExtractor(a,c,d,e,f,g),i=f.headers("ETag");return h&&i&&(h[b.restangularFields.etag]=i),h}function y(a,e,f){var g=this,h=d.defer(),i="getList",j=P.fetchUrl(this,a),k=a||g[b.restangularFields.route],m=b.fullRequestInterceptor(null,i,k,j,f||{},e||{},this[b.restangularFields.httpConfig]||{}),n=[];n=b.transformElem(n,!0,k,O);var p="getList";b.jsonp&&(p="jsonp");var q=function(c){var d=c.data,e=c.config.params,f=x(d,i,k,j,c,h);if((_.isUndefined(f)||""===f)&&(f=[]),!_.isArray(f))throw new Error("Response for getList SHOULD be an array and not an object or something else");var l=_.map(f,function(c){return g[b.restangularFields.restangularCollection]?s(g[b.restangularFields.parentResource],c,g[b.restangularFields.route],!0,f):s(g,c,a,!0,f)});l=_.extend(f,l),g[b.restangularFields.restangularCollection]?o(h,c,t(g[b.restangularFields.parentResource],l,g[b.restangularFields.route],!0,e),n):o(h,c,t(g,l,a,!0,e),n)};return P.resource(this,c,m.httpConfig,m.headers,m.params,a,this[b.restangularFields.etag],i)[p]().then(q,function(a){304===a.status&&g[b.restangularFields.restangularCollection]?o(h,a,g,n):_.every(b.errorInterceptors,function(b){return b(a,h,q)!==!1})&&h.reject(a)}),l(h.promise,!0,n)}function z(a){return this[b.restangularFields.httpConfig]=a,this}function A(a,c){return this[b.restangularFields.fromServer]?this[b.restangularFields.put](a,c):_.bind(B,this)("post",void 0,a,void 0,c)}function B(a,e,f,g,h){var i=this,j=d.defer(),k=f||{},m=e||this[b.restangularFields.route],n=P.fetchUrl(this,e),q=g||this,r=q[b.restangularFields.etag]||("post"!==a?this[b.restangularFields.etag]:null);_.isObject(q)&&b.isRestangularized(q)&&(q=p(q));var t=b.fullRequestInterceptor(q,a,m,n,h||{},k||{},this[b.restangularFields.httpConfig]||{}),u={};u=b.transformElem(u,!1,m,O);var v=function(c){var d=c.data,e=c.config.params,f=x(d,a,m,n,c,j);if(f)if("post"!==a||i[b.restangularFields.restangularCollection]){var g=s(i[b.restangularFields.parentResource],f,i[b.restangularFields.route],!0,null,e);g[b.restangularFields.singleOne]=i[b.restangularFields.singleOne],o(j,c,g,u)}else{var g=s(i[b.restangularFields.parentResource],f,m,!0,null,e);o(j,c,g,u)}else o(j,c,void 0,u)},w=function(c){304===c.status&&b.isSafe(a)?o(j,c,i,u):_.every(b.errorInterceptors,function(a){return a(c,j,v)!==!1})&&j.reject(c)},y=a,z=_.extend({},t.headers),A=b.isOverridenMethod(a);return A?(y="post",z=_.extend(z,{"X-HTTP-Method-Override":"remove"===a?"DELETE":a.toUpperCase()})):b.jsonp&&"get"===y&&(y="jsonp"),b.isSafe(a)?A?P.resource(this,c,t.httpConfig,z,t.params,e,r,y)[y]({}).then(v,w):P.resource(this,c,t.httpConfig,z,t.params,e,r,y)[y]().then(v,w):P.resource(this,c,t.httpConfig,z,t.params,e,r,y)[y](t.element).then(v,w),l(j.promise,!1,u)}function C(a,b){return _.bind(B,this)("get",void 0,a,void 0,b)}function D(a,b){return _.bind(B,this)("remove",void 0,a,void 0,b)}function E(a,b){return _.bind(B,this)("put",void 0,a,void 0,b)}function F(a,b,c,d){return _.bind(B,this)("post",a,c,b,d)}function G(a,b){return _.bind(B,this)("head",void 0,a,void 0,b)}function H(a,b){return _.bind(B,this)("trace",void 0,a,void 0,b)}function I(a,b){return _.bind(B,this)("options",void 0,a,void 0,b)}function J(a,b,c){return _.bind(B,this)("patch",void 0,b,a,c)}function K(a,b,c,d,e){return _.bind(B,this)(a,b,c,e,d)}function L(a,c,d,e,f,g){var h;h="getList"===c?_.bind(y,this,d):_.bind(K,this,c,d);var i=function(a,b,c){var d=_.defaults({params:a,headers:b,elem:c},{params:e,headers:f,elem:g});return h(d.params,d.headers,d.elem)};this[a]=b.isSafe(c)?i:function(a,b,c){return i(b,c,a)}}function M(c){var d=angular.copy(_.omit(b,"configuration"));return a.init(d,d),c(d),e(d)}function N(a,c){var d=_.values(b.restangularFields),e={},f=(c||O).all(a);e.one=_.bind(g,c||O,c,a),e.post=_.bind(f.post,f),e.getList=_.bind(f.getList,f);for(var h in f)f.hasOwnProperty(h)&&_.isFunction(f[h])&&!_.contains(d,h)&&(e[h]=_.bind(f[h],f));return e}var O={},P=new b.urlCreatorFactory[b.urlCreator];return P.setConfig(b),a.init(O,b),O.copy=_.bind(r,O),O.service=_.bind(N,O),O.withConfig=_.bind(M,O),O.one=_.bind(g,O,null),O.all=_.bind(h,O,null),O.several=_.bind(i,O,null),O.oneUrl=_.bind(j,O,null),O.allUrl=_.bind(k,O,null),O.stripRestangular=_.bind(p,O),O.restangularizeElement=_.bind(s,O),O.restangularizeCollection=_.bind(u,O),O}return e(b)}]})}();
/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 0.13.3 - 2015-08-09
 * License: MIT
 */
angular.module("ui.bootstrap",["ui.bootstrap.tpls","ui.bootstrap.collapse","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.bindHtml","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.dateparser","ui.bootstrap.position","ui.bootstrap.datepicker","ui.bootstrap.dropdown","ui.bootstrap.modal","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.transition","ui.bootstrap.typeahead"]),angular.module("ui.bootstrap.tpls",["template/accordion/accordion-group.html","template/accordion/accordion.html","template/alert/alert.html","template/carousel/carousel.html","template/carousel/slide.html","template/datepicker/datepicker.html","template/datepicker/day.html","template/datepicker/month.html","template/datepicker/popup.html","template/datepicker/year.html","template/modal/backdrop.html","template/modal/window.html","template/pagination/pager.html","template/pagination/pagination.html","template/tooltip/tooltip-html-popup.html","template/tooltip/tooltip-html-unsafe-popup.html","template/tooltip/tooltip-popup.html","template/tooltip/tooltip-template-popup.html","template/popover/popover-html.html","template/popover/popover-template.html","template/popover/popover.html","template/progressbar/bar.html","template/progressbar/progress.html","template/progressbar/progressbar.html","template/rating/rating.html","template/tabs/tab.html","template/tabs/tabset.html","template/timepicker/timepicker.html","template/typeahead/typeahead-match.html","template/typeahead/typeahead-popup.html"]),angular.module("ui.bootstrap.collapse",[]).directive("collapse",["$animate",function(a){return{link:function(b,c,d){function e(){c.removeClass("collapse").addClass("collapsing").attr("aria-expanded",!0).attr("aria-hidden",!1),a.addClass(c,"in",{to:{height:c[0].scrollHeight+"px"}}).then(f)}function f(){c.removeClass("collapsing"),c.css({height:"auto"})}function g(){return c.hasClass("collapse")||c.hasClass("in")?(c.css({height:c[0].scrollHeight+"px"}).removeClass("collapse").addClass("collapsing").attr("aria-expanded",!1).attr("aria-hidden",!0),void a.removeClass(c,"in",{to:{height:"0"}}).then(h)):h()}function h(){c.css({height:"0"}),c.removeClass("collapsing"),c.addClass("collapse")}b.$watch(d.collapse,function(a){a?g():e()})}}}]),angular.module("ui.bootstrap.accordion",["ui.bootstrap.collapse"]).constant("accordionConfig",{closeOthers:!0}).controller("AccordionController",["$scope","$attrs","accordionConfig",function(a,b,c){this.groups=[],this.closeOthers=function(d){var e=angular.isDefined(b.closeOthers)?a.$eval(b.closeOthers):c.closeOthers;e&&angular.forEach(this.groups,function(a){a!==d&&(a.isOpen=!1)})},this.addGroup=function(a){var b=this;this.groups.push(a),a.$on("$destroy",function(){b.removeGroup(a)})},this.removeGroup=function(a){var b=this.groups.indexOf(a);-1!==b&&this.groups.splice(b,1)}}]).directive("accordion",function(){return{restrict:"EA",controller:"AccordionController",controllerAs:"accordion",transclude:!0,replace:!1,templateUrl:function(a,b){return b.templateUrl||"template/accordion/accordion.html"}}}).directive("accordionGroup",function(){return{require:"^accordion",restrict:"EA",transclude:!0,replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/accordion/accordion-group.html"},scope:{heading:"@",isOpen:"=?",isDisabled:"=?"},controller:function(){this.setHeading=function(a){this.heading=a}},link:function(a,b,c,d){d.addGroup(a),a.$watch("isOpen",function(b){b&&d.closeOthers(a)}),a.toggleOpen=function(){a.isDisabled||(a.isOpen=!a.isOpen)}}}}).directive("accordionHeading",function(){return{restrict:"EA",transclude:!0,template:"",replace:!0,require:"^accordionGroup",link:function(a,b,c,d,e){d.setHeading(e(a,angular.noop))}}}).directive("accordionTransclude",function(){return{require:"^accordionGroup",link:function(a,b,c,d){a.$watch(function(){return d[c.accordionTransclude]},function(a){a&&(b.find("span").html(""),b.find("span").append(a))})}}}),angular.module("ui.bootstrap.alert",[]).controller("AlertController",["$scope","$attrs",function(a,b){a.closeable=!!b.close,this.close=a.close}]).directive("alert",function(){return{restrict:"EA",controller:"AlertController",controllerAs:"alert",templateUrl:function(a,b){return b.templateUrl||"template/alert/alert.html"},transclude:!0,replace:!0,scope:{type:"@",close:"&"}}}).directive("dismissOnTimeout",["$timeout",function(a){return{require:"alert",link:function(b,c,d,e){a(function(){e.close()},parseInt(d.dismissOnTimeout,10))}}}]),angular.module("ui.bootstrap.bindHtml",[]).value("$bindHtmlUnsafeSuppressDeprecated",!1).directive("bindHtmlUnsafe",["$log","$bindHtmlUnsafeSuppressDeprecated",function(a,b){return function(c,d,e){b||a.warn("bindHtmlUnsafe is now deprecated. Use ngBindHtml instead"),d.addClass("ng-binding").data("$binding",e.bindHtmlUnsafe),c.$watch(e.bindHtmlUnsafe,function(a){d.html(a||"")})}}]),angular.module("ui.bootstrap.buttons",[]).constant("buttonConfig",{activeClass:"active",toggleEvent:"click"}).controller("ButtonsController",["buttonConfig",function(a){this.activeClass=a.activeClass||"active",this.toggleEvent=a.toggleEvent||"click"}]).directive("btnRadio",function(){return{require:["btnRadio","ngModel"],controller:"ButtonsController",controllerAs:"buttons",link:function(a,b,c,d){var e=d[0],f=d[1];f.$render=function(){b.toggleClass(e.activeClass,angular.equals(f.$modelValue,a.$eval(c.btnRadio)))},b.bind(e.toggleEvent,function(){if(!c.disabled){var d=b.hasClass(e.activeClass);(!d||angular.isDefined(c.uncheckable))&&a.$apply(function(){f.$setViewValue(d?null:a.$eval(c.btnRadio)),f.$render()})}})}}}).directive("btnCheckbox",function(){return{require:["btnCheckbox","ngModel"],controller:"ButtonsController",controllerAs:"button",link:function(a,b,c,d){function e(){return g(c.btnCheckboxTrue,!0)}function f(){return g(c.btnCheckboxFalse,!1)}function g(b,c){var d=a.$eval(b);return angular.isDefined(d)?d:c}var h=d[0],i=d[1];i.$render=function(){b.toggleClass(h.activeClass,angular.equals(i.$modelValue,e()))},b.bind(h.toggleEvent,function(){c.disabled||a.$apply(function(){i.$setViewValue(b.hasClass(h.activeClass)?f():e()),i.$render()})})}}}),angular.module("ui.bootstrap.carousel",[]).controller("CarouselController",["$scope","$element","$interval","$animate",function(a,b,c,d){function e(b,c,e){r||(angular.extend(b,{direction:e,active:!0}),angular.extend(l.currentSlide||{},{direction:e,active:!1}),d.enabled()&&!a.noTransition&&!a.$currentTransition&&b.$element&&l.slides.length>1&&(b.$element.data(p,b.direction),l.currentSlide&&l.currentSlide.$element&&l.currentSlide.$element.data(p,b.direction),a.$currentTransition=!0,n?d.on("addClass",b.$element,function(b,c){"close"===c&&(a.$currentTransition=null,d.off("addClass",b))}):b.$element.one("$animate:close",function(){a.$currentTransition=null})),l.currentSlide=b,q=c,g())}function f(a){if(angular.isUndefined(m[a].index))return m[a];{var b;m.length}for(b=0;b<m.length;++b)if(m[b].index==a)return m[b]}function g(){h();var b=+a.interval;!isNaN(b)&&b>0&&(j=c(i,b))}function h(){j&&(c.cancel(j),j=null)}function i(){var b=+a.interval;k&&!isNaN(b)&&b>0&&m.length?a.next():a.pause()}var j,k,l=this,m=l.slides=a.slides=[],n=angular.version.minor>=4,o="uib-noTransition",p="uib-slideDirection",q=-1;l.currentSlide=null;var r=!1;l.select=a.select=function(b,c){var d=a.indexOfSlide(b);void 0===c&&(c=d>l.getCurrentIndex()?"next":"prev"),b&&b!==l.currentSlide&&!a.$currentTransition&&e(b,d,c)},a.$on("$destroy",function(){r=!0}),l.getCurrentIndex=function(){return l.currentSlide&&angular.isDefined(l.currentSlide.index)?+l.currentSlide.index:q},a.indexOfSlide=function(a){return angular.isDefined(a.index)?+a.index:m.indexOf(a)},a.next=function(){var b=(l.getCurrentIndex()+1)%m.length;return 0===b&&a.noWrap()?void a.pause():l.select(f(b),"next")},a.prev=function(){var b=l.getCurrentIndex()-1<0?m.length-1:l.getCurrentIndex()-1;return a.noWrap()&&b===m.length-1?void a.pause():l.select(f(b),"prev")},a.isActive=function(a){return l.currentSlide===a},a.$watch("interval",g),a.$on("$destroy",h),a.play=function(){k||(k=!0,g())},a.pause=function(){a.noPause||(k=!1,h())},l.addSlide=function(b,c){b.$element=c,m.push(b),1===m.length||b.active?(l.select(m[m.length-1]),1==m.length&&a.play()):b.active=!1},l.removeSlide=function(a){angular.isDefined(a.index)&&m.sort(function(a,b){return+a.index>+b.index});var b=m.indexOf(a);m.splice(b,1),m.length>0&&a.active?l.select(b>=m.length?m[b-1]:m[b]):q>b&&q--,0===m.length&&(l.currentSlide=null)},a.$watch("noTransition",function(a){b.data(o,a)})}]).directive("carousel",[function(){return{restrict:"EA",transclude:!0,replace:!0,controller:"CarouselController",controllerAs:"carousel",require:"carousel",templateUrl:function(a,b){return b.templateUrl||"template/carousel/carousel.html"},scope:{interval:"=",noTransition:"=",noPause:"=",noWrap:"&"}}}]).directive("slide",function(){return{require:"^carousel",restrict:"EA",transclude:!0,replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/carousel/slide.html"},scope:{active:"=?",index:"=?"},link:function(a,b,c,d){d.addSlide(a,b),a.$on("$destroy",function(){d.removeSlide(a)}),a.$watch("active",function(b){b&&d.select(a)})}}}).animation(".item",["$injector","$animate",function(a,b){function c(a,b,c){a.removeClass(b),c&&c()}var d="uib-noTransition",e="uib-slideDirection",f=null;return a.has("$animateCss")&&(f=a.get("$animateCss")),{beforeAddClass:function(a,g,h){if("active"==g&&a.parent()&&!a.parent().data(d)){var i=!1,j=a.data(e),k="next"==j?"left":"right",l=c.bind(this,a,k+" "+j,h);return a.addClass(j),f?f(a,{addClass:k}).start().done(l):b.addClass(a,k).then(function(){i||l(),h()}),function(){i=!0}}h()},beforeRemoveClass:function(a,g,h){if("active"===g&&a.parent()&&!a.parent().data(d)){var i=!1,j=a.data(e),k="next"==j?"left":"right",l=c.bind(this,a,k,h);return f?f(a,{addClass:k}).start().done(l):b.addClass(a,k).then(function(){i||l(),h()}),function(){i=!0}}h()}}}]),angular.module("ui.bootstrap.dateparser",[]).service("dateParser",["$log","$locale","orderByFilter",function(a,b,c){function d(a){var b=[],d=a.split("");return angular.forEach(g,function(c,e){var f=a.indexOf(e);if(f>-1){a=a.split(""),d[f]="("+c.regex+")",a[f]="$";for(var g=f+1,h=f+e.length;h>g;g++)d[g]="",a[g]="$";a=a.join(""),b.push({index:f,apply:c.apply})}}),{regex:new RegExp("^"+d.join("")+"$"),map:c(b,"index")}}function e(a,b,c){return 1>c?!1:1===b&&c>28?29===c&&(a%4===0&&a%100!==0||a%400===0):3===b||5===b||8===b||10===b?31>c:!0}var f=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;this.parsers={};var g={yyyy:{regex:"\\d{4}",apply:function(a){this.year=+a}},yy:{regex:"\\d{2}",apply:function(a){this.year=+a+2e3}},y:{regex:"\\d{1,4}",apply:function(a){this.year=+a}},MMMM:{regex:b.DATETIME_FORMATS.MONTH.join("|"),apply:function(a){this.month=b.DATETIME_FORMATS.MONTH.indexOf(a)}},MMM:{regex:b.DATETIME_FORMATS.SHORTMONTH.join("|"),apply:function(a){this.month=b.DATETIME_FORMATS.SHORTMONTH.indexOf(a)}},MM:{regex:"0[1-9]|1[0-2]",apply:function(a){this.month=a-1}},M:{regex:"[1-9]|1[0-2]",apply:function(a){this.month=a-1}},dd:{regex:"[0-2][0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a}},d:{regex:"[1-2]?[0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a}},EEEE:{regex:b.DATETIME_FORMATS.DAY.join("|")},EEE:{regex:b.DATETIME_FORMATS.SHORTDAY.join("|")},HH:{regex:"(?:0|1)[0-9]|2[0-3]",apply:function(a){this.hours=+a}},hh:{regex:"0[0-9]|1[0-2]",apply:function(a){this.hours=+a}},H:{regex:"1?[0-9]|2[0-3]",apply:function(a){this.hours=+a}},mm:{regex:"[0-5][0-9]",apply:function(a){this.minutes=+a}},m:{regex:"[0-9]|[1-5][0-9]",apply:function(a){this.minutes=+a}},sss:{regex:"[0-9][0-9][0-9]",apply:function(a){this.milliseconds=+a}},ss:{regex:"[0-5][0-9]",apply:function(a){this.seconds=+a}},s:{regex:"[0-9]|[1-5][0-9]",apply:function(a){this.seconds=+a}},a:{regex:b.DATETIME_FORMATS.AMPMS.join("|"),apply:function(a){12===this.hours&&(this.hours=0),"PM"===a&&(this.hours+=12)}}};this.parse=function(c,g,h){if(!angular.isString(c)||!g)return c;g=b.DATETIME_FORMATS[g]||g,g=g.replace(f,"\\$&"),this.parsers[g]||(this.parsers[g]=d(g));var i=this.parsers[g],j=i.regex,k=i.map,l=c.match(j);if(l&&l.length){var m,n;angular.isDate(h)&&!isNaN(h.getTime())?m={year:h.getFullYear(),month:h.getMonth(),date:h.getDate(),hours:h.getHours(),minutes:h.getMinutes(),seconds:h.getSeconds(),milliseconds:h.getMilliseconds()}:(h&&a.warn("dateparser:","baseDate is not a valid date"),m={year:1900,month:0,date:1,hours:0,minutes:0,seconds:0,milliseconds:0});for(var o=1,p=l.length;p>o;o++){var q=k[o-1];q.apply&&q.apply.call(m,l[o])}return e(m.year,m.month,m.date)&&(n=new Date(m.year,m.month,m.date,m.hours,m.minutes,m.seconds,m.milliseconds||0)),n}}}]),angular.module("ui.bootstrap.position",[]).factory("$position",["$document","$window",function(a,b){function c(a,c){return a.currentStyle?a.currentStyle[c]:b.getComputedStyle?b.getComputedStyle(a)[c]:a.style[c]}function d(a){return"static"===(c(a,"position")||"static")}var e=function(b){for(var c=a[0],e=b.offsetParent||c;e&&e!==c&&d(e);)e=e.offsetParent;return e||c};return{position:function(b){var c=this.offset(b),d={top:0,left:0},f=e(b[0]);f!=a[0]&&(d=this.offset(angular.element(f)),d.top+=f.clientTop-f.scrollTop,d.left+=f.clientLeft-f.scrollLeft);var g=b[0].getBoundingClientRect();return{width:g.width||b.prop("offsetWidth"),height:g.height||b.prop("offsetHeight"),top:c.top-d.top,left:c.left-d.left}},offset:function(c){var d=c[0].getBoundingClientRect();return{width:d.width||c.prop("offsetWidth"),height:d.height||c.prop("offsetHeight"),top:d.top+(b.pageYOffset||a[0].documentElement.scrollTop),left:d.left+(b.pageXOffset||a[0].documentElement.scrollLeft)}},positionElements:function(a,b,c,d){var e,f,g,h,i=c.split("-"),j=i[0],k=i[1]||"center";e=d?this.offset(a):this.position(a),f=b.prop("offsetWidth"),g=b.prop("offsetHeight");var l={center:function(){return e.left+e.width/2-f/2},left:function(){return e.left},right:function(){return e.left+e.width}},m={center:function(){return e.top+e.height/2-g/2},top:function(){return e.top},bottom:function(){return e.top+e.height}};switch(j){case"right":h={top:m[k](),left:l[j]()};break;case"left":h={top:m[k](),left:e.left-f};break;case"bottom":h={top:m[j](),left:l[k]()};break;default:h={top:e.top-g,left:l[k]()}}return h}}}]),angular.module("ui.bootstrap.datepicker",["ui.bootstrap.dateparser","ui.bootstrap.position"]).value("$datepickerSuppressError",!1).constant("datepickerConfig",{formatDay:"dd",formatMonth:"MMMM",formatYear:"yyyy",formatDayHeader:"EEE",formatDayTitle:"MMMM yyyy",formatMonthTitle:"yyyy",datepickerMode:"day",minMode:"day",maxMode:"year",showWeeks:!0,startingDay:0,yearRange:20,minDate:null,maxDate:null,shortcutPropagation:!1}).controller("DatepickerController",["$scope","$attrs","$parse","$interpolate","$log","dateFilter","datepickerConfig","$datepickerSuppressError",function(a,b,c,d,e,f,g,h){var i=this,j={$setViewValue:angular.noop};this.modes=["day","month","year"],angular.forEach(["formatDay","formatMonth","formatYear","formatDayHeader","formatDayTitle","formatMonthTitle","showWeeks","startingDay","yearRange","shortcutPropagation"],function(c,e){i[c]=angular.isDefined(b[c])?6>e?d(b[c])(a.$parent):a.$parent.$eval(b[c]):g[c]}),angular.forEach(["minDate","maxDate"],function(d){b[d]?a.$parent.$watch(c(b[d]),function(a){i[d]=a?new Date(a):null,i.refreshView()}):i[d]=g[d]?new Date(g[d]):null}),angular.forEach(["minMode","maxMode"],function(d){b[d]?a.$parent.$watch(c(b[d]),function(c){i[d]=angular.isDefined(c)?c:b[d],a[d]=i[d],("minMode"==d&&i.modes.indexOf(a.datepickerMode)<i.modes.indexOf(i[d])||"maxMode"==d&&i.modes.indexOf(a.datepickerMode)>i.modes.indexOf(i[d]))&&(a.datepickerMode=i[d])}):(i[d]=g[d]||null,a[d]=i[d])}),a.datepickerMode=a.datepickerMode||g.datepickerMode,a.uniqueId="datepicker-"+a.$id+"-"+Math.floor(1e4*Math.random()),angular.isDefined(b.initDate)?(this.activeDate=a.$parent.$eval(b.initDate)||new Date,a.$parent.$watch(b.initDate,function(a){a&&(j.$isEmpty(j.$modelValue)||j.$invalid)&&(i.activeDate=a,i.refreshView())})):this.activeDate=new Date,a.isActive=function(b){return 0===i.compare(b.date,i.activeDate)?(a.activeDateId=b.uid,!0):!1},this.init=function(a){j=a,j.$render=function(){i.render()}},this.render=function(){if(j.$viewValue){var a=new Date(j.$viewValue),b=!isNaN(a);b?this.activeDate=a:h||e.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')}this.refreshView()},this.refreshView=function(){if(this.element){this._refreshView();var a=j.$viewValue?new Date(j.$viewValue):null;j.$setValidity("dateDisabled",!a||this.element&&!this.isDisabled(a))}},this.createDateObject=function(a,b){var c=j.$viewValue?new Date(j.$viewValue):null;return{date:a,label:f(a,b),selected:c&&0===this.compare(a,c),disabled:this.isDisabled(a),current:0===this.compare(a,new Date),customClass:this.customClass(a)}},this.isDisabled=function(c){return this.minDate&&this.compare(c,this.minDate)<0||this.maxDate&&this.compare(c,this.maxDate)>0||b.dateDisabled&&a.dateDisabled({date:c,mode:a.datepickerMode})},this.customClass=function(b){return a.customClass({date:b,mode:a.datepickerMode})},this.split=function(a,b){for(var c=[];a.length>0;)c.push(a.splice(0,b));return c},this.fixTimeZone=function(a){var b=a.getHours();a.setHours(23===b?b+2:0)},a.select=function(b){if(a.datepickerMode===i.minMode){var c=j.$viewValue?new Date(j.$viewValue):new Date(0,0,0,0,0,0,0);c.setFullYear(b.getFullYear(),b.getMonth(),b.getDate()),j.$setViewValue(c),j.$render()}else i.activeDate=b,a.datepickerMode=i.modes[i.modes.indexOf(a.datepickerMode)-1]},a.move=function(a){var b=i.activeDate.getFullYear()+a*(i.step.years||0),c=i.activeDate.getMonth()+a*(i.step.months||0);i.activeDate.setFullYear(b,c,1),i.refreshView()},a.toggleMode=function(b){b=b||1,a.datepickerMode===i.maxMode&&1===b||a.datepickerMode===i.minMode&&-1===b||(a.datepickerMode=i.modes[i.modes.indexOf(a.datepickerMode)+b])},a.keys={13:"enter",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down"};var k=function(){i.element[0].focus()};a.$on("datepicker.focus",k),a.keydown=function(b){var c=a.keys[b.which];if(c&&!b.shiftKey&&!b.altKey)if(b.preventDefault(),i.shortcutPropagation||b.stopPropagation(),"enter"===c||"space"===c){if(i.isDisabled(i.activeDate))return;a.select(i.activeDate),k()}else!b.ctrlKey||"up"!==c&&"down"!==c?(i.handleKeyDown(c,b),i.refreshView()):(a.toggleMode("up"===c?1:-1),k())}}]).directive("datepicker",function(){return{restrict:"EA",replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/datepicker/datepicker.html"},scope:{datepickerMode:"=?",dateDisabled:"&",customClass:"&",shortcutPropagation:"&?"},require:["datepicker","^ngModel"],controller:"DatepickerController",controllerAs:"datepicker",link:function(a,b,c,d){var e=d[0],f=d[1];e.init(f)}}}).directive("daypicker",["dateFilter",function(a){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/day.html",require:"^datepicker",link:function(b,c,d,e){function f(a,b){return 1!==b||a%4!==0||a%100===0&&a%400!==0?i[b]:29}function g(a,b){for(var c,d=new Array(b),f=new Date(a),g=0;b>g;)c=new Date(f),e.fixTimeZone(c),d[g++]=c,f.setDate(f.getDate()+1);return d}function h(a){var b=new Date(a);b.setDate(b.getDate()+4-(b.getDay()||7));var c=b.getTime();return b.setMonth(0),b.setDate(1),Math.floor(Math.round((c-b)/864e5)/7)+1}b.showWeeks=e.showWeeks,e.step={months:1},e.element=c;var i=[31,28,31,30,31,30,31,31,30,31,30,31];e._refreshView=function(){var c=e.activeDate.getFullYear(),d=e.activeDate.getMonth(),f=new Date(c,d,1),i=e.startingDay-f.getDay(),j=i>0?7-i:-i,k=new Date(f);j>0&&k.setDate(-j+1);for(var l=g(k,42),m=0;42>m;m++)l[m]=angular.extend(e.createDateObject(l[m],e.formatDay),{secondary:l[m].getMonth()!==d,uid:b.uniqueId+"-"+m});b.labels=new Array(7);for(var n=0;7>n;n++)b.labels[n]={abbr:a(l[n].date,e.formatDayHeader),full:a(l[n].date,"EEEE")};if(b.title=a(e.activeDate,e.formatDayTitle),b.rows=e.split(l,7),b.showWeeks){b.weekNumbers=[];for(var o=(11-e.startingDay)%7,p=b.rows.length,q=0;p>q;q++)b.weekNumbers.push(h(b.rows[q][o].date))}},e.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth(),a.getDate())-new Date(b.getFullYear(),b.getMonth(),b.getDate())},e.handleKeyDown=function(a){var b=e.activeDate.getDate();if("left"===a)b-=1;else if("up"===a)b-=7;else if("right"===a)b+=1;else if("down"===a)b+=7;else if("pageup"===a||"pagedown"===a){var c=e.activeDate.getMonth()+("pageup"===a?-1:1);e.activeDate.setMonth(c,1),b=Math.min(f(e.activeDate.getFullYear(),e.activeDate.getMonth()),b)}else"home"===a?b=1:"end"===a&&(b=f(e.activeDate.getFullYear(),e.activeDate.getMonth()));e.activeDate.setDate(b)},e.refreshView()}}}]).directive("monthpicker",["dateFilter",function(a){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/month.html",require:"^datepicker",link:function(b,c,d,e){e.step={years:1},e.element=c,e._refreshView=function(){for(var c,d=new Array(12),f=e.activeDate.getFullYear(),g=0;12>g;g++)c=new Date(f,g,1),e.fixTimeZone(c),d[g]=angular.extend(e.createDateObject(c,e.formatMonth),{uid:b.uniqueId+"-"+g});b.title=a(e.activeDate,e.formatMonthTitle),b.rows=e.split(d,3)},e.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth())-new Date(b.getFullYear(),b.getMonth())},e.handleKeyDown=function(a){var b=e.activeDate.getMonth();if("left"===a)b-=1;else if("up"===a)b-=3;else if("right"===a)b+=1;else if("down"===a)b+=3;else if("pageup"===a||"pagedown"===a){var c=e.activeDate.getFullYear()+("pageup"===a?-1:1);e.activeDate.setFullYear(c)}else"home"===a?b=0:"end"===a&&(b=11);e.activeDate.setMonth(b)},e.refreshView()}}}]).directive("yearpicker",["dateFilter",function(){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/year.html",require:"^datepicker",link:function(a,b,c,d){function e(a){return parseInt((a-1)/f,10)*f+1}var f=d.yearRange;d.step={years:f},d.element=b,d._refreshView=function(){for(var b,c=new Array(f),g=0,h=e(d.activeDate.getFullYear());f>g;g++)b=new Date(h+g,0,1),d.fixTimeZone(b),c[g]=angular.extend(d.createDateObject(b,d.formatYear),{uid:a.uniqueId+"-"+g});a.title=[c[0].label,c[f-1].label].join(" - "),a.rows=d.split(c,5)},d.compare=function(a,b){return a.getFullYear()-b.getFullYear()},d.handleKeyDown=function(a){var b=d.activeDate.getFullYear();"left"===a?b-=1:"up"===a?b-=5:"right"===a?b+=1:"down"===a?b+=5:"pageup"===a||"pagedown"===a?b+=("pageup"===a?-1:1)*d.step.years:"home"===a?b=e(d.activeDate.getFullYear()):"end"===a&&(b=e(d.activeDate.getFullYear())+f-1),d.activeDate.setFullYear(b)},d.refreshView()}}}]).constant("datepickerPopupConfig",{datepickerPopup:"yyyy-MM-dd",datepickerPopupTemplateUrl:"template/datepicker/popup.html",datepickerTemplateUrl:"template/datepicker/datepicker.html",html5Types:{date:"yyyy-MM-dd","datetime-local":"yyyy-MM-ddTHH:mm:ss.sss",month:"yyyy-MM"},currentText:"Today",clearText:"Clear",closeText:"Done",closeOnDateSelection:!0,appendToBody:!1,showButtonBar:!0,onOpenFocus:!0}).directive("datepickerPopup",["$compile","$parse","$document","$rootScope","$position","dateFilter","dateParser","datepickerPopupConfig","$timeout",function(a,b,c,d,e,f,g,h,i){return{restrict:"EA",require:"ngModel",scope:{isOpen:"=?",currentText:"@",clearText:"@",closeText:"@",dateDisabled:"&",customClass:"&"},link:function(j,k,l,m){function n(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}function o(a){if(angular.isNumber(a)&&(a=new Date(a)),a){if(angular.isDate(a)&&!isNaN(a))return a;if(angular.isString(a)){var b=g.parse(a,q,j.date);return isNaN(b)?void 0:b}return void 0}return null}function p(a,b){var c=a||b;if(!l.ngRequired&&!c)return!0;if(angular.isNumber(c)&&(c=new Date(c)),c){if(angular.isDate(c)&&!isNaN(c))return!0;if(angular.isString(c)){var d=g.parse(c,q);return!isNaN(d)}return!1}return!0}var q,r=angular.isDefined(l.closeOnDateSelection)?j.$parent.$eval(l.closeOnDateSelection):h.closeOnDateSelection,s=angular.isDefined(l.datepickerAppendToBody)?j.$parent.$eval(l.datepickerAppendToBody):h.appendToBody,t=angular.isDefined(l.onOpenFocus)?j.$parent.$eval(l.onOpenFocus):h.onOpenFocus,u=angular.isDefined(l.datepickerPopupTemplateUrl)?l.datepickerPopupTemplateUrl:h.datepickerPopupTemplateUrl,v=angular.isDefined(l.datepickerTemplateUrl)?l.datepickerTemplateUrl:h.datepickerTemplateUrl;j.showButtonBar=angular.isDefined(l.showButtonBar)?j.$parent.$eval(l.showButtonBar):h.showButtonBar,j.getText=function(a){return j[a+"Text"]||h[a+"Text"]};var w=!1;if(h.html5Types[l.type]?(q=h.html5Types[l.type],w=!0):(q=l.datepickerPopup||h.datepickerPopup,l.$observe("datepickerPopup",function(a){var b=a||h.datepickerPopup;if(b!==q&&(q=b,m.$modelValue=null,!q))throw new Error("datepickerPopup must have a date format specified.")})),!q)throw new Error("datepickerPopup must have a date format specified.");if(w&&l.datepickerPopup)throw new Error("HTML5 date input types do not support custom formats.");var x=angular.element("<div datepicker-popup-wrap><div datepicker></div></div>");x.attr({"ng-model":"date","ng-change":"dateSelection(date)","template-url":u});var y=angular.element(x.children()[0]);if(y.attr("template-url",v),w&&"month"==l.type&&(y.attr("datepicker-mode",'"month"'),y.attr("min-mode","month")),l.datepickerOptions){var z=j.$parent.$eval(l.datepickerOptions);z&&z.initDate&&(j.initDate=z.initDate,y.attr("init-date","initDate"),delete z.initDate),angular.forEach(z,function(a,b){y.attr(n(b),a)})}j.watchData={},angular.forEach(["minMode","maxMode","minDate","maxDate","datepickerMode","initDate","shortcutPropagation"],function(a){if(l[a]){var c=b(l[a]);if(j.$parent.$watch(c,function(b){j.watchData[a]=b}),y.attr(n(a),"watchData."+a),"datepickerMode"===a){var d=c.assign;j.$watch("watchData."+a,function(a,b){angular.isFunction(d)&&a!==b&&d(j.$parent,a)})}}}),l.dateDisabled&&y.attr("date-disabled","dateDisabled({ date: date, mode: mode })"),l.showWeeks&&y.attr("show-weeks",l.showWeeks),l.customClass&&y.attr("custom-class","customClass({ date: date, mode: mode })"),w?m.$formatters.push(function(a){return j.date=a,a}):(m.$$parserName="date",m.$validators.date=p,m.$parsers.unshift(o),m.$formatters.push(function(a){return j.date=a,m.$isEmpty(a)?a:f(a,q)})),j.dateSelection=function(a){angular.isDefined(a)&&(j.date=a);var b=j.date?f(j.date,q):null;k.val(b),m.$setViewValue(b),r&&(j.isOpen=!1,k[0].focus())},m.$viewChangeListeners.push(function(){j.date=g.parse(m.$viewValue,q,j.date)});var A=function(a){j.isOpen&&!k[0].contains(a.target)&&j.$apply(function(){j.isOpen=!1})},B=function(a){27===a.which&&j.isOpen?(a.preventDefault(),a.stopPropagation(),j.$apply(function(){j.isOpen=!1}),k[0].focus()):40!==a.which||j.isOpen||(a.preventDefault(),a.stopPropagation(),j.$apply(function(){j.isOpen=!0}))};k.bind("keydown",B),j.keydown=function(a){27===a.which&&(j.isOpen=!1,k[0].focus())},j.$watch("isOpen",function(a){a?(j.position=s?e.offset(k):e.position(k),j.position.top=j.position.top+k.prop("offsetHeight"),i(function(){t&&j.$broadcast("datepicker.focus"),c.bind("click",A)},0,!1)):c.unbind("click",A)}),j.select=function(a){if("today"===a){var b=new Date;angular.isDate(j.date)?(a=new Date(j.date),a.setFullYear(b.getFullYear(),b.getMonth(),b.getDate())):a=new Date(b.setHours(0,0,0,0))}j.dateSelection(a)},j.close=function(){j.isOpen=!1,k[0].focus()};var C=a(x)(j);x.remove(),s?c.find("body").append(C):k.after(C),j.$on("$destroy",function(){j.isOpen===!0&&(d.$$phase||j.$apply(function(){j.isOpen=!1})),C.remove(),k.unbind("keydown",B),c.unbind("click",A)})}}}]).directive("datepickerPopupWrap",function(){return{restrict:"EA",replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||"template/datepicker/popup.html"}}}),angular.module("ui.bootstrap.dropdown",["ui.bootstrap.position"]).constant("dropdownConfig",{openClass:"open"}).service("dropdownService",["$document","$rootScope",function(a,b){var c=null;this.open=function(b){c||(a.bind("click",d),a.bind("keydown",e)),c&&c!==b&&(c.isOpen=!1),c=b},this.close=function(b){c===b&&(c=null,a.unbind("click",d),a.unbind("keydown",e))};var d=function(a){if(c&&(!a||"disabled"!==c.getAutoClose())){var d=c.getToggleElement();if(!(a&&d&&d[0].contains(a.target))){var e=c.getDropdownElement();a&&"outsideClick"===c.getAutoClose()&&e&&e[0].contains(a.target)||(c.isOpen=!1,b.$$phase||c.$apply())}}},e=function(a){27===a.which?(c.focusToggleElement(),d()):c.isKeynavEnabled()&&/(38|40)/.test(a.which)&&c.isOpen&&(a.preventDefault(),a.stopPropagation(),c.focusDropdownEntry(a.which))}}]).controller("DropdownController",["$scope","$attrs","$parse","dropdownConfig","dropdownService","$animate","$position","$document","$compile","$templateRequest",function(a,b,c,d,e,f,g,h,i,j){var k,l,m=this,n=a.$new(),o=d.openClass,p=angular.noop,q=b.onToggle?c(b.onToggle):angular.noop,r=!1,s=!1;this.init=function(d){m.$element=d,b.isOpen&&(l=c(b.isOpen),p=l.assign,a.$watch(l,function(a){n.isOpen=!!a})),r=angular.isDefined(b.dropdownAppendToBody),s=angular.isDefined(b.keyboardNav),r&&m.dropdownMenu&&(h.find("body").append(m.dropdownMenu),d.on("$destroy",function(){m.dropdownMenu.remove()}))},this.toggle=function(a){return n.isOpen=arguments.length?!!a:!n.isOpen},this.isOpen=function(){return n.isOpen},n.getToggleElement=function(){return m.toggleElement},n.getAutoClose=function(){return b.autoClose||"always"},n.getElement=function(){return m.$element},n.isKeynavEnabled=function(){return s},n.focusDropdownEntry=function(a){var b=m.dropdownMenu?angular.element(m.dropdownMenu).find("a"):angular.element(m.$element).find("ul").eq(0).find("a");switch(a){case 40:m.selectedOption=angular.isNumber(m.selectedOption)?m.selectedOption===b.length-1?m.selectedOption:m.selectedOption+1:0;break;case 38:if(!angular.isNumber(m.selectedOption))return;m.selectedOption=0===m.selectedOption?0:m.selectedOption-1}b[m.selectedOption].focus()},n.getDropdownElement=function(){return m.dropdownMenu},n.focusToggleElement=function(){m.toggleElement&&m.toggleElement[0].focus()},n.$watch("isOpen",function(b,c){if(r&&m.dropdownMenu){var d=g.positionElements(m.$element,m.dropdownMenu,"bottom-left",!0),h={top:d.top+"px",display:b?"block":"none"},l=m.dropdownMenu.hasClass("dropdown-menu-right");l?(h.left="auto",h.right=window.innerWidth-(d.left+m.$element.prop("offsetWidth"))+"px"):(h.left=d.left+"px",h.right="auto"),m.dropdownMenu.css(h)}if(f[b?"addClass":"removeClass"](m.$element,o).then(function(){angular.isDefined(b)&&b!==c&&q(a,{open:!!b})}),b)m.dropdownMenuTemplateUrl&&j(m.dropdownMenuTemplateUrl).then(function(a){k=n.$new(),i(a.trim())(k,function(a){var b=a;m.dropdownMenu.replaceWith(b),m.dropdownMenu=b})}),n.focusToggleElement(),e.open(n);else{if(m.dropdownMenuTemplateUrl){k&&k.$destroy();var s=angular.element('<ul class="dropdown-menu"></ul>');m.dropdownMenu.replaceWith(s),m.dropdownMenu=s}e.close(n),m.selectedOption=null}angular.isFunction(p)&&p(a,b)}),a.$on("$locationChangeSuccess",function(){"disabled"!==n.getAutoClose()&&(n.isOpen=!1)}),a.$on("$destroy",function(){n.$destroy()})}]).directive("dropdown",function(){return{controller:"DropdownController",link:function(a,b,c,d){d.init(b),b.addClass("dropdown")}}}).directive("dropdownMenu",function(){return{restrict:"AC",require:"?^dropdown",link:function(a,b,c,d){if(d){var e=c.templateUrl;e&&(d.dropdownMenuTemplateUrl=e),d.dropdownMenu||(d.dropdownMenu=b)}}}}).directive("keyboardNav",function(){return{restrict:"A",require:"?^dropdown",link:function(a,b,c,d){b.bind("keydown",function(a){if(-1!==[38,40].indexOf(a.which)){a.preventDefault(),a.stopPropagation();var b=d.dropdownMenu.find("a");switch(a.which){case 40:d.selectedOption=angular.isNumber(d.selectedOption)?d.selectedOption===b.length-1?d.selectedOption:d.selectedOption+1:0;break;case 38:d.selectedOption=0===d.selectedOption?0:d.selectedOption-1}b[d.selectedOption].focus()}})}}}).directive("dropdownToggle",function(){
return{require:"?^dropdown",link:function(a,b,c,d){if(d){b.addClass("dropdown-toggle"),d.toggleElement=b;var e=function(e){e.preventDefault(),b.hasClass("disabled")||c.disabled||a.$apply(function(){d.toggle()})};b.bind("click",e),b.attr({"aria-haspopup":!0,"aria-expanded":!1}),a.$watch(d.isOpen,function(a){b.attr("aria-expanded",!!a)}),a.$on("$destroy",function(){b.unbind("click",e)})}}}}),angular.module("ui.bootstrap.modal",[]).factory("$$stackedMap",function(){return{createNew:function(){var a=[];return{add:function(b,c){a.push({key:b,value:c})},get:function(b){for(var c=0;c<a.length;c++)if(b==a[c].key)return a[c]},keys:function(){for(var b=[],c=0;c<a.length;c++)b.push(a[c].key);return b},top:function(){return a[a.length-1]},remove:function(b){for(var c=-1,d=0;d<a.length;d++)if(b==a[d].key){c=d;break}return a.splice(c,1)[0]},removeTop:function(){return a.splice(a.length-1,1)[0]},length:function(){return a.length}}}}}).directive("modalBackdrop",["$animate","$injector","$modalStack",function(a,b,c){function d(b,d,f){f.modalInClass&&(e?e(d,{addClass:f.modalInClass}).start():a.addClass(d,f.modalInClass),b.$on(c.NOW_CLOSING_EVENT,function(b,c){var g=c();e?e(d,{removeClass:f.modalInClass}).start().then(g):a.removeClass(d,f.modalInClass).then(g)}))}var e=null;return b.has("$animateCss")&&(e=b.get("$animateCss")),{restrict:"EA",replace:!0,templateUrl:"template/modal/backdrop.html",compile:function(a,b){return a.addClass(b.backdropClass),d}}}]).directive("modalWindow",["$modalStack","$q","$animate","$injector",function(a,b,c,d){var e=null;return d.has("$animateCss")&&(e=d.get("$animateCss")),{restrict:"EA",scope:{index:"@"},replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||"template/modal/window.html"},link:function(d,f,g){f.addClass(g.windowClass||""),d.size=g.size,d.close=function(b){var c=a.getTop();c&&c.value.backdrop&&"static"!=c.value.backdrop&&b.target===b.currentTarget&&(b.preventDefault(),b.stopPropagation(),a.dismiss(c.key,"backdrop click"))},d.$isRendered=!0;var h=b.defer();g.$observe("modalRender",function(a){"true"==a&&h.resolve()}),h.promise.then(function(){g.modalInClass&&(e?e(f,{addClass:g.modalInClass}).start():c.addClass(f,g.modalInClass),d.$on(a.NOW_CLOSING_EVENT,function(a,b){var d=b();e?e(f,{removeClass:g.modalInClass}).start().then(d):c.removeClass(f,g.modalInClass).then(d)}));var b=f[0].querySelectorAll("[autofocus]");b.length?b[0].focus():f[0].focus();var h=a.getTop();h&&a.modalRendered(h.key)})}}}]).directive("modalAnimationClass",[function(){return{compile:function(a,b){b.modalAnimation&&a.addClass(b.modalAnimationClass)}}}]).directive("modalTransclude",function(){return{link:function(a,b,c,d,e){e(a.$parent,function(a){b.empty(),b.append(a)})}}}).factory("$modalStack",["$animate","$timeout","$document","$compile","$rootScope","$q","$injector","$$stackedMap",function(a,b,c,d,e,f,g,h){function i(){for(var a=-1,b=s.keys(),c=0;c<b.length;c++)s.get(b[c]).value.backdrop&&(a=c);return a}function j(a,b){var d=c.find("body").eq(0),e=s.get(a).value;s.remove(a),l(e.modalDomEl,e.modalScope,function(){d.toggleClass(a.openedClass||r,s.length()>0)}),k(),b&&b.focus?b.focus():d.focus()}function k(){if(o&&-1==i()){var a=p;l(o,p,function(){a=null}),o=void 0,p=void 0}}function l(b,c,d){function e(){e.done||(e.done=!0,n?n(b,{event:"leave"}).start().then(function(){b.remove()}):a.leave(b),c.$destroy(),d&&d())}var g,h=null,i=function(){return g||(g=f.defer(),h=g.promise),function(){g.resolve()}};return c.$broadcast(t.NOW_CLOSING_EVENT,i),f.when(h).then(e)}function m(a,b,c){return!a.value.modalScope.$broadcast("modal.closing",b,c).defaultPrevented}var n=null;g.has("$animateCss")&&(n=g.get("$animateCss"));var o,p,q,r="modal-open",s=h.createNew(),t={NOW_CLOSING_EVENT:"modal.stack.now-closing"},u=0,v="a[href], area[href], input:not([disabled]), button:not([disabled]),select:not([disabled]), textarea:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable=true]";return e.$watch(i,function(a){p&&(p.index=a)}),c.bind("keydown",function(a){if(a.isDefaultPrevented())return a;var b=s.top();if(b&&b.value.keyboard)switch(a.which){case 27:a.preventDefault(),e.$apply(function(){t.dismiss(b.key,"escape key press")});break;case 9:t.loadFocusElementList(b);var c=!1;a.shiftKey?t.isFocusInFirstItem(a)&&(c=t.focusLastFocusableElement()):t.isFocusInLastItem(a)&&(c=t.focusFirstFocusableElement()),c&&(a.preventDefault(),a.stopPropagation())}}),t.open=function(a,b){var f=c[0].activeElement;s.add(a,{deferred:b.deferred,renderDeferred:b.renderDeferred,modalScope:b.scope,backdrop:b.backdrop,keyboard:b.keyboard,openedClass:b.openedClass});var g=c.find("body").eq(0),h=i();if(h>=0&&!o){p=e.$new(!0),p.index=h;var j=angular.element('<div modal-backdrop="modal-backdrop"></div>');j.attr("backdrop-class",b.backdropClass),b.animation&&j.attr("modal-animation","true"),o=d(j)(p),g.append(o)}var k=angular.element('<div modal-window="modal-window"></div>');k.attr({"template-url":b.windowTemplateUrl,"window-class":b.windowClass,size:b.size,index:s.length()-1,animate:"animate"}).html(b.content),b.animation&&k.attr("modal-animation","true");var l=d(k)(b.scope);s.top().value.modalDomEl=l,s.top().value.modalOpener=f,g.append(l),g.addClass(b.openedClass||r),t.clearFocusListCache()},t.close=function(a,b){var c=s.get(a);return c&&m(c,b,!0)?(c.value.modalScope.$$uibDestructionScheduled=!0,c.value.deferred.resolve(b),j(a,c.value.modalOpener),!0):!c},t.dismiss=function(a,b){var c=s.get(a);return c&&m(c,b,!1)?(c.value.modalScope.$$uibDestructionScheduled=!0,c.value.deferred.reject(b),j(a,c.value.modalOpener),!0):!c},t.dismissAll=function(a){for(var b=this.getTop();b&&this.dismiss(b.key,a);)b=this.getTop()},t.getTop=function(){return s.top()},t.modalRendered=function(a){var b=s.get(a);b&&b.value.renderDeferred.resolve()},t.focusFirstFocusableElement=function(){return q.length>0?(q[0].focus(),!0):!1},t.focusLastFocusableElement=function(){return q.length>0?(q[q.length-1].focus(),!0):!1},t.isFocusInFirstItem=function(a){return q.length>0?(a.target||a.srcElement)==q[0]:!1},t.isFocusInLastItem=function(a){return q.length>0?(a.target||a.srcElement)==q[q.length-1]:!1},t.clearFocusListCache=function(){q=[],u=0},t.loadFocusElementList=function(a){if((void 0===q||!q.length0)&&a){var b=a.value.modalDomEl;b&&b.length&&(q=b[0].querySelectorAll(v))}},t}]).provider("$modal",function(){var a={options:{animation:!0,backdrop:!0,keyboard:!0},$get:["$injector","$rootScope","$q","$templateRequest","$controller","$modalStack",function(b,c,d,e,f,g){function h(a){return a.template?d.when(a.template):e(angular.isFunction(a.templateUrl)?a.templateUrl():a.templateUrl)}function i(a){var c=[];return angular.forEach(a,function(a){angular.isFunction(a)||angular.isArray(a)?c.push(d.when(b.invoke(a))):angular.isString(a)&&c.push(d.when(b.get(a)))}),c}var j={};return j.open=function(b){var e=d.defer(),j=d.defer(),k=d.defer(),l={result:e.promise,opened:j.promise,rendered:k.promise,close:function(a){return g.close(l,a)},dismiss:function(a){return g.dismiss(l,a)}};if(b=angular.extend({},a.options,b),b.resolve=b.resolve||{},!b.template&&!b.templateUrl)throw new Error("One of template or templateUrl options is required.");var m=d.all([h(b)].concat(i(b.resolve)));return m.then(function(a){var d=(b.scope||c).$new();d.$close=l.close,d.$dismiss=l.dismiss,d.$on("$destroy",function(){d.$$uibDestructionScheduled||d.$dismiss("$uibUnscheduledDestruction")});var h,i={},j=1;b.controller&&(i.$scope=d,i.$modalInstance=l,angular.forEach(b.resolve,function(b,c){i[c]=a[j++]}),h=f(b.controller,i),b.controllerAs&&(b.bindToController&&angular.extend(h,d),d[b.controllerAs]=h)),g.open(l,{scope:d,deferred:e,renderDeferred:k,content:a[0],animation:b.animation,backdrop:b.backdrop,keyboard:b.keyboard,backdropClass:b.backdropClass,windowClass:b.windowClass,windowTemplateUrl:b.windowTemplateUrl,size:b.size,openedClass:b.openedClass})},function(a){e.reject(a)}),m.then(function(){j.resolve(!0)},function(a){j.reject(a)}),l},j}]};return a}),angular.module("ui.bootstrap.pagination",[]).controller("PaginationController",["$scope","$attrs","$parse",function(a,b,c){var d=this,e={$setViewValue:angular.noop},f=b.numPages?c(b.numPages).assign:angular.noop;this.init=function(g,h){e=g,this.config=h,e.$render=function(){d.render()},b.itemsPerPage?a.$parent.$watch(c(b.itemsPerPage),function(b){d.itemsPerPage=parseInt(b,10),a.totalPages=d.calculateTotalPages()}):this.itemsPerPage=h.itemsPerPage,a.$watch("totalItems",function(){a.totalPages=d.calculateTotalPages()}),a.$watch("totalPages",function(b){f(a.$parent,b),a.page>b?a.selectPage(b):e.$render()})},this.calculateTotalPages=function(){var b=this.itemsPerPage<1?1:Math.ceil(a.totalItems/this.itemsPerPage);return Math.max(b||0,1)},this.render=function(){a.page=parseInt(e.$viewValue,10)||1},a.selectPage=function(b,c){c&&c.preventDefault();var d=!a.ngDisabled||!c;d&&a.page!==b&&b>0&&b<=a.totalPages&&(c&&c.target&&c.target.blur(),e.$setViewValue(b),e.$render())},a.getText=function(b){return a[b+"Text"]||d.config[b+"Text"]},a.noPrevious=function(){return 1===a.page},a.noNext=function(){return a.page===a.totalPages}}]).constant("paginationConfig",{itemsPerPage:10,boundaryLinks:!1,directionLinks:!0,firstText:"First",previousText:"Previous",nextText:"Next",lastText:"Last",rotate:!0}).directive("pagination",["$parse","paginationConfig",function(a,b){return{restrict:"EA",scope:{totalItems:"=",firstText:"@",previousText:"@",nextText:"@",lastText:"@",ngDisabled:"="},require:["pagination","?ngModel"],controller:"PaginationController",controllerAs:"pagination",templateUrl:function(a,b){return b.templateUrl||"template/pagination/pagination.html"},replace:!0,link:function(c,d,e,f){function g(a,b,c){return{number:a,text:b,active:c}}function h(a,b){var c=[],d=1,e=b,f=angular.isDefined(k)&&b>k;f&&(l?(d=Math.max(a-Math.floor(k/2),1),e=d+k-1,e>b&&(e=b,d=e-k+1)):(d=(Math.ceil(a/k)-1)*k+1,e=Math.min(d+k-1,b)));for(var h=d;e>=h;h++){var i=g(h,h,h===a);c.push(i)}if(f&&!l){if(d>1){var j=g(d-1,"...",!1);c.unshift(j)}if(b>e){var m=g(e+1,"...",!1);c.push(m)}}return c}var i=f[0],j=f[1];if(j){var k=angular.isDefined(e.maxSize)?c.$parent.$eval(e.maxSize):b.maxSize,l=angular.isDefined(e.rotate)?c.$parent.$eval(e.rotate):b.rotate;c.boundaryLinks=angular.isDefined(e.boundaryLinks)?c.$parent.$eval(e.boundaryLinks):b.boundaryLinks,c.directionLinks=angular.isDefined(e.directionLinks)?c.$parent.$eval(e.directionLinks):b.directionLinks,i.init(j,b),e.maxSize&&c.$parent.$watch(a(e.maxSize),function(a){k=parseInt(a,10),i.render()});var m=i.render;i.render=function(){m(),c.page>0&&c.page<=c.totalPages&&(c.pages=h(c.page,c.totalPages))}}}}}]).constant("pagerConfig",{itemsPerPage:10,previousText:"« Previous",nextText:"Next »",align:!0}).directive("pager",["pagerConfig",function(a){return{restrict:"EA",scope:{totalItems:"=",previousText:"@",nextText:"@"},require:["pager","?ngModel"],controller:"PaginationController",templateUrl:"template/pagination/pager.html",replace:!0,link:function(b,c,d,e){var f=e[0],g=e[1];g&&(b.align=angular.isDefined(d.align)?b.$parent.$eval(d.align):a.align,f.init(g,a))}}}]),angular.module("ui.bootstrap.tooltip",["ui.bootstrap.position","ui.bootstrap.bindHtml"]).provider("$tooltip",function(){function a(a){var b=/[A-Z]/g,c="-";return a.replace(b,function(a,b){return(b?c:"")+a.toLowerCase()})}var b={placement:"top",animation:!0,popupDelay:0,useContentExp:!1},c={mouseenter:"mouseleave",click:"click",focus:"blur"},d={};this.options=function(a){angular.extend(d,a)},this.setTriggers=function(a){angular.extend(c,a)},this.$get=["$window","$compile","$timeout","$document","$position","$interpolate","$rootScope",function(e,f,g,h,i,j,k){return function(e,l,m,n){function o(a){var b=(a||n.trigger||m).split(" "),d=b.map(function(a){return c[a]||a});return{show:b,hide:d}}n=angular.extend({},b,d,n);var p=a(e),q=j.startSymbol(),r=j.endSymbol(),s="<div "+p+'-popup title="'+q+"title"+r+'" '+(n.useContentExp?'content-exp="contentExp()" ':'content="'+q+"content"+r+'" ')+'placement="'+q+"placement"+r+'" popup-class="'+q+"popupClass"+r+'" animation="animation" is-open="isOpen"origin-scope="origScope" ></div>';return{restrict:"EA",compile:function(){var a=f(s);return function(b,c,d){function f(){F.isOpen?m():j()}function j(){(!E||b.$eval(d[l+"Enable"]))&&(t(),F.popupDelay?B||(B=g(p,F.popupDelay,!1),B.then(function(a){a()})):p()())}function m(){q(),k.$$phase||k.$digest()}function p(){return B=null,A&&(g.cancel(A),A=null),(n.useContentExp?F.contentExp():F.content)?(r(),y.css({top:0,left:0,display:"block"}),H(),F.isOpen=!0,F.$apply(),H):angular.noop}function q(){F.isOpen=!1,g.cancel(B),B=null,F.animation?A||(A=g(s,500)):s()}function r(){y&&s(),z=F.$new(),y=a(z,function(a){C?h.find("body").append(a):c.after(a)}),n.useContentExp&&(z.$watch("contentExp()",function(a){!a&&F.isOpen&&q()}),z.$watch(function(){G||(G=!0,z.$$postDigest(function(){G=!1,I()}))}))}function s(){A=null,y&&(y.remove(),y=null),z&&(z.$destroy(),z=null)}function t(){u(),v(),w()}function u(){F.popupClass=d[l+"Class"]}function v(){var a=d[l+"Placement"];F.placement=angular.isDefined(a)?a:n.placement}function w(){var a=d[l+"PopupDelay"],b=parseInt(a,10);F.popupDelay=isNaN(b)?n.popupDelay:b}function x(){var a=d[l+"Trigger"];J(),D=o(a),D.show.forEach(function(a,b){a===D.hide[b]?c.bind(a,f):a&&(c.bind(a,j),c.bind(D.hide[b],m))})}var y,z,A,B,C=angular.isDefined(n.appendToBody)?n.appendToBody:!1,D=o(void 0),E=angular.isDefined(d[l+"Enable"]),F=b.$new(!0),G=!1,H=function(){if(y){var a=i.positionElements(c,y,F.placement,C);a.top+="px",a.left+="px",y.css(a)}},I=function(){g(H,0,!1)};F.origScope=b,F.isOpen=!1,F.contentExp=function(){return b.$eval(d[e])},n.useContentExp||d.$observe(e,function(a){F.content=a,!a&&F.isOpen?q():I()}),d.$observe("disabled",function(a){B&&a&&g.cancel(B),a&&F.isOpen&&q()}),d.$observe(l+"Title",function(a){F.title=a,I()}),d.$observe(l+"Placement",function(){F.isOpen&&g(function(){v(),p()()},0,!1)});var J=function(){D.show.forEach(function(a){c.unbind(a,j)}),D.hide.forEach(function(a){c.unbind(a,m)})};x();var K=b.$eval(d[l+"Animation"]);F.animation=angular.isDefined(K)?!!K:n.animation;var L=b.$eval(d[l+"AppendToBody"]);C=angular.isDefined(L)?L:C,C&&b.$on("$locationChangeSuccess",function(){F.isOpen&&q()}),b.$on("$destroy",function(){g.cancel(A),g.cancel(B),J(),s(),F=null})}}}}}]}).directive("tooltipTemplateTransclude",["$animate","$sce","$compile","$templateRequest",function(a,b,c,d){return{link:function(e,f,g){var h,i,j,k=e.$eval(g.tooltipTemplateTranscludeScope),l=0,m=function(){i&&(i.remove(),i=null),h&&(h.$destroy(),h=null),j&&(a.leave(j).then(function(){i=null}),i=j,j=null)};e.$watch(b.parseAsResourceUrl(g.tooltipTemplateTransclude),function(b){var g=++l;b?(d(b,!0).then(function(d){if(g===l){var e=k.$new(),i=d,n=c(i)(e,function(b){m(),a.enter(b,f)});h=e,j=n,h.$emit("$includeContentLoaded",b)}},function(){g===l&&(m(),e.$emit("$includeContentError",b))}),e.$emit("$includeContentRequested",b)):m()}),e.$on("$destroy",m)}}}]).directive("tooltipClasses",function(){return{restrict:"A",link:function(a,b,c){a.placement&&b.addClass(a.placement),a.popupClass&&b.addClass(a.popupClass),a.animation()&&b.addClass(c.tooltipAnimationClass)}}}).directive("tooltipPopup",function(){return{restrict:"EA",replace:!0,scope:{content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-popup.html"}}).directive("tooltip",["$tooltip",function(a){return a("tooltip","tooltip","mouseenter")}]).directive("tooltipTemplatePopup",function(){return{restrict:"EA",replace:!0,scope:{contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&",originScope:"&"},templateUrl:"template/tooltip/tooltip-template-popup.html"}}).directive("tooltipTemplate",["$tooltip",function(a){return a("tooltipTemplate","tooltip","mouseenter",{useContentExp:!0})}]).directive("tooltipHtmlPopup",function(){return{restrict:"EA",replace:!0,scope:{contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-html-popup.html"}}).directive("tooltipHtml",["$tooltip",function(a){return a("tooltipHtml","tooltip","mouseenter",{useContentExp:!0})}]).directive("tooltipHtmlUnsafePopup",function(){return{restrict:"EA",replace:!0,scope:{content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-html-unsafe-popup.html"}}).value("tooltipHtmlUnsafeSuppressDeprecated",!1).directive("tooltipHtmlUnsafe",["$tooltip","tooltipHtmlUnsafeSuppressDeprecated","$log",function(a,b,c){return b||c.warn("tooltip-html-unsafe is now deprecated. Use tooltip-html or tooltip-template instead."),a("tooltipHtmlUnsafe","tooltip","mouseenter")}]),angular.module("ui.bootstrap.popover",["ui.bootstrap.tooltip"]).directive("popoverTemplatePopup",function(){return{restrict:"EA",replace:!0,scope:{title:"@",contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&",originScope:"&"},templateUrl:"template/popover/popover-template.html"}}).directive("popoverTemplate",["$tooltip",function(a){return a("popoverTemplate","popover","click",{useContentExp:!0})}]).directive("popoverHtmlPopup",function(){return{restrict:"EA",replace:!0,scope:{contentExp:"&",title:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover-html.html"}}).directive("popoverHtml",["$tooltip",function(a){return a("popoverHtml","popover","click",{useContentExp:!0})}]).directive("popoverPopup",function(){return{restrict:"EA",replace:!0,scope:{title:"@",content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover.html"}}).directive("popover",["$tooltip",function(a){return a("popover","popover","click")}]),angular.module("ui.bootstrap.progressbar",[]).constant("progressConfig",{animate:!0,max:100}).controller("ProgressController",["$scope","$attrs","progressConfig",function(a,b,c){var d=this,e=angular.isDefined(b.animate)?a.$parent.$eval(b.animate):c.animate;this.bars=[],a.max=angular.isDefined(a.max)?a.max:c.max,this.addBar=function(b,c){e||c.css({transition:"none"}),this.bars.push(b),b.max=a.max,b.$watch("value",function(){b.recalculatePercentage()}),b.recalculatePercentage=function(){b.percent=+(100*b.value/b.max).toFixed(2);var a=0;d.bars.forEach(function(b){a+=b.percent}),a>100&&(b.percent-=a-100)},b.$on("$destroy",function(){c=null,d.removeBar(b)})},this.removeBar=function(a){this.bars.splice(this.bars.indexOf(a),1)},a.$watch("max",function(){d.bars.forEach(function(b){b.max=a.max,b.recalculatePercentage()})})}]).directive("progress",function(){return{restrict:"EA",replace:!0,transclude:!0,controller:"ProgressController",require:"progress",scope:{max:"=?"},templateUrl:"template/progressbar/progress.html"}}).directive("bar",function(){return{restrict:"EA",replace:!0,transclude:!0,require:"^progress",scope:{value:"=",type:"@"},templateUrl:"template/progressbar/bar.html",link:function(a,b,c,d){d.addBar(a,b)}}}).directive("progressbar",function(){return{restrict:"EA",replace:!0,transclude:!0,controller:"ProgressController",scope:{value:"=",max:"=?",type:"@"},templateUrl:"template/progressbar/progressbar.html",link:function(a,b,c,d){d.addBar(a,angular.element(b.children()[0]))}}}),angular.module("ui.bootstrap.rating",[]).constant("ratingConfig",{max:5,stateOn:null,stateOff:null,titles:["one","two","three","four","five"]}).controller("RatingController",["$scope","$attrs","ratingConfig",function(a,b,c){var d={$setViewValue:angular.noop};this.init=function(e){d=e,d.$render=this.render,d.$formatters.push(function(a){return angular.isNumber(a)&&a<<0!==a&&(a=Math.round(a)),a}),this.stateOn=angular.isDefined(b.stateOn)?a.$parent.$eval(b.stateOn):c.stateOn,this.stateOff=angular.isDefined(b.stateOff)?a.$parent.$eval(b.stateOff):c.stateOff;var f=angular.isDefined(b.titles)?a.$parent.$eval(b.titles):c.titles;this.titles=angular.isArray(f)&&f.length>0?f:c.titles;var g=angular.isDefined(b.ratingStates)?a.$parent.$eval(b.ratingStates):new Array(angular.isDefined(b.max)?a.$parent.$eval(b.max):c.max);a.range=this.buildTemplateObjects(g)},this.buildTemplateObjects=function(a){for(var b=0,c=a.length;c>b;b++)a[b]=angular.extend({index:b},{stateOn:this.stateOn,stateOff:this.stateOff,title:this.getTitle(b)},a[b]);return a},this.getTitle=function(a){return a>=this.titles.length?a+1:this.titles[a]},a.rate=function(b){!a.readonly&&b>=0&&b<=a.range.length&&(d.$setViewValue(d.$viewValue===b?0:b),d.$render())},a.enter=function(b){a.readonly||(a.value=b),a.onHover({value:b})},a.reset=function(){a.value=d.$viewValue,a.onLeave()},a.onKeydown=function(b){/(37|38|39|40)/.test(b.which)&&(b.preventDefault(),b.stopPropagation(),a.rate(a.value+(38===b.which||39===b.which?1:-1)))},this.render=function(){a.value=d.$viewValue}}]).directive("rating",function(){return{restrict:"EA",require:["rating","ngModel"],scope:{readonly:"=?",onHover:"&",onLeave:"&"},controller:"RatingController",templateUrl:"template/rating/rating.html",replace:!0,link:function(a,b,c,d){var e=d[0],f=d[1];e.init(f)}}}),angular.module("ui.bootstrap.tabs",[]).controller("TabsetController",["$scope",function(a){var b=this,c=b.tabs=a.tabs=[];b.select=function(a){angular.forEach(c,function(b){b.active&&b!==a&&(b.active=!1,b.onDeselect())}),a.active=!0,a.onSelect()},b.addTab=function(a){c.push(a),1===c.length&&a.active!==!1?a.active=!0:a.active?b.select(a):a.active=!1},b.removeTab=function(a){var e=c.indexOf(a);if(a.active&&c.length>1&&!d){var f=e==c.length-1?e-1:e+1;b.select(c[f])}c.splice(e,1)};var d;a.$on("$destroy",function(){d=!0})}]).directive("tabset",function(){return{restrict:"EA",transclude:!0,replace:!0,scope:{type:"@"},controller:"TabsetController",templateUrl:"template/tabs/tabset.html",link:function(a,b,c){a.vertical=angular.isDefined(c.vertical)?a.$parent.$eval(c.vertical):!1,a.justified=angular.isDefined(c.justified)?a.$parent.$eval(c.justified):!1}}}).directive("tab",["$parse","$log",function(a,b){return{require:"^tabset",restrict:"EA",replace:!0,templateUrl:"template/tabs/tab.html",transclude:!0,scope:{active:"=?",heading:"@",onSelect:"&select",onDeselect:"&deselect"},controller:function(){},link:function(c,d,e,f,g){c.$watch("active",function(a){a&&f.select(c)}),c.disabled=!1,e.disable&&c.$parent.$watch(a(e.disable),function(a){c.disabled=!!a}),e.disabled&&(b.warn('Use of "disabled" attribute has been deprecated, please use "disable"'),c.$parent.$watch(a(e.disabled),function(a){c.disabled=!!a})),c.select=function(){c.disabled||(c.active=!0)},f.addTab(c),c.$on("$destroy",function(){f.removeTab(c)}),c.$transcludeFn=g}}}]).directive("tabHeadingTransclude",[function(){return{restrict:"A",require:"^tab",link:function(a,b){a.$watch("headingElement",function(a){a&&(b.html(""),b.append(a))})}}}]).directive("tabContentTransclude",function(){function a(a){return a.tagName&&(a.hasAttribute("tab-heading")||a.hasAttribute("data-tab-heading")||"tab-heading"===a.tagName.toLowerCase()||"data-tab-heading"===a.tagName.toLowerCase())}return{restrict:"A",require:"^tabset",link:function(b,c,d){var e=b.$eval(d.tabContentTransclude);e.$transcludeFn(e.$parent,function(b){angular.forEach(b,function(b){a(b)?e.headingElement=b:c.append(b)})})}}}),angular.module("ui.bootstrap.timepicker",[]).constant("timepickerConfig",{hourStep:1,minuteStep:1,showMeridian:!0,meridians:null,readonlyInput:!1,mousewheel:!0,arrowkeys:!0,showSpinners:!0}).controller("TimepickerController",["$scope","$attrs","$parse","$log","$locale","timepickerConfig",function(a,b,c,d,e,f){function g(){var b=parseInt(a.hours,10),c=a.showMeridian?b>0&&13>b:b>=0&&24>b;return c?(a.showMeridian&&(12===b&&(b=0),a.meridian===q[1]&&(b+=12)),b):void 0}function h(){var b=parseInt(a.minutes,10);return b>=0&&60>b?b:void 0}function i(a){return angular.isDefined(a)&&a.toString().length<2?"0"+a:a.toString()}function j(a){k(),p.$setViewValue(new Date(o)),l(a)}function k(){p.$setValidity("time",!0),a.invalidHours=!1,a.invalidMinutes=!1}function l(b){var c=o.getHours(),d=o.getMinutes();a.showMeridian&&(c=0===c||12===c?12:c%12),a.hours="h"===b?c:i(c),"m"!==b&&(a.minutes=i(d)),a.meridian=o.getHours()<12?q[0]:q[1]}function m(a,b){var c=new Date(a.getTime()+6e4*b),d=new Date(a);return d.setHours(c.getHours(),c.getMinutes()),d}function n(a){o=m(o,a),j()}var o=new Date,p={$setViewValue:angular.noop},q=angular.isDefined(b.meridians)?a.$parent.$eval(b.meridians):f.meridians||e.DATETIME_FORMATS.AMPMS;this.init=function(c,d){p=c,p.$render=this.render,p.$formatters.unshift(function(a){return a?new Date(a):null});var e=d.eq(0),g=d.eq(1),h=angular.isDefined(b.mousewheel)?a.$parent.$eval(b.mousewheel):f.mousewheel;h&&this.setupMousewheelEvents(e,g);var i=angular.isDefined(b.arrowkeys)?a.$parent.$eval(b.arrowkeys):f.arrowkeys;i&&this.setupArrowkeyEvents(e,g),a.readonlyInput=angular.isDefined(b.readonlyInput)?a.$parent.$eval(b.readonlyInput):f.readonlyInput,this.setupInputEvents(e,g)};var r=f.hourStep;b.hourStep&&a.$parent.$watch(c(b.hourStep),function(a){r=parseInt(a,10)});var s=f.minuteStep;b.minuteStep&&a.$parent.$watch(c(b.minuteStep),function(a){s=parseInt(a,10)});var t;a.$parent.$watch(c(b.min),function(a){var b=new Date(a);t=isNaN(b)?void 0:b});var u;a.$parent.$watch(c(b.max),function(a){var b=new Date(a);u=isNaN(b)?void 0:b}),a.noIncrementHours=function(){var a=m(o,60*r);return a>u||o>a&&t>a},a.noDecrementHours=function(){var a=m(o,60*-r);return t>a||a>o&&a>u},a.noIncrementMinutes=function(){var a=m(o,s);return a>u||o>a&&t>a},a.noDecrementMinutes=function(){var a=m(o,-s);return t>a||a>o&&a>u},a.noToggleMeridian=function(){return o.getHours()<13?m(o,720)>u:m(o,-720)<t},a.showMeridian=f.showMeridian,b.showMeridian&&a.$parent.$watch(c(b.showMeridian),function(b){if(a.showMeridian=!!b,p.$error.time){var c=g(),d=h();angular.isDefined(c)&&angular.isDefined(d)&&(o.setHours(c),j())}else l()}),this.setupMousewheelEvents=function(b,c){var d=function(a){a.originalEvent&&(a=a.originalEvent);var b=a.wheelDelta?a.wheelDelta:-a.deltaY;return a.detail||b>0};b.bind("mousewheel wheel",function(b){a.$apply(d(b)?a.incrementHours():a.decrementHours()),b.preventDefault()}),c.bind("mousewheel wheel",function(b){a.$apply(d(b)?a.incrementMinutes():a.decrementMinutes()),b.preventDefault()})},this.setupArrowkeyEvents=function(b,c){b.bind("keydown",function(b){38===b.which?(b.preventDefault(),a.incrementHours(),a.$apply()):40===b.which&&(b.preventDefault(),a.decrementHours(),a.$apply())}),c.bind("keydown",function(b){38===b.which?(b.preventDefault(),a.incrementMinutes(),a.$apply()):40===b.which&&(b.preventDefault(),a.decrementMinutes(),a.$apply())})},this.setupInputEvents=function(b,c){if(a.readonlyInput)return a.updateHours=angular.noop,void(a.updateMinutes=angular.noop);var d=function(b,c){p.$setViewValue(null),p.$setValidity("time",!1),angular.isDefined(b)&&(a.invalidHours=b),angular.isDefined(c)&&(a.invalidMinutes=c)};a.updateHours=function(){var a=g();angular.isDefined(a)?(o.setHours(a),t>o||o>u?d(!0):j("h")):d(!0)},b.bind("blur",function(){!a.invalidHours&&a.hours<10&&a.$apply(function(){a.hours=i(a.hours)})}),a.updateMinutes=function(){var a=h();angular.isDefined(a)?(o.setMinutes(a),t>o||o>u?d(void 0,!0):j("m")):d(void 0,!0)},c.bind("blur",function(){!a.invalidMinutes&&a.minutes<10&&a.$apply(function(){a.minutes=i(a.minutes)})})},this.render=function(){var b=p.$viewValue;isNaN(b)?(p.$setValidity("time",!1),d.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')):(b&&(o=b),t>o||o>u?(p.$setValidity("time",!1),a.invalidHours=!0,a.invalidMinutes=!0):k(),l())},a.showSpinners=angular.isDefined(b.showSpinners)?a.$parent.$eval(b.showSpinners):f.showSpinners,a.incrementHours=function(){a.noIncrementHours()||n(60*r)},a.decrementHours=function(){a.noDecrementHours()||n(60*-r)},a.incrementMinutes=function(){a.noIncrementMinutes()||n(s)},a.decrementMinutes=function(){a.noDecrementMinutes()||n(-s)},a.toggleMeridian=function(){a.noToggleMeridian()||n(720*(o.getHours()<12?1:-1))}}]).directive("timepicker",function(){return{restrict:"EA",require:["timepicker","?^ngModel"],controller:"TimepickerController",replace:!0,scope:{},templateUrl:"template/timepicker/timepicker.html",link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f,b.find("input"))}}}),angular.module("ui.bootstrap.transition",[]).value("$transitionSuppressDeprecated",!1).factory("$transition",["$q","$timeout","$rootScope","$log","$transitionSuppressDeprecated",function(a,b,c,d,e){function f(a){for(var b in a)if(void 0!==h.style[b])return a[b]}e||d.warn("$transition is now deprecated. Use $animate from ngAnimate instead.");var g=function(d,e,f){f=f||{};var h=a.defer(),i=g[f.animation?"animationEndEventName":"transitionEndEventName"],j=function(){c.$apply(function(){d.unbind(i,j),h.resolve(d)})};return i&&d.bind(i,j),b(function(){angular.isString(e)?d.addClass(e):angular.isFunction(e)?e(d):angular.isObject(e)&&d.css(e),i||h.resolve(d)}),h.promise.cancel=function(){i&&d.unbind(i,j),h.reject("Transition cancelled")},h.promise},h=document.createElement("trans"),i={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"},j={WebkitTransition:"webkitAnimationEnd",MozTransition:"animationend",OTransition:"oAnimationEnd",transition:"animationend"};return g.transitionEndEventName=f(i),g.animationEndEventName=f(j),g}]),angular.module("ui.bootstrap.typeahead",["ui.bootstrap.position","ui.bootstrap.bindHtml"]).factory("typeaheadParser",["$parse",function(a){var b=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;return{parse:function(c){var d=c.match(b);if(!d)throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "'+c+'".');return{itemName:d[3],source:a(d[4]),viewMapper:a(d[2]||d[1]),modelMapper:a(d[1])}}}}]).directive("typeahead",["$compile","$parse","$q","$timeout","$document","$window","$rootScope","$position","typeaheadParser",function(a,b,c,d,e,f,g,h,i){var j=[9,13,27,38,40],k=200;return{require:"ngModel",link:function(l,m,n,o){function p(){G.moveInProgress||(G.moveInProgress=!0,G.$digest()),N&&d.cancel(N),N=d(function(){G.matches.length&&q(),G.moveInProgress=!1,G.$digest()},k)}function q(){G.position=B?h.offset(m):h.position(m),G.position.top+=m.prop("offsetHeight")}var r=l.$eval(n.typeaheadMinLength);r||0===r||(r=1);var s,t,u=l.$eval(n.typeaheadWaitMs)||0,v=l.$eval(n.typeaheadEditable)!==!1,w=b(n.typeaheadLoading).assign||angular.noop,x=b(n.typeaheadOnSelect),y=angular.isDefined(n.typeaheadSelectOnBlur)?l.$eval(n.typeaheadSelectOnBlur):!1,z=b(n.typeaheadNoResults).assign||angular.noop,A=n.typeaheadInputFormatter?b(n.typeaheadInputFormatter):void 0,B=n.typeaheadAppendToBody?l.$eval(n.typeaheadAppendToBody):!1,C=l.$eval(n.typeaheadFocusFirst)!==!1,D=n.typeaheadSelectOnExact?l.$eval(n.typeaheadSelectOnExact):!1,E=b(n.ngModel).assign,F=i.parse(n.typeahead),G=l.$new();l.$on("$destroy",function(){G.$destroy()});var H="typeahead-"+G.$id+"-"+Math.floor(1e4*Math.random());m.attr({"aria-autocomplete":"list","aria-expanded":!1,"aria-owns":H});var I=angular.element("<div typeahead-popup></div>");I.attr({id:H,matches:"matches",active:"activeIdx",select:"select(activeIdx)","move-in-progress":"moveInProgress",query:"query",position:"position"}),angular.isDefined(n.typeaheadTemplateUrl)&&I.attr("template-url",n.typeaheadTemplateUrl);var J=function(){G.matches=[],G.activeIdx=-1,m.attr("aria-expanded",!1)},K=function(a){return H+"-option-"+a};G.$watch("activeIdx",function(a){0>a?m.removeAttr("aria-activedescendant"):m.attr("aria-activedescendant",K(a))});var L=function(a,b){return G.matches.length>b&&a?a.toUpperCase()===G.matches[b].label.toUpperCase():!1},M=function(a){var b={$viewValue:a};w(l,!0),z(l,!1),c.when(F.source(l,b)).then(function(c){var d=a===o.$viewValue;if(d&&s)if(c&&c.length>0){G.activeIdx=C?0:-1,z(l,!1),G.matches.length=0;for(var e=0;e<c.length;e++)b[F.itemName]=c[e],
G.matches.push({id:K(e),label:F.viewMapper(G,b),model:c[e]});G.query=a,q(),m.attr("aria-expanded",!0),D&&1===G.matches.length&&L(a,0)&&G.select(0)}else J(),z(l,!0);d&&w(l,!1)},function(){J(),w(l,!1),z(l,!0)})};B&&(angular.element(f).bind("resize",p),e.find("body").bind("scroll",p));var N;G.moveInProgress=!1,J(),G.query=void 0;var O,P=function(a){O=d(function(){M(a)},u)},Q=function(){O&&d.cancel(O)};o.$parsers.unshift(function(a){return s=!0,0===r||a&&a.length>=r?u>0?(Q(),P(a)):M(a):(w(l,!1),Q(),J()),v?a:a?void o.$setValidity("editable",!1):(o.$setValidity("editable",!0),null)}),o.$formatters.push(function(a){var b,c,d={};return v||o.$setValidity("editable",!0),A?(d.$model=a,A(l,d)):(d[F.itemName]=a,b=F.viewMapper(l,d),d[F.itemName]=void 0,c=F.viewMapper(l,d),b!==c?b:a)}),G.select=function(a){var b,c,e={};t=!0,e[F.itemName]=c=G.matches[a].model,b=F.modelMapper(l,e),E(l,b),o.$setValidity("editable",!0),o.$setValidity("parse",!0),x(l,{$item:c,$model:b,$label:F.viewMapper(l,e)}),J(),d(function(){m[0].focus()},0,!1)},m.bind("keydown",function(a){if(0!==G.matches.length&&-1!==j.indexOf(a.which)){if(-1===G.activeIdx&&(9===a.which||13===a.which))return J(),void G.$digest();a.preventDefault(),40===a.which?(G.activeIdx=(G.activeIdx+1)%G.matches.length,G.$digest()):38===a.which?(G.activeIdx=(G.activeIdx>0?G.activeIdx:G.matches.length)-1,G.$digest()):13===a.which||9===a.which?G.$apply(function(){G.select(G.activeIdx)}):27===a.which&&(a.stopPropagation(),J(),G.$digest())}}),m.bind("blur",function(){y&&G.matches.length&&-1!==G.activeIdx&&!t&&(t=!0,G.$apply(function(){G.select(G.activeIdx)})),s=!1,t=!1});var R=function(a){m[0]!==a.target&&3!==a.which&&0!==G.matches.length&&(J(),g.$$phase||G.$digest())};e.bind("click",R),l.$on("$destroy",function(){e.unbind("click",R),B&&S.remove(),I.remove()});var S=a(I)(G);B?e.find("body").append(S):m.after(S)}}}]).directive("typeaheadPopup",function(){return{restrict:"EA",scope:{matches:"=",query:"=",active:"=",position:"&",moveInProgress:"=",select:"&"},replace:!0,templateUrl:"template/typeahead/typeahead-popup.html",link:function(a,b,c){a.templateUrl=c.templateUrl,a.isOpen=function(){return a.matches.length>0},a.isActive=function(b){return a.active==b},a.selectActive=function(b){a.active=b},a.selectMatch=function(b){a.select({activeIdx:b})}}}}).directive("typeaheadMatch",["$templateRequest","$compile","$parse",function(a,b,c){return{restrict:"EA",scope:{index:"=",match:"=",query:"="},link:function(d,e,f){var g=c(f.templateUrl)(d.$parent)||"template/typeahead/typeahead-match.html";a(g).then(function(a){b(a.trim())(d,function(a){e.replaceWith(a)})})}}}]).filter("typeaheadHighlight",function(){function a(a){return a.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}return function(b,c){return c?(""+b).replace(new RegExp(a(c),"gi"),"<strong>$&</strong>"):b}}),angular.module("template/accordion/accordion-group.html",[]).run(["$templateCache",function(a){a.put("template/accordion/accordion-group.html",'<div class="panel panel-default" ng-class="{\'panel-open\': isOpen}">\n  <div class="panel-heading">\n    <h4 class="panel-title">\n      <a href tabindex="0" class="accordion-toggle" ng-click="toggleOpen()" accordion-transclude="heading"><span ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n    </h4>\n  </div>\n  <div class="panel-collapse collapse" collapse="!isOpen">\n	  <div class="panel-body" ng-transclude></div>\n  </div>\n</div>\n')}]),angular.module("template/accordion/accordion.html",[]).run(["$templateCache",function(a){a.put("template/accordion/accordion.html",'<div class="panel-group" ng-transclude></div>')}]),angular.module("template/alert/alert.html",[]).run(["$templateCache",function(a){a.put("template/alert/alert.html",'<div class="alert" ng-class="[\'alert-\' + (type || \'warning\'), closeable ? \'alert-dismissible\' : null]" role="alert">\n    <button ng-show="closeable" type="button" class="close" ng-click="close($event)">\n        <span aria-hidden="true">&times;</span>\n        <span class="sr-only">Close</span>\n    </button>\n    <div ng-transclude></div>\n</div>\n')}]),angular.module("template/carousel/carousel.html",[]).run(["$templateCache",function(a){a.put("template/carousel/carousel.html",'<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n    <ol class="carousel-indicators" ng-show="slides.length > 1">\n        <li ng-repeat="slide in slides | orderBy:indexOfSlide track by $index" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li>\n    </ol>\n    <div class="carousel-inner" ng-transclude></div>\n    <a class="left carousel-control" ng-click="prev()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-left"></span></a>\n    <a class="right carousel-control" ng-click="next()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-right"></span></a>\n</div>\n')}]),angular.module("template/carousel/slide.html",[]).run(["$templateCache",function(a){a.put("template/carousel/slide.html",'<div ng-class="{\n    \'active\': active\n  }" class="item text-center" ng-transclude></div>\n')}]),angular.module("template/datepicker/datepicker.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/datepicker.html",'<div ng-switch="datepickerMode" role="application" ng-keydown="keydown($event)">\n  <daypicker ng-switch-when="day" tabindex="0"></daypicker>\n  <monthpicker ng-switch-when="month" tabindex="0"></monthpicker>\n  <yearpicker ng-switch-when="year" tabindex="0"></yearpicker>\n</div>')}]),angular.module("template/datepicker/day.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/day.html",'<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{::5 + showWeeks}}"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-if="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in ::labels track by $index" class="text-center"><small aria-label="{{::label.full}}">{{::label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-if="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{::dt.uid}}" ng-class="::dt.customClass">\n        <button type="button" style="min-width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="::{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/datepicker/month.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/month.html",'<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{::dt.uid}}" ng-class="::dt.customClass">\n        <button type="button" style="min-width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="::{\'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/datepicker/popup.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/popup.html",'<ul class="dropdown-menu" ng-if="isOpen" style="display: block" ng-style="{top: position.top+\'px\', left: position.left+\'px\'}" ng-keydown="keydown($event)" ng-click="$event.stopPropagation()">\n	<li ng-transclude></li>\n	<li ng-if="showButtonBar" style="padding:10px 9px 2px">\n		<span class="btn-group pull-left">\n			<button type="button" class="btn btn-sm btn-info" ng-click="select(\'today\')">{{ getText(\'current\') }}</button>\n			<button type="button" class="btn btn-sm btn-danger" ng-click="select(null)">{{ getText(\'clear\') }}</button>\n		</span>\n		<button type="button" class="btn btn-sm btn-success pull-right" ng-click="close()">{{ getText(\'close\') }}</button>\n	</li>\n</ul>\n')}]),angular.module("template/datepicker/year.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/year.html",'<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="3"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{::dt.uid}}">\n        <button type="button" style="min-width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="::{\'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/modal/backdrop.html",[]).run(["$templateCache",function(a){a.put("template/modal/backdrop.html",'<div class="modal-backdrop"\n     modal-animation-class="fade"\n     modal-in-class="in"\n     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n></div>\n')}]),angular.module("template/modal/window.html",[]).run(["$templateCache",function(a){a.put("template/modal/window.html",'<div modal-render="{{$isRendered}}" tabindex="-1" role="dialog" class="modal"\n    modal-animation-class="fade"\n    modal-in-class="in"\n	ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}" ng-click="close($event)">\n    <div class="modal-dialog" ng-class="size ? \'modal-\' + size : \'\'"><div class="modal-content" modal-transclude></div></div>\n</div>\n')}]),angular.module("template/pagination/pager.html",[]).run(["$templateCache",function(a){a.put("template/pagination/pager.html",'<ul class="pager">\n  <li ng-class="{disabled: noPrevious(), previous: align}"><a href ng-click="selectPage(page - 1, $event)">{{::getText(\'previous\')}}</a></li>\n  <li ng-class="{disabled: noNext(), next: align}"><a href ng-click="selectPage(page + 1, $event)">{{::getText(\'next\')}}</a></li>\n</ul>')}]),angular.module("template/pagination/pagination.html",[]).run(["$templateCache",function(a){a.put("template/pagination/pagination.html",'<ul class="pagination">\n  <li ng-if="::boundaryLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-first"><a href ng-click="selectPage(1, $event)">{{::getText(\'first\')}}</a></li>\n  <li ng-if="::directionLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-prev"><a href ng-click="selectPage(page - 1, $event)">{{::getText(\'previous\')}}</a></li>\n  <li ng-repeat="page in pages track by $index" ng-class="{active: page.active,disabled: ngDisabled&&!page.active}" class="pagination-page"><a href ng-click="selectPage(page.number, $event)">{{page.text}}</a></li>\n  <li ng-if="::directionLinks" ng-class="{disabled: noNext()||ngDisabled}" class="pagination-next"><a href ng-click="selectPage(page + 1, $event)">{{::getText(\'next\')}}</a></li>\n  <li ng-if="::boundaryLinks" ng-class="{disabled: noNext()||ngDisabled}" class="pagination-last"><a href ng-click="selectPage(totalPages, $event)">{{::getText(\'last\')}}</a></li>\n</ul>\n')}]),angular.module("template/tooltip/tooltip-html-popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip/tooltip-html-popup.html",'<div class="tooltip"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind-html="contentExp()"></div>\n</div>\n')}]),angular.module("template/tooltip/tooltip-html-unsafe-popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip/tooltip-html-unsafe-popup.html",'<div class="tooltip"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" bind-html-unsafe="content"></div>\n</div>\n')}]),angular.module("template/tooltip/tooltip-popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip/tooltip-popup.html",'<div class="tooltip"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n')}]),angular.module("template/tooltip/tooltip-template-popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip/tooltip-template-popup.html",'<div class="tooltip"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner"\n    tooltip-template-transclude="contentExp()"\n    tooltip-template-transclude-scope="originScope()"></div>\n</div>\n')}]),angular.module("template/popover/popover-html.html",[]).run(["$templateCache",function(a){a.put("template/popover/popover-html.html",'<div class="popover"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content" ng-bind-html="contentExp()"></div>\n  </div>\n</div>\n')}]),angular.module("template/popover/popover-template.html",[]).run(["$templateCache",function(a){a.put("template/popover/popover-template.html",'<div class="popover"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content"\n        tooltip-template-transclude="contentExp()"\n        tooltip-template-transclude-scope="originScope()"></div>\n  </div>\n</div>\n')}]),angular.module("template/popover/popover.html",[]).run(["$templateCache",function(a){a.put("template/popover/popover.html",'<div class="popover"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n')}]),angular.module("template/progressbar/bar.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/bar.html",'<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" style="min-width: 0;" ng-transclude></div>\n')}]),angular.module("template/progressbar/progress.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/progress.html",'<div class="progress" ng-transclude></div>')}]),angular.module("template/progressbar/progressbar.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/progressbar.html",'<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" style="min-width: 0;" ng-transclude></div>\n</div>\n')}]),angular.module("template/rating/rating.html",[]).run(["$templateCache",function(a){a.put("template/rating/rating.html",'<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}">\n    <span ng-repeat-start="r in range track by $index" class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    <i ng-repeat-end ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')" ng-attr-title="{{r.title}}" ></i>\n</span>\n')}]),angular.module("template/tabs/tab.html",[]).run(["$templateCache",function(a){a.put("template/tabs/tab.html",'<li ng-class="{active: active, disabled: disabled}">\n  <a href ng-click="select()" tab-heading-transclude>{{heading}}</a>\n</li>\n')}]),angular.module("template/tabs/tabset.html",[]).run(["$templateCache",function(a){a.put("template/tabs/tabset.html",'<div>\n  <ul class="nav nav-{{type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n')}]),angular.module("template/timepicker/timepicker.html",[]).run(["$templateCache",function(a){a.put("template/timepicker/timepicker.html",'<table>\n  <tbody>\n    <tr class="text-center" ng-show="::showSpinners">\n      <td><a ng-click="incrementHours()" ng-class="{disabled: noIncrementHours()}" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td>&nbsp;</td>\n      <td><a ng-click="incrementMinutes()" ng-class="{disabled: noIncrementMinutes()}" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td ng-show="showMeridian"></td>\n    </tr>\n    <tr>\n      <td class="form-group" ng-class="{\'has-error\': invalidHours}">\n        <input style="width:50px;" type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-readonly="::readonlyInput" maxlength="2">\n      </td>\n      <td>:</td>\n      <td class="form-group" ng-class="{\'has-error\': invalidMinutes}">\n        <input style="width:50px;" type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="::readonlyInput" maxlength="2">\n      </td>\n      <td ng-show="showMeridian"><button type="button" ng-class="{disabled: noToggleMeridian()}" class="btn btn-default text-center" ng-click="toggleMeridian()">{{meridian}}</button></td>\n    </tr>\n    <tr class="text-center" ng-show="::showSpinners">\n      <td><a ng-click="decrementHours()" ng-class="{disabled: noDecrementHours()}" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td>&nbsp;</td>\n      <td><a ng-click="decrementMinutes()" ng-class="{disabled: noDecrementMinutes()}" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td ng-show="showMeridian"></td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/typeahead/typeahead-match.html",[]).run(["$templateCache",function(a){a.put("template/typeahead/typeahead-match.html",'<a href tabindex="-1" bind-html-unsafe="match.label | typeaheadHighlight:query"></a>\n')}]),angular.module("template/typeahead/typeahead-popup.html",[]).run(["$templateCache",function(a){a.put("template/typeahead/typeahead-popup.html",'<ul class="dropdown-menu" ng-show="isOpen() && !moveInProgress" ng-style="{top: position().top+\'px\', left: position().left+\'px\'}" style="display: block;" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)" role="option" id="{{::match.id}}">\n        <div typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>\n')}]),!angular.$$csp()&&angular.element(document).find("head").prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>');
/*!
 * angular-toasty
 */
"use strict";angular.module("angular-toasty",[]),angular.module("angular-toasty").directive("toasty",["toasty","$timeout","$sce",function(A,P,g){return{replace:!0,restrict:"EA",scope:!0,link:function(A,D,j){function B(P){P?angular.forEach(A.toasty,function(g,D){g.id==P&&(A.$broadcast("toasty-cleared",A.toasty[D]),g.onRemove&&angular.isFunction(g.onRemove)&&g.onRemove.call(A.toasty[D]),A.toasty.splice(D,1),A.$$phase||A.$digest())}):(angular.forEach(A.toasty,function(P,g){P.onRemove&&angular.isFunction(P.onRemove)&&P.onRemove.call(A.toasty[g])}),A.toasty=[],A.$broadcast("toasty-cleared"))}function o(A,g){A.timeout=P(function(){B(A.id)},g)}function w(A,P,g){return 0==P[g]?!1:P[g]?!0:A[g]}function I(P,D){Q++;var j,B=w(P,D,"sound"),I=w(P,D,"showClose"),Y=w(P,D,"clickToClose"),t=w(P,D,"html"),a=w(P,D,"shake");j=D.theme&&C.indexOf(D.theme)>-1?D.theme:P.theme,A.toasty.length>=P.limit&&A.toasty.shift(),B&&document.getElementById("toasty-sound").play();var s={id:Q,title:t?g.trustAsHtml(D.title):D.title,msg:t?g.trustAsHtml(D.msg):D.msg,showClose:I,clickToClose:Y,sound:B,shake:a?"toasty-shake":"",html:t,type:"toasty-type-"+D.type,theme:"toasty-theme-"+j,onAdd:D.onAdd&&angular.isFunction(D.onAdd)?D.onAdd:null,onRemove:D.onRemove&&angular.isFunction(D.onRemove)?D.onRemove:null,onClick:D.onClick&&angular.isFunction(D.onClick)?D.onClick:null};A.toasty.push(s),D.onAdd&&angular.isFunction(D.onAdd)&&D.onAdd.call(s),A.$broadcast("toasty-added",s),0!=D.timeout&&(D.timeout||P.timeout)&&o(A.toasty[A.toasty.length-1],D.timeout||P.timeout)}var Q=0,C=["default","material","bootstrap"];A.position="",A.toasty=[],A.$on("toasty-new",function(P,g){var D=g.config,j=g.options;A.position||(A.position="toasty-position-"+D.position),I(D,j)}),A.$on("toasty-clear",function(A,P){B(P.id)}),A.close=function(A){B(A)},A.clickToasty=function(P){A.$broadcast("toasty-clicked",P),P.onClick&&angular.isFunction(P.onClick)&&P.onClick.call(P),P.clickToClose&&B(P.id)}},template:'<div id="toasty" ng-class="[position]"><audio id="toasty-sound" src="data:audio/wav;base64,UklGRiQ9AABXQVZFZm10IBAAAAABAAEAIlYAAESsAAACABAAZGF0YQA9AAA4AFAASABAADgAQAAwACgAGAAoADAAIAAoADgAKAAgACAAKAA4ADgAMABIADgAQABIAFAAWABQAHAASABYAFAAUAA4AEAAMAAwADgAQABQAFAASABYAFgAaABwAHgAeABoAGgAaABoAGgAUABQAFAAWABQAEgASAA4AEAAOAAgADAAMABIAEAAOABAADAAQAAwADgAKAAwACAAIAAwACAAIAAwACgAGAAQABAAAAD4//D/2P/o/+j/8P/o/+D/0P/Y/9D/2P/I/8D/yP/g/8j/0P/Y/+j/2P/w/9D/2P/A/8D/yP/A/9D/yP/A/9D/0P/I/8j/yP+4/9j/6P/g/+D/2P/Y/+D/4P/Y/9j/4P/o/+j/0P/g/+D/4P/o/+D/4P/g/9D/4P/g/+D/4P/w/wAAIAAwABgAMABAADAAOAAwADAAKAAwADgAIAAYACAAAAAAAAgAIAAIABAACAAgACAAIAAgAAgAEAAIAAAAAAAAAOj/8P8AAAAA+P/4//j/+P/o/+j/6P/g/+j/+P8AAPD/6P/o//D/2P/o/9D/4P/w/+j/4P8IABAAAAAQABgAAAAAAAgAAAAAAPj/8P/w//D/6P/4//D/+P8AAPj/AAAAAAgACAD4//j/CAAAAPj/CAAAAAAAAAAQABgAIAA4ADgAMABIAEgAOAAwAFAAOABAAEAASABIAEAAOAAgACgAGAAwACAAKAAwADgAMAA4ADgAQABAADAAKAAYAPj/6P/4/+j/4P/I/8D/uP+w/8D/uP+o/7j/qP/A/9j/qP/I/9j/wP/A/8D/4P/g/9j/2P+4/8D/wP+w/9D/wP/Q/9j/0P/Q/8D/2P/I/9j/6P/o/+j/+P/o//j/AAAAAAgAEAAIAAAAAAAIAAgAEAAYABAACAAgACAAAAAYADgAMABIAEAAKAA4ADAASABQAFAAUABYAEAAKAAQAAgAEAAQACgAGAAYABgAGAAgACAAMAAgADgAMAAwADgAMABIAEAASAAoAEgAQABYADAAUABQADgAMAAoACgAOABAAEAAMAAoACgAIAAgACAAOAAwACgAKAAoADAAKAAwACAAIAAYADAAKAAgACgAIAAQABgAGAAIAAgAAAAIAAAAAAD4//j/EAAYAAAAAAAQAPD/GAAgABAAEAAYACAAOABIAEAAMABAACgAKAAoAAgAEAAgABgACAAQAAgAEAAgAAgAAAAAABgACAAYABAACAAQAAAAAAAQAAgA+P/w/+j/4P/w/+D/6P/o//D/2P/g/9D/6P/o/8D/wP+w/7j/0P/I/9D/wP/g/9j/6P/g/+D/2P/Y/9D/2P/g/9j/0P+w/6j/4P/Y/9j/2P/Y/9D/0P/A/8D/8P+w/8D/uP/A/8j/0P/Q/9D/0P/w//D/2P/g/+D/6P8AAPD/6P/g/+j/6P/Q/+D/4P/4/+j/+P/o/+D/8P/4/wAAAAD4//j/6P/Y/9D/yP/g/+j/2P/Y/9j/yP/Q/9D/yP/Q/9D/yP+4/6D/qP+g/7j/sP+4/8D/yP/Y/8D/wP/Q//D/0P/g/8j/wP/A/7j/qP+w/7D/sP+w/6j/sP+w/7j/uP/A/8D/2P/A/+D/6P/o/+j/4P/Y/+j/2P/Q/9j/4P/o//j/EAAAAAgA+P/4//D/AAAAAAAAAAD4//j/8P/4/wAAIAAQACAAEAAIABgACAAQADAAKAAgACAAMABAAEgAMAAwAFgAWABgAFgAQABIAFgAYABYAGgAUABwAEgAQABAADgAOAA4ADgAMAAgACgAKAAoACgAMAAoACAAEAAQABAACAAIAAAAAAD4/wAAEAAIAPj/6P/Y//D/AAAAAOj/4P/w//j/8P8IAPj/EAAAAPj/6P/4/+D/4P/Y/9j/2P/g//D/8P/o/+D/6P8gABAACAD4/yAAIABAADgAMAA4ADgAIAAQACAAIAAgADAAKAAwAEgAOAA4AEAAQABIAEAAMABAAEAAMABQADAAYABAAEgAQABQADAAUABYABgAQABAAEAAKABIADAAIAAYABgAAAAgACAAGAAgAAgAGAAAAAgACAAQABAACAAQAPD/IAAoAPD/CAAgAPj/4P/w//D/+P/g/9j/2P/Y/9j/6P/I/6j/4P/Y/+D/0P/A/8D/yP/A/8D/2P8AAPD/CAAAAAAAGAAQAOj/GAAoAPD/GAAYAPD/IAAgAOj/GAAgAAAACABQACgAEABQADAAKADw//j/+P8IABAAGAAYADgAEAD4/8D/2P8AAFAAKAAoAPj/8P8QAOj/6P/Q/7j/iP+I/7j/8P8oAPj/aP9w/5j/+P8YAAAACAB4/5j/CAAQAOj/GADg/1D/uP8oAHAAKADw/4D/sAAwABAA4P9I/2j/AACAAXAAiABo/zAAMAAA/+D9EP7w/2AAKAGAAOAAiP8YAFD/YP5I/7j+mP2g/jAAIAPQAYAAMP/Y/8D/SP6g/ID9yP/QAYgCiAGQAMgAKAD4/0j+CP9g/ij9AP+QAAACQAAwADAAmP8gATD/cP6Y/rD/gADA/7j8iP04/WD/QAEYATD+yP9g/Lj8WP/I/tAAIP6I/wj+uP8IAagA8P9g/gj+cAOw/dD+QADYAYgDSP8QAhj8uP5wAXj+wAMIAfgBsP+w/7gBmAMwA4AAmAC4AAj/SP0IAegEoAWw/lD7iPrY/IACuP+QA4gEqAgAACj4CAFQ+9gB8P9wAjgDOP5QBbgCSAfgAfD/IP+Y/qgFmACIAsAEIP0wBTAAeAGo/OgFWP2oDrADoAZAAqgK+P5ACsgBCALwD0AL0AlwBhgCiP9o/dj7+AJg/6AEWAXICej7KADYAjgCEP94B4j4SAEY/yAAWP4Y/8D8QACIAYgDUP4w/fj98AEYANgDGAIoAJD90AcIBXgC4AeYB+D9OP0Q+IAAWAKQCPgFsAZI/AADmPxQBKD/kABIAcAFqP+IBnAH4AQoApgSYP4QDmjvwAGgBdgCiAJw+wgDAAE4B6gT8P6wB9D78AdQCbj/aACo/oAAWPtYAvj/IPug+MgDQAJQA7D7EPdI/yD2uPSg+dDyyPWw7pjysOvY9vjugO8Y6ZjfeOZw62jkgOXA4ijgsOSw4dDdKOBY1QjTMNUg1GDciNfY0ADbUNhA29DUqNQY3HDe4Ncg1QjVoND41aDUcNno2QDWYNdw2tDjUOEA5QDpoO3Y70D46PFY8vj3iP4QBRgBAAiADVAP6BDIFogfqCHQKTgzcDGgNfg48EPQRzBGCEvQUMhQ4FLgV2BZ8FpAUnBVUFhgUehRCFDYUShKeEMYQhg9uDCAMfgrACUwG8AUcBXYDBAGuALA/oD0mOt451jlyOAg3vDaQNhw1BDRgNBgzVDOIM+Y04jR0NJA0pDY0N0g3rjlUOow7tDt4PdA/agACASYCGAOSBHgEhAX8ByQH1AneCd4KbApACqALhAv+C4gMLgvuC/4MPgqyCmIJRgfAB2QGTgTyA6QCjgHcAK4+oj4MPHI7BDrYOgg4fjcSNrg1zDUINHAz2jNuMqAybjJaMewydjJYM7wz4DSgNRQ2XjciOP46ODrmPCg9UD5SP1YAcAE4AqYDDgSUBPAGKgb4BqYHiAg6CFoIFAj8CNgIvggoCBoHqAawBUwEygQMAtoB2gCYP6Y+Pj3APFA7UDqeOfw4qDeQN7I2nDYWNUQ1qjRCNJg0KjRANKQ1NDWGNfo2qDckN/44NjnyOuY8LD1OPvI/lgEAAegCqgOwBGoGFgZKB6IH3Ak8CHYJgAnqCh4KZgpACqQJ8gnICdQJUghuCDQHFAYMBPgD+gMaAfoBQgB2PwQ+LD1OPLo7kDsOOwo6ojn4OYw5vDj4OO45CDk2OSQ5MDnuOlI7SjukO9Q8yD2cPuY/LgBoAQAB0ALUA4wEVgTMBUQF9AYUBloG2ga+BlwGzgamBlIF3gWSBQoE7ARQBHADfAJaAdQA+AAaP14+iD2WPKQ8fjsCOuI6EDmqOM44ujhyOAQ30DgIOIg4tDiyOPA5ODlgOgw60DsIO+Y8hD22PmY+xD/cAB4AhgHoAgoDKAOOBIgFNAVOBcAGPAWgBewF/AWCBeQF7gUuBMAEuAPGA2ACfgJUAd4BWADKALg/pD6APo49sjz+PAg8PjtMO7Q7mjtEOpg6xjs2Ozg7MDtMO9A8HDySPQ49oD3iPpI/KD+QAEwBMgFaAjIC7gNAA4gDrAQCBGQEtATABVAFHgUgBR4E5gR4BB4DwgNAAzwCQAHUAQQA/gAeP5w/ID6IPcY9Yj0cPIY8RDu6O3g6jjrMOqY6SDpMOo462DsqO5g7uDvmO+A8nj0OPbo+GD7wP4QAbgDGAUYBkAJQAzIDbAQaBE4FMgTWBa4FogWABZAFiAXGBbIFfgUgBSoE7gRyA4IDXgKwAjYBUgEsAJo/xj9oPoA+Zj28PXg8xDycPEo8NDuIO1g7CjsqOo46/jrGO0w7WjvSPII80D0CPWo9hD5WPtA/Xj+uABYA+gFcAcQCmgLWAxYDSAQQBHYETgS8BKIEzATGBPwEWARmBGgEEgQUA+4DlANKAuYCegHcAWoA9AB4AA4/xj+aP3w+xD6IPlI95j26PV49qD1wPWA9RD1mPRw9aD10PUo9yD5kPp4+qD7SP1I/pj+eAA4APAAUAK4A3gECAWwBzAGuAfgBuAGUAeQBugGgAYgBqgEkAMIA2ACoAAYAIj/UP/Y/Wj98Psg+wj6CPhY9wD28PUo9cD1iPWY9VD14PT49MD1uPXQ9QD26Pao+Lj4OPqg+6D8oP2I/nAAUAKAA2AF0AbwB3AIMAgwCbAJcAsQCzAM8AzgDDgNSA04DVAMeAswC6AJsAjwBxgHAAY4BQgE8AHQAEgAyP8I/hj9OP3w+3j6EPqw+LD46Peo9tj32PfI+Gj4yPiA+dj5ePqo+kj8cP3I/Sj/WAAwAVgCYAKQBKgEwAUwBuAHuAhQCUgKqAkwCpAJWAmoCOAIaAiwCOAHEAgAB/AFUATQAtAB0P8A/9D9yP1I/MD6EPqI+Ej4KPco9nD20PUg9Sj0kPMA9GDzGPMQ8/DyiPPQ9MD1IPeg95j44PiA+RD6cPqo++D8aP2Y/qD/SABoAegBsAJ4A9ADUAT4BAgFcAVgBTAFuASQBHAE2AOgAzADaAMIAxgCoAEIAFj/wP4g/ij9uPxo/BD8ePvA+kD6uPm4+dD5aPlw+Yj5QPmY+WD50Pkw+jj6APtg+0j8QP0g/gD/OP/Y/xAAkP9oAFAA4AFIAvACCARwBIAEiASIBBgFgAXgBDgG2AUoBhgFSAVoBVgFKAVwBDAEgARYBAAE4ATQA3AEsANIA+ACqALwAhgDIAOwA6AD8AKAAzADMAOoAuACGAM4A3gDMANQA5gDCAQABLgEgAVoBQgGeAWgBfAEgARgBPADuANgA3gDgAP4A3ADUAMYA2gC8AFwAdgAWAAAAPj/oP8g/0j+yP2g/Xj9KP1Q/Bj9mPxA/Cj8WPzQ+6D7kPuo+1D7mPvg+1j8aP2A/Wj9UPwg/BD8gPwY/aj9SP6o/sj+gP6g/qj+gP5A/zj/mP+w/xD/QP9o/nj+IP7A/dD9yP3w/Rj+2P34/eD9SP3I/JD8GPz4+0D8EPwo/Cj8+PuQ+9D7cPsQ+8j7+Ptg/Aj8YPzI/PD82PyY/Aj9UP1g/lj+eP8IAEgAOADo/wAAUAAAAXABOAKAApgC6AL4AgADkAMwA/gDAATgA6ADiAOQA6ADSAMgA8gCyAGQAbAB2AGYASABiADwAAgAYP+o/iD+iP2Q/ZD9gP14/eD8iPyo+zj7APtQ+wD7EPsQ+zD7CPv4+nD72PvY+3D8qP2g/eD9cP6w/rj+6P4IAOj/OACYAHgBCALQAngDmAMIBAAE+APYA2AE4ATYBcAF4AWoBTAFUAXYBJAEqAQQBVgFYAXgBHAEiAO4AyADAAPwAhAD4AJYAoACGAKoARgBAAFYADAAmACAAKgAEADQ/yAA8P/A/wAAWACwAEgAuACoACAA4P9gAHAA0ACAAJAAsAAAATABAAF4ARABKAHgAJgAsABwAAABmABQAEAA2P+o/2j/eP+A/1j/WP8Y/4D/KP/Q/tj+uP7Q/pj+oP7A/rD+0P7Y/rD+gP5o/kj+OP64/mj+kP4I/yD/EP9I/4D/sP/Y/ygASAA4AHAAkADgAPAAmACIAKAAwAA4ATgB0AG4AZgBYAE4AcgAsACwAHgAsABYAIgAWABoAPD/sP+o/+j+0P7Y/gD/cP74/Qj+IP6A/Yj9QP0o/VD9cP1Y/ZD9CP3w/CD9+Pz4/PD84Px4/Vj9iP24/Yj9kP3Q/fD9aP7Y/lj/uP/Y/xgAeAB4ALgAMAFgAcgBYAJoApACaAIoAhgCiAJwAkACQAIwAlACQAIYAngCCALQAaAB8AC4AGgAAAD4/+j/UP/4/rj+4P2Q/cj9iP1A/Tj9QP1Y/cj8+Pzo/Mj8EP2I/XD9oP3w/Rj+KP5A/jj+aP7w/lD/yP+AAAgBmAHgAYACwALwAmgDoAMgBFAEgASYBDgEcAQIBfgEAAU4BUAFQAV4BUgFCAW4BGAECARwA+gCoAJgAigCkAEQAXAA6P9o//j+2P5w/hj+cP3A/Gj8KPwI/Nj7mPtA++D6kPp4+tD6uPq4+sD6APvQ+sD6yPpo+wj8CPwQ/Hj8UPzg/Ej9YP1o/dj9SP54/oj+2P5I/zj/eP+Y/5D/sP8QAFgAkACAAHgAWAAYALj/QP84/7j+2P7w/hD/8P6I/nj+gP54/kD+OP4w/kD+aP54/nD+0P6w/hD/GP8o/1D/gP8IAEgA+ABoAbABoAJYA4gD8ANwBNAEMAWIBegF8AX4BRAGeAagBrgGyAaoBoAGQAZABugFqAVgBRgFqARwBMADaAPwApgCwAHYACAAYP9Y/+D+mP4w/sD9KP34/ID8IPwQ/Pj7EPwA/OD7uPuw+4D7APwY/Ej8sPwY/RD9mP0Q/oD+2P7w/rj/0P+IABgBqAHYAUACqALYAvgCCAOIA8ADOATQA9gD+AMABJgDsANIAyADmAJIAgAC0AGgAVABEAFAAMj/OP/A/nD+6P2g/UD98PzA/HD8GPy4+5j7kPt4+zD7OPtI+2j7oPuY++D78Pvw+1j8uPzo/FD9oP0g/mj+uP4w/4j/yP9wABABUAGoAZgB8AEAAgAC6AEwAggCSAJIAiAC0AFYAfgA2ADQAIAAeAD4/6D/WP9A/4j+aP64/aD9cP0I/dj8yPyI/GD8iPww/Cj8EPxI/KD8uPz4/Kj9yP1A/sj+gP/Y/wgAiADQAIABEAKwAmgDIATIBAgFYAXIBSgGsAYoB7gH6AcYCCgIsAeIB1gHIAfIBqgGGAbgBWgF+ASIBNgDMAOIAugBmAGwAOj/KP9I/rD96PxA/JD72PqI+jD6wPmQ+Yj5QPnw+GD4gPiA+MD4MPlo+ej5+PlA+pj68Pqg+zD84PyY/Uj+2P6I/9j/SAD4AJgBAAKIAsACMAOIA9ADOAQYBCAEIAT4AxgEyAOAA3gDOAPAAnAC6AFoAeAAoABAAND/UP/I/ij+wP1o/fj8oPwY/Mj7YPuY+8D7sPug+6D7iPuo+9D76Ps4/LD8SP2o/Sj+cP44/3j/8P+AABABmAEQAsACKAO4A/ADWASIBOgESAVwBdgF6AXIBZgFkAVwBTgFAAUABaAEeAQIBJgDMAPQAmAC0AEwAeAAQAC4/xj/oP74/XD9yPxg/Mj7IPvw+qj6aPoY+uj54PnI+bD5mPl4+Xj5ePn4+Xj6IPsg+6j78PsY/KD8UP0w/rD+iP9AANAAWAEIAsACgAMgBHAE4AQYBdAFQAaoBvgG4AYoBygHSAc4B1AHYAdQB2AHEAfIBiAG2AWQBSAFsAQABHAD2AI4AtABEAGQADAAkP8Q/3D+GP6w/Uj9KP3Y/JD8EPzY+8j7ePu4+6D7uPvo+7D7qPvY++j7OPyY/BD9gP3g/Sj+WP6A/tj+EP+o/+j/OACAAIgA+ABoAcABsAHIAeABIAJQAmACcAJIAlACMAIoAtABeAEwAQgBKAHYAKgAWADY/2D/OP8Y/7D+oP5w/jj+2P3I/aj9gP2I/Vj9EP3Q/PD8+Pw4/XD9eP1Q/Uj9kP2I/fj9SP6Q/rD+uP4A/xj/CP9o/1j/cP9g/4j/eP9w/5j/gP+Y/5j/sP/Q/yAAGAAwAIAAQABQADAAMABgAFgAiACIAFgAYABwAHgAIADQ/9j/IAAgAPj/MAA4AAgA+P/I/6j/yP/I/7j/qP9o/0D/SP8Y/xj/AP/g/qj+cP54/oD+gP64/oj+YP5Q/uD90P0o/nD+qP6Y/uD+GP8g/yj/UP94/+j/EABQALgAAAEQAXgB6AHIAQACUAJwAqgC8AIwA1gDIAMQAygDSANgA5ADoANwA4gDSANQAygDyAKYAlAC6AG4AUAB+AC4AHAA4P+o/xj/yP6I/lj+MP4A/rD9SP3o/KD8iPxQ/DD8KPw4/ED8aPyQ/ID8wPwI/UD9cP24/VD+6P6A/+D/KABYAMgAWAHYATgCsAIQA5AD0AMoBHgE+AQQBWAFiAWwBcgF8AUABhAGoAVoBSgF2ASoBIAEAASoAygDoAIQAlgBsAAoAIj/AP94/hj+cP24/Dj8sPs4+7D6YPr4+fD52Pnw+cj5sPmY+cD56Pko+rD6APt4++j7gPzQ/HD98P2g/ij/2P9QAMAAkAFAAnAC6AKIA+ADaATIBCAFiAWgBfgF4AXwBegFuAWABXAFSAUgBeAEgAQQBHgDCAOQAvgBaAEAAYgAIACY/0j/sP5I/gj+cP34/Lj8aPwI/DD8KPwo/BD8KPwo/Fj8aPyg/Cj9qP1A/pj+8P4I/5D/EACYABABkAH4AWgC+AIoA5AD0AP4AyAEQARoBIgEeASYBFgE+AN4AxAD2AKQApgCCAJQAdgAUAC4/wD/eP7I/SD9aPwA/Ij7GPvY+mj6wPlQ+RD58PjA+LD4wPiQ+Lj46Pj4+Dj5cPng+Wj62PpA++j7aPwA/Yj90P1I/sj+UP/w/6AAMAGoATACwAIYAxgDMAN4A7gDAAQIBPgDwAOwA4ADIAPYArgCQALgAZgBcAEwAbAASACg/xD/uP5A/kD++P0I/uD9qP1w/VD9+PwY/UD9QP2Q/aj94P3w/RD+aP7Y/ij/kP/A/xAAeADQABABcAHAAdAB+AE4AmgCkAKwAtgC+AIIAwADsAKIAnACUAIgAugBiAEwAdgAeAAoAOj/aP/4/qj+eP4o/gD+yP1o/UD9CP3Q/MD8yPwI/XD9WP1Y/Tj9cP2Q/cj9GP5w/vD+QP+I//D/KACAANgAQAG4ASACoALoAkADmAPIA+ADEARYBJAE2AToBBgF+ATwBOAEqASYBJgEYAQYBOADsANYAxgD6AIoAuABmAFgASgB0ACQAFgA+P/Q/4j/QP8Y/wD/2P7g/sD+wP7o/rD+0P7Q/rj+4P4A/zj/UP9o/5D/uP/g//D/AAAQACgASABYAIgAkAB4AJAAoABgACgAGAAIAAAA6P/Y/7D/kP9w/1D/+P6o/lj+OP5I/gD+8P2w/Xj9QP0I/QD9GP0g/UD9eP2Q/Zj9wP3Q/QD+SP6Q/uj+IP+Y/8j/CABIAIgA2AAYAXABoAEQAkACmALYAhgDWAOAA5gDoAOwA7ADyAOwA4ADYAMwA8gCiAJQAhAC+AGYAUgB6AC4AGgA8P+w/2j/CP+4/pD+UP44/vj9gP1Q/Sj9AP3o/Mj88Pzw/AD9CP0g/WD9iP2Y/dj9EP5A/qj+AP8o/5D/8P8gAHgAoADIABgBUAHAAdgBCAIQAjACMAIgAggCEAIIAvAByAGoAWABGAHIAIgAMAD4/8D/eP8o/+j+aP4w/vD9wP1w/Tj98PzQ/MD8sPy4/ID8aPxg/Fj8YPyY/Lj8CP1Y/Yj9qP2w/eD9AP6A/tD+SP9w/9j/EABoAMAAAAEwAVABmAGgAdgB+AEYAgACKAI4AhAC6AHgAegBwAHIAcABmAFAASgB2AC4AJgAcABgAGgASAAIAOj/yP9o/0D/cP9A/zj/OP8Q//j+0P7A/rj+kP5w/nj+gP5g/nj+mP6I/qD+gP6Y/nD+eP6A/mD+cP6I/mj+YP6Q/oD+kP6o/qD+0P6o/tD+2P7g/vj+CP8g/xj/QP9o/8D/4P/w/wAAGABQAHgAsAC4ABABWAGgAdAB+AEIAigCUAJgApgCgAKgAtgC6ALoAgADCAP4AtgCoAJwAkACIALwAeABuAGAATgBKAHIAKAAeAAYAAgAsP9g/xD/oP5w/jD+6P3A/aj9iP1Y/Uj9MP0o/QD9EP1A/Xj9iP2g/bD96P1A/mD+gP6o/tj+CP9Q/6D/GAAwAIAAsADYAPAAMAFwAbgBAAIgAjgCQAIoAkgCWAJoAoACWAJIAmACYAJIAkgCGALwAagBaAFQAVgBEAEAAfgAyACwAIAAWABIAEgAMAAIAMj/uP+Q/5D/oP+o/8j/2P/Y/8D/0P/Q/9D/wP/Q/+D/+P8AAPj/CAAAABAAEAAoAEAAUABYABgACAAIAAgAEAA4ACgAWABoAFgAQAAwAEgAOABIADgAIAD4//j/AAD4/wAAMAAwACAACAAIAAAAAAAYABgACAAIACAAIAA4ADgAWABwAIAAgACIAHgAmACgALAAsACgALgAoACYAKAAmACgALAAmACgAJAAeABwAGgAgABoAEgAMAAgABAA4P/I/6j/kP9Y/0j/GP8Q/wD/0P7Q/pD+gP5o/lD+UP5Q/lj+eP5A/lj+SP44/jj+QP5g/lj+aP6Y/rj+wP74/iD/SP9g/2D/gP+I/7j/wP/Y/+j/CAAIAPD/8P/w/wgA+P/g/9j/2P/A/8D/eP+A/2D/QP9I/0D/CP/o/sj+qP6I/mj+YP44/jj+QP4I/vj9KP44/kj+UP54/oj+sP7Q/vD+MP9Q/4j/wP+g/zAAIACIAKgAAAEgAWABeAFwAbgB0AHgAfABCAIgAjgCQAJAAiACKAIIAugByAGoAbABuAGgAVgBIAEIAcgAkABgAEgAUABIACAA6P/Q/8j/mP94/3D/aP9g/0D/QP9I/yD/OP84/0j/IP9I/0j/aP94/3j/gP+Y/6D/sP+4/9j/6P/g/xAAGAA4ABAAAAAIAAAA+P8QACAAQAAwACgAOAAYADAAKAAIAPj/+P/o/9j/qP/Y/9j/sP+4/5D/kP+w/7D/yP+o/7j/qP+g/8D/4P/Q/8D/yP/w//j/CAAoADAAaAB4AIAAkACIALgAsACoAMAAsACoALAA8ADQAOAA2ADAAKgAmACYAKAAeAB4AGgASABQAGAAaABoAFAAWABgAHAAaABYAFgAeABwAHAAcACQAIAAeACQAJAAcACAAJgAiACwAMgAwADQALgAsADIAMgAyAC4ALgAmACIAIAAcABYAFAAOAAYAAgA8P/o/7j/uP+Q/4D/gP9I/yj/MP8w/wD/+P7Q/qj+kP54/pj+oP6o/qj+eP54/qj+oP64/tj+AP8I/xj/SP84/1j/gP+w/9D/6P8AABAAQABwAIgAsACwAPAAIAFAAVABSAFoAXgBcAGYAagBsAGoAYgBeAGgAYgBcAF4AVgBQAEIAfgAuACAAEAAQAAQAAAAuP+A/0j/OP8I/+D+qP6Y/nD+eP5g/lj+aP5Q/mD+YP5w/nj+mP6w/rj+4P4A/yj/OP9w/5j/mP+o/9j/AAAYAEgAiAB4AKAAuADAALgAAAEgAQABOAEIARAB+ADwAPAA6ADQAMAAqACIAEgAMAAIAPj/6P+w/3j/QP8Y/wj/6P7Y/pj+eP5Y/iD+AP4Y/iD+IP4g/jD+OP5A/kD+MP5A/oj+uP7Y/vD+IP9Q/4D/yP/o/xgAUAB4AKAA2AD4APgAKAFYAZABoAGwAbgBwAHYAdgB4AHwAegB0AGgAYgBeAFQATABGAH4AMgAuABwAGAAGAAAANj/sP+Y/3D/UP8Y//j++P7o/uD+yP7Q/tj+wP7A/sD+wP7w/gj/OP9A/0j/cP+I/7j/+P8QADAASABwAIgAuADYAOgA6ADwAOgA4AAAAfgAIAEwASgBMAE4AQgBEAHwAPAA4ADIAKAAqAB4AGgAGAAIAOj/0P+g/5D/cP9I/0j/QP8g//D+AP8A/+D+8P7Q/uj+8P74/hj/GP8Y/yj/GP8Y/1D/eP+4/7j/0P/A/9D/6P8AACAAKAAwADAAUABYADgAaAB4AFgAWABIAFgAQABQAGgAGAAAAAgAEAD4//j/AADo/9D/wP+o/5D/kP+Q/6D/mP+Q/4j/oP+Q/5D/kP+I/5D/qP+Y/7j/0P/o/wAA8P/o//D/6P/w/wAAEAAIACAACAAoAEgAQABYAFAAUABoAEgASABAACgAGAAoABgAKAA4ACgAIAAIAAgAAADw/+j/+P/w/+j/AAAAAPj/AAAAABgAIAAQACAAQAAoAGgAgACIALAAuADAAOAAAAEwAUgBcAFwAXgBiAGYAZABuAGwAbgBuAGoAaABkAGQAXABYAEoAQAB4ACwAJAAaABQABgA4P+w/3D/KP8Y/9D+oP5w/lD+OP4Q/uD9wP2w/aD9qP2I/Zj9oP2g/cD96P34/TD+UP54/qj++P4o/5D/uP8IAFgAkACwAAABUAGAAcgBEAI4AjgCUAJIAlgCcAJgAlgCOAJAAjACIALgAbABeAFQARAB2ACoAFgAAADQ/6j/WP8Y/7j+iP5Y/gD+wP2g/XD9UP0w/Qj96PzQ/Oj8+Pzw/Pj8CP1A/XD9mP3Q/Qj+QP6A/tD+IP9o/5j/2P8oAHAAoADoADgBSAGIAdAB0AHwARACIAIoAjACSAJAAjgCOAIIAuABqAF4ATgBKAHoALAAeAA4ABgA2P+w/3D/OP8g/+j+wP6Y/pD+cP5g/mj+WP5o/oj+kP7I/vj++P5I/2j/oP/A//D/SACgAMgAAAFAAWgBqAHYAfgBQAJIAlgCcAKAAogCiAKAAngCWAJQAkgCGALoAcABkAFIARAB0ACIAEAA8P+o/1j/CP+w/oD+aP5A/uj9sP2g/Wj9UP1I/Rj9EP0Q/RD9QP0w/WD9mP2Y/dj9KP5Y/pD+6P4w/3D/oP/w/xAAcADAAPgAOAF4AagByAHoARgCKAI4AkgCYAJQAkgCSAIgAgACuAF4AWABKAEIAdAAkABQACgA4P+4/1D/GP+4/nD+WP4Q/tj9mP2Q/XD9WP04/Sj9IP0I/Sj9MP1A/VD9aP2Y/bj9+P0A/lD+gP7Q/vj+QP9w/7j/8P8gAHgAuAAIAUABWAFoAZABmAG4AcgB0AHYAdgB2AG4AagBkAFwAXABUAE4AQgBwACoAHAASAAgAOj/uP+Y/4D/MP/g/uD+wP6Y/oj+aP5Q/kj+UP5Q/mD+cP6I/oj+iP6w/rj+0P7o/iD/KP9Q/4D/mP/Q/+j/EAAwAGgAmACwANgACAEwARgBMAE4AUgBKAFAATgBMAE4ASgBEAEYAfgA+ADoANAA0ADAAKAAkABwAGgAWAAwAPD/6P/Q/+D/4P/w/8j/0P/I/8j/0P/I/+j/8P/o/wAA6P8AAPj/AAAIADAAMAAwADAAQABAAFgAcACQAIAAsAC4ANgAwADgAOAA+ADoANgA2ACwALgAmACIAHgAcABwAGAAWABYAEgASABIAEAASABQAEAAQAAoABgAGAAIAAgAEAD4/wAAAAD4/wAA+P/w/+j/8P8AACAAKAA4AEAAKABYAEgAaABoAGAAeACQALAAkACIAJAAiAB4AIAAiACIAHgAgABwAGAAQAAwACAAIAAoABAAAAD4/wAA6P/Y/9j/wP+g/5j/kP+o/5j/kP+I/6j/mP+w/4j/mP+o/6j/oP+o/8D/qP+4/6j/sP/I/9j/2P/g//D/AAAIABAACAAAAPj/AADo//D/2P+4/6D/mP+o/6j/uP+Y/5D/kP94/3D/eP9w/2D/UP9o/0j/UP9Q/1j/YP94/3D/iP+Q/5j/mP/A/+D/+P8QACAAMAA4AFAAUABwAHgAsADYAOAA6ADwAAgBEAEQAQABOAFAAUABQAFIAVgBUAEoASABCAHgANgAuACgAHgAYAAwAAgA6P+w/3j/UP8w/xj/AP/w/sD+sP6Q/oj+YP5g/mD+SP5g/jj+OP4g/ij+OP44/jj+SP5Y/lj+cP6Q/rD+4P4I/0D/cP+Y/7D/4P8YADAAcACgANAA2ADwAAgBGAE4AWABYAFYAWgBcAFoAWgBSAFQATABIAHoANgAsAB4AJAAkABIAEgAKAAIAPj/wP+Y/5D/eP9o/1D/OP8w/yD/AP8A//D+4P7o/uD+6P74/gD/GP8g/yD/QP9I/2j/iP/A/9j/+P8QABAAIAAQADAAQABAAFgAgACAAJAAmACgAKgAoACoAJAAiACIAHgAaABYAFAAOAAYAAgA+P/Y/8j/uP+Q/3j/YP9I/1D/MP84/zj/KP8Y/xj/EP/o/uj+AP8Q/xD/KP9I/3j/mP+w/8D/0P/g/wAAIAA4AFgAkAC4AMgA4AAQARABGAFIAUgBWAFoAXgBmAGgAagBiAGQAXgBcAFwAVgBUAFIAUABKAEAAfgA0AC4AKgAmACQAHAAaABQAEgAKAAoABAAGAAAAAAACADo//D/0P/A/7j/uP/I/9j/6P/Y//D/+P8IABAAKAAIACgAEAAYABgAKAAYAAAACAAAAAAA+P/o/+D/yP/A/8j/mP+A/2j/cP9I/1D/SP9A/zj/KP8o/wD/+P7g/uj+8P7o/vD++P7o/tD+0P74/uD+8P4A//j+8P4Q/yD/SP9g/3D/cP94/3j/oP+w/8j/6P/4/wgAAAAYABgAGAAwADAAMAAoADAAEAAQAAAAAADo//j/+P/4/+j/8P/4/8j/4P/g/+D/4P/I/9D/yP/Q/9D/2P/Y/9D/uP/Q/8D/2P/A/+D/4P/w//j/8P/4/+j/EAA4ADgASABQAFAASABAADAAOAAYACAAKAAAAPj/CAD4//D/8P/Y/+j/0P/I/8j/oP+Q/5D/cP9g/1D/MP84/zj/OP8o/0j/KP8o/zj/KP9A/1D/SP9o/2j/eP+I/5D/mP+4/+j/4P8IABAAKAA4AFAAeACIAKAAwADIANAA0ADoAOgA+ADwAPgACAEAAfgA6ADYAOAA0AC4AKgAkAB4AGgAWABYAEgAOAAwABgA8P/g/+j/2P+4/8D/uP+4/7j/wP+w/8j/wP+4/8D/yP/g/9j/8P/g//D/+P8AAAAAEAAgADAAKABAAEgAWABgAGAAQABQAFgAWABwAGAAaAB4AFgAUAAwACgAEAAwAAgACAAAAPj/6P/Y/7j/wP+w/5j/kP+Q/5j/mP9w/3D/eP94/2j/gP+Q/6D/2P/Q/+D/8P8AAAAAEAAoAEgAYAB4AKAAqACwANAA4AAAAfgA8ADwAPAAEAEQAQgBEAEIASABAAEAAfgA8AD4AOgA2ADIALAAkACIAHAAYABAAFAAIAAoABAAAADo/9j/2P/I/7D/0P/A/7D/qP+g/6j/oP+w/9D/0P/Y/9j/+P/g/+D/UAB4AHAAeACIAJAAqACYAMAA4AAAATABMAFIATgBGAEoASgBMAEwAVABSAFIATABMAEgAQgBCAEAAdgAyACwAKgAsACQAJAAiABwAGAAOAAoABgAEAD4//j/4P/I/6D/eP9w/2D/UP9Q/0D/IP8w/yD/QP8o/xj/OP8o/xD/GP8g/wj/EP8Y/xj/CP8g/xj/IP8Y/yj/KP8g/xj/IP8Y/wj/GP8o/yD/OP9Q/1D/WP9w/1j/UP9g/2D/YP9Y/2D/aP9w/4j/kP+g/6j/uP+4/6j/oP+w/5j/sP+g/5j/kP+I/3j/cP9g/1j/WP9Y/1D/SP9A/zj/KP8w/zj/OP84/yD/KP8o/yj/KP9A/0j/OP8w/0D/OP9Q/1D/gP9w/4D/aP+A/4j/kP/A/7j/0P/I//D/+P8AABgAMABQAGgAiACQAKgAsACgALgAwADYAPAA6ADgAOgA4ADYAMgAyAC4AMAAwACoAJgAkABwAFgAUABQACgAMAAIABAA+P/g/8D/oP+I/3j/aP9o/2j/YP9A/zj/QP84/0D/UP9Y/1D/aP9o/2j/cP94/5D/kP+Y/7D/sP+4/7D/0P/4/wgAIABAAFgAWABoAIgAgACAAIgAkACQAJAAmACQAJAAiAB4AHAAcABoAFgAUAAwADgAMAAQAAgAAADg/9D/2P/Q/8D/yP+o/6D/iP+I/4j/gP+Q/3j/cP+A/5D/kP+I/5D/mP+o/6j/kP+w/9D/wP/o//D/+P8IABgAIAA4ADgAQABIAFAAUABQAGgAkABwAHAAcABoAHAAWABgAFAAOABAADAAIAAYADAAKAAgADAAIAAYAAAAAADo/wAA+P/4/+j/4P/A/7j/sP+Y/6D/sP+w/8D/wP/Q/9D/0P/Q/9D/2P/g//j/AAAgADAAQABAAGAAeACAAJgAwADAAOAAyADgAMAA6ADgANAA8ADoAAAB+AAIAdgAyADoAOgA2ADYAMgAwAC4AKgAqACQAHgAaABQAEAAKAAYAAgAAAAAAOD/uP+w/7D/oP+Y/5j/gP+A/3j/aP9w/3D/SP9g/2j/YP9g/2j/eP9w/3j/eP9w/3D/iP+Q/5D/mP+4/7j/wP/I/+j/6P/4/wAAAAAIABAAAAAIADAAOAAwAEgAQABIAFAASABQAGgAWABIAEgAUABYAFgAQAAoABgACAAQAPD/2P/Q/+D/yP/A/7j/uP/A/8D/sP+4/6j/oP+Y/4j/mP+Q/4D/gP+A/3j/iP+I/5j/oP+g/7D/yP/Y/+D/4P/g//D/+P8AAAAA6P8QAAAA+P8YABgACAAQACAAGAAYACAAKAA4AEgAUABYAGgAUAA4AEgASABAAEgAQAAoACgAMAAgABAAGAAwADAAIAAQACAAGAAwADgAKAAoADAAIAAYABgAIAAIABAACAAYAAAACAAoACgAMABAADgAUABIAFgAaABoAHgAeABwAGgAUABAADgAKAAwACAAGAAgABgACAAQACAAIAAgADAAQABAAFAAUABQAFAASABIADgAOAAwAEAAOABAACgAIAAgACgAKAAoADAAMAAYADAAMABAAEAAOABQAGgAaABwAIAAcABoAHAAYABIAFgAQABgAFAAcABwAHgAeABwAIAAiAB4AHAAaABoAEAAWABIACgAMAAgACAAAAAAAOj/6P/Q/+j/yP/A/7D/qP+g/4j/iP94/3D/aP9o/3D/OP8w/zj/GP8o/0D/MP9A/0D/OP8w/yj/OP9A/0j/UP9A/2D/WP9o/3j/gP9w/6D/mP+o/7j/qP+4/7D/2P/A/+D/yP/Q//D/6P/o/+D/AAD4/wgAKAAgADgAKAAgACgAMAAoACgACAAAABgAAAAIAAgACAAAAPD/AADw/9j/4P/Q/8j/0P+w/7j/sP+w/5j/iP9w/3D/YP9Y/1j/UP84/yj/IP9I/1j/WP9w/3D/cP+I/4j/eP+Q/4j/oP+w/6j/uP+4/7D/0P/Y//D/AAAIABAAIAAwAEAASABwAHgAcAB4AJAAmACIAIAAcABgAFAAYAAwADAAQAAgAAgACAD4//D/0P/Q/8D/qP+Y/4j/aP9w/2j/YP9A/yD/IP8I//D+GP8I/wj/AP8I/xD/KP9A/0j/UP9Y/3j/eP+Q/6j/yP/Q//D/AAAAADAAQABIAFAAaACIAJgAsAC4ANAA2ADgANAA2ADoAOgAyADQAMAAsACYAIgAgACIAIAAaABgAEgAKAAQAAAA+P/w/+D/wP+4/6D/mP+A/4D/UP9Q/0D/UP9A/xj/IP8g/yD/KP8g/zD/QP9A/0j/YP9w/4D/kP+Y/7D/wP/Q/+D/+P8AAAgAGAAoADgAUABQAGAAcACAAIgAiACIAJgAgACIAJAAiACYAJgAoACIAIgAkACIAHgAcABwAGAAWABAADgAKAAwACAAQAAoACAAKAAYACgAIAAwADAAKAAgADgAIAAgAEAAMABYAFgAaABoAGgAgACAAHAAaACAAHgAiABoAGgAeABgAGgAiABwAGgAQABAACAAIAAQAAAACAAIAAAA6P/Y/9D/4P/Y/8D/0P+4/7D/sP+o/5j/eP9w/0j/UP9I/0j/MP9Y/1j/aP+I/3j/kP+Y/5j/qP/A/8D/wP/Y//j/8P8QABAACAAgABAAEAAgADAAMABIAGAAYABYAFgAaABoAGgAaABoAFAAaABQAFgAUAAwADAAIAAgABAACAAYABAAAAAAAAgA+P8IAPj/CADw/+D/AAAAAAAAAAAYAAgAAAAAAAAAAAD4//j/AAAAAPj/8P/w//D/8P/w/wAACAAQAAAA8P/w//D/4P/w/+D/2P/o/8D/2P/g/7j/0P+w/8D/qP/A/7D/sP+o/7j/uP/I/8j/yP/Y/9j/0P/I/8j/4P/o//j/+P8QAAgAGAAYACAAEAAgAEAASABIAEgAUABgAGAAcABYAFgAaABQAEgAWABIAFgAWABgAFAASABQAEgAQABYAEgAUABYAEgAUAAwADAAOAAYABgAEAAAAPj/+P/4/+D/wP/A/7D/qP+w/6j/sP/Q/8j/2P/g/+D/AAAAAPj/+P8IAPD/AAAQAAgAAAAYABgACAAQABgAIAAgABgAGAAgACAAKAAwADAAKAAgABgAEAAYAAAA+P/o//D/2P/o/+D/0P/Q/9j/2P/I/+j/4P/w/9D/0P/A/7j/qP+w/5D/qP+Y/7D/sP+o/8D/yP/Y/+D/6P/4/wgAKAAwACgAOABAAEgASABAAEAAQAA4ACgAMABIAEgAUABwAGgAaABoAHgAaABoAGgAYABwAFAAWABQAEgASAA4ACgAOAAwABgAKAAAAAgAAAD4//j/6P/o//D/yP/I/9j/4P/g/9D/yP/I/8j/sP/I/8D/yP/Y/9D/4P/Y/+D/4P/Y//D/+P/g/wAACAAIAPD/EAAgADAAIAAQABAAGAAYABAAEAAwAEgAMAAwAEgAMAA4ACgAMAAgADAAKAAoABgACADw/+D/2P+4/8D/wP+g/5j/mP+o/6D/kP+Q/5j/qP+o/5j/qP+g/7D/qP+g/6D/qP+Y/6j/uP/A/8j/2P/Y/wAA8P/4/wAACAAYABgAIAAoABgAOAA4AEAAYAB4AHAAcABwAHgAeABQAGAAOAAgACgACAAQAAgACAAIAPj/4P/Y/+D/uP+w/7D/qP+Q/5j/kP94/2D/UP9A/1D/SP9I/2D/OP9A/0j/UP9Y/1D/UP9I/2D/aP94/4D/gP+Q/6D/oP+o/6D/qP/I/+D/4P/w/wAACAAQAAgAAAAgACAAMAAwAEAASABQAGgAYABoAHAAaACAAGAAaABQAEgASABAADAAMABAADgAMAAgABAAGAAQABgAIAAoABAAGAAoACAAGAAIAAAAAAAQAAAAAAAIAPD/AAAYAOj/AAAQABAAMAAoABgAMABAAEAAIAA4ADgAQABAACAAKAAYADgAKAA4AEgAOABIAFgAYABgAFgAcABwAIgAiACAAGAAaABwAHAAgABoAGAAeABIAGAAcABYAGgAUABIAFgAUABQAGAAWABgAGAAYABoAEgASABIADAAKAAwACgAIAAYABAACAAIAPj/6P/4/wAA+P/w/+j/AADo/+j/AADY//j/AADw//j/4P/Q/9j/2P/g/8D/uP/Q/8D/uP/I/8D/0P/Q/9D/wP+4/7D/mP+Y/5D/eP9w/2j/cP9g/2j/YP9Q/1j/WP9g/1j/cP94/4D/gP+A/4j/aP9g/2D/UP9o/2j/cP9Y/4D/gP94/4j/kP+Q/6D/sP+4/9j/4P8IAAAAAAAYABgAEAAQABgAKAAwACAAGAAgAEAAMAAwADgAKAAwADgAOAAYADAAGAAgABAAGAAAAAgAAADg/9D/yP/Y/9D/wP+4/8j/2P+4/7D/sP+4/8D/qP+Y/4j/cP9w/3D/cP9w/4j/kP+Y/6D/sP+w/7j/uP/Y/+D/4P8QAAgAIABAAEgAUABgAHAAeAB4AJAAmACoALAAuADAAMgAyADYAMAAuADAALAAoACYAJAAcABwAFAAQAAwABgAAAAQAOj/4P/Y/6D/oP+Y/4D/aP9g/1D/QP9I/1j/SP84/zD/SP9g/2j/cP+A/3j/iP+A/5j/kP+w/8D/4P/4//D/AAAQACAAUABAAFAAWACAAJAAiACIAIgAcAB4AGAAWABoAEgAUABIADAAMAAoACgAGAAQAPD/8P8AAPD/8P/Y/+D/+P/Q/8D/yP+w/7D/sP+w/6j/oP+g/5D/iP+I/5j/qP+o/6j/wP/Y/+D/8P8IACAAMAAoAEAAUABYAGAAcACIAKAAoACIAKgAsACwAKgAqACgALgAsACoAKgAsACgAJgAmACAAIgAYABQAFAASABgAEgASAAoADAAKAAYAAAAEAAYABAAAAAAAAAAAAAQAAgAAAAQAAgAAAAYACgAIAA4AEAAWABoAHAAeACIAIAAiACAAIAAcACAAIgAiACIAIgAeACAAHAAeABoAHgAeABIAEgAKAAoADgAMAAwADAAMAAYAAAAAADo/+j/+P/w//j/8P/g/+j/0P/I/7j/wP/A/7j/sP+w/7D/uP+w/5j/sP+o/7D/sP/A/8j/wP/I/+D/2P/g/+j/0P+4/9D/yP/Q/7j/uP/I/8D/wP+o/5j/gP94/2D/cP9w/4D/aP9w/1j/WP9g/0j/UP9Y/1D/QP9Q/zj/QP8o/zj/QP8w/0D/MP9I/1j/WP9o/2j/YP+A/2j/eP94/2D/aP94/3D/cP+Y/6D/sP+o/8D/uP+4/7j/sP/A/8D/uP+4/5j/uP+g/5j/mP+g/5j/kP+A/5D/iP+g/5j/sP+Y/4j/mP+g/5D/qP+Y/5D/mP+Y/4j/sP+o/7D/wP/Q/9D/0P8AAAgAAAAAACgAMAAwADgAWABYAFAAaABgAGAAUABgAFgA" preload="auto"></audio><div class="toast" ng-repeat="toast in toasty" ng-class="[toast.type, toast.interact, toast.shake, toast.theme]" ng-click="clickToasty(toast)"><div ng-click="close(toast.id)" class="close-button" ng-if="toast.showClose"></div><div ng-if="toast.title || toast.msg" class="toast-text"><span class="toast-title" ng-if="!toast.html && toast.title" ng-bind="toast.title"></span><span class="toast-title" ng-if="toast.html && toast.title" ng-bind-html="toast.title"></span><br ng-if="toast.title && toast.msg" /><span class="toast-msg" ng-if="!toast.html && toast.msg" ng-bind="toast.msg"></span><span class="toast-msg" ng-if="toast.html && toast.msg" ng-bind-html="toast.msg"></span></div></div></div>'}}]),angular.module("angular-toasty").provider("toastyConfig",function(){var A={limit:5,showClose:!0,clickToClose:!1,position:"bottom-right",timeout:5e3,sound:!0,html:!1,shake:!1,theme:"default"},P={};return{setConfig:function(A){P=A},$get:function(){return{config:angular.extend(A,P)}}}}),angular.module("angular-toasty").factory("toasty",["$rootScope","toastyConfig",function(A,P){var g=P.config,D=function(P,D){(angular.isString(P)&&""!=P||angular.isNumber(P))&&(P={title:P.toString()}),P&&(P.title||P.msg)?(P.type=D||"default",A.$broadcast("toasty-new",{config:g,options:P})):console.error("angular-toasty: No toast title or message specified!")};return D["default"]=function(A){D(A)},D.info=function(A){D(A,"info")},D.wait=function(A){D(A,"wait")},D.success=function(A){D(A,"success")},D.error=function(A){D(A,"error")},D.warning=function(A){D(A,"warning")},D.clear=function(P){A.$broadcast("toasty-clear",{id:P})},D.getGlobalConfig=function(){return g},D}]);
/**!
 * AngularJS file upload/drop directive with progress and abort
 * @author  Danial  <danial.farid@gmail.com>
 * @version 2.0.4
 */
(function() {
	
function patchXHR(fnName, newFn) {
	window.XMLHttpRequest.prototype[fnName] = newFn(window.XMLHttpRequest.prototype[fnName]);
}

if (window.XMLHttpRequest && !window.XMLHttpRequest.__isFileAPIShim) {
	patchXHR('setRequestHeader', function(orig) {
		return function(header, value) {
			if (header === '__setXHR_') {
				var val = value(this);
				// fix for angular < 1.2.0
				if (val instanceof Function) {
					val(this);
				}
			} else {
				orig.apply(this, arguments);
			}
		}
	});
}
	
var angularFileUpload = angular.module('angularFileUpload', []);
angularFileUpload.version = '2.0.4';
angularFileUpload.service('$upload', ['$http', '$q', '$timeout', function($http, $q, $timeout) {
	function sendHttp(config) {
		config.method = config.method || 'POST';
		config.headers = config.headers || {};
		config.transformRequest = config.transformRequest || function(data, headersGetter) {
			if (window.ArrayBuffer && data instanceof window.ArrayBuffer) {
				return data;
			}
			return $http.defaults.transformRequest[0](data, headersGetter);
		};
		var deferred = $q.defer();
		var promise = deferred.promise;

		config.headers['__setXHR_'] = function() {
			return function(xhr) {
				if (!xhr) return;
				config.__XHR = xhr;
				config.xhrFn && config.xhrFn(xhr);
				xhr.upload.addEventListener('progress', function(e) {
					e.config = config;
					deferred.notify ? deferred.notify(e) : promise.progress_fn && $timeout(function(){promise.progress_fn(e)});
				}, false);
				//fix for firefox not firing upload progress end, also IE8-9
				xhr.upload.addEventListener('load', function(e) {
					if (e.lengthComputable) {
						e.config = config;
						deferred.notify ? deferred.notify(e) : promise.progress_fn && $timeout(function(){promise.progress_fn(e)});
					}
				}, false);
			};
		};

		$http(config).then(function(r){deferred.resolve(r)}, function(e){deferred.reject(e)}, function(n){deferred.notify(n)});
		
		promise.success = function(fn) {
			promise.then(function(response) {
				fn(response.data, response.status, response.headers, config);
			});
			return promise;
		};

		promise.error = function(fn) {
			promise.then(null, function(response) {
				fn(response.data, response.status, response.headers, config);
			});
			return promise;
		};

		promise.progress = function(fn) {
			promise.progress_fn = fn;
			promise.then(null, null, function(update) {
				fn(update);
			});
			return promise;
		};
		promise.abort = function() {
			if (config.__XHR) {
				$timeout(function() {
					config.__XHR.abort();
				});
			}
			return promise;
		};
		promise.xhr = function(fn) {
			config.xhrFn = (function(origXhrFn) {
				return function() {
					origXhrFn && origXhrFn.apply(promise, arguments);
					fn.apply(promise, arguments);
				}
			})(config.xhrFn);
			return promise;
		};
		
		return promise;
	}

	this.upload = function(config) {
		config.headers = config.headers || {};
		config.headers['Content-Type'] = undefined;
		config.transformRequest = config.transformRequest || $http.defaults.transformRequest;
		var formData = new FormData();
		var origTransformRequest = config.transformRequest;
		var origData = config.data;
		config.transformRequest = function(formData, headerGetter) {
			if (origData) {
				if (config.formDataAppender) {
					for (var key in origData) {
						var val = origData[key];
						config.formDataAppender(formData, key, val);
					}
				} else {
					for (var key in origData) {
						var val = origData[key];
						if (typeof origTransformRequest == 'function') {
							val = origTransformRequest(val, headerGetter);
						} else {
							for (var i = 0; i < origTransformRequest.length; i++) {
								var transformFn = origTransformRequest[i];
								if (typeof transformFn == 'function') {
									val = transformFn(val, headerGetter);
								}
							}
						}
						if (val != undefined) formData.append(key, val);
					}
				}
			}

			if (config.file != null) {
				var fileFormName = config.fileFormDataName || 'file';

				if (Object.prototype.toString.call(config.file) === '[object Array]') {
					var isFileFormNameString = Object.prototype.toString.call(fileFormName) === '[object String]';
					for (var i = 0; i < config.file.length; i++) {
						formData.append(isFileFormNameString ? fileFormName : fileFormName[i], config.file[i], 
								(config.fileName && config.fileName[i]) || config.file[i].name);
					}
				} else {
					formData.append(fileFormName, config.file, config.fileName || config.file.name);
				}
			}
			return formData;
		};

		config.data = formData;

		return sendHttp(config);
	};

	this.http = function(config) {
		return sendHttp(config);
	};
}]);

angularFileUpload.directive('ngFileSelect', [ '$parse', '$timeout', function($parse, $timeout) { return {
	restrict: 'AEC',
	require:'?ngModel',
	scope: {
		fileModel: '=ngModel',
		change: '&ngFileChange',
		select : '&ngFileSelect',
		resetOnClick: '&resetOnClick',
		multiple: '&ngMultiple',
		accept: '&ngAccept'
	},
	link: function(scope, elem, attr, ngModel) {
		handleFileSelect(scope, elem, attr, ngModel, $parse, $timeout);
	}
}}]);

function handleFileSelect(scope, elem, attr, ngModel, $parse, $timeout) {
	if (scope.multiple()) {
		elem.attr('multiple', 'true');
		attr['multiple'] = 'true';
	}
	var accept = scope.accept();
	if (accept) {
		elem.attr('accept', accept);
		attr['accept'] = accept;
	}
	if (elem[0].tagName.toLowerCase() !== 'input' || (elem.attr('type') && elem.attr('type').toLowerCase()) !== 'file') {
		var fileElem = angular.element('<input type="file">')
		if (attr['multiple']) fileElem.attr('multiple', attr['multiple']);
		if (attr['accept']) fileElem.attr('accept', attr['accept']);
		fileElem.css('width', '1px').css('height', '1px').css('opacity', 0).css('position', 'absolute').css('filter', 'alpha(opacity=0)')
				.css('padding', 0).css('margin', 0).css('overflow', 'hidden').attr('tabindex', '-1').attr('ng-file-generated-elem', true);
		elem.append(fileElem);
		elem.__afu_fileClickDelegate__ = function() {
			fileElem[0].click();
		}; 
		elem.bind('click', elem.__afu_fileClickDelegate__);
		elem.css('overflow', 'hidden');
		elem = fileElem;
	}
	if (scope.resetOnClick() != false) {
		elem.bind('click', function(evt) {
			if (elem[0].value) {
				updateModel([], attr, ngModel, scope, evt);
			}
			elem[0].value = null;
		});
	}
	if (ngModel) {
		scope.$parent.$watch(attr['ngModel'], function(val) {
			if (val == null) {
				elem[0].value = null;
			}
		});
	}
	if (attr['ngFileSelect'] != '') {
		scope.change = scope.select;
	}
	elem.bind('change', function(evt) {
		var files = [], fileList, i;
		fileList = evt.__files_ || evt.target.files;
		updateModel(fileList, attr, ngModel, scope, evt);
	});
	
	function updateModel(fileList, attr, ngModel, scope, evt) {
		$timeout(function() {
			var files = [];
			for (var i = 0; i < fileList.length; i++) {
				files.push(fileList.item(i));
			}
			if (ngModel) {
				scope.fileModel = files;
				ngModel && ngModel.$setViewValue(files != null && files.length == 0 ? '' : files);
			}
			$timeout(function() {
				scope.change({
					$files : files,
					$event : evt
				});
			});
		});
	}
}

angularFileUpload.directive('ngFileDrop', [ '$parse', '$timeout', '$location', function($parse, $timeout, $location) { return {
	restrict: 'AEC',
	require:'?ngModel',
	scope: {
		fileModel: '=ngModel',
		fileRejectedModel: '=ngFileRejectedModel',
		change: '&ngFileChange',
		drop: '&ngFileDrop',
		allowDir: '&allowDir',
		dragOverClass: '&dragOverClass',
		dropAvailable: '=dropAvailable', 
		stopPropagation: '&stopPropagation',
		hideOnDropNotAvailable: '&hideOnDropNotAvailable',
		multiple: '&ngMultiple',
		accept: '&ngAccept'
	},
	link: function(scope, elem, attr, ngModel) {
		handleDrop(scope, elem, attr, ngModel, $parse, $timeout, $location);
	}
}}]);

angularFileUpload.directive('ngNoFileDrop', function() { 
	return function(scope, elem, attr) {
		if (dropAvailable()) elem.css('display', 'none')
	}
});

//for backward compatibility
angularFileUpload.directive('ngFileDropAvailable', [ '$parse', '$timeout', function($parse, $timeout) { 
	return function(scope, elem, attr) {
		if (dropAvailable()) {
			var fn = $parse(attr['ngFileDropAvailable']);
			$timeout(function() {
				fn(scope);
			});
		}
	}
}]);

function handleDrop(scope, elem, attr, ngModel, $parse, $timeout, $location) {
	var available = dropAvailable();
	if (attr['dropAvailable']) {
		$timeout(function() {
			scope.dropAvailable = available;
		});
	}
	if (!available) {
		if (scope.hideOnDropNotAvailable() != false) {
			elem.css('display', 'none');
		}
		return;
	}
	var leaveTimeout = null;
	var stopPropagation = scope.stopPropagation();
	var dragOverDelay = 1;
	var accept = scope.accept() || attr['accept'] || attr['ngAccept'];
	var regexp = accept ? new RegExp(globStringToRegex(accept)) : null;
	elem[0].addEventListener('dragover', function(evt) {
		evt.preventDefault();
		if (stopPropagation) evt.stopPropagation();
		$timeout.cancel(leaveTimeout);
		if (!scope.actualDragOverClass) {
			scope.actualDragOverClass = calculateDragOverClass(scope, attr, evt);
		}
		elem.addClass(scope.actualDragOverClass);
	}, false);
	elem[0].addEventListener('dragenter', function(evt) {
		evt.preventDefault();
		if (stopPropagation) evt.stopPropagation();
	}, false);
	elem[0].addEventListener('dragleave', function(evt) {
		leaveTimeout = $timeout(function() {
			elem.removeClass(scope.actualDragOverClass);
			scope.actualDragOverClass = null;
		}, dragOverDelay || 1);
	}, false);
	if (attr['ngFileDrop'] != '') {
		scope.change = scope.drop;
	}
	elem[0].addEventListener('drop', function(evt) {
		evt.preventDefault();
		if (stopPropagation) evt.stopPropagation();
		elem.removeClass(scope.actualDragOverClass);
		scope.actualDragOverClass = null;
		extractFiles(evt, function(files, rejFiles) {
			if (ngModel) {
				scope.fileModel = files;
				ngModel && ngModel.$setViewValue(files != null && files.length == 0 ? '' : files);
			}
			if (attr['ngFileRejectedModel']) scope.fileRejectedModel = rejFiles;
			$timeout(function(){
				scope.change({
					$files : files,
					$rejectedFiles: rejFiles,
					$event : evt
				});
			});
		}, scope.allowDir() != false, attr['multiple'] || scope.multiple() || attr['ngMultiple'] == 'true');
	}, false);
	
	function calculateDragOverClass(scope, attr, evt) {
		var valid = true;
		if (regexp) {
			var items = evt.dataTransfer.items;
			if (items != null) {
				for (var i = 0 ; i < items.length && valid; i++) {
					valid = valid && (items[i].kind == 'file' || items[i].kind == '') && 
						(items[i].type.match(regexp) != null || (items[i].name != null && items[i].name.match(regexp) != null));
				}
			}
		}
		var clazz = scope.dragOverClass({$event : evt});
		if (clazz) {
			if (clazz.delay) dragOverDelay = clazz.delay; 
			if (clazz.accept) clazz = valid ? clazz.accept : clazz.reject;
		}
		return clazz || attr['dragOverClass'] || 'dragover';
	}
				
	function extractFiles(evt, callback, allowDir, multiple) {
		var files = [], rejFiles = [], items = evt.dataTransfer.items;
		
		function addFile(file) {
			if (!regexp || file.type.match(regexp) || (file.name != null && file.name.match(regexp))) {
				files.push(file);
			} else {
				rejFiles.push(file);
			}
		}
		
		if (items && items.length > 0 && $location.protocol() != 'file') {
			for (var i = 0; i < items.length; i++) {
				if (items[i].webkitGetAsEntry && items[i].webkitGetAsEntry() && items[i].webkitGetAsEntry().isDirectory) {
					var entry = items[i].webkitGetAsEntry();
					if (entry.isDirectory && !allowDir) {
						continue;
					}
					if (entry != null) {
						//fix for chrome bug https://code.google.com/p/chromium/issues/detail?id=149735
						if (isASCII(entry.name)) {
							traverseFileTree(files, entry);
						} else if (!items[i].webkitGetAsEntry().isDirectory) {
							addFile(items[i].getAsFile());
						}
					}
				} else {
					var f = items[i].getAsFile();
					if (f != null) addFile(f);
				}
				if (!multiple && files.length > 0) break;
			}
		} else {
			var fileList = evt.dataTransfer.files;
			if (fileList != null) {
				for (var i = 0; i < fileList.length; i++) {
					addFile(fileList.item(i));
					if (!multiple && files.length > 0) break;
				}
			}
		}
		var delays = 0;
		(function waitForProcess(delay) {
			$timeout(function() {
				if (!processing) {
					if (!multiple && files.length > 1) {
						var i = 0;
						while (files[i].type == 'directory') i++;
						files = [files[i]];
					}
					callback(files, rejFiles);
				} else {
					if (delays++ * 10 < 20 * 1000) {
						waitForProcess(10);
					}
				}
			}, delay || 0)
		})();
		
		var processing = 0;
		function traverseFileTree(files, entry, path) {
			if (entry != null) {
				if (entry.isDirectory) {
					addFile({name: entry.name, type: 'directory', path: (path ? path : '') + entry.name});
					var dirReader = entry.createReader();
					processing++;
					dirReader.readEntries(function(entries) {
						try {
							for (var i = 0; i < entries.length; i++) {
								traverseFileTree(files, entries[i], (path ? path : '') + entry.name + '/');
							}
						} finally {
							processing--;
						}
					});
				} else {
					processing++;
					entry.file(function(file) {
						processing--;
						file.path = (path ? path : '') + file.name;
						addFile(file);
					});
				}
			}
		}
	}
}

function dropAvailable() {
    var div = document.createElement('div');
    return ('draggable' in div) && ('ondrop' in div);
}

function isASCII(str) {
	return /^[\000-\177]*$/.test(str);
}

function globStringToRegex(str) {
	if (str.length > 2 && str[0] === '/' && str[str.length -1] === '/') {
		return str.substring(1, str.length - 1);
	}
	var split = str.split(','), result = '';
	if (split.length > 1) {
		for (var i = 0; i < split.length; i++) {
			result += '(' + globStringToRegex(split[i]) + ')';
			if (i < split.length - 1) {
				result += '|'
			}
		}
	} else {
		result = '^' + str.replace(new RegExp('[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\' + '-]', 'g'), '\\$&') + '$';
		result = result.replace(/\\\*/g, '.*').replace(/\\\?/g, '.');
	}
	return result;
}

})();

/*
 AngularJS v1.3.20
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(N,f,W){'use strict';f.module("ngAnimate",["ng"]).directive("ngAnimateChildren",function(){return function(X,r,g){g=g.ngAnimateChildren;f.isString(g)&&0===g.length?r.data("$$ngAnimateChildren",!0):X.$watch(g,function(f){r.data("$$ngAnimateChildren",!!f)})}}).factory("$$animateReflow",["$$rAF","$document",function(f,r){var g=r[0].body;return function(r){return f(function(){r(g.offsetWidth)})}}]).config(["$provide","$animateProvider",function(X,r){function g(f){for(var n=0;n<f.length;n++){var g=
f[n];if(1==g.nodeType)return g}}function ba(f,n){return g(f)==g(n)}var t=f.noop,n=f.forEach,ca=r.$$selectors,aa=f.isArray,da=f.isString,ga=f.isObject,w={running:!0},u;X.decorator("$animate",["$delegate","$$q","$injector","$sniffer","$rootElement","$$asyncCallback","$rootScope","$document","$templateRequest","$$jqLite",function(O,N,M,Y,y,I,P,W,Z,Q){function R(a,c){var b=a.data("$$ngAnimateState")||{};c&&(b.running=!0,b.structural=!0,a.data("$$ngAnimateState",b));return b.disabled||b.running&&b.structural}
function D(a){var c,b=N.defer();b.promise.$$cancelFn=function(){c&&c()};P.$$postDigest(function(){c=a(function(){b.resolve()})});return b.promise}function J(a){if(ga(a))return a.tempClasses&&da(a.tempClasses)&&(a.tempClasses=a.tempClasses.split(/\s+/)),a}function S(a,c,b){b=b||{};var d={};n(b,function(e,a){n(a.split(" "),function(a){d[a]=e})});var h=Object.create(null);n((a.attr("class")||"").split(/\s+/),function(e){h[e]=!0});var f=[],k=[];n(c&&c.classes||[],function(e,a){var b=h[a],c=d[a]||{};!1===
e?(b||"addClass"==c.event)&&k.push(a):!0===e&&(b&&"removeClass"!=c.event||f.push(a))});return 0<f.length+k.length&&[f.join(" "),k.join(" ")]}function T(a){if(a){var c=[],b={};a=a.substr(1).split(".");(Y.transitions||Y.animations)&&c.push(M.get(ca[""]));for(var d=0;d<a.length;d++){var f=a[d],l=ca[f];l&&!b[f]&&(c.push(M.get(l)),b[f]=!0)}return c}}function U(a,c,b,d){function h(e,a){var b=e[a],c=e["before"+a.charAt(0).toUpperCase()+a.substr(1)];if(b||c)return"leave"==a&&(c=b,b=null),u.push({event:a,
fn:b}),fa.push({event:a,fn:c}),!0}function l(c,k,x){var E=[];n(c,function(a){a.fn&&E.push(a)});var m=0;n(E,function(c,f){var p=function(){a:{if(k){(k[f]||t)();if(++m<E.length)break a;k=null}x()}};switch(c.event){case "setClass":k.push(c.fn(a,e,A,p,d));break;case "animate":k.push(c.fn(a,b,d.from,d.to,p));break;case "addClass":k.push(c.fn(a,e||b,p,d));break;case "removeClass":k.push(c.fn(a,A||b,p,d));break;default:k.push(c.fn(a,p,d))}});k&&0===k.length&&x()}var k=a[0];if(k){d&&(d.to=d.to||{},d.from=
d.from||{});var e,A;aa(b)&&(e=b[0],A=b[1],e?A?b=e+" "+A:(b=e,c="addClass"):(b=A,c="removeClass"));var x="setClass"==c,E=x||"addClass"==c||"removeClass"==c||"animate"==c,p=a.attr("class")+" "+b;if(B(p)){var G=t,m=[],fa=[],g=t,s=[],u=[],p=(" "+p).replace(/\s+/g,".");n(T(p),function(a){!h(a,c)&&x&&(h(a,"addClass"),h(a,"removeClass"))});return{node:k,event:c,className:b,isClassBased:E,isSetClassOperation:x,applyStyles:function(){d&&a.css(f.extend(d.from||{},d.to||{}))},before:function(a){G=a;l(fa,m,function(){G=
t;a()})},after:function(a){g=a;l(u,s,function(){g=t;a()})},cancel:function(){m&&(n(m,function(a){(a||t)(!0)}),G(!0));s&&(n(s,function(a){(a||t)(!0)}),g(!0))}}}}}function H(a,c,b,d,h,l,k,e){function A(e){var k="$animate:"+e;g&&g[k]&&0<g[k].length&&I(function(){b.triggerHandler(k,{event:a,className:c})})}function x(){A("before")}function E(){A("after")}function p(){p.hasBeenRun||(p.hasBeenRun=!0,l())}function G(){if(!G.hasBeenRun){m&&m.applyStyles();G.hasBeenRun=!0;k&&k.tempClasses&&n(k.tempClasses,
function(a){u.removeClass(b,a)});var x=b.data("$$ngAnimateState");x&&(m&&m.isClassBased?C(b,c):(I(function(){var e=b.data("$$ngAnimateState")||{};ea==e.index&&C(b,c,a)}),b.data("$$ngAnimateState",x)));A("close");e()}}var m=U(b,a,c,k);if(!m)return p(),x(),E(),G(),t;a=m.event;c=m.className;var g=f.element._data(m.node),g=g&&g.events;d||(d=h?h.parent():b.parent());if(z(b,d))return p(),x(),E(),G(),t;d=b.data("$$ngAnimateState")||{};var L=d.active||{},s=d.totalActive||0,q=d.last;h=!1;if(0<s){s=[];if(m.isClassBased)"setClass"==
q.event?(s.push(q),C(b,c)):L[c]&&(v=L[c],v.event==a?h=!0:(s.push(v),C(b,c)));else if("leave"==a&&L["ng-leave"])h=!0;else{for(var v in L)s.push(L[v]);d={};C(b,!0)}0<s.length&&n(s,function(a){a.cancel()})}!m.isClassBased||m.isSetClassOperation||"animate"==a||h||(h="addClass"==a==b.hasClass(c));if(h)return p(),x(),E(),A("close"),e(),t;L=d.active||{};s=d.totalActive||0;if("leave"==a)b.one("$destroy",function(a){a=f.element(this);var e=a.data("$$ngAnimateState");e&&(e=e.active["ng-leave"])&&(e.cancel(),
C(a,"ng-leave"))});u.addClass(b,"ng-animate");k&&k.tempClasses&&n(k.tempClasses,function(a){u.addClass(b,a)});var ea=K++;s++;L[c]=m;b.data("$$ngAnimateState",{last:m,active:L,index:ea,totalActive:s});x();m.before(function(e){var k=b.data("$$ngAnimateState");e=e||!k||!k.active[c]||m.isClassBased&&k.active[c].event!=a;p();!0===e?G():(E(),m.after(G))});return m.cancel}function q(a){if(a=g(a))a=f.isFunction(a.getElementsByClassName)?a.getElementsByClassName("ng-animate"):a.querySelectorAll(".ng-animate"),
n(a,function(a){a=f.element(a);(a=a.data("$$ngAnimateState"))&&a.active&&n(a.active,function(a){a.cancel()})})}function C(a,c){if(ba(a,y))w.disabled||(w.running=!1,w.structural=!1);else if(c){var b=a.data("$$ngAnimateState")||{},d=!0===c;!d&&b.active&&b.active[c]&&(b.totalActive--,delete b.active[c]);if(d||!b.totalActive)u.removeClass(a,"ng-animate"),a.removeData("$$ngAnimateState")}}function z(a,c){if(w.disabled)return!0;if(ba(a,y))return w.running;var b,d,g;do{if(0===c.length)break;var l=ba(c,y),
k=l?w:c.data("$$ngAnimateState")||{};if(k.disabled)return!0;l&&(g=!0);!1!==b&&(l=c.data("$$ngAnimateChildren"),f.isDefined(l)&&(b=l));d=d||k.running||k.last&&!k.last.isClassBased}while(c=c.parent());return!g||!b&&d}u=Q;y.data("$$ngAnimateState",w);var $=P.$watch(function(){return Z.totalPendingRequests},function(a,c){0===a&&($(),P.$$postDigest(function(){P.$$postDigest(function(){w.running=!1})}))}),K=0,V=r.classNameFilter(),B=V?function(a){return V.test(a)}:function(){return!0};return{animate:function(a,
c,b,d,h){d=d||"ng-inline-animate";h=J(h)||{};h.from=b?c:null;h.to=b?b:c;return D(function(b){return H("animate",d,f.element(g(a)),null,null,t,h,b)})},enter:function(a,c,b,d){d=J(d);a=f.element(a);c=c&&f.element(c);b=b&&f.element(b);R(a,!0);O.enter(a,c,b);return D(function(h){return H("enter","ng-enter",f.element(g(a)),c,b,t,d,h)})},leave:function(a,c){c=J(c);a=f.element(a);q(a);R(a,!0);return D(function(b){return H("leave","ng-leave",f.element(g(a)),null,null,function(){O.leave(a)},c,b)})},move:function(a,
c,b,d){d=J(d);a=f.element(a);c=c&&f.element(c);b=b&&f.element(b);q(a);R(a,!0);O.move(a,c,b);return D(function(h){return H("move","ng-move",f.element(g(a)),c,b,t,d,h)})},addClass:function(a,c,b){return this.setClass(a,c,[],b)},removeClass:function(a,c,b){return this.setClass(a,[],c,b)},setClass:function(a,c,b,d){d=J(d);a=f.element(a);a=f.element(g(a));if(R(a))return O.$$setClassImmediately(a,c,b,d);var h,l=a.data("$$animateClasses"),k=!!l;l||(l={classes:{}});h=l.classes;c=aa(c)?c:c.split(" ");n(c,
function(a){a&&a.length&&(h[a]=!0)});b=aa(b)?b:b.split(" ");n(b,function(a){a&&a.length&&(h[a]=!1)});if(k)return d&&l.options&&(l.options=f.extend(l.options||{},d)),l.promise;a.data("$$animateClasses",l={classes:h,options:d});return l.promise=D(function(e){var k,b,c,d=g(a);d&&(k=a.data("$$animateClasses"),a.removeData("$$animateClasses"),c=a.parent(),b=d.parentNode);if(!b||b.$$NG_REMOVED||d.$$NG_REMOVED)e();else{b=a.data("$$ngAnimateState")||{};var f=S(a,k,b.active);return f?H("setClass",f,a,c,null,
function(){f[0]&&O.$$addClassImmediately(a,f[0]);f[1]&&O.$$removeClassImmediately(a,f[1])},k.options,e):e()}})},cancel:function(a){a.$$cancelFn()},enabled:function(a,c){switch(arguments.length){case 2:if(a)C(c);else{var b=c.data("$$ngAnimateState")||{};b.disabled=!0;c.data("$$ngAnimateState",b)}break;case 1:w.disabled=!a;break;default:a=!w.disabled}return!!a}}}]);r.register("",["$window","$sniffer","$timeout","$$animateReflow",function(r,w,M,Y){function y(){b||(b=Y(function(){c=[];b=null;B={}}))}
function I(a,e){b&&b();c.push(e);b=Y(function(){n(c,function(a){a()});c=[];b=null;B={}})}function P(a,e){var b=g(a);a=f.element(b);l.push(a);b=Date.now()+e;b<=h||(M.cancel(d),h=b,d=M(function(){X(l);l=[]},e,!1))}function X(a){n(a,function(a){(a=a.data("$$ngAnimateCSS3Data"))&&n(a.closeAnimationFns,function(a){a()})})}function Z(a,e){var b=e?B[e]:null;if(!b){var c=0,d=0,f=0,g=0;n(a,function(a){if(1==a.nodeType){a=r.getComputedStyle(a)||{};c=Math.max(Q(a[z+"Duration"]),c);d=Math.max(Q(a[z+"Delay"]),
d);g=Math.max(Q(a[K+"Delay"]),g);var e=Q(a[K+"Duration"]);0<e&&(e*=parseInt(a[K+"IterationCount"],10)||1);f=Math.max(e,f)}});b={total:0,transitionDelay:d,transitionDuration:c,animationDelay:g,animationDuration:f};e&&(B[e]=b)}return b}function Q(a){var e=0;a=da(a)?a.split(/\s*,\s*/):[];n(a,function(a){e=Math.max(parseFloat(a)||0,e)});return e}function R(b,e,c,d){b=0<=["ng-enter","ng-leave","ng-move"].indexOf(c);var f,p=e.parent(),h=p.data("$$ngAnimateKey");h||(p.data("$$ngAnimateKey",++a),h=a);f=h+
"-"+g(e).getAttribute("class");var p=f+" "+c,h=B[p]?++B[p].total:0,m={};if(0<h){var n=c+"-stagger",m=f+" "+n;(f=!B[m])&&u.addClass(e,n);m=Z(e,m);f&&u.removeClass(e,n)}u.addClass(e,c);var n=e.data("$$ngAnimateCSS3Data")||{},l=Z(e,p);f=l.transitionDuration;l=l.animationDuration;if(b&&0===f&&0===l)return u.removeClass(e,c),!1;c=d||b&&0<f;b=0<l&&0<m.animationDelay&&0===m.animationDuration;e.data("$$ngAnimateCSS3Data",{stagger:m,cacheKey:p,running:n.running||0,itemIndex:h,blockTransition:c,closeAnimationFns:n.closeAnimationFns||
[]});p=g(e);c&&(J(p,!0),d&&e.css(d));b&&(p.style[K+"PlayState"]="paused");return!0}function D(a,e,b,c,d){function f(){e.off(D,h);u.removeClass(e,l);u.removeClass(e,t);z&&M.cancel(z);H(e,b);var a=g(e),c;for(c in s)a.style.removeProperty(s[c])}function h(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||b.timeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(3));Math.max(a-I,0)>=B&&b>=y&&c()}var m=g(e);a=e.data("$$ngAnimateCSS3Data");if(-1!=m.getAttribute("class").indexOf(b)&&
a){var l="",t="";n(b.split(" "),function(a,b){var e=(0<b?" ":"")+a;l+=e+"-active";t+=e+"-pending"});var s=[],q=a.itemIndex,v=a.stagger,r=0;if(0<q){r=0;0<v.transitionDelay&&0===v.transitionDuration&&(r=v.transitionDelay*q);var w=0;0<v.animationDelay&&0===v.animationDuration&&(w=v.animationDelay*q,s.push(C+"animation-play-state"));r=Math.round(100*Math.max(r,w))/100}r||(u.addClass(e,l),a.blockTransition&&J(m,!1));var F=Z(e,a.cacheKey+" "+l),y=Math.max(F.transitionDuration,F.animationDuration);if(0===
y)u.removeClass(e,l),H(e,b),c();else{!r&&d&&0<Object.keys(d).length&&(F.transitionDuration||(e.css("transition",F.animationDuration+"s linear all"),s.push("transition")),e.css(d));var q=Math.max(F.transitionDelay,F.animationDelay),B=1E3*q;0<s.length&&(v=m.getAttribute("style")||"",";"!==v.charAt(v.length-1)&&(v+=";"),m.setAttribute("style",v+" "));var I=Date.now(),D=V+" "+$,q=1E3*(r+1.5*(q+y)),z;0<r&&(u.addClass(e,t),z=M(function(){z=null;0<F.transitionDuration&&J(m,!1);0<F.animationDuration&&(m.style[K+
"PlayState"]="");u.addClass(e,l);u.removeClass(e,t);d&&(0===F.transitionDuration&&e.css("transition",F.animationDuration+"s linear all"),e.css(d),s.push("transition"))},1E3*r,!1));e.on(D,h);a.closeAnimationFns.push(function(){f();c()});a.running++;P(e,q);return f}}else c()}function J(a,b){a.style[z+"Property"]=b?"none":""}function S(a,b,c,d){if(R(a,b,c,d))return function(a){a&&H(b,c)}}function T(a,b,c,d,f){if(b.data("$$ngAnimateCSS3Data"))return D(a,b,c,d,f);H(b,c);d()}function U(a,b,c,d,f){var g=
S(a,b,c,f.from);if(g){var h=g;I(b,function(){h=T(a,b,c,d,f.to)});return function(a){(h||t)(a)}}y();d()}function H(a,b){u.removeClass(a,b);var c=a.data("$$ngAnimateCSS3Data");c&&(c.running&&c.running--,c.running&&0!==c.running||a.removeData("$$ngAnimateCSS3Data"))}function q(a,b){var c="";a=aa(a)?a:a.split(/\s+/);n(a,function(a,d){a&&0<a.length&&(c+=(0<d?" ":"")+a+b)});return c}var C="",z,$,K,V;N.ontransitionend===W&&N.onwebkittransitionend!==W?(C="-webkit-",z="WebkitTransition",$="webkitTransitionEnd transitionend"):
(z="transition",$="transitionend");N.onanimationend===W&&N.onwebkitanimationend!==W?(C="-webkit-",K="WebkitAnimation",V="webkitAnimationEnd animationend"):(K="animation",V="animationend");var B={},a=0,c=[],b,d=null,h=0,l=[];return{animate:function(a,b,c,d,f,g){g=g||{};g.from=c;g.to=d;return U("animate",a,b,f,g)},enter:function(a,b,c){c=c||{};return U("enter",a,"ng-enter",b,c)},leave:function(a,b,c){c=c||{};return U("leave",a,"ng-leave",b,c)},move:function(a,b,c){c=c||{};return U("move",a,"ng-move",
b,c)},beforeSetClass:function(a,b,c,d,f){f=f||{};b=q(c,"-remove")+" "+q(b,"-add");if(f=S("setClass",a,b,f.from))return I(a,d),f;y();d()},beforeAddClass:function(a,b,c,d){d=d||{};if(b=S("addClass",a,q(b,"-add"),d.from))return I(a,c),b;y();c()},beforeRemoveClass:function(a,b,c,d){d=d||{};if(b=S("removeClass",a,q(b,"-remove"),d.from))return I(a,c),b;y();c()},setClass:function(a,b,c,d,f){f=f||{};c=q(c,"-remove");b=q(b,"-add");return T("setClass",a,c+" "+b,d,f.to)},addClass:function(a,b,c,d){d=d||{};return T("addClass",
a,q(b,"-add"),c,d.to)},removeClass:function(a,b,c,d){d=d||{};return T("removeClass",a,q(b,"-remove"),c,d.to)}}}])}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map

angular.module("cgBusy",[]),angular.module("cgBusy").factory("_cgBusyTrackerFactory",["$timeout","$q",function(a,b){return function(){var c={};c.promises=[],c.delayPromise=null,c.durationPromise=null,c.delayJustFinished=!1,c.reset=function(b){c.minDuration=b.minDuration,c.promises=[],angular.forEach(b.promises,function(a){a&&!a.$cgBusyFulfilled&&d(a)}),0!==c.promises.length&&(c.delayJustFinished=!1,b.delay&&(c.delayPromise=a(function(){c.delayPromise=null,c.delayJustFinished=!0},parseInt(b.delay,10))),b.minDuration&&(c.durationPromise=a(function(){c.durationPromise=null},parseInt(b.minDuration,10)+(b.delay?parseInt(b.delay,10):0))))},c.isPromise=function(a){var b=a&&(a.then||a.$then||a.$promise&&a.$promise.then);return"undefined"!=typeof b},c.callThen=function(a,c,d){var e;a.then||a.$then?e=a:a.$promise?e=a.$promise:a.denodeify&&(e=b.when(a));var f=e.then||e.$then;f.call(e,c,d)};var d=function(a){if(!c.isPromise(a))throw new Error("cgBusy expects a promise (or something that has a .promise or .$promise");-1===c.promises.indexOf(a)&&(c.promises.push(a),c.callThen(a,function(){a.$cgBusyFulfilled=!0,-1!==c.promises.indexOf(a)&&c.promises.splice(c.promises.indexOf(a),1)},function(){a.$cgBusyFulfilled=!0,-1!==c.promises.indexOf(a)&&c.promises.splice(c.promises.indexOf(a),1)}))};return c.active=function(){return c.delayPromise?!1:c.delayJustFinished?(c.delayJustFinished=!1,0===c.promises.length&&(c.durationPromise=null),c.promises.length>0):c.durationPromise?!0:c.promises.length>0},c}}]),angular.module("cgBusy").value("cgBusyDefaults",{}),angular.module("cgBusy").directive("cgBusy",["$compile","$templateCache","cgBusyDefaults","$http","_cgBusyTrackerFactory",function(a,b,c,d,e){return{restrict:"A",link:function(f,g,h){var i=g.css("position");("static"===i||""===i||"undefined"==typeof i)&&g.css("position","relative");var j,k,l,m,n,o=e(),p={templateUrl:"angular-busy.html",delay:0,minDuration:0,backdrop:!0,message:"Please Wait...",wrapperClass:"cg-busy cg-busy-animation"};angular.extend(p,c),f.$watchCollection(h.cgBusy,function(c){if(c||(c={promise:null}),angular.isString(c))throw new Error("Invalid value for cg-busy. cgBusy no longer accepts string ids to represent promises/trackers.");(angular.isArray(c)||o.isPromise(c))&&(c={promise:c}),c=angular.extend(angular.copy(p),c),c.templateUrl||(c.templateUrl=p.templateUrl),angular.isArray(c.promise)||(c.promise=[c.promise]),m||(m=f.$new()),m.$message=c.message,angular.equals(o.promises,c.promise)||o.reset({promises:c.promise,delay:c.delay,minDuration:c.minDuration}),m.$cgBusyIsActive=function(){return o.active()},j&&l===c.templateUrl&&n===c.backdrop||(j&&j.remove(),k&&k.remove(),l=c.templateUrl,n=c.backdrop,d.get(l,{cache:b}).success(function(b){if(c.backdrop="undefined"==typeof c.backdrop?!0:c.backdrop,c.backdrop){var d='<div class="cg-busy cg-busy-backdrop cg-busy-backdrop-animation ng-hide" ng-show="$cgBusyIsActive()"></div>';k=a(d)(m),g.append(k)}var e='<div class="'+c.wrapperClass+' ng-hide" ng-show="$cgBusyIsActive()">'+b+"</div>";j=a(e)(m),angular.element(j.children()[0]).css("position","absolute").css("top",0).css("left",0).css("right",0).css("bottom",0),g.append(j)}).error(function(a){throw new Error("Template specified for cgBusy ("+c.templateUrl+") could not be loaded. "+a)}))},!0)}}}]),angular.module("cgBusy").run(["$templateCache",function(a){"use strict";a.put("angular-busy.html",'<div class="cg-busy-default-wrapper">\n\n   <div class="cg-busy-default-sign">\n\n      <div class="cg-busy-default-spinner">\n         <div class="bar1"></div>\n         <div class="bar2"></div>\n         <div class="bar3"></div>\n         <div class="bar4"></div>\n         <div class="bar5"></div>\n         <div class="bar6"></div>\n         <div class="bar7"></div>\n         <div class="bar8"></div>\n         <div class="bar9"></div>\n         <div class="bar10"></div>\n         <div class="bar11"></div>\n         <div class="bar12"></div>\n      </div>\n\n      <div class="cg-busy-default-text">{{$message}}</div>\n\n   </div>\n\n</div>')}]);
/**
 * simplemde v1.8.1
 * Copyright Next Step Webs, Inc.
 * @link https://github.com/NextStepWebs/simplemde-markdown-editor
 * @license MIT
 */
! function(e) {
	if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
	else if ("function" == typeof define && define.amd) define([], e);
	else {
		var t;
		t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.SimpleMDE = e()
	}
}(function() {
	var e;
	return function t(e, n, r) {
		function i(l, a) {
			if (!n[l]) {
				if (!e[l]) {
					var s = "function" == typeof require && require;
					if (!a && s) return s(l, !0);
					if (o) return o(l, !0);
					var c = new Error("Cannot find module '" + l + "'");
					throw c.code = "MODULE_NOT_FOUND", c
				}
				var u = n[l] = {
					exports: {}
				};
				e[l][0].call(u.exports, function(t) {
					var n = e[l][1][t];
					return i(n ? n : t)
				}, u, u.exports, t, e, n, r)
			}
			return n[l].exports
		}
		for (var o = "function" == typeof require && require, l = 0; l < r.length; l++) i(r[l]);
		return i
	}({
		1: [function(e, t, n) {
			(function(n) {
				Typo = n.Typo = e("/Users/wescossick/Documents/Websites/simplemde-markdown-editor/node_modules/codemirror-spell-checker/src/js/typo.js"), CodeMirror = n.CodeMirror = e("codemirror");
				(function(e, t, n) {
					var r, i = 0,
						o = !1,
						l = !1,
						a = "",
						s = "";
					CodeMirror.defineMode("spell-checker", function(e, t) {
						if (!o) {
							o = !0;
							var n = new XMLHttpRequest;
							n.open("GET", "https://cdn.jsdelivr.net/codemirror.spell-checker/latest/en_US.aff", !0), n.onload = function(e) {
								4 === n.readyState && 200 === n.status && (a = n.responseText, i++, 2 == i && (r = new Typo("en_US", a, s, {
									platform: "any"
								})))
							}, n.send(null)
						}
						if (!l) {
							l = !0;
							var c = new XMLHttpRequest;
							c.open("GET", "https://cdn.jsdelivr.net/codemirror.spell-checker/latest/en_US.dic", !0), c.onload = function(e) {
								4 === c.readyState && 200 === c.status && (s = c.responseText, i++, 2 == i && (r = new Typo("en_US", a, s, {
									platform: "any"
								})))
							}, c.send(null)
						}
						var u = '!"#$%&()*+,-./:;<=>?@[\\]^_`{|}~ ',
							d = {
								token: function(e, t) {
									var n = e.peek(),
										i = "";
									if (u.includes(n)) return e.next(), null;
									for (; null != (n = e.peek()) && !u.includes(n);) i += n, e.next();
									return r && !r.check(i) ? "spell-error" : null
								}
							},
							h = CodeMirror.getMode(e, e.backdrop || "text/plain");
						return CodeMirror.overlayMode(h, d, !0)
					}), String.prototype.includes || (String.prototype.includes = function() {
						"use strict";
						return -1 !== String.prototype.indexOf.apply(this, arguments)
					})
				}).call(n, t, void 0, void 0)
			}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
		}, {
			"/Users/wescossick/Documents/Websites/simplemde-markdown-editor/node_modules/codemirror-spell-checker/src/js/typo.js": 2,
			codemirror: 6
		}],
		2: [function(e, t, n) {
			(function(e) {
				(function(e, t, n, r, i) {
					"use strict";
					var o = function(e, t, n, r) {
						if (r = r || {}, this.platform = r.platform || "chrome", this.dictionary = null, this.rules = {}, this.dictionaryTable = {}, this.compoundRules = [], this.compoundRuleCodes = {}, this.replacementTable = [], this.flags = r.flags || {}, e) {
							if (this.dictionary = e, "chrome" == this.platform) t || (t = this._readFile(chrome.extension.getURL("lib/typo/dictionaries/" + e + "/" + e + ".aff"))), n || (n = this._readFile(chrome.extension.getURL("lib/typo/dictionaries/" + e + "/" + e + ".dic")));
							else {
								var i = r.dictionaryPath || "";
								t || (t = this._readFile(i + "/" + e + "/" + e + ".aff")), n || (n = this._readFile(i + "/" + e + "/" + e + ".dic"))
							}
							this.rules = this._parseAFF(t), this.compoundRuleCodes = {};
							for (var o = 0, l = this.compoundRules.length; l > o; o++)
								for (var a = this.compoundRules[o], s = 0, c = a.length; c > s; s++) this.compoundRuleCodes[a[s]] = [];
							"ONLYINCOMPOUND" in this.flags && (this.compoundRuleCodes[this.flags.ONLYINCOMPOUND] = []), this.dictionaryTable = this._parseDIC(n);
							for (var o in this.compoundRuleCodes) 0 == this.compoundRuleCodes[o].length && delete this.compoundRuleCodes[o];
							for (var o = 0, l = this.compoundRules.length; l > o; o++) {
								for (var u = this.compoundRules[o], d = "", s = 0, c = u.length; c > s; s++) {
									var h = u[s];
									d += h in this.compoundRuleCodes ? "(" + this.compoundRuleCodes[h].join("|") + ")" : h
								}
								this.compoundRules[o] = new RegExp(d, "i")
							}
						}
						return this
					};
					o.prototype = {
						load: function(e) {
							for (var t in e) this[t] = e[t];
							return this
						},
						_readFile: function(e, t) {
							t || (t = "ISO8859-1");
							var n = new XMLHttpRequest;
							return n.open("GET", e, !1), n.overrideMimeType && n.overrideMimeType("text/plain; charset=" + t), n.send(null), n.responseText
						},
						_parseAFF: function(e) {
							var t = {};
							e = this._removeAffixComments(e);
							for (var n = e.split("\n"), r = 0, i = n.length; i > r; r++) {
								var o = n[r],
									l = o.split(/\s+/),
									a = l[0];
								if ("PFX" == a || "SFX" == a) {
									for (var s = l[1], c = l[2], u = parseInt(l[3], 10), d = [], h = r + 1, f = r + 1 + u; f > h; h++) {
										var o = n[h],
											p = o.split(/\s+/),
											m = p[2],
											g = p[3].split("/"),
											v = g[0];
										"0" === v && (v = "");
										var y = this.parseRuleCodes(g[1]),
											x = p[4],
											b = {};
										b.add = v, y.length > 0 && (b.continuationClasses = y), "." !== x && ("SFX" === a ? b.match = new RegExp(x + "$") : b.match = new RegExp("^" + x)), "0" != m && ("SFX" === a ? b.remove = new RegExp(m + "$") : b.remove = m), d.push(b)
									}
									t[s] = {
										type: a,
										combineable: "Y" == c,
										entries: d
									}, r += u
								} else if ("COMPOUNDRULE" === a) {
									for (var u = parseInt(l[1], 10), h = r + 1, f = r + 1 + u; f > h; h++) {
										var o = n[h],
											p = o.split(/\s+/);
										this.compoundRules.push(p[1])
									}
									r += u
								} else if ("REP" === a) {
									var p = o.split(/\s+/);
									3 === p.length && this.replacementTable.push([p[1], p[2]])
								} else this.flags[a] = l[1]
							}
							return t
						},
						_removeAffixComments: function(e) {
							return e = e.replace(/#.*$/gm, ""), e = e.replace(/^\s\s*/m, "").replace(/\s\s*$/m, ""), e = e.replace(/\n{2,}/g, "\n"), e = e.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
						},
						_parseDIC: function(e) {
							function t(e, t) {
								e in r && "object" == typeof r[e] || (r[e] = []), r[e].push(t)
							}
							e = this._removeDicComments(e);
							for (var n = e.split("\n"), r = {}, i = 1, o = n.length; o > i; i++) {
								var l = n[i],
									a = l.split("/", 2),
									s = a[0];
								if (a.length > 1) {
									var c = this.parseRuleCodes(a[1]);
									"NEEDAFFIX" in this.flags && -1 != c.indexOf(this.flags.NEEDAFFIX) || t(s, c);
									for (var u = 0, d = c.length; d > u; u++) {
										var h = c[u],
											f = this.rules[h];
										if (f)
											for (var p = this._applyRule(s, f), m = 0, g = p.length; g > m; m++) {
												var v = p[m];
												if (t(v, []), f.combineable)
													for (var y = u + 1; d > y; y++) {
														var x = c[y],
															b = this.rules[x];
														if (b && b.combineable && f.type != b.type)
															for (var w = this._applyRule(v, b), k = 0, C = w.length; C > k; k++) {
																var S = w[k];
																t(S, [])
															}
													}
											}
										h in this.compoundRuleCodes && this.compoundRuleCodes[h].push(s)
									}
								} else t(s.trim(), [])
							}
							return r
						},
						_removeDicComments: function(e) {
							return e = e.replace(/^\t.*$/gm, "")
						},
						parseRuleCodes: function(e) {
							if (!e) return [];
							if (!("FLAG" in this.flags)) return e.split("");
							if ("long" === this.flags.FLAG) {
								for (var t = [], n = 0, r = e.length; r > n; n += 2) t.push(e.substr(n, 2));
								return t
							}
							return "num" === this.flags.FLAG ? textCode.split(",") : void 0
						},
						_applyRule: function(e, t) {
							for (var n = t.entries, r = [], i = 0, o = n.length; o > i; i++) {
								var l = n[i];
								if (!l.match || e.match(l.match)) {
									var a = e;
									if (l.remove && (a = a.replace(l.remove, "")), "SFX" === t.type ? a += l.add : a = l.add + a, r.push(a), "continuationClasses" in l)
										for (var s = 0, c = l.continuationClasses.length; c > s; s++) {
											var u = this.rules[l.continuationClasses[s]];
											u && (r = r.concat(this._applyRule(a, u)))
										}
								}
							}
							return r
						},
						check: function(e) {
							var t = e.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
							if (this.checkExact(t)) return !0;
							if (t.toUpperCase() === t) {
								var n = t[0] + t.substring(1).toLowerCase();
								if (this.hasFlag(n, "KEEPCASE")) return !1;
								if (this.checkExact(n)) return !0
							}
							var r = t.toLowerCase();
							if (r !== t) {
								if (this.hasFlag(r, "KEEPCASE")) return !1;
								if (this.checkExact(r)) return !0
							}
							return !1
						},
						checkExact: function(e) {
							var t = this.dictionaryTable[e];
							if ("undefined" == typeof t) {
								if ("COMPOUNDMIN" in this.flags && e.length >= this.flags.COMPOUNDMIN)
									for (var n = 0, r = this.compoundRules.length; r > n; n++)
										if (e.match(this.compoundRules[n])) return !0;
								return !1
							}
							for (var n = 0, r = t.length; r > n; n++)
								if (!this.hasFlag(e, "ONLYINCOMPOUND", t[n])) return !0;
							return !1
						},
						hasFlag: function(e, t, n) {
							if (t in this.flags) {
								if ("undefined" == typeof n) var n = Array.prototype.concat.apply([], this.dictionaryTable[e]);
								if (n && -1 !== n.indexOf(this.flags[t])) return !0
							}
							return !1
						},
						alphabet: "",
						suggest: function(e, t) {
							function n(e) {
								for (var t = [], n = 0, r = e.length; r > n; n++) {
									for (var i = e[n], o = [], l = 0, a = i.length + 1; a > l; l++) o.push([i.substring(0, l), i.substring(l, i.length)]);
									for (var s = [], l = 0, a = o.length; a > l; l++) {
										var u = o[l];
										u[1] && s.push(u[0] + u[1].substring(1))
									}
									for (var d = [], l = 0, a = o.length; a > l; l++) {
										var u = o[l];
										u[1].length > 1 && d.push(u[0] + u[1][1] + u[1][0] + u[1].substring(2))
									}
									for (var h = [], l = 0, a = o.length; a > l; l++) {
										var u = o[l];
										if (u[1])
											for (var f = 0, p = c.alphabet.length; p > f; f++) h.push(u[0] + c.alphabet[f] + u[1].substring(1))
									}
									for (var m = [], l = 0, a = o.length; a > l; l++) {
										var u = o[l];
										if (u[1])
											for (var f = 0, p = c.alphabet.length; p > f; f++) h.push(u[0] + c.alphabet[f] + u[1])
									}
									t = t.concat(s), t = t.concat(d), t = t.concat(h), t = t.concat(m)
								}
								return t
							}

							function r(e) {
								for (var t = [], n = 0; n < e.length; n++) c.check(e[n]) && t.push(e[n]);
								return t
							}

							function i(e) {
								function i(e, t) {
									return e[1] < t[1] ? -1 : 1
								}
								for (var o = n([e]), l = n(o), a = r(o).concat(r(l)), s = {}, u = 0, d = a.length; d > u; u++) a[u] in s ? s[a[u]] += 1 : s[a[u]] = 1;
								var h = [];
								for (var u in s) h.push([u, s[u]]);
								h.sort(i).reverse();
								for (var f = [], u = 0, d = Math.min(t, h.length); d > u; u++) c.hasFlag(h[u][0], "NOSUGGEST") || f.push(h[u][0]);
								return f
							}
							if (t || (t = 5), this.check(e)) return [];
							for (var o = 0, l = this.replacementTable.length; l > o; o++) {
								var a = this.replacementTable[o];
								if (-1 !== e.indexOf(a[0])) {
									var s = e.replace(a[0], a[1]);
									if (this.check(s)) return [s]
								}
							}
							var c = this;
							return c.alphabet = "abcdefghijklmnopqrstuvwxyz", i(e)
						}
					}, i("undefined" != typeof o ? o : window.Typo)
				}).call(e, void 0, void 0, void 0, void 0, function(e) {
					t.exports = e
				})
			}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
		}, {}],
		3: [function(t, n, r) {
			! function(i) {
				"object" == typeof r && "object" == typeof n ? i(t("../../lib/codemirror")) : "function" == typeof e && e.amd ? e(["../../lib/codemirror"], i) : i(CodeMirror)
			}(function(e) {
				"use strict";

				function t(e) {
					var t = e.getWrapperElement();
					e.state.fullScreenRestore = {
						scrollTop: window.pageYOffset,
						scrollLeft: window.pageXOffset,
						width: t.style.width,
						height: t.style.height
					}, t.style.width = "", t.style.height = "auto", t.className += " CodeMirror-fullscreen", document.documentElement.style.overflow = "hidden", e.refresh()
				}

				function n(e) {
					var t = e.getWrapperElement();
					t.className = t.className.replace(/\s*CodeMirror-fullscreen\b/, ""), document.documentElement.style.overflow = "";
					var n = e.state.fullScreenRestore;
					t.style.width = n.width, t.style.height = n.height, window.scrollTo(n.scrollLeft, n.scrollTop), e.refresh()
				}
				e.defineOption("fullScreen", !1, function(r, i, o) {
					o == e.Init && (o = !1), !o != !i && (i ? t(r) : n(r))
				})
			})
		}, {
			"../../lib/codemirror": 6
		}],
		4: [function(t, n, r) {
			! function(i) {
				"object" == typeof r && "object" == typeof n ? i(t("../../lib/codemirror")) : "function" == typeof e && e.amd ? e(["../../lib/codemirror"], i) : i(CodeMirror)
			}(function(e) {
				"use strict";
				var t = /^(\s*)(>[> ]*|[*+-]\s|(\d+)([.)]))(\s*)/,
					n = /^(\s*)(>[> ]*|[*+-]|(\d+)[.)])(\s*)$/,
					r = /[*+-]\s/;
				e.commands.newlineAndIndentContinueMarkdownList = function(i) {
					if (i.getOption("disableInput")) return e.Pass;
					for (var o = i.listSelections(), l = [], a = 0; a < o.length; a++) {
						var s = o[a].head,
							c = i.getStateAfter(s.line),
							u = c.list !== !1,
							d = 0 !== c.quote,
							h = i.getLine(s.line),
							f = t.exec(h);
						if (!o[a].empty() || !u && !d || !f) return void i.execCommand("newlineAndIndent");
						if (n.test(h)) i.replaceRange("", {
							line: s.line,
							ch: 0
						}, {
							line: s.line,
							ch: s.ch + 1
						}), l[a] = "\n";
						else {
							var p = f[1],
								m = f[5],
								g = r.test(f[2]) || f[2].indexOf(">") >= 0 ? f[2] : parseInt(f[3], 10) + 1 + f[4];
							l[a] = "\n" + p + g + m
						}
					}
					i.replaceSelections(l)
				}
			})
		}, {
			"../../lib/codemirror": 6
		}],
		5: [function(t, n, r) {
			! function(i) {
				"object" == typeof r && "object" == typeof n ? i(t("../../lib/codemirror")) : "function" == typeof e && e.amd ? e(["../../lib/codemirror"], i) : i(CodeMirror)
			}(function(e) {
				"use strict";
				e.overlayMode = function(t, n, r) {
					return {
						startState: function() {
							return {
								base: e.startState(t),
								overlay: e.startState(n),
								basePos: 0,
								baseCur: null,
								overlayPos: 0,
								overlayCur: null,
								streamSeen: null
							}
						},
						copyState: function(r) {
							return {
								base: e.copyState(t, r.base),
								overlay: e.copyState(n, r.overlay),
								basePos: r.basePos,
								baseCur: null,
								overlayPos: r.overlayPos,
								overlayCur: null
							}
						},
						token: function(e, i) {
							return (e != i.streamSeen || Math.min(i.basePos, i.overlayPos) < e.start) && (i.streamSeen = e, i.basePos = i.overlayPos = e.start), e.start == i.basePos && (i.baseCur = t.token(e, i.base), i.basePos = e.pos), e.start == i.overlayPos && (e.pos = e.start, i.overlayCur = n.token(e, i.overlay), i.overlayPos = e.pos), e.pos = Math.min(i.basePos, i.overlayPos), null == i.overlayCur ? i.baseCur : null != i.baseCur && i.overlay.combineTokens || r && null == i.overlay.combineTokens ? i.baseCur + " " + i.overlayCur : i.overlayCur
						},
						indent: t.indent && function(e, n) {
							return t.indent(e.base, n)
						},
						electricChars: t.electricChars,
						innerMode: function(e) {
							return {
								state: e.base,
								mode: t
							}
						},
						blankLine: function(e) {
							t.blankLine && t.blankLine(e.base), n.blankLine && n.blankLine(e.overlay)
						}
					}
				}
			})
		}, {
			"../../lib/codemirror": 6
		}],
		6: [function(t, n, r) {
			! function(t) {
				if ("object" == typeof r && "object" == typeof n) n.exports = t();
				else {
					if ("function" == typeof e && e.amd) return e([], t);
					this.CodeMirror = t()
				}
			}(function() {
				"use strict";

				function e(n, r) {
					if (!(this instanceof e)) return new e(n, r);
					this.options = r = r ? Pi(r) : {}, Pi(Qo, r, !1), f(r);
					var i = r.value;
					"string" == typeof i && (i = new kl(i, r.mode, null, r.lineSeparator)), this.doc = i;
					var o = new e.inputStyles[r.inputStyle](this),
						l = this.display = new t(n, i, o);
					l.wrapper.CodeMirror = this, c(this), a(this), r.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"), r.autofocus && !No && l.input.focus(), v(this), this.state = {
						keyMaps: [],
						overlays: [],
						modeGen: 0,
						overwrite: !1,
						delayingBlurEvent: !1,
						focused: !1,
						suppressEdits: !1,
						pasteIncoming: !1,
						cutIncoming: !1,
						selectingText: !1,
						draggingText: !1,
						highlight: new Ai,
						keySeq: null,
						specialChars: null
					};
					var s = this;
					yo && 11 > xo && setTimeout(function() {
						s.display.input.reset(!0)
					}, 20), _t(this), Ki(), xt(this), this.curOp.forceUpdate = !0, Xr(this, i), r.autofocus && !No || s.hasFocus() ? setTimeout(zi(gn, this), 20) : vn(this);
					for (var u in Jo) Jo.hasOwnProperty(u) && Jo[u](this, r[u], el);
					k(this), r.finishInit && r.finishInit(this);
					for (var d = 0; d < il.length; ++d) il[d](this);
					wt(this), bo && r.lineWrapping && "optimizelegibility" == getComputedStyle(l.lineDiv).textRendering && (l.lineDiv.style.textRendering = "auto")
				}

				function t(e, t, n) {
					var r = this;
					this.input = n, r.scrollbarFiller = _i("div", null, "CodeMirror-scrollbar-filler"), r.scrollbarFiller.setAttribute("cm-not-content", "true"), r.gutterFiller = _i("div", null, "CodeMirror-gutter-filler"), r.gutterFiller.setAttribute("cm-not-content", "true"), r.lineDiv = _i("div", null, "CodeMirror-code"), r.selectionDiv = _i("div", null, null, "position: relative; z-index: 1"), r.cursorDiv = _i("div", null, "CodeMirror-cursors"), r.measure = _i("div", null, "CodeMirror-measure"), r.lineMeasure = _i("div", null, "CodeMirror-measure"), r.lineSpace = _i("div", [r.measure, r.lineMeasure, r.selectionDiv, r.cursorDiv, r.lineDiv], null, "position: relative; outline: none"), r.mover = _i("div", [_i("div", [r.lineSpace], "CodeMirror-lines")], null, "position: relative"), r.sizer = _i("div", [r.mover], "CodeMirror-sizer"), r.sizerWidth = null, r.heightForcer = _i("div", null, null, "position: absolute; height: " + Dl + "px; width: 1px;"), r.gutters = _i("div", null, "CodeMirror-gutters"), r.lineGutter = null, r.scroller = _i("div", [r.sizer, r.heightForcer, r.gutters], "CodeMirror-scroll"), r.scroller.setAttribute("tabIndex", "-1"), r.wrapper = _i("div", [r.scrollbarFiller, r.gutterFiller, r.scroller], "CodeMirror"), yo && 8 > xo && (r.gutters.style.zIndex = -1, r.scroller.style.paddingRight = 0), bo || mo && No || (r.scroller.draggable = !0), e && (e.appendChild ? e.appendChild(r.wrapper) : e(r.wrapper)), r.viewFrom = r.viewTo = t.first, r.reportedViewFrom = r.reportedViewTo = t.first, r.view = [], r.renderedView = null, r.externalMeasured = null, r.viewOffset = 0, r.lastWrapHeight = r.lastWrapWidth = 0, r.updateLineNumbers = null, r.nativeBarWidth = r.barHeight = r.barWidth = 0, r.scrollbarsClipped = !1, r.lineNumWidth = r.lineNumInnerWidth = r.lineNumChars = null, r.alignWidgets = !1, r.cachedCharWidth = r.cachedTextHeight = r.cachedPaddingH = null, r.maxLine = null, r.maxLineLength = 0, r.maxLineChanged = !1, r.wheelDX = r.wheelDY = r.wheelStartX = r.wheelStartY = null, r.shift = !1, r.selForContextMenu = null, r.activeTouch = null, n.init(r)
				}

				function n(t) {
					t.doc.mode = e.getMode(t.options, t.doc.modeOption), r(t)
				}

				function r(e) {
					e.doc.iter(function(e) {
						e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null)
					}), e.doc.frontier = e.doc.first, Fe(e, 100), e.state.modeGen++, e.curOp && Et(e)
				}

				function i(e) {
					e.options.lineWrapping ? (Yl(e.display.wrapper, "CodeMirror-wrap"), e.display.sizer.style.minWidth = "", e.display.sizerWidth = null) : (Xl(e.display.wrapper, "CodeMirror-wrap"), h(e)), l(e), Et(e), lt(e), setTimeout(function() {
						y(e)
					}, 100)
				}

				function o(e) {
					var t = vt(e.display),
						n = e.options.lineWrapping,
						r = n && Math.max(5, e.display.scroller.clientWidth / yt(e.display) - 3);
					return function(i) {
						if (wr(e.doc, i)) return 0;
						var o = 0;
						if (i.widgets)
							for (var l = 0; l < i.widgets.length; l++) i.widgets[l].height && (o += i.widgets[l].height);
						return n ? o + (Math.ceil(i.text.length / r) || 1) * t : o + t
					}
				}

				function l(e) {
					var t = e.doc,
						n = o(e);
					t.iter(function(e) {
						var t = n(e);
						t != e.height && Jr(e, t)
					})
				}

				function a(e) {
					e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), lt(e)
				}

				function s(e) {
					c(e), Et(e), setTimeout(function() {
						w(e)
					}, 20)
				}

				function c(e) {
					var t = e.display.gutters,
						n = e.options.gutters;
					ji(t);
					for (var r = 0; r < n.length; ++r) {
						var i = n[r],
							o = t.appendChild(_i("div", null, "CodeMirror-gutter " + i));
						"CodeMirror-linenumbers" == i && (e.display.lineGutter = o, o.style.width = (e.display.lineNumWidth || 1) + "px")
					}
					t.style.display = r ? "" : "none", u(e)
				}

				function u(e) {
					var t = e.display.gutters.offsetWidth;
					e.display.sizer.style.marginLeft = t + "px"
				}

				function d(e) {
					if (0 == e.height) return 0;
					for (var t, n = e.text.length, r = e; t = pr(r);) {
						var i = t.find(0, !0);
						r = i.from.line, n += i.from.ch - i.to.ch
					}
					for (r = e; t = mr(r);) {
						var i = t.find(0, !0);
						n -= r.text.length - i.from.ch, r = i.to.line, n += r.text.length - i.to.ch
					}
					return n
				}

				function h(e) {
					var t = e.display,
						n = e.doc;
					t.maxLine = Yr(n, n.first), t.maxLineLength = d(t.maxLine), t.maxLineChanged = !0, n.iter(function(e) {
						var n = d(e);
						n > t.maxLineLength && (t.maxLineLength = n, t.maxLine = e)
					})
				}

				function f(e) {
					var t = Hi(e.gutters, "CodeMirror-linenumbers"); - 1 == t && e.lineNumbers ? e.gutters = e.gutters.concat(["CodeMirror-linenumbers"]) : t > -1 && !e.lineNumbers && (e.gutters = e.gutters.slice(0), e.gutters.splice(t, 1))
				}

				function p(e) {
					var t = e.display,
						n = t.gutters.offsetWidth,
						r = Math.round(e.doc.height + qe(e.display));
					return {
						clientHeight: t.scroller.clientHeight,
						viewHeight: t.wrapper.clientHeight,
						scrollWidth: t.scroller.scrollWidth,
						clientWidth: t.scroller.clientWidth,
						viewWidth: t.wrapper.clientWidth,
						barLeft: e.options.fixedGutter ? n : 0,
						docHeight: r,
						scrollHeight: r + Ue(e) + t.barHeight,
						nativeBarWidth: t.nativeBarWidth,
						gutterWidth: n
					}
				}

				function m(e, t, n) {
					this.cm = n;
					var r = this.vert = _i("div", [_i("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar"),
						i = this.horiz = _i("div", [_i("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
					e(r), e(i), Nl(r, "scroll", function() {
						r.clientHeight && t(r.scrollTop, "vertical")
					}), Nl(i, "scroll", function() {
						i.clientWidth && t(i.scrollLeft, "horizontal")
					}), this.checkedZeroWidth = !1, yo && 8 > xo && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px")
				}

				function g() {}

				function v(t) {
					t.display.scrollbars && (t.display.scrollbars.clear(), t.display.scrollbars.addClass && Xl(t.display.wrapper, t.display.scrollbars.addClass)), t.display.scrollbars = new e.scrollbarModel[t.options.scrollbarStyle](function(e) {
						t.display.wrapper.insertBefore(e, t.display.scrollbarFiller), Nl(e, "mousedown", function() {
							t.state.focused && setTimeout(function() {
								t.display.input.focus()
							}, 0)
						}), e.setAttribute("cm-not-content", "true")
					}, function(e, n) {
						"horizontal" == n ? rn(t, e) : nn(t, e)
					}, t), t.display.scrollbars.addClass && Yl(t.display.wrapper, t.display.scrollbars.addClass)
				}

				function y(e, t) {
					t || (t = p(e));
					var n = e.display.barWidth,
						r = e.display.barHeight;
					x(e, t);
					for (var i = 0; 4 > i && n != e.display.barWidth || r != e.display.barHeight; i++) n != e.display.barWidth && e.options.lineWrapping && W(e), x(e, p(e)), n = e.display.barWidth, r = e.display.barHeight
				}

				function x(e, t) {
					var n = e.display,
						r = n.scrollbars.update(t);
					n.sizer.style.paddingRight = (n.barWidth = r.right) + "px", n.sizer.style.paddingBottom = (n.barHeight = r.bottom) + "px", r.right && r.bottom ? (n.scrollbarFiller.style.display = "block", n.scrollbarFiller.style.height = r.bottom + "px", n.scrollbarFiller.style.width = r.right + "px") : n.scrollbarFiller.style.display = "", r.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter ? (n.gutterFiller.style.display = "block", n.gutterFiller.style.height = r.bottom + "px", n.gutterFiller.style.width = t.gutterWidth + "px") : n.gutterFiller.style.display = ""
				}

				function b(e, t, n) {
					var r = n && null != n.top ? Math.max(0, n.top) : e.scroller.scrollTop;
					r = Math.floor(r - je(e));
					var i = n && null != n.bottom ? n.bottom : r + e.wrapper.clientHeight,
						o = ti(t, r),
						l = ti(t, i);
					if (n && n.ensure) {
						var a = n.ensure.from.line,
							s = n.ensure.to.line;
						o > a ? (o = a, l = ti(t, ni(Yr(t, a)) + e.wrapper.clientHeight)) : Math.min(s, t.lastLine()) >= l && (o = ti(t, ni(Yr(t, s)) - e.wrapper.clientHeight), l = s)
					}
					return {
						from: o,
						to: Math.max(l, o + 1)
					}
				}

				function w(e) {
					var t = e.display,
						n = t.view;
					if (t.alignWidgets || t.gutters.firstChild && e.options.fixedGutter) {
						for (var r = S(t) - t.scroller.scrollLeft + e.doc.scrollLeft, i = t.gutters.offsetWidth, o = r + "px", l = 0; l < n.length; l++)
							if (!n[l].hidden) {
								e.options.fixedGutter && n[l].gutter && (n[l].gutter.style.left = o);
								var a = n[l].alignable;
								if (a)
									for (var s = 0; s < a.length; s++) a[s].style.left = o
							}
						e.options.fixedGutter && (t.gutters.style.left = r + i + "px")
					}
				}

				function k(e) {
					if (!e.options.lineNumbers) return !1;
					var t = e.doc,
						n = C(e.options, t.first + t.size - 1),
						r = e.display;
					if (n.length != r.lineNumChars) {
						var i = r.measure.appendChild(_i("div", [_i("div", n)], "CodeMirror-linenumber CodeMirror-gutter-elt")),
							o = i.firstChild.offsetWidth,
							l = i.offsetWidth - o;
						return r.lineGutter.style.width = "", r.lineNumInnerWidth = Math.max(o, r.lineGutter.offsetWidth - l) + 1, r.lineNumWidth = r.lineNumInnerWidth + l, r.lineNumChars = r.lineNumInnerWidth ? n.length : -1, r.lineGutter.style.width = r.lineNumWidth + "px", u(e), !0
					}
					return !1
				}

				function C(e, t) {
					return String(e.lineNumberFormatter(t + e.firstLineNumber))
				}

				function S(e) {
					return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left
				}

				function L(e, t, n) {
					var r = e.display;
					this.viewport = t, this.visible = b(r, e.doc, t), this.editorIsHidden = !r.wrapper.offsetWidth, this.wrapperHeight = r.wrapper.clientHeight, this.wrapperWidth = r.wrapper.clientWidth, this.oldDisplayWidth = $e(e), this.force = n, this.dims = D(e), this.events = []
				}

				function T(e) {
					var t = e.display;
					!t.scrollbarsClipped && t.scroller.offsetWidth && (t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth, t.heightForcer.style.height = Ue(e) + "px", t.sizer.style.marginBottom = -t.nativeBarWidth + "px", t.sizer.style.borderRightWidth = Ue(e) + "px", t.scrollbarsClipped = !0)
				}

				function M(e, t) {
					var n = e.display,
						r = e.doc;
					if (t.editorIsHidden) return Pt(e), !1;
					if (!t.force && t.visible.from >= n.viewFrom && t.visible.to <= n.viewTo && (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo) && n.renderedView == n.view && 0 == Bt(e)) return !1;
					k(e) && (Pt(e), t.dims = D(e));
					var i = r.first + r.size,
						o = Math.max(t.visible.from - e.options.viewportMargin, r.first),
						l = Math.min(i, t.visible.to + e.options.viewportMargin);
					n.viewFrom < o && o - n.viewFrom < 20 && (o = Math.max(r.first, n.viewFrom)), n.viewTo > l && n.viewTo - l < 20 && (l = Math.min(i, n.viewTo)), Io && (o = xr(e.doc, o), l = br(e.doc, l));
					var a = o != n.viewFrom || l != n.viewTo || n.lastWrapHeight != t.wrapperHeight || n.lastWrapWidth != t.wrapperWidth;
					Rt(e, o, l), n.viewOffset = ni(Yr(e.doc, n.viewFrom)), e.display.mover.style.top = n.viewOffset + "px";
					var s = Bt(e);
					if (!a && 0 == s && !t.force && n.renderedView == n.view && (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo)) return !1;
					var c = Gi();
					return s > 4 && (n.lineDiv.style.display = "none"), E(e, n.updateLineNumbers, t.dims), s > 4 && (n.lineDiv.style.display = ""), n.renderedView = n.view, c && Gi() != c && c.offsetHeight && c.focus(), ji(n.cursorDiv), ji(n.selectionDiv), n.gutters.style.height = n.sizer.style.minHeight = 0, a && (n.lastWrapHeight = t.wrapperHeight, n.lastWrapWidth = t.wrapperWidth, Fe(e, 400)), n.updateLineNumbers = null, !0
				}

				function N(e, t) {
					for (var n = t.viewport, r = !0;
						(r && e.options.lineWrapping && t.oldDisplayWidth != $e(e) || (n && null != n.top && (n = {
							top: Math.min(e.doc.height + qe(e.display) - Ve(e), n.top)
						}), t.visible = b(e.display, e.doc, n), !(t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo))) && M(e, t); r = !1) {
						W(e);
						var i = p(e);
						De(e), O(e, i), y(e, i)
					}
					t.signal(e, "update", e), (e.display.viewFrom != e.display.reportedViewFrom || e.display.viewTo != e.display.reportedViewTo) && (t.signal(e, "viewportChange", e, e.display.viewFrom, e.display.viewTo), e.display.reportedViewFrom = e.display.viewFrom, e.display.reportedViewTo = e.display.viewTo)
				}

				function A(e, t) {
					var n = new L(e, t);
					if (M(e, n)) {
						W(e), N(e, n);
						var r = p(e);
						De(e), O(e, r), y(e, r), n.finish()
					}
				}

				function O(e, t) {
					e.display.sizer.style.minHeight = t.docHeight + "px";
					var n = t.docHeight + e.display.barHeight;
					e.display.heightForcer.style.top = n + "px", e.display.gutters.style.height = Math.max(n + Ue(e), t.clientHeight) + "px"
				}

				function W(e) {
					for (var t = e.display, n = t.lineDiv.offsetTop, r = 0; r < t.view.length; r++) {
						var i, o = t.view[r];
						if (!o.hidden) {
							if (yo && 8 > xo) {
								var l = o.node.offsetTop + o.node.offsetHeight;
								i = l - n, n = l
							} else {
								var a = o.node.getBoundingClientRect();
								i = a.bottom - a.top
							}
							var s = o.line.height - i;
							if (2 > i && (i = vt(t)), (s > .001 || -.001 > s) && (Jr(o.line, i), H(o.line), o.rest))
								for (var c = 0; c < o.rest.length; c++) H(o.rest[c])
						}
					}
				}

				function H(e) {
					if (e.widgets)
						for (var t = 0; t < e.widgets.length; ++t) e.widgets[t].height = e.widgets[t].node.offsetHeight
				}

				function D(e) {
					for (var t = e.display, n = {}, r = {}, i = t.gutters.clientLeft, o = t.gutters.firstChild, l = 0; o; o = o.nextSibling, ++l) n[e.options.gutters[l]] = o.offsetLeft + o.clientLeft + i, r[e.options.gutters[l]] = o.clientWidth;
					return {
						fixedPos: S(t),
						gutterTotalWidth: t.gutters.offsetWidth,
						gutterLeft: n,
						gutterWidth: r,
						wrapperWidth: t.wrapper.clientWidth
					}
				}

				function E(e, t, n) {
					function r(t) {
						var n = t.nextSibling;
						return bo && Ao && e.display.currentWheelTarget == t ? t.style.display = "none" : t.parentNode.removeChild(t), n
					}
					for (var i = e.display, o = e.options.lineNumbers, l = i.lineDiv, a = l.firstChild, s = i.view, c = i.viewFrom, u = 0; u < s.length; u++) {
						var d = s[u];
						if (d.hidden);
						else if (d.node && d.node.parentNode == l) {
							for (; a != d.node;) a = r(a);
							var h = o && null != t && c >= t && d.lineNumber;
							d.changes && (Hi(d.changes, "gutter") > -1 && (h = !1), I(e, d, c, n)), h && (ji(d.lineNumber), d.lineNumber.appendChild(document.createTextNode(C(e.options, c)))), a = d.node.nextSibling
						} else {
							var f = q(e, d, c, n);
							l.insertBefore(f, a)
						}
						c += d.size
					}
					for (; a;) a = r(a)
				}

				function I(e, t, n, r) {
					for (var i = 0; i < t.changes.length; i++) {
						var o = t.changes[i];
						"text" == o ? R(e, t) : "gutter" == o ? _(e, t, n, r) : "class" == o ? B(t) : "widget" == o && j(e, t, r)
					}
					t.changes = null
				}

				function P(e) {
					return e.node == e.text && (e.node = _i("div", null, null, "position: relative"), e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text), e.node.appendChild(e.text), yo && 8 > xo && (e.node.style.zIndex = 2)), e.node
				}

				function z(e) {
					var t = e.bgClass ? e.bgClass + " " + (e.line.bgClass || "") : e.line.bgClass;
					if (t && (t += " CodeMirror-linebackground"), e.background) t ? e.background.className = t : (e.background.parentNode.removeChild(e.background), e.background = null);
					else if (t) {
						var n = P(e);
						e.background = n.insertBefore(_i("div", null, t), n.firstChild)
					}
				}

				function F(e, t) {
					var n = e.display.externalMeasured;
					return n && n.line == t.line ? (e.display.externalMeasured = null, t.measure = n.measure, n.built) : zr(e, t)
				}

				function R(e, t) {
					var n = t.text.className,
						r = F(e, t);
					t.text == t.node && (t.node = r.pre), t.text.parentNode.replaceChild(r.pre, t.text), t.text = r.pre, r.bgClass != t.bgClass || r.textClass != t.textClass ? (t.bgClass = r.bgClass, t.textClass = r.textClass, B(t)) : n && (t.text.className = n)
				}

				function B(e) {
					z(e), e.line.wrapClass ? P(e).className = e.line.wrapClass : e.node != e.text && (e.node.className = "");
					var t = e.textClass ? e.textClass + " " + (e.line.textClass || "") : e.line.textClass;
					e.text.className = t || ""
				}

				function _(e, t, n, r) {
					if (t.gutter && (t.node.removeChild(t.gutter), t.gutter = null), t.gutterBackground && (t.node.removeChild(t.gutterBackground), t.gutterBackground = null), t.line.gutterClass) {
						var i = P(t);
						t.gutterBackground = _i("div", null, "CodeMirror-gutter-background " + t.line.gutterClass, "left: " + (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px; width: " + r.gutterTotalWidth + "px"), i.insertBefore(t.gutterBackground, t.text)
					}
					var o = t.line.gutterMarkers;
					if (e.options.lineNumbers || o) {
						var i = P(t),
							l = t.gutter = _i("div", null, "CodeMirror-gutter-wrapper", "left: " + (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px");
						if (e.display.input.setUneditable(l), i.insertBefore(l, t.text), t.line.gutterClass && (l.className += " " + t.line.gutterClass), !e.options.lineNumbers || o && o["CodeMirror-linenumbers"] || (t.lineNumber = l.appendChild(_i("div", C(e.options, n), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + r.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + e.display.lineNumInnerWidth + "px"))), o)
							for (var a = 0; a < e.options.gutters.length; ++a) {
								var s = e.options.gutters[a],
									c = o.hasOwnProperty(s) && o[s];
								c && l.appendChild(_i("div", [c], "CodeMirror-gutter-elt", "left: " + r.gutterLeft[s] + "px; width: " + r.gutterWidth[s] + "px"))
							}
					}
				}

				function j(e, t, n) {
					t.alignable && (t.alignable = null);
					for (var r, i = t.node.firstChild; i; i = r) {
						var r = i.nextSibling;
						"CodeMirror-linewidget" == i.className && t.node.removeChild(i)
					}
					G(e, t, n)
				}

				function q(e, t, n, r) {
					var i = F(e, t);
					return t.text = t.node = i.pre, i.bgClass && (t.bgClass = i.bgClass), i.textClass && (t.textClass = i.textClass), B(t), _(e, t, n, r), G(e, t, r), t.node
				}

				function G(e, t, n) {
					if (U(e, t.line, t, n, !0), t.rest)
						for (var r = 0; r < t.rest.length; r++) U(e, t.rest[r], t, n, !1)
				}

				function U(e, t, n, r, i) {
					if (t.widgets)
						for (var o = P(n), l = 0, a = t.widgets; l < a.length; ++l) {
							var s = a[l],
								c = _i("div", [s.node], "CodeMirror-linewidget");
							s.handleMouseEvents || c.setAttribute("cm-ignore-events", "true"), $(s, c, n, r), e.display.input.setUneditable(c), i && s.above ? o.insertBefore(c, n.gutter || n.text) : o.appendChild(c), Ci(s, "redraw")
						}
				}

				function $(e, t, n, r) {
					if (e.noHScroll) {
						(n.alignable || (n.alignable = [])).push(t);
						var i = r.wrapperWidth;
						t.style.left = r.fixedPos + "px", e.coverGutter || (i -= r.gutterTotalWidth, t.style.paddingLeft = r.gutterTotalWidth + "px"), t.style.width = i + "px"
					}
					e.coverGutter && (t.style.zIndex = 5, t.style.position = "relative", e.noHScroll || (t.style.marginLeft = -r.gutterTotalWidth + "px"))
				}

				function V(e) {
					return Po(e.line, e.ch)
				}

				function K(e, t) {
					return zo(e, t) < 0 ? t : e
				}

				function X(e, t) {
					return zo(e, t) < 0 ? e : t
				}

				function Y(e) {
					e.state.focused || (e.display.input.focus(), gn(e))
				}

				function Z(e) {
					return e.options.readOnly || e.doc.cantEdit
				}

				function Q(e, t, n, r, i) {
					var o = e.doc;
					e.display.shift = !1, r || (r = o.sel);
					var l = e.state.pasteIncoming || "paste" == i,
						a = o.splitLines(t),
						s = null;
					if (l && r.ranges.length > 1)
						if (Fo && Fo.join("\n") == t) {
							if (r.ranges.length % Fo.length == 0) {
								s = [];
								for (var c = 0; c < Fo.length; c++) s.push(o.splitLines(Fo[c]))
							}
						} else a.length == r.ranges.length && (s = Di(a, function(e) {
							return [e]
						}));
					for (var c = r.ranges.length - 1; c >= 0; c--) {
						var u = r.ranges[c],
							d = u.from(),
							h = u.to();
						u.empty() && (n && n > 0 ? d = Po(d.line, d.ch - n) : e.state.overwrite && !l && (h = Po(h.line, Math.min(Yr(o, h.line).text.length, h.ch + Wi(a).length))));
						var f = e.curOp.updateInput,
							p = {
								from: d,
								to: h,
								text: s ? s[c % s.length] : a,
								origin: i || (l ? "paste" : e.state.cutIncoming ? "cut" : "+input")
							};
						Ln(e.doc, p), Ci(e, "inputRead", e, p)
					}
					t && !l && ee(e, t), zn(e), e.curOp.updateInput = f, e.curOp.typing = !0, e.state.pasteIncoming = e.state.cutIncoming = !1
				}

				function J(e, t) {
					var n = e.clipboardData && e.clipboardData.getData("text/plain");
					return n ? (e.preventDefault(), Z(t) || t.options.disableInput || Nt(t, function() {
						Q(t, n, 0, null, "paste")
					}), !0) : void 0
				}

				function ee(e, t) {
					if (e.options.electricChars && e.options.smartIndent)
						for (var n = e.doc.sel, r = n.ranges.length - 1; r >= 0; r--) {
							var i = n.ranges[r];
							if (!(i.head.ch > 100 || r && n.ranges[r - 1].head.line == i.head.line)) {
								var o = e.getModeAt(i.head),
									l = !1;
								if (o.electricChars) {
									for (var a = 0; a < o.electricChars.length; a++)
										if (t.indexOf(o.electricChars.charAt(a)) > -1) {
											l = Rn(e, i.head.line, "smart");
											break
										}
								} else o.electricInput && o.electricInput.test(Yr(e.doc, i.head.line).text.slice(0, i.head.ch)) && (l = Rn(e, i.head.line, "smart"));
								l && Ci(e, "electricInput", e, i.head.line)
							}
						}
				}

				function te(e) {
					for (var t = [], n = [], r = 0; r < e.doc.sel.ranges.length; r++) {
						var i = e.doc.sel.ranges[r].head.line,
							o = {
								anchor: Po(i, 0),
								head: Po(i + 1, 0)
							};
						n.push(o), t.push(e.getRange(o.anchor, o.head))
					}
					return {
						text: t,
						ranges: n
					}
				}

				function ne(e) {
					e.setAttribute("autocorrect", "off"), e.setAttribute("autocapitalize", "off"), e.setAttribute("spellcheck", "false")
				}

				function re(e) {
					this.cm = e, this.prevInput = "", this.pollingFast = !1, this.polling = new Ai, this.inaccurateSelection = !1, this.hasSelection = !1, this.composing = null
				}

				function ie() {
					var e = _i("textarea", null, null, "position: absolute; padding: 0; width: 1px; height: 1em; outline: none"),
						t = _i("div", [e], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
					return bo ? e.style.width = "1000px" : e.setAttribute("wrap", "off"), Mo && (e.style.border = "1px solid black"), ne(e), t
				}

				function oe(e) {
					this.cm = e, this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null, this.polling = new Ai, this.gracePeriod = !1
				}

				function le(e, t) {
					var n = Qe(e, t.line);
					if (!n || n.hidden) return null;
					var r = Yr(e.doc, t.line),
						i = Xe(n, r, t.line),
						o = ri(r),
						l = "left";
					if (o) {
						var a = so(o, t.ch);
						l = a % 2 ? "right" : "left"
					}
					var s = tt(i.map, t.ch, l);
					return s.offset = "right" == s.collapse ? s.end : s.start, s
				}

				function ae(e, t) {
					return t && (e.bad = !0), e
				}

				function se(e, t, n) {
					var r;
					if (t == e.display.lineDiv) {
						if (r = e.display.lineDiv.childNodes[n], !r) return ae(e.clipPos(Po(e.display.viewTo - 1)), !0);
						t = null, n = 0
					} else
						for (r = t;; r = r.parentNode) {
							if (!r || r == e.display.lineDiv) return null;
							if (r.parentNode && r.parentNode == e.display.lineDiv) break
						}
					for (var i = 0; i < e.display.view.length; i++) {
						var o = e.display.view[i];
						if (o.node == r) return ce(o, t, n)
					}
				}

				function ce(e, t, n) {
					function r(t, n, r) {
						for (var i = -1; i < (u ? u.length : 0); i++)
							for (var o = 0 > i ? c.map : u[i], l = 0; l < o.length; l += 3) {
								var a = o[l + 2];
								if (a == t || a == n) {
									var s = ei(0 > i ? e.line : e.rest[i]),
										d = o[l] + r;
									return (0 > r || a != t) && (d = o[l + (r ? 1 : 0)]), Po(s, d)
								}
							}
					}
					var i = e.text.firstChild,
						o = !1;
					if (!t || !$l(i, t)) return ae(Po(ei(e.line), 0), !0);
					if (t == i && (o = !0, t = i.childNodes[n], n = 0, !t)) {
						var l = e.rest ? Wi(e.rest) : e.line;
						return ae(Po(ei(l), l.text.length), o)
					}
					var a = 3 == t.nodeType ? t : null,
						s = t;
					for (a || 1 != t.childNodes.length || 3 != t.firstChild.nodeType || (a = t.firstChild, n && (n = a.nodeValue.length)); s.parentNode != i;) s = s.parentNode;
					var c = e.measure,
						u = c.maps,
						d = r(a, s, n);
					if (d) return ae(d, o);
					for (var h = s.nextSibling, f = a ? a.nodeValue.length - n : 0; h; h = h.nextSibling) {
						if (d = r(h, h.firstChild, 0)) return ae(Po(d.line, d.ch - f), o);
						f += h.textContent.length
					}
					for (var p = s.previousSibling, f = n; p; p = p.previousSibling) {
						if (d = r(p, p.firstChild, -1)) return ae(Po(d.line, d.ch + f), o);
						f += h.textContent.length
					}
				}

				function ue(e, t, n, r, i) {
					function o(e) {
						return function(t) {
							return t.id == e
						}
					}

					function l(t) {
						if (1 == t.nodeType) {
							var n = t.getAttribute("cm-text");
							if (null != n) return "" == n && (n = t.textContent.replace(/\u200b/g, "")), void(a += n);
							var u, d = t.getAttribute("cm-marker");
							if (d) {
								var h = e.findMarks(Po(r, 0), Po(i + 1, 0), o(+d));
								return void(h.length && (u = h[0].find()) && (a += Zr(e.doc, u.from, u.to).join(c)))
							}
							if ("false" == t.getAttribute("contenteditable")) return;
							for (var f = 0; f < t.childNodes.length; f++) l(t.childNodes[f]);
							/^(pre|div|p)$/i.test(t.nodeName) && (s = !0)
						} else if (3 == t.nodeType) {
							var p = t.nodeValue;
							if (!p) return;
							s && (a += c, s = !1), a += p
						}
					}
					for (var a = "", s = !1, c = e.doc.lineSeparator(); l(t), t != n;) t = t.nextSibling;
					return a
				}

				function de(e, t) {
					this.ranges = e, this.primIndex = t
				}

				function he(e, t) {
					this.anchor = e, this.head = t
				}

				function fe(e, t) {
					var n = e[t];
					e.sort(function(e, t) {
						return zo(e.from(), t.from())
					}), t = Hi(e, n);
					for (var r = 1; r < e.length; r++) {
						var i = e[r],
							o = e[r - 1];
						if (zo(o.to(), i.from()) >= 0) {
							var l = X(o.from(), i.from()),
								a = K(o.to(), i.to()),
								s = o.empty() ? i.from() == i.head : o.from() == o.head;
							t >= r && --t, e.splice(--r, 2, new he(s ? a : l, s ? l : a))
						}
					}
					return new de(e, t)
				}

				function pe(e, t) {
					return new de([new he(e, t || e)], 0)
				}

				function me(e, t) {
					return Math.max(e.first, Math.min(t, e.first + e.size - 1))
				}

				function ge(e, t) {
					if (t.line < e.first) return Po(e.first, 0);
					var n = e.first + e.size - 1;
					return t.line > n ? Po(n, Yr(e, n).text.length) : ve(t, Yr(e, t.line).text.length)
				}

				function ve(e, t) {
					var n = e.ch;
					return null == n || n > t ? Po(e.line, t) : 0 > n ? Po(e.line, 0) : e
				}

				function ye(e, t) {
					return t >= e.first && t < e.first + e.size
				}

				function xe(e, t) {
					for (var n = [], r = 0; r < t.length; r++) n[r] = ge(e, t[r]);
					return n
				}

				function be(e, t, n, r) {
					if (e.cm && e.cm.display.shift || e.extend) {
						var i = t.anchor;
						if (r) {
							var o = zo(n, i) < 0;
							o != zo(r, i) < 0 ? (i = n, n = r) : o != zo(n, r) < 0 && (n = r)
						}
						return new he(i, n)
					}
					return new he(r || n, n)
				}

				function we(e, t, n, r) {
					Me(e, new de([be(e, e.sel.primary(), t, n)], 0), r)
				}

				function ke(e, t, n) {
					for (var r = [], i = 0; i < e.sel.ranges.length; i++) r[i] = be(e, e.sel.ranges[i], t[i], null);
					var o = fe(r, e.sel.primIndex);
					Me(e, o, n)
				}

				function Ce(e, t, n, r) {
					var i = e.sel.ranges.slice(0);
					i[t] = n, Me(e, fe(i, e.sel.primIndex), r)
				}

				function Se(e, t, n, r) {
					Me(e, pe(t, n), r)
				}

				function Le(e, t) {
					var n = {
						ranges: t.ranges,
						update: function(t) {
							this.ranges = [];
							for (var n = 0; n < t.length; n++) this.ranges[n] = new he(ge(e, t[n].anchor), ge(e, t[n].head))
						}
					};
					return Wl(e, "beforeSelectionChange", e, n), e.cm && Wl(e.cm, "beforeSelectionChange", e.cm, n), n.ranges != t.ranges ? fe(n.ranges, n.ranges.length - 1) : t
				}

				function Te(e, t, n) {
					var r = e.history.done,
						i = Wi(r);
					i && i.ranges ? (r[r.length - 1] = t, Ne(e, t, n)) : Me(e, t, n)
				}

				function Me(e, t, n) {
					Ne(e, t, n), ui(e, e.sel, e.cm ? e.cm.curOp.id : NaN, n)
				}

				function Ne(e, t, n) {
					(Mi(e, "beforeSelectionChange") || e.cm && Mi(e.cm, "beforeSelectionChange")) && (t = Le(e, t));
					var r = n && n.bias || (zo(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
					Ae(e, We(e, t, r, !0)), n && n.scroll === !1 || !e.cm || zn(e.cm)
				}

				function Ae(e, t) {
					t.equals(e.sel) || (e.sel = t, e.cm && (e.cm.curOp.updateInput = e.cm.curOp.selectionChanged = !0, Ti(e.cm)), Ci(e, "cursorActivity", e))
				}

				function Oe(e) {
					Ae(e, We(e, e.sel, null, !1), Il)
				}

				function We(e, t, n, r) {
					for (var i, o = 0; o < t.ranges.length; o++) {
						var l = t.ranges[o],
							a = He(e, l.anchor, n, r),
							s = He(e, l.head, n, r);
						(i || a != l.anchor || s != l.head) && (i || (i = t.ranges.slice(0, o)), i[o] = new he(a, s))
					}
					return i ? fe(i, t.primIndex) : t
				}

				function He(e, t, n, r) {
					var i = !1,
						o = t,
						l = n || 1;
					e.cantEdit = !1;
					e: for (;;) {
						var a = Yr(e, o.line);
						if (a.markedSpans)
							for (var s = 0; s < a.markedSpans.length; ++s) {
								var c = a.markedSpans[s],
									u = c.marker;
								if ((null == c.from || (u.inclusiveLeft ? c.from <= o.ch : c.from < o.ch)) && (null == c.to || (u.inclusiveRight ? c.to >= o.ch : c.to > o.ch))) {
									if (r && (Wl(u, "beforeCursorEnter"), u.explicitlyCleared)) {
										if (a.markedSpans) {
											--s;
											continue
										}
										break
									}
									if (!u.atomic) continue;
									var d = u.find(0 > l ? -1 : 1);
									if (0 == zo(d, o) && (d.ch += l, d.ch < 0 ? d = d.line > e.first ? ge(e, Po(d.line - 1)) : null : d.ch > a.text.length && (d = d.line < e.first + e.size - 1 ? Po(d.line + 1, 0) : null), !d)) {
										if (i) return r ? (e.cantEdit = !0, Po(e.first, 0)) : He(e, t, n, !0);
										i = !0, d = t, l = -l
									}
									o = d;
									continue e
								}
							}
						return o
					}
				}

				function De(e) {
					e.display.input.showSelection(e.display.input.prepareSelection())
				}

				function Ee(e, t) {
					for (var n = e.doc, r = {}, i = r.cursors = document.createDocumentFragment(), o = r.selection = document.createDocumentFragment(), l = 0; l < n.sel.ranges.length; l++)
						if (t !== !1 || l != n.sel.primIndex) {
							var a = n.sel.ranges[l],
								s = a.empty();
							(s || e.options.showCursorWhenSelecting) && Ie(e, a.head, i), s || Pe(e, a, o)
						}
					return r
				}

				function Ie(e, t, n) {
					var r = ht(e, t, "div", null, null, !e.options.singleCursorHeightPerLine),
						i = n.appendChild(_i("div", " ", "CodeMirror-cursor"));
					if (i.style.left = r.left + "px", i.style.top = r.top + "px", i.style.height = Math.max(0, r.bottom - r.top) * e.options.cursorHeight + "px", r.other) {
						var o = n.appendChild(_i("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"));
						o.style.display = "", o.style.left = r.other.left + "px", o.style.top = r.other.top + "px", o.style.height = .85 * (r.other.bottom - r.other.top) + "px"
					}
				}

				function Pe(e, t, n) {
					function r(e, t, n, r) {
						0 > t && (t = 0), t = Math.round(t), r = Math.round(r), a.appendChild(_i("div", null, "CodeMirror-selected", "position: absolute; left: " + e + "px; top: " + t + "px; width: " + (null == n ? u - e : n) + "px; height: " + (r - t) + "px"))
					}

					function i(t, n, i) {
						function o(n, r) {
							return dt(e, Po(t, n), "div", d, r)
						}
						var a, s, d = Yr(l, t),
							h = d.text.length;
						return Ji(ri(d), n || 0, null == i ? h : i, function(e, t, l) {
							var d, f, p, m = o(e, "left");
							if (e == t) d = m, f = p = m.left;
							else {
								if (d = o(t - 1, "right"), "rtl" == l) {
									var g = m;
									m = d, d = g
								}
								f = m.left, p = d.right
							}
							null == n && 0 == e && (f = c), d.top - m.top > 3 && (r(f, m.top, null, m.bottom), f = c, m.bottom < d.top && r(f, m.bottom, null, d.top)), null == i && t == h && (p = u), (!a || m.top < a.top || m.top == a.top && m.left < a.left) && (a = m), (!s || d.bottom > s.bottom || d.bottom == s.bottom && d.right > s.right) && (s = d), c + 1 > f && (f = c), r(f, d.top, p - f, d.bottom)
						}), {
							start: a,
							end: s
						}
					}
					var o = e.display,
						l = e.doc,
						a = document.createDocumentFragment(),
						s = Ge(e.display),
						c = s.left,
						u = Math.max(o.sizerWidth, $e(e) - o.sizer.offsetLeft) - s.right,
						d = t.from(),
						h = t.to();
					if (d.line == h.line) i(d.line, d.ch, h.ch);
					else {
						var f = Yr(l, d.line),
							p = Yr(l, h.line),
							m = vr(f) == vr(p),
							g = i(d.line, d.ch, m ? f.text.length + 1 : null).end,
							v = i(h.line, m ? 0 : null, h.ch).start;
						m && (g.top < v.top - 2 ? (r(g.right, g.top, null, g.bottom), r(c, v.top, v.left, v.bottom)) : r(g.right, g.top, v.left - g.right, g.bottom)), g.bottom < v.top && r(c, g.bottom, null, v.top)
					}
					n.appendChild(a)
				}

				function ze(e) {
					if (e.state.focused) {
						var t = e.display;
						clearInterval(t.blinker);
						var n = !0;
						t.cursorDiv.style.visibility = "", e.options.cursorBlinkRate > 0 ? t.blinker = setInterval(function() {
							t.cursorDiv.style.visibility = (n = !n) ? "" : "hidden"
						}, e.options.cursorBlinkRate) : e.options.cursorBlinkRate < 0 && (t.cursorDiv.style.visibility = "hidden")
					}
				}

				function Fe(e, t) {
					e.doc.mode.startState && e.doc.frontier < e.display.viewTo && e.state.highlight.set(t, zi(Re, e))
				}

				function Re(e) {
					var t = e.doc;
					if (t.frontier < t.first && (t.frontier = t.first), !(t.frontier >= e.display.viewTo)) {
						var n = +new Date + e.options.workTime,
							r = ll(t.mode, _e(e, t.frontier)),
							i = [];
						t.iter(t.frontier, Math.min(t.first + t.size, e.display.viewTo + 500), function(o) {
							if (t.frontier >= e.display.viewFrom) {
								var l = o.styles,
									a = o.text.length > e.options.maxHighlightLength,
									s = Dr(e, o, a ? ll(t.mode, r) : r, !0);
								o.styles = s.styles;
								var c = o.styleClasses,
									u = s.classes;
								u ? o.styleClasses = u : c && (o.styleClasses = null);
								for (var d = !l || l.length != o.styles.length || c != u && (!c || !u || c.bgClass != u.bgClass || c.textClass != u.textClass), h = 0; !d && h < l.length; ++h) d = l[h] != o.styles[h];
								d && i.push(t.frontier), o.stateAfter = a ? r : ll(t.mode, r)
							} else o.text.length <= e.options.maxHighlightLength && Ir(e, o.text, r), o.stateAfter = t.frontier % 5 == 0 ? ll(t.mode, r) : null;
							return ++t.frontier, +new Date > n ? (Fe(e, e.options.workDelay), !0) : void 0
						}), i.length && Nt(e, function() {
							for (var t = 0; t < i.length; t++) It(e, i[t], "text")
						})
					}
				}

				function Be(e, t, n) {
					for (var r, i, o = e.doc, l = n ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100), a = t; a > l; --a) {
						if (a <= o.first) return o.first;
						var s = Yr(o, a - 1);
						if (s.stateAfter && (!n || a <= o.frontier)) return a;
						var c = Fl(s.text, null, e.options.tabSize);
						(null == i || r > c) && (i = a - 1, r = c)
					}
					return i
				}

				function _e(e, t, n) {
					var r = e.doc,
						i = e.display;
					if (!r.mode.startState) return !0;
					var o = Be(e, t, n),
						l = o > r.first && Yr(r, o - 1).stateAfter;
					return l = l ? ll(r.mode, l) : al(r.mode), r.iter(o, t, function(n) {
						Ir(e, n.text, l);
						var a = o == t - 1 || o % 5 == 0 || o >= i.viewFrom && o < i.viewTo;
						n.stateAfter = a ? ll(r.mode, l) : null, ++o
					}), n && (r.frontier = o), l
				}

				function je(e) {
					return e.lineSpace.offsetTop
				}

				function qe(e) {
					return e.mover.offsetHeight - e.lineSpace.offsetHeight
				}

				function Ge(e) {
					if (e.cachedPaddingH) return e.cachedPaddingH;
					var t = qi(e.measure, _i("pre", "x")),
						n = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle,
						r = {
							left: parseInt(n.paddingLeft),
							right: parseInt(n.paddingRight)
						};
					return isNaN(r.left) || isNaN(r.right) || (e.cachedPaddingH = r), r
				}

				function Ue(e) {
					return Dl - e.display.nativeBarWidth
				}

				function $e(e) {
					return e.display.scroller.clientWidth - Ue(e) - e.display.barWidth
				}

				function Ve(e) {
					return e.display.scroller.clientHeight - Ue(e) - e.display.barHeight
				}

				function Ke(e, t, n) {
					var r = e.options.lineWrapping,
						i = r && $e(e);
					if (!t.measure.heights || r && t.measure.width != i) {
						var o = t.measure.heights = [];
						if (r) {
							t.measure.width = i;
							for (var l = t.text.firstChild.getClientRects(), a = 0; a < l.length - 1; a++) {
								var s = l[a],
									c = l[a + 1];
								Math.abs(s.bottom - c.bottom) > 2 && o.push((s.bottom + c.top) / 2 - n.top)
							}
						}
						o.push(n.bottom - n.top)
					}
				}

				function Xe(e, t, n) {
					if (e.line == t) return {
						map: e.measure.map,
						cache: e.measure.cache
					};
					for (var r = 0; r < e.rest.length; r++)
						if (e.rest[r] == t) return {
							map: e.measure.maps[r],
							cache: e.measure.caches[r]
						};
					for (var r = 0; r < e.rest.length; r++)
						if (ei(e.rest[r]) > n) return {
							map: e.measure.maps[r],
							cache: e.measure.caches[r],
							before: !0
						}
				}

				function Ye(e, t) {
					t = vr(t);
					var n = ei(t),
						r = e.display.externalMeasured = new Ht(e.doc, t, n);
					r.lineN = n;
					var i = r.built = zr(e, r);
					return r.text = i.pre, qi(e.display.lineMeasure, i.pre), r
				}

				function Ze(e, t, n, r) {
					return et(e, Je(e, t), n, r)
				}

				function Qe(e, t) {
					if (t >= e.display.viewFrom && t < e.display.viewTo) return e.display.view[zt(e, t)];
					var n = e.display.externalMeasured;
					return n && t >= n.lineN && t < n.lineN + n.size ? n : void 0
				}

				function Je(e, t) {
					var n = ei(t),
						r = Qe(e, n);
					r && !r.text ? r = null : r && r.changes && (I(e, r, n, D(e)), e.curOp.forceUpdate = !0), r || (r = Ye(e, t));
					var i = Xe(r, t, n);
					return {
						line: t,
						view: r,
						rect: null,
						map: i.map,
						cache: i.cache,
						before: i.before,
						hasHeights: !1
					}
				}

				function et(e, t, n, r, i) {
					t.before && (n = -1);
					var o, l = n + (r || "");
					return t.cache.hasOwnProperty(l) ? o = t.cache[l] : (t.rect || (t.rect = t.view.text.getBoundingClientRect()), t.hasHeights || (Ke(e, t.view, t.rect), t.hasHeights = !0), o = nt(e, t, n, r), o.bogus || (t.cache[l] = o)), {
						left: o.left,
						right: o.right,
						top: i ? o.rtop : o.top,
						bottom: i ? o.rbottom : o.bottom
					}
				}

				function tt(e, t, n) {
					for (var r, i, o, l, a = 0; a < e.length; a += 3) {
						var s = e[a],
							c = e[a + 1];
						if (s > t ? (i = 0, o = 1, l = "left") : c > t ? (i = t - s, o = i + 1) : (a == e.length - 3 || t == c && e[a + 3] > t) && (o = c - s, i = o - 1, t >= c && (l = "right")), null != i) {
							if (r = e[a + 2], s == c && n == (r.insertLeft ? "left" : "right") && (l = n), "left" == n && 0 == i)
								for (; a && e[a - 2] == e[a - 3] && e[a - 1].insertLeft;) r = e[(a -= 3) + 2], l = "left";
							if ("right" == n && i == c - s)
								for (; a < e.length - 3 && e[a + 3] == e[a + 4] && !e[a + 5].insertLeft;) r = e[(a += 3) + 2], l = "right";
							break
						}
					}
					return {
						node: r,
						start: i,
						end: o,
						collapse: l,
						coverStart: s,
						coverEnd: c
					}
				}

				function nt(e, t, n, r) {
					var i, o = tt(t.map, n, r),
						l = o.node,
						a = o.start,
						s = o.end,
						c = o.collapse;
					if (3 == l.nodeType) {
						for (var u = 0; 4 > u; u++) {
							for (; a && Bi(t.line.text.charAt(o.coverStart + a));) --a;
							for (; o.coverStart + s < o.coverEnd && Bi(t.line.text.charAt(o.coverStart + s));) ++s;
							if (yo && 9 > xo && 0 == a && s == o.coverEnd - o.coverStart) i = l.parentNode.getBoundingClientRect();
							else if (yo && e.options.lineWrapping) {
								var d = jl(l, a, s).getClientRects();
								i = d.length ? d["right" == r ? d.length - 1 : 0] : jo
							} else i = jl(l, a, s).getBoundingClientRect() || jo;
							if (i.left || i.right || 0 == a) break;
							s = a, a -= 1, c = "right"
						}
						yo && 11 > xo && (i = rt(e.display.measure, i))
					} else {
						a > 0 && (c = r = "right");
						var d;
						i = e.options.lineWrapping && (d = l.getClientRects()).length > 1 ? d["right" == r ? d.length - 1 : 0] : l.getBoundingClientRect()
					}
					if (yo && 9 > xo && !a && (!i || !i.left && !i.right)) {
						var h = l.parentNode.getClientRects()[0];
						i = h ? {
							left: h.left,
							right: h.left + yt(e.display),
							top: h.top,
							bottom: h.bottom
						} : jo
					}
					for (var f = i.top - t.rect.top, p = i.bottom - t.rect.top, m = (f + p) / 2, g = t.view.measure.heights, u = 0; u < g.length - 1 && !(m < g[u]); u++);
					var v = u ? g[u - 1] : 0,
						y = g[u],
						x = {
							left: ("right" == c ? i.right : i.left) - t.rect.left,
							right: ("left" == c ? i.left : i.right) - t.rect.left,
							top: v,
							bottom: y
						};
					return i.left || i.right || (x.bogus = !0), e.options.singleCursorHeightPerLine || (x.rtop = f, x.rbottom = p), x
				}

				function rt(e, t) {
					if (!window.screen || null == screen.logicalXDPI || screen.logicalXDPI == screen.deviceXDPI || !Qi(e)) return t;
					var n = screen.logicalXDPI / screen.deviceXDPI,
						r = screen.logicalYDPI / screen.deviceYDPI;
					return {
						left: t.left * n,
						right: t.right * n,
						top: t.top * r,
						bottom: t.bottom * r
					}
				}

				function it(e) {
					if (e.measure && (e.measure.cache = {}, e.measure.heights = null, e.rest))
						for (var t = 0; t < e.rest.length; t++) e.measure.caches[t] = {}
				}

				function ot(e) {
					e.display.externalMeasure = null, ji(e.display.lineMeasure);
					for (var t = 0; t < e.display.view.length; t++) it(e.display.view[t])
				}

				function lt(e) {
					ot(e), e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null, e.options.lineWrapping || (e.display.maxLineChanged = !0), e.display.lineNumChars = null
				}

				function at() {
					return window.pageXOffset || (document.documentElement || document.body).scrollLeft
				}

				function st() {
					return window.pageYOffset || (document.documentElement || document.body).scrollTop
				}

				function ct(e, t, n, r) {
					if (t.widgets)
						for (var i = 0; i < t.widgets.length; ++i)
							if (t.widgets[i].above) {
								var o = Sr(t.widgets[i]);
								n.top += o, n.bottom += o
							}
					if ("line" == r) return n;
					r || (r = "local");
					var l = ni(t);
					if ("local" == r ? l += je(e.display) : l -= e.display.viewOffset, "page" == r || "window" == r) {
						var a = e.display.lineSpace.getBoundingClientRect();
						l += a.top + ("window" == r ? 0 : st());
						var s = a.left + ("window" == r ? 0 : at());
						n.left += s, n.right += s
					}
					return n.top += l, n.bottom += l, n
				}

				function ut(e, t, n) {
					if ("div" == n) return t;
					var r = t.left,
						i = t.top;
					if ("page" == n) r -= at(), i -= st();
					else if ("local" == n || !n) {
						var o = e.display.sizer.getBoundingClientRect();
						r += o.left, i += o.top
					}
					var l = e.display.lineSpace.getBoundingClientRect();
					return {
						left: r - l.left,
						top: i - l.top
					}
				}

				function dt(e, t, n, r, i) {
					return r || (r = Yr(e.doc, t.line)), ct(e, r, Ze(e, r, t.ch, i), n)
				}

				function ht(e, t, n, r, i, o) {
					function l(t, l) {
						var a = et(e, i, t, l ? "right" : "left", o);
						return l ? a.left = a.right : a.right = a.left, ct(e, r, a, n)
					}

					function a(e, t) {
						var n = s[t],
							r = n.level % 2;
						return e == eo(n) && t && n.level < s[t - 1].level ? (n = s[--t], e = to(n) - (n.level % 2 ? 0 : 1), r = !0) : e == to(n) && t < s.length - 1 && n.level < s[t + 1].level && (n = s[++t], e = eo(n) - n.level % 2, r = !1), r && e == n.to && e > n.from ? l(e - 1) : l(e, r)
					}
					r = r || Yr(e.doc, t.line), i || (i = Je(e, r));
					var s = ri(r),
						c = t.ch;
					if (!s) return l(c);
					var u = so(s, c),
						d = a(c, u);
					return null != ia && (d.other = a(c, ia)), d
				}

				function ft(e, t) {
					var n = 0,
						t = ge(e.doc, t);
					e.options.lineWrapping || (n = yt(e.display) * t.ch);
					var r = Yr(e.doc, t.line),
						i = ni(r) + je(e.display);
					return {
						left: n,
						right: n,
						top: i,
						bottom: i + r.height
					}
				}

				function pt(e, t, n, r) {
					var i = Po(e, t);
					return i.xRel = r, n && (i.outside = !0), i
				}

				function mt(e, t, n) {
					var r = e.doc;
					if (n += e.display.viewOffset, 0 > n) return pt(r.first, 0, !0, -1);
					var i = ti(r, n),
						o = r.first + r.size - 1;
					if (i > o) return pt(r.first + r.size - 1, Yr(r, o).text.length, !0, 1);
					0 > t && (t = 0);
					for (var l = Yr(r, i);;) {
						var a = gt(e, l, i, t, n),
							s = mr(l),
							c = s && s.find(0, !0);
						if (!s || !(a.ch > c.from.ch || a.ch == c.from.ch && a.xRel > 0)) return a;
						i = ei(l = c.to.line)
					}
				}

				function gt(e, t, n, r, i) {
					function o(r) {
						var i = ht(e, Po(n, r), "line", t, c);
						return a = !0, l > i.bottom ? i.left - s : l < i.top ? i.left + s : (a = !1, i.left)
					}
					var l = i - ni(t),
						a = !1,
						s = 2 * e.display.wrapper.clientWidth,
						c = Je(e, t),
						u = ri(t),
						d = t.text.length,
						h = no(t),
						f = ro(t),
						p = o(h),
						m = a,
						g = o(f),
						v = a;
					if (r > g) return pt(n, f, v, 1);
					for (;;) {
						if (u ? f == h || f == uo(t, h, 1) : 1 >= f - h) {
							for (var y = p > r || g - r >= r - p ? h : f, x = r - (y == h ? p : g); Bi(t.text.charAt(y));) ++y;
							var b = pt(n, y, y == h ? m : v, -1 > x ? -1 : x > 1 ? 1 : 0);
							return b
						}
						var w = Math.ceil(d / 2),
							k = h + w;
						if (u) {
							k = h;
							for (var C = 0; w > C; ++C) k = uo(t, k, 1)
						}
						var S = o(k);
						S > r ? (f = k, g = S, (v = a) && (g += 1e3), d = w) : (h = k, p = S, m = a, d -= w)
					}
				}

				function vt(e) {
					if (null != e.cachedTextHeight) return e.cachedTextHeight;
					if (null == Ro) {
						Ro = _i("pre");
						for (var t = 0; 49 > t; ++t) Ro.appendChild(document.createTextNode("x")), Ro.appendChild(_i("br"));
						Ro.appendChild(document.createTextNode("x"))
					}
					qi(e.measure, Ro);
					var n = Ro.offsetHeight / 50;
					return n > 3 && (e.cachedTextHeight = n), ji(e.measure), n || 1
				}

				function yt(e) {
					if (null != e.cachedCharWidth) return e.cachedCharWidth;
					var t = _i("span", "xxxxxxxxxx"),
						n = _i("pre", [t]);
					qi(e.measure, n);
					var r = t.getBoundingClientRect(),
						i = (r.right - r.left) / 10;
					return i > 2 && (e.cachedCharWidth = i), i || 10
				}

				function xt(e) {
					e.curOp = {
						cm: e,
						viewChanged: !1,
						startHeight: e.doc.height,
						forceUpdate: !1,
						updateInput: null,
						typing: !1,
						changeObjs: null,
						cursorActivityHandlers: null,
						cursorActivityCalled: 0,
						selectionChanged: !1,
						updateMaxLine: !1,
						scrollLeft: null,
						scrollTop: null,
						scrollToPos: null,
						focus: !1,
						id: ++Go
					}, qo ? qo.ops.push(e.curOp) : e.curOp.ownsGroup = qo = {
						ops: [e.curOp],
						delayedCallbacks: []
					}
				}

				function bt(e) {
					var t = e.delayedCallbacks,
						n = 0;
					do {
						for (; n < t.length; n++) t[n].call(null);
						for (var r = 0; r < e.ops.length; r++) {
							var i = e.ops[r];
							if (i.cursorActivityHandlers)
								for (; i.cursorActivityCalled < i.cursorActivityHandlers.length;) i.cursorActivityHandlers[i.cursorActivityCalled++].call(null, i.cm)
						}
					} while (n < t.length)
				}

				function wt(e) {
					var t = e.curOp,
						n = t.ownsGroup;
					if (n) try {
						bt(n)
					} finally {
						qo = null;
						for (var r = 0; r < n.ops.length; r++) n.ops[r].cm.curOp = null;
						kt(n)
					}
				}

				function kt(e) {
					for (var t = e.ops, n = 0; n < t.length; n++) Ct(t[n]);
					for (var n = 0; n < t.length; n++) St(t[n]);
					for (var n = 0; n < t.length; n++) Lt(t[n]);
					for (var n = 0; n < t.length; n++) Tt(t[n]);
					for (var n = 0; n < t.length; n++) Mt(t[n])
				}

				function Ct(e) {
					var t = e.cm,
						n = t.display;
					T(t), e.updateMaxLine && h(t), e.mustUpdate = e.viewChanged || e.forceUpdate || null != e.scrollTop || e.scrollToPos && (e.scrollToPos.from.line < n.viewFrom || e.scrollToPos.to.line >= n.viewTo) || n.maxLineChanged && t.options.lineWrapping, e.update = e.mustUpdate && new L(t, e.mustUpdate && {
						top: e.scrollTop,
						ensure: e.scrollToPos
					}, e.forceUpdate)
				}

				function St(e) {
					e.updatedDisplay = e.mustUpdate && M(e.cm, e.update)
				}

				function Lt(e) {
					var t = e.cm,
						n = t.display;
					e.updatedDisplay && W(t), e.barMeasure = p(t), n.maxLineChanged && !t.options.lineWrapping && (e.adjustWidthTo = Ze(t, n.maxLine, n.maxLine.text.length).left + 3, t.display.sizerWidth = e.adjustWidthTo, e.barMeasure.scrollWidth = Math.max(n.scroller.clientWidth, n.sizer.offsetLeft + e.adjustWidthTo + Ue(t) + t.display.barWidth), e.maxScrollLeft = Math.max(0, n.sizer.offsetLeft + e.adjustWidthTo - $e(t))), (e.updatedDisplay || e.selectionChanged) && (e.preparedSelection = n.input.prepareSelection())
				}

				function Tt(e) {
					var t = e.cm;
					null != e.adjustWidthTo && (t.display.sizer.style.minWidth = e.adjustWidthTo + "px", e.maxScrollLeft < t.doc.scrollLeft && rn(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0), t.display.maxLineChanged = !1), e.preparedSelection && t.display.input.showSelection(e.preparedSelection), e.updatedDisplay && O(t, e.barMeasure), (e.updatedDisplay || e.startHeight != t.doc.height) && y(t, e.barMeasure), e.selectionChanged && ze(t), t.state.focused && e.updateInput && t.display.input.reset(e.typing), !e.focus || e.focus != Gi() || document.hasFocus && !document.hasFocus() || Y(e.cm)
				}

				function Mt(e) {
					var t = e.cm,
						n = t.display,
						r = t.doc;
					if (e.updatedDisplay && N(t, e.update), null == n.wheelStartX || null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos || (n.wheelStartX = n.wheelStartY = null), null == e.scrollTop || n.scroller.scrollTop == e.scrollTop && !e.forceScroll || (r.scrollTop = Math.max(0, Math.min(n.scroller.scrollHeight - n.scroller.clientHeight, e.scrollTop)), n.scrollbars.setScrollTop(r.scrollTop), n.scroller.scrollTop = r.scrollTop), null == e.scrollLeft || n.scroller.scrollLeft == e.scrollLeft && !e.forceScroll || (r.scrollLeft = Math.max(0, Math.min(n.scroller.scrollWidth - $e(t), e.scrollLeft)), n.scrollbars.setScrollLeft(r.scrollLeft), n.scroller.scrollLeft = r.scrollLeft, w(t)), e.scrollToPos) {
						var i = Dn(t, ge(r, e.scrollToPos.from), ge(r, e.scrollToPos.to), e.scrollToPos.margin);
						e.scrollToPos.isCursor && t.state.focused && Hn(t, i)
					}
					var o = e.maybeHiddenMarkers,
						l = e.maybeUnhiddenMarkers;
					if (o)
						for (var a = 0; a < o.length; ++a) o[a].lines.length || Wl(o[a], "hide");
					if (l)
						for (var a = 0; a < l.length; ++a) l[a].lines.length && Wl(l[a], "unhide");
					n.wrapper.offsetHeight && (r.scrollTop = t.display.scroller.scrollTop), e.changeObjs && Wl(t, "changes", t, e.changeObjs), e.update && e.update.finish()
				}

				function Nt(e, t) {
					if (e.curOp) return t();
					xt(e);
					try {
						return t()
					} finally {
						wt(e)
					}
				}

				function At(e, t) {
					return function() {
						if (e.curOp) return t.apply(e, arguments);
						xt(e);
						try {
							return t.apply(e, arguments)
						} finally {
							wt(e)
						}
					}
				}

				function Ot(e) {
					return function() {
						if (this.curOp) return e.apply(this, arguments);
						xt(this);
						try {
							return e.apply(this, arguments)
						} finally {
							wt(this)
						}
					}
				}

				function Wt(e) {
					return function() {
						var t = this.cm;
						if (!t || t.curOp) return e.apply(this, arguments);
						xt(t);
						try {
							return e.apply(this, arguments)
						} finally {
							wt(t)
						}
					}
				}

				function Ht(e, t, n) {
					this.line = t, this.rest = yr(t), this.size = this.rest ? ei(Wi(this.rest)) - n + 1 : 1, this.node = this.text = null, this.hidden = wr(e, t)
				}

				function Dt(e, t, n) {
					for (var r, i = [], o = t; n > o; o = r) {
						var l = new Ht(e.doc, Yr(e.doc, o), o);
						r = o + l.size, i.push(l)
					}
					return i
				}

				function Et(e, t, n, r) {
					null == t && (t = e.doc.first), null == n && (n = e.doc.first + e.doc.size), r || (r = 0);
					var i = e.display;
					if (r && n < i.viewTo && (null == i.updateLineNumbers || i.updateLineNumbers > t) && (i.updateLineNumbers = t), e.curOp.viewChanged = !0, t >= i.viewTo) Io && xr(e.doc, t) < i.viewTo && Pt(e);
					else if (n <= i.viewFrom) Io && br(e.doc, n + r) > i.viewFrom ? Pt(e) : (i.viewFrom += r, i.viewTo += r);
					else if (t <= i.viewFrom && n >= i.viewTo) Pt(e);
					else if (t <= i.viewFrom) {
						var o = Ft(e, n, n + r, 1);
						o ? (i.view = i.view.slice(o.index), i.viewFrom = o.lineN, i.viewTo += r) : Pt(e)
					} else if (n >= i.viewTo) {
						var o = Ft(e, t, t, -1);
						o ? (i.view = i.view.slice(0, o.index), i.viewTo = o.lineN) : Pt(e)
					} else {
						var l = Ft(e, t, t, -1),
							a = Ft(e, n, n + r, 1);
						l && a ? (i.view = i.view.slice(0, l.index).concat(Dt(e, l.lineN, a.lineN)).concat(i.view.slice(a.index)), i.viewTo += r) : Pt(e)
					}
					var s = i.externalMeasured;
					s && (n < s.lineN ? s.lineN += r : t < s.lineN + s.size && (i.externalMeasured = null))
				}

				function It(e, t, n) {
					e.curOp.viewChanged = !0;
					var r = e.display,
						i = e.display.externalMeasured;
					if (i && t >= i.lineN && t < i.lineN + i.size && (r.externalMeasured = null), !(t < r.viewFrom || t >= r.viewTo)) {
						var o = r.view[zt(e, t)];
						if (null != o.node) {
							var l = o.changes || (o.changes = []); - 1 == Hi(l, n) && l.push(n)
						}
					}
				}

				function Pt(e) {
					e.display.viewFrom = e.display.viewTo = e.doc.first, e.display.view = [], e.display.viewOffset = 0
				}

				function zt(e, t) {
					if (t >= e.display.viewTo) return null;
					if (t -= e.display.viewFrom, 0 > t) return null;
					for (var n = e.display.view, r = 0; r < n.length; r++)
						if (t -= n[r].size, 0 > t) return r
				}

				function Ft(e, t, n, r) {
					var i, o = zt(e, t),
						l = e.display.view;
					if (!Io || n == e.doc.first + e.doc.size) return {
						index: o,
						lineN: n
					};
					for (var a = 0, s = e.display.viewFrom; o > a; a++) s += l[a].size;
					if (s != t) {
						if (r > 0) {
							if (o == l.length - 1) return null;
							i = s + l[o].size - t, o++
						} else i = s - t;
						t += i, n += i
					}
					for (; xr(e.doc, n) != n;) {
						if (o == (0 > r ? 0 : l.length - 1)) return null;
						n += r * l[o - (0 > r ? 1 : 0)].size, o += r
					}
					return {
						index: o,
						lineN: n
					}
				}

				function Rt(e, t, n) {
					var r = e.display,
						i = r.view;
					0 == i.length || t >= r.viewTo || n <= r.viewFrom ? (r.view = Dt(e, t, n), r.viewFrom = t) : (r.viewFrom > t ? r.view = Dt(e, t, r.viewFrom).concat(r.view) : r.viewFrom < t && (r.view = r.view.slice(zt(e, t))), r.viewFrom = t, r.viewTo < n ? r.view = r.view.concat(Dt(e, r.viewTo, n)) : r.viewTo > n && (r.view = r.view.slice(0, zt(e, n)))), r.viewTo = n
				}

				function Bt(e) {
					for (var t = e.display.view, n = 0, r = 0; r < t.length; r++) {
						var i = t[r];
						i.hidden || i.node && !i.changes || ++n
					}
					return n
				}

				function _t(e) {
					function t() {
						i.activeTouch && (o = setTimeout(function() {
							i.activeTouch = null
						}, 1e3), l = i.activeTouch, l.end = +new Date)
					}

					function n(e) {
						if (1 != e.touches.length) return !1;
						var t = e.touches[0];
						return t.radiusX <= 1 && t.radiusY <= 1
					}

					function r(e, t) {
						if (null == t.left) return !0;
						var n = t.left - e.left,
							r = t.top - e.top;
						return n * n + r * r > 400
					}
					var i = e.display;
					Nl(i.scroller, "mousedown", At(e, $t)), yo && 11 > xo ? Nl(i.scroller, "dblclick", At(e, function(t) {
						if (!Li(e, t)) {
							var n = Ut(e, t);
							if (n && !Zt(e, t) && !Gt(e.display, t)) {
								Ll(t);
								var r = e.findWordAt(n);
								we(e.doc, r.anchor, r.head)
							}
						}
					})) : Nl(i.scroller, "dblclick", function(t) {
						Li(e, t) || Ll(t)
					}), Do || Nl(i.scroller, "contextmenu", function(t) {
						yn(e, t)
					});
					var o, l = {
						end: 0
					};
					Nl(i.scroller, "touchstart", function(e) {
						if (!n(e)) {
							clearTimeout(o);
							var t = +new Date;
							i.activeTouch = {
								start: t,
								moved: !1,
								prev: t - l.end <= 300 ? l : null
							}, 1 == e.touches.length && (i.activeTouch.left = e.touches[0].pageX, i.activeTouch.top = e.touches[0].pageY)
						}
					}), Nl(i.scroller, "touchmove", function() {
						i.activeTouch && (i.activeTouch.moved = !0)
					}), Nl(i.scroller, "touchend", function(n) {
						var o = i.activeTouch;
						if (o && !Gt(i, n) && null != o.left && !o.moved && new Date - o.start < 300) {
							var l, a = e.coordsChar(i.activeTouch, "page");
							l = !o.prev || r(o, o.prev) ? new he(a, a) : !o.prev.prev || r(o, o.prev.prev) ? e.findWordAt(a) : new he(Po(a.line, 0), ge(e.doc, Po(a.line + 1, 0))), e.setSelection(l.anchor, l.head), e.focus(), Ll(n)
						}
						t()
					}), Nl(i.scroller, "touchcancel", t), Nl(i.scroller, "scroll", function() {
						i.scroller.clientHeight && (nn(e, i.scroller.scrollTop), rn(e, i.scroller.scrollLeft, !0), Wl(e, "scroll", e))
					}), Nl(i.scroller, "mousewheel", function(t) {
						on(e, t)
					}), Nl(i.scroller, "DOMMouseScroll", function(t) {
						on(e, t)
					}), Nl(i.wrapper, "scroll", function() {
						i.wrapper.scrollTop = i.wrapper.scrollLeft = 0
					}), i.dragFunctions = {
						enter: function(t) {
							Li(e, t) || Ml(t)
						},
						over: function(t) {
							Li(e, t) || (en(e, t), Ml(t))
						},
						start: function(t) {
							Jt(e, t)
						},
						drop: At(e, Qt),
						leave: function() {
							tn(e)
						}
					};
					var a = i.input.getField();
					Nl(a, "keyup", function(t) {
						fn.call(e, t)
					}), Nl(a, "keydown", At(e, dn)), Nl(a, "keypress", At(e, pn)), Nl(a, "focus", zi(gn, e)), Nl(a, "blur", zi(vn, e))
				}

				function jt(t, n, r) {
					var i = r && r != e.Init;
					if (!n != !i) {
						var o = t.display.dragFunctions,
							l = n ? Nl : Ol;
						l(t.display.scroller, "dragstart", o.start), l(t.display.scroller, "dragenter", o.enter), l(t.display.scroller, "dragover", o.over), l(t.display.scroller, "dragleave", o.leave), l(t.display.scroller, "drop", o.drop)
					}
				}

				function qt(e) {
					var t = e.display;
					(t.lastWrapHeight != t.wrapper.clientHeight || t.lastWrapWidth != t.wrapper.clientWidth) && (t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null, t.scrollbarsClipped = !1, e.setSize())
				}

				function Gt(e, t) {
					for (var n = bi(t); n != e.wrapper; n = n.parentNode)
						if (!n || 1 == n.nodeType && "true" == n.getAttribute("cm-ignore-events") || n.parentNode == e.sizer && n != e.mover) return !0
				}

				function Ut(e, t, n, r) {
					var i = e.display;
					if (!n && "true" == bi(t).getAttribute("cm-not-content")) return null;
					var o, l, a = i.lineSpace.getBoundingClientRect();
					try {
						o = t.clientX - a.left, l = t.clientY - a.top
					} catch (t) {
						return null
					}
					var s, c = mt(e, o, l);
					if (r && 1 == c.xRel && (s = Yr(e.doc, c.line).text).length == c.ch) {
						var u = Fl(s, s.length, e.options.tabSize) - s.length;
						c = Po(c.line, Math.max(0, Math.round((o - Ge(e.display).left) / yt(e.display)) - u))
					}
					return c
				}

				function $t(e) {
					var t = this,
						n = t.display;
					if (!(n.activeTouch && n.input.supportsTouch() || Li(t, e))) {
						if (n.shift = e.shiftKey, Gt(n, e)) return void(bo || (n.scroller.draggable = !1, setTimeout(function() {
							n.scroller.draggable = !0
						}, 100)));
						if (!Zt(t, e)) {
							var r = Ut(t, e);
							switch (window.focus(), wi(e)) {
								case 1:
									t.state.selectingText ? t.state.selectingText(e) : r ? Vt(t, e, r) : bi(e) == n.scroller && Ll(e);
									break;
								case 2:
									bo && (t.state.lastMiddleDown = +new Date), r && we(t.doc, r), setTimeout(function() {
										n.input.focus()
									}, 20), Ll(e);
									break;
								case 3:
									Do ? yn(t, e) : mn(t)
							}
						}
					}
				}

				function Vt(e, t, n) {
					yo ? setTimeout(zi(Y, e), 0) : e.curOp.focus = Gi();
					var r, i = +new Date;
					_o && _o.time > i - 400 && 0 == zo(_o.pos, n) ? r = "triple" : Bo && Bo.time > i - 400 && 0 == zo(Bo.pos, n) ? (r = "double", _o = {
						time: i,
						pos: n
					}) : (r = "single", Bo = {
						time: i,
						pos: n
					});
					var o, l = e.doc.sel,
						a = Ao ? t.metaKey : t.ctrlKey;
					e.options.dragDrop && Ql && !Z(e) && "single" == r && (o = l.contains(n)) > -1 && (zo((o = l.ranges[o]).from(), n) < 0 || n.xRel > 0) && (zo(o.to(), n) > 0 || n.xRel < 0) ? Kt(e, t, n, a) : Xt(e, t, n, r, a)
				}

				function Kt(e, t, n, r) {
					var i = e.display,
						o = +new Date,
						l = At(e, function(a) {
							bo && (i.scroller.draggable = !1), e.state.draggingText = !1, Ol(document, "mouseup", l), Ol(i.scroller, "drop", l), Math.abs(t.clientX - a.clientX) + Math.abs(t.clientY - a.clientY) < 10 && (Ll(a), !r && +new Date - 200 < o && we(e.doc, n), bo || yo && 9 == xo ? setTimeout(function() {
								document.body.focus(), i.input.focus()
							}, 20) : i.input.focus())
						});
					bo && (i.scroller.draggable = !0), e.state.draggingText = l, i.scroller.dragDrop && i.scroller.dragDrop(), Nl(document, "mouseup", l), Nl(i.scroller, "drop", l)
				}

				function Xt(e, t, n, r, i) {
					function o(t) {
						if (0 != zo(g, t))
							if (g = t, "rect" == r) {
								for (var i = [], o = e.options.tabSize, l = Fl(Yr(c, n.line).text, n.ch, o), a = Fl(Yr(c, t.line).text, t.ch, o), s = Math.min(l, a), f = Math.max(l, a), p = Math.min(n.line, t.line), m = Math.min(e.lastLine(), Math.max(n.line, t.line)); m >= p; p++) {
									var v = Yr(c, p).text,
										y = Rl(v, s, o);
									s == f ? i.push(new he(Po(p, y), Po(p, y))) : v.length > y && i.push(new he(Po(p, y), Po(p, Rl(v, f, o))))
								}
								i.length || i.push(new he(n, n)), Me(c, fe(h.ranges.slice(0, d).concat(i), d), {
									origin: "*mouse",
									scroll: !1
								}), e.scrollIntoView(t)
							} else {
								var x = u,
									b = x.anchor,
									w = t;
								if ("single" != r) {
									if ("double" == r) var k = e.findWordAt(t);
									else var k = new he(Po(t.line, 0), ge(c, Po(t.line + 1, 0)));
									zo(k.anchor, b) > 0 ? (w = k.head, b = X(x.from(), k.anchor)) : (w = k.anchor, b = K(x.to(), k.head))
								}
								var i = h.ranges.slice(0);
								i[d] = new he(ge(c, b), w), Me(c, fe(i, d), Pl)
							}
					}

					function l(t) {
						var n = ++y,
							i = Ut(e, t, !0, "rect" == r);
						if (i)
							if (0 != zo(i, g)) {
								e.curOp.focus = Gi(), o(i);
								var a = b(s, c);
								(i.line >= a.to || i.line < a.from) && setTimeout(At(e, function() {
									y == n && l(t)
								}), 150)
							} else {
								var u = t.clientY < v.top ? -20 : t.clientY > v.bottom ? 20 : 0;
								u && setTimeout(At(e, function() {
									y == n && (s.scroller.scrollTop += u, l(t))
								}), 50)
							}
					}

					function a(t) {
						e.state.selectingText = !1, y = 1 / 0, Ll(t), s.input.focus(), Ol(document, "mousemove", x), Ol(document, "mouseup", w), c.history.lastSelOrigin = null
					}
					var s = e.display,
						c = e.doc;
					Ll(t);
					var u, d, h = c.sel,
						f = h.ranges;
					if (i && !t.shiftKey ? (d = c.sel.contains(n), u = d > -1 ? f[d] : new he(n, n)) : (u = c.sel.primary(), d = c.sel.primIndex), t.altKey) r = "rect", i || (u = new he(n, n)), n = Ut(e, t, !0, !0), d = -1;
					else if ("double" == r) {
						var p = e.findWordAt(n);
						u = e.display.shift || c.extend ? be(c, u, p.anchor, p.head) : p
					} else if ("triple" == r) {
						var m = new he(Po(n.line, 0), ge(c, Po(n.line + 1, 0)));
						u = e.display.shift || c.extend ? be(c, u, m.anchor, m.head) : m
					} else u = be(c, u, n);
					i ? -1 == d ? (d = f.length, Me(c, fe(f.concat([u]), d), {
						scroll: !1,
						origin: "*mouse"
					})) : f.length > 1 && f[d].empty() && "single" == r && !t.shiftKey ? (Me(c, fe(f.slice(0, d).concat(f.slice(d + 1)), 0), {
						scroll: !1,
						origin: "*mouse"
					}), h = c.sel) : Ce(c, d, u, Pl) : (d = 0, Me(c, new de([u], 0), Pl), h = c.sel);
					var g = n,
						v = s.wrapper.getBoundingClientRect(),
						y = 0,
						x = At(e, function(e) {
							wi(e) ? l(e) : a(e)
						}),
						w = At(e, a);
					e.state.selectingText = w, Nl(document, "mousemove", x), Nl(document, "mouseup", w)
				}

				function Yt(e, t, n, r) {
					try {
						var i = t.clientX,
							o = t.clientY
					} catch (t) {
						return !1
					}
					if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right)) return !1;
					r && Ll(t);
					var l = e.display,
						a = l.lineDiv.getBoundingClientRect();
					if (o > a.bottom || !Mi(e, n)) return xi(t);
					o -= a.top - l.viewOffset;
					for (var s = 0; s < e.options.gutters.length; ++s) {
						var c = l.gutters.childNodes[s];
						if (c && c.getBoundingClientRect().right >= i) {
							var u = ti(e.doc, o),
								d = e.options.gutters[s];
							return Wl(e, n, e, u, d, t), xi(t)
						}
					}
				}

				function Zt(e, t) {
					return Yt(e, t, "gutterClick", !0)
				}

				function Qt(e) {
					var t = this;
					if (tn(t), !Li(t, e) && !Gt(t.display, e)) {
						Ll(e), yo && (Uo = +new Date);
						var n = Ut(t, e, !0),
							r = e.dataTransfer.files;
						if (n && !Z(t))
							if (r && r.length && window.FileReader && window.File)
								for (var i = r.length, o = Array(i), l = 0, a = function(e, r) {
										if (!t.options.allowDropFileTypes || -1 != Hi(t.options.allowDropFileTypes, e.type)) {
											var a = new FileReader;
											a.onload = At(t, function() {
												var e = a.result;
												if (/[\x00-\x08\x0e-\x1f]{2}/.test(e) && (e = ""), o[r] = e, ++l == i) {
													n = ge(t.doc, n);
													var s = {
														from: n,
														to: n,
														text: t.doc.splitLines(o.join(t.doc.lineSeparator())),
														origin: "paste"
													};
													Ln(t.doc, s), Te(t.doc, pe(n, Zo(s)))
												}
											}), a.readAsText(e)
										}
									}, s = 0; i > s; ++s) a(r[s], s);
							else {
								if (t.state.draggingText && t.doc.sel.contains(n) > -1) return t.state.draggingText(e), void setTimeout(function() {
									t.display.input.focus()
								}, 20);
								try {
									var o = e.dataTransfer.getData("Text");
									if (o) {
										if (t.state.draggingText && !(Ao ? e.altKey : e.ctrlKey)) var c = t.listSelections();
										if (Ne(t.doc, pe(n, n)), c)
											for (var s = 0; s < c.length; ++s) Wn(t.doc, "", c[s].anchor, c[s].head, "drag");
										t.replaceSelection(o, "around", "paste"), t.display.input.focus()
									}
								} catch (e) {}
							}
					}
				}

				function Jt(e, t) {
					if (yo && (!e.state.draggingText || +new Date - Uo < 100)) return void Ml(t);
					if (!Li(e, t) && !Gt(e.display, t) && (t.dataTransfer.setData("Text", e.getSelection()), t.dataTransfer.setDragImage && !So)) {
						var n = _i("img", null, null, "position: fixed; left: 0; top: 0;");
						n.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", Co && (n.width = n.height = 1, e.display.wrapper.appendChild(n), n._top = n.offsetTop),
							t.dataTransfer.setDragImage(n, 0, 0), Co && n.parentNode.removeChild(n)
					}
				}

				function en(e, t) {
					var n = Ut(e, t);
					if (n) {
						var r = document.createDocumentFragment();
						Ie(e, n, r), e.display.dragCursor || (e.display.dragCursor = _i("div", null, "CodeMirror-cursors CodeMirror-dragcursors"), e.display.lineSpace.insertBefore(e.display.dragCursor, e.display.cursorDiv)), qi(e.display.dragCursor, r)
					}
				}

				function tn(e) {
					e.display.dragCursor && (e.display.lineSpace.removeChild(e.display.dragCursor), e.display.dragCursor = null)
				}

				function nn(e, t) {
					Math.abs(e.doc.scrollTop - t) < 2 || (e.doc.scrollTop = t, mo || A(e, {
						top: t
					}), e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t), e.display.scrollbars.setScrollTop(t), mo && A(e), Fe(e, 100))
				}

				function rn(e, t, n) {
					(n ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) || (t = Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth), e.doc.scrollLeft = t, w(e), e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t), e.display.scrollbars.setScrollLeft(t))
				}

				function on(e, t) {
					var n = Ko(t),
						r = n.x,
						i = n.y,
						o = e.display,
						l = o.scroller,
						a = l.scrollWidth > l.clientWidth,
						s = l.scrollHeight > l.clientHeight;
					if (r && a || i && s) {
						if (i && Ao && bo) e: for (var c = t.target, u = o.view; c != l; c = c.parentNode)
							for (var d = 0; d < u.length; d++)
								if (u[d].node == c) {
									e.display.currentWheelTarget = c;
									break e
								}
						if (r && !mo && !Co && null != Vo) return i && s && nn(e, Math.max(0, Math.min(l.scrollTop + i * Vo, l.scrollHeight - l.clientHeight))), rn(e, Math.max(0, Math.min(l.scrollLeft + r * Vo, l.scrollWidth - l.clientWidth))), (!i || i && s) && Ll(t), void(o.wheelStartX = null);
						if (i && null != Vo) {
							var h = i * Vo,
								f = e.doc.scrollTop,
								p = f + o.wrapper.clientHeight;
							0 > h ? f = Math.max(0, f + h - 50) : p = Math.min(e.doc.height, p + h + 50), A(e, {
								top: f,
								bottom: p
							})
						}
						20 > $o && (null == o.wheelStartX ? (o.wheelStartX = l.scrollLeft, o.wheelStartY = l.scrollTop, o.wheelDX = r, o.wheelDY = i, setTimeout(function() {
							if (null != o.wheelStartX) {
								var e = l.scrollLeft - o.wheelStartX,
									t = l.scrollTop - o.wheelStartY,
									n = t && o.wheelDY && t / o.wheelDY || e && o.wheelDX && e / o.wheelDX;
								o.wheelStartX = o.wheelStartY = null, n && (Vo = (Vo * $o + n) / ($o + 1), ++$o)
							}
						}, 200)) : (o.wheelDX += r, o.wheelDY += i))
					}
				}

				function ln(e, t, n) {
					if ("string" == typeof t && (t = sl[t], !t)) return !1;
					e.display.input.ensurePolled();
					var r = e.display.shift,
						i = !1;
					try {
						Z(e) && (e.state.suppressEdits = !0), n && (e.display.shift = !1), i = t(e) != El
					} finally {
						e.display.shift = r, e.state.suppressEdits = !1
					}
					return i
				}

				function an(e, t, n) {
					for (var r = 0; r < e.state.keyMaps.length; r++) {
						var i = ul(t, e.state.keyMaps[r], n, e);
						if (i) return i
					}
					return e.options.extraKeys && ul(t, e.options.extraKeys, n, e) || ul(t, e.options.keyMap, n, e)
				}

				function sn(e, t, n, r) {
					var i = e.state.keySeq;
					if (i) {
						if (dl(t)) return "handled";
						Xo.set(50, function() {
							e.state.keySeq == i && (e.state.keySeq = null, e.display.input.reset())
						}), t = i + " " + t
					}
					var o = an(e, t, r);
					return "multi" == o && (e.state.keySeq = t), "handled" == o && Ci(e, "keyHandled", e, t, n), ("handled" == o || "multi" == o) && (Ll(n), ze(e)), i && !o && /\'$/.test(t) ? (Ll(n), !0) : !!o
				}

				function cn(e, t) {
					var n = hl(t, !0);
					return n ? t.shiftKey && !e.state.keySeq ? sn(e, "Shift-" + n, t, function(t) {
						return ln(e, t, !0)
					}) || sn(e, n, t, function(t) {
						return ("string" == typeof t ? /^go[A-Z]/.test(t) : t.motion) ? ln(e, t) : void 0
					}) : sn(e, n, t, function(t) {
						return ln(e, t)
					}) : !1
				}

				function un(e, t, n) {
					return sn(e, "'" + n + "'", t, function(t) {
						return ln(e, t, !0)
					})
				}

				function dn(e) {
					var t = this;
					if (t.curOp.focus = Gi(), !Li(t, e)) {
						yo && 11 > xo && 27 == e.keyCode && (e.returnValue = !1);
						var n = e.keyCode;
						t.display.shift = 16 == n || e.shiftKey;
						var r = cn(t, e);
						Co && (Yo = r ? n : null, !r && 88 == n && !ta && (Ao ? e.metaKey : e.ctrlKey) && t.replaceSelection("", null, "cut")), 18 != n || /\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) || hn(t)
					}
				}

				function hn(e) {
					function t(e) {
						18 != e.keyCode && e.altKey || (Xl(n, "CodeMirror-crosshair"), Ol(document, "keyup", t), Ol(document, "mouseover", t))
					}
					var n = e.display.lineDiv;
					Yl(n, "CodeMirror-crosshair"), Nl(document, "keyup", t), Nl(document, "mouseover", t)
				}

				function fn(e) {
					16 == e.keyCode && (this.doc.sel.shift = !1), Li(this, e)
				}

				function pn(e) {
					var t = this;
					if (!(Gt(t.display, e) || Li(t, e) || e.ctrlKey && !e.altKey || Ao && e.metaKey)) {
						var n = e.keyCode,
							r = e.charCode;
						if (Co && n == Yo) return Yo = null, void Ll(e);
						if (!Co || e.which && !(e.which < 10) || !cn(t, e)) {
							var i = String.fromCharCode(null == r ? n : r);
							un(t, e, i) || t.display.input.onKeyPress(e)
						}
					}
				}

				function mn(e) {
					e.state.delayingBlurEvent = !0, setTimeout(function() {
						e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1, vn(e))
					}, 100)
				}

				function gn(e) {
					e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1), "nocursor" != e.options.readOnly && (e.state.focused || (Wl(e, "focus", e), e.state.focused = !0, Yl(e.display.wrapper, "CodeMirror-focused"), e.curOp || e.display.selForContextMenu == e.doc.sel || (e.display.input.reset(), bo && setTimeout(function() {
						e.display.input.reset(!0)
					}, 20)), e.display.input.receivedFocus()), ze(e))
				}

				function vn(e) {
					e.state.delayingBlurEvent || (e.state.focused && (Wl(e, "blur", e), e.state.focused = !1, Xl(e.display.wrapper, "CodeMirror-focused")), clearInterval(e.display.blinker), setTimeout(function() {
						e.state.focused || (e.display.shift = !1)
					}, 150))
				}

				function yn(e, t) {
					Gt(e.display, t) || xn(e, t) || Li(e, t, "contextmenu") || e.display.input.onContextMenu(t)
				}

				function xn(e, t) {
					return Mi(e, "gutterContextMenu") ? Yt(e, t, "gutterContextMenu", !1) : !1
				}

				function bn(e, t) {
					if (zo(e, t.from) < 0) return e;
					if (zo(e, t.to) <= 0) return Zo(t);
					var n = e.line + t.text.length - (t.to.line - t.from.line) - 1,
						r = e.ch;
					return e.line == t.to.line && (r += Zo(t).ch - t.to.ch), Po(n, r)
				}

				function wn(e, t) {
					for (var n = [], r = 0; r < e.sel.ranges.length; r++) {
						var i = e.sel.ranges[r];
						n.push(new he(bn(i.anchor, t), bn(i.head, t)))
					}
					return fe(n, e.sel.primIndex)
				}

				function kn(e, t, n) {
					return e.line == t.line ? Po(n.line, e.ch - t.ch + n.ch) : Po(n.line + (e.line - t.line), e.ch)
				}

				function Cn(e, t, n) {
					for (var r = [], i = Po(e.first, 0), o = i, l = 0; l < t.length; l++) {
						var a = t[l],
							s = kn(a.from, i, o),
							c = kn(Zo(a), i, o);
						if (i = a.to, o = c, "around" == n) {
							var u = e.sel.ranges[l],
								d = zo(u.head, u.anchor) < 0;
							r[l] = new he(d ? c : s, d ? s : c)
						} else r[l] = new he(s, s)
					}
					return new de(r, e.sel.primIndex)
				}

				function Sn(e, t, n) {
					var r = {
						canceled: !1,
						from: t.from,
						to: t.to,
						text: t.text,
						origin: t.origin,
						cancel: function() {
							this.canceled = !0
						}
					};
					return n && (r.update = function(t, n, r, i) {
						t && (this.from = ge(e, t)), n && (this.to = ge(e, n)), r && (this.text = r), void 0 !== i && (this.origin = i)
					}), Wl(e, "beforeChange", e, r), e.cm && Wl(e.cm, "beforeChange", e.cm, r), r.canceled ? null : {
						from: r.from,
						to: r.to,
						text: r.text,
						origin: r.origin
					}
				}

				function Ln(e, t, n) {
					if (e.cm) {
						if (!e.cm.curOp) return At(e.cm, Ln)(e, t, n);
						if (e.cm.state.suppressEdits) return
					}
					if (!(Mi(e, "beforeChange") || e.cm && Mi(e.cm, "beforeChange")) || (t = Sn(e, t, !0))) {
						var r = Eo && !n && ar(e, t.from, t.to);
						if (r)
							for (var i = r.length - 1; i >= 0; --i) Tn(e, {
								from: r[i].from,
								to: r[i].to,
								text: i ? [""] : t.text
							});
						else Tn(e, t)
					}
				}

				function Tn(e, t) {
					if (1 != t.text.length || "" != t.text[0] || 0 != zo(t.from, t.to)) {
						var n = wn(e, t);
						si(e, t, n, e.cm ? e.cm.curOp.id : NaN), An(e, t, n, ir(e, t));
						var r = [];
						Kr(e, function(e, n) {
							n || -1 != Hi(r, e.history) || (yi(e.history, t), r.push(e.history)), An(e, t, null, ir(e, t))
						})
					}
				}

				function Mn(e, t, n) {
					if (!e.cm || !e.cm.state.suppressEdits) {
						for (var r, i = e.history, o = e.sel, l = "undo" == t ? i.done : i.undone, a = "undo" == t ? i.undone : i.done, s = 0; s < l.length && (r = l[s], n ? !r.ranges || r.equals(e.sel) : r.ranges); s++);
						if (s != l.length) {
							for (i.lastOrigin = i.lastSelOrigin = null; r = l.pop(), r.ranges;) {
								if (di(r, a), n && !r.equals(e.sel)) return void Me(e, r, {
									clearRedo: !1
								});
								o = r
							}
							var c = [];
							di(o, a), a.push({
								changes: c,
								generation: i.generation
							}), i.generation = r.generation || ++i.maxGeneration;
							for (var u = Mi(e, "beforeChange") || e.cm && Mi(e.cm, "beforeChange"), s = r.changes.length - 1; s >= 0; --s) {
								var d = r.changes[s];
								if (d.origin = t, u && !Sn(e, d, !1)) return void(l.length = 0);
								c.push(oi(e, d));
								var h = s ? wn(e, d) : Wi(l);
								An(e, d, h, lr(e, d)), !s && e.cm && e.cm.scrollIntoView({
									from: d.from,
									to: Zo(d)
								});
								var f = [];
								Kr(e, function(e, t) {
									t || -1 != Hi(f, e.history) || (yi(e.history, d), f.push(e.history)), An(e, d, null, lr(e, d))
								})
							}
						}
					}
				}

				function Nn(e, t) {
					if (0 != t && (e.first += t, e.sel = new de(Di(e.sel.ranges, function(e) {
							return new he(Po(e.anchor.line + t, e.anchor.ch), Po(e.head.line + t, e.head.ch))
						}), e.sel.primIndex), e.cm)) {
						Et(e.cm, e.first, e.first - t, t);
						for (var n = e.cm.display, r = n.viewFrom; r < n.viewTo; r++) It(e.cm, r, "gutter")
					}
				}

				function An(e, t, n, r) {
					if (e.cm && !e.cm.curOp) return At(e.cm, An)(e, t, n, r);
					if (t.to.line < e.first) return void Nn(e, t.text.length - 1 - (t.to.line - t.from.line));
					if (!(t.from.line > e.lastLine())) {
						if (t.from.line < e.first) {
							var i = t.text.length - 1 - (e.first - t.from.line);
							Nn(e, i), t = {
								from: Po(e.first, 0),
								to: Po(t.to.line + i, t.to.ch),
								text: [Wi(t.text)],
								origin: t.origin
							}
						}
						var o = e.lastLine();
						t.to.line > o && (t = {
							from: t.from,
							to: Po(o, Yr(e, o).text.length),
							text: [t.text[0]],
							origin: t.origin
						}), t.removed = Zr(e, t.from, t.to), n || (n = wn(e, t)), e.cm ? On(e.cm, t, r) : Ur(e, t, r), Ne(e, n, Il)
					}
				}

				function On(e, t, n) {
					var r = e.doc,
						i = e.display,
						l = t.from,
						a = t.to,
						s = !1,
						c = l.line;
					e.options.lineWrapping || (c = ei(vr(Yr(r, l.line))), r.iter(c, a.line + 1, function(e) {
						return e == i.maxLine ? (s = !0, !0) : void 0
					})), r.sel.contains(t.from, t.to) > -1 && Ti(e), Ur(r, t, n, o(e)), e.options.lineWrapping || (r.iter(c, l.line + t.text.length, function(e) {
						var t = d(e);
						t > i.maxLineLength && (i.maxLine = e, i.maxLineLength = t, i.maxLineChanged = !0, s = !1)
					}), s && (e.curOp.updateMaxLine = !0)), r.frontier = Math.min(r.frontier, l.line), Fe(e, 400);
					var u = t.text.length - (a.line - l.line) - 1;
					t.full ? Et(e) : l.line != a.line || 1 != t.text.length || Gr(e.doc, t) ? Et(e, l.line, a.line + 1, u) : It(e, l.line, "text");
					var h = Mi(e, "changes"),
						f = Mi(e, "change");
					if (f || h) {
						var p = {
							from: l,
							to: a,
							text: t.text,
							removed: t.removed,
							origin: t.origin
						};
						f && Ci(e, "change", e, p), h && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(p)
					}
					e.display.selForContextMenu = null
				}

				function Wn(e, t, n, r, i) {
					if (r || (r = n), zo(r, n) < 0) {
						var o = r;
						r = n, n = o
					}
					"string" == typeof t && (t = e.splitLines(t)), Ln(e, {
						from: n,
						to: r,
						text: t,
						origin: i
					})
				}

				function Hn(e, t) {
					if (!Li(e, "scrollCursorIntoView")) {
						var n = e.display,
							r = n.sizer.getBoundingClientRect(),
							i = null;
						if (t.top + r.top < 0 ? i = !0 : t.bottom + r.top > (window.innerHeight || document.documentElement.clientHeight) && (i = !1), null != i && !To) {
							var o = _i("div", "​", null, "position: absolute; top: " + (t.top - n.viewOffset - je(e.display)) + "px; height: " + (t.bottom - t.top + Ue(e) + n.barHeight) + "px; left: " + t.left + "px; width: 2px;");
							e.display.lineSpace.appendChild(o), o.scrollIntoView(i), e.display.lineSpace.removeChild(o)
						}
					}
				}

				function Dn(e, t, n, r) {
					null == r && (r = 0);
					for (var i = 0; 5 > i; i++) {
						var o = !1,
							l = ht(e, t),
							a = n && n != t ? ht(e, n) : l,
							s = In(e, Math.min(l.left, a.left), Math.min(l.top, a.top) - r, Math.max(l.left, a.left), Math.max(l.bottom, a.bottom) + r),
							c = e.doc.scrollTop,
							u = e.doc.scrollLeft;
						if (null != s.scrollTop && (nn(e, s.scrollTop), Math.abs(e.doc.scrollTop - c) > 1 && (o = !0)), null != s.scrollLeft && (rn(e, s.scrollLeft), Math.abs(e.doc.scrollLeft - u) > 1 && (o = !0)), !o) break
					}
					return l
				}

				function En(e, t, n, r, i) {
					var o = In(e, t, n, r, i);
					null != o.scrollTop && nn(e, o.scrollTop), null != o.scrollLeft && rn(e, o.scrollLeft)
				}

				function In(e, t, n, r, i) {
					var o = e.display,
						l = vt(e.display);
					0 > n && (n = 0);
					var a = e.curOp && null != e.curOp.scrollTop ? e.curOp.scrollTop : o.scroller.scrollTop,
						s = Ve(e),
						c = {};
					i - n > s && (i = n + s);
					var u = e.doc.height + qe(o),
						d = l > n,
						h = i > u - l;
					if (a > n) c.scrollTop = d ? 0 : n;
					else if (i > a + s) {
						var f = Math.min(n, (h ? u : i) - s);
						f != a && (c.scrollTop = f)
					}
					var p = e.curOp && null != e.curOp.scrollLeft ? e.curOp.scrollLeft : o.scroller.scrollLeft,
						m = $e(e) - (e.options.fixedGutter ? o.gutters.offsetWidth : 0),
						g = r - t > m;
					return g && (r = t + m), 10 > t ? c.scrollLeft = 0 : p > t ? c.scrollLeft = Math.max(0, t - (g ? 0 : 10)) : r > m + p - 3 && (c.scrollLeft = r + (g ? 0 : 10) - m), c
				}

				function Pn(e, t, n) {
					(null != t || null != n) && Fn(e), null != t && (e.curOp.scrollLeft = (null == e.curOp.scrollLeft ? e.doc.scrollLeft : e.curOp.scrollLeft) + t), null != n && (e.curOp.scrollTop = (null == e.curOp.scrollTop ? e.doc.scrollTop : e.curOp.scrollTop) + n)
				}

				function zn(e) {
					Fn(e);
					var t = e.getCursor(),
						n = t,
						r = t;
					e.options.lineWrapping || (n = t.ch ? Po(t.line, t.ch - 1) : t, r = Po(t.line, t.ch + 1)), e.curOp.scrollToPos = {
						from: n,
						to: r,
						margin: e.options.cursorScrollMargin,
						isCursor: !0
					}
				}

				function Fn(e) {
					var t = e.curOp.scrollToPos;
					if (t) {
						e.curOp.scrollToPos = null;
						var n = ft(e, t.from),
							r = ft(e, t.to),
							i = In(e, Math.min(n.left, r.left), Math.min(n.top, r.top) - t.margin, Math.max(n.right, r.right), Math.max(n.bottom, r.bottom) + t.margin);
						e.scrollTo(i.scrollLeft, i.scrollTop)
					}
				}

				function Rn(e, t, n, r) {
					var i, o = e.doc;
					null == n && (n = "add"), "smart" == n && (o.mode.indent ? i = _e(e, t) : n = "prev");
					var l = e.options.tabSize,
						a = Yr(o, t),
						s = Fl(a.text, null, l);
					a.stateAfter && (a.stateAfter = null);
					var c, u = a.text.match(/^\s*/)[0];
					if (r || /\S/.test(a.text)) {
						if ("smart" == n && (c = o.mode.indent(i, a.text.slice(u.length), a.text), c == El || c > 150)) {
							if (!r) return;
							n = "prev"
						}
					} else c = 0, n = "not";
					"prev" == n ? c = t > o.first ? Fl(Yr(o, t - 1).text, null, l) : 0 : "add" == n ? c = s + e.options.indentUnit : "subtract" == n ? c = s - e.options.indentUnit : "number" == typeof n && (c = s + n), c = Math.max(0, c);
					var d = "",
						h = 0;
					if (e.options.indentWithTabs)
						for (var f = Math.floor(c / l); f; --f) h += l, d += "	";
					if (c > h && (d += Oi(c - h)), d != u) return Wn(o, d, Po(t, 0), Po(t, u.length), "+input"), a.stateAfter = null, !0;
					for (var f = 0; f < o.sel.ranges.length; f++) {
						var p = o.sel.ranges[f];
						if (p.head.line == t && p.head.ch < u.length) {
							var h = Po(t, u.length);
							Ce(o, f, new he(h, h));
							break
						}
					}
				}

				function Bn(e, t, n, r) {
					var i = t,
						o = t;
					return "number" == typeof t ? o = Yr(e, me(e, t)) : i = ei(t), null == i ? null : (r(o, i) && e.cm && It(e.cm, i, n), o)
				}

				function _n(e, t) {
					for (var n = e.doc.sel.ranges, r = [], i = 0; i < n.length; i++) {
						for (var o = t(n[i]); r.length && zo(o.from, Wi(r).to) <= 0;) {
							var l = r.pop();
							if (zo(l.from, o.from) < 0) {
								o.from = l.from;
								break
							}
						}
						r.push(o)
					}
					Nt(e, function() {
						for (var t = r.length - 1; t >= 0; t--) Wn(e.doc, "", r[t].from, r[t].to, "+delete");
						zn(e)
					})
				}

				function jn(e, t, n, r, i) {
					function o() {
						var t = a + n;
						return t < e.first || t >= e.first + e.size ? d = !1 : (a = t, u = Yr(e, t))
					}

					function l(e) {
						var t = (i ? uo : ho)(u, s, n, !0);
						if (null == t) {
							if (e || !o()) return d = !1;
							s = i ? (0 > n ? ro : no)(u) : 0 > n ? u.text.length : 0
						} else s = t;
						return !0
					}
					var a = t.line,
						s = t.ch,
						c = n,
						u = Yr(e, a),
						d = !0;
					if ("char" == r) l();
					else if ("column" == r) l(!0);
					else if ("word" == r || "group" == r)
						for (var h = null, f = "group" == r, p = e.cm && e.cm.getHelper(t, "wordChars"), m = !0; !(0 > n) || l(!m); m = !1) {
							var g = u.text.charAt(s) || "\n",
								v = Fi(g, p) ? "w" : f && "\n" == g ? "n" : !f || /\s/.test(g) ? null : "p";
							if (!f || m || v || (v = "s"), h && h != v) {
								0 > n && (n = 1, l());
								break
							}
							if (v && (h = v), n > 0 && !l(!m)) break
						}
					var y = He(e, Po(a, s), c, !0);
					return d || (y.hitSide = !0), y
				}

				function qn(e, t, n, r) {
					var i, o = e.doc,
						l = t.left;
					if ("page" == r) {
						var a = Math.min(e.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight);
						i = t.top + n * (a - (0 > n ? 1.5 : .5) * vt(e.display))
					} else "line" == r && (i = n > 0 ? t.bottom + 3 : t.top - 3);
					for (;;) {
						var s = mt(e, l, i);
						if (!s.outside) break;
						if (0 > n ? 0 >= i : i >= o.height) {
							s.hitSide = !0;
							break
						}
						i += 5 * n
					}
					return s
				}

				function Gn(t, n, r, i) {
					e.defaults[t] = n, r && (Jo[t] = i ? function(e, t, n) {
						n != el && r(e, t, n)
					} : r)
				}

				function Un(e) {
					for (var t, n, r, i, o = e.split(/-(?!$)/), e = o[o.length - 1], l = 0; l < o.length - 1; l++) {
						var a = o[l];
						if (/^(cmd|meta|m)$/i.test(a)) i = !0;
						else if (/^a(lt)?$/i.test(a)) t = !0;
						else if (/^(c|ctrl|control)$/i.test(a)) n = !0;
						else {
							if (!/^s(hift)$/i.test(a)) throw new Error("Unrecognized modifier name: " + a);
							r = !0
						}
					}
					return t && (e = "Alt-" + e), n && (e = "Ctrl-" + e), i && (e = "Cmd-" + e), r && (e = "Shift-" + e), e
				}

				function $n(e) {
					return "string" == typeof e ? cl[e] : e
				}

				function Vn(e, t, n, r, i) {
					if (r && r.shared) return Kn(e, t, n, r, i);
					if (e.cm && !e.cm.curOp) return At(e.cm, Vn)(e, t, n, r, i);
					var o = new ml(e, i),
						l = zo(t, n);
					if (r && Pi(r, o, !1), l > 0 || 0 == l && o.clearWhenEmpty !== !1) return o;
					if (o.replacedWith && (o.collapsed = !0, o.widgetNode = _i("span", [o.replacedWith], "CodeMirror-widget"), r.handleMouseEvents || o.widgetNode.setAttribute("cm-ignore-events", "true"), r.insertLeft && (o.widgetNode.insertLeft = !0)), o.collapsed) {
						if (gr(e, t.line, t, n, o) || t.line != n.line && gr(e, n.line, t, n, o)) throw new Error("Inserting collapsed marker partially overlapping an existing one");
						Io = !0
					}
					o.addToHistory && si(e, {
						from: t,
						to: n,
						origin: "markText"
					}, e.sel, NaN);
					var a, s = t.line,
						c = e.cm;
					if (e.iter(s, n.line + 1, function(e) {
							c && o.collapsed && !c.options.lineWrapping && vr(e) == c.display.maxLine && (a = !0), o.collapsed && s != t.line && Jr(e, 0), tr(e, new Qn(o, s == t.line ? t.ch : null, s == n.line ? n.ch : null)), ++s
						}), o.collapsed && e.iter(t.line, n.line + 1, function(t) {
							wr(e, t) && Jr(t, 0)
						}), o.clearOnEnter && Nl(o, "beforeCursorEnter", function() {
							o.clear()
						}), o.readOnly && (Eo = !0, (e.history.done.length || e.history.undone.length) && e.clearHistory()), o.collapsed && (o.id = ++pl, o.atomic = !0), c) {
						if (a && (c.curOp.updateMaxLine = !0), o.collapsed) Et(c, t.line, n.line + 1);
						else if (o.className || o.title || o.startStyle || o.endStyle || o.css)
							for (var u = t.line; u <= n.line; u++) It(c, u, "text");
						o.atomic && Oe(c.doc), Ci(c, "markerAdded", c, o)
					}
					return o
				}

				function Kn(e, t, n, r, i) {
					r = Pi(r), r.shared = !1;
					var o = [Vn(e, t, n, r, i)],
						l = o[0],
						a = r.widgetNode;
					return Kr(e, function(e) {
						a && (r.widgetNode = a.cloneNode(!0)), o.push(Vn(e, ge(e, t), ge(e, n), r, i));
						for (var s = 0; s < e.linked.length; ++s)
							if (e.linked[s].isParent) return;
						l = Wi(o)
					}), new gl(o, l)
				}

				function Xn(e) {
					return e.findMarks(Po(e.first, 0), e.clipPos(Po(e.lastLine())), function(e) {
						return e.parent
					})
				}

				function Yn(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n],
							i = r.find(),
							o = e.clipPos(i.from),
							l = e.clipPos(i.to);
						if (zo(o, l)) {
							var a = Vn(e, o, l, r.primary, r.primary.type);
							r.markers.push(a), a.parent = r
						}
					}
				}

				function Zn(e) {
					for (var t = 0; t < e.length; t++) {
						var n = e[t],
							r = [n.primary.doc];
						Kr(n.primary.doc, function(e) {
							r.push(e)
						});
						for (var i = 0; i < n.markers.length; i++) {
							var o = n.markers[i]; - 1 == Hi(r, o.doc) && (o.parent = null, n.markers.splice(i--, 1))
						}
					}
				}

				function Qn(e, t, n) {
					this.marker = e, this.from = t, this.to = n
				}

				function Jn(e, t) {
					if (e)
						for (var n = 0; n < e.length; ++n) {
							var r = e[n];
							if (r.marker == t) return r
						}
				}

				function er(e, t) {
					for (var n, r = 0; r < e.length; ++r) e[r] != t && (n || (n = [])).push(e[r]);
					return n
				}

				function tr(e, t) {
					e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t], t.marker.attachLine(e)
				}

				function nr(e, t, n) {
					if (e)
						for (var r, i = 0; i < e.length; ++i) {
							var o = e[i],
								l = o.marker,
								a = null == o.from || (l.inclusiveLeft ? o.from <= t : o.from < t);
							if (a || o.from == t && "bookmark" == l.type && (!n || !o.marker.insertLeft)) {
								var s = null == o.to || (l.inclusiveRight ? o.to >= t : o.to > t);
								(r || (r = [])).push(new Qn(l, o.from, s ? null : o.to))
							}
						}
					return r
				}

				function rr(e, t, n) {
					if (e)
						for (var r, i = 0; i < e.length; ++i) {
							var o = e[i],
								l = o.marker,
								a = null == o.to || (l.inclusiveRight ? o.to >= t : o.to > t);
							if (a || o.from == t && "bookmark" == l.type && (!n || o.marker.insertLeft)) {
								var s = null == o.from || (l.inclusiveLeft ? o.from <= t : o.from < t);
								(r || (r = [])).push(new Qn(l, s ? null : o.from - t, null == o.to ? null : o.to - t))
							}
						}
					return r
				}

				function ir(e, t) {
					if (t.full) return null;
					var n = ye(e, t.from.line) && Yr(e, t.from.line).markedSpans,
						r = ye(e, t.to.line) && Yr(e, t.to.line).markedSpans;
					if (!n && !r) return null;
					var i = t.from.ch,
						o = t.to.ch,
						l = 0 == zo(t.from, t.to),
						a = nr(n, i, l),
						s = rr(r, o, l),
						c = 1 == t.text.length,
						u = Wi(t.text).length + (c ? i : 0);
					if (a)
						for (var d = 0; d < a.length; ++d) {
							var h = a[d];
							if (null == h.to) {
								var f = Jn(s, h.marker);
								f ? c && (h.to = null == f.to ? null : f.to + u) : h.to = i
							}
						}
					if (s)
						for (var d = 0; d < s.length; ++d) {
							var h = s[d];
							if (null != h.to && (h.to += u), null == h.from) {
								var f = Jn(a, h.marker);
								f || (h.from = u, c && (a || (a = [])).push(h))
							} else h.from += u, c && (a || (a = [])).push(h)
						}
					a && (a = or(a)), s && s != a && (s = or(s));
					var p = [a];
					if (!c) {
						var m, g = t.text.length - 2;
						if (g > 0 && a)
							for (var d = 0; d < a.length; ++d) null == a[d].to && (m || (m = [])).push(new Qn(a[d].marker, null, null));
						for (var d = 0; g > d; ++d) p.push(m);
						p.push(s)
					}
					return p
				}

				function or(e) {
					for (var t = 0; t < e.length; ++t) {
						var n = e[t];
						null != n.from && n.from == n.to && n.marker.clearWhenEmpty !== !1 && e.splice(t--, 1)
					}
					return e.length ? e : null
				}

				function lr(e, t) {
					var n = pi(e, t),
						r = ir(e, t);
					if (!n) return r;
					if (!r) return n;
					for (var i = 0; i < n.length; ++i) {
						var o = n[i],
							l = r[i];
						if (o && l) e: for (var a = 0; a < l.length; ++a) {
							for (var s = l[a], c = 0; c < o.length; ++c)
								if (o[c].marker == s.marker) continue e;
							o.push(s)
						} else l && (n[i] = l)
					}
					return n
				}

				function ar(e, t, n) {
					var r = null;
					if (e.iter(t.line, n.line + 1, function(e) {
							if (e.markedSpans)
								for (var t = 0; t < e.markedSpans.length; ++t) {
									var n = e.markedSpans[t].marker;
									!n.readOnly || r && -1 != Hi(r, n) || (r || (r = [])).push(n)
								}
						}), !r) return null;
					for (var i = [{
							from: t,
							to: n
						}], o = 0; o < r.length; ++o)
						for (var l = r[o], a = l.find(0), s = 0; s < i.length; ++s) {
							var c = i[s];
							if (!(zo(c.to, a.from) < 0 || zo(c.from, a.to) > 0)) {
								var u = [s, 1],
									d = zo(c.from, a.from),
									h = zo(c.to, a.to);
								(0 > d || !l.inclusiveLeft && !d) && u.push({
									from: c.from,
									to: a.from
								}), (h > 0 || !l.inclusiveRight && !h) && u.push({
									from: a.to,
									to: c.to
								}), i.splice.apply(i, u), s += u.length - 1
							}
						}
					return i
				}

				function sr(e) {
					var t = e.markedSpans;
					if (t) {
						for (var n = 0; n < t.length; ++n) t[n].marker.detachLine(e);
						e.markedSpans = null
					}
				}

				function cr(e, t) {
					if (t) {
						for (var n = 0; n < t.length; ++n) t[n].marker.attachLine(e);
						e.markedSpans = t
					}
				}

				function ur(e) {
					return e.inclusiveLeft ? -1 : 0
				}

				function dr(e) {
					return e.inclusiveRight ? 1 : 0
				}

				function hr(e, t) {
					var n = e.lines.length - t.lines.length;
					if (0 != n) return n;
					var r = e.find(),
						i = t.find(),
						o = zo(r.from, i.from) || ur(e) - ur(t);
					if (o) return -o;
					var l = zo(r.to, i.to) || dr(e) - dr(t);
					return l ? l : t.id - e.id
				}

				function fr(e, t) {
					var n, r = Io && e.markedSpans;
					if (r)
						for (var i, o = 0; o < r.length; ++o) i = r[o], i.marker.collapsed && null == (t ? i.from : i.to) && (!n || hr(n, i.marker) < 0) && (n = i.marker);
					return n
				}

				function pr(e) {
					return fr(e, !0)
				}

				function mr(e) {
					return fr(e, !1)
				}

				function gr(e, t, n, r, i) {
					var o = Yr(e, t),
						l = Io && o.markedSpans;
					if (l)
						for (var a = 0; a < l.length; ++a) {
							var s = l[a];
							if (s.marker.collapsed) {
								var c = s.marker.find(0),
									u = zo(c.from, n) || ur(s.marker) - ur(i),
									d = zo(c.to, r) || dr(s.marker) - dr(i);
								if (!(u >= 0 && 0 >= d || 0 >= u && d >= 0) && (0 >= u && (zo(c.to, n) > 0 || s.marker.inclusiveRight && i.inclusiveLeft) || u >= 0 && (zo(c.from, r) < 0 || s.marker.inclusiveLeft && i.inclusiveRight))) return !0
							}
						}
				}

				function vr(e) {
					for (var t; t = pr(e);) e = t.find(-1, !0).line;
					return e
				}

				function yr(e) {
					for (var t, n; t = mr(e);) e = t.find(1, !0).line, (n || (n = [])).push(e);
					return n
				}

				function xr(e, t) {
					var n = Yr(e, t),
						r = vr(n);
					return n == r ? t : ei(r)
				}

				function br(e, t) {
					if (t > e.lastLine()) return t;
					var n, r = Yr(e, t);
					if (!wr(e, r)) return t;
					for (; n = mr(r);) r = n.find(1, !0).line;
					return ei(r) + 1
				}

				function wr(e, t) {
					var n = Io && t.markedSpans;
					if (n)
						for (var r, i = 0; i < n.length; ++i)
							if (r = n[i], r.marker.collapsed) {
								if (null == r.from) return !0;
								if (!r.marker.widgetNode && 0 == r.from && r.marker.inclusiveLeft && kr(e, t, r)) return !0
							}
				}

				function kr(e, t, n) {
					if (null == n.to) {
						var r = n.marker.find(1, !0);
						return kr(e, r.line, Jn(r.line.markedSpans, n.marker))
					}
					if (n.marker.inclusiveRight && n.to == t.text.length) return !0;
					for (var i, o = 0; o < t.markedSpans.length; ++o)
						if (i = t.markedSpans[o], i.marker.collapsed && !i.marker.widgetNode && i.from == n.to && (null == i.to || i.to != n.from) && (i.marker.inclusiveLeft || n.marker.inclusiveRight) && kr(e, t, i)) return !0
				}

				function Cr(e, t, n) {
					ni(t) < (e.curOp && e.curOp.scrollTop || e.doc.scrollTop) && Pn(e, null, n)
				}

				function Sr(e) {
					if (null != e.height) return e.height;
					var t = e.doc.cm;
					if (!t) return 0;
					if (!$l(document.body, e.node)) {
						var n = "position: relative;";
						e.coverGutter && (n += "margin-left: -" + t.display.gutters.offsetWidth + "px;"), e.noHScroll && (n += "width: " + t.display.wrapper.clientWidth + "px;"), qi(t.display.measure, _i("div", [e.node], null, n))
					}
					return e.height = e.node.offsetHeight
				}

				function Lr(e, t, n, r) {
					var i = new vl(e, n, r),
						o = e.cm;
					return o && i.noHScroll && (o.display.alignWidgets = !0), Bn(e, t, "widget", function(t) {
						var n = t.widgets || (t.widgets = []);
						if (null == i.insertAt ? n.push(i) : n.splice(Math.min(n.length - 1, Math.max(0, i.insertAt)), 0, i), i.line = t, o && !wr(e, t)) {
							var r = ni(t) < e.scrollTop;
							Jr(t, t.height + Sr(i)), r && Pn(o, null, i.height), o.curOp.forceUpdate = !0
						}
						return !0
					}), i
				}

				function Tr(e, t, n, r) {
					e.text = t, e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null), null != e.order && (e.order = null), sr(e), cr(e, n);
					var i = r ? r(e) : 1;
					i != e.height && Jr(e, i)
				}

				function Mr(e) {
					e.parent = null, sr(e)
				}

				function Nr(e, t) {
					if (e)
						for (;;) {
							var n = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
							if (!n) break;
							e = e.slice(0, n.index) + e.slice(n.index + n[0].length);
							var r = n[1] ? "bgClass" : "textClass";
							null == t[r] ? t[r] = n[2] : new RegExp("(?:^|s)" + n[2] + "(?:$|s)").test(t[r]) || (t[r] += " " + n[2])
						}
					return e
				}

				function Ar(t, n) {
					if (t.blankLine) return t.blankLine(n);
					if (t.innerMode) {
						var r = e.innerMode(t, n);
						return r.mode.blankLine ? r.mode.blankLine(r.state) : void 0
					}
				}

				function Or(t, n, r, i) {
					for (var o = 0; 10 > o; o++) {
						i && (i[0] = e.innerMode(t, r).mode);
						var l = t.token(n, r);
						if (n.pos > n.start) return l
					}
					throw new Error("Mode " + t.name + " failed to advance stream.")
				}

				function Wr(e, t, n, r) {
					function i(e) {
						return {
							start: d.start,
							end: d.pos,
							string: d.current(),
							type: o || null,
							state: e ? ll(l.mode, u) : u
						}
					}
					var o, l = e.doc,
						a = l.mode;
					t = ge(l, t);
					var s, c = Yr(l, t.line),
						u = _e(e, t.line, n),
						d = new fl(c.text, e.options.tabSize);
					for (r && (s = []);
						(r || d.pos < t.ch) && !d.eol();) d.start = d.pos, o = Or(a, d, u), r && s.push(i(!0));
					return r ? s : i()
				}

				function Hr(e, t, n, r, i, o, l) {
					var a = n.flattenSpans;
					null == a && (a = e.options.flattenSpans);
					var s, c = 0,
						u = null,
						d = new fl(t, e.options.tabSize),
						h = e.options.addModeClass && [null];
					for ("" == t && Nr(Ar(n, r), o); !d.eol();) {
						if (d.pos > e.options.maxHighlightLength ? (a = !1, l && Ir(e, t, r, d.pos), d.pos = t.length, s = null) : s = Nr(Or(n, d, r, h), o), h) {
							var f = h[0].name;
							f && (s = "m-" + (s ? f + " " + s : f))
						}
						if (!a || u != s) {
							for (; c < d.start;) c = Math.min(d.start, c + 5e4), i(c, u);
							u = s
						}
						d.start = d.pos
					}
					for (; c < d.pos;) {
						var p = Math.min(d.pos, c + 5e4);
						i(p, u), c = p
					}
				}

				function Dr(e, t, n, r) {
					var i = [e.state.modeGen],
						o = {};
					Hr(e, t.text, e.doc.mode, n, function(e, t) {
						i.push(e, t)
					}, o, r);
					for (var l = 0; l < e.state.overlays.length; ++l) {
						var a = e.state.overlays[l],
							s = 1,
							c = 0;
						Hr(e, t.text, a.mode, !0, function(e, t) {
							for (var n = s; e > c;) {
								var r = i[s];
								r > e && i.splice(s, 1, e, i[s + 1], r), s += 2, c = Math.min(e, r)
							}
							if (t)
								if (a.opaque) i.splice(n, s - n, e, "cm-overlay " + t), s = n + 2;
								else
									for (; s > n; n += 2) {
										var o = i[n + 1];
										i[n + 1] = (o ? o + " " : "") + "cm-overlay " + t
									}
						}, o)
					}
					return {
						styles: i,
						classes: o.bgClass || o.textClass ? o : null
					}
				}

				function Er(e, t, n) {
					if (!t.styles || t.styles[0] != e.state.modeGen) {
						var r = _e(e, ei(t)),
							i = Dr(e, t, t.text.length > e.options.maxHighlightLength ? ll(e.doc.mode, r) : r);
						t.stateAfter = r, t.styles = i.styles, i.classes ? t.styleClasses = i.classes : t.styleClasses && (t.styleClasses = null), n === e.doc.frontier && e.doc.frontier++
					}
					return t.styles
				}

				function Ir(e, t, n, r) {
					var i = e.doc.mode,
						o = new fl(t, e.options.tabSize);
					for (o.start = o.pos = r || 0, "" == t && Ar(i, n); !o.eol();) Or(i, o, n), o.start = o.pos
				}

				function Pr(e, t) {
					if (!e || /^\s*$/.test(e)) return null;
					var n = t.addModeClass ? bl : xl;
					return n[e] || (n[e] = e.replace(/\S+/g, "cm-$&"))
				}

				function zr(e, t) {
					var n = _i("span", null, null, bo ? "padding-right: .1px" : null),
						r = {
							pre: _i("pre", [n], "CodeMirror-line"),
							content: n,
							col: 0,
							pos: 0,
							cm: e,
							splitSpaces: (yo || bo) && e.getOption("lineWrapping")
						};
					t.measure = {};
					for (var i = 0; i <= (t.rest ? t.rest.length : 0); i++) {
						var o, l = i ? t.rest[i - 1] : t.line;
						r.pos = 0, r.addToken = Rr, Zi(e.display.measure) && (o = ri(l)) && (r.addToken = _r(r.addToken, o)), r.map = [];
						var a = t != e.display.externalMeasured && ei(l);
						qr(l, r, Er(e, l, a)), l.styleClasses && (l.styleClasses.bgClass && (r.bgClass = $i(l.styleClasses.bgClass, r.bgClass || "")), l.styleClasses.textClass && (r.textClass = $i(l.styleClasses.textClass, r.textClass || ""))), 0 == r.map.length && r.map.push(0, 0, r.content.appendChild(Yi(e.display.measure))), 0 == i ? (t.measure.map = r.map, t.measure.cache = {}) : ((t.measure.maps || (t.measure.maps = [])).push(r.map), (t.measure.caches || (t.measure.caches = [])).push({}))
					}
					return bo && /\bcm-tab\b/.test(r.content.lastChild.className) && (r.content.className = "cm-tab-wrap-hack"), Wl(e, "renderLine", e, t.line, r.pre), r.pre.className && (r.textClass = $i(r.pre.className, r.textClass || "")), r
				}

				function Fr(e) {
					var t = _i("span", "•", "cm-invalidchar");
					return t.title = "\\u" + e.charCodeAt(0).toString(16), t.setAttribute("aria-label", t.title), t
				}

				function Rr(e, t, n, r, i, o, l) {
					if (t) {
						var a = e.splitSpaces ? t.replace(/ {3,}/g, Br) : t,
							s = e.cm.state.specialChars,
							c = !1;
						if (s.test(t))
							for (var u = document.createDocumentFragment(), d = 0;;) {
								s.lastIndex = d;
								var h = s.exec(t),
									f = h ? h.index - d : t.length - d;
								if (f) {
									var p = document.createTextNode(a.slice(d, d + f));
									yo && 9 > xo ? u.appendChild(_i("span", [p])) : u.appendChild(p), e.map.push(e.pos, e.pos + f, p), e.col += f, e.pos += f
								}
								if (!h) break;
								if (d += f + 1, "	" == h[0]) {
									var m = e.cm.options.tabSize,
										g = m - e.col % m,
										p = u.appendChild(_i("span", Oi(g), "cm-tab"));
									p.setAttribute("role", "presentation"), p.setAttribute("cm-text", "	"), e.col += g
								} else if ("\r" == h[0] || "\n" == h[0]) {
									var p = u.appendChild(_i("span", "\r" == h[0] ? "␍" : "␤", "cm-invalidchar"));
									p.setAttribute("cm-text", h[0]), e.col += 1
								} else {
									var p = e.cm.options.specialCharPlaceholder(h[0]);
									p.setAttribute("cm-text", h[0]), yo && 9 > xo ? u.appendChild(_i("span", [p])) : u.appendChild(p), e.col += 1
								}
								e.map.push(e.pos, e.pos + 1, p), e.pos++
							} else {
								e.col += t.length;
								var u = document.createTextNode(a);
								e.map.push(e.pos, e.pos + t.length, u), yo && 9 > xo && (c = !0), e.pos += t.length
							}
						if (n || r || i || c || l) {
							var v = n || "";
							r && (v += r), i && (v += i);
							var y = _i("span", [u], v, l);
							return o && (y.title = o), e.content.appendChild(y)
						}
						e.content.appendChild(u)
					}
				}

				function Br(e) {
					for (var t = " ", n = 0; n < e.length - 2; ++n) t += n % 2 ? " " : " ";
					return t += " "
				}

				function _r(e, t) {
					return function(n, r, i, o, l, a, s) {
						i = i ? i + " cm-force-border" : "cm-force-border";
						for (var c = n.pos, u = c + r.length;;) {
							for (var d = 0; d < t.length; d++) {
								var h = t[d];
								if (h.to > c && h.from <= c) break
							}
							if (h.to >= u) return e(n, r, i, o, l, a, s);
							e(n, r.slice(0, h.to - c), i, o, null, a, s), o = null, r = r.slice(h.to - c), c = h.to
						}
					}
				}

				function jr(e, t, n, r) {
					var i = !r && n.widgetNode;
					i && e.map.push(e.pos, e.pos + t, i), !r && e.cm.display.input.needsContentAttribute && (i || (i = e.content.appendChild(document.createElement("span"))), i.setAttribute("cm-marker", n.id)), i && (e.cm.display.input.setUneditable(i), e.content.appendChild(i)), e.pos += t
				}

				function qr(e, t, n) {
					var r = e.markedSpans,
						i = e.text,
						o = 0;
					if (r)
						for (var l, a, s, c, u, d, h, f = i.length, p = 0, m = 1, g = "", v = 0;;) {
							if (v == p) {
								s = c = u = d = a = "", h = null, v = 1 / 0;
								for (var y = [], x = 0; x < r.length; ++x) {
									var b = r[x],
										w = b.marker;
									"bookmark" == w.type && b.from == p && w.widgetNode ? y.push(w) : b.from <= p && (null == b.to || b.to > p || w.collapsed && b.to == p && b.from == p) ? (null != b.to && b.to != p && v > b.to && (v = b.to, c = ""), w.className && (s += " " + w.className), w.css && (a = w.css), w.startStyle && b.from == p && (u += " " + w.startStyle), w.endStyle && b.to == v && (c += " " + w.endStyle), w.title && !d && (d = w.title), w.collapsed && (!h || hr(h.marker, w) < 0) && (h = b)) : b.from > p && v > b.from && (v = b.from)
								}
								if (h && (h.from || 0) == p) {
									if (jr(t, (null == h.to ? f + 1 : h.to) - p, h.marker, null == h.from), null == h.to) return;
									h.to == p && (h = !1)
								}
								if (!h && y.length)
									for (var x = 0; x < y.length; ++x) jr(t, 0, y[x])
							}
							if (p >= f) break;
							for (var k = Math.min(f, v);;) {
								if (g) {
									var C = p + g.length;
									if (!h) {
										var S = C > k ? g.slice(0, k - p) : g;
										t.addToken(t, S, l ? l + s : s, u, p + S.length == v ? c : "", d, a)
									}
									if (C >= k) {
										g = g.slice(k - p), p = k;
										break
									}
									p = C, u = ""
								}
								g = i.slice(o, o = n[m++]), l = Pr(n[m++], t.cm.options)
							}
						} else
							for (var m = 1; m < n.length; m += 2) t.addToken(t, i.slice(o, o = n[m]), Pr(n[m + 1], t.cm.options))
				}

				function Gr(e, t) {
					return 0 == t.from.ch && 0 == t.to.ch && "" == Wi(t.text) && (!e.cm || e.cm.options.wholeLineUpdateBefore)
				}

				function Ur(e, t, n, r) {
					function i(e) {
						return n ? n[e] : null
					}

					function o(e, n, i) {
						Tr(e, n, i, r), Ci(e, "change", e, t)
					}

					function l(e, t) {
						for (var n = e, o = []; t > n; ++n) o.push(new yl(c[n], i(n), r));
						return o
					}
					var a = t.from,
						s = t.to,
						c = t.text,
						u = Yr(e, a.line),
						d = Yr(e, s.line),
						h = Wi(c),
						f = i(c.length - 1),
						p = s.line - a.line;
					if (t.full) e.insert(0, l(0, c.length)), e.remove(c.length, e.size - c.length);
					else if (Gr(e, t)) {
						var m = l(0, c.length - 1);
						o(d, d.text, f), p && e.remove(a.line, p), m.length && e.insert(a.line, m)
					} else if (u == d)
						if (1 == c.length) o(u, u.text.slice(0, a.ch) + h + u.text.slice(s.ch), f);
						else {
							var m = l(1, c.length - 1);
							m.push(new yl(h + u.text.slice(s.ch), f, r)), o(u, u.text.slice(0, a.ch) + c[0], i(0)), e.insert(a.line + 1, m)
						} else if (1 == c.length) o(u, u.text.slice(0, a.ch) + c[0] + d.text.slice(s.ch), i(0)), e.remove(a.line + 1, p);
					else {
						o(u, u.text.slice(0, a.ch) + c[0], i(0)), o(d, h + d.text.slice(s.ch), f);
						var m = l(1, c.length - 1);
						p > 1 && e.remove(a.line + 1, p - 1), e.insert(a.line + 1, m)
					}
					Ci(e, "change", e, t)
				}

				function $r(e) {
					this.lines = e, this.parent = null;
					for (var t = 0, n = 0; t < e.length; ++t) e[t].parent = this, n += e[t].height;
					this.height = n
				}

				function Vr(e) {
					this.children = e;
					for (var t = 0, n = 0, r = 0; r < e.length; ++r) {
						var i = e[r];
						t += i.chunkSize(), n += i.height, i.parent = this
					}
					this.size = t, this.height = n, this.parent = null
				}

				function Kr(e, t, n) {
					function r(e, i, o) {
						if (e.linked)
							for (var l = 0; l < e.linked.length; ++l) {
								var a = e.linked[l];
								if (a.doc != i) {
									var s = o && a.sharedHist;
									(!n || s) && (t(a.doc, s), r(a.doc, e, s))
								}
							}
					}
					r(e, null, !0)
				}

				function Xr(e, t) {
					if (t.cm) throw new Error("This document is already in use.");
					e.doc = t, t.cm = e, l(e), n(e), e.options.lineWrapping || h(e), e.options.mode = t.modeOption, Et(e)
				}

				function Yr(e, t) {
					if (t -= e.first, 0 > t || t >= e.size) throw new Error("There is no line " + (t + e.first) + " in the document.");
					for (var n = e; !n.lines;)
						for (var r = 0;; ++r) {
							var i = n.children[r],
								o = i.chunkSize();
							if (o > t) {
								n = i;
								break
							}
							t -= o
						}
					return n.lines[t]
				}

				function Zr(e, t, n) {
					var r = [],
						i = t.line;
					return e.iter(t.line, n.line + 1, function(e) {
						var o = e.text;
						i == n.line && (o = o.slice(0, n.ch)), i == t.line && (o = o.slice(t.ch)), r.push(o), ++i
					}), r
				}

				function Qr(e, t, n) {
					var r = [];
					return e.iter(t, n, function(e) {
						r.push(e.text)
					}), r
				}

				function Jr(e, t) {
					var n = t - e.height;
					if (n)
						for (var r = e; r; r = r.parent) r.height += n
				}

				function ei(e) {
					if (null == e.parent) return null;
					for (var t = e.parent, n = Hi(t.lines, e), r = t.parent; r; t = r, r = r.parent)
						for (var i = 0; r.children[i] != t; ++i) n += r.children[i].chunkSize();
					return n + t.first
				}

				function ti(e, t) {
					var n = e.first;
					e: do {
						for (var r = 0; r < e.children.length; ++r) {
							var i = e.children[r],
								o = i.height;
							if (o > t) {
								e = i;
								continue e
							}
							t -= o, n += i.chunkSize()
						}
						return n
					} while (!e.lines);
					for (var r = 0; r < e.lines.length; ++r) {
						var l = e.lines[r],
							a = l.height;
						if (a > t) break;
						t -= a
					}
					return n + r
				}

				function ni(e) {
					e = vr(e);
					for (var t = 0, n = e.parent, r = 0; r < n.lines.length; ++r) {
						var i = n.lines[r];
						if (i == e) break;
						t += i.height
					}
					for (var o = n.parent; o; n = o, o = n.parent)
						for (var r = 0; r < o.children.length; ++r) {
							var l = o.children[r];
							if (l == n) break;
							t += l.height
						}
					return t
				}

				function ri(e) {
					var t = e.order;
					return null == t && (t = e.order = oa(e.text)), t
				}

				function ii(e) {
					this.done = [], this.undone = [], this.undoDepth = 1 / 0, this.lastModTime = this.lastSelTime = 0,
						this.lastOp = this.lastSelOp = null, this.lastOrigin = this.lastSelOrigin = null, this.generation = this.maxGeneration = e || 1
				}

				function oi(e, t) {
					var n = {
						from: V(t.from),
						to: Zo(t),
						text: Zr(e, t.from, t.to)
					};
					return hi(e, n, t.from.line, t.to.line + 1), Kr(e, function(e) {
						hi(e, n, t.from.line, t.to.line + 1)
					}, !0), n
				}

				function li(e) {
					for (; e.length;) {
						var t = Wi(e);
						if (!t.ranges) break;
						e.pop()
					}
				}

				function ai(e, t) {
					return t ? (li(e.done), Wi(e.done)) : e.done.length && !Wi(e.done).ranges ? Wi(e.done) : e.done.length > 1 && !e.done[e.done.length - 2].ranges ? (e.done.pop(), Wi(e.done)) : void 0
				}

				function si(e, t, n, r) {
					var i = e.history;
					i.undone.length = 0;
					var o, l = +new Date;
					if ((i.lastOp == r || i.lastOrigin == t.origin && t.origin && ("+" == t.origin.charAt(0) && e.cm && i.lastModTime > l - e.cm.options.historyEventDelay || "*" == t.origin.charAt(0))) && (o = ai(i, i.lastOp == r))) {
						var a = Wi(o.changes);
						0 == zo(t.from, t.to) && 0 == zo(t.from, a.to) ? a.to = Zo(t) : o.changes.push(oi(e, t))
					} else {
						var s = Wi(i.done);
						for (s && s.ranges || di(e.sel, i.done), o = {
								changes: [oi(e, t)],
								generation: i.generation
							}, i.done.push(o); i.done.length > i.undoDepth;) i.done.shift(), i.done[0].ranges || i.done.shift()
					}
					i.done.push(n), i.generation = ++i.maxGeneration, i.lastModTime = i.lastSelTime = l, i.lastOp = i.lastSelOp = r, i.lastOrigin = i.lastSelOrigin = t.origin, a || Wl(e, "historyAdded")
				}

				function ci(e, t, n, r) {
					var i = t.charAt(0);
					return "*" == i || "+" == i && n.ranges.length == r.ranges.length && n.somethingSelected() == r.somethingSelected() && new Date - e.history.lastSelTime <= (e.cm ? e.cm.options.historyEventDelay : 500)
				}

				function ui(e, t, n, r) {
					var i = e.history,
						o = r && r.origin;
					n == i.lastSelOp || o && i.lastSelOrigin == o && (i.lastModTime == i.lastSelTime && i.lastOrigin == o || ci(e, o, Wi(i.done), t)) ? i.done[i.done.length - 1] = t : di(t, i.done), i.lastSelTime = +new Date, i.lastSelOrigin = o, i.lastSelOp = n, r && r.clearRedo !== !1 && li(i.undone)
				}

				function di(e, t) {
					var n = Wi(t);
					n && n.ranges && n.equals(e) || t.push(e)
				}

				function hi(e, t, n, r) {
					var i = t["spans_" + e.id],
						o = 0;
					e.iter(Math.max(e.first, n), Math.min(e.first + e.size, r), function(n) {
						n.markedSpans && ((i || (i = t["spans_" + e.id] = {}))[o] = n.markedSpans), ++o
					})
				}

				function fi(e) {
					if (!e) return null;
					for (var t, n = 0; n < e.length; ++n) e[n].marker.explicitlyCleared ? t || (t = e.slice(0, n)) : t && t.push(e[n]);
					return t ? t.length ? t : null : e
				}

				function pi(e, t) {
					var n = t["spans_" + e.id];
					if (!n) return null;
					for (var r = 0, i = []; r < t.text.length; ++r) i.push(fi(n[r]));
					return i
				}

				function mi(e, t, n) {
					for (var r = 0, i = []; r < e.length; ++r) {
						var o = e[r];
						if (o.ranges) i.push(n ? de.prototype.deepCopy.call(o) : o);
						else {
							var l = o.changes,
								a = [];
							i.push({
								changes: a
							});
							for (var s = 0; s < l.length; ++s) {
								var c, u = l[s];
								if (a.push({
										from: u.from,
										to: u.to,
										text: u.text
									}), t)
									for (var d in u)(c = d.match(/^spans_(\d+)$/)) && Hi(t, Number(c[1])) > -1 && (Wi(a)[d] = u[d], delete u[d])
							}
						}
					}
					return i
				}

				function gi(e, t, n, r) {
					n < e.line ? e.line += r : t < e.line && (e.line = t, e.ch = 0)
				}

				function vi(e, t, n, r) {
					for (var i = 0; i < e.length; ++i) {
						var o = e[i],
							l = !0;
						if (o.ranges) {
							o.copied || (o = e[i] = o.deepCopy(), o.copied = !0);
							for (var a = 0; a < o.ranges.length; a++) gi(o.ranges[a].anchor, t, n, r), gi(o.ranges[a].head, t, n, r)
						} else {
							for (var a = 0; a < o.changes.length; ++a) {
								var s = o.changes[a];
								if (n < s.from.line) s.from = Po(s.from.line + r, s.from.ch), s.to = Po(s.to.line + r, s.to.ch);
								else if (t <= s.to.line) {
									l = !1;
									break
								}
							}
							l || (e.splice(0, i + 1), i = 0)
						}
					}
				}

				function yi(e, t) {
					var n = t.from.line,
						r = t.to.line,
						i = t.text.length - (r - n) - 1;
					vi(e.done, n, r, i), vi(e.undone, n, r, i)
				}

				function xi(e) {
					return null != e.defaultPrevented ? e.defaultPrevented : 0 == e.returnValue
				}

				function bi(e) {
					return e.target || e.srcElement
				}

				function wi(e) {
					var t = e.which;
					return null == t && (1 & e.button ? t = 1 : 2 & e.button ? t = 3 : 4 & e.button && (t = 2)), Ao && e.ctrlKey && 1 == t && (t = 3), t
				}

				function ki(e, t, n) {
					var r = e._handlers && e._handlers[t];
					return n ? r && r.length > 0 ? r.slice() : Al : r || Al
				}

				function Ci(e, t) {
					function n(e) {
						return function() {
							e.apply(null, o)
						}
					}
					var r = ki(e, t, !1);
					if (r.length) {
						var i, o = Array.prototype.slice.call(arguments, 2);
						qo ? i = qo.delayedCallbacks : Hl ? i = Hl : (i = Hl = [], setTimeout(Si, 0));
						for (var l = 0; l < r.length; ++l) i.push(n(r[l]))
					}
				}

				function Si() {
					var e = Hl;
					Hl = null;
					for (var t = 0; t < e.length; ++t) e[t]()
				}

				function Li(e, t, n) {
					return "string" == typeof t && (t = {
						type: t,
						preventDefault: function() {
							this.defaultPrevented = !0
						}
					}), Wl(e, n || t.type, e, t), xi(t) || t.codemirrorIgnore
				}

				function Ti(e) {
					var t = e._handlers && e._handlers.cursorActivity;
					if (t)
						for (var n = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), r = 0; r < t.length; ++r) - 1 == Hi(n, t[r]) && n.push(t[r])
				}

				function Mi(e, t) {
					return ki(e, t).length > 0
				}

				function Ni(e) {
					e.prototype.on = function(e, t) {
						Nl(this, e, t)
					}, e.prototype.off = function(e, t) {
						Ol(this, e, t)
					}
				}

				function Ai() {
					this.id = null
				}

				function Oi(e) {
					for (; Bl.length <= e;) Bl.push(Wi(Bl) + " ");
					return Bl[e]
				}

				function Wi(e) {
					return e[e.length - 1]
				}

				function Hi(e, t) {
					for (var n = 0; n < e.length; ++n)
						if (e[n] == t) return n;
					return -1
				}

				function Di(e, t) {
					for (var n = [], r = 0; r < e.length; r++) n[r] = t(e[r], r);
					return n
				}

				function Ei() {}

				function Ii(e, t) {
					var n;
					return Object.create ? n = Object.create(e) : (Ei.prototype = e, n = new Ei), t && Pi(t, n), n
				}

				function Pi(e, t, n) {
					t || (t = {});
					for (var r in e) !e.hasOwnProperty(r) || n === !1 && t.hasOwnProperty(r) || (t[r] = e[r]);
					return t
				}

				function zi(e) {
					var t = Array.prototype.slice.call(arguments, 1);
					return function() {
						return e.apply(null, t)
					}
				}

				function Fi(e, t) {
					return t ? t.source.indexOf("\\w") > -1 && Gl(e) ? !0 : t.test(e) : Gl(e)
				}

				function Ri(e) {
					for (var t in e)
						if (e.hasOwnProperty(t) && e[t]) return !1;
					return !0
				}

				function Bi(e) {
					return e.charCodeAt(0) >= 768 && Ul.test(e)
				}

				function _i(e, t, n, r) {
					var i = document.createElement(e);
					if (n && (i.className = n), r && (i.style.cssText = r), "string" == typeof t) i.appendChild(document.createTextNode(t));
					else if (t)
						for (var o = 0; o < t.length; ++o) i.appendChild(t[o]);
					return i
				}

				function ji(e) {
					for (var t = e.childNodes.length; t > 0; --t) e.removeChild(e.firstChild);
					return e
				}

				function qi(e, t) {
					return ji(e).appendChild(t)
				}

				function Gi() {
					for (var e = document.activeElement; e && e.root && e.root.activeElement;) e = e.root.activeElement;
					return e
				}

				function Ui(e) {
					return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*")
				}

				function $i(e, t) {
					for (var n = e.split(" "), r = 0; r < n.length; r++) n[r] && !Ui(n[r]).test(t) && (t += " " + n[r]);
					return t
				}

				function Vi(e) {
					if (document.body.getElementsByClassName)
						for (var t = document.body.getElementsByClassName("CodeMirror"), n = 0; n < t.length; n++) {
							var r = t[n].CodeMirror;
							r && e(r)
						}
				}

				function Ki() {
					Zl || (Xi(), Zl = !0)
				}

				function Xi() {
					var e;
					Nl(window, "resize", function() {
						null == e && (e = setTimeout(function() {
							e = null, Vi(qt)
						}, 100))
					}), Nl(window, "blur", function() {
						Vi(vn)
					})
				}

				function Yi(e) {
					if (null == Vl) {
						var t = _i("span", "​");
						qi(e, _i("span", [t, document.createTextNode("x")])), 0 != e.firstChild.offsetHeight && (Vl = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(yo && 8 > xo))
					}
					var n = Vl ? _i("span", "​") : _i("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px");
					return n.setAttribute("cm-text", ""), n
				}

				function Zi(e) {
					if (null != Kl) return Kl;
					var t = qi(e, document.createTextNode("AخA")),
						n = jl(t, 0, 1).getBoundingClientRect();
					if (!n || n.left == n.right) return !1;
					var r = jl(t, 1, 2).getBoundingClientRect();
					return Kl = r.right - n.right < 3
				}

				function Qi(e) {
					if (null != na) return na;
					var t = qi(e, _i("span", "x")),
						n = t.getBoundingClientRect(),
						r = jl(t, 0, 1).getBoundingClientRect();
					return na = Math.abs(n.left - r.left) > 1
				}

				function Ji(e, t, n, r) {
					if (!e) return r(t, n, "ltr");
					for (var i = !1, o = 0; o < e.length; ++o) {
						var l = e[o];
						(l.from < n && l.to > t || t == n && l.to == t) && (r(Math.max(l.from, t), Math.min(l.to, n), 1 == l.level ? "rtl" : "ltr"), i = !0)
					}
					i || r(t, n, "ltr")
				}

				function eo(e) {
					return e.level % 2 ? e.to : e.from
				}

				function to(e) {
					return e.level % 2 ? e.from : e.to
				}

				function no(e) {
					var t = ri(e);
					return t ? eo(t[0]) : 0
				}

				function ro(e) {
					var t = ri(e);
					return t ? to(Wi(t)) : e.text.length
				}

				function io(e, t) {
					var n = Yr(e.doc, t),
						r = vr(n);
					r != n && (t = ei(r));
					var i = ri(r),
						o = i ? i[0].level % 2 ? ro(r) : no(r) : 0;
					return Po(t, o)
				}

				function oo(e, t) {
					for (var n, r = Yr(e.doc, t); n = mr(r);) r = n.find(1, !0).line, t = null;
					var i = ri(r),
						o = i ? i[0].level % 2 ? no(r) : ro(r) : r.text.length;
					return Po(null == t ? ei(r) : t, o)
				}

				function lo(e, t) {
					var n = io(e, t.line),
						r = Yr(e.doc, n.line),
						i = ri(r);
					if (!i || 0 == i[0].level) {
						var o = Math.max(0, r.text.search(/\S/)),
							l = t.line == n.line && t.ch <= o && t.ch;
						return Po(n.line, l ? 0 : o)
					}
					return n
				}

				function ao(e, t, n) {
					var r = e[0].level;
					return t == r ? !0 : n == r ? !1 : n > t
				}

				function so(e, t) {
					ia = null;
					for (var n, r = 0; r < e.length; ++r) {
						var i = e[r];
						if (i.from < t && i.to > t) return r;
						if (i.from == t || i.to == t) {
							if (null != n) return ao(e, i.level, e[n].level) ? (i.from != i.to && (ia = n), r) : (i.from != i.to && (ia = r), n);
							n = r
						}
					}
					return n
				}

				function co(e, t, n, r) {
					if (!r) return t + n;
					do t += n; while (t > 0 && Bi(e.text.charAt(t)));
					return t
				}

				function uo(e, t, n, r) {
					var i = ri(e);
					if (!i) return ho(e, t, n, r);
					for (var o = so(i, t), l = i[o], a = co(e, t, l.level % 2 ? -n : n, r);;) {
						if (a > l.from && a < l.to) return a;
						if (a == l.from || a == l.to) return so(i, a) == o ? a : (l = i[o += n], n > 0 == l.level % 2 ? l.to : l.from);
						if (l = i[o += n], !l) return null;
						a = n > 0 == l.level % 2 ? co(e, l.to, -1, r) : co(e, l.from, 1, r)
					}
				}

				function ho(e, t, n, r) {
					var i = t + n;
					if (r)
						for (; i > 0 && Bi(e.text.charAt(i));) i += n;
					return 0 > i || i > e.text.length ? null : i
				}
				var fo = navigator.userAgent,
					po = navigator.platform,
					mo = /gecko\/\d/i.test(fo),
					go = /MSIE \d/.test(fo),
					vo = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(fo),
					yo = go || vo,
					xo = yo && (go ? document.documentMode || 6 : vo[1]),
					bo = /WebKit\//.test(fo),
					wo = bo && /Qt\/\d+\.\d+/.test(fo),
					ko = /Chrome\//.test(fo),
					Co = /Opera\//.test(fo),
					So = /Apple Computer/.test(navigator.vendor),
					Lo = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(fo),
					To = /PhantomJS/.test(fo),
					Mo = /AppleWebKit/.test(fo) && /Mobile\/\w+/.test(fo),
					No = Mo || /Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(fo),
					Ao = Mo || /Mac/.test(po),
					Oo = /win/i.test(po),
					Wo = Co && fo.match(/Version\/(\d*\.\d*)/);
				Wo && (Wo = Number(Wo[1])), Wo && Wo >= 15 && (Co = !1, bo = !0);
				var Ho = Ao && (wo || Co && (null == Wo || 12.11 > Wo)),
					Do = mo || yo && xo >= 9,
					Eo = !1,
					Io = !1;
				m.prototype = Pi({
					update: function(e) {
						var t = e.scrollWidth > e.clientWidth + 1,
							n = e.scrollHeight > e.clientHeight + 1,
							r = e.nativeBarWidth;
						if (n) {
							this.vert.style.display = "block", this.vert.style.bottom = t ? r + "px" : "0";
							var i = e.viewHeight - (t ? r : 0);
							this.vert.firstChild.style.height = Math.max(0, e.scrollHeight - e.clientHeight + i) + "px"
						} else this.vert.style.display = "", this.vert.firstChild.style.height = "0";
						if (t) {
							this.horiz.style.display = "block", this.horiz.style.right = n ? r + "px" : "0", this.horiz.style.left = e.barLeft + "px";
							var o = e.viewWidth - e.barLeft - (n ? r : 0);
							this.horiz.firstChild.style.width = e.scrollWidth - e.clientWidth + o + "px"
						} else this.horiz.style.display = "", this.horiz.firstChild.style.width = "0";
						return !this.checkedZeroWidth && e.clientHeight > 0 && (0 == r && this.zeroWidthHack(), this.checkedZeroWidth = !0), {
							right: n ? r : 0,
							bottom: t ? r : 0
						}
					},
					setScrollLeft: function(e) {
						this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e), this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz)
					},
					setScrollTop: function(e) {
						this.vert.scrollTop != e && (this.vert.scrollTop = e), this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert)
					},
					zeroWidthHack: function() {
						var e = Ao && !Lo ? "12px" : "18px";
						this.horiz.style.height = this.vert.style.width = e, this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none", this.disableHoriz = new Ai, this.disableVert = new Ai
					},
					enableZeroWidthBar: function(e, t) {
						function n() {
							var r = e.getBoundingClientRect(),
								i = document.elementFromPoint(r.left + 1, r.bottom - 1);
							i != e ? e.style.pointerEvents = "none" : t.set(1e3, n)
						}
						e.style.pointerEvents = "auto", t.set(1e3, n)
					},
					clear: function() {
						var e = this.horiz.parentNode;
						e.removeChild(this.horiz), e.removeChild(this.vert)
					}
				}, m.prototype), g.prototype = Pi({
					update: function() {
						return {
							bottom: 0,
							right: 0
						}
					},
					setScrollLeft: function() {},
					setScrollTop: function() {},
					clear: function() {}
				}, g.prototype), e.scrollbarModel = {
					"native": m,
					"null": g
				}, L.prototype.signal = function(e, t) {
					Mi(e, t) && this.events.push(arguments)
				}, L.prototype.finish = function() {
					for (var e = 0; e < this.events.length; e++) Wl.apply(null, this.events[e])
				};
				var Po = e.Pos = function(e, t) {
						return this instanceof Po ? (this.line = e, void(this.ch = t)) : new Po(e, t)
					},
					zo = e.cmpPos = function(e, t) {
						return e.line - t.line || e.ch - t.ch
					},
					Fo = null;
				re.prototype = Pi({
					init: function(e) {
						function t(e) {
							if (r.somethingSelected()) Fo = r.getSelections(), n.inaccurateSelection && (n.prevInput = "", n.inaccurateSelection = !1, o.value = Fo.join("\n"), _l(o));
							else {
								if (!r.options.lineWiseCopyCut) return;
								var t = te(r);
								Fo = t.text, "cut" == e.type ? r.setSelections(t.ranges, null, Il) : (n.prevInput = "", o.value = t.text.join("\n"), _l(o))
							}
							"cut" == e.type && (r.state.cutIncoming = !0)
						}
						var n = this,
							r = this.cm,
							i = this.wrapper = ie(),
							o = this.textarea = i.firstChild;
						e.wrapper.insertBefore(i, e.wrapper.firstChild), Mo && (o.style.width = "0px"), Nl(o, "input", function() {
							yo && xo >= 9 && n.hasSelection && (n.hasSelection = null), n.poll()
						}), Nl(o, "paste", function(e) {
							return J(e, r) ? !0 : (r.state.pasteIncoming = !0, void n.fastPoll())
						}), Nl(o, "cut", t), Nl(o, "copy", t), Nl(e.scroller, "paste", function(t) {
							Gt(e, t) || (r.state.pasteIncoming = !0, n.focus())
						}), Nl(e.lineSpace, "selectstart", function(t) {
							Gt(e, t) || Ll(t)
						}), Nl(o, "compositionstart", function() {
							var e = r.getCursor("from");
							n.composing && n.composing.range.clear(), n.composing = {
								start: e,
								range: r.markText(e, r.getCursor("to"), {
									className: "CodeMirror-composing"
								})
							}
						}), Nl(o, "compositionend", function() {
							n.composing && (n.poll(), n.composing.range.clear(), n.composing = null)
						})
					},
					prepareSelection: function() {
						var e = this.cm,
							t = e.display,
							n = e.doc,
							r = Ee(e);
						if (e.options.moveInputWithCursor) {
							var i = ht(e, n.sel.primary().head, "div"),
								o = t.wrapper.getBoundingClientRect(),
								l = t.lineDiv.getBoundingClientRect();
							r.teTop = Math.max(0, Math.min(t.wrapper.clientHeight - 10, i.top + l.top - o.top)), r.teLeft = Math.max(0, Math.min(t.wrapper.clientWidth - 10, i.left + l.left - o.left))
						}
						return r
					},
					showSelection: function(e) {
						var t = this.cm,
							n = t.display;
						qi(n.cursorDiv, e.cursors), qi(n.selectionDiv, e.selection), null != e.teTop && (this.wrapper.style.top = e.teTop + "px", this.wrapper.style.left = e.teLeft + "px")
					},
					reset: function(e) {
						if (!this.contextMenuPending) {
							var t, n, r = this.cm,
								i = r.doc;
							if (r.somethingSelected()) {
								this.prevInput = "";
								var o = i.sel.primary();
								t = ta && (o.to().line - o.from().line > 100 || (n = r.getSelection()).length > 1e3);
								var l = t ? "-" : n || r.getSelection();
								this.textarea.value = l, r.state.focused && _l(this.textarea), yo && xo >= 9 && (this.hasSelection = l)
							} else e || (this.prevInput = this.textarea.value = "", yo && xo >= 9 && (this.hasSelection = null));
							this.inaccurateSelection = t
						}
					},
					getField: function() {
						return this.textarea
					},
					supportsTouch: function() {
						return !1
					},
					focus: function() {
						if ("nocursor" != this.cm.options.readOnly && (!No || Gi() != this.textarea)) try {
							this.textarea.focus()
						} catch (e) {}
					},
					blur: function() {
						this.textarea.blur()
					},
					resetPosition: function() {
						this.wrapper.style.top = this.wrapper.style.left = 0
					},
					receivedFocus: function() {
						this.slowPoll()
					},
					slowPoll: function() {
						var e = this;
						e.pollingFast || e.polling.set(this.cm.options.pollInterval, function() {
							e.poll(), e.cm.state.focused && e.slowPoll()
						})
					},
					fastPoll: function() {
						function e() {
							var r = n.poll();
							r || t ? (n.pollingFast = !1, n.slowPoll()) : (t = !0, n.polling.set(60, e))
						}
						var t = !1,
							n = this;
						n.pollingFast = !0, n.polling.set(20, e)
					},
					poll: function() {
						var e = this.cm,
							t = this.textarea,
							n = this.prevInput;
						if (this.contextMenuPending || !e.state.focused || ea(t) && !n && !this.composing || Z(e) || e.options.disableInput || e.state.keySeq) return !1;
						var r = t.value;
						if (r == n && !e.somethingSelected()) return !1;
						if (yo && xo >= 9 && this.hasSelection === r || Ao && /[\uf700-\uf7ff]/.test(r)) return e.display.input.reset(), !1;
						if (e.doc.sel == e.display.selForContextMenu) {
							var i = r.charCodeAt(0);
							if (8203 != i || n || (n = "​"), 8666 == i) return this.reset(), this.cm.execCommand("undo")
						}
						for (var o = 0, l = Math.min(n.length, r.length); l > o && n.charCodeAt(o) == r.charCodeAt(o);) ++o;
						var a = this;
						return Nt(e, function() {
							Q(e, r.slice(o), n.length - o, null, a.composing ? "*compose" : null), r.length > 1e3 || r.indexOf("\n") > -1 ? t.value = a.prevInput = "" : a.prevInput = r, a.composing && (a.composing.range.clear(), a.composing.range = e.markText(a.composing.start, e.getCursor("to"), {
								className: "CodeMirror-composing"
							}))
						}), !0
					},
					ensurePolled: function() {
						this.pollingFast && this.poll() && (this.pollingFast = !1)
					},
					onKeyPress: function() {
						yo && xo >= 9 && (this.hasSelection = null), this.fastPoll()
					},
					onContextMenu: function(e) {
						function t() {
							if (null != l.selectionStart) {
								var e = i.somethingSelected(),
									t = "​" + (e ? l.value : "");
								l.value = "⇚", l.value = t, r.prevInput = e ? "" : "​", l.selectionStart = 1, l.selectionEnd = t.length, o.selForContextMenu = i.doc.sel
							}
						}

						function n() {
							if (r.contextMenuPending = !1, r.wrapper.style.position = "relative", l.style.cssText = u, yo && 9 > xo && o.scrollbars.setScrollTop(o.scroller.scrollTop = s), null != l.selectionStart) {
								(!yo || yo && 9 > xo) && t();
								var e = 0,
									n = function() {
										o.selForContextMenu == i.doc.sel && 0 == l.selectionStart && l.selectionEnd > 0 && "​" == r.prevInput ? At(i, sl.selectAll)(i) : e++ < 10 ? o.detectingSelectAll = setTimeout(n, 500) : o.input.reset()
									};
								o.detectingSelectAll = setTimeout(n, 200)
							}
						}
						var r = this,
							i = r.cm,
							o = i.display,
							l = r.textarea,
							a = Ut(i, e),
							s = o.scroller.scrollTop;
						if (a && !Co) {
							var c = i.options.resetSelectionOnContextMenu;
							c && -1 == i.doc.sel.contains(a) && At(i, Me)(i.doc, pe(a), Il);
							var u = l.style.cssText;
							if (r.wrapper.style.position = "absolute", l.style.cssText = "position: fixed; width: 30px; height: 30px; top: " + (e.clientY - 5) + "px; left: " + (e.clientX - 5) + "px; z-index: 1000; background: " + (yo ? "rgba(255, 255, 255, .05)" : "transparent") + "; outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);", bo) var d = window.scrollY;
							if (o.input.focus(), bo && window.scrollTo(null, d), o.input.reset(), i.somethingSelected() || (l.value = r.prevInput = " "), r.contextMenuPending = !0, o.selForContextMenu = i.doc.sel, clearTimeout(o.detectingSelectAll), yo && xo >= 9 && t(), Do) {
								Ml(e);
								var h = function() {
									Ol(window, "mouseup", h), setTimeout(n, 20)
								};
								Nl(window, "mouseup", h)
							} else setTimeout(n, 50)
						}
					},
					readOnlyChanged: function(e) {
						e || this.reset()
					},
					setUneditable: Ei,
					needsContentAttribute: !1
				}, re.prototype), oe.prototype = Pi({
					init: function(e) {
						function t(e) {
							if (r.somethingSelected()) Fo = r.getSelections(), "cut" == e.type && r.replaceSelection("", null, "cut");
							else {
								if (!r.options.lineWiseCopyCut) return;
								var t = te(r);
								Fo = t.text, "cut" == e.type && r.operation(function() {
									r.setSelections(t.ranges, 0, Il), r.replaceSelection("", null, "cut")
								})
							}
							if (e.clipboardData && !Mo) e.preventDefault(), e.clipboardData.clearData(), e.clipboardData.setData("text/plain", Fo.join("\n"));
							else {
								var n = ie(),
									i = n.firstChild;
								r.display.lineSpace.insertBefore(n, r.display.lineSpace.firstChild), i.value = Fo.join("\n");
								var o = document.activeElement;
								_l(i), setTimeout(function() {
									r.display.lineSpace.removeChild(n), o.focus()
								}, 50)
							}
						}
						var n = this,
							r = n.cm,
							i = n.div = e.lineDiv;
						ne(i), Nl(i, "paste", function(e) {
							J(e, r)
						}), Nl(i, "compositionstart", function(e) {
							var t = e.data;
							if (n.composing = {
									sel: r.doc.sel,
									data: t,
									startData: t
								}, t) {
								var i = r.doc.sel.primary(),
									o = r.getLine(i.head.line),
									l = o.indexOf(t, Math.max(0, i.head.ch - t.length));
								l > -1 && l <= i.head.ch && (n.composing.sel = pe(Po(i.head.line, l), Po(i.head.line, l + t.length)))
							}
						}), Nl(i, "compositionupdate", function(e) {
							n.composing.data = e.data
						}), Nl(i, "compositionend", function(e) {
							var t = n.composing;
							t && (e.data == t.startData || /\u200b/.test(e.data) || (t.data = e.data), setTimeout(function() {
								t.handled || n.applyComposition(t), n.composing == t && (n.composing = null)
							}, 50))
						}), Nl(i, "touchstart", function() {
							n.forceCompositionEnd()
						}), Nl(i, "input", function() {
							n.composing || (Z(r) || !n.pollContent()) && Nt(n.cm, function() {
								Et(r)
							})
						}), Nl(i, "copy", t), Nl(i, "cut", t)
					},
					prepareSelection: function() {
						var e = Ee(this.cm, !1);
						return e.focus = this.cm.state.focused, e
					},
					showSelection: function(e) {
						e && this.cm.display.view.length && (e.focus && this.showPrimarySelection(), this.showMultipleSelections(e))
					},
					showPrimarySelection: function() {
						var e = window.getSelection(),
							t = this.cm.doc.sel.primary(),
							n = se(this.cm, e.anchorNode, e.anchorOffset),
							r = se(this.cm, e.focusNode, e.focusOffset);
						if (!n || n.bad || !r || r.bad || 0 != zo(X(n, r), t.from()) || 0 != zo(K(n, r), t.to())) {
							var i = le(this.cm, t.from()),
								o = le(this.cm, t.to());
							if (i || o) {
								var l = this.cm.display.view,
									a = e.rangeCount && e.getRangeAt(0);
								if (i) {
									if (!o) {
										var s = l[l.length - 1].measure,
											c = s.maps ? s.maps[s.maps.length - 1] : s.map;
										o = {
											node: c[c.length - 1],
											offset: c[c.length - 2] - c[c.length - 3]
										}
									}
								} else i = {
									node: l[0].measure.map[2],
									offset: 0
								};
								try {
									var u = jl(i.node, i.offset, o.offset, o.node)
								} catch (d) {}
								u && (e.removeAllRanges(), e.addRange(u), a && null == e.anchorNode ? e.addRange(a) : mo && this.startGracePeriod()), this.rememberSelection()
							}
						}
					},
					startGracePeriod: function() {
						var e = this;
						clearTimeout(this.gracePeriod), this.gracePeriod = setTimeout(function() {
							e.gracePeriod = !1, e.selectionChanged() && e.cm.operation(function() {
								e.cm.curOp.selectionChanged = !0
							})
						}, 20)
					},
					showMultipleSelections: function(e) {
						qi(this.cm.display.cursorDiv, e.cursors), qi(this.cm.display.selectionDiv, e.selection)
					},
					rememberSelection: function() {
						var e = window.getSelection();
						this.lastAnchorNode = e.anchorNode, this.lastAnchorOffset = e.anchorOffset, this.lastFocusNode = e.focusNode, this.lastFocusOffset = e.focusOffset
					},
					selectionInEditor: function() {
						var e = window.getSelection();
						if (!e.rangeCount) return !1;
						var t = e.getRangeAt(0).commonAncestorContainer;
						return $l(this.div, t)
					},
					focus: function() {
						"nocursor" != this.cm.options.readOnly && this.div.focus()
					},
					blur: function() {
						this.div.blur()
					},
					getField: function() {
						return this.div
					},
					supportsTouch: function() {
						return !0
					},
					receivedFocus: function() {
						function e() {
							t.cm.state.focused && (t.pollSelection(), t.polling.set(t.cm.options.pollInterval, e))
						}
						var t = this;
						this.selectionInEditor() ? this.pollSelection() : Nt(this.cm, function() {
							t.cm.curOp.selectionChanged = !0
						}), this.polling.set(this.cm.options.pollInterval, e)
					},
					selectionChanged: function() {
						var e = window.getSelection();
						return e.anchorNode != this.lastAnchorNode || e.anchorOffset != this.lastAnchorOffset || e.focusNode != this.lastFocusNode || e.focusOffset != this.lastFocusOffset
					},
					pollSelection: function() {
						if (!this.composing && !this.gracePeriod && this.selectionChanged()) {
							var e = window.getSelection(),
								t = this.cm;
							this.rememberSelection();
							var n = se(t, e.anchorNode, e.anchorOffset),
								r = se(t, e.focusNode, e.focusOffset);
							n && r && Nt(t, function() {
								Me(t.doc, pe(n, r), Il), (n.bad || r.bad) && (t.curOp.selectionChanged = !0)
							})
						}
					},
					pollContent: function() {
						var e = this.cm,
							t = e.display,
							n = e.doc.sel.primary(),
							r = n.from(),
							i = n.to();
						if (r.line < t.viewFrom || i.line > t.viewTo - 1) return !1;
						var o;
						if (r.line == t.viewFrom || 0 == (o = zt(e, r.line))) var l = ei(t.view[0].line),
							a = t.view[0].node;
						else var l = ei(t.view[o].line),
							a = t.view[o - 1].node.nextSibling;
						var s = zt(e, i.line);
						if (s == t.view.length - 1) var c = t.viewTo - 1,
							u = t.lineDiv.lastChild;
						else var c = ei(t.view[s + 1].line) - 1,
							u = t.view[s + 1].node.previousSibling;
						for (var d = e.doc.splitLines(ue(e, a, u, l, c)), h = Zr(e.doc, Po(l, 0), Po(c, Yr(e.doc, c).text.length)); d.length > 1 && h.length > 1;)
							if (Wi(d) == Wi(h)) d.pop(), h.pop(), c--;
							else {
								if (d[0] != h[0]) break;
								d.shift(), h.shift(), l++
							}
						for (var f = 0, p = 0, m = d[0], g = h[0], v = Math.min(m.length, g.length); v > f && m.charCodeAt(f) == g.charCodeAt(f);) ++f;
						for (var y = Wi(d), x = Wi(h), b = Math.min(y.length - (1 == d.length ? f : 0), x.length - (1 == h.length ? f : 0)); b > p && y.charCodeAt(y.length - p - 1) == x.charCodeAt(x.length - p - 1);) ++p;
						d[d.length - 1] = y.slice(0, y.length - p), d[0] = d[0].slice(f);
						var w = Po(l, f),
							k = Po(c, h.length ? Wi(h).length - p : 0);
						return d.length > 1 || d[0] || zo(w, k) ? (Wn(e.doc, d, w, k, "+input"), !0) : void 0
					},
					ensurePolled: function() {
						this.forceCompositionEnd()
					},
					reset: function() {
						this.forceCompositionEnd()
					},
					forceCompositionEnd: function() {
						this.composing && !this.composing.handled && (this.applyComposition(this.composing), this.composing.handled = !0, this.div.blur(), this.div.focus())
					},
					applyComposition: function(e) {
						Z(this.cm) ? At(this.cm, Et)(this.cm) : e.data && e.data != e.startData && At(this.cm, Q)(this.cm, e.data, 0, e.sel)
					},
					setUneditable: function(e) {
						e.contentEditable = "false"
					},
					onKeyPress: function(e) {
						e.preventDefault(), Z(this.cm) || At(this.cm, Q)(this.cm, String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), 0)
					},
					readOnlyChanged: function(e) {
						this.div.contentEditable = String("nocursor" != e)
					},
					onContextMenu: Ei,
					resetPosition: Ei,
					needsContentAttribute: !0
				}, oe.prototype), e.inputStyles = {
					textarea: re,
					contenteditable: oe
				}, de.prototype = {
					primary: function() {
						return this.ranges[this.primIndex]
					},
					equals: function(e) {
						if (e == this) return !0;
						if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length) return !1;
						for (var t = 0; t < this.ranges.length; t++) {
							var n = this.ranges[t],
								r = e.ranges[t];
							if (0 != zo(n.anchor, r.anchor) || 0 != zo(n.head, r.head)) return !1
						}
						return !0
					},
					deepCopy: function() {
						for (var e = [], t = 0; t < this.ranges.length; t++) e[t] = new he(V(this.ranges[t].anchor), V(this.ranges[t].head));
						return new de(e, this.primIndex)
					},
					somethingSelected: function() {
						for (var e = 0; e < this.ranges.length; e++)
							if (!this.ranges[e].empty()) return !0;
						return !1
					},
					contains: function(e, t) {
						t || (t = e);
						for (var n = 0; n < this.ranges.length; n++) {
							var r = this.ranges[n];
							if (zo(t, r.from()) >= 0 && zo(e, r.to()) <= 0) return n
						}
						return -1
					}
				}, he.prototype = {
					from: function() {
						return X(this.anchor, this.head)
					},
					to: function() {
						return K(this.anchor, this.head)
					},
					empty: function() {
						return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
					}
				};
				var Ro, Bo, _o, jo = {
						left: 0,
						right: 0,
						top: 0,
						bottom: 0
					},
					qo = null,
					Go = 0,
					Uo = 0,
					$o = 0,
					Vo = null;
				yo ? Vo = -.53 : mo ? Vo = 15 : ko ? Vo = -.7 : So && (Vo = -1 / 3);
				var Ko = function(e) {
					var t = e.wheelDeltaX,
						n = e.wheelDeltaY;
					return null == t && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail), null == n && e.detail && e.axis == e.VERTICAL_AXIS ? n = e.detail : null == n && (n = e.wheelDelta), {
						x: t,
						y: n
					}
				};
				e.wheelEventPixels = function(e) {
					var t = Ko(e);
					return t.x *= Vo, t.y *= Vo, t
				};
				var Xo = new Ai,
					Yo = null,
					Zo = e.changeEnd = function(e) {
						return e.text ? Po(e.from.line + e.text.length - 1, Wi(e.text).length + (1 == e.text.length ? e.from.ch : 0)) : e.to
					};
				e.prototype = {
					constructor: e,
					focus: function() {
						window.focus(), this.display.input.focus()
					},
					setOption: function(e, t) {
						var n = this.options,
							r = n[e];
						(n[e] != t || "mode" == e) && (n[e] = t, Jo.hasOwnProperty(e) && At(this, Jo[e])(this, t, r))
					},
					getOption: function(e) {
						return this.options[e]
					},
					getDoc: function() {
						return this.doc
					},
					addKeyMap: function(e, t) {
						this.state.keyMaps[t ? "push" : "unshift"]($n(e))
					},
					removeKeyMap: function(e) {
						for (var t = this.state.keyMaps, n = 0; n < t.length; ++n)
							if (t[n] == e || t[n].name == e) return t.splice(n, 1), !0
					},
					addOverlay: Ot(function(t, n) {
						var r = t.token ? t : e.getMode(this.options, t);
						if (r.startState) throw new Error("Overlays may not be stateful.");
						this.state.overlays.push({
							mode: r,
							modeSpec: t,
							opaque: n && n.opaque
						}), this.state.modeGen++, Et(this)
					}),
					removeOverlay: Ot(function(e) {
						for (var t = this.state.overlays, n = 0; n < t.length; ++n) {
							var r = t[n].modeSpec;
							if (r == e || "string" == typeof e && r.name == e) return t.splice(n, 1), this.state.modeGen++, void Et(this)
						}
					}),
					indentLine: Ot(function(e, t, n) {
						"string" != typeof t && "number" != typeof t && (t = null == t ? this.options.smartIndent ? "smart" : "prev" : t ? "add" : "subtract"), ye(this.doc, e) && Rn(this, e, t, n)
					}),
					indentSelection: Ot(function(e) {
						for (var t = this.doc.sel.ranges, n = -1, r = 0; r < t.length; r++) {
							var i = t[r];
							if (i.empty()) i.head.line > n && (Rn(this, i.head.line, e, !0), n = i.head.line, r == this.doc.sel.primIndex && zn(this));
							else {
								var o = i.from(),
									l = i.to(),
									a = Math.max(n, o.line);
								n = Math.min(this.lastLine(), l.line - (l.ch ? 0 : 1)) + 1;
								for (var s = a; n > s; ++s) Rn(this, s, e);
								var c = this.doc.sel.ranges;
								0 == o.ch && t.length == c.length && c[r].from().ch > 0 && Ce(this.doc, r, new he(o, c[r].to()), Il)
							}
						}
					}),
					getTokenAt: function(e, t) {
						return Wr(this, e, t)
					},
					getLineTokens: function(e, t) {
						return Wr(this, Po(e), t, !0)
					},
					getTokenTypeAt: function(e) {
						e = ge(this.doc, e);
						var t, n = Er(this, Yr(this.doc, e.line)),
							r = 0,
							i = (n.length - 1) / 2,
							o = e.ch;
						if (0 == o) t = n[2];
						else
							for (;;) {
								var l = r + i >> 1;
								if ((l ? n[2 * l - 1] : 0) >= o) i = l;
								else {
									if (!(n[2 * l + 1] < o)) {
										t = n[2 * l + 2];
										break
									}
									r = l + 1
								}
							}
						var a = t ? t.indexOf("cm-overlay ") : -1;
						return 0 > a ? t : 0 == a ? null : t.slice(0, a - 1)
					},
					getModeAt: function(t) {
						var n = this.doc.mode;
						return n.innerMode ? e.innerMode(n, this.getTokenAt(t).state).mode : n
					},
					getHelper: function(e, t) {
						return this.getHelpers(e, t)[0]
					},
					getHelpers: function(e, t) {
						var n = [];
						if (!ol.hasOwnProperty(t)) return n;
						var r = ol[t],
							i = this.getModeAt(e);
						if ("string" == typeof i[t]) r[i[t]] && n.push(r[i[t]]);
						else if (i[t])
							for (var o = 0; o < i[t].length; o++) {
								var l = r[i[t][o]];
								l && n.push(l)
							} else i.helperType && r[i.helperType] ? n.push(r[i.helperType]) : r[i.name] && n.push(r[i.name]);
						for (var o = 0; o < r._global.length; o++) {
							var a = r._global[o];
							a.pred(i, this) && -1 == Hi(n, a.val) && n.push(a.val)
						}
						return n
					},
					getStateAfter: function(e, t) {
						var n = this.doc;
						return e = me(n, null == e ? n.first + n.size - 1 : e), _e(this, e + 1, t)
					},
					cursorCoords: function(e, t) {
						var n, r = this.doc.sel.primary();
						return n = null == e ? r.head : "object" == typeof e ? ge(this.doc, e) : e ? r.from() : r.to(), ht(this, n, t || "page")
					},
					charCoords: function(e, t) {
						return dt(this, ge(this.doc, e), t || "page")
					},
					coordsChar: function(e, t) {
						return e = ut(this, e, t || "page"), mt(this, e.left, e.top)
					},
					lineAtHeight: function(e, t) {
						return e = ut(this, {
							top: e,
							left: 0
						}, t || "page").top, ti(this.doc, e + this.display.viewOffset)
					},
					heightAtLine: function(e, t) {
						var n, r = !1;
						if ("number" == typeof e) {
							var i = this.doc.first + this.doc.size - 1;
							e < this.doc.first ? e = this.doc.first : e > i && (e = i, r = !0), n = Yr(this.doc, e)
						} else n = e;
						return ct(this, n, {
							top: 0,
							left: 0
						}, t || "page").top + (r ? this.doc.height - ni(n) : 0)
					},
					defaultTextHeight: function() {
						return vt(this.display)
					},
					defaultCharWidth: function() {
						return yt(this.display)
					},
					setGutterMarker: Ot(function(e, t, n) {
						return Bn(this.doc, e, "gutter", function(e) {
							var r = e.gutterMarkers || (e.gutterMarkers = {});
							return r[t] = n, !n && Ri(r) && (e.gutterMarkers = null), !0
						})
					}),
					clearGutter: Ot(function(e) {
						var t = this,
							n = t.doc,
							r = n.first;
						n.iter(function(n) {
							n.gutterMarkers && n.gutterMarkers[e] && (n.gutterMarkers[e] = null, It(t, r, "gutter"), Ri(n.gutterMarkers) && (n.gutterMarkers = null)), ++r
						})
					}),
					lineInfo: function(e) {
						if ("number" == typeof e) {
							if (!ye(this.doc, e)) return null;
							var t = e;
							if (e = Yr(this.doc, e), !e) return null
						} else {
							var t = ei(e);
							if (null == t) return null
						}
						return {
							line: t,
							handle: e,
							text: e.text,
							gutterMarkers: e.gutterMarkers,
							textClass: e.textClass,
							bgClass: e.bgClass,
							wrapClass: e.wrapClass,
							widgets: e.widgets
						}
					},
					getViewport: function() {
						return {
							from: this.display.viewFrom,
							to: this.display.viewTo
						}
					},
					addWidget: function(e, t, n, r, i) {
						var o = this.display;
						e = ht(this, ge(this.doc, e));
						var l = e.bottom,
							a = e.left;
						if (t.style.position = "absolute", t.setAttribute("cm-ignore-events", "true"), this.display.input.setUneditable(t), o.sizer.appendChild(t), "over" == r) l = e.top;
						else if ("above" == r || "near" == r) {
							var s = Math.max(o.wrapper.clientHeight, this.doc.height),
								c = Math.max(o.sizer.clientWidth, o.lineSpace.clientWidth);
							("above" == r || e.bottom + t.offsetHeight > s) && e.top > t.offsetHeight ? l = e.top - t.offsetHeight : e.bottom + t.offsetHeight <= s && (l = e.bottom), a + t.offsetWidth > c && (a = c - t.offsetWidth)
						}
						t.style.top = l + "px", t.style.left = t.style.right = "", "right" == i ? (a = o.sizer.clientWidth - t.offsetWidth, t.style.right = "0px") : ("left" == i ? a = 0 : "middle" == i && (a = (o.sizer.clientWidth - t.offsetWidth) / 2), t.style.left = a + "px"), n && En(this, a, l, a + t.offsetWidth, l + t.offsetHeight)
					},
					triggerOnKeyDown: Ot(dn),
					triggerOnKeyPress: Ot(pn),
					triggerOnKeyUp: fn,
					execCommand: function(e) {
						return sl.hasOwnProperty(e) ? sl[e].call(null, this) : void 0
					},
					triggerElectric: Ot(function(e) {
						ee(this, e)
					}),
					findPosH: function(e, t, n, r) {
						var i = 1;
						0 > t && (i = -1, t = -t);
						for (var o = 0, l = ge(this.doc, e); t > o && (l = jn(this.doc, l, i, n, r), !l.hitSide); ++o);
						return l
					},
					moveH: Ot(function(e, t) {
						var n = this;
						n.extendSelectionsBy(function(r) {
							return n.display.shift || n.doc.extend || r.empty() ? jn(n.doc, r.head, e, t, n.options.rtlMoveVisually) : 0 > e ? r.from() : r.to()
						}, zl)
					}),
					deleteH: Ot(function(e, t) {
						var n = this.doc.sel,
							r = this.doc;
						n.somethingSelected() ? r.replaceSelection("", null, "+delete") : _n(this, function(n) {
							var i = jn(r, n.head, e, t, !1);
							return 0 > e ? {
								from: i,
								to: n.head
							} : {
								from: n.head,
								to: i
							}
						})
					}),
					findPosV: function(e, t, n, r) {
						var i = 1,
							o = r;
						0 > t && (i = -1, t = -t);
						for (var l = 0, a = ge(this.doc, e); t > l; ++l) {
							var s = ht(this, a, "div");
							if (null == o ? o = s.left : s.left = o, a = qn(this, s, i, n), a.hitSide) break
						}
						return a
					},
					moveV: Ot(function(e, t) {
						var n = this,
							r = this.doc,
							i = [],
							o = !n.display.shift && !r.extend && r.sel.somethingSelected();
						if (r.extendSelectionsBy(function(l) {
								if (o) return 0 > e ? l.from() : l.to();
								var a = ht(n, l.head, "div");
								null != l.goalColumn && (a.left = l.goalColumn), i.push(a.left);
								var s = qn(n, a, e, t);
								return "page" == t && l == r.sel.primary() && Pn(n, null, dt(n, s, "div").top - a.top), s
							}, zl), i.length)
							for (var l = 0; l < r.sel.ranges.length; l++) r.sel.ranges[l].goalColumn = i[l]
					}),
					findWordAt: function(e) {
						var t = this.doc,
							n = Yr(t, e.line).text,
							r = e.ch,
							i = e.ch;
						if (n) {
							var o = this.getHelper(e, "wordChars");
							(e.xRel < 0 || i == n.length) && r ? --r : ++i;
							for (var l = n.charAt(r), a = Fi(l, o) ? function(e) {
									return Fi(e, o)
								} : /\s/.test(l) ? function(e) {
									return /\s/.test(e)
								} : function(e) {
									return !/\s/.test(e) && !Fi(e)
								}; r > 0 && a(n.charAt(r - 1));) --r;
							for (; i < n.length && a(n.charAt(i));) ++i
						}
						return new he(Po(e.line, r), Po(e.line, i))
					},
					toggleOverwrite: function(e) {
						(null == e || e != this.state.overwrite) && ((this.state.overwrite = !this.state.overwrite) ? Yl(this.display.cursorDiv, "CodeMirror-overwrite") : Xl(this.display.cursorDiv, "CodeMirror-overwrite"), Wl(this, "overwriteToggle", this, this.state.overwrite))
					},
					hasFocus: function() {
						return this.display.input.getField() == Gi()
					},
					scrollTo: Ot(function(e, t) {
						(null != e || null != t) && Fn(this), null != e && (this.curOp.scrollLeft = e), null != t && (this.curOp.scrollTop = t)
					}),
					getScrollInfo: function() {
						var e = this.display.scroller;
						return {
							left: e.scrollLeft,
							top: e.scrollTop,
							height: e.scrollHeight - Ue(this) - this.display.barHeight,
							width: e.scrollWidth - Ue(this) - this.display.barWidth,
							clientHeight: Ve(this),
							clientWidth: $e(this)
						}
					},
					scrollIntoView: Ot(function(e, t) {
						if (null == e ? (e = {
								from: this.doc.sel.primary().head,
								to: null
							}, null == t && (t = this.options.cursorScrollMargin)) : "number" == typeof e ? e = {
								from: Po(e, 0),
								to: null
							} : null == e.from && (e = {
								from: e,
								to: null
							}), e.to || (e.to = e.from), e.margin = t || 0, null != e.from.line) Fn(this), this.curOp.scrollToPos = e;
						else {
							var n = In(this, Math.min(e.from.left, e.to.left), Math.min(e.from.top, e.to.top) - e.margin, Math.max(e.from.right, e.to.right), Math.max(e.from.bottom, e.to.bottom) + e.margin);
							this.scrollTo(n.scrollLeft, n.scrollTop)
						}
					}),
					setSize: Ot(function(e, t) {
						function n(e) {
							return "number" == typeof e || /^\d+$/.test(String(e)) ? e + "px" : e
						}
						var r = this;
						null != e && (r.display.wrapper.style.width = n(e)), null != t && (r.display.wrapper.style.height = n(t)), r.options.lineWrapping && ot(this);
						var i = r.display.viewFrom;
						r.doc.iter(i, r.display.viewTo, function(e) {
							if (e.widgets)
								for (var t = 0; t < e.widgets.length; t++)
									if (e.widgets[t].noHScroll) {
										It(r, i, "widget");
										break
									}++i
						}), r.curOp.forceUpdate = !0, Wl(r, "refresh", this)
					}),
					operation: function(e) {
						return Nt(this, e)
					},
					refresh: Ot(function() {
						var e = this.display.cachedTextHeight;
						Et(this), this.curOp.forceUpdate = !0, lt(this), this.scrollTo(this.doc.scrollLeft, this.doc.scrollTop), u(this), (null == e || Math.abs(e - vt(this.display)) > .5) && l(this), Wl(this, "refresh", this)
					}),
					swapDoc: Ot(function(e) {
						var t = this.doc;
						return t.cm = null, Xr(this, e), lt(this), this.display.input.reset(), this.scrollTo(e.scrollLeft, e.scrollTop), this.curOp.forceScroll = !0, Ci(this, "swapDoc", this, t), t
					}),
					getInputField: function() {
						return this.display.input.getField()
					},
					getWrapperElement: function() {
						return this.display.wrapper
					},
					getScrollerElement: function() {
						return this.display.scroller
					},
					getGutterElement: function() {
						return this.display.gutters
					}
				}, Ni(e);
				var Qo = e.defaults = {},
					Jo = e.optionHandlers = {},
					el = e.Init = {
						toString: function() {
							return "CodeMirror.Init"
						}
					};
				Gn("value", "", function(e, t) {
					e.setValue(t)
				}, !0), Gn("mode", null, function(e, t) {
					e.doc.modeOption = t, n(e)
				}, !0), Gn("indentUnit", 2, n, !0), Gn("indentWithTabs", !1), Gn("smartIndent", !0), Gn("tabSize", 4, function(e) {
					r(e), lt(e), Et(e)
				}, !0), Gn("lineSeparator", null, function(e, t) {
					if (e.doc.lineSep = t, t) {
						var n = [],
							r = e.doc.first;
						e.doc.iter(function(e) {
							for (var i = 0;;) {
								var o = e.text.indexOf(t, i);
								if (-1 == o) break;
								i = o + t.length, n.push(Po(r, o))
							}
							r++
						});
						for (var i = n.length - 1; i >= 0; i--) Wn(e.doc, t, n[i], Po(n[i].line, n[i].ch + t.length))
					}
				}), Gn("specialChars", /[\t\u0000-\u0019\u00ad\u200b-\u200f\u2028\u2029\ufeff]/g, function(t, n, r) {
					t.state.specialChars = new RegExp(n.source + (n.test("	") ? "" : "|	"), "g"), r != e.Init && t.refresh()
				}), Gn("specialCharPlaceholder", Fr, function(e) {
					e.refresh()
				}, !0), Gn("electricChars", !0), Gn("inputStyle", No ? "contenteditable" : "textarea", function() {
					throw new Error("inputStyle can not (yet) be changed in a running editor")
				}, !0), Gn("rtlMoveVisually", !Oo), Gn("wholeLineUpdateBefore", !0), Gn("theme", "default", function(e) {
					a(e), s(e)
				}, !0), Gn("keyMap", "default", function(t, n, r) {
					var i = $n(n),
						o = r != e.Init && $n(r);
					o && o.detach && o.detach(t, i), i.attach && i.attach(t, o || null)
				}), Gn("extraKeys", null), Gn("lineWrapping", !1, i, !0), Gn("gutters", [], function(e) {
					f(e.options), s(e)
				}, !0), Gn("fixedGutter", !0, function(e, t) {
					e.display.gutters.style.left = t ? S(e.display) + "px" : "0", e.refresh()
				}, !0), Gn("coverGutterNextToScrollbar", !1, function(e) {
					y(e)
				}, !0), Gn("scrollbarStyle", "native", function(e) {
					v(e), y(e), e.display.scrollbars.setScrollTop(e.doc.scrollTop), e.display.scrollbars.setScrollLeft(e.doc.scrollLeft)
				}, !0), Gn("lineNumbers", !1, function(e) {
					f(e.options), s(e)
				}, !0), Gn("firstLineNumber", 1, s, !0), Gn("lineNumberFormatter", function(e) {
					return e
				}, s, !0), Gn("showCursorWhenSelecting", !1, De, !0), Gn("resetSelectionOnContextMenu", !0), Gn("lineWiseCopyCut", !0), Gn("readOnly", !1, function(e, t) {
					"nocursor" == t ? (vn(e), e.display.input.blur(), e.display.disabled = !0) : e.display.disabled = !1, e.display.input.readOnlyChanged(t)
				}), Gn("disableInput", !1, function(e, t) {
					t || e.display.input.reset()
				}, !0), Gn("dragDrop", !0, jt), Gn("allowDropFileTypes", null), Gn("cursorBlinkRate", 530), Gn("cursorScrollMargin", 0), Gn("cursorHeight", 1, De, !0), Gn("singleCursorHeightPerLine", !0, De, !0), Gn("workTime", 100), Gn("workDelay", 100), Gn("flattenSpans", !0, r, !0), Gn("addModeClass", !1, r, !0), Gn("pollInterval", 100), Gn("undoDepth", 200, function(e, t) {
					e.doc.history.undoDepth = t
				}), Gn("historyEventDelay", 1250), Gn("viewportMargin", 10, function(e) {
					e.refresh()
				}, !0), Gn("maxHighlightLength", 1e4, r, !0), Gn("moveInputWithCursor", !0, function(e, t) {
					t || e.display.input.resetPosition()
				}), Gn("tabindex", null, function(e, t) {
					e.display.input.getField().tabIndex = t || ""
				}), Gn("autofocus", null);
				var tl = e.modes = {},
					nl = e.mimeModes = {};
				e.defineMode = function(t, n) {
					e.defaults.mode || "null" == t || (e.defaults.mode = t), arguments.length > 2 && (n.dependencies = Array.prototype.slice.call(arguments, 2)), tl[t] = n
				}, e.defineMIME = function(e, t) {
					nl[e] = t
				}, e.resolveMode = function(t) {
					if ("string" == typeof t && nl.hasOwnProperty(t)) t = nl[t];
					else if (t && "string" == typeof t.name && nl.hasOwnProperty(t.name)) {
						var n = nl[t.name];
						"string" == typeof n && (n = {
							name: n
						}), t = Ii(n, t), t.name = n.name
					} else if ("string" == typeof t && /^[\w\-]+\/[\w\-]+\+xml$/.test(t)) return e.resolveMode("application/xml");
					return "string" == typeof t ? {
						name: t
					} : t || {
						name: "null"
					}
				}, e.getMode = function(t, n) {
					var n = e.resolveMode(n),
						r = tl[n.name];
					if (!r) return e.getMode(t, "text/plain");
					var i = r(t, n);
					if (rl.hasOwnProperty(n.name)) {
						var o = rl[n.name];
						for (var l in o) o.hasOwnProperty(l) && (i.hasOwnProperty(l) && (i["_" + l] = i[l]), i[l] = o[l])
					}
					if (i.name = n.name, n.helperType && (i.helperType = n.helperType), n.modeProps)
						for (var l in n.modeProps) i[l] = n.modeProps[l];
					return i
				}, e.defineMode("null", function() {
					return {
						token: function(e) {
							e.skipToEnd()
						}
					}
				}), e.defineMIME("text/plain", "null");
				var rl = e.modeExtensions = {};
				e.extendMode = function(e, t) {
					var n = rl.hasOwnProperty(e) ? rl[e] : rl[e] = {};
					Pi(t, n)
				}, e.defineExtension = function(t, n) {
					e.prototype[t] = n
				}, e.defineDocExtension = function(e, t) {
					kl.prototype[e] = t
				}, e.defineOption = Gn;
				var il = [];
				e.defineInitHook = function(e) {
					il.push(e)
				};
				var ol = e.helpers = {};
				e.registerHelper = function(t, n, r) {
					ol.hasOwnProperty(t) || (ol[t] = e[t] = {
						_global: []
					}), ol[t][n] = r
				}, e.registerGlobalHelper = function(t, n, r, i) {
					e.registerHelper(t, n, i), ol[t]._global.push({
						pred: r,
						val: i
					})
				};
				var ll = e.copyState = function(e, t) {
						if (t === !0) return t;
						if (e.copyState) return e.copyState(t);
						var n = {};
						for (var r in t) {
							var i = t[r];
							i instanceof Array && (i = i.concat([])), n[r] = i
						}
						return n
					},
					al = e.startState = function(e, t, n) {
						return e.startState ? e.startState(t, n) : !0
					};
				e.innerMode = function(e, t) {
					for (; e.innerMode;) {
						var n = e.innerMode(t);
						if (!n || n.mode == e) break;
						t = n.state, e = n.mode
					}
					return n || {
						mode: e,
						state: t
					}
				};
				var sl = e.commands = {
						selectAll: function(e) {
							e.setSelection(Po(e.firstLine(), 0), Po(e.lastLine()), Il)
						},
						singleSelection: function(e) {
							e.setSelection(e.getCursor("anchor"), e.getCursor("head"), Il)
						},
						killLine: function(e) {
							_n(e, function(t) {
								if (t.empty()) {
									var n = Yr(e.doc, t.head.line).text.length;
									return t.head.ch == n && t.head.line < e.lastLine() ? {
										from: t.head,
										to: Po(t.head.line + 1, 0)
									} : {
										from: t.head,
										to: Po(t.head.line, n)
									}
								}
								return {
									from: t.from(),
									to: t.to()
								}
							})
						},
						deleteLine: function(e) {
							_n(e, function(t) {
								return {
									from: Po(t.from().line, 0),
									to: ge(e.doc, Po(t.to().line + 1, 0))
								}
							})
						},
						delLineLeft: function(e) {
							_n(e, function(e) {
								return {
									from: Po(e.from().line, 0),
									to: e.from()
								}
							})
						},
						delWrappedLineLeft: function(e) {
							_n(e, function(t) {
								var n = e.charCoords(t.head, "div").top + 5,
									r = e.coordsChar({
										left: 0,
										top: n
									}, "div");
								return {
									from: r,
									to: t.from()
								}
							})
						},
						delWrappedLineRight: function(e) {
							_n(e, function(t) {
								var n = e.charCoords(t.head, "div").top + 5,
									r = e.coordsChar({
										left: e.display.lineDiv.offsetWidth + 100,
										top: n
									}, "div");
								return {
									from: t.from(),
									to: r
								}
							})
						},
						undo: function(e) {
							e.undo()
						},
						redo: function(e) {
							e.redo()
						},
						undoSelection: function(e) {
							e.undoSelection()
						},
						redoSelection: function(e) {
							e.redoSelection()
						},
						goDocStart: function(e) {
							e.extendSelection(Po(e.firstLine(), 0))
						},
						goDocEnd: function(e) {
							e.extendSelection(Po(e.lastLine()))
						},
						goLineStart: function(e) {
							e.extendSelectionsBy(function(t) {
								return io(e, t.head.line)
							}, {
								origin: "+move",
								bias: 1
							})
						},
						goLineStartSmart: function(e) {
							e.extendSelectionsBy(function(t) {
								return lo(e, t.head)
							}, {
								origin: "+move",
								bias: 1
							})
						},
						goLineEnd: function(e) {
							e.extendSelectionsBy(function(t) {
								return oo(e, t.head.line)
							}, {
								origin: "+move",
								bias: -1
							})
						},
						goLineRight: function(e) {
							e.extendSelectionsBy(function(t) {
								var n = e.charCoords(t.head, "div").top + 5;
								return e.coordsChar({
									left: e.display.lineDiv.offsetWidth + 100,
									top: n
								}, "div")
							}, zl)
						},
						goLineLeft: function(e) {
							e.extendSelectionsBy(function(t) {
								var n = e.charCoords(t.head, "div").top + 5;
								return e.coordsChar({
									left: 0,
									top: n
								}, "div")
							}, zl)
						},
						goLineLeftSmart: function(e) {
							e.extendSelectionsBy(function(t) {
								var n = e.charCoords(t.head, "div").top + 5,
									r = e.coordsChar({
										left: 0,
										top: n
									}, "div");
								return r.ch < e.getLine(r.line).search(/\S/) ? lo(e, t.head) : r
							}, zl)
						},
						goLineUp: function(e) {
							e.moveV(-1, "line")
						},
						goLineDown: function(e) {
							e.moveV(1, "line")
						},
						goPageUp: function(e) {
							e.moveV(-1, "page")
						},
						goPageDown: function(e) {
							e.moveV(1, "page")
						},
						goCharLeft: function(e) {
							e.moveH(-1, "char")
						},
						goCharRight: function(e) {
							e.moveH(1, "char")
						},
						goColumnLeft: function(e) {
							e.moveH(-1, "column")
						},
						goColumnRight: function(e) {
							e.moveH(1, "column")
						},
						goWordLeft: function(e) {
							e.moveH(-1, "word")
						},
						goGroupRight: function(e) {
							e.moveH(1, "group")
						},
						goGroupLeft: function(e) {
							e.moveH(-1, "group")
						},
						goWordRight: function(e) {
							e.moveH(1, "word")
						},
						delCharBefore: function(e) {
							e.deleteH(-1, "char")
						},
						delCharAfter: function(e) {
							e.deleteH(1, "char")
						},
						delWordBefore: function(e) {
							e.deleteH(-1, "word")
						},
						delWordAfter: function(e) {
							e.deleteH(1, "word")
						},
						delGroupBefore: function(e) {
							e.deleteH(-1, "group")
						},
						delGroupAfter: function(e) {
							e.deleteH(1, "group")
						},
						indentAuto: function(e) {
							e.indentSelection("smart")
						},
						indentMore: function(e) {
							e.indentSelection("add")
						},
						indentLess: function(e) {
							e.indentSelection("subtract")
						},
						insertTab: function(e) {
							e.replaceSelection("	")
						},
						insertSoftTab: function(e) {
							for (var t = [], n = e.listSelections(), r = e.options.tabSize, i = 0; i < n.length; i++) {
								var o = n[i].from(),
									l = Fl(e.getLine(o.line), o.ch, r);
								t.push(new Array(r - l % r + 1).join(" "))
							}
							e.replaceSelections(t)
						},
						defaultTab: function(e) {
							e.somethingSelected() ? e.indentSelection("add") : e.execCommand("insertTab")
						},
						transposeChars: function(e) {
							Nt(e, function() {
								for (var t = e.listSelections(), n = [], r = 0; r < t.length; r++) {
									var i = t[r].head,
										o = Yr(e.doc, i.line).text;
									if (o)
										if (i.ch == o.length && (i = new Po(i.line, i.ch - 1)), i.ch > 0) i = new Po(i.line, i.ch + 1), e.replaceRange(o.charAt(i.ch - 1) + o.charAt(i.ch - 2), Po(i.line, i.ch - 2), i, "+transpose");
										else if (i.line > e.doc.first) {
										var l = Yr(e.doc, i.line - 1).text;
										l && e.replaceRange(o.charAt(0) + e.doc.lineSeparator() + l.charAt(l.length - 1), Po(i.line - 1, l.length - 1), Po(i.line, 1), "+transpose")
									}
									n.push(new he(i, i))
								}
								e.setSelections(n)
							})
						},
						newlineAndIndent: function(e) {
							Nt(e, function() {
								for (var t = e.listSelections().length, n = 0; t > n; n++) {
									var r = e.listSelections()[n];
									e.replaceRange(e.doc.lineSeparator(), r.anchor, r.head, "+input"), e.indentLine(r.from().line + 1, null, !0)
								}
								zn(e)
							})
						},
						toggleOverwrite: function(e) {
							e.toggleOverwrite()
						}
					},
					cl = e.keyMap = {};
				cl.basic = {
					Left: "goCharLeft",
					Right: "goCharRight",
					Up: "goLineUp",
					Down: "goLineDown",
					End: "goLineEnd",
					Home: "goLineStartSmart",
					PageUp: "goPageUp",
					PageDown: "goPageDown",
					Delete: "delCharAfter",
					Backspace: "delCharBefore",
					"Shift-Backspace": "delCharBefore",
					Tab: "defaultTab",
					"Shift-Tab": "indentAuto",
					Enter: "newlineAndIndent",
					Insert: "toggleOverwrite",
					Esc: "singleSelection"
				}, cl.pcDefault = {
					"Ctrl-A": "selectAll",
					"Ctrl-D": "deleteLine",
					"Ctrl-Z": "undo",
					"Shift-Ctrl-Z": "redo",
					"Ctrl-Y": "redo",
					"Ctrl-Home": "goDocStart",
					"Ctrl-End": "goDocEnd",
					"Ctrl-Up": "goLineUp",
					"Ctrl-Down": "goLineDown",
					"Ctrl-Left": "goGroupLeft",
					"Ctrl-Right": "goGroupRight",
					"Alt-Left": "goLineStart",
					"Alt-Right": "goLineEnd",
					"Ctrl-Backspace": "delGroupBefore",
					"Ctrl-Delete": "delGroupAfter",
					"Ctrl-S": "save",
					"Ctrl-F": "find",
					"Ctrl-G": "findNext",
					"Shift-Ctrl-G": "findPrev",
					"Shift-Ctrl-F": "replace",
					"Shift-Ctrl-R": "replaceAll",
					"Ctrl-[": "indentLess",
					"Ctrl-]": "indentMore",
					"Ctrl-U": "undoSelection",
					"Shift-Ctrl-U": "redoSelection",
					"Alt-U": "redoSelection",
					fallthrough: "basic"
				}, cl.emacsy = {
					"Ctrl-F": "goCharRight",
					"Ctrl-B": "goCharLeft",
					"Ctrl-P": "goLineUp",
					"Ctrl-N": "goLineDown",
					"Alt-F": "goWordRight",
					"Alt-B": "goWordLeft",
					"Ctrl-A": "goLineStart",
					"Ctrl-E": "goLineEnd",
					"Ctrl-V": "goPageDown",
					"Shift-Ctrl-V": "goPageUp",
					"Ctrl-D": "delCharAfter",
					"Ctrl-H": "delCharBefore",
					"Alt-D": "delWordAfter",
					"Alt-Backspace": "delWordBefore",
					"Ctrl-K": "killLine",
					"Ctrl-T": "transposeChars"
				}, cl.macDefault = {
					"Cmd-A": "selectAll",
					"Cmd-D": "deleteLine",
					"Cmd-Z": "undo",
					"Shift-Cmd-Z": "redo",
					"Cmd-Y": "redo",
					"Cmd-Home": "goDocStart",
					"Cmd-Up": "goDocStart",
					"Cmd-End": "goDocEnd",
					"Cmd-Down": "goDocEnd",
					"Alt-Left": "goGroupLeft",
					"Alt-Right": "goGroupRight",
					"Cmd-Left": "goLineLeft",
					"Cmd-Right": "goLineRight",
					"Alt-Backspace": "delGroupBefore",
					"Ctrl-Alt-Backspace": "delGroupAfter",
					"Alt-Delete": "delGroupAfter",
					"Cmd-S": "save",
					"Cmd-F": "find",
					"Cmd-G": "findNext",
					"Shift-Cmd-G": "findPrev",
					"Cmd-Alt-F": "replace",
					"Shift-Cmd-Alt-F": "replaceAll",
					"Cmd-[": "indentLess",
					"Cmd-]": "indentMore",
					"Cmd-Backspace": "delWrappedLineLeft",
					"Cmd-Delete": "delWrappedLineRight",
					"Cmd-U": "undoSelection",
					"Shift-Cmd-U": "redoSelection",
					"Ctrl-Up": "goDocStart",
					"Ctrl-Down": "goDocEnd",
					fallthrough: ["basic", "emacsy"]
				}, cl["default"] = Ao ? cl.macDefault : cl.pcDefault, e.normalizeKeyMap = function(e) {
					var t = {};
					for (var n in e)
						if (e.hasOwnProperty(n)) {
							var r = e[n];
							if (/^(name|fallthrough|(de|at)tach)$/.test(n)) continue;
							if ("..." == r) {
								delete e[n];
								continue
							}
							for (var i = Di(n.split(" "), Un), o = 0; o < i.length; o++) {
								var l, a;
								o == i.length - 1 ? (a = i.join(" "), l = r) : (a = i.slice(0, o + 1).join(" "), l = "...");
								var s = t[a];
								if (s) {
									if (s != l) throw new Error("Inconsistent bindings for " + a)
								} else t[a] = l
							}
							delete e[n]
						}
					for (var c in t) e[c] = t[c];
					return e
				};
				var ul = e.lookupKey = function(e, t, n, r) {
						t = $n(t);
						var i = t.call ? t.call(e, r) : t[e];
						if (i === !1) return "nothing";
						if ("..." === i) return "multi";
						if (null != i && n(i)) return "handled";
						if (t.fallthrough) {
							if ("[object Array]" != Object.prototype.toString.call(t.fallthrough)) return ul(e, t.fallthrough, n, r);
							for (var o = 0; o < t.fallthrough.length; o++) {
								var l = ul(e, t.fallthrough[o], n, r);
								if (l) return l
							}
						}
					},
					dl = e.isModifierKey = function(e) {
						var t = "string" == typeof e ? e : ra[e.keyCode];
						return "Ctrl" == t || "Alt" == t || "Shift" == t || "Mod" == t
					},
					hl = e.keyName = function(e, t) {
						if (Co && 34 == e.keyCode && e["char"]) return !1;
						var n = ra[e.keyCode],
							r = n;
						return null == r || e.altGraphKey ? !1 : (e.altKey && "Alt" != n && (r = "Alt-" + r), (Ho ? e.metaKey : e.ctrlKey) && "Ctrl" != n && (r = "Ctrl-" + r), (Ho ? e.ctrlKey : e.metaKey) && "Cmd" != n && (r = "Cmd-" + r), !t && e.shiftKey && "Shift" != n && (r = "Shift-" + r), r)
					};
				e.fromTextArea = function(t, n) {
					function r() {
						t.value = c.getValue()
					}
					if (n = n ? Pi(n) : {}, n.value = t.value, !n.tabindex && t.tabIndex && (n.tabindex = t.tabIndex), !n.placeholder && t.placeholder && (n.placeholder = t.placeholder), null == n.autofocus) {
						var i = Gi();
						n.autofocus = i == t || null != t.getAttribute("autofocus") && i == document.body
					}
					if (t.form && (Nl(t.form, "submit", r), !n.leaveSubmitMethodAlone)) {
						var o = t.form,
							l = o.submit;
						try {
							var a = o.submit = function() {
								r(), o.submit = l, o.submit(), o.submit = a
							}
						} catch (s) {}
					}
					n.finishInit = function(e) {
						e.save = r, e.getTextArea = function() {
							return t
						}, e.toTextArea = function() {
							e.toTextArea = isNaN, r(), t.parentNode.removeChild(e.getWrapperElement()), t.style.display = "", t.form && (Ol(t.form, "submit", r), "function" == typeof t.form.submit && (t.form.submit = l))
						}
					}, t.style.display = "none";
					var c = e(function(e) {
						t.parentNode.insertBefore(e, t.nextSibling)
					}, n);
					return c
				};
				var fl = e.StringStream = function(e, t) {
					this.pos = this.start = 0, this.string = e, this.tabSize = t || 8, this.lastColumnPos = this.lastColumnValue = 0, this.lineStart = 0
				};
				fl.prototype = {
					eol: function() {
						return this.pos >= this.string.length
					},
					sol: function() {
						return this.pos == this.lineStart
					},
					peek: function() {
						return this.string.charAt(this.pos) || void 0
					},
					next: function() {
						return this.pos < this.string.length ? this.string.charAt(this.pos++) : void 0
					},
					eat: function(e) {
						var t = this.string.charAt(this.pos);
						if ("string" == typeof e) var n = t == e;
						else var n = t && (e.test ? e.test(t) : e(t));
						return n ? (++this.pos, t) : void 0
					},
					eatWhile: function(e) {
						for (var t = this.pos; this.eat(e););
						return this.pos > t
					},
					eatSpace: function() {
						for (var e = this.pos;
							/[\s\u00a0]/.test(this.string.charAt(this.pos));) ++this.pos;
						return this.pos > e
					},
					skipToEnd: function() {
						this.pos = this.string.length
					},
					skipTo: function(e) {
						var t = this.string.indexOf(e, this.pos);
						return t > -1 ? (this.pos = t, !0) : void 0
					},
					backUp: function(e) {
						this.pos -= e
					},
					column: function() {
						return this.lastColumnPos < this.start && (this.lastColumnValue = Fl(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue - (this.lineStart ? Fl(this.string, this.lineStart, this.tabSize) : 0)
					},
					indentation: function() {
						return Fl(this.string, null, this.tabSize) - (this.lineStart ? Fl(this.string, this.lineStart, this.tabSize) : 0)
					},
					match: function(e, t, n) {
						if ("string" != typeof e) {
							var r = this.string.slice(this.pos).match(e);
							return r && r.index > 0 ? null : (r && t !== !1 && (this.pos += r[0].length), r)
						}
						var i = function(e) {
								return n ? e.toLowerCase() : e
							},
							o = this.string.substr(this.pos, e.length);
						return i(o) == i(e) ? (t !== !1 && (this.pos += e.length), !0) : void 0
					},
					current: function() {
						return this.string.slice(this.start, this.pos)
					},
					hideFirstChars: function(e, t) {
						this.lineStart += e;
						try {
							return t()
						} finally {
							this.lineStart -= e
						}
					}
				};
				var pl = 0,
					ml = e.TextMarker = function(e, t) {
						this.lines = [], this.type = t, this.doc = e, this.id = ++pl
					};
				Ni(ml), ml.prototype.clear = function() {
					if (!this.explicitlyCleared) {
						var e = this.doc.cm,
							t = e && !e.curOp;
						if (t && xt(e), Mi(this, "clear")) {
							var n = this.find();
							n && Ci(this, "clear", n.from, n.to)
						}
						for (var r = null, i = null, o = 0; o < this.lines.length; ++o) {
							var l = this.lines[o],
								a = Jn(l.markedSpans, this);
							e && !this.collapsed ? It(e, ei(l), "text") : e && (null != a.to && (i = ei(l)), null != a.from && (r = ei(l))), l.markedSpans = er(l.markedSpans, a), null == a.from && this.collapsed && !wr(this.doc, l) && e && Jr(l, vt(e.display))
						}
						if (e && this.collapsed && !e.options.lineWrapping)
							for (var o = 0; o < this.lines.length; ++o) {
								var s = vr(this.lines[o]),
									c = d(s);
								c > e.display.maxLineLength && (e.display.maxLine = s, e.display.maxLineLength = c, e.display.maxLineChanged = !0)
							}
						null != r && e && this.collapsed && Et(e, r, i + 1), this.lines.length = 0, this.explicitlyCleared = !0, this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, e && Oe(e.doc)), e && Ci(e, "markerCleared", e, this), t && wt(e), this.parent && this.parent.clear()
					}
				}, ml.prototype.find = function(e, t) {
					null == e && "bookmark" == this.type && (e = 1);
					for (var n, r, i = 0; i < this.lines.length; ++i) {
						var o = this.lines[i],
							l = Jn(o.markedSpans, this);
						if (null != l.from && (n = Po(t ? o : ei(o), l.from), -1 == e)) return n;
						if (null != l.to && (r = Po(t ? o : ei(o), l.to), 1 == e)) return r
					}
					return n && {
						from: n,
						to: r
					}
				}, ml.prototype.changed = function() {
					var e = this.find(-1, !0),
						t = this,
						n = this.doc.cm;
					e && n && Nt(n, function() {
						var r = e.line,
							i = ei(e.line),
							o = Qe(n, i);
						if (o && (it(o), n.curOp.selectionChanged = n.curOp.forceUpdate = !0), n.curOp.updateMaxLine = !0, !wr(t.doc, r) && null != t.height) {
							var l = t.height;
							t.height = null;
							var a = Sr(t) - l;
							a && Jr(r, r.height + a)
						}
					})
				}, ml.prototype.attachLine = function(e) {
					if (!this.lines.length && this.doc.cm) {
						var t = this.doc.cm.curOp;
						t.maybeHiddenMarkers && -1 != Hi(t.maybeHiddenMarkers, this) || (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this)
					}
					this.lines.push(e)
				}, ml.prototype.detachLine = function(e) {
					if (this.lines.splice(Hi(this.lines, e), 1), !this.lines.length && this.doc.cm) {
						var t = this.doc.cm.curOp;
						(t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this)
					}
				};
				var pl = 0,
					gl = e.SharedTextMarker = function(e, t) {
						this.markers = e, this.primary = t;
						for (var n = 0; n < e.length; ++n) e[n].parent = this
					};
				Ni(gl), gl.prototype.clear = function() {
					if (!this.explicitlyCleared) {
						this.explicitlyCleared = !0;
						for (var e = 0; e < this.markers.length; ++e) this.markers[e].clear();
						Ci(this, "clear")
					}
				}, gl.prototype.find = function(e, t) {
					return this.primary.find(e, t)
				};
				var vl = e.LineWidget = function(e, t, n) {
					if (n)
						for (var r in n) n.hasOwnProperty(r) && (this[r] = n[r]);
					this.doc = e, this.node = t
				};
				Ni(vl), vl.prototype.clear = function() {
					var e = this.doc.cm,
						t = this.line.widgets,
						n = this.line,
						r = ei(n);
					if (null != r && t) {
						for (var i = 0; i < t.length; ++i) t[i] == this && t.splice(i--, 1);
						t.length || (n.widgets = null);
						var o = Sr(this);
						Jr(n, Math.max(0, n.height - o)), e && Nt(e, function() {
							Cr(e, n, -o), It(e, r, "widget")
						})
					}
				}, vl.prototype.changed = function() {
					var e = this.height,
						t = this.doc.cm,
						n = this.line;
					this.height = null;
					var r = Sr(this) - e;
					r && (Jr(n, n.height + r), t && Nt(t, function() {
						t.curOp.forceUpdate = !0, Cr(t, n, r)
					}))
				};
				var yl = e.Line = function(e, t, n) {
					this.text = e, cr(this, t), this.height = n ? n(this) : 1
				};
				Ni(yl), yl.prototype.lineNo = function() {
					return ei(this)
				};
				var xl = {},
					bl = {};
				$r.prototype = {
					chunkSize: function() {
						return this.lines.length
					},
					removeInner: function(e, t) {
						for (var n = e, r = e + t; r > n; ++n) {
							var i = this.lines[n];
							this.height -= i.height, Mr(i), Ci(i, "delete")
						}
						this.lines.splice(e, t)
					},
					collapse: function(e) {
						e.push.apply(e, this.lines)
					},
					insertInner: function(e, t, n) {
						this.height += n, this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e));
						for (var r = 0; r < t.length; ++r) t[r].parent = this
					},
					iterN: function(e, t, n) {
						for (var r = e + t; r > e; ++e)
							if (n(this.lines[e])) return !0
					}
				}, Vr.prototype = {
					chunkSize: function() {
						return this.size
					},
					removeInner: function(e, t) {
						this.size -= t;
						for (var n = 0; n < this.children.length; ++n) {
							var r = this.children[n],
								i = r.chunkSize();
							if (i > e) {
								var o = Math.min(t, i - e),
									l = r.height;
								if (r.removeInner(e, o), this.height -= l - r.height, i == o && (this.children.splice(n--, 1), r.parent = null), 0 == (t -= o)) break;
								e = 0
							} else e -= i
						}
						if (this.size - t < 25 && (this.children.length > 1 || !(this.children[0] instanceof $r))) {
							var a = [];
							this.collapse(a), this.children = [new $r(a)], this.children[0].parent = this
						}
					},
					collapse: function(e) {
						for (var t = 0; t < this.children.length; ++t) this.children[t].collapse(e)
					},
					insertInner: function(e, t, n) {
						this.size += t.length, this.height += n;
						for (var r = 0; r < this.children.length; ++r) {
							var i = this.children[r],
								o = i.chunkSize();
							if (o >= e) {
								if (i.insertInner(e, t, n), i.lines && i.lines.length > 50) {
									for (; i.lines.length > 50;) {
										var l = i.lines.splice(i.lines.length - 25, 25),
											a = new $r(l);
										i.height -= a.height, this.children.splice(r + 1, 0, a), a.parent = this
									}
									this.maybeSpill()
								}
								break
							}
							e -= o
						}
					},
					maybeSpill: function() {
						if (!(this.children.length <= 10)) {
							var e = this;
							do {
								var t = e.children.splice(e.children.length - 5, 5),
									n = new Vr(t);
								if (e.parent) {
									e.size -= n.size, e.height -= n.height;
									var r = Hi(e.parent.children, e);
									e.parent.children.splice(r + 1, 0, n)
								} else {
									var i = new Vr(e.children);
									i.parent = e, e.children = [i, n], e = i
								}
								n.parent = e.parent
							} while (e.children.length > 10);
							e.parent.maybeSpill()
						}
					},
					iterN: function(e, t, n) {
						for (var r = 0; r < this.children.length; ++r) {
							var i = this.children[r],
								o = i.chunkSize();
							if (o > e) {
								var l = Math.min(t, o - e);
								if (i.iterN(e, l, n)) return !0;
								if (0 == (t -= l)) break;
								e = 0
							} else e -= o
						}
					}
				};
				var wl = 0,
					kl = e.Doc = function(e, t, n, r) {
						if (!(this instanceof kl)) return new kl(e, t, n, r);
						null == n && (n = 0), Vr.call(this, [new $r([new yl("", null)])]), this.first = n, this.scrollTop = this.scrollLeft = 0, this.cantEdit = !1, this.cleanGeneration = 1, this.frontier = n;
						var i = Po(n, 0);
						this.sel = pe(i), this.history = new ii(null), this.id = ++wl, this.modeOption = t, this.lineSep = r, "string" == typeof e && (e = this.splitLines(e)), Ur(this, {
							from: i,
							to: i,
							text: e
						}), Me(this, pe(i), Il)
					};
				kl.prototype = Ii(Vr.prototype, {
					constructor: kl,
					iter: function(e, t, n) {
						n ? this.iterN(e - this.first, t - e, n) : this.iterN(this.first, this.first + this.size, e)
					},
					insert: function(e, t) {
						for (var n = 0, r = 0; r < t.length; ++r) n += t[r].height;
						this.insertInner(e - this.first, t, n)
					},
					remove: function(e, t) {
						this.removeInner(e - this.first, t)
					},
					getValue: function(e) {
						var t = Qr(this, this.first, this.first + this.size);
						return e === !1 ? t : t.join(e || this.lineSeparator())
					},
					setValue: Wt(function(e) {
						var t = Po(this.first, 0),
							n = this.first + this.size - 1;
						Ln(this, {
							from: t,
							to: Po(n, Yr(this, n).text.length),
							text: this.splitLines(e),
							origin: "setValue",
							full: !0
						}, !0), Me(this, pe(t))
					}),
					replaceRange: function(e, t, n, r) {
						t = ge(this, t), n = n ? ge(this, n) : t, Wn(this, e, t, n, r)
					},
					getRange: function(e, t, n) {
						var r = Zr(this, ge(this, e), ge(this, t));
						return n === !1 ? r : r.join(n || this.lineSeparator())
					},
					getLine: function(e) {
						var t = this.getLineHandle(e);
						return t && t.text
					},
					getLineHandle: function(e) {
						return ye(this, e) ? Yr(this, e) : void 0
					},
					getLineNumber: function(e) {
						return ei(e)
					},
					getLineHandleVisualStart: function(e) {
						return "number" == typeof e && (e = Yr(this, e)), vr(e)
					},
					lineCount: function() {
						return this.size
					},
					firstLine: function() {
						return this.first
					},
					lastLine: function() {
						return this.first + this.size - 1
					},
					clipPos: function(e) {
						return ge(this, e)
					},
					getCursor: function(e) {
						var t, n = this.sel.primary();
						return t = null == e || "head" == e ? n.head : "anchor" == e ? n.anchor : "end" == e || "to" == e || e === !1 ? n.to() : n.from()
					},
					listSelections: function() {
						return this.sel.ranges
					},
					somethingSelected: function() {
						return this.sel.somethingSelected()
					},
					setCursor: Wt(function(e, t, n) {
						Se(this, ge(this, "number" == typeof e ? Po(e, t || 0) : e), null, n)
					}),
					setSelection: Wt(function(e, t, n) {
						Se(this, ge(this, e), ge(this, t || e), n)
					}),
					extendSelection: Wt(function(e, t, n) {
						we(this, ge(this, e), t && ge(this, t), n)
					}),
					extendSelections: Wt(function(e, t) {
						ke(this, xe(this, e, t))
					}),
					extendSelectionsBy: Wt(function(e, t) {
						ke(this, Di(this.sel.ranges, e), t)
					}),
					setSelections: Wt(function(e, t, n) {
						if (e.length) {
							for (var r = 0, i = []; r < e.length; r++) i[r] = new he(ge(this, e[r].anchor), ge(this, e[r].head));
							null == t && (t = Math.min(e.length - 1, this.sel.primIndex)), Me(this, fe(i, t), n)
						}
					}),
					addSelection: Wt(function(e, t, n) {
						var r = this.sel.ranges.slice(0);
						r.push(new he(ge(this, e), ge(this, t || e))), Me(this, fe(r, r.length - 1), n)
					}),
					getSelection: function(e) {
						for (var t, n = this.sel.ranges, r = 0; r < n.length; r++) {
							var i = Zr(this, n[r].from(), n[r].to());
							t = t ? t.concat(i) : i
						}
						return e === !1 ? t : t.join(e || this.lineSeparator())
					},
					getSelections: function(e) {
						for (var t = [], n = this.sel.ranges, r = 0; r < n.length; r++) {
							var i = Zr(this, n[r].from(), n[r].to());
							e !== !1 && (i = i.join(e || this.lineSeparator())), t[r] = i
						}
						return t
					},
					replaceSelection: function(e, t, n) {
						for (var r = [], i = 0; i < this.sel.ranges.length; i++) r[i] = e;
						this.replaceSelections(r, t, n || "+input")
					},
					replaceSelections: Wt(function(e, t, n) {
						for (var r = [], i = this.sel, o = 0; o < i.ranges.length; o++) {
							var l = i.ranges[o];
							r[o] = {
								from: l.from(),
								to: l.to(),
								text: this.splitLines(e[o]),
								origin: n
							}
						}
						for (var a = t && "end" != t && Cn(this, r, t), o = r.length - 1; o >= 0; o--) Ln(this, r[o]);
						a ? Te(this, a) : this.cm && zn(this.cm)
					}),
					undo: Wt(function() {
						Mn(this, "undo")
					}),
					redo: Wt(function() {
						Mn(this, "redo")
					}),
					undoSelection: Wt(function() {
						Mn(this, "undo", !0)
					}),
					redoSelection: Wt(function() {
						Mn(this, "redo", !0)
					}),
					setExtending: function(e) {
						this.extend = e
					},
					getExtending: function() {
						return this.extend
					},
					historySize: function() {
						for (var e = this.history, t = 0, n = 0, r = 0; r < e.done.length; r++) e.done[r].ranges || ++t;
						for (var r = 0; r < e.undone.length; r++) e.undone[r].ranges || ++n;
						return {
							undo: t,
							redo: n
						}
					},
					clearHistory: function() {
						this.history = new ii(this.history.maxGeneration)
					},
					markClean: function() {
						this.cleanGeneration = this.changeGeneration(!0)
					},
					changeGeneration: function(e) {
						return e && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null), this.history.generation
					},
					isClean: function(e) {
						return this.history.generation == (e || this.cleanGeneration)
					},
					getHistory: function() {
						return {
							done: mi(this.history.done),
							undone: mi(this.history.undone)
						}
					},
					setHistory: function(e) {
						var t = this.history = new ii(this.history.maxGeneration);
						t.done = mi(e.done.slice(0), null, !0), t.undone = mi(e.undone.slice(0), null, !0)
					},
					addLineClass: Wt(function(e, t, n) {
						return Bn(this, e, "gutter" == t ? "gutter" : "class", function(e) {
							var r = "text" == t ? "textClass" : "background" == t ? "bgClass" : "gutter" == t ? "gutterClass" : "wrapClass";
							if (e[r]) {
								if (Ui(n).test(e[r])) return !1;
								e[r] += " " + n
							} else e[r] = n;
							return !0
						})
					}),
					removeLineClass: Wt(function(e, t, n) {
						return Bn(this, e, "gutter" == t ? "gutter" : "class", function(e) {
							var r = "text" == t ? "textClass" : "background" == t ? "bgClass" : "gutter" == t ? "gutterClass" : "wrapClass",
								i = e[r];
							if (!i) return !1;
							if (null == n) e[r] = null;
							else {
								var o = i.match(Ui(n));
								if (!o) return !1;
								var l = o.index + o[0].length;
								e[r] = i.slice(0, o.index) + (o.index && l != i.length ? " " : "") + i.slice(l) || null
							}
							return !0
						})
					}),
					addLineWidget: Wt(function(e, t, n) {
						return Lr(this, e, t, n)
					}),
					removeLineWidget: function(e) {
						e.clear()
					},
					markText: function(e, t, n) {
						return Vn(this, ge(this, e), ge(this, t), n, n && n.type || "range")
					},
					setBookmark: function(e, t) {
						var n = {
							replacedWith: t && (null == t.nodeType ? t.widget : t),
							insertLeft: t && t.insertLeft,
							clearWhenEmpty: !1,
							shared: t && t.shared,
							handleMouseEvents: t && t.handleMouseEvents
						};
						return e = ge(this, e), Vn(this, e, e, n, "bookmark")
					},
					findMarksAt: function(e) {
						e = ge(this, e);
						var t = [],
							n = Yr(this, e.line).markedSpans;
						if (n)
							for (var r = 0; r < n.length; ++r) {
								var i = n[r];
								(null == i.from || i.from <= e.ch) && (null == i.to || i.to >= e.ch) && t.push(i.marker.parent || i.marker)
							}
						return t
					},
					findMarks: function(e, t, n) {
						e = ge(this, e), t = ge(this, t);
						var r = [],
							i = e.line;
						return this.iter(e.line, t.line + 1, function(o) {
							var l = o.markedSpans;
							if (l)
								for (var a = 0; a < l.length; a++) {
									var s = l[a];
									i == e.line && e.ch > s.to || null == s.from && i != e.line || i == t.line && s.from > t.ch || n && !n(s.marker) || r.push(s.marker.parent || s.marker)
								}++i
						}), r
					},
					getAllMarks: function() {
						var e = [];
						return this.iter(function(t) {
							var n = t.markedSpans;
							if (n)
								for (var r = 0; r < n.length; ++r) null != n[r].from && e.push(n[r].marker)
						}), e
					},
					posFromIndex: function(e) {
						var t, n = this.first;
						return this.iter(function(r) {
							var i = r.text.length + 1;
							return i > e ? (t = e, !0) : (e -= i, void++n)
						}), ge(this, Po(n, t))
					},
					indexFromPos: function(e) {
						e = ge(this, e);
						var t = e.ch;
						return e.line < this.first || e.ch < 0 ? 0 : (this.iter(this.first, e.line, function(e) {
							t += e.text.length + 1
						}), t)
					},
					copy: function(e) {
						var t = new kl(Qr(this, this.first, this.first + this.size), this.modeOption, this.first, this.lineSep);
						return t.scrollTop = this.scrollTop, t.scrollLeft = this.scrollLeft, t.sel = this.sel, t.extend = !1, e && (t.history.undoDepth = this.history.undoDepth, t.setHistory(this.getHistory())), t
					},
					linkedDoc: function(e) {
						e || (e = {});
						var t = this.first,
							n = this.first + this.size;
						null != e.from && e.from > t && (t = e.from), null != e.to && e.to < n && (n = e.to);
						var r = new kl(Qr(this, t, n), e.mode || this.modeOption, t, this.lineSep);
						return e.sharedHist && (r.history = this.history), (this.linked || (this.linked = [])).push({
							doc: r,
							sharedHist: e.sharedHist
						}), r.linked = [{
							doc: this,
							isParent: !0,
							sharedHist: e.sharedHist
						}], Yn(r, Xn(this)), r
					},
					unlinkDoc: function(t) {
						if (t instanceof e && (t = t.doc), this.linked)
							for (var n = 0; n < this.linked.length; ++n) {
								var r = this.linked[n];
								if (r.doc == t) {
									this.linked.splice(n, 1), t.unlinkDoc(this), Zn(Xn(this));
									break
								}
							}
						if (t.history == this.history) {
							var i = [t.id];
							Kr(t, function(e) {
								i.push(e.id)
							}, !0), t.history = new ii(null), t.history.done = mi(this.history.done, i), t.history.undone = mi(this.history.undone, i)
						}
					},
					iterLinkedDocs: function(e) {
						Kr(this, e)
					},
					getMode: function() {
						return this.mode
					},
					getEditor: function() {
						return this.cm
					},
					splitLines: function(e) {
						return this.lineSep ? e.split(this.lineSep) : Jl(e)
					},
					lineSeparator: function() {
						return this.lineSep || "\n"
					}
				}), kl.prototype.eachLine = kl.prototype.iter;
				var Cl = "iter insert remove copy getEditor constructor".split(" ");
				for (var Sl in kl.prototype) kl.prototype.hasOwnProperty(Sl) && Hi(Cl, Sl) < 0 && (e.prototype[Sl] = function(e) {
					return function() {
						return e.apply(this.doc, arguments)
					}
				}(kl.prototype[Sl]));
				Ni(kl);
				var Ll = e.e_preventDefault = function(e) {
						e.preventDefault ? e.preventDefault() : e.returnValue = !1
					},
					Tl = e.e_stopPropagation = function(e) {
						e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
					},
					Ml = e.e_stop = function(e) {
						Ll(e), Tl(e)
					},
					Nl = e.on = function(e, t, n) {
						if (e.addEventListener) e.addEventListener(t, n, !1);
						else if (e.attachEvent) e.attachEvent("on" + t, n);
						else {
							var r = e._handlers || (e._handlers = {}),
								i = r[t] || (r[t] = []);
							i.push(n)
						}
					},
					Al = [],
					Ol = e.off = function(e, t, n) {
						if (e.removeEventListener) e.removeEventListener(t, n, !1);
						else if (e.detachEvent) e.detachEvent("on" + t, n);
						else
							for (var r = ki(e, t, !1), i = 0; i < r.length; ++i)
								if (r[i] == n) {
									r.splice(i, 1);
									break
								}
					},
					Wl = e.signal = function(e, t) {
						var n = ki(e, t, !0);
						if (n.length)
							for (var r = Array.prototype.slice.call(arguments, 2), i = 0; i < n.length; ++i) n[i].apply(null, r)
					},
					Hl = null,
					Dl = 30,
					El = e.Pass = {
						toString: function() {
							return "CodeMirror.Pass"
						}
					},
					Il = {
						scroll: !1
					},
					Pl = {
						origin: "*mouse"
					},
					zl = {
						origin: "+move"
					};
				Ai.prototype.set = function(e, t) {
					clearTimeout(this.id), this.id = setTimeout(t, e)
				};
				var Fl = e.countColumn = function(e, t, n, r, i) {
						null == t && (t = e.search(/[^\s\u00a0]/), -1 == t && (t = e.length));
						for (var o = r || 0, l = i || 0;;) {
							var a = e.indexOf("	", o);
							if (0 > a || a >= t) return l + (t - o);
							l += a - o, l += n - l % n, o = a + 1
						}
					},
					Rl = e.findColumn = function(e, t, n) {
						for (var r = 0, i = 0;;) {
							var o = e.indexOf("	", r); - 1 == o && (o = e.length);
							var l = o - r;
							if (o == e.length || i + l >= t) return r + Math.min(l, t - i);
							if (i += o - r, i += n - i % n, r = o + 1, i >= t) return r
						}
					},
					Bl = [""],
					_l = function(e) {
						e.select()
					};
				Mo ? _l = function(e) {
					e.selectionStart = 0, e.selectionEnd = e.value.length
				} : yo && (_l = function(e) {
					try {
						e.select()
					} catch (t) {}
				});
				var jl, ql = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,
					Gl = e.isWordChar = function(e) {
						return /\w/.test(e) || e > "" && (e.toUpperCase() != e.toLowerCase() || ql.test(e))
					},
					Ul = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
				jl = document.createRange ? function(e, t, n, r) {
					var i = document.createRange();
					return i.setEnd(r || e, n), i.setStart(e, t), i
				} : function(e, t, n) {
					var r = document.body.createTextRange();
					try {
						r.moveToElementText(e.parentNode)
					} catch (i) {
						return r
					}
					return r.collapse(!0), r.moveEnd("character", n), r.moveStart("character", t), r
				};
				var $l = e.contains = function(e, t) {
					if (3 == t.nodeType && (t = t.parentNode), e.contains) return e.contains(t);
					do
						if (11 == t.nodeType && (t = t.host), t == e) return !0;
					while (t = t.parentNode)
				};
				yo && 11 > xo && (Gi = function() {
					try {
						return document.activeElement
					} catch (e) {
						return document.body
					}
				});
				var Vl, Kl, Xl = e.rmClass = function(e, t) {
						var n = e.className,
							r = Ui(t).exec(n);
						if (r) {
							var i = n.slice(r.index + r[0].length);
							e.className = n.slice(0, r.index) + (i ? r[1] + i : "")
						}
					},
					Yl = e.addClass = function(e, t) {
						var n = e.className;
						Ui(t).test(n) || (e.className += (n ? " " : "") + t)
					},
					Zl = !1,
					Ql = function() {
						if (yo && 9 > xo) return !1;
						var e = _i("div");
						return "draggable" in e || "dragDrop" in e
					}(),
					Jl = e.splitLines = 3 != "\n\nb".split(/\n/).length ? function(e) {
						for (var t = 0, n = [], r = e.length; r >= t;) {
							var i = e.indexOf("\n", t); - 1 == i && (i = e.length);
							var o = e.slice(t, "\r" == e.charAt(i - 1) ? i - 1 : i),
								l = o.indexOf("\r"); - 1 != l ? (n.push(o.slice(0, l)), t += l + 1) : (n.push(o), t = i + 1)
						}
						return n
					} : function(e) {
						return e.split(/\r\n?|\n/)
					},
					ea = window.getSelection ? function(e) {
						try {
							return e.selectionStart != e.selectionEnd
						} catch (t) {
							return !1
						}
					} : function(e) {
						try {
							var t = e.ownerDocument.selection.createRange()
						} catch (n) {}
						return t && t.parentElement() == e ? 0 != t.compareEndPoints("StartToEnd", t) : !1
					},
					ta = function() {
						var e = _i("div");
						return "oncopy" in e ? !0 : (e.setAttribute("oncopy", "return;"), "function" == typeof e.oncopy)
					}(),
					na = null,
					ra = e.keyNames = {
						3: "Enter",
						8: "Backspace",
						9: "Tab",
						13: "Enter",
						16: "Shift",
						17: "Ctrl",
						18: "Alt",
						19: "Pause",
						20: "CapsLock",
						27: "Esc",
						32: "Space",
						33: "PageUp",
						34: "PageDown",
						35: "End",
						36: "Home",
						37: "Left",
						38: "Up",
						39: "Right",
						40: "Down",
						44: "PrintScrn",
						45: "Insert",
						46: "Delete",
						59: ";",
						61: "=",
						91: "Mod",
						92: "Mod",
						93: "Mod",
						106: "*",
						107: "=",
						109: "-",
						110: ".",
						111: "/",
						127: "Delete",
						173: "-",
						186: ";",
						187: "=",
						188: ",",
						189: "-",
						190: ".",
						191: "/",
						192: "`",
						219: "[",
						220: "\\",
						221: "]",
						222: "'",
						63232: "Up",
						63233: "Down",
						63234: "Left",
						63235: "Right",
						63272: "Delete",
						63273: "Home",
						63275: "End",
						63276: "PageUp",
						63277: "PageDown",
						63302: "Insert"
					};
				! function() {
					for (var e = 0; 10 > e; e++) ra[e + 48] = ra[e + 96] = String(e);
					for (var e = 65; 90 >= e; e++) ra[e] = String.fromCharCode(e);
					for (var e = 1; 12 >= e; e++) ra[e + 111] = ra[e + 63235] = "F" + e
				}();
				var ia, oa = function() {
					function e(e) {
						return 247 >= e ? n.charAt(e) : e >= 1424 && 1524 >= e ? "R" : e >= 1536 && 1773 >= e ? r.charAt(e - 1536) : e >= 1774 && 2220 >= e ? "r" : e >= 8192 && 8203 >= e ? "w" : 8204 == e ? "b" : "L"
					}

					function t(e, t, n) {
						this.level = e, this.from = t, this.to = n
					}
					var n = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",
						r = "rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmm",
						i = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
						o = /[stwN]/,
						l = /[LRr]/,
						a = /[Lb1n]/,
						s = /[1n]/,
						c = "L";
					return function(n) {
						if (!i.test(n)) return !1;
						for (var r, u = n.length, d = [], h = 0; u > h; ++h) d.push(r = e(n.charCodeAt(h)));
						for (var h = 0, f = c; u > h; ++h) {
							var r = d[h];
							"m" == r ? d[h] = f : f = r
						}
						for (var h = 0, p = c; u > h; ++h) {
							var r = d[h];
							"1" == r && "r" == p ? d[h] = "n" : l.test(r) && (p = r, "r" == r && (d[h] = "R"))
						}
						for (var h = 1, f = d[0]; u - 1 > h; ++h) {
							var r = d[h];
							"+" == r && "1" == f && "1" == d[h + 1] ? d[h] = "1" : "," != r || f != d[h + 1] || "1" != f && "n" != f || (d[h] = f), f = r
						}
						for (var h = 0; u > h; ++h) {
							var r = d[h];
							if ("," == r) d[h] = "N";
							else if ("%" == r) {
								for (var m = h + 1; u > m && "%" == d[m]; ++m);
								for (var g = h && "!" == d[h - 1] || u > m && "1" == d[m] ? "1" : "N", v = h; m > v; ++v) d[v] = g;
								h = m - 1
							}
						}
						for (var h = 0, p = c; u > h; ++h) {
							var r = d[h];
							"L" == p && "1" == r ? d[h] = "L" : l.test(r) && (p = r)
						}
						for (var h = 0; u > h; ++h)
							if (o.test(d[h])) {
								for (var m = h + 1; u > m && o.test(d[m]); ++m);
								for (var y = "L" == (h ? d[h - 1] : c), x = "L" == (u > m ? d[m] : c), g = y || x ? "L" : "R", v = h; m > v; ++v) d[v] = g;
								h = m - 1
							}
						for (var b, w = [], h = 0; u > h;)
							if (a.test(d[h])) {
								var k = h;
								for (++h; u > h && a.test(d[h]); ++h);
								w.push(new t(0, k, h))
							} else {
								var C = h,
									S = w.length;
								for (++h; u > h && "L" != d[h]; ++h);
								for (var v = C; h > v;)
									if (s.test(d[v])) {
										v > C && w.splice(S, 0, new t(1, C, v));
										var L = v;
										for (++v; h > v && s.test(d[v]); ++v);
										w.splice(S, 0, new t(2, L, v)), C = v
									} else ++v;
								h > C && w.splice(S, 0, new t(1, C, h))
							}
						return 1 == w[0].level && (b = n.match(/^\s+/)) && (w[0].from = b[0].length, w.unshift(new t(0, 0, b[0].length))), 1 == Wi(w).level && (b = n.match(/\s+$/)) && (Wi(w).to -= b[0].length, w.push(new t(0, u - b[0].length, u))), 2 == w[0].level && w.unshift(new t(1, w[0].to, w[0].to)), w[0].level != Wi(w).level && w.push(new t(w[0].level, u, u)), w
					}
				}();
				return e.version = "5.8.1", e
			})
		}, {}],
		7: [function(t, n, r) {
			! function(i) {
				"object" == typeof r && "object" == typeof n ? i(t("../../lib/codemirror"), t("../markdown/markdown"), t("../../addon/mode/overlay")) : "function" == typeof e && e.amd ? e(["../../lib/codemirror", "../markdown/markdown", "../../addon/mode/overlay"], i) : i(CodeMirror)
			}(function(e) {
				"use strict";
				var t = /^((?:(?:aaas?|about|acap|adiumxtra|af[ps]|aim|apt|attachment|aw|beshare|bitcoin|bolo|callto|cap|chrome(?:-extension)?|cid|coap|com-eventbrite-attendee|content|crid|cvs|data|dav|dict|dlna-(?:playcontainer|playsingle)|dns|doi|dtn|dvb|ed2k|facetime|feed|file|finger|fish|ftp|geo|gg|git|gizmoproject|go|gopher|gtalk|h323|hcp|https?|iax|icap|icon|im|imap|info|ipn|ipp|irc[6s]?|iris(?:\.beep|\.lwz|\.xpc|\.xpcs)?|itms|jar|javascript|jms|keyparc|lastfm|ldaps?|magnet|mailto|maps|market|message|mid|mms|ms-help|msnim|msrps?|mtqp|mumble|mupdate|mvn|news|nfs|nih?|nntp|notes|oid|opaquelocktoken|palm|paparazzi|platform|pop|pres|proxy|psyc|query|res(?:ource)?|rmi|rsync|rtmp|rtsp|secondlife|service|session|sftp|sgn|shttp|sieve|sips?|skype|sm[bs]|snmp|soap\.beeps?|soldat|spotify|ssh|steam|svn|tag|teamspeak|tel(?:net)?|tftp|things|thismessage|tip|tn3270|tv|udp|unreal|urn|ut2004|vemmi|ventrilo|view-source|webcal|wss?|wtai|wyciwyg|xcon(?:-userid)?|xfire|xmlrpc\.beeps?|xmpp|xri|ymsgr|z39\.50[rs]?):(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`*!()\[\]{};:'".,<>?«»“”‘’]))/i;
				e.defineMode("gfm", function(n, r) {
					function i(e) {
						return e.code = !1, null
					}
					var o = 0,
						l = {
							startState: function() {
								return {
									code: !1,
									codeBlock: !1,
									ateSpace: !1
								}
							},
							copyState: function(e) {
								return {
									code: e.code,
									codeBlock: e.codeBlock,
									ateSpace: e.ateSpace
								}
							},
							token: function(e, n) {
								if (n.combineTokens = null, n.codeBlock) return e.match(/^```+/) ? (n.codeBlock = !1, null) : (e.skipToEnd(), null);
								if (e.sol() && (n.code = !1), e.sol() && e.match(/^```+/)) return e.skipToEnd(), n.codeBlock = !0, null;
								if ("`" === e.peek()) {
									e.next();
									var i = e.pos;
									e.eatWhile("`");
									var l = 1 + e.pos - i;
									return n.code ? l === o && (n.code = !1) : (o = l, n.code = !0), null
								}
								if (n.code) return e.next(), null;
								if (e.eatSpace()) return n.ateSpace = !0, null;
								if ((e.sol() || n.ateSpace) && (n.ateSpace = !1, r.gitHubSpice !== !1)) {
									if (e.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+@)?(?:[a-f0-9]{7,40}\b)/)) return n.combineTokens = !0, "link";
									if (e.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+)?#[0-9]+\b/)) return n.combineTokens = !0, "link"
								}
								return e.match(t) && "](" != e.string.slice(e.start - 2, e.start) && (0 == e.start || /\W/.test(e.string.charAt(e.start - 1))) ? (n.combineTokens = !0, "link") : (e.next(), null)
							},
							blankLine: i
						},
						a = {
							underscoresBreakWords: !1,
							taskLists: !0,
							fencedCodeBlocks: "```",
							strikethrough: !0
						};
					for (var s in r) a[s] = r[s];
					return a.name = "markdown", e.overlayMode(e.getMode(n, a), l)
				}, "markdown"), e.defineMIME("text/x-gfm", "gfm")
			})
		}, {
			"../../addon/mode/overlay": 5,
			"../../lib/codemirror": 6,
			"../markdown/markdown": 8
		}],
		8: [function(t, n, r) {
			! function(i) {
				"object" == typeof r && "object" == typeof n ? i(t("../../lib/codemirror"), t("../xml/xml"), t("../meta")) : "function" == typeof e && e.amd ? e(["../../lib/codemirror", "../xml/xml", "../meta"], i) : i(CodeMirror)
			}(function(e) {
				"use strict";
				e.defineMode("markdown", function(t, n) {
					function r(n) {
						if (e.findModeByName) {
							var r = e.findModeByName(n);
							r && (n = r.mime || r.mimes[0])
						}
						var i = e.getMode(t, n);
						return "null" == i.name ? null : i
					}

					function i(e, t, n) {
						return t.f = t.inline = n, n(e, t)
					}

					function o(e, t, n) {
						return t.f = t.block = n, n(e, t)
					}

					function l(e) {
						return !e || !/\S/.test(e.string)
					}

					function a(e) {
						return e.linkTitle = !1, e.em = !1, e.strong = !1, e.strikethrough = !1, e.quote = 0, e.indentedCode = !1, k || e.f != c || (e.f = p, e.block = s), e.trailingSpace = 0, e.trailingSpaceNewLine = !1, e.prevLine = e.thisLine, e.thisLine = null, null
					}

					function s(e, t) {
						var o = e.sol(),
							a = t.list !== !1,
							s = t.indentedCode;
						t.indentedCode = !1, a && (t.indentationDiff >= 0 ? (t.indentationDiff < 4 && (t.indentation -= t.indentationDiff), t.list = null) : t.indentation > 0 ? (t.list = null, t.listDepth = Math.floor(t.indentation / 4)) : (t.list = !1, t.listDepth = 0));
						var c = null;
						if (t.indentationDiff >= 4) return e.skipToEnd(), s || l(t.prevLine) ? (t.indentation -= 4, t.indentedCode = !0, L.code) : null;
						if (e.eatSpace()) return null;
						if ((c = e.match(W)) && c[1].length <= 6) return t.header = c[1].length, n.highlightFormatting && (t.formatting = "header"), t.f = t.inline, h(t);
						if (!(l(t.prevLine) || t.quote || a || s) && (c = e.match(H))) return t.header = "=" == c[0].charAt(0) ? 1 : 2, n.highlightFormatting && (t.formatting = "header"), t.f = t.inline, h(t);
						if (e.eat(">")) return t.quote = o ? 1 : t.quote + 1, n.highlightFormatting && (t.formatting = "quote"), e.eatSpace(), h(t);
						if ("[" === e.peek()) return i(e, t, y);
						if (e.match(M, !0)) return t.hr = !0, L.hr;
						if ((l(t.prevLine) || a) && (e.match(N, !1) || e.match(A, !1))) {
							var d = null;
							return e.match(N, !0) ? d = "ul" : (e.match(A, !0), d = "ol"), t.indentation = e.column() + e.current().length, t.list = !0, t.listDepth++, n.taskLists && e.match(O, !1) && (t.taskList = !0), t.f = t.inline, n.highlightFormatting && (t.formatting = ["list", "list-" + d]), h(t)
						}
						return n.fencedCodeBlocks && (c = e.match(E, !0)) ? (t.fencedChars = c[1], t.localMode = r(c[2]), t.localMode && (t.localState = t.localMode.startState()), t.f = t.block = u, n.highlightFormatting && (t.formatting = "code-block"), t.code = !0, h(t)) : i(e, t, t.inline)
					}

					function c(e, t) {
						var n = C.token(e, t.htmlState);
						return (k && null === t.htmlState.tagStart && !t.htmlState.context && t.htmlState.tokenize.isInText || t.md_inside && e.current().indexOf(">") > -1) && (t.f = p, t.block = s, t.htmlState = null), n
					}

					function u(e, t) {
						return e.sol() && t.fencedChars && e.match(t.fencedChars, !1) ? (t.localMode = t.localState = null, t.f = t.block = d, null) : t.localMode ? t.localMode.token(e, t.localState) : (e.skipToEnd(), L.code)
					}

					function d(e, t) {
						e.match(t.fencedChars), t.block = s, t.f = p, t.fencedChars = null, n.highlightFormatting && (t.formatting = "code-block"), t.code = !0;
						var r = h(t);
						return t.code = !1, r
					}

					function h(e) {
						var t = [];
						if (e.formatting) {
							t.push(L.formatting), "string" == typeof e.formatting && (e.formatting = [e.formatting]);
							for (var r = 0; r < e.formatting.length; r++) t.push(L.formatting + "-" + e.formatting[r]), "header" === e.formatting[r] && t.push(L.formatting + "-" + e.formatting[r] + "-" + e.header), "quote" === e.formatting[r] && (!n.maxBlockquoteDepth || n.maxBlockquoteDepth >= e.quote ? t.push(L.formatting + "-" + e.formatting[r] + "-" + e.quote) : t.push("error"))
						}
						if (e.taskOpen) return t.push("meta"), t.length ? t.join(" ") : null;
						if (e.taskClosed) return t.push("property"), t.length ? t.join(" ") : null;
						if (e.linkHref ? t.push(L.linkHref, "url") : (e.strong && t.push(L.strong), e.em && t.push(L.em), e.strikethrough && t.push(L.strikethrough), e.linkText && t.push(L.linkText), e.code && t.push(L.code)), e.header && t.push(L.header, L.header + "-" + e.header), e.quote && (t.push(L.quote), !n.maxBlockquoteDepth || n.maxBlockquoteDepth >= e.quote ? t.push(L.quote + "-" + e.quote) : t.push(L.quote + "-" + n.maxBlockquoteDepth)), e.list !== !1) {
							var i = (e.listDepth - 1) % 3;
							i ? 1 === i ? t.push(L.list2) : t.push(L.list3) : t.push(L.list1)
						}
						return e.trailingSpaceNewLine ? t.push("trailing-space-new-line") : e.trailingSpace && t.push("trailing-space-" + (e.trailingSpace % 2 ? "a" : "b")), t.length ? t.join(" ") : null
					}

					function f(e, t) {
						return e.match(D, !0) ? h(t) : void 0
					}

					function p(t, r) {
						var i = r.text(t, r);
						if ("undefined" != typeof i) return i;
						if (r.list) return r.list = null, h(r);
						if (r.taskList) {
							var l = "x" !== t.match(O, !0)[1];
							return l ? r.taskOpen = !0 : r.taskClosed = !0, n.highlightFormatting && (r.formatting = "task"), r.taskList = !1, h(r)
						}
						if (r.taskOpen = !1, r.taskClosed = !1, r.header && t.match(/^#+$/, !0)) return n.highlightFormatting && (r.formatting = "header"), h(r);
						var a = t.sol(),
							s = t.next();
						if ("\\" === s && (t.next(), n.highlightFormatting)) {
							var u = h(r),
								d = L.formatting + "-escape";
							return u ? u + " " + d : d
						}
						if (r.linkTitle) {
							r.linkTitle = !1;
							var f = s;
							"(" === s && (f = ")"), f = (f + "").replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
							var p = "^\\s*(?:[^" + f + "\\\\]+|\\\\\\\\|\\\\.)" + f;
							if (t.match(new RegExp(p), !0)) return L.linkHref
						}
						if ("`" === s) {
							var v = r.formatting;
							n.highlightFormatting && (r.formatting = "code");
							var y = h(r),
								x = t.pos;
							t.eatWhile("`");
							var b = 1 + t.pos - x;
							return r.code ? b === S ? (r.code = !1, y) : (r.formatting = v, h(r)) : (S = b, r.code = !0, h(r))
						}
						if (r.code) return h(r);
						if ("!" === s && t.match(/\[[^\]]*\] ?(?:\(|\[)/, !1)) return t.match(/\[[^\]]*\]/), r.inline = r.f = g, L.image;
						if ("[" === s && t.match(/.*\](\(.*\)| ?\[.*\])/, !1)) return r.linkText = !0, n.highlightFormatting && (r.formatting = "link"), h(r);
						if ("]" === s && r.linkText && t.match(/\(.*\)| ?\[.*\]/, !1)) {
							n.highlightFormatting && (r.formatting = "link");
							var u = h(r);
							return r.linkText = !1, r.inline = r.f = g, u
						}
						if ("<" === s && t.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/, !1)) {
							r.f = r.inline = m, n.highlightFormatting && (r.formatting = "link");
							var u = h(r);
							return u ? u += " " : u = "", u + L.linkInline
						}
						if ("<" === s && t.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/, !1)) {
							r.f = r.inline = m, n.highlightFormatting && (r.formatting = "link");
							var u = h(r);
							return u ? u += " " : u = "", u + L.linkEmail
						}
						if ("<" === s && t.match(/^(!--|\w)/, !1)) {
							var w = t.string.indexOf(">", t.pos);
							if (-1 != w) {
								var k = t.string.substring(t.start, w);
								/markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(k) && (r.md_inside = !0)
							}
							return t.backUp(1), r.htmlState = e.startState(C), o(t, r, c)
						}
						if ("<" === s && t.match(/^\/\w*?>/)) return r.md_inside = !1, "tag";
						var T = !1;
						if (!n.underscoresBreakWords && "_" === s && "_" !== t.peek() && t.match(/(\w)/, !1)) {
							var M = t.pos - 2;
							if (M >= 0) {
								var N = t.string.charAt(M);
								"_" !== N && N.match(/(\w)/, !1) && (T = !0)
							}
						}
						if ("*" === s || "_" === s && !T)
							if (a && " " === t.peek());
							else {
								if (r.strong === s && t.eat(s)) {
									n.highlightFormatting && (r.formatting = "strong");
									var y = h(r);
									return r.strong = !1, y
								}
								if (!r.strong && t.eat(s)) return r.strong = s, n.highlightFormatting && (r.formatting = "strong"), h(r);
								if (r.em === s) {
									n.highlightFormatting && (r.formatting = "em");
									var y = h(r);
									return r.em = !1, y
								}
								if (!r.em) return r.em = s, n.highlightFormatting && (r.formatting = "em"), h(r)
							} else if (" " === s && (t.eat("*") || t.eat("_"))) {
							if (" " === t.peek()) return h(r);
							t.backUp(1)
						}
						if (n.strikethrough)
							if ("~" === s && t.eatWhile(s)) {
								if (r.strikethrough) {
									n.highlightFormatting && (r.formatting = "strikethrough");
									var y = h(r);
									return r.strikethrough = !1, y
								}
								if (t.match(/^[^\s]/, !1)) return r.strikethrough = !0, n.highlightFormatting && (r.formatting = "strikethrough"), h(r)
							} else if (" " === s && t.match(/^~~/, !0)) {
							if (" " === t.peek()) return h(r);
							t.backUp(2)
						}
						return " " === s && (t.match(/ +$/, !1) ? r.trailingSpace++ : r.trailingSpace && (r.trailingSpaceNewLine = !0)), h(r)
					}

					function m(e, t) {
						var r = e.next();
						if (">" === r) {
							t.f = t.inline = p, n.highlightFormatting && (t.formatting = "link");
							var i = h(t);
							return i ? i += " " : i = "", i + L.linkInline
						}
						return e.match(/^[^>]+/, !0), L.linkInline
					}

					function g(e, t) {
						if (e.eatSpace()) return null;
						var r = e.next();
						return "(" === r || "[" === r ? (t.f = t.inline = v("(" === r ? ")" : "]"), n.highlightFormatting && (t.formatting = "link-string"), t.linkHref = !0, h(t)) : "error"
					}

					function v(e) {
						return function(t, r) {
							var i = t.next();
							if (i === e) {
								r.f = r.inline = p, n.highlightFormatting && (r.formatting = "link-string");
								var o = h(r);
								return r.linkHref = !1, o
							}
							return t.match(w(e), !0) && t.backUp(1), r.linkHref = !0, h(r)
						}
					}

					function y(e, t) {
						return e.match(/^[^\]]*\]:/, !1) ? (t.f = x, e.next(), n.highlightFormatting && (t.formatting = "link"), t.linkText = !0, h(t)) : i(e, t, p)
					}

					function x(e, t) {
						if (e.match(/^\]:/, !0)) {
							t.f = t.inline = b, n.highlightFormatting && (t.formatting = "link");
							var r = h(t);
							return t.linkText = !1, r
						}
						return e.match(/^[^\]]+/, !0), L.linkText
					}

					function b(e, t) {
						return e.eatSpace() ? null : (e.match(/^[^\s]+/, !0), void 0 === e.peek() ? t.linkTitle = !0 : e.match(/^(?:\s+(?:"(?:[^"\\]|\\\\|\\.)+"|'(?:[^'\\]|\\\\|\\.)+'|\((?:[^)\\]|\\\\|\\.)+\)))?/, !0), t.f = t.inline = p, L.linkHref + " url")
					}

					function w(e) {
						return I[e] || (e = (e + "").replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"), I[e] = new RegExp("^(?:[^\\\\]|\\\\.)*?(" + e + ")")), I[e]
					}
					var k = e.modes.hasOwnProperty("xml"),
						C = e.getMode(t, k ? {
							name: "xml",
							htmlMode: !0
						} : "text/plain");
					void 0 === n.highlightFormatting && (n.highlightFormatting = !1), void 0 === n.maxBlockquoteDepth && (n.maxBlockquoteDepth = 0), void 0 === n.underscoresBreakWords && (n.underscoresBreakWords = !0), void 0 === n.taskLists && (n.taskLists = !1), void 0 === n.strikethrough && (n.strikethrough = !1), void 0 === n.tokenTypeOverrides && (n.tokenTypeOverrides = {});
					var S = 0,
						L = {
							header: "header",
							code: "comment",
							quote: "quote",
							list1: "variable-2",
							list2: "variable-3",
							list3: "keyword",
							hr: "hr",
							image: "tag",
							formatting: "formatting",
							linkInline: "link",
							linkEmail: "link",
							linkText: "link",
							linkHref: "string",
							em: "em",
							strong: "strong",
							strikethrough: "strikethrough"
						};
					for (var T in L) L.hasOwnProperty(T) && n.tokenTypeOverrides[T] && (L[T] = n.tokenTypeOverrides[T]);
					var M = /^([*\-_])(?:\s*\1){2,}\s*$/,
						N = /^[*\-+]\s+/,
						A = /^[0-9]+([.)])\s+/,
						O = /^\[(x| )\](?=\s)/,
						W = n.allowAtxHeaderWithoutSpace ? /^(#+)/ : /^(#+)(?: |$)/,
						H = /^ *(?:\={1,}|-{1,})\s*$/,
						D = /^[^#!\[\]*_\\<>` "'(~]+/,
						E = new RegExp("^(" + (n.fencedCodeBlocks === !0 ? "~~~+|```+" : n.fencedCodeBlocks) + ")[ \\t]*([\\w+#]*)"),
						I = [],
						P = {
							startState: function() {
								return {
									f: s,
									prevLine: null,
									thisLine: null,
									block: s,
									htmlState: null,
									indentation: 0,
									inline: p,
									text: f,
									formatting: !1,
									linkText: !1,
									linkHref: !1,
									linkTitle: !1,
									em: !1,
									strong: !1,
									header: 0,
									hr: !1,
									taskList: !1,
									list: !1,
									listDepth: 0,
									quote: 0,
									trailingSpace: 0,
									trailingSpaceNewLine: !1,
									strikethrough: !1,
									fencedChars: null
								}
							},
							copyState: function(t) {
								return {
									f: t.f,
									prevLine: t.prevLine,
									thisLine: t["this"],
									block: t.block,
									htmlState: t.htmlState && e.copyState(C, t.htmlState),
									indentation: t.indentation,
									localMode: t.localMode,
									localState: t.localMode ? e.copyState(t.localMode, t.localState) : null,
									inline: t.inline,
									text: t.text,
									formatting: !1,
									linkTitle: t.linkTitle,
									code: t.code,
									em: t.em,
									strong: t.strong,
									strikethrough: t.strikethrough,
									header: t.header,
									hr: t.hr,
									taskList: t.taskList,
									list: t.list,
									listDepth: t.listDepth,
									quote: t.quote,
									indentedCode: t.indentedCode,
									trailingSpace: t.trailingSpace,
									trailingSpaceNewLine: t.trailingSpaceNewLine,
									md_inside: t.md_inside,
									fencedChars: t.fencedChars
								}
							},
							token: function(e, t) {
								if (t.formatting = !1, e != t.thisLine) {
									var n = t.header || t.hr;
									if (t.header = 0, t.hr = !1, e.match(/^\s*$/, !0) || n) {
										if (a(t), !n) return null;
										t.prevLine = null
									}
									t.prevLine = t.thisLine, t.thisLine = e, t.taskList = !1, t.trailingSpace = 0, t.trailingSpaceNewLine = !1, t.f = t.block;
									var r = e.match(/^\s*/, !0)[0].replace(/\t/g, "    ").length,
										i = 4 * Math.floor((r - t.indentation) / 4);
									i > 4 && (i = 4);
									var o = t.indentation + i;
									if (t.indentationDiff = o - t.indentation, t.indentation = o, r > 0) return null
								}
								return t.f(e, t)
							},
							innerMode: function(e) {
								return e.block == c ? {
									state: e.htmlState,
									mode: C
								} : e.localState ? {
									state: e.localState,
									mode: e.localMode
								} : {
									state: e,
									mode: P
								}
							},
							blankLine: a,
							getType: h,
							fold: "markdown"
						};
					return P
				}, "xml"), e.defineMIME("text/x-markdown", "markdown")
			})
		}, {
			"../../lib/codemirror": 6,
			"../meta": 9,
			"../xml/xml": 10
		}],
		9: [function(t, n, r) {
			! function(i) {
				"object" == typeof r && "object" == typeof n ? i(t("../lib/codemirror")) : "function" == typeof e && e.amd ? e(["../lib/codemirror"], i) : i(CodeMirror)
			}(function(e) {
				"use strict";
				e.modeInfo = [{
					name: "APL",
					mime: "text/apl",
					mode: "apl",
					ext: ["dyalog", "apl"]
				}, {
					name: "PGP",
					mimes: ["application/pgp", "application/pgp-keys", "application/pgp-signature"],
					mode: "asciiarmor",
					ext: ["pgp"]
				}, {
					name: "ASN.1",
					mime: "text/x-ttcn-asn",
					mode: "asn.1",
					ext: ["asn", "asn1"]
				}, {
					name: "Asterisk",
					mime: "text/x-asterisk",
					mode: "asterisk",
					file: /^extensions\.conf$/i
				}, {
					name: "Brainfuck",
					mime: "text/x-brainfuck",
					mode: "brainfuck",
					ext: ["b", "bf"]
				}, {
					name: "C",
					mime: "text/x-csrc",
					mode: "clike",
					ext: ["c", "h"]
				}, {
					name: "C++",
					mime: "text/x-c++src",
					mode: "clike",
					ext: ["cpp", "c++", "cc", "cxx", "hpp", "h++", "hh", "hxx"],
					alias: ["cpp"]
				}, {
					name: "Cobol",
					mime: "text/x-cobol",
					mode: "cobol",
					ext: ["cob", "cpy"]
				}, {
					name: "C#",
					mime: "text/x-csharp",
					mode: "clike",
					ext: ["cs"],
					alias: ["csharp"]
				}, {
					name: "Clojure",
					mime: "text/x-clojure",
					mode: "clojure",
					ext: ["clj"]
				}, {
					name: "Closure Stylesheets (GSS)",
					mime: "text/x-gss",
					mode: "css",
					ext: ["gss"]
				}, {
					name: "CMake",
					mime: "text/x-cmake",
					mode: "cmake",
					ext: ["cmake", "cmake.in"],
					file: /^CMakeLists.txt$/
				}, {
					name: "CoffeeScript",
					mime: "text/x-coffeescript",
					mode: "coffeescript",
					ext: ["coffee"],
					alias: ["coffee", "coffee-script"]
				}, {
					name: "Common Lisp",
					mime: "text/x-common-lisp",
					mode: "commonlisp",
					ext: ["cl", "lisp", "el"],
					alias: ["lisp"]
				}, {
					name: "Cypher",
					mime: "application/x-cypher-query",
					mode: "cypher",
					ext: ["cyp", "cypher"]
				}, {
					name: "Cython",
					mime: "text/x-cython",
					mode: "python",
					ext: ["pyx", "pxd", "pxi"]
				}, {
					name: "CSS",
					mime: "text/css",
					mode: "css",
					ext: ["css"]
				}, {
					name: "CQL",
					mime: "text/x-cassandra",
					mode: "sql",
					ext: ["cql"]
				}, {
					name: "D",
					mime: "text/x-d",
					mode: "d",
					ext: ["d"]
				}, {
					name: "Dart",
					mimes: ["application/dart", "text/x-dart"],
					mode: "dart",
					ext: ["dart"]
				}, {
					name: "diff",
					mime: "text/x-diff",
					mode: "diff",
					ext: ["diff", "patch"]
				}, {
					name: "Django",
					mime: "text/x-django",
					mode: "django"
				}, {
					name: "Dockerfile",
					mime: "text/x-dockerfile",
					mode: "dockerfile",
					file: /^Dockerfile$/
				}, {
					name: "DTD",
					mime: "application/xml-dtd",
					mode: "dtd",
					ext: ["dtd"]
				}, {
					name: "Dylan",
					mime: "text/x-dylan",
					mode: "dylan",
					ext: ["dylan", "dyl", "intr"]
				}, {
					name: "EBNF",
					mime: "text/x-ebnf",
					mode: "ebnf"
				}, {
					name: "ECL",
					mime: "text/x-ecl",
					mode: "ecl",
					ext: ["ecl"]
				}, {
					name: "Eiffel",
					mime: "text/x-eiffel",
					mode: "eiffel",
					ext: ["e"]
				}, {
					name: "Elm",
					mime: "text/x-elm",
					mode: "elm",
					ext: ["elm"]
				}, {
					name: "Embedded Javascript",
					mime: "application/x-ejs",
					mode: "htmlembedded",
					ext: ["ejs"]
				}, {
					name: "Embedded Ruby",
					mime: "application/x-erb",
					mode: "htmlembedded",
					ext: ["erb"]
				}, {
					name: "Erlang",
					mime: "text/x-erlang",
					mode: "erlang",
					ext: ["erl"]
				}, {
					name: "Factor",
					mime: "text/x-factor",
					mode: "factor",
					ext: ["factor"]
				}, {
					name: "Forth",
					mime: "text/x-forth",
					mode: "forth",
					ext: ["forth", "fth", "4th"]
				}, {
					name: "Fortran",
					mime: "text/x-fortran",
					mode: "fortran",
					ext: ["f", "for", "f77", "f90"]
				}, {
					name: "F#",
					mime: "text/x-fsharp",
					mode: "mllike",
					ext: ["fs"],
					alias: ["fsharp"]
				}, {
					name: "Gas",
					mime: "text/x-gas",
					mode: "gas",
					ext: ["s"]
				}, {
					name: "Gherkin",
					mime: "text/x-feature",
					mode: "gherkin",
					ext: ["feature"]
				}, {
					name: "GitHub Flavored Markdown",
					mime: "text/x-gfm",
					mode: "gfm",
					file: /^(readme|contributing|history).md$/i
				}, {
					name: "Go",
					mime: "text/x-go",
					mode: "go",
					ext: ["go"]
				}, {
					name: "Groovy",
					mime: "text/x-groovy",
					mode: "groovy",
					ext: ["groovy"]
				}, {
					name: "HAML",
					mime: "text/x-haml",
					mode: "haml",
					ext: ["haml"]
				}, {
					name: "Haskell",
					mime: "text/x-haskell",
					mode: "haskell",
					ext: ["hs"]
				}, {
					name: "Haxe",
					mime: "text/x-haxe",
					mode: "haxe",
					ext: ["hx"]
				}, {
					name: "HXML",
					mime: "text/x-hxml",
					mode: "haxe",
					ext: ["hxml"]
				}, {
					name: "ASP.NET",
					mime: "application/x-aspx",
					mode: "htmlembedded",
					ext: ["aspx"],
					alias: ["asp", "aspx"]
				}, {
					name: "HTML",
					mime: "text/html",
					mode: "htmlmixed",
					ext: ["html", "htm"],
					alias: ["xhtml"]
				}, {
					name: "HTTP",
					mime: "message/http",
					mode: "http"
				}, {
					name: "IDL",
					mime: "text/x-idl",
					mode: "idl",
					ext: ["pro"]
				}, {
					name: "Jade",
					mime: "text/x-jade",
					mode: "jade",
					ext: ["jade"]
				}, {
					name: "Java",
					mime: "text/x-java",
					mode: "clike",
					ext: ["java"]
				}, {
					name: "Java Server Pages",
					mime: "application/x-jsp",
					mode: "htmlembedded",
					ext: ["jsp"],
					alias: ["jsp"]
				}, {
					name: "JavaScript",
					mimes: ["text/javascript", "text/ecmascript", "application/javascript", "application/x-javascript", "application/ecmascript"],
					mode: "javascript",
					ext: ["js"],
					alias: ["ecmascript", "js", "node"]
				}, {
					name: "JSON",
					mimes: ["application/json", "application/x-json"],
					mode: "javascript",
					ext: ["json", "map"],
					alias: ["json5"]
				}, {
					name: "JSON-LD",
					mime: "application/ld+json",
					mode: "javascript",
					ext: ["jsonld"],
					alias: ["jsonld"]
				}, {
					name: "Jinja2",
					mime: "null",
					mode: "jinja2"
				}, {
					name: "Julia",
					mime: "text/x-julia",
					mode: "julia",
					ext: ["jl"]
				}, {
					name: "Kotlin",
					mime: "text/x-kotlin",
					mode: "clike",
					ext: ["kt"]
				}, {
					name: "LESS",
					mime: "text/x-less",
					mode: "css",
					ext: ["less"]
				}, {
					name: "LiveScript",
					mime: "text/x-livescript",
					mode: "livescript",
					ext: ["ls"],
					alias: ["ls"]
				}, {
					name: "Lua",
					mime: "text/x-lua",
					mode: "lua",
					ext: ["lua"]
				}, {
					name: "Markdown",
					mime: "text/x-markdown",
					mode: "markdown",
					ext: ["markdown", "md", "mkd"]
				}, {
					name: "mIRC",
					mime: "text/mirc",
					mode: "mirc"
				}, {
					name: "MariaDB SQL",
					mime: "text/x-mariadb",
					mode: "sql"
				}, {
					name: "Mathematica",
					mime: "text/x-mathematica",
					mode: "mathematica",
					ext: ["m", "nb"]
				}, {
					name: "Modelica",
					mime: "text/x-modelica",
					mode: "modelica",
					ext: ["mo"]
				}, {
					name: "MUMPS",
					mime: "text/x-mumps",
					mode: "mumps"
				}, {
					name: "MS SQL",
					mime: "text/x-mssql",
					mode: "sql"
				}, {
					name: "MySQL",
					mime: "text/x-mysql",
					mode: "sql"
				}, {
					name: "Nginx",
					mime: "text/x-nginx-conf",
					mode: "nginx",
					file: /nginx.*\.conf$/i
				}, {
					name: "NSIS",
					mime: "text/x-nsis",
					mode: "nsis",
					ext: ["nsh", "nsi"]
				}, {
					name: "NTriples",
					mime: "text/n-triples",
					mode: "ntriples",
					ext: ["nt"]
				}, {
					name: "Objective C",
					mime: "text/x-objectivec",
					mode: "clike",
					ext: ["m", "mm"]
				}, {
					name: "OCaml",
					mime: "text/x-ocaml",
					mode: "mllike",
					ext: ["ml", "mli", "mll", "mly"]
				}, {
					name: "Octave",
					mime: "text/x-octave",
					mode: "octave",
					ext: ["m"]
				}, {
					name: "Oz",
					mime: "text/x-oz",
					mode: "oz",
					ext: ["oz"]
				}, {
					name: "Pascal",
					mime: "text/x-pascal",
					mode: "pascal",
					ext: ["p", "pas"]
				}, {
					name: "PEG.js",
					mime: "null",
					mode: "pegjs",
					ext: ["jsonld"]
				}, {
					name: "Perl",
					mime: "text/x-perl",
					mode: "perl",
					ext: ["pl", "pm"]
				}, {
					name: "PHP",
					mime: "application/x-httpd-php",
					mode: "php",
					ext: ["php", "php3", "php4", "php5", "phtml"]
				}, {
					name: "Pig",
					mime: "text/x-pig",
					mode: "pig",
					ext: ["pig"]
				}, {
					name: "Plain Text",
					mime: "text/plain",
					mode: "null",
					ext: ["txt", "text", "conf", "def", "list", "log"]
				}, {
					name: "PLSQL",
					mime: "text/x-plsql",
					mode: "sql",
					ext: ["pls"]
				}, {
					name: "Properties files",
					mime: "text/x-properties",
					mode: "properties",
					ext: ["properties", "ini", "in"],
					alias: ["ini", "properties"]
				}, {
					name: "Python",
					mime: "text/x-python",
					mode: "python",
					ext: ["py", "pyw"]
				}, {
					name: "Puppet",
					mime: "text/x-puppet",
					mode: "puppet",
					ext: ["pp"]
				}, {
					name: "Q",
					mime: "text/x-q",
					mode: "q",
					ext: ["q"]
				}, {
					name: "R",
					mime: "text/x-rsrc",
					mode: "r",
					ext: ["r"],
					alias: ["rscript"]
				}, {
					name: "reStructuredText",
					mime: "text/x-rst",
					mode: "rst",
					ext: ["rst"],
					alias: ["rst"]
				}, {
					name: "RPM Changes",
					mime: "text/x-rpm-changes",
					mode: "rpm"
				}, {
					name: "RPM Spec",
					mime: "text/x-rpm-spec",
					mode: "rpm",
					ext: ["spec"]
				}, {
					name: "Ruby",
					mime: "text/x-ruby",
					mode: "ruby",
					ext: ["rb"],
					alias: ["jruby", "macruby", "rake", "rb", "rbx"]
				}, {
					name: "Rust",
					mime: "text/x-rustsrc",
					mode: "rust",
					ext: ["rs"]
				}, {
					name: "Sass",
					mime: "text/x-sass",
					mode: "sass",
					ext: ["sass"]
				}, {
					name: "Scala",
					mime: "text/x-scala",
					mode: "clike",
					ext: ["scala"]
				}, {
					name: "Scheme",
					mime: "text/x-scheme",
					mode: "scheme",
					ext: ["scm", "ss"]
				}, {
					name: "SCSS",
					mime: "text/x-scss",
					mode: "css",
					ext: ["scss"]
				}, {
					name: "Shell",
					mime: "text/x-sh",
					mode: "shell",
					ext: ["sh", "ksh", "bash"],
					alias: ["bash", "sh", "zsh"],
					file: /^PKGBUILD$/
				}, {
					name: "Sieve",
					mime: "application/sieve",
					mode: "sieve",
					ext: ["siv", "sieve"]
				}, {
					name: "Slim",
					mimes: ["text/x-slim", "application/x-slim"],
					mode: "slim",
					ext: ["slim"]
				}, {
					name: "Smalltalk",
					mime: "text/x-stsrc",
					mode: "smalltalk",
					ext: ["st"]
				}, {
					name: "Smarty",
					mime: "text/x-smarty",
					mode: "smarty",
					ext: ["tpl"]
				}, {
					name: "Solr",
					mime: "text/x-solr",
					mode: "solr"
				}, {
					name: "Soy",
					mime: "text/x-soy",
					mode: "soy",
					ext: ["soy"],
					alias: ["closure template"]
				}, {
					name: "SPARQL",
					mime: "application/sparql-query",
					mode: "sparql",
					ext: ["rq", "sparql"],
					alias: ["sparul"]
				}, {
					name: "Spreadsheet",
					mime: "text/x-spreadsheet",
					mode: "spreadsheet",
					alias: ["excel", "formula"]
				}, {
					name: "SQL",
					mime: "text/x-sql",
					mode: "sql",
					ext: ["sql"]
				}, {
					name: "Squirrel",
					mime: "text/x-squirrel",
					mode: "clike",
					ext: ["nut"]
				}, {
					name: "Swift",
					mime: "text/x-swift",
					mode: "swift",
					ext: ["swift"]
				}, {
					name: "MariaDB",
					mime: "text/x-mariadb",
					mode: "sql"
				}, {
					name: "sTeX",
					mime: "text/x-stex",
					mode: "stex"
				}, {
					name: "LaTeX",
					mime: "text/x-latex",
					mode: "stex",
					ext: ["text", "ltx"],
					alias: ["tex"]
				}, {
					name: "SystemVerilog",
					mime: "text/x-systemverilog",
					mode: "verilog",
					ext: ["v"]
				}, {
					name: "Tcl",
					mime: "text/x-tcl",
					mode: "tcl",
					ext: ["tcl"]
				}, {
					name: "Textile",
					mime: "text/x-textile",
					mode: "textile",
					ext: ["textile"]
				}, {
					name: "TiddlyWiki ",
					mime: "text/x-tiddlywiki",
					mode: "tiddlywiki"
				}, {
					name: "Tiki wiki",
					mime: "text/tiki",
					mode: "tiki"
				}, {
					name: "TOML",
					mime: "text/x-toml",
					mode: "toml",
					ext: ["toml"]
				}, {
					name: "Tornado",
					mime: "text/x-tornado",
					mode: "tornado"
				}, {
					name: "troff",
					mime: "troff",
					mode: "troff",
					ext: ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
				}, {
					name: "TTCN",
					mime: "text/x-ttcn",
					mode: "ttcn",
					ext: ["ttcn", "ttcn3", "ttcnpp"]
				}, {
					name: "TTCN_CFG",
					mime: "text/x-ttcn-cfg",
					mode: "ttcn-cfg",
					ext: ["cfg"]
				}, {
					name: "Turtle",
					mime: "text/turtle",
					mode: "turtle",
					ext: ["ttl"]
				}, {
					name: "TypeScript",
					mime: "application/typescript",
					mode: "javascript",
					ext: ["ts"],
					alias: ["ts"]
				}, {
					name: "Twig",
					mime: "text/x-twig",
					mode: "twig"
				}, {
					name: "VB.NET",
					mime: "text/x-vb",
					mode: "vb",
					ext: ["vb"]
				}, {
					name: "VBScript",
					mime: "text/vbscript",
					mode: "vbscript",
					ext: ["vbs"]
				}, {
					name: "Velocity",
					mime: "text/velocity",
					mode: "velocity",
					ext: ["vtl"]
				}, {
					name: "Verilog",
					mime: "text/x-verilog",
					mode: "verilog",
					ext: ["v"]
				}, {
					name: "VHDL",
					mime: "text/x-vhdl",
					mode: "vhdl",
					ext: ["vhd", "vhdl"]
				}, {
					name: "XML",
					mimes: ["application/xml", "text/xml"],
					mode: "xml",
					ext: ["xml", "xsl", "xsd"],
					alias: ["rss", "wsdl", "xsd"]
				}, {
					name: "XQuery",
					mime: "application/xquery",
					mode: "xquery",
					ext: ["xy", "xquery"]
				}, {
					name: "YAML",
					mime: "text/x-yaml",
					mode: "yaml",
					ext: ["yaml", "yml"],
					alias: ["yml"]
				}, {
					name: "Z80",
					mime: "text/x-z80",
					mode: "z80",
					ext: ["z80"]
				}, {
					name: "mscgen",
					mime: "text/x-mscgen",
					mode: "mscgen",
					ext: ["mscgen", "mscin", "msc"]
				}, {
					name: "xu",
					mime: "text/x-xu",
					mode: "mscgen",
					ext: ["xu"]
				}, {
					name: "msgenny",
					mime: "text/x-msgenny",
					mode: "mscgen",
					ext: ["msgenny"]
				}];
				for (var t = 0; t < e.modeInfo.length; t++) {
					var n = e.modeInfo[t];
					n.mimes && (n.mime = n.mimes[0])
				}
				e.findModeByMIME = function(t) {
					t = t.toLowerCase();
					for (var n = 0; n < e.modeInfo.length; n++) {
						var r = e.modeInfo[n];
						if (r.mime == t) return r;
						if (r.mimes)
							for (var i = 0; i < r.mimes.length; i++)
								if (r.mimes[i] == t) return r
					}
				}, e.findModeByExtension = function(t) {
					for (var n = 0; n < e.modeInfo.length; n++) {
						var r = e.modeInfo[n];
						if (r.ext)
							for (var i = 0; i < r.ext.length; i++)
								if (r.ext[i] == t) return r
					}
				}, e.findModeByFileName = function(t) {
					for (var n = 0; n < e.modeInfo.length; n++) {
						var r = e.modeInfo[n];
						if (r.file && r.file.test(t)) return r
					}
					var i = t.lastIndexOf("."),
						o = i > -1 && t.substring(i + 1, t.length);
					return o ? e.findModeByExtension(o) : void 0
				}, e.findModeByName = function(t) {
					t = t.toLowerCase();
					for (var n = 0; n < e.modeInfo.length; n++) {
						var r = e.modeInfo[n];
						if (r.name.toLowerCase() == t) return r;
						if (r.alias)
							for (var i = 0; i < r.alias.length; i++)
								if (r.alias[i].toLowerCase() == t) return r
					}
				}
			})
		}, {
			"../lib/codemirror": 6
		}],
		10: [function(t, n, r) {
			! function(i) {
				"object" == typeof r && "object" == typeof n ? i(t("../../lib/codemirror")) : "function" == typeof e && e.amd ? e(["../../lib/codemirror"], i) : i(CodeMirror)
			}(function(e) {
				"use strict";
				e.defineMode("xml", function(t, n) {
					function r(e, t) {
						function n(n) {
							return t.tokenize = n, n(e, t)
						}
						var r = e.next();
						if ("<" == r) return e.eat("!") ? e.eat("[") ? e.match("CDATA[") ? n(l("atom", "]]>")) : null : e.match("--") ? n(l("comment", "-->")) : e.match("DOCTYPE", !0, !0) ? (e.eatWhile(/[\w\._\-]/), n(a(1))) : null : e.eat("?") ? (e.eatWhile(/[\w\._\-]/), t.tokenize = l("meta", "?>"), "meta") : (C = e.eat("/") ? "closeTag" : "openTag", t.tokenize = i, "tag bracket");
						if ("&" == r) {
							var o;
							return o = e.eat("#") ? e.eat("x") ? e.eatWhile(/[a-fA-F\d]/) && e.eat(";") : e.eatWhile(/[\d]/) && e.eat(";") : e.eatWhile(/[\w\.\-:]/) && e.eat(";"), o ? "atom" : "error"
						}
						return e.eatWhile(/[^&<]/), null
					}

					function i(e, t) {
						var n = e.next();
						if (">" == n || "/" == n && e.eat(">")) return t.tokenize = r, C = ">" == n ? "endTag" : "selfcloseTag", "tag bracket";
						if ("=" == n) return C = "equals", null;
						if ("<" == n) {
							t.tokenize = r, t.state = d, t.tagName = t.tagStart = null;
							var i = t.tokenize(e, t);
							return i ? i + " tag error" : "tag error"
						}
						return /[\'\"]/.test(n) ? (t.tokenize = o(n), t.stringStartCol = e.column(), t.tokenize(e, t)) : (e.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/), "word")
					}

					function o(e) {
						var t = function(t, n) {
							for (; !t.eol();)
								if (t.next() == e) {
									n.tokenize = i;
									break
								}
							return "string"
						};
						return t.isInAttribute = !0, t
					}

					function l(e, t) {
						return function(n, i) {
							for (; !n.eol();) {
								if (n.match(t)) {
									i.tokenize = r;
									break
								}
								n.next()
							}
							return e
						}
					}

					function a(e) {
						return function(t, n) {
							for (var i; null != (i = t.next());) {
								if ("<" == i) return n.tokenize = a(e + 1), n.tokenize(t, n);
								if (">" == i) {
									if (1 == e) {
										n.tokenize = r;
										break
									}
									return n.tokenize = a(e - 1), n.tokenize(t, n)
								}
							}
							return "meta"
						}
					}

					function s(e, t, n) {
						this.prev = e.context, this.tagName = t, this.indent = e.indented, this.startOfLine = n, (L.doNotIndent.hasOwnProperty(t) || e.context && e.context.noIndent) && (this.noIndent = !0)
					}

					function c(e) {
						e.context && (e.context = e.context.prev)
					}

					function u(e, t) {
						for (var n;;) {
							if (!e.context) return;
							if (n = e.context.tagName, !L.contextGrabbers.hasOwnProperty(n) || !L.contextGrabbers[n].hasOwnProperty(t)) return;
							c(e)
						}
					}

					function d(e, t, n) {
						return "openTag" == e ? (n.tagStart = t.column(), h) : "closeTag" == e ? f : d
					}

					function h(e, t, n) {
						return "word" == e ? (n.tagName = t.current(), S = "tag", g) : (S = "error", h)
					}

					function f(e, t, n) {
						if ("word" == e) {
							var r = t.current();
							return n.context && n.context.tagName != r && L.implicitlyClosed.hasOwnProperty(n.context.tagName) && c(n), n.context && n.context.tagName == r ? (S = "tag", p) : (S = "tag error", m)
						}
						return S = "error", m
					}

					function p(e, t, n) {
						return "endTag" != e ? (S = "error", p) : (c(n), d)
					}

					function m(e, t, n) {
						return S = "error", p(e, t, n)
					}

					function g(e, t, n) {
						if ("word" == e) return S = "attribute",
							v;
						if ("endTag" == e || "selfcloseTag" == e) {
							var r = n.tagName,
								i = n.tagStart;
							return n.tagName = n.tagStart = null, "selfcloseTag" == e || L.autoSelfClosers.hasOwnProperty(r) ? u(n, r) : (u(n, r), n.context = new s(n, r, i == n.indented)), d
						}
						return S = "error", g
					}

					function v(e, t, n) {
						return "equals" == e ? y : (L.allowMissing || (S = "error"), g(e, t, n))
					}

					function y(e, t, n) {
						return "string" == e ? x : "word" == e && L.allowUnquoted ? (S = "string", g) : (S = "error", g(e, t, n))
					}

					function x(e, t, n) {
						return "string" == e ? x : g(e, t, n)
					}
					var b = t.indentUnit,
						w = n.multilineTagIndentFactor || 1,
						k = n.multilineTagIndentPastTag;
					null == k && (k = !0);
					var C, S, L = n.htmlMode ? {
							autoSelfClosers: {
								area: !0,
								base: !0,
								br: !0,
								col: !0,
								command: !0,
								embed: !0,
								frame: !0,
								hr: !0,
								img: !0,
								input: !0,
								keygen: !0,
								link: !0,
								meta: !0,
								param: !0,
								source: !0,
								track: !0,
								wbr: !0,
								menuitem: !0
							},
							implicitlyClosed: {
								dd: !0,
								li: !0,
								optgroup: !0,
								option: !0,
								p: !0,
								rp: !0,
								rt: !0,
								tbody: !0,
								td: !0,
								tfoot: !0,
								th: !0,
								tr: !0
							},
							contextGrabbers: {
								dd: {
									dd: !0,
									dt: !0
								},
								dt: {
									dd: !0,
									dt: !0
								},
								li: {
									li: !0
								},
								option: {
									option: !0,
									optgroup: !0
								},
								optgroup: {
									optgroup: !0
								},
								p: {
									address: !0,
									article: !0,
									aside: !0,
									blockquote: !0,
									dir: !0,
									div: !0,
									dl: !0,
									fieldset: !0,
									footer: !0,
									form: !0,
									h1: !0,
									h2: !0,
									h3: !0,
									h4: !0,
									h5: !0,
									h6: !0,
									header: !0,
									hgroup: !0,
									hr: !0,
									menu: !0,
									nav: !0,
									ol: !0,
									p: !0,
									pre: !0,
									section: !0,
									table: !0,
									ul: !0
								},
								rp: {
									rp: !0,
									rt: !0
								},
								rt: {
									rp: !0,
									rt: !0
								},
								tbody: {
									tbody: !0,
									tfoot: !0
								},
								td: {
									td: !0,
									th: !0
								},
								tfoot: {
									tbody: !0
								},
								th: {
									td: !0,
									th: !0
								},
								thead: {
									tbody: !0,
									tfoot: !0
								},
								tr: {
									tr: !0
								}
							},
							doNotIndent: {
								pre: !0
							},
							allowUnquoted: !0,
							allowMissing: !0,
							caseFold: !0
						} : {
							autoSelfClosers: {},
							implicitlyClosed: {},
							contextGrabbers: {},
							doNotIndent: {},
							allowUnquoted: !1,
							allowMissing: !1,
							caseFold: !1
						},
						T = n.alignCDATA;
					return r.isInText = !0, {
						startState: function() {
							return {
								tokenize: r,
								state: d,
								indented: 0,
								tagName: null,
								tagStart: null,
								context: null
							}
						},
						token: function(e, t) {
							if (!t.tagName && e.sol() && (t.indented = e.indentation()), e.eatSpace()) return null;
							C = null;
							var n = t.tokenize(e, t);
							return (n || C) && "comment" != n && (S = null, t.state = t.state(C || n, e, t), S && (n = "error" == S ? n + " error" : S)), n
						},
						indent: function(t, n, o) {
							var l = t.context;
							if (t.tokenize.isInAttribute) return t.tagStart == t.indented ? t.stringStartCol + 1 : t.indented + b;
							if (l && l.noIndent) return e.Pass;
							if (t.tokenize != i && t.tokenize != r) return o ? o.match(/^(\s*)/)[0].length : 0;
							if (t.tagName) return k ? t.tagStart + t.tagName.length + 2 : t.tagStart + b * w;
							if (T && /<!\[CDATA\[/.test(n)) return 0;
							var a = n && /^<(\/)?([\w_:\.-]*)/.exec(n);
							if (a && a[1])
								for (; l;) {
									if (l.tagName == a[2]) {
										l = l.prev;
										break
									}
									if (!L.implicitlyClosed.hasOwnProperty(l.tagName)) break;
									l = l.prev
								} else if (a)
									for (; l;) {
										var s = L.contextGrabbers[l.tagName];
										if (!s || !s.hasOwnProperty(a[2])) break;
										l = l.prev
									}
								for (; l && !l.startOfLine;) l = l.prev;
							return l ? l.indent + b : 0
						},
						electricInput: /<\/[\s\w:]+>$/,
						blockCommentStart: "<!--",
						blockCommentEnd: "-->",
						configuration: n.htmlMode ? "html" : "xml",
						helperType: n.htmlMode ? "html" : "xml"
					}
				}), e.defineMIME("text/xml", "xml"), e.defineMIME("application/xml", "xml"), e.mimeModes.hasOwnProperty("text/html") || e.defineMIME("text/html", {
					name: "xml",
					htmlMode: !0
				})
			})
		}, {
			"../../lib/codemirror": 6
		}],
		11: [function(t, n, r) {
			(function(t) {
				(function() {
					function t(e) {
						this.tokens = [], this.tokens.links = {}, this.options = e || h.defaults, this.rules = f.normal, this.options.gfm && (this.options.tables ? this.rules = f.tables : this.rules = f.gfm)
					}

					function i(e, t) {
						if (this.options = t || h.defaults, this.links = e, this.rules = p.normal, this.renderer = this.options.renderer || new o, this.renderer.options = this.options, !this.links) throw new Error("Tokens array requires a `links` property.");
						this.options.gfm ? this.options.breaks ? this.rules = p.breaks : this.rules = p.gfm : this.options.pedantic && (this.rules = p.pedantic)
					}

					function o(e) {
						this.options = e || {}
					}

					function l(e) {
						this.tokens = [], this.token = null, this.options = e || h.defaults, this.options.renderer = this.options.renderer || new o, this.renderer = this.options.renderer, this.renderer.options = this.options
					}

					function a(e, t) {
						return e.replace(t ? /&/g : /&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
					}

					function s(e) {
						return e.replace(/&([#\w]+);/g, function(e, t) {
							return t = t.toLowerCase(), "colon" === t ? ":" : "#" === t.charAt(0) ? "x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""
						})
					}

					function c(e, t) {
						return e = e.source, t = t || "",
							function n(r, i) {
								return r ? (i = i.source || i, i = i.replace(/(^|[^\[])\^/g, "$1"), e = e.replace(r, i), n) : new RegExp(e, t)
							}
					}

					function u() {}

					function d(e) {
						for (var t, n, r = 1; r < arguments.length; r++) {
							t = arguments[r];
							for (n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
						}
						return e
					}

					function h(e, n, r) {
						if (r || "function" == typeof n) {
							r || (r = n, n = null), n = d({}, h.defaults, n || {});
							var i, o, s = n.highlight,
								c = 0;
							try {
								i = t.lex(e, n)
							} catch (u) {
								return r(u)
							}
							o = i.length;
							var f = function(e) {
								if (e) return n.highlight = s, r(e);
								var t;
								try {
									t = l.parse(i, n)
								} catch (o) {
									e = o
								}
								return n.highlight = s, e ? r(e) : r(null, t)
							};
							if (!s || s.length < 3) return f();
							if (delete n.highlight, !o) return f();
							for (; c < i.length; c++) ! function(e) {
								return "code" !== e.type ? --o || f() : s(e.text, e.lang, function(t, n) {
									return t ? f(t) : null == n || n === e.text ? --o || f() : (e.text = n, e.escaped = !0, void(--o || f()))
								})
							}(i[c])
						} else try {
							return n && (n = d({}, h.defaults, n)), l.parse(t.lex(e, n), n)
						} catch (u) {
							if (u.message += "\nPlease report this to https://github.com/chjj/marked.", (n || h.defaults).silent) return "<p>An error occured:</p><pre>" + a(u.message + "", !0) + "</pre>";
							throw u
						}
					}
					var f = {
						newline: /^\n+/,
						code: /^( {4}[^\n]+\n*)+/,
						fences: u,
						hr: /^( *[-*_]){3,} *(?:\n+|$)/,
						heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
						nptable: u,
						lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
						blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
						list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
						html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
						def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
						table: u,
						paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
						text: /^[^\n]+/
					};
					f.bullet = /(?:[*+-]|\d+\.)/, f.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/, f.item = c(f.item, "gm")(/bull/g, f.bullet)(), f.list = c(f.list)(/bull/g, f.bullet)("hr", "\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def", "\\n+(?=" + f.def.source + ")")(), f.blockquote = c(f.blockquote)("def", f.def)(), f._tag = "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b", f.html = c(f.html)("comment", /<!--[\s\S]*?-->/)("closed", /<(tag)[\s\S]+?<\/\1>/)("closing", /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g, f._tag)(), f.paragraph = c(f.paragraph)("hr", f.hr)("heading", f.heading)("lheading", f.lheading)("blockquote", f.blockquote)("tag", "<" + f._tag)("def", f.def)(), f.normal = d({}, f), f.gfm = d({}, f.normal, {
						fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
						paragraph: /^/,
						heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
					}), f.gfm.paragraph = c(f.paragraph)("(?!", "(?!" + f.gfm.fences.source.replace("\\1", "\\2") + "|" + f.list.source.replace("\\1", "\\3") + "|")(), f.tables = d({}, f.gfm, {
						nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
						table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
					}), t.rules = f, t.lex = function(e, n) {
						var r = new t(n);
						return r.lex(e)
					}, t.prototype.lex = function(e) {
						return e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ").replace(/\u00a0/g, " ").replace(/\u2424/g, "\n"), this.token(e, !0)
					}, t.prototype.token = function(e, t, n) {
						for (var r, i, o, l, a, s, c, u, d, e = e.replace(/^ +$/gm, ""); e;)
							if ((o = this.rules.newline.exec(e)) && (e = e.substring(o[0].length), o[0].length > 1 && this.tokens.push({
									type: "space"
								})), o = this.rules.code.exec(e)) e = e.substring(o[0].length), o = o[0].replace(/^ {4}/gm, ""), this.tokens.push({
								type: "code",
								text: this.options.pedantic ? o : o.replace(/\n+$/, "")
							});
							else if (o = this.rules.fences.exec(e)) e = e.substring(o[0].length), this.tokens.push({
							type: "code",
							lang: o[2],
							text: o[3] || ""
						});
						else if (o = this.rules.heading.exec(e)) e = e.substring(o[0].length), this.tokens.push({
							type: "heading",
							depth: o[1].length,
							text: o[2]
						});
						else if (t && (o = this.rules.nptable.exec(e))) {
							for (e = e.substring(o[0].length), s = {
									type: "table",
									header: o[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
									align: o[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
									cells: o[3].replace(/\n$/, "").split("\n")
								}, u = 0; u < s.align.length; u++) /^ *-+: *$/.test(s.align[u]) ? s.align[u] = "right" : /^ *:-+: *$/.test(s.align[u]) ? s.align[u] = "center" : /^ *:-+ *$/.test(s.align[u]) ? s.align[u] = "left" : s.align[u] = null;
							for (u = 0; u < s.cells.length; u++) s.cells[u] = s.cells[u].split(/ *\| */);
							this.tokens.push(s)
						} else if (o = this.rules.lheading.exec(e)) e = e.substring(o[0].length), this.tokens.push({
							type: "heading",
							depth: "=" === o[2] ? 1 : 2,
							text: o[1]
						});
						else if (o = this.rules.hr.exec(e)) e = e.substring(o[0].length), this.tokens.push({
							type: "hr"
						});
						else if (o = this.rules.blockquote.exec(e)) e = e.substring(o[0].length), this.tokens.push({
							type: "blockquote_start"
						}), o = o[0].replace(/^ *> ?/gm, ""), this.token(o, t, !0), this.tokens.push({
							type: "blockquote_end"
						});
						else if (o = this.rules.list.exec(e)) {
							for (e = e.substring(o[0].length), l = o[2], this.tokens.push({
									type: "list_start",
									ordered: l.length > 1
								}), o = o[0].match(this.rules.item), r = !1, d = o.length, u = 0; d > u; u++) s = o[u], c = s.length, s = s.replace(/^ *([*+-]|\d+\.) +/, ""), ~s.indexOf("\n ") && (c -= s.length, s = this.options.pedantic ? s.replace(/^ {1,4}/gm, "") : s.replace(new RegExp("^ {1," + c + "}", "gm"), "")), this.options.smartLists && u !== d - 1 && (a = f.bullet.exec(o[u + 1])[0], l === a || l.length > 1 && a.length > 1 || (e = o.slice(u + 1).join("\n") + e, u = d - 1)), i = r || /\n\n(?!\s*$)/.test(s), u !== d - 1 && (r = "\n" === s.charAt(s.length - 1), i || (i = r)), this.tokens.push({
								type: i ? "loose_item_start" : "list_item_start"
							}), this.token(s, !1, n), this.tokens.push({
								type: "list_item_end"
							});
							this.tokens.push({
								type: "list_end"
							})
						} else if (o = this.rules.html.exec(e)) e = e.substring(o[0].length), this.tokens.push({
							type: this.options.sanitize ? "paragraph" : "html",
							pre: !this.options.sanitizer && ("pre" === o[1] || "script" === o[1] || "style" === o[1]),
							text: o[0]
						});
						else if (!n && t && (o = this.rules.def.exec(e))) e = e.substring(o[0].length), this.tokens.links[o[1].toLowerCase()] = {
							href: o[2],
							title: o[3]
						};
						else if (t && (o = this.rules.table.exec(e))) {
							for (e = e.substring(o[0].length), s = {
									type: "table",
									header: o[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
									align: o[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
									cells: o[3].replace(/(?: *\| *)?\n$/, "").split("\n")
								}, u = 0; u < s.align.length; u++) /^ *-+: *$/.test(s.align[u]) ? s.align[u] = "right" : /^ *:-+: *$/.test(s.align[u]) ? s.align[u] = "center" : /^ *:-+ *$/.test(s.align[u]) ? s.align[u] = "left" : s.align[u] = null;
							for (u = 0; u < s.cells.length; u++) s.cells[u] = s.cells[u].replace(/^ *\| *| *\| *$/g, "").split(/ *\| */);
							this.tokens.push(s)
						} else if (t && (o = this.rules.paragraph.exec(e))) e = e.substring(o[0].length), this.tokens.push({
							type: "paragraph",
							text: "\n" === o[1].charAt(o[1].length - 1) ? o[1].slice(0, -1) : o[1]
						});
						else if (o = this.rules.text.exec(e)) e = e.substring(o[0].length), this.tokens.push({
							type: "text",
							text: o[0]
						});
						else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0));
						return this.tokens
					};
					var p = {
						escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
						autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
						url: u,
						tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
						link: /^!?\[(inside)\]\(href\)/,
						reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
						nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
						strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
						em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
						code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
						br: /^ {2,}\n(?!\s*$)/,
						del: u,
						text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
					};
					p._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/, p._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/, p.link = c(p.link)("inside", p._inside)("href", p._href)(), p.reflink = c(p.reflink)("inside", p._inside)(), p.normal = d({}, p), p.pedantic = d({}, p.normal, {
						strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
						em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
					}), p.gfm = d({}, p.normal, {
						escape: c(p.escape)("])", "~|])")(),
						url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
						del: /^~~(?=\S)([\s\S]*?\S)~~/,
						text: c(p.text)("]|", "~]|")("|", "|https?://|")()
					}), p.breaks = d({}, p.gfm, {
						br: c(p.br)("{2,}", "*")(),
						text: c(p.gfm.text)("{2,}", "*")()
					}), i.rules = p, i.output = function(e, t, n) {
						var r = new i(t, n);
						return r.output(e)
					}, i.prototype.output = function(e) {
						for (var t, n, r, i, o = ""; e;)
							if (i = this.rules.escape.exec(e)) e = e.substring(i[0].length), o += i[1];
							else if (i = this.rules.autolink.exec(e)) e = e.substring(i[0].length), "@" === i[2] ? (n = ":" === i[1].charAt(6) ? this.mangle(i[1].substring(7)) : this.mangle(i[1]), r = this.mangle("mailto:") + n) : (n = a(i[1]), r = n), o += this.renderer.link(r, null, n);
						else if (this.inLink || !(i = this.rules.url.exec(e))) {
							if (i = this.rules.tag.exec(e)) !this.inLink && /^<a /i.test(i[0]) ? this.inLink = !0 : this.inLink && /^<\/a>/i.test(i[0]) && (this.inLink = !1), e = e.substring(i[0].length), o += this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(i[0]) : a(i[0]) : i[0];
							else if (i = this.rules.link.exec(e)) e = e.substring(i[0].length), this.inLink = !0, o += this.outputLink(i, {
								href: i[2],
								title: i[3]
							}), this.inLink = !1;
							else if ((i = this.rules.reflink.exec(e)) || (i = this.rules.nolink.exec(e))) {
								if (e = e.substring(i[0].length), t = (i[2] || i[1]).replace(/\s+/g, " "), t = this.links[t.toLowerCase()], !t || !t.href) {
									o += i[0].charAt(0), e = i[0].substring(1) + e;
									continue
								}
								this.inLink = !0, o += this.outputLink(i, t), this.inLink = !1
							} else if (i = this.rules.strong.exec(e)) e = e.substring(i[0].length), o += this.renderer.strong(this.output(i[2] || i[1]));
							else if (i = this.rules.em.exec(e)) e = e.substring(i[0].length), o += this.renderer.em(this.output(i[2] || i[1]));
							else if (i = this.rules.code.exec(e)) e = e.substring(i[0].length), o += this.renderer.codespan(a(i[2], !0));
							else if (i = this.rules.br.exec(e)) e = e.substring(i[0].length), o += this.renderer.br();
							else if (i = this.rules.del.exec(e)) e = e.substring(i[0].length), o += this.renderer.del(this.output(i[1]));
							else if (i = this.rules.text.exec(e)) e = e.substring(i[0].length), o += this.renderer.text(a(this.smartypants(i[0])));
							else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0))
						} else e = e.substring(i[0].length), n = a(i[1]), r = n, o += this.renderer.link(r, null, n);
						return o
					}, i.prototype.outputLink = function(e, t) {
						var n = a(t.href),
							r = t.title ? a(t.title) : null;
						return "!" !== e[0].charAt(0) ? this.renderer.link(n, r, this.output(e[1])) : this.renderer.image(n, r, a(e[1]))
					}, i.prototype.smartypants = function(e) {
						return this.options.smartypants ? e.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…") : e
					}, i.prototype.mangle = function(e) {
						if (!this.options.mangle) return e;
						for (var t, n = "", r = e.length, i = 0; r > i; i++) t = e.charCodeAt(i), Math.random() > .5 && (t = "x" + t.toString(16)), n += "&#" + t + ";";
						return n
					}, o.prototype.code = function(e, t, n) {
						if (this.options.highlight) {
							var r = this.options.highlight(e, t);
							null != r && r !== e && (n = !0, e = r)
						}
						return t ? '<pre><code class="' + this.options.langPrefix + a(t, !0) + '">' + (n ? e : a(e, !0)) + "\n</code></pre>\n" : "<pre><code>" + (n ? e : a(e, !0)) + "\n</code></pre>"
					}, o.prototype.blockquote = function(e) {
						return "<blockquote>\n" + e + "</blockquote>\n"
					}, o.prototype.html = function(e) {
						return e
					}, o.prototype.heading = function(e, t, n) {
						return "<h" + t + ' id="' + this.options.headerPrefix + n.toLowerCase().replace(/[^\w]+/g, "-") + '">' + e + "</h" + t + ">\n"
					}, o.prototype.hr = function() {
						return this.options.xhtml ? "<hr/>\n" : "<hr>\n"
					}, o.prototype.list = function(e, t) {
						var n = t ? "ol" : "ul";
						return "<" + n + ">\n" + e + "</" + n + ">\n"
					}, o.prototype.listitem = function(e) {
						return "<li>" + e + "</li>\n"
					}, o.prototype.paragraph = function(e) {
						return "<p>" + e + "</p>\n"
					}, o.prototype.table = function(e, t) {
						return "<table>\n<thead>\n" + e + "</thead>\n<tbody>\n" + t + "</tbody>\n</table>\n"
					}, o.prototype.tablerow = function(e) {
						return "<tr>\n" + e + "</tr>\n"
					}, o.prototype.tablecell = function(e, t) {
						var n = t.header ? "th" : "td",
							r = t.align ? "<" + n + ' style="text-align:' + t.align + '">' : "<" + n + ">";
						return r + e + "</" + n + ">\n"
					}, o.prototype.strong = function(e) {
						return "<strong>" + e + "</strong>"
					}, o.prototype.em = function(e) {
						return "<em>" + e + "</em>"
					}, o.prototype.codespan = function(e) {
						return "<code>" + e + "</code>"
					}, o.prototype.br = function() {
						return this.options.xhtml ? "<br/>" : "<br>"
					}, o.prototype.del = function(e) {
						return "<del>" + e + "</del>"
					}, o.prototype.link = function(e, t, n) {
						if (this.options.sanitize) {
							try {
								var r = decodeURIComponent(s(e)).replace(/[^\w:]/g, "").toLowerCase()
							} catch (i) {
								return ""
							}
							if (0 === r.indexOf("javascript:") || 0 === r.indexOf("vbscript:")) return ""
						}
						var o = '<a href="' + e + '"';
						return t && (o += ' title="' + t + '"'), o += ">" + n + "</a>"
					}, o.prototype.image = function(e, t, n) {
						var r = '<img src="' + e + '" alt="' + n + '"';
						return t && (r += ' title="' + t + '"'), r += this.options.xhtml ? "/>" : ">"
					}, o.prototype.text = function(e) {
						return e
					}, l.parse = function(e, t, n) {
						var r = new l(t, n);
						return r.parse(e)
					}, l.prototype.parse = function(e) {
						this.inline = new i(e.links, this.options, this.renderer), this.tokens = e.reverse();
						for (var t = ""; this.next();) t += this.tok();
						return t
					}, l.prototype.next = function() {
						return this.token = this.tokens.pop()
					}, l.prototype.peek = function() {
						return this.tokens[this.tokens.length - 1] || 0
					}, l.prototype.parseText = function() {
						for (var e = this.token.text;
							"text" === this.peek().type;) e += "\n" + this.next().text;
						return this.inline.output(e)
					}, l.prototype.tok = function() {
						switch (this.token.type) {
							case "space":
								return "";
							case "hr":
								return this.renderer.hr();
							case "heading":
								return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, this.token.text);
							case "code":
								return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
							case "table":
								var e, t, n, r, i, o = "",
									l = "";
								for (n = "", e = 0; e < this.token.header.length; e++) r = {
									header: !0,
									align: this.token.align[e]
								}, n += this.renderer.tablecell(this.inline.output(this.token.header[e]), {
									header: !0,
									align: this.token.align[e]
								});
								for (o += this.renderer.tablerow(n), e = 0; e < this.token.cells.length; e++) {
									for (t = this.token.cells[e], n = "", i = 0; i < t.length; i++) n += this.renderer.tablecell(this.inline.output(t[i]), {
										header: !1,
										align: this.token.align[i]
									});
									l += this.renderer.tablerow(n)
								}
								return this.renderer.table(o, l);
							case "blockquote_start":
								for (var l = "";
									"blockquote_end" !== this.next().type;) l += this.tok();
								return this.renderer.blockquote(l);
							case "list_start":
								for (var l = "", a = this.token.ordered;
									"list_end" !== this.next().type;) l += this.tok();
								return this.renderer.list(l, a);
							case "list_item_start":
								for (var l = "";
									"list_item_end" !== this.next().type;) l += "text" === this.token.type ? this.parseText() : this.tok();
								return this.renderer.listitem(l);
							case "loose_item_start":
								for (var l = "";
									"list_item_end" !== this.next().type;) l += this.tok();
								return this.renderer.listitem(l);
							case "html":
								var s = this.token.pre || this.options.pedantic ? this.token.text : this.inline.output(this.token.text);
								return this.renderer.html(s);
							case "paragraph":
								return this.renderer.paragraph(this.inline.output(this.token.text));
							case "text":
								return this.renderer.paragraph(this.parseText())
						}
					}, u.exec = u, h.options = h.setOptions = function(e) {
						return d(h.defaults, e), h
					}, h.defaults = {
						gfm: !0,
						tables: !0,
						breaks: !1,
						pedantic: !1,
						sanitize: !1,
						sanitizer: null,
						mangle: !0,
						smartLists: !1,
						silent: !1,
						highlight: null,
						langPrefix: "lang-",
						smartypants: !1,
						headerPrefix: "",
						renderer: new o,
						xhtml: !1
					}, h.Parser = l, h.parser = l.parse, h.Renderer = o, h.Lexer = t, h.lexer = t.lex, h.InlineLexer = i, h.inlineLexer = i.output, h.parse = h, "undefined" != typeof n && "object" == typeof r ? n.exports = h : "function" == typeof e && e.amd ? e(function() {
						return h
					}) : this.marked = h
				}).call(function() {
					return this || ("undefined" != typeof window ? window : t)
				}())
			}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
		}, {}],
		12: [function(e, t, n) {
			var r = e("codemirror");
			r.commands.tabAndIndentMarkdownList = function(e) {
				var t = e.listSelections(),
					n = t[0].head,
					r = e.getStateAfter(n.line),
					i = r.list !== !1;
				if (i) return void e.execCommand("indentMore");
				if (e.options.indentWithTabs) e.execCommand("insertTab");
				else {
					var o = Array(e.options.tabSize + 1).join(" ");
					e.replaceSelection(o)
				}
			}, r.commands.shiftTabAndUnindentMarkdownList = function(e) {
				var t = e.listSelections(),
					n = t[0].head,
					r = e.getStateAfter(n.line),
					i = r.list !== !1;
				if (i) return void e.execCommand("indentLess");
				if (e.options.indentWithTabs) e.execCommand("insertTab");
				else {
					var o = Array(e.options.tabSize + 1).join(" ");
					e.replaceSelection(o)
				}
			}
		}, {
			codemirror: 6
		}],
		13: [function(e, t, n) {
			"use strict";

			function r(e) {
				return e = z ? e.replace("Ctrl", "Cmd") : e.replace("Cmd", "Ctrl")
			}

			function i(e, t) {
				e = e || {};
				var n = document.createElement("a");
				return t = void 0 == t ? !0 : t, e.title && t && (n.title = e.title, z && (n.title = n.title.replace("Ctrl", "⌘"), n.title = n.title.replace("Alt", "⌥"))), n.className = e.className, n
			}

			function o() {
				var e = document.createElement("i");
				return e.className = "separator", e.innerHTML = "|", e
			}

			function l(e, t) {
				t = t || e.getCursor("start");
				var n = e.getTokenAt(t);
				if (!n.type) return {};
				for (var r, i, o = n.type.split(" "), l = {}, a = 0; a < o.length; a++) r = o[a], "strong" === r ? l.bold = !0 : "variable-2" === r ? (i = e.getLine(t.line), /^\s*\d+\.\s/.test(i) ? l["ordered-list"] = !0 : l["unordered-list"] = !0) : "atom" === r ? l.quote = !0 : "em" === r ? l.italic = !0 : "quote" === r ? l.quote = !0 : "strikethrough" === r ? l.strikethrough = !0 : "comment" === r && (l.code = !0);
				return l
			}

			function a(e) {
				var t = e.codemirror;
				t.setOption("fullScreen", !t.getOption("fullScreen")), t.getOption("fullScreen") ? (B = document.body.style.overflow, document.body.style.overflow = "hidden") : document.body.style.overflow = B;
				var n = t.getWrapperElement();
				/fullscreen/.test(n.previousSibling.className) ? n.previousSibling.className = n.previousSibling.className.replace(/\s*fullscreen\b/, "") : n.previousSibling.className += " fullscreen";
				var r = e.toolbarElements.fullscreen;
				/active/.test(r.className) ? r.className = r.className.replace(/\s*active\s*/g, "") : r.className += " active";
				var i = t.getWrapperElement().nextSibling;
				/editor-preview-active-side/.test(i.className) && L(e)
			}

			function s(e) {
				O(e, "bold", "**")
			}

			function c(e) {
				O(e, "italic", "*")
			}

			function u(e) {
				O(e, "strikethrough", "~~")
			}

			function d(e) {
				O(e, "code", "```\r\n", "\r\n```")
			}

			function h(e) {
				var t = e.codemirror;
				A(t, "quote")
			}

			function f(e) {
				var t = e.codemirror;
				N(t, "smaller")
			}

			function p(e) {
				var t = e.codemirror;
				N(t, "bigger")
			}

			function m(e) {
				var t = e.codemirror;
				N(t, void 0, 1)
			}

			function g(e) {
				var t = e.codemirror;
				N(t, void 0, 2)
			}

			function v(e) {
				var t = e.codemirror;
				N(t, void 0, 3)
			}

			function y(e) {
				var t = e.codemirror;
				A(t, "unordered-list")
			}

			function x(e) {
				var t = e.codemirror;
				A(t, "ordered-list")
			}

			function b(e) {
				var t = e.codemirror,
					n = l(t),
					r = e.options;
				M(t, n.link, r.insertTexts.link)
			}

			function w(e) {
				var t = e.codemirror,
					n = l(t),
					r = e.options;
				M(t, n.image, r.insertTexts.image)
			}

			function k(e) {
				var t = e.codemirror,
					n = l(t),
					r = e.options;
				M(t, n.image, r.insertTexts.horizontalRule)
			}

			function C(e) {
				var t = e.codemirror;
				t.undo(), t.focus()
			}

			function S(e) {
				var t = e.codemirror;
				t.redo(), t.focus()
			}

			function L(e) {
				var t = e.codemirror,
					n = t.getWrapperElement(),
					r = n.nextSibling,
					i = e.toolbarElements["side-by-side"];
				/editor-preview-active-side/.test(r.className) ? (r.className = r.className.replace(/\s*editor-preview-active-side\s*/g, ""), i.className = i.className.replace(/\s*active\s*/g, ""), n.className = n.className.replace(/\s*CodeMirror-sided\s*/g, " ")) : (setTimeout(function() {
					t.getOption("fullScreen") || a(e), r.className += " editor-preview-active-side"
				}, 1), i.className += " active", n.className += " CodeMirror-sided");
				var o = n.lastChild;
				if (/editor-preview-active/.test(o.className)) {
					o.className = o.className.replace(/\s*editor-preview-active\s*/g, "");
					var l = e.toolbarElements.preview,
						s = n.previousSibling;
					l.className = l.className.replace(/\s*active\s*/g, ""), s.className = s.className.replace(/\s*disabled-for-preview*/g, "")
				}
				r.innerHTML = e.options.previewRender(e.value(), r), t.on("update", function() {
					r.innerHTML = e.options.previewRender(e.value(), r)
				})
			}

			function T(e) {
				var t = e.codemirror,
					n = t.getWrapperElement(),
					r = n.previousSibling,
					i = e.toolbarElements.preview,
					o = n.lastChild;
				o && /editor-preview/.test(o.className) || (o = document.createElement("div"), o.className = "editor-preview", n.appendChild(o)), /editor-preview-active/.test(o.className) ? (o.className = o.className.replace(/\s*editor-preview-active\s*/g, ""), i.className = i.className.replace(/\s*active\s*/g, ""), r.className = r.className.replace(/\s*disabled-for-preview*/g, "")) : (setTimeout(function() {
					o.className += " editor-preview-active"
				}, 1), i.className += " active", r.className += " disabled-for-preview"), o.innerHTML = e.options.previewRender(e.value(), o);
				var l = t.getWrapperElement().nextSibling;
				/editor-preview-active-side/.test(l.className) && L(e)
			}

			function M(e, t, n) {
				if (!/editor-preview-active/.test(e.getWrapperElement().lastChild.className)) {
					var r, i = n[0],
						o = n[1],
						l = e.getCursor("start"),
						a = e.getCursor("end");
					t ? (r = e.getLine(l.line), i = r.slice(0, l.ch), o = r.slice(l.ch), e.replaceRange(i + o, {
						line: l.line,
						ch: 0
					})) : (r = e.getSelection(), e.replaceSelection(i + r + o), l.ch += i.length, l !== a && (a.ch += i.length)), e.setSelection(l, a), e.focus()
				}
			}

			function N(e, t, n) {
				if (!/editor-preview-active/.test(e.getWrapperElement().lastChild.className)) {
					for (var r = e.getCursor("start"), i = e.getCursor("end"), o = r.line; o <= i.line; o++) ! function(r) {
						var i = e.getLine(r),
							o = i.search(/[^#]/);
						i = void 0 !== t ? 0 >= o ? "bigger" == t ? "###### " + i : "# " + i : 6 == o && "smaller" == t ? i.substr(7) : 1 == o && "bigger" == t ? i.substr(2) : "bigger" == t ? i.substr(1) : "#" + i : 1 == n ? 0 >= o ? "# " + i : o == n ? i.substr(o + 1) : "# " + i.substr(o + 1) : 2 == n ? 0 >= o ? "## " + i : o == n ? i.substr(o + 1) : "## " + i.substr(o + 1) : 0 >= o ? "### " + i : o == n ? i.substr(o + 1) : "### " + i.substr(o + 1), e.replaceRange(i, {
							line: r,
							ch: 0
						}, {
							line: r,
							ch: 99999999999999
						})
					}(o);
					e.focus()
				}
			}

			function A(e, t) {
				if (!/editor-preview-active/.test(e.getWrapperElement().lastChild.className)) {
					for (var n = l(e), r = e.getCursor("start"), i = e.getCursor("end"), o = {
							quote: /^(\s*)\>\s+/,
							"unordered-list": /^(\s*)(\*|\-|\+)\s+/,
							"ordered-list": /^(\s*)\d+\.\s+/
						}, a = {
							quote: "> ",
							"unordered-list": "* ",
							"ordered-list": "1. "
						}, s = r.line; s <= i.line; s++) ! function(r) {
						var i = e.getLine(r);
						i = n[t] ? i.replace(o[t], "$1") : a[t] + i, e.replaceRange(i, {
							line: r,
							ch: 0
						}, {
							line: r,
							ch: 99999999999999
						})
					}(s);
					e.focus()
				}
			}

			function O(e, t, n, r) {
				if (!/editor-preview-active/.test(e.codemirror.getWrapperElement().lastChild.className)) {
					r = "undefined" == typeof r ? n : r;
					var i, o = e.codemirror,
						a = l(o),
						s = n,
						c = r,
						u = o.getCursor("start"),
						d = o.getCursor("end");
					a[t] ? (i = o.getLine(u.line), s = i.slice(0, u.ch), c = i.slice(u.ch), "bold" == t ? (s = s.replace(/(\*\*|__)(?![\s\S]*(\*\*|__))/, ""), c = c.replace(/(\*\*|__)/, "")) : "italic" == t ? (s = s.replace(/(\*|_)(?![\s\S]*(\*|_))/, ""), c = c.replace(/(\*|_)/, "")) : "strikethrough" == t && (s = s.replace(/(\*\*|~~)(?![\s\S]*(\*\*|~~))/, ""), c = c.replace(/(\*\*|~~)/, "")), o.replaceRange(s + c, {
						line: u.line,
						ch: 0
					}, {
						line: u.line,
						ch: 99999999999999
					}), "bold" == t || "strikethrough" == t ? (u.ch -= 2, u !== d && (d.ch -= 2)) : "italic" == t && (u.ch -= 1, u !== d && (d.ch -= 1))) : (i = o.getSelection(), "bold" == t ? (i = i.split("**").join(""), i = i.split("__").join("")) : "italic" == t ? (i = i.split("*").join(""), i = i.split("_").join("")) : "strikethrough" == t && (i = i.split("~~").join("")), o.replaceSelection(s + i + c), u.ch += n.length, d.ch = u.ch + i.length), o.setSelection(u, d), o.focus()
				}
			}

			function W(e, t) {
				for (var n in t) t.hasOwnProperty(n) && (t[n] instanceof Array ? e[n] = t[n].concat(e[n] instanceof Array ? e[n] : []) : null !== t[n] && "object" == typeof t[n] && t[n].constructor === Object ? e[n] = W(e[n] || {}, t[n]) : e[n] = t[n]);
				return e
			}

			function H(e) {
				for (var t = 1; t < arguments.length; t++) e = W(e, arguments[t]);
				return e
			}

			function D(e) {
				var t = /[a-zA-Z0-9_\u0392-\u03c9]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af]+/g,
					n = e.match(t),
					r = 0;
				if (null === n) return r;
				for (var i = 0; i < n.length; i++) r += n[i].charCodeAt(0) >= 19968 ? n[i].length : 1;
				return r
			}

			function E(e) {
				e = e || {}, e.parent = this;
				var t = !0;
				if (e.autoDownloadFontAwesome === !1 && (t = !1), e.autoDownloadFontAwesome !== !0)
					for (var n = document.styleSheets, r = 0; r < n.length; r++) n[r].href && n[r].href.indexOf("//maxcdn.bootstrapcdn.com/font-awesome/") > -1 && (t = !1);
				if (t) {
					var i = document.createElement("link");
					i.rel = "stylesheet", i.href = "https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css", document.getElementsByTagName("head")[0].appendChild(i)
				}
				if (e.element) this.element = e.element;
				else if (null === e.element) return void console.log("SimpleMDE: Error. No element was found.");
				e.toolbar !== !1 && (e.toolbar = e.toolbar || E.toolbar), e.hasOwnProperty("status") || (e.status = ["autosave", "lines", "words", "cursor"]), e.previewRender || (e.previewRender = function(e) {
					return this.parent.markdown(e)
				}), e.parsingConfig = e.parsingConfig || {}, e.insertTexts = H({}, j, e.insertTexts || {}), this.options = e, this.render(), e.initialValue && this.value(e.initialValue)
			}
			var I = e("codemirror");
			e("codemirror/addon/edit/continuelist.js"), e("./codemirror/tablist"), e("codemirror/addon/display/fullscreen.js"), e("codemirror/mode/markdown/markdown.js"), e("codemirror/addon/mode/overlay.js"), e("codemirror/mode/gfm/gfm.js"), e("codemirror/mode/xml/xml.js"), e("spell-checker");
			var P = e("marked"),
				z = /Mac/.test(navigator.platform),
				F = {
					"Cmd-B": s,
					"Cmd-I": c,
					"Cmd-K": b,
					"Cmd-H": f,
					"Shift-Cmd-H": p,
					"Cmd-Alt-I": w,
					"Cmd-'": h,
					"Cmd-Alt-L": x,
					"Cmd-L": y,
					"Cmd-Alt-C": d,
					"Cmd-P": T
				},
				R = function() {
					var e = !1;
					return function(t) {
						(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0)
					}(navigator.userAgent || navigator.vendor || window.opera), e
				},
				B = "",
				_ = {
					bold: {
						name: "bold",
						action: s,
						className: "fa fa-bold",
						title: "Bold (Ctrl+B)"
					},
					italic: {
						name: "italic",
						action: c,
						className: "fa fa-italic",
						title: "Italic (Ctrl+I)"
					},
					strikethrough: {
						name: "strikethrough",
						action: u,
						className: "fa fa-strikethrough",
						title: "Strikethrough"
					},
					heading: {
						name: "heading",
						action: f,
						className: "fa fa-header",
						title: "Heading (Ctrl+H)"
					},
					"heading-smaller": {
						name: "heading-smaller",
						action: f,
						className: "fa fa-header fa-header-x fa-header-smaller",
						title: "Smaller Heading (Ctrl+H)"
					},
					"heading-bigger": {
						name: "heading-bigger",
						action: p,
						className: "fa fa-header fa-header-x fa-header-bigger",
						title: "Bigger Heading (Shift+Ctrl+H)"
					},
					"heading-1": {
						name: "heading-1",
						action: m,
						className: "fa fa-header fa-header-x fa-header-1",
						title: "Big Heading"
					},
					"heading-2": {
						name: "heading-2",
						action: g,
						className: "fa fa-header fa-header-x fa-header-2",
						title: "Medium Heading"
					},
					"heading-3": {
						name: "heading-3",
						action: v,
						className: "fa fa-header fa-header-x fa-header-3",
						title: "Small Heading"
					},
					code: {
						name: "code",
						action: d,
						className: "fa fa-code",
						title: "Code (Ctrl+Alt+C)"
					},
					quote: {
						name: "quote",
						action: h,
						className: "fa fa-quote-left",
						title: "Quote (Ctrl+')"
					},
					"unordered-list": {
						name: "unordered-list",
						action: y,
						className: "fa fa-list-ul",
						title: "Generic List (Ctrl+L)"
					},
					"ordered-list": {
						name: "ordered-list",
						action: x,
						className: "fa fa-list-ol",
						title: "Numbered List (Ctrl+Alt+L)"
					},
					link: {
						name: "link",
						action: b,
						className: "fa fa-link",
						title: "Create Link (Ctrl+K)"
					},
					image: {
						name: "image",
						action: w,
						className: "fa fa-picture-o",
						title: "Insert Image (Ctrl+Alt+I)"
					},
					"horizontal-rule": {
						name: "horizontal-rule",
						action: k,
						className: "fa fa-minus",
						title: "Insert Horizontal Line"
					},
					preview: {
						name: "preview",
						action: T,
						className: "fa fa-eye no-disable",
						title: "Toggle Preview (Ctrl+P)"
					},
					"side-by-side": {
						name: "side-by-side",
						action: L,
						className: "fa fa-columns no-disable no-mobile",
						title: "Toggle Side by Side (F9)"
					},
					fullscreen: {
						name: "fullscreen",
						action: a,
						className: "fa fa-arrows-alt no-disable no-mobile",
						title: "Toggle Fullscreen (F11)"
					},
					guide: {
						name: "guide",
						action: "http://nextstepwebs.github.io/simplemde-markdown-editor/markdown-guide",
						className: "fa fa-question-circle",
						title: "Markdown Guide"
					}
				},
				j = {
					link: ["[", "](http://)"],
					image: ["![](http://", ")"],
					horizontalRule: ["", "\n\n-----\n\n"]
				};
			E.toolbar = ["bold", "italic", "heading", "|", "quote", "unordered-list", "ordered-list", "|", "link", "image", "|", "preview", "side-by-side", "fullscreen", "guide"], E.prototype.markdown = function(e) {
				if (P) {
					var t = {};
					return this.options && this.options.renderingConfig && this.options.renderingConfig.singleLineBreaks !== !1 && (t.breaks = !0), this.options && this.options.renderingConfig && this.options.renderingConfig.codeSyntaxHighlighting === !0 && window.hljs && (t.highlight = function(e) {
						return window.hljs.highlightAuto(e).value
					}), P.setOptions(t), P(e)
				}
			}, E.prototype.render = function(e) {
				if (e || (e = this.element || document.getElementsByTagName("textarea")[0]), !this._rendered || this._rendered !== e) {
					this.element = e;
					var t = this.options,
						n = this,
						i = {};
					for (var o in F) ! function(e) {
						i[r(e)] = function() {
							F[e](n)
						}
					}(o);
					i.Enter = "newlineAndIndentContinueMarkdownList", i.Tab = "tabAndIndentMarkdownList", i["Shift-Tab"] = "shiftTabAndUnindentMarkdownList", i.F11 = function() {
						a(n)
					}, i.F9 = function() {
						L(n)
					}, i.Esc = function(e) {
						e.getOption("fullScreen") && a(n)
					};
					var l, s;
					t.spellChecker !== !1 ? (l = "spell-checker", s = t.parsingConfig, s.name = "gfm", s.gitHubSpice = !1) : (l = t.parsingConfig, l.name = "gfm", l.gitHubSpice = !1), this.codemirror = I.fromTextArea(e, {
						mode: l,
						backdrop: s,
						theme: "paper",
						tabSize: void 0 != t.tabSize ? t.tabSize : 2,
						indentUnit: void 0 != t.tabSize ? t.tabSize : 2,
						indentWithTabs: t.indentWithTabs === !1 ? !1 : !0,
						lineNumbers: !1,
						autofocus: t.autofocus === !0 ? !0 : !1,
						extraKeys: i,
						lineWrapping: t.lineWrapping === !1 ? !1 : !0,
						allowDropFileTypes: ["text/plain"]
					}), t.toolbar !== !1 && this.createToolbar(), t.status !== !1 && this.createStatusbar(), void 0 != t.autosave && t.autosave.enabled === !0 && this.autosave(), this.createSideBySide(), this._rendered = this.element
				}
			}, E.prototype.autosave = function() {
				var e = this.value(),
					t = this;
				if (void 0 == this.options.autosave.unique_id || "" == this.options.autosave.unique_id) return void console.log("SimpleMDE: You must set a unique_id to use the autosave feature");
				null != t.element.form && void 0 != t.element.form && t.element.form.addEventListener("submit", function() {
					localStorage.setItem(t.options.autosave.unique_id, "")
				}), this.options.autosave.loaded !== !0 && (null != localStorage.getItem(this.options.autosave.unique_id) && this.codemirror.setValue(localStorage.getItem(this.options.autosave.unique_id)), this.options.autosave.loaded = !0), localStorage && localStorage.setItem(this.options.autosave.unique_id, e);
				var n = document.getElementById("autosaved");
				if (null != n && void 0 != n && "" != n) {
					var r = new Date,
						i = r.getHours(),
						o = r.getMinutes(),
						l = "am",
						a = i;
					a >= 12 && (a = i - 12, l = "pm"), 0 == a && (a = 12), o = 10 > o ? "0" + o : o, n.innerHTML = "Autosaved: " + a + ":" + o + " " + l
				}
				setTimeout(function() {
					t.autosave()
				}, this.options.autosave.delay || 1e4)
			}, E.prototype.createSideBySide = function() {
				var e = this.codemirror,
					t = e.getWrapperElement(),
					n = t.nextSibling;
				n && /editor-preview-side/.test(n.className) || (n = document.createElement("div"), n.className = "editor-preview-side", t.parentNode.insertBefore(n, t.nextSibling));
				var r = !1,
					i = !1;
				return e.on("scroll", function(e) {
					if (r) return void(r = !1);
					i = !0;
					var t = e.getScrollInfo().height - e.getScrollInfo().clientHeight,
						o = parseFloat(e.getScrollInfo().top) / t,
						l = (n.scrollHeight - n.clientHeight) * o;
					n.scrollTop = l
				}), n.onscroll = function() {
					if (i) return void(i = !1);
					r = !0;
					var t = n.scrollHeight - n.clientHeight,
						o = parseFloat(n.scrollTop) / t,
						l = (e.getScrollInfo().height - e.getScrollInfo().clientHeight) * o;
					e.scrollTo(0, l)
				}, !0
			}, E.prototype.createToolbar = function(e) {
				if (e = e || this.options.toolbar, e && 0 !== e.length) {
					var t;
					for (t = 0; t < e.length; t++) void 0 != _[e[t]] && (e[t] = _[e[t]]);
					var n = document.createElement("div");
					n.className = "editor-toolbar";
					var r = this,
						a = {};
					for (r.toolbar = e, t = 0; t < e.length; t++)("guide" != e[t].name || r.options.toolbarGuideIcon !== !1) && (r.options.hideIcons && -1 != r.options.hideIcons.indexOf(e[t].name) || ("fullscreen" != e[t].name && "side-by-side" != e[t].name || !R()) && ! function(e) {
						var t;
						t = "|" === e ? o() : i(e, r.options.toolbarTips), e.action && ("function" == typeof e.action ? t.onclick = function() {
							e.action(r)
						} : "string" == typeof e.action && (t.href = e.action, t.target = "_blank")), a[e.name || e] = t, n.appendChild(t)
					}(e[t]));
					r.toolbarElements = a;
					var s = this.codemirror;
					s.on("cursorActivity", function() {
						var e = l(s);
						for (var t in a) ! function(t) {
							var n = a[t];
							e[t] ? n.className += " active" : "fullscreen" != t && "side-by-side" != t && (n.className = n.className.replace(/\s*active\s*/g, ""))
						}(t)
					});
					var c = s.getWrapperElement();
					return c.parentNode.insertBefore(n, c), n
				}
			}, E.prototype.createStatusbar = function(e) {
				e = e || this.options.status;
				var t = this.options;
				if (e && 0 !== e.length) {
					var n = document.createElement("div");
					n.className = "editor-statusbar";
					for (var r, i = this.codemirror, o = 0; o < e.length; o++) ! function(e) {
						var o = document.createElement("span");
						o.className = e, "words" === e ? (o.innerHTML = "0", i.on("update", function() {
							o.innerHTML = D(i.getValue())
						})) : "lines" === e ? (o.innerHTML = "0", i.on("update", function() {
							o.innerHTML = i.lineCount()
						})) : "cursor" === e ? (o.innerHTML = "0:0", i.on("cursorActivity", function() {
							r = i.getCursor(), o.innerHTML = r.line + ":" + r.ch
						})) : "autosave" === e && void 0 != t.autosave && t.autosave.enabled === !0 && o.setAttribute("id", "autosaved"), n.appendChild(o)
					}(e[o]);
					var l = this.codemirror.getWrapperElement();
					return l.parentNode.insertBefore(n, l.nextSibling), n
				}
			}, E.prototype.value = function(e) {
				return void 0 === e ? this.codemirror.getValue() : (this.codemirror.getDoc().setValue(e), this)
			}, E.toggleBold = s, E.toggleItalic = c, E.toggleStrikethrough = u, E.toggleBlockquote = h, E.toggleHeadingSmaller = f, E.toggleHeadingBigger = p, E.toggleHeading1 = m, E.toggleHeading2 = g, E.toggleHeading3 = v, E.toggleCodeBlock = d, E.toggleUnorderedList = y, E.toggleOrderedList = x, E.drawLink = b, E.drawImage = w, E.drawHorizontalRule = k, E.undo = C, E.redo = S, E.togglePreview = T, E.toggleSideBySide = L, E.toggleFullScreen = a, E.prototype.toggleBold = function() {
				s(this)
			}, E.prototype.toggleItalic = function() {
				c(this)
			}, E.prototype.toggleStrikethrough = function() {
				u(this)
			}, E.prototype.toggleBlockquote = function() {
				h(this)
			}, E.prototype.toggleHeadingSmaller = function() {
				f(this)
			}, E.prototype.toggleHeadingBigger = function() {
				p(this)
			}, E.prototype.toggleHeading1 = function() {
				m(this)
			}, E.prototype.toggleHeading2 = function() {
				g(this)
			}, E.prototype.toggleHeading3 = function() {
				v(this)
			}, E.prototype.toggleCodeBlock = function() {
				d(this)
			}, E.prototype.toggleUnorderedList = function() {
				y(this)
			}, E.prototype.toggleOrderedList = function() {
				x(this)
			}, E.prototype.drawLink = function() {
				b(this)
			}, E.prototype.drawImage = function() {
				w(this)
			}, E.prototype.drawHorizontalRule = function() {
				k(this)
			}, E.prototype.undo = function() {
				C(this)
			}, E.prototype.redo = function() {
				S(this)
			}, E.prototype.togglePreview = function() {
				T(this)
			}, E.prototype.toggleSideBySide = function() {
				L(this)
			}, E.prototype.toggleFullScreen = function() {
				a(this)
			}, E.prototype.isPreviewActive = function() {
				var e = this.codemirror,
					t = e.getWrapperElement(),
					n = t.lastChild;
				return /editor-preview-active/.test(n.className)
			}, E.prototype.isSideBySideActive = function() {
				var e = this.codemirror,
					t = e.getWrapperElement(),
					n = t.nextSibling;
				return /editor-preview-active-side/.test(n.className)
			}, E.prototype.isFullscreenActive = function() {
				var e = this.codemirror;
				return e.getOption("fullScreen")
			}, t.exports = E
		}, {
			"./codemirror/tablist": 12,
			codemirror: 6,
			"codemirror/addon/display/fullscreen.js": 3,
			"codemirror/addon/edit/continuelist.js": 4,
			"codemirror/addon/mode/overlay.js": 5,
			"codemirror/mode/gfm/gfm.js": 7,
			"codemirror/mode/markdown/markdown.js": 8,
			"codemirror/mode/xml/xml.js": 10,
			marked: 11,
			"spell-checker": 1
		}]
	}, {}, [13])(13)
});
/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map
!function(e,t,s){function a(){return c.short_name?g+"//"+c.short_name+"."+S.DOMAIN:S.REMOTE}function i(){function t(){for(var t;t=y.shift();){var a=t.url,i=new s(t.title,{dir:"auto",icon:t.iconUrl,body:t.body});try{i.onclick=function(){e.focus(),h.href=a,i.close()}}catch(r){}setTimeout(function(){i.close&&i.close()},8e3)}}var s=e.Notification;"Notification"in e&&"denied"!==s.permission&&("granted"===s.permission&&t(),s.requestPermission(function(e){"granted"===e&&t()}))}function r(){return 0==nt.data.user_id}function n(e){S.theme=e,"none"!=e&&o.injectStylesheet(S.STATIC_URL+"/styles/embed"+(e?"."+e+".css?"+A[e]:"."+short_name)+".css")}var o={},d=t.getElementsByTagName("head")[0]||t.getElementsByTagName("body")[0];if(o.extend=function(e,t){for(var s in t)e[s]=t[s];return e},o.injectScript=function(a,i){var r=t.createElement("script"),n=t.head||t.getElementsByTagName("head")[0]||t.documentElement;r.type="text/javascript",r.src=a,r.async="async",r.charset="utf-8",i&&(r.onload=r.onreadystatechange=function(t,a){var o=a||!r.readyState||/loaded|complete/.test(r.readyState);o&&(r.onload=r.onreadystatechange=null,n&&r.parentNode&&n.removeChild(r),r=s,a||i.call(e))}),n.insertBefore(r,n.firstChild)},o.injectStylesheet=function(e){var s=t.createElement("link");s.type="text/css",s.rel="stylesheet",s.href=e,d.appendChild(s)},o.injectStyle=function(e){var s=t.createElement("style");return s.type="text/css",d.appendChild(s),e=e.replace(/\}/g,"}\n"),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(t.createTextNode(e)),s},o.getCookie=function(e){for(var a,i,r,n=" "+e+"=",o=t.cookie.split(";"),d=0;d<o.length;d++)if(a=" "+o[d],i=a.indexOf(n),i>=0&&i+n.length==(r=a.indexOf("=")+1))return decodeURIComponent(a.substring(r,a.length).replace(/\+/g,""));return s},o.param=function(e){var t=[];for(var a in e)e[a]!=s&&t.push(a+"="+encodeURIComponent(e[a]));return t.join("&")},o.cssProperty=function(e,s){var a=(t.body||t.documentElement).style;if("undefined"==typeof a)return!1;if("string"==typeof a[e])return s?e:!0;for(var i=["Moz","Webkit","ms"],e=e.charAt(0).toUpperCase()+e.substr(1),r=0;r<i.length;r++)if("string"==typeof a[i[r]+e])return s?i[r]+e:!0},!e.DUOSHUO){for(var l in Object.prototype)return alert("Object.prototype 不为空，请不要给 Object.prototype 设置方法");var c,u,p=e.JSON,h=e.location,f=e.XMLHttpRequest,m=p&&p.stringify&&e.localStorage,v=e.navigator.userAgent,g="https:"==t.location.protocol?"https:":"http:",b=0,y=[],_=u=function(){function e(e){return t[e]||"&amp;"}var t={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},s=/&(?!\w+;)|[<>"'`]/g,a=/[&<>"'`]/;return function(t){return null==t||t===!1?"":a.test(t)?t.replace(s,e):t}}(),k=function(e){if(e.match(/^(http|https):/))return e;var s=t.createElement("a");return s.href=e,P.hrefNormalized?s.href:s.getAttribute("href",4)},w=function(e){return function(){return e}},x=function(){for(var e={},t=0;t<arguments.length;t++)arguments[t]&&o.extend(e,arguments[t]);var s=o.param(e);return s?"?"+s:""},T=function(){var e=o.getCookie("duoshuo_token");return e?{jwt:e}:c.remote_auth?{short_name:c.short_name,remote_auth:c.remote_auth}:s},q=function(){if(!c&&(c=e.duoshuoQuery)){if(!c.short_name||"your_duoshuo_short_name"===c.short_name)return c=s,void alert("你还没有设置多说域名(duoshuoQuery.short_name)，填入已有域名或创建新站点：http://duoshuo.com/create-site/");it.trigger("queryDefined")}return c},C=function(e){return e&&e.error&&e.warn?e:{error:function(){},log:function(){},warn:function(){}}}(e.console),S=e.DUOSHUO={sourceName:{weibo:"新浪微博",qq:"QQ",qzone:"QQ空间",qqt:"腾讯微博",renren:"人人网",douban:"豆瓣网",kaixin:"开心网",sohu:"搜狐微博",baidu:"百度",google:"谷歌",wechat:"微信",weixin:"微信",facebook:"Facebook",twitter:"Twitter",linkedin:"Linkedin"},serviceNames:{weibo:"微博",qq:"QQ",douban:"豆瓣",renren:"人人",kaixin:"开心",baidu:"百度",google:"谷歌",wechat:"微信",weixin:"微信",facebook:"Facebook",twitter:"Twitter",linkedin:"Linkedin"},parseDate:function(e){return e.parse("2011-10-28T00:00:00+08:00")&&function(t){return new e(t)}||e.parse("2011/10/28T00:00:00+0800")&&function(t){return new e(t.replace(/-/g,"/").replace(/:(\d\d)$/,"$1"))}||e.parse("2011/10/28 00:00:00+0800")&&function(t){return new e(t.replace(/-/g,"/").replace(/:(\d\d)$/,"$1").replace("T"," "))}||function(t){return new e(t)}}(Date),fullTime:function(e){var t=S.parseDate(e);return t.getFullYear()+"年"+(t.getMonth()+1)+"月"+t.getDate()+"日 "+t.toLocaleTimeString()},elapsedTime:function(e){var t=S.parseDate(e),s=new Date,a=(s-b-t)/1e3;return 10>a?"刚刚":60>a?Math.round(a)+"秒前":3600>a?Math.round(a/60)+"分钟前":86400>a?Math.round(a/3600)+"小时前":(s.getFullYear()==t.getFullYear()?"":t.getFullYear()+"年")+(t.getMonth()+1)+"月"+t.getDate()+"日"},compileStyle:function(e){var t="",s={};if(s.textbox="#ds-thread #ds-reset .ds-replybox .ds-textarea-wrapper",!e)return t;for(var a in e)t+=s[a]+"{"+e[a]+"}\n";return t},init:function(e,t){e&&!O[e]&&(O[e]=t||{type:"EmbedThread"}),S.initView&&S.initView()}},j=t.all,P=S.support=function(){var s=t.createElement("div");s.innerHTML='<a href="/a" style="opacity:.55;">a</a><input type="checkbox"/>';var a=s.getElementsByTagName("a")[0],i=s.getElementsByTagName("input")[0],r={placeholder:"placeholder"in i,touch:"ontouchstart"in e||"onmsgesturechange"in e,opacity:/^0.55$/.test(a.style.opacity),hrefNormalized:"/a"===a.getAttribute("href"),iOS:v.match(/ \((iPad|iPhone|iPod);( U;)? CPU( iPhone)? OS /),android:v.match(/ \(Linux; U; Android /)};return r.ie6=!f&&"undefined"==typeof s.style.maxHeight,r.authInWin=e.postMessage&&e.screen.width>800&&!r.iOS&&!r.android&&h.origin,r}(),O=S.selectors={".ds-thread":{type:"EmbedThread"},".ds-recent-comments":{type:"RecentComments"},".ds-recent-visitors":{type:"RecentVisitors"},".ds-top-users":{type:"TopUsers"},".ds-top-threads":{type:"TopThreads"},".ds-login":{type:"LoginWidget"},".ds-thread-count":{type:"ThreadCount"},".ds-share":{type:"ShareWidget"}},E=S.openDialog=function(e){return S.dialog!==s&&S.dialog.el.remove(),S.dialog=new st.Dialog(et.dialog(e)).open()},L=S.smilies={};S.require=function(){function t(e){var t=U[e]?"?"+U[e]+".js":"";return S.STATIC_URL+"/libs/"+e+".js"+t}var s={mzadxN:"undefined"!=typeof mzadxN};return"undefined"!=typeof jQuery&&jQuery.fn.jquery>="1.5"&&(s["embed.compat"]=!0,S.jQuery=e.jQuery),function(e,a){if("string"==typeof e)s[e]?a():o.injectScript(t(e),function(){s[e]=!0,a()});else if("object"==typeof e){var i,r=!0;for(i=0;i<e.length;i++)(function(n){s[e[i]]||(r=!1,o.injectScript(t(n),function(){s[n]=!0;for(var t=0;t<e.length;t++)if(!s[e[t]])return;a()}))})(e[i]);r&&a()}}}();for(var N=0,I=["EmbedThread","RecentComments","RecentVisitors","TopUsers","TopThreads","LoginWidget","ThreadCount"];N<I.length;N++)S[I[N]]=function(e){return function(t,s){s=s||{},s.type=e,t&&!O[t]&&(O[t]=s),S.initSelector&&S.initSelector(t,s)}}(I[N]),S["create"+I[N]]=function(e){return function(s,a){var i=t.createElement(s);for(var r in a)i.setAttribute("data-"+r,a[r]);return S[e](i),i}}(I[N]);S.RecentCommentsWidget=S.RecentComments;var R=S.API={ajax:function(e,t,i,r,n){function d(e){var t=e.getResponseHeader("Date");t&&(b=new Date-new Date(t))}function l(e,t,s){var a,i,o,l=t;if(e>=200&&300>e||304===e)if(304===e)l="notmodified",o=!0;else try{a=p.parse(s),l="success",o=!0}catch(c){l="parsererror",i=c}else{i=l,(!l||e)&&(l="error",0>e&&(e=0));try{a=p.parse(s)}catch(c){l="parsererror",i=c}}o?r&&r(a):"parseerror"===l?C.error("解析错误: "+s):(C.error("出错啦("+a.code+"): "+a.errorMessage),n&&n(a),a.errorTrace&&C.error(a.errorTrace)),d(m)}var u=o.getCookie("duoshuo_token");i=i||{},i.v=S.version,u?i.jwt=u:c.remote_auth&&(i.remote_auth=c.remote_auth);var h=f&&p&&p.parse;if(h){var m=new f,v=!!m&&"withCredentials"in m;if(v){var g;return m.open(e,a()+"/api/"+t+".json"+("GET"==e?"?"+o.param(i):""),!0),m.withCredentials=!0,m.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),m.send("GET"==e?null:o.param(i)),g=function(e,t){var a,i,r,n;try{if(g&&(t||4===m.readyState))if(g=s,t)4!==m.readyState&&m.abort();else{a=m.status,r=m.getAllResponseHeaders();try{n=m.responseText}catch(e){}try{i=m.statusText}catch(o){i=""}}}catch(d){t||l(-1,d)}n&&l(a,i,n,r)},void(4===m.readyState?g():m.onreadystatechange=g)}}"GET"!=e&&(i._method="POST");var y="cb_"+Math.round(1e6*Math.random());R[y]=function(e){switch(e.code){case 0:r&&r(e);break;default:n&&n(e),C.error("出错啦("+e.code+"): "+e.errorMessage),e.errorTrace&&C.error(e.errorTrace)}},i.callback="DUOSHUO.API['"+y+"']",o.injectScript(a()+"/api/"+t+".jsonp?"+o.param(i))},get:function(e,t,s,a){return this.ajax("GET",e,t,s,a)},post:function(e,t,s,a){return this.ajax("POST",e,t,s,a)}},M=S.ws={messages:[],send:function(s){if(!("WebSocket"in e&&p))return!1;var a=this;if(a.messages.push(p.stringify(s)),!a.webSocket){var r="https:"===t.location.protocol?"wss://ws.duoshuo.com:8202/":"ws://ws.duoshuo.com:8201/",n=a.webSocket=new WebSocket(r);n.onopen=function(){var e,t=1===n.readyState;if(t)for(;e=a.messages.shift();)n.send(e)},n.onmessage=function(e){try{var t=p.parse(e.data)}catch(s){return}switch(t.type){case"post":for(var a,r=0;r<S.pagelets.length;r++)a=S.pagelets[r],a.threadId==t.thread_id&&a.onMessage(t);break;case"notification":y.push(t),i()}},e.addEventListener("beforeunload",function(){n.close()})}a.webSocket.onopen()}};S.DOMAIN="duoshuo.com",S.STATIC_URL=g+"//static.duoshuo.com",S.REMOTE=g+"//duoshuo.com",S.version="16.3.18";var A={"default":"9b2a46a0",dark:"33f3a5ac",bluebox:"39a75d50",newhua:"706ba4eb",justflat:"9d72ec5a"},U={"embed.compat":"24f8ca3f",smilies:"921e8eda"},D={post:"发布",posting:"正在发布",settings:"设置",reply:"回复",like:"顶",repost:"转发",report:"举报","delete":"删除",reply_to:"回复 ",reposts:"转发",comments:"评论",floor:"楼",latest:"最新",earliest:"最早",hottest:"最热",share_to:"分享到:",leave_a_message:"说点什么吧…",no_comments_yet:"还没有评论，沙发等你来抢",repost_reason:"请输入转发理由",hot_posts_title:"被顶起来的评论",comments_zero:"暂无评论",comments_one:"1条评论",comments_multiple:"{num}条评论",reposts_zero:"暂无转发",reposts_one:"1条转发",reposts_multiple:"{num}条转发",weibo_reposts_zero:"暂无新浪微博",weibo_reposts_one:"1条新浪微博",weibo_reposts_multiple:"{num}条新浪微博",qqt_reposts_zero:"暂无腾讯微博",qqt_reposts_one:"1条腾讯微博",qqt_reposts_multiple:"{num}条腾讯微博"},z={get:function(e){return m?m[e]:void 0},save:function(e,t){if(m)try{m.removeItem(e),m[e]=p.stringify(t),m.removeItem(e+":timestamp"),m[e+":timestamp"]=Math.floor((new Date-b)/1e3)}catch(s){}}},W=S.loadRequire=function(t){if(t.visitor&&(!nt.data&&t.visitor.user_id&&e.Notification&&M.send({logged_user_id:t.visitor.user_id}),nt.reset(t.visitor)),t.site&&(rt.reset(t.site),z.save("ds_site_"+c.short_name,t.site)),!S.theme&&rt.data.theme&&n(rt.data.theme),t.lang&&(o.extend(D,t.lang),z.save("ds_lang_"+c.short_name,t.lang)),t.stylesheets)for(var s=0;s<t.stylesheets.length;s++)o.injectStylesheet(t.stylesheets[s]);if(t.nonce&&(S.nonce=t.nonce),t.style&&o.injectStyle((t.style||"")+S.compileStyle(c.component_style)),t.unread&&ot.reset(t.unread),t.warnings)for(var s=0;s<t.warnings.length;s++)C.warn(t.warnings[s])},B=0,H=S.Class=function(){};H.extend=function(e){function t(){!B&&this.init&&this.init.apply(this,arguments)}B=1;var s=new this;B=0;for(var a in e)s[a]=e[a];return t.prototype=s,t.prototype.constructor=t,t.extend=arguments.callee,t};var J=S.Event=H.extend({on:function(e,t){var a=this.handlers||(this.handlers={});return a[e]===s&&(a[e]=[]),a[e].push(t),this},trigger:function(e,t){var s=(this.handlers||(this.handlers={}))[e];if(s)for(var a=0;a<s.length&&s[a].call(this,t)!==!1;a++);return this}}),Q=S.Widget=J.extend({init:function(e,t){this.el=e,this.options=t||{},this.render()},render:function(){},reset:function(){},load:function(e){switch(e.code){case 0:W(e);var t=this.prepare(e);t.options=o.extend(this.options,e.options),this.onload(t);break;default:this.onError(e)}},onload:function(e){this.el.html(et[this.tmpl](e))},prepare:function(e){return e},onMessage:function(){},onError:function(e){C.error("出错啦("+e.code+"): "+e.errorMessage),e.errorTrace&&C.error(e.errorTrace)}}),V=S.Model=J.extend({init:function(e){this.data=e},reset:function(e){this.data=e,this.trigger("reset")},remove:function(e){this.data.splice(e,1),this.trigger("reset")},set:function(e,t){if(t===s)for(var a in e)this.data[a]=e[a];else this.data[e]=t;return this.trigger("reset"),this},toJSON:function(){return o.extend({},this.data)}}),$=V.extend({toJSON:function(){return o.extend({},this.data)}}),F=V.extend({toJSON:function(){var e=o.extend({},this.data);return e.theAuthor=ct[this.data.author_id]&&ct[this.data.author_id].data||this.data.author,e.parents=this.data.parents||[],e}}),Y=V.extend({toJSON:function(){return o.extend({},this.data)}}),G=function(e){this.model=e};G.prototype.set=function(e){for(var t in e)e[t]&&(this[t]?this[t].set(e[t]):this[t]=new this.model(e[t]))},G.prototype.get=function(e){for(var t=0,s=[];t<e.length;t++)s[t]=this[e[t]];return s},G.prototype.getJSON=function(e){for(var t=0,s=[];t<e.length;t++)this[e[t]]&&s.push(this[e[t]].toJSON());return s};var Z={userUrl:function(e){return e.url},avatarUrl:function(e){return e.avatar_url||rt.data.default_avatar_url},loginUrl:function(e,t){return t||(t={}),c.sso&&c.sso.login&&(t.sso=1,t.redirect_uri=c.sso.login),a()+"/login/"+e+"/"+x(t)},bindUrl:function(e){return a()+"/bind/"+e+"/"+x(c.sso&&c.sso.login?{sso:1,redirect_uri:c.sso.login}:null,T())},logoutUrl:function(){return a()+"/logout/"+x(c.sso&&c.sso.logout?{sso:1,redirect_uri:c.sso.logout}:null)}},X=["weixin","weibo","qq","renren"],K=["douban","kaixin","baidu","google"],et=S.templates={userAnchor:function(e){return e.url?'<a rel="nofollow author" target="_blank" href="'+_(e.url)+'">'+_(e.name)+"</a>":_(e.name)},avatarImg:function(e,t){return'<img src="'+_(Z.avatarUrl(e,t))+'" alt="'+_(e.name)+'"'+(t?' style="width:'+t+"px;height:"+t+'px"':"")+"/>"},avatar:function(e,t){var s=et.avatarImg(e,t),i=Z.userUrl(e);return i?'<a rel="nofollow author" target="_blank" href="'+_(i)+'" '+(e.user_id?" onclick=\"this.href='"+a()+"/user-url/?user_id="+e.user_id+"';\"":"")+' title="'+_(e.name)+'">'+s+"</a>":s},timeText:function(e){return e?'<span class="ds-time" datetime="'+e+'" title="'+S.fullTime(e)+'">'+S.elapsedTime(e)+"</span>":""},timeAnchor:function(e,t){return e?'<a href="'+t+'" target="_blank" rel="nofollow" class="ds-time" datetime="'+e+'" title="'+S.fullTime(e)+'">'+S.elapsedTime(e)+"</a>":""},serviceIcon:function(e,t){return'<a href="javascript:void(0)" class="ds-service-icon'+(t?"-grey":"")+" ds-"+e+'" data-service="'+e+'" title="'+S.sourceName[e]+'"></a>'},poweredBy:function(e){return'<p class="ds-powered-by"><a href="http://duoshuo.com" target="_blank" rel="nofollow">'+_(e)+"</a></p>"},indicator:w('<div id="ds-indicator"></div>'),waitingImg:w('<div id="ds-waiting"></div>'),loginItem:function(e,t){var s=Z[t?"bindUrl":"loginUrl"](e);return'<li>    <a href="'+s+'" rel="nofollow" class="ds-service-link ds-'+e+'">'+S.serviceNames[e]+(nt.data.social_uid[e]?' <span class="ds-icon ds-icon-ok"></span>':"")+"</a></li>"}},tt=function(e){var t=[];for(var s in e)t.push('<input type="hidden" name="'+s+'" value="'+_(e[s])+'" />');return t.join("\n")};et.commentList=function(e){var t="",s=e.list;if(s)for(var a,i=-1,r=s.length-1;r>i;)a=s[i+=1],t+='<li class="ds-comment',e.options.show_avatars&&(t+=" ds-show-avatars"),t+='" data-post-id="'+a.post_id+'">',e.options.show_avatars&&(t+='<div class="ds-avatar">'+et.avatar(a.theAuthor,e.options.avatar_size)+"</div>"),t+='<div class="ds-meta">'+et.userAnchor(a.theAuthor),e.options.show_time&&(t+=et.timeText(a.created_at)),t+="</div>",t+=e.options.show_title?'<div class="ds-thread-title">在 <a href="'+u(a.thread.url)+'#comments">'+u(a.thread.title)+'</a> 中评论</div><div class="ds-excerpt">'+a.message+"</div>":'<a class="ds-excerpt" title="'+a.thread.title+' 中的评论" href="'+u(a.thread.url)+'#comments">'+a.message+"</a>",t+="</li>";return t},et.ctxPost=function(e){var t="";return e.post&&(t+='<li class="ds-ctx-entry"',e.hidden&&(t+=' style="display:none"'),t+=' data-post-id="'+e.post.post_id+'"><div class="ds-avatar">'+et.avatar(e.post.theAuthor||e.post.author)+'</div><div class="ds-ctx-body"><div class="ds-ctx-head">'+et.userAnchor(e.post.theAuthor||e.post.author)+et.timeAnchor(e.post.created_at,e.post.url),e.index>=0&&(t+='<div class="ds-ctx-nth" title="'+S.fullTime(e.post.created_at)+'">'+(e.index+1)+D.floor+"</div>"),t+='</div><div class="ds-ctx-content">'+e.post.message,e.index>=0&&(t+='　　　　　　　<div class="ds-comment-actions',e.post.vote>0&&(t+=" ds-post-liked"),t+='">'+et.likePost(e.post)+'<a class="ds-post-repost" href="javascript:void(0);"><span class="ds-icon ds-icon-share"></span>'+D.repost+'</a><a class="ds-post-reply" href="javascript:void(0);"><span class="ds-icon ds-icon-reply"></span>'+D.reply+"</a></div>"),t+="</div></div></li>"),t},et["dialog-anonymous"]=function(e){var t='<h2>社交帐号登录</h2><div class="ds-icons-32">',s=e.services;if(s)for(var a,i=-1,r=s.length-1;r>i;)a=s[i+=1],t+='<a class="ds-'+a+'" href="'+Z.loginUrl(a)+'">'+S.sourceName[a]+"</a>";return t+="</div>",e.options.deny_anonymous||(t+='<h2>作为游客留言</h2><form><div class="ds-control-group"><input type="text" name="author_name" id="ds-dialog-name" value="'+u(nt.data.name)+'" required /><label for="ds-dialog-name">名字(必填)</label></div>',e.options.require_guest_email&&(t+='<div class="ds-control-group"><input type="email" name="author_email" id="ds-dialog-email" value="'+u(nt.data.email)+'" required /><label for="ds-dialog-email">邮箱(必填)</label></div>'),e.options.require_guest_url&&(t+='<div class="ds-control-group"><input type="url" name="author_url" id="ds-dialog-url" placeholder="http://" value="'+u(nt.data.url)+'" /><label for="ds-dialog-url">网址(可选)</label></div>'),t+='<button type="submit">发布</button></form>'),t},et["dialog-ask-for-auth"]=function(){var e='<h2>社交帐号登录</h2><ul class="ds-service-list">'+et.serviceList(X)+'</ul><ul class="ds-service-list ds-additional-services">'+et.serviceList(K)+"</ul>";return e},et["dialog-bind-more"]=function(){var e='<h2>绑定更多帐号</h2><ul class="ds-service-list">'+et.serviceBindList(X)+'</ul><ul class="ds-service-list ds-additional-services">'+et.serviceBindList(K)+'</ul><div style="clear:both"></div>';return e},et["dialog-qrcode"]=function(e){var t='<h2>微信扫一扫，分享到朋友圈</h2><div class="ds-share-qrcode" style="text-align:center;"><img src="'+e.qrcode_url+'" alt="'+e.url+'"></div>';return t},et["dialog-reposts"]=function(e){var t='<h2>转发到微博</h2><div class="ds-quote"><strong>@'+u(e.post.theAuthor.name)+"</strong>: "+e.post.message+"</div><form>"+tt({post_id:e.post.post_id})+'<div class="ds-textarea-wrapper"><textarea name="message" title="Ctrl+Enter快捷提交" placeholder="'+u(D.repost_reason)+'">'+u(e.repostMessage)+'</textarea><pre class="ds-hidden-text"></pre>';return t+='</div><div class="ds-actions">',e.service?t+=tt({"service[]":e.service}):(t+='<label><input type="checkbox" name="service[]" value="weibo"',nt.data.social_uid.weibo&&(t+=' checked="checked"'),t+=' /><span class="ds-service-icon ds-weibo"></span>新浪微博</label><label><input type="checkbox" name="service[]" value="qqt"',nt.data.social_uid.qq&&(t+=' checked="checked"'),t+=' /><span class="ds-service-icon ds-qqt"></span>腾讯微博</label>'),t+='<button type="submit">'+D.repost+"</button></div></form>"},et.dialog=function(e){var t='<div class="ds-dialog"><div class="ds-dialog-inner ds-rounded"><div class="ds-dialog-body">'+e+'</div><div class="ds-dialog-footer"><a href="http://duoshuo.com/" target="_blank" class="ds-logo"></a><span>社会化评论框</span></div><a class="ds-dialog-close" href="javascript:void(0)" title="关闭"></a></div></div>';return t},et.hotPosts=function(e){var t='<div class="ds-header ds-gradient-bg">'+u(D.hot_posts_title)+"</div><ul>",s=e.list;if(s)for(var a,i=-1,r=s.length-1;r>i;)a=s[i+=1],t+=et.post({post:a,options:e.options});return t+="</ul>"},et.likePost=function(e){var t='<a class="ds-post-likes" href="javascript:void(0);"><span class="ds-icon ds-icon-like"></span>'+D.like;return e.likes>0&&(t+="("+e.likes+")"),t+="</a>"},et.likeTooltip=function(e){var t='<div class="ds-like-tooltip ds-rounded"><p>很高兴你能喜欢，分享一下吧：</p><ul>';for(var s in e.services)t+='<li><a class="ds-share-to-'+s+" ds-service-link ds-"+s+'" href="'+a()+"/share-proxy/?"+o.param({service:s,thread_id:e.thread_id})+'">'+e.services[s]+"</a></li>";return t+='</ul><p class="ds-like-tooltip-footer"><a class="ds-like-tooltip-close">算了</a></p></div>'},et.loginButtons=function(){var e='<div class="ds-login-buttons"><p>社交帐号登录:</p><div class="ds-social-links"><ul class="ds-service-list">'+et.serviceList(X)+'<li><a class="ds-more-services" href="javascript:void(0)">更多»</a></li></ul><ul class="ds-service-list ds-additional-services">'+et.serviceList(K)+"</ul></div></div>";return e},et.loginWidget=function(e){var t='<div class="ds-icons-32">',s=e;if(s)for(var a,i=-1,r=s.length-1;r>i;)a=s[i+=1],t+='<a class="ds-'+a+'" href="'+Z.loginUrl(a)+'">'+S.sourceName[a]+"</a>";return t+="</div>"},et.meta=function(e){var t='<div class="ds-meta"><a href="javascript:void(0)" class="ds-like-thread-button ds-rounded';return e.user_vote>0&&(t+=" ds-thread-liked"),t+='"><span class="ds-icon ds-icon-heart"></span> <span class="ds-thread-like-text">',t+=e.user_vote>0?"已喜欢":"喜欢",t+='</span><span class="ds-thread-cancel-like">取消喜欢</span></a><span class="ds-like-panel"></span></div>'},et.notify=function(e){var t='<div id="ds-reset"><a class="ds-logo" href="http://duoshuo.com/" target="_blank" title="多说"></a><ul class="ds-notify-unread"><li';return e.comments||(t+=' style="display:none;"'),t+='><a data-type="unread-comments" href="javascript:void(0);">你有'+e.comments+"条新回复</a></li><li",e.notifications||(t+=' style="display:none;"'),t+='><a data-type="unread-notifications" href="javascript:void(0);">你有'+e.notifications+"条系统消息</a></li></ul></div>"},et.post=function(e){var t="",s=e.post,i=e.options,r=s.author;if(t+='<li class="ds-post" data-post-id="'+s.post_id+'"><div class="ds-post-self" data-post-id="'+s.post_id+'" data-thread-id="'+s.thread_id+'" data-root-id="'+s.root_id+'" data-source="'+s.source+'"><div class="ds-avatar"',r.user_id&&(t+=' data-user-id="'+r.user_id+'"'),t+=">"+et.avatar(r),S.sourceName[s.source]&&(t+=et.serviceIcon(s.source)),t+='</div><div class="ds-comment-body"><div class="ds-comment-header">',r.url?(t+='<a class="ds-user-name ds-highlight" data-qqt-account="'+(r.qqt_account||"")+'" href="'+u(r.url)+'" ',r.user_id&&(t+=" onclick=\"this.href='"+a()+"/user-url/?user_id="+r.user_id+"';\""),t+=' rel="nofollow" target="_blank"',r.user_id&&(t+=' data-user-id="'+r.user_id+'"'),t+=">"+u(r.name)+"</a>"):(t+='<span class="ds-user-name"',r.user_id&&(t+=' data-user-id="'+r.user_id+'"'),t+=' data-qqt-account="'+(r.qqt_account||"")+'">'+u(r.name)+"</span>"),t+="</div>",1==i.max_depth&&i.show_context&&s.parents.length){t+='<ol id="ds-ctx">';var n=lt.getJSON(s.parents);if(n)for(var o,d=-1,l=n.length-1;l>d;)o=n[d+=1],1==d&&s.parents.length>2&&(t+='<li class="ds-ctx-entry"><a href="javascript:void(0);" class="ds-expand">还有'+(s.parents.length-2)+"条评论</a></li>"),t+=et.ctxPost({post:o,index:d,hidden:d&&d<s.parents.length-1});t+="</ol>"}if(t+="<p>",s.parents.length>=i.max_depth&&(!i.show_context||i.max_depth>1)&&s.parent_id&&lt[s.parent_id]&&(t+='<a class="ds-comment-context" data-post-id="'+s.post_id+'" data-parent-id="'+s.parent_id+'">'+D.reply_to+u(lt[s.parent_id].toJSON().author.name)+": </a>"),t+=s.message+'</p><div class="ds-comment-footer ds-comment-actions',s.vote>0&&(t+=" ds-post-liked"),t+='">',t+=s.url?et.timeAnchor(s.created_at,s.url):et.timeText(s.created_at),"duoshuo"==s.source?(t+='<a class="ds-post-reply" href="javascript:void(0);"><span class="ds-icon ds-icon-reply"></span>'+D.reply+"</a>"+et.likePost(s)+'<a class="ds-post-repost" href="javascript:void(0);"><span class="ds-icon ds-icon-share"></span>'+D.repost+'</a><a class="ds-post-report" href="javascript:void(0);"><span class="ds-icon ds-icon-report"></span>'+D.report+"</a>",s.privileges["delete"]&&(t+='<a class="ds-post-delete" href="javascript:void(0);"><span class="ds-icon ds-icon-delete"></span>'+D["delete"]+"</a>")):("qqt"==s.source||"weibo"==s.source)&&(t+='<a class="ds-weibo-comments" href="javascript:void(0);">'+D.comments,s.type.match(/\-comment$/)||(t+='(<span class="ds-count">'+s.comments+"</span>)"),t+='</a><a class="ds-weibo-reposts" href="javascript:void(0);">'+D.reposts,s.type.match(/\-comment$/)||(t+='(<span class="ds-count">'+s.reposts+"</span>)"),t+="</a>"),t+="</div></div></div>",i.max_depth>1&&(s.childrenArray||s.children)&&"weibo"!=s.source&&"qqt"!=s.source){t+='<ul class="ds-children">';var c=lt.getJSON(s.childrenArray||s.children);if(c)for(var s,d=-1,p=c.length-1;p>d;)s=c[d+=1],t+=et.post({post:s,options:i});t+="</ul>"}return t+="</li>"},et.postListHead=function(e){var t='<div class="ds-comments-info"><div class="ds-sort"><a class="ds-order-desc">'+D.latest+'</a><a class="ds-order-asc">'+D.earliest+'</a><a class="ds-order-hot">'+D.hottest+'</a></div><ul class="ds-comments-tabs"><li class="ds-tab"><a class="ds-comments-tab-duoshuo ds-current" href="javascript:void(0);"></a></li>';return e.options.show_reposts&&e.thread.reposts&&(t+='<li class="ds-tab"><a class="ds-comments-tab-repost" href="javascript:void(0);"></a></li>'),t+=" ",e.options.show_weibo&&e.thread.weibo_reposts&&(t+='<li class="ds-tab"><a class="ds-comments-tab-weibo" href="javascript:void(0);"></a></li>'),t+=" ",e.options.show_qqt&&e.thread.qqt_reposts&&(t+='<li class="ds-tab"><a class="ds-comments-tab-qqt" href="javascript:void(0);"></a></li>'),t+="</ul></div>"},et.recentVisitors=function(e){var t="",s=e.response;if(s)for(var a,i=-1,r=s.length-1;r>i;)a=s[i+=1],t+='<div class="ds-avatar">'+et.avatar(a,e.options.avatar_size)+"</div>";return t},et["related-read"]=function(e){var t="";if(e&&e.length){t+='<article class="ds-reads-expand"><div class="ds-header">头条推荐</div><section> ';var s=e;if(s)for(var a,i=-1,r=s.length-1;r>i;){if(a=s[i+=1],t+=' <a href="'+a.url+'" class="ds-reads-item"> ',3==a.imgs.length){t+=" <h2>"+a.title+'</h2> <div class="ds-reads-pics"> <ul> ';var n=a.imgs;if(n)for(var o,d=-1,l=n.length-1;l>d;)o=n[d+=1],t+=' <li> <div class="ds-reads-dumb"></div> <div class="ds-reads-pic-wrap" style="background-image:url('+o+');"></div> </li> ';t+=' </ul> </div> <div class="ds-reads-info"> ',1==a.type&&(t+=' <span class="ds-reads-app-special">打开头条阅读</span> '),t+=' <span class="ds-reads-date" data-date="'+a.timeStamp+'"></span> </div> '}else t+=' <div class="ds-reads-desc ',a.imgs.length||(t+="ds-reads-only"),t+='"> <div class="ds-reads-title">'+a.title+'</div> <div class="ds-reads-info"> ',1==a.type&&(t+=' <span class="ds-reads-app-special">打开头条阅读</span> '),t+=' <span class="ds-reads-date" data-date="'+a.timeStamp+'"></span> </div> </div> ',a.imgs.length&&(t+=' <div class="ds-reads-pic-right"> <div class="ds-reads-dumb"></div> <div class="ds-reads-pic-wrap" style="background-image:url('+a.imgs[0]+');"> ',a.hasVideo&&(t+=' <div class="ds-reads-vid-info"><span>'+a.videoDuration+"</span></div> "),t+=" </div> </div> "),t+=" ";t+=" </a> "}t+="</section></article>"}return t},et.replybox=function(e){var t='<div class="ds-replybox"><a class="ds-avatar"';if(t+=r()?' href="javascript:void(0);" onclick="return false"':' href="'+S.REMOTE+"/settings/avatar/"+x(T())+'" target="_blank" title="设置头像"',t+=">"+et.avatarImg(nt.data)+'</a><form method="post">'+tt(e.params)+'<div class="ds-textarea-wrapper ds-rounded-top"><textarea name="message" title="Ctrl+Enter快捷提交" placeholder="'+u(D.leave_a_message)+'"></textarea><pre class="ds-hidden-text"></pre>',t+="</div>",t+='<div class="ds-post-toolbar"><div class="ds-post-options ds-gradient-bg"><span class="ds-sync">',!r()&&nt.data.repostOptions){t+='<input id="ds-sync-checkbox',e.inline&&(t+="-inline"),t+='" type="checkbox" name="repost" ',e.checked&&(t+='checked="checked" '),t+='value="'+e.repostArray.join(",")+'"> <label for="ds-sync-checkbox',e.inline&&(t+="-inline"),t+='">'+D.share_to+"</label>";for(var s in nt.data.repostOptions)t+=et.serviceIcon(s,!nt.data.repostOptions[s])}return t+="</span>",t+="</div>",t+='<button class="ds-post-button" type="submit">'+u(D.post)+'</button><div class="ds-toolbar-buttons">',e.options.use_smilies&&(t+='<a class="ds-toolbar-button ds-add-emote" title="插入表情"></a>'),e.options.use_images&&e.options.parse_html_enabled&&(t+='<a class="ds-toolbar-button ds-add-image" title="插入图片"></a>'),t+="</div></div>",t+="</form></div>"},et.serviceBindList=function(e){var t="",s=e;if(s)for(var a,i=-1,r=s.length-1;r>i;)a=s[i+=1],t+='<li><a href="'+Z.bindUrl(a)+'" rel="nofollow" class="ds-service-link ds-'+a+'">'+S.serviceNames[a],nt.data.social_uid[a]&&(t+=' <span class="ds-icon ds-icon-ok"></span>'),t+="</a></li>";return t},et.serviceList=function(e){var t="",s=e;if(s)for(var a,i=-1,r=s.length-1;r>i;)a=s[i+=1],t+='<li><a href="'+Z.loginUrl(a)+'" rel="nofollow" class="ds-service-link ds-'+a+'">'+S.serviceNames[a]+"</a></li>";return t},et.shareWidget=function(e){var t='<div class="ds-share-icons"> <div class="ds-share-icons-inner"> <ul class="ds-share-icons-16"> ',s=e.services;if(s)for(var a,i=-1,r=s.length-1;r>i;)a=s[i+=1],t+=' <li> <a class="ds-'+a+'" href="javascript:void(0);" data-service="'+a+'">'+S.sourceName[a]+"</a> </li> ";return t+=' </ul> </div> <div class="ds-share-icons-footer">'+e.copyright+"</div></div>"},et.smiliesTooltip=function(e){var t='<div id="ds-smilies-tooltip"><ul class="ds-smilies-tabs">';for(var s in e)t+="<li><a>"+s+"</a></li>";return t+='</ul><div class="ds-smilies-container"></div></div>'},et.toolbar=function(){var e='<div class="ds-toolbar"><div class="ds-account-control"><span class="ds-icon ds-icon-settings"></span> <span>帐号管理</span><ul><li><a class="ds-bind-more" href="javascript:void(0);" style="border-top: none">绑定更多</a></li><li><a target="_blank" href="'+S.REMOTE+"/settings/"+x(T())+'">'+u(D.settings)+'</a></li><li><a rel="nofollow" href="'+Z.logoutUrl()+'" style="border-bottom: none">登出</a></li></ul></div><div class="ds-visitor">';return e+=nt.data.url?'<a class="ds-visitor-name" href="'+u(nt.data.url)+'" target="_blank">'+u(nt.data.name)+"</a>":'<span class="ds-visitor-name">'+u(nt.data.name)+"</span>",e+='<a class="ds-unread-comments-count" href="javascript:void(0);" title="新回复"></a></div></div>'},et.topThreads=function(e){var t="",s=e.response;if(s)for(var a,i=-1,r=s.length-1;r>i;)a=s[i+=1],t+='<li><a target="_blank" href="'+u(a.url)+'" title="'+u(a.title)+'">'+u(a.title)+"</a></li>";return t},et.topUsers=function(e){var t="",s=e.response;if(s)for(var a,i=-1,r=s.length-1;r>i;)a=s[i+=1],t+='<div class="ds-avatar">'+et.avatar(a,e.options.avatar_size)+"<h4>"+u(a.name)+"</h4></div>";return t},et.userInfo=function(e){var t='<a href="'+u(e.url)+'" onclick="this.href=\''+a()+"/user-url/?user_id="+e.user_id+'\';" class="ds-avatar" target="_blank">'+et.avatarImg(e)+'</a><a href="'+u(e.url)+'" onclick="this.href=\''+a()+"/user-url/?user_id="+e.user_id+'\';" class="ds-user-name ds-highlight" target="_blank">'+u(e.name)+"</a>";for(var s in e.social_uid)t+='<a href="'+S.REMOTE+"/user-proxy/"+s+"/"+e.social_uid[s]+'/" target="_blank" class="ds-service-icon ds-'+s+'" title="'+S.sourceName[s]+'"></a>';return t+='<p class="ds-user-card-meta"><a href="'+S.REMOTE+"/profile/"+e.user_id+'/" target="_blank"><span class="ds-highlight">'+e.comments+"</span>条评论</a></p>",e.description&&(t+='<p class="ds-user-description">'+u(e.description)+"</p>"),t};var st=S.Views={},at=(S.Callbacks={},S.pagelets=[]),it=S.events=new J,rt=S.site=new V,nt=S.visitor=new $,ot=S.unread=new V,dt=S.threadPool=new G(Y),lt=S.postPool=new G(F),ct=S.userPool=new G($);it.on("queryDefined",function(){var e=c.short_name;if(c.theme&&n(c.theme),m){var t=m["ds_site_"+e],s=m["ds_lang_"+e];t&&rt.reset(p.parse(t)),s&&o.extend(D,p.parse(s))}}),q(),S.require("embed.compat",function(){function i(e){e.stopPropagation()}function n(e){(e.ctrlKey&&13==e.which||10==e.which)&&H(this.form).trigger("submit")}function d(){var e=H(this);e.height(Math.max(54,e.next(".ds-hidden-text").text(this.value).height()+27))}function l(){if(P.authInWin){var e=this.href.match(/\/(login|bind)\/(\w+)\//i);if(e&&S.serviceNames[e[2]])return!b(e[2],this.href)
}}function u(){var e,s,a,i,r,n=this,o=0,d=0;t.selection&&(s=t.selection.createRange(),s&&s.parentElement()==n&&(i=n.value.length,e=n.value.replace(/\r\n/g,"\n"),a=n.createTextRange(),a.moveToBookmark(s.getBookmark()),r=n.createTextRange(),r.collapse(!1),a.compareEndPoints("StartToEnd",r)>-1?o=d=i:(o=-a.moveStart("character",-i),o+=e.slice(0,o).split("\n").length-1,a.compareEndPoints("EndToEnd",r)>-1?d=i:(d=-a.moveEnd("character",-i),d+=e.slice(0,d).split("\n").length-1)))),H(n).data("ds-range-start",o).data("ds-range-end",d)}function p(e){return P.touch&&e.addClass("ds-touch"),o.cssProperty("transition")||e.addClass("ds-no-transition"),P.ie6&&e.addClass("ds-ie6"),P.opacity||e.addClass("ds-no-opacity"),e}function f(e){if(!P.placeholder){var t=e.attr("placeholder");e.val(t).focus(function(){this.value===t&&(this.value="")}).blur(function(){""===this.value&&(this.value=t)})}return e}function g(e){if("http://duoshuo.com"===e.origin)switch(e.data.type){case"login":h.href=e.data.redirectUrl}}function b(t,s){var a={weibo:[760,600],renren:[420,322],qq:[504,445],weixin:[450,550],google:[600,440]}[t]||[550,400];return e.open(s+(-1==s.indexOf("?")?"?":"&")+o.param({origin:h.origin||"http://"+h.host}),"_blank","width="+a[0]+",height="+a[1]+",toolbar=no,menubar=no,location=yes")}function y(e){var t=Z[r()?"loginUrl":"bindUrl"](e);P.authInWin&&b(e,t)||(h.href=t)}function w(){var e=E(et["dialog-ask-for-auth"]({})).el.find(".ds-dialog").css("width","300px");e.find("a.ds-service-link").click(l)}function x(e,t,s,a){function i(){function e(e){if(s&&a){var t=s.options,i=A(s.postList.el,e.response[a],t);"asc"==t.order==("top"==t.formPosition)&&S.scrollTo(i);var r=s.el.find(".ds-comments-tab-"+a+" span.ds-highlight");r.html(parseInt(r.html())+1)}}return a||l.find("[type=checkbox]:checked")[0]?(R.post("posts/repost",S.toJSON(l),e),o.close(),!1):(alert("还没有选发布到哪儿呢"),!1)}function r(){var e=this.value;return this.checked&&!nt.data.social_uid["qqt"==e?"qq":e]?void y(e):void 0}var o=E(et["dialog-reposts"]({post:e.toJSON(),repostMessage:t,service:a})),l=o.el.find("form");return l.submit(i),l.find(".ds-actions [type=checkbox]").change(r),f(l.find("textarea")).keyup(n).keyup(d).focus(),!1}function T(e){var t={"unread-comments":{title:"新留言及回复",apiUrl:"users/unreadComments",tmpl:function(e){return e.thread?'<li data-thread-id="'+e.thread.thread_id+'">'+H.map(e.authors,et.userAnchor).join("、")+' 在 <a class="ds-read" href="'+e.thread.url+'#comments" target="_blank">'+_(e.thread.title||"无标题")+'</a> 中回复了你 <a class="ds-delete ds-read" title="知道了" href="javascript:void(0)">知道了</a></li>':""},read:function(e){var t=e.attr("data-thread-id");R.post("threads/read",{thread_id:t}),ot.data.comments--}},"unread-notifications":{title:"系统消息",apiUrl:"users/unreadNotifications",tmpl:function(e){return'<li data-notification-id="'+e.notification_id+'" data-notification-type="'+e.type+'">'+e.content+' <a class="ds-delete ds-read" title="知道了" href="javascript:void(0)">知道了</a></li>'},read:function(e){var t=e.attr("data-notification-id");R.post("notifications/read",{notification_id:t}),ot.data.notifications--}}}[e],s=E("<h2>"+t.title+'</h2><ul class="ds-unread-list"></ul>');s.on("close",S.resetNotify);var a=s.el.find(".ds-unread-list").delegate(".ds-delete","click",function(){return H(this).parent().remove(),0===a.children().length&&s.close(),!1}).delegate(".ds-read","click",function(){t.read(H(this).parent())});H("#ds-notify").hide(),R.get(t.apiUrl,{},function(e){s.el.find(".ds-unread-list").html(H.map(e.response,t.tmpl).join("\n"))})}function N(){bubbleOutTimer&&(clearTimeout(bubbleOutTimer),bubbleOutTimer=0)}function I(){bubbleOutTimer=setTimeout(function(){bubbleOutTimer=0,X.detach()},400)}function A(e,t,s){return e.find(".ds-post[data-post-id="+t.data.post_id+"]")[0]?void 0:(e.find(".ds-post-placeholder").remove(),H(et.post({post:t.toJSON(),options:s})).hide()["asc"==s.order?"appendTo":"prependTo"](e).slideDown(function(){}))}function U(e,t){function s(){if(r())return w(),!1;var e=H(this).parent(),t=e.hasClass("ds-post-liked"),s=H(this).html().match(/\((\d+)\)/),a=(s?parseInt(s[1]):0)+(t?-1:1);return R.post("posts/vote",{post_id:e.closest(".ds-ctx-entry, .ds-post-self").attr("data-post-id"),vote:t?0:1}),H(this).html(H(this).html().replace(/\(\d+\)/,"")+(a?"("+a+")":"")),e[t?"removeClass":"addClass"]("ds-post-liked"),!1}function a(){var e=H(this).closest(".ds-post-self"),t=lt[e.attr("data-post-id")];return x(t,""),!1}function i(){if(!confirm("确定要删除这条评论吗？"))return!1;var t=H(this).closest(".ds-post-self");return R.post("posts/remove",{post_id:t.attr("data-post-id")}),t.parent().fadeOut(200,function(){e.data.comments--,e.updateCounter("duoshuo"),H(this).remove()}),!1}function n(){if(!confirm("确定要举报这条评论吗？"))return!1;var e=H(this).closest(".ds-post-self");return R.post("posts/report",{post_id:e.attr("data-post-id")}),alert("感谢您的反馈！"),!1}function o(){var s=H(this),a=s.closest(".ds-comment-actions");if(a.hasClass("ds-reply-active"))h.el.fadeOut(200,function(){H(this).detach()}),a.removeClass("ds-reply-active");else{var i=s.closest(".ds-ctx-entry, .ds-post-self");h?h.actionsBar.removeClass("ds-reply-active"):(h=new st.Replybox(e),h.render(!0).el.addClass("ds-inline-replybox").detach()),h.el.find("[name=parent_id]").val(i.attr("data-post-id")),h.el.show().appendTo(s.closest(".ds-ctx-body, .ds-comment-body")).find("textarea").focus(),h.actionsBar=a.addClass("ds-reply-active"),t.max_depth<=1?h.postList=e.postList.el:(h.postList=i.siblings(".ds-children"),h.postList[0]||(h.postList=H('<ul class="ds-children"></ul>').insertAfter(i)))}return!1}function d(){function e(e){W(e),i.append(H.map(e.response,function(e){return et.post({post:e,options:t})}).join(""))}{var s=H(this).closest(".ds-post-self"),a=s.attr("data-post-id");s.data("source")}if(0!=s.attr("data-root-id"))return!1;var i=s.siblings(".ds-children");return i[0]?(i.remove(),!1):(i=H('<ul class="ds-children"></ul>').insertAfter(s),R.get("posts/listComments",B({post_id:a}),e),!1)}function l(){var t=H(this).closest(".ds-post-self"),s=lt[t.attr("data-post-id")],a=s.data.source;if(!nt.data.social_uid["qqt"==a?"qq":a])return void y(a);var i=s.data.root_id,r="0"!=i?lt[i]:s,n="";if("0"!=i){var o=prepatePost(s.data).theAuthor;n=("weibo"==a?"//@"+o.name:"|| @"+o.qqt_account)+":"+s.data.message}return x(r,n,e,a),!1}function c(){var e=H(this).parent();return e.siblings().show(),e.remove(),!1}function u(){function t(){function t(e){var t=e.response;ct[c]?ct[c].set(t):ct[c]=new $(t),X.owner==s&&K.html(et.userInfo(t))}tt=0,X.owner=s,N();var i=a.offset(),r=e.el.offset(),n=a.innerWidth()/2,o=e.el.innerHeight()-(i.top-r.top)+6,d=i.left-r.left-35+(n>35?35:n);try{if(a.hasClass("ds-comment-context"))K.attr("id","ds-ctx-bubble").attr("data-post-id",a.attr("data-post-id")).html('<ul id="ds-ctx">'+et.ctxPost({post:lt[a.attr("data-parent-id")].toJSON()})+'</ul><div class="ds-bubble-footer"><a class="ds-ctx-open" href="javascript:void(0);">查看对话</a></div>');else if(a.hasClass("ds-avatar")||a.hasClass("ds-user-name")){var l={},c=l.user_id=a.attr("data-user-id");if(!c)throw"no info";K.attr("id","ds-user-card").attr("data-user-id",c).empty(),ct[c]?K.html(et.userInfo(ct[c].data)):R.get("users/profile",B(l),t)}X.css({bottom:o,left:d}).appendTo(e.innerEl)}catch(u){X.detach()}}var s=this;if(bubbleOutTimer&&X.owner==s)return clearTimeout(bubbleOutTimer),void(bubbleOutTimer=0);var a=H(s);tt=setTimeout(t,200)}function p(){tt?(clearTimeout(tt),tt=0):bubbleOutTimer||I()}var h;this.delegate("a.ds-post-likes","click",s).delegate("a.ds-post-repost","click",a).delegate("a.ds-post-delete","click",i).delegate("a.ds-post-report","click",n).delegate("a.ds-post-reply","click",o).delegate("a.ds-weibo-comments","click",d).delegate("a.ds-weibo-reposts","click",l).delegate("a.ds-expand","click",c),P.touch||this.delegate("a.ds-comment-context, .ds-avatar, .ds-user-name","mouseenter",u).delegate("a.ds-comment-context, .ds-avatar, .ds-user-name","mouseleave",p)}function B(e){var s={require:"site,visitor,nonce,lang"+(it++?"":",unread,log,extraCss"),site_ims:z.get("ds_site_"+c.short_name+":timestamp"),lang_ims:z.get("ds_lang_"+c.short_name+":timestamp"),referer:t.referrer};c.stylePatch&&(s.style_patch=c.stylePatch);for(var a in s)s[a]&&(!P.ie6||encodeURIComponent(s[a]).length<200)&&(e[a]=s[a]);return e}var H=S.jQuery,V=H(e),G=H(t);e.postMessage&&(e.addEventListener?e.addEventListener("message",g,!1):e.attachEvent&&e.attachEvent("onmessage",g)),S.scrollTo=function(e){var t=e.offset().top;(t<V.scrollTop()||t>V.scrollTop()+V.height())&&H("html, body").animate({scrollTop:t-40},200,"swing")},S.toJSON=function(e){var t=/\r?\n/g,s=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,a=/^(?:select|textarea)/i,i=e.map(function(){return this.elements?H.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||a.test(this.nodeName)||s.test(this.type))}).map(function(e,s){var a=H(this).val();return null==a?null:H.isArray(a)?H.map(a,function(e){return{name:s.name,value:e.replace(t,"\r\n")}}):{name:s.name,value:a.replace(t,"\r\n")}}).toArray(),r={};return H.each(i,function(){r[this.name]=this.value}),r},S.resetNotify=function(){var e=H("#ds-notify"),s=ot.data;e[0]||(e=H('<div id="ds-notify"></div>').css({hidden:{display:"none"},"top-right":{top:"24px",right:"24px"},"bottom-right":{bottom:"24px",right:"24px"}}[rt.data.notify_position]).delegate(".ds-notify-unread a","click",function(){return T(H(this).data("type")),!1}).appendTo(t.body)),e.html(et.notify(s))[!s.comments&&!s.notifications||"hidden"===rt.data.notify_position||H(".ds-dialog")[0]?"hide":"show"]()},ot.on("reset",S.resetNotify),st.Replybox=function(e){this.embedThread=e},st.Replybox.prototype={render:function(e){function s(e){e.data("submitting",!0),e.find(".ds-post-button").addClass("ds-waiting").html(D.posting)[0].disabled=!0}function a(e){e.data("submitting",!1),e.find(".ds-post-button").removeClass("ds-waiting").html(D.post)[0].disabled=!1}var i=this,o=i.embedThread,c=o.options,p=function(){S.require("smilies",function(){})},h={thread:o,options:c,inline:e,params:{thread_id:o.threadId,parent_id:"",nonce:S.nonce},repostArray:[],checked:0};for(var v in nt.data.repostOptions)nt.data.repostOptions[v]&&(h.repostArray.push(v),h.checked=1);var g=i.el=H(et.replybox(h)).click(p),b=g.find("form"),y=b.find("input[type=checkbox]")[0],_=b.find("a.ds-service-icon, a.ds-service-icon-grey"),k=f(b.find("textarea")).focus(p).keyup(n).keyup(d).bind("focus mousedown mouseup keyup",u),w=g.find(".ds-add-emote").click(function(e){var s=S.smiliesTooltip;return w.toggleClass("ds-expanded").hasClass("ds-expanded")?(s||(s=S.smiliesTooltip=new st.SmiliesTooltip,s.render(),S.require("smilies",function(){s.reset("微博-默认")})),s.replybox=i,s.el.appendTo(t.body).css({top:i.el.offset().top+i.el.outerHeight()+4+"px",left:i.el.find(".ds-textarea-wrapper").offset().left+"px"}),H(t.body).click(x)):x(e),!1}),x=(g.find(".ds-add-image").click(function(e){var s=k[0],a=s.value,i="请输入图片地址",r='<img src="'+i+'" />';if(t.selection){s.value=a.substring(0,k.data("ds-range-start"))+r+a.substring(k.data("ds-range-end"),a.length),s.value=s.value.replace("说点什么吧 ...",""),s.focus();var n=t.selection.createRange();n.collapse(),n.findText(i),n.select()}else{s.value=a.substring(0,s.selectionStart)+r+a.substring(s.selectionEnd);var o=s.value.search(i);s.setSelectionRange(o,o+i.length),s.focus()}e.preventDefault()}),i.hideSmilies=function(){w.removeClass("ds-expanded"),S.smiliesTooltip.el.detach(),H(t.body).unbind("click",x)}),T=function(e,t){var s=E(et["dialog-anonymous"]({services:["weixin","weibo","qq","renren","kaixin","douban"],options:c})),a=s.el.find(".ds-dialog").css("width","320px");if(a.find(".ds-icons-32 a").click(l),!c.deny_anonymous){var i=s.el.find("form");i.submit(function(){var e=i.find("input[name=author_email]").val();return!e&&!c.require_guest_email||e.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)?(t(S.toJSON(i)),s.close(),!1):(alert("请输入一个有效的email地址."),!1)}),i.find("input[name=author_name]")[0].focus()}};c.deny_anonymous&&k.focus(function(){if(r()){T(b,q);var e=function(t){t.stopPropagation(),k.unbind("click",e)};k.click(e)}return!1});var q=function(e){s(b),R.post("posts/create",H.extend(S.toJSON(b),e),function(e){var t=lt[e.response.post_id]=new F(e.response),s=A(i.postList,t,c);if("asc"==c.order==("top"==c.formPosition)&&S.scrollTo(s),o.data.comments++,o.updateCounter("duoshuo"),k.val("").trigger("keyup"),a(b),g.hasClass("ds-inline-replybox")&&(g.detach(),i.actionsBar.removeClass("ds-reply-active")),m)try{m.removeItem("ds_draft_"+o.threadId)}catch(r){}},function(e){a(b),alert(e.errorMessage)})};b.submit(function(){if(b.data("submitting"))return!1;var e=H.trim(b[0].message.value);return""==e||!P.placeholder&&e==k.attr("placeholder")?(alert("您还没写内容呢"),!1):(r()?T(b,q):q(),!1)});var C=function(e){return H(e).hasClass("ds-service-icon-grey")?null:H(e).attr("data-service")};if(_.click(function(){return H(this).toggleClass("ds-service-icon-grey").toggleClass("ds-service-icon"),y.value=H.map(_,C).join(","),y.checked=""!=y.value,!1}),H(y).change(function(){var e=this.checked;_[e?"removeClass":"addClass"]("ds-service-icon-grey")[e?"addClass":"removeClass"]("ds-service-icon"),this.value=H.map(_,C).join(",")}),!e&&m){var j="ds_draft_"+o.threadId;k.bind("focus blur keyup",function(e){var t=H(e.currentTarget).val();try{m[j]=t}catch(e){}}),m[j]&&k.val(m[j])}return this}},st.Dialog=J.extend({init:function(e,t){(this.el=H("#ds-wrapper"))[0]||(this.el=p(H('<div id="ds-wrapper"></div>'))),this.options=H.extend({width:600},t),e!==s&&H(e).attr("id","ds-reset").appendTo(this.el)},open:function(){function e(e){return 27==e.which?(a.close(),!1):void 0}function s(){return a.close(),!1}var a=this;return a.el.hide().appendTo(t.body).fadeIn(200),P.ie6&&a.el.css("top",V.scrollTop()+100),a.el.show().find(".ds-dialog").delegate("a.ds-dialog-close","click",function(){return a.close(),!1}).click(i),G.keydown(e),H(t.body).click(s),a.close=function(){G.unbind("keydown",e),H(t.body).unbind("click",s),a.el.fadeOut(200,function(){H(this).remove()}),a.trigger("close")},a}}),et.likePanel=function(e){return e.likes?'<span class="ds-highlight">'+e.likes+"</span> 人喜欢":""},st.Meta=function(e){this.embedThread=e},st.Meta.prototype={render:function(){function a(a){function r(e){o.set(e),n.resetLikePanel()}function c(){n.tooltip.detach(),H(t.body).unbind("click",c)}function u(t){switch(this.className){case"ds-like-tooltip-close":c(t);break;default:if(!e.open(this.href,"_blank","height=500,width=600,top=0,left=0,toolbar=no,menubar=no,resizable=yes,location=yes,status=no"))return}return!1}var p=l.hasClass("ds-thread-liked");if(R.post("threads/vote",{thread_id:n.embedThread.threadId,vote:p?0:1},r),l.toggleClass("ds-thread-liked"),l.find(".ds-thread-like-text").text(p?"喜欢":"已喜欢"),p)return n.tooltip&&c(a),!1;if(n.tooltip===s){var h=et.likeTooltip({services:{qzone:"QQ空间",weibo:"新浪微博",qqt:"腾讯微博",renren:"人人网",kaixin:"开心网",douban:"豆瓣网",baidu:"百度搜藏"},thread_id:o.data.thread_id});n.tooltip=H(h).click(i).delegate("a","click",u)}var f={};return f.left=0,f.top=d.position().top+d.outerHeight()-4+"px",n.tooltip.appendTo(n.embedThread.innerEl).css(f),H(t.body).click(c),!1}var n=this,o=n.embedThread.model,d=n.el=H(et.meta(o.toJSON())),l=d.find(".ds-like-thread-button");return l.click(a),n.resetLikePanel(),r()&&d.hide(),n},resetLikePanel:function(){this.el.find(".ds-like-panel").html(et.likePanel(this.embedThread.model.toJSON()))}},st.PostListHead=function(e){this.embedThread=e},st.PostListHead.prototype={render:function(){function e(e){r.find("a.ds-current").removeClass("ds-current"),a.params.page=1;var t=e.currentTarget;switch(t.className){case"ds-comments-tab-duoshuo":a.params.source="duoshuo",s.replybox.el.show();break;case"ds-comments-tab-repost":a.params.source="repost",s.replybox.el.hide();break;case"ds-comments-tab-weibo":a.params.source="weibo",s.replybox.el.hide();break;case"ds-comments-tab-qqt":a.params.source="qqt",s.replybox.el.hide()}return H(t).addClass("ds-current"),a.refetch(),!1}function t(){return n.find("a.ds-current").removeClass("ds-current"),a.params.order=s.options.order=this.className.replace("ds-order-",""),a.params.page=1,a.refetch(),H(this).addClass("ds-current"),!1}var s=this.embedThread,a=s.postList,i=this.el=H(et.postListHead({thread:s.model.toJSON(),options:s.options})),r=i.find("ul.ds-comments-tabs");r.delegate(".ds-tab a","click",e);var n=i.find(".ds-sort");return n.delegate("a","click",t),n.find(".ds-order-"+a.params.order).addClass("ds-current"),this}},st.Paginator=function(e){function t(){return i.params.page=parseInt(this.innerHTML),i.refetch(),a.find(".ds-current").removeClass("ds-current"),H(this).addClass("ds-current"),!1}e=e||{};var s=this,a=s.el=e.el||H('<div class="ds-paginator"></div>'),i=s.collection=e.collection;a.delegate("a","click",t)},st.Paginator.prototype={reset:function(e){function t(e){i.push('<a data-page="'+e+'" href="javascript:void(0);">'+e+"</a>")}var s,a=this.collection.params.page||1,i=[];if(a>1)for(t(1),s=a>4?a-2:2,s>2&&i.push('<span class="page-break">...</span>');a>s;s++)t(s);if(i.push('<a data-page="'+a+'" href="javascript:void(0);" class="ds-current">'+a+"</a>"),a<e.pages){for(s=a+1;a+4>=s&&s<e.pages;s++)t(s);s<e.pages&&i.push('<span class="page-break">...</span>'),t(e.pages)}this.el.html('<div class="ds-border"></div>'+i.join(" "))[e.pages>1?"show":"hide"]()}},S.addSmilies=function(e,t){var s=S.smiliesTooltip;s&&s.el.find("ul.ds-smilies-tabs").append("<li><a>"+e+"</a></li>"),S.smilies[e]=t},st.SmiliesTooltip=function(){},st.SmiliesTooltip.prototype={render:function(){function e(){var e=s.replybox,a=e.el.find("textarea"),i=a[0],r=i.value;if(t.selection){i.value=r.substring(0,a.data("ds-range-start"))+this.title+r.substring(a.data("ds-range-end"),r.length),i.value=i.value.replace(D.leave_a_message,""),i.focus();var n=t.selection.createRange();n.moveStart("character",a.data("ds-range-start")+this.title.length),n.collapse(),n.select()}else{var o=i.selectionStart+this.title.length;i.value=r.substring(0,i.selectionStart)+this.title+r.substring(i.selectionEnd),i.setSelectionRange(o,o)}e.hideSmilies(),i.focus()}var s=this,a=s.el=H(et.smiliesTooltip(L));return a.click(i).find("ul.ds-smilies-tabs").delegate("a","click",function(){s.reset(this.innerHTML)}),a.find(".ds-smilies-container").delegate("img","click",e),this},reset:function(e){function t(t,s){var i=0===e.indexOf("微博")?"http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/"+s.replace("_org","_thumb"):S.STATIC_URL+"/images/smilies/"+s;"WordPress"===e&&(t=" "+t+" "),a+='<li><img src="'+i+'" title="'+_(t)+'" /></li>'}var s=this.el.find("ul.ds-smilies-tabs");s.find("a.ds-current").removeClass("ds-current"),s.find("a").filter(function(){return this.innerHTML==e}).addClass("ds-current");var a="<ul>";return H.each(L[e],t),a+="</ul>",this.el.find(".ds-smilies-container").html(a),this}},et.postPlaceholder=function(){return['<li class="ds-post ds-post-placeholder">',D.no_comments_yet,"</li>"].join("")};var X=H('<div id="ds-bubble"><div class="ds-bubble-content"></div><div class="ds-arrow ds-arrow-down ds-arrow-border"></div><div class="ds-arrow ds-arrow-down"></div></div>'),K=X.find(".ds-bubble-content").delegate("a.ds-ctx-open","click",function(){function e(e){function t(e,t){return et.ctxPost({post:e,index:t})}C.log(H.map(e.response,t).join("\n"));s.el.find("ol");s.el.find("ol").html(H.map(e.response,t).join("\n"))}var t={};t.post_id=K.attr("data-post-id"),R.get("posts/conversation",t,e);var s=E('<h2>查看对话</h2><ol id="ds-ctx"></ol>');return s.el.find(".ds-dialog").css("width","600px"),s.el.find(".ds-dialog-body").css({"max-height":"350px",_height:"350px","overflow-y":"auto","padding-top":"10px"}),!1}),tt=bubbleOutTimer=0;X.mouseenter(N).mouseleave(I),st.PostList=function(e){e&&(e.params&&(this.params=e.params),e.embedThread&&(this.embedThread=e.embedThread)),this.el=H('<ul class="ds-comments"></ul>')},st.PostList.prototype={url:"threads/listPosts",render:function(){return U.call(this.el,this.embedThread,this.embedThread.options),this},reset:function(e){var t=this.embedThread.options;this.el.html(e[0]?H.map(lt.getJSON(e),function(e){return et.post({post:e,options:t})}).join(""):et.postPlaceholder())},refetch:function(){function e(e){lt.set(e.parentPosts||e.relatedPosts),ct.set(e.users),s.reset(e.response),s.embedThread.paginator.reset(e.cursor),s.el.fadeTo(200,1),S.scrollTo(s.el),a.remove()}var s=this,a=H(et.indicator()).appendTo(t.body).fadeIn(200);s.el.fadeTo(200,.5),R.get(s.url,s.params,e)}},st.RelatedRead=function(){this._init()},st.RelatedRead.prototype={uri:"base/recommend",mountedAfter:[".detail_main .detail_con .d_img p:last",".jun4_article .jun4_cententttt","#content p:last",".article .content p:last",".artcontent p:last",'.card_box p>[src="http://cpro.baidustatic.com/cpro/ui/cm.js"]:eq(2)',".mlrAuto .con_con p:last"],mountedBefore:[".artcontent .relateNews",".neirong_main .pagelist"],_init:function(){this.el=H('<div id="ds-related-reads"></div>'),this._count_timer=null},_unpackImages:function(e){for(var t,s=e.image_list.slice(0,3),a=[];s.length;)t=s.shift(),a.push(t.medium_image);return a},_transform:function(e){for(var t=[],s=0,a=e.length;a>s;s++)t.push({url:e[s].url,title:e[s].title,type:e[s].type,source:e[s].source,imgs:this._unpackImages(e[s]),timeStamp:1e3*e[s].publish_time,hasVideo:e[s].has_video,videoDuration:this._parseVideoDuration(e[s].video_duraion)});return t},_parseVideoDuration:function(e){e=+e;var t=Math.floor(e/3600),s=Math.floor((e-60*t*60)/60),e=e-60*t*60-60*s,a=""+(t?(10>t?"0"+t:t)+" : ":"")+(10>s?"0"+s:s)+" : "+(10>e?"0"+e:e);return a},load:function(e){var t=this;R.get(this.uri,{thread_id:e,url:h.href},function(e){0==e.code?t.render(e.response):t.renderError()})},mount:function(e){var t=H(this.mountedAfter.join(","));if(t.length)try{return void this.el.insertAfter(t)}catch(s){}var a=H(this.mountedBefore.join(","));if(a.length)try{return void this.el.insertBefore(a)}catch(s){}e.append(this.el)},renderError:function(){},render:function(e){this.el.html(et["related-read"](this._transform(e)));try{this.count()}catch(t){}},count:function(){var e=this;!function t(){clearTimeout(e._count_timer),e.el.find(".ds-reads-date").each(function(){var e,t,s,a,i,r,n=H(this).data("date"),o=(new Date).getTime(),d=o-n,l=new Date(n);d>864e5?(e=l.getFullYear(),t=l.getMonth()+1,s=l.getDate(),H(this).html(e+"年"+t+"月"+s+"日")):d>36e5?(a=Math.floor(d/60/60/1e3),H(this).html(a+"小时前")):d>6e4?(i=Math.floor(d/60/1e3),H(this).html(i+"分钟前")):(r=Math.floor(d/1e3),H(this).html(r+"秒前"))}),e._count_timer=setTimeout(t,6e4)}()},stopCount:function(){clearTimeout(this._count_timer)}},st.EmbedThread=Q.extend({uri:"threads/listPosts",params:"thread-id local-thread-id source-thread-id thread-key category channel-key author-key author-id url limit order max-depth form-position container-url"+(v.match(/MSIE 6\.0/)?"":" title image thumbnail"),render:function(){var e=this.el;if("请将此处替换成文章在你的站点中的ID"===e.data("thread-key"))return alert("请设置正确的 data-thread-key 属性"),!1;e.attr("id","ds-thread").append(et.waitingImg());var t=e.width(),s=e.data("url")||!e.attr("data-thread-id")&&H("link[rel=canonical]").attr("href");s?e.data("url",k(s)):e.data("container-url",h.href),t&&400>=t&&e.addClass("ds-narrow").data("max-depth",1)},updateCounter:function(e){function t(e){return e.substr(e.indexOf("}")+1)}var s={duoshuo:["comments",t(D.comments_multiple)||"评论"],repost:["reposts",t(D.reposts_multiple)||"转载"],weibo:["weibo_reposts",t(D.weibo_reposts_multiple)||"新浪微博"],qqt:["qqt_reposts",t(D.qqt_reposts_multiple)||"腾讯微博"]};for(var a in s)if(!e||e==a){var i=this.data[s[a][0]];this.el.find(".ds-comments-tab-"+a).html(this.el.hasClass("ds-narrow")?'<span class="ds-service-icon ds-'+a+'"></span>'+i:(i?'<span class="ds-highlight">'+i+"</span>":"0")+s[a][1])}},onError:function(e){this.el.html("评论框出错啦("+e.code+"): "+e.errorMessage)},onload:function(t){var a=this,i=a.threadId=t.thread.thread_id,n=t.cursor,o=a.options=t.options,d=a.innerEl=p(H('<div id="ds-reset"></div>').appendTo(a.el));a.model=new Y(a.data=t.thread),lt.set(t.parentPosts||t.relatedPosts),ct.set(t.users),a.el.find("#ds-waiting").remove(),t.options&&t.options.show_recommend&&(a.relatedRead=new st.RelatedRead,a.relatedRead.load(t.thread.thread_id),a.relatedRead.mount(d)),o.like_thread_enabled&&(a.meta=new st.Meta(a),d.append(a.meta.render().el)),o.hot_posts&&t.hotPosts&&t.hotPosts.length&&(a.hotPosts=new st.HotPosts(H('<div class="ds-rounded"></div>'),{max_depth:1,show_context:o.show_context}),a.hotPosts.thread=a,d.append(a.hotPosts.el),a.hotPosts.onload({list:lt.getJSON(t.hotPosts)})),a.postListHead=new st.PostListHead(a),a.postList=new st.PostList({embedThread:a,params:{source:"duoshuo",thread_id:i,max_depth:o.max_depth,order:o.order,limit:o.limit}}),a.postList.render().reset(t.response),a.paginator=new st.Paginator({collection:a.postList}),a.paginator.reset(n);var c=a.replybox=new st.Replybox(a);c.postList=a.postList.el,r()?a.loginButtons=H(et.loginButtons()).delegate("a.ds-more-services","click",function(){return a.loginButtons.find(".ds-additional-services").toggle(),!1}).delegate("a.ds-service-link","click",l):a.toolbar=H(et.toolbar()).delegate(".ds-account-control","mouseenter",function(){H(this).addClass("ds-active")}).delegate(".ds-account-control","mouseleave",function(){H(this).removeClass("ds-active")}).delegate("a.ds-bind-more","click",function(){var e=E(et["dialog-bind-more"]()).el.find(".ds-dialog").addClass("ds-dialog-bind-more").css("width","300px");return e.find("a.ds-service-link").click(l),!1}).delegate("a.ds-unread-comments-count","click",function(){return T("unread-comments"),!1});var u=['<a name="respond"></a>',a.toolbar||a.loginButtons,c.render().el];"top"==o.formPosition&&H.fn.append.apply(d,u),d.append(a.postListHead.render().el,a.postList.el,a.paginator.el),"bottom"==o.formPosition&&H.fn.append.apply(d,u),d.append(et.poweredBy(o.poweredby_text)),a.updateCounter(),t.alerts&&H.each(t.alerts,function(e,t){H('<div class="ds-alert">'+t+"</div>").insertBefore(a.toolbar||loginButtons)}),o.message&&c.el.find("textarea").val(o.message).focus(),ot.on("reset",function(){var e=ot.data.comments||0;d.find("a.ds-unread-comments-count").html(e).attr("title",e?"你有"+e+"条新回复":"你没有新回复").css("display",e?"inline":"none")}),o.mzadx_id&&(S.require("mzadxN",function(){}),H('<div id="MZADX_'+o.mzadx_id+'" style="margin:0 auto;"></div>').appendTo(d),__mz_rpq=e.__mz_rpq||[],__mz_rpq.push({l:[o.mzadx_id],r:"1",_srv:"MZADX",_callback:function(){}})),S.thread=a,ot.data!==s&&ot.trigger("reset"),r()||M.send({visit_thread_id:a.threadId})},onMessage:function(e){A(this.postList.el,new F(e),this.options)}}),st.HotPosts=Q.extend({tmpl:"hotPosts",params:"show-quote",render:function(){return this.el.attr("id","ds-hot-posts"),this},onload:function(e){e.options=H.extend(this.options,e.options),Q.prototype.onload.call(this,e),U.call(this.el.find("ul"),this.thread,this.options)}}),st.RecentComments=Q.extend({tmpl:"commentList",uri:"sites/listRecentPosts",params:"show-avatars show-time show-title avatar-size show-admin excerpt-length num-items channel-key",render:function(){this.el.attr("id","ds-recent-comments")},prepare:function(e){return{list:H.map(e.response,function(e){return new F(e).toJSON()})}}}),st.RecentVisitors=Q.extend({tmpl:"recentVisitors",uri:"sites/listVisitors",params:"show-time avatar-size num-items channel-key",render:function(){this.el.children().detach(),this.el.attr("id","ds-recent-visitors").append(this.waitingEl=H(et.waitingImg()))}}),st.TopThreads=Q.extend({tmpl:"topThreads",uri:"sites/listTopThreads",params:"range num-items channel-key",render:function(){this.el.children().detach(),this.el.attr("id","ds-top-threads").append(this.waitingEl=H(et.waitingImg()))}}),st.LoginWidget=Q.extend({tmpl:"loginWidget",render:function(){var e=this.el;e.attr("id","ds-login").html(et.loginWidget(["weixin","weibo","qq","renren","kaixin","douban"])),e.find("a").click(l),e.find("a.ds-logout").attr("href",Z.logoutUrl())}}),st.ThreadCount=Q.extend({onload:function(e){var t=this.el,s=t.data("count-type")||"comments",a=e.data[s];t[t.data("replace")?"replaceWith":"html"](D[s+"_"+(a?a>1?"multiple":"one":"zero")].replace("{num}",a))}}),st.ShareWidget=Q.extend({tmpl:"shareWidget",render:function(){var e={copyright:"多说分享插件",services:["weibo","qzone","sohu","renren","qqt","kaixin","douban","qq","baidu","google","wechat","facebook","twitter","linkedin"]};this.el.attr("id","ds-share"),this.el.children().attr("id","ds-reset"),this.el.find(".ds-share-aside-inner").html(et.shareWidget(e)),this.el.find(".ds-share-icons-more").html(et.shareWidget(e)),this.el.find(".ds-share-icons-more").hide(),this.el.hasClass("flat")&&this.el.find("a").each(function(){H(this).addClass("flat")}),p(this.el),this.delegateEvents()},delegateEvents:function(){var s=this,i=s.el;if(i.children().hasClass("ds-share-inline")){var r=".ds-share-icons-more",n=i.find(r),d="[data-toggle=ds-share-icons-more]";i.delegate(d,"mouseover",function(){n.show()}),i.delegate(d,"mouseout",function(){n.hide()}),i.delegate(r,"mouseover",function(){n.show()}),i.delegate(r,"mouseout",function(){n.hide()})}else{var l=i.children().hasClass("ds-share-aside-left")?"slide-to-right":"slide-to-left",c=i.children();if(!o.cssProperty("transition")){var u=i.children().hasClass("ds-share-aside-left")?"left":"right";i.delegate(".ds-share-aside-toggle","mouseover",function(){var e={},s=P.ie6&&"right"===u;s?e.left=(t.documentElement.scrollLeft+t.documentElement.clientWidth-this.offsetWidth-(parseInt(this.currentStyle.marginLeft,10)||0)-parseInt(this.currentStyle.marginRight,10)||0)-195:e[u]=0,c.animate(e,200)}),i.delegate(".ds-share-aside-inner","mouseleave",function(){var e={},s=P.ie6&&"right"===u;s?e.left=(t.documentElement.scrollLeft+t.documentElement.clientWidth-this.offsetWidth-(parseInt(this.currentStyle.marginLeft,10)||0)-parseInt(this.currentStyle.marginRight,10)||0)+230:e[u]=-229,c.animate(e,200)})}i.delegate(".ds-share-aside-toggle,.ds-share-aside-inner","mouseover",function(){c.addClass(l)}),i.delegate(".ds-share-aside-toggle,.ds-share-aside-inner","mouseleave",function(){c.removeClass(l)})}i.delegate("a","click",function(t){var s=H(this).data("service");if(!i.data("url"))return void alert("请设置data-url");if("wechat"===s){var r=a()+"/api/qrcode/getImage.png",n="?size=240&text="+i.data("url"),d=E(et["dialog-qrcode"]({qrcode_url:r+n,url:i.data("url")}));d.el.find(".ds-dialog").css("width","320px")}else{var l=a()+"/share-proxy/?"+o.param({service:H(this).data("service"),thread_key:i.data("threadKey"),title:i.data("title"),images:i.data("images"),content:i.data("content"),url:i.data("url")});e.open(l,"_blank")}t.preventDefault(),t.stopPropagation()})}});var it=0;S.initSelector=function(e,t){function s(e){W(e),o.extend(D,e.options),dt.set(e.response)}var a=[];!q()||!H.isReady&&j||H(e).each(function(e,s){var i=H(s);if(!i.data("initialized")){i.data("initialized",!0);var r=new st[t.type](i,t);if(at.push(r),"ThreadCount"===t.type){var n=i.attr("data-thread-key");i.attr("data-channel-key")&&(n=i.attr("data-channel-key")+":"+n),a.push(n),dt[n]||(dt[n]=new Y({})),dt[n].on("reset",function(){r.onload(this)})}else if(r.uri){var o={};H.each(r.params.split(" "),function(e,t){o[t.replace(/-/g,"_")]=i.attr("data-"+t)||i.data(t)}),R.get(r.uri,B(o),function(e){r.load(e)})}}}),a.length&&R.get("threads/counts",B({threads:a.join(",")}),s)},(S.initView=function(){H.each(O,S.initSelector)})(),H(function(){if(!c){if(!q())return C.error("缺少 duoshuoQuery 的定义");C.warn("请在加载多说 embed.js 之前定义 duoshuoQuery")}setInterval(function(){H(".ds-time").each(function(){var e=H(this).attr("datetime");e&&(this.innerHTML=S.elapsedTime(e))})},2e4),c.ondomready&&c.ondomready(),S.initView(),!it&&c.short_name&&R.get("analytics/ping",B({}),W)
})})}}(window,document);
/*! 
 * angular-loading-bar v0.9.0
 * https://chieffancypants.github.io/angular-loading-bar
 * Copyright (c) 2016 Wes Cruver
 * License: MIT
 */
!function(){"use strict";angular.module("angular-loading-bar",["cfp.loadingBarInterceptor"]),angular.module("chieffancypants.loadingBar",["cfp.loadingBarInterceptor"]),angular.module("cfp.loadingBarInterceptor",["cfp.loadingBar"]).config(["$httpProvider",function(a){var b=["$q","$cacheFactory","$timeout","$rootScope","$log","cfpLoadingBar",function(b,c,d,e,f,g){function h(){d.cancel(j),g.complete(),l=0,k=0}function i(b){var d,e=c.get("$http"),f=a.defaults;!b.cache&&!f.cache||b.cache===!1||"GET"!==b.method&&"JSONP"!==b.method||(d=angular.isObject(b.cache)?b.cache:angular.isObject(f.cache)?f.cache:e);var g=void 0!==d?void 0!==d.get(b.url):!1;return void 0!==b.cached&&g!==b.cached?b.cached:(b.cached=g,g)}var j,k=0,l=0,m=g.latencyThreshold;return{request:function(a){return a.ignoreLoadingBar||i(a)||(e.$broadcast("cfpLoadingBar:loading",{url:a.url}),0===k&&(j=d(function(){g.start()},m)),k++,g.set(l/k)),a},response:function(a){return a&&a.config?(a.config.ignoreLoadingBar||i(a.config)||(l++,e.$broadcast("cfpLoadingBar:loaded",{url:a.config.url,result:a}),l>=k?h():g.set(l/k)),a):(f.error("Broken interceptor detected: Config object not supplied in response:\n https://github.com/chieffancypants/angular-loading-bar/pull/50"),a)},responseError:function(a){return a&&a.config?(a.config.ignoreLoadingBar||i(a.config)||(l++,e.$broadcast("cfpLoadingBar:loaded",{url:a.config.url,result:a}),l>=k?h():g.set(l/k)),b.reject(a)):(f.error("Broken interceptor detected: Config object not supplied in rejection:\n https://github.com/chieffancypants/angular-loading-bar/pull/50"),b.reject(a))}}}];a.interceptors.push(b)}]),angular.module("cfp.loadingBar",[]).provider("cfpLoadingBar",function(){this.autoIncrement=!0,this.includeSpinner=!0,this.includeBar=!0,this.latencyThreshold=100,this.startSize=.02,this.parentSelector="body",this.spinnerTemplate='<div id="loading-bar-spinner"><div class="spinner-icon"></div></div>',this.loadingBarTemplate='<div id="loading-bar"><div class="bar"><div class="peg"></div></div></div>',this.$get=["$injector","$document","$timeout","$rootScope",function(a,b,c,d){function e(){if(k||(k=a.get("$animate")),c.cancel(m),!r){var e=b[0],g=e.querySelector?e.querySelector(n):b.find(n)[0];g||(g=e.getElementsByTagName("body")[0]);var h=angular.element(g),i=g.lastChild&&angular.element(g.lastChild);d.$broadcast("cfpLoadingBar:started"),r=!0,v&&k.enter(o,h,i),u&&k.enter(q,h,o),f(w)}}function f(a){if(r){var b=100*a+"%";p.css("width",b),s=a,t&&(c.cancel(l),l=c(function(){g()},250))}}function g(){if(!(h()>=1)){var a=0,b=h();a=b>=0&&.25>b?(3*Math.random()+3)/100:b>=.25&&.65>b?3*Math.random()/100:b>=.65&&.9>b?2*Math.random()/100:b>=.9&&.99>b?.005:0;var c=h()+a;f(c)}}function h(){return s}function i(){s=0,r=!1}function j(){k||(k=a.get("$animate")),d.$broadcast("cfpLoadingBar:completed"),f(1),c.cancel(m),m=c(function(){var a=k.leave(o,i);a&&a.then&&a.then(i),k.leave(q)},500)}var k,l,m,n=this.parentSelector,o=angular.element(this.loadingBarTemplate),p=o.find("div").eq(0),q=angular.element(this.spinnerTemplate),r=!1,s=0,t=this.autoIncrement,u=this.includeSpinner,v=this.includeBar,w=this.startSize;return{start:e,set:f,status:h,inc:g,complete:j,autoIncrement:this.autoIncrement,includeSpinner:this.includeSpinner,latencyThreshold:this.latencyThreshold,parentSelector:this.parentSelector,startSize:this.startSize}}]})}();