import {
  A,
  E,
  G,
  N,
  S2 as S,
  Y2 as Y,
  ar,
  c,
  k2 as k,
  m
} from "./chunk-I2GZOOFQ.js";
import {
  CommonModule
} from "./chunk-N2DG2MZF.js";
import {
  Component,
  DOCUMENT,
  Directive,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  PLATFORM_ID,
  Subject,
  TemplateRef,
  effect,
  inject,
  makeEnvironmentProviders,
  provideAppInitializer,
  setClassMetadata,
  signal,
  untracked,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵgetInheritedFactory,
  ɵɵprojection,
  ɵɵprojectionDef
} from "./chunk-6FH5EJK4.js";
import {
  __spreadValues
} from "./chunk-R2QGWZ7S.js";

// node_modules/primeng/fesm2022/primeng-api.mjs
var _c0 = ["*"];
var ConfirmEventType;
(function(ConfirmEventType2) {
  ConfirmEventType2[ConfirmEventType2["ACCEPT"] = 0] = "ACCEPT";
  ConfirmEventType2[ConfirmEventType2["REJECT"] = 1] = "REJECT";
  ConfirmEventType2[ConfirmEventType2["CANCEL"] = 2] = "CANCEL";
})(ConfirmEventType || (ConfirmEventType = {}));
var ConfirmationService = class _ConfirmationService {
  requireConfirmationSource = new Subject();
  acceptConfirmationSource = new Subject();
  requireConfirmation$ = this.requireConfirmationSource.asObservable();
  accept = this.acceptConfirmationSource.asObservable();
  /**
   * Callback to invoke on confirm.
   * @param {Confirmation} confirmation - Represents a confirmation dialog configuration.
   * @group Method
   */
  confirm(confirmation) {
    this.requireConfirmationSource.next(confirmation);
    return this;
  }
  /**
   * Closes the dialog.
   * @group Method
   */
  close() {
    this.requireConfirmationSource.next(null);
    return this;
  }
  /**
   * Accepts the dialog.
   * @group Method
   */
  onAccept() {
    this.acceptConfirmationSource.next(null);
  }
  static \u0275fac = function ConfirmationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ConfirmationService,
    factory: _ConfirmationService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmationService, [{
    type: Injectable
  }], null, null);
})();
var ContextMenuService = class _ContextMenuService {
  activeItemKeyChange = new Subject();
  activeItemKeyChange$ = this.activeItemKeyChange.asObservable();
  activeItemKey;
  changeKey(key) {
    this.activeItemKey = key;
    this.activeItemKeyChange.next(this.activeItemKey);
  }
  reset() {
    this.activeItemKey = null;
    this.activeItemKeyChange.next(this.activeItemKey);
  }
  static \u0275fac = function ContextMenuService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContextMenuService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ContextMenuService,
    factory: _ContextMenuService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContextMenuService, [{
    type: Injectable
  }], null, null);
})();
var FilterMatchMode = class {
  static STARTS_WITH = "startsWith";
  static CONTAINS = "contains";
  static NOT_CONTAINS = "notContains";
  static ENDS_WITH = "endsWith";
  static EQUALS = "equals";
  static NOT_EQUALS = "notEquals";
  static IN = "in";
  static LESS_THAN = "lt";
  static LESS_THAN_OR_EQUAL_TO = "lte";
  static GREATER_THAN = "gt";
  static GREATER_THAN_OR_EQUAL_TO = "gte";
  static BETWEEN = "between";
  static IS = "is";
  static IS_NOT = "isNot";
  static BEFORE = "before";
  static AFTER = "after";
  static DATE_IS = "dateIs";
  static DATE_IS_NOT = "dateIsNot";
  static DATE_BEFORE = "dateBefore";
  static DATE_AFTER = "dateAfter";
};
var FilterOperator = class {
  static AND = "and";
  static OR = "or";
};
var FilterService = class _FilterService {
  filter(value, fields, filterValue, filterMatchMode, filterLocale) {
    let filteredItems = [];
    if (value) {
      for (let item of value) {
        for (let field of fields) {
          let fieldValue = c(item, field);
          if (this.filters[filterMatchMode](fieldValue, filterValue, filterLocale)) {
            filteredItems.push(item);
            break;
          }
        }
      }
    }
    return filteredItems;
  }
  filters = {
    startsWith: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      let filterValue = Y(filter.toString()).toLocaleLowerCase(filterLocale);
      let stringValue = Y(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.slice(0, filterValue.length) === filterValue;
    },
    contains: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      let filterValue = Y(filter.toString()).toLocaleLowerCase(filterLocale);
      let stringValue = Y(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue) !== -1;
    },
    notContains: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      let filterValue = Y(filter.toString()).toLocaleLowerCase(filterLocale);
      let stringValue = Y(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue) === -1;
    },
    endsWith: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      let filterValue = Y(filter.toString()).toLocaleLowerCase(filterLocale);
      let stringValue = Y(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue, stringValue.length - filterValue.length) !== -1;
    },
    equals: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime) return value.getTime() === filter.getTime();
      else if (value == filter) return true;
      else return Y(value.toString()).toLocaleLowerCase(filterLocale) == Y(filter.toString()).toLocaleLowerCase(filterLocale);
    },
    notEquals: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
        return false;
      }
      if (value === void 0 || value === null) {
        return true;
      }
      if (value.getTime && filter.getTime) return value.getTime() !== filter.getTime();
      else if (value == filter) return false;
      else return Y(value.toString()).toLocaleLowerCase(filterLocale) != Y(filter.toString()).toLocaleLowerCase(filterLocale);
    },
    in: (value, filter) => {
      if (filter === void 0 || filter === null || filter.length === 0) {
        return true;
      }
      for (let i = 0; i < filter.length; i++) {
        if (k(value, filter[i])) {
          return true;
        }
      }
      return false;
    },
    between: (value, filter) => {
      if (filter == null || filter[0] == null || filter[1] == null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime) return filter[0].getTime() <= value.getTime() && value.getTime() <= filter[1].getTime();
      else return filter[0] <= value && value <= filter[1];
    },
    lt: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime) return value.getTime() < filter.getTime();
      else return value < filter;
    },
    lte: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime) return value.getTime() <= filter.getTime();
      else return value <= filter;
    },
    gt: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime) return value.getTime() > filter.getTime();
      else return value > filter;
    },
    gte: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime) return value.getTime() >= filter.getTime();
      else return value >= filter;
    },
    is: (value, filter, filterLocale) => {
      return this.filters.equals(value, filter, filterLocale);
    },
    isNot: (value, filter, filterLocale) => {
      return this.filters.notEquals(value, filter, filterLocale);
    },
    before: (value, filter, filterLocale) => {
      return this.filters.lt(value, filter, filterLocale);
    },
    after: (value, filter, filterLocale) => {
      return this.filters.gt(value, filter, filterLocale);
    },
    dateIs: (value, filter) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.toDateString() === filter.toDateString();
    },
    dateIsNot: (value, filter) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.toDateString() !== filter.toDateString();
    },
    dateBefore: (value, filter) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.getTime() < filter.getTime();
    },
    dateAfter: (value, filter) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      value.setHours(0, 0, 0, 0);
      return value.getTime() > filter.getTime();
    }
  };
  register(rule, fn) {
    this.filters[rule] = fn;
  }
  static \u0275fac = function FilterService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FilterService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _FilterService,
    factory: _FilterService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FilterService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var MessageService = class _MessageService {
  messageSource = new Subject();
  clearSource = new Subject();
  messageObserver = this.messageSource.asObservable();
  clearObserver = this.clearSource.asObservable();
  /**
   * Inserts single message.
   * @param {ToastMessageOptions} message - Message to be added.
   * @group Method
   */
  add(message) {
    if (message) {
      this.messageSource.next(message);
    }
  }
  /**
   * Inserts new messages.
   * @param {Message[]} messages - Messages to be added.
   * @group Method
   */
  addAll(messages) {
    if (messages && messages.length) {
      this.messageSource.next(messages);
    }
  }
  /**
   * Clears the message with the given key.
   * @param {string} key - Key of the message to be cleared.
   * @group Method
   */
  clear(key) {
    this.clearSource.next(key || null);
  }
  static \u0275fac = function MessageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MessageService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _MessageService,
    factory: _MessageService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessageService, [{
    type: Injectable
  }], null, null);
})();
var OverlayService = class _OverlayService {
  clickSource = new Subject();
  clickObservable = this.clickSource.asObservable();
  add(event) {
    if (event) {
      this.clickSource.next(event);
    }
  }
  static \u0275fac = function OverlayService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OverlayService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _OverlayService,
    factory: _OverlayService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var Header = class _Header {
  static \u0275fac = function Header_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Header)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Header,
    selectors: [["p-header"]],
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function Header_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Header, [{
    type: Component,
    args: [{
      selector: "p-header",
      template: "<ng-content></ng-content>",
      standalone: false
    }]
  }], null, null);
})();
var Footer = class _Footer {
  static \u0275fac = function Footer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Footer)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Footer,
    selectors: [["p-footer"]],
    standalone: false,
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function Footer_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Footer, [{
    type: Component,
    args: [{
      selector: "p-footer",
      template: "<ng-content></ng-content>",
      standalone: false
    }]
  }], null, null);
})();
var PrimeTemplate = class _PrimeTemplate {
  template;
  type;
  name;
  constructor(template) {
    this.template = template;
  }
  getType() {
    return this.name;
  }
  static \u0275fac = function PrimeTemplate_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PrimeTemplate)(\u0275\u0275directiveInject(TemplateRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _PrimeTemplate,
    selectors: [["", "pTemplate", ""]],
    inputs: {
      type: "type",
      name: [0, "pTemplate", "name"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrimeTemplate, [{
    type: Directive,
    args: [{
      selector: "[pTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], {
    type: [{
      type: Input
    }],
    name: [{
      type: Input,
      args: ["pTemplate"]
    }]
  });
})();
var SharedModule = class _SharedModule {
  static \u0275fac = function SharedModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SharedModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _SharedModule,
    declarations: [Header, Footer],
    imports: [CommonModule, PrimeTemplate],
    exports: [Header, Footer, PrimeTemplate]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SharedModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, PrimeTemplate],
      exports: [Header, Footer, PrimeTemplate],
      declarations: [Header, Footer]
    }]
  }], null, null);
})();
var TranslationKeys = class {
  static STARTS_WITH = "startsWith";
  static CONTAINS = "contains";
  static NOT_CONTAINS = "notContains";
  static ENDS_WITH = "endsWith";
  static EQUALS = "equals";
  static NOT_EQUALS = "notEquals";
  static NO_FILTER = "noFilter";
  static LT = "lt";
  static LTE = "lte";
  static GT = "gt";
  static GTE = "gte";
  static IS = "is";
  static IS_NOT = "isNot";
  static BEFORE = "before";
  static AFTER = "after";
  static CLEAR = "clear";
  static APPLY = "apply";
  static MATCH_ALL = "matchAll";
  static MATCH_ANY = "matchAny";
  static ADD_RULE = "addRule";
  static REMOVE_RULE = "removeRule";
  static ACCEPT = "accept";
  static REJECT = "reject";
  static CHOOSE = "choose";
  static UPLOAD = "upload";
  static CANCEL = "cancel";
  static PENDING = "pending";
  static FILE_SIZE_TYPES = "fileSizeTypes";
  static DAY_NAMES = "dayNames";
  static DAY_NAMES_SHORT = "dayNamesShort";
  static DAY_NAMES_MIN = "dayNamesMin";
  static MONTH_NAMES = "monthNames";
  static MONTH_NAMES_SHORT = "monthNamesShort";
  static FIRST_DAY_OF_WEEK = "firstDayOfWeek";
  static TODAY = "today";
  static WEEK_HEADER = "weekHeader";
  static WEAK = "weak";
  static MEDIUM = "medium";
  static STRONG = "strong";
  static PASSWORD_PROMPT = "passwordPrompt";
  static EMPTY_MESSAGE = "emptyMessage";
  static EMPTY_FILTER_MESSAGE = "emptyFilterMessage";
  static SHOW_FILTER_MENU = "showFilterMenu";
  static HIDE_FILTER_MENU = "hideFilterMenu";
  static SELECTION_MESSAGE = "selectionMessage";
  static ARIA = "aria";
  static SELECT_COLOR = "selectColor";
  static BROWSE_FILES = "browseFiles";
};
var TreeDragDropService = class _TreeDragDropService {
  dragStartSource = new Subject();
  dragStopSource = new Subject();
  dragStart$ = this.dragStartSource.asObservable();
  dragStop$ = this.dragStopSource.asObservable();
  startDrag(event) {
    this.dragStartSource.next(event);
  }
  stopDrag(event) {
    this.dragStopSource.next(event);
  }
  static \u0275fac = function TreeDragDropService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TreeDragDropService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TreeDragDropService,
    factory: _TreeDragDropService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeDragDropService, [{
    type: Injectable
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/base/index.mjs
var style = "\n    *,\n    ::before,\n    ::after {\n        box-sizing: border-box;\n    }\n\n    /* Non vue overlay animations */\n    .p-connected-overlay {\n        opacity: 0;\n        transform: scaleY(0.8);\n        transition:\n            transform 0.12s cubic-bezier(0, 0, 0.2, 1),\n            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);\n    }\n\n    .p-connected-overlay-visible {\n        opacity: 1;\n        transform: scaleY(1);\n    }\n\n    .p-connected-overlay-hidden {\n        opacity: 0;\n        transform: scaleY(1);\n        transition: opacity 0.1s linear;\n    }\n\n    /* Vue based overlay animations */\n    .p-connected-overlay-enter-from {\n        opacity: 0;\n        transform: scaleY(0.8);\n    }\n\n    .p-connected-overlay-leave-to {\n        opacity: 0;\n    }\n\n    .p-connected-overlay-enter-active {\n        transition:\n            transform 0.12s cubic-bezier(0, 0, 0.2, 1),\n            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);\n    }\n\n    .p-connected-overlay-leave-active {\n        transition: opacity 0.1s linear;\n    }\n\n    /* Toggleable Content */\n    .p-toggleable-content-enter-from,\n    .p-toggleable-content-leave-to {\n        max-height: 0;\n    }\n\n    .p-toggleable-content-enter-to,\n    .p-toggleable-content-leave-from {\n        max-height: 1000px;\n    }\n\n    .p-toggleable-content-leave-active {\n        overflow: hidden;\n        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);\n    }\n\n    .p-toggleable-content-enter-active {\n        overflow: hidden;\n        transition: max-height 1s ease-in-out;\n    }\n\n    .p-disabled,\n    .p-disabled * {\n        cursor: default;\n        pointer-events: none;\n        user-select: none;\n    }\n\n    .p-disabled,\n    .p-component:disabled {\n        opacity: dt('disabled.opacity');\n    }\n\n    .pi {\n        font-size: dt('icon.size');\n    }\n\n    .p-icon {\n        width: dt('icon.size');\n        height: dt('icon.size');\n    }\n\n    .p-overlay-mask {\n        background: dt('mask.background');\n        color: dt('mask.color');\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n\n    .p-overlay-mask-enter {\n        animation: p-overlay-mask-enter-animation dt('mask.transition.duration') forwards;\n    }\n\n    .p-overlay-mask-leave {\n        animation: p-overlay-mask-leave-animation dt('mask.transition.duration') forwards;\n    }\n\n    @keyframes p-overlay-mask-enter-animation {\n        from {\n            background: transparent;\n        }\n        to {\n            background: dt('mask.background');\n        }\n    }\n    @keyframes p-overlay-mask-leave-animation {\n        from {\n            background: dt('mask.background');\n        }\n        to {\n            background: transparent;\n        }\n    }\n";

// node_modules/primeng/fesm2022/primeng-usestyle.mjs
var _id = 0;
var UseStyle = class _UseStyle {
  document = inject(DOCUMENT);
  use(css2, options = {}) {
    let isLoaded = false;
    let cssRef = css2;
    let styleRef = null;
    const {
      immediate = true,
      manual = false,
      name = `style_${++_id}`,
      id = void 0,
      media = void 0,
      nonce = void 0,
      first = false,
      props = {}
    } = options;
    if (!this.document) return;
    styleRef = this.document.querySelector(`style[data-primeng-style-id="${name}"]`) || id && this.document.getElementById(id) || this.document.createElement("style");
    if (!styleRef.isConnected) {
      cssRef = css2;
      const HEAD = this.document.head;
      first && HEAD.firstChild ? HEAD.insertBefore(styleRef, HEAD.firstChild) : HEAD.appendChild(styleRef);
      A(styleRef, {
        type: "text/css",
        media,
        nonce,
        "data-primeng-style-id": name
      });
    }
    if (styleRef.textContent !== cssRef) {
      styleRef.textContent = cssRef;
    }
    return {
      id,
      name,
      el: styleRef,
      css: cssRef
    };
  }
  static \u0275fac = function UseStyle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UseStyle)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _UseStyle,
    factory: _UseStyle.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UseStyle, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-base.mjs
var base = {
  _loadedStyleNames: /* @__PURE__ */ new Set(),
  getLoadedStyleNames() {
    return this._loadedStyleNames;
  },
  isStyleNameLoaded(name) {
    return this._loadedStyleNames.has(name);
  },
  setLoadedStyleName(name) {
    this._loadedStyleNames.add(name);
  },
  deleteLoadedStyleName(name) {
    this._loadedStyleNames.delete(name);
  },
  clearLoadedStyleNames() {
    this._loadedStyleNames.clear();
  }
};
var css = (
  /*css*/
  `
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: dt('scrollbar.width');
}
`
);
var BaseStyle = class _BaseStyle {
  name = "base";
  useStyle = inject(UseStyle);
  theme = void 0;
  css = void 0;
  classes = {};
  inlineStyles = {};
  load = (style2, options = {}, transform = (cs) => cs) => {
    const computedStyle = transform(ar`${m(style2, {
      dt: E
    })}`);
    return computedStyle ? this.useStyle.use(G(computedStyle), __spreadValues({
      name: this.name
    }, options)) : {};
  };
  loadCSS = (options = {}) => {
    return this.load(this.css, options);
  };
  loadTheme = (options = {}, style2 = "") => {
    return this.load(this.theme, options, (computedStyle = "") => S.transformCSS(options.name || this.name, `${computedStyle}${ar`${style2}`}`));
  };
  loadGlobalCSS = (options = {}) => {
    return this.load(css, options);
  };
  loadGlobalTheme = (options = {}, style$1 = "") => {
    return this.load(style, options, (computedStyle = "") => S.transformCSS(options.name || this.name, `${computedStyle}${ar`${style$1}`}`));
  };
  getCommonTheme = (params) => {
    return S.getCommon(this.name, params);
  };
  getComponentTheme = (params) => {
    return S.getComponent(this.name, params);
  };
  getDirectiveTheme = (params) => {
    return S.getDirective(this.name, params);
  };
  getPresetTheme = (preset, selector, params) => {
    return S.getCustomPreset(this.name, preset, selector, params);
  };
  getLayerOrderThemeCSS = () => {
    return S.getLayerOrderCSS(this.name);
  };
  getStyleSheet = (extendedCSS = "", props = {}) => {
    if (this.css) {
      const _css = m(this.css, {
        dt: E
      });
      const _style = G(ar`${_css}${extendedCSS}`);
      const _props = Object.entries(props).reduce((acc, [k2, v]) => acc.push(`${k2}="${v}"`) && acc, []).join(" ");
      return `<style type="text/css" data-primeng-style-id="${this.name}" ${_props}>${_style}</style>`;
    }
    return "";
  };
  getCommonThemeStyleSheet = (params, props = {}) => {
    return S.getCommonStyleSheet(this.name, params, props);
  };
  getThemeStyleSheet = (params, props = {}) => {
    let css2 = [S.getStyleSheet(this.name, params, props)];
    if (this.theme) {
      const name = this.name === "base" ? "global-style" : `${this.name}-style`;
      const _css = ar`${m(this.theme, {
        dt: E
      })}`;
      const _style = G(S.transformCSS(name, _css));
      const _props = Object.entries(props).reduce((acc, [k2, v]) => acc.push(`${k2}="${v}"`) && acc, []).join(" ");
      css2.push(`<style type="text/css" data-primeng-style-id="${name}" ${_props}>${_style}</style>`);
    }
    return css2.join("");
  };
  static \u0275fac = function BaseStyle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BaseStyle)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _BaseStyle,
    factory: _BaseStyle.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseStyle, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-config.mjs
var ThemeProvider = class _ThemeProvider {
  // @todo define type for theme
  theme = signal(void 0, ...ngDevMode ? [{
    debugName: "theme"
  }] : []);
  csp = signal({
    nonce: void 0
  }, ...ngDevMode ? [{
    debugName: "csp"
  }] : []);
  isThemeChanged = false;
  document = inject(DOCUMENT);
  baseStyle = inject(BaseStyle);
  constructor() {
    effect(() => {
      N.on("theme:change", (newTheme) => {
        untracked(() => {
          this.isThemeChanged = true;
          this.theme.set(newTheme);
        });
      });
    });
    effect(() => {
      const themeValue = this.theme();
      if (this.document && themeValue) {
        if (!this.isThemeChanged) {
          this.onThemeChange(themeValue);
        }
        this.isThemeChanged = false;
      }
    });
  }
  ngOnDestroy() {
    S.clearLoadedStyleNames();
    N.clear();
  }
  onThemeChange(value) {
    S.setTheme(value);
    if (this.document) {
      this.loadCommonTheme();
    }
  }
  loadCommonTheme() {
    if (this.theme() === "none") return;
    if (!S.isStyleNameLoaded("common")) {
      const {
        primitive,
        semantic,
        global,
        style: style2
      } = this.baseStyle.getCommonTheme?.() || {};
      const styleOptions = {
        nonce: this.csp?.()?.nonce
      };
      this.baseStyle.load(primitive?.css, __spreadValues({
        name: "primitive-variables"
      }, styleOptions));
      this.baseStyle.load(semantic?.css, __spreadValues({
        name: "semantic-variables"
      }, styleOptions));
      this.baseStyle.load(global?.css, __spreadValues({
        name: "global-variables"
      }, styleOptions));
      this.baseStyle.loadGlobalTheme(__spreadValues({
        name: "global-style"
      }, styleOptions), style2);
      S.setLoadedStyleName("common");
    }
  }
  setThemeConfig(config) {
    const {
      theme,
      csp
    } = config || {};
    if (theme) this.theme.set(theme);
    if (csp) this.csp.set(csp);
  }
  static \u0275fac = function ThemeProvider_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeProvider)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ThemeProvider,
    factory: _ThemeProvider.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeProvider, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var PrimeNG = class _PrimeNG extends ThemeProvider {
  ripple = signal(false, ...ngDevMode ? [{
    debugName: "ripple"
  }] : []);
  platformId = inject(PLATFORM_ID);
  /**
   * @deprecated Since v20. Use `inputVariant` instead.
   */
  inputStyle = signal(null, ...ngDevMode ? [{
    debugName: "inputStyle"
  }] : []);
  inputVariant = signal(null, ...ngDevMode ? [{
    debugName: "inputVariant"
  }] : []);
  overlayAppendTo = signal("self", ...ngDevMode ? [{
    debugName: "overlayAppendTo"
  }] : []);
  overlayOptions = {};
  csp = signal({
    nonce: void 0
  }, ...ngDevMode ? [{
    debugName: "csp"
  }] : []);
  filterMatchModeOptions = {
    text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
    numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
    date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
  };
  translation = {
    startsWith: "Starts with",
    contains: "Contains",
    notContains: "Not contains",
    endsWith: "Ends with",
    equals: "Equals",
    notEquals: "Not equals",
    noFilter: "No Filter",
    lt: "Less than",
    lte: "Less than or equal to",
    gt: "Greater than",
    gte: "Greater than or equal to",
    is: "Is",
    isNot: "Is not",
    before: "Before",
    after: "After",
    dateIs: "Date is",
    dateIsNot: "Date is not",
    dateBefore: "Date is before",
    dateAfter: "Date is after",
    clear: "Clear",
    apply: "Apply",
    matchAll: "Match All",
    matchAny: "Match Any",
    addRule: "Add Rule",
    removeRule: "Remove Rule",
    accept: "Yes",
    reject: "No",
    choose: "Choose",
    completed: "Completed",
    upload: "Upload",
    cancel: "Cancel",
    pending: "Pending",
    fileSizeTypes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    chooseYear: "Choose Year",
    chooseMonth: "Choose Month",
    chooseDate: "Choose Date",
    prevDecade: "Previous Decade",
    nextDecade: "Next Decade",
    prevYear: "Previous Year",
    nextYear: "Next Year",
    prevMonth: "Previous Month",
    nextMonth: "Next Month",
    prevHour: "Previous Hour",
    nextHour: "Next Hour",
    prevMinute: "Previous Minute",
    nextMinute: "Next Minute",
    prevSecond: "Previous Second",
    nextSecond: "Next Second",
    am: "am",
    pm: "pm",
    dateFormat: "mm/dd/yy",
    firstDayOfWeek: 0,
    today: "Today",
    weekHeader: "Wk",
    weak: "Weak",
    medium: "Medium",
    strong: "Strong",
    passwordPrompt: "Enter a password",
    emptyMessage: "No results found",
    searchMessage: "Search results are available",
    selectionMessage: "{0} items selected",
    emptySelectionMessage: "No selected item",
    emptySearchMessage: "No results found",
    emptyFilterMessage: "No results found",
    fileChosenMessage: "Files",
    noFileChosenMessage: "No file chosen",
    aria: {
      trueLabel: "True",
      falseLabel: "False",
      nullLabel: "Not Selected",
      star: "1 star",
      stars: "{star} stars",
      selectAll: "All items selected",
      unselectAll: "All items unselected",
      close: "Close",
      previous: "Previous",
      next: "Next",
      navigation: "Navigation",
      scrollTop: "Scroll Top",
      moveTop: "Move Top",
      moveUp: "Move Up",
      moveDown: "Move Down",
      moveBottom: "Move Bottom",
      moveToTarget: "Move to Target",
      moveToSource: "Move to Source",
      moveAllToTarget: "Move All to Target",
      moveAllToSource: "Move All to Source",
      pageLabel: "{page}",
      firstPageLabel: "First Page",
      lastPageLabel: "Last Page",
      nextPageLabel: "Next Page",
      prevPageLabel: "Previous Page",
      rowsPerPageLabel: "Rows per page",
      previousPageLabel: "Previous Page",
      jumpToPageDropdownLabel: "Jump to Page Dropdown",
      jumpToPageInputLabel: "Jump to Page Input",
      selectRow: "Row Selected",
      unselectRow: "Row Unselected",
      expandRow: "Row Expanded",
      collapseRow: "Row Collapsed",
      showFilterMenu: "Show Filter Menu",
      hideFilterMenu: "Hide Filter Menu",
      filterOperator: "Filter Operator",
      filterConstraint: "Filter Constraint",
      editRow: "Row Edit",
      saveEdit: "Save Edit",
      cancelEdit: "Cancel Edit",
      listView: "List View",
      gridView: "Grid View",
      slide: "Slide",
      slideNumber: "{slideNumber}",
      zoomImage: "Zoom Image",
      zoomIn: "Zoom In",
      zoomOut: "Zoom Out",
      rotateRight: "Rotate Right",
      rotateLeft: "Rotate Left",
      listLabel: "Option List",
      selectColor: "Select a color",
      removeLabel: "Remove",
      browseFiles: "Browse Files",
      maximizeLabel: "Maximize"
    }
  };
  zIndex = {
    modal: 1100,
    overlay: 1e3,
    menu: 1e3,
    tooltip: 1100
  };
  translationSource = new Subject();
  translationObserver = this.translationSource.asObservable();
  getTranslation(key) {
    return this.translation[key];
  }
  setTranslation(value) {
    this.translation = __spreadValues(__spreadValues({}, this.translation), value);
    this.translationSource.next(this.translation);
  }
  setConfig(config) {
    const {
      csp,
      ripple,
      inputStyle,
      inputVariant,
      theme,
      overlayOptions,
      translation,
      filterMatchModeOptions,
      overlayAppendTo
    } = config || {};
    if (csp) this.csp.set(csp);
    if (overlayAppendTo) this.overlayAppendTo.set(overlayAppendTo);
    if (ripple) this.ripple.set(ripple);
    if (inputStyle) this.inputStyle.set(inputStyle);
    if (inputVariant) this.inputVariant.set(inputVariant);
    if (overlayOptions) this.overlayOptions = overlayOptions;
    if (translation) this.setTranslation(translation);
    if (filterMatchModeOptions) this.filterMatchModeOptions = filterMatchModeOptions;
    if (theme) this.setThemeConfig({
      theme,
      csp
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275PrimeNG_BaseFactory;
    return function PrimeNG_Factory(__ngFactoryType__) {
      return (\u0275PrimeNG_BaseFactory || (\u0275PrimeNG_BaseFactory = \u0275\u0275getInheritedFactory(_PrimeNG)))(__ngFactoryType__ || _PrimeNG);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _PrimeNG,
    factory: _PrimeNG.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrimeNG, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var PRIME_NG_CONFIG = new InjectionToken("PRIME_NG_CONFIG");
function providePrimeNG(...features) {
  const providers = features?.map((feature) => ({
    provide: PRIME_NG_CONFIG,
    useValue: feature,
    multi: false
  }));
  const initializer = provideAppInitializer(() => {
    const PrimeNGConfig = inject(PrimeNG);
    features?.forEach((feature) => PrimeNGConfig.setConfig(feature));
    return;
  });
  return makeEnvironmentProviders([...providers, initializer]);
}

export {
  ConfirmEventType,
  ConfirmationService,
  FilterMatchMode,
  FilterOperator,
  FilterService,
  OverlayService,
  Footer,
  PrimeTemplate,
  SharedModule,
  TranslationKeys,
  base,
  BaseStyle,
  PrimeNG,
  providePrimeNG
};
//# sourceMappingURL=chunk-Q4VSGNER.js.map
