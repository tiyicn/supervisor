/*! For license information please see 3.941c65a442457f20.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["3"],{27323:function(e,t,i){i.d(t,{O:function(){return p}});i(71695),i(47021);var s=i(9065),a=i(1105),o=i(57243),n=i(50778),r=i(35359),l=i(20552),d=i(91928);let h,u,c=e=>e;const g={fromAttribute(e){return null!==e&&(""===e||e)},toAttribute(e){return"boolean"==typeof e?e?"":null:e}};class p extends a.P{constructor(){super(...arguments),this.rows=2,this.cols=20,this.charCounter=!1}render(){const e=this.charCounter&&-1!==this.maxLength,t=e&&"internal"===this.charCounter,i=e&&!t,s=!!this.helper||!!this.validationMessage||i,a={"mdc-text-field--disabled":this.disabled,"mdc-text-field--no-label":!this.label,"mdc-text-field--filled":!this.outlined,"mdc-text-field--outlined":this.outlined,"mdc-text-field--end-aligned":this.endAligned,"mdc-text-field--with-internal-counter":t};return(0,o.dy)(h||(h=c` <label class="mdc-text-field mdc-text-field--textarea ${0}"> ${0} ${0} ${0} ${0} ${0} </label> ${0} `),(0,r.$)(a),this.renderRipple(),this.outlined?this.renderOutline():this.renderLabel(),this.renderInput(),this.renderCharCounter(t),this.renderLineRipple(),this.renderHelperText(s,i))}renderInput(){const e=this.label?"label":void 0,t=-1===this.minLength?void 0:this.minLength,i=-1===this.maxLength?void 0:this.maxLength,s=this.autocapitalize?this.autocapitalize:void 0;return(0,o.dy)(u||(u=c` <textarea aria-labelledby="${0}" class="mdc-text-field__input" .value="${0}" rows="${0}" cols="${0}" ?disabled="${0}" placeholder="${0}" ?required="${0}" ?readonly="${0}" minlength="${0}" maxlength="${0}" name="${0}" inputmode="${0}" autocapitalize="${0}" @input="${0}" @blur="${0}">
      </textarea>`),(0,l.o)(e),(0,d.a)(this.value),this.rows,this.cols,this.disabled,this.placeholder,this.required,this.readOnly,(0,l.o)(t),(0,l.o)(i),(0,l.o)(""===this.name?void 0:this.name),(0,l.o)(this.inputMode),(0,l.o)(s),this.handleInputChange,this.onInputBlur)}}(0,s.__decorate)([(0,n.IO)("textarea")],p.prototype,"formElement",void 0),(0,s.__decorate)([(0,n.Cb)({type:Number})],p.prototype,"rows",void 0),(0,s.__decorate)([(0,n.Cb)({type:Number})],p.prototype,"cols",void 0),(0,s.__decorate)([(0,n.Cb)({converter:g})],p.prototype,"charCounter",void 0)},88540:function(e,t,i){i.d(t,{W:function(){return a}});let s;const a=(0,i(57243).iv)(s||(s=(e=>e)`.mdc-text-field{height:100%}.mdc-text-field__input{resize:none}`))},68958:function(e,t,i){i.d(t,{t:function(){return o}});i(92745),i(77439),i(19423),i(39527),i(41360),i(88972);class s{constructor(e=window.localStorage){this.storage=void 0,this._storage={},this._listeners={},this.storage=e,e===window.localStorage&&window.addEventListener("storage",(e=>{e.key&&this.hasKey(e.key)&&(this._storage[e.key]=e.newValue?JSON.parse(e.newValue):e.newValue,this._listeners[e.key]&&this._listeners[e.key].forEach((t=>t(e.oldValue?JSON.parse(e.oldValue):e.oldValue,this._storage[e.key]))))}))}addFromStorage(e){if(!this._storage[e]){const t=this.storage.getItem(e);t&&(this._storage[e]=JSON.parse(t))}}subscribeChanges(e,t){return this._listeners[e]?this._listeners[e].push(t):this._listeners[e]=[t],()=>{this.unsubscribeChanges(e,t)}}unsubscribeChanges(e,t){if(!(e in this._listeners))return;const i=this._listeners[e].indexOf(t);-1!==i&&this._listeners[e].splice(i,1)}hasKey(e){return e in this._storage}getValue(e){return this._storage[e]}setValue(e,t){const i=this._storage[e];this._storage[e]=t;try{void 0===t?this.storage.removeItem(e):this.storage.setItem(e,JSON.stringify(t))}catch(s){}finally{this._listeners[e]&&this._listeners[e].forEach((e=>e(i,t)))}}}const a={},o=e=>t=>{const i=e.storage||"localStorage";let o;i&&i in a?o=a[i]:(o=new s(window[i]),a[i]=o);const n=String(t.key),r=e.key||String(t.key),l=t.initializer?t.initializer():void 0;o.addFromStorage(r);const d=!1!==e.subscribe?e=>o.subscribeChanges(r,((i,s)=>{e.requestUpdate(t.key,i)})):void 0,h=()=>o.hasKey(r)?e.deserializer?e.deserializer(o.getValue(r)):o.getValue(r):l;return{kind:"method",placement:"prototype",key:t.key,descriptor:{set(i){((i,s)=>{let a;e.state&&(a=h()),o.setValue(r,e.serializer?e.serializer(s):s),e.state&&i.requestUpdate(t.key,a)})(this,i)},get(){return h()},enumerable:!0,configurable:!0},finisher(i){if(e.state&&e.subscribe){const e=i.prototype.connectedCallback,t=i.prototype.disconnectedCallback;i.prototype.connectedCallback=function(){e.call(this),this[`__unbsubLocalStorage${n}`]=null==d?void 0:d(this)},i.prototype.disconnectedCallback=function(){var e;t.call(this),null===(e=this[`__unbsubLocalStorage${n}`])||void 0===e||e.call(this),this[`__unbsubLocalStorage${n}`]=void 0}}e.state&&i.createProperty(t.key,Object.assign({noAccessor:!0},e.stateOptions))}}}},40917:function(e,t,i){var s=i(73577),a=i(72621),o=(i(71695),i(47021),i(27323)),n=i(33990),r=i(88540),l=i(57243),d=i(50778);let h,u=e=>e;(0,s.Z)([(0,d.Mo)("ha-textarea")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,d.Cb)({type:Boolean,reflect:!0})],key:"autogrow",value(){return!1}},{kind:"method",key:"updated",value:function(e){(0,a.Z)(i,"updated",this,3)([e]),this.autogrow&&e.has("value")&&(this.mdcRoot.dataset.value=this.value+'=​"')}},{kind:"field",static:!0,key:"styles",value(){return[n.W,r.W,(0,l.iv)(h||(h=u`:host([autogrow]) .mdc-text-field{position:relative;min-height:74px;min-width:178px;max-height:200px}:host([autogrow]) .mdc-text-field:after{content:attr(data-value);margin-top:23px;margin-bottom:9px;line-height:1.5rem;min-height:42px;padding:0px 32px 0 16px;letter-spacing:var(
          --mdc-typography-subtitle1-letter-spacing,
          .009375em
        );visibility:hidden;white-space:pre-wrap}:host([autogrow]) .mdc-text-field__input{position:absolute;height:calc(100% - 32px)}:host([autogrow]) .mdc-text-field.mdc-text-field--no-label:after{margin-top:16px;margin-bottom:16px}.mdc-floating-label{inset-inline-start:16px!important;inset-inline-end:initial!important;transform-origin:var(--float-start) top}@media only screen and (min-width:459px){:host([mobile-multiline]) .mdc-text-field__input{white-space:nowrap;max-height:16px}}`))]}}]}}),o.O)},33774:function(e,t,i){i.r(t),i.d(t,{TTSTryDialog:function(){return y}});var s=i(73577),a=(i(71695),i(19423),i(40251),i(47021),i(57243)),o=i(50778),n=i(68958),r=i(36522),l=(i(59826),i(73729)),d=(i(40917),i(58968)),h=i(76131);i(82104);let u,c,g,p,m=e=>e;let y=(0,s.Z)([(0,o.Mo)("dialog-tts-try")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_loadingExample",value(){return!1}},{kind:"field",decorators:[(0,o.SB)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_valid",value(){return!1}},{kind:"field",decorators:[(0,o.IO)("#message")],key:"_messageInput",value:void 0},{kind:"field",decorators:[(0,n.t)({key:"ttsTryMessages",state:!1,subscribe:!1})],key:"_messages",value:void 0},{kind:"method",key:"showDialog",value:function(e){this._params=e,this._valid=Boolean(this._defaultMessage)}},{kind:"method",key:"closeDialog",value:function(){this._params=void 0,(0,r.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"get",key:"_defaultMessage",value:function(){var e,t;const i=null===(e=this._params.language)||void 0===e?void 0:e.substring(0,2),s=this.hass.locale.language.substring(0,2);return i&&null!==(t=this._messages)&&void 0!==t&&t[i]?this._messages[i]:i===s?this.hass.localize("ui.dialogs.tts-try.message_example"):""}},{kind:"method",key:"render",value:function(){return this._params?(0,a.dy)(u||(u=m` <ha-dialog open @closed="${0}" .heading="${0}"> <ha-textarea autogrow id="message" .label="${0}" .placeholder="${0}" .value="${0}" @input="${0}" ?dialogInitialFocus="${0}"> </ha-textarea> ${0} </ha-dialog> `),this.closeDialog,(0,l.i)(this.hass,this.hass.localize("ui.dialogs.tts-try.header")),this.hass.localize("ui.dialogs.tts-try.message"),this.hass.localize("ui.dialogs.tts-try.message_placeholder"),this._defaultMessage,this._inputChanged,!this._defaultMessage,this._loadingExample?(0,a.dy)(c||(c=m` <ha-circular-progress size="small" indeterminate slot="primaryAction" class="loading"></ha-circular-progress> `)):(0,a.dy)(g||(g=m` <ha-button ?dialogInitialFocus="${0}" slot="primaryAction" .label="${0}" @click="${0}" .disabled="${0}"> <ha-svg-icon slot="icon" .path="${0}"></ha-svg-icon> </ha-button> `),Boolean(this._defaultMessage),this.hass.localize("ui.dialogs.tts-try.play"),this._playExample,!this._valid,"M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M10,16.5L16,12L10,7.5V16.5Z")):a.Ld}},{kind:"method",key:"_inputChanged",value:async function(){var e;this._valid=Boolean(null===(e=this._messageInput)||void 0===e?void 0:e.value)}},{kind:"method",key:"_playExample",value:async function(){var e;const t=null===(e=this._messageInput)||void 0===e?void 0:e.value;if(!t)return;const i=this._params.engine,s=this._params.language,a=this._params.voice;s&&(this._messages=Object.assign(Object.assign({},this._messages),{},{[s.substring(0,2)]:t})),this._loadingExample=!0;const o=new Audio;let n;o.play();try{n=(await(0,d.aT)(this.hass,{platform:i,message:t,language:s,options:{voice:a}})).path}catch(r){return this._loadingExample=!1,void(0,h.Ys)(this,{text:`Unable to load example. ${r.error||r.body||r}`,warning:!0})}o.src=n,o.addEventListener("canplaythrough",(()=>o.play())),o.addEventListener("playing",(()=>{this._loadingExample=!1})),o.addEventListener("error",(()=>{(0,h.Ys)(this,{title:"Error playing audio."}),this._loadingExample=!1}))}},{kind:"get",static:!0,key:"styles",value:function(){return(0,a.iv)(p||(p=m`ha-dialog{--mdc-dialog-max-width:500px}ha-select,ha-textarea{width:100%}ha-select{margin-top:8px}.loading{height:36px}`))}}]}}),a.oi)}}]);
//# sourceMappingURL=3.941c65a442457f20.js.map