"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["7923"],{22864:function(a,i,s){s.a(a,(async function(a,t){try{s.r(i);var e=s(73577),r=(s(71695),s(40251),s(47021),s(31622),s(57243)),o=s(50778),c=s(36522),n=(s(29095),s(99426),s(73729)),l=s(39231),u=s(56785),d=s(76131),h=s(28008),p=s(60501),k=a([p]);p=(k.then?(await k)():k)[0];let _,g,v,m,b,f=a=>a;(0,e.Z)([(0,o.Mo)("dialog-hassio-create-backup")],(function(a,i){return{F:class extends i{constructor(...i){super(...i),a(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_dialogParams",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_creatingBackup",value(){return!1}},{kind:"field",decorators:[(0,o.IO)("supervisor-backup-content")],key:"_backupContent",value:void 0},{kind:"method",key:"showDialog",value:function(a){this._dialogParams=a,this._creatingBackup=!1}},{kind:"method",key:"closeDialog",value:function(){this._dialogParams=void 0,this._creatingBackup=!1,this._error=void 0,(0,c.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){return this._dialogParams?(0,r.dy)(_||(_=f` <ha-dialog open scrimClickAction @closed="${0}" .heading="${0}"> ${0} ${0} <mwc-button slot="secondaryAction" @click="${0}"> ${0} </mwc-button> <mwc-button .disabled="${0}" slot="primaryAction" @click="${0}"> ${0} </mwc-button> </ha-dialog> `),this.closeDialog,(0,n.i)(this.hass,this._dialogParams.supervisor.localize("backup.create_backup")),this._creatingBackup?(0,r.dy)(g||(g=f`<ha-circular-progress indeterminate></ha-circular-progress>`)):(0,r.dy)(v||(v=f`<supervisor-backup-content .hass="${0}" .supervisor="${0}" dialogInitialFocus> </supervisor-backup-content>`),this.hass,this._dialogParams.supervisor),this._error?(0,r.dy)(m||(m=f`<ha-alert alert-type="error">${0}</ha-alert>`),this._error):"",this.closeDialog,this._dialogParams.supervisor.localize("common.close"),this._creatingBackup,this._createBackup,this._dialogParams.supervisor.localize("backup.create")):r.Ld}},{kind:"method",key:"_createBackup",value:async function(){if("running"!==this._dialogParams.supervisor.info.state)return void(0,d.Ys)(this,{title:this._dialogParams.supervisor.localize("backup.could_not_create"),text:this._dialogParams.supervisor.localize("backup.create_blocked_not_running",{state:this._dialogParams.supervisor.info.state})});const a=this._backupContent.backupDetails();if(this._creatingBackup=!0,this._error="",a.password&&!a.password.length)return this._error=this._dialogParams.supervisor.localize("backup.enter_password"),void(this._creatingBackup=!1);if(a.password&&a.password!==a.confirm_password)return this._error=this._dialogParams.supervisor.localize("backup.passwords_not_matching"),void(this._creatingBackup=!1);delete a.confirm_password;try{"full"===this._backupContent.backupType?await(0,l.vU)(this.hass,a):await(0,l.zU)(this.hass,a),this._dialogParams.onCreate(),this.closeDialog()}catch(i){this._error=(0,u.js)(i)}this._creatingBackup=!1}},{kind:"get",static:!0,key:"styles",value:function(){return[h.Qx,h.yu,(0,r.iv)(b||(b=f`:host{direction:var(--direction)}ha-circular-progress{display:block;text-align:center}`))]}}]}}),r.oi);t()}catch(_){t(_)}}))}}]);
//# sourceMappingURL=7923.ae497691b7ae4fe3.js.map