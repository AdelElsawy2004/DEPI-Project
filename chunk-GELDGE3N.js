import{k as d,l as m,m as H}from"./chunk-KDDNVMW4.js";import{K as _,N as R,O as V,Q as b,T as B,da as G,ja as I,na as l,o as F,q as p,y as $}from"./chunk-CNKWOCYW.js";import{r as j,s as P}from"./chunk-AAJFCNUR.js";import{Fb as g,Ha as w,Ia as f,Ja as M,L as u,M as D,Oa as E,Q as s,Tb as N,Wb as x,Z as O,_ as L,ga as k,ha as y,ja as A,na as T,za as C}from"./chunk-WYFWPZ5P.js";import{a as o}from"./chunk-YEWEO3AL.js";var S={};function U(n="pui_id_"){return Object.hasOwn(S,n)||(S[n]=0),S[n]++,`${n}${S[n]}`}function v(...n){if(n){let c=[];for(let e=0;e<n.length;e++){let t=n[e];if(!t)continue;let i=typeof t;if(i==="string"||i==="number")c.push(t);else if(i==="object"){let r=Array.isArray(t)?[v(...t)]:Object.entries(t).map(([h,a])=>a?h:void 0);c=r.length?c.concat(r.filter(h=>!!h)):c}}return c.join(" ").trim()}}var Y=(()=>{class n extends m{name="common";static \u0275fac=(()=>{let e;return function(i){return(e||(e=y(n)))(i||n)}})();static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),q=(()=>{class n{document=s(L);platformId=s(T);el=s(A);injector=s(O);cd=s(x);renderer=s(C);config=s(H);baseComponentStyle=s(Y);baseStyle=s(m);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=U("pc");themeChangeListeners=[];_getHostInstance(e){if(e)return e?this.hostName?e.name===this.hostName?e:this._getHostInstance(e.parentInstance):e.parentInstance:void 0}_getOptionValue(e,t="",i={}){return G(e,t,i)}ngOnInit(){this.document&&(this._loadCoreStyles(),this._loadStyles())}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(e){if(this.document&&!P(this.platformId)){let{dt:t}=e;t&&t.currentValue&&(this._loadScopedThemeStyles(t.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(t.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(e=>I.off("theme:change",e))}_loadStyles(){let e=()=>{d.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),d.setLoadedStyleName("base")),this._loadThemeStyles()};e(),this._themeChangeListener(()=>e())}_loadCoreStyles(){!d.isStyleNameLoaded("base")&&this.componentStyle?.name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),d.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!l.isStyleNameLoaded("common")){let{primitive:e,semantic:t,global:i,style:r}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,o({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(t?.css,o({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(i?.css,o({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(o({name:"global-style"},this.styleOptions),r),l.setLoadedStyleName("common")}if(!l.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:e,style:t}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(e,o({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(o({name:`${this.componentStyle?.name}-style`},this.styleOptions),t),l.setLoadedStyleName(this.componentStyle?.name)}if(!l.isStyleNameLoaded("layer-order")){let e=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,o({name:"layer-order",first:!0},this.styleOptions)),l.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(e){let{css:t}=this.componentStyle?.getPresetTheme?.(e,`[${this.attrSelector}]`)||{},i=this.componentStyle?.load(t,o({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=i?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e=()=>{}){d.clearLoadedStyleNames(),I.on("theme:change",e),this.themeChangeListeners.push(e)}cx(e,t={}){return v(this._getOptionValue(this.$style?.classes,e,o({instance:this},t)))}sx(e="",t=!0,i={}){if(t)return this._getOptionValue(this.$style?.inlineStyles,e,o({instance:this},i))}get parent(){return this.parentInstance}get $style(){return this.parent?this.parent.componentStyle:this.componentStyle}cn=v;static \u0275fac=function(t){return new(t||n)};static \u0275dir=f({type:n,inputs:{dt:"dt"},features:[g([Y,m]),k]})}return n})();var z=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var X=`
    ${z}
    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,Z={root:"p-ink"},W=(()=>{class n extends m{name="ripple";theme=X;classes=Z;static \u0275fac=(()=>{let e;return function(i){return(e||(e=y(n)))(i||n)}})();static \u0275prov=u({token:n,factory:n.\u0275fac})}return n})();var be=(()=>{class n extends q{zone=s(E);_componentStyle=s(W);animationListener;mouseDownListener;timeout;constructor(){super(),N(()=>{j(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let t=this.getInk();if(!t||this.document.defaultView?.getComputedStyle(t,null).display==="none")return;if(p(t,"p-ink-active"),!_(t)&&!b(t)){let a=Math.max($(this.el.nativeElement),V(this.el.nativeElement));t.style.height=a+"px",t.style.width=a+"px"}let i=R(this.el.nativeElement),r=e.pageX-i.left+this.document.body.scrollTop-b(t)/2,h=e.pageY-i.top+this.document.body.scrollLeft-_(t)/2;this.renderer.setStyle(t,"top",h+"px"),this.renderer.setStyle(t,"left",r+"px"),F(t,"p-ink-active"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&p(a,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let t=0;t<e.length;t++)if(typeof e[t].className=="string"&&e[t].className.indexOf("p-ink")!==-1)return e[t];return null}resetInk(){let e=this.getInk();e&&p(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),p(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,B(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=f({type:n,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[g([W]),M]})}return n})(),Ie=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=w({type:n});static \u0275inj=D({})}return n})();export{v as a,U as b,q as c,be as d,Ie as e};
