/*! For license information please see 7442.b46537248ed68ebc.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["7442"],{67840:function(e,t,i){i.d(t,{A:()=>y});var o=i("9065"),n=i("50778"),a=(i("19083"),i("71695"),i("92745"),i("40251"),i("61006"),i("47021"),i("1231"),i("57243")),s=i("35359"),r=i("13823"),l=i("79679"),d=i("88854");let c,h,p=e=>e;const m=(0,r.T)(a.oi);class u extends m{get open(){return this.isOpen}set open(e){e!==this.isOpen&&(this.isOpen=e,e?(this.setAttribute("open",""),this.show()):(this.removeAttribute("open"),this.close()))}constructor(){super(),this.quick=!1,this.returnValue="",this.noFocusTrap=!1,this.getOpenAnimation=()=>d.I,this.getCloseAnimation=()=>d.G,this.isOpen=!1,this.isOpening=!1,this.isConnectedPromise=this.getIsConnectedPromise(),this.isAtScrollTop=!1,this.isAtScrollBottom=!1,this.nextClickIsFromContent=!1,this.hasHeadline=!1,this.hasActions=!1,this.hasIcon=!1,this.escapePressedWithoutCancel=!1,this.treewalker=a.sk?null:document.createTreeWalker(this,NodeFilter.SHOW_ELEMENT),a.sk||this.addEventListener("submit",this.handleSubmit)}async show(){var e;this.isOpening=!0,await this.isConnectedPromise,await this.updateComplete;const t=this.dialog;if(t.open||!this.isOpening)return void(this.isOpening=!1);if(!this.dispatchEvent(new Event("open",{cancelable:!0})))return this.open=!1,void(this.isOpening=!1);t.showModal(),this.open=!0,this.scroller&&(this.scroller.scrollTop=0),null===(e=this.querySelector("[autofocus]"))||void 0===e||e.focus(),await this.animateDialog(this.getOpenAnimation()),this.dispatchEvent(new Event("opened")),this.isOpening=!1}async close(e=this.returnValue){if(this.isOpening=!1,!this.isConnected)return void(this.open=!1);await this.updateComplete;const t=this.dialog;if(!t.open||this.isOpening)return void(this.open=!1);const i=this.returnValue;this.returnValue=e;this.dispatchEvent(new Event("close",{cancelable:!0}))?(await this.animateDialog(this.getCloseAnimation()),t.close(e),this.open=!1,this.dispatchEvent(new Event("closed"))):this.returnValue=i}connectedCallback(){super.connectedCallback(),this.isConnectedPromiseResolve()}disconnectedCallback(){super.disconnectedCallback(),this.isConnectedPromise=this.getIsConnectedPromise()}render(){const e=this.open&&!(this.isAtScrollTop&&this.isAtScrollBottom),t={"has-headline":this.hasHeadline,"has-actions":this.hasActions,"has-icon":this.hasIcon,scrollable:e,"show-top-divider":e&&!this.isAtScrollTop,"show-bottom-divider":e&&!this.isAtScrollBottom},i=this.open&&!this.noFocusTrap,o=(0,a.dy)(c||(c=p` <div class="focus-trap" tabindex="0" aria-hidden="true" @focus="${0}"></div> `),this.handleFocusTrapFocus),{ariaLabel:n}=this;return(0,a.dy)(h||(h=p` <div class="scrim"></div> <dialog class="${0}" aria-label="${0}" aria-labelledby="${0}" role="${0}" @cancel="${0}" @click="${0}" @close="${0}" @keydown="${0}" .returnValue="${0}"> ${0} <div class="container" @click="${0}"> <div class="headline"> <div class="icon" aria-hidden="true"> <slot name="icon" @slotchange="${0}"></slot> </div> <h2 id="headline" aria-hidden="${0}"> <slot name="headline" @slotchange="${0}"></slot> </h2> <md-divider></md-divider> </div> <div class="scroller"> <div class="content"> <div class="top anchor"></div> <slot name="content"></slot> <div class="bottom anchor"></div> </div> </div> <div class="actions"> <md-divider></md-divider> <slot name="actions" @slotchange="${0}"></slot> </div> </div> ${0} </dialog> `),(0,s.$)(t),n||a.Ld,this.hasHeadline?"headline":a.Ld,"alert"===this.type?"alertdialog":a.Ld,this.handleCancel,this.handleDialogClick,this.handleClose,this.handleKeydown,this.returnValue||a.Ld,i?o:a.Ld,this.handleContentClick,this.handleIconChange,!this.hasHeadline||a.Ld,this.handleHeadlineChange,this.handleActionsChange,i?o:a.Ld)}firstUpdated(){this.intersectionObserver=new IntersectionObserver((e=>{for(const t of e)this.handleAnchorIntersection(t)}),{root:this.scroller}),this.intersectionObserver.observe(this.topAnchor),this.intersectionObserver.observe(this.bottomAnchor)}handleDialogClick(){if(this.nextClickIsFromContent)return void(this.nextClickIsFromContent=!1);!this.dispatchEvent(new Event("cancel",{cancelable:!0}))||this.close()}handleContentClick(){this.nextClickIsFromContent=!0}handleSubmit(e){var t;const i=e.target,{submitter:o}=e;"dialog"===i.method&&o&&this.close(null!==(t=o.getAttribute("value"))&&void 0!==t?t:this.returnValue)}handleCancel(e){if(e.target!==this.dialog)return;this.escapePressedWithoutCancel=!1;const t=!(0,l.e)(this,e);e.preventDefault(),t||this.close()}handleClose(){var e;this.escapePressedWithoutCancel&&(this.escapePressedWithoutCancel=!1,null===(e=this.dialog)||void 0===e||e.dispatchEvent(new Event("cancel",{cancelable:!0})))}handleKeydown(e){"Escape"===e.key&&(this.escapePressedWithoutCancel=!0,setTimeout((()=>{this.escapePressedWithoutCancel=!1})))}async animateDialog(e){var t;if(null===(t=this.cancelAnimations)||void 0===t||t.abort(),this.cancelAnimations=new AbortController,this.quick)return;const{dialog:i,scrim:o,container:n,headline:a,content:s,actions:r}=this;if(!(i&&o&&n&&a&&s&&r))return;const{container:l,dialog:d,scrim:c,headline:h,content:p,actions:m}=e,u=[[i,null!=d?d:[]],[o,null!=c?c:[]],[n,null!=l?l:[]],[a,null!=h?h:[]],[s,null!=p?p:[]],[r,null!=m?m:[]]],g=[];for(const[v,f]of u)for(const e of f){const t=v.animate(...e);this.cancelAnimations.signal.addEventListener("abort",(()=>{t.cancel()})),g.push(t)}await Promise.all(g.map((e=>e.finished.catch((()=>{})))))}handleHeadlineChange(e){const t=e.target;this.hasHeadline=t.assignedElements().length>0}handleActionsChange(e){const t=e.target;this.hasActions=t.assignedElements().length>0}handleIconChange(e){const t=e.target;this.hasIcon=t.assignedElements().length>0}handleAnchorIntersection(e){const{target:t,isIntersecting:i}=e;t===this.topAnchor&&(this.isAtScrollTop=i),t===this.bottomAnchor&&(this.isAtScrollBottom=i)}getIsConnectedPromise(){return new Promise((e=>{this.isConnectedPromiseResolve=e}))}handleFocusTrapFocus(e){const[t,i]=this.getFirstAndLastFocusableChildren();var o;if(!t||!i)return void(null===(o=this.dialog)||void 0===o||o.focus());const n=e.target===this.firstFocusTrap,a=!n,s=e.relatedTarget===t,r=e.relatedTarget===i,l=!s&&!r;if(a&&r||n&&l)return void t.focus();(n&&s||a&&l)&&i.focus()}getFirstAndLastFocusableChildren(){if(!this.treewalker)return[null,null];let e=null,t=null;for(this.treewalker.currentNode=this.treewalker.root;this.treewalker.nextNode();){const i=this.treewalker.currentNode;g(i)&&(e||(e=i),t=i)}return[e,t]}}function g(e){var t,i;const o=":not(:disabled,[disabled])";if(e.matches(":is(button,input,select,textarea,object,:is(a,area)[href],[tabindex],[contenteditable=true])"+o+':not([tabindex^="-"])'))return!0;return!!e.localName.includes("-")&&(!!e.matches(o)&&(null!==(t=null===(i=e.shadowRoot)||void 0===i?void 0:i.delegatesFocus)&&void 0!==t&&t))}(0,o.__decorate)([(0,n.Cb)({type:Boolean})],u.prototype,"open",null),(0,o.__decorate)([(0,n.Cb)({type:Boolean})],u.prototype,"quick",void 0),(0,o.__decorate)([(0,n.Cb)({attribute:!1})],u.prototype,"returnValue",void 0),(0,o.__decorate)([(0,n.Cb)()],u.prototype,"type",void 0),(0,o.__decorate)([(0,n.Cb)({type:Boolean,attribute:"no-focus-trap"})],u.prototype,"noFocusTrap",void 0),(0,o.__decorate)([(0,n.IO)("dialog")],u.prototype,"dialog",void 0),(0,o.__decorate)([(0,n.IO)(".scrim")],u.prototype,"scrim",void 0),(0,o.__decorate)([(0,n.IO)(".container")],u.prototype,"container",void 0),(0,o.__decorate)([(0,n.IO)(".headline")],u.prototype,"headline",void 0),(0,o.__decorate)([(0,n.IO)(".content")],u.prototype,"content",void 0),(0,o.__decorate)([(0,n.IO)(".actions")],u.prototype,"actions",void 0),(0,o.__decorate)([(0,n.SB)()],u.prototype,"isAtScrollTop",void 0),(0,o.__decorate)([(0,n.SB)()],u.prototype,"isAtScrollBottom",void 0),(0,o.__decorate)([(0,n.IO)(".scroller")],u.prototype,"scroller",void 0),(0,o.__decorate)([(0,n.IO)(".top.anchor")],u.prototype,"topAnchor",void 0),(0,o.__decorate)([(0,n.IO)(".bottom.anchor")],u.prototype,"bottomAnchor",void 0),(0,o.__decorate)([(0,n.IO)(".focus-trap")],u.prototype,"firstFocusTrap",void 0),(0,o.__decorate)([(0,n.SB)()],u.prototype,"hasHeadline",void 0),(0,o.__decorate)([(0,n.SB)()],u.prototype,"hasActions",void 0),(0,o.__decorate)([(0,n.SB)()],u.prototype,"hasIcon",void 0);let v;const f=(0,a.iv)(v||(v=(e=>e)`:host{border-start-start-radius:var(--md-dialog-container-shape-start-start,var(--md-dialog-container-shape,var(--md-sys-shape-corner-extra-large,28px)));border-start-end-radius:var(--md-dialog-container-shape-start-end,var(--md-dialog-container-shape,var(--md-sys-shape-corner-extra-large,28px)));border-end-end-radius:var(--md-dialog-container-shape-end-end,var(--md-dialog-container-shape,var(--md-sys-shape-corner-extra-large,28px)));border-end-start-radius:var(--md-dialog-container-shape-end-start,var(--md-dialog-container-shape,var(--md-sys-shape-corner-extra-large,28px)));display:contents;margin:auto;max-height:min(560px,100% - 48px);max-width:min(560px,100% - 48px);min-height:140px;min-width:280px;position:fixed;height:fit-content;width:fit-content}dialog{background:rgba(0,0,0,0);border:none;border-radius:inherit;flex-direction:column;height:inherit;margin:inherit;max-height:inherit;max-width:inherit;min-height:inherit;min-width:inherit;outline:0;overflow:visible;padding:0;width:inherit}dialog[open]{display:flex}::backdrop{background:0 0}.scrim{background:var(--md-sys-color-scrim,#000);display:none;inset:0;opacity:32%;pointer-events:none;position:fixed;z-index:1}:host([open]) .scrim{display:flex}h2{all:unset;align-self:stretch}.headline{align-items:center;color:var(--md-dialog-headline-color,var(--md-sys-color-on-surface,#1d1b20));display:flex;flex-direction:column;font-family:var(--md-dialog-headline-font, var(--md-sys-typescale-headline-small-font, var(--md-ref-typeface-brand, Roboto)));font-size:var(--md-dialog-headline-size, var(--md-sys-typescale-headline-small-size, 1.5rem));line-height:var(--md-dialog-headline-line-height, var(--md-sys-typescale-headline-small-line-height, 2rem));font-weight:var(--md-dialog-headline-weight,var(--md-sys-typescale-headline-small-weight,var(--md-ref-typeface-weight-regular,400)));position:relative}slot[name=headline]::slotted(*){align-items:center;align-self:stretch;box-sizing:border-box;display:flex;gap:8px;padding:24px 24px 0}.icon{display:flex}slot[name=icon]::slotted(*){color:var(--md-dialog-icon-color,var(--md-sys-color-secondary,#625b71));fill:currentColor;font-size:var(--md-dialog-icon-size, 24px);margin-top:24px;height:var(--md-dialog-icon-size,24px);width:var(--md-dialog-icon-size,24px)}.has-icon slot[name=headline]::slotted(*){justify-content:center;padding-top:16px}.scrollable slot[name=headline]::slotted(*){padding-bottom:16px}.scrollable.has-headline slot[name=content]::slotted(*){padding-top:8px}.container{border-radius:inherit;display:flex;flex-direction:column;flex-grow:1;overflow:hidden;position:relative;transform-origin:top}.container::before{background:var(--md-dialog-container-color,var(--md-sys-color-surface-container-high,#ece6f0));border-radius:inherit;content:"";inset:0;position:absolute}.scroller{display:flex;flex:1;flex-direction:column;overflow:hidden;z-index:1}.scrollable .scroller{overflow-y:scroll}.content{color:var(--md-dialog-supporting-text-color,var(--md-sys-color-on-surface-variant,#49454f));font-family:var(--md-dialog-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-dialog-supporting-text-size, var(--md-sys-typescale-body-medium-size, .875rem));line-height:var(--md-dialog-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));flex:1;font-weight:var(--md-dialog-supporting-text-weight,var(--md-sys-typescale-body-medium-weight,var(--md-ref-typeface-weight-regular,400)));height:min-content;position:relative}slot[name=content]::slotted(*){box-sizing:border-box;padding:24px}.anchor{position:absolute}.top.anchor{top:0}.bottom.anchor{bottom:0}.actions{position:relative}slot[name=actions]::slotted(*){box-sizing:border-box;display:flex;gap:8px;justify-content:flex-end;padding:16px 24px 24px}.has-actions slot[name=content]::slotted(*){padding-bottom:8px}md-divider{display:none;position:absolute}.has-actions.show-bottom-divider .actions md-divider,.has-headline.show-top-divider .headline md-divider{display:flex}.headline md-divider{bottom:0}.actions md-divider{top:0}@media(forced-colors:active){dialog{outline:2px solid WindowText}}`));let y=class extends u{};y.styles=[f],y=(0,o.__decorate)([(0,n.Mo)("md-dialog")],y)},88854:function(e,t,i){i.d(t,{G:function(){return a},I:function(){return n}});var o=i(43921);const n={dialog:[[[{transform:"translateY(-50px)"},{transform:"translateY(0)"}],{duration:500,easing:o.Xt.EMPHASIZED}]],scrim:[[[{opacity:0},{opacity:.32}],{duration:500,easing:"linear"}]],container:[[[{opacity:0},{opacity:1}],{duration:50,easing:"linear",pseudoElement:"::before"}],[[{height:"35%"},{height:"100%"}],{duration:500,easing:o.Xt.EMPHASIZED,pseudoElement:"::before"}]],headline:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],content:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:0},{opacity:0,offset:.5},{opacity:1}],{duration:300,easing:"linear",fill:"forwards"}]]},a={dialog:[[[{transform:"translateY(0)"},{transform:"translateY(-50px)"}],{duration:150,easing:o.Xt.EMPHASIZED_ACCELERATE}]],scrim:[[[{opacity:.32},{opacity:0}],{duration:150,easing:"linear"}]],container:[[[{height:"100%"},{height:"35%"}],{duration:150,easing:o.Xt.EMPHASIZED_ACCELERATE,pseudoElement:"::before"}],[[{opacity:"1"},{opacity:"0"}],{delay:100,duration:50,easing:"linear",pseudoElement:"::before"}]],headline:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],content:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]]}}}]);
//# sourceMappingURL=7442.b46537248ed68ebc.js.map