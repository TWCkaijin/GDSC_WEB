import{o as Fo}from"./idb-BXWtuYvb.js";var Fs={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Jc=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],c=n[e++],l=n[e++],d=((s&7)<<18|(o&63)<<12|(c&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(d>>10)),t[r++]=String.fromCharCode(56320+(d&1023))}else{const o=n[e++],c=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|c&63)}}return t.join("")},Bo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],c=s+1<n.length,l=c?n[s+1]:0,d=s+2<n.length,f=d?n[s+2]:0,_=o>>2,A=(o&3)<<4|l>>4;let R=(l&15)<<2|f>>6,C=f&63;d||(C=64,c||(R=64)),r.push(e[_],e[A],e[R],e[C])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Uo(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Jc(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],l=s<n.length?e[n.charAt(s)]:0;++s;const f=s<n.length?e[n.charAt(s)]:64;++s;const A=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||l==null||f==null||A==null)throw new Zc;const R=o<<2|l>>4;if(r.push(R),f!==64){const C=l<<4&240|f>>2;if(r.push(C),A!==64){const O=f<<6&192|A;r.push(O)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Zc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tu=function(n){const t=Uo(n);return Bo.encodeByteArray(t,!0)},Fn=function(n){return tu(n).replace(/\./g,"")},eu=function(n){try{return Bo.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru=()=>nu().__FIREBASE_DEFAULTS__,iu=()=>{if(typeof process>"u"||typeof Fs>"u")return;const n=Fs.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},su=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&eu(n[1]);return t&&JSON.parse(t)},Qn=()=>{try{return ru()||iu()||su()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ou=n=>{var t,e;return(e=(t=Qn())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},au=n=>{const t=ou(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},qo=()=>{var n;return(n=Qn())===null||n===void 0?void 0:n.config},bp=n=>{var t;return(t=Qn())===null||t===void 0?void 0:t[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uu(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Fn(JSON.stringify(e)),Fn(JSON.stringify(c)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(oi())}function lu(){var n;const t=(n=Qn())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function hu(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Dp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kp(){const n=oi();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function du(){return!lu()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function $o(){try{return typeof indexedDB=="object"}catch{return!1}}function jo(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}function fu(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pu="FirebaseError";class Kt extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=pu,Object.setPrototypeOf(this,Kt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wn.prototype.create)}}class Wn{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],c=o?gu(o,r):"Error",l=`${this.serviceName}: ${c} (${s}).`;return new Kt(s,l,r)}}function gu(n,t){return n.replace(mu,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const mu=/\{\$([^}]+)}/g;function Np(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function Un(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],c=t[s];if(Us(o)&&Us(c)){if(!Un(o,c))return!1}else if(o!==c)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function Us(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Op(n){const t=[];for(const[e,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function xp(n,t){const e=new _u(n,t);return e.subscribe.bind(e)}class _u{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,r){let s;if(t===void 0&&e===void 0&&r===void 0)throw new Error("Missing Observer.");yu(t,["next","error","complete"])?s=t:s={next:t,error:e,complete:r},s.next===void 0&&(s.next=Dr),s.error===void 0&&(s.error=Dr),s.complete===void 0&&(s.complete=Dr);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yu(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function Dr(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vu=1e3,Eu=2,Tu=4*60*60*1e3,Iu=.5;function Bs(n,t=vu,e=Eu){const r=t*Math.pow(e,n),s=Math.round(Iu*r*(Math.random()-.5)*2);return Math.min(Tu,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(n){return n&&n._delegate?n._delegate:n}class Ot{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new cu;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ru(t))try{this.getOrInitializeService({instanceIdentifier:Jt})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=Jt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Jt){return this.instances.has(t)}getOptions(t=Jt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,c]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&c.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const c=this.instances.get(s);return c&&t(c,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Au(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Jt){return this.component?this.component.multipleInstances?t:Jt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Au(n){return n===Jt?void 0:n}function Ru(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new wu(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var B;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(B||(B={}));const Cu={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},Pu=B.INFO,bu={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},Vu=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=bu[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ci{constructor(t){this.name=t,this._logLevel=Pu,this._logHandler=Vu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in B))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Cu[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...t),this._logHandler(this,B.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...t),this._logHandler(this,B.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,B.INFO,...t),this._logHandler(this,B.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,B.WARN,...t),this._logHandler(this,B.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...t),this._logHandler(this,B.ERROR,...t)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(ku(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function ku(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const qr="@firebase/app",qs="0.10.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie=new ci("@firebase/app"),Nu="@firebase/app-compat",Ou="@firebase/analytics-compat",xu="@firebase/analytics",Mu="@firebase/app-check-compat",Lu="@firebase/app-check",Fu="@firebase/auth",Uu="@firebase/auth-compat",Bu="@firebase/database",qu="@firebase/database-compat",$u="@firebase/functions",ju="@firebase/functions-compat",zu="@firebase/installations",Hu="@firebase/installations-compat",Gu="@firebase/messaging",Ku="@firebase/messaging-compat",Qu="@firebase/performance",Wu="@firebase/performance-compat",Yu="@firebase/remote-config",Xu="@firebase/remote-config-compat",Ju="@firebase/storage",Zu="@firebase/storage-compat",tl="@firebase/firestore",el="@firebase/vertexai-preview",nl="@firebase/firestore-compat",rl="firebase",il="10.12.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r="[DEFAULT]",sl={[qr]:"fire-core",[Nu]:"fire-core-compat",[xu]:"fire-analytics",[Ou]:"fire-analytics-compat",[Lu]:"fire-app-check",[Mu]:"fire-app-check-compat",[Fu]:"fire-auth",[Uu]:"fire-auth-compat",[Bu]:"fire-rtdb",[qu]:"fire-rtdb-compat",[$u]:"fire-fn",[ju]:"fire-fn-compat",[zu]:"fire-iid",[Hu]:"fire-iid-compat",[Gu]:"fire-fcm",[Ku]:"fire-fcm-compat",[Qu]:"fire-perf",[Wu]:"fire-perf-compat",[Yu]:"fire-rc",[Xu]:"fire-rc-compat",[Ju]:"fire-gcs",[Zu]:"fire-gcs-compat",[tl]:"fire-fst",[nl]:"fire-fst-compat",[el]:"fire-vertex","fire-js":"fire-js",[rl]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=new Map,ol=new Map,jr=new Map;function $s(n,t){try{n.container.addComponent(t)}catch(e){ie.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function jt(n){const t=n.name;if(jr.has(t))return ie.debug(`There were multiple attempts to register component ${t}.`),!1;jr.set(t,n);for(const e of Bn.values())$s(e,n);for(const e of ol.values())$s(e,n);return!0}function cn(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Mp(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$t=new Wn("app","Firebase",al);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ot("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw $t.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul=il;function ll(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:$r,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw $t.create("bad-app-name",{appName:String(s)});if(e||(e=qo()),!e)throw $t.create("no-options");const o=Bn.get(s);if(o){if(Un(e,o.options)&&Un(r,o.config))return o;throw $t.create("duplicate-app",{appName:s})}const c=new Su(s);for(const d of jr.values())c.addComponent(d);const l=new cl(e,r,c);return Bn.set(s,l),l}function zo(n=$r){const t=Bn.get(n);if(!t&&n===$r&&qo())return ll();if(!t)throw $t.create("no-app",{appName:n});return t}function kt(n,t,e){var r;let s=(r=sl[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),c=t.match(/\s|\//);if(o||c){const l=[`Unable to register library "${s}" with version "${t}":`];o&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&c&&l.push("and"),c&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ie.warn(l.join(" "));return}jt(new Ot(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl="firebase-heartbeat-database",dl=1,en="firebase-heartbeat-store";let kr=null;function Ho(){return kr||(kr=Fo(hl,dl,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(en)}catch(e){console.warn(e)}}}}).catch(n=>{throw $t.create("idb-open",{originalErrorMessage:n.message})})),kr}async function fl(n){try{const e=(await Ho()).transaction(en),r=await e.objectStore(en).get(Go(n));return await e.done,r}catch(t){if(t instanceof Kt)ie.warn(t.message);else{const e=$t.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ie.warn(e.message)}}}async function js(n,t){try{const r=(await Ho()).transaction(en,"readwrite");await r.objectStore(en).put(t,Go(n)),await r.done}catch(e){if(e instanceof Kt)ie.warn(e.message);else{const r=$t.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});ie.warn(r.message)}}}function Go(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl=1024,gl=30*24*60*60*1e3;class ml{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new yl(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=zs();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(c=>c.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(c=>{const l=new Date(c.date).valueOf();return Date.now()-l<=gl}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=zs(),{heartbeatsToSend:r,unsentEntries:s}=_l(this._heartbeatsCache.heartbeats),o=Fn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function zs(){return new Date().toISOString().substring(0,10)}function _l(n,t=pl){const e=[];let r=n.slice();for(const s of n){const o=e.find(c=>c.agent===s.agent);if(o){if(o.dates.push(s.date),Hs(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Hs(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class yl{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $o()?jo().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await fl(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return js(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return js(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Hs(n){return Fn(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(n){jt(new Ot("platform-logger",t=>new Du(t),"PRIVATE")),jt(new Ot("heartbeat",t=>new ml(t),"PRIVATE")),kt(qr,qs,n),kt(qr,qs,"esm2017"),kt("fire-js","")}vl("");const Ko="@firebase/installations",ui="0.6.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo=1e4,Wo=`w:${ui}`,Yo="FIS_v2",El="https://firebaseinstallations.googleapis.com/v1",Tl=60*60*1e3,Il="installations",wl="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},se=new Wn(Il,wl,Al);function Xo(n){return n instanceof Kt&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo({projectId:n}){return`${El}/projects/${n}/installations`}function Zo(n){return{token:n.token,requestStatus:2,expiresIn:Sl(n.expiresIn),creationTime:Date.now()}}async function ta(n,t){const r=(await t.json()).error;return se.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ea({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Rl(n,{refreshToken:t}){const e=ea(n);return e.append("Authorization",Cl(t)),e}async function na(n){const t=await n();return t.status>=500&&t.status<600?n():t}function Sl(n){return Number(n.replace("s","000"))}function Cl(n){return`${Yo} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pl({appConfig:n,heartbeatServiceProvider:t},{fid:e}){const r=Jo(n),s=ea(n),o=t.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const c={fid:e,authVersion:Yo,appId:n.appId,sdkVersion:Wo},l={method:"POST",headers:s,body:JSON.stringify(c)},d=await na(()=>fetch(r,l));if(d.ok){const f=await d.json();return{fid:f.fid||e,registrationStatus:2,refreshToken:f.refreshToken,authToken:Zo(f.authToken)}}else throw await ta("Create Installation",d)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(n){return new Promise(t=>{setTimeout(t,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl=/^[cdef][\w-]{21}$/,zr="";function Dl(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const e=kl(n);return Vl.test(e)?e:zr}catch{return zr}}function kl(n){return bl(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia=new Map;function sa(n,t){const e=Yn(n);oa(e,t),Nl(e,t)}function oa(n,t){const e=ia.get(n);if(e)for(const r of e)r(t)}function Nl(n,t){const e=Ol();e&&e.postMessage({key:n,fid:t}),xl()}let Zt=null;function Ol(){return!Zt&&"BroadcastChannel"in self&&(Zt=new BroadcastChannel("[Firebase] FID Change"),Zt.onmessage=n=>{oa(n.data.key,n.data.fid)}),Zt}function xl(){ia.size===0&&Zt&&(Zt.close(),Zt=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml="firebase-installations-database",Ll=1,oe="firebase-installations-store";let Nr=null;function li(){return Nr||(Nr=Fo(Ml,Ll,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(oe)}}})),Nr}async function qn(n,t){const e=Yn(n),s=(await li()).transaction(oe,"readwrite"),o=s.objectStore(oe),c=await o.get(e);return await o.put(t,e),await s.done,(!c||c.fid!==t.fid)&&sa(n,t.fid),t}async function aa(n){const t=Yn(n),r=(await li()).transaction(oe,"readwrite");await r.objectStore(oe).delete(t),await r.done}async function Xn(n,t){const e=Yn(n),s=(await li()).transaction(oe,"readwrite"),o=s.objectStore(oe),c=await o.get(e),l=t(c);return l===void 0?await o.delete(e):await o.put(l,e),await s.done,l&&(!c||c.fid!==l.fid)&&sa(n,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hi(n){let t;const e=await Xn(n.appConfig,r=>{const s=Fl(r),o=Ul(n,s);return t=o.registrationPromise,o.installationEntry});return e.fid===zr?{installationEntry:await t}:{installationEntry:e,registrationPromise:t}}function Fl(n){const t=n||{fid:Dl(),registrationStatus:0};return ca(t)}function Ul(n,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(se.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const e={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Bl(n,e);return{installationEntry:e,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:ql(n)}:{installationEntry:t}}async function Bl(n,t){try{const e=await Pl(n,t);return qn(n.appConfig,e)}catch(e){throw Xo(e)&&e.customData.serverCode===409?await aa(n.appConfig):await qn(n.appConfig,{fid:t.fid,registrationStatus:0}),e}}async function ql(n){let t=await Gs(n.appConfig);for(;t.registrationStatus===1;)await ra(100),t=await Gs(n.appConfig);if(t.registrationStatus===0){const{installationEntry:e,registrationPromise:r}=await hi(n);return r||e}return t}function Gs(n){return Xn(n,t=>{if(!t)throw se.create("installation-not-found");return ca(t)})}function ca(n){return $l(n)?{fid:n.fid,registrationStatus:0}:n}function $l(n){return n.registrationStatus===1&&n.registrationTime+Qo<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jl({appConfig:n,heartbeatServiceProvider:t},e){const r=zl(n,e),s=Rl(n,e),o=t.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const c={installation:{sdkVersion:Wo,appId:n.appId}},l={method:"POST",headers:s,body:JSON.stringify(c)},d=await na(()=>fetch(r,l));if(d.ok){const f=await d.json();return Zo(f)}else throw await ta("Generate Auth Token",d)}function zl(n,{fid:t}){return`${Jo(n)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function di(n,t=!1){let e;const r=await Xn(n.appConfig,o=>{if(!ua(o))throw se.create("not-registered");const c=o.authToken;if(!t&&Kl(c))return o;if(c.requestStatus===1)return e=Hl(n,t),o;{if(!navigator.onLine)throw se.create("app-offline");const l=Wl(o);return e=Gl(n,l),l}});return e?await e:r.authToken}async function Hl(n,t){let e=await Ks(n.appConfig);for(;e.authToken.requestStatus===1;)await ra(100),e=await Ks(n.appConfig);const r=e.authToken;return r.requestStatus===0?di(n,t):r}function Ks(n){return Xn(n,t=>{if(!ua(t))throw se.create("not-registered");const e=t.authToken;return Yl(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Gl(n,t){try{const e=await jl(n,t),r=Object.assign(Object.assign({},t),{authToken:e});return await qn(n.appConfig,r),e}catch(e){if(Xo(e)&&(e.customData.serverCode===401||e.customData.serverCode===404))await aa(n.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await qn(n.appConfig,r)}throw e}}function ua(n){return n!==void 0&&n.registrationStatus===2}function Kl(n){return n.requestStatus===2&&!Ql(n)}function Ql(n){const t=Date.now();return t<n.creationTime||n.creationTime+n.expiresIn<t+Tl}function Wl(n){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:t})}function Yl(n){return n.requestStatus===1&&n.requestTime+Qo<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xl(n){const t=n,{installationEntry:e,registrationPromise:r}=await hi(t);return r?r.catch(console.error):di(t).catch(console.error),e.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jl(n,t=!1){const e=n;return await Zl(e),(await di(e,t)).token}async function Zl(n){const{registrationPromise:t}=await hi(n);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th(n){if(!n||!n.options)throw Or("App Configuration");if(!n.name)throw Or("App Name");const t=["projectId","apiKey","appId"];for(const e of t)if(!n.options[e])throw Or(e);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Or(n){return se.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la="installations",eh="installations-internal",nh=n=>{const t=n.getProvider("app").getImmediate(),e=th(t),r=cn(t,"heartbeat");return{app:t,appConfig:e,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},rh=n=>{const t=n.getProvider("app").getImmediate(),e=cn(t,la).getImmediate();return{getId:()=>Xl(e),getToken:s=>Jl(e,s)}};function ih(){jt(new Ot(la,nh,"PUBLIC")),jt(new Ot(eh,rh,"PRIVATE"))}ih();kt(Ko,ui);kt(Ko,ui,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n="analytics",sh="firebase_id",oh="origin",ah=60*1e3,ch="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",fi="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt=new ci("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uh={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},It=new Wn("analytics","Analytics",uh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lh(n){if(!n.startsWith(fi)){const t=It.create("invalid-gtag-resource",{gtagURL:n});return vt.warn(t.message),""}return n}function ha(n){return Promise.all(n.map(t=>t.catch(e=>e)))}function hh(n,t){let e;return window.trustedTypes&&(e=window.trustedTypes.createPolicy(n,t)),e}function dh(n,t){const e=hh("firebase-js-sdk-policy",{createScriptURL:lh}),r=document.createElement("script"),s=`${fi}?l=${n}&id=${t}`;r.src=e?e==null?void 0:e.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function fh(n){let t=[];return Array.isArray(window[n])?t=window[n]:window[n]=t,t}async function ph(n,t,e,r,s,o){const c=r[s];try{if(c)await t[c];else{const d=(await ha(e)).find(f=>f.measurementId===s);d&&await t[d.appId]}}catch(l){vt.error(l)}n("config",s,o)}async function gh(n,t,e,r,s){try{let o=[];if(s&&s.send_to){let c=s.send_to;Array.isArray(c)||(c=[c]);const l=await ha(e);for(const d of c){const f=l.find(A=>A.measurementId===d),_=f&&t[f.appId];if(_)o.push(_);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),n("event",r,s||{})}catch(o){vt.error(o)}}function mh(n,t,e,r){async function s(o,...c){try{if(o==="event"){const[l,d]=c;await gh(n,t,e,l,d)}else if(o==="config"){const[l,d]=c;await ph(n,t,e,r,l,d)}else if(o==="consent"){const[l,d]=c;n("consent",l,d)}else if(o==="get"){const[l,d,f]=c;n("get",l,d,f)}else if(o==="set"){const[l]=c;n("set",l)}else n(o,...c)}catch(l){vt.error(l)}}return s}function _h(n,t,e,r,s){let o=function(...c){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(o=window[s]),window[s]=mh(o,n,t,e),{gtagCore:o,wrappedGtag:window[s]}}function yh(n){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(fi)&&e.src.includes(n))return e;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh=30,Eh=1e3;class Th{constructor(t={},e=Eh){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const da=new Th;function Ih(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function wh(n){var t;const{appId:e,apiKey:r}=n,s={method:"GET",headers:Ih(r)},o=ch.replace("{app-id}",e),c=await fetch(o,s);if(c.status!==200&&c.status!==304){let l="";try{const d=await c.json();!((t=d.error)===null||t===void 0)&&t.message&&(l=d.error.message)}catch{}throw It.create("config-fetch-failed",{httpStatus:c.status,responseMessage:l})}return c.json()}async function Ah(n,t=da,e){const{appId:r,apiKey:s,measurementId:o}=n.options;if(!r)throw It.create("no-app-id");if(!s){if(o)return{measurementId:o,appId:r};throw It.create("no-api-key")}const c=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new Ch;return setTimeout(async()=>{l.abort()},ah),fa({appId:r,apiKey:s,measurementId:o},c,l,t)}async function fa(n,{throttleEndTimeMillis:t,backoffCount:e},r,s=da){var o;const{appId:c,measurementId:l}=n;try{await Rh(r,t)}catch(d){if(l)return vt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:c,measurementId:l};throw d}try{const d=await wh(n);return s.deleteThrottleMetadata(c),d}catch(d){const f=d;if(!Sh(f)){if(s.deleteThrottleMetadata(c),l)return vt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:c,measurementId:l};throw d}const _=Number((o=f==null?void 0:f.customData)===null||o===void 0?void 0:o.httpStatus)===503?Bs(e,s.intervalMillis,vh):Bs(e,s.intervalMillis),A={throttleEndTimeMillis:Date.now()+_,backoffCount:e+1};return s.setThrottleMetadata(c,A),vt.debug(`Calling attemptFetch again in ${_} millis`),fa(n,A,r,s)}}function Rh(n,t){return new Promise((e,r)=>{const s=Math.max(t-Date.now(),0),o=setTimeout(e,s);n.addEventListener(()=>{clearTimeout(o),r(It.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Sh(n){if(!(n instanceof Kt)||!n.customData)return!1;const t=Number(n.customData.httpStatus);return t===429||t===500||t===503||t===504}class Ch{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Ph(n,t,e,r,s){if(s&&s.global){n("event",e,r);return}else{const o=await t,c=Object.assign(Object.assign({},r),{send_to:o});n("event",e,c)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bh(){if($o())try{await jo()}catch(n){return vt.warn(It.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return vt.warn(It.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Vh(n,t,e,r,s,o,c){var l;const d=Ah(n);d.then(C=>{e[C.measurementId]=C.appId,n.options.measurementId&&C.measurementId!==n.options.measurementId&&vt.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${C.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(C=>vt.error(C)),t.push(d);const f=bh().then(C=>{if(C)return r.getId()}),[_,A]=await Promise.all([d,f]);yh(o)||dh(o,_.measurementId),s("js",new Date);const R=(l=c==null?void 0:c.config)!==null&&l!==void 0?l:{};return R[oh]="firebase",R.update=!0,A!=null&&(R[sh]=A),s("config",_.measurementId,R),_.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(t){this.app=t}_delete(){return delete Ye[this.app.options.appId],Promise.resolve()}}let Ye={},Qs=[];const Ws={};let xr="dataLayer",kh="gtag",Ys,pa,Xs=!1;function Nh(){const n=[];if(hu()&&n.push("This is a browser extension environment."),fu()||n.push("Cookies are not available."),n.length>0){const t=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),e=It.create("invalid-analytics-context",{errorInfo:t});vt.warn(e.message)}}function Oh(n,t,e){Nh();const r=n.options.appId;if(!r)throw It.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)vt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw It.create("no-api-key");if(Ye[r]!=null)throw It.create("already-exists",{id:r});if(!Xs){fh(xr);const{wrappedGtag:o,gtagCore:c}=_h(Ye,Qs,Ws,xr,kh);pa=o,Ys=c,Xs=!0}return Ye[r]=Vh(n,Qs,Ws,t,Ys,xr,e),new Dh(n)}function Lp(n=zo()){n=ai(n);const t=cn(n,$n);return t.isInitialized()?t.getImmediate():xh(n)}function xh(n,t={}){const e=cn(n,$n);if(e.isInitialized()){const s=e.getImmediate();if(Un(t,e.getOptions()))return s;throw It.create("already-initialized")}return e.initialize({options:t})}function Mh(n,t,e,r){n=ai(n),Ph(pa,Ye[n.app.options.appId],t,e,r).catch(s=>vt.error(s))}const Js="@firebase/analytics",Zs="0.10.7";function Lh(){jt(new Ot($n,(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return Oh(r,s,e)},"PUBLIC")),jt(new Ot("analytics-internal",n,"PRIVATE")),kt(Js,Zs),kt(Js,Zs,"esm2017");function n(t){try{const e=t.getProvider($n).getImmediate();return{logEvent:(r,s,o)=>Mh(e,r,s,o)}}catch(e){throw It.create("interop-component-reg-failed",{reason:e})}}}Lh();var to=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ee,ga;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,p){function m(){}m.prototype=p.prototype,E.D=p.prototype,E.prototype=new m,E.prototype.constructor=E,E.C=function(y,v,I){for(var g=Array(arguments.length-2),bt=2;bt<arguments.length;bt++)g[bt-2]=arguments[bt];return p.prototype[v].apply(y,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,p,m){m||(m=0);var y=Array(16);if(typeof p=="string")for(var v=0;16>v;++v)y[v]=p.charCodeAt(m++)|p.charCodeAt(m++)<<8|p.charCodeAt(m++)<<16|p.charCodeAt(m++)<<24;else for(v=0;16>v;++v)y[v]=p[m++]|p[m++]<<8|p[m++]<<16|p[m++]<<24;p=E.g[0],m=E.g[1],v=E.g[2];var I=E.g[3],g=p+(I^m&(v^I))+y[0]+3614090360&4294967295;p=m+(g<<7&4294967295|g>>>25),g=I+(v^p&(m^v))+y[1]+3905402710&4294967295,I=p+(g<<12&4294967295|g>>>20),g=v+(m^I&(p^m))+y[2]+606105819&4294967295,v=I+(g<<17&4294967295|g>>>15),g=m+(p^v&(I^p))+y[3]+3250441966&4294967295,m=v+(g<<22&4294967295|g>>>10),g=p+(I^m&(v^I))+y[4]+4118548399&4294967295,p=m+(g<<7&4294967295|g>>>25),g=I+(v^p&(m^v))+y[5]+1200080426&4294967295,I=p+(g<<12&4294967295|g>>>20),g=v+(m^I&(p^m))+y[6]+2821735955&4294967295,v=I+(g<<17&4294967295|g>>>15),g=m+(p^v&(I^p))+y[7]+4249261313&4294967295,m=v+(g<<22&4294967295|g>>>10),g=p+(I^m&(v^I))+y[8]+1770035416&4294967295,p=m+(g<<7&4294967295|g>>>25),g=I+(v^p&(m^v))+y[9]+2336552879&4294967295,I=p+(g<<12&4294967295|g>>>20),g=v+(m^I&(p^m))+y[10]+4294925233&4294967295,v=I+(g<<17&4294967295|g>>>15),g=m+(p^v&(I^p))+y[11]+2304563134&4294967295,m=v+(g<<22&4294967295|g>>>10),g=p+(I^m&(v^I))+y[12]+1804603682&4294967295,p=m+(g<<7&4294967295|g>>>25),g=I+(v^p&(m^v))+y[13]+4254626195&4294967295,I=p+(g<<12&4294967295|g>>>20),g=v+(m^I&(p^m))+y[14]+2792965006&4294967295,v=I+(g<<17&4294967295|g>>>15),g=m+(p^v&(I^p))+y[15]+1236535329&4294967295,m=v+(g<<22&4294967295|g>>>10),g=p+(v^I&(m^v))+y[1]+4129170786&4294967295,p=m+(g<<5&4294967295|g>>>27),g=I+(m^v&(p^m))+y[6]+3225465664&4294967295,I=p+(g<<9&4294967295|g>>>23),g=v+(p^m&(I^p))+y[11]+643717713&4294967295,v=I+(g<<14&4294967295|g>>>18),g=m+(I^p&(v^I))+y[0]+3921069994&4294967295,m=v+(g<<20&4294967295|g>>>12),g=p+(v^I&(m^v))+y[5]+3593408605&4294967295,p=m+(g<<5&4294967295|g>>>27),g=I+(m^v&(p^m))+y[10]+38016083&4294967295,I=p+(g<<9&4294967295|g>>>23),g=v+(p^m&(I^p))+y[15]+3634488961&4294967295,v=I+(g<<14&4294967295|g>>>18),g=m+(I^p&(v^I))+y[4]+3889429448&4294967295,m=v+(g<<20&4294967295|g>>>12),g=p+(v^I&(m^v))+y[9]+568446438&4294967295,p=m+(g<<5&4294967295|g>>>27),g=I+(m^v&(p^m))+y[14]+3275163606&4294967295,I=p+(g<<9&4294967295|g>>>23),g=v+(p^m&(I^p))+y[3]+4107603335&4294967295,v=I+(g<<14&4294967295|g>>>18),g=m+(I^p&(v^I))+y[8]+1163531501&4294967295,m=v+(g<<20&4294967295|g>>>12),g=p+(v^I&(m^v))+y[13]+2850285829&4294967295,p=m+(g<<5&4294967295|g>>>27),g=I+(m^v&(p^m))+y[2]+4243563512&4294967295,I=p+(g<<9&4294967295|g>>>23),g=v+(p^m&(I^p))+y[7]+1735328473&4294967295,v=I+(g<<14&4294967295|g>>>18),g=m+(I^p&(v^I))+y[12]+2368359562&4294967295,m=v+(g<<20&4294967295|g>>>12),g=p+(m^v^I)+y[5]+4294588738&4294967295,p=m+(g<<4&4294967295|g>>>28),g=I+(p^m^v)+y[8]+2272392833&4294967295,I=p+(g<<11&4294967295|g>>>21),g=v+(I^p^m)+y[11]+1839030562&4294967295,v=I+(g<<16&4294967295|g>>>16),g=m+(v^I^p)+y[14]+4259657740&4294967295,m=v+(g<<23&4294967295|g>>>9),g=p+(m^v^I)+y[1]+2763975236&4294967295,p=m+(g<<4&4294967295|g>>>28),g=I+(p^m^v)+y[4]+1272893353&4294967295,I=p+(g<<11&4294967295|g>>>21),g=v+(I^p^m)+y[7]+4139469664&4294967295,v=I+(g<<16&4294967295|g>>>16),g=m+(v^I^p)+y[10]+3200236656&4294967295,m=v+(g<<23&4294967295|g>>>9),g=p+(m^v^I)+y[13]+681279174&4294967295,p=m+(g<<4&4294967295|g>>>28),g=I+(p^m^v)+y[0]+3936430074&4294967295,I=p+(g<<11&4294967295|g>>>21),g=v+(I^p^m)+y[3]+3572445317&4294967295,v=I+(g<<16&4294967295|g>>>16),g=m+(v^I^p)+y[6]+76029189&4294967295,m=v+(g<<23&4294967295|g>>>9),g=p+(m^v^I)+y[9]+3654602809&4294967295,p=m+(g<<4&4294967295|g>>>28),g=I+(p^m^v)+y[12]+3873151461&4294967295,I=p+(g<<11&4294967295|g>>>21),g=v+(I^p^m)+y[15]+530742520&4294967295,v=I+(g<<16&4294967295|g>>>16),g=m+(v^I^p)+y[2]+3299628645&4294967295,m=v+(g<<23&4294967295|g>>>9),g=p+(v^(m|~I))+y[0]+4096336452&4294967295,p=m+(g<<6&4294967295|g>>>26),g=I+(m^(p|~v))+y[7]+1126891415&4294967295,I=p+(g<<10&4294967295|g>>>22),g=v+(p^(I|~m))+y[14]+2878612391&4294967295,v=I+(g<<15&4294967295|g>>>17),g=m+(I^(v|~p))+y[5]+4237533241&4294967295,m=v+(g<<21&4294967295|g>>>11),g=p+(v^(m|~I))+y[12]+1700485571&4294967295,p=m+(g<<6&4294967295|g>>>26),g=I+(m^(p|~v))+y[3]+2399980690&4294967295,I=p+(g<<10&4294967295|g>>>22),g=v+(p^(I|~m))+y[10]+4293915773&4294967295,v=I+(g<<15&4294967295|g>>>17),g=m+(I^(v|~p))+y[1]+2240044497&4294967295,m=v+(g<<21&4294967295|g>>>11),g=p+(v^(m|~I))+y[8]+1873313359&4294967295,p=m+(g<<6&4294967295|g>>>26),g=I+(m^(p|~v))+y[15]+4264355552&4294967295,I=p+(g<<10&4294967295|g>>>22),g=v+(p^(I|~m))+y[6]+2734768916&4294967295,v=I+(g<<15&4294967295|g>>>17),g=m+(I^(v|~p))+y[13]+1309151649&4294967295,m=v+(g<<21&4294967295|g>>>11),g=p+(v^(m|~I))+y[4]+4149444226&4294967295,p=m+(g<<6&4294967295|g>>>26),g=I+(m^(p|~v))+y[11]+3174756917&4294967295,I=p+(g<<10&4294967295|g>>>22),g=v+(p^(I|~m))+y[2]+718787259&4294967295,v=I+(g<<15&4294967295|g>>>17),g=m+(I^(v|~p))+y[9]+3951481745&4294967295,E.g[0]=E.g[0]+p&4294967295,E.g[1]=E.g[1]+(v+(g<<21&4294967295|g>>>11))&4294967295,E.g[2]=E.g[2]+v&4294967295,E.g[3]=E.g[3]+I&4294967295}r.prototype.u=function(E,p){p===void 0&&(p=E.length);for(var m=p-this.blockSize,y=this.B,v=this.h,I=0;I<p;){if(v==0)for(;I<=m;)s(this,E,I),I+=this.blockSize;if(typeof E=="string"){for(;I<p;)if(y[v++]=E.charCodeAt(I++),v==this.blockSize){s(this,y),v=0;break}}else for(;I<p;)if(y[v++]=E[I++],v==this.blockSize){s(this,y),v=0;break}}this.h=v,this.o+=p},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var p=1;p<E.length-8;++p)E[p]=0;var m=8*this.o;for(p=E.length-8;p<E.length;++p)E[p]=m&255,m/=256;for(this.u(E),E=Array(16),p=m=0;4>p;++p)for(var y=0;32>y;y+=8)E[m++]=this.g[p]>>>y&255;return E};function o(E,p){var m=l;return Object.prototype.hasOwnProperty.call(m,E)?m[E]:m[E]=p(E)}function c(E,p){this.h=p;for(var m=[],y=!0,v=E.length-1;0<=v;v--){var I=E[v]|0;y&&I==p||(m[v]=I,y=!1)}this.g=m}var l={};function d(E){return-128<=E&&128>E?o(E,function(p){return new c([p|0],0>p?-1:0)}):new c([E|0],0>E?-1:0)}function f(E){if(isNaN(E)||!isFinite(E))return A;if(0>E)return D(f(-E));for(var p=[],m=1,y=0;E>=m;y++)p[y]=E/m|0,m*=4294967296;return new c(p,0)}function _(E,p){if(E.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(E.charAt(0)=="-")return D(_(E.substring(1),p));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=f(Math.pow(p,8)),y=A,v=0;v<E.length;v+=8){var I=Math.min(8,E.length-v),g=parseInt(E.substring(v,v+I),p);8>I?(I=f(Math.pow(p,I)),y=y.j(I).add(f(g))):(y=y.j(m),y=y.add(f(g)))}return y}var A=d(0),R=d(1),C=d(16777216);n=c.prototype,n.m=function(){if(L(this))return-D(this).m();for(var E=0,p=1,m=0;m<this.g.length;m++){var y=this.i(m);E+=(0<=y?y:4294967296+y)*p,p*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(O(this))return"0";if(L(this))return"-"+D(this).toString(E);for(var p=f(Math.pow(E,6)),m=this,y="";;){var v=nt(m,p).g;m=Y(m,v.j(p));var I=((0<m.g.length?m.g[0]:m.h)>>>0).toString(E);if(m=v,O(m))return I+y;for(;6>I.length;)I="0"+I;y=I+y}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function O(E){if(E.h!=0)return!1;for(var p=0;p<E.g.length;p++)if(E.g[p]!=0)return!1;return!0}function L(E){return E.h==-1}n.l=function(E){return E=Y(this,E),L(E)?-1:O(E)?0:1};function D(E){for(var p=E.g.length,m=[],y=0;y<p;y++)m[y]=~E.g[y];return new c(m,~E.h).add(R)}n.abs=function(){return L(this)?D(this):this},n.add=function(E){for(var p=Math.max(this.g.length,E.g.length),m=[],y=0,v=0;v<=p;v++){var I=y+(this.i(v)&65535)+(E.i(v)&65535),g=(I>>>16)+(this.i(v)>>>16)+(E.i(v)>>>16);y=g>>>16,I&=65535,g&=65535,m[v]=g<<16|I}return new c(m,m[m.length-1]&-2147483648?-1:0)};function Y(E,p){return E.add(D(p))}n.j=function(E){if(O(this)||O(E))return A;if(L(this))return L(E)?D(this).j(D(E)):D(D(this).j(E));if(L(E))return D(this.j(D(E)));if(0>this.l(C)&&0>E.l(C))return f(this.m()*E.m());for(var p=this.g.length+E.g.length,m=[],y=0;y<2*p;y++)m[y]=0;for(y=0;y<this.g.length;y++)for(var v=0;v<E.g.length;v++){var I=this.i(y)>>>16,g=this.i(y)&65535,bt=E.i(v)>>>16,Pe=E.i(v)&65535;m[2*y+2*v]+=g*Pe,G(m,2*y+2*v),m[2*y+2*v+1]+=I*Pe,G(m,2*y+2*v+1),m[2*y+2*v+1]+=g*bt,G(m,2*y+2*v+1),m[2*y+2*v+2]+=I*bt,G(m,2*y+2*v+2)}for(y=0;y<p;y++)m[y]=m[2*y+1]<<16|m[2*y];for(y=p;y<2*p;y++)m[y]=0;return new c(m,0)};function G(E,p){for(;(E[p]&65535)!=E[p];)E[p+1]+=E[p]>>>16,E[p]&=65535,p++}function K(E,p){this.g=E,this.h=p}function nt(E,p){if(O(p))throw Error("division by zero");if(O(E))return new K(A,A);if(L(E))return p=nt(D(E),p),new K(D(p.g),D(p.h));if(L(p))return p=nt(E,D(p)),new K(D(p.g),p.h);if(30<E.g.length){if(L(E)||L(p))throw Error("slowDivide_ only works with positive integers.");for(var m=R,y=p;0>=y.l(E);)m=Pt(m),y=Pt(y);var v=it(m,1),I=it(y,1);for(y=it(y,2),m=it(m,2);!O(y);){var g=I.add(y);0>=g.l(E)&&(v=v.add(m),I=g),y=it(y,1),m=it(m,1)}return p=Y(E,v.j(p)),new K(v,p)}for(v=A;0<=E.l(p);){for(m=Math.max(1,Math.floor(E.m()/p.m())),y=Math.ceil(Math.log(m)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),I=f(m),g=I.j(p);L(g)||0<g.l(E);)m-=y,I=f(m),g=I.j(p);O(I)&&(I=R),v=v.add(I),E=Y(E,g)}return new K(v,E)}n.A=function(E){return nt(this,E).h},n.and=function(E){for(var p=Math.max(this.g.length,E.g.length),m=[],y=0;y<p;y++)m[y]=this.i(y)&E.i(y);return new c(m,this.h&E.h)},n.or=function(E){for(var p=Math.max(this.g.length,E.g.length),m=[],y=0;y<p;y++)m[y]=this.i(y)|E.i(y);return new c(m,this.h|E.h)},n.xor=function(E){for(var p=Math.max(this.g.length,E.g.length),m=[],y=0;y<p;y++)m[y]=this.i(y)^E.i(y);return new c(m,this.h^E.h)};function Pt(E){for(var p=E.g.length+1,m=[],y=0;y<p;y++)m[y]=E.i(y)<<1|E.i(y-1)>>>31;return new c(m,E.h)}function it(E,p){var m=p>>5;p%=32;for(var y=E.g.length-m,v=[],I=0;I<y;I++)v[I]=0<p?E.i(I+m)>>>p|E.i(I+m+1)<<32-p:E.i(I+m);return new c(v,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,ga=r,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=f,c.fromString=_,ee=c}).apply(typeof to<"u"?to:typeof self<"u"?self:typeof window<"u"?window:{});var Dn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ma,_a,Ke,ya,xn,Hr,va,Ea,Ta;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,a,u){return i==Array.prototype||i==Object.prototype||(i[a]=u.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Dn=="object"&&Dn];for(var a=0;a<i.length;++a){var u=i[a];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=e(this);function s(i,a){if(a)t:{var u=r;i=i.split(".");for(var h=0;h<i.length-1;h++){var T=i[h];if(!(T in u))break t;u=u[T]}i=i[i.length-1],h=u[i],a=a(h),a!=h&&a!=null&&t(u,i,{configurable:!0,writable:!0,value:a})}}function o(i,a){i instanceof String&&(i+="");var u=0,h=!1,T={next:function(){if(!h&&u<i.length){var w=u++;return{value:a(w,i[w]),done:!1}}return h=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}s("Array.prototype.values",function(i){return i||function(){return o(this,function(a,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},l=this||self;function d(i){var a=typeof i;return a=a!="object"?a:i?Array.isArray(i)?"array":a:"null",a=="array"||a=="object"&&typeof i.length=="number"}function f(i){var a=typeof i;return a=="object"&&i!=null||a=="function"}function _(i,a,u){return i.call.apply(i.bind,arguments)}function A(i,a,u){if(!i)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,h),i.apply(a,T)}}return function(){return i.apply(a,arguments)}}function R(i,a,u){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:A,R.apply(null,arguments)}function C(i,a){var u=Array.prototype.slice.call(arguments,1);return function(){var h=u.slice();return h.push.apply(h,arguments),i.apply(this,h)}}function O(i,a){function u(){}u.prototype=a.prototype,i.aa=a.prototype,i.prototype=new u,i.prototype.constructor=i,i.Qb=function(h,T,w){for(var P=Array(arguments.length-2),z=2;z<arguments.length;z++)P[z-2]=arguments[z];return a.prototype[T].apply(h,P)}}function L(i){const a=i.length;if(0<a){const u=Array(a);for(let h=0;h<a;h++)u[h]=i[h];return u}return[]}function D(i,a){for(let u=1;u<arguments.length;u++){const h=arguments[u];if(d(h)){const T=i.length||0,w=h.length||0;i.length=T+w;for(let P=0;P<w;P++)i[T+P]=h[P]}else i.push(h)}}class Y{constructor(a,u){this.i=a,this.j=u,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function G(i){return/^[\s\xa0]*$/.test(i)}function K(){var i=l.navigator;return i&&(i=i.userAgent)?i:""}function nt(i){return nt[" "](i),i}nt[" "]=function(){};var Pt=K().indexOf("Gecko")!=-1&&!(K().toLowerCase().indexOf("webkit")!=-1&&K().indexOf("Edge")==-1)&&!(K().indexOf("Trident")!=-1||K().indexOf("MSIE")!=-1)&&K().indexOf("Edge")==-1;function it(i,a,u){for(const h in i)a.call(u,i[h],h,i)}function E(i,a){for(const u in i)a.call(void 0,i[u],u,i)}function p(i){const a={};for(const u in i)a[u]=i[u];return a}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(i,a){let u,h;for(let T=1;T<arguments.length;T++){h=arguments[T];for(u in h)i[u]=h[u];for(let w=0;w<m.length;w++)u=m[w],Object.prototype.hasOwnProperty.call(h,u)&&(i[u]=h[u])}}function v(i){var a=1;i=i.split(":");const u=[];for(;0<a&&i.length;)u.push(i.shift()),a--;return i.length&&u.push(i.join(":")),u}function I(i){l.setTimeout(()=>{throw i},0)}function g(){var i=ar;let a=null;return i.g&&(a=i.g,i.g=i.g.next,i.g||(i.h=null),a.next=null),a}class bt{constructor(){this.h=this.g=null}add(a,u){const h=Pe.get();h.set(a,u),this.h?this.h.next=h:this.g=h,this.h=h}}var Pe=new Y(()=>new _c,i=>i.reset());class _c{constructor(){this.next=this.g=this.h=null}set(a,u){this.h=a,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let be,Ve=!1,ar=new bt,Fi=()=>{const i=l.Promise.resolve(void 0);be=()=>{i.then(yc)}};var yc=()=>{for(var i;i=g();){try{i.h.call(i.g)}catch(u){I(u)}var a=Pe;a.j(i),100>a.h&&(a.h++,i.next=a.g,a.g=i)}Ve=!1};function Mt(){this.s=this.s,this.C=this.C}Mt.prototype.s=!1,Mt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Mt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ut(i,a){this.type=i,this.g=this.target=a,this.defaultPrevented=!1}ut.prototype.h=function(){this.defaultPrevented=!0};var vc=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var i=!1,a=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const u=()=>{};l.addEventListener("test",u,a),l.removeEventListener("test",u,a)}catch{}return i}();function De(i,a){if(ut.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var u=this.type=i.type,h=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=a,a=i.relatedTarget){if(Pt){t:{try{nt(a.nodeName);var T=!0;break t}catch{}T=!1}T||(a=null)}}else u=="mouseover"?a=i.fromElement:u=="mouseout"&&(a=i.toElement);this.relatedTarget=a,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Ec[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&De.aa.h.call(this)}}O(De,ut);var Ec={2:"touch",3:"pen",4:"mouse"};De.prototype.h=function(){De.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var fn="closure_listenable_"+(1e6*Math.random()|0),Tc=0;function Ic(i,a,u,h,T){this.listener=i,this.proxy=null,this.src=a,this.type=u,this.capture=!!h,this.ha=T,this.key=++Tc,this.da=this.fa=!1}function pn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function gn(i){this.src=i,this.g={},this.h=0}gn.prototype.add=function(i,a,u,h,T){var w=i.toString();i=this.g[w],i||(i=this.g[w]=[],this.h++);var P=ur(i,a,h,T);return-1<P?(a=i[P],u||(a.fa=!1)):(a=new Ic(a,this.src,w,!!h,T),a.fa=u,i.push(a)),a};function cr(i,a){var u=a.type;if(u in i.g){var h=i.g[u],T=Array.prototype.indexOf.call(h,a,void 0),w;(w=0<=T)&&Array.prototype.splice.call(h,T,1),w&&(pn(a),i.g[u].length==0&&(delete i.g[u],i.h--))}}function ur(i,a,u,h){for(var T=0;T<i.length;++T){var w=i[T];if(!w.da&&w.listener==a&&w.capture==!!u&&w.ha==h)return T}return-1}var lr="closure_lm_"+(1e6*Math.random()|0),hr={};function Ui(i,a,u,h,T){if(Array.isArray(a)){for(var w=0;w<a.length;w++)Ui(i,a[w],u,h,T);return null}return u=$i(u),i&&i[fn]?i.K(a,u,f(h)?!!h.capture:!!h,T):wc(i,a,u,!1,h,T)}function wc(i,a,u,h,T,w){if(!a)throw Error("Invalid event type");var P=f(T)?!!T.capture:!!T,z=fr(i);if(z||(i[lr]=z=new gn(i)),u=z.add(a,u,h,P,w),u.proxy)return u;if(h=Ac(),u.proxy=h,h.src=i,h.listener=u,i.addEventListener)vc||(T=P),T===void 0&&(T=!1),i.addEventListener(a.toString(),h,T);else if(i.attachEvent)i.attachEvent(qi(a.toString()),h);else if(i.addListener&&i.removeListener)i.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return u}function Ac(){function i(u){return a.call(i.src,i.listener,u)}const a=Rc;return i}function Bi(i,a,u,h,T){if(Array.isArray(a))for(var w=0;w<a.length;w++)Bi(i,a[w],u,h,T);else h=f(h)?!!h.capture:!!h,u=$i(u),i&&i[fn]?(i=i.i,a=String(a).toString(),a in i.g&&(w=i.g[a],u=ur(w,u,h,T),-1<u&&(pn(w[u]),Array.prototype.splice.call(w,u,1),w.length==0&&(delete i.g[a],i.h--)))):i&&(i=fr(i))&&(a=i.g[a.toString()],i=-1,a&&(i=ur(a,u,h,T)),(u=-1<i?a[i]:null)&&dr(u))}function dr(i){if(typeof i!="number"&&i&&!i.da){var a=i.src;if(a&&a[fn])cr(a.i,i);else{var u=i.type,h=i.proxy;a.removeEventListener?a.removeEventListener(u,h,i.capture):a.detachEvent?a.detachEvent(qi(u),h):a.addListener&&a.removeListener&&a.removeListener(h),(u=fr(a))?(cr(u,i),u.h==0&&(u.src=null,a[lr]=null)):pn(i)}}}function qi(i){return i in hr?hr[i]:hr[i]="on"+i}function Rc(i,a){if(i.da)i=!0;else{a=new De(a,this);var u=i.listener,h=i.ha||i.src;i.fa&&dr(i),i=u.call(h,a)}return i}function fr(i){return i=i[lr],i instanceof gn?i:null}var pr="__closure_events_fn_"+(1e9*Math.random()>>>0);function $i(i){return typeof i=="function"?i:(i[pr]||(i[pr]=function(a){return i.handleEvent(a)}),i[pr])}function lt(){Mt.call(this),this.i=new gn(this),this.M=this,this.F=null}O(lt,Mt),lt.prototype[fn]=!0,lt.prototype.removeEventListener=function(i,a,u,h){Bi(this,i,a,u,h)};function mt(i,a){var u,h=i.F;if(h)for(u=[];h;h=h.F)u.push(h);if(i=i.M,h=a.type||a,typeof a=="string")a=new ut(a,i);else if(a instanceof ut)a.target=a.target||i;else{var T=a;a=new ut(h,i),y(a,T)}if(T=!0,u)for(var w=u.length-1;0<=w;w--){var P=a.g=u[w];T=mn(P,h,!0,a)&&T}if(P=a.g=i,T=mn(P,h,!0,a)&&T,T=mn(P,h,!1,a)&&T,u)for(w=0;w<u.length;w++)P=a.g=u[w],T=mn(P,h,!1,a)&&T}lt.prototype.N=function(){if(lt.aa.N.call(this),this.i){var i=this.i,a;for(a in i.g){for(var u=i.g[a],h=0;h<u.length;h++)pn(u[h]);delete i.g[a],i.h--}}this.F=null},lt.prototype.K=function(i,a,u,h){return this.i.add(String(i),a,!1,u,h)},lt.prototype.L=function(i,a,u,h){return this.i.add(String(i),a,!0,u,h)};function mn(i,a,u,h){if(a=i.i.g[String(a)],!a)return!0;a=a.concat();for(var T=!0,w=0;w<a.length;++w){var P=a[w];if(P&&!P.da&&P.capture==u){var z=P.listener,st=P.ha||P.src;P.fa&&cr(i.i,P),T=z.call(st,h)!==!1&&T}}return T&&!h.defaultPrevented}function ji(i,a,u){if(typeof i=="function")u&&(i=R(i,u));else if(i&&typeof i.handleEvent=="function")i=R(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:l.setTimeout(i,a||0)}function zi(i){i.g=ji(()=>{i.g=null,i.i&&(i.i=!1,zi(i))},i.l);const a=i.h;i.h=null,i.m.apply(null,a)}class Sc extends Mt{constructor(a,u){super(),this.m=a,this.l=u,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:zi(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ke(i){Mt.call(this),this.h=i,this.g={}}O(ke,Mt);var Hi=[];function Gi(i){it(i.g,function(a,u){this.g.hasOwnProperty(u)&&dr(a)},i),i.g={}}ke.prototype.N=function(){ke.aa.N.call(this),Gi(this)},ke.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var gr=l.JSON.stringify,Cc=l.JSON.parse,Pc=class{stringify(i){return l.JSON.stringify(i,void 0)}parse(i){return l.JSON.parse(i,void 0)}};function mr(){}mr.prototype.h=null;function Ki(i){return i.h||(i.h=i.i())}function Qi(){}var Ne={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function _r(){ut.call(this,"d")}O(_r,ut);function yr(){ut.call(this,"c")}O(yr,ut);var Qt={},Wi=null;function _n(){return Wi=Wi||new lt}Qt.La="serverreachability";function Yi(i){ut.call(this,Qt.La,i)}O(Yi,ut);function Oe(i){const a=_n();mt(a,new Yi(a))}Qt.STAT_EVENT="statevent";function Xi(i,a){ut.call(this,Qt.STAT_EVENT,i),this.stat=a}O(Xi,ut);function _t(i){const a=_n();mt(a,new Xi(a,i))}Qt.Ma="timingevent";function Ji(i,a){ut.call(this,Qt.Ma,i),this.size=a}O(Ji,ut);function xe(i,a){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){i()},a)}function Me(){this.g=!0}Me.prototype.xa=function(){this.g=!1};function bc(i,a,u,h,T,w){i.info(function(){if(i.g)if(w)for(var P="",z=w.split("&"),st=0;st<z.length;st++){var $=z[st].split("=");if(1<$.length){var ht=$[0];$=$[1];var dt=ht.split("_");P=2<=dt.length&&dt[1]=="type"?P+(ht+"="+$+"&"):P+(ht+"=redacted&")}}else P=null;else P=w;return"XMLHTTP REQ ("+h+") [attempt "+T+"]: "+a+`
`+u+`
`+P})}function Vc(i,a,u,h,T,w,P){i.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+T+"]: "+a+`
`+u+`
`+w+" "+P})}function le(i,a,u,h){i.info(function(){return"XMLHTTP TEXT ("+a+"): "+kc(i,u)+(h?" "+h:"")})}function Dc(i,a){i.info(function(){return"TIMEOUT: "+a})}Me.prototype.info=function(){};function kc(i,a){if(!i.g)return a;if(!a)return null;try{var u=JSON.parse(a);if(u){for(i=0;i<u.length;i++)if(Array.isArray(u[i])){var h=u[i];if(!(2>h.length)){var T=h[1];if(Array.isArray(T)&&!(1>T.length)){var w=T[0];if(w!="noop"&&w!="stop"&&w!="close")for(var P=1;P<T.length;P++)T[P]=""}}}}return gr(u)}catch{return a}}var yn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Zi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},vr;function vn(){}O(vn,mr),vn.prototype.g=function(){return new XMLHttpRequest},vn.prototype.i=function(){return{}},vr=new vn;function Lt(i,a,u,h){this.j=i,this.i=a,this.l=u,this.R=h||1,this.U=new ke(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ts}function ts(){this.i=null,this.g="",this.h=!1}var es={},Er={};function Tr(i,a,u){i.L=1,i.v=wn(Vt(a)),i.m=u,i.P=!0,ns(i,null)}function ns(i,a){i.F=Date.now(),En(i),i.A=Vt(i.v);var u=i.A,h=i.R;Array.isArray(h)||(h=[String(h)]),ms(u.i,"t",h),i.C=0,u=i.j.J,i.h=new ts,i.g=Os(i.j,u?a:null,!i.m),0<i.O&&(i.M=new Sc(R(i.Y,i,i.g),i.O)),a=i.U,u=i.g,h=i.ca;var T="readystatechange";Array.isArray(T)||(T&&(Hi[0]=T.toString()),T=Hi);for(var w=0;w<T.length;w++){var P=Ui(u,T[w],h||a.handleEvent,!1,a.h||a);if(!P)break;a.g[P.key]=P}a=i.H?p(i.H):{},i.m?(i.u||(i.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,a)):(i.u="GET",i.g.ea(i.A,i.u,null,a)),Oe(),bc(i.i,i.u,i.A,i.l,i.R,i.m)}Lt.prototype.ca=function(i){i=i.target;const a=this.M;a&&Dt(i)==3?a.j():this.Y(i)},Lt.prototype.Y=function(i){try{if(i==this.g)t:{const dt=Dt(this.g);var a=this.g.Ba();const fe=this.g.Z();if(!(3>dt)&&(dt!=3||this.g&&(this.h.h||this.g.oa()||ws(this.g)))){this.J||dt!=4||a==7||(a==8||0>=fe?Oe(3):Oe(2)),Ir(this);var u=this.g.Z();this.X=u;e:if(rs(this)){var h=ws(this.g);i="";var T=h.length,w=Dt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Wt(this),Le(this);var P="";break e}this.h.i=new l.TextDecoder}for(a=0;a<T;a++)this.h.h=!0,i+=this.h.i.decode(h[a],{stream:!(w&&a==T-1)});h.length=0,this.h.g+=i,this.C=0,P=this.h.g}else P=this.g.oa();if(this.o=u==200,Vc(this.i,this.u,this.A,this.l,this.R,dt,u),this.o){if(this.T&&!this.K){e:{if(this.g){var z,st=this.g;if((z=st.g?st.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(z)){var $=z;break e}}$=null}if(u=$)le(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,wr(this,u);else{this.o=!1,this.s=3,_t(12),Wt(this),Le(this);break t}}if(this.P){u=!0;let wt;for(;!this.J&&this.C<P.length;)if(wt=Nc(this,P),wt==Er){dt==4&&(this.s=4,_t(14),u=!1),le(this.i,this.l,null,"[Incomplete Response]");break}else if(wt==es){this.s=4,_t(15),le(this.i,this.l,P,"[Invalid Chunk]"),u=!1;break}else le(this.i,this.l,wt,null),wr(this,wt);if(rs(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),dt!=4||P.length!=0||this.h.h||(this.s=1,_t(16),u=!1),this.o=this.o&&u,!u)le(this.i,this.l,P,"[Invalid Chunked Response]"),Wt(this),Le(this);else if(0<P.length&&!this.W){this.W=!0;var ht=this.j;ht.g==this&&ht.ba&&!ht.M&&(ht.j.info("Great, no buffering proxy detected. Bytes received: "+P.length),br(ht),ht.M=!0,_t(11))}}else le(this.i,this.l,P,null),wr(this,P);dt==4&&Wt(this),this.o&&!this.J&&(dt==4?Vs(this.j,this):(this.o=!1,En(this)))}else Yc(this.g),u==400&&0<P.indexOf("Unknown SID")?(this.s=3,_t(12)):(this.s=0,_t(13)),Wt(this),Le(this)}}}catch{}finally{}};function rs(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function Nc(i,a){var u=i.C,h=a.indexOf(`
`,u);return h==-1?Er:(u=Number(a.substring(u,h)),isNaN(u)?es:(h+=1,h+u>a.length?Er:(a=a.slice(h,h+u),i.C=h+u,a)))}Lt.prototype.cancel=function(){this.J=!0,Wt(this)};function En(i){i.S=Date.now()+i.I,is(i,i.I)}function is(i,a){if(i.B!=null)throw Error("WatchDog timer not null");i.B=xe(R(i.ba,i),a)}function Ir(i){i.B&&(l.clearTimeout(i.B),i.B=null)}Lt.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(Dc(this.i,this.A),this.L!=2&&(Oe(),_t(17)),Wt(this),this.s=2,Le(this)):is(this,this.S-i)};function Le(i){i.j.G==0||i.J||Vs(i.j,i)}function Wt(i){Ir(i);var a=i.M;a&&typeof a.ma=="function"&&a.ma(),i.M=null,Gi(i.U),i.g&&(a=i.g,i.g=null,a.abort(),a.ma())}function wr(i,a){try{var u=i.j;if(u.G!=0&&(u.g==i||Ar(u.h,i))){if(!i.K&&Ar(u.h,i)&&u.G==3){try{var h=u.Da.g.parse(a)}catch{h=null}if(Array.isArray(h)&&h.length==3){var T=h;if(T[0]==0){t:if(!u.u){if(u.g)if(u.g.F+3e3<i.F)Pn(u),Sn(u);else break t;Pr(u),_t(18)}}else u.za=T[1],0<u.za-u.T&&37500>T[2]&&u.F&&u.v==0&&!u.C&&(u.C=xe(R(u.Za,u),6e3));if(1>=as(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else Xt(u,11)}else if((i.K||u.g==i)&&Pn(u),!G(a))for(T=u.Da.g.parse(a),a=0;a<T.length;a++){let $=T[a];if(u.T=$[0],$=$[1],u.G==2)if($[0]=="c"){u.K=$[1],u.ia=$[2];const ht=$[3];ht!=null&&(u.la=ht,u.j.info("VER="+u.la));const dt=$[4];dt!=null&&(u.Aa=dt,u.j.info("SVER="+u.Aa));const fe=$[5];fe!=null&&typeof fe=="number"&&0<fe&&(h=1.5*fe,u.L=h,u.j.info("backChannelRequestTimeoutMs_="+h)),h=u;const wt=i.g;if(wt){const Vn=wt.g?wt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Vn){var w=h.h;w.g||Vn.indexOf("spdy")==-1&&Vn.indexOf("quic")==-1&&Vn.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(Rr(w,w.h),w.h=null))}if(h.D){const Vr=wt.g?wt.g.getResponseHeader("X-HTTP-Session-Id"):null;Vr&&(h.ya=Vr,H(h.I,h.D,Vr))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-i.F,u.j.info("Handshake RTT: "+u.R+"ms")),h=u;var P=i;if(h.qa=Ns(h,h.J?h.ia:null,h.W),P.K){cs(h.h,P);var z=P,st=h.L;st&&(z.I=st),z.B&&(Ir(z),En(z)),h.g=P}else Ps(h);0<u.i.length&&Cn(u)}else $[0]!="stop"&&$[0]!="close"||Xt(u,7);else u.G==3&&($[0]=="stop"||$[0]=="close"?$[0]=="stop"?Xt(u,7):Cr(u):$[0]!="noop"&&u.l&&u.l.ta($),u.v=0)}}Oe(4)}catch{}}var Oc=class{constructor(i,a){this.g=i,this.map=a}};function ss(i){this.l=i||10,l.PerformanceNavigationTiming?(i=l.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function os(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function as(i){return i.h?1:i.g?i.g.size:0}function Ar(i,a){return i.h?i.h==a:i.g?i.g.has(a):!1}function Rr(i,a){i.g?i.g.add(a):i.h=a}function cs(i,a){i.h&&i.h==a?i.h=null:i.g&&i.g.has(a)&&i.g.delete(a)}ss.prototype.cancel=function(){if(this.i=us(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function us(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let a=i.i;for(const u of i.g.values())a=a.concat(u.D);return a}return L(i.i)}function xc(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(d(i)){for(var a=[],u=i.length,h=0;h<u;h++)a.push(i[h]);return a}a=[],u=0;for(h in i)a[u++]=i[h];return a}function Mc(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(d(i)||typeof i=="string"){var a=[];i=i.length;for(var u=0;u<i;u++)a.push(u);return a}a=[],u=0;for(const h in i)a[u++]=h;return a}}}function ls(i,a){if(i.forEach&&typeof i.forEach=="function")i.forEach(a,void 0);else if(d(i)||typeof i=="string")Array.prototype.forEach.call(i,a,void 0);else for(var u=Mc(i),h=xc(i),T=h.length,w=0;w<T;w++)a.call(void 0,h[w],u&&u[w],i)}var hs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Lc(i,a){if(i){i=i.split("&");for(var u=0;u<i.length;u++){var h=i[u].indexOf("="),T=null;if(0<=h){var w=i[u].substring(0,h);T=i[u].substring(h+1)}else w=i[u];a(w,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function Yt(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof Yt){this.h=i.h,Tn(this,i.j),this.o=i.o,this.g=i.g,In(this,i.s),this.l=i.l;var a=i.i,u=new Be;u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),ds(this,u),this.m=i.m}else i&&(a=String(i).match(hs))?(this.h=!1,Tn(this,a[1]||"",!0),this.o=Fe(a[2]||""),this.g=Fe(a[3]||"",!0),In(this,a[4]),this.l=Fe(a[5]||"",!0),ds(this,a[6]||"",!0),this.m=Fe(a[7]||"")):(this.h=!1,this.i=new Be(null,this.h))}Yt.prototype.toString=function(){var i=[],a=this.j;a&&i.push(Ue(a,fs,!0),":");var u=this.g;return(u||a=="file")&&(i.push("//"),(a=this.o)&&i.push(Ue(a,fs,!0),"@"),i.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&i.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&i.push("/"),i.push(Ue(u,u.charAt(0)=="/"?Bc:Uc,!0))),(u=this.i.toString())&&i.push("?",u),(u=this.m)&&i.push("#",Ue(u,$c)),i.join("")};function Vt(i){return new Yt(i)}function Tn(i,a,u){i.j=u?Fe(a,!0):a,i.j&&(i.j=i.j.replace(/:$/,""))}function In(i,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);i.s=a}else i.s=null}function ds(i,a,u){a instanceof Be?(i.i=a,jc(i.i,i.h)):(u||(a=Ue(a,qc)),i.i=new Be(a,i.h))}function H(i,a,u){i.i.set(a,u)}function wn(i){return H(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Fe(i,a){return i?a?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Ue(i,a,u){return typeof i=="string"?(i=encodeURI(i).replace(a,Fc),u&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Fc(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var fs=/[#\/\?@]/g,Uc=/[#\?:]/g,Bc=/[#\?]/g,qc=/[#\?@]/g,$c=/#/g;function Be(i,a){this.h=this.g=null,this.i=i||null,this.j=!!a}function Ft(i){i.g||(i.g=new Map,i.h=0,i.i&&Lc(i.i,function(a,u){i.add(decodeURIComponent(a.replace(/\+/g," ")),u)}))}n=Be.prototype,n.add=function(i,a){Ft(this),this.i=null,i=he(this,i);var u=this.g.get(i);return u||this.g.set(i,u=[]),u.push(a),this.h+=1,this};function ps(i,a){Ft(i),a=he(i,a),i.g.has(a)&&(i.i=null,i.h-=i.g.get(a).length,i.g.delete(a))}function gs(i,a){return Ft(i),a=he(i,a),i.g.has(a)}n.forEach=function(i,a){Ft(this),this.g.forEach(function(u,h){u.forEach(function(T){i.call(a,T,h,this)},this)},this)},n.na=function(){Ft(this);const i=Array.from(this.g.values()),a=Array.from(this.g.keys()),u=[];for(let h=0;h<a.length;h++){const T=i[h];for(let w=0;w<T.length;w++)u.push(a[h])}return u},n.V=function(i){Ft(this);let a=[];if(typeof i=="string")gs(this,i)&&(a=a.concat(this.g.get(he(this,i))));else{i=Array.from(this.g.values());for(let u=0;u<i.length;u++)a=a.concat(i[u])}return a},n.set=function(i,a){return Ft(this),this.i=null,i=he(this,i),gs(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[a]),this.h+=1,this},n.get=function(i,a){return i?(i=this.V(i),0<i.length?String(i[0]):a):a};function ms(i,a,u){ps(i,a),0<u.length&&(i.i=null,i.g.set(he(i,a),L(u)),i.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],a=Array.from(this.g.keys());for(var u=0;u<a.length;u++){var h=a[u];const w=encodeURIComponent(String(h)),P=this.V(h);for(h=0;h<P.length;h++){var T=w;P[h]!==""&&(T+="="+encodeURIComponent(String(P[h]))),i.push(T)}}return this.i=i.join("&")};function he(i,a){return a=String(a),i.j&&(a=a.toLowerCase()),a}function jc(i,a){a&&!i.j&&(Ft(i),i.i=null,i.g.forEach(function(u,h){var T=h.toLowerCase();h!=T&&(ps(this,h),ms(this,T,u))},i)),i.j=a}function zc(i,a){const u=new Me;if(l.Image){const h=new Image;h.onload=C(Ut,u,"TestLoadImage: loaded",!0,a,h),h.onerror=C(Ut,u,"TestLoadImage: error",!1,a,h),h.onabort=C(Ut,u,"TestLoadImage: abort",!1,a,h),h.ontimeout=C(Ut,u,"TestLoadImage: timeout",!1,a,h),l.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=i}else a(!1)}function Hc(i,a){const u=new Me,h=new AbortController,T=setTimeout(()=>{h.abort(),Ut(u,"TestPingServer: timeout",!1,a)},1e4);fetch(i,{signal:h.signal}).then(w=>{clearTimeout(T),w.ok?Ut(u,"TestPingServer: ok",!0,a):Ut(u,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(T),Ut(u,"TestPingServer: error",!1,a)})}function Ut(i,a,u,h,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),h(u)}catch{}}function Gc(){this.g=new Pc}function Kc(i,a,u){const h=u||"";try{ls(i,function(T,w){let P=T;f(T)&&(P=gr(T)),a.push(h+w+"="+encodeURIComponent(P))})}catch(T){throw a.push(h+"type="+encodeURIComponent("_badmap")),T}}function qe(i){this.l=i.Ub||null,this.j=i.eb||!1}O(qe,mr),qe.prototype.g=function(){return new An(this.l,this.j)},qe.prototype.i=function(i){return function(){return i}}({});function An(i,a){lt.call(this),this.D=i,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}O(An,lt),n=An.prototype,n.open=function(i,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=a,this.readyState=1,je(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(a.body=i),(this.D||l).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$e(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,je(this)),this.g&&(this.readyState=3,je(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;_s(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function _s(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var a=i.value?i.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!i.done}))&&(this.response=this.responseText+=a)}i.done?$e(this):je(this),this.readyState==3&&_s(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,$e(this))},n.Qa=function(i){this.g&&(this.response=i,$e(this))},n.ga=function(){this.g&&$e(this)};function $e(i){i.readyState=4,i.l=null,i.j=null,i.v=null,je(i)}n.setRequestHeader=function(i,a){this.u.append(i,a)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],a=this.h.entries();for(var u=a.next();!u.done;)u=u.value,i.push(u[0]+": "+u[1]),u=a.next();return i.join(`\r
`)};function je(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(An.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function ys(i){let a="";return it(i,function(u,h){a+=h,a+=":",a+=u,a+=`\r
`}),a}function Sr(i,a,u){t:{for(h in u){var h=!1;break t}h=!0}h||(u=ys(u),typeof i=="string"?u!=null&&encodeURIComponent(String(u)):H(i,a,u))}function Q(i){lt.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}O(Q,lt);var Qc=/^https?$/i,Wc=["POST","PUT"];n=Q.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,a,u,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);a=a?a.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():vr.g(),this.v=this.o?Ki(this.o):Ki(vr),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(a,String(i),!0),this.B=!1}catch(w){vs(this,w);return}if(i=u||"",u=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var T in h)u.set(T,h[T]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const w of h.keys())u.set(w,h.get(w));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(u.keys()).find(w=>w.toLowerCase()=="content-type"),T=l.FormData&&i instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Wc,a,void 0))||h||T||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,P]of u)this.g.setRequestHeader(w,P);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Is(this),this.u=!0,this.g.send(i),this.u=!1}catch(w){vs(this,w)}};function vs(i,a){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=a,i.m=5,Es(i),Rn(i)}function Es(i){i.A||(i.A=!0,mt(i,"complete"),mt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,mt(this,"complete"),mt(this,"abort"),Rn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Rn(this,!0)),Q.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ts(this):this.bb())},n.bb=function(){Ts(this)};function Ts(i){if(i.h&&typeof c<"u"&&(!i.v[1]||Dt(i)!=4||i.Z()!=2)){if(i.u&&Dt(i)==4)ji(i.Ea,0,i);else if(mt(i,"readystatechange"),Dt(i)==4){i.h=!1;try{const P=i.Z();t:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var u;if(!(u=a)){var h;if(h=P===0){var T=String(i.D).match(hs)[1]||null;!T&&l.self&&l.self.location&&(T=l.self.location.protocol.slice(0,-1)),h=!Qc.test(T?T.toLowerCase():"")}u=h}if(u)mt(i,"complete"),mt(i,"success");else{i.m=6;try{var w=2<Dt(i)?i.g.statusText:""}catch{w=""}i.l=w+" ["+i.Z()+"]",Es(i)}}finally{Rn(i)}}}}function Rn(i,a){if(i.g){Is(i);const u=i.g,h=i.v[0]?()=>{}:null;i.g=null,i.v=null,a||mt(i,"ready");try{u.onreadystatechange=h}catch{}}}function Is(i){i.I&&(l.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Dt(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Dt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var a=this.g.responseText;return i&&a.indexOf(i)==0&&(a=a.substring(i.length)),Cc(a)}};function ws(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Yc(i){const a={};i=(i.g&&2<=Dt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<i.length;h++){if(G(i[h]))continue;var u=v(i[h]);const T=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const w=a[T]||[];a[T]=w,w.push(u)}E(a,function(h){return h.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ze(i,a,u){return u&&u.internalChannelParams&&u.internalChannelParams[i]||a}function As(i){this.Aa=0,this.i=[],this.j=new Me,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ze("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ze("baseRetryDelayMs",5e3,i),this.cb=ze("retryDelaySeedMs",1e4,i),this.Wa=ze("forwardChannelMaxRetries",2,i),this.wa=ze("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new ss(i&&i.concurrentRequestLimit),this.Da=new Gc,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=As.prototype,n.la=8,n.G=1,n.connect=function(i,a,u,h){_t(0),this.W=i,this.H=a||{},u&&h!==void 0&&(this.H.OSID=u,this.H.OAID=h),this.F=this.X,this.I=Ns(this,null,this.W),Cn(this)};function Cr(i){if(Rs(i),i.G==3){var a=i.U++,u=Vt(i.I);if(H(u,"SID",i.K),H(u,"RID",a),H(u,"TYPE","terminate"),He(i,u),a=new Lt(i,i.j,a),a.L=2,a.v=wn(Vt(u)),u=!1,l.navigator&&l.navigator.sendBeacon)try{u=l.navigator.sendBeacon(a.v.toString(),"")}catch{}!u&&l.Image&&(new Image().src=a.v,u=!0),u||(a.g=Os(a.j,null),a.g.ea(a.v)),a.F=Date.now(),En(a)}ks(i)}function Sn(i){i.g&&(br(i),i.g.cancel(),i.g=null)}function Rs(i){Sn(i),i.u&&(l.clearTimeout(i.u),i.u=null),Pn(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&l.clearTimeout(i.s),i.s=null)}function Cn(i){if(!os(i.h)&&!i.s){i.s=!0;var a=i.Ga;be||Fi(),Ve||(be(),Ve=!0),ar.add(a,i),i.B=0}}function Xc(i,a){return as(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=a.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=xe(R(i.Ga,i,a),Ds(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const T=new Lt(this,this.j,i);let w=this.o;if(this.S&&(w?(w=p(w),y(w,this.S)):w=this.S),this.m!==null||this.O||(T.H=w,w=null),this.P)t:{for(var a=0,u=0;u<this.i.length;u++){e:{var h=this.i[u];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(a+=h,4096<a){a=u;break t}if(a===4096||u===this.i.length-1){a=u+1;break t}}a=1e3}else a=1e3;a=Cs(this,T,a),u=Vt(this.I),H(u,"RID",i),H(u,"CVER",22),this.D&&H(u,"X-HTTP-Session-Id",this.D),He(this,u),w&&(this.O?a="headers="+encodeURIComponent(String(ys(w)))+"&"+a:this.m&&Sr(u,this.m,w)),Rr(this.h,T),this.Ua&&H(u,"TYPE","init"),this.P?(H(u,"$req",a),H(u,"SID","null"),T.T=!0,Tr(T,u,null)):Tr(T,u,a),this.G=2}}else this.G==3&&(i?Ss(this,i):this.i.length==0||os(this.h)||Ss(this))};function Ss(i,a){var u;a?u=a.l:u=i.U++;const h=Vt(i.I);H(h,"SID",i.K),H(h,"RID",u),H(h,"AID",i.T),He(i,h),i.m&&i.o&&Sr(h,i.m,i.o),u=new Lt(i,i.j,u,i.B+1),i.m===null&&(u.H=i.o),a&&(i.i=a.D.concat(i.i)),a=Cs(i,u,1e3),u.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),Rr(i.h,u),Tr(u,h,a)}function He(i,a){i.H&&it(i.H,function(u,h){H(a,h,u)}),i.l&&ls({},function(u,h){H(a,h,u)})}function Cs(i,a,u){u=Math.min(i.i.length,u);var h=i.l?R(i.l.Na,i.l,i):null;t:{var T=i.i;let w=-1;for(;;){const P=["count="+u];w==-1?0<u?(w=T[0].g,P.push("ofs="+w)):w=0:P.push("ofs="+w);let z=!0;for(let st=0;st<u;st++){let $=T[st].g;const ht=T[st].map;if($-=w,0>$)w=Math.max(0,T[st].g-100),z=!1;else try{Kc(ht,P,"req"+$+"_")}catch{h&&h(ht)}}if(z){h=P.join("&");break t}}}return i=i.i.splice(0,u),a.D=i,h}function Ps(i){if(!i.g&&!i.u){i.Y=1;var a=i.Fa;be||Fi(),Ve||(be(),Ve=!0),ar.add(a,i),i.v=0}}function Pr(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=xe(R(i.Fa,i),Ds(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,bs(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=xe(R(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,_t(10),Sn(this),bs(this))};function br(i){i.A!=null&&(l.clearTimeout(i.A),i.A=null)}function bs(i){i.g=new Lt(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var a=Vt(i.qa);H(a,"RID","rpc"),H(a,"SID",i.K),H(a,"AID",i.T),H(a,"CI",i.F?"0":"1"),!i.F&&i.ja&&H(a,"TO",i.ja),H(a,"TYPE","xmlhttp"),He(i,a),i.m&&i.o&&Sr(a,i.m,i.o),i.L&&(i.g.I=i.L);var u=i.g;i=i.ia,u.L=1,u.v=wn(Vt(a)),u.m=null,u.P=!0,ns(u,i)}n.Za=function(){this.C!=null&&(this.C=null,Sn(this),Pr(this),_t(19))};function Pn(i){i.C!=null&&(l.clearTimeout(i.C),i.C=null)}function Vs(i,a){var u=null;if(i.g==a){Pn(i),br(i),i.g=null;var h=2}else if(Ar(i.h,a))u=a.D,cs(i.h,a),h=1;else return;if(i.G!=0){if(a.o)if(h==1){u=a.m?a.m.length:0,a=Date.now()-a.F;var T=i.B;h=_n(),mt(h,new Ji(h,u)),Cn(i)}else Ps(i);else if(T=a.s,T==3||T==0&&0<a.X||!(h==1&&Xc(i,a)||h==2&&Pr(i)))switch(u&&0<u.length&&(a=i.h,a.i=a.i.concat(u)),T){case 1:Xt(i,5);break;case 4:Xt(i,10);break;case 3:Xt(i,6);break;default:Xt(i,2)}}}function Ds(i,a){let u=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(u*=2),u*a}function Xt(i,a){if(i.j.info("Error code "+a),a==2){var u=R(i.fb,i),h=i.Xa;const T=!h;h=new Yt(h||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Tn(h,"https"),wn(h),T?zc(h.toString(),u):Hc(h.toString(),u)}else _t(2);i.G=0,i.l&&i.l.sa(a),ks(i),Rs(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function ks(i){if(i.G=0,i.ka=[],i.l){const a=us(i.h);(a.length!=0||i.i.length!=0)&&(D(i.ka,a),D(i.ka,i.i),i.h.i.length=0,L(i.i),i.i.length=0),i.l.ra()}}function Ns(i,a,u){var h=u instanceof Yt?Vt(u):new Yt(u);if(h.g!="")a&&(h.g=a+"."+h.g),In(h,h.s);else{var T=l.location;h=T.protocol,a=a?a+"."+T.hostname:T.hostname,T=+T.port;var w=new Yt(null);h&&Tn(w,h),a&&(w.g=a),T&&In(w,T),u&&(w.l=u),h=w}return u=i.D,a=i.ya,u&&a&&H(h,u,a),H(h,"VER",i.la),He(i,h),h}function Os(i,a,u){if(a&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=i.Ca&&!i.pa?new Q(new qe({eb:u})):new Q(i.pa),a.Ha(i.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function xs(){}n=xs.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function bn(){}bn.prototype.g=function(i,a){return new Tt(i,a)};function Tt(i,a){lt.call(this),this.g=new As(a),this.l=i,this.h=a&&a.messageUrlParams||null,i=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(i?i["X-WebChannel-Content-Type"]=a.messageContentType:i={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(i?i["X-WebChannel-Client-Profile"]=a.va:i={"X-WebChannel-Client-Profile":a.va}),this.g.S=i,(i=a&&a.Sb)&&!G(i)&&(this.g.m=i),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!G(a)&&(this.g.D=a,i=this.h,i!==null&&a in i&&(i=this.h,a in i&&delete i[a])),this.j=new de(this)}O(Tt,lt),Tt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Tt.prototype.close=function(){Cr(this.g)},Tt.prototype.o=function(i){var a=this.g;if(typeof i=="string"){var u={};u.__data__=i,i=u}else this.u&&(u={},u.__data__=gr(i),i=u);a.i.push(new Oc(a.Ya++,i)),a.G==3&&Cn(a)},Tt.prototype.N=function(){this.g.l=null,delete this.j,Cr(this.g),delete this.g,Tt.aa.N.call(this)};function Ms(i){_r.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var a=i.__sm__;if(a){t:{for(const u in a){i=u;break t}i=void 0}(this.i=i)&&(i=this.i,a=a!==null&&i in a?a[i]:void 0),this.data=a}else this.data=i}O(Ms,_r);function Ls(){yr.call(this),this.status=1}O(Ls,yr);function de(i){this.g=i}O(de,xs),de.prototype.ua=function(){mt(this.g,"a")},de.prototype.ta=function(i){mt(this.g,new Ms(i))},de.prototype.sa=function(i){mt(this.g,new Ls)},de.prototype.ra=function(){mt(this.g,"b")},bn.prototype.createWebChannel=bn.prototype.g,Tt.prototype.send=Tt.prototype.o,Tt.prototype.open=Tt.prototype.m,Tt.prototype.close=Tt.prototype.close,Ta=function(){return new bn},Ea=function(){return _n()},va=Qt,Hr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},yn.NO_ERROR=0,yn.TIMEOUT=8,yn.HTTP_ERROR=6,xn=yn,Zi.COMPLETE="complete",ya=Zi,Qi.EventType=Ne,Ne.OPEN="a",Ne.CLOSE="b",Ne.ERROR="c",Ne.MESSAGE="d",lt.prototype.listen=lt.prototype.K,Ke=Qi,_a=qe,Q.prototype.listenOnce=Q.prototype.L,Q.prototype.getLastError=Q.prototype.Ka,Q.prototype.getLastErrorCode=Q.prototype.Ba,Q.prototype.getStatus=Q.prototype.Z,Q.prototype.getResponseJson=Q.prototype.Oa,Q.prototype.getResponseText=Q.prototype.oa,Q.prototype.send=Q.prototype.ea,Q.prototype.setWithCredentials=Q.prototype.Ha,ma=Q}).apply(typeof Dn<"u"?Dn:typeof self<"u"?self:typeof window<"u"?window:{});const eo="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Re="10.12.5";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae=new ci("@firebase/firestore");function Ge(){return ae.logLevel}function V(n,...t){if(ae.logLevel<=B.DEBUG){const e=t.map(pi);ae.debug(`Firestore (${Re}): ${n}`,...e)}}function xt(n,...t){if(ae.logLevel<=B.ERROR){const e=t.map(pi);ae.error(`Firestore (${Re}): ${n}`,...e)}}function ve(n,...t){if(ae.logLevel<=B.WARN){const e=t.map(pi);ae.warn(`Firestore (${Re}): ${n}`,...e)}}function pi(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(n="Unexpected state"){const t=`FIRESTORE (${Re}) INTERNAL ASSERTION FAILED: `+n;throw xt(t),new Error(t)}function tt(n,t){n||M()}function U(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends Kt{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Fh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(pt.UNAUTHENTICATED))}shutdown(){}}class Uh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Bh{constructor(t){this.t=t,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const s=d=>this.i!==r?(r=this.i,e(d)):Promise.resolve();let o=new ne;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ne,t.enqueueRetryable(()=>s(this.currentUser))};const c=()=>{const d=o;t.enqueueRetryable(async()=>{await d.promise,await s(this.currentUser)})},l=d=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.auth.addAuthTokenListener(this.o),c()};this.t.onInit(d=>l(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?l(d):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ne)}},0),c()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(tt(typeof r.accessToken=="string"),new Ia(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return tt(t===null||typeof t=="string"),new pt(t)}}class qh{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class $h{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new qh(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class jh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zh{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=o=>{o.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const c=o.token!==this.R;return this.R=o.token,V("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(tt(typeof e.token=="string"),this.R=e.token,new jh(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hh(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=Hh(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%t.length))}return r}}function j(n,t){return n<t?-1:n>t?1:0}function Ee(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new k(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new k(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new k(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new k(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Et.fromMillis(Date.now())}static fromDate(t){return Et.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new Et(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?j(this.nanoseconds,t.nanoseconds):j(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(t){this.timestamp=t}static fromTimestamp(t){return new x(t)}static min(){return new x(new Et(0,0))}static max(){return new x(new Et(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(t,e,r){e===void 0?e=0:e>t.length&&M(),r===void 0?r=t.length-e:r>t.length-e&&M(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return nn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof nn?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=t.get(s),c=e.get(s);if(o<c)return-1;if(o>c)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class W extends nn{construct(t,e,r){return new W(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new k(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new W(e)}static emptyPath(){return new W([])}}const Gh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yt extends nn{construct(t,e,r){return new yt(t,e,r)}static isValidIdentifier(t){return Gh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new yt(["__name__"])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new k(b.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let c=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new k(b.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const d=t[s+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new k(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=d,s+=2}else l==="`"?(c=!c,s++):l!=="."||c?(r+=l,s++):(o(),s++)}if(o(),c)throw new k(b.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new yt(e)}static emptyPath(){return new yt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(t){this.path=t}static fromPath(t){return new N(W.fromString(t))}static fromName(t){return new N(W.fromString(t).popFirst(5))}static empty(){return new N(W.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&W.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return W.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new N(new W(t.slice()))}}function Kh(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=x.fromTimestamp(r===1e9?new Et(e+1,0):new Et(e,r));return new zt(s,N.empty(),t)}function Qh(n){return new zt(n.readTime,n.key,-1)}class zt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new zt(x.min(),N.empty(),-1)}static max(){return new zt(x.max(),N.empty(),-1)}}function Wh(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=N.comparator(n.documentKey,t.documentKey),e!==0?e:j(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Xh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gi(n){if(n.code!==b.FAILED_PRECONDITION||n.message!==Yh)throw n;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new S((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof S?e:S.resolve(e)}catch(e){return S.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):S.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):S.reject(e)}static resolve(t){return new S((e,r)=>{e(t)})}static reject(t){return new S((e,r)=>{r(t)})}static waitFor(t){return new S((e,r)=>{let s=0,o=0,c=!1;t.forEach(l=>{++s,l.next(()=>{++o,c&&o===s&&e()},d=>r(d))}),c=!0,o===s&&e()})}static or(t){let e=S.resolve(!1);for(const r of t)e=e.next(s=>s?S.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new S((r,s)=>{const o=t.length,c=new Array(o);let l=0;for(let d=0;d<o;d++){const f=d;e(t[f]).next(_=>{c[f]=_,++l,l===o&&r(c)},_=>s(_))}})}static doWhile(t,e){return new S((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function Jh(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function un(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}mi.oe=-1;function Jn(n){return n==null}function Gr(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Zn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Zh(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t,e){this.comparator=t,this.root=e||ot.EMPTY}insert(t,e){return new X(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(t){return new X(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ot.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new kn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new kn(this.root,t,this.comparator,!1)}getReverseIterator(){return new kn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new kn(this.root,t,this.comparator,!0)}}class kn{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ot{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??ot.RED,this.left=s??ot.EMPTY,this.right=o??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new ot(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return ot.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const t=this.left.check();if(t!==this.right.check())throw M();return t+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(t,e,r,s,o){return this}insert(t,e,r){return new ot(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t){this.comparator=t,this.data=new X(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ro(this.data.getIterator())}getIteratorFrom(t){return new ro(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof at)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new at(this.comparator);return e.data=t,e}}class ro{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(t){this.fields=t,t.sort(yt.comparator)}static empty(){return new Bt([])}unionWith(t){let e=new at(yt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Bt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ee(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Aa("Invalid base64 string: "+o):o}}(t);return new ct(e)}static fromUint8Array(t){const e=function(s){let o="";for(let c=0;c<s.length;++c)o+=String.fromCharCode(s[c]);return o}(t);return new ct(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return j(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const td=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ht(n){if(tt(!!n),typeof n=="string"){let t=0;const e=td.exec(n);if(tt(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Z(n.seconds),nanos:Z(n.nanos)}}function Z(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ce(n){return typeof n=="string"?ct.fromBase64String(n):ct.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function yi(n){const t=n.mapValue.fields.__previous_value__;return _i(t)?yi(t):t}function rn(n){const t=Ht(n.mapValue.fields.__local_write_time__.timestampValue);return new Et(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(t,e,r,s,o,c,l,d,f){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=c,this.autoDetectLongPolling=l,this.longPollingOptions=d,this.useFetchStreams=f}}class sn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new sn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof sn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ue(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?_i(n)?4:nd(n)?9007199254740991:10:M()}function St(n,t){if(n===t)return!0;const e=ue(n);if(e!==ue(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return rn(n).isEqual(rn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const c=Ht(s.timestampValue),l=Ht(o.timestampValue);return c.seconds===l.seconds&&c.nanos===l.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return ce(s.bytesValue).isEqual(ce(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return Z(s.geoPointValue.latitude)===Z(o.geoPointValue.latitude)&&Z(s.geoPointValue.longitude)===Z(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return Z(s.integerValue)===Z(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const c=Z(s.doubleValue),l=Z(o.doubleValue);return c===l?Gr(c)===Gr(l):isNaN(c)&&isNaN(l)}return!1}(n,t);case 9:return Ee(n.arrayValue.values||[],t.arrayValue.values||[],St);case 10:return function(s,o){const c=s.mapValue.fields||{},l=o.mapValue.fields||{};if(no(c)!==no(l))return!1;for(const d in c)if(c.hasOwnProperty(d)&&(l[d]===void 0||!St(c[d],l[d])))return!1;return!0}(n,t);default:return M()}}function on(n,t){return(n.values||[]).find(e=>St(e,t))!==void 0}function Te(n,t){if(n===t)return 0;const e=ue(n),r=ue(t);if(e!==r)return j(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return j(n.booleanValue,t.booleanValue);case 2:return function(o,c){const l=Z(o.integerValue||o.doubleValue),d=Z(c.integerValue||c.doubleValue);return l<d?-1:l>d?1:l===d?0:isNaN(l)?isNaN(d)?0:-1:1}(n,t);case 3:return io(n.timestampValue,t.timestampValue);case 4:return io(rn(n),rn(t));case 5:return j(n.stringValue,t.stringValue);case 6:return function(o,c){const l=ce(o),d=ce(c);return l.compareTo(d)}(n.bytesValue,t.bytesValue);case 7:return function(o,c){const l=o.split("/"),d=c.split("/");for(let f=0;f<l.length&&f<d.length;f++){const _=j(l[f],d[f]);if(_!==0)return _}return j(l.length,d.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,c){const l=j(Z(o.latitude),Z(c.latitude));return l!==0?l:j(Z(o.longitude),Z(c.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(o,c){const l=o.values||[],d=c.values||[];for(let f=0;f<l.length&&f<d.length;++f){const _=Te(l[f],d[f]);if(_)return _}return j(l.length,d.length)}(n.arrayValue,t.arrayValue);case 10:return function(o,c){if(o===Nn.mapValue&&c===Nn.mapValue)return 0;if(o===Nn.mapValue)return 1;if(c===Nn.mapValue)return-1;const l=o.fields||{},d=Object.keys(l),f=c.fields||{},_=Object.keys(f);d.sort(),_.sort();for(let A=0;A<d.length&&A<_.length;++A){const R=j(d[A],_[A]);if(R!==0)return R;const C=Te(l[d[A]],f[_[A]]);if(C!==0)return C}return j(d.length,_.length)}(n.mapValue,t.mapValue);default:throw M()}}function io(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return j(n,t);const e=Ht(n),r=Ht(t),s=j(e.seconds,r.seconds);return s!==0?s:j(e.nanos,r.nanos)}function Ie(n){return Kr(n)}function Kr(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Ht(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return ce(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return N.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=Kr(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const c of r)o?o=!1:s+=",",s+=`${c}:${Kr(e.fields[c])}`;return s+"}"}(n.mapValue):M()}function Qr(n){return!!n&&"integerValue"in n}function vi(n){return!!n&&"arrayValue"in n}function so(n){return!!n&&"nullValue"in n}function oo(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Mr(n){return!!n&&"mapValue"in n}function Xe(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Zn(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Xe(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Xe(n.arrayValue.values[e]);return t}return Object.assign({},n)}function nd(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t){this.value=t}static empty(){return new At({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Mr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Xe(e)}setAll(t){let e=yt.emptyPath(),r={},s=[];t.forEach((c,l)=>{if(!e.isImmediateParentOf(l)){const d=this.getFieldsMap(e);this.applyChanges(d,r,s),r={},s=[],e=l.popLast()}c?r[l.lastSegment()]=Xe(c):s.push(l.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());Mr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return St(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];Mr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){Zn(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new At(Xe(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t,e,r,s,o,c,l){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=c,this.documentState=l}static newInvalidDocument(t){return new gt(t,0,x.min(),x.min(),x.min(),At.empty(),0)}static newFoundDocument(t,e,r,s){return new gt(t,1,e,x.min(),r,s,0)}static newNoDocument(t,e){return new gt(t,2,e,x.min(),x.min(),At.empty(),0)}static newUnknownDocument(t,e){return new gt(t,3,e,x.min(),x.min(),At.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(x.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=x.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof gt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(t,e){this.position=t,this.inclusive=e}}function ao(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],c=n.position[s];if(o.field.isKeyField()?r=N.comparator(N.fromName(c.referenceValue),e.key):r=Te(c,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function co(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!St(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(t,e="asc"){this.field=t,this.dir=e}}function rd(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{}class et extends Ra{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new sd(t,e,r):e==="array-contains"?new cd(t,r):e==="in"?new ud(t,r):e==="not-in"?new ld(t,r):e==="array-contains-any"?new hd(t,r):new et(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new od(t,r):new ad(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Te(e,this.value)):e!==null&&ue(this.value)===ue(e)&&this.matchesComparison(Te(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ct extends Ra{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Ct(t,e)}matches(t){return Sa(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Sa(n){return n.op==="and"}function Ca(n){return id(n)&&Sa(n)}function id(n){for(const t of n.filters)if(t instanceof Ct)return!1;return!0}function Wr(n){if(n instanceof et)return n.field.canonicalString()+n.op.toString()+Ie(n.value);if(Ca(n))return n.filters.map(t=>Wr(t)).join(",");{const t=n.filters.map(e=>Wr(e)).join(",");return`${n.op}(${t})`}}function Pa(n,t){return n instanceof et?function(r,s){return s instanceof et&&r.op===s.op&&r.field.isEqual(s.field)&&St(r.value,s.value)}(n,t):n instanceof Ct?function(r,s){return s instanceof Ct&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,c,l)=>o&&Pa(c,s.filters[l]),!0):!1}(n,t):void M()}function ba(n){return n instanceof et?function(e){return`${e.field.canonicalString()} ${e.op} ${Ie(e.value)}`}(n):n instanceof Ct?function(e){return e.op.toString()+" {"+e.getFilters().map(ba).join(" ,")+"}"}(n):"Filter"}class sd extends et{constructor(t,e,r){super(t,e,r),this.key=N.fromName(r.referenceValue)}matches(t){const e=N.comparator(t.key,this.key);return this.matchesComparison(e)}}class od extends et{constructor(t,e){super(t,"in",e),this.keys=Va("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class ad extends et{constructor(t,e){super(t,"not-in",e),this.keys=Va("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Va(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>N.fromName(r.referenceValue))}class cd extends et{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return vi(e)&&on(e.arrayValue,this.value)}}class ud extends et{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&on(this.value.arrayValue,e)}}class ld extends et{constructor(t,e){super(t,"not-in",e)}matches(t){if(on(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!on(this.value.arrayValue,e)}}class hd extends et{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!vi(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>on(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(t,e=null,r=[],s=[],o=null,c=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=c,this.endAt=l,this.ue=null}}function uo(n,t=null,e=[],r=[],s=null,o=null,c=null){return new dd(n,t,e,r,s,o,c)}function Ei(n){const t=U(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Wr(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Jn(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Ie(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Ie(r)).join(",")),t.ue=e}return t.ue}function Ti(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!rd(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Pa(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!co(n.startAt,t.startAt)&&co(n.endAt,t.endAt)}function Yr(n){return N.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(t,e=null,r=[],s=[],o=null,c="F",l=null,d=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=c,this.startAt=l,this.endAt=d,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function fd(n,t,e,r,s,o,c,l){return new tr(n,t,e,r,s,o,c,l)}function Ii(n){return new tr(n)}function lo(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function pd(n){return n.collectionGroup!==null}function Je(n){const t=U(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(c){let l=new at(yt.comparator);return c.filters.forEach(d=>{d.getFlattenedFilters().forEach(f=>{f.isInequality()&&(l=l.add(f.field))})}),l})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new zn(o,r))}),e.has(yt.keyField().canonicalString())||t.ce.push(new zn(yt.keyField(),r))}return t.ce}function Rt(n){const t=U(n);return t.le||(t.le=gd(t,Je(n))),t.le}function gd(n,t){if(n.limitType==="F")return uo(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new zn(s.field,o)});const e=n.endAt?new jn(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new jn(n.startAt.position,n.startAt.inclusive):null;return uo(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Xr(n,t,e){return new tr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function er(n,t){return Ti(Rt(n),Rt(t))&&n.limitType===t.limitType}function Da(n){return`${Ei(Rt(n))}|lt:${n.limitType}`}function pe(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>ba(s)).join(", ")}]`),Jn(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>Ie(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>Ie(s)).join(",")),`Target(${r})`}(Rt(n))}; limitType=${n.limitType})`}function nr(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):N.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of Je(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(c,l,d){const f=ao(c,l,d);return c.inclusive?f<=0:f<0}(r.startAt,Je(r),s)||r.endAt&&!function(c,l,d){const f=ao(c,l,d);return c.inclusive?f>=0:f>0}(r.endAt,Je(r),s))}(n,t)}function md(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function ka(n){return(t,e)=>{let r=!1;for(const s of Je(n)){const o=_d(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function _d(n,t,e){const r=n.field.isKeyField()?N.comparator(t.key,e.key):function(o,c,l){const d=c.data.field(o),f=l.data.field(o);return d!==null&&f!==null?Te(d,f):M()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return M()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Zn(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return Zh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd=new X(N.comparator);function Gt(){return yd}const Na=new X(N.comparator);function Qe(...n){let t=Na;for(const e of n)t=t.insert(e.key,e);return t}function vd(n){let t=Na;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function te(){return Ze()}function Oa(){return Ze()}function Ze(){return new Se(n=>n.toString(),(n,t)=>n.isEqual(t))}const Ed=new at(N.comparator);function q(...n){let t=Ed;for(const e of n)t=t.add(e);return t}const Td=new at(j);function Id(){return Td}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gr(t)?"-0":t}}function Ad(n){return{integerValue:""+n}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(){this._=void 0}}function Rd(n,t,e){return n instanceof Jr?function(s,o){const c={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&_i(o)&&(o=yi(o)),o&&(c.fields.__previous_value__=o),{mapValue:c}}(e,t):n instanceof Hn?xa(n,t):n instanceof Gn?Ma(n,t):function(s,o){const c=Cd(s,o),l=ho(c)+ho(s.Pe);return Qr(c)&&Qr(s.Pe)?Ad(l):wd(s.serializer,l)}(n,t)}function Sd(n,t,e){return n instanceof Hn?xa(n,t):n instanceof Gn?Ma(n,t):e}function Cd(n,t){return n instanceof Zr?function(r){return Qr(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class Jr extends rr{}class Hn extends rr{constructor(t){super(),this.elements=t}}function xa(n,t){const e=La(t);for(const r of n.elements)e.some(s=>St(s,r))||e.push(r);return{arrayValue:{values:e}}}class Gn extends rr{constructor(t){super(),this.elements=t}}function Ma(n,t){let e=La(t);for(const r of n.elements)e=e.filter(s=>!St(s,r));return{arrayValue:{values:e}}}class Zr extends rr{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function ho(n){return Z(n.integerValue||n.doubleValue)}function La(n){return vi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Pd(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof Hn&&s instanceof Hn||r instanceof Gn&&s instanceof Gn?Ee(r.elements,s.elements,St):r instanceof Zr&&s instanceof Zr?St(r.Pe,s.Pe):r instanceof Jr&&s instanceof Jr}(n.transform,t.transform)}class re{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new re}static exists(t){return new re(void 0,t)}static updateTime(t){return new re(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Mn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class wi{}function Fa(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Vd(n.key,re.none()):new Ai(n.key,n.data,re.none());{const e=n.data,r=At.empty();let s=new at(yt.comparator);for(let o of t.fields)if(!s.has(o)){let c=e.field(o);c===null&&o.length>1&&(o=o.popLast(),c=e.field(o)),c===null?r.delete(o):r.set(o,c),s=s.add(o)}return new ir(n.key,r,new Bt(s.toArray()),re.none())}}function bd(n,t,e){n instanceof Ai?function(s,o,c){const l=s.value.clone(),d=po(s.fieldTransforms,o,c.transformResults);l.setAll(d),o.convertToFoundDocument(c.version,l).setHasCommittedMutations()}(n,t,e):n instanceof ir?function(s,o,c){if(!Mn(s.precondition,o))return void o.convertToUnknownDocument(c.version);const l=po(s.fieldTransforms,o,c.transformResults),d=o.data;d.setAll(Ua(s)),d.setAll(l),o.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(n,t,e):function(s,o,c){o.convertToNoDocument(c.version).setHasCommittedMutations()}(0,t,e)}function tn(n,t,e,r){return n instanceof Ai?function(o,c,l,d){if(!Mn(o.precondition,c))return l;const f=o.value.clone(),_=go(o.fieldTransforms,d,c);return f.setAll(_),c.convertToFoundDocument(c.version,f).setHasLocalMutations(),null}(n,t,e,r):n instanceof ir?function(o,c,l,d){if(!Mn(o.precondition,c))return l;const f=go(o.fieldTransforms,d,c),_=c.data;return _.setAll(Ua(o)),_.setAll(f),c.convertToFoundDocument(c.version,_).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(A=>A.field))}(n,t,e,r):function(o,c,l){return Mn(o.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):l}(n,t,e)}function fo(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ee(r,s,(o,c)=>Pd(o,c))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Ai extends wi{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ir extends wi{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Ua(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function po(n,t,e){const r=new Map;tt(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],c=o.transform,l=t.data.field(o.field);r.set(o.field,Sd(c,l,e[s]))}return r}function go(n,t,e){const r=new Map;for(const s of n){const o=s.transform,c=e.data.field(s.field);r.set(s.field,Rd(o,c,t))}return r}class Vd extends wi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&bd(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=tn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=tn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Oa();return this.mutations.forEach(s=>{const o=t.get(s.key),c=o.overlayedDocument;let l=this.applyToLocalView(c,o.mutatedFields);l=e.has(s.key)?null:l;const d=Fa(c,l);d!==null&&r.set(s.key,d),c.isValidDocument()||c.convertToNoDocument(x.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),q())}isEqual(t){return this.batchId===t.batchId&&Ee(this.mutations,t.mutations,(e,r)=>fo(e,r))&&Ee(this.baseMutations,t.baseMutations,(e,r)=>fo(e,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J,F;function Ba(n){if(n===void 0)return xt("GRPC error has no .code"),b.UNKNOWN;switch(n){case J.OK:return b.OK;case J.CANCELLED:return b.CANCELLED;case J.UNKNOWN:return b.UNKNOWN;case J.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case J.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case J.INTERNAL:return b.INTERNAL;case J.UNAVAILABLE:return b.UNAVAILABLE;case J.UNAUTHENTICATED:return b.UNAUTHENTICATED;case J.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case J.NOT_FOUND:return b.NOT_FOUND;case J.ALREADY_EXISTS:return b.ALREADY_EXISTS;case J.PERMISSION_DENIED:return b.PERMISSION_DENIED;case J.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case J.ABORTED:return b.ABORTED;case J.OUT_OF_RANGE:return b.OUT_OF_RANGE;case J.UNIMPLEMENTED:return b.UNIMPLEMENTED;case J.DATA_LOSS:return b.DATA_LOSS;default:return M()}}(F=J||(J={}))[F.OK=0]="OK",F[F.CANCELLED=1]="CANCELLED",F[F.UNKNOWN=2]="UNKNOWN",F[F.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",F[F.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",F[F.NOT_FOUND=5]="NOT_FOUND",F[F.ALREADY_EXISTS=6]="ALREADY_EXISTS",F[F.PERMISSION_DENIED=7]="PERMISSION_DENIED",F[F.UNAUTHENTICATED=16]="UNAUTHENTICATED",F[F.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",F[F.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",F[F.ABORTED=10]="ABORTED",F[F.OUT_OF_RANGE=11]="OUT_OF_RANGE",F[F.UNIMPLEMENTED=12]="UNIMPLEMENTED",F[F.INTERNAL=13]="INTERNAL",F[F.UNAVAILABLE=14]="UNAVAILABLE",F[F.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd=new ee([4294967295,4294967295],0);function mo(n){const t=Od().encode(n),e=new ga;return e.update(t),new Uint8Array(e.digest())}function _o(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new ee([e,r],0),new ee([s,o],0)]}class Ri{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new We(`Invalid padding: ${e}`);if(r<0)throw new We(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new We(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new We(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=ee.fromNumber(this.Ie)}Ee(t,e,r){let s=t.add(e.multiply(ee.fromNumber(r)));return s.compare(xd)===1&&(s=new ee([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=mo(t),[r,s]=_o(e);for(let o=0;o<this.hashCount;o++){const c=this.Ee(r,s,o);if(!this.de(c))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),c=new Ri(o,s,e);return r.forEach(l=>c.insert(l)),c}insert(t){if(this.Ie===0)return;const e=mo(t),[r,s]=_o(e);for(let o=0;o<this.hashCount;o++){const c=this.Ee(r,s,o);this.Ae(c)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class We extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,ln.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new sr(x.min(),s,new X(j),Gt(),q())}}class ln{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new ln(r,e,q(),q(),q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(t,e,r,s){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=s}}class qa{constructor(t,e){this.targetId=t,this.me=e}}class $a{constructor(t,e,r=ct.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class yo{constructor(){this.fe=0,this.ge=Eo(),this.pe=ct.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}Ce(){let t=q(),e=q(),r=q();return this.ge.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:M()}}),new ln(this.pe,this.ye,t,e,r)}ve(){this.we=!1,this.ge=Eo()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,tt(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Md{constructor(t){this.Le=t,this.Be=new Map,this.ke=Gt(),this.qe=vo(),this.Qe=new X(j)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:M()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,s)=>{this.ze(s)&&e(s)})}He(t){const e=t.targetId,r=t.me.count,s=this.Je(e);if(s){const o=s.target;if(Yr(o))if(r===0){const c=new N(o.path);this.Ue(e,c,gt.newNoDocument(c,x.min()))}else tt(r===1);else{const c=this.Ye(e);if(c!==r){const l=this.Ze(t),d=l?this.Xe(l,t,c):1;if(d!==0){this.je(e);const f=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,f)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let c,l;try{c=ce(r).toUint8Array()}catch(d){if(d instanceof Aa)return ve("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{l=new Ri(c,s,o)}catch(d){return ve(d instanceof We?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return l.Ie===0?null:l}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const c=this.Le.tt(),l=`projects/${c.projectId}/databases/${c.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.Ue(e,o,null),s++)}),s}rt(t){const e=new Map;this.Be.forEach((o,c)=>{const l=this.Je(c);if(l){if(o.current&&Yr(l.target)){const d=new N(l.target.path);this.ke.get(d)!==null||this.it(c,d)||this.Ue(c,d,gt.newNoDocument(d,t))}o.be&&(e.set(c,o.Ce()),o.ve())}});let r=q();this.qe.forEach((o,c)=>{let l=!0;c.forEachWhile(d=>{const f=this.Je(d);return!f||f.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(o))}),this.ke.forEach((o,c)=>c.setReadTime(t));const s=new sr(t,e,this.Qe,this.ke,r);return this.ke=Gt(),this.qe=vo(),this.Qe=new X(j),s}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).Ce();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new yo,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new at(j),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||V("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new yo),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function vo(){return new X(N.comparator)}function Eo(){return new X(N.comparator)}const Ld={asc:"ASCENDING",desc:"DESCENDING"},Fd={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ud={and:"AND",or:"OR"};class Bd{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ti(n,t){return n.useProto3Json||Jn(t)?t:{value:t}}function qd(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function $d(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function _e(n){return tt(!!n),x.fromTimestamp(function(e){const r=Ht(e);return new Et(r.seconds,r.nanos)}(n))}function jd(n,t){return ei(n,t).canonicalString()}function ei(n,t){const e=function(s){return new W(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function ja(n){const t=W.fromString(n);return tt(Qa(t)),t}function Lr(n,t){const e=ja(t);if(e.get(1)!==n.databaseId.projectId)throw new k(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new k(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new N(Ha(e))}function za(n,t){return jd(n.databaseId,t)}function zd(n){const t=ja(n);return t.length===4?W.emptyPath():Ha(t)}function To(n){return new W(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ha(n){return tt(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Hd(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:M()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(f,_){return f.useProto3Json?(tt(_===void 0||typeof _=="string"),ct.fromBase64String(_||"")):(tt(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array),ct.fromUint8Array(_||new Uint8Array))}(n,t.targetChange.resumeToken),c=t.targetChange.cause,l=c&&function(f){const _=f.code===void 0?b.UNKNOWN:Ba(f.code);return new k(_,f.message||"")}(c);e=new $a(r,s,o,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Lr(n,r.document.name),o=_e(r.document.updateTime),c=r.document.createTime?_e(r.document.createTime):x.min(),l=new At({mapValue:{fields:r.document.fields}}),d=gt.newFoundDocument(s,o,c,l),f=r.targetIds||[],_=r.removedTargetIds||[];e=new Ln(f,_,d.key,d)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Lr(n,r.document),o=r.readTime?_e(r.readTime):x.min(),c=gt.newNoDocument(s,o),l=r.removedTargetIds||[];e=new Ln([],l,c.key,c)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Lr(n,r.document),o=r.removedTargetIds||[];e=new Ln([],o,s,null)}else{if(!("filter"in t))return M();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,c=new Nd(s,o),l=r.targetId;e=new qa(l,c)}}return e}function Gd(n,t){return{documents:[za(n,t.path)]}}function Kd(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=za(n,s);const o=function(f){if(f.length!==0)return Ka(Ct.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const c=function(f){if(f.length!==0)return f.map(_=>function(R){return{field:ge(R.field),direction:Yd(R.dir)}}(_))}(t.orderBy);c&&(e.structuredQuery.orderBy=c);const l=ti(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{_t:e,parent:s}}function Qd(n){let t=zd(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){tt(r===1);const _=e.from[0];_.allDescendants?s=_.collectionId:t=t.child(_.collectionId)}let o=[];e.where&&(o=function(A){const R=Ga(A);return R instanceof Ct&&Ca(R)?R.getFilters():[R]}(e.where));let c=[];e.orderBy&&(c=function(A){return A.map(R=>function(O){return new zn(me(O.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(O.direction))}(R))}(e.orderBy));let l=null;e.limit&&(l=function(A){let R;return R=typeof A=="object"?A.value:A,Jn(R)?null:R}(e.limit));let d=null;e.startAt&&(d=function(A){const R=!!A.before,C=A.values||[];return new jn(C,R)}(e.startAt));let f=null;return e.endAt&&(f=function(A){const R=!A.before,C=A.values||[];return new jn(C,R)}(e.endAt)),fd(t,s,c,o,l,"F",d,f)}function Wd(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Ga(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=me(e.unaryFilter.field);return et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=me(e.unaryFilter.field);return et.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=me(e.unaryFilter.field);return et.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=me(e.unaryFilter.field);return et.create(c,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(n):n.fieldFilter!==void 0?function(e){return et.create(me(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Ct.create(e.compositeFilter.filters.map(r=>Ga(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return M()}}(e.compositeFilter.op))}(n):M()}function Yd(n){return Ld[n]}function Xd(n){return Fd[n]}function Jd(n){return Ud[n]}function ge(n){return{fieldPath:n.canonicalString()}}function me(n){return yt.fromServerFormat(n.fieldPath)}function Ka(n){return n instanceof et?function(e){if(e.op==="=="){if(oo(e.value))return{unaryFilter:{field:ge(e.field),op:"IS_NAN"}};if(so(e.value))return{unaryFilter:{field:ge(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(oo(e.value))return{unaryFilter:{field:ge(e.field),op:"IS_NOT_NAN"}};if(so(e.value))return{unaryFilter:{field:ge(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ge(e.field),op:Xd(e.op),value:e.value}}}(n):n instanceof Ct?function(e){const r=e.getFilters().map(s=>Ka(s));return r.length===1?r[0]:{compositeFilter:{op:Jd(e.op),filters:r}}}(n):M()}function Qa(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t,e,r,s,o=x.min(),c=x.min(),l=ct.EMPTY_BYTE_STRING,d=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=l,this.expectedCount=d}withSequenceNumber(t){return new qt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(t){this.ct=t}}function tf(n){const t=Qd({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Xr(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(){this.an=new nf}addToCollectionParentIndex(t,e){return this.an.add(e),S.resolve()}getCollectionParents(t,e){return S.resolve(this.an.getEntries(e))}addFieldIndex(t,e){return S.resolve()}deleteFieldIndex(t,e){return S.resolve()}deleteAllFieldIndexes(t){return S.resolve()}createTargetIndexes(t,e){return S.resolve()}getDocumentsMatchingTarget(t,e){return S.resolve(null)}getIndexType(t,e){return S.resolve(0)}getFieldIndexes(t,e){return S.resolve([])}getNextCollectionGroupToUpdate(t){return S.resolve(null)}getMinOffset(t,e){return S.resolve(zt.min())}getMinOffsetFromCollectionGroup(t,e){return S.resolve(zt.min())}updateCollectionGroup(t,e,r){return S.resolve()}updateIndexEntries(t,e){return S.resolve()}}class nf{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new at(W.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new at(W.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(t){this.Nn=t}next(){return this.Nn+=2,this.Nn}static Ln(){return new we(0)}static Bn(){return new we(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(){this.changes=new Se(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,gt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?S.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&tn(r.mutation,s,Bt.empty(),Et.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,q()).next(()=>r))}getLocalViewOfDocuments(t,e,r=q()){const s=te();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let c=Qe();return o.forEach((l,d)=>{c=c.insert(l,d.overlayedDocument)}),c}))}getOverlayedDocuments(t,e){const r=te();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,q()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((c,l)=>{e.set(c,l)})})}computeViews(t,e,r,s){let o=Gt();const c=Ze(),l=function(){return Ze()}();return e.forEach((d,f)=>{const _=r.get(f.key);s.has(f.key)&&(_===void 0||_.mutation instanceof ir)?o=o.insert(f.key,f):_!==void 0?(c.set(f.key,_.mutation.getFieldMask()),tn(_.mutation,f,_.mutation.getFieldMask(),Et.now())):c.set(f.key,Bt.empty())}),this.recalculateAndSaveOverlays(t,o).next(d=>(d.forEach((f,_)=>c.set(f,_)),e.forEach((f,_)=>{var A;return l.set(f,new sf(_,(A=c.get(f))!==null&&A!==void 0?A:null))}),l))}recalculateAndSaveOverlays(t,e){const r=Ze();let s=new X((c,l)=>c-l),o=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(c=>{for(const l of c)l.keys().forEach(d=>{const f=e.get(d);if(f===null)return;let _=r.get(d)||Bt.empty();_=l.applyToLocalView(f,_),r.set(d,_);const A=(s.get(l.batchId)||q()).add(d);s=s.insert(l.batchId,A)})}).next(()=>{const c=[],l=s.getReverseIterator();for(;l.hasNext();){const d=l.getNext(),f=d.key,_=d.value,A=Oa();_.forEach(R=>{if(!o.has(R)){const C=Fa(e.get(R),r.get(R));C!==null&&A.set(R,C),o=o.add(R)}}),c.push(this.documentOverlayCache.saveOverlays(t,f,A))}return S.waitFor(c)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(c){return N.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):pd(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const c=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):S.resolve(te());let l=-1,d=o;return c.next(f=>S.forEach(f,(_,A)=>(l<A.largestBatchId&&(l=A.largestBatchId),o.get(_)?S.resolve():this.remoteDocumentCache.getEntry(t,_).next(R=>{d=d.insert(_,R)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,d,f,q())).next(_=>({batchId:l,changes:vd(_)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new N(e)).next(r=>{let s=Qe();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let c=Qe();return this.indexManager.getCollectionParents(t,o).next(l=>S.forEach(l,d=>{const f=function(A,R){return new tr(R,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(e,d.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,s).next(_=>{_.forEach((A,R)=>{c=c.insert(A,R)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(c=>(o=c,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(c=>{o.forEach((d,f)=>{const _=f.getKey();c.get(_)===null&&(c=c.insert(_,gt.newInvalidDocument(_)))});let l=Qe();return c.forEach((d,f)=>{const _=o.get(d);_!==void 0&&tn(_.mutation,f,Bt.empty(),Et.now()),nr(e,f)&&(l=l.insert(d,f))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(t){this.serializer=t,this.lr=new Map,this.hr=new Map}getBundleMetadata(t,e){return S.resolve(this.lr.get(e))}saveBundleMetadata(t,e){return this.lr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:_e(s.createTime)}}(e)),S.resolve()}getNamedQuery(t,e){return S.resolve(this.hr.get(e))}saveNamedQuery(t,e){return this.hr.set(e.name,function(s){return{name:s.name,query:tf(s.bundledQuery),readTime:_e(s.readTime)}}(e)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(){this.overlays=new X(N.comparator),this.Pr=new Map}getOverlay(t,e){return S.resolve(this.overlays.get(e))}getOverlays(t,e){const r=te();return S.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.ht(t,e,o)}),S.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Pr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Pr.delete(r)),S.resolve()}getOverlaysForCollection(t,e,r){const s=te(),o=e.length+1,c=new N(e.child("")),l=this.overlays.getIteratorFrom(c);for(;l.hasNext();){const d=l.getNext().value,f=d.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&d.largestBatchId>r&&s.set(d.getKey(),d)}return S.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new X((f,_)=>f-_);const c=this.overlays.getIterator();for(;c.hasNext();){const f=c.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let _=o.get(f.largestBatchId);_===null&&(_=te(),o=o.insert(f.largestBatchId,_)),_.set(f.getKey(),f)}}const l=te(),d=o.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((f,_)=>l.set(f,_)),!(l.size()>=s)););return S.resolve(l)}ht(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const c=this.Pr.get(s.largestBatchId).delete(r.key);this.Pr.set(s.largestBatchId,c)}this.overlays=this.overlays.insert(r.key,new kd(e,r));let o=this.Pr.get(e);o===void 0&&(o=q(),this.Pr.set(e,o)),this.Pr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(){this.sessionToken=ct.EMPTY_BYTE_STRING}getSessionToken(t){return S.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,S.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(){this.Ir=new at(rt.Tr),this.Er=new at(rt.dr)}isEmpty(){return this.Ir.isEmpty()}addReference(t,e){const r=new rt(t,e);this.Ir=this.Ir.add(r),this.Er=this.Er.add(r)}Ar(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Rr(new rt(t,e))}Vr(t,e){t.forEach(r=>this.removeReference(r,e))}mr(t){const e=new N(new W([])),r=new rt(e,t),s=new rt(e,t+1),o=[];return this.Er.forEachInRange([r,s],c=>{this.Rr(c),o.push(c.key)}),o}gr(){this.Ir.forEach(t=>this.Rr(t))}Rr(t){this.Ir=this.Ir.delete(t),this.Er=this.Er.delete(t)}pr(t){const e=new N(new W([])),r=new rt(e,t),s=new rt(e,t+1);let o=q();return this.Er.forEachInRange([r,s],c=>{o=o.add(c.key)}),o}containsKey(t){const e=new rt(t,0),r=this.Ir.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class rt{constructor(t,e){this.key=t,this.yr=e}static Tr(t,e){return N.comparator(t.key,e.key)||j(t.yr,e.yr)}static dr(t,e){return j(t.yr,e.yr)||N.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.wr=1,this.Sr=new at(rt.Tr)}checkEmpty(t){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new Dd(o,e,r,s);this.mutationQueue.push(c);for(const l of s)this.Sr=this.Sr.add(new rt(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return S.resolve(c)}lookupMutationBatch(t,e){return S.resolve(this.br(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.Dr(r),o=s<0?0:s;return S.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(t){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new rt(e,0),s=new rt(e,Number.POSITIVE_INFINITY),o=[];return this.Sr.forEachInRange([r,s],c=>{const l=this.br(c.yr);o.push(l)}),S.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new at(j);return e.forEach(s=>{const o=new rt(s,0),c=new rt(s,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([o,c],l=>{r=r.add(l.yr)})}),S.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;N.isDocumentKey(o)||(o=o.child(""));const c=new rt(new N(o),0);let l=new at(j);return this.Sr.forEachWhile(d=>{const f=d.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(l=l.add(d.yr)),!0)},c),S.resolve(this.Cr(l))}Cr(t){const e=[];return t.forEach(r=>{const s=this.br(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){tt(this.vr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return S.forEach(e.mutations,s=>{const o=new rt(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Sr=r})}xn(t){}containsKey(t,e){const r=new rt(e,0),s=this.Sr.firstAfterOrEqual(r);return S.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,S.resolve()}vr(t,e){return this.Dr(t)}Dr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}br(t){const e=this.Dr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(t){this.Fr=t,this.docs=function(){return new X(N.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,c=this.Fr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:c}),this.size+=c-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return S.resolve(r?r.document.mutableCopy():gt.newInvalidDocument(e))}getEntries(t,e){let r=Gt();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():gt.newInvalidDocument(s))}),S.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=Gt();const c=e.path,l=new N(c.child("")),d=this.docs.getIteratorFrom(l);for(;d.hasNext();){const{key:f,value:{document:_}}=d.getNext();if(!c.isPrefixOf(f.path))break;f.path.length>c.length+1||Wh(Qh(_),r)<=0||(s.has(_.key)||nr(e,_))&&(o=o.insert(_.key,_.mutableCopy()))}return S.resolve(o)}getAllFromCollectionGroup(t,e,r,s){M()}Mr(t,e){return S.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new df(this)}getSize(t){return S.resolve(this.size)}}class df extends rf{constructor(t){super(),this.ur=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.ur.addEntry(t,s)):this.ur.removeEntry(r)}),S.waitFor(e)}getFromCache(t,e){return this.ur.getEntry(t,e)}getAllFromCache(t,e){return this.ur.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(t){this.persistence=t,this.Or=new Se(e=>Ei(e),Ti),this.lastRemoteSnapshotVersion=x.min(),this.highestTargetId=0,this.Nr=0,this.Lr=new Si,this.targetCount=0,this.Br=we.Ln()}forEachTarget(t,e){return this.Or.forEach((r,s)=>e(s)),S.resolve()}getLastRemoteSnapshotVersion(t){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return S.resolve(this.Nr)}allocateTargetId(t){return this.highestTargetId=this.Br.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Nr&&(this.Nr=e),S.resolve()}Qn(t){this.Or.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Br=new we(e),this.highestTargetId=e),t.sequenceNumber>this.Nr&&(this.Nr=t.sequenceNumber)}addTargetData(t,e){return this.Qn(e),this.targetCount+=1,S.resolve()}updateTargetData(t,e){return this.Qn(e),S.resolve()}removeTargetData(t,e){return this.Or.delete(e.target),this.Lr.mr(e.targetId),this.targetCount-=1,S.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.Or.forEach((c,l)=>{l.sequenceNumber<=e&&r.get(l.targetId)===null&&(this.Or.delete(c),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)}),S.waitFor(o).next(()=>s)}getTargetCount(t){return S.resolve(this.targetCount)}getTargetData(t,e){const r=this.Or.get(e)||null;return S.resolve(r)}addMatchingKeys(t,e,r){return this.Lr.Ar(e,r),S.resolve()}removeMatchingKeys(t,e,r){this.Lr.Vr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(c=>{o.push(s.markPotentiallyOrphaned(t,c))}),S.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Lr.mr(e),S.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Lr.pr(e);return S.resolve(r)}containsKey(t,e){return S.resolve(this.Lr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(t,e){this.kr={},this.overlays={},this.qr=new mi(0),this.Qr=!1,this.Qr=!0,this.Kr=new uf,this.referenceDelegate=t(this),this.$r=new ff(this),this.indexManager=new ef,this.remoteDocumentCache=function(s){return new hf(s)}(r=>this.referenceDelegate.Ur(r)),this.serializer=new Zd(e),this.Wr=new af(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new cf,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.kr[t.toKey()];return r||(r=new lf(e,this.referenceDelegate),this.kr[t.toKey()]=r),r}getGlobalsCache(){return this.Kr}getTargetCache(){return this.$r}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Wr}runTransaction(t,e,r){V("MemoryPersistence","Starting transaction:",t);const s=new gf(this.qr.next());return this.referenceDelegate.Gr(),r(s).next(o=>this.referenceDelegate.zr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}jr(t,e){return S.or(Object.values(this.kr).map(r=>()=>r.containsKey(t,e)))}}class gf extends Xh{constructor(t){super(),this.currentSequenceNumber=t}}class Ci{constructor(t){this.persistence=t,this.Hr=new Si,this.Jr=null}static Yr(t){return new Ci(t)}get Zr(){if(this.Jr)return this.Jr;throw M()}addReference(t,e,r){return this.Hr.addReference(r,e),this.Zr.delete(r.toString()),S.resolve()}removeReference(t,e,r){return this.Hr.removeReference(r,e),this.Zr.add(r.toString()),S.resolve()}markPotentiallyOrphaned(t,e){return this.Zr.add(e.toString()),S.resolve()}removeTarget(t,e){this.Hr.mr(e.targetId).forEach(s=>this.Zr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Zr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Gr(){this.Jr=new Set}zr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Zr,r=>{const s=N.fromPath(r);return this.Xr(t,s).next(o=>{o||e.removeEntry(s,x.min())})}).next(()=>(this.Jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Xr(t,e).next(r=>{r?this.Zr.delete(e.toString()):this.Zr.add(e.toString())})}Ur(t){return 0}Xr(t,e){return S.or([()=>S.resolve(this.Hr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.jr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Ki=r,this.$i=s}static Ui(t,e){let r=q(),s=q();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Pi(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(){this.Wi=!1,this.Gi=!1,this.zi=100,this.ji=function(){return du()?8:Jh(oi())>0?6:4}()}initialize(t,e){this.Hi=t,this.indexManager=e,this.Wi=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.Ji(t,e).next(c=>{o.result=c}).next(()=>{if(!o.result)return this.Yi(t,e,s,r).next(c=>{o.result=c})}).next(()=>{if(o.result)return;const c=new mf;return this.Zi(t,e,c).next(l=>{if(o.result=l,this.Gi)return this.Xi(t,e,c,l.size)})}).next(()=>o.result)}Xi(t,e,r,s){return r.documentReadCount<this.zi?(Ge()<=B.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",pe(e),"since it only creates cache indexes for collection contains","more than or equal to",this.zi,"documents"),S.resolve()):(Ge()<=B.DEBUG&&V("QueryEngine","Query:",pe(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ji*s?(Ge()<=B.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",pe(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Rt(e))):S.resolve())}Ji(t,e){if(lo(e))return S.resolve(null);let r=Rt(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Xr(e,null,"F"),r=Rt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const c=q(...o);return this.Hi.getDocuments(t,c).next(l=>this.indexManager.getMinOffset(t,r).next(d=>{const f=this.es(e,l);return this.ts(e,f,c,d.readTime)?this.Ji(t,Xr(e,null,"F")):this.ns(t,f,e,d)}))})))}Yi(t,e,r,s){return lo(e)||s.isEqual(x.min())?S.resolve(null):this.Hi.getDocuments(t,r).next(o=>{const c=this.es(e,o);return this.ts(e,c,r,s)?S.resolve(null):(Ge()<=B.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),pe(e)),this.ns(t,c,e,Kh(s,-1)).next(l=>l))})}es(t,e){let r=new at(ka(t));return e.forEach((s,o)=>{nr(t,o)&&(r=r.add(o))}),r}ts(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Zi(t,e,r){return Ge()<=B.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",pe(e)),this.Hi.getDocumentsMatchingQuery(t,e,zt.min(),r)}ns(t,e,r,s){return this.Hi.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(c=>{o=o.insert(c.key,c)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(t,e,r,s){this.persistence=t,this.rs=e,this.serializer=s,this.ss=new X(j),this.os=new Se(o=>Ei(o),Ti),this._s=new Map,this.us=t.getRemoteDocumentCache(),this.$r=t.getTargetCache(),this.Wr=t.getBundleCache(),this.cs(r)}cs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new of(this.us,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.us.setIndexManager(this.indexManager),this.rs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ss))}}function vf(n,t,e,r){return new yf(n,t,e,r)}async function Wa(n,t){const e=U(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.cs(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const c=[],l=[];let d=q();for(const f of s){c.push(f.batchId);for(const _ of f.mutations)d=d.add(_.key)}for(const f of o){l.push(f.batchId);for(const _ of f.mutations)d=d.add(_.key)}return e.localDocuments.getDocuments(r,d).next(f=>({ls:f,removedBatchIds:c,addedBatchIds:l}))})})}function Ya(n){const t=U(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.$r.getLastRemoteSnapshotVersion(e))}function Ef(n,t){const e=U(n),r=t.snapshotVersion;let s=e.ss;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const c=e.us.newChangeBuffer({trackRemovals:!0});s=e.ss;const l=[];t.targetChanges.forEach((_,A)=>{const R=s.get(A);if(!R)return;l.push(e.$r.removeMatchingKeys(o,_.removedDocuments,A).next(()=>e.$r.addMatchingKeys(o,_.addedDocuments,A)));let C=R.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(A)!==null?C=C.withResumeToken(ct.EMPTY_BYTE_STRING,x.min()).withLastLimboFreeSnapshotVersion(x.min()):_.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(_.resumeToken,r)),s=s.insert(A,C),function(L,D,Y){return L.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=3e8?!0:Y.addedDocuments.size+Y.modifiedDocuments.size+Y.removedDocuments.size>0}(R,C,_)&&l.push(e.$r.updateTargetData(o,C))});let d=Gt(),f=q();if(t.documentUpdates.forEach(_=>{t.resolvedLimboDocuments.has(_)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,_))}),l.push(Tf(o,c,t.documentUpdates).next(_=>{d=_.hs,f=_.Ps})),!r.isEqual(x.min())){const _=e.$r.getLastRemoteSnapshotVersion(o).next(A=>e.$r.setTargetsMetadata(o,o.currentSequenceNumber,r));l.push(_)}return S.waitFor(l).next(()=>c.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,d,f)).next(()=>d)}).then(o=>(e.ss=s,o))}function Tf(n,t,e){let r=q(),s=q();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let c=Gt();return e.forEach((l,d)=>{const f=o.get(l);d.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(l)),d.isNoDocument()&&d.version.isEqual(x.min())?(t.removeEntry(l,d.readTime),c=c.insert(l,d)):!f.isValidDocument()||d.version.compareTo(f.version)>0||d.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(d),c=c.insert(l,d)):V("LocalStore","Ignoring outdated watch update for ",l,". Current version:",f.version," Watch version:",d.version)}),{hs:c,Ps:s}})}function If(n,t){const e=U(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.$r.getTargetData(r,t).next(o=>o?(s=o,S.resolve(s)):e.$r.allocateTargetId(r).next(c=>(s=new qt(t,c,"TargetPurposeListen",r.currentSequenceNumber),e.$r.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.ss.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.ss=e.ss.insert(r.targetId,r),e.os.set(t,r.targetId)),r})}async function ni(n,t,e){const r=U(n),s=r.ss.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,c=>r.persistence.referenceDelegate.removeTarget(c,s))}catch(c){if(!un(c))throw c;V("LocalStore",`Failed to update sequence numbers for target ${t}: ${c}`)}r.ss=r.ss.remove(t),r.os.delete(s.target)}function Io(n,t,e){const r=U(n);let s=x.min(),o=q();return r.persistence.runTransaction("Execute query","readwrite",c=>function(d,f,_){const A=U(d),R=A.os.get(_);return R!==void 0?S.resolve(A.ss.get(R)):A.$r.getTargetData(f,_)}(r,c,Rt(t)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.$r.getMatchingKeysForTargetId(c,l.targetId).next(d=>{o=d})}).next(()=>r.rs.getDocumentsMatchingQuery(c,t,e?s:x.min(),e?o:q())).next(l=>(wf(r,md(t),l),{documents:l,Is:o})))}function wf(n,t,e){let r=n._s.get(t)||x.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n._s.set(t,r)}class wo{constructor(){this.activeTargetIds=Id()}Vs(t){this.activeTargetIds=this.activeTargetIds.add(t)}fs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Rs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Af{constructor(){this.io=new wo,this.so={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.io.Vs(t),this.so[t]||"not-current"}updateQueryState(t,e,r){this.so[t]=e}removeLocalQueryTarget(t){this.io.fs(t)}isLocalQueryTarget(t){return this.io.activeTargetIds.has(t)}clearQueryState(t){delete this.so[t]}getAllActiveQueryTargets(){return this.io.activeTargetIds}isActiveQueryTarget(t){return this.io.activeTargetIds.has(t)}start(){return this.io=new wo,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{oo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(){this._o=()=>this.ao(),this.uo=()=>this.co(),this.lo=[],this.ho()}oo(t){this.lo.push(t)}shutdown(){window.removeEventListener("online",this._o),window.removeEventListener("offline",this.uo)}ho(){window.addEventListener("online",this._o),window.addEventListener("offline",this.uo)}ao(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.lo)t(0)}co(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.lo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let On=null;function Fr(){return On===null?On=function(){return 268435456+Math.round(2147483648*Math.random())}():On++,"0x"+On.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(t){this.Po=t.Po,this.Io=t.Io}To(t){this.Eo=t}Ao(t){this.Ro=t}Vo(t){this.mo=t}onMessage(t){this.fo=t}close(){this.Io()}send(t){this.Po(t)}po(){this.Eo()}yo(){this.Ro()}wo(t){this.mo(t)}So(t){this.fo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft="WebChannelConnection";class Pf extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.bo=r+"://"+e.host,this.Do=`projects/${s}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get vo(){return!1}Fo(e,r,s,o,c){const l=Fr(),d=this.Mo(e,r.toUriEncodedString());V("RestConnection",`Sending RPC '${e}' ${l}:`,d,s);const f={"google-cloud-resource-prefix":this.Do,"x-goog-request-params":this.Co};return this.xo(f,o,c),this.Oo(e,d,f,s).then(_=>(V("RestConnection",`Received RPC '${e}' ${l}: `,_),_),_=>{throw ve("RestConnection",`RPC '${e}' ${l} failed with error: `,_,"url: ",d,"request:",s),_})}No(e,r,s,o,c,l){return this.Fo(e,r,s,o,c)}xo(e,r,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Re}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,c)=>e[c]=o),s&&s.headers.forEach((o,c)=>e[c]=o)}Mo(e,r){const s=Sf[e];return`${this.bo}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Oo(t,e,r,s){const o=Fr();return new Promise((c,l)=>{const d=new ma;d.setWithCredentials(!0),d.listenOnce(ya.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case xn.NO_ERROR:const _=d.getResponseJson();V(ft,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(_)),c(_);break;case xn.TIMEOUT:V(ft,`RPC '${t}' ${o} timed out`),l(new k(b.DEADLINE_EXCEEDED,"Request time out"));break;case xn.HTTP_ERROR:const A=d.getStatus();if(V(ft,`RPC '${t}' ${o} failed with status:`,A,"response text:",d.getResponseText()),A>0){let R=d.getResponseJson();Array.isArray(R)&&(R=R[0]);const C=R==null?void 0:R.error;if(C&&C.status&&C.message){const O=function(D){const Y=D.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(Y)>=0?Y:b.UNKNOWN}(C.status);l(new k(O,C.message))}else l(new k(b.UNKNOWN,"Server responded with status "+d.getStatus()))}else l(new k(b.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{V(ft,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(s);V(ft,`RPC '${t}' ${o} sending request:`,s),d.send(e,"POST",f,r,15)})}Lo(t,e,r){const s=Fr(),o=[this.bo,"/","google.firestore.v1.Firestore","/",t,"/channel"],c=Ta(),l=Ea(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(d.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(d.xmlHttpFactory=new _a({})),this.xo(d.initMessageHeaders,e,r),d.encodeInitMessageHeaders=!0;const _=o.join("");V(ft,`Creating RPC '${t}' stream ${s}: ${_}`,d);const A=c.createWebChannel(_,d);let R=!1,C=!1;const O=new Cf({Po:D=>{C?V(ft,`Not sending because RPC '${t}' stream ${s} is closed:`,D):(R||(V(ft,`Opening RPC '${t}' stream ${s} transport.`),A.open(),R=!0),V(ft,`RPC '${t}' stream ${s} sending:`,D),A.send(D))},Io:()=>A.close()}),L=(D,Y,G)=>{D.listen(Y,K=>{try{G(K)}catch(nt){setTimeout(()=>{throw nt},0)}})};return L(A,Ke.EventType.OPEN,()=>{C||(V(ft,`RPC '${t}' stream ${s} transport opened.`),O.po())}),L(A,Ke.EventType.CLOSE,()=>{C||(C=!0,V(ft,`RPC '${t}' stream ${s} transport closed`),O.wo())}),L(A,Ke.EventType.ERROR,D=>{C||(C=!0,ve(ft,`RPC '${t}' stream ${s} transport errored:`,D),O.wo(new k(b.UNAVAILABLE,"The operation could not be completed")))}),L(A,Ke.EventType.MESSAGE,D=>{var Y;if(!C){const G=D.data[0];tt(!!G);const K=G,nt=K.error||((Y=K[0])===null||Y===void 0?void 0:Y.error);if(nt){V(ft,`RPC '${t}' stream ${s} received error:`,nt);const Pt=nt.status;let it=function(m){const y=J[m];if(y!==void 0)return Ba(y)}(Pt),E=nt.message;it===void 0&&(it=b.INTERNAL,E="Unknown error status: "+Pt+" with message "+nt.message),C=!0,O.wo(new k(it,E)),A.close()}else V(ft,`RPC '${t}' stream ${s} received:`,G),O.So(G)}}),L(l,va.STAT_EVENT,D=>{D.stat===Hr.PROXY?V(ft,`RPC '${t}' stream ${s} detected buffering proxy`):D.stat===Hr.NOPROXY&&V(ft,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{O.yo()},0),O}}function Ur(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xa(n){return new Bd(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(t,e,r=1e3,s=1.5,o=6e4){this.ai=t,this.timerId=e,this.Bo=r,this.ko=s,this.qo=o,this.Qo=0,this.Ko=null,this.$o=Date.now(),this.reset()}reset(){this.Qo=0}Uo(){this.Qo=this.qo}Wo(t){this.cancel();const e=Math.floor(this.Qo+this.Go()),r=Math.max(0,Date.now()-this.$o),s=Math.max(0,e-r);s>0&&V("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Qo} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.Ko=this.ai.enqueueAfterDelay(this.timerId,s,()=>(this.$o=Date.now(),t())),this.Qo*=this.ko,this.Qo<this.Bo&&(this.Qo=this.Bo),this.Qo>this.qo&&(this.Qo=this.qo)}zo(){this.Ko!==null&&(this.Ko.skipDelay(),this.Ko=null)}cancel(){this.Ko!==null&&(this.Ko.cancel(),this.Ko=null)}Go(){return(Math.random()-.5)*this.Qo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(t,e,r,s,o,c,l,d){this.ai=t,this.jo=r,this.Ho=s,this.connection=o,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=l,this.listener=d,this.state=0,this.Jo=0,this.Yo=null,this.Zo=null,this.stream=null,this.Xo=0,this.e_=new Ja(t,e)}t_(){return this.state===1||this.state===5||this.n_()}n_(){return this.state===2||this.state===3}start(){this.Xo=0,this.state!==4?this.auth():this.r_()}async stop(){this.t_()&&await this.close(0)}i_(){this.state=0,this.e_.reset()}s_(){this.n_()&&this.Yo===null&&(this.Yo=this.ai.enqueueAfterDelay(this.jo,6e4,()=>this.o_()))}__(t){this.a_(),this.stream.send(t)}async o_(){if(this.n_())return this.close(0)}a_(){this.Yo&&(this.Yo.cancel(),this.Yo=null)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}async close(t,e){this.a_(),this.u_(),this.e_.cancel(),this.Jo++,t!==4?this.e_.reset():e&&e.code===b.RESOURCE_EXHAUSTED?(xt(e.toString()),xt("Using maximum backoff delay to prevent overloading the backend."),this.e_.Uo()):e&&e.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.c_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Vo(e)}c_(){}auth(){this.state=1;const t=this.l_(this.Jo),e=this.Jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Jo===e&&this.h_(r,s)},r=>{t(()=>{const s=new k(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.P_(s)})})}h_(t,e){const r=this.l_(this.Jo);this.stream=this.I_(t,e),this.stream.To(()=>{r(()=>this.listener.To())}),this.stream.Ao(()=>{r(()=>(this.state=2,this.Zo=this.ai.enqueueAfterDelay(this.Ho,1e4,()=>(this.n_()&&(this.state=3),Promise.resolve())),this.listener.Ao()))}),this.stream.Vo(s=>{r(()=>this.P_(s))}),this.stream.onMessage(s=>{r(()=>++this.Xo==1?this.T_(s):this.onNext(s))})}r_(){this.state=5,this.e_.Wo(async()=>{this.state=0,this.start()})}P_(t){return V("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}l_(t){return e=>{this.ai.enqueueAndForget(()=>this.Jo===t?e():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Vf extends bf{constructor(t,e,r,s,o,c){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,c),this.serializer=o}I_(t,e){return this.connection.Lo("Listen",t,e)}T_(t){return this.onNext(t)}onNext(t){this.e_.reset();const e=Hd(this.serializer,t),r=function(o){if(!("targetChange"in o))return x.min();const c=o.targetChange;return c.targetIds&&c.targetIds.length?x.min():c.readTime?_e(c.readTime):x.min()}(t);return this.listener.E_(e,r)}d_(t){const e={};e.database=To(this.serializer),e.addTarget=function(o,c){let l;const d=c.target;if(l=Yr(d)?{documents:Gd(o,d)}:{query:Kd(o,d)._t},l.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){l.resumeToken=$d(o,c.resumeToken);const f=ti(o,c.expectedCount);f!==null&&(l.expectedCount=f)}else if(c.snapshotVersion.compareTo(x.min())>0){l.readTime=qd(o,c.snapshotVersion.toTimestamp());const f=ti(o,c.expectedCount);f!==null&&(l.expectedCount=f)}return l}(this.serializer,t);const r=Wd(this.serializer,t);r&&(e.labels=r),this.__(e)}A_(t){const e={};e.database=To(this.serializer),e.removeTarget=t,this.__(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df extends class{}{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.p_=!1}y_(){if(this.p_)throw new k(b.FAILED_PRECONDITION,"The client has already been terminated.")}Fo(t,e,r,s){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Fo(t,ei(e,r),s,o,c)).catch(o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new k(b.UNKNOWN,o.toString())})}No(t,e,r,s,o){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,l])=>this.connection.No(t,ei(e,r),s,c,l,o)).catch(c=>{throw c.name==="FirebaseError"?(c.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new k(b.UNKNOWN,c.toString())})}terminate(){this.p_=!0,this.connection.terminate()}}class kf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.w_=0,this.S_=null,this.b_=!0}D_(){this.w_===0&&(this.C_("Unknown"),this.S_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.S_=null,this.v_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}F_(t){this.state==="Online"?this.C_("Unknown"):(this.w_++,this.w_>=1&&(this.M_(),this.v_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.M_(),this.w_=0,t==="Online"&&(this.b_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}v_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.b_?(xt(e),this.b_=!1):V("OnlineStateTracker",e)}M_(){this.S_!==null&&(this.S_.cancel(),this.S_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.x_=[],this.O_=new Map,this.N_=new Set,this.L_=[],this.B_=o,this.B_.oo(c=>{r.enqueueAndForget(async()=>{dn(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(d){const f=U(d);f.N_.add(4),await hn(f),f.k_.set("Unknown"),f.N_.delete(4),await or(f)}(this))})}),this.k_=new kf(r,s)}}async function or(n){if(dn(n))for(const t of n.L_)await t(!0)}async function hn(n){for(const t of n.L_)await t(!1)}function Za(n,t){const e=U(n);e.O_.has(t.targetId)||(e.O_.set(t.targetId,t),ki(e)?Di(e):Ce(e).n_()&&Vi(e,t))}function bi(n,t){const e=U(n),r=Ce(e);e.O_.delete(t),r.n_()&&tc(e,t),e.O_.size===0&&(r.n_()?r.s_():dn(e)&&e.k_.set("Unknown"))}function Vi(n,t){if(n.q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(x.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Ce(n).d_(t)}function tc(n,t){n.q_.xe(t),Ce(n).A_(t)}function Di(n){n.q_=new Md({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.O_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),Ce(n).start(),n.k_.D_()}function ki(n){return dn(n)&&!Ce(n).t_()&&n.O_.size>0}function dn(n){return U(n).N_.size===0}function ec(n){n.q_=void 0}async function Of(n){n.k_.set("Online")}async function xf(n){n.O_.forEach((t,e)=>{Vi(n,t)})}async function Mf(n,t){ec(n),ki(n)?(n.k_.F_(t),Di(n)):n.k_.set("Unknown")}async function Lf(n,t,e){if(n.k_.set("Online"),t instanceof $a&&t.state===2&&t.cause)try{await async function(s,o){const c=o.cause;for(const l of o.targetIds)s.O_.has(l)&&(await s.remoteSyncer.rejectListen(l,c),s.O_.delete(l),s.q_.removeTarget(l))}(n,t)}catch(r){V("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Ro(n,r)}else if(t instanceof Ln?n.q_.Ke(t):t instanceof qa?n.q_.He(t):n.q_.We(t),!e.isEqual(x.min()))try{const r=await Ya(n.localStore);e.compareTo(r)>=0&&await function(o,c){const l=o.q_.rt(c);return l.targetChanges.forEach((d,f)=>{if(d.resumeToken.approximateByteSize()>0){const _=o.O_.get(f);_&&o.O_.set(f,_.withResumeToken(d.resumeToken,c))}}),l.targetMismatches.forEach((d,f)=>{const _=o.O_.get(d);if(!_)return;o.O_.set(d,_.withResumeToken(ct.EMPTY_BYTE_STRING,_.snapshotVersion)),tc(o,d);const A=new qt(_.target,d,f,_.sequenceNumber);Vi(o,A)}),o.remoteSyncer.applyRemoteEvent(l)}(n,e)}catch(r){V("RemoteStore","Failed to raise snapshot:",r),await Ro(n,r)}}async function Ro(n,t,e){if(!un(t))throw t;n.N_.add(1),await hn(n),n.k_.set("Offline"),e||(e=()=>Ya(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await e(),n.N_.delete(1),await or(n)})}async function So(n,t){const e=U(n);e.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const r=dn(e);e.N_.add(3),await hn(e),r&&e.k_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.N_.delete(3),await or(e)}async function Ff(n,t){const e=U(n);t?(e.N_.delete(2),await or(e)):t||(e.N_.add(2),await hn(e),e.k_.set("Unknown"))}function Ce(n){return n.Q_||(n.Q_=function(e,r,s){const o=U(e);return o.y_(),new Vf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{To:Of.bind(null,n),Ao:xf.bind(null,n),Vo:Mf.bind(null,n),E_:Lf.bind(null,n)}),n.L_.push(async t=>{t?(n.Q_.i_(),ki(n)?Di(n):n.k_.set("Unknown")):(await n.Q_.stop(),ec(n))})),n.Q_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new ne,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const c=Date.now()+r,l=new Ni(t,e,c,s,o);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(b.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function nc(n,t){if(xt("AsyncQueue",`${t}: ${n}`),un(n))return new k(b.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(t){this.comparator=t?(e,r)=>t(e,r)||N.comparator(e.key,r.key):(e,r)=>N.comparator(e.key,r.key),this.keyedMap=Qe(),this.sortedSet=new X(this.comparator)}static emptySet(t){return new ye(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof ye)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new ye;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(){this.U_=new X(N.comparator)}track(t){const e=t.doc.key,r=this.U_.get(e);r?t.type!==0&&r.type===3?this.U_=this.U_.insert(e,t):t.type===3&&r.type!==1?this.U_=this.U_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.U_=this.U_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.U_=this.U_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.U_=this.U_.remove(e):t.type===1&&r.type===2?this.U_=this.U_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.U_=this.U_.insert(e,{type:2,doc:t.doc}):M():this.U_=this.U_.insert(e,t)}W_(){const t=[];return this.U_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Ae{constructor(t,e,r,s,o,c,l,d,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=c,this.syncStateChanged=l,this.excludesMetadataChanges=d,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,s,o){const c=[];return e.forEach(l=>{c.push({type:0,doc:l})}),new Ae(t,e,ye.emptySet(e),c,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&er(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(){this.G_=void 0,this.z_=[]}j_(){return this.z_.some(t=>t.H_())}}class Bf{constructor(){this.queries=Po(),this.onlineState="Unknown",this.J_=new Set}terminate(){(function(e,r){const s=U(e),o=s.queries;s.queries=Po(),o.forEach((c,l)=>{for(const d of l.z_)d.onError(r)})})(this,new k(b.ABORTED,"Firestore shutting down"))}}function Po(){return new Se(n=>Da(n),er)}async function qf(n,t){const e=U(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.j_()&&t.H_()&&(r=2):(o=new Uf,r=t.H_()?0:1);try{switch(r){case 0:o.G_=await e.onListen(s,!0);break;case 1:o.G_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(c){const l=nc(c,`Initialization of query '${pe(t.query)}' failed`);return void t.onError(l)}e.queries.set(s,o),o.z_.push(t),t.Y_(e.onlineState),o.G_&&t.Z_(o.G_)&&Oi(e)}async function $f(n,t){const e=U(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const c=o.z_.indexOf(t);c>=0&&(o.z_.splice(c,1),o.z_.length===0?s=t.H_()?0:1:!o.j_()&&t.H_()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function jf(n,t){const e=U(n);let r=!1;for(const s of t){const o=s.query,c=e.queries.get(o);if(c){for(const l of c.z_)l.Z_(s)&&(r=!0);c.G_=s}}r&&Oi(e)}function zf(n,t,e){const r=U(n),s=r.queries.get(t);if(s)for(const o of s.z_)o.onError(e);r.queries.delete(t)}function Oi(n){n.J_.forEach(t=>{t.next()})}var ri,bo;(bo=ri||(ri={})).X_="default",bo.Cache="cache";class Hf{constructor(t,e,r){this.query=t,this.ea=e,this.ta=!1,this.na=null,this.onlineState="Unknown",this.options=r||{}}Z_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Ae(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ta?this.ra(t)&&(this.ea.next(t),e=!0):this.ia(t,this.onlineState)&&(this.sa(t),e=!0),this.na=t,e}onError(t){this.ea.error(t)}Y_(t){this.onlineState=t;let e=!1;return this.na&&!this.ta&&this.ia(this.na,t)&&(this.sa(this.na),e=!0),e}ia(t,e){if(!t.fromCache||!this.H_())return!0;const r=e!=="Offline";return(!this.options.oa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ra(t){if(t.docChanges.length>0)return!0;const e=this.na&&this.na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}sa(t){t=Ae.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ta=!0,this.ea.next(t)}H_(){return this.options.source!==ri.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(t){this.key=t}}class ic{constructor(t){this.key=t}}class Gf{constructor(t,e){this.query=t,this.Ia=e,this.Ta=null,this.hasCachedResults=!1,this.current=!1,this.Ea=q(),this.mutatedKeys=q(),this.da=ka(t),this.Aa=new ye(this.da)}get Ra(){return this.Ia}Va(t,e){const r=e?e.ma:new Co,s=e?e.Aa:this.Aa;let o=e?e.mutatedKeys:this.mutatedKeys,c=s,l=!1;const d=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((_,A)=>{const R=s.get(_),C=nr(this.query,A)?A:null,O=!!R&&this.mutatedKeys.has(R.key),L=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let D=!1;R&&C?R.data.isEqual(C.data)?O!==L&&(r.track({type:3,doc:C}),D=!0):this.fa(R,C)||(r.track({type:2,doc:C}),D=!0,(d&&this.da(C,d)>0||f&&this.da(C,f)<0)&&(l=!0)):!R&&C?(r.track({type:0,doc:C}),D=!0):R&&!C&&(r.track({type:1,doc:R}),D=!0,(d||f)&&(l=!0)),D&&(C?(c=c.add(C),o=L?o.add(_):o.delete(_)):(c=c.delete(_),o=o.delete(_)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const _=this.query.limitType==="F"?c.last():c.first();c=c.delete(_.key),o=o.delete(_.key),r.track({type:1,doc:_})}return{Aa:c,ma:r,ts:l,mutatedKeys:o}}fa(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.Aa;this.Aa=t.Aa,this.mutatedKeys=t.mutatedKeys;const c=t.ma.W_();c.sort((_,A)=>function(C,O){const L=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return L(C)-L(O)}(_.type,A.type)||this.da(_.doc,A.doc)),this.ga(r),s=s!=null&&s;const l=e&&!s?this.pa():[],d=this.Ea.size===0&&this.current&&!s?1:0,f=d!==this.Ta;return this.Ta=d,c.length!==0||f?{snapshot:new Ae(this.query,t.Aa,o,c,t.mutatedKeys,d===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),ya:l}:{ya:l}}Y_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Aa:this.Aa,ma:new Co,mutatedKeys:this.mutatedKeys,ts:!1},!1)):{ya:[]}}wa(t){return!this.Ia.has(t)&&!!this.Aa.has(t)&&!this.Aa.get(t).hasLocalMutations}ga(t){t&&(t.addedDocuments.forEach(e=>this.Ia=this.Ia.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ia=this.Ia.delete(e)),this.current=t.current)}pa(){if(!this.current)return[];const t=this.Ea;this.Ea=q(),this.Aa.forEach(r=>{this.wa(r.key)&&(this.Ea=this.Ea.add(r.key))});const e=[];return t.forEach(r=>{this.Ea.has(r)||e.push(new ic(r))}),this.Ea.forEach(r=>{t.has(r)||e.push(new rc(r))}),e}Sa(t){this.Ia=t.Is,this.Ea=q();const e=this.Va(t.documents);return this.applyChanges(e,!0)}ba(){return Ae.fromInitialDocuments(this.query,this.Aa,this.mutatedKeys,this.Ta===0,this.hasCachedResults)}}class Kf{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Qf{constructor(t){this.key=t,this.Da=!1}}class Wf{constructor(t,e,r,s,o,c){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=c,this.Ca={},this.va=new Se(l=>Da(l),er),this.Fa=new Map,this.Ma=new Set,this.xa=new X(N.comparator),this.Oa=new Map,this.Na=new Si,this.La={},this.Ba=new Map,this.ka=we.Bn(),this.onlineState="Unknown",this.qa=void 0}get isPrimaryClient(){return this.qa===!0}}async function Yf(n,t,e=!0){const r=uc(n);let s;const o=r.va.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.ba()):s=await sc(r,t,e,!0),s}async function Xf(n,t){const e=uc(n);await sc(e,t,!0,!1)}async function sc(n,t,e,r){const s=await If(n.localStore,Rt(t)),o=s.targetId,c=e?n.sharedClientState.addLocalQueryTarget(o):"not-current";let l;return r&&(l=await Jf(n,t,o,c==="current",s.resumeToken)),n.isPrimaryClient&&e&&Za(n.remoteStore,s),l}async function Jf(n,t,e,r,s){n.Qa=(A,R,C)=>async function(L,D,Y,G){let K=D.view.Va(Y);K.ts&&(K=await Io(L.localStore,D.query,!1).then(({documents:E})=>D.view.Va(E,K)));const nt=G&&G.targetChanges.get(D.targetId),Pt=G&&G.targetMismatches.get(D.targetId)!=null,it=D.view.applyChanges(K,L.isPrimaryClient,nt,Pt);return Do(L,D.targetId,it.ya),it.snapshot}(n,A,R,C);const o=await Io(n.localStore,t,!0),c=new Gf(t,o.Is),l=c.Va(o.documents),d=ln.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),f=c.applyChanges(l,n.isPrimaryClient,d);Do(n,e,f.ya);const _=new Kf(t,e,c);return n.va.set(t,_),n.Fa.has(e)?n.Fa.get(e).push(t):n.Fa.set(e,[t]),f.snapshot}async function Zf(n,t,e){const r=U(n),s=r.va.get(t),o=r.Fa.get(s.targetId);if(o.length>1)return r.Fa.set(s.targetId,o.filter(c=>!er(c,t))),void r.va.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ni(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&bi(r.remoteStore,s.targetId),ii(r,s.targetId)}).catch(gi)):(ii(r,s.targetId),await ni(r.localStore,s.targetId,!0))}async function tp(n,t){const e=U(n),r=e.va.get(t),s=e.Fa.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),bi(e.remoteStore,r.targetId))}async function oc(n,t){const e=U(n);try{const r=await Ef(e.localStore,t);t.targetChanges.forEach((s,o)=>{const c=e.Oa.get(o);c&&(tt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?c.Da=!0:s.modifiedDocuments.size>0?tt(c.Da):s.removedDocuments.size>0&&(tt(c.Da),c.Da=!1))}),await cc(e,r,t)}catch(r){await gi(r)}}function Vo(n,t,e){const r=U(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.va.forEach((o,c)=>{const l=c.view.Y_(t);l.snapshot&&s.push(l.snapshot)}),function(c,l){const d=U(c);d.onlineState=l;let f=!1;d.queries.forEach((_,A)=>{for(const R of A.z_)R.Y_(l)&&(f=!0)}),f&&Oi(d)}(r.eventManager,t),s.length&&r.Ca.E_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function ep(n,t,e){const r=U(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Oa.get(t),o=s&&s.key;if(o){let c=new X(N.comparator);c=c.insert(o,gt.newNoDocument(o,x.min()));const l=q().add(o),d=new sr(x.min(),new Map,new X(j),c,l);await oc(r,d),r.xa=r.xa.remove(o),r.Oa.delete(t),xi(r)}else await ni(r.localStore,t,!1).then(()=>ii(r,t,e)).catch(gi)}function ii(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Fa.get(t))n.va.delete(r),e&&n.Ca.Ka(r,e);n.Fa.delete(t),n.isPrimaryClient&&n.Na.mr(t).forEach(r=>{n.Na.containsKey(r)||ac(n,r)})}function ac(n,t){n.Ma.delete(t.path.canonicalString());const e=n.xa.get(t);e!==null&&(bi(n.remoteStore,e),n.xa=n.xa.remove(t),n.Oa.delete(e),xi(n))}function Do(n,t,e){for(const r of e)r instanceof rc?(n.Na.addReference(r.key,t),np(n,r)):r instanceof ic?(V("SyncEngine","Document no longer in limbo: "+r.key),n.Na.removeReference(r.key,t),n.Na.containsKey(r.key)||ac(n,r.key)):M()}function np(n,t){const e=t.key,r=e.path.canonicalString();n.xa.get(e)||n.Ma.has(r)||(V("SyncEngine","New document in limbo: "+e),n.Ma.add(r),xi(n))}function xi(n){for(;n.Ma.size>0&&n.xa.size<n.maxConcurrentLimboResolutions;){const t=n.Ma.values().next().value;n.Ma.delete(t);const e=new N(W.fromString(t)),r=n.ka.next();n.Oa.set(r,new Qf(e)),n.xa=n.xa.insert(e,r),Za(n.remoteStore,new qt(Rt(Ii(e.path)),r,"TargetPurposeLimboResolution",mi.oe))}}async function cc(n,t,e){const r=U(n),s=[],o=[],c=[];r.va.isEmpty()||(r.va.forEach((l,d)=>{c.push(r.Qa(d,t,e).then(f=>{var _;if((f||e)&&r.isPrimaryClient){const A=f?!f.fromCache:(_=e==null?void 0:e.targetChanges.get(d.targetId))===null||_===void 0?void 0:_.current;r.sharedClientState.updateQueryState(d.targetId,A?"current":"not-current")}if(f){s.push(f);const A=Pi.Ui(d.targetId,f);o.push(A)}}))}),await Promise.all(c),r.Ca.E_(s),await async function(d,f){const _=U(d);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>S.forEach(f,R=>S.forEach(R.Ki,C=>_.persistence.referenceDelegate.addReference(A,R.targetId,C)).next(()=>S.forEach(R.$i,C=>_.persistence.referenceDelegate.removeReference(A,R.targetId,C)))))}catch(A){if(!un(A))throw A;V("LocalStore","Failed to update sequence numbers: "+A)}for(const A of f){const R=A.targetId;if(!A.fromCache){const C=_.ss.get(R),O=C.snapshotVersion,L=C.withLastLimboFreeSnapshotVersion(O);_.ss=_.ss.insert(R,L)}}}(r.localStore,o))}async function rp(n,t){const e=U(n);if(!e.currentUser.isEqual(t)){V("SyncEngine","User change. New user:",t.toKey());const r=await Wa(e.localStore,t);e.currentUser=t,function(o,c){o.Ba.forEach(l=>{l.forEach(d=>{d.reject(new k(b.CANCELLED,c))})}),o.Ba.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await cc(e,r.ls)}}function ip(n,t){const e=U(n),r=e.Oa.get(t);if(r&&r.Da)return q().add(r.key);{let s=q();const o=e.Fa.get(t);if(!o)return s;for(const c of o){const l=e.va.get(c);s=s.unionWith(l.view.Ra)}return s}}function uc(n){const t=U(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=oc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=ip.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=ep.bind(null,t),t.Ca.E_=jf.bind(null,t.eventManager),t.Ca.Ka=zf.bind(null,t.eventManager),t}class ko{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Xa(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return vf(this.persistence,new _f,t.initialUser,this.serializer)}createPersistence(t){return new pf(Ci.Yr,this.serializer)}createSharedClientState(t){return new Af}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class sp{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Vo(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=rp.bind(null,this.syncEngine),await Ff(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Bf}()}createDatastore(t){const e=Xa(t.databaseInfo.databaseId),r=function(o){return new Pf(o)}(t.databaseInfo);return function(o,c,l,d){return new Df(o,c,l,d)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,c,l){return new Nf(r,s,o,c,l)}(this.localStore,this.datastore,t.asyncQueue,e=>Vo(this.syncEngine,e,0),function(){return Ao.D()?new Ao:new Rf}())}createSyncEngine(t,e){return function(s,o,c,l,d,f,_){const A=new Wf(s,o,c,l,d,f);return _&&(A.qa=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=U(s);V("RemoteStore","RemoteStore shutting down."),o.N_.add(5),await hn(o),o.B_.shutdown(),o.k_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Wa(this.observer.next,t)}error(t){this.observer.error?this.Wa(this.observer.error,t):xt("Uncaught Error in snapshot listener:",t.toString())}Ga(){this.muted=!0}Wa(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(t,e,r,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=pt.UNAUTHENTICATED,this.clientId=wa.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{V("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(V("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new k(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ne;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=nc(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Br(n,t){n.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Wa(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function No(n,t){n.asyncQueue.verifyOperationInProgress();const e=await up(n);V("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>So(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>So(t.remoteStore,s)),n._onlineComponents=t}function cp(n){return n.name==="FirebaseError"?n.code===b.FAILED_PRECONDITION||n.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function up(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await Br(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!cp(e))throw e;ve("Error using user provided cache. Falling back to memory cache: "+e),await Br(n,new ko)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await Br(n,new ko);return n._offlineComponents}async function lp(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await No(n,n._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await No(n,new sp))),n._onlineComponents}async function hp(n){const t=await lp(n),e=t.eventManager;return e.onListen=Yf.bind(null,t.syncEngine),e.onUnlisten=Zf.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Xf.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=tp.bind(null,t.syncEngine),e}function dp(n,t,e={}){const r=new ne;return n.asyncQueue.enqueueAndForget(async()=>function(o,c,l,d,f){const _=new op({next:R=>{c.enqueueAndForget(()=>$f(o,A));const C=R.docs.has(l);!C&&R.fromCache?f.reject(new k(b.UNAVAILABLE,"Failed to get document because the client is offline.")):C&&R.fromCache&&d&&d.source==="server"?f.reject(new k(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(R)},error:R=>f.reject(R)}),A=new Hf(Ii(l.path),_,{includeMetadataChanges:!0,oa:!0});return qf(o,A)}(await hp(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(n,t,e){if(!e)throw new k(b.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function pp(n,t,e,r){if(t===!0&&r===!0)throw new k(b.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function xo(n){if(!N.isDocumentKey(n))throw new k(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function gp(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":M()}function si(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new k(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=gp(n);throw new k(b.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new k(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new k(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}pp("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=lc((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new k(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new k(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new k(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Mi{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Mo({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new k(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new k(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Mo(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Fh;switch(r.type){case"firstParty":return new $h(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new k(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Oo.get(e);r&&(V("ComponentProvider","Removing Datastore"),Oo.delete(e),r.terminate())}(this),Promise.resolve()}}function mp(n,t,e,r={}){var s;const o=(n=si(n,Mi))._getSettings(),c=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==c&&ve("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:c,ssl:!1})),r.mockUserToken){let l,d;if(typeof r.mockUserToken=="string")l=r.mockUserToken,d=pt.MOCK_USER;else{l=uu(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new k(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new pt(f)}n._authCredentials=new Uh(new Ia(l,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Li(this.firestore,t,this._query)}}class Nt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new an(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Nt(this.firestore,t,this._key)}}class an extends Li{constructor(t,e,r){super(t,e,Ii(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Nt(this.firestore,null,new N(t))}withConverter(t){return new an(this.firestore,t,this._path)}}function qp(n,t,...e){if(n=ai(n),arguments.length===1&&(t=wa.newId()),fp("doc","path",t),n instanceof Mi){const r=W.fromString(t,...e);return xo(r),new Nt(n,null,new N(r))}{if(!(n instanceof Nt||n instanceof an))throw new k(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(W.fromString(t,...e));return xo(r),new Nt(n.firestore,n instanceof an?n.converter:null,new N(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(){this._u=Promise.resolve(),this.au=[],this.uu=!1,this.cu=[],this.lu=null,this.hu=!1,this.Pu=!1,this.Iu=[],this.e_=new Ja(this,"async_queue_retry"),this.Tu=()=>{const e=Ur();e&&V("AsyncQueue","Visibility state changed to "+e.visibilityState),this.e_.zo()};const t=Ur();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Tu)}get isShuttingDown(){return this.uu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Eu(),this.du(t)}enterRestrictedMode(t){if(!this.uu){this.uu=!0,this.Pu=t||!1;const e=Ur();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Tu)}}enqueue(t){if(this.Eu(),this.uu)return new Promise(()=>{});const e=new ne;return this.du(()=>this.uu&&this.Pu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.au.push(t),this.Au()))}async Au(){if(this.au.length!==0){try{await this.au[0](),this.au.shift(),this.e_.reset()}catch(t){if(!un(t))throw t;V("AsyncQueue","Operation failed with retryable error: "+t)}this.au.length>0&&this.e_.Wo(()=>this.Au())}}du(t){const e=this._u.then(()=>(this.hu=!0,t().catch(r=>{this.lu=r,this.hu=!1;const s=function(c){let l=c.message||"";return c.stack&&(l=c.stack.includes(c.message)?c.stack:c.message+`
`+c.stack),l}(r);throw xt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.hu=!1,r))));return this._u=e,e}enqueueAfterDelay(t,e,r){this.Eu(),this.Iu.indexOf(t)>-1&&(e=0);const s=Ni.createAndSchedule(this,t,e,r,o=>this.Ru(o));return this.cu.push(s),s}Eu(){this.lu&&M()}verifyOperationInProgress(){}async Vu(){let t;do t=this._u,await t;while(t!==this._u)}mu(t){for(const e of this.cu)if(e.timerId===t)return!0;return!1}fu(t){return this.Vu().then(()=>{this.cu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.cu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Vu()})}gu(t){this.Iu.push(t)}Ru(t){const e=this.cu.indexOf(t);this.cu.splice(e,1)}}class hc extends Mi{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=function(){return new _p}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||dc(this),this._firestoreClient.terminate()}}function $p(n,t){const e=typeof n=="object"?n:zo(),r=typeof n=="string"?n:"(default)",s=cn(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=au("firestore");o&&mp(s,...o)}return s}function yp(n){return n._firestoreClient||dc(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function dc(n){var t,e,r;const s=n._freezeSettings(),o=function(l,d,f,_){return new ed(l,d,f,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,lc(_.experimentalLongPollingOptions),_.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new ap(n._authCredentials,n._appCheckCredentials,n._queue,o),!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Kn(ct.fromBase64String(t))}catch(e){throw new k(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Kn(ct.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new k(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new k(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new k(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return j(this._lat,t._lat)||j(this._long,t._long)}}const Ep=new RegExp("[~\\*/\\[\\]]");function Tp(n,t,e){if(t.search(Ep)>=0)throw Lo(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new fc(...t.split("."))._internalPath}catch{throw Lo(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function Lo(n,t,e,r,s){let o=`Function ${t}() called with invalid data`;o+=". ";let c="";return new k(b.INVALID_ARGUMENT,o+n+c)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Ip(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(gc("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Ip extends pc{data(){return super.data()}}function gc(n,t){return typeof t=="string"?Tp(n,t):t instanceof fc?t._internalPath:t._delegate._internalPath}class wp{convertValue(t,e="none"){switch(ue(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Z(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ce(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw M()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Zn(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertGeoPoint(t){return new vp(Z(t.latitude),Z(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=yi(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(rn(t));default:return null}}convertTimestamp(t){const e=Ht(t);return new Et(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=W.fromString(t);tt(Qa(r));const s=new sn(r.get(1),r.get(3)),o=new N(r.popFirst(5));return s.isEqual(e)||xt(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class mc extends pc{constructor(t,e,r,s,o,c){super(t,e,r,s,c),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Rp(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(gc("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class Rp extends mc{data(t={}){return super.data(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(n){n=si(n,Nt);const t=si(n.firestore,hc);return dp(yp(t),n._key).then(e=>Cp(t,n,e))}class Sp extends wp{constructor(t){super(),this.firestore=t}convertBytes(t){return new Kn(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Nt(this.firestore,null,e)}}function Cp(n,t,e){const r=e.docs.get(t._key),s=new Sp(n);return new mc(n,s,t._key,r,new Ap(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(s){Re=s})(ul),jt(new Ot("firestore",(r,{instanceIdentifier:s,options:o})=>{const c=r.getProvider("app").getImmediate(),l=new hc(new Bh(r.getProvider("auth-internal")),new zh(r.getProvider("app-check-internal")),function(f,_){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new k(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sn(f.options.projectId,_)}(c,s),c);return o=Object.assign({useFetchStreams:e},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),kt(eo,"4.6.5",t),kt(eo,"4.6.5","esm2017")})();export{Ot as C,Wn as E,Kt as F,ci as L,ul as S,jt as _,Dp as a,cn as b,ou as c,zo as d,hu as e,Mp as f,bp as g,ai as h,Vp as i,xp as j,Un as k,B as l,oi as m,eu as n,kp as o,Np as p,Op as q,kt as r,ll as s,Lp as t,$p as u,jp as v,qp as w};
