(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(n){if(n.ep)return;n.ep=!0;const l=s(n);fetch(n.href,l)}})();/**
* @vue/shared v3.5.46
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ii(e){const t=Object.create(null);for(const s of e.split(","))t[s]=1;return s=>s in t}const te={},mt=[],$e=()=>{},nn=()=>!1,ys=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),xs=e=>e.startsWith("onUpdate:"),pe=Object.assign,ni=(e,t)=>{const s=e.indexOf(t);s>-1&&e.splice(s,1)},vl=Object.prototype.hasOwnProperty,$=(e,t)=>vl.call(e,t),N=Array.isArray,rt=e=>kt(e)==="[object Map]",cs=e=>kt(e)==="[object Set]",_i=e=>kt(e)==="[object Date]",D=e=>typeof e=="function",re=e=>typeof e=="string",He=e=>typeof e=="symbol",Z=e=>e!==null&&typeof e=="object",ln=e=>(Z(e)||D(e))&&D(e.then)&&D(e.catch),rn=Object.prototype.toString,kt=e=>rn.call(e),bl=e=>kt(e).slice(8,-1),an=e=>kt(e)==="[object Object]",li=e=>re(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Lt=ii(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),yl=1e4,ws=e=>{let t=Object.create(null),s=0;return i=>{const n=t[i];return n!==void 0?n:(++s>yl&&(t=Object.create(null),s=1),t[i]=e(i))}},xl=/-\w/g,Ie=ws(e=>e.replace(xl,t=>t.slice(1).toUpperCase())),wl=/\B([A-Z])/g,bt=ws(e=>e.replace(wl,"-$1").toLowerCase()),on=ws(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ms=ws(e=>e?`on${on(e)}`:""),ze=(e,t)=>!Object.is(e,t),Rs=(e,...t)=>{for(let s=0;s<e.length;s++)e[s](...t)},cn=(e,t,s,i=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:i,value:s})},Sl=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ci;const Ss=()=>Ci||(Ci=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function js(e){if(N(e)){const t={};for(let s=0;s<e.length;s++){const i=e[s],n=re(i)?Cl(i):js(i);if(n)for(const l in n)t[l]=n[l]}return t}else if(re(e)||Z(e))return e}const jl=/;(?![^(]*\))/g,kl=/:([^]+)/,_l=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Cl(e){const t={};return e.replace(_l,s=>s.startsWith("/*")?"":s).split(jl).forEach(s=>{if(s){const i=s.split(kl);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function ye(e){let t="";if(re(e))t=e;else if(N(e))for(let s=0;s<e.length;s++){const i=ye(e[s]);i&&(t+=i+" ")}else if(Z(e))for(const s in e)e[s]&&(t+=s+" ");return t.trim()}const Pl="itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",Tl=ii(Pl);function pn(e){return!!e||e===""}function Al(e,t,s){if(e.length!==t.length)return!1;let i=!0;for(let n=0;i&&n<e.length;n++)i=ks(e[n],t[n],s);return i}function Pi(e,t,s){if(e.size!==t.size)return!1;const i=Array.from(t),n=new Uint8Array(i.length);for(const l of e){let r=-1;for(let a=0;a<i.length;a++)if(!n[a]&&ks(l,i[a],s)){r=a;break}if(r<0)return!1;n[r]=1}return!0}function El(e,t,s){let i=rt(e),n=rt(t);if(i||n||(i=cs(e),n=cs(t),i||n))return i&&n?Pi(e,t,s):!1;const l=Object.keys(e).length,r=Object.keys(t).length;if(l!==r)return!1;for(const a in e){const c=$(e,a),g=$(t,a);if(c&&!g||!c&&g||!ks(e[a],t[a],s))return!1}return Ai(e)===Ai(t)}function Ti(e,t,s,i){s||(s=[new Map,new Map]);const[n,l]=s;if(n.has(e)||l.has(t))return n.get(e)===t&&l.get(t)===e;n.set(e,t),l.set(t,e);const r=i(e,t,s);return n.delete(e),l.delete(t),r}function ks(e,t,s){if(e===t)return!0;let i=_i(e),n=_i(t);return i||n?i&&n?e.getTime()===t.getTime():!1:(i=He(e),n=He(t),i||n?e===t:(i=N(e),n=N(t),i||n?i&&n?Ti(e,t,s,Al):!1:(i=Z(e),n=Z(t),i||n?!i||!n?!1:Ti(e,t,s,El):String(e)===String(t))))}function Ai(e){return Object.getPrototypeOf(e)===null&&e[Symbol.toPrimitive]==null&&typeof e.toString!="function"&&typeof e.valueOf!="function"?kt(e):String(e)}const dn=e=>!!(e&&e.__v_isRef===!0),j=e=>re(e)?e:e==null?"":N(e)||Z(e)&&(e.toString===rn||!D(e.toString))?dn(e)?j(e.value):JSON.stringify(e,gn,2):String(e),gn=(e,t)=>dn(t)?gn(e,t.value):rt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((s,[i,n],l)=>(s[Ls(i,l)+" =>"]=n,s),{})}:cs(t)?{[`Set(${t.size})`]:[...t.values()].map(s=>Ls(s))}:He(t)?Ls(t):Z(t)&&!N(t)&&!an(t)?String(t):t,Ls=(e,t="")=>{var s;return He(e)?`Symbol(${(s=e.description)!=null?s:t})`:e};/**
* @vue/reactivity v3.5.46
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ge;class Il{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&ge&&(ge.active?(this.parent=ge,this.index=(ge.scopes||(ge.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,s;if(this.scopes){const i=this.scopes.slice();for(t=0,s=i.length;t<s;t++)i[t].pause()}for(t=0,s=this.effects.length;t<s;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,s;if(this.scopes){const n=this.scopes.slice();for(t=0,s=n.length;t<s;t++)n[t].resume()}const i=this.effects.slice();for(t=0,s=i.length;t<s;t++)i[t].resume()}}run(t){if(this._active){const s=ge;try{return ge=this,t()}finally{ge=s}}}on(){++this._on===1&&(this.prevScope=ge,ge=this)}off(){if(this._on>0&&--this._on===0){if(ge===this)ge=this.prevScope;else{let t=ge;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let s,i;for(s=0,i=this.effects.length;s<i;s++)this.effects[s].stop();for(this.effects.length=0,s=0,i=this.cleanups.length;s<i;s++)this.cleanups[s]();if(this.cleanups.length=0,this.scopes){const n=this.scopes.slice();for(s=0,i=n.length;s<i;s++)n[s].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0}}}function Ml(){return ge}let ie;const Fs=new WeakSet;class un{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ge&&(ge.active?ge.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Fs.has(this)&&(Fs.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||mn(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ei(this),hn(this);const t=ie,s=Me;ie=this,Me=!0;try{return this.fn()}finally{vn(this),ie=t,Me=s,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)oi(t);this.deps=this.depsTail=void 0,Ei(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Fs.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){qs(this)&&this.run()}get dirty(){return qs(this)}}let fn=0,Ft,Ot;function mn(e,t=!1){if(e.flags|=8,t){e.next=Ot,Ot=e;return}e.next=Ft,Ft=e}function ri(){fn++}function ai(){if(--fn>0)return;if(Ot){let t=Ot;for(Ot=void 0;t;){const s=t.next;t.next=void 0,t.flags&=-9,t=s}}let e;for(;Ft;){let t=Ft;for(Ft=void 0;t;){const s=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){e||(e=i)}t=s}}if(e)throw e}function hn(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function vn(e){let t,s=e.depsTail,i=s;for(;i;){const n=i.prevDep;i.version===-1?(i===s&&(s=n),oi(i),Rl(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=n}e.deps=t,e.depsTail=s}function qs(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(bn(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function bn(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===zt)||(e.globalVersion=zt,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!qs(e))))return;e.flags|=2;const t=e.dep,s=ie,i=Me;ie=e,Me=!0;try{hn(e);const n=e.fn(e._value);(t.version===0||ze(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(n){throw t.version++,n}finally{ie=s,Me=i,vn(e),e.flags&=-3}}function oi(e,t=!1){const{dep:s,prevSub:i,nextSub:n}=e;if(i&&(i.nextSub=n,e.prevSub=void 0),n&&(n.prevSub=i,e.nextSub=void 0),s.subs===e&&(s.subs=i,!i&&s.computed)){s.computed.flags&=-5;for(let l=s.computed.deps;l;l=l.nextDep)oi(l,!0)}!t&&!--s.sc&&s.map&&s.map.delete(s.key)}function Rl(e){const{prevDep:t,nextDep:s}=e;t&&(t.nextDep=s,e.prevDep=void 0),s&&(s.prevDep=t,e.nextDep=void 0)}let Me=!0;const yn=[];function qe(){yn.push(Me),Me=!1}function Ke(){const e=yn.pop();Me=e===void 0?!0:e}function Ei(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const s=ie;ie=void 0;try{t()}finally{ie=s}}}let zt=0;class Ll{constructor(t,s){this.sub=t,this.dep=s,this.version=s.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ci{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ie||!Me||ie===this.computed)return;let s=this.activeLink;if(s===void 0||s.sub!==ie)s=this.activeLink=new Ll(ie,this),ie.deps?(s.prevDep=ie.depsTail,ie.depsTail.nextDep=s,ie.depsTail=s):ie.deps=ie.depsTail=s,xn(s);else if(s.version===-1&&(s.version=this.version,s.nextDep)){const i=s.nextDep;i.prevDep=s.prevDep,s.prevDep&&(s.prevDep.nextDep=i),s.prevDep=ie.depsTail,s.nextDep=void 0,ie.depsTail.nextDep=s,ie.depsTail=s,ie.deps===s&&(ie.deps=i)}return s}trigger(t){this.version++,zt++,this.notify(t)}notify(t){ri();try{for(let s=this.subs;s;s=s.prevSub)s.sub.notify()&&s.sub.dep.notify()}finally{ai()}}}function xn(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)xn(i)}const s=e.dep.subs;s!==e&&(e.prevSub=s,s&&(s.nextSub=e)),e.dep.subs=e}}const Ks=new WeakMap,ht=Symbol(""),Qs=Symbol(""),Ut=Symbol("");function ue(e,t,s){if(Me&&ie){let i=Ks.get(e);i||Ks.set(e,i=new Map);let n=i.get(s);n||(i.set(s,n=new ci),n.map=i,n.key=s),n.track()}}function Xe(e,t,s,i,n,l){const r=Ks.get(e);if(!r){zt++;return}const a=c=>{c&&c.trigger()};if(ri(),t==="clear")r.forEach(a);else{const c=N(e),g=c&&li(s);if(c&&s==="length"){const d=Number(i);r.forEach((m,_)=>{(_==="length"||_===Ut||!He(_)&&_>=d)&&a(m)})}else switch((s!==void 0||r.has(void 0))&&a(r.get(s)),g&&a(r.get(Ut)),t){case"add":c?g&&a(r.get("length")):(a(r.get(ht)),rt(e)&&a(r.get(Qs)));break;case"delete":c||(a(r.get(ht)),rt(e)&&a(r.get(Qs)));break;case"set":rt(e)&&a(r.get(ht));break}}ai()}function yt(e){const t=G(e);return t===e||(ue(t,"iterate",Ut),_e(e))?t:Qe(e)?at(e)?t.map(s=>ot(Ce(s))):t.map(ot):t.map(Ce)}function _s(e){return ue(e=G(e),"iterate",Ut),e}function Ve(e,t){return Qe(e)?ot(at(e)?Ce(t):t):Ce(t)}const Fl={__proto__:null,[Symbol.iterator](){return Os(this,Symbol.iterator,e=>Ve(this,e))},concat(...e){return yt(this).concat(...e.map(t=>N(t)?yt(t):t))},entries(){return Os(this,"entries",e=>(e[1]=Ve(this,e[1]),e))},every(e,t){return Je(this,"every",e,t,void 0,arguments)},filter(e,t){return Je(this,"filter",e,t,s=>s.map(i=>Ve(this,i)),arguments)},find(e,t){return Je(this,"find",e,t,s=>Ve(this,s),arguments)},findIndex(e,t){return Je(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Je(this,"findLast",e,t,s=>Ve(this,s),arguments)},findLastIndex(e,t){return Je(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Je(this,"forEach",e,t,void 0,arguments)},includes(...e){return Ns(this,"includes",e)},indexOf(...e){return Ns(this,"indexOf",e)},join(e){return yt(this).join(e)},lastIndexOf(...e){return Ns(this,"lastIndexOf",e)},map(e,t){return Je(this,"map",e,t,void 0,arguments)},pop(){return Pt(this,"pop")},push(...e){return Pt(this,"push",e)},reduce(e,...t){return Mi(this,"reduce",e,t)},reduceRight(e,...t){return Mi(this,"reduceRight",e,t)},shift(){return Pt(this,"shift")},some(e,t){return Je(this,"some",e,t,void 0,arguments)},splice(...e){return Pt(this,"splice",e)},toReversed(){return yt(this).toReversed()},toSorted(e){return yt(this).toSorted(e)},toSpliced(...e){return yt(this).toSpliced(...e)},unshift(...e){return Pt(this,"unshift",e)},values(){return Os(this,"values",e=>Ve(this,e))}};function Os(e,t,s){const i=_s(e),n=i[t],l=n.call(i);if(i!==e&&!_e(e)){if(l[Symbol.toStringTag]==="Array Iterator"){const r=Object.create(Object.getPrototypeOf(l));return r.next=()=>Ii(l.next(),s),n!==wn[t]&&Object.defineProperties(r,{return:{get(){const a=l.return;return typeof a=="function"?a.bind(l):a}},throw:{get(){const a=l.throw;return typeof a=="function"?a.bind(l):a}}}),r}l._next=l.next,l.next=()=>Ii(l._next(),s)}return l}function Ii(e,t){return e.done||(e.value=t(e.value)),e}const wn=Array.prototype;function Je(e,t,s,i,n,l){const r=_s(e),a=r!==e&&!_e(e),c=r[t];if(c!==wn[t]){const m=c.apply(e,l);return a?Ce(m):m}let g=s;r!==e&&(a?g=function(m,_){return s.call(this,Ve(e,m),_,e)}:s.length>2&&(g=function(m,_){return s.call(this,m,_,e)}));const d=c.call(r,g,i);return a&&n?n(d):d}function Mi(e,t,s,i){const n=_s(e),l=n!==e&&!_e(e);let r=s,a=!1;n!==e&&(l?(a=i.length===0,r=function(g,d,m){return a&&(a=!1,g=Ve(e,g)),s.call(this,g,Ve(e,d),m,e)}):s.length>3&&(r=function(g,d,m){return s.call(this,g,d,m,e)}));const c=n[t](r,...i);return a?Ve(e,c):c}function Ns(e,t,s){const i=G(e);ue(i,"iterate",Ut);const n=i[t](...s);return(n===-1||n===!1)&&ui(s[0])?(s[0]=G(s[0]),i[t](...s)):n}function Pt(e,t,s=[]){qe(),ri();const i=G(e)[t].apply(e,s);return ai(),Ke(),i}const Ol=ii("__proto__,__v_isRef,__isVue"),Sn=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(He));function Nl(e){He(e)||(e=String(e));const t=G(this);return ue(t,"has",e),t.hasOwnProperty(e)}class jn{constructor(t=!1,s=!1){this._isReadonly=t,this._isShallow=s}get(t,s,i){if(s==="__v_skip")return t.__v_skip;const n=this._isReadonly,l=this._isShallow;if(s==="__v_isReactive")return!n;if(s==="__v_isReadonly")return n;if(s==="__v_isShallow")return l;if(s==="__v_raw")return i===(n?l?Kl:Pn:l?Cn:_n).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const r=N(t);if(!n){let c;if(r&&(c=Fl[s]))return c;if(s==="hasOwnProperty")return Nl}const a=Reflect.get(t,s,fe(t)?t:i);if((He(s)?Sn.has(s):Ol(s))||(n||ue(t,"get",s),l))return a;if(fe(a)){const c=r&&li(s)?a:a.value;return n&&Z(c)?Js(c):c}return Z(a)?n?Js(a):di(a):a}}class kn extends jn{constructor(t=!1){super(!1,t)}set(t,s,i,n){let l=t[s];const r=N(t)&&li(s);if(!this._isShallow){const g=Qe(l);if(!_e(i)&&!Qe(i)&&(l=G(l),i=G(i)),!r&&fe(l)&&!fe(i))return g||(l.value=i),!0}const a=r?Number(s)<t.length:$(t,s),c=Reflect.set(t,s,i,fe(t)?t:n);return t===G(n)&&c&&(a?ze(i,l)&&Xe(t,"set",s,i):Xe(t,"add",s,i)),c}deleteProperty(t,s){const i=$(t,s);t[s];const n=Reflect.deleteProperty(t,s);return n&&i&&Xe(t,"delete",s,void 0),n}has(t,s){const i=Reflect.has(t,s);return(!He(s)||!Sn.has(s))&&ue(t,"has",s),i}ownKeys(t){return ue(t,"iterate",N(t)?"length":ht),Reflect.ownKeys(t)}}class Dl extends jn{constructor(t=!1){super(!0,t)}set(t,s){return!0}deleteProperty(t,s){return!0}}const Vl=new kn,Wl=new Dl,Bl=new kn(!0);const Gs=e=>e,Xt=e=>Reflect.getPrototypeOf(e);function zl(e,t,s){return function(...i){const n=this.__v_raw,l=G(n),r=rt(l),a=e==="entries"||e===Symbol.iterator&&r,c=e==="keys"&&r,g=n[e](...i),d=s?Gs:t?ot:Ce;return!t&&ue(l,"iterate",c?Qs:ht),pe(Object.create(g),{next(){const{value:m,done:_}=g.next();return _?{value:m,done:_}:{value:a?[d(m[0]),d(m[1])]:d(m),done:_}}})}}function es(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Ul(e,t){const s={get(n){const l=this.__v_raw,r=G(l),a=G(n);e||(ze(n,a)&&ue(r,"get",n),ue(r,"get",a));const{has:c}=Xt(r),g=t?Gs:e?ot:Ce;if(c.call(r,n))return g(l.get(n));if(c.call(r,a))return g(l.get(a));l!==r&&l.get(n)},get size(){const n=this.__v_raw;return!e&&ue(G(n),"iterate",ht),n.size},has(n){const l=this.__v_raw,r=G(l),a=G(n);return e||(ze(n,a)&&ue(r,"has",n),ue(r,"has",a)),n===a?l.has(n):l.has(n)||l.has(a)},forEach(n,l){const r=this,a=r.__v_raw,c=G(a),g=t?Gs:e?ot:Ce;return!e&&ue(c,"iterate",ht),a.forEach((d,m)=>n.call(l,g(d),g(m),r))}};return pe(s,e?{add:es("add"),set:es("set"),delete:es("delete"),clear:es("clear")}:{add(n){const l=G(this),r=Xt(l),a=G(n),c=!t&&!_e(n)&&!Qe(n)?a:n;return r.has.call(l,c)||ze(n,c)&&r.has.call(l,n)||ze(a,c)&&r.has.call(l,a)||(l.add(c),Xe(l,"add",c,c)),this},set(n,l){!t&&!_e(l)&&!Qe(l)&&(l=G(l));const r=G(this),{has:a,get:c}=Xt(r);let g=a.call(r,n);g||(n=G(n),g=a.call(r,n));const d=c.call(r,n);return r.set(n,l),g?ze(l,d)&&Xe(r,"set",n,l):Xe(r,"add",n,l),this},delete(n){const l=G(this),{has:r,get:a}=Xt(l);let c=r.call(l,n);c||(n=G(n),c=r.call(l,n)),a&&a.call(l,n);const g=l.delete(n);return c&&Xe(l,"delete",n,void 0),g},clear(){const n=G(this),l=n.size!==0,r=n.clear();return l&&Xe(n,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(n=>{s[n]=zl(n,e,t)}),s}function pi(e,t){const s=Ul(e,t);return(i,n,l)=>n==="__v_isReactive"?!e:n==="__v_isReadonly"?e:n==="__v_isShallow"?t:n==="__v_raw"?i:Reflect.get($(s,n)&&n in i?s:i,n,l)}const $l={get:pi(!1,!1)},Hl={get:pi(!1,!0)},ql={get:pi(!0,!1)};const _n=new WeakMap,Cn=new WeakMap,Pn=new WeakMap,Kl=new WeakMap;function Ql(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function di(e){return Qe(e)?e:gi(e,!1,Vl,$l,_n)}function Gl(e){return gi(e,!1,Bl,Hl,Cn)}function Js(e){return gi(e,!0,Wl,ql,Pn)}function gi(e,t,s,i,n){if(!Z(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const l=n.get(e);if(l)return l;const r=Ql(bl(e));if(r===0)return e;const a=new Proxy(e,r===2?i:s);return n.set(e,a),a}function at(e){return Qe(e)?at(e.__v_raw):!!(e&&e.__v_isReactive)}function Qe(e){return!!(e&&e.__v_isReadonly)}function _e(e){return!!(e&&e.__v_isShallow)}function ui(e){return e?!!e.__v_raw:!1}function G(e){const t=e&&e.__v_raw;return t?G(t):e}function Jl(e){return!$(e,"__v_skip")&&Object.isExtensible(e)&&cn(e,"__v_skip",!0),e}const Ce=e=>Z(e)?di(e):e,ot=e=>Z(e)?Js(e):e;function fe(e){return e?e.__v_isRef===!0:!1}function Tt(e){return Yl(e,!1)}function Yl(e,t){return fe(e)?e:new Zl(e,t)}class Zl{constructor(t,s){this.dep=new ci,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=s?t:G(t),this._value=s?t:Ce(t),this.__v_isShallow=s}get value(){return this.dep.track(),this._value}set value(t){const s=this._rawValue,i=this.__v_isShallow||_e(t)||Qe(t);t=i?t:G(t),ze(t,s)&&(this._rawValue=t,this._value=i?t:Ce(t),this.dep.trigger())}}function ps(e){return fe(e)?e.value:e}const Xl={get:(e,t,s)=>t==="__v_raw"?e:ps(Reflect.get(e,t,s)),set:(e,t,s,i)=>{const n=e[t];return fe(n)&&!fe(s)?(n.value=s,!0):Reflect.set(e,t,s,i)}};function Tn(e){return at(e)?e:new Proxy(e,Xl)}class er{constructor(t,s,i){this.fn=t,this.setter=s,this._value=void 0,this.dep=new ci(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=zt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!s,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ie!==this)return mn(this,!0),!0}get value(){const t=this.dep.track();return bn(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function tr(e,t,s=!1){let i,n;return D(e)?i=e:(i=e.get,n=e.set),new er(i,n,s)}const ts={},ds=new WeakMap;let ft;function sr(e,t=!1,s=ft){if(s){let i=ds.get(s);i||ds.set(s,i=[]),i.push(e)}}function ir(e,t,s=te){const{immediate:i,deep:n,once:l,scheduler:r,augmentJob:a,call:c}=s,g=A=>n?A:_e(A)||n===!1||n===0?et(A,1):et(A);let d,m,_,T,H=!1,F=!1;if(fe(e)?(m=()=>e.value,H=_e(e)):at(e)?(m=()=>g(e),H=!0):N(e)?(F=!0,H=e.some(A=>at(A)||_e(A)),m=()=>e.map(A=>{if(fe(A))return A.value;if(at(A))return g(A);if(D(A))return c?c(A,2):A()})):D(e)?t?m=c?()=>c(e,2):e:m=()=>{if(_){qe();try{_()}finally{Ke()}}const A=ft;ft=d;try{return c?c(e,3,[T]):e(T)}finally{ft=A}}:m=$e,t&&n){const A=m,q=n===!0?1/0:n;m=()=>et(A(),q)}const ne=Ml(),J=()=>{d.stop(),ne&&ne.active&&ni(ne.effects,d)};if(l&&t){const A=t;t=(...q)=>{try{return A(...q)}finally{J()}}}let I=F?new Array(e.length).fill(ts):ts;const V=A=>{if(!(!(d.flags&1)||!d.dirty&&!A))if(t){const q=d.run();if(A||n||H||(F?q.some((K,L)=>ze(K,I[L])):ze(q,I))){const K=ft;qe();try{_&&_(),ft=d;const L=[q,I===ts?void 0:F&&I[0]===ts?[]:I,T];I=q,c?c(t,3,L):t(...L)}finally{ft=K,Ke()}}}else d.run()};return a&&a(V),d=new un(m),d.scheduler=r?()=>r(V,!1):V,T=A=>sr(A,!1,d),_=d.onStop=()=>{const A=ds.get(d);if(A){if(c)c(A,4);else for(const q of A)q();ds.delete(d)}},t?i?V(!0):I=d.run():r?r(V.bind(null,!0),!0):d.run(),J.pause=d.pause.bind(d),J.resume=d.resume.bind(d),J.stop=J,J}function et(e,t=1/0,s){if(t<=0||!Z(e)||e.__v_skip||(s=s||new Map,(s.get(e)||0)>=t))return e;if(s.set(e,t),t--,fe(e))et(e.value,t,s);else if(N(e))for(let i=0;i<e.length;i++)et(e[i],t,s);else if(cs(e)||rt(e))e.forEach(i=>{et(i,t,s)});else if(an(e)){for(const i in e)et(e[i],t,s);for(const i of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,i)&&et(e[i],t,s)}return e}/**
* @vue/runtime-core v3.5.46
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Gt(e,t,s,i){try{return i?e(...i):e()}catch(n){Cs(n,t,s)}}function Re(e,t,s,i){if(D(e)){const n=Gt(e,t,s,i);return n&&ln(n)&&n.catch(l=>{Cs(l,t,s,void 0,!0)}),n}if(N(e)){const n=[];for(let l=0;l<e.length;l++)n.push(Re(e[l],t,s,i));return n}}function Cs(e,t,s,i=!0,n=!1){const l=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||te;if(t){let c=t.parent;const g=t.proxy,d=`https://vuejs.org/error-reference/#runtime-${s}`;for(;c;){const m=c.ec;if(m&&!c.isUnmounted&&(!n||c.scope.active)){for(let _=0;_<m.length;_++)if(m[_](e,g,d)===!1)return}c=c.parent}if(r){qe(),Gt(r,null,10,[e,g,d]),Ke();return}}nr(e,s,l,i,a)}function nr(e,t,s,i=!0,n=!1){if(n)throw e;console.error(e)}const ve=[];let Ee=-1;const We=[];let nt=null,xt=0;const An=Promise.resolve();let gs=null;function lr(e){const t=gs||An;return e?t.then(this?e.bind(this):e):t}function rr(e){let t=Ee+1,s=ve.length;for(;t<s;){const i=t+s>>>1,n=ve[i],l=$t(n);l<e||l===e&&n.flags&2?t=i+1:s=i}return t}function fi(e){if(!(e.flags&1)){const t=$t(e),s=ve[ve.length-1];!s||!(e.flags&2)&&t>=$t(s)?ve.push(e):ve.splice(rr(t),0,e),e.flags|=1,En()}}function En(){gs||(gs=An.then(Rn))}function ar(e){if(!N(e))nt&&e.id===-1?nt.splice(xt+1,0,e):e.flags&1||(We.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)We.push(e[t]);En()}function In(e,t,s,i=Ee+1){for(;i<ve.length;i++){const n=ve[i];if(n&&n.flags&2){if(e&&n.id!==e.uid||t!==void 0&&!(n.id>=t))continue;ve.splice(i,1),i=e?i-1:Ee,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function Mn(e,t,s=0){if(We.length){let i=We,n=0;if(t){i=[];for(let r=0;r<We.length;r++){const a=We[r];(a.i!==void 0?!a.i||a.i.uid<s:t.has(a))?We[n++]=a:i.push(a)}}const l=[...new Set(i)].sort((r,a)=>$t(r)-$t(a));if(We.length=n,nt){for(let r=0;r<l.length;r++)nt.push(l[r]);return}for(nt=l,xt=0;xt<nt.length;xt++){const r=nt[xt];r.flags&4&&(r.flags&=-2),r.flags&8||r(),r.flags&=-2}nt=null,xt=0}}let Ds=!1;function or(e,t){if(Ds){e();return}const s=t===void 0?void 0:new Set(We);e(),Ds=!0;try{In(void 0,t),Mn(void 0,s,t)}finally{Ds=!1}}const $t=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Rn(e){try{for(Ee=0;Ee<ve.length;Ee++){const t=ve[Ee];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Gt(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ee<ve.length;Ee++){const t=ve[Ee];t&&(t.flags&=-2)}Ee=-1,ve.length=0,Mn(),gs=null,(ve.length||We.length)&&Rn()}}let ke=null,Ln=null;function us(e){const t=ke;return ke=e,Ln=e&&e.type.__scopeId||null,t}function cr(e,t=ke,s){if(!t||e._n)return e;const i=(...n)=>{i._d&&Ui(-1);const l=us(t),r=vt.length;let a;try{a=e(...n)}finally{for(let c=vt.length;c>r;c--)ll();us(l),i._d&&Ui(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function ss(e,t){if(ke===null)return e;const s=Es(ke),i=e.dirs||(e.dirs=[]);for(let n=0;n<t.length;n++){let[l,r,a,c=te]=t[n];l&&(D(l)&&(l={mounted:l,updated:l}),l.deep&&et(r),i.push({dir:l,instance:s,value:r,oldValue:void 0,arg:a,modifiers:c}))}return e}function gt(e,t,s,i){let n=e;if(i==="beforeMount")e._mount=e;else if(i==="beforeUpdate"){const a=t&&t._mount;a&&(a._latest=e,e._mount=a)}else if(i==="mounted"){const a=e._latest;e._mount=e._latest=void 0,a&&(n=a,a._mount=void 0)}const l=n.dirs,r=t&&t.dirs;for(let a=0;a<l.length;a++){let c=l[a];r?c.oldValue=r[a].value:i==="mounted"&&c.oldValue!==void 0&&(c=pe({},c,{oldValue:void 0}));let g=c.dir[i];g&&(qe(),Re(g,s,8,[e.el,c,n,t]),Ke())}}function pr(e,t){if(be){let s=be.provides;const i=be.parent&&be.parent.provides;i===s&&(s=be.provides=Object.create(i)),s[e]=t}}function ls(e,t,s=!1){const i=aa();if(i||wt){let n=wt?wt._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(n&&e in n)return n[e];if(arguments.length>1)return s&&D(t)?t.call(i&&i.proxy):t}}const dr=Symbol.for("v-scx"),gr=()=>ls(dr);function rs(e,t,s){return Fn(e,t,s)}function Fn(e,t,s=te){const{immediate:i,deep:n,flush:l,once:r}=s,a=pe({},s),c=t&&i||!t&&l!=="post";let g;if(Qt){if(l==="sync"){const T=gr();g=T.__watcherHandles||(T.__watcherHandles=[])}else if(!c){const T=()=>{};return T.stop=$e,T.resume=$e,T.pause=$e,T}}const d=be;a.call=(T,H,F)=>Re(T,d,H,F);let m=!1;l==="post"?a.scheduler=T=>{T.i=d,he(T,d&&d.suspense)}:l!=="sync"&&(m=!0,a.scheduler=(T,H)=>{H?T():fi(T)}),a.augmentJob=T=>{t&&(T.flags|=4),m&&(T.flags|=2,d&&(T.id=d.uid,T.i=d))};const _=ir(e,t,a);return Qt&&(g?g.push(_):c&&_()),_}function ur(e,t,s){const i=this.proxy,n=re(e)?e.includes(".")?On(i,e):()=>i[e]:e.bind(i,i);let l;D(t)?l=t:(l=t.handler,s=t);const r=Jt(this),a=Fn(n,l.bind(i),s);return r(),a}function On(e,t){const s=t.split(".");return()=>{let i=e;for(let n=0;n<s.length&&i;n++)i=i[s[n]];return i}}const fr=Symbol("_vte"),Ps=e=>e.__isTeleport,Vs=Symbol("_leaveCb");function mr(e){let t=e[0];if(e.length>1){for(const s of e)if(s.type!==Le){t=s;break}}return t}function Nn(e){if(!mi(e))return Ps(e.type)&&e.children?mr(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:s}=e;if(s){if(t&16)return s[0];if(t&32&&D(s.default))return s.default()}}function Nt(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;const s=e.component.subTree;Nt(Ps(s.type)&&Nn(s)||s,t)}else if(e.shapeFlag&128){const s=e.suspense;if(s){const i=s.isHydrating?s.pendingBranch:s.activeBranch;i&&Nt(i,t.clone(i))}else e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)}else if(e.transition=t,e.type===W&&N(e.children)){const s=qn(e.children,!1);s&&Nt(s,t)}}function Ys(e){if(e.component)return Ys(e.component.subTree);if(e.type===W){const t=N(e.children)&&qn(e.children,!1);return t?Ys(t):void 0}if(e.type!==Le)return e}function Dn(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Ri(e,t){let s;return!!((s=Object.getOwnPropertyDescriptor(e,t))&&!s.configurable)}const fs=new WeakMap;function Dt(e,t,s,i,n=!1){if(N(e)){e.forEach((F,ne)=>Dt(F,t&&(N(t)?t[ne]:t),s,i,n));return}if(Vt(i)&&!n){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Dt(e,t,s,i.component.subTree);return}const l=i.shapeFlag&4?Es(i.component):i.el,r=n?null:l,{i:a,r:c}=e,g=t&&t.r,d=a.refs===te?a.refs={}:a.refs,m=a.setupState,_=G(m),T=m===te?nn:F=>Ri(d,F)?!1:$(_,F),H=(F,ne)=>!(ne&&Ri(d,ne));if(g!=null&&g!==c){if(Li(t),re(g))d[g]=null,T(g)&&(m[g]=null);else if(fe(g)){const F=t;H(g,F.k)&&(g.value=null),F.k&&(d[F.k]=null)}}if(D(c))Gt(c,a,12,[r,d]);else{const F=re(c),ne=fe(c);if(F||ne){const J=()=>{if(e.f){const I=F?T(c)?m[c]:d[c]:H()||!e.k?c.value:d[e.k];if(n)N(I)&&ni(I,l);else if(N(I))I.includes(l)||I.push(l);else if(F)d[c]=[l],T(c)&&(m[c]=d[c]);else{const V=[l];H(c,e.k)&&(c.value=V),e.k&&(d[e.k]=V)}}else F?(d[c]=r,T(c)&&(m[c]=r)):ne&&(H(c,e.k)&&(c.value=r),e.k&&(d[e.k]=r))};if(r){const I=()=>{J(),fs.delete(e)};I.id=-1,fs.set(e,I),he(I,s)}else Li(e),J()}}}function Li(e){const t=fs.get(e);t&&(t.flags|=8,fs.delete(e))}Ss().requestIdleCallback;Ss().cancelIdleCallback;const Vt=e=>!!e.type.__asyncLoader,mi=e=>e.type.__isKeepAlive;function hr(e,t){Vn(e,"a",t)}function vr(e,t){Vn(e,"da",t)}function Vn(e,t,s=be){const i=e.__wdc||(e.__wdc=()=>{let n=s;for(;n;){if(n.isDeactivated)return;n=n.parent}return e()});if(Ht(t,i,s),s){let n=s.parent;for(;n&&n.parent;)mi(n.parent.vnode)&&br(i,t,s,n),n=n.parent}}function br(e,t,s,i){const n=Ht(t,e,i,!0),l=Ht("um",()=>ni(i[t],n),s);l.flags=16}function Ht(e,t,s=be,i=!1){if(s){const n=s[e]||(s[e]=[]),l=t.__weh||(t.__weh=(...r)=>{qe();const a=Jt(s),c=Re(t,s,e,r);return a(),Ke(),c});return i?n.unshift(l):n.push(l),l}}const st=e=>(t,s=be)=>{(!Qt||e==="sp")&&Ht(e,(...i)=>t(...i),s)},yr=st("bm"),Wn=st("m"),xr=st("bu"),wr=st("u"),Sr=st("bum"),Bn=st("um"),jr=st("sp"),kr=st("rtg"),_r=st("rtc");function Cr(e,t=be){Ht("ec",e,t)}const Pr=Symbol.for("v-ndc");function ce(e,t,s,i){let n;const l=s,r=N(e);if(r||re(e)){const a=r&&at(e);let c=!1,g=!1;a&&(c=!_e(e),g=Qe(e),e=_s(e)),n=new Array(e.length);for(let d=0,m=e.length;d<m;d++)n[d]=t(c?g?ot(Ce(e[d])):Ce(e[d]):e[d],d,void 0,l)}else if(typeof e=="number")if(!Number.isInteger(e)||e<0)n=[];else{n=new Array(e);for(let a=0;a<e;a++)n[a]=t(a+1,a,void 0,l)}else if(Z(e))if(e[Symbol.iterator])n=Array.from(e,(a,c)=>t(a,c,void 0,l));else{const a=Object.keys(e);n=new Array(a.length);for(let c=0,g=a.length;c<g;c++){const d=a[c];n[c]=t(e[d],d,c,l)}}else n=[];return n}const Zs=e=>e?cl(e)?Es(e):Zs(e.parent):null,Wt=pe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Zs(e.parent),$root:e=>Zs(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Un(e),$forceUpdate:e=>e.f||(e.f=()=>{fi(e.update)}),$nextTick:e=>e.n||(e.n=lr.bind(e.proxy)),$watch:e=>ur.bind(e)}),Ws=(e,t)=>e!==te&&!e.__isScriptSetup&&$(e,t),Tr={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:s,setupState:i,data:n,props:l,accessCache:r,type:a,appContext:c}=e;if(t[0]!=="$"){const _=r[t];if(_!==void 0)switch(_){case 1:return i[t];case 2:return n[t];case 4:return s[t];case 3:return l[t]}else{if(Ws(i,t))return r[t]=1,i[t];if(n!==te&&$(n,t))return r[t]=2,n[t];if($(l,t))return r[t]=3,l[t];if(s!==te&&$(s,t))return r[t]=4,s[t];Xs&&(r[t]=0)}}const g=Wt[t];let d,m;if(g)return t==="$attrs"&&ue(e.attrs,"get",""),g(e);if((d=a.__cssModules)&&(d=d[t]))return d;if(s!==te&&$(s,t))return r[t]=4,s[t];if(m=c.config.globalProperties,$(m,t))return m[t]},set({_:e},t,s){const{data:i,setupState:n,ctx:l}=e;return Ws(n,t)?(n[t]=s,!0):i!==te&&$(i,t)?(i[t]=s,!0):$(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(l[t]=s,!0)},has({_:{data:e,setupState:t,accessCache:s,ctx:i,appContext:n,props:l,type:r}},a){let c;return!!(s[a]||e!==te&&a[0]!=="$"&&$(e,a)||Ws(t,a)||$(l,a)||$(i,a)||$(Wt,a)||$(n.config.globalProperties,a)||(c=r.__cssModules)&&c[a])},defineProperty(e,t,s){return s.get!=null?e._.accessCache[t]=0:$(s,"value")&&this.set(e,t,s.value,null),Reflect.defineProperty(e,t,s)}};function Fi(e){return N(e)?e.reduce((t,s)=>(t[s]=null,t),{}):e}let Xs=!0;function Ar(e){const t=Un(e),s=e.proxy,i=e.ctx;Xs=!1,t.beforeCreate&&Oi(t.beforeCreate,e,"bc");const{data:n,computed:l,methods:r,watch:a,provide:c,inject:g,created:d,beforeMount:m,mounted:_,beforeUpdate:T,updated:H,activated:F,deactivated:ne,beforeDestroy:J,beforeUnmount:I,destroyed:V,unmounted:A,render:q,renderTracked:K,renderTriggered:L,errorCaptured:se,serverPrefetch:oe,expose:Fe,inheritAttrs:ct,components:it,directives:pt,filters:le}=t;if(g&&Er(g,i,null),r)for(const z in r){const Q=r[z];D(Q)&&(i[z]=Q.bind(s))}if(n){const z=n.call(s,s);Z(z)&&(e.data=di(z))}if(Xs=!0,l)for(const z in l){const Q=l[z],Pe=D(Q)?Q.bind(s,s):D(Q.get)?Q.get.bind(s,s):$e,Yt=!D(Q)&&D(Q.set)?Q.set.bind(s):$e,dt=ee({get:Pe,set:Yt});Object.defineProperty(i,z,{enumerable:!0,configurable:!0,get:()=>dt.value,set:Te=>dt.value=Te})}if(a)for(const z in a)zn(a[z],i,s,z);if(c){const z=D(c)?c.call(s):c;Reflect.ownKeys(z).forEach(Q=>{pr(Q,z[Q])})}d&&Oi(d,e,"c");function R(z,Q){N(Q)?Q.forEach(Pe=>z(Pe.bind(s))):Q&&z(Q.bind(s))}if(R(yr,m),R(Wn,_),R(xr,T),R(wr,H),R(hr,F),R(vr,ne),R(Cr,se),R(_r,K),R(kr,L),R(Sr,I),R(Bn,A),R(jr,oe),N(Fe))if(Fe.length){const z=e.exposed||(e.exposed={});Fe.forEach(Q=>{Object.defineProperty(z,Q,{get:()=>s[Q],set:Pe=>s[Q]=Pe,enumerable:!0})})}else e.exposed||(e.exposed={});q&&e.render===$e&&(e.render=q),ct!=null&&(e.inheritAttrs=ct),it&&(e.components=it),pt&&(e.directives=pt),oe&&Dn(e)}function Er(e,t,s=$e){N(e)&&(e=ei(e));for(const i in e){const n=e[i];let l;Z(n)?"default"in n?l=ls(n.from||i,n.default,!0):l=ls(n.from||i):l=ls(n),fe(l)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>l.value,set:r=>l.value=r}):t[i]=l}}function Oi(e,t,s){Re(N(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,s)}function zn(e,t,s,i){let n=i.includes(".")?On(s,i):()=>s[i];if(re(e)){const l=t[e];D(l)&&rs(n,l)}else if(D(e))rs(n,e.bind(s));else if(Z(e))if(N(e))e.forEach(l=>zn(l,t,s,i));else{const l=D(e.handler)?e.handler.bind(s):t[e.handler];D(l)&&rs(n,l,e)}}function Un(e){const t=e.type,{mixins:s,extends:i}=t,{mixins:n,optionsCache:l,config:{optionMergeStrategies:r}}=e.appContext,a=l.get(t);let c;return a?c=a:!n.length&&!s&&!i?c=t:(c={},n.length&&n.forEach(g=>ms(c,g,r,!0)),ms(c,t,r)),Z(t)&&l.set(t,c),c}function ms(e,t,s,i=!1){const{mixins:n,extends:l}=t;l&&ms(e,l,s,!0),n&&n.forEach(r=>ms(e,r,s,!0));for(const r in t)if(!(i&&r==="expose")){const a=Ir[r]||s&&s[r];e[r]=a?a(e[r],t[r]):t[r]}return e}const Ir={data:Ni,props:Di,emits:Di,methods:It,computed:It,beforeCreate:me,created:me,beforeMount:me,mounted:me,beforeUpdate:me,updated:me,beforeDestroy:me,beforeUnmount:me,destroyed:me,unmounted:me,activated:me,deactivated:me,errorCaptured:me,serverPrefetch:me,components:It,directives:It,watch:Rr,provide:Ni,inject:Mr};function Ni(e,t){return t?e?function(){return pe(D(e)?e.call(this,this):e,D(t)?t.call(this,this):t)}:t:e}function Mr(e,t){return It(ei(e),ei(t))}function ei(e){if(N(e)){const t={};for(let s=0;s<e.length;s++)t[e[s]]=e[s];return t}return e}function me(e,t){return e?[...new Set([].concat(e,t))]:t}function It(e,t){return e?pe(Object.create(null),e,t):t}function Di(e,t){return e?N(e)&&N(t)?[...new Set([...e,...t])]:pe(Object.create(null),Fi(e),Fi(t??{})):t}function Rr(e,t){if(!e)return t;if(!t)return e;const s=pe(Object.create(null),e);for(const i in t)s[i]=me(e[i],t[i]);return s}function $n(){return{app:null,config:{isNativeTag:nn,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Lr=0;function Fr(e,t){return function(i,n=null){D(i)||(i=pe({},i)),n!=null&&!Z(n)&&(n=null);const l=$n(),r=new WeakSet,a=[];let c=!1;const g=l.app={_uid:Lr++,_component:i,_props:n,_container:null,_context:l,_instance:null,version:ua,get config(){return l.config},set config(d){},use(d,...m){return r.has(d)||(d&&D(d.install)?(r.add(d),d.install(g,...m)):D(d)&&(r.add(d),d(g,...m))),g},mixin(d){return l.mixins.includes(d)||l.mixins.push(d),g},component(d,m){return m?(l.components[d]=m,g):l.components[d]},directive(d,m){return m?(l.directives[d]=m,g):l.directives[d]},mount(d,m,_){if(!c){const T=g._ceVNode||tt(i,n);return T.appContext=l,_===!0?_="svg":_===!1&&(_=void 0),e(T,d,_),c=!0,g._container=d,d.__vue_app__=g,Es(T.component)}},onUnmount(d){a.push(d)},unmount(){c&&(Re(a,g._instance,16),e(null,g._container),delete g._container.__vue_app__)},provide(d,m){return l.provides[d]=m,g},runWithContext(d){const m=wt;wt=g;try{return d()}finally{wt=m}}};return g}}let wt=null;const Or=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ie(t)}Modifiers`]||e[`${bt(t)}Modifiers`];function Nr(e,t,...s){if(e.isUnmounted)return;const i=e.vnode.props||te;let n=s;const l=t.startsWith("update:"),r=l&&Or(i,t.slice(7));r&&(r.trim&&(n=s.map(d=>re(d)?d.trim():d)),r.number&&(n=n.map(Sl)));let a,c=i[a=Ms(t)]||i[a=Ms(Ie(t))];!c&&l&&(c=i[a=Ms(bt(t))]),c&&Re(c,e,6,n);const g=i[a+"Once"];if(g){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Re(g,e,6,n)}}const Dr=new WeakMap;function Hn(e,t,s=!1){const i=s?Dr:t.emitsCache,n=i.get(e);if(n!==void 0)return n;const l=e.emits;let r={},a=!1;if(!D(e)){const c=g=>{const d=Hn(g,t,!0);d&&(a=!0,pe(r,d))};!s&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!l&&!a?(Z(e)&&i.set(e,null),null):(N(l)?l.forEach(c=>r[c]=null):pe(r,l),Z(e)&&i.set(e,r),r)}function Ts(e,t){return!e||!ys(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),$(e,t[0].toLowerCase()+t.slice(1))||$(e,bt(t))||$(e,t))}function Vi(e){const{type:t,vnode:s,proxy:i,withProxy:n,propsOptions:[l],slots:r,attrs:a,emit:c,render:g,renderCache:d,props:m,data:_,setupState:T,ctx:H,inheritAttrs:F}=e,ne=us(e);let J,I;try{if(s.shapeFlag&4){const A=n||i,q=A;J=Be(g.call(q,A,d,m,T,_,H)),I=a}else{const A=t;J=Be(A.length>1?A(m,{attrs:a,slots:r,emit:c}):A(m,null)),I=t.props?a:Vr(a)}}catch(A){vt.length=0,Cs(A,e,1),J=tt(Le)}let V=J;if(I&&F!==!1){const A=Object.keys(I),{shapeFlag:q}=V;A.length&&q&7&&(l&&A.some(xs)&&(I=Wr(I,l)),V=St(V,I,!1,!0))}if(s.dirs&&(V=St(V,null,!1,!0),V.dirs=V.dirs?V.dirs.concat(s.dirs):s.dirs),s.transition){const A=Ps(V.type)&&Nn(V)||V;Nt(A,s.transition)}return J=V,us(ne),J}function qn(e,t=!0){let s;for(let i=0;i<e.length;i++){const n=e[i];if(bi(n)){if(n.type!==Le||n.children==="v-if"){if(s)return;s=n}}else return}return s}const Vr=e=>{let t;for(const s in e)(s==="class"||s==="style"||ys(s))&&((t||(t={}))[s]=e[s]);return t},Wr=(e,t)=>{const s={};for(const i in e)(!xs(i)||!(i.slice(9)in t))&&(s[i]=e[i]);return s};function Br(e,t,s){const{props:i,children:n,component:l}=e,{props:r,children:a,patchFlag:c}=t,g=l.emitsOptions;if(t.dirs||t.transition)return!0;if(s&&c>=0){if(c&1024)return!0;if(c&16)return i?Wi(i,r,g):!!r;if(c&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const _=d[m];if(Kn(r,i,_)&&!Ts(g,_))return!0}}}else return(n||a)&&(!a||!a.$stable)?!0:i===r?!1:i?r?Wi(i,r,g):!0:!!r;return!1}function Wi(e,t,s){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let n=0;n<i.length;n++){const l=i[n];if(!$(e,l)||Kn(t,e,l)&&!Ts(s,l))return!0}return!1}function Kn(e,t,s){const i=e[s],n=t[s];return s==="style"&&Z(i)&&Z(n)?!ks(i,n):i!==n}function zr({vnode:e,parent:t,suspense:s},i){for(;t;){const n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=i,e=n),n===e)(e=t.vnode).el=i,t=t.parent;else break}s&&s.activeBranch===e&&(s.vnode.el=i)}const Qn={},Gn=()=>Object.create(Qn),Jn=e=>Object.getPrototypeOf(e)===Qn;function Ur(e,t,s,i=!1){const n={},l=Gn();e.propsDefaults=Object.create(null),Yn(e,t,n,l);for(const r in e.propsOptions[0])r in n||(n[r]=void 0);s?e.props=i?n:Gl(n):e.type.props?e.props=n:e.props=l,e.attrs=l}function $r(e,t,s,i){const{props:n,attrs:l,vnode:{patchFlag:r}}=e,a=G(n),[c]=e.propsOptions;let g=!1;if((i||r>0)&&!(r&16)){if(r&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let _=d[m];if(Ts(e.emitsOptions,_))continue;const T=t[_];if(c)if($(l,_))T!==l[_]&&(l[_]=T,g=!0);else{const H=Ie(_);n[H]=ti(c,a,H,T,e,!1)}else T!==l[_]&&(l[_]=T,g=!0)}}}else{Yn(e,t,n,l)&&(g=!0);let d;for(const m in a)(!t||!$(t,m)&&((d=bt(m))===m||!$(t,d)))&&(c?s&&(s[m]!==void 0||s[d]!==void 0)&&(n[m]=ti(c,a,m,void 0,e,!0)):delete n[m]);if(l!==a)for(const m in l)(!t||!$(t,m))&&(delete l[m],g=!0)}g&&Xe(e.attrs,"set","")}function Yn(e,t,s,i){const[n,l]=e.propsOptions;let r=!1,a;if(t)for(let c in t){if(Lt(c))continue;const g=t[c];let d;n&&$(n,d=Ie(c))?!l||!l.includes(d)?s[d]=g:(a||(a={}))[d]=g:Ts(e.emitsOptions,c)||(!(c in i)||g!==i[c])&&(i[c]=g,r=!0)}if(l){const c=G(s),g=a||te;for(let d=0;d<l.length;d++){const m=l[d];s[m]=ti(n,c,m,g[m],e,!$(g,m))}}return r}function ti(e,t,s,i,n,l){const r=e[s];if(r!=null){const a=$(r,"default");if(a&&i===void 0){const c=r.default;if(r.type!==Function&&!r.skipFactory&&D(c)){const{propsDefaults:g}=n;if(s in g)i=g[s];else{const d=Jt(n);i=g[s]=c.call(null,t),d()}}else i=c;n.ce&&n.ce._setProp(s,i)}r[0]&&(l&&!a?i=!1:r[1]&&(i===""||i===bt(s))&&(i=!0))}return i}const Hr=new WeakMap;function Zn(e,t,s=!1){const i=s?Hr:t.propsCache,n=i.get(e);if(n)return n;const l=e.props,r={},a=[];let c=!1;if(!D(e)){const d=m=>{c=!0;const[_,T]=Zn(m,t,!0);pe(r,_),T&&a.push(...T)};!s&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!l&&!c)return Z(e)&&i.set(e,mt),mt;if(N(l))for(let d=0;d<l.length;d++){const m=Ie(l[d]);Bi(m)&&(r[m]=te)}else if(l)for(const d in l){const m=Ie(d);if(Bi(m)){const _=l[d],T=r[m]=N(_)||D(_)?{type:_}:pe({},_),H=T.type;let F=!1,ne=!0;if(N(H))for(let J=0;J<H.length;++J){const I=H[J],V=D(I)&&I.name;if(V==="Boolean"){F=!0;break}else V==="String"&&(ne=!1)}else F=D(H)&&H.name==="Boolean";T[0]=F,T[1]=ne,(F||$(T,"default"))&&a.push(m)}}const g=[r,a];return Z(e)&&i.set(e,g),g}function Bi(e){return e[0]!=="$"&&!Lt(e)}const hi=e=>e==="_"||e==="_ctx"||e==="$stable",vi=e=>N(e)?e.map(Be):[Be(e)],qr=(e,t,s)=>{if(t._n)return t;const i=cr((...n)=>vi(t(...n)),s);return i._c=!1,i},Xn=(e,t,s)=>{const i=e._ctx;for(const n in e){if(hi(n))continue;const l=e[n];if(D(l))t[n]=qr(n,l,i);else if(l!=null){const r=vi(l);t[n]=()=>r}}},el=(e,t)=>{const s=vi(t);e.slots.default=()=>s},tl=(e,t,s)=>{for(const i in t)(s||!hi(i))&&(e[i]=t[i])},Kr=(e,t,s)=>{const i=e.slots=Gn();if(e.vnode.shapeFlag&32){const n=t._;n?(tl(i,t,s),s&&cn(i,"_",n,!0)):Xn(t,i)}else t&&el(e,t)},Qr=(e,t,s)=>{const{vnode:i,slots:n}=e;let l=!0,r=te;if(i.shapeFlag&32){const a=t._;a?s&&a===1?l=!1:tl(n,t,s):(l=!t.$stable,Xn(t,n)),r=t}else t&&(el(e,t),r={default:1});if(l)for(const a in n)!hi(a)&&r[a]==null&&delete n[a]},he=ea;function Gr(e){return Jr(e)}function Jr(e,t){const s=Ss();s.__VUE__=!0;const{insert:i,remove:n,patchProp:l,createElement:r,createText:a,createComment:c,setText:g,setElementText:d,parentNode:m,nextSibling:_,setScopeId:T=$e,insertStaticContent:H}=e,F=(o,p,f,y=null,h=null,b=null,S=void 0,w=null,x=!!p.dynamicChildren)=>{if(o===p)return;o&&!At(o,p)&&(y=Zt(o),Te(o,h,b,!0),o=null),p.patchFlag===-2&&(x=!1,p.dynamicChildren=null),p.dynamicChildren&&o&&o.dynamicChildren&&o.dynamicChildren.hasOnce&&(p.dynamicChildren===mt&&(p.dynamicChildren=[]),p.dynamicChildren.hasOnce=!0);const{type:v,ref:E,shapeFlag:k}=p;switch(v){case As:ne(o,p,f,y);break;case Le:J(o,p,f,y);break;case zs:o==null&&I(p,f,y,S);break;case W:it(o,p,f,y,h,b,S,w,x);break;default:k&1?q(o,p,f,y,h,b,S,w,x):k&6?pt(o,p,f,y,h,b,S,w,x):(k&64||k&128)&&v.process(o,p,f,y,h,b,S,w,x,Ct)}E!=null&&h?Dt(E,o&&o.ref,b,p||o,!p):E==null&&o&&o.ref!=null&&Dt(o.ref,null,b,o,!0)},ne=(o,p,f,y)=>{if(o==null)i(p.el=a(p.children),f,y);else{const h=p.el=o.el;p.children!==o.children&&g(h,p.children)}},J=(o,p,f,y)=>{o==null?i(p.el=c(p.children||""),f,y):p.el=o.el},I=(o,p,f,y)=>{[o.el,o.anchor]=H(o.children,p,f,y,o.el,o.anchor)},V=({el:o,anchor:p},f,y)=>{let h;for(;o&&o!==p;)h=_(o),i(o,f,y),o=h;i(p,f,y)},A=({el:o,anchor:p})=>{let f;for(;o&&o!==p;)f=_(o),n(o),o=f;n(p)},q=(o,p,f,y,h,b,S,w,x)=>{if(p.type==="svg"?S="svg":p.type==="math"&&(S="mathml"),o==null)K(p,f,y,h,b,S,w,x);else{const v=o.el&&o.el._isVueCE?o.el:null;try{v&&v._beginPatch(),oe(o,p,h,b,S,w,x)}finally{v&&v._endPatch()}}},K=(o,p,f,y,h,b,S,w)=>{let x,v;const{props:E,shapeFlag:k,transition:M,dirs:O}=o;if(x=o.el=r(o.type,b,E&&E.is,E),k&8?d(x,o.children):k&16&&se(o.children,x,null,y,h,Bs(o,b),S,w),O&&gt(o,null,y,"created"),L(x,o,o.scopeId,S,y),E){for(const X in E)X!=="value"&&!Lt(X)&&l(x,X,null,E[X],b,y);"value"in E&&l(x,"value",null,E.value,b),(v=E.onVnodeBeforeMount)&&De(v,y,o)}O&&gt(o,null,y,"beforeMount");const U=Yr(h,M);U?M.beforeEnter(x):M&&!M.persisted&&(x[Xr]=!0),i(x,p,f),((v=E&&E.onVnodeMounted)||U||O)&&he(()=>{try{v&&De(v,y,o),U&&M.enter(x),O&&gt(o,null,y,"mounted")}finally{}},h)},L=(o,p,f,y,h)=>{if(f&&T(o,f),y)for(let b=0;b<y.length;b++)T(o,y[b]);if(h){let b=h.subTree;if(p===b||nl(b.type)&&(b.ssContent===p||b.ssFallback===p)){const S=h.vnode;L(o,S,S.scopeId,S.slotScopeIds,h.parent)}}},se=(o,p,f,y,h,b,S,w,x=0)=>{for(let v=x;v<o.length;v++){const E=o[v]=w?Ze(o[v]):Be(o[v]);F(null,E,p,f,y,h,b,S,w)}},oe=(o,p,f,y,h,b,S)=>{const w=p.el=o.el;let{patchFlag:x,dynamicChildren:v,dirs:E}=p;x|=o.patchFlag&16;const k=o.props||te,M=p.props||te;let O;if(f&&ut(f,!1),(O=M.onVnodeBeforeUpdate)&&De(O,f,p,o),E&&gt(p,o,f,"beforeUpdate"),f&&ut(f,!0),v&&(!o.dynamicChildren||o.dynamicChildren.length!==v.length)&&(x=0,S=!1,v=null),(k.innerHTML&&M.innerHTML==null||k.textContent&&M.textContent==null)&&d(w,""),v?Fe(o.dynamicChildren,v,w,f,y,Bs(p,h),b):S||Q(o,p,w,null,f,y,Bs(p,h),b,!1),x>0){if(x&16)ct(w,k,M,f,h);else if(x&2&&k.class!==M.class&&l(w,"class",null,M.class,h),x&4&&l(w,"style",k.style,M.style,h),x&8){const U=p.dynamicProps;for(let X=0;X<U.length;X++){const Y=U[X],ae=k[Y],de=M[Y];(de!==ae||Y==="value")&&l(w,Y,ae,de,h,f)}}x&1&&o.children!==p.children&&d(w,p.children)}else!S&&v==null&&ct(w,k,M,f,h);((O=M.onVnodeUpdated)||E)&&he(()=>{O&&De(O,f,p,o),E&&gt(p,o,f,"updated")},y)},Fe=(o,p,f,y,h,b,S)=>{for(let w=0;w<p.length;w++){const x=o[w],v=p[w],E=x.el||Bt(x),k=E&&(x.type===W||!At(x,v)||x.shapeFlag&198)?m(E):f;F(x,v,k,null,y,h,b,S,!0)}},ct=(o,p,f,y,h)=>{if(p!==f){if(p!==te)for(const b in p)!Lt(b)&&!(b in f)&&l(o,b,p[b],null,h,y);for(const b in f){if(Lt(b))continue;const S=f[b],w=p[b];S!==w&&b!=="value"&&l(o,b,w,S,h,y)}"value"in f&&l(o,"value",p.value,f.value,h)}},it=(o,p,f,y,h,b,S,w,x)=>{const v=p.el=o?o.el:a(""),E=p.anchor=o?o.anchor:a("");let{patchFlag:k,dynamicChildren:M,slotScopeIds:O}=p;O&&(w=w?w.concat(O):O),o==null?(i(v,f,y),i(E,f,y),se(p.children||[],f,E,h,b,S,w,x)):k>0&&k&64&&M&&o.dynamicChildren&&o.dynamicChildren.length===M.length?(Fe(o.dynamicChildren,M,f,h,b,S,w),(p.key!=null||h&&p===h.subTree)&&sl(o,p,!0)):Q(o,p,f,E,h,b,S,w,x)},pt=(o,p,f,y,h,b,S,w,x)=>{p.slotScopeIds=w,o==null?p.shapeFlag&512?h.ctx.activate(p,f,y,S,x):le(p,f,y,h,b,S,x):B(o,p,x)},le=(o,p,f,y,h,b,S)=>{const w=o.component=ra(o,y,h);if(mi(o)&&(w.ctx.renderer=Ct),oa(w,!1,S),w.asyncDep){if(h&&h.registerDep(w,R,S,b),!o.el){const x=w.subTree=tt(Le);J(null,x,p,f),o.placeholder=x.el}}else R(w,o,p,f,h,b,S)},B=(o,p,f)=>{const y=p.component=o.component;if(Br(o,p,f))if(y.asyncDep&&!y.asyncResolved){p.el=o.el,p.placeholder=o.placeholder,z(y,p,f);return}else y.next=p,y.update();else p.el=o.el,p.placeholder=o.placeholder,y.vnode=p},R=(o,p,f,y,h,b,S)=>{const w=()=>{if(o.isMounted){let{next:k,bu:M,u:O,parent:U,vnode:X}=o;{const Oe=il(o);if(Oe){k&&(k.el=X.el,z(o,k,S)),Oe.asyncDep.then(()=>{const Ge=()=>{o.job.flags&8||(h&&h.pendingBranch?he(Ge,h):v())};Ge.flags=48,he(Ge,h)});return}}let Y=k,ae;ut(o,!1),k?(k.el=X.el,z(o,k,S)):k=X,M&&Rs(M),(ae=k.props&&k.props.onVnodeBeforeUpdate)&&De(ae,U,k,X),ut(o,!0);const de=Vi(o),Ae=o.subTree;o.subTree=de,F(Ae,de,m(Ae.el||Bt(Ae)),Zt(Ae),o,h,b),k.el=de.el,Y===null&&zr(o,de.el),O&&he(O,h),(ae=k.props&&k.props.onVnodeUpdated)&&he(()=>De(ae,U,k,X),h)}else{let k;const{el:M,props:O}=p,{bm:U,m:X,parent:Y,root:ae,type:de}=o,Ae=Vt(p);ut(o,!1),U&&Rs(U),!Ae&&(k=O&&O.onVnodeBeforeMount)&&De(k,Y,p),ut(o,!0);{ae.ce&&ae.ce._hasShadowRoot()&&ae.ce._injectChildStyle(de,o.parent?o.parent.type:void 0);const Oe=o.subTree=Vi(o);F(null,Oe,f,y,o,h,b),p.el=Oe.el}if(X&&he(X,h),!Ae&&(k=O&&O.onVnodeMounted)){const Oe=p;he(()=>De(k,Y,Oe),h)}(p.shapeFlag&256||Y&&Vt(Y.vnode)&&Y.vnode.shapeFlag&256)&&o.a&&he(o.a,h),o.isMounted=!0,p=f=y=null}};o.scope.on();const x=o.effect=new un(w);o.scope.off();const v=o.update=x.run.bind(x),E=o.job=x.runIfDirty.bind(x);E.i=o,E.id=o.uid,x.scheduler=()=>fi(E),ut(o,!0),v()},z=(o,p,f)=>{p.component=o;const y=o.vnode.props;o.vnode=p,o.next=null,$r(o,p.props,y,f),Qr(o,p.children,f),qe(),In(o),Ke()},Q=(o,p,f,y,h,b,S,w,x=!1)=>{const v=o&&o.children,E=o?o.shapeFlag:0,k=p.children,{patchFlag:M,shapeFlag:O}=p;if(M>0){if(M&128){Yt(v,k,f,y,h,b,S,w,x);return}else if(M&256){Pe(v,k,f,y,h,b,S,w,x);return}}O&8?(E&16&&_t(v,h,b),k!==v&&d(f,k)):E&16?O&16?Yt(v,k,f,y,h,b,S,w,x):_t(v,h,b,!0):(E&8&&d(f,""),O&16&&se(k,f,y,h,b,S,w,x))},Pe=(o,p,f,y,h,b,S,w,x)=>{o=o||mt,p=p||mt;const v=o.length,E=p.length,k=Math.min(v,E);let M;for(M=0;M<k;M++){const O=p[M]=x?Ze(p[M]):Be(p[M]);F(o[M],O,f,null,h,b,S,w,x)}v>E?_t(o,h,b,!0,!1,k):se(p,f,y,h,b,S,w,x,k)},Yt=(o,p,f,y,h,b,S,w,x)=>{let v=0;const E=p.length;let k=o.length-1,M=E-1;for(;v<=k&&v<=M;){const O=o[v],U=p[v]=x?Ze(p[v]):Be(p[v]);if(At(O,U))F(O,U,f,null,h,b,S,w,x);else break;v++}for(;v<=k&&v<=M;){const O=o[k],U=p[M]=x?Ze(p[M]):Be(p[M]);if(At(O,U))F(O,U,f,null,h,b,S,w,x);else break;k--,M--}if(v>k){if(v<=M){const O=M+1,U=O<E?p[O].el:y;for(;v<=M;)F(null,p[v]=x?Ze(p[v]):Be(p[v]),f,U,h,b,S,w,x),v++}}else if(v>M)for(;v<=k;)Te(o[v],h,b,!0),v++;else{const O=v,U=v,X=new Map;for(v=U;v<=M;v++){const xe=p[v]=x?Ze(p[v]):Be(p[v]);xe.key!=null&&X.set(xe.key,v)}let Y,ae=0;const de=M-U+1;let Ae=!1,Oe=0;const Ge=new Array(de);for(v=0;v<de;v++)Ge[v]=0;for(v=O;v<=k;v++){const xe=o[v];if(ae>=de){Te(xe,h,b,!0);continue}let Ne;if(xe.key!=null)Ne=X.get(xe.key);else for(Y=U;Y<=M;Y++)if(Ge[Y-U]===0&&At(xe,p[Y])){Ne=Y;break}Ne===void 0?Te(xe,h,b,!0):(Ge[Ne-U]=v+1,Ne>=Oe?Oe=Ne:Ae=!0,F(xe,p[Ne],f,null,h,b,S,w,x),ae++)}const Si=Ae?Zr(Ge):mt;for(Y=Si.length-1,v=de-1;v>=0;v--){const xe=U+v,Ne=p[xe],ji=p[xe+1],ki=xe+1<E?ji.el||Bt(ji):y;Ge[v]===0?F(null,Ne,f,ki,h,b,S,w,x):Ae&&(Y<0||v!==Si[Y]?dt(Ne,f,ki,2):Y--)}}},dt=(o,p,f,y,h=null)=>{const{el:b,type:S,transition:w,children:x,shapeFlag:v}=o;if(v&6){dt(o.component.subTree,p,f,y);return}if(v&128){o.suspense.move(p,f,y);return}if(v&64){S.move(o,p,f,Ct);return}if(S===W){i(b,p,f);for(let k=0;k<x.length;k++)dt(x[k],p,f,y);i(o.anchor,p,f);return}if(S===zs){V(o,p,f);return}if(y!==2&&v&1&&w)if(y===0)w.persisted&&!b[Vs]?i(b,p,f):(w.beforeEnter(b),i(b,p,f),he(()=>w.enter(b),h));else{const{leave:k,delayLeave:M,afterLeave:O}=w,U=()=>{o.ctx.isUnmounted?n(b):i(b,p,f)},X=()=>{const Y=b._isLeaving||!!b[Vs];b._isLeaving&&b[Vs](!0),w.persisted&&!Y?U():k(b,()=>{U(),O&&O()})};M?M(b,U,X):X()}else i(b,p,f)},Te=(o,p,f,y=!1,h=!1)=>{const{type:b,props:S,ref:w,children:x,dynamicChildren:v,shapeFlag:E,patchFlag:k,dirs:M,cacheIndex:O,memo:U}=o;if((k===-2||v&&v.hasOnce)&&(h=!1),w!=null&&(qe(),Dt(w,null,f,o,!0),Ke()),O!=null&&(!o.ctx||o.ctx===p)&&(p.renderCache[O]=void 0),E&256&&p.ctx.deactivate(o))return;const X=E&1&&M,Y=!Vt(o);let ae;if(Y&&(ae=S&&S.onVnodeBeforeUnmount)&&De(ae,p,o),E&6)hl(o.component,f,y);else{if(E&128){o.suspense.unmount(f,y);return}X&&gt(o,null,p,"beforeUnmount"),E&64?o.type.remove(o,p,f,Ct,y):v&&!v.hasOnce&&(b!==W||k>0&&k&64)?_t(v,p,f,!1,!0):(b===W&&k&384||!h&&E&16)&&_t(x,p,f),y&&yi(o)}const de=U!=null&&O==null;(Y&&(ae=S&&S.onVnodeUnmounted)||X||de)&&he(()=>{ae&&De(ae,p,o),X&&gt(o,null,p,"unmounted"),de&&(o.el=null)},f)},yi=o=>{const{type:p,el:f,anchor:y,transition:h}=o,b=p===W;if(b&&!h){xi(f,y);return}if(p===zs){A(o),h&&!h.persisted&&h.afterLeave&&h.afterLeave();return}const S=b?Ys(o):o,w=()=>{b?m(f)&&xi(f,y):n(f),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(S&&S.shapeFlag&1&&h&&!h.persisted){const{leave:x,delayLeave:v}=h,E=S.el,k=()=>x(E,w);v?v(E,w,k):k()}else w()},xi=(o,p)=>{let f;for(;o!==p;)f=_(o),n(o),o=f;n(p)},hl=(o,p,f)=>{const{bum:y,scope:h,job:b,subTree:S,um:w,m:x,a:v}=o;zi(x),zi(v),y&&Rs(y),h.stop(),b?(b.flags|=8,Te(S,o,p,f)):S&&(S.transition=o.vnode.transition,Te(S,o,p,f)),w&&he(w,p);const E=()=>{o.isUnmounted=!0};E.flags=16,he(E,p)},_t=(o,p,f,y=!1,h=!1,b=0)=>{for(let S=b;S<o.length;S++)Te(o[S],p,f,y,h)},Zt=o=>{if(o.shapeFlag&6)return Zt(o.component.subTree);if(o.shapeFlag&128)return o.suspense.next();const p=_(o.anchor||o.el),f=p&&p[fr];return f?_(f):p},wi=(o,p,f)=>{const y=o&&p._vnode?void 0:o&&o.component?o.component.uid:la();or(()=>{o==null?p._vnode&&Te(p._vnode,null,null,!0):F(p._vnode||null,o,p,null,null,null,f),p._vnode=o},y)},Ct={p:F,um:Te,m:dt,r:yi,mt:le,mc:se,pc:Q,pbc:Fe,n:Zt,o:e};return{render:wi,hydrate:void 0,createApp:Fr(wi)}}function Bs({type:e,props:t},s){return s==="svg"&&e==="foreignObject"||s==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:s}function ut({effect:e,job:t},s){s?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Yr(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function sl(e,t,s=!1){const i=e.children,n=t.children;if(N(i)&&N(n))for(let l=0;l<i.length;l++){const r=i[l];let a=n[l];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=n[l]=Ze(n[l]),a.el=r.el),!s&&a.patchFlag!==-2&&sl(r,a)),a.type===As&&(a.patchFlag===-1&&(a=n[l]=Ze(a)),a.el=r.el),a.type===Le&&!a.el&&(a.el=r.el)}}function Zr(e){const t=e.slice(),s=[0];let i,n,l,r,a;const c=e.length;for(i=0;i<c;i++){const g=e[i];if(g!==0){if(n=s[s.length-1],e[n]<g){t[i]=n,s.push(i);continue}for(l=0,r=s.length-1;l<r;)a=l+r>>1,e[s[a]]<g?l=a+1:r=a;g<e[s[l]]&&(l>0&&(t[i]=s[l-1]),s[l]=i)}}for(l=s.length,r=s[l-1];l-- >0;)s[l]=r,r=t[r];return s}function il(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:il(t)}function zi(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Bt(e){if(e.placeholder)return e.placeholder;const t=e.component;if(t)return Bt(t.subTree);const s=e.suspense;return s&&s.activeBranch?Bt(s.activeBranch):null}const nl=e=>e.__isSuspense,Xr=Symbol("_deferredEnter");function ea(e,t){t&&t.pendingBranch?N(e)?t.effects.push(...e):t.effects.push(e):ar(e)}const W=Symbol.for("v-fgt"),As=Symbol.for("v-txt"),Le=Symbol.for("v-cmt"),zs=Symbol.for("v-stc"),vt=[];let we=null;function C(e=!1){vt.push(we=e?null:[])}function ll(){vt.pop(),we=vt[vt.length-1]||null}let qt=1;function Ui(e,t=!1){qt+=e,e<0&&we&&t&&(we.hasOnce=!0)}function rl(e){return e.dynamicChildren=qt>0?we||mt:null,ll(),qt>0&&we&&we.push(e),e}function P(e,t,s,i,n,l){return rl(u(e,t,s,i,n,l,!0))}function as(e,t,s,i,n){return rl(tt(e,t,s,i,n,!0))}function bi(e){return e?e.__v_isVNode===!0:!1}function At(e,t){return e.type===t.type&&e.key===t.key}const al=({key:e})=>e??null,os=({ref:e,ref_key:t,ref_for:s})=>(typeof e=="number"&&(e=""+e),e!=null?re(e)||fe(e)||D(e)?{i:ke,r:e,k:t,f:!!s}:e:null);function u(e,t=null,s=null,i=0,n=null,l=e===W?0:1,r=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&al(t),ref:t&&os(t),scopeId:Ln,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:i,dynamicProps:n,dynamicChildren:null,appContext:null,ctx:ke};return a?(hs(c,s),l&128&&e.normalize(c)):s&&(c.shapeFlag|=re(s)?8:16),qt>0&&!r&&we&&(c.patchFlag>0||l&6)&&c.patchFlag!==32&&we.push(c),c}const tt=ta;function ta(e,t=null,s=null,i=0,n=null,l=!1){if((!e||e===Pr)&&(e=Le),bi(e)){const a=St(e,t,!0);return s&&hs(a,s),qt>0&&!l&&we&&(a.shapeFlag&6?we[we.indexOf(e)]=a:we.push(a)),a.patchFlag=-2,a}if(ga(e)&&(e=e.__vccOpts),t){t=sa(t);let{class:a,style:c}=t;a&&!re(a)&&(t.class=ye(a)),Z(c)&&(ui(c)&&!N(c)&&(c=pe({},c)),t.style=js(c))}const r=re(e)?1:nl(e)?128:Ps(e)?64:Z(e)?4:D(e)?2:0;return u(e,t,s,i,n,r,l,!0)}function sa(e){return e?ui(e)?pe({},e):Jn(e)?pe({},e[dl]||e):e:null}function St(e,t,s=!1,i=!1){const{props:n,ref:l,patchFlag:r,children:a,transition:c}=e,g=t?ia(n||{},t):n,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:g,key:g&&al(g),ref:t&&t.ref?s&&l?N(l)?l.concat(os(t)):[l,os(t)]:os(t):l,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==W?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&St(e.ssContent),ssFallback:e.ssFallback&&St(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return c&&i&&Nt(d,c.clone(d)),d}function Se(e=" ",t=0){return tt(As,null,e,t)}function je(e="",t=!1){return t?(C(),as(Le,null,e)):tt(Le,null,e)}function Be(e){return e==null||typeof e=="boolean"?tt(Le):N(e)?tt(W,null,e.slice()):bi(e)?Ze(e):tt(As,null,String(e))}function Ze(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:St(e)}function hs(e,t){let s=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(N(t))s=16;else if(typeof t=="object")if(i&65){const n=t.default;n&&(n._c&&(n._d=!1),hs(e,n()),n._c&&(n._d=!0));return}else{s=32;const n=t._;!n&&!Jn(t)?t._ctx=ke:n===3&&ke&&(ke.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(D(t)){if(i&65){hs(e,{default:t});return}t={default:t,_ctx:ke},s=32}else t=String(t),i&64?(s=16,t=[Se(t)]):s=8;e.children=t,e.shapeFlag|=s}function ia(...e){const t={};for(let s=0;s<e.length;s++){const i=e[s];for(const n in i)if(n==="class")t.class!==i.class&&(t.class=ye([t.class,i.class]));else if(n==="style")t.style=js([t.style,i.style]);else if(ys(n)){const l=t[n],r=i[n];r&&l!==r&&!(N(l)&&l.includes(r))?t[n]=l?[].concat(l,r):r:r==null&&l==null&&!xs(n)&&(t[n]=r)}else n!==""&&(t[n]=i[n])}return t}function De(e,t,s,i=null){Re(e,t,7,[s,i])}const na=$n();let ol=0;function la(){return ol}function ra(e,t,s){const i=e.type,n=(t?t.appContext:e.appContext)||na,l={uid:ol++,vnode:e,type:i,parent:t,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Il(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(n.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Zn(i,n),emitsOptions:Hn(i,n),emit:null,emitted:null,propsDefaults:te,inheritAttrs:i.inheritAttrs,ctx:te,data:te,props:te,attrs:te,slots:te,refs:te,setupState:te,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=t?t.root:l,l.emit=Nr.bind(null,l),e.ce&&e.ce(l),l}let be=null;const aa=()=>be||ke;let vs,Kt;{const e=Ss(),t=(s,i)=>{let n;return(n=e[s])||(n=e[s]=[]),n.push(i),l=>{n.length>1?n.forEach(r=>r(l)):n[0](l)}};vs=t("__VUE_INSTANCE_SETTERS__",s=>be=s),Kt=t("__VUE_SSR_SETTERS__",s=>Qt=s)}const Jt=e=>{const t=be;return vs(e),e.scope.on(),()=>{e.scope.off(),vs(t)}},$i=()=>{be&&be.scope.off(),vs(null)};function cl(e){return e.vnode.shapeFlag&4}let Qt=!1;function oa(e,t=!1,s=!1){t&&Kt(t);const{props:i,children:n}=e.vnode,l=cl(e);Ur(e,i,l,t),Kr(e,n,s||t);const r=l?ca(e,t):void 0;return t&&Kt(!1),r}function ca(e,t){const s=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Tr);const{setup:i}=s;if(i){qe();const n=e.setupContext=i.length>1?da(e):null,l=Jt(e),r=Gt(i,e,0,[e.props,n]),a=ln(r);if(Ke(),l(),(a||e.sp)&&!Vt(e)&&Dn(e),a){if(r.then($i,$i),t)return r.then(c=>{Kt(!0);try{Hi(e,c,t)}finally{Kt(!1)}}).catch(c=>{Cs(c,e,0,void 0,!0),e.ssrRender=(g,d)=>d("<!---->")});e.asyncDep=r}else Hi(e,r)}else pl(e)}function Hi(e,t,s){D(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Z(t)&&(e.setupState=Tn(t)),pl(e)}function pl(e,t,s){const i=e.type;e.render||(e.render=i.render||$e);{const n=Jt(e);qe();try{Ar(e)}finally{Ke(),n()}}}const dl=Symbol(),pa={get(e,t){return ue(e,"get",""),t===dl?e:e[t]}};function da(e){const t=s=>{e.exposed=s||{}};return{attrs:new Proxy(e.attrs,pa),slots:e.slots,emit:e.emit,expose:t}}function Es(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Tn(Jl(e.exposed)),{get(t,s){if(s in t)return t[s];if(s in Wt)return Wt[s](e)},has(t,s){return s in t||s in Wt}})):e.proxy}function ga(e){return D(e)&&"__vccOpts"in e}const ee=(e,t)=>tr(e,t,Qt),ua="3.5.46";/**
* @vue/runtime-dom v3.5.46
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let si;const qi=typeof window<"u"&&window.trustedTypes;if(qi)try{si=qi.createPolicy("vue",{createHTML:e=>e})}catch{}const gl=si?e=>si.createHTML(e):e=>e,fa="http://www.w3.org/2000/svg",ma="http://www.w3.org/1998/Math/MathML",Ye=typeof document<"u"?document:null,Ki=Ye&&Ye.createElement("template"),ha={insert:(e,t,s)=>{t.insertBefore(e,s||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,s,i)=>{const n=t==="svg"?Ye.createElementNS(fa,e):t==="mathml"?Ye.createElementNS(ma,e):s?Ye.createElement(e,{is:s}):Ye.createElement(e);return e==="select"&&i&&i.multiple!=null&&n.setAttribute("multiple",i.multiple),n},createText:e=>Ye.createTextNode(e),createComment:e=>Ye.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ye.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,s,i,n,l){const r=s?s.previousSibling:t.lastChild;if(n&&(n===l||n.nextSibling))for(;t.insertBefore(n.cloneNode(!0),s),!(n===l||!(n=n.nextSibling)););else{Ki.innerHTML=gl(i==="svg"?`<svg>${e}</svg>`:i==="mathml"?`<math>${e}</math>`:e);const a=Ki.content;if(i==="svg"||i==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,s)}return[r?r.nextSibling:t.firstChild,s?s.previousSibling:t.lastChild]}},va=Symbol("_vtc");function ba(e,t,s){const i=e[va];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):s?e.setAttribute("class",t):e.className=t}const bs=Symbol("_vod"),ul=Symbol("_vsh"),is={name:"show",beforeMount(e,{value:t},{transition:s}){e[bs]=e.style.display==="none"?"":e.style.display,s&&t?s.beforeEnter(e):Et(e,t)},mounted(e,{value:t},{transition:s}){s&&t&&s.enter(e)},updated(e,{value:t,oldValue:s},{transition:i}){!t!=!s&&(i?t?(i.beforeEnter(e),Et(e,!0),i.enter(e)):i.leave(e,()=>{Et(e,!1)}):Et(e,t))},beforeUnmount(e,{value:t}){Et(e,t)}};function Et(e,t){e.style.display=t?e[bs]:"none",e[ul]=!t}const ya=Symbol(""),xa=/(?:^|;)\s*display\s*:/;function wa(e,t,s){const i=e.style,n=re(s);let l=!1;if(s&&!n){if(t)if(re(t))for(const r of t.split(";")){const a=r.slice(0,r.indexOf(":")).trim();s[a]==null&&Mt(i,a,"")}else for(const r in t)s[r]==null&&Mt(i,r,"");for(const r in s){r==="display"&&(l=!0);const a=s[r];a!=null?ja(e,r,!re(t)&&t?t[r]:void 0,a)||Mt(i,r,a):Mt(i,r,"")}}else if(n){if(t!==s){const r=i[ya];r&&(s+=";"+r),i.cssText=s,l=xa.test(s)}}else t&&e.removeAttribute("style");bs in e&&((!n||t!==s)&&(e[bs]=l?i.display:""),e[ul]&&(i.display="none"))}const ns=/\s*!important$/;function Mt(e,t,s){if(N(s))s.forEach(i=>Mt(e,t,i));else if(s==null&&(s=""),t.startsWith("--"))ns.test(s)?e.setProperty(t,s.replace(ns,""),"important"):e.setProperty(t,s);else{const i=Sa(e,t);ns.test(s)?e.setProperty(bt(i),s.replace(ns,""),"important"):e[i]=s}}const Qi=["Webkit","Moz","ms"],Us={};function Sa(e,t){const s=Us[t];if(s)return s;let i=Ie(t);if(i!=="filter"&&i in e)return Us[t]=i;i=on(i);for(let n=0;n<Qi.length;n++){const l=Qi[n]+i;if(l in e)return Us[t]=l}return t}function ja(e,t,s,i){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&re(i)&&s===i}const Gi="http://www.w3.org/1999/xlink";function Ji(e,t,s,i,n,l=Tl(t)){i&&t.startsWith("xlink:")?s==null?e.removeAttributeNS(Gi,t.slice(6,t.length)):e.setAttributeNS(Gi,t,s):s==null||l&&!pn(s)?e.removeAttribute(t):e.setAttribute(t,l?"":He(s)?String(s):s)}function Yi(e,t,s,i,n){if(t==="innerHTML"||t==="textContent"){s!=null&&(e[t]=t==="innerHTML"?gl(s):s);return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){const a=l==="OPTION"?e.getAttribute("value")||"":e.value,c=s==null?e.type==="checkbox"?"on":"":String(s);(a!==c||!("_value"in e))&&(e.value=c),s==null&&e.removeAttribute(t),e._value=s;return}let r=!1;if(s===""||s==null){const a=typeof e[t];a==="boolean"?s=pn(s):s==null&&a==="string"?(s="",r=!0):a==="number"&&(s=0,r=!0)}try{e[t]=s}catch{}r&&e.removeAttribute(n||t)}function ka(e,t,s,i){e.addEventListener(t,s,i)}function _a(e,t,s,i){e.removeEventListener(t,s,i)}const Zi=Symbol("_vei");function Ca(e,t,s,i,n=null){const l=e[Zi]||(e[Zi]={}),r=l[t];if(i&&r)r.value=i;else{const[a,c]=Aa(t);if(i){const g=l[t]=Ma(i,n);ka(e,a,g,c)}else r&&(_a(e,a,r,c),l[t]=void 0)}}const Pa=/(Once|Passive|Capture)$/,Ta=/^on:?(?:Once|Passive|Capture)$/;function Aa(e){let t,s;for(;(s=e.match(Pa))&&!Ta.test(e);)t||(t={}),e=e.slice(0,e.length-s[1].length),t[s[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):bt(e.slice(2)),t]}let $s=0;const Ea=Promise.resolve(),Ia=()=>$s||(Ea.then(()=>$s=0),$s=Date.now());function Ma(e,t){const s=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=s.attached)return;const n=s.value;if(N(n)){const l=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{l.call(i),i._stopped=!0};const r=n.slice(),a=[i];for(let c=0;c<r.length&&!i._stopped;c++){const g=r[c];g&&Re(g,t,5,a)}}else Re(n,t,5,[i])};return s.value=e,s.attached=Ia(),s}const Xi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Ra=(e,t,s,i,n,l)=>{const r=n==="svg";t==="class"?ba(e,i,r):t==="style"?wa(e,s,i):ys(t)?xs(t)||Ca(e,t,s,i,l):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):La(e,t,i,r))?(Yi(e,t,i),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Ji(e,t,i,r,l,t!=="value")):e._isVueCE&&(Fa(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!re(i)))?Yi(e,Ie(t),i,l,t):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),Ji(e,t,i,r))};function La(e,t,s,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in e&&Xi(t)&&D(s));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const n=e.tagName;if(n==="IMG"||n==="VIDEO"||n==="CANVAS"||n==="SOURCE")return!1}return Xi(t)&&re(s)?!1:t in e}function Fa(e,t){const s=e._def.props;if(!s)return!1;const i=Ie(t);return Array.isArray(s)?s.some(n=>Ie(n)===i):Object.keys(s).some(n=>Ie(n)===i)}const Oa=["ctrl","shift","alt","meta"],Na={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Oa.some(s=>e[`${s}Key`]&&!t.includes(s))},Rt=(e,t)=>{if(!e)return e;const s=e._withMods||(e._withMods={}),i=t.join(".");return s[i]||(s[i]=(n,...l)=>{for(let r=0;r<t.length;r++){const a=Na[t[r]];if(a&&a(n,t))return}return e(n,...l)})},Da=pe({patchProp:Ra},ha);let en;function Va(){return en||(en=Gr(Da))}const Wa=(...e)=>{const t=Va().createApp(...e),{mount:s}=t;return t.mount=i=>{const n=za(i);if(!n)return;const l=t._component;!D(l)&&!l.render&&!l.template&&(l.template=n.innerHTML),n.nodeType===1&&(n.textContent="");const r=s(n,!1,Ba(n));return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),r},t};function Ba(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function za(e){return re(e)?document.querySelector(e):e}const tn={title:"《核心系统研发与交付汇编》",version:"v1.0.0",name:"杨正合",avatar:"images/avatar.jpg",workTime:"2010.7（大学毕业）~ 今",companies:[{name:"凌阳成芯科技（成都）有限公司",url:"http://www.sunplus.com/"},{name:"纵横壹旅游科技（成都）有限公司",url:""},{name:"成都智元汇信息技术股份有限公司",url:""},{name:"博智安全科技股份有限公司",url:"https://www.elextec.com"}],position:"高级工程师",phone:"18080801215",summary:"长期专注于一线研发，技术方向涵盖 Windows 桌面、Web 前端与后端及 Linux 系统开发。主要负责 Web 后端开发，同时深度参与技术选型、系统架构设计及团队培养。",contacts:[{icon:"fa-home",label:"Personal Homepage",url:"http://yzh.app/"},{icon:"fa-github",label:"GitHub",url:"https://github.com/serveryang"},{icon:"fa-stack-overflow",label:"Stack Overflow",url:"https://stackoverflow.com/users/3511853/serveryang"},{icon:"fa-envelope",label:"serveryang@qq.com",url:""},{icon:"fa-google",label:"serveryang@gmail.com",url:""}]},Ua=[{id:"project13",no:13,name:"《博智工控漏洞扫描系统》",url:"https://www.elextec.com/assessment/33.html",time:"2023.3 ~ 今",项目简介:`<p class="pti">
          博智工控漏洞扫描系统是一款对工控网络进行脆弱性分析和评估的综合管理系统。该系统通过丰富的系统漏洞库， 不仅对在工业控制系统中使用的传统
          IT设备/系统，比如操作系统、交换机、路由器、弱口令、FTP服务器、Web服务器等进行漏洞风险评估，
          同时还支持对工业控制系统中所特有的设备/系统，比如SCADA、DCS、PLC等进行已知漏洞的识别和检测，及时发现安全漏洞，客观评估工控网络风险等级。
          博智工控漏洞扫描系统具备发现漏洞、评估漏洞、展示漏洞、跟踪漏洞等完备的漏洞管理能力。
        </p>`,项目使用技术:`<p>引擎：OpenVas, Arachni</p>
        <p>后端：Spring Cloud, Express.js, Flask, MySQL, Redis等</p>
        <p>前端：Vue 2, Element UI</p>`,项目职责:`<ol>
          <li>负责漏洞扫描系统报告导出模块开发（开发语言java， node.js）。</li>
          <li>负责漏洞扫描系统认证模块开发（开发语言java）。</li>
          <li>负责漏洞扫描系统nasl脚本汉化（ai机翻及人工纠正）。</li>
          <li>负责漏洞扫描系统nasl脚本升级流程固化（bash脚本多线程方案）。</li>
          <li>负责漏洞扫描系统集成Arachni，并修复Arachni部份bug（开发语言ruby）。</li>
          <li>负责调研Arachni支持自定义check编写，图片验证码的自动提取技术验证（实现对http响应的自定义检测，实现非交互类图片验证的自动提取。）</li>
          <li>负责漏洞扫描系统部分模块docker容器镜像制作，支持x86和arm 64平台，并适配国产化操作系统如openEuler, Kylin等。</li>
          <li>负责漏洞扫描系统整体性能分析，优化方案评估及实施。</li>
        </ol>`,项目中遇到的问题:`<ol>
          <li>
            未找到nasl与cve/cnvd关联好的简易方案，10万左右nasl脚本汉化，采用AI机翻，专业短语有误翻译，需要采用人工纠正，导致nasl汉化工作量比较大。
          </li>
          <li>
            开源更新的nasl脚本集成到老的openvas引擎（只升级nasl脚本，不同步升级openvas引擎），导致nasl缺少一些系统内置函数，需要手动排查。
            同时新的nasl集成进来时，需要兼容老的nasl，为了减少冲突，需要使用bash脚本统计新旧nasl脚本的多个维度数据信息，
            因此需要采用bash多线程方案提高效率，但导致脚本编写复杂度提高了。
          </li>
          <li>
            Arachni是开源框架，无法和商业化工具Acunetix Vulnerability
            Scanner(avs)相比，缺少web指纹与cve漏洞关联等核心指标，同时一些url地址avs可以扫出来,但是开源的框架(如Arachni,Zed Attack
            Proxy等)不能扫出来。
          </li>
        </ol>`,screenshots:[{src:"images/cv/projects/elex-icvss/任务管理/新建任务-配置核查-在线扫描-高级参数.png",alt:"新建任务-配置核查-在线扫描-高级参数.png"},{src:"images/cv/projects/elex-icvss/任务管理/新建任务-漏洞扫描-高级参数2.png",alt:"新建任务-漏洞扫描-高级参数2.png"},{src:"images/cv/projects/elex-icvss/任务管理/新建任务-漏洞扫描-高级参数3.png",alt:"新建任务-漏洞扫描-高级参数3.png"},{src:"images/cv/projects/elex-icvss/任务管理/新建任务-漏洞扫描-高级参数1.png",alt:"新建任务-漏洞扫描-高级参数1.png"},{src:"images/cv/projects/elex-icvss/任务管理/新建任务-配置核查-在线扫描-基本参数2.png",alt:"新建任务-配置核查-在线扫描-基本参数2.png"},{src:"images/cv/projects/elex-icvss/任务管理/新建任务-配置核查-在线扫描-基本参数1.png",alt:"新建任务-配置核查-在线扫描-基本参数1.png"},{src:"images/cv/projects/elex-icvss/任务管理/新建任务-配置核查-离线扫描.png",alt:"新建任务-配置核查-离线扫描.png"},{src:"images/cv/projects/elex-icvss/任务管理/新建任务-WEB应用扫描-高级参数2.png",alt:"新建任务-WEB应用扫描-高级参数2.png"},{src:"images/cv/projects/elex-icvss/任务管理/新建任务-WEB应用扫描-高级参数1.png",alt:"新建任务-WEB应用扫描-高级参数1.png"},{src:"images/cv/projects/elex-icvss/任务管理/新建任务-WEB应用扫描-基本参数.png",alt:"新建任务-WEB应用扫描-基本参数.png"},{src:"images/cv/projects/elex-icvss/任务管理/新建任务-弱口令1.png",alt:"新建任务-弱口令1.png"},{src:"images/cv/projects/elex-icvss/任务管理/新建任务-弱口令2.png",alt:"新建任务-弱口令2.png"},{src:"images/cv/projects/elex-icvss/任务管理/新建任务导航.png",alt:"新建任务导航.png"},{src:"images/cv/projects/elex-icvss/任务管理/新建任务-漏洞扫描-基本参数1.png",alt:"新建任务-漏洞扫描-基本参数1.png"},{src:"images/cv/projects/elex-icvss/任务管理/新建任务-漏洞扫描-基本参数2.png",alt:"新建任务-漏洞扫描-基本参数2.png"},{src:"images/cv/projects/elex-icvss/任务管理/任务列表.png",alt:"任务列表.png"},{src:"images/cv/projects/elex-icvss/报告管理/WEB扫描任务报告-站点报告2.png",alt:"WEB扫描任务报告-站点报告2.png"},{src:"images/cv/projects/elex-icvss/报告管理/配置核查在线任务报告-统计信息1.png",alt:"配置核查在线任务报告-统计信息1.png"},{src:"images/cv/projects/elex-icvss/报告管理/WEB扫描任务报告-站点报告1.png",alt:"WEB扫描任务报告-站点报告1.png"},{src:"images/cv/projects/elex-icvss/报告管理/配置核查在线任务报告-统计信息2.png",alt:"配置核查在线任务报告-统计信息2.png"},{src:"images/cv/projects/elex-icvss/报告管理/配置核查在线任务报告-任务信息.png",alt:"配置核查在线任务报告-任务信息.png"},{src:"images/cv/projects/elex-icvss/报告管理/漏洞扫描任务报告-脆弱账号.png",alt:"漏洞扫描任务报告-脆弱账号.png"},{src:"images/cv/projects/elex-icvss/报告管理/弱口令扫描任务报告-漏洞信息1.png",alt:"弱口令扫描任务报告-漏洞信息1.png"},{src:"images/cv/projects/elex-icvss/报告管理/WEB扫描任务报告-任务信息.png",alt:"WEB扫描任务报告-任务信息.png"},{src:"images/cv/projects/elex-icvss/报告管理/弱口令扫描任务报告-脆弱账号.png",alt:"弱口令扫描任务报告-脆弱账号.png"},{src:"images/cv/projects/elex-icvss/报告管理/弱口令扫描任务报告-漏洞信息2.png",alt:"弱口令扫描任务报告-漏洞信息2.png"},{src:"images/cv/projects/elex-icvss/报告管理/漏洞扫描任务报告-漏洞信息1.png",alt:"漏洞扫描任务报告-漏洞信息1.png"},{src:"images/cv/projects/elex-icvss/报告管理/漏洞扫描任务报告-主机报告预览1.png",alt:"漏洞扫描任务报告-主机报告预览1.png"},{src:"images/cv/projects/elex-icvss/报告管理/WEB扫描任务报告-漏洞信息.png",alt:"WEB扫描任务报告-漏洞信息.png"},{src:"images/cv/projects/elex-icvss/报告管理/漏洞扫描任务报告-主机报告预览2.png",alt:"漏洞扫描任务报告-主机报告预览2.png"},{src:"images/cv/projects/elex-icvss/报告管理/漏洞扫描任务报告-漏洞信息2.png",alt:"漏洞扫描任务报告-漏洞信息2.png"},{src:"images/cv/projects/elex-icvss/报告管理/报告列表.png",alt:"报告列表.png"},{src:"images/cv/projects/elex-icvss/报告管理/弱口令扫描任务报告-任务信息.png",alt:"弱口令扫描任务报告-任务信息.png"},{src:"images/cv/projects/elex-icvss/报告管理/漏洞扫描任务报告-任务信息.png",alt:"漏洞扫描任务报告-任务信息.png"},{src:"images/cv/projects/elex-icvss/报告管理/配置核查在线任务报告-配置信息.png",alt:"配置核查在线任务报告-配置信息.png"},{src:"images/cv/projects/elex-icvss/报告管理/漏洞扫描任务报告-参考标准1.png",alt:"漏洞扫描任务报告-参考标准1.png"},{src:"images/cv/projects/elex-icvss/报告管理/弱口令扫描任务报告-主机列表.png",alt:"弱口令扫描任务报告-主机列表.png"},{src:"images/cv/projects/elex-icvss/报告管理/漏洞扫描任务报告-主机列表.png",alt:"漏洞扫描任务报告-主机列表.png"},{src:"images/cv/projects/elex-icvss/报告管理/弱口令扫描任务报告-主机报告预览2.png",alt:"弱口令扫描任务报告-主机报告预览2.png"},{src:"images/cv/projects/elex-icvss/报告管理/漏洞扫描任务报告-参考标准2.png",alt:"漏洞扫描任务报告-参考标准2.png"},{src:"images/cv/projects/elex-icvss/报告管理/弱口令扫描任务报告-主机报告预览1.png",alt:"弱口令扫描任务报告-主机报告预览1.png"},{src:"images/cv/projects/elex-icvss/报告管理/漏洞扫描任务报告-端口服务列表.png",alt:"漏洞扫描任务报告-端口服务列表.png"},{src:"images/cv/projects/elex-icvss/报告管理/WEB扫描任务报告-统计信息1.png",alt:"WEB扫描任务报告-统计信息1.png"},{src:"images/cv/projects/elex-icvss/报告管理/弱口令扫描任务报告-统计信息1.png",alt:"弱口令扫描任务报告-统计信息1.png"},{src:"images/cv/projects/elex-icvss/报告管理/WEB扫描任务报告-统计信息2.png",alt:"WEB扫描任务报告-统计信息2.png"},{src:"images/cv/projects/elex-icvss/报告管理/弱口令扫描任务报告-统计信息2.png",alt:"弱口令扫描任务报告-统计信息2.png"},{src:"images/cv/projects/elex-icvss/报告管理/漏洞扫描任务报告-应用程序.png",alt:"漏洞扫描任务报告-应用程序.png"},{src:"images/cv/projects/elex-icvss/报告管理/生成报告弹窗.png",alt:"生成报告弹窗.png"},{src:"images/cv/projects/elex-icvss/报告管理/WEB扫描任务报告-站点列表.png",alt:"WEB扫描任务报告-站点列表.png"},{src:"images/cv/projects/elex-icvss/报告管理/弱口令扫描任务报告-应用程序.png",alt:"弱口令扫描任务报告-应用程序.png"},{src:"images/cv/projects/elex-icvss/报告管理/弱口令扫描任务报告-端口服务列表.png",alt:"弱口令扫描任务报告-端口服务列表.png"},{src:"images/cv/projects/elex-icvss/报告管理/漏洞扫描任务报告-统计信息1.png",alt:"漏洞扫描任务报告-统计信息1.png"},{src:"images/cv/projects/elex-icvss/报告管理/配置核查在线任务报告-主机列表.png",alt:"配置核查在线任务报告-主机列表.png"},{src:"images/cv/projects/elex-icvss/报告管理/弱口令扫描任务报告-参考标准.png",alt:"弱口令扫描任务报告-参考标准.png"},{src:"images/cv/projects/elex-icvss/报告管理/漏洞扫描任务报告-统计信息2.png",alt:"漏洞扫描任务报告-统计信息2.png"},{src:"images/cv/projects/elex-icvss/模糊测试/首页.png",alt:"首页.png"},{src:"images/cv/projects/elex-icvss/知识库/漏洞详情.png",alt:"漏洞详情.png"},{src:"images/cv/projects/elex-icvss/知识库/漏洞库列表.png",alt:"漏洞库列表.png"},{src:"images/cv/projects/elex-icvss/知识库/工控设备信息库.png",alt:"工控设备信息库.png"},{src:"images/cv/projects/elex-icvss/策略管理/字典管理.png",alt:"字典管理.png"},{src:"images/cv/projects/elex-icvss/策略管理/漏洞策略详情1.png",alt:"漏洞策略详情1.png"},{src:"images/cv/projects/elex-icvss/策略管理/端口策略详情.png",alt:"端口策略详情.png"},{src:"images/cv/projects/elex-icvss/策略管理/配置模板.png",alt:"配置模板.png"},{src:"images/cv/projects/elex-icvss/策略管理/端口策略列表.png",alt:"端口策略列表.png"},{src:"images/cv/projects/elex-icvss/策略管理/漏洞策略列表.png",alt:"漏洞策略列表.png"},{src:"images/cv/projects/elex-icvss/策略管理/认证管理.png",alt:"认证管理.png"},{src:"images/cv/projects/elex-icvss/系统首页.png",alt:"系统首页.png"},{src:"images/cv/projects/elex-icvss/资产管理/资产管理-资产部门新增.png",alt:"资产管理-资产部门新增.png"},{src:"images/cv/projects/elex-icvss/资产管理/资产统计.png",alt:"资产统计.png"},{src:"images/cv/projects/elex-icvss/资产管理/资产管理-资产部门列表.png",alt:"资产管理-资产部门列表.png"},{src:"images/cv/projects/elex-icvss/资产管理/资产管理-风险评估部门列表.png",alt:"资产管理-风险评估部门列表.png"},{src:"images/cv/projects/elex-icvss/资产管理/资产列表.png",alt:"资产列表.png"},{src:"images/cv/projects/elex-icvss/资产管理/资产风险趋势.png",alt:"资产风险趋势.png"},{src:"images/cv/projects/elex-icvss/资产管理/资产统计2.png",alt:"资产统计2.png"}]},{id:"project12",no:12,name:"《博智工业安全管理平台》",url:"https://www.elextec.com/operation-7/31.html",time:"2023.1 ~ 2023.3",项目简介:`<p class="pti">
          博智工业安全管理平台是一款安全管理类产品，产品支持对工控防火墙、工控安全审计系统、工控主机卫士、工控漏洞扫描系统等工控安全产品及第三方设备进行统一监控、日志采集、安全分析、策略下发，为工控网络安全运营提供决策支持，加强安全事件响应速度与安全运维能力，提升工控网络整体信息安全水平。
        </p>`,项目使用技术:`<p>后端：Spring Cloud, Apache Camel, Express.js, Flask, Kafka, ElasticSearch, MySQL等</p>
        <p>前端：前端：Vue 2, Element UI</p>`,项目职责:`<ol>
          <li>负责集成审计系统管理中心到安全管理平台中，以支持告警日志，流量日志，系统日志等投送到管理平台。</li>
          <li>负责集成审计系统探针接收安全管理平台的管理：各类审计规则下发，探针信息查看等。</li>
          <li>负责验证全管理平台正则表达式提取各类审计投送过来的日志信息提取正确性。</li>
          <li>负责对审计日志进行分类标注，以方便管理平台收到日志信息进行归类。</li>
          <li>负责调研NXLog Community Edition优缺点及集成到管理平台的方案。</li>
          <li>负责安全管理平台性能优化及解决方案评估。</li>
        </ol>`,项目中遇到的问题:`<ol>
          <li>一些探针投送通过snmp方式投送，管理平台侧采用Apache Camel来实现接收，与业务耦合在一起，导致鲁棒性比较差。</li>
          <li>管理平台采用正则表达式从投送过来的日志里提取字段，由于日志的种类烦多，导致正则表达式的配置亦很复杂，后期不好维护。</li>
          <li>
            NXLog不支持类似断点继传功能，如果采集日志的设备断电后，日志会再次整传。对id为整型自增长的日志比较方便解决，对于ObjectId类型的数据则不方便解决。
          </li>
        </ol>`,screenshots:[{src:"images/cv/projects/elex-soc/处置中心/联动策略-列表.png",alt:"联动策略-列表.png"},{src:"images/cv/projects/elex-soc/处置中心/联动策略-新增.png",alt:"联动策略-新增.png"},{src:"images/cv/projects/elex-soc/处置中心/联动策略-编辑.png",alt:"联动策略-编辑.png"},{src:"images/cv/projects/elex-soc/安全分析/原始日志.png",alt:"原始日志.png"},{src:"images/cv/projects/elex-soc/安全分析/安全事件.png",alt:"安全事件.png"},{src:"images/cv/projects/elex-soc/安全分析/安全告警.png",alt:"安全告警.png"},{src:"images/cv/projects/elex-soc/安全分析/资产分析.png",alt:"资产分析.png"},{src:"images/cv/projects/elex-soc/安全模型/关联模型-列表.png",alt:"关联模型-列表.png"},{src:"images/cv/projects/elex-soc/安全模型/关联模型-新增.png",alt:"关联模型-新增.png"},{src:"images/cv/projects/elex-soc/安全模型/关联模型-编辑.png",alt:"关联模型-编辑.png"},{src:"images/cv/projects/elex-soc/安全模型/规则模型-列表.png",alt:"规则模型-列表.png"},{src:"images/cv/projects/elex-soc/安全模型/规则模型-新增.png",alt:"规则模型-新增.png"},{src:"images/cv/projects/elex-soc/安全设备/1.png",alt:"1.png"},{src:"images/cv/projects/elex-soc/知识库/入侵规则库列表.png",alt:"入侵规则库列表.png"},{src:"images/cv/projects/elex-soc/知识库/安全事件库列表.png",alt:"安全事件库列表.png"},{src:"images/cv/projects/elex-soc/资产管理/资产分组.png",alt:"资产分组.png"},{src:"images/cv/projects/elex-soc/资产管理/资产拓扑-列表.png",alt:"资产拓扑-列表.png"},{src:"images/cv/projects/elex-soc/资产管理/资产拓扑-编辑.png",alt:"资产拓扑-编辑.png"},{src:"images/cv/projects/elex-soc/采集管理/采集列表-新增.png",alt:"采集列表-新增.png"},{src:"images/cv/projects/elex-soc/采集管理/采集列表.png",alt:"采集列表.png"},{src:"images/cv/projects/elex-soc/采集管理/采集策略-列表.png",alt:"采集策略-列表.png"},{src:"images/cv/projects/elex-soc/采集管理/采集策略-新增.png",alt:"采集策略-新增.png"},{src:"images/cv/projects/elex-soc/采集管理/采集策略-编辑.png",alt:"采集策略-编辑.png"}]},{id:"project11",no:11,name:"《数控网络安全测试验证系统》",url:"",time:"2022.6 ~ 2022.12",项目简介:`<p class="pti">
          该项目为承接<a href="https://cics-cert.org.cn/web_root/webpage/researchOrgn_110012.html" target="_blank">CIC(国家工业信息安全发展研究中心)检查评估所</a>的数控网络安全测试验证系统，系统集成安全检测子系统，网络测试子系统，代码安全分析子系统，综合业务管理子系统。
        </p>`,项目使用技术:`<p>虚拟化方案：</p>
        <ol>
          <li>Proxmox Virtual Environment(PVE)。</li>
          <li>采用PVE虚拟化部署各子系统再内部集成。</li>
        </ol>
        <p>后端涉及技术：</p>
        <ol>
          <li>基于Spring Cloud的中台技术方案。</li>
          <li>Node.js Express, Python Flask, MySQL, MyCat, Kafka, Redis, ElasticSearch等主流技术方案。</li>
        </ol>`,项目职责:`<ol>
          <li>技术调研PVE与Open Stack虚拟化方案，经评估采用PVE作为虚拟化基座。</li>
          <li>为安全检测子系统配置虚拟化硬件，如串口，网络规划配置等。</li>
          <li>集成综合态势模块到综合业务管理子系统。</li>
          <li>开发资源管理模块：虚拟机管理，镜像管理，虚拟机登录。</li>
          <li>集成公司外部第三方固件提取系统。</li>
          <li>集成公司外部第三方源代码分析子系统。</li>
        </ol>`,项目中遇到的问题:`<ol>
          <li>
            PVE与Open Stack虚拟化方案选择时比较困难，Open
            Stack技术完整，但投入人力多，最后选择pve方案，自己一人就完成了虚拟化所涉及的网络配置，虚拟化接口对接等需求开发。
          </li>
          <li>集成外部公司的第三方系统时，沟通成本比较高，系统稳定性也不好。</li>
        </ol>`,screenshots:[{src:"images/cv/projects/elex-cic/固件提取.png",alt:"固件提取.png"},{src:"images/cv/projects/elex-cic/系统首页.png",alt:"系统首页.png"},{src:"images/cv/projects/elex-cic/综合业务管理子系统/综合态势/1-网络态势可视化.png",alt:"1-网络态势可视化.png"},{src:"images/cv/projects/elex-cic/综合业务管理子系统/综合态势/2-网络态势可视化-攻击过程可视化.png",alt:"2-网络态势可视化-攻击过程可视化.png"},{src:"images/cv/projects/elex-cic/综合业务管理子系统/综合态势/4-资产可视化.png",alt:"4-资产可视化.png"},{src:"images/cv/projects/elex-cic/综合业务管理子系统/综合态势/5-威胁预警可视化.png",alt:"5-威胁预警可视化.png"},{src:"images/cv/projects/elex-cic/综合业务管理子系统/综合态势/3-渗透路径可视化.png",alt:"3-渗透路径可视化.png"},{src:"images/cv/projects/elex-cic/综合业务管理子系统/运维日志分析-手动采集.png",alt:"运维日志分析-手动采集.png"},{src:"images/cv/projects/elex-cic/综合业务管理子系统/渗透工具管理.png",alt:"渗透工具管理.png"},{src:"images/cv/projects/elex-cic/综合业务管理子系统/运维日志分析-日志分析.png",alt:"运维日志分析-日志分析.png"},{src:"images/cv/projects/elex-cic/综合业务管理子系统/资源管理/4-虚拟机登录.png",alt:"4-虚拟机登录.png"},{src:"images/cv/projects/elex-cic/综合业务管理子系统/资源管理/1-虚拟机管理.png",alt:"1-虚拟机管理.png"},{src:"images/cv/projects/elex-cic/综合业务管理子系统/资源管理/2-虚拟机编辑.png",alt:"2-虚拟机编辑.png"},{src:"images/cv/projects/elex-cic/综合业务管理子系统/资源管理/3-镜像管理.png",alt:"3-镜像管理.png"},{src:"images/cv/projects/elex-cic/网络测试子系统.png",alt:"网络测试子系统.png"},{src:"images/cv/projects/elex-cic/PVE网卡分布.png",alt:"PVE网卡分布.png"}]},{id:"project10",no:10,name:"《博智工控安全审计系统》",url:"https://www.elextec.com/operation-7/31.html",time:"2019.10 ~ 2022.12",项目简介:`<p class="pti">
          系统采用旁路方式，基于通信报文深度解析技术，实时检测针对PLC、DCS、上位机等重要的工控设备的网络攻击、用户误操作、用户违规操作、非法设备接入以及蠕虫、病毒等恶意软件的传播行为，并实时报警，
          同时详实记录一切网络通信行为，包括指令级的工业控制协议通信记录，为工业控制系统的安全事故调查提供坚实的基础。
        </p>`,项目使用技术:`<p>引擎：Suricata, ClamAV。</p>
        <p>后端：Spring Cloud的中台技术方案, Express.js, Flask, MySQL, Redis, Docker, ElasticSearch, Kafka等。</p>
        <p>前端：Vue 2, Element UI。</p>
        <p>架构：x86, ARM64。</p>`,项目职责:`<ol>
          <li>负责 modbus, enip, s7common, s7common_plus, dnp3, opcua, opcda, iec101, iec104, iecmms, sv, goose, fins,
            profinet, ftp, http,smtp,telnet,mqtt,adwinconfig,coap,enttec,esio, hartip,rstp,
            isapi,onvif,gb28181,国网B,cip,pop3,smb,snmp,ssh,tcp,udp, xmpp协议规则下发前端及后端接口开发。
          </li>
          <li>负责流量审计规则、恶意事件审计，泛洪审计，文件审计规则模块的前端及后端接口开发。</li>
          <li>负责网络通信白名单，工控协议白名单，IP-MAC白名单，IP白名单，IP抑制告警白名单规则模块的前端及后端接口开发。</li>
          <li>负责协议识别扩展，安全事件库，机器学习规则模块的前端及后端接口开发。</li>
          <li>负责统计报告，资产通信，资产流量，主机告警，时间周期，协议审计告警模块的前端及后端接口开发。</li>
          <li>负责告警日志，流量日志，文件日志，报文分析模块的前端及后端接口开发。</li>
          <li>负责综合监控，流量监控，资产会话，样本监控模块的前端及后端接口开发。</li>
          <li>负责漏洞知识库，MAC地址库，设备指纹库，系统日志，系统管理模块的前端及后端接口开发。</li>
          <li>负责资产列表，资产拓扑，拓扑展示后端接口开发。</li>
          <li>负责集成ClamAV到项目，用于实现恶意程序的检测，产生告警日志</li>
          <li>负责整理部分 suricata rule规则，并根据告警需求添加suricata规则脚本。</li>
          <li>负责构建项目DevOps环境：gerrit, jenkins, SonarQube等构建流程。</li>
          <li>负责适配项目基于x86及国产化arm平台架构操作系统（centos,openEuler,kylinos等）。</li>
        </ol>`,项目中遇到的问题:`<ol>
          <li>项目使用了基于Spring Cloud的中台方案，由于java太费内存，因此将中台的注册中心方案降级为非注册中心方案，只保留必要的java业务容器服务。
            必要的java容器服务对资源花费也比较多，通过优化jvm参数及尝试降级框架为单线程模式来解决资源使用过高的问题。尝试降级框架及各类组件为单纯程模式没有成功。
          </li>
          <li>项目中使用了elasticsearch，也是采用java编写，因此资源占用比较多，通过jvm参数优化后，还是比较多，尝试使用Meilisearch / Typesense来代替
            elasticsearch，但是由于项目中使用了elasticsearch的复杂Aggregation查询，其它组件不支持这些接口，因此无法替换。
          </li>
          <li>基于suricata rule规则匹配流量特征，告警日志里存在误报的情况。误报情况不好彻底解决，只能提供屏蔽该规则的方案，而不是通过修改规则来避免。</li>
          <li>流量溯源的pcap报文需要在网页中查看，采用tshark方案来实现，但是无法做到像 <a href="https://www.cloudshark.org/" target="_blank" class="color-blue">cloudshark</a> 一样的web ui还原效果。由于cloudshark不开源，没有搞懂其实现方案。tshark方案在解析一些畸形pcap报文时，会有bug，但在
            cloudshark 上验证时同一畸形报文是正常的。调研Wireshark项目，发现也无法直接将Qt写的Widget界面移植成web ui。</li>
          <li>目前关联规则告警并非使用的是Apriori算法来实现，采用的是手动配置关联id的简易方案。流量机器学习也是采用机械式机器学习方案即内置匹配规则告警方案。</li>
        </ol>`,screenshots:[{src:"images/cv/projects/elex-ids/监控分析/监控分析-综合监控.png",alt:"监控分析-综合监控.png"},{src:"images/cv/projects/elex-ids/监控分析/监控分析-资产会话.png",alt:"监控分析-资产会话.png"},{src:"images/cv/projects/elex-ids/监控分析/监控分析-样本监控.png",alt:"监控分析-样本监控.png"},{src:"images/cv/projects/elex-ids/监控分析/监控分析-流量监控.png",alt:"监控分析-流量监控.png"},{src:"images/cv/projects/elex-ids/配置管理/审计规则-文件审计-编辑.png",alt:"审计规则-文件审计-编辑.png"},{src:"images/cv/projects/elex-ids/配置管理/白名单规则-IP抑制告警白名单.png",alt:"白名单规则-IP抑制告警白名单.png"},{src:"images/cv/projects/elex-ids/配置管理/审计规则-协议审计.png",alt:"审计规则-协议审计.png"},{src:"images/cv/projects/elex-ids/配置管理/白名单规则-网络通信白名单.png",alt:"白名单规则-网络通信白名单.png"},{src:"images/cv/projects/elex-ids/配置管理/白名单规则-工控协议白名单-存包设置.png",alt:"白名单规则-工控协议白名单-存包设置.png"},{src:"images/cv/projects/elex-ids/配置管理/审计规则-泛洪审计-编辑.png",alt:"审计规则-泛洪审计-编辑.png"},{src:"images/cv/projects/elex-ids/配置管理/白名单规则-IP白名单.png",alt:"白名单规则-IP白名单.png"},{src:"images/cv/projects/elex-ids/配置管理/白名单规则-IP抑制告警白名单-新增.png",alt:"白名单规则-IP抑制告警白名单-新增.png"},{src:"images/cv/projects/elex-ids/配置管理/白名单规则-网络通信白名单-新增.png",alt:"白名单规则-网络通信白名单-新增.png"},{src:"images/cv/projects/elex-ids/配置管理/白名单规则-工控协议白名单.png",alt:"白名单规则-工控协议白名单.png"},{src:"images/cv/projects/elex-ids/配置管理/审计规则-恶意事件审计.png",alt:"审计规则-恶意事件审计.png"},{src:"images/cv/projects/elex-ids/配置管理/审计规则-文件审计.png",alt:"审计规则-文件审计.png"},{src:"images/cv/projects/elex-ids/配置管理/协议识别扩展.png",alt:"协议识别扩展.png"},{src:"images/cv/projects/elex-ids/配置管理/审计规则-恶意事件审计-编辑.png",alt:"审计规则-恶意事件审计-编辑.png"},{src:"images/cv/projects/elex-ids/配置管理/审计规则-协议审计编辑.png",alt:"审计规则-协议审计编辑.png"},{src:"images/cv/projects/elex-ids/配置管理/白名单规则-工控协议白名单-新增.png",alt:"白名单规则-工控协议白名单-新增.png"},{src:"images/cv/projects/elex-ids/配置管理/安全事件库-内置黑名单规则.png",alt:"安全事件库-内置黑名单规则.png"},{src:"images/cv/projects/elex-ids/配置管理/安全事件库-内置安全审计规则.png",alt:"安全事件库-内置安全审计规则.png"},{src:"images/cv/projects/elex-ids/配置管理/协议识别扩展-新增.png",alt:"协议识别扩展-新增.png"},{src:"images/cv/projects/elex-ids/配置管理/白名单规则-IP-MAC白名单-新增.png",alt:"白名单规则-IP-MAC白名单-新增.png"},{src:"images/cv/projects/elex-ids/配置管理/审计规则-泛洪审计.png",alt:"审计规则-泛洪审计.png"},{src:"images/cv/projects/elex-ids/配置管理/白名单规则-IP-MAC白名单.png",alt:"白名单规则-IP-MAC白名单.png"},{src:"images/cv/projects/elex-ids/配置管理/白名单规则-IP白名单-新增.png",alt:"白名单规则-IP白名单-新增.png"},{src:"images/cv/projects/elex-ids/配置管理/审计规则-流量审计.png",alt:"审计规则-流量审计.png"},{src:"images/cv/projects/elex-ids/配置管理/机器学习规则.png",alt:"机器学习规则.png"},{src:"images/cv/projects/elex-ids/日志分析/流量日志.png",alt:"流量日志.png"},{src:"images/cv/projects/elex-ids/日志分析/告警日志-攻击溯源.png",alt:"告警日志-攻击溯源.png"},{src:"images/cv/projects/elex-ids/日志分析/告警日志.png",alt:"告警日志.png"},{src:"images/cv/projects/elex-ids/日志分析/报文分析.png",alt:"报文分析.png"},{src:"images/cv/projects/elex-ids/日志分析/文件日志.png",alt:"文件日志.png"},{src:"images/cv/projects/elex-ids/统计报告/主机告警.png",alt:"主机告警.png"},{src:"images/cv/projects/elex-ids/统计报告/协议审计告警-告警总览.png",alt:"协议审计告警-告警总览.png"},{src:"images/cv/projects/elex-ids/统计报告/资产流量-MAC流量.png",alt:"资产流量-MAC流量.png"},{src:"images/cv/projects/elex-ids/统计报告/告警提示.png",alt:"告警提示.png"},{src:"images/cv/projects/elex-ids/统计报告/资产通信.png",alt:"资产通信.png"},{src:"images/cv/projects/elex-ids/统计报告/协议审计告警-协议告警.png",alt:"协议审计告警-协议告警.png"},{src:"images/cv/projects/elex-ids/统计报告/资产流量-IP端口.png",alt:"资产流量-IP端口.png"},{src:"images/cv/projects/elex-ids/统计报告/资产流量-协议流量.png",alt:"资产流量-协议流量.png"},{src:"images/cv/projects/elex-ids/统计报告/资产流量-IP流量.png",alt:"资产流量-IP流量.png"},{src:"images/cv/projects/elex-ids/统计报告/时间周期.png",alt:"时间周期.png"},{src:"images/cv/projects/elex-ids/统计报告/统计报告.png",alt:"统计报告.png"},{src:"images/cv/projects/elex-ids/系统管理/日志保存.png",alt:"日志保存.png"},{src:"images/cv/projects/elex-ids/系统管理/离线网络包审计.png",alt:"离线网络包审计.png"},{src:"images/cv/projects/elex-ids/系统管理/系统信息.png",alt:"系统信息.png"},{src:"images/cv/projects/elex-ids/系统管理/威胁情报库升级.png",alt:"威胁情报库升级.png"},{src:"images/cv/projects/elex-ids/系统管理/告警风暴阈值.png",alt:"告警风暴阈值.png"},{src:"images/cv/projects/elex-ids/知识库/MAC地址库.png",alt:"MAC地址库.png"},{src:"images/cv/projects/elex-ids/知识库/设备指纹库.png",alt:"设备指纹库.png"},{src:"images/cv/projects/elex-ids/知识库/漏洞知识库.png",alt:"漏洞知识库.png"},{src:"images/cv/projects/elex-ids/资产管理/拓扑展示.png",alt:"拓扑展示.png"},{src:"images/cv/projects/elex-ids/资产管理/资产编辑.png",alt:"资产编辑.png"},{src:"images/cv/projects/elex-ids/资产管理/资产拓扑.png",alt:"资产拓扑.png"},{src:"images/cv/projects/elex-ids/资产管理/资产列表.png",alt:"资产列表.png"},{src:"images/cv/projects/elex-ids/首页.png",alt:"首页.png"}]},{id:"project9",no:9,name:"《博智工业网络蜜罐系统》",url:"https://www.elextec.com/safety-protection/281.html",time:"2019.3 ~ 2019.10",项目简介:`<p class="pti">
          工业网络蜜罐系统以伪装技术为基础，利用工业协议及服务模拟和威胁诱捕等技术，诱使攻击者进行网络攻击，从而捕获攻击行为，分析攻击意图，进行安全预警，降低实际系统被攻击的风险。
        </p>`,项目使用技术:`<p>引擎：T-pot，suricata</p>
        <p>后端：Node.js Express、MySQL、Redis、ElasticSearch、Filebeat、Logstash、Docker、ZeroMQ。</p>
        <p>前端：Vue 2, Element UI。</p>`,项目职责:`<p>负责Modbus、IEC 103、IEC 104等协议蜜罐的规则管理接口开发。</p>
        <p>负责蜜罐日志处理：使用Filebeat收集各蜜罐产生的日志，经过Logstash转换，并将结果存储于ES中。</p>
        <p>负责部分管理页面的开发：蜜罐规则管理、蜜罐报告生成、系统配置等模块开发。</p>`,项目中遇到的问题:`<ol>
          <li>蜜罐属于低交互蜜罐，无法还原真实的场景。</li>
          <li>蜜罐部署在公网中，攻击者通过查询ip的供应商即可知道属于蜜罐，从而不会发起真正的攻击。</li>
          <li>蜜罐服务器部署地公司，通过IP映射出去，如果使用POE类拨号上网，导致IP变化，从而导致一些docker蜜罐服务无法使用。</li>
        </ol>`,screenshots:[{src:"images/cv/projects/elex-honypot/1.png",alt:"1.png"},{src:"images/cv/projects/elex-honypot/2.png",alt:"2.png"},{src:"images/cv/projects/elex-honypot/3.png",alt:"3.png"},{src:"images/cv/projects/elex-honypot/4.png",alt:"4.png"},{src:"images/cv/projects/elex-honypot/5.png",alt:"5.png"},{src:"images/cv/projects/elex-honypot/6.png",alt:"6.png"},{src:"images/cv/projects/elex-honypot/7.png",alt:"7.png"}]},{id:"project8",no:8,name:"《商易行》",url:"https://sj.qq.com/appdetail/org.zzmetro.eticket",time:"2018.12 ~ 2019.3",项目简介:`<p class="pti">
          郑州地铁乘车码项目。该项项目主要是为郑州市民提供扫码（二维码）、刷脸方式乘坐郑州地铁，从而提升郑州地铁为民服务水平。
          《商易行》提供安卓、苹果Native版本，以及微信小程序（郑州地铁商易行乘车码）、支付宝小程序（郑州地铁商易行卡）。
        </p>`,项目使用技术:`<p>Native应用：</p>
        <ol>
          <li>使用Kotlin开发Native安卓应用</li>
          <li>使用Object-C开发Native苹果应用</li>
          <li>使用H5开发小程序应用</li>
        </ol>
        <p>后端：</p>
        <ol>
          <li>Node.js Express、MySQL数据库、MyCat分库分表、Kafka消息、Redis缓存。</li>
          <li>SPI接口：微信乘车码、支付宝乘车码、建行刷脸。</li>
          <li>其它：阿里云SLB、SM2加密机。</li>
        </ol>
        <p>运行生产环境：</p>
        <ol>
          <li>小型机，地铁内网自建机房</li>
          <li>操作系统为:CentOS</li>
        </ol>`,项目职责:"<p>负责对接微信乘车码SPI接口。负责后端线上发布。乘客通过400电话反馈的问题进行回复。</p>",项目中遇到的问题:`<ol>
          <li>对乘车业务的不太熟悉导致一些异常逻辑未处理充分。</li>
          <li>微信乘车码SPI接口文档不完善，导致一些验证参数验证失败。后由微信方开发人员住场一起沟通解决。</li>
          <li>
            上线前发现小型机不支持MySQL，配套数据库为PostgreSQL，于是将项目的MySQL换成PostgreSQL，但由于风险过大，由于公司重新买了一台支持MySQL的小型机，于是项目又将PostgreSQL修改回MySQL。
          </li>
          <li>乘车码融对业务（乘车扫码进、扫码出）流程中的异常情况比较复杂，为项目核心业务，一些bug是由于该部分设计不好导致的。</li>
          <li>上线运行两周后，发现存在单表数据过大的问题，是由于开发之初缺少数据量规划和分库分表的设计，后续采用MyCat方案来实现。</li>
          <li>后端项目使用Node.js来实现，但未使用TypeScript，导致一些低级错误和运行时错误的出现。</li>
          <li>后台应用日志未投递到日志分析系统中，导致排查问题效率低。</li>
          <li>Native应用缺少加壳，导致容易被人破解。后采用第三方加密技术以提升破解难度。</li>
          <li>项目从立项到上线的时间太短，使得项目人力缺少、赶工明显、团队处于震荡期、缺少技术沉淀。</li>
        </ol>`,screenshots:[{src:"images/cv/projects/zone-zzmetro/1.png",alt:"1.png"},{src:"images/cv/projects/zone-zzmetro/2.png",alt:"2.png"},{src:"images/cv/projects/zone-zzmetro/3.png",alt:"3.png"},{src:"images/cv/projects/zone-zzmetro/4.png",alt:"4.png"}]},{id:"project7",no:7,name:"《智慧景区服务平台》",url:"",time:"2016.9 ~ 2018.12",项目简介:`<p class="pti">
              根据市场部门业务需求，构建一个景区服务平台，用于满足景区对『智慧景区』的需求。功能包含不限于：景区精确定位及导航、实时美景广场、停车系统、电子门票等。
            </p>`,项目使用技术:`<p>后端开发主要语言、框架及环境：</p>
            <ol>
              <li>Node.js，TypeScript</li>
              <li>Express.js</li>
              <li>View Engine: Nunjucks</li>
              <li>Test Framework: mocha</li>
              <li>MongoDB, Redis</li>
              <li>UI: INSPINIA Admin Theme based on Bootstrap</li>
              <li>MVVM: Angular2、Roit.js</li>
              <li>Code Style: TSLint</li>
              <li>阿里云Open Storage Service</li>
              <li>Monitor: 听云、New Relic</li>
              <li>构建工具: gulp</li>
              <li>包管理工具: npm、bower</li>
              <li>IDE: 支持 Visual Studio 2017在Windows下开发及Visual Code在Ubuntu Desktop或Mac系统上开发</li>
            </ol>

            <p>运行生产环境：</p>
            <ol>
              <li>IDC实体机，CPU:至强E5。</li>
              <li>Web服务器: nginx upstream to cluster。</li>
              <li>Production process manager: pm2。</li>
              <li>使用Node.js Cluster运行多app。</li>
            </ol>`,项目职责:`<ol>
              <li>负责开发技术评估选择及技术预研并接入项目中。</li>
              <li>负责搭建基于Express的后台系统，统一使用TypeScript进行前后台功能开发。</li>
              <li>负责服务器生产环境配置及维护。</li>
              <li>负责技术分享项目开发过程中已经落地的技术点，并培训其它成员以使开发统思想统一到一致。</li>
              <li>负责开发的功能模块有：AStar*算法移植，景区坐标取点，景区线路画线，探针日志实时打印，智慧停车等。</li>
            </ol>`,项目中遇到的问题:`<ol>
              <li>项目成员前期对TypeScript重视度不够，有部分代码还是受JavaScript思想比多。</li>
              <li>有些npm包没有TypeScript声明头文件，导致使用这些包的时候需要自己定义声明文件，无形中多了一部分工作量。</li>
              <li>H5页面开发中用到GPS统计步数，不精确。</li>
            </ol>`,项目后期计划:`<ol>
              <li>将MongoDB数据库由master-slaves模式升级为分片集群模式，提高数据库的高可用性。</li>
              <li>采用redis集群锁处理数据加锁读写事务方面的问题。</li>
              <li>使用nbind封装闸机厂家提供的纯WIN API编写的dll（x86）。</li>
              <li>采用electron来开发闸机桌面管理工具，替换MFC编写的桌面工具。</li>
              <li>将日志记录存储到阿里云Kafka或LogHub云产品中，让数据库只存业务数据。</li>
            </ol>`,screenshots:[{src:"images/cv/projects/1trip-mp/1.png",alt:"1.png"},{src:"images/cv/projects/1trip-mp/10.png",alt:"10.png"},{src:"images/cv/projects/1trip-mp/11.png",alt:"11.png"},{src:"images/cv/projects/1trip-mp/12.png",alt:"12.png"},{src:"images/cv/projects/1trip-mp/13.png",alt:"13.png"},{src:"images/cv/projects/1trip-mp/14.png",alt:"14.png"},{src:"images/cv/projects/1trip-mp/15.png",alt:"15.png"},{src:"images/cv/projects/1trip-mp/16.png",alt:"16.png"},{src:"images/cv/projects/1trip-mp/2.png",alt:"2.png"},{src:"images/cv/projects/1trip-mp/3.png",alt:"3.png"},{src:"images/cv/projects/1trip-mp/4.png",alt:"4.png"},{src:"images/cv/projects/1trip-mp/5.png",alt:"5.png"},{src:"images/cv/projects/1trip-mp/6.png",alt:"6.png"},{src:"images/cv/projects/1trip-mp/7.png",alt:"7.png"},{src:"images/cv/projects/1trip-mp/8.png",alt:"8.png"},{src:"images/cv/projects/1trip-mp/9.png",alt:"9.png"}]},{id:"project6",no:6,name:"《壹旅游大数据系统》",url:"",time:"2014.7 ~ 2016.4",项目简介:'<p class="pti">主要是对前期的各个子系统进行整合，期望能实现对各个子系统进行系统的管理和维护。</p>',项目使用技术:`<p>后端开发语言及框架：</p>
            <ol>
              <li>C# with .NET Framework 4.5.1</li>
              <li>ASP.NET MVC 5</li>
              <li>Entity Framework 6 with code first</li>
              <li>Razor View Engine</li>
              <li>OData v4</li>
              <li>UI: Kendo UI Framework</li>
            </ol>

            <p>运行生产环境：</p>
            <ol>
              <li>公司IDC机房虚拟化环境中运行，CPU为至强E3</li>
              <li>数据库：SQL Server 2014 (x2 Failover)</li>
              <li>代码服务器：Windows Server 2012 Standard x64( x3)</li>
              <li>Web服务器: IIS 8</li>
              <li>Web Farm代码同步：Windows Server DFS</li>
              <li>文件存储：阿里云Object Storage Service（OSS）</li>
              <li>
                数据库服务器及代码服务器运行在防火墙服务器后边。
                <p>系统架构图大致如下：</p>
                <div class="row">
                  <div class="col-md-3">
                    <div class="thumbnails thumbnail-style margin-bottom-40">
                      <div class="thumbnail-img">
                        <div class="overflow-hidden">
                          <a data-fancybox="cloud-architecture" href="../public/images/cv/projects/1trip-cloud/architecture1.jpg" target="_blank">
                            <img class="img-responsive" src="../public/images/cv/projects/1trip-cloud/architecture1.jpg?x-oss-process=image/resize,w_310" alt="框架图">
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ol>`,项目职责:`<ol>
              <li>负责参与前期技术调研与选型及系统整体框架搭建。</li>
              <li>负责开发模块：微信管理（全部）、抽奖管理（全部）、批量导入（导入算法优化）。</li>
              <li>负责服务器生产环境配置及运行维护。</li>
            </ol>`,项目中遇到的问题:`<ol>
              <li>需求变更过快，只能努力做到最大化的对老系统替换。系统大约实现了60% ~ 70%旧业务统一。</li>
              <li>抽奖活动参数变化过多，导致前期设计的抽奖统计模型无法满足，最后根据新需求设计出了通用的、线性控制的抽奖统计模型。</li>
              <li>防火墙服务器对tcp数据包的部分侦测与转发会影响应用程序访问效能。</li>
              <li>Windows Server 2012 GUI模式效能低下，CPU及内存消耗比基于Ubuntu Server的服务器要高太多。</li>
              <li>Windows Server GUI 模式与 Core模式切换不方便。</li>
              <li>DFS同步有延迟，同时对基于Wild Card Pattern方式来过滤文件复制功能不强大。</li>
            </ol>`,screenshots:[{src:"images/cv/projects/1trip-cloud/1.png",alt:"1.png"},{src:"images/cv/projects/1trip-cloud/2.png",alt:"2.png"},{src:"images/cv/projects/1trip-cloud/3.png",alt:"3.png"},{src:"images/cv/projects/1trip-cloud/4.png",alt:"4.png"},{src:"images/cv/projects/1trip-cloud/architecture1.jpg",alt:"architecture1.jpg"},{src:"images/cv/projects/1trip-cloud/load1.png",alt:"load1.png"},{src:"images/cv/projects/1trip-cloud/load2.png",alt:"load2.png"},{src:"images/cv/projects/1trip-cloud/load3.png",alt:"load3.png"},{src:"images/cv/projects/1trip-cloud/load4.png",alt:"load4.png"}]},{id:"project5",no:5,name:"《微信壹旅游服务平台》",url:"",time:"2013.7 ~ 2014.2",项目简介:'<p class="pti">主要实现对微信公众账号在开发者模式下的各个接口操作管理。</p>',项目使用技术:`<p>后端开发语言及框架：</p>
        <ol>
          <li>Ruby 1.9</li>
          <li>Ruby on Rails v3.2.13</li>
          <li>View Engine: slim</li>
        </ol>
        <p>前端框架及语言:</p>
        <ol>
          <li>ACE Bootstrap Admin UI Framework</li>
          <li>SCSS, CoffeeScript, Slim</li>
        </ol>
        <p>运行生产环境：</p>
        <ol>
          <li>公司IDC机房虚拟化环境中运行，CPU为至强E3</li>
          <li>数据库：MySQL</li>
          <li>代码服务器：Ubuntu Server 12.04 x64 (x3)</li>
          <li>Rails Server：Unicorn</li>
          <li>Http Server：Nginx</li>
        </ol>`,项目职责:"<p>负责项目后期维护，修正已知bug及添加新需求功能，未参与前期主框架搭建开发。</p>",项目中遇到的问题:`<ol>
          <li>签约景区的一些需求比较独立，导致git分支版本过多，有8个分支版本，导致维护比较麻烦。</li>
        </ol>`,screenshots:[{src:"images/cv/projects/1trip-weixin/1.png",alt:"1.png"},{src:"images/cv/projects/1trip-weixin/2.png",alt:"2.png"},{src:"images/cv/projects/1trip-weixin/3.png",alt:"3.png"},{src:"images/cv/projects/1trip-weixin/4.png",alt:"4.png"},{src:"images/cv/projects/1trip-weixin/5.png",alt:"5.png"}]},{id:"project4",no:4,name:"《壹旅图》",url:"",time:"2013.5 ~ 2014.4",项目简介:'<p class="pti">为签约景区提供定制化的后台内容管理，并为手机端app提供在线或离线两种方式的数据访问。</p>',项目使用技术:`<p>后端开发语言及框架：</p>
        <ol>
          <li>Ruby 1.9</li>
          <li>Ruby on Rails v3.2.13</li>
          <li>View Engine: erb</li>
          <li>UI:Bootstrap Framework</li>
        </ol>
        <p>运行生产环境：</p>
        <ol>
          <li>公司IDC机房虚拟化环境中运行，CPU为至强E3</li>
          <li>数据库：MySQL</li>
          <li>代码服务器：Ubuntu Server 12.04 x64 (x2)</li>
          <li>Rails Server：Thin</li>
          <li>Http Server：Nginx</li>
          <li>流量监测工具: Cacti</li>
        </ol>`,项目职责:"<p>负责搭建项目系统框架，完成系统约70%左右的后端业务功能。</p>",项目中遇到的问题:`<ol>
          <li>前期刷新缓存时采用观察者模式对每个数据字段修改都进行刷新，导致刷新过于频繁。后期调整为其它刷新策略。</li>
          <li>Ubuntu Server会对IO进行缓存，导致File服务器内存消耗过大，后期调整了操作系统IO缓存策略。</li>
          <li>File服务器带宽有限制，会导致下载卡顿情况，同时也无法做静态文件CDN加速，后期采用阿里云Object Storage Service（OSS）。</li>
          <li>
            根据当前model与指定目标ClassName，需要在model
            class的继承链上查找目标ClassName的数据库实例对象，需要使用元编程进行多态类型检测，会降低一些性能。
          </li>
        </ol>`,screenshots:[{src:"images/cv/projects/1trip-tm/1.png",alt:"1.png"},{src:"images/cv/projects/1trip-tm/2.png",alt:"2.png"},{src:"images/cv/projects/1trip-tm/3.png",alt:"3.png"},{src:"images/cv/projects/1trip-tm/4.png",alt:"4.png"},{src:"images/cv/projects/1trip-tm/5.png",alt:"5.png"}]},{id:"project3",no:3,name:"《拍立导》",url:"",time:"2012.12 ~ 2013.4",项目简介:'<p class="pti">识别游客在景区里的拍图，为游客游览景区提供介绍及引导。</p>',项目使用技术:`<p>后端开发语言及框架：</p>
        <ol>
          <li>Ruby 1.9</li>
          <li>Ruby on Rails v3.2.13</li>
          <li>View Engine: erb</li>
          <li>UI:Bootstrap Framework</li>
        </ol>
        <p>运行生产环境：</p>
        <ol>
          <li>公司IDC机房虚拟化环境中运行，CPU为至强E3</li>
          <li>数据库：MySQL</li>
          <li>代码服务器：Ubuntu Server 12.04 x64 (x2)</li>
          <li>Rails Server：Phusion Passenger</li>
          <li>Http Server：Nginx</li>
        </ol>`,项目职责:"<p>负责建立景区图片样本库。实现对游客上传到服务器的图片进行识别，并推送一些景区导游内容信息。</p>",项目中遇到的问题:`<ol>
          <li>前期由imgseek来进行处理图片识别。由于识别精度达不到要求，改用第三方商业识别库。</li>
          <li>Ruby无法直接与第三方识别库进行交互，只能为识别库封装一层C for ruby的接口，然后才能在rails框架里使用。</li>
          <li>图片识别为CPU密集型应用，由生产环境的物理限制，最后调整了图片识别算法精度参数的配置。</li>
          <li>图片识别过程实际上为特征值的对比过程，采用ruby的多线程方式来进行搜索，以减少部分搜索时间。</li>
        </ol>`},{id:"project2",no:2,name:"《流媒体内容管理系统》",url:"",time:"2011.6 ~ 2012.12",项目简介:'<p class="pti">公司内部有许多TS测试码流文件，以目录的形式存储在磁盘上，比较零碎且无法进行搜索，因而需要对流媒体文件格式进行解析入库管理。</p>',项目使用技术:`<p>批量解析入库桌面版工具：</p>
        <ol>
          <li>开发语言： C#</li>
          <li>框架： Windows Forms</li>
          <li>工具支持的操作系统为: XP, Windows 7 32位</li>
        </ol>
        <p>后端使用的技术：</p>
        <ol>
          <li>开发语言： C#</li>
          <li>使用框架： ASP.NET MVC 3</li>
          <li>UI框架： jQuery UI Framework</li>
        </ol>`,项目职责:`<p>负责桌面解析工具：实现对TS码流的decode解析，入库功能。</p>
        <p>负责后端内容系统：根据不同的参数进行搜索流媒体。</p>`,项目中遇到的问题:`<ol>
          <li>DVB中的TS码流是一个复合格式的码流，需要了解其组成结构及位的含义。</li>
          <li>桌面工具中，单线程解码速度不理想，后期修改为多线程处理，提高CPU利用率。</li>
        </ol>`},{id:"project1",no:1,name:"《uiDesign》",url:"",time:"2010.11 ~ 2011.4",项目简介:'<p class="pti">uiDesign是一款给嵌入式设备（如：电视机等）提供应用层的图形设计软件，主要用于凌阳集团。</p>',项目使用技术:`<ol>
          <li>开发语言及框架：C++、MFC</li>
          <li>UI框架： Codejock Toolkit</li>
          <li>字库</li>
          <li>Python处理字符</li>
        </ol>`,项目职责:"<p>负责对比全球已经有的CodePage在代码中的映射范围是否正确。并在技术经理的指导下熟悉uiDesign业务流程及修改部分bug。</p>",项目中遇到的问题:`<ol>
          <li>系统庞大，对软件中所涉及的业务不熟悉，对算法不能正常的理解。</li>
          <li>涉及汇编、C、C++、Python、MFC框架、Windows操作系统、芯片规格、阿拉伯字库变形算法等不能在短期内掌握。有时修改一个bug会产生其它bug。</li>
        </ol>`,screenshots:[{src:"images/cv/projects/sunmedia-uidesign/1.png",alt:"1.png"},{src:"images/cv/projects/sunmedia-uidesign/2.png",alt:"2.png"},{src:"images/cv/projects/sunmedia-uidesign/3.png",alt:"3.png"}]}],$a=`
  <table class="skills table-hover">
    <!-- 开发语言 -->
    <tbody><tr>
      <th rowspan="16" class="text-center bg-green-1"><i class="fa fa-language"></i> 开发语言</th>
      <td class="bg-grey"><b>名称</b></td>
      <td class="bg-grey"><b>掌握程度</b></td>
      <td class="bg-grey"><b>说明</b></td>
    </tr>
    <tr>
      <td>
        <a target="_blank" href="https://developer.mozilla.org/zh-CN/docs/Web/HTML">HTML</a>
      </td>
      <td>熟练</td>
      <td>理解常用标签含义，并知道对应的使用场景。</td>
    </tr>
    <tr>
      <td>
        <a target="_blank" href="https://developer.mozilla.org/zh-CN/docs/Web/CSS">CSS</a>
        /
        <a target="_blank" href="https://sass-lang.com/">SCSS</a>
        /
        <a target="_blank" href="https://lesscss.org/">LESS</a>
      </td>
      <td>熟练</td>
      <td>知道常用的样式属性，并知道对应的使用场景。</td>
    </tr>
    <tr>
      <td><a target="_blank" href="https://nodejs.org/en/">Node.js</a>（JavaScript）</td>
      <td>熟练</td>
      <td>熟练使用Node.js进行后端系统开发。</td>
    </tr>
    <tr>
      <td><a target="_blank" href="http://coffeescript.org/">CoffeeScript</a></td>
      <td>熟悉</td>
      <td>在rails应用的前端有部分代码使用coffescript。</td>
    </tr>
    <tr>
      <td><a target="_blank" href="https://www.python.org/">Python</a></td>
      <td>熟练</td>
      <td>维护过Django和Flask应用。</td>
    </tr>
    <tr>
      <td><a target="_blank" href="https://www.ruby-lang.org/en/">Ruby</a></td>
      <td>熟练</td>
      <td>知道元编程，能顺利用于编写基于Rails框架的后端程序。</td>
    </tr>
    <tr>
      <td><a target="_blank" href="http://eli-project.sourceforge.net/c_html/c.html">C</a></td>
      <td>熟练</td>
      <td>熟练使用gdb(gui)调试程序</td>
    </tr>
    <tr>
      <td><a target="_blank" href="https://isocpp.org/std/the-standard">C++</a></td>
      <td>熟悉</td>
      <td>
        了解基本语法，维护过<a target="_blank" href="https://docs.microsoft.com/en-us/cpp/windows/overview-of-windows-programming-in-cpp">VC++</a>开发的MFC程序。<br>
        由于node、hotspot、Chromium等许多优秀的开源项目是用c++写的，平时对C++也有学习，后续会持续投入研究C++。
      </td>
    </tr>
    <tr>
      <td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/ms228593.aspx">C#</a></td>
      <td>熟练</td>
      <td>知道反射、lambda、委托等；能顺利在ASP.NET MVC / ASP.NET MVC Core / Windows Forms .NET框架下进行开发。</td>
    </tr>
    <tr>
      <td><a target="_blank" href="https://www.rust-lang.org/">Rust</a></td>
      <td>熟练</td>
      <td>
        能看懂大部分rust代码。熟悉c与rust交互类型业务；能基于actix-web框架来写api类型业务。
        目前对rust的注解'a,'b这种语法在与具体业务结合时，还没有吃透，无法灵活使用注解语法进行函数定义。
      </td>
      <td></td>
    </tr>
    <tr>
      <td><a target="_blank" href="https://github.com/PowerShell/PowerShell">PowerShell</a></td>
      <td>熟悉</td>
      <td>能使用PowerShell来进行远程管理Window Server。</td>
    </tr>
    <tr>
      <td><a target="_blank" href="https://www.gnu.org/software/bash/manual/">Bash</a></td>
      <td>熟练</td>
      <td>熟练使用linux bash处理工作的业务。</td>
    </tr>
    <tr>
      <td><a target="_blank" href="https://technet.microsoft.com/en-us/library/ms189826(v=sql.90).aspx">T-SQL</a></td>
      <td>熟练</td>
      <td>熟练使用sql来处理常用业务。能使用 ShardingSphere/MyCat 来处理分库分表问题。对死锁分析，idb恢复方案亦熟悉。</td>
    </tr>
    <tr>
      <td><a target="_blank" href="https://docs.oracle.com/javase/specs/">Java</a></td>
      <td>熟练</td>
      <td>熟练使用spring-boot框架来开发web类业务。</td>
    </tr>
    <tr>
      <td><a target="_blank" href="http://www.typescriptlang.org/">TypeScript</a></td>
      <td>熟练</td>
      <td>熟练使用TS进行后端(Node.js)或前端(Angular 2.x)开发。</td>
    </tr>

    <!-- 开发框架 -->
    <tr>
      <th rowspan="9" class="text-center bg-green-2"><i class="fa fa-cubes"></i> 开发框架</th>
    </tr>
    <tr>
      <td><a target="_blank" href="https://docs.microsoft.com/en-us/aspnet/mvc/mvc5">ASP.NET MVC 5</a></td>
      <td>熟练</td>
      <td>
        <ol style="text-align: left; padding-left: 1.2em">
          <li>
            <a target="_blank" href="https://docs.microsoft.com/en-us/aspnet/mvc/overview/getting-started/lifecycle-of-an-aspnet-mvc-5-application">理解ASP.NET MVC应用程序生命周期。</a>
          </li>
          <li>理解Razor模板引擎对View的渲染。</li>
          <li>
            能顺利使用<a target="_blank" href="https://docs.microsoft.com/en-us/aspnet/identity/overview/getting-started/introduction-to-aspnet-identity">ASP.NET Identity</a>进行授权、角色管理。
          </li>
          <li>能顺利使用常用<a target="_blank" href="https://www.nuget.org/">Nuget</a>包。</li>
          <li>
            熟悉<a target="_blank" href="https://msdn.microsoft.com/en-us/library/aa937723(v=vs.113).aspx">Entity Framework ORM</a>框架建立关系模型及常用Migration命令。
          </li>
          <li>熟悉基于<a target="_blank" href="http://www.odata.org/documentation/">OData</a>协议中常用的RESTful指令。</li>
        </ol>
      </td>
    </tr>
    <tr>
      <td><a target="_blank" href="https://docs.microsoft.com/en-us/aspnet/core/">ASP.NET Core</a></td>
      <td>熟练</td>
      <td>
        <ol style="text-align: left; padding-left: 1.2em">
          <li>了解ASP.NET MVC Core与在跨平台中的限制性,如不支持OData协议等。</li>
          <li>熟悉ASP.NET MVC Core开发流程。</li>
        </ol>
      </td>
    </tr>
    <tr>
      <td><a target="_blank" href="http://rubyonrails.org/">Rails</a></td>
      <td>熟练</td>
      <td>
        <ol style="text-align: left; padding-left: 1.2em">
          <li>熟悉Active Record ORM框架对关系模型的创建、关联（1:1，1:n, n:m及多态）、验证、回调hook等。</li>
          <li>熟悉erb、<a target="_blank" href="http://slim-lang.com/">Slim</a>模板引擎语法及同时使用两种模板引擎时的加载顺序。</li>
          <li>熟悉<a target="_blank" href="http://www.aptana.com/">Aptana Studio IDE</a>工具，以提高对Rails程序的开发及debug效率。</li>
          <li>熟悉<a target="_blank" href="https://en.wikipedia.org/wiki/Content_negotiation">content negotiate</a>机制在controller中的广泛使用。</li>
          <li>
            熟悉使用 <a target="_blank" href="http://code.macournoyer.com/thin/">thin</a>、
            <a target="_blank" href="https://www.phusionpassenger.com/">Passenger</a>、
            <a target="_blank" href="https://bogomips.org/unicorn/">unicorn</a>来运行Rails程序（生产环境）。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <td><a target="_blank" href="http://expressjs.com/">Express 4</a></td>
      <td>熟练</td>
      <td>
        <ol style="text-align: left; padding-left: 1.2em">
          <li>熟悉使用<a target="_blank" href="http://mongoosejs.com/">Mongoose ODM</a>进行模型的建立、查询。</li>
          <li>熟悉<a target="_blank" href="https://mozilla.github.io/nunjucks/">nunjucks</a>模板引擎语法。</li>
          <li>熟悉node.js基于round-robin原理的cluster模式。</li>
          <li>熟悉pm2插件将express程序运行于生产环境中。</li>
        </ol>
      </td>
    </tr>
    <tr>
      <td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/d06h2x6e.aspx">MFC</a> / Qt / Windows Forms</td>
      <td>了解</td>
      <td>
        <ol style="text-align: left; padding-left: 1.2em">
          <li>有维护过MFC程序，未深入学习。</li>
          <li>熟悉Qt wiget开发。</li>
          <li>熟悉WinForm来开发桌面程序。</li>
        </ol>
      </td>
    </tr>
    <tr>
      <td><a target="_blank" href="http://www.telerik.com/kendo-ui">Kendo UI</a></td>
      <td>熟练</td>
      <td>
        <ol style="text-align: left; padding-left: 1.2em">
          <li>熟悉kendo ui常用控件。</li>
          <li>能对已经有控件进行简单扩展。</li>
        </ol>
      </td>
    </tr>
    <tr>
      <td><a target="_blank" href="https://angular.io/">Angular 2</a>（MVVM）</td>
      <td>熟悉</td>
      <td>
        <ol style="text-align: left; padding-left: 1.2em">
          <li>熟悉Angular2程序的基本组成单元。</li>
          <li>熟悉Angular2的数据绑定、事件绑定、通过Service DI来加载数据及通过form post提交数据到服务器中。</li>
          <li>熟悉Angular2的lifecycle hook方法。</li>
          <li>熟悉system.js加载Angular2应用。</li>
          <li>了解Angular2在浏览器兼容方面的不完整性，主要是对IE兼容不很好。</li>
        </ol>
      </td>
    </tr>
    <tr>
      <td><a target="_blank" href="http://riotjs.com//">Riot.js</a>（MVVM）</td>
      <td>熟悉</td>
      <td>
        <ol style="text-align: left; padding-left: 1.2em">
          <li>熟悉riot.js的加载流程。</li>
          <li>能将比较独立的业务封装成一个tag模块，其它主页面复用该tag即可。</li>
        </ol>
      </td>
    </tr>

    <!-- 操作系统 -->
    <tr>
      <th rowspan="4" class="text-center bg-green-1"><i class="fa fa-windows"></i> 操作系统</th>
    </tr>
    <tr>
      <td>Windows Server</td>
      <td>熟悉</td>
      <td>
        <ol style="text-align: left; padding-left: 1.2em">
          <li>了解防火墙的设置。</li>
          <li>熟悉Web Farm集群及DFS配置。</li>
          <li>熟悉使用PowerShell来进行多主机site管理。</li>
        </ol>
      </td>
    </tr>
    <tr>
      <td>Windows Nano Server</td>
      <td>了解</td>
      <td>了解ASP.NET MVC Core在Nano Server中的运行。</td>
    </tr>
    <tr>
      <td>debian / fedora / ubuntu / kylin os / os x</td>
      <td>熟悉</td>
      <td>
        <ol style="text-align: left; padding-left: 1.2em">
          <li>熟悉操作系统环境，能顺利搭建基于linux系统的各类开发环境。</li>
          <li>熟悉常用bash命令在linux系统中的应用。</li>
        </ol>
      </td>
    </tr>

    <!-- IDE工具 -->
    <tr>
      <th rowspan="4" class="text-center bg-green-2"><i class="fa fa-gavel"></i> IDE工具</th>
    </tr>
    <tr>
      <td><a target="_blank" href="https://www.visualstudio.com/">Visual Studio</a></td>
      <td>熟练</td>
      <td>
        <ol style="text-align: left; padding-left: 1.2em">
          <li>熟悉Visual Studio中的常用窗口含义及属性配置。</li>
          <li>能熟练使用Visual Studio开发基于Windows平台的项目（包含：ASP.NET、Python、Node.js项目）。</li>
        </ol>
      </td>
    </tr>
    <tr>
      <td><a target="_blank" href="https://eclipse.org/">Eclipse</a></td>
      <td>熟练</td>
      <td>
        <ol style="text-align: left; padding-left: 1.2em">
          <li>熟悉Eclipse插件安装及Code Style统一配置。</li>
          <li>能熟练使用Eclipse进行基于Java项目的开发（ Web方向 ）。</li>
        </ol>
      </td>
    </tr>
    <tr>
      <td><a target="_blank" href="https://code.visualstudio.com/">VS Code</a></td>
      <td>熟练</td>
      <td>
        <ol style="text-align: left; padding-left: 1.2em">
          <li>熟练使用vs code工具进行可视化调试各种语言编写的程序。</li>
          <li>采用github coplit插件实现开发效率的最大化。</li>
        </ol>
      </td>
    </tr>

    <!-- 代码管理 -->
    <tr>
      <th rowspan="4" class="text-center bg-green-1"><i class="fa fa-github"></i> 代码管理</th>
    </tr>
    <tr>
      <td>git</td>
      <td>熟练</td>
      <td>
        <ol style="text-align: left; padding-left: 1.2em">
          <li>了解git基于分布式管理特点。</li>
          <li>熟悉git常用操作命令：git clone、git status、git log等。</li>
          <li>熟练使用gitk工具查看当前修改内容。</li>
          <li>
            能顺利在Ubuntu Server中搭建<a target="_blank" href="https://github.com/gitlabhq/gitlabhq">GitLabHQ</a>开源系统，用于公司内部源代码管理。
          </li>
          <li>熟练使用git在gerrit管理中的流程。</li>
        </ol>
      </td>
    </tr>
    <tr>
      <td>TFS</td>
      <td>熟练</td>
      <td>
        <ol style="text-align: left; padding-left: 1.2em">
          <li>了解<a target="_blank" href="https://www.visualstudio.com/tfs/">TFS（Team Foundation Server）</a>基于集中式管理特点。</li>
          <li>在Visual Studio熟练使用TFS进行源代码管理与迭代开发。</li>
          <li>能顺利在Windows Server中搭建TFS系统，用于公司内部源代码管理。</li>
        </ol>
      </td>
    </tr>
    <tr>
      <td>svn</td>
      <td>熟练</td>
      <td>
        <ol style="text-align: left; padding-left: 1.2em">
          <li>熟练svn进行源代码管理。</li>
        </ol>
      </td>
    </tr>

    <!-- 数据库 -->
    <tr>
      <th rowspan="5" class="text-center bg-green-2"><i class="fa fa-database"></i> 数据库</th>
    </tr>
    <tr>
      <td><a target="_blank" href="https://www.microsoft.com/en-us/sql-server/sql-server-downloads">MS SQL Server</a></td>
      <td>熟悉</td>
      <td>
        <ol style="text-align: left; padding-left: 1.2em">
          <li>熟悉使用SQL Server Management Studio进行T-SQL语句编写、断点debug。</li>
          <li>熟悉使用SQL Server Management Studio进行数据库账号权限管理、备份计划编排。</li>
          <li>
            了解<a target="_blank" href="https://msdn.microsoft.com/zh-cn/library/ms345108(v=sql.90).aspx">SQL Server Service Broker</a>用于构建排队应用。
          </li>
          <li>
            了解<a target="_blank" href="https://docs.microsoft.com/en-us/sql/sql-server/failover-clusters/windows/always-on-failover-cluster-instances-sql-server">Failover Cluster。</a>
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <td><a target="_blank" href="https://www.mysql.com/">MySQL</a></td>
      <td>熟悉</td>
      <td>
        <ol style="text-align: left; padding-left: 1.2em">
          <li>熟悉在MySQL Workbench中进行编写T-SQL语句及开发。</li>
          <li>熟悉MySQL的常用命令：mysqldump、source、mysqladmin等。</li>
          <li>了解master-salve主从模式。</li>
        </ol>
      </td>
    </tr>
    <tr>
      <td><a target="_blank" href="https://www.mongodb.com/">MongoDB</a></td>
      <td>熟悉</td>
      <td>
        <ol style="text-align: left; padding-left: 1.2em">
          <li>熟悉MongoDB对document基本创建及查询操作。</li>
          <li>熟悉MongoDB中以关系数据库的方式定义Document Schema。</li>
          <li>熟悉MongoDB常用指令：mongodump、mongorestore。</li>
        </ol>
      </td>
    </tr>
    <tr>
      <td><a target="_blank" href="https://redis.io/">redis</a></td>
      <td>熟悉</td>
      <td>
        <ol style="text-align: left; padding-left: 1.2em">
          <li>熟练使用redis用于缓存类业务。</li>
        </ol>
      </td>
    </tr>

    <!-- 其它 -->
    <tr>
      <th rowspan="4" class="text-center bg-green-1"><i class="fa fa-chrome"></i> 其它</th>
    </tr>
    <tr>
      <td>翻墙技能</td>
      <td>熟练</td>
      <td>
        <ol style="text-align: left; padding-left: 1.2em">
          <li>通过购买VPS服务器，自行搭建VPN翻墙服务，并通过cron任务按需更换VPS，防止被墙。</li>
          <li><b>自2021年下半年就开始使用AI大模型进行辅助编程。</b></li>
        </ol>
      </td>
    </tr>
  </tbody></table>
`,Ha=`
  <ul class="timeline-v2">

    <li>
      <time class="cbp_tmtime">
        <span>2010.7 ~ 今 </span>
        <span><b>工作</b></span>
      </time>

      <i class="cbp_tmicon rounded-x hidden-xs"></i>
      <div class="cbp_tmlabel">
        <h2> 考试认证 </h2>
        <div class="row row-indent">
          <div class="col-md-3">
            <a data-fancybox="education" href="/images/cv/education/alibaba-java-coding-standard.jpg" target="_blank">
              <img class="img-responsive md-margin-bottom-10" src="/images/cv/education/alibaba-java-coding-standard.jpg" alt="阿里巴巴 Java 开发手册">
            </a>
          </div>
        </div>
      </div>
    </li>

    <li>
      <time class="cbp_tmtime">
        <span>2006.9 ~ 2010.7</span>
        <span><b>大学</b></span>
      </time>

      <i class="cbp_tmicon rounded-x hidden-xs"></i>
      <div class="cbp_tmlabel">
        <h2>乐山师范学院</h2>
        <p class="indent">大学期间总体来看比较认真地在学习。通过国家《软件设计师（中级）》水平考试（俗称软考）。</p>
        <div class="row row-indent">
          <div class="col-md-3">
            <a data-fancybox="education" href="/images/cv/education/intermediate-certificate-of-software-designers.jpg" target="_blank">
              <img class="img-responsive md-margin-bottom-10" src="/images/cv/education/intermediate-certificate-of-software-designers.jpg" alt="软件设计师（中级）证书">
            </a>
          </div>
        </div>
      </div>
    </li>

    <li>
      <time class="cbp_tmtime">
        <span>2003.9 ~ 2006.5</span>
        <span><b>高中</b></span>
      </time>

      <i class="cbp_tmicon rounded-x hidden-xs"></i>
      <div class="cbp_tmlabel">
        <h2>重庆市璧山县来凤高中</h2>
        <p class="indent">高中继续偏科。获得重庆市璧山县县级化学竞赛二等奖一次，获得重庆市数学奥林匹克竞赛三等奖一次，获得全国高中数学奥林匹克竞赛三等奖一次。</p>
        <div class="row row-indent">
          <div class="col-md-3">
            <a data-fancybox="education" href="/images/cv/education/senior-high-school-olympic-nationwide-3rd-prize.jpg" target="_blank">
              <img class="img-responsive md-margin-bottom-10" src="/images/cv/education/senior-high-school-olympic-nationwide-3rd-prize.jpg" alt="全国高中数学奥林匹克竞赛三等奖">
            </a>
          </div>
          <div class="col-md-3">
            <a data-fancybox="education" href="/images/cv/education/senior-high-school-olympic-chongqing-3rd-prize.jpg" target="_blank">
              <img class="img-responsive md-margin-bottom-10" src="/images/cv/education/senior-high-school-olympic-chongqing-3rd-prize.jpg" alt="重庆市高中数学奥林匹克竞赛三等奖">
            </a>
          </div>
        </div>
      </div>
    </li>

    <li>
      <time class="cbp_tmtime">
        <span>2000.9 ~ 2003.5</span>
        <span><b>初中</b></span>
      </time>

      <i class="cbp_tmicon rounded-x hidden-xs"></i>

      <div class="cbp_tmlabel">
        <h2>重庆市璧山县八塘中学</h2>

        <div class="row">
          <div class="col-md-12">
            <p class="indent">初中不怎么喜欢语文老师，于是弃文从理。偏科于数学，得重庆市数学奥林匹克竞赛三等奖一次。</p>
          </div>
          <div class="row row-indent">
            <div class="col-md-3">
              <a data-fancybox="education" href="/images/cv/education/junior-high-school-olympic-chongqing-3rd-prize.jpg" target="_blank">
                <img class="img-responsive md-margin-bottom-10" src="/images/cv/education/junior-high-school-olympic-chongqing-3rd-prize.jpg" alt="重庆市初中数学奥林匹克竞赛三等奖">
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>

    <li>
      <time class="cbp_tmtime">
        <span>1994.9 ~ 2000.5</span>
        <span><b>小学</b></span>
      </time>
      <i class="cbp_tmicon rounded-x hidden-xs"></i>

      <div class="cbp_tmlabel">
        <h2>重庆市璧山县八塘小学</h2>

        <div class="margin-bottom-20"></div>

        <div class="row">
          <div class="col-md-12">
            <p class="indent">时间太久远，已经想不起怎么渡过的。</p>
          </div>
        </div>
      </div>
    </li>
  </ul>
`,qa=`
  <!-- DB REST API -->
  <div class="row" style="margin-bottom:20px;">
    <div class="col-md-12">
      <div class="funny-boxes" style="background:#ebf5fb; border:1px solid #d4e6f1;">
        <div class="media">
          <div class="media-left" style="padding-right:20px;">
            <div style="width:56px; height:56px; border-radius:50%; background:#3498db; text-align:center; line-height:56px; font-size:22px; color:#fff;">
              <i class="fa fa-database"></i>
            </div>
          </div>
          <div class="media-body">
            <div style="overflow:hidden; margin-bottom:10px;">
              <h3 class="media-heading" style="float:left; font-size:18px; font-weight:600; color:#1a5276; margin:0;">DB REST API</h3>
              <a class="btn btn-u btn-u-sm" style="float:right; background:#3498db;" href="https://github.com/serveryang/db-rest" target="_blank">
                <i class="fa fa-external-link"></i> 访问项目
              </a>
            </div>
            <p style="font-size:13px; line-height:1.7; color:#2c3e50; margin-bottom:12px;">Rust 编写的高性能 RESTful 数据库服务，通过 JNI 调用 JDBC 驱动，支持 MySQL、PostgreSQL、达梦等多种数据库。提供标准 RESTful 接口和 CLI 工具，适合数据库管理和数据库弱口令检测场景。</p>
            <div style="margin-bottom:10px;">
              <span class="label" style="background:#d6eaf8; color:#1a5276; font-size:11px; padding:3px 8px; margin-right:5px; display:inline-block;">Rust</span>
              <span class="label" style="background:#d6eaf8; color:#1a5276; font-size:11px; padding:3px 8px; margin-right:5px; display:inline-block;">JNI</span>
              <span class="label" style="background:#d6eaf8; color:#1a5276; font-size:11px; padding:3px 8px; margin-right:5px; display:inline-block;">JDBC</span>
              <span class="label" style="background:#d6eaf8; color:#1a5276; font-size:11px; padding:3px 8px; margin-right:5px; display:inline-block;">REST API</span>
              <span class="label" style="background:#d6eaf8; color:#1a5276; font-size:11px; padding:3px 8px; display:inline-block;">CLI</span>
            </div>
            <p style="margin:0;"><small style="font-size:12px; color:#5d6d7e;">特性：高性能 | 多数据库支持 | 双模式（REST/CLI）| 内存占用 &lt;8MB</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Simple Secure Runner -->
  <div class="row" style="margin-bottom:20px;">
    <div class="col-md-12">
      <div class="funny-boxes" style="background:#eafaf1; border:1px solid #d5f5e3;">
        <div class="media">
          <div class="media-left" style="padding-right:20px;">
            <div style="width:56px; height:56px; border-radius:50%; background:#27ae60; text-align:center; line-height:56px; font-size:22px; color:#fff;">
              <i class="fa fa-lock"></i>
            </div>
          </div>
          <div class="media-body">
            <div style="overflow:hidden; margin-bottom:10px;">
              <h3 class="media-heading" style="float:left; font-size:18px; font-weight:600; color:#1e8449; margin:0;">Simple Secure Runner</h3>
              <a class="btn btn-u btn-u-sm" style="float:right; background:#27ae60;" href="https://github.com/serveryang/simple-secure-runner" target="_blank">
                <i class="fa fa-external-link"></i> 访问项目
              </a>
            </div>
            <p style="font-size:13px; line-height:1.7; color:#2c3e50; margin-bottom:12px;">简单安全运行器，支持对 Node.js、Python、Ruby、Bash 等脚本进行加密，运行时动态解密。基于 LD_PRELOAD 技术实现透明文件拦截，适合脚本安全分发和运行保护。</p>
            <div style="margin-bottom:10px;">
              <span class="label" style="background:#d5f5e3; color:#1e8449; font-size:11px; padding:3px 8px; margin-right:5px; display:inline-block;">C</span>
              <span class="label" style="background:#d5f5e3; color:#1e8449; font-size:11px; padding:3px 8px; margin-right:5px; display:inline-block;">LD_PRELOAD</span>
              <span class="label" style="background:#d5f5e3; color:#1e8449; font-size:11px; padding:3px 8px; margin-right:5px; display:inline-block;">RSA</span>
              <span class="label" style="background:#d5f5e3; color:#1e8449; font-size:11px; padding:3px 8px; display:inline-block;">AES</span>
            </div>
            <p style="margin:0;"><small style="font-size:12px; color:#5d6d7e;">特性：混合加密 | 透明解密 | 多语言支持 | 安全分发</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Simple Scheduler -->
  <div class="row" style="margin-bottom:20px;">
    <div class="col-md-12">
      <div class="funny-boxes" style="background:#f4ecf7; border:1px solid #e8daef;">
        <div class="media">
          <div class="media-left" style="padding-right:20px;">
            <div style="width:56px; height:56px; border-radius:50%; background:#8e44ad; text-align:center; line-height:56px; font-size:22px; color:#fff;">
              <i class="fa fa-tasks"></i>
            </div>
          </div>
          <div class="media-body">
            <div style="overflow:hidden; margin-bottom:10px;">
              <h3 class="media-heading" style="float:left; font-size:18px; font-weight:600; color:#6c3483; margin:0;">Simple Scheduler</h3>
              <a class="btn btn-u btn-u-sm" style="float:right; background:#8e44ad;" href="https://github.com/serveryang/simple-scheduler" target="_blank">
                <i class="fa fa-external-link"></i> 访问项目
              </a>
            </div>
            <p style="font-size:13px; line-height:1.7; color:#2c3e50; margin-bottom:12px;">基于 Rust 的轻量级任务调度器，支持文件热重载、cron 表达式、秒级调度、并行任务执行和 REST API 控制。内置安全限制，适合自动化运维和批量任务调度。</p>
            <div style="margin-bottom:10px;">
              <span class="label" style="background:#e8daef; color:#6c3483; font-size:11px; padding:3px 8px; margin-right:5px; display:inline-block;">Rust</span>
              <span class="label" style="background:#e8daef; color:#6c3483; font-size:11px; padding:3px 8px; margin-right:5px; display:inline-block;">Cron</span>
              <span class="label" style="background:#e8daef; color:#6c3483; font-size:11px; padding:3px 8px; margin-right:5px; display:inline-block;">REST API</span>
              <span class="label" style="background:#e8daef; color:#6c3483; font-size:11px; padding:3px 8px; display:inline-block;">并行执行</span>
            </div>
            <p style="margin:0;"><small style="font-size:12px; color:#5d6d7e;">特性：秒级调度 | 热重载 | 并行执行 | 安全限制 | 进程锁</small></p>
          </div>
        </div>
      </div>
    `,Hs={title:"Core System R&D and Delivery Portfolio",version:"v1.0.0",name:"Yang Zhenghe",avatar:"images/avatar.jpg",workTime:"Jul. 2010 (university graduation) ~ Present",companies:[{name:"Sunplus Technology (Chengdu) Co., Ltd.",url:"http://www.sunplus.com/"},{name:"Zongheng Yilvyou Technology (Chengdu) Co., Ltd.",url:""},{name:"Chengdu Zhiyuanhui Information Technology Co., Ltd.",url:""},{name:"Elextec Security Technology Co., Ltd.",url:"https://www.elextec.com"}],position:"Senior Engineer",phone:"18080801215",summary:"With a long-standing focus on hands-on development, my technical expertise spans Windows desktop, web front-end and back-end, and Linux system development. I primarily work on web back-end development, while also taking an active role in technology selection, system architecture design, and team mentoring.",contacts:[{icon:"fa-home",label:"Personal Homepage",url:"http://yzh.app/"},{icon:"fa-github",label:"GitHub",url:"https://github.com/serveryang"},{icon:"fa-stack-overflow",label:"Stack Overflow",url:"https://stackoverflow.com/users/3511853/serveryang"},{icon:"fa-envelope",label:"serveryang@qq.com",url:""},{icon:"fa-google",label:"serveryang@gmail.com",url:""}]},Ka=[{id:"project13",no:13,name:"Elextec ICS Vulnerability Scanner",url:"https://www.elextec.com/assessment/33.html",time:"2023.3 ~ Present",项目简介:`<p class="pti">
          The Elextec ICS Vulnerability Scanner is an integrated management system for vulnerability analysis and assessment of industrial control networks. Backed by an extensive vulnerability library, it evaluates risks not only in traditional
          IT assets used in industrial control systems, such as operating systems, switches, routers, weak passwords, FTP servers, and web servers, but also identifies and detects known vulnerabilities in
          ICS-specific devices and systems, including SCADA, DCS, and PLCs. It detects security flaws promptly and objectively assesses the risk level of ICS networks, providing complete vulnerability management covering discovery,
          assessment, presentation, and tracking.
        </p>`,项目使用技术:`<p>Engines: OpenVAS, Arachni</p>
        <p>Backend: Spring Cloud, Express.js, Flask, MySQL, Redis, etc.</p>
        <p>Frontend: Vue 2, Element UI</p>`,项目职责:`<ol>
          <li>Developed the report export module of the vulnerability scanner (Java and Node.js).</li>
          <li>Developed the authentication module of the vulnerability scanner (Java).</li>
          <li>Localized NASL scripts for the scanner (AI machine translation followed by manual correction).</li>
          <li>Standardized the NASL script upgrade workflow with a multithreaded Bash script solution.</li>
          <li>Integrated Arachni into the scanner and fixed several Arachni bugs (Ruby).</li>
          <li>Investigated custom check support in Arachni and validated automatic extraction of image captchas (custom checks on HTTP responses and automatic extraction of non-interactive image captchas).</li>
          <li>Built Docker images for several scanner modules, supporting x86 and ARM64 platforms and adapting to domestic operating systems such as openEuler and Kylin.</li>
          <li>Conducted overall performance analysis of the scanner and evaluated and implemented optimization plans.</li>
        </ol>`,项目中遇到的问题:`<ol>
          <li>
            There was no simple way to map NASL scripts to CVE/CNVD entries. Localizing roughly 100,000 NASL scripts with AI translation produced errors in specialized terminology, and the manual correction required made the workload substantial.
          </li>
          <li>
            Open-source NASL scripts were integrated into the legacy OpenVAS engine (only the scripts were updated, not the engine), so some built-in functions were missing and had to be identified manually.
            New scripts also had to remain compatible with legacy NASL. To reduce conflicts, Bash scripts were used to collect multidimensional metrics for old and new scripts.
            A multithreaded Bash approach was needed for efficiency, which increased scripting complexity.
          </li>
          <li>
            Arachni is an open-source framework and cannot compare with commercial tools such as Acunetix Vulnerability
            Scanner (AVS): it lacks core capabilities such as correlating web fingerprints with CVEs, and it misses some URLs that AVS can discover, as do other open-source frameworks such as Arachni and Zed Attack
            Proxy.
          </li>
        </ol>`,screenshots:[{src:"images/cv/projects/elex-icvss/任务管理/新建任务-配置核查-在线扫描-高级参数.png",alt:"New Task - Configuration Check - Online Scan - Advanced Parameters.png"},{src:"images/cv/projects/elex-icvss/任务管理/新建任务-漏洞扫描-高级参数2.png",alt:"New Task - Vulnerability Scan - Advanced Parameters 2.png"},{src:"images/cv/projects/elex-icvss/任务管理/新建任务-漏洞扫描-高级参数3.png",alt:"New Task - Vulnerability Scan - Advanced Parameters 3.png"},{src:"images/cv/projects/elex-icvss/任务管理/新建任务-漏洞扫描-高级参数1.png",alt:"New Task - Vulnerability Scan - Advanced Parameters 1.png"},{src:"images/cv/projects/elex-icvss/任务管理/新建任务-配置核查-在线扫描-基本参数2.png",alt:"New Task - Configuration Check - Online Scan - Basic Parameters 2.png"},{src:"images/cv/projects/elex-icvss/任务管理/新建任务-配置核查-在线扫描-基本参数1.png",alt:"New Task - Configuration Check - Online Scan - Basic Parameters 1.png"},{src:"images/cv/projects/elex-icvss/任务管理/新建任务-配置核查-离线扫描.png",alt:"New Task - Configuration Check - Offline Scan.png"},{src:"images/cv/projects/elex-icvss/任务管理/新建任务-WEB应用扫描-高级参数2.png",alt:"New Task - Web Application Scan - Advanced Parameters 2.png"},{src:"images/cv/projects/elex-icvss/任务管理/新建任务-WEB应用扫描-高级参数1.png",alt:"New Task - Web Application Scan - Advanced Parameters 1.png"},{src:"images/cv/projects/elex-icvss/任务管理/新建任务-WEB应用扫描-基本参数.png",alt:"New Task - Web Application Scan - Basic Parameters.png"},{src:"images/cv/projects/elex-icvss/任务管理/新建任务-弱口令1.png",alt:"New Task - Weak Passwords 1.png"},{src:"images/cv/projects/elex-icvss/任务管理/新建任务-弱口令2.png",alt:"New Task - Weak Passwords 2.png"},{src:"images/cv/projects/elex-icvss/任务管理/新建任务导航.png",alt:"New Task Navigation.png"},{src:"images/cv/projects/elex-icvss/任务管理/新建任务-漏洞扫描-基本参数1.png",alt:"New Task - Vulnerability Scan - Basic Parameters 1.png"},{src:"images/cv/projects/elex-icvss/任务管理/新建任务-漏洞扫描-基本参数2.png",alt:"New Task - Vulnerability Scan - Basic Parameters 2.png"},{src:"images/cv/projects/elex-icvss/任务管理/任务列表.png",alt:"Task List.png"},{src:"images/cv/projects/elex-icvss/报告管理/WEB扫描任务报告-站点报告2.png",alt:"Web Scan Task Report - Site Report 2.png"},{src:"images/cv/projects/elex-icvss/报告管理/配置核查在线任务报告-统计信息1.png",alt:"Configuration Check Online Task Report - Statistics 1.png"},{src:"images/cv/projects/elex-icvss/报告管理/WEB扫描任务报告-站点报告1.png",alt:"Web Scan Task Report - Site Report 1.png"},{src:"images/cv/projects/elex-icvss/报告管理/配置核查在线任务报告-统计信息2.png",alt:"Configuration Check Online Task Report - Statistics 2.png"},{src:"images/cv/projects/elex-icvss/报告管理/配置核查在线任务报告-任务信息.png",alt:"Configuration Check Online Task Report - Task Information.png"},{src:"images/cv/projects/elex-icvss/报告管理/漏洞扫描任务报告-脆弱账号.png",alt:"Vulnerability Scan Task Report - Vulnerable Accounts.png"},{src:"images/cv/projects/elex-icvss/报告管理/弱口令扫描任务报告-漏洞信息1.png",alt:"Weak Password Scan Task Report - Vulnerability Information 1.png"},{src:"images/cv/projects/elex-icvss/报告管理/WEB扫描任务报告-任务信息.png",alt:"Web Scan Task Report - Task Information.png"},{src:"images/cv/projects/elex-icvss/报告管理/弱口令扫描任务报告-脆弱账号.png",alt:"Weak Password Scan Task Report - Vulnerable Accounts.png"},{src:"images/cv/projects/elex-icvss/报告管理/弱口令扫描任务报告-漏洞信息2.png",alt:"Weak Password Scan Task Report - Vulnerability Information 2.png"},{src:"images/cv/projects/elex-icvss/报告管理/漏洞扫描任务报告-漏洞信息1.png",alt:"Vulnerability Scan Task Report - Vulnerability Information 1.png"},{src:"images/cv/projects/elex-icvss/报告管理/漏洞扫描任务报告-主机报告预览1.png",alt:"Vulnerability Scan Task Report - Host Report Preview 1.png"},{src:"images/cv/projects/elex-icvss/报告管理/WEB扫描任务报告-漏洞信息.png",alt:"Web Scan Task Report - Vulnerability Information.png"},{src:"images/cv/projects/elex-icvss/报告管理/漏洞扫描任务报告-主机报告预览2.png",alt:"Vulnerability Scan Task Report - Host Report Preview 2.png"},{src:"images/cv/projects/elex-icvss/报告管理/漏洞扫描任务报告-漏洞信息2.png",alt:"Vulnerability Scan Task Report - Vulnerability Information 2.png"},{src:"images/cv/projects/elex-icvss/报告管理/报告列表.png",alt:"Report List.png"},{src:"images/cv/projects/elex-icvss/报告管理/弱口令扫描任务报告-任务信息.png",alt:"Weak Password Scan Task Report - Task Information.png"},{src:"images/cv/projects/elex-icvss/报告管理/漏洞扫描任务报告-任务信息.png",alt:"Vulnerability Scan Task Report - Task Information.png"},{src:"images/cv/projects/elex-icvss/报告管理/配置核查在线任务报告-配置信息.png",alt:"Configuration Check Online Task Report - Configuration Information.png"},{src:"images/cv/projects/elex-icvss/报告管理/漏洞扫描任务报告-参考标准1.png",alt:"Vulnerability Scan Task Report - Reference Standards 1.png"},{src:"images/cv/projects/elex-icvss/报告管理/弱口令扫描任务报告-主机列表.png",alt:"Weak Password Scan Task Report - Host List.png"},{src:"images/cv/projects/elex-icvss/报告管理/漏洞扫描任务报告-主机列表.png",alt:"Vulnerability Scan Task Report - Host List.png"},{src:"images/cv/projects/elex-icvss/报告管理/弱口令扫描任务报告-主机报告预览2.png",alt:"Weak Password Scan Task Report - Host Report Preview 2.png"},{src:"images/cv/projects/elex-icvss/报告管理/漏洞扫描任务报告-参考标准2.png",alt:"Vulnerability Scan Task Report - Reference Standards 2.png"},{src:"images/cv/projects/elex-icvss/报告管理/弱口令扫描任务报告-主机报告预览1.png",alt:"Weak Password Scan Task Report - Host Report Preview 1.png"},{src:"images/cv/projects/elex-icvss/报告管理/漏洞扫描任务报告-端口服务列表.png",alt:"Vulnerability Scan Task Report - Port and Service List.png"},{src:"images/cv/projects/elex-icvss/报告管理/WEB扫描任务报告-统计信息1.png",alt:"Web Scan Task Report - Statistics 1.png"},{src:"images/cv/projects/elex-icvss/报告管理/弱口令扫描任务报告-统计信息1.png",alt:"Weak Password Scan Task Report - Statistics 1.png"},{src:"images/cv/projects/elex-icvss/报告管理/WEB扫描任务报告-统计信息2.png",alt:"Web Scan Task Report - Statistics 2.png"},{src:"images/cv/projects/elex-icvss/报告管理/弱口令扫描任务报告-统计信息2.png",alt:"Weak Password Scan Task Report - Statistics 2.png"},{src:"images/cv/projects/elex-icvss/报告管理/漏洞扫描任务报告-应用程序.png",alt:"Vulnerability Scan Task Report - Applications.png"},{src:"images/cv/projects/elex-icvss/报告管理/生成报告弹窗.png",alt:"Generate Report Dialog.png"},{src:"images/cv/projects/elex-icvss/报告管理/WEB扫描任务报告-站点列表.png",alt:"Web Scan Task Report - Site List.png"},{src:"images/cv/projects/elex-icvss/报告管理/弱口令扫描任务报告-应用程序.png",alt:"Weak Password Scan Task Report - Applications.png"},{src:"images/cv/projects/elex-icvss/报告管理/弱口令扫描任务报告-端口服务列表.png",alt:"Weak Password Scan Task Report - Port and Service List.png"},{src:"images/cv/projects/elex-icvss/报告管理/漏洞扫描任务报告-统计信息1.png",alt:"Vulnerability Scan Task Report - Statistics 1.png"},{src:"images/cv/projects/elex-icvss/报告管理/配置核查在线任务报告-主机列表.png",alt:"Configuration Check Online Task Report - Host List.png"},{src:"images/cv/projects/elex-icvss/报告管理/弱口令扫描任务报告-参考标准.png",alt:"Weak Password Scan Task Report - Reference Standards.png"},{src:"images/cv/projects/elex-icvss/报告管理/漏洞扫描任务报告-统计信息2.png",alt:"Vulnerability Scan Task Report - Statistics 2.png"},{src:"images/cv/projects/elex-icvss/模糊测试/首页.png",alt:"Home.png"},{src:"images/cv/projects/elex-icvss/知识库/漏洞详情.png",alt:"Vulnerability Details.png"},{src:"images/cv/projects/elex-icvss/知识库/漏洞库列表.png",alt:"Vulnerability Library List.png"},{src:"images/cv/projects/elex-icvss/知识库/工控设备信息库.png",alt:"ICS Device Information Library.png"},{src:"images/cv/projects/elex-icvss/策略管理/字典管理.png",alt:"Dictionary Management.png"},{src:"images/cv/projects/elex-icvss/策略管理/漏洞策略详情1.png",alt:"Vulnerability Policy Details 1.png"},{src:"images/cv/projects/elex-icvss/策略管理/端口策略详情.png",alt:"Port Policy Details.png"},{src:"images/cv/projects/elex-icvss/策略管理/配置模板.png",alt:"Configuration Template.png"},{src:"images/cv/projects/elex-icvss/策略管理/端口策略列表.png",alt:"Port Policy List.png"},{src:"images/cv/projects/elex-icvss/策略管理/漏洞策略列表.png",alt:"Vulnerability Policy List.png"},{src:"images/cv/projects/elex-icvss/策略管理/认证管理.png",alt:"Authentication Management.png"},{src:"images/cv/projects/elex-icvss/系统首页.png",alt:"System Home.png"},{src:"images/cv/projects/elex-icvss/资产管理/资产管理-资产部门新增.png",alt:"Asset Management - Add Asset Department.png"},{src:"images/cv/projects/elex-icvss/资产管理/资产统计.png",alt:"Asset Statistics.png"},{src:"images/cv/projects/elex-icvss/资产管理/资产管理-资产部门列表.png",alt:"Asset Management - Asset Department List.png"},{src:"images/cv/projects/elex-icvss/资产管理/资产管理-风险评估部门列表.png",alt:"Asset Management - Risk Assessment Department List.png"},{src:"images/cv/projects/elex-icvss/资产管理/资产列表.png",alt:"Asset List.png"},{src:"images/cv/projects/elex-icvss/资产管理/资产风险趋势.png",alt:"Asset Risk Trends.png"},{src:"images/cv/projects/elex-icvss/资产管理/资产统计2.png",alt:"Asset Statistics 2.png"}]},{id:"project12",no:12,name:"Elextec Industrial Security Management Platform",url:"https://www.elextec.com/operation-7/31.html",time:"2023.1 ~ 2023.3",项目简介:`<p class="pti">
          The Elextec Industrial Security Management Platform is a security management product that provides unified monitoring, log collection, security analysis, and policy distribution for ICS security products, including industrial firewalls, ICS security audit systems, ICS host guards, and ICS vulnerability scanners, as well as third-party devices. It supports decision-making for ICS network security operations, accelerates incident response, strengthens security operations, and raises the overall information security level of industrial control networks.
        </p>`,项目使用技术:`<p>Backend: Spring Cloud, Apache Camel, Express.js, Flask, Kafka, ElasticSearch, MySQL, etc.</p>
        <p>Frontend: Vue 2, Element UI</p>`,项目职责:`<ol>
          <li>Integrated the audit system management center into the platform so that alarm logs, traffic logs, system logs, and others can be delivered to it.</li>
          <li>Integrated audit probes with platform management, including distribution of audit rules and probe information viewing.</li>
          <li>Verified that regular expressions correctly extracted fields from logs delivered by the audit system.</li>
          <li>Classified and tagged audit logs so the platform could categorize incoming log data.</li>
          <li>Evaluated the pros and cons of NXLog Community Edition and options for integrating it into the platform.</li>
          <li>Performed performance optimization and solution evaluation for the platform.</li>
        </ol>`,项目中遇到的问题:`<ol>
          <li>Some probes deliver logs over SNMP; the platform used Apache Camel to receive them, which was tightly coupled to business logic and fairly fragile.</li>
          <li>The platform used regular expressions to extract fields from incoming logs. With many log types, the regex configuration became complex and difficult to maintain.</li>
          <li>
            NXLog does not support resume-from-checkpoint transfer; if a log-collecting device loses power, the entire log set is resent. This is easy to handle for auto-incrementing integer IDs but difficult for ObjectId-type data.
          </li>
        </ol>`,screenshots:[{src:"images/cv/projects/elex-soc/处置中心/联动策略-列表.png",alt:"Linkage Policy - List.png"},{src:"images/cv/projects/elex-soc/处置中心/联动策略-新增.png",alt:"Linkage Policy - New.png"},{src:"images/cv/projects/elex-soc/处置中心/联动策略-编辑.png",alt:"Linkage Policy - Edit.png"},{src:"images/cv/projects/elex-soc/安全分析/原始日志.png",alt:"Raw Logs.png"},{src:"images/cv/projects/elex-soc/安全分析/安全事件.png",alt:"Security Events.png"},{src:"images/cv/projects/elex-soc/安全分析/安全告警.png",alt:"Security Alerts.png"},{src:"images/cv/projects/elex-soc/安全分析/资产分析.png",alt:"Asset Analysis.png"},{src:"images/cv/projects/elex-soc/安全模型/关联模型-列表.png",alt:"Correlation Model - List.png"},{src:"images/cv/projects/elex-soc/安全模型/关联模型-新增.png",alt:"Correlation Model - New.png"},{src:"images/cv/projects/elex-soc/安全模型/关联模型-编辑.png",alt:"Correlation Model - Edit.png"},{src:"images/cv/projects/elex-soc/安全模型/规则模型-列表.png",alt:"Rule Model - List.png"},{src:"images/cv/projects/elex-soc/安全模型/规则模型-新增.png",alt:"Rule Model - New.png"},{src:"images/cv/projects/elex-soc/安全设备/1.png",alt:"1.png"},{src:"images/cv/projects/elex-soc/知识库/入侵规则库列表.png",alt:"Intrusion Rule Library List.png"},{src:"images/cv/projects/elex-soc/知识库/安全事件库列表.png",alt:"Security Event Library List.png"},{src:"images/cv/projects/elex-soc/资产管理/资产分组.png",alt:"Asset Groups.png"},{src:"images/cv/projects/elex-soc/资产管理/资产拓扑-列表.png",alt:"Asset Topology - List.png"},{src:"images/cv/projects/elex-soc/资产管理/资产拓扑-编辑.png",alt:"Asset Topology - Edit.png"},{src:"images/cv/projects/elex-soc/采集管理/采集列表-新增.png",alt:"Collection List - New.png"},{src:"images/cv/projects/elex-soc/采集管理/采集列表.png",alt:"Collection List.png"},{src:"images/cv/projects/elex-soc/采集管理/采集策略-列表.png",alt:"Collection Policy - List.png"},{src:"images/cv/projects/elex-soc/采集管理/采集策略-新增.png",alt:"Collection Policy - New.png"},{src:"images/cv/projects/elex-soc/采集管理/采集策略-编辑.png",alt:"Collection Policy - Edit.png"}]},{id:"project11",no:11,name:"CNC Network Security Test and Verification System",url:"",time:"2022.6 ~ 2022.12",项目简介:`<p class="pti">
          This project was commissioned by the <a href="https://cics-cert.org.cn/web_root/webpage/researchOrgn_110012.html" target="_blank">CIC (China Industrial Information Security Development Research Center) Inspection and Evaluation Institute</a> as a CNC network security test and verification system. It integrates a security testing subsystem, a network testing subsystem, a code security analysis subsystem, and an integrated business management subsystem.
        </p>`,项目使用技术:`<p>Virtualization:</p>
        <ol>
          <li>Proxmox Virtual Environment (PVE).</li>
          <li>Deployed each subsystem as a PVE virtual machine and integrated them internally.</li>
        </ol>
        <p>Backend technologies:</p>
        <ol>
          <li>A Spring Cloud-based middle-platform architecture.</li>
          <li>Node.js Express, Python Flask, MySQL, MyCat, Kafka, Redis, ElasticSearch, and other mainstream technologies.</li>
        </ol>`,项目职责:`<ol>
          <li>Researched PVE and OpenStack virtualization solutions; selected PVE as the virtualization base after evaluation.</li>
          <li>Configured virtual hardware for the security testing subsystem, such as serial ports and network settings.</li>
          <li>Integrated the comprehensive situation module into the integrated business management subsystem.</li>
          <li>Developed the resource management module: VM management, image management, and VM login.</li>
          <li>Integrated an external third-party firmware extraction system.</li>
          <li>Integrated an external third-party source code analysis subsystem.</li>
        </ol>`,项目中遇到的问题:`<ol>
          <li>
            Choosing between PVE and OpenStack was difficult: OpenStack is feature-complete
            but requires significantly more manpower. PVE was chosen in the end, and I single-handedly delivered the required network configuration and virtualization interface integration.
          </li>
          <li>Integrating third-party systems from other companies involved high communication costs and poor system stability.</li>
        </ol>`,screenshots:[{src:"images/cv/projects/elex-cic/固件提取.png",alt:"Firmware Extraction.png"},{src:"images/cv/projects/elex-cic/系统首页.png",alt:"System Home.png"},{src:"images/cv/projects/elex-cic/综合业务管理子系统/综合态势/1-网络态势可视化.png",alt:"1 - Network Situation Visualization.png"},{src:"images/cv/projects/elex-cic/综合业务管理子系统/综合态势/2-网络态势可视化-攻击过程可视化.png",alt:"2 - Network Situation Visualization - Attack Process Visualization.png"},{src:"images/cv/projects/elex-cic/综合业务管理子系统/综合态势/4-资产可视化.png",alt:"4 - Asset Visualization.png"},{src:"images/cv/projects/elex-cic/综合业务管理子系统/综合态势/5-威胁预警可视化.png",alt:"5 - Threat Warning Visualization.png"},{src:"images/cv/projects/elex-cic/综合业务管理子系统/综合态势/3-渗透路径可视化.png",alt:"3 - Penetration Path Visualization.png"},{src:"images/cv/projects/elex-cic/综合业务管理子系统/运维日志分析-手动采集.png",alt:"O&M Log Analysis - Manual Collection.png"},{src:"images/cv/projects/elex-cic/综合业务管理子系统/渗透工具管理.png",alt:"Penetration Tool Management.png"},{src:"images/cv/projects/elex-cic/综合业务管理子系统/运维日志分析-日志分析.png",alt:"O&M Log Analysis - Log Analysis.png"},{src:"images/cv/projects/elex-cic/综合业务管理子系统/资源管理/4-虚拟机登录.png",alt:"4 - VM Login.png"},{src:"images/cv/projects/elex-cic/综合业务管理子系统/资源管理/1-虚拟机管理.png",alt:"1 - VM Management.png"},{src:"images/cv/projects/elex-cic/综合业务管理子系统/资源管理/2-虚拟机编辑.png",alt:"2 - VM Edit.png"},{src:"images/cv/projects/elex-cic/综合业务管理子系统/资源管理/3-镜像管理.png",alt:"3 - Image Management.png"},{src:"images/cv/projects/elex-cic/网络测试子系统.png",alt:"Network Testing Subsystem.png"},{src:"images/cv/projects/elex-cic/PVE网卡分布.png",alt:"PVE NIC Distribution.png"}]},{id:"project10",no:10,name:"Elextec ICS Security Audit System",url:"https://www.elextec.com/operation-7/31.html",time:"2019.10 ~ 2022.12",项目简介:`<p class="pti">
          Deployed out of band, the system uses deep inspection of communication packets to detect, in real time, network attacks against critical ICS assets such as PLCs, DCS, and host computers, as well as user errors, unauthorized operations, rogue device connections, and the spread of worms, viruses, and other malware, and raises real-time alarms.
          It also records all network communications in detail, including instruction-level industrial protocol traffic, providing a solid foundation for incident investigation in industrial control systems.
        </p>`,项目使用技术:`<p>Engines: Suricata, ClamAV.</p>
        <p>Backend: Spring Cloud middle-platform architecture, Express.js, Flask, MySQL, Redis, Docker, ElasticSearch, Kafka, etc.</p>
        <p>Frontend: Vue 2, Element UI.</p>
        <p>Architecture: x86, ARM64.</p>`,项目职责:`<ol>
          <li>Developed frontend pages and backend APIs for distributing rules for the following protocols: modbus, enip, s7common, s7common_plus, dnp3, opcua, opcda, iec101, iec104, iecmms, sv, goose, fins,
            profinet, ftp, http, smtp, telnet, mqtt, adwinconfig, coap, enttec, esio, hartip, rstp,
            isapi, onvif, gb28181, State Grid B, cip, pop3, smb, snmp, ssh, tcp, udp, xmpp.
          </li>
          <li>Developed frontend and backend APIs for traffic audit rules, malicious event audit, flood audit, and file audit rule modules.</li>
          <li>Developed frontend and backend APIs for whitelist rule modules covering network communications, ICS protocols, IP-MAC addresses, IP addresses, and IP alert suppression.</li>
          <li>Developed frontend and backend APIs for protocol identification extension, the security event library, and machine learning rules.</li>
          <li>Developed frontend and backend APIs for statistical reports, asset communications, asset traffic, host alerts, time periods, and protocol audit alarms.</li>
          <li>Developed frontend and backend APIs for alarm logs, traffic logs, file logs, and packet analysis.</li>
          <li>Developed frontend and backend APIs for integrated monitoring, traffic monitoring, asset sessions, and sample monitoring.</li>
          <li>Developed frontend and backend APIs for the vulnerability knowledge base, MAC address library, device fingerprint library, system logs, and system management.</li>
          <li>Developed backend APIs for the asset list, asset topology, and topology display.</li>
          <li>Integrated ClamAV into the project for malware detection and alarm log generation.</li>
          <li>Curated a set of Suricata rules and added Suricata rule scripts to meet alarm requirements.</li>
          <li>Built the DevOps environment, including Gerrit, Jenkins, SonarQube, and associated build pipelines.</li>
          <li>Adapted the project to x86 and domestic ARM-based platforms and operating systems (CentOS, openEuler, KylinOS, etc.).</li>
        </ol>`,项目中遇到的问题:`<ol>
          <li>The project used a Spring Cloud middle-platform approach. Because Java consumed too much memory, the registry-based architecture was downgraded to a non-registry setup, keeping only essential Java business containers.
            Even those consumed considerable resources; JVM tuning and an attempt to switch the framework to single-threaded mode were made. The single-threaded downgrade did not succeed.
          </li>
          <li>ElasticSearch, also written in Java, used many resources. JVM tuning helped but not enough, so Meilisearch and Typesense were evaluated as replacements.
            The project relies on complex ElasticSearch aggregations that those alternatives do not support, so replacement was not feasible.
          </li>
          <li>Traffic matching based on Suricata rules produced false positives. These cannot be eliminated entirely, so the practical solution was to disable the offending rule rather than rewrite it.</li>
          <li>Packet captures for traffic traceback had to be viewed in the browser, so a tshark-based solution was implemented. It cannot reproduce the web UI of <a href="https://www.cloudshark.org/" target="_blank" class="color-blue">Cloudshark</a>, however. Because Cloudshark is not open source, its implementation is unknown. The tshark approach also has bugs when parsing some malformed pcap files, while
            Cloudshark handles the same malformed packets correctly. Investigating the Wireshark project showed that its Qt-based widgets cannot be ported directly to a web UI.</li>
          <li>Correlation alarms are not implemented with the Apriori algorithm; a simple manually configured correlation ID scheme is used instead. Traffic “machine learning” is likewise rule-based pattern matching rather than true ML.</li>
        </ol>`,screenshots:[{src:"images/cv/projects/elex-ids/监控分析/监控分析-综合监控.png",alt:"Monitoring Analysis - Integrated Monitoring.png"},{src:"images/cv/projects/elex-ids/监控分析/监控分析-资产会话.png",alt:"Monitoring Analysis - Asset Sessions.png"},{src:"images/cv/projects/elex-ids/监控分析/监控分析-样本监控.png",alt:"Monitoring Analysis - Sample Monitoring.png"},{src:"images/cv/projects/elex-ids/监控分析/监控分析-流量监控.png",alt:"Monitoring Analysis - Traffic Monitoring.png"},{src:"images/cv/projects/elex-ids/配置管理/审计规则-文件审计-编辑.png",alt:"Audit Rules - File Audit - Edit.png"},{src:"images/cv/projects/elex-ids/配置管理/白名单规则-IP抑制告警白名单.png",alt:"Whitelist Rules - IP Alert Suppression Whitelist.png"},{src:"images/cv/projects/elex-ids/配置管理/审计规则-协议审计.png",alt:"Audit Rules - Protocol Audit.png"},{src:"images/cv/projects/elex-ids/配置管理/白名单规则-网络通信白名单.png",alt:"Whitelist Rules - Network Communication Whitelist.png"},{src:"images/cv/projects/elex-ids/配置管理/白名单规则-工控协议白名单-存包设置.png",alt:"Whitelist Rules - ICS Protocol Whitelist - Packet Storage Settings.png"},{src:"images/cv/projects/elex-ids/配置管理/审计规则-泛洪审计-编辑.png",alt:"Audit Rules - Flood Audit - Edit.png"},{src:"images/cv/projects/elex-ids/配置管理/白名单规则-IP白名单.png",alt:"Whitelist Rules - IP Whitelist.png"},{src:"images/cv/projects/elex-ids/配置管理/白名单规则-IP抑制告警白名单-新增.png",alt:"Whitelist Rules - IP Alert Suppression Whitelist - New.png"},{src:"images/cv/projects/elex-ids/配置管理/白名单规则-网络通信白名单-新增.png",alt:"Whitelist Rules - Network Communication Whitelist - New.png"},{src:"images/cv/projects/elex-ids/配置管理/白名单规则-工控协议白名单.png",alt:"Whitelist Rules - ICS Protocol Whitelist.png"},{src:"images/cv/projects/elex-ids/配置管理/审计规则-恶意事件审计.png",alt:"Audit Rules - Malicious Event Audit.png"},{src:"images/cv/projects/elex-ids/配置管理/审计规则-文件审计.png",alt:"Audit Rules - File Audit.png"},{src:"images/cv/projects/elex-ids/配置管理/协议识别扩展.png",alt:"Protocol Identification Extension.png"},{src:"images/cv/projects/elex-ids/配置管理/审计规则-恶意事件审计-编辑.png",alt:"Audit Rules - Malicious Event Audit - Edit.png"},{src:"images/cv/projects/elex-ids/配置管理/审计规则-协议审计编辑.png",alt:"Audit Rules - Protocol Audit Edit.png"},{src:"images/cv/projects/elex-ids/配置管理/白名单规则-工控协议白名单-新增.png",alt:"Whitelist Rules - ICS Protocol Whitelist - New.png"},{src:"images/cv/projects/elex-ids/配置管理/安全事件库-内置黑名单规则.png",alt:"Security Event Library - Built-in Blacklist Rules.png"},{src:"images/cv/projects/elex-ids/配置管理/安全事件库-内置安全审计规则.png",alt:"Security Event Library - Built-in Security Audit Rules.png"},{src:"images/cv/projects/elex-ids/配置管理/协议识别扩展-新增.png",alt:"Protocol Identification Extension - New.png"},{src:"images/cv/projects/elex-ids/配置管理/白名单规则-IP-MAC白名单-新增.png",alt:"Whitelist Rules - IP - MAC Whitelist - New.png"},{src:"images/cv/projects/elex-ids/配置管理/审计规则-泛洪审计.png",alt:"Audit Rules - Flood Audit.png"},{src:"images/cv/projects/elex-ids/配置管理/白名单规则-IP-MAC白名单.png",alt:"Whitelist Rules - IP - MAC Whitelist.png"},{src:"images/cv/projects/elex-ids/配置管理/白名单规则-IP白名单-新增.png",alt:"Whitelist Rules - IP Whitelist - New.png"},{src:"images/cv/projects/elex-ids/配置管理/审计规则-流量审计.png",alt:"Audit Rules - Traffic Audit.png"},{src:"images/cv/projects/elex-ids/配置管理/机器学习规则.png",alt:"Machine Learning Rules.png"},{src:"images/cv/projects/elex-ids/日志分析/流量日志.png",alt:"Traffic Logs.png"},{src:"images/cv/projects/elex-ids/日志分析/告警日志-攻击溯源.png",alt:"Alert Logs - Attack Traceback.png"},{src:"images/cv/projects/elex-ids/日志分析/告警日志.png",alt:"Alert Logs.png"},{src:"images/cv/projects/elex-ids/日志分析/报文分析.png",alt:"Packet Analysis.png"},{src:"images/cv/projects/elex-ids/日志分析/文件日志.png",alt:"File Logs.png"},{src:"images/cv/projects/elex-ids/统计报告/主机告警.png",alt:"Host Alerts.png"},{src:"images/cv/projects/elex-ids/统计报告/协议审计告警-告警总览.png",alt:"Protocol Audit Alerts - Alert Overview.png"},{src:"images/cv/projects/elex-ids/统计报告/资产流量-MAC流量.png",alt:"Asset Traffic - MAC Traffic.png"},{src:"images/cv/projects/elex-ids/统计报告/告警提示.png",alt:"Alert Notifications.png"},{src:"images/cv/projects/elex-ids/统计报告/资产通信.png",alt:"Asset Communications.png"},{src:"images/cv/projects/elex-ids/统计报告/协议审计告警-协议告警.png",alt:"Protocol Audit Alerts - Protocol Alerts.png"},{src:"images/cv/projects/elex-ids/统计报告/资产流量-IP端口.png",alt:"Asset Traffic - IP/Port.png"},{src:"images/cv/projects/elex-ids/统计报告/资产流量-协议流量.png",alt:"Asset Traffic - Protocol Traffic.png"},{src:"images/cv/projects/elex-ids/统计报告/资产流量-IP流量.png",alt:"Asset Traffic - IP Traffic.png"},{src:"images/cv/projects/elex-ids/统计报告/时间周期.png",alt:"Time Periods.png"},{src:"images/cv/projects/elex-ids/统计报告/统计报告.png",alt:"Statistics Reports.png"},{src:"images/cv/projects/elex-ids/系统管理/日志保存.png",alt:"Log Retention.png"},{src:"images/cv/projects/elex-ids/系统管理/离线网络包审计.png",alt:"Offline Packet Audit.png"},{src:"images/cv/projects/elex-ids/系统管理/系统信息.png",alt:"System Information.png"},{src:"images/cv/projects/elex-ids/系统管理/威胁情报库升级.png",alt:"Threat Intelligence Update.png"},{src:"images/cv/projects/elex-ids/系统管理/告警风暴阈值.png",alt:"Alert Storm Threshold.png"},{src:"images/cv/projects/elex-ids/知识库/MAC地址库.png",alt:"MAC Address Library.png"},{src:"images/cv/projects/elex-ids/知识库/设备指纹库.png",alt:"Device Fingerprint Library.png"},{src:"images/cv/projects/elex-ids/知识库/漏洞知识库.png",alt:"Vulnerability Knowledge Base.png"},{src:"images/cv/projects/elex-ids/资产管理/拓扑展示.png",alt:"Topology Display.png"},{src:"images/cv/projects/elex-ids/资产管理/资产编辑.png",alt:"Asset Edit.png"},{src:"images/cv/projects/elex-ids/资产管理/资产拓扑.png",alt:"Asset Topology.png"},{src:"images/cv/projects/elex-ids/资产管理/资产列表.png",alt:"Asset List.png"},{src:"images/cv/projects/elex-ids/首页.png",alt:"Home.png"}]},{id:"project9",no:9,name:"Elextec Industrial Network Honeypot System",url:"https://www.elextec.com/safety-protection/281.html",time:"2019.3 ~ 2019.10",项目简介:`<p class="pti">
          Built on disguise techniques, the industrial network honeypot uses industrial protocol and service simulation and threat luring to entice attackers into launching attacks, thereby capturing attack behavior, analyzing intent, issuing security warnings, and reducing the risk to real systems.
        </p>`,项目使用技术:`<p>Engines: T-Pot, Suricata</p>
        <p>Backend: Node.js Express, MySQL, Redis, ElasticSearch, Filebeat, Logstash, Docker, ZeroMQ.</p>
        <p>Frontend: Vue 2, Element UI.</p>`,项目职责:`<p>Developed rule management APIs for honeypots implementing Modbus, IEC 103, IEC 104, and other protocols.</p>
        <p>Handled honeypot log processing: collected logs from each honeypot with Filebeat, transformed them through Logstash, and stored the results in ElasticSearch.</p>
        <p>Developed several management pages, including honeypot rule management, honeypot report generation, and system configuration.</p>`,项目中遇到的问题:`<ol>
          <li>These are low-interaction honeypots and cannot reproduce realistic scenarios.</li>
          <li>The honeypots are exposed on the public internet; attackers can identify them by looking up the IP owner and therefore never launch real attacks.</li>
          <li>The honeypot servers are deployed on the company network and exposed through IP mapping. If a PoE-style dial-up connection changes the IP address, some Docker honeypot services stop working.</li>
        </ol>`,screenshots:[{src:"images/cv/projects/elex-honypot/1.png",alt:"1.png"},{src:"images/cv/projects/elex-honypot/2.png",alt:"2.png"},{src:"images/cv/projects/elex-honypot/3.png",alt:"3.png"},{src:"images/cv/projects/elex-honypot/4.png",alt:"4.png"},{src:"images/cv/projects/elex-honypot/5.png",alt:"5.png"},{src:"images/cv/projects/elex-honypot/6.png",alt:"6.png"},{src:"images/cv/projects/elex-honypot/7.png",alt:"7.png"}]},{id:"project8",no:8,name:"Shangyixing",url:"https://sj.qq.com/appdetail/org.zzmetro.eticket",time:"2018.12 ~ 2019.3",项目简介:`<p class="pti">
          The Zhengzhou Metro ride-code project provides Zhengzhou residents with QR-code and face-based boarding to improve the city's metro passenger services.
          Shangyixing offers native Android and iOS apps, as well as a WeChat Mini Program (Zhengzhou Metro Shangyixing Ride Code) and an Alipay Mini Program (Zhengzhou Metro Shangyixing Card).
        </p>`,项目使用技术:`<p>Native apps:</p>
        <ol>
          <li>Native Android app developed with Kotlin.</li>
          <li>Native iOS app developed with Objective-C.</li>
          <li>Mini programs developed with H5.</li>
        </ol>
        <p>Backend:</p>
        <ol>
          <li>Node.js Express, MySQL, MyCat for sharding, Kafka messaging, and Redis caching.</li>
          <li>SPI integrations: WeChat ride code, Alipay ride code, and China Construction Bank face-based payment.</li>
          <li>Others: Alibaba Cloud SLB and an SM2 hardware crypto device.</li>
        </ol>
        <p>Production environment:</p>
        <ol>
          <li>Mainframe servers in a self-built metro intranet data center.</li>
          <li>Operating system: CentOS.</li>
        </ol>`,项目职责:"<p>Integrated the WeChat ride-code SPI, handled backend production releases, and responded to issues reported through the 400 hotline.</p>",项目中遇到的问题:`<ol>
          <li>Limited familiarity with fare-collection business left some exceptional cases insufficiently handled.</li>
          <li>The WeChat ride-code SPI documentation was incomplete, causing validation parameter failures. WeChat developers came on site to resolve the issues together.</li>
          <li>
            Before launch, the mainframe was found not to support MySQL (it shipped with PostgreSQL), so the project was migrated to PostgreSQL. Because the risk was too high, the company purchased a MySQL-compatible mainframe and the project was migrated back to MySQL.
          </li>
          <li>The ride-code entry and exit flow is complex in its exceptional cases and is the core business; several bugs resulted from poor design of this part.</li>
          <li>Two weeks after go-live, a single table had grown too large because data-volume planning and sharding were not designed up front. MyCat was introduced later to address it.</li>
          <li>The backend was written in Node.js without TypeScript, which led to avoidable mistakes and runtime errors.</li>
          <li>Backend application logs were not shipped to the log analysis system, making troubleshooting inefficient.</li>
          <li>The native apps lacked packing protection and were easy to crack. Third-party encryption was introduced later to raise the difficulty.</li>
          <li>The schedule from kickoff to launch was too short, resulting in insufficient staffing, visible crunch, team turbulence, and little accumulated technical depth.</li>
        </ol>`,screenshots:[{src:"images/cv/projects/zone-zzmetro/1.png",alt:"1.png"},{src:"images/cv/projects/zone-zzmetro/2.png",alt:"2.png"},{src:"images/cv/projects/zone-zzmetro/3.png",alt:"3.png"},{src:"images/cv/projects/zone-zzmetro/4.png",alt:"4.png"}]},{id:"project7",no:7,name:"Smart Scenic Area Service Platform",url:"",time:"2016.9 ~ 2018.12",项目简介:`<p class="pti">
              To meet the marketing department's business needs, we built a scenic area service platform addressing the demand for a “Smart Scenic Area.” Features include, but are not limited to, precise location and navigation, a real-time scenic highlights feed, parking, and e-tickets.
            </p>`,项目使用技术:`<p>Primary backend languages, frameworks, and environment:</p>
            <ol>
              <li>Node.js, TypeScript</li>
              <li>Express.js</li>
              <li>View Engine: Nunjucks</li>
              <li>Test Framework: mocha</li>
              <li>MongoDB, Redis</li>
              <li>UI: INSPINIA Admin Theme based on Bootstrap</li>
              <li>MVVM: Angular2, Roit.js</li>
              <li>Code Style: TSLint</li>
              <li>Alibaba Cloud Open Storage Service</li>
              <li>Monitoring: Tingyun, New Relic</li>
              <li>Build tool: gulp</li>
              <li>Package managers: npm, bower</li>
              <li>IDE: Visual Studio 2017 on Windows and Visual Studio Code on Ubuntu Desktop or macOS</li>
            </ol>

            <p>Production environment:</p>
            <ol>
              <li>Physical IDC servers, CPU: Xeon E5.</li>
              <li>Web server: nginx upstream to a cluster.</li>
              <li>Production process manager: pm2.</li>
              <li>Multiple apps running under Node.js Cluster.</li>
            </ol>`,项目职责:`<ol>
              <li>Evaluated and selected development technologies and introduced them into the project.</li>
              <li>Built the Express-based backend system and used TypeScript consistently for both frontend and backend features.</li>
              <li>Configured and maintained the production servers.</li>
              <li>Gave internal talks on technologies adopted during development and trained teammates to align the team's development approach.</li>
              <li>Developed modules including an AStar* algorithm port, scenic coordinate collection, route drawing, real-time probe log streaming, and smart parking.</li>
            </ol>`,项目中遇到的问题:`<ol>
              <li>The team initially underestimated TypeScript, so some code still followed JavaScript patterns.</li>
              <li>Some npm packages lacked TypeScript declarations, so we had to write our own declaration files, adding unplanned work.</li>
              <li>GPS-based step counting in H5 pages was inaccurate.</li>
            </ol>`,项目后期计划:`<ol>
              <li>Upgrade MongoDB from master/slave replication to a sharded cluster for higher availability.</li>
              <li>Use Redis cluster locks to handle locked read/write transactions.</li>
              <li>Wrap the vendor's Windows-only DLL (x86) for ticket gates with nbind.</li>
              <li>Build an Electron-based desktop tool for ticket gates to replace the MFC tool.</li>
              <li>Store logs in Alibaba Cloud Kafka or LogHub so the database holds only business data.</li>
            </ol>`,screenshots:[{src:"images/cv/projects/1trip-mp/1.png",alt:"1.png"},{src:"images/cv/projects/1trip-mp/10.png",alt:"10.png"},{src:"images/cv/projects/1trip-mp/11.png",alt:"11.png"},{src:"images/cv/projects/1trip-mp/12.png",alt:"12.png"},{src:"images/cv/projects/1trip-mp/13.png",alt:"13.png"},{src:"images/cv/projects/1trip-mp/14.png",alt:"14.png"},{src:"images/cv/projects/1trip-mp/15.png",alt:"15.png"},{src:"images/cv/projects/1trip-mp/16.png",alt:"16.png"},{src:"images/cv/projects/1trip-mp/2.png",alt:"2.png"},{src:"images/cv/projects/1trip-mp/3.png",alt:"3.png"},{src:"images/cv/projects/1trip-mp/4.png",alt:"4.png"},{src:"images/cv/projects/1trip-mp/5.png",alt:"5.png"},{src:"images/cv/projects/1trip-mp/6.png",alt:"6.png"},{src:"images/cv/projects/1trip-mp/7.png",alt:"7.png"},{src:"images/cv/projects/1trip-mp/8.png",alt:"8.png"},{src:"images/cv/projects/1trip-mp/9.png",alt:"9.png"}]},{id:"project6",no:6,name:"Yilvyou Big Data System",url:"",time:"2014.7 ~ 2016.4",项目简介:'<p class="pti">The main goal was to integrate the earlier subsystems so they could be managed and maintained in a unified way.</p>',项目使用技术:`<p>Backend languages and frameworks:</p>
            <ol>
              <li>C# with .NET Framework 4.5.1</li>
              <li>ASP.NET MVC 5</li>
              <li>Entity Framework 6 with code first</li>
              <li>Razor View Engine</li>
              <li>OData v4</li>
              <li>UI: Kendo UI Framework</li>
            </ol>

            <p>Production environment:</p>
            <ol>
              <li>Running in the company's IDC virtualized environment, CPU: Xeon E3</li>
              <li>Database: SQL Server 2014 (x2 failover)</li>
              <li>Code server: Windows Server 2012 Standard x64 (x3)</li>
              <li>Web server: IIS 8</li>
              <li>Web farm code synchronization: Windows Server DFS</li>
              <li>File storage: Alibaba Cloud Object Storage Service (OSS)</li>
              <li>
                The database and code servers run behind the firewall server.
                <p>The system architecture is roughly as follows:</p>
                <div class="row">
                  <div class="col-md-3">
                    <div class="thumbnails thumbnail-style margin-bottom-40">
                      <div class="thumbnail-img">
                        <div class="overflow-hidden">
                          <a data-fancybox="cloud-architecture" href="../public/images/cv/projects/1trip-cloud/architecture1.jpg" target="_blank">
                            <img class="img-responsive" src="../public/images/cv/projects/1trip-cloud/architecture1.jpg?x-oss-process=image/resize,w_310" alt="Architecture Diagram">
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ol>`,项目职责:`<ol>
              <li>Participated in early technology research and selection and built the overall system framework.</li>
              <li>Developed the WeChat management module (all), lottery management module (all), and bulk import module (import algorithm optimization).</li>
              <li>Configured and maintained the production servers.</li>
            </ol>`,项目中遇到的问题:`<ol>
              <li>Requirements changed rapidly, so the focus was on replacing as much of the legacy system as possible. About 60%–70% of the old business functions were unified.</li>
              <li>Lottery campaign parameters changed too often for the original statistics model. A generic, linearly controlled lottery statistics model was designed to meet the new requirements.</li>
              <li>The firewall server's inspection and forwarding of some TCP packets affected application access performance.</li>
              <li>Windows Server 2012 GUI mode performed poorly, consuming far more CPU and memory than Ubuntu Server-based machines.</li>
              <li>Switching between Windows Server GUI and Core modes was inconvenient.</li>
              <li>DFS replication had latency, and its wildcard-pattern-based file filtering was not very capable.</li>
            </ol>`,screenshots:[{src:"images/cv/projects/1trip-cloud/1.png",alt:"1.png"},{src:"images/cv/projects/1trip-cloud/2.png",alt:"2.png"},{src:"images/cv/projects/1trip-cloud/3.png",alt:"3.png"},{src:"images/cv/projects/1trip-cloud/4.png",alt:"4.png"},{src:"images/cv/projects/1trip-cloud/architecture1.jpg",alt:"architecture 1.jpg"},{src:"images/cv/projects/1trip-cloud/load1.png",alt:"load 1.png"},{src:"images/cv/projects/1trip-cloud/load2.png",alt:"load 2.png"},{src:"images/cv/projects/1trip-cloud/load3.png",alt:"load 3.png"},{src:"images/cv/projects/1trip-cloud/load4.png",alt:"load 4.png"}]},{id:"project5",no:5,name:"WeChat Yilvyou Service Platform",url:"",time:"2013.7 ~ 2014.2",项目简介:'<p class="pti">Managed the operation of the various APIs of a WeChat Official Account in developer mode.</p>',项目使用技术:`<p>Backend languages and frameworks:</p>
        <ol>
          <li>Ruby 1.9</li>
          <li>Ruby on Rails v3.2.13</li>
          <li>View Engine: slim</li>
        </ol>
        <p>Frontend framework and languages:</p>
        <ol>
          <li>ACE Bootstrap Admin UI Framework</li>
          <li>SCSS, CoffeeScript, Slim</li>
        </ol>
        <p>Production environment:</p>
        <ol>
          <li>Running in the company's IDC virtualized environment, CPU: Xeon E3</li>
          <li>Database: MySQL</li>
          <li>Code server: Ubuntu Server 12.04 x64 (x3)</li>
          <li>Rails server: Unicorn</li>
          <li>HTTP server: Nginx</li>
        </ol>`,项目职责:"<p>Maintained the project after its initial release, fixed known bugs, and added new features; I was not involved in building the original core framework.</p>",项目中遇到的问题:`<ol>
          <li>Some contracted scenic areas had highly independent requirements, resulting in eight Git branches and making maintenance cumbersome.</li>
        </ol>`,screenshots:[{src:"images/cv/projects/1trip-weixin/1.png",alt:"1.png"},{src:"images/cv/projects/1trip-weixin/2.png",alt:"2.png"},{src:"images/cv/projects/1trip-weixin/3.png",alt:"3.png"},{src:"images/cv/projects/1trip-weixin/4.png",alt:"4.png"},{src:"images/cv/projects/1trip-weixin/5.png",alt:"5.png"}]},{id:"project4",no:4,name:"Yilvtu",url:"",time:"2013.5 ~ 2014.4",项目简介:'<p class="pti">Provided customized backend content management for contracted scenic areas and gave the mobile app both online and offline data access.</p>',项目使用技术:`<p>Backend languages and frameworks:</p>
        <ol>
          <li>Ruby 1.9</li>
          <li>Ruby on Rails v3.2.13</li>
          <li>View Engine: erb</li>
          <li>UI: Bootstrap Framework</li>
        </ol>
        <p>Production environment:</p>
        <ol>
          <li>Running in the company's IDC virtualized environment, CPU: Xeon E3</li>
          <li>Database: MySQL</li>
          <li>Code server: Ubuntu Server 12.04 x64 (x2)</li>
          <li>Rails server: Thin</li>
          <li>HTTP server: Nginx</li>
          <li>Traffic monitoring tool: Cacti</li>
        </ol>`,项目职责:"<p>Built the system framework and implemented roughly 70% of the backend business functionality.</p>",项目中遇到的问题:`<ol>
          <li>Initially, an observer pattern refreshed the cache on every field change, causing excessive refreshes. A different refresh strategy was adopted later.</li>
          <li>Ubuntu Server caches I/O, which drove up memory use on the file server; the OS I/O cache policy was adjusted later.</li>
          <li>The file server had bandwidth limits, causing downloads to stall, and static files could not be accelerated by a CDN. Alibaba Cloud Object Storage Service (OSS) was adopted later.</li>
          <li>
            Given a current model and a target class name, the code had to walk the model
            class's inheritance chain to find the target database instance, requiring metaprogramming for polymorphic type detection and reducing performance somewhat.
          </li>
        </ol>`,screenshots:[{src:"images/cv/projects/1trip-tm/1.png",alt:"1.png"},{src:"images/cv/projects/1trip-tm/2.png",alt:"2.png"},{src:"images/cv/projects/1trip-tm/3.png",alt:"3.png"},{src:"images/cv/projects/1trip-tm/4.png",alt:"4.png"},{src:"images/cv/projects/1trip-tm/5.png",alt:"5.png"}]},{id:"project3",no:3,name:"Pailidao",url:"",time:"2012.12 ~ 2013.4",项目简介:'<p class="pti">Recognized photos taken by visitors in a scenic area and provided introductions and guidance for their visit.</p>',项目使用技术:`<p>Backend languages and frameworks:</p>
        <ol>
          <li>Ruby 1.9</li>
          <li>Ruby on Rails v3.2.13</li>
          <li>View Engine: erb</li>
          <li>UI: Bootstrap Framework</li>
        </ol>
        <p>Production environment:</p>
        <ol>
          <li>Running in the company's IDC virtualized environment, CPU: Xeon E3</li>
          <li>Database: MySQL</li>
          <li>Code server: Ubuntu Server 12.04 x64 (x2)</li>
          <li>Rails server: Phusion Passenger</li>
          <li>HTTP server: Nginx</li>
        </ol>`,项目职责:"<p>Built the scenic-area image sample library, recognized photos uploaded by visitors, and pushed relevant guide information back to them.</p>",项目中遇到的问题:`<ol>
          <li>Image recognition was initially handled by imgseek. Because its accuracy did not meet requirements, a third-party commercial recognition library was adopted.</li>
          <li>Ruby could not interact with the third-party library directly, so a C-for-Ruby wrapper was added before it could be used in Rails.</li>
          <li>Image recognition is CPU-intensive and constrained by the production hardware, so the accuracy parameters of the recognition algorithm were tuned.</li>
          <li>Recognition is essentially feature-value comparison; multithreading in Ruby was used to shorten search time.</li>
        </ol>`},{id:"project2",no:2,name:"Streaming Media Content Management System",url:"",time:"2011.6 ~ 2012.12",项目简介:'<p class="pti">The company had many TS test stream files stored in directories on disk. They were fragmented and unsearchable, so the streaming media file formats needed to be parsed and indexed in a database.</p>',项目使用技术:`<p>Batch parsing and indexing desktop tool:</p>
        <ol>
          <li>Language: C#</li>
          <li>Framework: Windows Forms</li>
          <li>Supported operating systems: XP, Windows 7 32-bit</li>
        </ol>
        <p>Backend technologies:</p>
        <ol>
          <li>Language: C#</li>
          <li>Framework: ASP.NET MVC 3</li>
          <li>UI framework: jQuery UI Framework</li>
        </ol>`,项目职责:`<p>Developed the desktop parsing tool to decode TS streams and index the results.</p>
        <p>Developed the backend content system to search streaming media by various parameters.</p>`,项目中遇到的问题:`<ol>
          <li>TS streams in DVB are composite formats; understanding their structure and the meaning of the bits was required.</li>
          <li>Single-threaded decoding in the desktop tool was too slow; it was later changed to multithreading to improve CPU utilization.</li>
        </ol>`},{id:"project1",no:1,name:"uiDesign",url:"",time:"2010.11 ~ 2011.4",项目简介:'<p class="pti">uiDesign is graphical application-layer design software for embedded devices such as televisions, used primarily by Sunplus Technology.</p>',项目使用技术:`<ol>
          <li>Languages and frameworks: C++, MFC</li>
          <li>UI framework: Codejock Toolkit</li>
          <li>Font libraries</li>
          <li>Python-based character processing</li>
        </ol>`,项目职责:"<p>Checked whether the code-page mappings in existing global implementations were correct. Under the technical manager's guidance, became familiar with uiDesign's business workflow and fixed several bugs.</p>",项目中遇到的问题:`<ol>
          <li>The system was large; I was unfamiliar with the business logic and could not always follow the algorithms.</li>
          <li>It involved assembly, C, C++, Python, MFC, Windows internals, chip specifications, and Arabic font shaping algorithms, which could not be mastered in a short time. Sometimes fixing one bug introduced another.</li>
        </ol>`,screenshots:[{src:"images/cv/projects/sunmedia-uidesign/1.png",alt:"1.png"},{src:"images/cv/projects/sunmedia-uidesign/2.png",alt:"2.png"},{src:"images/cv/projects/sunmedia-uidesign/3.png",alt:"3.png"}]}],Qa=`
  <table class="skills table-hover">
    <!-- Programming Languages -->
    <tbody><tr>
      <th rowspan="16" class="text-center bg-green-1"><i class="fa fa-language"></i> Programming Languages</th>
      <td class="bg-grey"><b>Name</b></td>
      <td class="bg-grey"><b>Proficiency</b></td>
      <td class="bg-grey"><b>Description</b></td>
    </tr>
    <tr>
      <td>
        <a target="_blank" href="https://developer.mozilla.org/zh-CN/docs/Web/HTML">HTML</a>
      </td>
      <td>Proficient</td>
      <td>Understand common HTML tags and their appropriate use cases.</td>
    </tr>
    <tr>
      <td>
        <a target="_blank" href="https://developer.mozilla.org/zh-CN/docs/Web/CSS">CSS</a>
        /
        <a target="_blank" href="https://sass-lang.com/">SCSS</a>
        /
        <a target="_blank" href="https://lesscss.org/">LESS</a>
      </td>
      <td>Proficient</td>
      <td>Familiar with common style properties and their appropriate use cases.</td>
    </tr>
    <tr>
      <td><a target="_blank" href="https://nodejs.org/en/">Node.js</a>（JavaScript）</td>
      <td>Proficient</td>
      <td>Proficient in using Node.js for backend system development.</td>
    </tr>
    <tr>
      <td><a target="_blank" href="http://coffeescript.org/">CoffeeScript</a></td>
      <td>Familiar</td>
      <td>Used CoffeeScript in part of the front-end code of Rails applications.</td>
    </tr>
    <tr>
      <td><a target="_blank" href="https://www.python.org/">Python</a></td>
      <td>Proficient</td>
      <td>Have maintained Django and Flask applications.</td>
    </tr>
    <tr>
      <td><a target="_blank" href="https://www.ruby-lang.org/en/">Ruby</a></td>
      <td>Proficient</td>
      <td>Understand metaprogramming and apply it effectively to writing Rails-based backend applications.</td>
    </tr>
    <tr>
      <td><a target="_blank" href="http://eli-project.sourceforge.net/c_html/c.html">C</a></td>
      <td>Proficient</td>
      <td>Proficient in using gdb (GUI) to debug programs.</td>
    </tr>
    <tr>
      <td><a target="_blank" href="https://isocpp.org/std/the-standard">C++</a></td>
      <td>Familiar</td>
      <td>
        Understand the basic syntax and have maintained <a target="_blank" href="https://docs.microsoft.com/en-us/cpp/windows/overview-of-windows-programming-in-cpp">VC++</a> MFC programs.<br>
        Many excellent open-source projects such as Node.js, HotSpot, and Chromium are written in C++, so I study the language regularly and plan to keep investing in it.
      </td>
    </tr>
    <tr>
      <td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/ms228593.aspx">C#</a></td>
      <td>Proficient</td>
      <td>Understand reflection, lambdas, delegates, and related concepts; able to develop effectively with the ASP.NET MVC / ASP.NET MVC Core / Windows Forms .NET frameworks.</td>
    </tr>
    <tr>
      <td><a target="_blank" href="https://www.rust-lang.org/">Rust</a></td>
      <td>Proficient</td>
      <td>
        Can read most Rust code. Familiar with C/Rust interop scenarios and able to write API-style services based on the actix-web framework.
        Still building proficiency with Rust lifetime annotations such as 'a and 'b in real-world projects and cannot yet use them flexibly in function definitions.
      </td>
      <td></td>
    </tr>
    <tr>
      <td><a target="_blank" href="https://github.com/PowerShell/PowerShell">PowerShell</a></td>
      <td>Familiar</td>
      <td>Can use PowerShell for remote administration of Windows Server.</td>
    </tr>
    <tr>
      <td><a target="_blank" href="https://www.gnu.org/software/bash/manual/">Bash</a></td>
      <td>Proficient</td>
      <td>Proficient in using Linux Bash for day-to-day work tasks.</td>
    </tr>
    <tr>
      <td><a target="_blank" href="https://technet.microsoft.com/en-us/library/ms189826(v=sql.90).aspx">T-SQL</a></td>
      <td>Proficient</td>
      <td>Proficient in using SQL for common business tasks. Able to use ShardingSphere/MyCat to handle database and table sharding, and familiar with deadlock analysis and InnoDB recovery solutions.</td>
    </tr>
    <tr>
      <td><a target="_blank" href="https://docs.oracle.com/javase/specs/">Java</a></td>
      <td>Proficient</td>
      <td>Proficient in using the Spring Boot framework to develop web applications.</td>
    </tr>
    <tr>
      <td><a target="_blank" href="http://www.typescriptlang.org/">TypeScript</a></td>
      <td>Proficient</td>
      <td>Proficient in using TS for backend (Node.js) and frontend (Angular 2.x) development.</td>
    </tr>

    <!-- Development Frameworks -->
    <tr>
      <th rowspan="9" class="text-center bg-green-2"><i class="fa fa-cubes"></i> Development Frameworks</th>
    </tr>
    <tr>
      <td><a target="_blank" href="https://docs.microsoft.com/en-us/aspnet/mvc/mvc5">ASP.NET MVC 5</a></td>
      <td>Proficient</td>
      <td>
        <ol style="text-align: left; padding-left: 1.2em">
          <li>
            <a target="_blank" href="https://docs.microsoft.com/en-us/aspnet/mvc/overview/getting-started/lifecycle-of-an-aspnet-mvc-5-application">Understand the ASP.NET MVC application lifecycle.</a>
          </li>
          <li>Understand how the Razor template engine renders views.</li>
          <li>
            Able to use <a target="_blank" href="https://docs.microsoft.com/en-us/aspnet/identity/overview/getting-started/introduction-to-aspnet-identity">ASP.NET Identity</a> effectively for authorization and role management.
          </li>
          <li>Able to work effectively with commonly used <a target="_blank" href="https://www.nuget.org/">NuGet</a> packages.</li>
          <li>
            Familiar with the <a target="_blank" href="https://msdn.microsoft.com/en-us/library/aa937723(v=vs.113).aspx">Entity Framework ORM</a> framework for building relational models and using common Migration commands.
          </li>
          <li>Familiar with commonly used RESTful commands based on the <a target="_blank" href="http://www.odata.org/documentation/">OData</a> protocol.</li>
        </ol>
      </td>
    </tr>
    <tr>
      <td><a target="_blank" href="https://docs.microsoft.com/en-us/aspnet/core/">ASP.NET Core</a></td>
      <td>Proficient</td>
      <td>
        <ol style="text-align: left; padding-left: 1.2em">
          <li>Understand the cross-platform limitations of ASP.NET MVC Core, such as the lack of OData protocol support.</li>
          <li>Familiar with the ASP.NET MVC Core development workflow.</li>
        </ol>
      </td>
    </tr>
    <tr>
      <td><a target="_blank" href="http://rubyonrails.org/">Rails</a></td>
      <td>Proficient</td>
      <td>
        <ol style="text-align: left; padding-left: 1.2em">
          <li>Familiar with the Active Record ORM framework for creating relational models, defining associations (1:1, 1:n, n:m, and polymorphic), validation, and callback hooks.</li>
          <li>Familiar with ERB and <a target="_blank" href="http://slim-lang.com/">Slim</a> template engine syntax, as well as the load order when using both engines together.</li>
          <li>Familiar with the <a target="_blank" href="http://www.aptana.com/">Aptana Studio IDE</a> for improving Rails development and debugging efficiency.</li>
          <li>Familiar with the widespread use of <a target="_blank" href="https://en.wikipedia.org/wiki/Content_negotiation">content negotiation</a> in controllers.</li>
          <li>
            Experienced in running Rails applications in production with <a target="_blank" href="http://code.macournoyer.com/thin/">thin</a>,
            <a target="_blank" href="https://www.phusionpassenger.com/">Passenger</a>, and
            <a target="_blank" href="https://bogomips.org/unicorn/">unicorn</a>.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <td><a target="_blank" href="http://expressjs.com/">Express 4</a></td>
      <td>Proficient</td>
      <td>
        <ol style="text-align: left; padding-left: 1.2em">
          <li>Familiar with using <a target="_blank" href="http://mongoosejs.com/">Mongoose ODM</a> to define models and run queries.</li>
          <li>Familiar with the <a target="_blank" href="https://mozilla.github.io/nunjucks/">nunjucks</a> template engine syntax.</li>
          <li>Familiar with Node.js cluster mode based on the round-robin algorithm.</li>
          <li>Familiar with using the pm2 module to run Express applications in production.</li>
        </ol>
      </td>
    </tr>
    <tr>
      <td><a target="_blank" href="https://msdn.microsoft.com/en-us/library/d06h2x6e.aspx">MFC</a> / Qt / Windows Forms</td>
      <td>Basic</td>
      <td>
        <ol style="text-align: left; padding-left: 1.2em">
          <li>Have maintained MFC applications but have not studied them in depth.</li>
          <li>Familiar with Qt widget development.</li>
          <li>Familiar with WinForm for developing desktop applications.</li>
        </ol>
      </td>
    </tr>
    <tr>
      <td><a target="_blank" href="http://www.telerik.com/kendo-ui">Kendo UI</a></td>
      <td>Proficient</td>
      <td>
        <ol style="text-align: left; padding-left: 1.2em">
          <li>Familiar with commonly used Kendo UI controls.</li>
          <li>Able to extend existing controls with simple customizations.</li>
        </ol>
      </td>
    </tr>
    <tr>
      <td><a target="_blank" href="https://angular.io/">Angular 2</a>（MVVM）</td>
      <td>Familiar</td>
      <td>
        <ol style="text-align: left; padding-left: 1.2em">
          <li>Familiar with the basic building blocks of Angular 2 applications.</li>
          <li>Familiar with Angular 2 data binding, event binding, loading data through Service DI, and submitting data to the server via form POST.</li>
          <li>Familiar with Angular 2 lifecycle hooks.</li>
          <li>Familiar with using system.js to load Angular 2 applications.</li>
          <li>Aware of Angular 2's incomplete browser compatibility, especially its poor support for IE.</li>
        </ol>
      </td>
    </tr>
    <tr>
      <td><a target="_blank" href="http://riotjs.com//">Riot.js</a>（MVVM）</td>
      <td>Familiar</td>
      <td>
        <ol style="text-align: left; padding-left: 1.2em">
          <li>Familiar with the Riot.js loading process.</li>
          <li>Able to encapsulate self-contained features as tag modules that other host pages can reuse.</li>
        </ol>
      </td>
    </tr>

    <!-- Operating Systems -->
    <tr>
      <th rowspan="4" class="text-center bg-green-1"><i class="fa fa-windows"></i> Operating Systems</th>
    </tr>
    <tr>
      <td>Windows Server</td>
      <td>Familiar</td>
      <td>
        <ol style="text-align: left; padding-left: 1.2em">
          <li>Understand firewall configuration.</li>
          <li>Familiar with Web Farm clusters and DFS configuration.</li>
          <li>Familiar with using PowerShell to manage sites across multiple hosts.</li>
        </ol>
      </td>
    </tr>
    <tr>
      <td>Windows Nano Server</td>
      <td>Basic</td>
      <td>Understand how ASP.NET MVC Core runs on Nano Server.</td>
    </tr>
    <tr>
      <td>debian / fedora / ubuntu / kylin os / os x</td>
      <td>Familiar</td>
      <td>
        <ol style="text-align: left; padding-left: 1.2em">
          <li>Familiar with operating system environments and able to set up various development environments on Linux.</li>
          <li>Familiar with the use of common Bash commands on Linux.</li>
        </ol>
      </td>
    </tr>

    <!-- IDE Tools -->
    <tr>
      <th rowspan="4" class="text-center bg-green-2"><i class="fa fa-gavel"></i> IDE Tools</th>
    </tr>
    <tr>
      <td><a target="_blank" href="https://www.visualstudio.com/">Visual Studio</a></td>
      <td>Proficient</td>
      <td>
        <ol style="text-align: left; padding-left: 1.2em">
          <li>Familiar with the common windows and property configuration in Visual Studio.</li>
          <li>Proficient in using Visual Studio to develop Windows-based projects, including ASP.NET, Python, and Node.js projects.</li>
        </ol>
      </td>
    </tr>
    <tr>
      <td><a target="_blank" href="https://eclipse.org/">Eclipse</a></td>
      <td>Proficient</td>
      <td>
        <ol style="text-align: left; padding-left: 1.2em">
          <li>Familiar with Eclipse plug-in installation and consistent Code Style configuration.</li>
          <li>Proficient in using Eclipse for Java project development (web-focused).</li>
        </ol>
      </td>
    </tr>
    <tr>
      <td><a target="_blank" href="https://code.visualstudio.com/">VS Code</a></td>
      <td>Proficient</td>
      <td>
        <ol style="text-align: left; padding-left: 1.2em">
          <li>Proficient in using VS Code for visual debugging of programs written in various languages.</li>
          <li>Use the GitHub Copilot plug-in to maximize development efficiency.</li>
        </ol>
      </td>
    </tr>

    <!-- Source Control -->
    <tr>
      <th rowspan="4" class="text-center bg-green-1"><i class="fa fa-github"></i> Source Control</th>
    </tr>
    <tr>
      <td>git</td>
      <td>Proficient</td>
      <td>
        <ol style="text-align: left; padding-left: 1.2em">
          <li>Understand the distributed nature of Git.</li>
          <li>Familiar with common Git commands such as git clone, git status, and git log.</li>
          <li>Proficient in using gitk to review current changes.</li>
          <li>
            Able to set up the open-source <a target="_blank" href="https://github.com/gitlabhq/gitlabhq">GitLabHQ</a> system on Ubuntu Server for internal source code management.
          </li>
          <li>Proficient in the Git workflow with Gerrit code review.</li>
        </ol>
      </td>
    </tr>
    <tr>
      <td>TFS</td>
      <td>Proficient</td>
      <td>
        <ol style="text-align: left; padding-left: 1.2em">
          <li>Understand the centralized nature of <a target="_blank" href="https://www.visualstudio.com/tfs/">TFS (Team Foundation Server)</a>.</li>
          <li>Proficient in using TFS within Visual Studio for source code management and iterative development.</li>
          <li>Able to set up a TFS system on Windows Server for internal source code management.</li>
        </ol>
      </td>
    </tr>
    <tr>
      <td>svn</td>
      <td>Proficient</td>
      <td>
        <ol style="text-align: left; padding-left: 1.2em">
          <li>Proficient in using SVN for source code management.</li>
        </ol>
      </td>
    </tr>

    <!-- Databases -->
    <tr>
      <th rowspan="5" class="text-center bg-green-2"><i class="fa fa-database"></i> Databases</th>
    </tr>
    <tr>
      <td><a target="_blank" href="https://www.microsoft.com/en-us/sql-server/sql-server-downloads">MS SQL Server</a></td>
      <td>Familiar</td>
      <td>
        <ol style="text-align: left; padding-left: 1.2em">
          <li>Familiar with using SQL Server Management Studio to write T-SQL statements and debug with breakpoints.</li>
          <li>Familiar with using SQL Server Management Studio to manage database account permissions and schedule backups.</li>
          <li>
            Understand the use of <a target="_blank" href="https://msdn.microsoft.com/zh-cn/library/ms345108(v=sql.90).aspx">SQL Server Service Broker</a> for building queued applications.
          </li>
          <li>
            Understand <a target="_blank" href="https://docs.microsoft.com/en-us/sql/sql-server/failover-clusters/windows/always-on-failover-cluster-instances-sql-server">Failover Cluster.</a>
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <td><a target="_blank" href="https://www.mysql.com/">MySQL</a></td>
      <td>Familiar</td>
      <td>
        <ol style="text-align: left; padding-left: 1.2em">
          <li>Familiar with writing T-SQL statements and developing in MySQL Workbench.</li>
          <li>Familiar with common MySQL commands such as mysqldump, source, and mysqladmin.</li>
          <li>Understand the master/slave replication model.</li>
        </ol>
      </td>
    </tr>
    <tr>
      <td><a target="_blank" href="https://www.mongodb.com/">MongoDB</a></td>
      <td>Familiar</td>
      <td>
        <ol style="text-align: left; padding-left: 1.2em">
          <li>Familiar with basic document creation and query operations in MongoDB.</li>
          <li>Familiar with defining a Document Schema in MongoDB using a relational-database style approach.</li>
          <li>Familiar with common MongoDB commands such as mongodump and mongorestore.</li>
        </ol>
      </td>
    </tr>
    <tr>
      <td><a target="_blank" href="https://redis.io/">redis</a></td>
      <td>Familiar</td>
      <td>
        <ol style="text-align: left; padding-left: 1.2em">
          <li>Proficient in using Redis for caching scenarios.</li>
        </ol>
      </td>
    </tr>

    <!-- Other -->
    <tr>
      <th rowspan="4" class="text-center bg-green-1"><i class="fa fa-chrome"></i> Other</th>
    </tr>
    <tr>
      <td>Firewall Circumvention Skills</td>
      <td>Proficient</td>
      <td>
        <ol style="text-align: left; padding-left: 1.2em">
          <li>Able to set up an OpenVPN service to bypass network restrictions, and use cron jobs to rotate server IPs hourly to avoid blocking.</li>
          <li><b>Have used large AI models to assist with programming since the second half of 2021.</b></li>
        </ol>
      </td>
    </tr>
  </tbody></table>
`,Ga=`
  <ul class="timeline-v2">

    <li>
      <time class="cbp_tmtime">
        <span>Jul. 2010 ~ Present </span>
        <span><b>Work</b></span>
      </time>

      <i class="cbp_tmicon rounded-x hidden-xs"></i>
      <div class="cbp_tmlabel">
        <h2> Certifications </h2>
        <div class="row row-indent">
          <div class="col-md-3">
            <a data-fancybox="education" href="/images/cv/education/alibaba-java-coding-standard.jpg" target="_blank">
              <img class="img-responsive md-margin-bottom-10" src="/images/cv/education/alibaba-java-coding-standard.jpg" alt="Alibaba Java Development Manual">
            </a>
          </div>
        </div>
      </div>
    </li>

    <li>
      <time class="cbp_tmtime">
        <span>Sept. 2006 ~ Jul. 2010</span>
        <span><b>University</b></span>
      </time>

      <i class="cbp_tmicon rounded-x hidden-xs"></i>
      <div class="cbp_tmlabel">
        <h2>Leshan Normal University</h2>
        <p class="indent">On the whole, I applied myself diligently to my studies during university. I passed the national Software Designer (Intermediate-level) qualification exam, commonly known as the software qualification exam.</p>
        <div class="row row-indent">
          <div class="col-md-3">
            <a data-fancybox="education" href="/images/cv/education/intermediate-certificate-of-software-designers.jpg" target="_blank">
              <img class="img-responsive md-margin-bottom-10" src="/images/cv/education/intermediate-certificate-of-software-designers.jpg" alt="Software Designer (Intermediate-level) certificate">
            </a>
          </div>
        </div>
      </div>
    </li>

    <li>
      <time class="cbp_tmtime">
        <span>Sept. 2003 ~ May 2006</span>
        <span><b>High School</b></span>
      </time>

      <i class="cbp_tmicon rounded-x hidden-xs"></i>
      <div class="cbp_tmlabel">
        <h2>Laifeng High School, Bishan County, Chongqing</h2>
        <p class="indent">In high school, I continued to focus mainly on the sciences. I received second prize in a county-level chemistry competition in Bishan County, Chongqing, and won the Third Prize, Chongqing Mathematics Olympiad, as well as the Third Prize, National High School Mathematics Olympiad.</p>
        <div class="row row-indent">
          <div class="col-md-3">
            <a data-fancybox="education" href="/images/cv/education/senior-high-school-olympic-nationwide-3rd-prize.jpg" target="_blank">
              <img class="img-responsive md-margin-bottom-10" src="/images/cv/education/senior-high-school-olympic-nationwide-3rd-prize.jpg" alt="Third Prize, National High School Mathematics Olympiad">
            </a>
          </div>
          <div class="col-md-3">
            <a data-fancybox="education" href="/images/cv/education/senior-high-school-olympic-chongqing-3rd-prize.jpg" target="_blank">
              <img class="img-responsive md-margin-bottom-10" src="/images/cv/education/senior-high-school-olympic-chongqing-3rd-prize.jpg" alt="Third Prize, Chongqing High School Mathematics Olympiad">
            </a>
          </div>
        </div>
      </div>
    </li>

    <li>
      <time class="cbp_tmtime">
        <span>Sept. 2000 ~ May 2003</span>
        <span><b>Middle School</b></span>
      </time>

      <i class="cbp_tmicon rounded-x hidden-xs"></i>

      <div class="cbp_tmlabel">
        <h2>Batang Middle School, Bishan County, Chongqing</h2>

        <div class="row">
          <div class="col-md-12">
            <p class="indent">In middle school, I wasn't particularly fond of my Chinese teacher, so I shifted my focus from the humanities to science. Favoring mathematics, I won the Third Prize, Chongqing Mathematics Olympiad.</p>
          </div>
          <div class="row row-indent">
            <div class="col-md-3">
              <a data-fancybox="education" href="/images/cv/education/junior-high-school-olympic-chongqing-3rd-prize.jpg" target="_blank">
                <img class="img-responsive md-margin-bottom-10" src="/images/cv/education/junior-high-school-olympic-chongqing-3rd-prize.jpg" alt="Third Prize, Chongqing Middle School Mathematics Olympiad">
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>

    <li>
      <time class="cbp_tmtime">
        <span>Sept. 1994 ~ May 2000</span>
        <span><b>Primary School</b></span>
      </time>
      <i class="cbp_tmicon rounded-x hidden-xs"></i>

      <div class="cbp_tmlabel">
        <h2>Batang Primary School, Bishan County, Chongqing</h2>

        <div class="margin-bottom-20"></div>

        <div class="row">
          <div class="col-md-12">
            <p class="indent">It was so long ago that I can no longer recall how I spent those years.</p>
          </div>
        </div>
      </div>
    </li>
  </ul>
`,Ja=`
  <!-- DB REST API -->
  <div class="row" style="margin-bottom:20px;">
    <div class="col-md-12">
      <div class="funny-boxes" style="background:#ebf5fb; border:1px solid #d4e6f1;">
        <div class="media">
          <div class="media-left" style="padding-right:20px;">
            <div style="width:56px; height:56px; border-radius:50%; background:#3498db; text-align:center; line-height:56px; font-size:22px; color:#fff;">
              <i class="fa fa-database"></i>
            </div>
          </div>
          <div class="media-body">
            <div style="overflow:hidden; margin-bottom:10px;">
              <h3 class="media-heading" style="float:left; font-size:18px; font-weight:600; color:#1a5276; margin:0;">DB REST API</h3>
              <a class="btn btn-u btn-u-sm" style="float:right; background:#3498db;" href="https://github.com/serveryang/db-rest" target="_blank">
                <i class="fa fa-external-link"></i> View Project
              </a>
            </div>
            <p style="font-size:13px; line-height:1.7; color:#2c3e50; margin-bottom:12px;">A high-performance RESTful database service written in Rust that calls JDBC drivers through JNI and supports MySQL, PostgreSQL, Dameng, and other databases. It provides standard RESTful APIs and CLI tools, making it well suited to database administration and weak-password detection.</p>
            <div style="margin-bottom:10px;">
              <span class="label" style="background:#d6eaf8; color:#1a5276; font-size:11px; padding:3px 8px; margin-right:5px; display:inline-block;">Rust</span>
              <span class="label" style="background:#d6eaf8; color:#1a5276; font-size:11px; padding:3px 8px; margin-right:5px; display:inline-block;">JNI</span>
              <span class="label" style="background:#d6eaf8; color:#1a5276; font-size:11px; padding:3px 8px; margin-right:5px; display:inline-block;">JDBC</span>
              <span class="label" style="background:#d6eaf8; color:#1a5276; font-size:11px; padding:3px 8px; margin-right:5px; display:inline-block;">REST API</span>
              <span class="label" style="background:#d6eaf8; color:#1a5276; font-size:11px; padding:3px 8px; display:inline-block;">CLI</span>
            </div>
            <p style="margin:0;"><small style="font-size:12px; color:#5d6d7e;">Features: High performance | Multi-database support | Dual modes (REST/CLI) | Memory footprint &lt;8MB</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Simple Secure Runner -->
  <div class="row" style="margin-bottom:20px;">
    <div class="col-md-12">
      <div class="funny-boxes" style="background:#eafaf1; border:1px solid #d5f5e3;">
        <div class="media">
          <div class="media-left" style="padding-right:20px;">
            <div style="width:56px; height:56px; border-radius:50%; background:#27ae60; text-align:center; line-height:56px; font-size:22px; color:#fff;">
              <i class="fa fa-lock"></i>
            </div>
          </div>
          <div class="media-body">
            <div style="overflow:hidden; margin-bottom:10px;">
              <h3 class="media-heading" style="float:left; font-size:18px; font-weight:600; color:#1e8449; margin:0;">Simple Secure Runner</h3>
              <a class="btn btn-u btn-u-sm" style="float:right; background:#27ae60;" href="https://github.com/serveryang/simple-secure-runner" target="_blank">
                <i class="fa fa-external-link"></i> View Project
              </a>
            </div>
            <p style="font-size:13px; line-height:1.7; color:#2c3e50; margin-bottom:12px;">A simple, secure runner that encrypts scripts written in Node.js, Python, Ruby, Bash, and other languages and decrypts them dynamically at runtime. Built on LD_PRELOAD for transparent file interception, it is ideal for secure script distribution and runtime protection.</p>
            <div style="margin-bottom:10px;">
              <span class="label" style="background:#d5f5e3; color:#1e8449; font-size:11px; padding:3px 8px; margin-right:5px; display:inline-block;">C</span>
              <span class="label" style="background:#d5f5e3; color:#1e8449; font-size:11px; padding:3px 8px; margin-right:5px; display:inline-block;">LD_PRELOAD</span>
              <span class="label" style="background:#d5f5e3; color:#1e8449; font-size:11px; padding:3px 8px; margin-right:5px; display:inline-block;">RSA</span>
              <span class="label" style="background:#d5f5e3; color:#1e8449; font-size:11px; padding:3px 8px; display:inline-block;">AES</span>
            </div>
            <p style="margin:0;"><small style="font-size:12px; color:#5d6d7e;">Features: Hybrid encryption | Transparent decryption | Multi-language support | Secure distribution</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Simple Scheduler -->
  <div class="row" style="margin-bottom:20px;">
    <div class="col-md-12">
      <div class="funny-boxes" style="background:#f4ecf7; border:1px solid #e8daef;">
        <div class="media">
          <div class="media-left" style="padding-right:20px;">
            <div style="width:56px; height:56px; border-radius:50%; background:#8e44ad; text-align:center; line-height:56px; font-size:22px; color:#fff;">
              <i class="fa fa-tasks"></i>
            </div>
          </div>
          <div class="media-body">
            <div style="overflow:hidden; margin-bottom:10px;">
              <h3 class="media-heading" style="float:left; font-size:18px; font-weight:600; color:#6c3483; margin:0;">Simple Scheduler</h3>
              <a class="btn btn-u btn-u-sm" style="float:right; background:#8e44ad;" href="https://github.com/serveryang/simple-scheduler" target="_blank">
                <i class="fa fa-external-link"></i> View Project
              </a>
            </div>
            <p style="font-size:13px; line-height:1.7; color:#2c3e50; margin-bottom:12px;">A lightweight task scheduler built in Rust, supporting hot file reload, cron expressions, second-level scheduling, parallel task execution, and REST API control. With built-in security constraints, it is well suited to IT automation and batch task scheduling.</p>
            <div style="margin-bottom:10px;">
              <span class="label" style="background:#e8daef; color:#6c3483; font-size:11px; padding:3px 8px; margin-right:5px; display:inline-block;">Rust</span>
              <span class="label" style="background:#e8daef; color:#6c3483; font-size:11px; padding:3px 8px; margin-right:5px; display:inline-block;">Cron</span>
              <span class="label" style="background:#e8daef; color:#6c3483; font-size:11px; padding:3px 8px; margin-right:5px; display:inline-block;">REST API</span>
              <span class="label" style="background:#e8daef; color:#6c3483; font-size:11px; padding:3px 8px; display:inline-block;">Parallel Execution</span>
            </div>
            <p style="margin:0;"><small style="font-size:12px; color:#5d6d7e;">Features: Second-level scheduling | Hot reload | Parallel execution | Security constraints | Process locking</small></p>
          </div>
        </div>
      </div>
    `,Ya={项目简介:"项目简介",项目使用技术:"项目使用技术",项目职责:"项目职责",项目中遇到的问题:"项目中遇到的问题"},lt={zh:{code:"zh",label:"中文",htmlLang:"zh-CN",pageTitle:`杨正合的${tn.title}`,profile:tn,projects:Ua,skills:$a,educations:Ha,plannings:qa,ui:{versionPrefix:"版本",workTime:"工作时间：",companies:"工作公司：",position:"工作职位：",phone:"联系电话：",social:"网络足迹",tabs:{experiences:"项目开发经验",skills:"开发技能",technologyPlanning:"开源项目",education:"教育经历"},navLabel:"项目导航（按时间逆序）：",project:{time:"时间：",name:"项目名称：",sections:Ya,screenshot:"项目截图"},lightbox:{close:"关闭",prev:"上一张",next:"下一张"},imageFallback:"教育经历图片",print:"打印",backToTop:"返回顶部",footer:e=>`杨正合 © ${e}`}},en:{code:"en",label:"EN",htmlLang:"en",pageTitle:`${Hs.name}'s ${Hs.title}`,profile:Hs,projects:Ka,skills:Qa,educations:Ga,plannings:Ja,ui:{versionPrefix:"Version",workTime:"Work Experience:",companies:"Companies:",position:"Position:",phone:"Phone:",social:"Online Profiles",tabs:{experiences:"Project Experience",skills:"Development Skills",technologyPlanning:"Open Source",education:"Education"},navLabel:"Project navigation (most recent first):",project:{time:"Period:",name:"Project:",sections:{项目简介:"Overview",项目使用技术:"Technologies Used",项目职责:"Responsibilities",项目中遇到的问题:"Challenges & Solutions"},screenshot:"Screenshots"},lightbox:{close:"Close",prev:"Previous",next:"Next"},imageFallback:"Education image",print:"Print",backToTop:"Back to top",footer:e=>`Yang Zhenghe © ${e}`}}},fl="yzh-cv-locale";function Za(){try{const e=localStorage.getItem(fl);return e==="zh"||e==="en"?e:null}catch{return null}}function Xa(){var s;const e=Za();return e||(((s=navigator.languages)!=null&&s.length?navigator.languages:[navigator.language]).some(i=>String(i||"").toLowerCase().startsWith("en"))?"en":"zh")}function eo(e){try{localStorage.setItem(fl,e)}catch{}}const to=["id"],so={class:"panel-heading overflow-h"},io={class:"panel-title heading-sm pull-left"},no={class:"badge badge-u"},lo={class:"margin-right-10"},ro={class:"color-blue text-border text-border-green"},ao=["href"],oo={key:1},co={class:"panel-body"},po={key:0,class:"headline clear-boder-bottom"},go=["innerHTML"],uo={class:"headline clear-boder-bottom"},fo={class:"tag-box tag-box-v1 margin-bottom-40"},mo={class:"thumbnails thumbnail-style margin-bottom-40"},ho={class:"thumbnail-img"},vo={class:"overflow-hidden"},bo=["onClick"],yo=["src","alt"],xo={__name:"ProjectPanel",props:{project:{type:Object,required:!0},labels:{type:Object,default:()=>({time:"时间：",name:"项目名称：",screenshot:"项目截图",sections:{项目简介:"项目简介",项目使用技术:"项目使用技术",项目职责:"项目职责",项目中遇到的问题:"项目中遇到的问题"}})}},emits:["open-lightbox"],setup(e,{emit:t}){const s=e,i=t,n=["项目简介","项目使用技术","项目职责","项目中遇到的问题"],l=ee(()=>{const a=s.project.screenshots||[],c=[];for(let g=0;g<a.length;g+=6)c.push(a.slice(g,g+6));return c});function r(a){const c=(s.project.screenshots||[]).map(g=>({src:"/"+g.src,alt:g.alt}));i("open-lightbox",{images:c,index:a})}return(a,c)=>(C(),P(W,null,[u("div",{id:e.project.id,class:"panel panel-profile"},[u("div",so,[u("h2",io,[u("span",no,"No."+j(e.project.no),1),u("small",null,[Se(j(e.labels.time),1),u("b",null,[u("span",lo,j(e.project.time),1)]),Se(" "+j(e.labels.name)+" ",1),u("b",ro,[e.project.url?(C(),P("a",{key:0,href:e.project.url,target:"_blank"},j(e.project.name),9,ao)):(C(),P("span",oo,j(e.project.name),1))])])])]),u("div",co,[(C(),P(W,null,ce(n,g=>(C(),P(W,{key:g},[e.project[g]?(C(),P("div",po,[u("h4",null,j(e.labels.sections[g]||g),1),u("div",{class:"tag-box tag-box-v1 margin-bottom-40",innerHTML:e.project[g]},null,8,go)])):je("",!0)],64))),64)),u("div",uo,[u("h4",null,j(e.labels.screenshot),1),u("div",fo,[(C(!0),P(W,null,ce(l.value,(g,d)=>(C(),P("div",{key:d,class:"row"},[(C(!0),P(W,null,ce(g,(m,_)=>(C(),P("div",{key:d+"-"+_,class:"col-md-2"},[u("div",mo,[u("div",ho,[u("div",vo,[u("a",{href:"javascript:void(0)",onClick:T=>r(d*6+_)},[u("img",{class:"img-responsive",src:m.src,alt:m.alt},null,8,yo)],8,bo)])])])]))),128))]))),128))])])])],8,to),c[0]||(c[0]=u("br",null,null,-1))],64))}},wo=(e,t)=>{const s=e.__vccOpts||e;for(const[i,n]of t)s[i]=n;return s},So=["aria-label"],jo=["aria-label"],ko=["aria-label"],_o=["src","alt"],Co={class:"cv-lightbox-caption"},Po={class:"cv-lightbox-count"},To={class:"cv-lightbox-alt"},Ao={__name:"Lightbox",props:{images:{type:Array,required:!0},index:{type:Number,required:!0},labels:{type:Object,default:()=>({close:"关闭",prev:"上一张",next:"下一张"})}},emits:["close","prev","next"],setup(e){return(t,s)=>(C(),P("div",{class:"cv-lightbox-mask",onClick:s[3]||(s[3]=Rt(i=>t.$emit("close"),["self"]))},[u("button",{class:"cv-lightbox-close",onClick:s[0]||(s[0]=i=>t.$emit("close")),"aria-label":e.labels.close},"✕",8,So),e.index>0?(C(),P("button",{key:0,class:"cv-lightbox-nav cv-lightbox-prev",onClick:s[1]||(s[1]=i=>t.$emit("prev")),"aria-label":e.labels.prev},"‹",8,jo)):je("",!0),e.index<e.images.length-1?(C(),P("button",{key:1,class:"cv-lightbox-nav cv-lightbox-next",onClick:s[2]||(s[2]=i=>t.$emit("next")),"aria-label":e.labels.next},"›",8,ko)):je("",!0),u("img",{class:"cv-lightbox-img",src:e.images[e.index].src,alt:e.images[e.index].alt},null,8,_o),u("div",Co,[u("span",Po,j(e.index+1)+" / "+j(e.images.length),1),u("span",To,j(e.images[e.index].alt),1)])]))}},Eo=wo(Ao,[["__scopeId","data-v-15a8291f"]]),jt={zh:"《核心系统研发与交付汇编》-杨正合.pdf",en:"Core System R&D and Delivery Portfolio-YangZhenghe.pdf"};function ml(e){return encodeURI(`/${jt[e]||jt.zh}`)}const sn={zh:{title:"个人简历",website:"https://serveryang.github.io",intention:["技术经理","架构师","高级全栈工程师"],sections:["基本信息","个人优势","求职意向","工作经历","项目经历","教育经历","语言能力","个人作品","专业技能"],labels:{name:"姓名",position:"当前职位",workTime:"工作年限",phone:"电话",email:"邮箱",web:"主页",experience:"共",companies:"家公司",languageNote:"开发语言及熟练程度",level:"掌握程度",skill:"技能",description:"说明",print:"下载简历",back:"返回简历"}},en:{title:"Resume",website:"https://serveryang.github.io",intention:["Engineering Manager","Architect","Senior Full-Stack Engineer"],sections:["Basic Information","Professional Strengths","Job Intention","Work Experience","Project Experience","Education","Language Skills","Personal Projects","Professional Skills"],labels:{name:"Name",position:"Current Position",workTime:"Experience",phone:"Phone",email:"Email",web:"Profiles",experience:"",companies:"companies",languageNote:"Programming languages and proficiency",level:"Proficiency",skill:"Skill",description:"Description",print:"Download Resume",back:"Back to CV"}}},Io=new Set(["P","DIV","LI","OL","UL","TR","TABLE","SECTION","H1","H2","H3","H4","H5","H6"]);function Is(e=""){return new DOMParser().parseFromString(`<div id="resume-root">${e}</div>`,"text/html").getElementById("resume-root")}function Ue(e){return((e==null?void 0:e.textContent)||"").replace(/\s+/g," ").trim()}function Mo(e){const t=Is(e);let s="";function i(){s.endsWith(`
`)||(s+=`
`)}function n(l){if(l.nodeType===3){s+=l.nodeValue.replace(/\s+/g," ");return}if(l.nodeType!==1)return;const r=l.tagName;if(!(r==="IMG"||r==="I"||r==="svg")){if(r==="BR"){i();return}r==="LI"&&(i(),s+="• "),l.childNodes.forEach(n),Io.has(r)&&i()}}return n(t),s.split(`
`).map(l=>l.trim()).filter(Boolean).join(`
`)}function Ro(e){const t=Is(e),s=[];let i=null;for(const n of t.querySelectorAll("tr")){const l=n.querySelector("th");l&&(i={name:Ue(l),rows:[]},s.push(i));const r=[...n.querySelectorAll("td")].map(Ue);!i||r.length<2||r[0]==="名称"||r[0]==="Name"||i.rows.push({name:r[0],level:r[1],desc:r.slice(2).join(" ")})}return s.filter(n=>n.rows.length)}function Lo(e){return[...Is(e).querySelectorAll(".funny-boxes")].map(s=>({name:Ue(s.querySelector(".media-heading")),desc:Ue(s.querySelector(".media-body p")),tags:[...s.querySelectorAll(".label")].map(Ue).filter(Boolean),features:[...s.querySelectorAll("small")].map(Ue).filter(Boolean).join(" ")}))}function Fo(e){return[...Is(e).querySelectorAll(".timeline-v2 > li")].map(s=>({time:Ue(s.querySelector(".cbp_tmtime span")),label:Ue(s.querySelectorAll(".cbp_tmtime span")[1]),school:Ue(s.querySelector(".cbp_tmlabel h2")),desc:[...s.querySelectorAll(".cbp_tmlabel p")].map(Ue).filter(Boolean).join(" ")}))}const Oo={class:"resume-print"},No={class:"resume-toolbar"},Do={class:"resume-toolbar-title"},Vo=["href","download"],Wo={class:"resume-sheet"},Bo={class:"num"},zo={class:"resume-name"},Uo={class:"info-grid"},$o={class:"info-label"},Ho={class:"info-value"},qo={key:1,class:"resume-paragraph"},Ko={key:2,class:"chip-row"},Qo={class:"resume-note"},Go={class:"work-list"},Jo={class:"project-title"},Yo={key:0,class:"project-row"},Zo={class:"project-label"},Xo={class:"project-text"},ec={class:"edu-time"},tc={key:0},sc={class:"edu-body"},ic={key:0},nc={class:"resume-note"},lc={class:"resume-table lang-table"},rc={class:"portfolio-head"},ac={key:0},oc={key:0,class:"tag-line"},cc={class:"resume-table"},pc={__name:"ResumePrint",props:{locale:{type:String,default:"zh"}},setup(e){const t=e,s=ee(()=>lt[t.locale]||lt.zh),i=ee(()=>sn[t.locale]||sn.zh),n=ee(()=>s.value.profile),l=ee(()=>s.value.projects),r=ee(()=>s.value.ui),a=["项目简介","项目使用技术","项目职责","项目中遇到的问题"],c=ee(()=>{const A=(n.value.contacts||[]).filter(K=>K.label.includes("@")).map(K=>K.label),q=i.value.labels;return[{label:q.name,value:n.value.name},{label:q.position,value:n.value.position},{label:q.workTime,value:n.value.workTime},{label:q.phone,value:n.value.phone},{label:q.email,value:A.join(" / ")},{label:q.web,value:i.value.website}].filter(K=>K.value)}),g=ee(()=>[i.value.labels.experience,n.value.companies.length,i.value.labels.companies,n.value.workTime].filter(Boolean).join(" ")),d=ee(()=>Ro(s.value.skills)),m=ee(()=>d.value.find(V=>V.name.includes("语言")||/language/i.test(V.name))),_=ee(()=>{var V;return((V=m.value)==null?void 0:V.rows)||[]}),T=ee(()=>d.value.filter(V=>V!==m.value)),H=ee(()=>Lo(s.value.plannings)),F=ee(()=>Fo(s.value.educations)),ne=ee(()=>jt[t.locale]||jt.zh),J=ee(()=>ml(t.locale));function I(){window.location.href=window.location.pathname}return(V,A)=>(C(),P("div",Oo,[u("div",No,[u("span",Do,j(i.value.title),1),u("button",{type:"button",onClick:I},j(i.value.labels.back),1),u("a",{class:"primary",href:J.value,download:ne.value},j(i.value.labels.print),9,Vo)]),u("main",Wo,[(C(!0),P(W,null,ce(i.value.sections,(q,K)=>(C(),P("section",{key:q,class:"resume-section"},[u("h2",null,[u("span",Bo,j(String(K+1).padStart(2,"0")),1),Se(j(q),1)]),K===0?(C(),P(W,{key:0},[u("div",zo,j(n.value.name),1),u("div",Uo,[(C(!0),P(W,null,ce(c.value,L=>(C(),P("div",{key:L.label,class:"info-item"},[u("span",$o,j(L.label),1),u("span",Ho,j(L.value),1)]))),128))])],64)):K===1?(C(),P("p",qo,j(n.value.summary),1)):K===2?(C(),P("div",Ko,[(C(!0),P(W,null,ce(i.value.intention,L=>(C(),P("span",{key:L,class:"chip"},j(L),1))),128))])):K===3?(C(),P(W,{key:3},[u("p",Qo,j(g.value),1),u("ol",Go,[(C(!0),P(W,null,ce(n.value.companies,L=>(C(),P("li",{key:L.name},j(L.name),1))),128))])],64)):K===4?(C(!0),P(W,{key:4},ce(l.value,L=>(C(),P("article",{key:L.id,class:"project-item"},[u("div",Jo,[u("b",null,"No."+j(L.no)+" "+j(L.name.replace(/[《》]/g,"")),1),u("span",null,j(L.time),1)]),(C(),P(W,null,ce(a,se=>(C(),P(W,{key:se},[L[se]?(C(),P("div",Yo,[u("span",Zo,j(r.value.project.sections[se]||se),1),u("div",Xo,j(ps(Mo)(L[se])),1)])):je("",!0)],64))),64))]))),128)):K===5?(C(!0),P(W,{key:5},ce(F.value,(L,se)=>(C(),P("div",{key:se,class:"edu-item"},[u("div",ec,[Se(j(L.time),1),L.label?(C(),P("span",tc," · "+j(L.label),1)):je("",!0)]),u("div",sc,[u("b",null,j(L.school),1),L.desc?(C(),P("p",ic,j(L.desc),1)):je("",!0)])]))),128)):K===6?(C(),P(W,{key:6},[u("p",nc,j(i.value.labels.languageNote),1),u("table",lc,[u("thead",null,[u("tr",null,[u("th",null,j(i.value.labels.skill),1),u("th",null,j(i.value.labels.level),1)])]),u("tbody",null,[(C(!0),P(W,null,ce(_.value,(L,se)=>(C(),P("tr",{key:se},[u("td",null,j(L.name),1),u("td",null,j(L.level),1)]))),128))])])],64)):K===7?(C(!0),P(W,{key:7},ce(H.value,(L,se)=>(C(),P("div",{key:se,class:"portfolio-item"},[u("div",rc,[u("b",null,j(L.name),1),L.features?(C(),P("span",ac,j(L.features),1)):je("",!0)]),u("p",null,j(L.desc),1),L.tags.length?(C(),P("div",oc,j(L.tags.join(" · ")),1)):je("",!0)]))),128)):K===8?(C(!0),P(W,{key:8},ce(T.value,L=>(C(),P("div",{key:L.name,class:"skill-group"},[u("h3",null,j(L.name),1),u("table",cc,[u("thead",null,[u("tr",null,[u("th",null,j(i.value.labels.skill),1),u("th",null,j(i.value.labels.level),1),u("th",null,j(i.value.labels.description),1)])]),u("tbody",null,[(C(!0),P(W,null,ce(L.rows,(se,oe)=>(C(),P("tr",{key:oe},[u("td",null,j(se.name),1),u("td",null,j(se.level),1),u("td",null,j(se.desc),1)]))),128))])])]))),128)):je("",!0)]))),128))])]))}},dc={class:"wrapper boxed-layout container"},gc={class:"header"},uc={class:"breadcrumbs"},fc={class:"container"},mc={class:"pull-left cv-header-title"},hc={style:{color:"#72c02c"}},vc={class:"pull-right breadcrumb language-switcher"},bc=["onClick"],yc={class:"print-entry"},xc=["href","download"],wc={class:"container content profile clear-content-top-bootom"},Sc={class:"row profile-body summary-row"},jc={class:"col-md-9"},kc={class:"profile-bio new-profile-height"},_c={class:"row"},Cc={class:"col-md-3"},Pc=["src","alt"],Tc={class:"col-md-9"},Ac={class:"row"},Ec={class:"col-md-5"},Ic={class:"col-md-7"},Mc=["href"],Rc={class:"row"},Lc={class:"col-md-5"},Fc={class:"col-md-7"},Oc={class:"pti"},Nc={class:"col-md-3"},Dc={class:"panel panel-profile"},Vc={class:"panel-heading overflow-h"},Wc={class:"panel-title heading-sm pull-left"},Bc={class:"panel-body"},zc={class:"list-unstyled social-contacts-v2"},Uc=["href"],$c={key:1},Hc={class:"container content profile clear-content-top-bootom"},qc={class:"row profile-body"},Kc={class:"col-md-12"},Qc={class:"tab-v1"},Gc={class:"nav nav-justified nav-tabs"},Jc={class:"tab-content"},Yc={class:"projects-nav-bar"},Zc={class:"tag-box tag-box-v2"},Xc=["href","onMouseenter","onFocus"],ep={id:"projects"},tp=["innerHTML"],sp=["innerHTML"],ip=["innerHTML"],np={class:"footer-v1"},lp={class:"copyright"},rp={class:"container"},ap={class:"row"},op={class:"col-md-12"},cp={class:"text-center"},pp=["title"],dp={__name:"App",setup(e){const t=new URLSearchParams(window.location.search),s=t.has("print"),i=t.get("lang"),n=Tt(i==="zh"||i==="en"?i:Xa()),l=ee(()=>lt[n.value]),r=ee(()=>l.value.ui),a=ee(()=>l.value.profile),c=ee(()=>l.value.projects),g=ee(()=>l.value.skills),d=ee(()=>l.value.educations),m=ee(()=>l.value.plannings),_=[{code:"zh",label:lt.zh.label},{code:"en",label:lt.en.label}],T=ee(()=>`/${a.value.avatar}`),H=ee(()=>jt[n.value]||jt.zh),F=ee(()=>ml(n.value)),ne=new Date().getFullYear();function J(le){!lt[le]||n.value===le||(n.value=le,eo(le),K(),it())}rs(n,le=>{document.documentElement.lang=lt[le].htmlLang,document.title=lt[le].pageTitle},{immediate:!0});const I=Tt("experiences"),V=Tt(!1),A=Tt({visible:!1,text:"",x:0,y:0});function q(le,B){const R=le.currentTarget.getBoundingClientRect();A.value={visible:!0,text:B,x:R.left+R.width/2,y:R.bottom}}function K(){A.value.visible=!1}function L(){V.value=window.scrollY>400,K()}function se(){window.scrollTo({top:0,behavior:"smooth"})}const oe=Tt({visible:!1,images:[],index:0});function Fe({images:le,index:B}){oe.value={visible:!0,images:le,index:B}}function ct(le){const B=le.target.closest("a[data-fancybox]");if(!B)return;le.preventDefault();const R=[...le.currentTarget.querySelectorAll("a[data-fancybox]")],z=R.map(Q=>{const Pe=Q.querySelector("img");return{src:Q.getAttribute("href"),alt:(Pe==null?void 0:Pe.alt)||Q.getAttribute("title")||r.value.imageFallback}});Fe({images:z,index:R.indexOf(B)})}function it(){oe.value.visible=!1}function pt(le){le.key==="Escape"&&it(),le.key==="ArrowLeft"&&oe.value.index>0&&oe.value.index--,le.key==="ArrowRight"&&oe.value.index<oe.value.images.length-1&&oe.value.index++}return Wn(()=>{document.addEventListener("keydown",pt),window.addEventListener("scroll",L,{passive:!0})}),Bn(()=>{document.removeEventListener("keydown",pt),window.removeEventListener("scroll",L)}),(le,B)=>ps(s)?(C(),as(pc,{key:0,locale:n.value},null,8,["locale"])):(C(),P(W,{key:1},[u("div",dc,[u("div",gc,[u("div",uc,[u("div",fc,[u("h1",mc,[u("b",hc,j(a.value.title),1),u("small",null,j(r.value.versionPrefix)+" "+j(a.value.version),1)]),u("ul",vc,[(C(),P(W,null,ce(_,R=>u("li",{key:R.code,class:ye({active:n.value===R.code})},[u("button",{type:"button",onClick:z=>J(R.code)},j(R.label),9,bc)],2)),64)),u("li",yc,[u("a",{href:F.value,download:H.value},j(r.value.print),9,xc)])])])])]),u("div",wc,[u("div",Sc,[u("div",jc,[u("div",kc,[u("div",_c,[u("div",Cc,[u("img",{class:"avatar",style:{height:"190px","margin-left":"20px"},src:T.value,alt:a.value.name},null,8,Pc)]),u("div",Tc,[u("h2",null,[u("b",null,j(a.value.name),1)]),u("div",Ac,[u("div",Ec,[u("strong",null,j(r.value.workTime),1),Se(j(a.value.workTime),1)]),u("div",Ic,[u("strong",null,j(r.value.companies),1),(C(!0),P(W,null,ce(a.value.companies,(R,z)=>(C(),P(W,{key:z},[R.url?(C(),P("a",{key:0,href:R.url,target:"_blank",class:"company"},j(R.name),9,Mc)):(C(),P(W,{key:1},[Se(j(R.name),1)],64)),z<a.value.companies.length-1?(C(),P(W,{key:2},[Se(" / ")],64)):je("",!0)],64))),128))])]),u("div",Rc,[u("div",Lc,[u("strong",null,j(r.value.position),1),Se(j(a.value.position),1)]),u("div",Fc,[u("strong",null,j(r.value.phone),1),Se(j(a.value.phone),1)])]),B[6]||(B[6]=u("hr",null,null,-1)),u("p",Oc,j(a.value.summary),1),B[7]||(B[7]=u("p",{style:{height:"17px"}},null,-1))])])])]),u("div",Nc,[u("div",Dc,[u("div",Vc,[u("h2",Wc,[B[8]||(B[8]=Se("  ",-1)),B[9]||(B[9]=u("i",{class:"fa fa-paw"},null,-1)),u("small",null,j(r.value.social),1)])]),u("div",Bc,[u("ul",zc,[(C(!0),P(W,null,ce(a.value.contacts,(R,z)=>(C(),P("li",{key:z},[u("i",{class:ye("rounded-x fa "+R.icon)},null,2),R.url?(C(),P("a",{key:0,href:R.url,target:"_blank"},j(R.label),9,Uc)):(C(),P("span",$c,j(R.label),1))]))),128))])])])])])]),B[11]||(B[11]=u("hr",{style:{margin:"0"}},null,-1)),u("div",Hc,[u("div",qc,[u("div",Kc,[u("div",Qc,[u("ul",Gc,[u("li",{class:ye({active:I.value==="experiences"})},[u("a",{"data-toggle":"tab",href:"#experiences",onClick:B[0]||(B[0]=Rt(R=>I.value="experiences",["prevent"]))},j(r.value.tabs.experiences),1)],2),u("li",{class:ye({active:I.value==="skills"})},[u("a",{"data-toggle":"tab",href:"#skills",onClick:B[1]||(B[1]=Rt(R=>I.value="skills",["prevent"]))},j(r.value.tabs.skills),1)],2),u("li",{class:ye({active:I.value==="technology-planning"})},[u("a",{"data-toggle":"tab",href:"#technology-planning",onClick:B[2]||(B[2]=Rt(R=>I.value="technology-planning",["prevent"]))},j(r.value.tabs.technologyPlanning),1)],2),u("li",{class:ye({active:I.value==="education"})},[u("a",{"data-toggle":"tab",href:"#education",onClick:B[3]||(B[3]=Rt(R=>I.value="education",["prevent"]))},j(r.value.tabs.education),1)],2)]),u("div",Jc,[ss(u("div",{class:ye(["profile-edit tab-pane fade",{active:I.value==="experiences",in:I.value==="experiences"}])},[u("div",Yc,[u("div",Zc,[u("p",null,[B[10]||(B[10]=u("span",{class:"glyphicon glyphicon-hand-right"},null,-1)),Se(" "+j(r.value.navLabel)+" ",1),(C(!0),P(W,null,ce(c.value,R=>(C(),P("a",{key:R.id,href:"#"+R.id,class:"tooltips btn-u btn-brd rounded btn-u-xs btn-u-blue",onMouseenter:z=>q(z,R.name.replace(/[《》]/g,"")),onMouseleave:K,onFocus:z=>q(z,R.name.replace(/[《》]/g,"")),onBlur:K},j(R.no),41,Xc))),128))])])]),u("div",ep,[(C(!0),P(W,null,ce(c.value,R=>(C(),as(xo,{key:R.id,project:R,labels:r.value.project,onOpenLightbox:Fe},null,8,["project","labels"]))),128))])],2),[[is,I.value==="experiences"]]),ss(u("div",{class:ye(["profile-edit tab-pane fade",{active:I.value==="skills",in:I.value==="skills"}])},[u("div",{innerHTML:g.value},null,8,tp)],2),[[is,I.value==="skills"]]),ss(u("div",{class:ye(["profile-edit tab-pane fade",{active:I.value==="technology-planning",in:I.value==="technology-planning"}])},[u("div",{innerHTML:m.value},null,8,sp)],2),[[is,I.value==="technology-planning"]]),ss(u("div",{class:ye(["profile-edit tab-pane fade",{active:I.value==="education",in:I.value==="education"}])},[u("div",{innerHTML:d.value,onClick:ct},null,8,ip)],2),[[is,I.value==="education"]])])])])])]),u("div",np,[u("div",lp,[u("div",rp,[u("div",ap,[u("div",op,[u("p",cp,j(r.value.footer(ps(ne))),1)])])])])])]),A.value.visible?(C(),P("div",{key:0,class:"cv-nav-tooltip",style:js({left:A.value.x+"px",top:A.value.y+"px"})},j(A.value.text),5)):je("",!0),oe.value.visible?(C(),as(Eo,{key:1,images:oe.value.images,index:oe.value.index,labels:r.value.lightbox,onClose:it,onPrev:B[4]||(B[4]=R=>oe.value.index--),onNext:B[5]||(B[5]=R=>oe.value.index++)},null,8,["images","index","labels"])):je("",!0),u("div",{class:ye(["back-to-top",{show:V.value}]),title:r.value.backToTop,onClick:se},[...B[12]||(B[12]=[u("i",{class:"fa fa-chevron-up"},null,-1)])],10,pp)],64))}};Wa(dp).mount("#app");
