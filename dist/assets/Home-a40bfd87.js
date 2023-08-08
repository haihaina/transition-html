import{_ as Ie,o as we,c as Ee,r as oe,a as Me,u as ie}from"./index-37de13bf.js";const qe={props:{agreementContent:{type:String,required:!0},replacements:{type:Object,required:!0}},computed:{agreement(){let e=this.agreementContent;console.log(this.replacements,"content20",e);for(const t in this.replacements){const n=new RegExp(`{{${t}}}`,"g"),r=this.replacements[t];e=e.replace(n,r)}return console.log("content26",e),e}}},ze=["innerHTML"];function Je(e,t,n,r,s,o){return we(),Ee("div",{innerHTML:o.agreement},null,8,ze)}const $e=Ie(qe,[["render",Je]]);function be(e,t){return function(){return e.apply(t,arguments)}}const{toString:Ve}=Object.prototype,{getPrototypeOf:Z}=Object,I=(e=>t=>{const n=Ve.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),O=e=>(e=e.toLowerCase(),t=>I(t)===e),M=e=>t=>typeof t===e,{isArray:P}=Array,_=M("undefined");function We(e){return e!==null&&!_(e)&&e.constructor!==null&&!_(e.constructor)&&b(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Se=O("ArrayBuffer");function ve(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Se(e.buffer),t}const Ke=M("string"),b=M("function"),Re=M("number"),q=e=>e!==null&&typeof e=="object",Ge=e=>e===!0||e===!1,U=e=>{if(I(e)!=="object")return!1;const t=Z(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Xe=O("Date"),Qe=O("File"),Ye=O("Blob"),Ze=O("FileList"),et=e=>q(e)&&b(e.pipe),tt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||b(e.append)&&((t=I(e))==="formdata"||t==="object"&&b(e.toString)&&e.toString()==="[object FormData]"))},nt=O("URLSearchParams"),rt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function F(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),P(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function Oe(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const ge=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Ae=e=>!_(e)&&e!==ge;function G(){const{caseless:e}=Ae(this)&&this||{},t={},n=(r,s)=>{const o=e&&Oe(t,s)||s;U(t[o])&&U(r)?t[o]=G(t[o],r):U(r)?t[o]=G({},r):P(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&F(arguments[r],n);return t}const st=(e,t,n,{allOwnKeys:r}={})=>(F(t,(s,o)=>{n&&b(s)?e[o]=be(s,n):e[o]=s},{allOwnKeys:r}),e),ot=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),it=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},at=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&Z(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},ct=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},ut=e=>{if(!e)return null;if(P(e))return e;let t=e.length;if(!Re(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},lt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Z(Uint8Array)),ft=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},dt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},pt=O("HTMLFormElement"),ht=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),ae=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),mt=O("RegExp"),Te=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};F(n,(s,o)=>{t(s,o,e)!==!1&&(r[o]=s)}),Object.defineProperties(e,r)},yt=e=>{Te(e,(t,n)=>{if(b(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(b(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},wt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return P(e)?r(e):r(String(e).split(t)),n},Et=()=>{},bt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),V="abcdefghijklmnopqrstuvwxyz",ce="0123456789",Ne={DIGIT:ce,ALPHA:V,ALPHA_DIGIT:V+V.toUpperCase()+ce},St=(e=16,t=Ne.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Rt(e){return!!(e&&b(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Ot=e=>{const t=new Array(10),n=(r,s)=>{if(q(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=P(r)?[]:{};return F(r,(i,c)=>{const d=n(i,s+1);!_(d)&&(o[c]=d)}),t[s]=void 0,o}}return r};return n(e,0)},gt=O("AsyncFunction"),At=e=>e&&(q(e)||b(e))&&b(e.then)&&b(e.catch),a={isArray:P,isArrayBuffer:Se,isBuffer:We,isFormData:tt,isArrayBufferView:ve,isString:Ke,isNumber:Re,isBoolean:Ge,isObject:q,isPlainObject:U,isUndefined:_,isDate:Xe,isFile:Qe,isBlob:Ye,isRegExp:mt,isFunction:b,isStream:et,isURLSearchParams:nt,isTypedArray:lt,isFileList:Ze,forEach:F,merge:G,extend:st,trim:rt,stripBOM:ot,inherits:it,toFlatObject:at,kindOf:I,kindOfTest:O,endsWith:ct,toArray:ut,forEachEntry:ft,matchAll:dt,isHTMLForm:pt,hasOwnProperty:ae,hasOwnProp:ae,reduceDescriptors:Te,freezeMethods:yt,toObjectSet:wt,toCamelCase:ht,noop:Et,toFiniteNumber:bt,findKey:Oe,global:ge,isContextDefined:Ae,ALPHABET:Ne,generateString:St,isSpecCompliantForm:Rt,toJSONObject:Ot,isAsyncFn:gt,isThenable:At};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const xe=m.prototype,Pe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Pe[e]={value:e}});Object.defineProperties(m,Pe);Object.defineProperty(xe,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create(xe);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},c=>c!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const Tt=null;function X(e){return a.isPlainObject(e)||a.isArray(e)}function Ce(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function ue(e,t,n){return e?e.concat(t).map(function(s,o){return s=Ce(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function Nt(e){return a.isArray(e)&&!e.some(X)}const xt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function z(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,g){return!a.isUndefined(g[h])});const r=n.metaTokens,s=n.visitor||l,o=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function u(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!d&&a.isBlob(f))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?d&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function l(f,h,g){let S=f;if(f&&!g&&typeof f=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&Nt(f)||(a.isFileList(f)||a.endsWith(h,"[]"))&&(S=a.toArray(f)))return h=Ce(h),S.forEach(function(L,He){!(a.isUndefined(L)||L===null)&&t.append(i===!0?ue([h],He,o):i===null?h:h+"[]",u(L))}),!1}return X(f)?!0:(t.append(ue(g,h,o),u(f)),!1)}const p=[],E=Object.assign(xt,{defaultVisitor:l,convertValue:u,isVisitable:X});function y(f,h){if(!a.isUndefined(f)){if(p.indexOf(f)!==-1)throw Error("Circular reference detected in "+h.join("."));p.push(f),a.forEach(f,function(S,N){(!(a.isUndefined(S)||S===null)&&s.call(t,S,a.isString(N)?N.trim():N,h,E))===!0&&y(S,h?h.concat(N):[N])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function le(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ee(e,t){this._pairs=[],e&&z(e,this,t)}const _e=ee.prototype;_e.append=function(t,n){this._pairs.push([t,n])};_e.toString=function(t){const n=t?function(r){return t.call(this,r,le)}:le;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Pt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Fe(e,t,n){if(!t)return e;const r=n&&n.encode||Pt,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new ee(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Ct{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const fe=Ct,Be={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},_t=typeof URLSearchParams<"u"?URLSearchParams:ee,Ft=typeof FormData<"u"?FormData:null,Bt=typeof Blob<"u"?Blob:null,Lt=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Ut=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),R={isBrowser:!0,classes:{URLSearchParams:_t,FormData:Ft,Blob:Bt},isStandardBrowserEnv:Lt,isStandardBrowserWebWorkerEnv:Ut,protocols:["http","https","file","blob","url","data"]};function Dt(e,t){return z(e,new R.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return R.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function jt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function kt(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function Le(e){function t(n,r,s,o){let i=n[o++];const c=Number.isFinite(+i),d=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,d?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=kt(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(jt(r),s,n,0)}),n}return null}const Ht={"Content-Type":void 0};function It(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const J={transitional:Be,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(Le(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Dt(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return z(c?{"files[]":t}:t,d&&new d,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),It(t)):t}],transformResponse:[function(t){const n=this.transitional||J.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?m.from(c,m.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:R.classes.FormData,Blob:R.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){J.headers[t]={}});a.forEach(["post","put","patch"],function(t){J.headers[t]=a.merge(Ht)});const te=J,Mt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),qt=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&Mt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},de=Symbol("internals");function C(e){return e&&String(e).trim().toLowerCase()}function D(e){return e===!1||e==null?e:a.isArray(e)?e.map(D):String(e)}function zt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Jt=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function W(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function $t(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Vt(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class ${constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,d,u){const l=C(d);if(!l)throw new Error("header name must be a non-empty string");const p=a.findKey(s,l);(!p||s[p]===void 0||u===!0||u===void 0&&s[p]!==!1)&&(s[p||d]=D(c))}const i=(c,d)=>a.forEach(c,(u,l)=>o(u,l,d));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!Jt(t)?i(qt(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=C(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return zt(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=C(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||W(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=C(i),i){const c=a.findKey(r,i);c&&(!n||W(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||W(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=D(s),delete n[o];return}const c=t?$t(o):String(o).trim();c!==o&&delete n[o],n[c]=D(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[de]=this[de]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=C(i);r[c]||(Vt(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}$.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods($.prototype);a.freezeMethods($);const A=$;function v(e,t){const n=this||te,r=t||n,s=A.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Ue(e){return!!(e&&e.__CANCEL__)}function B(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(B,m,{__CANCEL__:!0});function Wt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const vt=R.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,c){const d=[];d.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&d.push("expires="+new Date(s).toGMTString()),a.isString(o)&&d.push("path="+o),a.isString(i)&&d.push("domain="+i),c===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Kt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Gt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function De(e,t){return e&&!Kt(t)?Gt(e,t):t}const Xt=R.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const c=a.isString(i)?s(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}();function Qt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Yt(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(d){const u=Date.now(),l=r[o];i||(i=u),n[s]=d,r[s]=u;let p=o,E=0;for(;p!==s;)E+=n[p++],p=p%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),u-i<t)return;const y=l&&u-l;return y?Math.round(E*1e3/y):void 0}}function pe(e,t){let n=0;const r=Yt(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,c=o-n,d=r(c),u=o<=i;n=o;const l={loaded:o,total:i,progress:i?o/i:void 0,bytes:c,rate:d||void 0,estimated:d&&i&&u?(i-o)/d:void 0,event:s};l[t?"download":"upload"]=!0,e(l)}}const Zt=typeof XMLHttpRequest<"u",en=Zt&&function(e){return new Promise(function(n,r){let s=e.data;const o=A.from(e.headers).normalize(),i=e.responseType;let c;function d(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}a.isFormData(s)&&(R.isStandardBrowserEnv||R.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let u=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(y+":"+f))}const l=De(e.baseURL,e.url);u.open(e.method.toUpperCase(),Fe(l,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function p(){if(!u)return;const y=A.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),h={data:!i||i==="text"||i==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:y,config:e,request:u};Wt(function(S){n(S),d()},function(S){r(S),d()},h),u=null}if("onloadend"in u?u.onloadend=p:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(p)},u.onabort=function(){u&&(r(new m("Request aborted",m.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let f=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||Be;e.timeoutErrorMessage&&(f=e.timeoutErrorMessage),r(new m(f,h.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,u)),u=null},R.isStandardBrowserEnv){const y=(e.withCredentials||Xt(l))&&e.xsrfCookieName&&vt.read(e.xsrfCookieName);y&&o.set(e.xsrfHeaderName,y)}s===void 0&&o.setContentType(null),"setRequestHeader"in u&&a.forEach(o.toJSON(),function(f,h){u.setRequestHeader(h,f)}),a.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),i&&i!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",pe(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",pe(e.onUploadProgress)),(e.cancelToken||e.signal)&&(c=y=>{u&&(r(!y||y.type?new B(null,e,u):y),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c)));const E=Qt(l);if(E&&R.protocols.indexOf(E)===-1){r(new m("Unsupported protocol "+E+":",m.ERR_BAD_REQUEST,e));return}u.send(s||null)})},j={http:Tt,xhr:en};a.forEach(j,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const tn={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=a.isString(n)?j[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new m(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(j,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:j};function K(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new B(null,e)}function he(e){return K(e),e.headers=A.from(e.headers),e.data=v.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),tn.getAdapter(e.adapter||te.adapter)(e).then(function(r){return K(e),r.data=v.call(e,e.transformResponse,r),r.headers=A.from(r.headers),r},function(r){return Ue(r)||(K(e),r&&r.response&&(r.response.data=v.call(e,e.transformResponse,r.response),r.response.headers=A.from(r.response.headers))),Promise.reject(r)})}const me=e=>e instanceof A?e.toJSON():e;function x(e,t){t=t||{};const n={};function r(u,l,p){return a.isPlainObject(u)&&a.isPlainObject(l)?a.merge.call({caseless:p},u,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function s(u,l,p){if(a.isUndefined(l)){if(!a.isUndefined(u))return r(void 0,u,p)}else return r(u,l,p)}function o(u,l){if(!a.isUndefined(l))return r(void 0,l)}function i(u,l){if(a.isUndefined(l)){if(!a.isUndefined(u))return r(void 0,u)}else return r(void 0,l)}function c(u,l,p){if(p in t)return r(u,l);if(p in e)return r(void 0,u)}const d={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(u,l)=>s(me(u),me(l),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(l){const p=d[l]||s,E=p(e[l],t[l],l);a.isUndefined(E)&&p!==c||(n[l]=E)}),n}const je="1.4.0",ne={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ne[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const ye={};ne.transitional=function(t,n,r){function s(o,i){return"[Axios v"+je+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!ye[i]&&(ye[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};function nn(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],d=c===void 0||i(c,o,e);if(d!==!0)throw new m("option "+o+" must be "+d,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const Q={assertOptions:nn,validators:ne},T=Q.validators;class H{constructor(t){this.defaults=t,this.interceptors={request:new fe,response:new fe}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=x(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&Q.assertOptions(r,{silentJSONParsing:T.transitional(T.boolean),forcedJSONParsing:T.transitional(T.boolean),clarifyTimeoutError:T.transitional(T.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:Q.assertOptions(s,{encode:T.function,serialize:T.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=o&&a.merge(o.common,o[n.method]),i&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete o[f]}),n.headers=A.concat(i,o);const c=[];let d=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(d=d&&h.synchronous,c.unshift(h.fulfilled,h.rejected))});const u=[];this.interceptors.response.forEach(function(h){u.push(h.fulfilled,h.rejected)});let l,p=0,E;if(!d){const f=[he.bind(this),void 0];for(f.unshift.apply(f,c),f.push.apply(f,u),E=f.length,l=Promise.resolve(n);p<E;)l=l.then(f[p++],f[p++]);return l}E=c.length;let y=n;for(p=0;p<E;){const f=c[p++],h=c[p++];try{y=f(y)}catch(g){h.call(this,g);break}}try{l=he.call(this,y)}catch(f){return Promise.reject(f)}for(p=0,E=u.length;p<E;)l=l.then(u[p++],u[p++]);return l}getUri(t){t=x(this.defaults,t);const n=De(t.baseURL,t.url);return Fe(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){H.prototype[t]=function(n,r){return this.request(x(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(x(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}H.prototype[t]=n(),H.prototype[t+"Form"]=n(!0)});const k=H;class re{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new B(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new re(function(s){t=s}),cancel:t}}}const rn=re;function sn(e){return function(n){return e.apply(null,n)}}function on(e){return a.isObject(e)&&e.isAxiosError===!0}const Y={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Y).forEach(([e,t])=>{Y[t]=e});const an=Y;function ke(e){const t=new k(e),n=be(k.prototype.request,t);return a.extend(n,k.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return ke(x(e,s))},n}const w=ke(te);w.Axios=k;w.CanceledError=B;w.CancelToken=rn;w.isCancel=Ue;w.VERSION=je;w.toFormData=z;w.AxiosError=m;w.Cancel=w.CanceledError;w.all=function(t){return Promise.all(t)};w.spread=sn;w.isAxiosError=on;w.mergeConfig=x;w.AxiosHeaders=A;w.formToJSON=e=>Le(a.isHTMLForm(e)?new FormData(e):e);w.HttpStatusCode=an;w.default=w;const cn=w;let un={dev:"http://localhost:810",test1:"http://loan-web-api1.internal.jiebide.xin:881",test2:"http://loan-web-api2.internal.jiebide.xin:881",moer:"https://api.promote.bicredit.xin",ttfq:"http://api.ruiru.xyz",yimiao:"https://web-api.yingjiwallet.cn",ssd:"https://h5.api.yourongdai.cn"};const se=cn.create({baseURL:un.moer,timeout:1e4});se.interceptors.request.use(e=>(e.headers["Content-Type"]="application/json;charset=UTF-8",console.log("config",e),e),e=>Promise.reject(e));se.interceptors.response.use(e=>e.status===200?Promise.resolve(e.data):Promise.reject(e),e=>{const t=e.response.status;return Promise.reject(t)});function ln(e){return se({url:`/api/v1/get/appinfo/${e}`,method:"post"})}const dn={__name:"Home",setup(e){var t=c=>{const d=new URLSearchParams(window.location.search.replace(/&amp;/g,"&"));let u="";for(const[l,p]of d.entries())l===c&&(u=decodeURIComponent(p.replace(/&amp;/g,"&amp;")));return u};let n=t("appId");t("phone"),t("uid"),console.log("appId",n);let r=oe(""),s=oe({appName:"",phone:"",uid:"",companyName:""});(async()=>{await ln(n).then(c=>{console.log("res",c),c.code===0&&(s.value.appName=c.data.appName,s.value.companyName=c.data.companyName,i())})})();const i=()=>{let c='<p style="text-align: center; line-height: 150%;"><strong>诚易融用户服务协议</strong></p><p style="text-indent: 21pt; line-height: 150%;"><span style="font-size: 14pt; font-family: STSong;">《{{appName}}用户服务协议》包括正文及所有已经发布的或将来可能发布的各类具体规则，各类具体规则为本协议不可分割的一部分，与本协议具有同等法律效力（以下统称“本协议”）。本服务协议中{{appName}}指&nbsp;{{companyName}}&nbsp;及其委托的诚易融平台实际运营方重庆惠融数字科技有限公司，包括</span><span style="color: rgb(225, 60, 57); font-size: 14pt; font-family: STSong;"><strong>{{appName}}</strong></span><span style="font-size: 14pt; font-family: STSong;">APP及相关网站、链接、h5页面、微信公众号、微信小程序、支付宝小程序等，以下简称“我们”或“{{appName}}”或“本公司”。请您使用我们服务前仔细阅读本协议，您在注册为我们用户过程中通过点击、确认、勾选、电子签章或其他类似任一方式确认即表示您已仔细阅读并明确同意遵守本协议。</span><strong>您承诺在注册之前认真阅读、理解并接受本服务协议的全部内容，如有任何疑问，可向我们咨询。但无论您事实上是否在注册之前认真阅读了本服务协议，一旦您通过诚易融网站（cyrong.cn）以及相关网站、移动设备客户端、H5网页、小程序等界面点击勾选本服务协议并注册成为诚易融用户，即表示您同意并签署了本服务协议。</strong><span style="font-size: 14pt; font-family: STSong;">您确认本服务协议后，本服务协议即产生法律效力。&nbsp;若您不接受或无法准确理解本服务协议的任何条款，请立即停止注册行为。&nbsp;如发生纠纷，您不得以未仔细阅读或理解本协议为由进行任何抗辩。</span></p><p style="text-indent: 21pt; line-height: 150%;"><strong>我们有权根据法律法规、国家政策的变动、监管部门的要求、监管精神导向、行业协会要求、行业协会建议及诚易融平台运营需要不时修改或变更本服务协议正文及各类具体规则部分或全部（以下称“修订内容”），而无需另行单独通知您。除非另有规定，否则任何修订内容于平台在相关系统板块上发布之时立即生效。若您在修订内容发布后继续使用我们提供的服务的，即表示您已充分阅读、理解并接受修订内容，也将遵循修订内容使用我们提供的服务，同时对您在本协议修改前通过我们进行的交易，您同意按照修订内容进行相应的授权和追认。如果您不同意修订内容的，您应当在履行完毕通过我们与任意主体达成的约定义务的前提下，停止使用我们的服务或注销账号。如果您未就修改后的本服务协议向我们提出明确的异议，则视为您接受我们对本服务协议所做的修改，并应遵照修改后的协议履行应尽义务。</strong><span style="font-size: 14pt; font-family: STSong;">诚易融平台保留随时修改或中断服务而不需通知用户的权利，诚易融平台行使修改或中断服务的权利，不需对用户或第三方负责。</span></p><p><br></p>';r.value=c};return(c,d)=>(we(),Ee("div",null,[Me($e,{"agreement-content":ie(r),replacements:ie(s)},null,8,["agreement-content","replacements"])]))}};export{dn as default};
