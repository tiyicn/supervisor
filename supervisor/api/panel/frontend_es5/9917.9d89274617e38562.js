"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["9917"],{68958:function(e,i,t){t.d(i,{t:function(){return o}});t(92745),t(77439),t(19423),t(39527),t(41360),t(88972);class s{constructor(e=window.localStorage){this.storage=void 0,this._storage={},this._listeners={},this.storage=e,e===window.localStorage&&window.addEventListener("storage",(e=>{e.key&&this.hasKey(e.key)&&(this._storage[e.key]=e.newValue?JSON.parse(e.newValue):e.newValue,this._listeners[e.key]&&this._listeners[e.key].forEach((i=>i(e.oldValue?JSON.parse(e.oldValue):e.oldValue,this._storage[e.key]))))}))}addFromStorage(e){if(!this._storage[e]){const i=this.storage.getItem(e);i&&(this._storage[e]=JSON.parse(i))}}subscribeChanges(e,i){return this._listeners[e]?this._listeners[e].push(i):this._listeners[e]=[i],()=>{this.unsubscribeChanges(e,i)}}unsubscribeChanges(e,i){if(!(e in this._listeners))return;const t=this._listeners[e].indexOf(i);-1!==t&&this._listeners[e].splice(t,1)}hasKey(e){return e in this._storage}getValue(e){return this._storage[e]}setValue(e,i){const t=this._storage[e];this._storage[e]=i;try{void 0===i?this.storage.removeItem(e):this.storage.setItem(e,JSON.stringify(i))}catch(s){}finally{this._listeners[e]&&this._listeners[e].forEach((e=>e(t,i)))}}}const n={},o=e=>i=>{const t=e.storage||"localStorage";let o;t&&t in n?o=n[t]:(o=new s(window[t]),n[t]=o);const a=String(i.key),r=e.key||String(i.key),d=i.initializer?i.initializer():void 0;o.addFromStorage(r);const l=!1!==e.subscribe?e=>o.subscribeChanges(r,((t,s)=>{e.requestUpdate(i.key,t)})):void 0,c=()=>o.hasKey(r)?e.deserializer?e.deserializer(o.getValue(r)):o.getValue(r):d;return{kind:"method",placement:"prototype",key:i.key,descriptor:{set(t){((t,s)=>{let n;e.state&&(n=c()),o.setValue(r,e.serializer?e.serializer(s):s),e.state&&t.requestUpdate(i.key,n)})(this,t)},get(){return c()},enumerable:!0,configurable:!0},finisher(t){if(e.state&&e.subscribe){const e=t.prototype.connectedCallback,i=t.prototype.disconnectedCallback;t.prototype.connectedCallback=function(){e.call(this),this[`__unbsubLocalStorage${a}`]=null==l?void 0:l(this)},t.prototype.disconnectedCallback=function(){var e;i.call(this),null===(e=this[`__unbsubLocalStorage${a}`])||void 0===e||e.call(this),this[`__unbsubLocalStorage${a}`]=void 0}}e.state&&t.createProperty(i.key,Object.assign({noAccessor:!0},e.stateOptions))}}}},42740:function(e,i,t){t.d(i,{rM:function(){return n},zt:function(){return s}});let s=function(e){return e[e.CONTROL=1]="CONTROL",e}({});const n=(e,i,t)=>e.callWS({type:"conversation/agent/list",language:i,country:t})},4608:function(e,i,t){t.r(i),t.d(i,{HaVoiceCommandDialog:()=>H});var s=t("73577"),n=(t("19083"),t("71695"),t("40251"),t("13334"),t("47021"),t("31622"),t("57243")),o=t("50778"),a=t("68958"),r=t("36522"),d=t("49976"),l=(t("59826"),t("34273"),t("73729"),t("95198"),t("23043"),t("7285"),t("99426"),t("72621")),c=(t("92745"),t("82328"),t("55751"),t("26200"),t("25754"),t("22246"),t("81804"),t("52629"),t("92789"),t("36810"),t("14953"),t("58402"),t("31503"),t("16440"),t("2213"),t("57385"),t("71375"),t("15524"),t("20267"),t("35359")),h=t("38495"),u=t("75278"),p=t("42740");t("72700"),t("8038"),t("71513"),t("75656"),t("50100"),t("18084");class _{constructor(e){this._active=!1,this._callback=void 0,this._context=void 0,this._stream=void 0,this._source=void 0,this._recorder=void 0,this._callback=e}get active(){return this._active}get sampleRate(){var e;return null===(e=this._context)||void 0===e?void 0:e.sampleRate}static get isSupported(){return window.isSecureContext&&(window.AudioContext||window.webkitAudioContext)}async start(){if(this._context&&this._stream&&this._source&&this._recorder)this._stream.getTracks()[0].enabled=!0,await this._context.resume(),this._active=!0;else try{await this._createContext()}catch(e){console.error(e),this._active=!1}}async stop(){var e;this._active=!1,this._stream&&(this._stream.getTracks()[0].enabled=!1),await(null===(e=this._context)||void 0===e?void 0:e.suspend())}close(){var e,i,t;this._active=!1,null===(e=this._stream)||void 0===e||e.getTracks()[0].stop(),this._recorder&&(this._recorder.port.onmessage=null),null===(i=this._source)||void 0===i||i.disconnect(),null===(t=this._context)||void 0===t||t.close(),this._stream=void 0,this._source=void 0,this._recorder=void 0,this._context=void 0}async _createContext(){const e=new(AudioContext||webkitAudioContext);this._stream=await navigator.mediaDevices.getUserMedia({audio:!0}),await e.audioWorklet.addModule(new URL(t.p+t.u("6961"),t.b)),this._context=e,this._source=this._context.createMediaStreamSource(this._stream),this._recorder=new AudioWorkletNode(this._context,"recorder-worklet"),this._recorder.port.onmessage=e=>{this._active&&this._callback(e.data)},this._active=!0,this._source.connect(this._recorder)}}t("83166");var v=t("73192"),g=t("76131");let m,y,f,k,b,x,w,L,$,A,C=e=>e;(0,s.Z)([(0,o.Mo)("ha-assist-chat")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"pipeline",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean,attribute:!1})],key:"startListening",value:void 0},{kind:"field",decorators:[(0,o.IO)("#message-input")],key:"_messageInput",value:void 0},{kind:"field",decorators:[(0,o.IO)("#scroll-container")],key:"_scrollContainer",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_conversation",value(){return[]}},{kind:"field",decorators:[(0,o.SB)()],key:"_showSendButton",value(){return!1}},{kind:"field",decorators:[(0,o.SB)()],key:"_processing",value(){return!1}},{kind:"field",key:"_conversationId",value(){return null}},{kind:"field",key:"_audioRecorder",value:void 0},{kind:"field",key:"_audioBuffer",value:void 0},{kind:"field",key:"_audio",value:void 0},{kind:"field",key:"_stt_binary_handler_id",value:void 0},{kind:"method",key:"willUpdate",value:function(e){this.hasUpdated&&!e.has("pipeline")||(this._conversation=[{who:"hass",text:this.hass.localize("ui.dialogs.voice_command.how_can_i_help")}])}},{kind:"method",key:"firstUpdated",value:function(e){(0,l.Z)(t,"firstUpdated",this,3)([e]),this.startListening&&this.pipeline&&this.pipeline.stt_engine&&_.isSupported&&this._toggleListening(),setTimeout((()=>this._messageInput.focus()),0)}},{kind:"method",key:"updated",value:function(e){(0,l.Z)(t,"updated",this,3)([e]),e.has("_conversation")&&this._scrollMessagesBottom()}},{kind:"method",key:"disconnectedCallback",value:function(){var e,i;(0,l.Z)(t,"disconnectedCallback",this,3)([]),null===(e=this._audioRecorder)||void 0===e||e.close(),this._audioRecorder=void 0,null===(i=this._audio)||void 0===i||i.pause(),this._conversation=[],this._conversationId=null}},{kind:"method",key:"render",value:function(){var e,i;const t=!!this.pipeline&&(this.pipeline.prefer_local_intents||!this.hass.states[this.pipeline.conversation_engine]||(0,u.e)(this.hass.states[this.pipeline.conversation_engine],p.zt.CONTROL)),s=_.isSupported,o=null===(e=this.pipeline)||void 0===e?void 0:e.stt_engine;return(0,n.dy)(m||(m=C` ${0} <div class="messages"> <div class="messages-container" id="scroll-container"> ${0} </div> </div> <div class="input" slot="primaryAction"> <ha-textfield id="message-input" @keyup="${0}" @input="${0}" .label="${0}" .iconTrailing="${0}"> <div slot="trailingIcon"> ${0} </div> </ha-textfield> </div> `),t?n.Ld:(0,n.dy)(y||(y=C` <ha-alert> ${0} </ha-alert> `),this.hass.localize("ui.dialogs.voice_command.conversation_no_control")),this._conversation.map((e=>(0,n.dy)(f||(f=C` <div class="message ${0}">${0}</div> `),(0,c.$)({error:!!e.error,[e.who]:!0}),e.text))),this._handleKeyUp,this._handleInput,this.hass.localize("ui.dialogs.voice_command.input_label"),!0,this._showSendButton||!o?(0,n.dy)(k||(k=C` <ha-icon-button class="listening-icon" .path="${0}" @click="${0}" .disabled="${0}" .label="${0}"> </ha-icon-button> `),"M2,21L23,12L2,3V10L17,12L2,14V21Z",this._handleSendMessage,this._processing,this.hass.localize("ui.dialogs.voice_command.send_text")):(0,n.dy)(b||(b=C` ${0} <div class="listening-icon"> <ha-icon-button .path="${0}" @click="${0}" .disabled="${0}" .label="${0}"> </ha-icon-button> ${0} </div> `),null!==(i=this._audioRecorder)&&void 0!==i&&i.active?(0,n.dy)(x||(x=C` <div class="bouncer"> <div class="double-bounce1"></div> <div class="double-bounce2"></div> </div> `)):n.Ld,"M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z",this._handleListeningButton,this._processing,this.hass.localize("ui.dialogs.voice_command.start_listening"),s?null:(0,n.dy)(w||(w=C` <ha-svg-icon .path="${0}" class="unsupported"></ha-svg-icon> `),"M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z")))}},{kind:"method",key:"_scrollMessagesBottom",value:function(){const e=this._scrollContainer;e&&e.scrollTo(0,e.scrollHeight)}},{kind:"method",key:"_handleKeyUp",value:function(e){const i=e.target;!this._processing&&"Enter"===e.key&&i.value&&(this._processText(i.value),i.value="",this._showSendButton=!1)}},{kind:"method",key:"_handleInput",value:function(e){const i=e.target.value;i&&!this._showSendButton?this._showSendButton=!0:!i&&this._showSendButton&&(this._showSendButton=!1)}},{kind:"method",key:"_handleSendMessage",value:function(){this._messageInput.value&&(this._processText(this._messageInput.value.trim()),this._messageInput.value="",this._showSendButton=!1)}},{kind:"method",key:"_handleListeningButton",value:function(e){e.stopPropagation(),e.preventDefault(),this._toggleListening()}},{kind:"method",key:"_toggleListening",value:async function(){var e;_.isSupported?null!==(e=this._audioRecorder)&&void 0!==e&&e.active?this._stopListening():this._startListening():this._showNotSupportedMessage()}},{kind:"method",key:"_addMessage",value:function(e){this._conversation=[...this._conversation,e]}},{kind:"method",key:"_showNotSupportedMessage",value:async function(){this._addMessage({who:"hass",text:(0,n.dy)(L||(L=C`${0} ${0}`),this.hass.localize("ui.dialogs.voice_command.not_supported_microphone_browser"),this.hass.localize("ui.dialogs.voice_command.not_supported_microphone_documentation",{documentation_link:(0,n.dy)($||($=C`<a target="_blank" rel="noopener noreferrer" href="${0}">${0}</a>`),(0,v.R)(this.hass,"/docs/configuration/securing/#remote-access"),this.hass.localize("ui.dialogs.voice_command.not_supported_microphone_documentation_link"))}))})}},{kind:"method",key:"_startListening",value:async function(){var e;this._processing=!0,null===(e=this._audio)||void 0===e||e.pause(),this._audioRecorder||(this._audioRecorder=new _((e=>{this._audioBuffer?this._audioBuffer.push(e):this._sendAudioChunk(e)}))),this._stt_binary_handler_id=void 0,this._audioBuffer=[];const i={who:"user",text:"…"};await this._audioRecorder.start(),this._addMessage(i),this.requestUpdate("_audioRecorder");const t={who:"hass",text:"…"};try{var s,n;const e=await(0,h.Xp)(this.hass,(s=>{if("run-start"===s.type&&(this._stt_binary_handler_id=s.data.runner_data.stt_binary_handler_id),"stt-start"===s.type&&this._audioBuffer){for(const e of this._audioBuffer)this._sendAudioChunk(e);this._audioBuffer=void 0}if("stt-end"===s.type&&(this._stt_binary_handler_id=void 0,this._stopListening(),i.text=s.data.stt_output.text,this.requestUpdate("_conversation"),this._addMessage(t)),"intent-end"===s.type){var n;this._conversationId=s.data.intent_output.conversation_id;const e=null===(n=s.data.intent_output.response.speech)||void 0===n?void 0:n.plain;e&&(t.text=e.speech),this.requestUpdate("_conversation")}if("tts-end"===s.type){const e=s.data.tts_output.url;this._audio=new Audio(e),this._audio.play(),this._audio.addEventListener("ended",this._unloadAudio),this._audio.addEventListener("pause",this._unloadAudio),this._audio.addEventListener("canplaythrough",this._playAudio),this._audio.addEventListener("error",this._audioError)}"run-end"===s.type&&(this._stt_binary_handler_id=void 0,e()),"error"===s.type&&(this._stt_binary_handler_id=void 0,"…"===i.text?(i.text=s.data.message,i.error=!0):(t.text=s.data.message,t.error=!0),this._stopListening(),this.requestUpdate("_conversation"),e())}),{start_stage:"stt",end_stage:null!==(s=this.pipeline)&&void 0!==s&&s.tts_engine?"tts":"intent",input:{sample_rate:this._audioRecorder.sampleRate},pipeline:null===(n=this.pipeline)||void 0===n?void 0:n.id,conversation_id:this._conversationId})}catch(o){await(0,g.Ys)(this,{title:"Error starting pipeline",text:o.message||o}),this._stopListening()}finally{this._processing=!1}}},{kind:"method",key:"_stopListening",value:function(){var e;if(null===(e=this._audioRecorder)||void 0===e||e.stop(),this.requestUpdate("_audioRecorder"),this._stt_binary_handler_id){if(this._audioBuffer)for(const e of this._audioBuffer)this._sendAudioChunk(e);this._sendAudioChunk(new Int16Array),this._stt_binary_handler_id=void 0}this._audioBuffer=void 0}},{kind:"method",key:"_sendAudioChunk",value:function(e){if(this.hass.connection.socket.binaryType="arraybuffer",null==this._stt_binary_handler_id)return;const i=new Uint8Array(1+2*e.length);i[0]=this._stt_binary_handler_id,i.set(new Uint8Array(e.buffer),1),this.hass.connection.socket.send(i)}},{kind:"field",key:"_playAudio",value(){return()=>{var e;null===(e=this._audio)||void 0===e||e.play()}}},{kind:"field",key:"_audioError",value(){return()=>{var e;(0,g.Ys)(this,{title:"Error playing audio."}),null===(e=this._audio)||void 0===e||e.removeAttribute("src")}}},{kind:"field",key:"_unloadAudio",value(){return()=>{var e;null===(e=this._audio)||void 0===e||e.removeAttribute("src"),this._audio=void 0}}},{kind:"method",key:"_processText",value:async function(e){var i;this._processing=!0,null===(i=this._audio)||void 0===i||i.pause(),this._addMessage({who:"user",text:e});const t={who:"hass",text:"…"};this._addMessage(t);try{var s;const i=await(0,h.Xp)(this.hass,(e=>{if("intent-end"===e.type){var s;this._conversationId=e.data.intent_output.conversation_id;const n=null===(s=e.data.intent_output.response.speech)||void 0===s?void 0:s.plain;n&&(t.text=n.speech),this.requestUpdate("_conversation"),i()}"error"===e.type&&(t.text=e.data.message,t.error=!0,this.requestUpdate("_conversation"),i())}),{start_stage:"intent",input:{text:e},end_stage:"intent",pipeline:null===(s=this.pipeline)||void 0===s?void 0:s.id,conversation_id:this._conversationId})}catch(n){t.text=this.hass.localize("ui.dialogs.voice_command.error"),t.error=!0,this.requestUpdate("_conversation")}finally{this._processing=!1}}},{kind:"get",static:!0,key:"styles",value:function(){return(0,n.iv)(A||(A=C`:host{flex:1;display:flex;flex-direction:column;min-height:var(--ha-assist-chat-min-height,415px)}ha-textfield{display:block;margin:0 24px 16px}.messages{flex:1;display:block;box-sizing:border-box;position:relative}.messages-container{position:absolute;bottom:0px;right:0px;left:0px;padding:24px;box-sizing:border-box;overflow-y:auto;max-height:100%}.message{white-space:pre-line;font-size:18px;clear:both;margin:8px 0;padding:8px;border-radius:15px}@media all and (max-width:450px),all and (max-height:500px){.message{font-size:16px}}.message p{margin:0}.message p:not(:last-child){margin-bottom:8px}.message.user{margin-left:24px;margin-inline-start:24px;margin-inline-end:initial;float:var(--float-end);text-align:right;border-bottom-right-radius:0px;background-color:var(--primary-color);color:var(--text-primary-color);direction:var(--direction)}.message.hass{margin-right:24px;margin-inline-end:24px;margin-inline-start:initial;float:var(--float-start);border-bottom-left-radius:0px;background-color:var(--secondary-background-color);color:var(--primary-text-color);direction:var(--direction)}.message.user a{color:var(--text-primary-color)}.message.hass a{color:var(--primary-text-color)}.message.error{background-color:var(--error-color);color:var(--text-primary-color)}.bouncer{width:48px;height:48px;position:absolute}.double-bounce1,.double-bounce2{width:48px;height:48px;border-radius:50%;background-color:var(--primary-color);opacity:.2;position:absolute;top:0;left:0;-webkit-animation:sk-bounce 2s infinite ease-in-out;animation:sk-bounce 2s infinite ease-in-out}.double-bounce2{-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes sk-bounce{0%,100%{-webkit-transform:scale(0)}50%{-webkit-transform:scale(1)}}@keyframes sk-bounce{0%,100%{transform:scale(0);-webkit-transform:scale(0)}50%{transform:scale(1);-webkit-transform:scale(1)}}.listening-icon{position:relative;color:var(--secondary-text-color);margin-right:-24px;margin-inline-end:-24px;margin-inline-start:initial;direction:var(--direction);transform:scaleX(var(--scale-direction))}.listening-icon[active]{color:var(--primary-color)}.unsupported{color:var(--error-color);position:absolute;--mdc-icon-size:16px;right:5px;inset-inline-end:5px;inset-inline-start:initial;top:0px}`))}}]}}),n.oi);t("82104");var S=t("28008");let I,z,B,M,U,V,R,P,O,T=e=>e;let H=(0,s.Z)([(0,o.Mo)("ha-voice-command-dialog")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_opened",value(){return!1}},{kind:"field",decorators:[(0,a.t)({key:"AssistPipelineId",state:!0,subscribe:!1})],key:"_pipelineId",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_pipeline",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_pipelines",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_preferredPipeline",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_errorLoadAssist",value:void 0},{kind:"field",key:"_startListening",value(){return!1}},{kind:"method",key:"showDialog",value:async function(e){"preferred"===e.pipeline_id||"last_used"===e.pipeline_id&&!this._pipelineId?(await this._loadPipelines(),this._pipelineId=this._preferredPipeline):["last_used","preferred"].includes(e.pipeline_id)||(this._pipelineId=e.pipeline_id),this._startListening=e.start_listening,this._opened=!0}},{kind:"method",key:"closeDialog",value:async function(){this._opened=!1,this._pipelines=void 0,(0,r.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){var e,i,t;return this._opened?(0,n.dy)(I||(I=T` <ha-dialog open @closed="${0}" .heading="${0}" flexContent hideactions> <ha-dialog-header slot="heading"> <ha-icon-button slot="navigationIcon" dialogAction="cancel" .label="${0}" .path="${0}"></ha-icon-button> <div slot="title"> ${0} <ha-button-menu @opened="${0}" @closed="${0}" activatable fixed> <ha-button slot="trigger"> ${0} <ha-svg-icon slot="trailingIcon" .path="${0}"></ha-svg-icon> </ha-button> ${0} ${0} </ha-button-menu> </div> <a href="${0}" slot="actionItems" target="_blank" rel="noopener noreferer"> <ha-icon-button .label="${0}" .path="${0}"></ha-icon-button> </a> </ha-dialog-header> ${0} ${0} </ha-dialog> `),this.closeDialog,this.hass.localize("ui.dialogs.voice_command.title"),this.hass.localize("ui.common.close"),"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",this.hass.localize("ui.dialogs.voice_command.title"),this._loadPipelines,d.U,null===(e=this._pipeline)||void 0===e?void 0:e.name,"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",this._pipelines?null===(i=this._pipelines)||void 0===i?void 0:i.map((e=>(0,n.dy)(B||(B=T`<ha-list-item ?selected="${0}" .pipeline="${0}" @click="${0}" .hasMeta="${0}"> ${0}${0} </ha-list-item>`),e.id===this._pipelineId||!this._pipelineId&&e.id===this._preferredPipeline,e.id,this._selectPipeline,e.id===this._preferredPipeline,e.name,e.id===this._preferredPipeline?(0,n.dy)(M||(M=T` <ha-svg-icon slot="meta" .path="${0}"></ha-svg-icon> `),"M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"):n.Ld))):(0,n.dy)(z||(z=T`<div class="pipelines-loading"> <ha-circular-progress indeterminate size="small"></ha-circular-progress> </div>`)),null!==(t=this.hass.user)&&void 0!==t&&t.is_admin?(0,n.dy)(U||(U=T`<li divider role="separator"></li> <a href="/config/voice-assistants/assistants"><ha-list-item>${0}</ha-list-item></a>`),this.hass.localize("ui.dialogs.voice_command.manage_assistants")):n.Ld,(0,v.R)(this.hass,"/docs/assist/"),this.hass.localize("ui.common.help"),"M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z",this._pipeline?(0,n.dy)(V||(V=T` <ha-assist-chat .hass="${0}" .pipeline="${0}" .startListening="${0}"> </ha-assist-chat> `),this.hass,this._pipeline,this._startListening):(0,n.dy)(R||(R=T`<div class="pipelines-loading"> <ha-circular-progress indeterminate size="large"></ha-circular-progress> </div>`)),this._errorLoadAssist?(0,n.dy)(P||(P=T`<ha-alert alert-type="error"> ${0} </ha-alert>`),this.hass.localize(`ui.dialogs.voice_command.${this._errorLoadAssist}_error_load_assist`)):n.Ld):n.Ld}},{kind:"method",key:"willUpdate",value:function(e){(e.has("_pipelineId")||e.has("_opened")&&!0===this._opened&&this._pipelineId)&&this._getPipeline()}},{kind:"method",key:"_loadPipelines",value:async function(){if(this._pipelines)return;const{pipelines:e,preferred_pipeline:i}=await(0,h.SC)(this.hass);this._pipelines=e,this._preferredPipeline=i||void 0}},{kind:"method",key:"_selectPipeline",value:async function(e){this._pipelineId=e.currentTarget.pipeline,await this.updateComplete}},{kind:"method",key:"_getPipeline",value:async function(){try{this._pipeline=await(0,h.PA)(this.hass,this._pipelineId)}catch(e){"not_found"===e.code?this._errorLoadAssist="not_found":(this._errorLoadAssist="unknown",console.error(e))}}},{kind:"get",static:!0,key:"styles",value:function(){return[S.yu,(0,n.iv)(O||(O=T`ha-dialog{--mdc-dialog-max-width:500px;--mdc-dialog-max-height:500px;--dialog-content-padding:0}ha-dialog-header a{color:var(--primary-text-color)}div[slot=title]{display:flex;flex-direction:column;margin:-4px 0}ha-button-menu{--mdc-theme-on-primary:var(--text-primary-color);--mdc-theme-primary:var(--primary-color);margin-top:-8px;margin-bottom:0;margin-right:0;margin-inline-end:0;margin-left:-8px;margin-inline-start:-8px}ha-button-menu ha-button{--mdc-theme-primary:var(--secondary-text-color);--mdc-typography-button-text-transform:none;--mdc-typography-button-font-size:unset;--mdc-typography-button-font-weight:400;--mdc-typography-button-letter-spacing:var(
            --mdc-typography-headline6-letter-spacing,
            0.0125em
          );--mdc-typography-button-line-height:var(
            --mdc-typography-headline6-line-height,
            2rem
          );--button-height:auto}ha-button-menu ha-button ha-svg-icon{height:28px;margin-left:4px;margin-inline-start:4px;margin-inline-end:initial;direction:var(--direction)}ha-list-item{--mdc-list-item-meta-size:16px}ha-list-item ha-svg-icon{margin-left:4px;margin-inline-start:4px;margin-inline-end:initial;direction:var(--direction);display:block}ha-button-menu a{text-decoration:none}.pipelines-loading{display:flex;justify-content:center}`))]}}]}}),n.oi)},52629:function(e,i,t){t(13492)("Int16",(function(e){return function(i,t,s){return e(this,i,t,s)}}))},92789:function(e,i,t){t(13492)("Uint8",(function(e){return function(i,t,s){return e(this,i,t,s)}}))}}]);
//# sourceMappingURL=9917.9d89274617e38562.js.map