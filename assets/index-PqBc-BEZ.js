(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ht=globalThis,me=Ht.ShadowRoot&&(Ht.ShadyCSS===void 0||Ht.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ge=Symbol(),Ce=new WeakMap;let Je=class{constructor(t,o,i){if(this._$cssResult$=!0,i!==ge)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=o}get styleSheet(){let t=this.o;const o=this.t;if(me&&t===void 0){const i=o!==void 0&&o.length===1;i&&(t=Ce.get(o)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Ce.set(o,t))}return t}toString(){return this.cssText}};const Co=e=>new Je(typeof e=="string"?e:e+"",void 0,ge),ht=(e,...t)=>{const o=e.length===1?e[0]:t.reduce((i,s,r)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[r+1],e[0]);return new Je(o,e,ge)},Eo=(e,t)=>{if(me)e.adoptedStyleSheets=t.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet);else for(const o of t){const i=document.createElement("style"),s=Ht.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=o.cssText,e.appendChild(i)}},Ee=me?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let o="";for(const i of t.cssRules)o+=i.cssText;return Co(o)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:So,defineProperty:Po,getOwnPropertyDescriptor:ko,getOwnPropertyNames:zo,getOwnPropertySymbols:Lo,getPrototypeOf:Oo}=Object,Q=globalThis,Se=Q.trustedTypes,To=Se?Se.emptyScript:"",ee=Q.reactiveElementPolyfillSupport,kt=(e,t)=>e,mt={toAttribute(e,t){switch(t){case Boolean:e=e?To:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=e!==null;break;case Number:o=e===null?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch{o=null}}return o}},ye=(e,t)=>!So(e,t),Pe={attribute:!0,type:String,converter:mt,reflect:!1,hasChanged:ye};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Q.litPropertyMetadata??(Q.litPropertyMetadata=new WeakMap);class pt extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,o=Pe){if(o.state&&(o.attribute=!1),this._$Ei(),this.elementProperties.set(t,o),!o.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,o);s!==void 0&&Po(this.prototype,t,s)}}static getPropertyDescriptor(t,o,i){const{get:s,set:r}=ko(this.prototype,t)??{get(){return this[o]},set(n){this[o]=n}};return{get(){return s==null?void 0:s.call(this)},set(n){const l=s==null?void 0:s.call(this);r.call(this,n),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Pe}static _$Ei(){if(this.hasOwnProperty(kt("elementProperties")))return;const t=Oo(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(kt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(kt("properties"))){const o=this.properties,i=[...zo(o),...Lo(o)];for(const s of i)this.createProperty(s,o[s])}const t=this[Symbol.metadata];if(t!==null){const o=litPropertyMetadata.get(t);if(o!==void 0)for(const[i,s]of o)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[o,i]of this.elementProperties){const s=this._$Eu(o,i);s!==void 0&&this._$Eh.set(s,o)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const o=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)o.unshift(Ee(s))}else t!==void 0&&o.push(Ee(t));return o}static _$Eu(t,o){const i=o.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(o=>this.enableUpdating=o),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(o=>o(this))}addController(t){var o;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)==null||o.call(t))}removeController(t){var o;(o=this._$EO)==null||o.delete(t)}_$E_(){const t=new Map,o=this.constructor.elementProperties;for(const i of o.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Eo(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(o=>{var i;return(i=o.hostConnected)==null?void 0:i.call(o)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(o=>{var i;return(i=o.hostDisconnected)==null?void 0:i.call(o)})}attributeChangedCallback(t,o,i){this._$AK(t,i)}_$EC(t,o){var r;const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const n=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:mt).toAttribute(o,i.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,o){var r;const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const n=i.getPropertyOptions(s),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((r=n.converter)==null?void 0:r.fromAttribute)!==void 0?n.converter:mt;this._$Em=s,this[s]=l.fromAttribute(o,n.type),this._$Em=null}}requestUpdate(t,o,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??ye)(this[t],o))return;this.P(t,o,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,o,i){this._$AL.has(t)||this._$AL.set(t,o),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(o){Promise.reject(o)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[r,n]of s)n.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],n)}let t=!1;const o=this._$AL;try{t=this.shouldUpdate(o),t?(this.willUpdate(o),(i=this._$EO)==null||i.forEach(s=>{var r;return(r=s.hostUpdate)==null?void 0:r.call(s)}),this.update(o)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(o)}willUpdate(t){}_$AE(t){var o;(o=this._$EO)==null||o.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(o=>this._$EC(o,this[o]))),this._$EU()}updated(t){}firstUpdated(t){}}pt.elementStyles=[],pt.shadowRootOptions={mode:"open"},pt[kt("elementProperties")]=new Map,pt[kt("finalized")]=new Map,ee==null||ee({ReactiveElement:pt}),(Q.reactiveElementVersions??(Q.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zt=globalThis,Wt=zt.trustedTypes,ke=Wt?Wt.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ge="$lit$",G=`lit$${Math.random().toFixed(9).slice(2)}$`,Qe="?"+G,Ro=`<${Qe}>`,lt=document,Ot=()=>lt.createComment(""),Tt=e=>e===null||typeof e!="object"&&typeof e!="function",to=Array.isArray,Mo=e=>to(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",oe=`[ 	
\f\r]`,At=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ze=/-->/g,Le=/>/g,st=RegExp(`>|${oe}(?:([^\\s"'>=/]+)(${oe}*=${oe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Oe=/'/g,Te=/"/g,eo=/^(?:script|style|textarea|title)$/i,Bo=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),gt=Bo(1),M=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),Re=new WeakMap,at=lt.createTreeWalker(lt,129);function oo(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return ke!==void 0?ke.createHTML(t):t}const No=(e,t)=>{const o=e.length-1,i=[];let s,r=t===2?"<svg>":"",n=At;for(let l=0;l<o;l++){const a=e[l];let c,p,d=-1,m=0;for(;m<a.length&&(n.lastIndex=m,p=n.exec(a),p!==null);)m=n.lastIndex,n===At?p[1]==="!--"?n=ze:p[1]!==void 0?n=Le:p[2]!==void 0?(eo.test(p[2])&&(s=RegExp("</"+p[2],"g")),n=st):p[3]!==void 0&&(n=st):n===st?p[0]===">"?(n=s??At,d=-1):p[1]===void 0?d=-2:(d=n.lastIndex-p[2].length,c=p[1],n=p[3]===void 0?st:p[3]==='"'?Te:Oe):n===Te||n===Oe?n=st:n===ze||n===Le?n=At:(n=st,s=void 0);const u=n===st&&e[l+1].startsWith("/>")?" ":"";r+=n===At?a+Ro:d>=0?(i.push(c),a.slice(0,d)+Ge+a.slice(d)+G+u):a+G+(d===-2?l:u)}return[oo(e,r+(e[o]||"<?>")+(t===2?"</svg>":"")),i]};class Rt{constructor({strings:t,_$litType$:o},i){let s;this.parts=[];let r=0,n=0;const l=t.length-1,a=this.parts,[c,p]=No(t,o);if(this.el=Rt.createElement(c,i),at.currentNode=this.el.content,o===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(s=at.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const d of s.getAttributeNames())if(d.endsWith(Ge)){const m=p[n++],u=s.getAttribute(d).split(G),g=/([.?@])?(.*)/.exec(m);a.push({type:1,index:r,name:g[2],strings:u,ctor:g[1]==="."?Vo:g[1]==="?"?Uo:g[1]==="@"?Io:Zt}),s.removeAttribute(d)}else d.startsWith(G)&&(a.push({type:6,index:r}),s.removeAttribute(d));if(eo.test(s.tagName)){const d=s.textContent.split(G),m=d.length-1;if(m>0){s.textContent=Wt?Wt.emptyScript:"";for(let u=0;u<m;u++)s.append(d[u],Ot()),at.nextNode(),a.push({type:2,index:++r});s.append(d[m],Ot())}}}else if(s.nodeType===8)if(s.data===Qe)a.push({type:2,index:r});else{let d=-1;for(;(d=s.data.indexOf(G,d+1))!==-1;)a.push({type:7,index:r}),d+=G.length-1}r++}}static createElement(t,o){const i=lt.createElement("template");return i.innerHTML=t,i}}function yt(e,t,o=e,i){var n,l;if(t===M)return t;let s=i!==void 0?(n=o._$Co)==null?void 0:n[i]:o._$Cl;const r=Tt(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==r&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),r===void 0?s=void 0:(s=new r(e),s._$AT(e,o,i)),i!==void 0?(o._$Co??(o._$Co=[]))[i]=s:o._$Cl=s),s!==void 0&&(t=yt(e,s._$AS(e,t.values),s,i)),t}class Do{constructor(t,o){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=o}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:o},parts:i}=this._$AD,s=((t==null?void 0:t.creationScope)??lt).importNode(o,!0);at.currentNode=s;let r=at.nextNode(),n=0,l=0,a=i[0];for(;a!==void 0;){if(n===a.index){let c;a.type===2?c=new Bt(r,r.nextSibling,this,t):a.type===1?c=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(c=new Fo(r,this,t)),this._$AV.push(c),a=i[++l]}n!==(a==null?void 0:a.index)&&(r=at.nextNode(),n++)}return at.currentNode=lt,s}p(t){let o=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,o),o+=i.strings.length-2):i._$AI(t[o])),o++}}class Bt{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,o,i,s){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=o,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const o=this._$AM;return o!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=o.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,o=this){t=yt(this,t,o),Tt(t)?t===E||t==null||t===""?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==M&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Mo(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==E&&Tt(this._$AH)?this._$AA.nextSibling.data=t:this.T(lt.createTextNode(t)),this._$AH=t}$(t){var r;const{values:o,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=Rt.createElement(oo(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===s)this._$AH.p(o);else{const n=new Do(s,this),l=n.u(this.options);n.p(o),this.T(l),this._$AH=n}}_$AC(t){let o=Re.get(t.strings);return o===void 0&&Re.set(t.strings,o=new Rt(t)),o}k(t){to(this._$AH)||(this._$AH=[],this._$AR());const o=this._$AH;let i,s=0;for(const r of t)s===o.length?o.push(i=new Bt(this.S(Ot()),this.S(Ot()),this,this.options)):i=o[s],i._$AI(r),s++;s<o.length&&(this._$AR(i&&i._$AB.nextSibling,s),o.length=s)}_$AR(t=this._$AA.nextSibling,o){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,o);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var o;this._$AM===void 0&&(this._$Cv=t,(o=this._$AP)==null||o.call(this,t))}}class Zt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,o,i,s,r){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=o,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=E}_$AI(t,o=this,i,s){const r=this.strings;let n=!1;if(r===void 0)t=yt(this,t,o,0),n=!Tt(t)||t!==this._$AH&&t!==M,n&&(this._$AH=t);else{const l=t;let a,c;for(t=r[0],a=0;a<r.length-1;a++)c=yt(this,l[i+a],o,a),c===M&&(c=this._$AH[a]),n||(n=!Tt(c)||c!==this._$AH[a]),c===E?t=E:t!==E&&(t+=(c??"")+r[a+1]),this._$AH[a]=c}n&&!s&&this.j(t)}j(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Vo extends Zt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===E?void 0:t}}class Uo extends Zt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==E)}}class Io extends Zt{constructor(t,o,i,s,r){super(t,o,i,s,r),this.type=5}_$AI(t,o=this){if((t=yt(this,t,o,0)??E)===M)return;const i=this._$AH,s=t===E&&i!==E||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==E&&(i===E||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var o;typeof this._$AH=="function"?this._$AH.call(((o=this.options)==null?void 0:o.host)??this.element,t):this._$AH.handleEvent(t)}}class Fo{constructor(t,o,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=o,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){yt(this,t)}}const ie=zt.litHtmlPolyfillSupport;ie==null||ie(Rt,Bt),(zt.litHtmlVersions??(zt.litHtmlVersions=[])).push("3.1.4");const Ho=(e,t,o)=>{const i=(o==null?void 0:o.renderBefore)??t;let s=i._$litPart$;if(s===void 0){const r=(o==null?void 0:o.renderBefore)??null;i._$litPart$=s=new Bt(t.insertBefore(Ot(),r),r,void 0,o??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Lt extends pt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var o;const t=super.createRenderRoot();return(o=this.renderOptions).renderBefore??(o.renderBefore=t.firstChild),t}update(t){const o=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ho(o,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return M}}var Ze;Lt._$litElement$=!0,Lt.finalized=!0,(Ze=globalThis.litElementHydrateSupport)==null||Ze.call(globalThis,{LitElement:Lt});const se=globalThis.litElementPolyfillSupport;se==null||se({LitElement:Lt});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");var jo=ht`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,Wo=ht`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`,Nt=ht`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,io=Object.defineProperty,qo=Object.defineProperties,Yo=Object.getOwnPropertyDescriptor,Xo=Object.getOwnPropertyDescriptors,Me=Object.getOwnPropertySymbols,Ko=Object.prototype.hasOwnProperty,Zo=Object.prototype.propertyIsEnumerable,Be=(e,t,o)=>t in e?io(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,dt=(e,t)=>{for(var o in t||(t={}))Ko.call(t,o)&&Be(e,o,t[o]);if(Me)for(var o of Me(t))Zo.call(t,o)&&Be(e,o,t[o]);return e},Jt=(e,t)=>qo(e,Xo(t)),h=(e,t,o,i)=>{for(var s=i>1?void 0:i?Yo(t,o):t,r=e.length-1,n;r>=0;r--)(n=e[r])&&(s=(i?n(t,o,s):n(s))||s);return i&&s&&io(t,o,s),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jo={attribute:!0,type:String,converter:mt,reflect:!1,hasChanged:ye},Go=(e=Jo,t,o)=>{const{kind:i,metadata:s}=o;let r=globalThis.litPropertyMetadata.get(s);if(r===void 0&&globalThis.litPropertyMetadata.set(s,r=new Map),r.set(o.name,e),i==="accessor"){const{name:n}=o;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(n,a,e)},init(l){return l!==void 0&&this.P(n,void 0,e),l}}}if(i==="setter"){const{name:n}=o;return function(l){const a=this[n];t.call(this,l),this.requestUpdate(n,a,e)}}throw Error("Unsupported decorator location: "+i)};function f(e){return(t,o)=>typeof o=="object"?Go(e,t,o):((i,s,r)=>{const n=s.hasOwnProperty(r);return s.constructor.createProperty(r,n?{...i,wrapped:!0}:i),n?Object.getOwnPropertyDescriptor(s,r):void 0})(e,t,o)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Gt(e){return f({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qo=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,o),o);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function j(e,t){return(o,i,s)=>{const r=n=>{var l;return((l=n.renderRoot)==null?void 0:l.querySelector(e))??null};return Qo(o,i,{get(){return r(this)}})}}var q=class extends Lt{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const o=new CustomEvent(e,dt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(o),o}static define(e,t=this,o={}){const i=customElements.get(e);if(!i){customElements.define(e,class extends t{},o);return}let s=" (unknown version)",r=s;"version"in t&&t.version&&(s=" v"+t.version),"version"in i&&i.version&&(r=" v"+i.version),!(s&&r&&s===r)&&console.warn(`Attempted to register <${e}>${s}, but <${e}>${r} has already been registered.`)}};q.version="2.15.1";q.dependencies={};h([f()],q.prototype,"dir",2);h([f()],q.prototype,"lang",2);const I=Math.min,O=Math.max,qt=Math.round,Ut=Math.floor,tt=e=>({x:e,y:e}),ti={left:"right",right:"left",bottom:"top",top:"bottom"},ei={start:"end",end:"start"};function he(e,t,o){return O(e,I(t,o))}function wt(e,t){return typeof e=="function"?e(t):e}function et(e){return e.split("-")[0]}function xt(e){return e.split("-")[1]}function so(e){return e==="x"?"y":"x"}function ve(e){return e==="y"?"height":"width"}function Dt(e){return["top","bottom"].includes(et(e))?"y":"x"}function be(e){return so(Dt(e))}function oi(e,t,o){o===void 0&&(o=!1);const i=xt(e),s=be(e),r=ve(s);let n=s==="x"?i===(o?"end":"start")?"right":"left":i==="start"?"bottom":"top";return t.reference[r]>t.floating[r]&&(n=Yt(n)),[n,Yt(n)]}function ii(e){const t=Yt(e);return[de(e),t,de(t)]}function de(e){return e.replace(/start|end/g,t=>ei[t])}function si(e,t,o){const i=["left","right"],s=["right","left"],r=["top","bottom"],n=["bottom","top"];switch(e){case"top":case"bottom":return o?t?s:i:t?i:s;case"left":case"right":return t?r:n;default:return[]}}function ri(e,t,o,i){const s=xt(e);let r=si(et(e),o==="start",i);return s&&(r=r.map(n=>n+"-"+s),t&&(r=r.concat(r.map(de)))),r}function Yt(e){return e.replace(/left|right|bottom|top/g,t=>ti[t])}function ni(e){return{top:0,right:0,bottom:0,left:0,...e}}function ro(e){return typeof e!="number"?ni(e):{top:e,right:e,bottom:e,left:e}}function Xt(e){const{x:t,y:o,width:i,height:s}=e;return{width:i,height:s,top:o,left:t,right:t+i,bottom:o+s,x:t,y:o}}function Ne(e,t,o){let{reference:i,floating:s}=e;const r=Dt(t),n=be(t),l=ve(n),a=et(t),c=r==="y",p=i.x+i.width/2-s.width/2,d=i.y+i.height/2-s.height/2,m=i[l]/2-s[l]/2;let u;switch(a){case"top":u={x:p,y:i.y-s.height};break;case"bottom":u={x:p,y:i.y+i.height};break;case"right":u={x:i.x+i.width,y:d};break;case"left":u={x:i.x-s.width,y:d};break;default:u={x:i.x,y:i.y}}switch(xt(t)){case"start":u[n]-=m*(o&&c?-1:1);break;case"end":u[n]+=m*(o&&c?-1:1);break}return u}const ai=async(e,t,o)=>{const{placement:i="bottom",strategy:s="absolute",middleware:r=[],platform:n}=o,l=r.filter(Boolean),a=await(n.isRTL==null?void 0:n.isRTL(t));let c=await n.getElementRects({reference:e,floating:t,strategy:s}),{x:p,y:d}=Ne(c,i,a),m=i,u={},g=0;for(let y=0;y<l.length;y++){const{name:b,fn:v}=l[y],{x,y:_,data:C,reset:A}=await v({x:p,y:d,initialPlacement:i,placement:m,strategy:s,middlewareData:u,rects:c,platform:n,elements:{reference:e,floating:t}});p=x??p,d=_??d,u={...u,[b]:{...u[b],...C}},A&&g<=50&&(g++,typeof A=="object"&&(A.placement&&(m=A.placement),A.rects&&(c=A.rects===!0?await n.getElementRects({reference:e,floating:t,strategy:s}):A.rects),{x:p,y:d}=Ne(c,m,a)),y=-1)}return{x:p,y:d,placement:m,strategy:s,middlewareData:u}};async function we(e,t){var o;t===void 0&&(t={});const{x:i,y:s,platform:r,rects:n,elements:l,strategy:a}=e,{boundary:c="clippingAncestors",rootBoundary:p="viewport",elementContext:d="floating",altBoundary:m=!1,padding:u=0}=wt(t,e),g=ro(u),b=l[m?d==="floating"?"reference":"floating":d],v=Xt(await r.getClippingRect({element:(o=await(r.isElement==null?void 0:r.isElement(b)))==null||o?b:b.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(l.floating)),boundary:c,rootBoundary:p,strategy:a})),x=d==="floating"?{x:i,y:s,width:n.floating.width,height:n.floating.height}:n.reference,_=await(r.getOffsetParent==null?void 0:r.getOffsetParent(l.floating)),C=await(r.isElement==null?void 0:r.isElement(_))?await(r.getScale==null?void 0:r.getScale(_))||{x:1,y:1}:{x:1,y:1},A=Xt(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:x,offsetParent:_,strategy:a}):x);return{top:(v.top-A.top+g.top)/C.y,bottom:(A.bottom-v.bottom+g.bottom)/C.y,left:(v.left-A.left+g.left)/C.x,right:(A.right-v.right+g.right)/C.x}}const li=e=>({name:"arrow",options:e,async fn(t){const{x:o,y:i,placement:s,rects:r,platform:n,elements:l,middlewareData:a}=t,{element:c,padding:p=0}=wt(e,t)||{};if(c==null)return{};const d=ro(p),m={x:o,y:i},u=be(s),g=ve(u),y=await n.getDimensions(c),b=u==="y",v=b?"top":"left",x=b?"bottom":"right",_=b?"clientHeight":"clientWidth",C=r.reference[g]+r.reference[u]-m[u]-r.floating[g],A=m[u]-r.reference[u],k=await(n.getOffsetParent==null?void 0:n.getOffsetParent(c));let z=k?k[_]:0;(!z||!await(n.isElement==null?void 0:n.isElement(k)))&&(z=l.floating[_]||r.floating[g]);const N=C/2-A/2,K=z/2-y[g]/2-1,Z=I(d[v],K),J=I(d[x],K),R=Z,$t=z-y[g]-J,L=z/2-y[g]/2+N,D=he(R,L,$t),V=!a.arrow&&xt(s)!=null&&L!==D&&r.reference[g]/2-(L<R?Z:J)-y[g]/2<0,W=V?L<R?L-R:L-$t:0;return{[u]:m[u]+W,data:{[u]:D,centerOffset:L-D-W,...V&&{alignmentOffset:W}},reset:V}}}),ci=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var o,i;const{placement:s,middlewareData:r,rects:n,initialPlacement:l,platform:a,elements:c}=t,{mainAxis:p=!0,crossAxis:d=!0,fallbackPlacements:m,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:y=!0,...b}=wt(e,t);if((o=r.arrow)!=null&&o.alignmentOffset)return{};const v=et(s),x=et(l)===l,_=await(a.isRTL==null?void 0:a.isRTL(c.floating)),C=m||(x||!y?[Yt(l)]:ii(l));!m&&g!=="none"&&C.push(...ri(l,y,g,_));const A=[l,...C],k=await we(t,b),z=[];let N=((i=r.flip)==null?void 0:i.overflows)||[];if(p&&z.push(k[v]),d){const R=oi(s,n,_);z.push(k[R[0]],k[R[1]])}if(N=[...N,{placement:s,overflows:z}],!z.every(R=>R<=0)){var K,Z;const R=(((K=r.flip)==null?void 0:K.index)||0)+1,$t=A[R];if($t)return{data:{index:R,overflows:N},reset:{placement:$t}};let L=(Z=N.filter(D=>D.overflows[0]<=0).sort((D,V)=>D.overflows[1]-V.overflows[1])[0])==null?void 0:Z.placement;if(!L)switch(u){case"bestFit":{var J;const D=(J=N.map(V=>[V.placement,V.overflows.filter(W=>W>0).reduce((W,Ao)=>W+Ao,0)]).sort((V,W)=>V[1]-W[1])[0])==null?void 0:J[0];D&&(L=D);break}case"initialPlacement":L=l;break}if(s!==L)return{reset:{placement:L}}}return{}}}};async function hi(e,t){const{placement:o,platform:i,elements:s}=e,r=await(i.isRTL==null?void 0:i.isRTL(s.floating)),n=et(o),l=xt(o),a=Dt(o)==="y",c=["left","top"].includes(n)?-1:1,p=r&&a?-1:1,d=wt(t,e);let{mainAxis:m,crossAxis:u,alignmentAxis:g}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return l&&typeof g=="number"&&(u=l==="end"?g*-1:g),a?{x:u*p,y:m*c}:{x:m*c,y:u*p}}const di=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var o,i;const{x:s,y:r,placement:n,middlewareData:l}=t,a=await hi(t,e);return n===((o=l.offset)==null?void 0:o.placement)&&(i=l.arrow)!=null&&i.alignmentOffset?{}:{x:s+a.x,y:r+a.y,data:{...a,placement:n}}}}},pi=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:o,y:i,placement:s}=t,{mainAxis:r=!0,crossAxis:n=!1,limiter:l={fn:b=>{let{x:v,y:x}=b;return{x:v,y:x}}},...a}=wt(e,t),c={x:o,y:i},p=await we(t,a),d=Dt(et(s)),m=so(d);let u=c[m],g=c[d];if(r){const b=m==="y"?"top":"left",v=m==="y"?"bottom":"right",x=u+p[b],_=u-p[v];u=he(x,u,_)}if(n){const b=d==="y"?"top":"left",v=d==="y"?"bottom":"right",x=g+p[b],_=g-p[v];g=he(x,g,_)}const y=l.fn({...t,[m]:u,[d]:g});return{...y,data:{x:y.x-o,y:y.y-i}}}}},ui=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:o,rects:i,platform:s,elements:r}=t,{apply:n=()=>{},...l}=wt(e,t),a=await we(t,l),c=et(o),p=xt(o),d=Dt(o)==="y",{width:m,height:u}=i.floating;let g,y;c==="top"||c==="bottom"?(g=c,y=p===(await(s.isRTL==null?void 0:s.isRTL(r.floating))?"start":"end")?"left":"right"):(y=c,g=p==="end"?"top":"bottom");const b=u-a.top-a.bottom,v=m-a.left-a.right,x=I(u-a[g],b),_=I(m-a[y],v),C=!t.middlewareData.shift;let A=x,k=_;if(d?k=p||C?I(_,v):v:A=p||C?I(x,b):b,C&&!p){const N=O(a.left,0),K=O(a.right,0),Z=O(a.top,0),J=O(a.bottom,0);d?k=m-2*(N!==0||K!==0?N+K:O(a.left,a.right)):A=u-2*(Z!==0||J!==0?Z+J:O(a.top,a.bottom))}await n({...t,availableWidth:k,availableHeight:A});const z=await s.getDimensions(r.floating);return m!==z.width||u!==z.height?{reset:{rects:!0}}:{}}}};function _t(e){return no(e)?(e.nodeName||"").toLowerCase():"#document"}function T(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Y(e){var t;return(t=(no(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function no(e){return e instanceof Node||e instanceof T(e).Node}function F(e){return e instanceof Element||e instanceof T(e).Element}function H(e){return e instanceof HTMLElement||e instanceof T(e).HTMLElement}function De(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof T(e).ShadowRoot}function Vt(e){const{overflow:t,overflowX:o,overflowY:i,display:s}=B(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+o)&&!["inline","contents"].includes(s)}function fi(e){return["table","td","th"].includes(_t(e))}function xe(e){const t=_e(),o=B(e);return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!t&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!t&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(o.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(o.contain||"").includes(i))}function mi(e){let t=ot(e);for(;H(t)&&!vt(t);){if(xe(t))return t;t=ot(t)}return null}function _e(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function vt(e){return["html","body","#document"].includes(_t(e))}function B(e){return T(e).getComputedStyle(e)}function Qt(e){return F(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function ot(e){if(_t(e)==="html")return e;const t=e.assignedSlot||e.parentNode||De(e)&&e.host||Y(e);return De(t)?t.host:t}function ao(e){const t=ot(e);return vt(t)?e.ownerDocument?e.ownerDocument.body:e.body:H(t)&&Vt(t)?t:ao(t)}function Mt(e,t,o){var i;t===void 0&&(t=[]),o===void 0&&(o=!0);const s=ao(e),r=s===((i=e.ownerDocument)==null?void 0:i.body),n=T(s);return r?t.concat(n,n.visualViewport||[],Vt(s)?s:[],n.frameElement&&o?Mt(n.frameElement):[]):t.concat(s,Mt(s,[],o))}function lo(e){const t=B(e);let o=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const s=H(e),r=s?e.offsetWidth:o,n=s?e.offsetHeight:i,l=qt(o)!==r||qt(i)!==n;return l&&(o=r,i=n),{width:o,height:i,$:l}}function $e(e){return F(e)?e:e.contextElement}function ft(e){const t=$e(e);if(!H(t))return tt(1);const o=t.getBoundingClientRect(),{width:i,height:s,$:r}=lo(t);let n=(r?qt(o.width):o.width)/i,l=(r?qt(o.height):o.height)/s;return(!n||!Number.isFinite(n))&&(n=1),(!l||!Number.isFinite(l))&&(l=1),{x:n,y:l}}const gi=tt(0);function co(e){const t=T(e);return!_e()||!t.visualViewport?gi:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function yi(e,t,o){return t===void 0&&(t=!1),!o||t&&o!==T(e)?!1:t}function ct(e,t,o,i){t===void 0&&(t=!1),o===void 0&&(o=!1);const s=e.getBoundingClientRect(),r=$e(e);let n=tt(1);t&&(i?F(i)&&(n=ft(i)):n=ft(e));const l=yi(r,o,i)?co(r):tt(0);let a=(s.left+l.x)/n.x,c=(s.top+l.y)/n.y,p=s.width/n.x,d=s.height/n.y;if(r){const m=T(r),u=i&&F(i)?T(i):i;let g=m,y=g.frameElement;for(;y&&i&&u!==g;){const b=ft(y),v=y.getBoundingClientRect(),x=B(y),_=v.left+(y.clientLeft+parseFloat(x.paddingLeft))*b.x,C=v.top+(y.clientTop+parseFloat(x.paddingTop))*b.y;a*=b.x,c*=b.y,p*=b.x,d*=b.y,a+=_,c+=C,g=T(y),y=g.frameElement}}return Xt({width:p,height:d,x:a,y:c})}const vi=[":popover-open",":modal"];function Ae(e){return vi.some(t=>{try{return e.matches(t)}catch{return!1}})}function bi(e){let{elements:t,rect:o,offsetParent:i,strategy:s}=e;const r=s==="fixed",n=Y(i),l=t?Ae(t.floating):!1;if(i===n||l&&r)return o;let a={scrollLeft:0,scrollTop:0},c=tt(1);const p=tt(0),d=H(i);if((d||!d&&!r)&&((_t(i)!=="body"||Vt(n))&&(a=Qt(i)),H(i))){const m=ct(i);c=ft(i),p.x=m.x+i.clientLeft,p.y=m.y+i.clientTop}return{width:o.width*c.x,height:o.height*c.y,x:o.x*c.x-a.scrollLeft*c.x+p.x,y:o.y*c.y-a.scrollTop*c.y+p.y}}function wi(e){return Array.from(e.getClientRects())}function ho(e){return ct(Y(e)).left+Qt(e).scrollLeft}function xi(e){const t=Y(e),o=Qt(e),i=e.ownerDocument.body,s=O(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),r=O(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight);let n=-o.scrollLeft+ho(e);const l=-o.scrollTop;return B(i).direction==="rtl"&&(n+=O(t.clientWidth,i.clientWidth)-s),{width:s,height:r,x:n,y:l}}function _i(e,t){const o=T(e),i=Y(e),s=o.visualViewport;let r=i.clientWidth,n=i.clientHeight,l=0,a=0;if(s){r=s.width,n=s.height;const c=_e();(!c||c&&t==="fixed")&&(l=s.offsetLeft,a=s.offsetTop)}return{width:r,height:n,x:l,y:a}}function $i(e,t){const o=ct(e,!0,t==="fixed"),i=o.top+e.clientTop,s=o.left+e.clientLeft,r=H(e)?ft(e):tt(1),n=e.clientWidth*r.x,l=e.clientHeight*r.y,a=s*r.x,c=i*r.y;return{width:n,height:l,x:a,y:c}}function Ve(e,t,o){let i;if(t==="viewport")i=_i(e,o);else if(t==="document")i=xi(Y(e));else if(F(t))i=$i(t,o);else{const s=co(e);i={...t,x:t.x-s.x,y:t.y-s.y}}return Xt(i)}function po(e,t){const o=ot(e);return o===t||!F(o)||vt(o)?!1:B(o).position==="fixed"||po(o,t)}function Ai(e,t){const o=t.get(e);if(o)return o;let i=Mt(e,[],!1).filter(l=>F(l)&&_t(l)!=="body"),s=null;const r=B(e).position==="fixed";let n=r?ot(e):e;for(;F(n)&&!vt(n);){const l=B(n),a=xe(n);!a&&l.position==="fixed"&&(s=null),(r?!a&&!s:!a&&l.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||Vt(n)&&!a&&po(e,n))?i=i.filter(p=>p!==n):s=l,n=ot(n)}return t.set(e,i),i}function Ci(e){let{element:t,boundary:o,rootBoundary:i,strategy:s}=e;const n=[...o==="clippingAncestors"?Ae(t)?[]:Ai(t,this._c):[].concat(o),i],l=n[0],a=n.reduce((c,p)=>{const d=Ve(t,p,s);return c.top=O(d.top,c.top),c.right=I(d.right,c.right),c.bottom=I(d.bottom,c.bottom),c.left=O(d.left,c.left),c},Ve(t,l,s));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function Ei(e){const{width:t,height:o}=lo(e);return{width:t,height:o}}function Si(e,t,o){const i=H(t),s=Y(t),r=o==="fixed",n=ct(e,!0,r,t);let l={scrollLeft:0,scrollTop:0};const a=tt(0);if(i||!i&&!r)if((_t(t)!=="body"||Vt(s))&&(l=Qt(t)),i){const d=ct(t,!0,r,t);a.x=d.x+t.clientLeft,a.y=d.y+t.clientTop}else s&&(a.x=ho(s));const c=n.left+l.scrollLeft-a.x,p=n.top+l.scrollTop-a.y;return{x:c,y:p,width:n.width,height:n.height}}function re(e){return B(e).position==="static"}function Ue(e,t){return!H(e)||B(e).position==="fixed"?null:t?t(e):e.offsetParent}function uo(e,t){const o=T(e);if(Ae(e))return o;if(!H(e)){let s=ot(e);for(;s&&!vt(s);){if(F(s)&&!re(s))return s;s=ot(s)}return o}let i=Ue(e,t);for(;i&&fi(i)&&re(i);)i=Ue(i,t);return i&&vt(i)&&re(i)&&!xe(i)?o:i||mi(e)||o}const Pi=async function(e){const t=this.getOffsetParent||uo,o=this.getDimensions,i=await o(e.floating);return{reference:Si(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function ki(e){return B(e).direction==="rtl"}const jt={convertOffsetParentRelativeRectToViewportRelativeRect:bi,getDocumentElement:Y,getClippingRect:Ci,getOffsetParent:uo,getElementRects:Pi,getClientRects:wi,getDimensions:Ei,getScale:ft,isElement:F,isRTL:ki};function zi(e,t){let o=null,i;const s=Y(e);function r(){var l;clearTimeout(i),(l=o)==null||l.disconnect(),o=null}function n(l,a){l===void 0&&(l=!1),a===void 0&&(a=1),r();const{left:c,top:p,width:d,height:m}=e.getBoundingClientRect();if(l||t(),!d||!m)return;const u=Ut(p),g=Ut(s.clientWidth-(c+d)),y=Ut(s.clientHeight-(p+m)),b=Ut(c),x={rootMargin:-u+"px "+-g+"px "+-y+"px "+-b+"px",threshold:O(0,I(1,a))||1};let _=!0;function C(A){const k=A[0].intersectionRatio;if(k!==a){if(!_)return n();k?n(!1,k):i=setTimeout(()=>{n(!1,1e-7)},1e3)}_=!1}try{o=new IntersectionObserver(C,{...x,root:s.ownerDocument})}catch{o=new IntersectionObserver(C,x)}o.observe(e)}return n(!0),r}function Li(e,t,o,i){i===void 0&&(i={});const{ancestorScroll:s=!0,ancestorResize:r=!0,elementResize:n=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:a=!1}=i,c=$e(e),p=s||r?[...c?Mt(c):[],...Mt(t)]:[];p.forEach(v=>{s&&v.addEventListener("scroll",o,{passive:!0}),r&&v.addEventListener("resize",o)});const d=c&&l?zi(c,o):null;let m=-1,u=null;n&&(u=new ResizeObserver(v=>{let[x]=v;x&&x.target===c&&u&&(u.unobserve(t),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var _;(_=u)==null||_.observe(t)})),o()}),c&&!a&&u.observe(c),u.observe(t));let g,y=a?ct(e):null;a&&b();function b(){const v=ct(e);y&&(v.x!==y.x||v.y!==y.y||v.width!==y.width||v.height!==y.height)&&o(),y=v,g=requestAnimationFrame(b)}return o(),()=>{var v;p.forEach(x=>{s&&x.removeEventListener("scroll",o),r&&x.removeEventListener("resize",o)}),d==null||d(),(v=u)==null||v.disconnect(),u=null,a&&cancelAnimationFrame(g)}}const Oi=di,Ti=pi,Ri=ci,Ie=ui,Mi=li,Bi=(e,t,o)=>{const i=new Map,s={platform:jt,...o},r={...s.platform,_c:i};return ai(e,t,{...s,platform:r})};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},fo=e=>(...t)=>({_$litDirective$:e,values:t});class mo{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,o,i){this._$Ct=t,this._$AM=o,this._$Ci=i}_$AS(t,o){return this.update(t,o)}update(t,o){return this.render(...o)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bt=fo(class extends mo{constructor(e){var t;if(super(e),e.type!==rt.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var i,s;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!((i=this.nt)!=null&&i.has(r))&&this.st.add(r);return this.render(t)}const o=e.element.classList;for(const r of this.st)r in t||(o.remove(r),this.st.delete(r));for(const r in t){const n=!!t[r];n===this.st.has(r)||(s=this.nt)!=null&&s.has(r)||(n?(o.add(r),this.st.add(r)):(o.remove(r),this.st.delete(r)))}return M}});function Ni(e){return Di(e)}function ne(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Di(e){for(let t=e;t;t=ne(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=ne(e);t;t=ne(t)){if(!(t instanceof Element))continue;const o=getComputedStyle(t);if(o.display!=="contents"&&(o.position!=="static"||o.filter!=="none"||t.tagName==="BODY"))return t}return null}function Vi(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e&&("contextElement"in e?e instanceof Element:!0)}var $=class extends q{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),o=this.placement.includes("top")||this.placement.includes("bottom");let i=0,s=0,r=0,n=0,l=0,a=0,c=0,p=0;o?e.top<t.top?(i=e.left,s=e.bottom,r=e.right,n=e.bottom,l=t.left,a=t.top,c=t.right,p=t.top):(i=t.left,s=t.bottom,r=t.right,n=t.bottom,l=e.left,a=e.top,c=e.right,p=e.top):e.left<t.left?(i=e.right,s=e.top,r=t.left,n=t.top,l=e.right,a=e.bottom,c=t.left,p=t.bottom):(i=t.right,s=t.top,r=e.left,n=e.top,l=t.right,a=t.bottom,c=e.left,p=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${s}px`),this.style.setProperty("--hover-bridge-top-right-x",`${r}px`),this.style.setProperty("--hover-bridge-top-right-y",`${n}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${l}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${p}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||Vi(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&(this.cleanup=Li(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[Oi({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Ie({apply:({rects:o})=>{const i=this.sync==="width"||this.sync==="both",s=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${o.reference.width}px`:"",this.popup.style.height=s?`${o.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(Ri({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(Ti({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(Ie({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:o,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${o}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(Mi({element:this.arrowEl,padding:this.arrowPadding}));const t=this.strategy==="absolute"?o=>jt.getOffsetParent(o,Ni):jt.getOffsetParent;Bi(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:Jt(dt({},jt),{getOffsetParent:t})}).then(({x:o,y:i,middlewareData:s,placement:r})=>{const n=getComputedStyle(this).direction==="rtl",l={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]];if(this.setAttribute("data-current-placement",r),Object.assign(this.popup.style,{left:`${o}px`,top:`${i}px`}),this.arrow){const a=s.arrow.x,c=s.arrow.y;let p="",d="",m="",u="";if(this.arrowPlacement==="start"){const g=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";p=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",d=n?g:"",u=n?"":g}else if(this.arrowPlacement==="end"){const g=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=n?"":g,u=n?g:"",m=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(u=typeof a=="number"?"calc(50% - var(--arrow-size-diagonal))":"",p=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(u=typeof a=="number"?`${a}px`:"",p=typeof c=="number"?`${c}px`:"");Object.assign(this.arrowEl.style,{top:p,right:d,bottom:m,left:u,[l]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return gt`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${bt({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${bt({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?gt`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};$.styles=[Nt,Wo];h([j(".popup")],$.prototype,"popup",2);h([j(".popup__arrow")],$.prototype,"arrowEl",2);h([f()],$.prototype,"anchor",2);h([f({type:Boolean,reflect:!0})],$.prototype,"active",2);h([f({reflect:!0})],$.prototype,"placement",2);h([f({reflect:!0})],$.prototype,"strategy",2);h([f({type:Number})],$.prototype,"distance",2);h([f({type:Number})],$.prototype,"skidding",2);h([f({type:Boolean})],$.prototype,"arrow",2);h([f({attribute:"arrow-placement"})],$.prototype,"arrowPlacement",2);h([f({attribute:"arrow-padding",type:Number})],$.prototype,"arrowPadding",2);h([f({type:Boolean})],$.prototype,"flip",2);h([f({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],$.prototype,"flipFallbackPlacements",2);h([f({attribute:"flip-fallback-strategy"})],$.prototype,"flipFallbackStrategy",2);h([f({type:Object})],$.prototype,"flipBoundary",2);h([f({attribute:"flip-padding",type:Number})],$.prototype,"flipPadding",2);h([f({type:Boolean})],$.prototype,"shift",2);h([f({type:Object})],$.prototype,"shiftBoundary",2);h([f({attribute:"shift-padding",type:Number})],$.prototype,"shiftPadding",2);h([f({attribute:"auto-size"})],$.prototype,"autoSize",2);h([f()],$.prototype,"sync",2);h([f({type:Object})],$.prototype,"autoSizeBoundary",2);h([f({attribute:"auto-size-padding",type:Number})],$.prototype,"autoSizePadding",2);h([f({attribute:"hover-bridge",type:Boolean})],$.prototype,"hoverBridge",2);var go=new Map,Ui=new WeakMap;function Ii(e){return e??{keyframes:[],options:{duration:0}}}function Fe(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function te(e,t){go.set(e,Ii(t))}function Kt(e,t,o){const i=Ui.get(e);if(i!=null&&i[t])return Fe(i[t],o.dir);const s=go.get(t);return s?Fe(s,o.dir):{keyframes:[],options:{duration:0}}}function He(e,t){return new Promise(o=>{function i(s){s.target===e&&(e.removeEventListener(t,i),o())}e.addEventListener(t,i)})}function je(e,t,o){return new Promise(i=>{if((o==null?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const s=e.animate(t,Jt(dt({},o),{duration:Fi()?0:o.duration}));s.addEventListener("cancel",i,{once:!0}),s.addEventListener("finish",i,{once:!0})})}function We(e){return e=e.toString().toLowerCase(),e.indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?parseFloat(e)*1e3:parseFloat(e)}function Fi(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function qe(e){return Promise.all(e.getAnimations().map(t=>new Promise(o=>{t.cancel(),requestAnimationFrame(o)})))}const pe=new Set,Hi=new MutationObserver(wo),ut=new Map;let yo=document.documentElement.dir||"ltr",vo=document.documentElement.lang||navigator.language,nt;Hi.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function bo(...e){e.map(t=>{const o=t.$code.toLowerCase();ut.has(o)?ut.set(o,Object.assign(Object.assign({},ut.get(o)),t)):ut.set(o,t),nt||(nt=t)}),wo()}function wo(){yo=document.documentElement.dir||"ltr",vo=document.documentElement.lang||navigator.language,[...pe.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let ji=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){pe.add(this.host)}hostDisconnected(){pe.delete(this.host)}dir(){return`${this.host.dir||yo}`.toLowerCase()}lang(){return`${this.host.lang||vo}`.toLowerCase()}getTranslationData(t){var o,i;const s=new Intl.Locale(t.replace(/_/g,"-")),r=s==null?void 0:s.language.toLowerCase(),n=(i=(o=s==null?void 0:s.region)===null||o===void 0?void 0:o.toLowerCase())!==null&&i!==void 0?i:"",l=ut.get(`${r}-${n}`),a=ut.get(r);return{locale:s,language:r,region:n,primary:l,secondary:a}}exists(t,o){var i;const{primary:s,secondary:r}=this.getTranslationData((i=o.lang)!==null&&i!==void 0?i:this.lang());return o=Object.assign({includeFallback:!1},o),!!(s&&s[t]||r&&r[t]||o.includeFallback&&nt&&nt[t])}term(t,...o){const{primary:i,secondary:s}=this.getTranslationData(this.lang());let r;if(i&&i[t])r=i[t];else if(s&&s[t])r=s[t];else if(nt&&nt[t])r=nt[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof r=="function"?r(...o):r}date(t,o){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),o).format(t)}number(t,o){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),o).format(t)}relativeTime(t,o,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(t,o)}};var xo={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};bo(xo);var Wi=xo,_o=class extends ji{};bo(Wi);function it(e,t){const o=dt({waitUntilFirstUpdate:!1},t);return(i,s)=>{const{update:r}=i,n=Array.isArray(e)?e:[e];i.update=function(l){n.forEach(a=>{const c=a;if(l.has(c)){const p=l.get(c),d=this[c];p!==d&&(!o.waitUntilFirstUpdate||this.hasUpdated)&&this[s](p,d)}}),r.call(this,l)}}}var P=class extends q{constructor(){super(),this.localize=new _o(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{e.key==="Escape"&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=We(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=We(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await qe(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:o,options:i}=Kt(this,"tooltip.show",{dir:this.localize.dir()});await je(this.popup.popup,o,i),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await qe(this.body);const{keyframes:o,options:i}=Kt(this,"tooltip.hide",{dir:this.localize.dir()});await je(this.popup.popup,o,i),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,He(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,He(this,"sl-after-hide")}render(){return gt`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${bt({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};P.styles=[Nt,jo];P.dependencies={"sl-popup":$};h([j("slot:not([name])")],P.prototype,"defaultSlot",2);h([j(".tooltip__body")],P.prototype,"body",2);h([j("sl-popup")],P.prototype,"popup",2);h([f()],P.prototype,"content",2);h([f()],P.prototype,"placement",2);h([f({type:Boolean,reflect:!0})],P.prototype,"disabled",2);h([f({type:Number})],P.prototype,"distance",2);h([f({type:Boolean,reflect:!0})],P.prototype,"open",2);h([f({type:Number})],P.prototype,"skidding",2);h([f()],P.prototype,"trigger",2);h([f({type:Boolean})],P.prototype,"hoist",2);h([it("open",{waitUntilFirstUpdate:!0})],P.prototype,"handleOpenChange",1);h([it(["content","distance","hoist","placement","skidding"])],P.prototype,"handleOptionsChange",1);h([it("disabled")],P.prototype,"handleDisabledChange",1);te("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});te("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});var qi=ht`
  :host {
    --error-color: var(--sl-color-danger-600);
    --success-color: var(--sl-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`,Yi=ht`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,ue="";function Ye(e){ue=e}function Xi(e=""){if(!ue){const t=[...document.getElementsByTagName("script")],o=t.find(i=>i.hasAttribute("data-shoelace"));if(o)Ye(o.getAttribute("data-shoelace"));else{const i=t.find(r=>/shoelace(\.min)?\.js($|\?)/.test(r.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(r.src));let s="";i&&(s=i.getAttribute("src")),Ye(s.split("/").slice(0,-1).join("/"))}}return ue.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var Ki={name:"default",resolver:e=>Xi(`assets/icons/${e}.svg`)},Zi=Ki,Xe={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},Ji={name:"system",resolver:e=>e in Xe?`data:image/svg+xml,${encodeURIComponent(Xe[e])}`:""},Gi=Ji,Qi=[Zi,Gi],fe=[];function ts(e){fe.push(e)}function es(e){fe=fe.filter(t=>t!==e)}function Ke(e){return Qi.find(t=>t.name===e)}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const os=(e,t)=>(e==null?void 0:e._$litType$)!==void 0,is=e=>e.strings===void 0,ss={},rs=(e,t=ss)=>e._$AH=t;var Ct=Symbol(),It=Symbol(),ae,le=new Map,X=class extends q{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var o;let i;if(t!=null&&t.spriteSheet){this.svg=gt`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;const s=this.shadowRoot.querySelector("[part='svg']");return typeof t.mutator=="function"&&t.mutator(s),this.svg}try{if(i=await fetch(e,{mode:"cors"}),!i.ok)return i.status===410?Ct:It}catch{return It}try{const s=document.createElement("div");s.innerHTML=await i.text();const r=s.firstElementChild;if(((o=r==null?void 0:r.tagName)==null?void 0:o.toLowerCase())!=="svg")return Ct;ae||(ae=new DOMParser);const l=ae.parseFromString(r.outerHTML,"text/html").body.querySelector("svg");return l?(l.part.add("svg"),document.adoptNode(l)):Ct}catch{return Ct}}connectedCallback(){super.connectedCallback(),ts(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),es(this)}getIconSource(){const e=Ke(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:o}=this.getIconSource(),i=o?Ke(this.library):void 0;if(!t){this.svg=null;return}let s=le.get(t);if(s||(s=this.resolveIcon(t,i),le.set(t,s)),!this.initialRender)return;const r=await s;if(r===It&&le.delete(t),t===this.getIconSource().url){if(os(r)){this.svg=r;return}switch(r){case It:case Ct:this.svg=null,this.emit("sl-error");break;default:this.svg=r.cloneNode(!0),(e=i==null?void 0:i.mutator)==null||e.call(i,this.svg),this.emit("sl-load")}}}render(){return this.svg}};X.styles=[Nt,Yi];h([Gt()],X.prototype,"svg",2);h([f({reflect:!0})],X.prototype,"name",2);h([f()],X.prototype,"src",2);h([f()],X.prototype,"label",2);h([f({reflect:!0})],X.prototype,"library",2);h([it("label")],X.prototype,"handleLabelChange",1);h([it(["name","src","library"])],X.prototype,"setIcon",1);var S=class extends q{constructor(){super(...arguments),this.localize=new _o(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let e=this.value;if(this.from){const t=this.getRootNode(),o=this.from.includes("."),i=this.from.includes("[")&&this.from.includes("]");let s=this.from,r="";o?[s,r]=this.from.trim().split("."):i&&([s,r]=this.from.trim().replace(/\]$/,"").split("["));const n="getElementById"in t?t.getElementById(s):null;n?i?e=n.getAttribute(r)||"":o?e=n[r]||"":e=n.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!e)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(e),this.showStatus("success"),this.emit("sl-copy",{detail:{value:e}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(e){const t=this.copyLabel||this.localize.term("copy"),o=this.successLabel||this.localize.term("copied"),i=this.errorLabel||this.localize.term("error"),s=e==="success"?this.successIcon:this.errorIcon,r=Kt(this,"copy.in",{dir:"ltr"}),n=Kt(this,"copy.out",{dir:"ltr"});this.tooltip.content=e==="success"?o:i,await this.copyIcon.animate(n.keyframes,n.options).finished,this.copyIcon.hidden=!0,this.status=e,s.hidden=!1,await s.animate(r.keyframes,r.options).finished,setTimeout(async()=>{await s.animate(n.keyframes,n.options).finished,s.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(r.keyframes,r.options).finished,this.tooltip.content=t,this.isCopying=!1},this.feedbackDuration)}render(){const e=this.copyLabel||this.localize.term("copy");return gt`
      <sl-tooltip
        class=${bt({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error"})}
        content=${e}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base,
          base__popup:tooltip__base__popup,
          base__arrow:tooltip__base__arrow,
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <sl-icon library="system" name="copy"></sl-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <sl-icon library="system" name="check"></sl-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <sl-icon library="system" name="x-lg"></sl-icon>
          </slot>
        </button>
      </sl-tooltip>
    `}};S.styles=[Nt,qi];S.dependencies={"sl-icon":X,"sl-tooltip":P};h([j('slot[name="copy-icon"]')],S.prototype,"copyIcon",2);h([j('slot[name="success-icon"]')],S.prototype,"successIcon",2);h([j('slot[name="error-icon"]')],S.prototype,"errorIcon",2);h([j("sl-tooltip")],S.prototype,"tooltip",2);h([Gt()],S.prototype,"isCopying",2);h([Gt()],S.prototype,"status",2);h([f()],S.prototype,"value",2);h([f()],S.prototype,"from",2);h([f({type:Boolean,reflect:!0})],S.prototype,"disabled",2);h([f({attribute:"copy-label"})],S.prototype,"copyLabel",2);h([f({attribute:"success-label"})],S.prototype,"successLabel",2);h([f({attribute:"error-label"})],S.prototype,"errorLabel",2);h([f({attribute:"feedback-duration",type:Number})],S.prototype,"feedbackDuration",2);h([f({attribute:"tooltip-placement"})],S.prototype,"tooltipPlacement",2);h([f({type:Boolean})],S.prototype,"hoist",2);te("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});te("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});S.define("sl-copy-button");var ns=ht`
  :host {
    display: block;
  }

  .textarea {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`,as=(e="value")=>(t,o)=>{const i=t.constructor,s=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(r,n,l){var a;const c=i.getPropertyOptions(e),p=typeof c.attribute=="string"?c.attribute:e;if(r===p){const d=c.converter||mt,u=(typeof d=="function"?d:(a=d==null?void 0:d.fromAttribute)!=null?a:mt.fromAttribute)(l,c.type);this[e]!==u&&(this[o]=u)}s.call(this,r,n,l)}},ls=ht`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`,Et=new WeakMap,St=new WeakMap,Pt=new WeakMap,ce=new WeakSet,Ft=new WeakMap,cs=class{constructor(e,t){this.handleFormData=o=>{const i=this.options.disabled(this.host),s=this.options.name(this.host),r=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!i&&!n&&typeof s=="string"&&s.length>0&&typeof r<"u"&&(Array.isArray(r)?r.forEach(l=>{o.formData.append(s,l.toString())}):o.formData.append(s,r.toString()))},this.handleFormSubmit=o=>{var i;const s=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&((i=Et.get(this.form))==null||i.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!s&&!r(this.host)&&(o.preventDefault(),o.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Ft.set(this.host,[])},this.handleInteraction=o=>{const i=Ft.get(this.host);i.includes(o.type)||i.push(o.type),i.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const i of o)if(typeof i.checkValidity=="function"&&!i.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const i of o)if(typeof i.reportValidity=="function"&&!i.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=dt({form:o=>{const i=o.form;if(i){const r=o.getRootNode().querySelector(`#${i}`);if(r)return r}return o.closest("form")},name:o=>o.name,value:o=>o.value,defaultValue:o=>o.defaultValue,disabled:o=>{var i;return(i=o.disabled)!=null?i:!1},reportValidity:o=>typeof o.reportValidity=="function"?o.reportValidity():!0,checkValidity:o=>typeof o.checkValidity=="function"?o.checkValidity():!0,setValue:(o,i)=>o.value=i,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),Ft.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Ft.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,Et.has(this.form)?Et.get(this.form).add(this.host):Et.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),St.has(this.form)||(St.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Pt.has(this.form)||(Pt.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=Et.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),St.has(this.form)&&(this.form.reportValidity=St.get(this.form),St.delete(this.form)),Pt.has(this.form)&&(this.form.checkValidity=Pt.get(this.form),Pt.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?ce.add(e):ce.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const o=document.createElement("button");o.type=e,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",t&&(o.name=t.name,o.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{t.hasAttribute(i)&&o.setAttribute(i,t.getAttribute(i))})),this.form.append(o),o.click(),o.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,o=!!ce.has(t),i=!!t.required;t.toggleAttribute("data-required",i),t.toggleAttribute("data-optional",!i),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&o),t.toggleAttribute("data-user-valid",e&&o)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e==null||e.preventDefault()}},$o=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(Jt(dt({},$o),{valid:!1,valueMissing:!0}));Object.freeze(Jt(dt({},$o),{valid:!1,customError:!0}));var hs=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=o=>{const i=o.target;(this.slotNames.includes("[default]")&&!i.name||i.name&&this.slotNames.includes(i.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=e=>e??E;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ds=fo(class extends mo{constructor(e){if(super(e),e.type!==rt.PROPERTY&&e.type!==rt.ATTRIBUTE&&e.type!==rt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!is(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===M||t===E)return t;const o=e.element,i=e.name;if(e.type===rt.PROPERTY){if(t===o[i])return M}else if(e.type===rt.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(i))return M}else if(e.type===rt.ATTRIBUTE&&o.getAttribute(i)===t+"")return M;return rs(e),t}});var w=class extends q{constructor(){super(...arguments),this.formControlController=new cs(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new hs(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){super.disconnectedCallback(),this.input&&this.resizeObserver.unobserve(this.input)}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}setTextareaHeight(){this.resize==="auto"?(this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top=="number"&&(this.input.scrollTop=e.top),typeof e.left=="number"&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,o="none"){this.input.setSelectionRange(e,t,o)}setRangeText(e,t,o,i="preserve"){const s=t??this.input.selectionStart,r=o??this.input.selectionEnd;this.input.setRangeText(e,s,r,i),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),o=this.label?!0:!!e,i=this.helpText?!0:!!t;return gt`
      <div
        part="form-control"
        class=${bt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":o,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${bt({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${U(this.name)}
              .value=${ds(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${U(this.placeholder)}
              rows=${U(this.rows)}
              minlength=${U(this.minlength)}
              maxlength=${U(this.maxlength)}
              autocapitalize=${U(this.autocapitalize)}
              autocorrect=${U(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${U(this.spellcheck)}
              enterkeyhint=${U(this.enterkeyhint)}
              inputmode=${U(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};w.styles=[Nt,ls,ns];h([j(".textarea__control")],w.prototype,"input",2);h([Gt()],w.prototype,"hasFocus",2);h([f()],w.prototype,"title",2);h([f()],w.prototype,"name",2);h([f()],w.prototype,"value",2);h([f({reflect:!0})],w.prototype,"size",2);h([f({type:Boolean,reflect:!0})],w.prototype,"filled",2);h([f()],w.prototype,"label",2);h([f({attribute:"help-text"})],w.prototype,"helpText",2);h([f()],w.prototype,"placeholder",2);h([f({type:Number})],w.prototype,"rows",2);h([f()],w.prototype,"resize",2);h([f({type:Boolean,reflect:!0})],w.prototype,"disabled",2);h([f({type:Boolean,reflect:!0})],w.prototype,"readonly",2);h([f({reflect:!0})],w.prototype,"form",2);h([f({type:Boolean,reflect:!0})],w.prototype,"required",2);h([f({type:Number})],w.prototype,"minlength",2);h([f({type:Number})],w.prototype,"maxlength",2);h([f()],w.prototype,"autocapitalize",2);h([f()],w.prototype,"autocorrect",2);h([f()],w.prototype,"autocomplete",2);h([f({type:Boolean})],w.prototype,"autofocus",2);h([f()],w.prototype,"enterkeyhint",2);h([f({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],w.prototype,"spellcheck",2);h([f()],w.prototype,"inputmode",2);h([as()],w.prototype,"defaultValue",2);h([it("disabled",{waitUntilFirstUpdate:!0})],w.prototype,"handleDisabledChange",1);h([it("rows",{waitUntilFirstUpdate:!0})],w.prototype,"handleRowsChange",1);h([it("value",{waitUntilFirstUpdate:!0})],w.prototype,"handleValueChange",1);w.define("sl-textarea");window.addEventListener("load",e=>{const t=document.getElementById("note-area"),o=document.getElementById("copy");o.value=window.location;const i=window.location.hash;if(i!=""){const s=window.atob(i.substring(1));t.value=s}t.addEventListener("sl-input",s=>{const r=window.btoa(t.value);window.location.hash="#"+r,o.value=window.location})});
