import {
  BaseComponent,
  Ripple,
  f,
  s as s2
} from "./chunk-UTSE7XOD.js";
import {
  BaseStyle,
  PrimeTemplate,
  SharedModule
} from "./chunk-Q4VSGNER.js";
import {
  NgControl
} from "./chunk-LW7YESJ6.js";
import {
  O,
  R,
  W,
  a,
  dt,
  rr,
  s,
  st,
  x,
  z
} from "./chunk-I2GZOOFQ.js";
import {
  CommonModule,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-N2DG2MZF.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Injectable,
  Input,
  NgModule,
  Output,
  PLATFORM_ID,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  contentChild,
  inject,
  input,
  numberAttribute,
  setClassMetadata,
  signal,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-6FH5EJK4.js";
import {
  __spreadValues
} from "./chunk-R2QGWZ7S.js";

// node_modules/primeng/fesm2022/primeng-basemodelholder.mjs
var BaseModelHolder = class _BaseModelHolder extends BaseComponent {
  modelValue = signal(void 0, ...ngDevMode ? [{
    debugName: "modelValue"
  }] : []);
  $filled = computed(() => s(this.modelValue()), ...ngDevMode ? [{
    debugName: "$filled"
  }] : []);
  writeModelValue(value) {
    this.modelValue.set(value);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BaseModelHolder_BaseFactory;
    return function BaseModelHolder_Factory(__ngFactoryType__) {
      return (\u0275BaseModelHolder_BaseFactory || (\u0275BaseModelHolder_BaseFactory = \u0275\u0275getInheritedFactory(_BaseModelHolder)))(__ngFactoryType__ || _BaseModelHolder);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BaseModelHolder,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseModelHolder, [{
    type: Directive,
    args: [{
      standalone: true
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/progressbar/index.mjs
var style = "\n    .p-progressbar {\n        display: block;\n        position: relative;\n        overflow: hidden;\n        height: dt('progressbar.height');\n        background: dt('progressbar.background');\n        border-radius: dt('progressbar.border.radius');\n    }\n\n    .p-progressbar-value {\n        margin: 0;\n        background: dt('progressbar.value.background');\n    }\n\n    .p-progressbar-label {\n        color: dt('progressbar.label.color');\n        font-size: dt('progressbar.label.font.size');\n        font-weight: dt('progressbar.label.font.weight');\n    }\n\n    .p-progressbar-determinate .p-progressbar-value {\n        height: 100%;\n        width: 0%;\n        position: absolute;\n        display: none;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        overflow: hidden;\n        transition: width 1s ease-in-out;\n    }\n\n    .p-progressbar-determinate .p-progressbar-label {\n        display: inline-flex;\n    }\n\n    .p-progressbar-indeterminate .p-progressbar-value::before {\n        content: '';\n        position: absolute;\n        background: inherit;\n        inset-block-start: 0;\n        inset-inline-start: 0;\n        inset-block-end: 0;\n        will-change: inset-inline-start, inset-inline-end;\n        animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n    }\n\n    .p-progressbar-indeterminate .p-progressbar-value::after {\n        content: '';\n        position: absolute;\n        background: inherit;\n        inset-block-start: 0;\n        inset-inline-start: 0;\n        inset-block-end: 0;\n        will-change: inset-inline-start, inset-inline-end;\n        animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n        animation-delay: 1.15s;\n    }\n\n    @keyframes p-progressbar-indeterminate-anim {\n        0% {\n            inset-inline-start: -35%;\n            inset-inline-end: 100%;\n        }\n        60% {\n            inset-inline-start: 100%;\n            inset-inline-end: -90%;\n        }\n        100% {\n            inset-inline-start: 100%;\n            inset-inline-end: -90%;\n        }\n    }\n    @-webkit-keyframes p-progressbar-indeterminate-anim {\n        0% {\n            inset-inline-start: -35%;\n            inset-inline-end: 100%;\n        }\n        60% {\n            inset-inline-start: 100%;\n            inset-inline-end: -90%;\n        }\n        100% {\n            inset-inline-start: 100%;\n            inset-inline-end: -90%;\n        }\n    }\n\n    @keyframes p-progressbar-indeterminate-anim-short {\n        0% {\n            inset-inline-start: -200%;\n            inset-inline-end: 100%;\n        }\n        60% {\n            inset-inline-start: 107%;\n            inset-inline-end: -8%;\n        }\n        100% {\n            inset-inline-start: 107%;\n            inset-inline-end: -8%;\n        }\n    }\n    @-webkit-keyframes p-progressbar-indeterminate-anim-short {\n        0% {\n            inset-inline-start: -200%;\n            inset-inline-end: 100%;\n        }\n        60% {\n            inset-inline-start: 107%;\n            inset-inline-end: -8%;\n        }\n        100% {\n            inset-inline-start: 107%;\n            inset-inline-end: -8%;\n        }\n    }\n";

// node_modules/primeng/fesm2022/primeng-fluid.mjs
var _c0 = ["*"];
var classes = {
  root: "p-fluid"
};
var FluidStyle = class _FluidStyle extends BaseStyle {
  name = "fluid";
  classes = classes;
  theme = style;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275FluidStyle_BaseFactory;
    return function FluidStyle_Factory(__ngFactoryType__) {
      return (\u0275FluidStyle_BaseFactory || (\u0275FluidStyle_BaseFactory = \u0275\u0275getInheritedFactory(_FluidStyle)))(__ngFactoryType__ || _FluidStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _FluidStyle,
    factory: _FluidStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FluidStyle, [{
    type: Injectable
  }], null, null);
})();
var FluidClasses;
(function(FluidClasses2) {
  FluidClasses2["root"] = "p-fluid";
})(FluidClasses || (FluidClasses = {}));
var Fluid = class _Fluid extends BaseComponent {
  _componentStyle = inject(FluidStyle);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Fluid_BaseFactory;
    return function Fluid_Factory(__ngFactoryType__) {
      return (\u0275Fluid_BaseFactory || (\u0275Fluid_BaseFactory = \u0275\u0275getInheritedFactory(_Fluid)))(__ngFactoryType__ || _Fluid);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Fluid,
    selectors: [["p-fluid"]],
    hostVars: 2,
    hostBindings: function Fluid_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    features: [\u0275\u0275ProvidersFeature([FluidStyle]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function Fluid_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    dependencies: [CommonModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Fluid, [{
    type: Component,
    args: [{
      selector: "p-fluid",
      template: ` <ng-content></ng-content> `,
      standalone: true,
      imports: [CommonModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [FluidStyle],
      host: {
        "[class]": "cx('root')"
      }
    }]
  }], null, null);
})();
var FluidModule = class _FluidModule {
  static \u0275fac = function FluidModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FluidModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _FluidModule,
    imports: [Fluid],
    exports: [Fluid]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Fluid]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FluidModule, [{
    type: NgModule,
    args: [{
      imports: [Fluid],
      exports: [Fluid]
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/inputtext/index.mjs
var style2 = "\n    .p-inputtext {\n        font-family: inherit;\n        font-feature-settings: inherit;\n        font-size: 1rem;\n        color: dt('inputtext.color');\n        background: dt('inputtext.background');\n        padding-block: dt('inputtext.padding.y');\n        padding-inline: dt('inputtext.padding.x');\n        border: 1px solid dt('inputtext.border.color');\n        transition:\n            background dt('inputtext.transition.duration'),\n            color dt('inputtext.transition.duration'),\n            border-color dt('inputtext.transition.duration'),\n            outline-color dt('inputtext.transition.duration'),\n            box-shadow dt('inputtext.transition.duration');\n        appearance: none;\n        border-radius: dt('inputtext.border.radius');\n        outline-color: transparent;\n        box-shadow: dt('inputtext.shadow');\n    }\n\n    .p-inputtext:enabled:hover {\n        border-color: dt('inputtext.hover.border.color');\n    }\n\n    .p-inputtext:enabled:focus {\n        border-color: dt('inputtext.focus.border.color');\n        box-shadow: dt('inputtext.focus.ring.shadow');\n        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');\n        outline-offset: dt('inputtext.focus.ring.offset');\n    }\n\n    .p-inputtext.p-invalid {\n        border-color: dt('inputtext.invalid.border.color');\n    }\n\n    .p-inputtext.p-variant-filled {\n        background: dt('inputtext.filled.background');\n    }\n\n    .p-inputtext.p-variant-filled:enabled:hover {\n        background: dt('inputtext.filled.hover.background');\n    }\n\n    .p-inputtext.p-variant-filled:enabled:focus {\n        background: dt('inputtext.filled.focus.background');\n    }\n\n    .p-inputtext:disabled {\n        opacity: 1;\n        background: dt('inputtext.disabled.background');\n        color: dt('inputtext.disabled.color');\n    }\n\n    .p-inputtext::placeholder {\n        color: dt('inputtext.placeholder.color');\n    }\n\n    .p-inputtext.p-invalid::placeholder {\n        color: dt('inputtext.invalid.placeholder.color');\n    }\n\n    .p-inputtext-sm {\n        font-size: dt('inputtext.sm.font.size');\n        padding-block: dt('inputtext.sm.padding.y');\n        padding-inline: dt('inputtext.sm.padding.x');\n    }\n\n    .p-inputtext-lg {\n        font-size: dt('inputtext.lg.font.size');\n        padding-block: dt('inputtext.lg.padding.y');\n        padding-inline: dt('inputtext.lg.padding.x');\n    }\n\n    .p-inputtext-fluid {\n        width: 100%;\n    }\n";

// node_modules/primeng/fesm2022/primeng-inputtext.mjs
var theme = (
  /*css*/
  `
    ${style2}

    /* For PrimeNG */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`
);
var classes2 = {
  root: ({
    instance
  }) => ["p-inputtext p-component", {
    "p-filled": instance.$filled(),
    "p-inputtext-sm": instance.pSize === "small",
    "p-inputtext-lg": instance.pSize === "large",
    "p-invalid": instance.invalid(),
    "p-variant-filled": instance.$variant() === "filled",
    "p-inputtext-fluid": instance.hasFluid
  }]
};
var InputTextStyle = class _InputTextStyle extends BaseStyle {
  name = "inputtext";
  theme = theme;
  classes = classes2;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275InputTextStyle_BaseFactory;
    return function InputTextStyle_Factory(__ngFactoryType__) {
      return (\u0275InputTextStyle_BaseFactory || (\u0275InputTextStyle_BaseFactory = \u0275\u0275getInheritedFactory(_InputTextStyle)))(__ngFactoryType__ || _InputTextStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _InputTextStyle,
    factory: _InputTextStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputTextStyle, [{
    type: Injectable
  }], null, null);
})();
var InputTextClasses;
(function(InputTextClasses2) {
  InputTextClasses2["root"] = "p-inputtext";
})(InputTextClasses || (InputTextClasses = {}));
var InputText = class _InputText extends BaseModelHolder {
  ngControl = inject(NgControl, {
    optional: true,
    self: true
  });
  pcFluid = inject(Fluid, {
    optional: true,
    host: true,
    skipSelf: true
  });
  /**
   * Defines the size of the component.
   * @group Props
   */
  pSize;
  /**
   * Specifies the input variant of the component.
   * @defaultValue undefined
   * @group Props
   */
  variant = input(...ngDevMode ? [void 0, {
    debugName: "variant"
  }] : []);
  /**
   * Spans 100% width of the container when enabled.
   * @defaultValue undefined
   * @group Props
   */
  fluid = input(void 0, ...ngDevMode ? [{
    debugName: "fluid",
    transform: booleanAttribute
  }] : [{
    transform: booleanAttribute
  }]);
  /**
   * When present, it specifies that the component should have invalid state style.
   * @defaultValue false
   * @group Props
   */
  invalid = input(void 0, ...ngDevMode ? [{
    debugName: "invalid",
    transform: booleanAttribute
  }] : [{
    transform: booleanAttribute
  }]);
  $variant = computed(() => this.variant() || this.config.inputStyle() || this.config.inputVariant(), ...ngDevMode ? [{
    debugName: "$variant"
  }] : []);
  _componentStyle = inject(InputTextStyle);
  ngAfterViewInit() {
    super.ngAfterViewInit();
    this.writeModelValue(this.ngControl?.value ?? this.el.nativeElement.value);
    this.cd.detectChanges();
  }
  ngDoCheck() {
    this.writeModelValue(this.ngControl?.value ?? this.el.nativeElement.value);
  }
  onInput() {
    this.writeModelValue(this.ngControl?.value ?? this.el.nativeElement.value);
  }
  get hasFluid() {
    return this.fluid() ?? !!this.pcFluid;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275InputText_BaseFactory;
    return function InputText_Factory(__ngFactoryType__) {
      return (\u0275InputText_BaseFactory || (\u0275InputText_BaseFactory = \u0275\u0275getInheritedFactory(_InputText)))(__ngFactoryType__ || _InputText);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _InputText,
    selectors: [["", "pInputText", ""]],
    hostVars: 2,
    hostBindings: function InputText_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function InputText_input_HostBindingHandler($event) {
          return ctx.onInput($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    inputs: {
      pSize: "pSize",
      variant: [1, "variant"],
      fluid: [1, "fluid"],
      invalid: [1, "invalid"]
    },
    features: [\u0275\u0275ProvidersFeature([InputTextStyle]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputText, [{
    type: Directive,
    args: [{
      selector: "[pInputText]",
      standalone: true,
      host: {
        "[class]": "cx('root')"
      },
      providers: [InputTextStyle]
    }]
  }], null, {
    pSize: [{
      type: Input,
      args: ["pSize"]
    }],
    onInput: [{
      type: HostListener,
      args: ["input", ["$event"]]
    }]
  });
})();
var InputTextModule = class _InputTextModule {
  static \u0275fac = function InputTextModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputTextModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _InputTextModule,
    imports: [InputText],
    exports: [InputText]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputTextModule, [{
    type: NgModule,
    args: [{
      imports: [InputText],
      exports: [InputText]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-dom.mjs
var DomHandler = class _DomHandler {
  static zindex = 1e3;
  static calculatedScrollbarWidth = null;
  static calculatedScrollbarHeight = null;
  static browser;
  static addClass(element, className) {
    if (element && className) {
      if (element.classList)
        element.classList.add(className);
      else
        element.className += " " + className;
    }
  }
  static addMultipleClasses(element, className) {
    if (element && className) {
      if (element.classList) {
        let styles = className.trim().split(" ");
        for (let i = 0; i < styles.length; i++) {
          element.classList.add(styles[i]);
        }
      } else {
        let styles = className.split(" ");
        for (let i = 0; i < styles.length; i++) {
          element.className += " " + styles[i];
        }
      }
    }
  }
  static removeClass(element, className) {
    if (element && className) {
      if (element.classList)
        element.classList.remove(className);
      else
        element.className = element.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    }
  }
  static removeMultipleClasses(element, classNames) {
    if (element && classNames) {
      [classNames].flat().filter(Boolean).forEach((cNames) => cNames.split(" ").forEach((className) => this.removeClass(element, className)));
    }
  }
  static hasClass(element, className) {
    if (element && className) {
      if (element.classList)
        return element.classList.contains(className);
      else
        return new RegExp("(^| )" + className + "( |$)", "gi").test(element.className);
    }
    return false;
  }
  static siblings(element) {
    return Array.prototype.filter.call(element.parentNode.children, function(child) {
      return child !== element;
    });
  }
  static find(element, selector) {
    return Array.from(element.querySelectorAll(selector));
  }
  static findSingle(element, selector) {
    return this.isElement(element) ? element.querySelector(selector) : null;
  }
  static index(element) {
    let children = element.parentNode.childNodes;
    let num = 0;
    for (var i = 0; i < children.length; i++) {
      if (children[i] == element)
        return num;
      if (children[i].nodeType == 1)
        num++;
    }
    return -1;
  }
  static indexWithinGroup(element, attributeName) {
    let children = element.parentNode ? element.parentNode.childNodes : [];
    let num = 0;
    for (var i = 0; i < children.length; i++) {
      if (children[i] == element)
        return num;
      if (children[i].attributes && children[i].attributes[attributeName] && children[i].nodeType == 1)
        num++;
    }
    return -1;
  }
  static appendOverlay(overlay, target, appendTo = "self") {
    if (appendTo !== "self" && overlay && target) {
      this.appendChild(overlay, target);
    }
  }
  static alignOverlay(overlay, target, appendTo = "self", calculateMinWidth = true) {
    if (overlay && target) {
      if (calculateMinWidth) {
        overlay.style.minWidth = `${_DomHandler.getOuterWidth(target)}px`;
      }
      if (appendTo === "self") {
        this.relativePosition(overlay, target);
      } else {
        this.absolutePosition(overlay, target);
      }
    }
  }
  static relativePosition(element, target, gutter = true) {
    const getClosestRelativeElement = (el) => {
      if (!el)
        return;
      return getComputedStyle(el).getPropertyValue("position") === "relative" ? el : getClosestRelativeElement(el.parentElement);
    };
    const elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element);
    const targetHeight = target.offsetHeight;
    const targetOffset = target.getBoundingClientRect();
    const windowScrollTop = this.getWindowScrollTop();
    const windowScrollLeft = this.getWindowScrollLeft();
    const viewport = this.getViewport();
    const relativeElement = getClosestRelativeElement(element);
    const relativeElementOffset = relativeElement?.getBoundingClientRect() || {
      top: -1 * windowScrollTop,
      left: -1 * windowScrollLeft
    };
    let top, left, origin2 = "top";
    if (targetOffset.top + targetHeight + elementDimensions.height > viewport.height) {
      top = targetOffset.top - relativeElementOffset.top - elementDimensions.height;
      origin2 = "bottom";
      if (targetOffset.top + top < 0) {
        top = -1 * targetOffset.top;
      }
    } else {
      top = targetHeight + targetOffset.top - relativeElementOffset.top;
      origin2 = "top";
    }
    const horizontalOverflow = targetOffset.left + elementDimensions.width - viewport.width;
    const targetLeftOffsetInSpaceOfRelativeElement = targetOffset.left - relativeElementOffset.left;
    if (elementDimensions.width > viewport.width) {
      left = (targetOffset.left - relativeElementOffset.left) * -1;
    } else if (horizontalOverflow > 0) {
      left = targetLeftOffsetInSpaceOfRelativeElement - horizontalOverflow;
    } else {
      left = targetOffset.left - relativeElementOffset.left;
    }
    element.style.top = top + "px";
    element.style.left = left + "px";
    element.style.transformOrigin = origin2;
    if (gutter) {
      const gutterValue = x(/-anchor-gutter$/)?.value;
      element.style.marginTop = origin2 === "bottom" ? `calc(${gutterValue ?? "2px"} * -1)` : gutterValue ?? "";
    }
  }
  static absolutePosition(element, target, gutter = true) {
    const elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element);
    const elementOuterHeight = elementDimensions.height;
    const elementOuterWidth = elementDimensions.width;
    const targetOuterHeight = target.offsetHeight;
    const targetOuterWidth = target.offsetWidth;
    const targetOffset = target.getBoundingClientRect();
    const windowScrollTop = this.getWindowScrollTop();
    const windowScrollLeft = this.getWindowScrollLeft();
    const viewport = this.getViewport();
    let top, left;
    if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport.height) {
      top = targetOffset.top + windowScrollTop - elementOuterHeight;
      element.style.transformOrigin = "bottom";
      if (top < 0) {
        top = windowScrollTop;
      }
    } else {
      top = targetOuterHeight + targetOffset.top + windowScrollTop;
      element.style.transformOrigin = "top";
    }
    if (targetOffset.left + elementOuterWidth > viewport.width)
      left = Math.max(0, targetOffset.left + windowScrollLeft + targetOuterWidth - elementOuterWidth);
    else
      left = targetOffset.left + windowScrollLeft;
    element.style.top = top + "px";
    element.style.left = left + "px";
    gutter && (element.style.marginTop = origin === "bottom" ? "calc(var(--p-anchor-gutter) * -1)" : "calc(var(--p-anchor-gutter))");
  }
  static getParents(element, parents = []) {
    return element["parentNode"] === null ? parents : this.getParents(element.parentNode, parents.concat([element.parentNode]));
  }
  static getScrollableParents(element) {
    let scrollableParents = [];
    if (element) {
      let parents = this.getParents(element);
      const overflowRegex = /(auto|scroll)/;
      const overflowCheck = (node) => {
        let styleDeclaration = window["getComputedStyle"](node, null);
        return overflowRegex.test(styleDeclaration.getPropertyValue("overflow")) || overflowRegex.test(styleDeclaration.getPropertyValue("overflowX")) || overflowRegex.test(styleDeclaration.getPropertyValue("overflowY"));
      };
      for (let parent of parents) {
        let scrollSelectors = parent.nodeType === 1 && parent.dataset["scrollselectors"];
        if (scrollSelectors) {
          let selectors = scrollSelectors.split(",");
          for (let selector of selectors) {
            let el = this.findSingle(parent, selector);
            if (el && overflowCheck(el)) {
              scrollableParents.push(el);
            }
          }
        }
        if (parent.nodeType !== 9 && overflowCheck(parent)) {
          scrollableParents.push(parent);
        }
      }
    }
    return scrollableParents;
  }
  static getHiddenElementOuterHeight(element) {
    element.style.visibility = "hidden";
    element.style.display = "block";
    let elementHeight = element.offsetHeight;
    element.style.display = "none";
    element.style.visibility = "visible";
    return elementHeight;
  }
  static getHiddenElementOuterWidth(element) {
    element.style.visibility = "hidden";
    element.style.display = "block";
    let elementWidth = element.offsetWidth;
    element.style.display = "none";
    element.style.visibility = "visible";
    return elementWidth;
  }
  static getHiddenElementDimensions(element) {
    let dimensions = {};
    element.style.visibility = "hidden";
    element.style.display = "block";
    dimensions.width = element.offsetWidth;
    dimensions.height = element.offsetHeight;
    element.style.display = "none";
    element.style.visibility = "visible";
    return dimensions;
  }
  static scrollInView(container, item) {
    let borderTopValue = getComputedStyle(container).getPropertyValue("borderTopWidth");
    let borderTop = borderTopValue ? parseFloat(borderTopValue) : 0;
    let paddingTopValue = getComputedStyle(container).getPropertyValue("paddingTop");
    let paddingTop = paddingTopValue ? parseFloat(paddingTopValue) : 0;
    let containerRect = container.getBoundingClientRect();
    let itemRect = item.getBoundingClientRect();
    let offset = itemRect.top + document.body.scrollTop - (containerRect.top + document.body.scrollTop) - borderTop - paddingTop;
    let scroll = container.scrollTop;
    let elementHeight = container.clientHeight;
    let itemHeight = this.getOuterHeight(item);
    if (offset < 0) {
      container.scrollTop = scroll + offset;
    } else if (offset + itemHeight > elementHeight) {
      container.scrollTop = scroll + offset - elementHeight + itemHeight;
    }
  }
  static fadeIn(element, duration) {
    element.style.opacity = 0;
    let last = +/* @__PURE__ */ new Date();
    let opacity = 0;
    let tick = function() {
      opacity = +element.style.opacity.replace(",", ".") + ((/* @__PURE__ */ new Date()).getTime() - last) / duration;
      element.style.opacity = opacity;
      last = +/* @__PURE__ */ new Date();
      if (+opacity < 1) {
        window.requestAnimationFrame && requestAnimationFrame(tick) || setTimeout(tick, 16);
      }
    };
    tick();
  }
  static fadeOut(element, ms) {
    var opacity = 1, interval = 50, duration = ms, gap = interval / duration;
    let fading = setInterval(() => {
      opacity = opacity - gap;
      if (opacity <= 0) {
        opacity = 0;
        clearInterval(fading);
      }
      element.style.opacity = opacity;
    }, interval);
  }
  static getWindowScrollTop() {
    let doc = document.documentElement;
    return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  }
  static getWindowScrollLeft() {
    let doc = document.documentElement;
    return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
  }
  static matches(element, selector) {
    var p = Element.prototype;
    var f2 = p["matches"] || p.webkitMatchesSelector || p["mozMatchesSelector"] || p["msMatchesSelector"] || function(s3) {
      return [].indexOf.call(document.querySelectorAll(s3), this) !== -1;
    };
    return f2.call(element, selector);
  }
  static getOuterWidth(el, margin) {
    let width = el.offsetWidth;
    if (margin) {
      let style5 = getComputedStyle(el);
      width += parseFloat(style5.marginLeft) + parseFloat(style5.marginRight);
    }
    return width;
  }
  static getHorizontalPadding(el) {
    let style5 = getComputedStyle(el);
    return parseFloat(style5.paddingLeft) + parseFloat(style5.paddingRight);
  }
  static getHorizontalMargin(el) {
    let style5 = getComputedStyle(el);
    return parseFloat(style5.marginLeft) + parseFloat(style5.marginRight);
  }
  static innerWidth(el) {
    let width = el.offsetWidth;
    let style5 = getComputedStyle(el);
    width += parseFloat(style5.paddingLeft) + parseFloat(style5.paddingRight);
    return width;
  }
  static width(el) {
    let width = el.offsetWidth;
    let style5 = getComputedStyle(el);
    width -= parseFloat(style5.paddingLeft) + parseFloat(style5.paddingRight);
    return width;
  }
  static getInnerHeight(el) {
    let height = el.offsetHeight;
    let style5 = getComputedStyle(el);
    height += parseFloat(style5.paddingTop) + parseFloat(style5.paddingBottom);
    return height;
  }
  static getOuterHeight(el, margin) {
    let height = el.offsetHeight;
    if (margin) {
      let style5 = getComputedStyle(el);
      height += parseFloat(style5.marginTop) + parseFloat(style5.marginBottom);
    }
    return height;
  }
  static getHeight(el) {
    let height = el.offsetHeight;
    let style5 = getComputedStyle(el);
    height -= parseFloat(style5.paddingTop) + parseFloat(style5.paddingBottom) + parseFloat(style5.borderTopWidth) + parseFloat(style5.borderBottomWidth);
    return height;
  }
  static getWidth(el) {
    let width = el.offsetWidth;
    let style5 = getComputedStyle(el);
    width -= parseFloat(style5.paddingLeft) + parseFloat(style5.paddingRight) + parseFloat(style5.borderLeftWidth) + parseFloat(style5.borderRightWidth);
    return width;
  }
  static getViewport() {
    let win = window, d = document, e = d.documentElement, g = d.getElementsByTagName("body")[0], w = win.innerWidth || e.clientWidth || g.clientWidth, h = win.innerHeight || e.clientHeight || g.clientHeight;
    return { width: w, height: h };
  }
  static getOffset(el) {
    var rect = el.getBoundingClientRect();
    return {
      top: rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
      left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0)
    };
  }
  static replaceElementWith(element, replacementElement) {
    let parentNode = element.parentNode;
    if (!parentNode)
      throw `Can't replace element`;
    return parentNode.replaceChild(replacementElement, element);
  }
  static getUserAgent() {
    if (navigator && this.isClient()) {
      return navigator.userAgent;
    }
  }
  static isIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    if (msie > 0) {
      return true;
    }
    var trident = ua.indexOf("Trident/");
    if (trident > 0) {
      var rv = ua.indexOf("rv:");
      return true;
    }
    var edge = ua.indexOf("Edge/");
    if (edge > 0) {
      return true;
    }
    return false;
  }
  static isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window["MSStream"];
  }
  static isAndroid() {
    return /(android)/i.test(navigator.userAgent);
  }
  static isTouchDevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  }
  static appendChild(element, target) {
    if (this.isElement(target))
      target.appendChild(element);
    else if (target && target.el && target.el.nativeElement)
      target.el.nativeElement.appendChild(element);
    else
      throw "Cannot append " + target + " to " + element;
  }
  static removeChild(element, target) {
    if (this.isElement(target))
      target.removeChild(element);
    else if (target.el && target.el.nativeElement)
      target.el.nativeElement.removeChild(element);
    else
      throw "Cannot remove " + element + " from " + target;
  }
  static removeElement(element) {
    if (!("remove" in Element.prototype))
      element.parentNode.removeChild(element);
    else
      element.remove();
  }
  static isElement(obj) {
    return typeof HTMLElement === "object" ? obj instanceof HTMLElement : obj && typeof obj === "object" && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === "string";
  }
  static calculateScrollbarWidth(el) {
    if (el) {
      let style5 = getComputedStyle(el);
      return el.offsetWidth - el.clientWidth - parseFloat(style5.borderLeftWidth) - parseFloat(style5.borderRightWidth);
    } else {
      if (this.calculatedScrollbarWidth !== null)
        return this.calculatedScrollbarWidth;
      let scrollDiv = document.createElement("div");
      scrollDiv.className = "p-scrollbar-measure";
      document.body.appendChild(scrollDiv);
      let scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      this.calculatedScrollbarWidth = scrollbarWidth;
      return scrollbarWidth;
    }
  }
  static calculateScrollbarHeight() {
    if (this.calculatedScrollbarHeight !== null)
      return this.calculatedScrollbarHeight;
    let scrollDiv = document.createElement("div");
    scrollDiv.className = "p-scrollbar-measure";
    document.body.appendChild(scrollDiv);
    let scrollbarHeight = scrollDiv.offsetHeight - scrollDiv.clientHeight;
    document.body.removeChild(scrollDiv);
    this.calculatedScrollbarWidth = scrollbarHeight;
    return scrollbarHeight;
  }
  static invokeElementMethod(element, methodName, args) {
    element[methodName].apply(element, args);
  }
  static clearSelection() {
    if (window.getSelection) {
      if (window.getSelection().empty) {
        window.getSelection().empty();
      } else if (window.getSelection().removeAllRanges && window.getSelection().rangeCount > 0 && window.getSelection().getRangeAt(0).getClientRects().length > 0) {
        window.getSelection().removeAllRanges();
      }
    } else if (document["selection"] && document["selection"].empty) {
      try {
        document["selection"].empty();
      } catch (error) {
      }
    }
  }
  static getBrowser() {
    if (!this.browser) {
      let matched = this.resolveUserAgent();
      this.browser = {};
      if (matched.browser) {
        this.browser[matched.browser] = true;
        this.browser["version"] = matched.version;
      }
      if (this.browser["chrome"]) {
        this.browser["webkit"] = true;
      } else if (this.browser["webkit"]) {
        this.browser["safari"] = true;
      }
    }
    return this.browser;
  }
  static resolveUserAgent() {
    let ua = navigator.userAgent.toLowerCase();
    let match = /(chrome)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
    return {
      browser: match[1] || "",
      version: match[2] || "0"
    };
  }
  static isInteger(value) {
    if (Number.isInteger) {
      return Number.isInteger(value);
    } else {
      return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
    }
  }
  static isHidden(element) {
    return !element || element.offsetParent === null;
  }
  static isVisible(element) {
    return element && element.offsetParent != null;
  }
  static isExist(element) {
    return element !== null && typeof element !== "undefined" && element.nodeName && element.parentNode;
  }
  static focus(element, options) {
    element && document.activeElement !== element && element.focus(options);
  }
  static getFocusableSelectorString(selector = "") {
    return `button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector}`;
  }
  static getFocusableElements(element, selector = "") {
    let focusableElements = this.find(element, this.getFocusableSelectorString(selector));
    let visibleFocusableElements = [];
    for (let focusableElement of focusableElements) {
      const computedStyle = getComputedStyle(focusableElement);
      if (this.isVisible(focusableElement) && computedStyle.display != "none" && computedStyle.visibility != "hidden")
        visibleFocusableElements.push(focusableElement);
    }
    return visibleFocusableElements;
  }
  static getFocusableElement(element, selector = "") {
    let focusableElement = this.findSingle(element, this.getFocusableSelectorString(selector));
    if (focusableElement) {
      const computedStyle = getComputedStyle(focusableElement);
      if (this.isVisible(focusableElement) && computedStyle.display != "none" && computedStyle.visibility != "hidden")
        return focusableElement;
    }
    return null;
  }
  static getFirstFocusableElement(element, selector = "") {
    const focusableElements = this.getFocusableElements(element, selector);
    return focusableElements.length > 0 ? focusableElements[0] : null;
  }
  static getLastFocusableElement(element, selector) {
    const focusableElements = this.getFocusableElements(element, selector);
    return focusableElements.length > 0 ? focusableElements[focusableElements.length - 1] : null;
  }
  static getNextFocusableElement(element, reverse = false) {
    const focusableElements = _DomHandler.getFocusableElements(element);
    let index = 0;
    if (focusableElements && focusableElements.length > 0) {
      const focusedIndex = focusableElements.indexOf(focusableElements[0].ownerDocument.activeElement);
      if (reverse) {
        if (focusedIndex == -1 || focusedIndex === 0) {
          index = focusableElements.length - 1;
        } else {
          index = focusedIndex - 1;
        }
      } else if (focusedIndex != -1 && focusedIndex !== focusableElements.length - 1) {
        index = focusedIndex + 1;
      }
    }
    return focusableElements[index];
  }
  static generateZIndex() {
    this.zindex = this.zindex || 999;
    return ++this.zindex;
  }
  static getSelection() {
    if (window.getSelection)
      return window.getSelection().toString();
    else if (document.getSelection)
      return document.getSelection().toString();
    else if (document["selection"])
      return document["selection"].createRange().text;
    return null;
  }
  static getTargetElement(target, el) {
    if (!target)
      return null;
    switch (target) {
      case "document":
        return document;
      case "window":
        return window;
      case "@next":
        return el?.nextElementSibling;
      case "@prev":
        return el?.previousElementSibling;
      case "@parent":
        return el?.parentElement;
      case "@grandparent":
        return el?.parentElement.parentElement;
      default:
        const type = typeof target;
        if (type === "string") {
          return document.querySelector(target);
        } else if (type === "object" && target.hasOwnProperty("nativeElement")) {
          return this.isExist(target.nativeElement) ? target.nativeElement : void 0;
        }
        const isFunction = (obj) => !!(obj && obj.constructor && obj.call && obj.apply);
        const element = isFunction(target) ? target() : target;
        return element && element.nodeType === 9 || this.isExist(element) ? element : null;
    }
  }
  static isClient() {
    return !!(typeof window !== "undefined" && window.document && window.document.createElement);
  }
  static getAttribute(element, name) {
    if (element) {
      const value = element.getAttribute(name);
      if (!isNaN(value)) {
        return +value;
      }
      if (value === "true" || value === "false") {
        return value === "true";
      }
      return value;
    }
    return void 0;
  }
  static calculateBodyScrollbarWidth() {
    return window.innerWidth - document.documentElement.offsetWidth;
  }
  static blockBodyScroll(className = "p-overflow-hidden") {
    document.body.style.setProperty("--scrollbar-width", this.calculateBodyScrollbarWidth() + "px");
    this.addClass(document.body, className);
  }
  static unblockBodyScroll(className = "p-overflow-hidden") {
    document.body.style.removeProperty("--scrollbar-width");
    this.removeClass(document.body, className);
  }
  static createElement(type, attributes = {}, ...children) {
    if (type) {
      const element = document.createElement(type);
      this.setAttributes(element, attributes);
      element.append(...children);
      return element;
    }
    return void 0;
  }
  static setAttribute(element, attribute = "", value) {
    if (this.isElement(element) && value !== null && value !== void 0) {
      element.setAttribute(attribute, value);
    }
  }
  static setAttributes(element, attributes = {}) {
    if (this.isElement(element)) {
      const computedStyles = (rule, value) => {
        const styles = element?.$attrs?.[rule] ? [element?.$attrs?.[rule]] : [];
        return [value].flat().reduce((cv, v) => {
          if (v !== null && v !== void 0) {
            const type = typeof v;
            if (type === "string" || type === "number") {
              cv.push(v);
            } else if (type === "object") {
              const _cv = Array.isArray(v) ? computedStyles(rule, v) : Object.entries(v).map(([_k, _v]) => rule === "style" && (!!_v || _v === 0) ? `${_k.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${_v}` : !!_v ? _k : void 0);
              cv = _cv.length ? cv.concat(_cv.filter((c) => !!c)) : cv;
            }
          }
          return cv;
        }, styles);
      };
      Object.entries(attributes).forEach(([key, value]) => {
        if (value !== void 0 && value !== null) {
          const matchedEvent = key.match(/^on(.+)/);
          if (matchedEvent) {
            element.addEventListener(matchedEvent[1].toLowerCase(), value);
          } else if (key === "pBind") {
            this.setAttributes(element, value);
          } else {
            value = key === "class" ? [...new Set(computedStyles("class", value))].join(" ").trim() : key === "style" ? computedStyles("style", value).join(";").trim() : value;
            (element.$attrs = element.$attrs || {}) && (element.$attrs[key] = value);
            element.setAttribute(key, value);
          }
        }
      });
    }
  }
  static isFocusableElement(element, selector = "") {
    return this.isElement(element) ? element.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector}`) : false;
  }
};
function blockBodyScroll() {
  st({ variableName: rr("scrollbar.width").name });
}
function unblockBodyScroll() {
  dt({ variableName: rr("scrollbar.width").name });
}
var ConnectedOverlayScrollHandler = class {
  element;
  listener;
  scrollableParents;
  constructor(element, listener = () => {
  }) {
    this.element = element;
    this.listener = listener;
  }
  bindScrollListener() {
    this.scrollableParents = DomHandler.getScrollableParents(this.element);
    for (let i = 0; i < this.scrollableParents.length; i++) {
      this.scrollableParents[i].addEventListener("scroll", this.listener);
    }
  }
  unbindScrollListener() {
    if (this.scrollableParents) {
      for (let i = 0; i < this.scrollableParents.length; i++) {
        this.scrollableParents[i].removeEventListener("scroll", this.listener);
      }
    }
  }
  destroy() {
    this.unbindScrollListener();
    this.element = null;
    this.listener = null;
    this.scrollableParents = null;
  }
};

// node_modules/primeng/fesm2022/primeng-autofocus.mjs
var AutoFocus = class _AutoFocus extends BaseComponent {
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus = false;
  focused = false;
  platformId = inject(PLATFORM_ID);
  document = inject(DOCUMENT);
  host = inject(ElementRef);
  ngAfterContentChecked() {
    if (this.autofocus === false) {
      this.host.nativeElement.removeAttribute("autofocus");
    } else {
      this.host.nativeElement.setAttribute("autofocus", true);
    }
    if (!this.focused) {
      this.autoFocus();
    }
  }
  ngAfterViewChecked() {
    if (!this.focused) {
      this.autoFocus();
    }
  }
  autoFocus() {
    if (isPlatformBrowser(this.platformId) && this.autofocus) {
      setTimeout(() => {
        const focusableElements = DomHandler.getFocusableElements(this.host?.nativeElement);
        if (focusableElements.length === 0) {
          this.host.nativeElement.focus();
        }
        if (focusableElements.length > 0) {
          focusableElements[0].focus();
        }
        this.focused = true;
      });
    }
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AutoFocus_BaseFactory;
    return function AutoFocus_Factory(__ngFactoryType__) {
      return (\u0275AutoFocus_BaseFactory || (\u0275AutoFocus_BaseFactory = \u0275\u0275getInheritedFactory(_AutoFocus)))(__ngFactoryType__ || _AutoFocus);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _AutoFocus,
    selectors: [["", "pAutoFocus", ""]],
    inputs: {
      autofocus: [0, "pAutoFocus", "autofocus"]
    },
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoFocus, [{
    type: Directive,
    args: [{
      selector: "[pAutoFocus]",
      standalone: true
    }]
  }], null, {
    autofocus: [{
      type: Input,
      args: ["pAutoFocus"]
    }]
  });
})();
var AutoFocusModule = class _AutoFocusModule {
  static \u0275fac = function AutoFocusModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AutoFocusModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _AutoFocusModule,
    imports: [AutoFocus],
    exports: [AutoFocus]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoFocusModule, [{
    type: NgModule,
    args: [{
      imports: [AutoFocus],
      exports: [AutoFocus]
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/badge/index.mjs
var style3 = "\n    .p-badge {\n        display: inline-flex;\n        border-radius: dt('badge.border.radius');\n        align-items: center;\n        justify-content: center;\n        padding: dt('badge.padding');\n        background: dt('badge.primary.background');\n        color: dt('badge.primary.color');\n        font-size: dt('badge.font.size');\n        font-weight: dt('badge.font.weight');\n        min-width: dt('badge.min.width');\n        height: dt('badge.height');\n    }\n\n    .p-badge-dot {\n        width: dt('badge.dot.size');\n        min-width: dt('badge.dot.size');\n        height: dt('badge.dot.size');\n        border-radius: 50%;\n        padding: 0;\n    }\n\n    .p-badge-circle {\n        padding: 0;\n        border-radius: 50%;\n    }\n\n    .p-badge-secondary {\n        background: dt('badge.secondary.background');\n        color: dt('badge.secondary.color');\n    }\n\n    .p-badge-success {\n        background: dt('badge.success.background');\n        color: dt('badge.success.color');\n    }\n\n    .p-badge-info {\n        background: dt('badge.info.background');\n        color: dt('badge.info.color');\n    }\n\n    .p-badge-warn {\n        background: dt('badge.warn.background');\n        color: dt('badge.warn.color');\n    }\n\n    .p-badge-danger {\n        background: dt('badge.danger.background');\n        color: dt('badge.danger.color');\n    }\n\n    .p-badge-contrast {\n        background: dt('badge.contrast.background');\n        color: dt('badge.contrast.color');\n    }\n\n    .p-badge-sm {\n        font-size: dt('badge.sm.font.size');\n        min-width: dt('badge.sm.min.width');\n        height: dt('badge.sm.height');\n    }\n\n    .p-badge-lg {\n        font-size: dt('badge.lg.font.size');\n        min-width: dt('badge.lg.min.width');\n        height: dt('badge.lg.height');\n    }\n\n    .p-badge-xl {\n        font-size: dt('badge.xl.font.size');\n        min-width: dt('badge.xl.min.width');\n        height: dt('badge.xl.height');\n    }\n";

// node_modules/primeng/fesm2022/primeng-badge.mjs
var theme2 = (
  /*css*/
  `
    ${style3}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`
);
var classes3 = {
  root: ({
    instance
  }) => ["p-badge p-component", {
    "p-badge-circle": s(instance.value()) && String(instance.value()).length === 1,
    "p-badge-dot": a(instance.value()),
    "p-badge-sm": instance.size() === "small" || instance.badgeSize() === "small",
    "p-badge-lg": instance.size() === "large" || instance.badgeSize() === "large",
    "p-badge-xl": instance.size() === "xlarge" || instance.badgeSize() === "xlarge",
    "p-badge-info": instance.severity() === "info",
    "p-badge-success": instance.severity() === "success",
    "p-badge-warn": instance.severity() === "warn",
    "p-badge-danger": instance.severity() === "danger",
    "p-badge-secondary": instance.severity() === "secondary",
    "p-badge-contrast": instance.severity() === "contrast"
  }]
};
var BadgeStyle = class _BadgeStyle extends BaseStyle {
  name = "badge";
  theme = theme2;
  classes = classes3;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BadgeStyle_BaseFactory;
    return function BadgeStyle_Factory(__ngFactoryType__) {
      return (\u0275BadgeStyle_BaseFactory || (\u0275BadgeStyle_BaseFactory = \u0275\u0275getInheritedFactory(_BadgeStyle)))(__ngFactoryType__ || _BadgeStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _BadgeStyle,
    factory: _BadgeStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BadgeStyle, [{
    type: Injectable
  }], null, null);
})();
var BadgeClasses;
(function(BadgeClasses2) {
  BadgeClasses2["root"] = "p-badge";
})(BadgeClasses || (BadgeClasses = {}));
var BadgeDirective = class _BadgeDirective extends BaseComponent {
  /**
   * When specified, disables the component.
   * @group Props
   */
  disabled;
  /**
   * Size of the badge, valid options are "large" and "xlarge".
   * @group Props
   */
  badgeSize;
  /**
   * Size of the badge, valid options are "large" and "xlarge".
   * @group Props
   * @deprecated use badgeSize instead.
   */
  set size(value) {
    this._size = value;
    console.log("size property is deprecated and will removed in v18, use badgeSize instead.");
  }
  get size() {
    return this._size;
  }
  _size;
  /**
   * Severity type of the badge.
   * @group Props
   */
  severity;
  /**
   * Value to display inside the badge.
   * @group Props
   */
  value;
  /**
   * Inline style of the element.
   * @group Props
   */
  badgeStyle;
  /**
   * Class of the element.
   * @group Props
   */
  badgeStyleClass;
  id;
  badgeEl;
  _componentStyle = inject(BadgeStyle);
  get activeElement() {
    return this.el.nativeElement.nodeName.indexOf("-") != -1 ? this.el.nativeElement.firstChild : this.el.nativeElement;
  }
  get canUpdateBadge() {
    return this.id && !this.disabled;
  }
  constructor() {
    super();
  }
  ngOnChanges({
    value,
    size,
    severity,
    disabled,
    badgeStyle,
    badgeStyleClass
  }) {
    super.ngOnChanges({
      value,
      size,
      severity,
      disabled
    });
    if (disabled) {
      this.toggleDisableState();
    }
    if (!this.canUpdateBadge) {
      return;
    }
    if (severity) {
      this.setSeverity(severity.previousValue);
    }
    if (size) {
      this.setSizeClasses();
    }
    if (value) {
      this.setValue();
    }
    if (badgeStyle || badgeStyleClass) {
      this.applyStyles();
    }
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
    this.id = s2("pn_id_") + "_badge";
    this.renderBadgeContent();
  }
  setValue(element) {
    const badge = element ?? this.document.getElementById(this.id);
    if (!badge) {
      return;
    }
    if (this.value != null) {
      if (R(badge, "p-badge-dot")) {
        O(badge, "p-badge-dot");
      }
      if (this.value && String(this.value).length === 1) {
        W(badge, "p-badge-circle");
      } else {
        O(badge, "p-badge-circle");
      }
    } else {
      if (!R(badge, "p-badge-dot")) {
        W(badge, "p-badge-dot");
      }
      O(badge, "p-badge-circle");
    }
    badge.innerHTML = "";
    const badgeValue = this.value != null ? String(this.value) : "";
    this.renderer.appendChild(badge, this.document.createTextNode(badgeValue));
  }
  setSizeClasses(element) {
    const badge = element ?? this.document.getElementById(this.id);
    if (!badge) {
      return;
    }
    if (this.badgeSize) {
      if (this.badgeSize === "large") {
        W(badge, "p-badge-lg");
        O(badge, "p-badge-xl");
      }
      if (this.badgeSize === "xlarge") {
        W(badge, "p-badge-xl");
        O(badge, "p-badge-lg");
      }
    } else if (this.size && !this.badgeSize) {
      if (this.size === "large") {
        W(badge, "p-badge-lg");
        O(badge, "p-badge-xl");
      }
      if (this.size === "xlarge") {
        W(badge, "p-badge-xl");
        O(badge, "p-badge-lg");
      }
    } else {
      O(badge, "p-badge-lg");
      O(badge, "p-badge-xl");
    }
  }
  renderBadgeContent() {
    if (this.disabled) {
      return null;
    }
    const el = this.activeElement;
    const badge = this.document.createElement("span");
    badge.id = this.id;
    badge.className = "p-badge p-component";
    this.setSeverity(null, badge);
    this.setSizeClasses(badge);
    this.setValue(badge);
    W(el, "p-overlay-badge");
    this.renderer.appendChild(el, badge);
    this.badgeEl = badge;
    this.applyStyles();
  }
  applyStyles() {
    if (this.badgeEl && this.badgeStyle && typeof this.badgeStyle === "object") {
      for (const [key, value] of Object.entries(this.badgeStyle)) {
        this.renderer.setStyle(this.badgeEl, key, value);
      }
    }
    if (this.badgeEl && this.badgeStyleClass) {
      this.badgeEl.classList.add(...this.badgeStyleClass.split(" "));
    }
  }
  setSeverity(oldSeverity, element) {
    const badge = element ?? this.document.getElementById(this.id);
    if (!badge) {
      return;
    }
    if (this.severity) {
      W(badge, `p-badge-${this.severity}`);
    }
    if (oldSeverity) {
      O(badge, `p-badge-${oldSeverity}`);
    }
  }
  toggleDisableState() {
    if (!this.id) {
      return;
    }
    if (this.disabled) {
      const badge = this.activeElement?.querySelector(`#${this.id}`);
      if (badge) {
        this.renderer.removeChild(this.activeElement, badge);
      }
    } else {
      this.renderBadgeContent();
    }
  }
  static \u0275fac = function BadgeDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BadgeDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BadgeDirective,
    selectors: [["", "pBadge", ""]],
    inputs: {
      disabled: [0, "badgeDisabled", "disabled"],
      badgeSize: "badgeSize",
      size: "size",
      severity: "severity",
      value: "value",
      badgeStyle: "badgeStyle",
      badgeStyleClass: "badgeStyleClass"
    },
    features: [\u0275\u0275ProvidersFeature([BadgeStyle]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BadgeDirective, [{
    type: Directive,
    args: [{
      selector: "[pBadge]",
      providers: [BadgeStyle],
      standalone: true
    }]
  }], () => [], {
    disabled: [{
      type: Input,
      args: ["badgeDisabled"]
    }],
    badgeSize: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    severity: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    badgeStyle: [{
      type: Input
    }],
    badgeStyleClass: [{
      type: Input
    }]
  });
})();
var Badge = class _Badge extends BaseComponent {
  /**
   * Class of the element.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass = input(...ngDevMode ? [void 0, {
    debugName: "styleClass"
  }] : []);
  /**
   * Size of the badge, valid options are "large" and "xlarge".
   * @group Props
   */
  badgeSize = input(...ngDevMode ? [void 0, {
    debugName: "badgeSize"
  }] : []);
  /**
   * Size of the badge, valid options are "large" and "xlarge".
   * @group Props
   */
  size = input(...ngDevMode ? [void 0, {
    debugName: "size"
  }] : []);
  /**
   * Severity type of the badge.
   * @group Props
   */
  severity = input(...ngDevMode ? [void 0, {
    debugName: "severity"
  }] : []);
  /**
   * Value to display inside the badge.
   * @group Props
   */
  value = input(...ngDevMode ? [void 0, {
    debugName: "value"
  }] : []);
  /**
   * When specified, disables the component.
   * @group Props
   */
  badgeDisabled = input(false, ...ngDevMode ? [{
    debugName: "badgeDisabled",
    transform: booleanAttribute
  }] : [{
    transform: booleanAttribute
  }]);
  _componentStyle = inject(BadgeStyle);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Badge_BaseFactory;
    return function Badge_Factory(__ngFactoryType__) {
      return (\u0275Badge_BaseFactory || (\u0275Badge_BaseFactory = \u0275\u0275getInheritedFactory(_Badge)))(__ngFactoryType__ || _Badge);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Badge,
    selectors: [["p-badge"]],
    hostVars: 4,
    hostBindings: function Badge_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass()));
        \u0275\u0275styleProp("display", ctx.badgeDisabled() ? "none" : null);
      }
    },
    inputs: {
      styleClass: [1, "styleClass"],
      badgeSize: [1, "badgeSize"],
      size: [1, "size"],
      severity: [1, "severity"],
      value: [1, "value"],
      badgeDisabled: [1, "badgeDisabled"]
    },
    features: [\u0275\u0275ProvidersFeature([BadgeStyle]), \u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 1,
    template: function Badge_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275text(0);
      }
      if (rf & 2) {
        \u0275\u0275textInterpolate(ctx.value());
      }
    },
    dependencies: [CommonModule, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Badge, [{
    type: Component,
    args: [{
      selector: "p-badge",
      template: `{{ value() }}`,
      standalone: true,
      imports: [CommonModule, SharedModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [BadgeStyle],
      host: {
        "[class]": "cn(cx('root'), styleClass())",
        "[style.display]": 'badgeDisabled() ? "none" : null'
      }
    }]
  }], null, null);
})();
var BadgeModule = class _BadgeModule {
  static \u0275fac = function BadgeModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BadgeModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _BadgeModule,
    imports: [Badge, BadgeDirective, SharedModule],
    exports: [Badge, BadgeDirective, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Badge, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BadgeModule, [{
    type: NgModule,
    args: [{
      imports: [Badge, BadgeDirective, SharedModule],
      exports: [Badge, BadgeDirective, SharedModule]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-baseicon.mjs
var _c02 = ["*"];
var css = (
  /*css*/
  `
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`
);
var BaseIconStyle = class _BaseIconStyle extends BaseStyle {
  name = "baseicon";
  css = css;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BaseIconStyle_BaseFactory;
    return function BaseIconStyle_Factory(__ngFactoryType__) {
      return (\u0275BaseIconStyle_BaseFactory || (\u0275BaseIconStyle_BaseFactory = \u0275\u0275getInheritedFactory(_BaseIconStyle)))(__ngFactoryType__ || _BaseIconStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _BaseIconStyle,
    factory: _BaseIconStyle.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseIconStyle, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var BaseIconClasses;
(function(BaseIconClasses2) {
  BaseIconClasses2["root"] = "p-icon";
})(BaseIconClasses || (BaseIconClasses = {}));
var BaseIcon = class _BaseIcon extends BaseComponent {
  spin = false;
  _componentStyle = inject(BaseIconStyle);
  getClassNames() {
    return f("p-icon", {
      "p-icon-spin": this.spin
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BaseIcon_BaseFactory;
    return function BaseIcon_Factory(__ngFactoryType__) {
      return (\u0275BaseIcon_BaseFactory || (\u0275BaseIcon_BaseFactory = \u0275\u0275getInheritedFactory(_BaseIcon)))(__ngFactoryType__ || _BaseIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _BaseIcon,
    selectors: [["ng-component"]],
    hostAttrs: ["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"],
    hostVars: 2,
    hostBindings: function BaseIcon_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.getClassNames());
      }
    },
    inputs: {
      spin: [2, "spin", "spin", booleanAttribute]
    },
    features: [\u0275\u0275ProvidersFeature([BaseIconStyle]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function BaseIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseIcon, [{
    type: Component,
    args: [{
      template: ` <ng-content></ng-content> `,
      standalone: true,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [BaseIconStyle],
      host: {
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "[class]": "getClassNames()"
      }
    }]
  }], null, {
    spin: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();

// node_modules/primeng/fesm2022/primeng-icons-check.mjs
var _c03 = ["data-p-icon", "check"];
var CheckIcon = class _CheckIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CheckIcon_BaseFactory;
    return function CheckIcon_Factory(__ngFactoryType__) {
      return (\u0275CheckIcon_BaseFactory || (\u0275CheckIcon_BaseFactory = \u0275\u0275getInheritedFactory(_CheckIcon)))(__ngFactoryType__ || _CheckIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CheckIcon,
    selectors: [["", "data-p-icon", "check"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c03,
    decls: 1,
    vars: 0,
    consts: [["d", "M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z", "fill", "currentColor"]],
    template: function CheckIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "path", 0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="check"]',
      standalone: true,
      template: `
        <svg:path
            d="M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z"
            fill="currentColor"
        />
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-spinner.mjs
var _c04 = ["data-p-icon", "spinner"];
var SpinnerIcon = class _SpinnerIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    super.ngOnInit();
    this.pathId = "url(#" + s2() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SpinnerIcon_BaseFactory;
    return function SpinnerIcon_Factory(__ngFactoryType__) {
      return (\u0275SpinnerIcon_BaseFactory || (\u0275SpinnerIcon_BaseFactory = \u0275\u0275getInheritedFactory(_SpinnerIcon)))(__ngFactoryType__ || _SpinnerIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _SpinnerIcon,
    selectors: [["", "data-p-icon", "spinner"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c04,
    decls: 5,
    vars: 2,
    consts: [["d", "M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function SpinnerIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElementStart(0, "g");
        \u0275\u0275domElement(1, "path", 0);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(2, "defs")(3, "clipPath", 1);
        \u0275\u0275domElement(4, "rect", 2);
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275attribute("clip-path", ctx.pathId);
        \u0275\u0275advance(3);
        \u0275\u0275domProperty("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpinnerIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="spinner"]',
      standalone: true,
      template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-times.mjs
var _c05 = ["data-p-icon", "times"];
var TimesIcon = class _TimesIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TimesIcon_BaseFactory;
    return function TimesIcon_Factory(__ngFactoryType__) {
      return (\u0275TimesIcon_BaseFactory || (\u0275TimesIcon_BaseFactory = \u0275\u0275getInheritedFactory(_TimesIcon)))(__ngFactoryType__ || _TimesIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _TimesIcon,
    selectors: [["", "data-p-icon", "times"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c05,
    decls: 1,
    vars: 0,
    consts: [["d", "M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z", "fill", "currentColor"]],
    template: function TimesIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "path", 0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimesIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="times"]',
      standalone: true,
      template: `
        <svg:path
            d="M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z"
            fill="currentColor"
        />
    `
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/button/index.mjs
var style4 = `
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\0A0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;

// node_modules/primeng/fesm2022/primeng-button.mjs
var _c06 = ["content"];
var _c1 = ["loadingicon"];
var _c2 = ["icon"];
var _c3 = ["*"];
var _c4 = (a0) => ({
  class: a0
});
function Button_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Button_ng_container_3_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r0.cx("loadingIcon"));
    \u0275\u0275attribute("aria-hidden", true)("data-pc-section", "loadingicon");
  }
}
function Button_ng_container_3_ng_container_1__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 7);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("loadingIcon"), ctx_r0.spinnerIconClass()));
    \u0275\u0275property("spin", true);
    \u0275\u0275attribute("aria-hidden", true)("data-pc-section", "loadingicon");
  }
}
function Button_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Button_ng_container_3_ng_container_1_span_1_Template, 1, 4, "span", 3)(2, Button_ng_container_3_ng_container_1__svg_svg_2_Template, 1, 5, "svg", 6);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.loadingIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingIcon);
  }
}
function Button_ng_container_3_2_ng_template_0_Template(rf, ctx) {
}
function Button_ng_container_3_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Button_ng_container_3_2_ng_template_0_Template, 0, 0, "ng-template", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r0.loadingIconTemplate || ctx_r0._loadingIconTemplate);
  }
}
function Button_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Button_ng_container_3_ng_container_1_Template, 3, 2, "ng-container", 2)(2, Button_ng_container_3_2_Template, 1, 1, null, 5);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingIconTemplate && !ctx_r0._loadingIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.loadingIconTemplate || ctx_r0._loadingIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(3, _c4, ctx_r0.cx("loadingIcon")));
  }
}
function Button_ng_container_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.cx("icon"));
    \u0275\u0275attribute("data-pc-section", "icon");
  }
}
function Button_ng_container_4_2_ng_template_0_Template(rf, ctx) {
}
function Button_ng_container_4_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Button_ng_container_4_2_ng_template_0_Template, 0, 0, "ng-template", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", !ctx_r0.icon && (ctx_r0.iconTemplate || ctx_r0._iconTemplate));
  }
}
function Button_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Button_ng_container_4_span_1_Template, 1, 3, "span", 3)(2, Button_ng_container_4_2_Template, 1, 1, null, 5);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.icon && !ctx_r0.iconTemplate && !ctx_r0._iconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.iconTemplate || ctx_r0._iconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(3, _c4, ctx_r0.cx("icon")));
  }
}
function Button_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("label"));
    \u0275\u0275attribute("aria-hidden", ctx_r0.icon && !ctx_r0.label)("data-pc-section", "label");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.label);
  }
}
function Button_p_badge_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-badge", 9);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r0.badge)("severity", ctx_r0.badgeSeverity);
  }
}
var classes4 = {
  root: ({
    instance
  }) => ["p-button p-component", {
    "p-button-icon-only": (instance.icon || instance.buttonProps?.icon || instance.iconTemplate || instance._iconTemplate || instance.loadingIcon || instance.loadingIconTemplate || instance._loadingIconTemplate) && !instance.label && !instance.buttonProps?.label,
    "p-button-vertical": (instance.iconPos === "top" || instance.iconPos === "bottom") && instance.label,
    "p-button-loading": instance.loading || instance.buttonProps?.loading,
    "p-button-link": instance.link || instance.buttonProps?.link,
    [`p-button-${instance.severity || instance.buttonProps?.severity}`]: instance.severity || instance.buttonProps?.severity,
    "p-button-raised": instance.raised || instance.buttonProps?.raised,
    "p-button-rounded": instance.rounded || instance.buttonProps?.rounded,
    "p-button-text": instance.text || instance.variant === "text" || instance.buttonProps?.text || instance.buttonProps?.variant === "text",
    "p-button-outlined": instance.outlined || instance.variant === "outlined" || instance.buttonProps?.outlined || instance.buttonProps?.variant === "outlined",
    "p-button-sm": instance.size === "small" || instance.buttonProps?.size === "small",
    "p-button-lg": instance.size === "large" || instance.buttonProps?.size === "large",
    "p-button-plain": instance.plain || instance.buttonProps?.plain,
    "p-button-fluid": instance.hasFluid
  }],
  loadingIcon: "p-button-loading-icon",
  icon: ({
    instance
  }) => ["p-button-icon", {
    [`p-button-icon-${instance.iconPos || instance.buttonProps?.iconPos}`]: instance.label || instance.buttonProps?.label,
    "p-button-icon-left": (instance.iconPos === "left" || instance.buttonProps?.iconPos === "left") && instance.label || instance.buttonProps?.label,
    "p-button-icon-right": (instance.iconPos === "right" || instance.buttonProps?.iconPos === "right") && instance.label || instance.buttonProps?.label
  }, instance.icon, instance.buttonProps?.icon],
  spinnerIcon: ({
    instance
  }) => {
    return Object.entries(instance.iconClass()).filter(([, value]) => !!value).reduce((acc, [key]) => acc + ` ${key}`, "p-button-loading-icon");
  },
  label: "p-button-label"
};
var ButtonStyle = class _ButtonStyle extends BaseStyle {
  name = "button";
  theme = style4;
  classes = classes4;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ButtonStyle_BaseFactory;
    return function ButtonStyle_Factory(__ngFactoryType__) {
      return (\u0275ButtonStyle_BaseFactory || (\u0275ButtonStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ButtonStyle)))(__ngFactoryType__ || _ButtonStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ButtonStyle,
    factory: _ButtonStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonStyle, [{
    type: Injectable
  }], null, null);
})();
var ButtonClasses;
(function(ButtonClasses2) {
  ButtonClasses2["root"] = "p-button";
  ButtonClasses2["loadingIcon"] = "p-button-loading-icon";
  ButtonClasses2["icon"] = "p-button-icon";
  ButtonClasses2["label"] = "p-button-label";
})(ButtonClasses || (ButtonClasses = {}));
var INTERNAL_BUTTON_CLASSES = {
  button: "p-button",
  component: "p-component",
  iconOnly: "p-button-icon-only",
  disabled: "p-disabled",
  loading: "p-button-loading",
  labelOnly: "p-button-loading-label-only"
};
var ButtonLabel = class _ButtonLabel extends BaseComponent {
  _componentStyle = inject(ButtonStyle);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ButtonLabel_BaseFactory;
    return function ButtonLabel_Factory(__ngFactoryType__) {
      return (\u0275ButtonLabel_BaseFactory || (\u0275ButtonLabel_BaseFactory = \u0275\u0275getInheritedFactory(_ButtonLabel)))(__ngFactoryType__ || _ButtonLabel);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _ButtonLabel,
    selectors: [["", "pButtonLabel", ""]],
    hostVars: 2,
    hostBindings: function ButtonLabel_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("p-button-label", true);
      }
    },
    features: [\u0275\u0275ProvidersFeature([ButtonStyle]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonLabel, [{
    type: Directive,
    args: [{
      selector: "[pButtonLabel]",
      providers: [ButtonStyle],
      standalone: true,
      host: {
        "[class.p-button-label]": "true"
      }
    }]
  }], null, null);
})();
var ButtonIcon = class _ButtonIcon extends BaseComponent {
  _componentStyle = inject(ButtonStyle);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ButtonIcon_BaseFactory;
    return function ButtonIcon_Factory(__ngFactoryType__) {
      return (\u0275ButtonIcon_BaseFactory || (\u0275ButtonIcon_BaseFactory = \u0275\u0275getInheritedFactory(_ButtonIcon)))(__ngFactoryType__ || _ButtonIcon);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _ButtonIcon,
    selectors: [["", "pButtonIcon", ""]],
    hostVars: 2,
    hostBindings: function ButtonIcon_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("p-button-icon", true);
      }
    },
    features: [\u0275\u0275ProvidersFeature([ButtonStyle]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonIcon, [{
    type: Directive,
    args: [{
      selector: "[pButtonIcon]",
      providers: [ButtonStyle],
      standalone: true,
      host: {
        "[class.p-button-icon]": "true"
      }
    }]
  }], null, null);
})();
var ButtonDirective = class _ButtonDirective extends BaseComponent {
  /**
   * Position of the icon.
   * @deprecated utilize pButtonIcon and pButtonLabel directives.
   * @group Props
   */
  iconPos = "left";
  /**
   * Uses to pass attributes to the loading icon's DOM element.
   * @deprecated utilize pButonIcon instead.
   * @group Props
   */
  loadingIcon;
  set label(val) {
    this._label = val;
    if (this.initialized) {
      this.updateLabel();
      this.updateIcon();
      this.setStyleClass();
    }
  }
  set icon(val) {
    this._icon = val;
    if (this.initialized) {
      this.updateIcon();
      this.setStyleClass();
    }
  }
  /**
   * Whether the button is in loading state.
   * @group Props
   */
  get loading() {
    return this._loading;
  }
  set loading(val) {
    this._loading = val;
    if (this.initialized) {
      this.updateIcon();
      this.setStyleClass();
    }
  }
  _buttonProps;
  iconSignal = contentChild(ButtonIcon, ...ngDevMode ? [{
    debugName: "iconSignal"
  }] : []);
  labelSignal = contentChild(ButtonLabel, ...ngDevMode ? [{
    debugName: "labelSignal"
  }] : []);
  isIconOnly = computed(() => !!(!this.labelSignal() && this.iconSignal()), ...ngDevMode ? [{
    debugName: "isIconOnly"
  }] : []);
  set buttonProps(val) {
    this._buttonProps = val;
    if (val && typeof val === "object") {
      Object.entries(val).forEach(([k, v]) => this[`_${k}`] !== v && (this[`_${k}`] = v));
    }
  }
  _severity;
  /**
   * Defines the style of the button.
   * @group Props
   */
  get severity() {
    return this._severity;
  }
  set severity(value) {
    this._severity = value;
    if (this.initialized) {
      this.setStyleClass();
    }
  }
  /**
   * Add a shadow to indicate elevation.
   * @group Props
   */
  raised = false;
  /**
   * Add a circular border radius to the button.
   * @group Props
   */
  rounded = false;
  /**
   * Add a textual class to the button without a background initially.
   * @group Props
   */
  text = false;
  /**
   * Add a border class without a background initially.
   * @group Props
   */
  outlined = false;
  /**
   * Defines the size of the button.
   * @group Props
   */
  size = null;
  /**
   * Add a plain textual class to the button without a background initially.
   * @group Props
   */
  plain = false;
  /**
   * Spans 100% width of the container when enabled.
   * @defaultValue undefined
   * @group Props
   */
  fluid = input(void 0, ...ngDevMode ? [{
    debugName: "fluid",
    transform: booleanAttribute
  }] : [{
    transform: booleanAttribute
  }]);
  _label;
  _icon;
  _loading = false;
  initialized;
  get htmlElement() {
    return this.el.nativeElement;
  }
  _internalClasses = Object.values(INTERNAL_BUTTON_CLASSES);
  pcFluid = inject(Fluid, {
    optional: true,
    host: true,
    skipSelf: true
  });
  isTextButton = computed(() => !!(!this.iconSignal() && this.labelSignal() && this.text), ...ngDevMode ? [{
    debugName: "isTextButton"
  }] : []);
  /**
   * Text of the button.
   * @deprecated use pButtonLabel directive instead.
   * @group Props
   */
  get label() {
    return this._label;
  }
  /**
   * Name of the icon.
   * @deprecated use pButtonIcon directive instead
   * @group Props
   */
  get icon() {
    return this._icon;
  }
  /**
   * Used to pass all properties of the ButtonProps to the Button component.
   * @deprecated assign props directly to the button element.
   * @group Props
   */
  get buttonProps() {
    return this._buttonProps;
  }
  spinnerIcon = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;
  _componentStyle = inject(ButtonStyle);
  ngAfterViewInit() {
    super.ngAfterViewInit();
    W(this.htmlElement, this.getStyleClass().join(" "));
    this.createIcon();
    this.createLabel();
    this.initialized = true;
  }
  getStyleClass() {
    const styleClass = [INTERNAL_BUTTON_CLASSES.button, INTERNAL_BUTTON_CLASSES.component];
    if (this.icon && !this.label && a(this.htmlElement.textContent)) {
      styleClass.push(INTERNAL_BUTTON_CLASSES.iconOnly);
    }
    if (this.loading) {
      styleClass.push(INTERNAL_BUTTON_CLASSES.disabled, INTERNAL_BUTTON_CLASSES.loading);
      if (!this.icon && this.label) {
        styleClass.push(INTERNAL_BUTTON_CLASSES.labelOnly);
      }
      if (this.icon && !this.label && !a(this.htmlElement.textContent)) {
        styleClass.push(INTERNAL_BUTTON_CLASSES.iconOnly);
      }
    }
    if (this.text) {
      styleClass.push("p-button-text");
    }
    if (this.severity) {
      styleClass.push(`p-button-${this.severity}`);
    }
    if (this.plain) {
      styleClass.push("p-button-plain");
    }
    if (this.raised) {
      styleClass.push("p-button-raised");
    }
    if (this.size) {
      styleClass.push(`p-button-${this.size}`);
    }
    if (this.outlined) {
      styleClass.push("p-button-outlined");
    }
    if (this.rounded) {
      styleClass.push("p-button-rounded");
    }
    if (this.size === "small") {
      styleClass.push("p-button-sm");
    }
    if (this.size === "large") {
      styleClass.push("p-button-lg");
    }
    if (this.hasFluid) {
      styleClass.push("p-button-fluid");
    }
    return styleClass;
  }
  get hasFluid() {
    return this.fluid() ?? !!this.pcFluid;
  }
  setStyleClass() {
    const styleClass = this.getStyleClass();
    this.removeExistingSeverityClass();
    this.htmlElement.classList.remove(...this._internalClasses);
    this.htmlElement.classList.add(...styleClass);
  }
  removeExistingSeverityClass() {
    const severityArray = ["success", "info", "warn", "danger", "help", "primary", "secondary", "contrast"];
    const existingSeverityClass = this.htmlElement.classList.value.split(" ").find((cls) => severityArray.some((severity) => cls === `p-button-${severity}`));
    if (existingSeverityClass) {
      this.htmlElement.classList.remove(existingSeverityClass);
    }
  }
  createLabel() {
    const created = z(this.htmlElement, ".p-button-label");
    if (!created && this.label) {
      let labelElement = this.document.createElement("span");
      if (this.icon && !this.label) {
        labelElement.setAttribute("aria-hidden", "true");
      }
      labelElement.className = "p-button-label";
      labelElement.appendChild(this.document.createTextNode(this.label));
      this.htmlElement.appendChild(labelElement);
    }
  }
  createIcon() {
    const created = z(this.htmlElement, ".p-button-icon");
    if (!created && (this.icon || this.loading)) {
      let iconElement = this.document.createElement("span");
      iconElement.className = "p-button-icon";
      iconElement.setAttribute("aria-hidden", "true");
      let iconPosClass = this.label ? "p-button-icon-" + this.iconPos : null;
      if (iconPosClass) {
        W(iconElement, iconPosClass);
      }
      let iconClass = this.getIconClass();
      if (iconClass) {
        W(iconElement, iconClass);
      }
      if (!this.loadingIcon && this.loading) {
        iconElement.innerHTML = this.spinnerIcon;
      }
      this.htmlElement.insertBefore(iconElement, this.htmlElement.firstChild);
    }
  }
  updateLabel() {
    let labelElement = z(this.htmlElement, ".p-button-label");
    if (!this.label) {
      labelElement && this.htmlElement.removeChild(labelElement);
      return;
    }
    labelElement ? labelElement.textContent = this.label : this.createLabel();
  }
  updateIcon() {
    let iconElement = z(this.htmlElement, ".p-button-icon");
    let labelElement = z(this.htmlElement, ".p-button-label");
    if (this.loading && !this.loadingIcon && iconElement) {
      iconElement.innerHTML = this.spinnerIcon;
    } else if (iconElement?.innerHTML) {
      iconElement.innerHTML = "";
    }
    if (iconElement) {
      if (this.iconPos) {
        iconElement.className = "p-button-icon " + (labelElement ? "p-button-icon-" + this.iconPos : "") + " " + this.getIconClass();
      } else {
        iconElement.className = "p-button-icon " + this.getIconClass();
      }
    } else {
      this.createIcon();
    }
  }
  getIconClass() {
    return this.loading ? "p-button-loading-icon " + (this.loadingIcon ? this.loadingIcon : "p-icon") : this.icon || "p-hidden";
  }
  ngOnDestroy() {
    this.initialized = false;
    super.ngOnDestroy();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ButtonDirective_BaseFactory;
    return function ButtonDirective_Factory(__ngFactoryType__) {
      return (\u0275ButtonDirective_BaseFactory || (\u0275ButtonDirective_BaseFactory = \u0275\u0275getInheritedFactory(_ButtonDirective)))(__ngFactoryType__ || _ButtonDirective);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _ButtonDirective,
    selectors: [["", "pButton", ""]],
    contentQueries: function ButtonDirective_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuerySignal(dirIndex, ctx.iconSignal, ButtonIcon, 5);
        \u0275\u0275contentQuerySignal(dirIndex, ctx.labelSignal, ButtonLabel, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(2);
      }
    },
    hostVars: 4,
    hostBindings: function ButtonDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("p-button-icon-only", ctx.isIconOnly())("p-button-text", ctx.isTextButton());
      }
    },
    inputs: {
      iconPos: "iconPos",
      loadingIcon: "loadingIcon",
      loading: "loading",
      severity: "severity",
      raised: [2, "raised", "raised", booleanAttribute],
      rounded: [2, "rounded", "rounded", booleanAttribute],
      text: [2, "text", "text", booleanAttribute],
      outlined: [2, "outlined", "outlined", booleanAttribute],
      size: "size",
      plain: [2, "plain", "plain", booleanAttribute],
      fluid: [1, "fluid"],
      label: "label",
      icon: "icon",
      buttonProps: "buttonProps"
    },
    features: [\u0275\u0275ProvidersFeature([ButtonStyle]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonDirective, [{
    type: Directive,
    args: [{
      selector: "[pButton]",
      standalone: true,
      providers: [ButtonStyle],
      host: {
        "[class.p-button-icon-only]": "isIconOnly()",
        "[class.p-button-text]": "isTextButton()"
      }
    }]
  }], null, {
    iconPos: [{
      type: Input
    }],
    loadingIcon: [{
      type: Input
    }],
    loading: [{
      type: Input
    }],
    severity: [{
      type: Input
    }],
    raised: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    rounded: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    text: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    outlined: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    size: [{
      type: Input
    }],
    plain: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    label: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    buttonProps: [{
      type: Input
    }]
  });
})();
var Button = class _Button extends BaseComponent {
  /**
   * Type of the button.
   * @group Props
   */
  type = "button";
  /**
   * Position of the icon.
   * @group Props
   */
  iconPos = "left";
  /**
   * Name of the icon.
   * @group Props
   */
  icon;
  /**
   * Value of the badge.
   * @group Props
   */
  badge;
  /**
   * Uses to pass attributes to the label's DOM element.
   * @group Props
   */
  label;
  /**
   * When present, it specifies that the component should be disabled.
   * @group Props
   */
  disabled;
  /**
   * Whether the button is in loading state.
   * @group Props
   */
  loading = false;
  /**
   * Icon to display in loading state.
   * @group Props
   */
  loadingIcon;
  /**
   * Add a shadow to indicate elevation.
   * @group Props
   */
  raised = false;
  /**
   * Add a circular border radius to the button.
   * @group Props
   */
  rounded = false;
  /**
   * Add a textual class to the button without a background initially.
   * @group Props
   */
  text = false;
  /**
   * Add a plain textual class to the button without a background initially.
   * @group Props
   */
  plain = false;
  /**
   * Defines the style of the button.
   * @group Props
   */
  severity;
  /**
   * Add a border class without a background initially.
   * @group Props
   */
  outlined = false;
  /**
   * Add a link style to the button.
   * @group Props
   */
  link = false;
  /**
   * Add a tabindex to the button.
   * @group Props
   */
  tabindex;
  /**
   * Defines the size of the button.
   * @group Props
   */
  size;
  /**
   * Specifies the variant of the component.
   * @group Props
   */
  variant;
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Style class of the badge.
   * @group Props
   * @deprecated use badgeSeverity instead.
   */
  badgeClass;
  /**
   * Severity type of the badge.
   * @group Props
   * @defaultValue secondary
   */
  badgeSeverity = "secondary";
  /**
   * Used to define a string that autocomplete attribute the current element.
   * @group Props
   */
  ariaLabel;
  /**
   * Button props as an object.
   * @group Props
   */
  buttonProps;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Spans 100% width of the container when enabled.
   * @defaultValue undefined
   * @group Props
   */
  fluid = input(void 0, ...ngDevMode ? [{
    debugName: "fluid",
    transform: booleanAttribute
  }] : [{
    transform: booleanAttribute
  }]);
  /**
   * Callback to execute when button is clicked.
   * This event is intended to be used with the <p-button> component. Using a regular <button> element, use (click).
   * @param {MouseEvent} event - Mouse event.
   * @group Emits
   */
  onClick = new EventEmitter();
  /**
   * Callback to execute when button is focused.
   * This event is intended to be used with the <p-button> component. Using a regular <button> element, use (focus).
   * @param {FocusEvent} event - Focus event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to execute when button loses focus.
   * This event is intended to be used with the <p-button> component. Using a regular <button> element, use (blur).
   * @param {FocusEvent} event - Focus event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  /**
   * Template of the content.
   * @group Templates
   **/
  contentTemplate;
  /**
   * Template of the loading.
   * @group Templates
   **/
  loadingIconTemplate;
  /**
   * Template of the icon.
   * @group Templates
   **/
  iconTemplate;
  templates;
  pcFluid = inject(Fluid, {
    optional: true,
    host: true,
    skipSelf: true
  });
  get hasFluid() {
    return this.fluid() ?? !!this.pcFluid;
  }
  _componentStyle = inject(ButtonStyle);
  _contentTemplate;
  _iconTemplate;
  _loadingIconTemplate;
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this._contentTemplate = item.template;
          break;
        case "icon":
          this._iconTemplate = item.template;
          break;
        case "loadingicon":
          this._loadingIconTemplate = item.template;
          break;
        default:
          this._contentTemplate = item.template;
          break;
      }
    });
  }
  spinnerIconClass() {
    return Object.entries(this.iconClass()).filter(([, value]) => !!value).reduce((acc, [key]) => acc + ` ${key}`, "p-button-loading-icon");
  }
  iconClass() {
    return {
      [`p-button-loading-icon pi-spin ${this.loadingIcon ?? ""}`]: this.loading,
      "p-button-icon": true,
      "p-button-icon-left": this.iconPos === "left" && this.label,
      "p-button-icon-right": this.iconPos === "right" && this.label,
      "p-button-icon-top": this.iconPos === "top" && this.label,
      "p-button-icon-bottom": this.iconPos === "bottom" && this.label
    };
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Button_BaseFactory;
    return function Button_Factory(__ngFactoryType__) {
      return (\u0275Button_BaseFactory || (\u0275Button_BaseFactory = \u0275\u0275getInheritedFactory(_Button)))(__ngFactoryType__ || _Button);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Button,
    selectors: [["p-button"]],
    contentQueries: function Button_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c06, 5);
        \u0275\u0275contentQuery(dirIndex, _c1, 5);
        \u0275\u0275contentQuery(dirIndex, _c2, 5);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loadingIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.iconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    inputs: {
      type: "type",
      iconPos: "iconPos",
      icon: "icon",
      badge: "badge",
      label: "label",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      loading: [2, "loading", "loading", booleanAttribute],
      loadingIcon: "loadingIcon",
      raised: [2, "raised", "raised", booleanAttribute],
      rounded: [2, "rounded", "rounded", booleanAttribute],
      text: [2, "text", "text", booleanAttribute],
      plain: [2, "plain", "plain", booleanAttribute],
      severity: "severity",
      outlined: [2, "outlined", "outlined", booleanAttribute],
      link: [2, "link", "link", booleanAttribute],
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      size: "size",
      variant: "variant",
      style: "style",
      styleClass: "styleClass",
      badgeClass: "badgeClass",
      badgeSeverity: "badgeSeverity",
      ariaLabel: "ariaLabel",
      buttonProps: "buttonProps",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      fluid: [1, "fluid"]
    },
    outputs: {
      onClick: "onClick",
      onFocus: "onFocus",
      onBlur: "onBlur"
    },
    features: [\u0275\u0275ProvidersFeature([ButtonStyle]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c3,
    decls: 7,
    vars: 15,
    consts: [["pRipple", "", 3, "click", "focus", "blur", "ngStyle", "disabled", "pAutoFocus"], [4, "ngTemplateOutlet"], [4, "ngIf"], [3, "class", 4, "ngIf"], [3, "value", "severity", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["data-p-icon", "spinner", 3, "class", "spin", 4, "ngIf"], ["data-p-icon", "spinner", 3, "spin"], [3, "ngIf"], [3, "value", "severity"]],
    template: function Button_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "button", 0);
        \u0275\u0275listener("click", function Button_Template_button_click_0_listener($event) {
          return ctx.onClick.emit($event);
        })("focus", function Button_Template_button_focus_0_listener($event) {
          return ctx.onFocus.emit($event);
        })("blur", function Button_Template_button_blur_0_listener($event) {
          return ctx.onBlur.emit($event);
        });
        \u0275\u0275projection(1);
        \u0275\u0275template(2, Button_ng_container_2_Template, 1, 0, "ng-container", 1)(3, Button_ng_container_3_Template, 3, 5, "ng-container", 2)(4, Button_ng_container_4_Template, 3, 5, "ng-container", 2)(5, Button_span_5_Template, 2, 5, "span", 3)(6, Button_p_badge_6_Template, 1, 2, "p-badge", 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass, ctx.buttonProps == null ? null : ctx.buttonProps.styleClass));
        \u0275\u0275property("ngStyle", ctx.style || (ctx.buttonProps == null ? null : ctx.buttonProps.style))("disabled", ctx.disabled || ctx.loading || (ctx.buttonProps == null ? null : ctx.buttonProps.disabled))("pAutoFocus", ctx.autofocus || (ctx.buttonProps == null ? null : ctx.buttonProps.autofocus));
        \u0275\u0275attribute("type", ctx.type || (ctx.buttonProps == null ? null : ctx.buttonProps.type))("aria-label", ctx.ariaLabel || (ctx.buttonProps == null ? null : ctx.buttonProps.ariaLabel))("data-pc-name", "button")("data-pc-section", "root")("tabindex", ctx.tabindex || (ctx.buttonProps == null ? null : ctx.buttonProps.tabindex));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngTemplateOutlet", ctx.contentTemplate || ctx._contentTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.contentTemplate && !ctx._contentTemplate && ctx.label);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.contentTemplate && !ctx._contentTemplate && ctx.badge);
      }
    },
    dependencies: [CommonModule, NgIf, NgTemplateOutlet, NgStyle, Ripple, AutoFocus, SpinnerIcon, BadgeModule, Badge, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Button, [{
    type: Component,
    args: [{
      selector: "p-button",
      standalone: true,
      imports: [CommonModule, Ripple, AutoFocus, SpinnerIcon, BadgeModule, SharedModule],
      template: `
        <button
            [attr.type]="type || buttonProps?.type"
            [attr.aria-label]="ariaLabel || buttonProps?.ariaLabel"
            [ngStyle]="style || buttonProps?.style"
            [disabled]="disabled || loading || buttonProps?.disabled"
            [class]="cn(cx('root'), styleClass, buttonProps?.styleClass)"
            (click)="onClick.emit($event)"
            (focus)="onFocus.emit($event)"
            (blur)="onBlur.emit($event)"
            pRipple
            [attr.data-pc-name]="'button'"
            [attr.data-pc-section]="'root'"
            [attr.tabindex]="tabindex || buttonProps?.tabindex"
            [pAutoFocus]="autofocus || buttonProps?.autofocus"
        >
            <ng-content></ng-content>
            <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate"></ng-container>
            <ng-container *ngIf="loading">
                <ng-container *ngIf="!loadingIconTemplate && !_loadingIconTemplate">
                    <span *ngIf="loadingIcon" [class]="cx('loadingIcon')" [attr.aria-hidden]="true" [attr.data-pc-section]="'loadingicon'"></span>
                    <svg data-p-icon="spinner" *ngIf="!loadingIcon" [class]="cn(cx('loadingIcon'), spinnerIconClass())" [spin]="true" [attr.aria-hidden]="true" [attr.data-pc-section]="'loadingicon'" />
                </ng-container>
                <ng-template [ngIf]="loadingIconTemplate || _loadingIconTemplate" *ngTemplateOutlet="loadingIconTemplate || _loadingIconTemplate; context: { class: cx('loadingIcon') }"></ng-template>
            </ng-container>
            <ng-container *ngIf="!loading">
                <span *ngIf="icon && !iconTemplate && !_iconTemplate" [class]="cx('icon')" [attr.data-pc-section]="'icon'"></span>
                <ng-template [ngIf]="!icon && (iconTemplate || _iconTemplate)" *ngTemplateOutlet="iconTemplate || _iconTemplate; context: { class: cx('icon') }"></ng-template>
            </ng-container>
            <span [class]="cx('label')" [attr.aria-hidden]="icon && !label" *ngIf="!contentTemplate && !_contentTemplate && label" [attr.data-pc-section]="'label'">{{ label }}</span>
            <p-badge *ngIf="!contentTemplate && !_contentTemplate && badge" [value]="badge" [severity]="badgeSeverity"></p-badge>
        </button>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [ButtonStyle]
    }]
  }], null, {
    type: [{
      type: Input
    }],
    iconPos: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    badge: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    loading: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    loadingIcon: [{
      type: Input
    }],
    raised: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    rounded: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    text: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    plain: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    severity: [{
      type: Input
    }],
    outlined: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    link: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    size: [{
      type: Input
    }],
    variant: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    badgeClass: [{
      type: Input
    }],
    badgeSeverity: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    buttonProps: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onClick: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content"]
    }],
    loadingIconTemplate: [{
      type: ContentChild,
      args: ["loadingicon"]
    }],
    iconTemplate: [{
      type: ContentChild,
      args: ["icon"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ButtonModule = class _ButtonModule {
  static \u0275fac = function ButtonModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ButtonModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ButtonModule,
    imports: [CommonModule, ButtonDirective, Button, SharedModule, ButtonLabel, ButtonIcon],
    exports: [ButtonDirective, Button, ButtonLabel, ButtonIcon, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule, Button, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ButtonDirective, Button, SharedModule, ButtonLabel, ButtonIcon],
      exports: [ButtonDirective, Button, ButtonLabel, ButtonIcon, SharedModule]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-baseeditableholder.mjs
var BaseEditableHolder = class _BaseEditableHolder extends BaseModelHolder {
  /**
   * There must be a value (if set).
   * @defaultValue false
   * @group Props
   */
  required = input(void 0, ...ngDevMode ? [{
    debugName: "required",
    transform: booleanAttribute
  }] : [{
    transform: booleanAttribute
  }]);
  /**
   * When present, it specifies that the component should have invalid state style.
   * @defaultValue false
   * @group Props
   */
  invalid = input(void 0, ...ngDevMode ? [{
    debugName: "invalid",
    transform: booleanAttribute
  }] : [{
    transform: booleanAttribute
  }]);
  /**
   * When present, it specifies that the component should have disabled state style.
   * @defaultValue false
   * @group Props
   */
  disabled = input(void 0, ...ngDevMode ? [{
    debugName: "disabled",
    transform: booleanAttribute
  }] : [{
    transform: booleanAttribute
  }]);
  /**
   * When present, it specifies that the name of the input.
   * @defaultValue undefined
   * @group Props
   */
  name = input(...ngDevMode ? [void 0, {
    debugName: "name"
  }] : []);
  _disabled = signal(false, ...ngDevMode ? [{
    debugName: "_disabled"
  }] : []);
  $disabled = computed(() => this.disabled() || this._disabled(), ...ngDevMode ? [{
    debugName: "$disabled"
  }] : []);
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  writeDisabledState(value) {
    this._disabled.set(value);
  }
  writeControlValue(value, setModelValue) {
  }
  /**** Angular ControlValueAccessors ****/
  writeValue(value) {
    this.writeControlValue(value, this.writeModelValue.bind(this));
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    this.writeDisabledState(val);
    this.cd.markForCheck();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BaseEditableHolder_BaseFactory;
    return function BaseEditableHolder_Factory(__ngFactoryType__) {
      return (\u0275BaseEditableHolder_BaseFactory || (\u0275BaseEditableHolder_BaseFactory = \u0275\u0275getInheritedFactory(_BaseEditableHolder)))(__ngFactoryType__ || _BaseEditableHolder);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BaseEditableHolder,
    inputs: {
      required: [1, "required"],
      invalid: [1, "invalid"],
      disabled: [1, "disabled"],
      name: [1, "name"]
    },
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseEditableHolder, [{
    type: Directive,
    args: [{
      standalone: true
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-baseinput.mjs
var BaseInput = class _BaseInput extends BaseEditableHolder {
  pcFluid = inject(Fluid, {
    optional: true,
    host: true,
    skipSelf: true
  });
  /**
   * Spans 100% width of the container when enabled.
   * @defaultValue false
   * @group Props
   */
  fluid = input(void 0, ...ngDevMode ? [{
    debugName: "fluid",
    transform: booleanAttribute
  }] : [{
    transform: booleanAttribute
  }]);
  /**
   * Specifies the input variant of the component.
   * @defaultValue 'outlined'
   * @group Props
   */
  variant = input(...ngDevMode ? [void 0, {
    debugName: "variant"
  }] : []);
  /**
   * Specifies the size of the component.
   * @defaultValue undefined
   * @group Props
   */
  size = input(...ngDevMode ? [void 0, {
    debugName: "size"
  }] : []);
  /**
   * Specifies the visible width of the input element in characters.
   * @defaultValue undefined
   * @group Props
   */
  inputSize = input(...ngDevMode ? [void 0, {
    debugName: "inputSize"
  }] : []);
  /**
   * Specifies the value must match the pattern.
   * @defaultValue undefined
   * @group Props
   */
  pattern = input(...ngDevMode ? [void 0, {
    debugName: "pattern"
  }] : []);
  /**
   * The value must be greater than or equal to the value.
   * @defaultValue undefined
   * @group Props
   */
  min = input(...ngDevMode ? [void 0, {
    debugName: "min"
  }] : []);
  /**
   * The value must be less than or equal to the value.
   * @defaultValue undefined
   * @group Props
   */
  max = input(...ngDevMode ? [void 0, {
    debugName: "max"
  }] : []);
  /**
   * Unless the step is set to the any literal, the value must be min + an integral multiple of the step.
   * @defaultValue undefined
   * @group Props
   */
  step = input(...ngDevMode ? [void 0, {
    debugName: "step"
  }] : []);
  /**
   * The number of characters (code points) must not be less than the value of the attribute, if non-empty.
   * @defaultValue undefined
   * @group Props
   */
  minlength = input(...ngDevMode ? [void 0, {
    debugName: "minlength"
  }] : []);
  /**
   * The number of characters (code points) must not exceed the value of the attribute.
   * @defaultValue undefined
   * @group Props
   */
  maxlength = input(...ngDevMode ? [void 0, {
    debugName: "maxlength"
  }] : []);
  $variant = computed(() => this.variant() || this.config.inputStyle() || this.config.inputVariant(), ...ngDevMode ? [{
    debugName: "$variant"
  }] : []);
  get hasFluid() {
    return this.fluid() ?? !!this.pcFluid;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BaseInput_BaseFactory;
    return function BaseInput_Factory(__ngFactoryType__) {
      return (\u0275BaseInput_BaseFactory || (\u0275BaseInput_BaseFactory = \u0275\u0275getInheritedFactory(_BaseInput)))(__ngFactoryType__ || _BaseInput);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BaseInput,
    inputs: {
      fluid: [1, "fluid"],
      variant: [1, "variant"],
      size: [1, "size"],
      inputSize: [1, "inputSize"],
      pattern: [1, "pattern"],
      min: [1, "min"],
      max: [1, "max"],
      step: [1, "step"],
      minlength: [1, "minlength"],
      maxlength: [1, "maxlength"]
    },
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseInput, [{
    type: Directive,
    args: [{
      standalone: true
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-utils.mjs
var ObjectUtils = class _ObjectUtils {
  static isArray(value, empty = true) {
    return Array.isArray(value) && (empty || value.length !== 0);
  }
  static isObject(value, empty = true) {
    return typeof value === "object" && !Array.isArray(value) && value != null && (empty || Object.keys(value).length !== 0);
  }
  static equals(obj1, obj2, field) {
    if (field)
      return this.resolveFieldData(obj1, field) === this.resolveFieldData(obj2, field);
    else
      return this.equalsByValue(obj1, obj2);
  }
  static equalsByValue(obj1, obj2) {
    if (obj1 === obj2)
      return true;
    if (obj1 && obj2 && typeof obj1 == "object" && typeof obj2 == "object") {
      var arrA = Array.isArray(obj1), arrB = Array.isArray(obj2), i, length, key;
      if (arrA && arrB) {
        length = obj1.length;
        if (length != obj2.length)
          return false;
        for (i = length; i-- !== 0; )
          if (!this.equalsByValue(obj1[i], obj2[i]))
            return false;
        return true;
      }
      if (arrA != arrB)
        return false;
      var dateA = this.isDate(obj1), dateB = this.isDate(obj2);
      if (dateA != dateB)
        return false;
      if (dateA && dateB)
        return obj1.getTime() == obj2.getTime();
      var regexpA = obj1 instanceof RegExp, regexpB = obj2 instanceof RegExp;
      if (regexpA != regexpB)
        return false;
      if (regexpA && regexpB)
        return obj1.toString() == obj2.toString();
      var keys = Object.keys(obj1);
      length = keys.length;
      if (length !== Object.keys(obj2).length)
        return false;
      for (i = length; i-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(obj2, keys[i]))
          return false;
      for (i = length; i-- !== 0; ) {
        key = keys[i];
        if (!this.equalsByValue(obj1[key], obj2[key]))
          return false;
      }
      return true;
    }
    return obj1 !== obj1 && obj2 !== obj2;
  }
  static resolveFieldData(data, field) {
    if (data && field) {
      if (this.isFunction(field)) {
        return field(data);
      } else if (field.indexOf(".") == -1) {
        return data[field];
      } else {
        let fields = field.split(".");
        let value = data;
        for (let i = 0, len = fields.length; i < len; ++i) {
          if (value == null) {
            return null;
          }
          value = value[fields[i]];
        }
        return value;
      }
    } else {
      return null;
    }
  }
  static isFunction(obj) {
    return !!(obj && obj.constructor && obj.call && obj.apply);
  }
  static reorderArray(value, from, to) {
    let target;
    if (value && from !== to) {
      if (to >= value.length) {
        to %= value.length;
        from %= value.length;
      }
      value.splice(to, 0, value.splice(from, 1)[0]);
    }
  }
  static insertIntoOrderedArray(item, index, arr, sourceArr) {
    if (arr.length > 0) {
      let injected = false;
      for (let i = 0; i < arr.length; i++) {
        let currentItemIndex = this.findIndexInList(arr[i], sourceArr);
        if (currentItemIndex > index) {
          arr.splice(i, 0, item);
          injected = true;
          break;
        }
      }
      if (!injected) {
        arr.push(item);
      }
    } else {
      arr.push(item);
    }
  }
  static findIndexInList(item, list) {
    let index = -1;
    if (list) {
      for (let i = 0; i < list.length; i++) {
        if (list[i] == item) {
          index = i;
          break;
        }
      }
    }
    return index;
  }
  static contains(value, list) {
    if (value != null && list && list.length) {
      for (let val of list) {
        if (this.equals(value, val))
          return true;
      }
    }
    return false;
  }
  static removeAccents(str) {
    if (str) {
      str = str.normalize("NFKD").replace(new RegExp("\\p{Diacritic}", "gu"), "");
    }
    return str;
  }
  static isDate(input2) {
    return Object.prototype.toString.call(input2) === "[object Date]";
  }
  static isEmpty(value) {
    return value === null || value === void 0 || value === "" || Array.isArray(value) && value.length === 0 || !this.isDate(value) && typeof value === "object" && Object.keys(value).length === 0;
  }
  static isNotEmpty(value) {
    return !this.isEmpty(value);
  }
  static compare(value1, value2, locale, order = 1) {
    let result = -1;
    const emptyValue1 = this.isEmpty(value1);
    const emptyValue2 = this.isEmpty(value2);
    if (emptyValue1 && emptyValue2)
      result = 0;
    else if (emptyValue1)
      result = order;
    else if (emptyValue2)
      result = -order;
    else if (typeof value1 === "string" && typeof value2 === "string")
      result = value1.localeCompare(value2, locale, { numeric: true });
    else
      result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
    return result;
  }
  static sort(value1, value2, order = 1, locale, nullSortOrder = 1) {
    const result = _ObjectUtils.compare(value1, value2, locale, order);
    let finalSortOrder = order;
    if (_ObjectUtils.isEmpty(value1) || _ObjectUtils.isEmpty(value2)) {
      finalSortOrder = nullSortOrder === 1 ? order : nullSortOrder;
    }
    return finalSortOrder * result;
  }
  static merge(obj1, obj2) {
    if (obj1 == void 0 && obj2 == void 0) {
      return void 0;
    } else if ((obj1 == void 0 || typeof obj1 === "object") && (obj2 == void 0 || typeof obj2 === "object")) {
      return __spreadValues(__spreadValues({}, obj1 || {}), obj2 || {});
    } else if ((obj1 == void 0 || typeof obj1 === "string") && (obj2 == void 0 || typeof obj2 === "string")) {
      return [obj1 || "", obj2 || ""].join(" ");
    }
    return obj2 || obj1;
  }
  static isPrintableCharacter(char = "") {
    return this.isNotEmpty(char) && char.length === 1 && char.match(/\S| /);
  }
  static getItemValue(obj, ...params) {
    return this.isFunction(obj) ? obj(...params) : obj;
  }
  static findLastIndex(arr, callback) {
    let index = -1;
    if (this.isNotEmpty(arr)) {
      try {
        index = arr.findLastIndex(callback);
      } catch {
        index = arr.lastIndexOf([...arr].reverse().find(callback));
      }
    }
    return index;
  }
  static findLast(arr, callback) {
    let item;
    if (this.isNotEmpty(arr)) {
      try {
        item = arr.findLast(callback);
      } catch {
        item = [...arr].reverse().find(callback);
      }
    }
    return item;
  }
  static deepEquals(a2, b) {
    if (a2 === b)
      return true;
    if (a2 && b && typeof a2 == "object" && typeof b == "object") {
      var arrA = Array.isArray(a2), arrB = Array.isArray(b), i, length, key;
      if (arrA && arrB) {
        length = a2.length;
        if (length != b.length)
          return false;
        for (i = length; i-- !== 0; )
          if (!this.deepEquals(a2[i], b[i]))
            return false;
        return true;
      }
      if (arrA != arrB)
        return false;
      var dateA = a2 instanceof Date, dateB = b instanceof Date;
      if (dateA != dateB)
        return false;
      if (dateA && dateB)
        return a2.getTime() == b.getTime();
      var regexpA = a2 instanceof RegExp, regexpB = b instanceof RegExp;
      if (regexpA != regexpB)
        return false;
      if (regexpA && regexpB)
        return a2.toString() == b.toString();
      var keys = Object.keys(a2);
      length = keys.length;
      if (length !== Object.keys(b).length)
        return false;
      for (i = length; i-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
          return false;
      for (i = length; i-- !== 0; ) {
        key = keys[i];
        if (!this.deepEquals(a2[key], b[key]))
          return false;
      }
      return true;
    }
    return a2 !== a2 && b !== b;
  }
  static minifyCSS(css2) {
    return css2 ? css2.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":") : css2;
  }
  static toFlatCase(str) {
    return this.isString(str) ? str.replace(/(-|_)/g, "").toLowerCase() : str;
  }
  static isString(value, empty = true) {
    return typeof value === "string" && (empty || value !== "");
  }
};
var lastId = 0;
function UniqueComponentId(prefix = "pn_id_") {
  lastId++;
  return `${prefix}${lastId}`;
}
function ZIndexUtils() {
  let zIndexes = [];
  const generateZIndex = (key, baseZIndex) => {
    let lastZIndex = zIndexes.length > 0 ? zIndexes[zIndexes.length - 1] : { key, value: baseZIndex };
    let newZIndex = lastZIndex.value + (lastZIndex.key === key ? 0 : baseZIndex) + 2;
    zIndexes.push({ key, value: newZIndex });
    return newZIndex;
  };
  const revertZIndex = (zIndex) => {
    zIndexes = zIndexes.filter((obj) => obj.value !== zIndex);
  };
  const getCurrentZIndex = () => {
    return zIndexes.length > 0 ? zIndexes[zIndexes.length - 1].value : 0;
  };
  const getZIndex = (el) => {
    return el ? parseInt(el.style.zIndex, 10) || 0 : 0;
  };
  return {
    get: getZIndex,
    set: (key, el, baseZIndex) => {
      if (el) {
        el.style.zIndex = String(generateZIndex(key, baseZIndex));
      }
    },
    clear: (el) => {
      if (el) {
        revertZIndex(getZIndex(el));
        el.style.zIndex = "";
      }
    },
    getCurrent: () => getCurrentZIndex(),
    generateZIndex,
    revertZIndex
  };
}
var zindexutils = ZIndexUtils();

export {
  DomHandler,
  blockBodyScroll,
  unblockBodyScroll,
  ConnectedOverlayScrollHandler,
  AutoFocus,
  Badge,
  BadgeModule,
  Fluid,
  BaseIcon,
  CheckIcon,
  SpinnerIcon,
  TimesIcon,
  Button,
  ButtonModule,
  BaseEditableHolder,
  InputText,
  InputTextModule,
  BaseInput,
  ObjectUtils,
  UniqueComponentId,
  zindexutils
};
//# sourceMappingURL=chunk-TMZOMM52.js.map
