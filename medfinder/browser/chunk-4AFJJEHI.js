import {
  LayoutService
} from "./chunk-AP5ILEDC.js";
import "./chunk-SNDVMDYD.js";
import {
  Ripple,
  RippleModule
} from "./chunk-UTSE7XOD.js";
import "./chunk-Q4VSGNER.js";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-APMFUUV6.js";
import {
  PharmacyStateService
} from "./chunk-GJV7VJIM.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-LW7YESJ6.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-I2GZOOFQ.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-N2DG2MZF.js";
import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
  ViewChild,
  filter,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-6FH5EJK4.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-R2QGWZ7S.js";

// src/app/layout/component/menu-item/menu-items.component.ts
var _c0 = ["app-menuitem", ""];
var _c1 = () => ({ paths: "exact", queryParams: "ignored", matrixParams: "ignored", fragment: "ignored" });
function AppMenuitem_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.item.label);
  }
}
function AppMenuitem_a_2_i_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 9);
  }
}
function AppMenuitem_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 5);
    \u0275\u0275listener("click", function AppMenuitem_a_2_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.itemClick($event));
    });
    \u0275\u0275element(1, "i", 6);
    \u0275\u0275elementStart(2, "span", 7);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AppMenuitem_a_2_i_4_Template, 1, 0, "i", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.item.styleClass);
    \u0275\u0275attribute("href", ctx_r0.item.url, \u0275\u0275sanitizeUrl)("target", ctx_r0.item.target);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.item.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.item.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.item.items);
  }
}
function AppMenuitem_a_3_i_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 9);
  }
}
function AppMenuitem_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 10);
    \u0275\u0275listener("click", function AppMenuitem_a_3_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.itemClick($event));
    });
    \u0275\u0275element(1, "i", 6);
    \u0275\u0275elementStart(2, "span", 7);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AppMenuitem_a_3_i_4_Template, 1, 0, "i", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.item.styleClass)("routerLink", ctx_r0.item.routerLink)("routerLinkActiveOptions", ctx_r0.item.routerLinkActiveOptions || \u0275\u0275pureFunction0(14, _c1))("fragment", ctx_r0.item.fragment)("queryParamsHandling", ctx_r0.item.queryParamsHandling)("preserveFragment", ctx_r0.item.preserveFragment)("skipLocationChange", ctx_r0.item.skipLocationChange)("replaceUrl", ctx_r0.item.replaceUrl)("state", ctx_r0.item.state)("queryParams", ctx_r0.item.queryParams);
    \u0275\u0275attribute("target", ctx_r0.item.target);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.item.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.item.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.item.items);
  }
}
function AppMenuitem_ul_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "li", 12);
  }
  if (rf & 2) {
    const child_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(child_r4["badgeClass"]);
    \u0275\u0275property("item", child_r4)("index", i_r5)("parentKey", ctx_r0.key);
  }
}
function AppMenuitem_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul");
    \u0275\u0275template(1, AppMenuitem_ul_4_ng_template_1_Template, 1, 5, "ng-template", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("@children", ctx_r0.submenuAnimation);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.item.items);
  }
}
var AppMenuitem = class _AppMenuitem {
  router;
  layoutService;
  item;
  index;
  root;
  parentKey;
  active = false;
  menuSourceSubscription;
  menuResetSubscription;
  key = "";
  constructor(router, layoutService) {
    this.router = router;
    this.layoutService = layoutService;
    this.menuSourceSubscription = this.layoutService.menuSource$.subscribe((value) => {
      Promise.resolve(null).then(() => {
        if (value.routeEvent) {
          this.active = value.key === this.key || value.key.startsWith(this.key + "-") ? true : false;
        } else {
          if (value.key !== this.key && !value.key.startsWith(this.key + "-")) {
            this.active = false;
          }
        }
      });
    });
    this.menuResetSubscription = this.layoutService.resetSource$.subscribe(() => {
      this.active = false;
    });
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((params) => {
      if (this.item.routerLink) {
        this.updateActiveStateFromRoute();
      }
    });
  }
  ngOnInit() {
    this.key = this.parentKey ? this.parentKey + "-" + this.index : String(this.index);
    if (this.item.routerLink) {
      this.updateActiveStateFromRoute();
    }
  }
  updateActiveStateFromRoute() {
    let activeRoute = this.router.isActive(this.item.routerLink[0], { paths: "exact", queryParams: "ignored", matrixParams: "ignored", fragment: "ignored" });
    if (activeRoute) {
      this.layoutService.onMenuStateChange({ key: this.key, routeEvent: true });
    }
  }
  itemClick(event) {
    if (this.item.disabled) {
      event.preventDefault();
      return;
    }
    if (this.item.command) {
      this.item.command({ originalEvent: event, item: this.item });
    }
    if (this.item.items) {
      this.active = !this.active;
    }
    this.layoutService.onMenuStateChange({ key: this.key });
  }
  get submenuAnimation() {
    return this.root ? "expanded" : this.active ? "expanded" : "collapsed";
  }
  get activeClass() {
    return this.active && !this.root;
  }
  ngOnDestroy() {
    if (this.menuSourceSubscription) {
      this.menuSourceSubscription.unsubscribe();
    }
    if (this.menuResetSubscription) {
      this.menuResetSubscription.unsubscribe();
    }
  }
  static \u0275fac = function AppMenuitem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppMenuitem)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(LayoutService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppMenuitem, selectors: [["", "app-menuitem", ""]], hostVars: 4, hostBindings: function AppMenuitem_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("layout-root-menuitem", ctx.root)("active-menuitem", ctx.activeClass);
    }
  }, inputs: { item: "item", index: "index", root: "root", parentKey: "parentKey" }, features: [\u0275\u0275ProvidersFeature([LayoutService])], attrs: _c0, decls: 5, vars: 4, consts: [["class", "layout-menuitem-root-text", 4, "ngIf"], ["tabindex", "0", "pRipple", "", 3, "ngClass", "click", 4, "ngIf"], ["routerLinkActive", "active-route", "tabindex", "0", "pRipple", "", 3, "ngClass", "routerLink", "routerLinkActiveOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "queryParams", "click", 4, "ngIf"], [4, "ngIf"], [1, "layout-menuitem-root-text"], ["tabindex", "0", "pRipple", "", 3, "click", "ngClass"], [1, "layout-menuitem-icon", 3, "ngClass"], [1, "layout-menuitem-text"], ["class", "pi pi-fw pi-angle-down layout-submenu-toggler", 4, "ngIf"], [1, "pi", "pi-fw", "pi-angle-down", "layout-submenu-toggler"], ["routerLinkActive", "active-route", "tabindex", "0", "pRipple", "", 3, "click", "ngClass", "routerLink", "routerLinkActiveOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "queryParams"], ["ngFor", "", 3, "ngForOf"], ["app-menuitem", "", 3, "item", "index", "parentKey"]], template: function AppMenuitem_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementContainerStart(0);
      \u0275\u0275template(1, AppMenuitem_div_1_Template, 2, 1, "div", 0)(2, AppMenuitem_a_2_Template, 5, 6, "a", 1)(3, AppMenuitem_a_3_Template, 5, 15, "a", 2)(4, AppMenuitem_ul_4_Template, 2, 2, "ul", 3);
      \u0275\u0275elementContainerEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.root && ctx.item.visible !== false);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (!ctx.item.routerLink || ctx.item.items) && ctx.item.visible !== false);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.item.routerLink && !ctx.item.items && ctx.item.visible !== false);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.item.items && ctx.item.visible !== false);
    }
  }, dependencies: [_AppMenuitem, CommonModule, NgClass, NgForOf, NgIf, RouterModule, RouterLink, RouterLinkActive, RippleModule, Ripple], encapsulation: 2, data: { animation: [
    trigger("children", [
      state("collapsed", style({
        height: "0"
      })),
      state("expanded", style({
        height: "*"
      })),
      transition("collapsed <=> expanded", animate("400ms cubic-bezier(0.86, 0, 0.07, 1)"))
    ])
  ] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppMenuitem, [{
    type: Component,
    args: [{ selector: "[app-menuitem]", imports: [CommonModule, RouterModule, RippleModule], animations: [
      trigger("children", [
        state("collapsed", style({
          height: "0"
        })),
        state("expanded", style({
          height: "*"
        })),
        transition("collapsed <=> expanded", animate("400ms cubic-bezier(0.86, 0, 0.07, 1)"))
      ])
    ], providers: [LayoutService], template: `<ng-container>\r
    <div *ngIf="root && item.visible !== false" class="layout-menuitem-root-text">{{ item.label }}</div>\r
    <a *ngIf="(!item.routerLink || item.items) && item.visible !== false" [attr.href]="item.url"\r
        (click)="itemClick($event)" [ngClass]="item.styleClass" [attr.target]="item.target" tabindex="0" pRipple>\r
        <i [ngClass]="item.icon" class="layout-menuitem-icon"></i>\r
        <span class="layout-menuitem-text">{{ item.label }}</span>\r
        <i class="pi pi-fw pi-angle-down layout-submenu-toggler" *ngIf="item.items"></i>\r
    </a>\r
    <a *ngIf="item.routerLink && !item.items && item.visible !== false" (click)="itemClick($event)"\r
        [ngClass]="item.styleClass" [routerLink]="item.routerLink" routerLinkActive="active-route"\r
        [routerLinkActiveOptions]="item.routerLinkActiveOptions || { paths: 'exact', queryParams: 'ignored', matrixParams: 'ignored', fragment: 'ignored' }"\r
        [fragment]="item.fragment" [queryParamsHandling]="item.queryParamsHandling"\r
        [preserveFragment]="item.preserveFragment" [skipLocationChange]="item.skipLocationChange"\r
        [replaceUrl]="item.replaceUrl" [state]="item.state" [queryParams]="item.queryParams" [attr.target]="item.target"\r
        tabindex="0" pRipple>\r
        <i [ngClass]="item.icon" class="layout-menuitem-icon"></i>\r
        <span class="layout-menuitem-text">{{ item.label }}</span>\r
        <i class="pi pi-fw pi-angle-down layout-submenu-toggler" *ngIf="item.items"></i>\r
    </a>\r
\r
    <ul *ngIf="item.items && item.visible !== false" [@children]="submenuAnimation">\r
        <ng-template ngFor let-child let-i="index" [ngForOf]="item.items">\r
            <li app-menuitem [item]="child" [index]="i" [parentKey]="key" [class]="child['badgeClass']"></li>\r
        </ng-template>\r
    </ul>\r
</ng-container>` }]
  }], () => [{ type: Router }, { type: LayoutService }], { item: [{
    type: Input
  }], index: [{
    type: Input
  }], root: [{
    type: Input
  }, {
    type: HostBinding,
    args: ["class.layout-root-menuitem"]
  }], parentKey: [{
    type: Input
  }], activeClass: [{
    type: HostBinding,
    args: ["class.active-menuitem"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppMenuitem, { className: "AppMenuitem", filePath: "app/layout/component/menu-item/menu-items.component.ts", lineNumber: 34 });
})();

// src/app/layout/component/menu/menu.component.ts
function AppMenu_ng_container_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "li", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const item_r2 = ctx_r0.$implicit;
    const i_r3 = ctx_r0.index;
    \u0275\u0275property("item", item_r2)("index", i_r3)("root", true);
  }
}
function AppMenu_ng_container_1_li_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "li", 5);
  }
}
function AppMenu_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AppMenu_ng_container_1_li_1_Template, 1, 3, "li", 2)(2, AppMenu_ng_container_1_li_2_Template, 1, 0, "li", 3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !item_r2.separator);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r2.separator);
  }
}
var AppMenu = class _AppMenu {
  model = [];
  ngOnInit() {
    this.model = [
      {
        items: [
          { label: "Dashboard", icon: "pi pi-home", routerLink: ["/"] },
          { label: "Reservations", icon: "pi pi-calendar", routerLink: ["/reservations"] },
          { label: "Inventory", icon: "pi pi-box", routerLink: ["/inventory"] },
          { label: "Profile", icon: "pi pi-user", routerLink: ["/profile"] }
        ]
      }
    ];
  }
  static \u0275fac = function AppMenu_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppMenu)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppMenu, selectors: [["app-menu"]], decls: 2, vars: 1, consts: [[1, "layout-menu"], [4, "ngFor", "ngForOf"], ["app-menuitem", "", 3, "item", "index", "root", 4, "ngIf"], ["class", "menu-separator", 4, "ngIf"], ["app-menuitem", "", 3, "item", "index", "root"], [1, "menu-separator"]], template: function AppMenu_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ul", 0);
      \u0275\u0275template(1, AppMenu_ng_container_1_Template, 3, 2, "ng-container", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.model);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, AppMenuitem, RouterModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppMenu, [{
    type: Component,
    args: [{ selector: "app-menu", standalone: true, imports: [CommonModule, AppMenuitem, RouterModule], template: '<ul class="layout-menu">\r\n    <ng-container *ngFor="let item of model; let i = index">\r\n        <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>\r\n        <li *ngIf="item.separator" class="menu-separator"></li>\r\n    </ng-container>\r\n</ul>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppMenu, { className: "AppMenu", filePath: "app/layout/component/menu/menu.component.ts", lineNumber: 13 });
})();

// src/app/layout/component/sidebar/sidebar.component.ts
var _c02 = (a0, a1) => ({ "pi-angle-left": a0, "pi-angle-right": a1 });
function AppSidebar_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, "Logout");
    \u0275\u0275elementEnd();
  }
}
function AppSidebar_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1, "Collapse");
    \u0275\u0275elementEnd();
  }
}
var AppSidebar = class _AppSidebar {
  el;
  layoutService;
  fullLogo = "assets/images/MedFinder-Logo.png";
  collapsedLogo = "assets/images/MedFinder-Logo-mini.png";
  constructor(el, layoutService) {
    this.el = el;
    this.layoutService = layoutService;
  }
  get isCollapsed() {
    return this.layoutService.isCollapsed;
  }
  toggleSidebar() {
    this.layoutService.toggleSidebar();
  }
  static \u0275fac = function AppSidebar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppSidebar)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(LayoutService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppSidebar, selectors: [["app-sidebar"]], decls: 16, vars: 9, consts: [[1, "layout-sidebar"], ["routerLink", "/", 1, "layout-sidebar-brand"], [1, "layout-sidebar-brand-copy"], ["alt", "MedFinder-logo", 3, "src"], [1, "ml-14", "hide-on-collapse"], [1, "layout-sidebar-divider"], [1, "layout-sidebar-menu"], [1, "layout-sidebar-footer"], ["routerLink", "/auth/login", 1, "layout-sidebar-footer-link", "logout-link"], [1, "pi", "pi-sign-out"], ["class", "font-semibold text-lg", 4, "ngIf"], ["type", "button", 1, "layout-sidebar-footer-link", "collapse-button", 3, "click"], [1, "pi", 3, "ngClass"], ["class", "font-medium text-lg", 4, "ngIf"], [1, "font-semibold", "text-lg"], [1, "font-medium", "text-lg"]], template: function AppSidebar_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "a", 1)(2, "span", 2);
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275elementStart(4, "small", 4);
      \u0275\u0275text(5, "Pharmacy Admin");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(6, "div", 5);
      \u0275\u0275elementStart(7, "div", 6);
      \u0275\u0275element(8, "app-menu");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 7)(10, "a", 8);
      \u0275\u0275element(11, "i", 9);
      \u0275\u0275template(12, AppSidebar_span_12_Template, 2, 0, "span", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 11);
      \u0275\u0275listener("click", function AppSidebar_Template_button_click_13_listener() {
        return ctx.toggleSidebar();
      });
      \u0275\u0275element(14, "i", 12);
      \u0275\u0275template(15, AppSidebar_span_15_Template, 2, 0, "span", 13);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("sidebar-collapsed", ctx.isCollapsed);
      \u0275\u0275advance(3);
      \u0275\u0275property("src", ctx.isCollapsed ? ctx.collapsedLogo : ctx.fullLogo, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", !ctx.isCollapsed);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(6, _c02, !ctx.isCollapsed, ctx.isCollapsed));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isCollapsed);
    }
  }, dependencies: [AppMenu, RouterModule, RouterLink, CommonModule, NgClass, NgIf], styles: ["\n\n.layout-wrapper[_ngcontent-%COMP%] {\n  --sidebar-width: 250px;\n  --sidebar-collapsed-width: 80px;\n}\n.layout-wrapper.layout-sidebar-collapsed[_ngcontent-%COMP%] {\n  --sidebar-width: var(--sidebar-collapsed-width);\n}\n.layout-sidebar[_ngcontent-%COMP%] {\n  width: var(--sidebar-width);\n  transition: width 0.3s ease;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.layout-sidebar[_ngcontent-%COMP%]   .layout-sidebar-footer[_ngcontent-%COMP%] {\n  padding: 1rem;\n  padding-left: 2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.layout-sidebar.sidebar-collapsed[_ngcontent-%COMP%] {\n  width: var(--sidebar-collapsed-width);\n}\n.layout-sidebar.sidebar-collapsed[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.layout-sidebar.sidebar-collapsed[_ngcontent-%COMP%]   .hide-on-collapse[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.layout-sidebar.sidebar-collapsed[_ngcontent-%COMP%]     .layout-menuitem-text {\n  display: none;\n}\n.layout-sidebar.sidebar-collapsed[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  display: none;\n}\n.layout-sidebar.sidebar-collapsed[_ngcontent-%COMP%]   .layout-sidebar-footer-link[_ngcontent-%COMP%], \n.layout-sidebar.sidebar-collapsed[_ngcontent-%COMP%]   .collapse-button[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n.layout-sidebar.sidebar-collapsed[_ngcontent-%COMP%]   .layout-sidebar-footer[_ngcontent-%COMP%] {\n  align-items: center;\n  padding: 1rem 0;\n}\n.layout-sidebar.sidebar-collapsed[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.logout-link[_ngcontent-%COMP%] {\n  color: #ef4444 !important;\n}\n.logout-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.collapse-button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.layout-sidebar-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 1.5rem;\n  overflow: hidden;\n  transition: all 0.3s;\n}\n.layout-sidebar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 150px;\n  height: auto;\n  transition: all 0.3s;\n}\n.layout-sidebar.sidebar-collapsed[_ngcontent-%COMP%]   .layout-sidebar-brand[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 1rem 0;\n}\n.layout-sidebar.sidebar-collapsed[_ngcontent-%COMP%]   .layout-sidebar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 50px !important;\n  margin: 0 auto;\n  height: auto;\n}\n.layout-sidebar.sidebar-collapsed[_ngcontent-%COMP%]   .layout-sidebar-brand-copy[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  overflow: visible;\n}\n.layout-topbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 2rem;\n  background-color: rgba(255, 255, 255, 0.88);\n  border-bottom: 1px solid var(--surface-border);\n}\n.layout-topbar-left[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--text-color);\n  margin-bottom: 4px;\n}\n.layout-topbar-left[_ngcontent-%COMP%]   .page-date[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n  font-size: 0.875rem;\n}\n.layout-topbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-search-container[_ngcontent-%COMP%] {\n  position: relative;\n  background: var(--surface-card);\n  border-radius: 12px;\n  padding: 0.5rem 1rem;\n  display: flex;\n  align-items: center;\n  border: 1px solid var(--surface-border);\n  width: 300px;\n  height: 50px;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-search-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n  margin-right: 10px;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  outline: none;\n  width: 100%;\n  font-size: 0.9rem;\n  color: var(--text-color);\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-color-secondary);\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-action-button[_ngcontent-%COMP%] {\n  position: relative;\n  background: var(--surface-card);\n  border: 1px solid var(--surface-border);\n  border-radius: 12px;\n  width: 45px;\n  height: 45px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-action-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--text-color);\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-action-button[_ngcontent-%COMP%]:hover {\n  background: var(--surface-hover);\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-action-button[_ngcontent-%COMP%]   .notification-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -5px;\n  right: -5px;\n  background: #ef4444;\n  color: white;\n  font-size: 10px;\n  padding: 2px 6px;\n  border-radius: 50%;\n  border: 2px solid white;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 6px 12px;\n  border: 1px solid var(--surface-border);\n  border-radius: 12px;\n  background: var(--surface-card);\n  cursor: pointer;\n  transition: background 0.2s, box-shadow 0.2s;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile[_ngcontent-%COMP%]:hover {\n  background: var(--surface-hover);\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid rgba(59, 130, 246, 0.18);\n  outline-offset: 2px;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile[_ngcontent-%COMP%]   .layout-topbar-avatar[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  background:\n    linear-gradient(\n      135deg,\n      color-mix(in srgb, var(--primary-color) 72%, #8bb8ff),\n      var(--primary-color));\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.9rem;\n  box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.3);\n  flex-shrink: 0;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   .profile-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-color);\n  font-size: 0.95rem;\n  line-height: 1.2;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   .profile-role[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n  font-size: 0.8rem;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 0.8rem);\n  right: 0;\n  width: 280px;\n  background: var(--surface-card);\n  border: 1px solid var(--surface-border);\n  border-radius: 1.5rem;\n  box-shadow: 0 24px 60px -30px rgba(15, 23, 42, 0.35);\n  overflow: hidden;\n  z-index: 1000;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile-menu__header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n  padding: 1.55rem 1.6rem;\n  border-bottom: 1px solid var(--surface-border);\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile-menu__name[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  font-size: 1.15rem;\n  font-weight: 700;\n  line-height: 1.2;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile-menu__email[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n  font-size: 0.95rem;\n  font-weight: 500;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile-menu__section[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile-menu__section[_ngcontent-%COMP%]    + .layout-topbar-profile-menu__section[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--surface-border);\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile-menu__item[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  box-sizing: border-box;\n  align-items: center;\n  gap: 0.95rem;\n  padding: 1rem 1.6rem;\n  border-radius: 0;\n  color: var(--text-color);\n  font-size: 0.98rem;\n  font-weight: 600;\n  transition: background-color 0.2s ease, color 0.2s ease;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile-menu__item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  text-align: center;\n  color: var(--text-color-secondary);\n  font-size: 1rem;\n  transition: color 0.2s ease;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile-menu__item[_ngcontent-%COMP%]:hover {\n  background: var(--layout-hover-surface);\n  color: var(--text-color);\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile-menu__item[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile-menu__item--danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile-menu__item--danger[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile-menu__item--danger[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.12);\n  color: #dc2626;\n}\n.layout-main-container[_ngcontent-%COMP%] {\n  margin-left: var(--sidebar-width);\n  transition: margin-left 0.3s ease;\n  background: var(--surface-ground);\n}\n.layout-sidebar-collapsed[_ngcontent-%COMP%]   .layout-main-container[_ngcontent-%COMP%] {\n  margin-left: var(--sidebar-width);\n}\n.layout-sidebar-collapsed[_ngcontent-%COMP%]   .layout-topbar[_ngcontent-%COMP%] {\n  left: var(--sidebar-width);\n  width: calc(100% - var(--sidebar-width));\n  transition: all 0.3s ease;\n}\n.app-dark[_nghost-%COMP%]   .layout-sidebar[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-sidebar[_ngcontent-%COMP%] {\n  background: var(--surface-ground);\n  border-right-color: var(--surface-border);\n  box-shadow: 18px 0 36px rgba(3, 9, 20, 0.35);\n}\n.app-dark[_nghost-%COMP%]   .layout-sidebar-brand[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-sidebar-brand[_ngcontent-%COMP%] {\n  color: var(--text-color);\n}\n.app-dark[_nghost-%COMP%]   .layout-sidebar-brand-copy[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-sidebar-brand-copy[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   .layout-sidebar-footer-link[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-sidebar-footer-link[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n}\n.app-dark[_nghost-%COMP%]   .layout-sidebar-divider[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-sidebar-divider[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   .menu-separator[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .menu-separator[_ngcontent-%COMP%] {\n  background: var(--surface-border);\n}\n.app-dark[_nghost-%COMP%]   .layout-sidebar-footer[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-sidebar-footer[_ngcontent-%COMP%] {\n  background: transparent;\n  border-top-color: var(--surface-border);\n}\n.app-dark[_nghost-%COMP%]   .layout-sidebar-footer-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-sidebar-footer-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   .layout-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .layout-menuitem-icon[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .layout-menuitem-icon[_ngcontent-%COMP%] {\n  background: var(--surface-overlay);\n  color: inherit;\n}\n.app-dark[_nghost-%COMP%]   .layout-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n}\n.app-dark[_nghost-%COMP%]   .layout-sidebar-footer-link[_ngcontent-%COMP%]:hover, .app-dark   [_nghost-%COMP%]   .layout-sidebar-footer-link[_ngcontent-%COMP%]:hover {\n  background: var(--layout-hover-surface);\n  color: var(--text-color);\n}\n.app-dark[_nghost-%COMP%]   .layout-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .app-dark   [_nghost-%COMP%]   .layout-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, \n.app-dark[_nghost-%COMP%]   .layout-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a.active-route[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a.active-route[_ngcontent-%COMP%] {\n  background: var(--layout-hover-surface);\n  color: var(--primary-color) !important;\n}\n.app-dark[_nghost-%COMP%]   .layout-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .layout-submenu-toggler[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .layout-submenu-toggler[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n}\n.app-dark[_nghost-%COMP%]   .layout-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  border-left-color: var(--surface-border);\n}\n.app-dark[_nghost-%COMP%]   .layout-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a.active-route[_ngcontent-%COMP%]::after, .app-dark   [_nghost-%COMP%]   .layout-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a.active-route[_ngcontent-%COMP%]::after {\n  background: var(--primary-color);\n}\n.app-dark[_nghost-%COMP%]   .layout-topbar[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-topbar[_ngcontent-%COMP%] {\n  background-color: var(--surface-card);\n  border-bottom-color: var(--surface-border);\n}\n.app-dark[_nghost-%COMP%]   .layout-topbar-search-container[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-topbar-search-container[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   .layout-topbar-action-button[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-topbar-action-button[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   .layout-topbar-profile[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-topbar-profile[_ngcontent-%COMP%] {\n  background: var(--surface-overlay);\n  border-color: var(--surface-border);\n}\n.app-dark[_nghost-%COMP%]   .layout-topbar-profile-menu[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-topbar-profile-menu[_ngcontent-%COMP%] {\n  background: var(--surface-overlay);\n  border-color: var(--surface-border);\n  box-shadow: 0 24px 60px -30px rgba(2, 8, 20, 0.5);\n}\n.app-dark[_nghost-%COMP%]   .layout-topbar-search-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-topbar-search-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   .layout-topbar-action-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-topbar-action-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   .layout-topbar-profile-copy[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-topbar-profile-copy[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n}\n.app-dark[_nghost-%COMP%]   .layout-topbar-search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-topbar-search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   .layout-topbar-profile[_ngcontent-%COMP%]   .profile-name[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-topbar-profile[_ngcontent-%COMP%]   .profile-name[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   .layout-topbar-profile-menu__name[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-topbar-profile-menu__name[_ngcontent-%COMP%] {\n  color: var(--text-color);\n}\n.app-dark[_nghost-%COMP%]   .layout-topbar-profile-menu__header[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-topbar-profile-menu__header[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   .layout-topbar-profile-menu__section[_ngcontent-%COMP%]    + .layout-topbar-profile-menu__section[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-topbar-profile-menu__section[_ngcontent-%COMP%]    + .layout-topbar-profile-menu__section[_ngcontent-%COMP%] {\n  border-color: var(--surface-border);\n}\n.app-dark[_nghost-%COMP%]   .layout-topbar-profile-menu__item[_ngcontent-%COMP%]:hover, .app-dark   [_nghost-%COMP%]   .layout-topbar-profile-menu__item[_ngcontent-%COMP%]:hover {\n  background: var(--layout-hover-surface);\n  color: var(--primary-color);\n}\n.app-dark[_nghost-%COMP%]   .layout-topbar-profile-menu__item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-topbar-profile-menu__item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n}\n.app-dark[_nghost-%COMP%]   .layout-topbar-profile-menu__item[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-topbar-profile-menu__item[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n.app-dark[_nghost-%COMP%]   .layout-topbar-avatar[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-topbar-avatar[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      color-mix(in srgb, var(--primary-color) 76%, #91b9ff),\n      var(--primary-color));\n}\n.app-dark[_nghost-%COMP%]   .layout-topbar-profile-menu__item--danger[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-topbar-profile-menu__item--danger[_ngcontent-%COMP%] {\n  color: #ff6b76;\n}\n.app-dark[_nghost-%COMP%]   .layout-topbar-profile-menu__item--danger[_ngcontent-%COMP%]:hover, .app-dark   [_nghost-%COMP%]   .layout-topbar-profile-menu__item--danger[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, #ef4444 14%, transparent);\n  color: #ff8a92;\n}\n/*# sourceMappingURL=layout.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppSidebar, [{
    type: Component,
    args: [{ selector: "app-sidebar", standalone: true, imports: [AppMenu, RouterModule, CommonModule], template: `<div class="layout-sidebar" [class.sidebar-collapsed]="isCollapsed">\r
    <a class="layout-sidebar-brand" routerLink="/">\r
        <span class="layout-sidebar-brand-copy">\r
            <img [src]="isCollapsed ? collapsedLogo : fullLogo" alt="MedFinder-logo">\r
            <small class="ml-14 hide-on-collapse">Pharmacy Admin</small>\r
        </span>\r
    </a>\r
\r
    <div class="layout-sidebar-divider"></div>\r
\r
    <div class="layout-sidebar-menu">\r
        <app-menu></app-menu>\r
    </div>\r
\r
    <div class="layout-sidebar-footer">
        <a class="layout-sidebar-footer-link logout-link" routerLink="/auth/login">
            <i class="pi pi-sign-out"></i>
            <span *ngIf="!isCollapsed" class="font-semibold text-lg">Logout</span>
        </a>
    
        <button type="button" class="layout-sidebar-footer-link collapse-button" (click)="toggleSidebar()">
            <i class="pi" [ngClass]="{'pi-angle-left': !isCollapsed, 'pi-angle-right': isCollapsed}"></i>
            <span *ngIf="!isCollapsed" class="font-medium text-lg">Collapse</span>
        </button>
    </div>
</div>
`, styles: ["/* src/app/layout/layout.component.scss */\n.layout-wrapper {\n  --sidebar-width: 250px;\n  --sidebar-collapsed-width: 80px;\n}\n.layout-wrapper.layout-sidebar-collapsed {\n  --sidebar-width: var(--sidebar-collapsed-width);\n}\n.layout-sidebar {\n  width: var(--sidebar-width);\n  transition: width 0.3s ease;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.layout-sidebar .layout-sidebar-footer {\n  padding: 1rem;\n  padding-left: 2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.layout-sidebar.sidebar-collapsed {\n  width: var(--sidebar-collapsed-width);\n}\n.layout-sidebar.sidebar-collapsed small,\n.layout-sidebar.sidebar-collapsed .hide-on-collapse {\n  display: none !important;\n}\n.layout-sidebar.sidebar-collapsed ::ng-deep .layout-menuitem-text {\n  display: none;\n}\n.layout-sidebar.sidebar-collapsed .label {\n  display: none;\n}\n.layout-sidebar.sidebar-collapsed .layout-sidebar-footer-link,\n.layout-sidebar.sidebar-collapsed .collapse-button {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n.layout-sidebar.sidebar-collapsed .layout-sidebar-footer {\n  align-items: center;\n  padding: 1rem 0;\n}\n.layout-sidebar.sidebar-collapsed i {\n  font-size: 18px;\n}\n.logout-link {\n  color: #ef4444 !important;\n}\n.logout-link i {\n  color: inherit;\n}\n.collapse-button {\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.layout-sidebar-brand {\n  display: flex;\n  align-items: center;\n  padding: 1.5rem;\n  overflow: hidden;\n  transition: all 0.3s;\n}\n.layout-sidebar-brand img {\n  max-width: 150px;\n  height: auto;\n  transition: all 0.3s;\n}\n.layout-sidebar.sidebar-collapsed .layout-sidebar-brand {\n  justify-content: center;\n  padding: 1rem 0;\n}\n.layout-sidebar.sidebar-collapsed .layout-sidebar-brand img {\n  max-width: 50px !important;\n  margin: 0 auto;\n  height: auto;\n}\n.layout-sidebar.sidebar-collapsed .layout-sidebar-brand-copy {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  overflow: visible;\n}\n.layout-topbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 2rem;\n  background-color: rgba(255, 255, 255, 0.88);\n  border-bottom: 1px solid var(--surface-border);\n}\n.layout-topbar-left .page-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--text-color);\n  margin-bottom: 4px;\n}\n.layout-topbar-left .page-date {\n  color: var(--text-color-secondary);\n  font-size: 0.875rem;\n}\n.layout-topbar-right {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n}\n.layout-topbar-right .layout-topbar-search-container {\n  position: relative;\n  background: var(--surface-card);\n  border-radius: 12px;\n  padding: 0.5rem 1rem;\n  display: flex;\n  align-items: center;\n  border: 1px solid var(--surface-border);\n  width: 300px;\n  height: 50px;\n}\n.layout-topbar-right .layout-topbar-search-container i {\n  color: var(--text-color-secondary);\n  margin-right: 10px;\n}\n.layout-topbar-right .layout-topbar-search-container input {\n  border: none;\n  background: transparent;\n  outline: none;\n  width: 100%;\n  font-size: 0.9rem;\n  color: var(--text-color);\n}\n.layout-topbar-right .layout-topbar-search-container input::placeholder {\n  color: var(--text-color-secondary);\n}\n.layout-topbar-right .layout-topbar-action-button {\n  position: relative;\n  background: var(--surface-card);\n  border: 1px solid var(--surface-border);\n  border-radius: 12px;\n  width: 45px;\n  height: 45px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.layout-topbar-right .layout-topbar-action-button i {\n  font-size: 1.2rem;\n  color: var(--text-color);\n}\n.layout-topbar-right .layout-topbar-action-button:hover {\n  background: var(--surface-hover);\n}\n.layout-topbar-right .layout-topbar-action-button .notification-badge {\n  position: absolute;\n  top: -5px;\n  right: -5px;\n  background: #ef4444;\n  color: white;\n  font-size: 10px;\n  padding: 2px 6px;\n  border-radius: 50%;\n  border: 2px solid white;\n}\n.layout-topbar-right .layout-topbar-profile-wrap {\n  position: relative;\n}\n.layout-topbar-right .layout-topbar-profile {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 6px 12px;\n  border: 1px solid var(--surface-border);\n  border-radius: 12px;\n  background: var(--surface-card);\n  cursor: pointer;\n  transition: background 0.2s, box-shadow 0.2s;\n}\n.layout-topbar-right .layout-topbar-profile:hover {\n  background: var(--surface-hover);\n}\n.layout-topbar-right .layout-topbar-profile:focus-visible {\n  outline: 2px solid rgba(59, 130, 246, 0.18);\n  outline-offset: 2px;\n}\n.layout-topbar-right .layout-topbar-profile .layout-topbar-avatar {\n  width: 42px;\n  height: 42px;\n  background:\n    linear-gradient(\n      135deg,\n      color-mix(in srgb, var(--primary-color) 72%, #8bb8ff),\n      var(--primary-color));\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.9rem;\n  box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.3);\n  flex-shrink: 0;\n}\n.layout-topbar-right .layout-topbar-profile .profile-details {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n}\n.layout-topbar-right .layout-topbar-profile .profile-details .profile-name {\n  font-weight: 600;\n  color: var(--text-color);\n  font-size: 0.95rem;\n  line-height: 1.2;\n}\n.layout-topbar-right .layout-topbar-profile .profile-details .profile-role {\n  color: var(--text-color-secondary);\n  font-size: 0.8rem;\n}\n.layout-topbar-right .layout-topbar-profile-menu {\n  position: absolute;\n  top: calc(100% + 0.8rem);\n  right: 0;\n  width: 280px;\n  background: var(--surface-card);\n  border: 1px solid var(--surface-border);\n  border-radius: 1.5rem;\n  box-shadow: 0 24px 60px -30px rgba(15, 23, 42, 0.35);\n  overflow: hidden;\n  z-index: 1000;\n}\n.layout-topbar-right .layout-topbar-profile-menu__header {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n  padding: 1.55rem 1.6rem;\n  border-bottom: 1px solid var(--surface-border);\n}\n.layout-topbar-right .layout-topbar-profile-menu__name {\n  color: var(--text-color);\n  font-size: 1.15rem;\n  font-weight: 700;\n  line-height: 1.2;\n}\n.layout-topbar-right .layout-topbar-profile-menu__email {\n  color: var(--text-color-secondary);\n  font-size: 0.95rem;\n  font-weight: 500;\n}\n.layout-topbar-right .layout-topbar-profile-menu__section {\n  padding: 0;\n}\n.layout-topbar-right .layout-topbar-profile-menu__section + .layout-topbar-profile-menu__section {\n  border-top: 1px solid var(--surface-border);\n}\n.layout-topbar-right .layout-topbar-profile-menu__item {\n  display: flex;\n  width: 100%;\n  box-sizing: border-box;\n  align-items: center;\n  gap: 0.95rem;\n  padding: 1rem 1.6rem;\n  border-radius: 0;\n  color: var(--text-color);\n  font-size: 0.98rem;\n  font-weight: 600;\n  transition: background-color 0.2s ease, color 0.2s ease;\n}\n.layout-topbar-right .layout-topbar-profile-menu__item i {\n  width: 1.25rem;\n  text-align: center;\n  color: var(--text-color-secondary);\n  font-size: 1rem;\n  transition: color 0.2s ease;\n}\n.layout-topbar-right .layout-topbar-profile-menu__item:hover {\n  background: var(--layout-hover-surface);\n  color: var(--text-color);\n}\n.layout-topbar-right .layout-topbar-profile-menu__item:hover i {\n  color: var(--primary-color);\n}\n.layout-topbar-right .layout-topbar-profile-menu__item--danger {\n  color: #ef4444;\n}\n.layout-topbar-right .layout-topbar-profile-menu__item--danger i {\n  color: inherit;\n}\n.layout-topbar-right .layout-topbar-profile-menu__item--danger:hover {\n  background: rgba(239, 68, 68, 0.12);\n  color: #dc2626;\n}\n.layout-main-container {\n  margin-left: var(--sidebar-width);\n  transition: margin-left 0.3s ease;\n  background: var(--surface-ground);\n}\n.layout-sidebar-collapsed .layout-main-container {\n  margin-left: var(--sidebar-width);\n}\n.layout-sidebar-collapsed .layout-topbar {\n  left: var(--sidebar-width);\n  width: calc(100% - var(--sidebar-width));\n  transition: all 0.3s ease;\n}\n:host-context(.app-dark) .layout-sidebar {\n  background: var(--surface-ground);\n  border-right-color: var(--surface-border);\n  box-shadow: 18px 0 36px rgba(3, 9, 20, 0.35);\n}\n:host-context(.app-dark) .layout-sidebar-brand {\n  color: var(--text-color);\n}\n:host-context(.app-dark) .layout-sidebar-brand-copy small,\n:host-context(.app-dark) .layout-sidebar-footer-link {\n  color: var(--text-color-secondary);\n}\n:host-context(.app-dark) .layout-sidebar-divider,\n:host-context(.app-dark) .menu-separator {\n  background: var(--surface-border);\n}\n:host-context(.app-dark) .layout-sidebar-footer {\n  background: transparent;\n  border-top-color: var(--surface-border);\n}\n:host-context(.app-dark) .layout-sidebar-footer-link i,\n:host-context(.app-dark) .layout-menu ul a .layout-menuitem-icon {\n  background: var(--surface-overlay);\n  color: inherit;\n}\n:host-context(.app-dark) .layout-menu ul a {\n  color: var(--text-color-secondary);\n}\n:host-context(.app-dark) .layout-sidebar-footer-link:hover {\n  background: var(--layout-hover-surface);\n  color: var(--text-color);\n}\n:host-context(.app-dark) .layout-menu ul a:hover,\n:host-context(.app-dark) .layout-menu ul a.active-route {\n  background: var(--layout-hover-surface);\n  color: var(--primary-color) !important;\n}\n:host-context(.app-dark) .layout-menu ul a .layout-submenu-toggler {\n  color: var(--text-color-secondary);\n}\n:host-context(.app-dark) .layout-menu ul ul {\n  border-left-color: var(--surface-border);\n}\n:host-context(.app-dark) .layout-menu ul a.active-route::after {\n  background: var(--primary-color);\n}\n:host-context(.app-dark) .layout-topbar {\n  background-color: var(--surface-card);\n  border-bottom-color: var(--surface-border);\n}\n:host-context(.app-dark) .layout-topbar-search-container,\n:host-context(.app-dark) .layout-topbar-action-button,\n:host-context(.app-dark) .layout-topbar-profile {\n  background: var(--surface-overlay);\n  border-color: var(--surface-border);\n}\n:host-context(.app-dark) .layout-topbar-profile-menu {\n  background: var(--surface-overlay);\n  border-color: var(--surface-border);\n  box-shadow: 0 24px 60px -30px rgba(2, 8, 20, 0.5);\n}\n:host-context(.app-dark) .layout-topbar-search-container i,\n:host-context(.app-dark) .layout-topbar-action-button i,\n:host-context(.app-dark) .layout-topbar-profile-copy small {\n  color: var(--text-color-secondary);\n}\n:host-context(.app-dark) .layout-topbar-search-container input,\n:host-context(.app-dark) .layout-topbar-profile .profile-name,\n:host-context(.app-dark) .layout-topbar-profile-menu__name {\n  color: var(--text-color);\n}\n:host-context(.app-dark) .layout-topbar-profile-menu__header,\n:host-context(.app-dark) .layout-topbar-profile-menu__section + .layout-topbar-profile-menu__section {\n  border-color: var(--surface-border);\n}\n:host-context(.app-dark) .layout-topbar-profile-menu__item:hover {\n  background: var(--layout-hover-surface);\n  color: var(--primary-color);\n}\n:host-context(.app-dark) .layout-topbar-profile-menu__item i {\n  color: var(--text-color-secondary);\n}\n:host-context(.app-dark) .layout-topbar-profile-menu__item:hover i {\n  color: var(--primary-color);\n}\n:host-context(.app-dark) .layout-topbar-avatar {\n  background:\n    linear-gradient(\n      145deg,\n      color-mix(in srgb, var(--primary-color) 76%, #91b9ff),\n      var(--primary-color));\n}\n:host-context(.app-dark) .layout-topbar-profile-menu__item--danger {\n  color: #ff6b76;\n}\n:host-context(.app-dark) .layout-topbar-profile-menu__item--danger:hover {\n  background: color-mix(in srgb, #ef4444 14%, transparent);\n  color: #ff8a92;\n}\n/*# sourceMappingURL=layout.component.css.map */\n"] }]
  }], () => [{ type: ElementRef }, { type: LayoutService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppSidebar, { className: "AppSidebar", filePath: "app/layout/component/sidebar/sidebar.component.ts", lineNumber: 14 });
})();

// src/app/layout/component/footer/footer.component.ts
var AppFooter = class _AppFooter {
  static \u0275fac = function AppFooter_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppFooter)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppFooter, selectors: [["app-footer"]], decls: 2, vars: 0, consts: [[1, "layout-footer", "text-blue-500"]], template: function AppFooter_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275text(1, " MedFinder\n");
      \u0275\u0275domElementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppFooter, [{
    type: Component,
    args: [{ standalone: true, selector: "app-footer", template: '<div class="layout-footer text-blue-500">\r\n    MedFinder\r\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppFooter, { className: "AppFooter", filePath: "app/layout/component/footer/footer.component.ts", lineNumber: 8 });
})();

// src/app/layout/component/Topbar/topbar.component.ts
function AppTopbar_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "span", 18);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 19);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 20)(7, "a", 21);
    \u0275\u0275listener("click", function AppTopbar_div_20_Template_a_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeProfileMenu());
    });
    \u0275\u0275element(8, "i", 22);
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "Profile");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 20)(12, "button", 23);
    \u0275\u0275listener("click", function AppTopbar_div_20_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleTheme());
    });
    \u0275\u0275element(13, "i", 24);
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 20)(17, "a", 25);
    \u0275\u0275listener("click", function AppTopbar_div_20_Template_a_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeProfileMenu());
    });
    \u0275\u0275element(18, "i", 26);
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20, "Logout");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.profileName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.profileEmail);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r1.profilePageLink);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngClass", ctx_r1.layoutService.layoutConfig().darkTheme ? "pi-moon" : "pi-sun");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.layoutService.layoutConfig().darkTheme ? "Dark Mode" : "Light Mode", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r1.logoutPageLink);
  }
}
var AppTopbar = class _AppTopbar {
  layoutService;
  appState;
  router;
  elementRef;
  pageTitle = "";
  todayDate = "";
  isProfileMenuOpen = false;
  profilePageLink = ["/profile"];
  logoutPageLink = ["/auth/login"];
  constructor(layoutService, appState, router, elementRef) {
    this.layoutService = layoutService;
    this.appState = appState;
    this.router = router;
    this.elementRef = elementRef;
  }
  ngOnInit() {
    this.setDate();
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.setPageTitle();
      this.closeProfileMenu();
    });
    this.setPageTitle();
  }
  onDocumentClick(event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.closeProfileMenu();
    }
  }
  onEscapeKey() {
    this.closeProfileMenu();
  }
  setDate() {
    const today = /* @__PURE__ */ new Date();
    this.todayDate = today.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }
  setPageTitle() {
    let route = this.router.routerState.root;
    while (route.firstChild) {
      route = route.firstChild;
    }
    const routeData = route.snapshot.data;
    this.pageTitle = routeData["title"] || "Dashboard";
  }
  toggleProfileMenu(event) {
    event.stopPropagation();
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }
  closeProfileMenu() {
    this.isProfileMenuOpen = false;
  }
  onSearchChange(query) {
    this.appState.setSearchQuery(query);
  }
  get searchQuery() {
    return this.appState.searchQuery();
  }
  get profileInitials() {
    return this.appState.profile().initials;
  }
  get profileName() {
    return this.appState.profile().fullName;
  }
  get profileRole() {
    return this.appState.profile().role;
  }
  get profileEmail() {
    return this.appState.profile().email;
  }
  toggleTheme() {
    this.layoutService.layoutConfig.update((state2) => __spreadProps(__spreadValues({}, state2), {
      darkTheme: !state2.darkTheme
    }));
  }
  static \u0275fac = function AppTopbar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppTopbar)(\u0275\u0275directiveInject(LayoutService), \u0275\u0275directiveInject(PharmacyStateService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ElementRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppTopbar, selectors: [["app-topbar"]], hostBindings: function AppTopbar_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function AppTopbar_click_HostBindingHandler($event) {
        return ctx.onDocumentClick($event);
      }, \u0275\u0275resolveDocument)("keydown.escape", function AppTopbar_keydown_escape_HostBindingHandler() {
        return ctx.onEscapeKey();
      }, \u0275\u0275resolveDocument);
    }
  }, decls: 21, vars: 9, consts: [[1, "layout-topbar"], [1, "layout-topbar-left"], [1, "page-title"], [1, "page-date"], [1, "layout-topbar-right"], [1, "layout-topbar-search-container"], [1, "pi", "pi-search"], ["type", "text", "placeholder", "Search medicines, patients...", "autocomplete", "off", 3, "ngModelChange", "ngModel"], [1, "layout-topbar-profile-wrap"], ["type", "button", "aria-haspopup", "menu", 1, "layout-topbar-profile", 3, "click"], [1, "layout-topbar-avatar"], [1, "profile-details"], [1, "profile-name"], [1, "profile-role"], [1, "pi", "ml-2", "text-sm", 3, "ngClass"], ["class", "layout-topbar-profile-menu", "role", "menu", 4, "ngIf"], ["role", "menu", 1, "layout-topbar-profile-menu"], [1, "layout-topbar-profile-menu__header"], [1, "layout-topbar-profile-menu__name"], [1, "layout-topbar-profile-menu__email"], [1, "layout-topbar-profile-menu__section"], ["role", "menuitem", 1, "layout-topbar-profile-menu__item", 3, "click", "routerLink"], [1, "pi", "pi-user"], ["type", "button", "role", "menuitem", 1, "layout-topbar-profile-menu__item", 3, "click"], [1, "pi", 3, "ngClass"], ["role", "menuitem", 1, "layout-topbar-profile-menu__item", "layout-topbar-profile-menu__item--danger", 3, "click", "routerLink"], [1, "pi", "pi-sign-out"]], template: function AppTopbar_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "small", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 4)(7, "div", 5);
      \u0275\u0275element(8, "i", 6);
      \u0275\u0275elementStart(9, "input", 7);
      \u0275\u0275listener("ngModelChange", function AppTopbar_Template_input_ngModelChange_9_listener($event) {
        return ctx.onSearchChange($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 8)(11, "button", 9);
      \u0275\u0275listener("click", function AppTopbar_Template_button_click_11_listener($event) {
        return ctx.toggleProfileMenu($event);
      });
      \u0275\u0275elementStart(12, "div", 10);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 11)(15, "span", 12);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "span", 13);
      \u0275\u0275text(18);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(19, "i", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275template(20, AppTopbar_div_20_Template, 21, 6, "div", 15);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.pageTitle);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.todayDate);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngModel", ctx.searchQuery);
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-expanded", ctx.isProfileMenuOpen);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.profileInitials);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.profileName);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.profileRole);
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.isProfileMenuOpen ? "pi-angle-up" : "pi-angle-down");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isProfileMenuOpen);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterModule, RouterLink], styles: ["\n\n.layout-wrapper[_ngcontent-%COMP%] {\n  --sidebar-width: 250px;\n  --sidebar-collapsed-width: 80px;\n}\n.layout-wrapper.layout-sidebar-collapsed[_ngcontent-%COMP%] {\n  --sidebar-width: var(--sidebar-collapsed-width);\n}\n.layout-sidebar[_ngcontent-%COMP%] {\n  width: var(--sidebar-width);\n  transition: width 0.3s ease;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.layout-sidebar[_ngcontent-%COMP%]   .layout-sidebar-footer[_ngcontent-%COMP%] {\n  padding: 1rem;\n  padding-left: 2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.layout-sidebar.sidebar-collapsed[_ngcontent-%COMP%] {\n  width: var(--sidebar-collapsed-width);\n}\n.layout-sidebar.sidebar-collapsed[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.layout-sidebar.sidebar-collapsed[_ngcontent-%COMP%]   .hide-on-collapse[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.layout-sidebar.sidebar-collapsed[_ngcontent-%COMP%]     .layout-menuitem-text {\n  display: none;\n}\n.layout-sidebar.sidebar-collapsed[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  display: none;\n}\n.layout-sidebar.sidebar-collapsed[_ngcontent-%COMP%]   .layout-sidebar-footer-link[_ngcontent-%COMP%], \n.layout-sidebar.sidebar-collapsed[_ngcontent-%COMP%]   .collapse-button[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n.layout-sidebar.sidebar-collapsed[_ngcontent-%COMP%]   .layout-sidebar-footer[_ngcontent-%COMP%] {\n  align-items: center;\n  padding: 1rem 0;\n}\n.layout-sidebar.sidebar-collapsed[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.logout-link[_ngcontent-%COMP%] {\n  color: #ef4444 !important;\n}\n.logout-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.collapse-button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.layout-sidebar-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 1.5rem;\n  overflow: hidden;\n  transition: all 0.3s;\n}\n.layout-sidebar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 150px;\n  height: auto;\n  transition: all 0.3s;\n}\n.layout-sidebar.sidebar-collapsed[_ngcontent-%COMP%]   .layout-sidebar-brand[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 1rem 0;\n}\n.layout-sidebar.sidebar-collapsed[_ngcontent-%COMP%]   .layout-sidebar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 50px !important;\n  margin: 0 auto;\n  height: auto;\n}\n.layout-sidebar.sidebar-collapsed[_ngcontent-%COMP%]   .layout-sidebar-brand-copy[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  overflow: visible;\n}\n.layout-topbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 2rem;\n  background-color: rgba(255, 255, 255, 0.88);\n  border-bottom: 1px solid var(--surface-border);\n}\n.layout-topbar-left[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--text-color);\n  margin-bottom: 4px;\n}\n.layout-topbar-left[_ngcontent-%COMP%]   .page-date[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n  font-size: 0.875rem;\n}\n.layout-topbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-search-container[_ngcontent-%COMP%] {\n  position: relative;\n  background: var(--surface-card);\n  border-radius: 12px;\n  padding: 0.5rem 1rem;\n  display: flex;\n  align-items: center;\n  border: 1px solid var(--surface-border);\n  width: 300px;\n  height: 50px;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-search-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n  margin-right: 10px;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  outline: none;\n  width: 100%;\n  font-size: 0.9rem;\n  color: var(--text-color);\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-color-secondary);\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-action-button[_ngcontent-%COMP%] {\n  position: relative;\n  background: var(--surface-card);\n  border: 1px solid var(--surface-border);\n  border-radius: 12px;\n  width: 45px;\n  height: 45px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-action-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--text-color);\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-action-button[_ngcontent-%COMP%]:hover {\n  background: var(--surface-hover);\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-action-button[_ngcontent-%COMP%]   .notification-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -5px;\n  right: -5px;\n  background: #ef4444;\n  color: white;\n  font-size: 10px;\n  padding: 2px 6px;\n  border-radius: 50%;\n  border: 2px solid white;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 6px 12px;\n  border: 1px solid var(--surface-border);\n  border-radius: 12px;\n  background: var(--surface-card);\n  cursor: pointer;\n  transition: background 0.2s, box-shadow 0.2s;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile[_ngcontent-%COMP%]:hover {\n  background: var(--surface-hover);\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid rgba(59, 130, 246, 0.18);\n  outline-offset: 2px;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile[_ngcontent-%COMP%]   .layout-topbar-avatar[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  background:\n    linear-gradient(\n      135deg,\n      color-mix(in srgb, var(--primary-color) 72%, #8bb8ff),\n      var(--primary-color));\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.9rem;\n  box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.3);\n  flex-shrink: 0;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   .profile-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-color);\n  font-size: 0.95rem;\n  line-height: 1.2;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   .profile-role[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n  font-size: 0.8rem;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 0.8rem);\n  right: 0;\n  width: 280px;\n  background: var(--surface-card);\n  border: 1px solid var(--surface-border);\n  border-radius: 1.5rem;\n  box-shadow: 0 24px 60px -30px rgba(15, 23, 42, 0.35);\n  overflow: hidden;\n  z-index: 1000;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile-menu__header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n  padding: 1.55rem 1.6rem;\n  border-bottom: 1px solid var(--surface-border);\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile-menu__name[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  font-size: 1.15rem;\n  font-weight: 700;\n  line-height: 1.2;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile-menu__email[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n  font-size: 0.95rem;\n  font-weight: 500;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile-menu__section[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile-menu__section[_ngcontent-%COMP%]    + .layout-topbar-profile-menu__section[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--surface-border);\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile-menu__item[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  box-sizing: border-box;\n  align-items: center;\n  gap: 0.95rem;\n  padding: 1rem 1.6rem;\n  border-radius: 0;\n  color: var(--text-color);\n  font-size: 0.98rem;\n  font-weight: 600;\n  transition: background-color 0.2s ease, color 0.2s ease;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile-menu__item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  text-align: center;\n  color: var(--text-color-secondary);\n  font-size: 1rem;\n  transition: color 0.2s ease;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile-menu__item[_ngcontent-%COMP%]:hover {\n  background: var(--layout-hover-surface);\n  color: var(--text-color);\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile-menu__item[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile-menu__item--danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile-menu__item--danger[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile-menu__item--danger[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.12);\n  color: #dc2626;\n}\n.layout-main-container[_ngcontent-%COMP%] {\n  margin-left: var(--sidebar-width);\n  transition: margin-left 0.3s ease;\n  background: var(--surface-ground);\n}\n.layout-sidebar-collapsed[_ngcontent-%COMP%]   .layout-main-container[_ngcontent-%COMP%] {\n  margin-left: var(--sidebar-width);\n}\n.layout-sidebar-collapsed[_ngcontent-%COMP%]   .layout-topbar[_ngcontent-%COMP%] {\n  left: var(--sidebar-width);\n  width: calc(100% - var(--sidebar-width));\n  transition: all 0.3s ease;\n}\n.app-dark[_nghost-%COMP%]   .layout-sidebar[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-sidebar[_ngcontent-%COMP%] {\n  background: var(--surface-ground);\n  border-right-color: var(--surface-border);\n  box-shadow: 18px 0 36px rgba(3, 9, 20, 0.35);\n}\n.app-dark[_nghost-%COMP%]   .layout-sidebar-brand[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-sidebar-brand[_ngcontent-%COMP%] {\n  color: var(--text-color);\n}\n.app-dark[_nghost-%COMP%]   .layout-sidebar-brand-copy[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-sidebar-brand-copy[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   .layout-sidebar-footer-link[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-sidebar-footer-link[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n}\n.app-dark[_nghost-%COMP%]   .layout-sidebar-divider[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-sidebar-divider[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   .menu-separator[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .menu-separator[_ngcontent-%COMP%] {\n  background: var(--surface-border);\n}\n.app-dark[_nghost-%COMP%]   .layout-sidebar-footer[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-sidebar-footer[_ngcontent-%COMP%] {\n  background: transparent;\n  border-top-color: var(--surface-border);\n}\n.app-dark[_nghost-%COMP%]   .layout-sidebar-footer-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-sidebar-footer-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   .layout-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .layout-menuitem-icon[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .layout-menuitem-icon[_ngcontent-%COMP%] {\n  background: var(--surface-overlay);\n  color: inherit;\n}\n.app-dark[_nghost-%COMP%]   .layout-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n}\n.app-dark[_nghost-%COMP%]   .layout-sidebar-footer-link[_ngcontent-%COMP%]:hover, .app-dark   [_nghost-%COMP%]   .layout-sidebar-footer-link[_ngcontent-%COMP%]:hover {\n  background: var(--layout-hover-surface);\n  color: var(--text-color);\n}\n.app-dark[_nghost-%COMP%]   .layout-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .app-dark   [_nghost-%COMP%]   .layout-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, \n.app-dark[_nghost-%COMP%]   .layout-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a.active-route[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a.active-route[_ngcontent-%COMP%] {\n  background: var(--layout-hover-surface);\n  color: var(--primary-color) !important;\n}\n.app-dark[_nghost-%COMP%]   .layout-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .layout-submenu-toggler[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .layout-submenu-toggler[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n}\n.app-dark[_nghost-%COMP%]   .layout-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  border-left-color: var(--surface-border);\n}\n.app-dark[_nghost-%COMP%]   .layout-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a.active-route[_ngcontent-%COMP%]::after, .app-dark   [_nghost-%COMP%]   .layout-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a.active-route[_ngcontent-%COMP%]::after {\n  background: var(--primary-color);\n}\n.app-dark[_nghost-%COMP%]   .layout-topbar[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-topbar[_ngcontent-%COMP%] {\n  background-color: var(--surface-card);\n  border-bottom-color: var(--surface-border);\n}\n.app-dark[_nghost-%COMP%]   .layout-topbar-search-container[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-topbar-search-container[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   .layout-topbar-action-button[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-topbar-action-button[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   .layout-topbar-profile[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-topbar-profile[_ngcontent-%COMP%] {\n  background: var(--surface-overlay);\n  border-color: var(--surface-border);\n}\n.app-dark[_nghost-%COMP%]   .layout-topbar-profile-menu[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-topbar-profile-menu[_ngcontent-%COMP%] {\n  background: var(--surface-overlay);\n  border-color: var(--surface-border);\n  box-shadow: 0 24px 60px -30px rgba(2, 8, 20, 0.5);\n}\n.app-dark[_nghost-%COMP%]   .layout-topbar-search-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-topbar-search-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   .layout-topbar-action-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-topbar-action-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   .layout-topbar-profile-copy[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-topbar-profile-copy[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n}\n.app-dark[_nghost-%COMP%]   .layout-topbar-search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-topbar-search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   .layout-topbar-profile[_ngcontent-%COMP%]   .profile-name[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-topbar-profile[_ngcontent-%COMP%]   .profile-name[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   .layout-topbar-profile-menu__name[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-topbar-profile-menu__name[_ngcontent-%COMP%] {\n  color: var(--text-color);\n}\n.app-dark[_nghost-%COMP%]   .layout-topbar-profile-menu__header[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-topbar-profile-menu__header[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   .layout-topbar-profile-menu__section[_ngcontent-%COMP%]    + .layout-topbar-profile-menu__section[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-topbar-profile-menu__section[_ngcontent-%COMP%]    + .layout-topbar-profile-menu__section[_ngcontent-%COMP%] {\n  border-color: var(--surface-border);\n}\n.app-dark[_nghost-%COMP%]   .layout-topbar-profile-menu__item[_ngcontent-%COMP%]:hover, .app-dark   [_nghost-%COMP%]   .layout-topbar-profile-menu__item[_ngcontent-%COMP%]:hover {\n  background: var(--layout-hover-surface);\n  color: var(--primary-color);\n}\n.app-dark[_nghost-%COMP%]   .layout-topbar-profile-menu__item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-topbar-profile-menu__item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n}\n.app-dark[_nghost-%COMP%]   .layout-topbar-profile-menu__item[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-topbar-profile-menu__item[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n.app-dark[_nghost-%COMP%]   .layout-topbar-avatar[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-topbar-avatar[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      color-mix(in srgb, var(--primary-color) 76%, #91b9ff),\n      var(--primary-color));\n}\n.app-dark[_nghost-%COMP%]   .layout-topbar-profile-menu__item--danger[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-topbar-profile-menu__item--danger[_ngcontent-%COMP%] {\n  color: #ff6b76;\n}\n.app-dark[_nghost-%COMP%]   .layout-topbar-profile-menu__item--danger[_ngcontent-%COMP%]:hover, .app-dark   [_nghost-%COMP%]   .layout-topbar-profile-menu__item--danger[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, #ef4444 14%, transparent);\n  color: #ff8a92;\n}\n/*# sourceMappingURL=layout.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppTopbar, [{
    type: Component,
    args: [{ selector: "app-topbar", standalone: true, imports: [CommonModule, FormsModule, RouterModule], template: `<div class="layout-topbar">

    <div class="layout-topbar-left">
        <h2 class="page-title">{{ pageTitle }}</h2>
        <small class="page-date">{{ todayDate }}</small>
    </div>

    <div class="layout-topbar-right">
        <div class="layout-topbar-search-container">
            <i class="pi pi-search"></i>
            <input
                type="text"
                [ngModel]="searchQuery"
                (ngModelChange)="onSearchChange($event)"
                placeholder="Search medicines, patients..."
                autocomplete="off"
            />
        </div>

        <div class="layout-topbar-profile-wrap">
            <button type="button" class="layout-topbar-profile" (click)="toggleProfileMenu($event)"
                [attr.aria-expanded]="isProfileMenuOpen" aria-haspopup="menu">
                <div class="layout-topbar-avatar">{{ profileInitials }}</div>
                <div class="profile-details">
                    <span class="profile-name">{{ profileName }}</span>
                    <span class="profile-role">{{ profileRole }}</span>
                </div>
                <i class="pi ml-2 text-sm" [ngClass]="isProfileMenuOpen ? 'pi-angle-up' : 'pi-angle-down'"></i>
            </button>

            <div *ngIf="isProfileMenuOpen" class="layout-topbar-profile-menu" role="menu">
                <div class="layout-topbar-profile-menu__header">
                    <span class="layout-topbar-profile-menu__name">{{ profileName }}</span>
                    <span class="layout-topbar-profile-menu__email">{{ profileEmail }}</span>
                </div>

                <div class="layout-topbar-profile-menu__section">
                    <a class="layout-topbar-profile-menu__item" [routerLink]="profilePageLink"
                        (click)="closeProfileMenu()" role="menuitem">
                        <i class="pi pi-user"></i>
                        <span>Profile</span>
                    </a>
                </div>

                <div class="layout-topbar-profile-menu__section">
                    <button type="button" class="layout-topbar-profile-menu__item" (click)="toggleTheme()"
                        role="menuitem">
                        <i class="pi" [ngClass]="layoutService.layoutConfig().darkTheme ? 'pi-moon' : 'pi-sun'">
                        </i>

                        <span>
                            {{ layoutService.layoutConfig().darkTheme ? 'Dark Mode' : 'Light Mode' }}
                        </span>
                    </button>
                </div>

                <div class="layout-topbar-profile-menu__section">
                    <a class="layout-topbar-profile-menu__item layout-topbar-profile-menu__item--danger"
                        [routerLink]="logoutPageLink" (click)="closeProfileMenu()" role="menuitem">
                        <i class="pi pi-sign-out"></i>
                        <span>Logout</span>
                    </a>
                </div>
            </div>
        </div>
    </div>

</div>
`, styles: ["/* src/app/layout/layout.component.scss */\n.layout-wrapper {\n  --sidebar-width: 250px;\n  --sidebar-collapsed-width: 80px;\n}\n.layout-wrapper.layout-sidebar-collapsed {\n  --sidebar-width: var(--sidebar-collapsed-width);\n}\n.layout-sidebar {\n  width: var(--sidebar-width);\n  transition: width 0.3s ease;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.layout-sidebar .layout-sidebar-footer {\n  padding: 1rem;\n  padding-left: 2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.layout-sidebar.sidebar-collapsed {\n  width: var(--sidebar-collapsed-width);\n}\n.layout-sidebar.sidebar-collapsed small,\n.layout-sidebar.sidebar-collapsed .hide-on-collapse {\n  display: none !important;\n}\n.layout-sidebar.sidebar-collapsed ::ng-deep .layout-menuitem-text {\n  display: none;\n}\n.layout-sidebar.sidebar-collapsed .label {\n  display: none;\n}\n.layout-sidebar.sidebar-collapsed .layout-sidebar-footer-link,\n.layout-sidebar.sidebar-collapsed .collapse-button {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n.layout-sidebar.sidebar-collapsed .layout-sidebar-footer {\n  align-items: center;\n  padding: 1rem 0;\n}\n.layout-sidebar.sidebar-collapsed i {\n  font-size: 18px;\n}\n.logout-link {\n  color: #ef4444 !important;\n}\n.logout-link i {\n  color: inherit;\n}\n.collapse-button {\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.layout-sidebar-brand {\n  display: flex;\n  align-items: center;\n  padding: 1.5rem;\n  overflow: hidden;\n  transition: all 0.3s;\n}\n.layout-sidebar-brand img {\n  max-width: 150px;\n  height: auto;\n  transition: all 0.3s;\n}\n.layout-sidebar.sidebar-collapsed .layout-sidebar-brand {\n  justify-content: center;\n  padding: 1rem 0;\n}\n.layout-sidebar.sidebar-collapsed .layout-sidebar-brand img {\n  max-width: 50px !important;\n  margin: 0 auto;\n  height: auto;\n}\n.layout-sidebar.sidebar-collapsed .layout-sidebar-brand-copy {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  overflow: visible;\n}\n.layout-topbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 2rem;\n  background-color: rgba(255, 255, 255, 0.88);\n  border-bottom: 1px solid var(--surface-border);\n}\n.layout-topbar-left .page-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--text-color);\n  margin-bottom: 4px;\n}\n.layout-topbar-left .page-date {\n  color: var(--text-color-secondary);\n  font-size: 0.875rem;\n}\n.layout-topbar-right {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n}\n.layout-topbar-right .layout-topbar-search-container {\n  position: relative;\n  background: var(--surface-card);\n  border-radius: 12px;\n  padding: 0.5rem 1rem;\n  display: flex;\n  align-items: center;\n  border: 1px solid var(--surface-border);\n  width: 300px;\n  height: 50px;\n}\n.layout-topbar-right .layout-topbar-search-container i {\n  color: var(--text-color-secondary);\n  margin-right: 10px;\n}\n.layout-topbar-right .layout-topbar-search-container input {\n  border: none;\n  background: transparent;\n  outline: none;\n  width: 100%;\n  font-size: 0.9rem;\n  color: var(--text-color);\n}\n.layout-topbar-right .layout-topbar-search-container input::placeholder {\n  color: var(--text-color-secondary);\n}\n.layout-topbar-right .layout-topbar-action-button {\n  position: relative;\n  background: var(--surface-card);\n  border: 1px solid var(--surface-border);\n  border-radius: 12px;\n  width: 45px;\n  height: 45px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.layout-topbar-right .layout-topbar-action-button i {\n  font-size: 1.2rem;\n  color: var(--text-color);\n}\n.layout-topbar-right .layout-topbar-action-button:hover {\n  background: var(--surface-hover);\n}\n.layout-topbar-right .layout-topbar-action-button .notification-badge {\n  position: absolute;\n  top: -5px;\n  right: -5px;\n  background: #ef4444;\n  color: white;\n  font-size: 10px;\n  padding: 2px 6px;\n  border-radius: 50%;\n  border: 2px solid white;\n}\n.layout-topbar-right .layout-topbar-profile-wrap {\n  position: relative;\n}\n.layout-topbar-right .layout-topbar-profile {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 6px 12px;\n  border: 1px solid var(--surface-border);\n  border-radius: 12px;\n  background: var(--surface-card);\n  cursor: pointer;\n  transition: background 0.2s, box-shadow 0.2s;\n}\n.layout-topbar-right .layout-topbar-profile:hover {\n  background: var(--surface-hover);\n}\n.layout-topbar-right .layout-topbar-profile:focus-visible {\n  outline: 2px solid rgba(59, 130, 246, 0.18);\n  outline-offset: 2px;\n}\n.layout-topbar-right .layout-topbar-profile .layout-topbar-avatar {\n  width: 42px;\n  height: 42px;\n  background:\n    linear-gradient(\n      135deg,\n      color-mix(in srgb, var(--primary-color) 72%, #8bb8ff),\n      var(--primary-color));\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.9rem;\n  box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.3);\n  flex-shrink: 0;\n}\n.layout-topbar-right .layout-topbar-profile .profile-details {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n}\n.layout-topbar-right .layout-topbar-profile .profile-details .profile-name {\n  font-weight: 600;\n  color: var(--text-color);\n  font-size: 0.95rem;\n  line-height: 1.2;\n}\n.layout-topbar-right .layout-topbar-profile .profile-details .profile-role {\n  color: var(--text-color-secondary);\n  font-size: 0.8rem;\n}\n.layout-topbar-right .layout-topbar-profile-menu {\n  position: absolute;\n  top: calc(100% + 0.8rem);\n  right: 0;\n  width: 280px;\n  background: var(--surface-card);\n  border: 1px solid var(--surface-border);\n  border-radius: 1.5rem;\n  box-shadow: 0 24px 60px -30px rgba(15, 23, 42, 0.35);\n  overflow: hidden;\n  z-index: 1000;\n}\n.layout-topbar-right .layout-topbar-profile-menu__header {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n  padding: 1.55rem 1.6rem;\n  border-bottom: 1px solid var(--surface-border);\n}\n.layout-topbar-right .layout-topbar-profile-menu__name {\n  color: var(--text-color);\n  font-size: 1.15rem;\n  font-weight: 700;\n  line-height: 1.2;\n}\n.layout-topbar-right .layout-topbar-profile-menu__email {\n  color: var(--text-color-secondary);\n  font-size: 0.95rem;\n  font-weight: 500;\n}\n.layout-topbar-right .layout-topbar-profile-menu__section {\n  padding: 0;\n}\n.layout-topbar-right .layout-topbar-profile-menu__section + .layout-topbar-profile-menu__section {\n  border-top: 1px solid var(--surface-border);\n}\n.layout-topbar-right .layout-topbar-profile-menu__item {\n  display: flex;\n  width: 100%;\n  box-sizing: border-box;\n  align-items: center;\n  gap: 0.95rem;\n  padding: 1rem 1.6rem;\n  border-radius: 0;\n  color: var(--text-color);\n  font-size: 0.98rem;\n  font-weight: 600;\n  transition: background-color 0.2s ease, color 0.2s ease;\n}\n.layout-topbar-right .layout-topbar-profile-menu__item i {\n  width: 1.25rem;\n  text-align: center;\n  color: var(--text-color-secondary);\n  font-size: 1rem;\n  transition: color 0.2s ease;\n}\n.layout-topbar-right .layout-topbar-profile-menu__item:hover {\n  background: var(--layout-hover-surface);\n  color: var(--text-color);\n}\n.layout-topbar-right .layout-topbar-profile-menu__item:hover i {\n  color: var(--primary-color);\n}\n.layout-topbar-right .layout-topbar-profile-menu__item--danger {\n  color: #ef4444;\n}\n.layout-topbar-right .layout-topbar-profile-menu__item--danger i {\n  color: inherit;\n}\n.layout-topbar-right .layout-topbar-profile-menu__item--danger:hover {\n  background: rgba(239, 68, 68, 0.12);\n  color: #dc2626;\n}\n.layout-main-container {\n  margin-left: var(--sidebar-width);\n  transition: margin-left 0.3s ease;\n  background: var(--surface-ground);\n}\n.layout-sidebar-collapsed .layout-main-container {\n  margin-left: var(--sidebar-width);\n}\n.layout-sidebar-collapsed .layout-topbar {\n  left: var(--sidebar-width);\n  width: calc(100% - var(--sidebar-width));\n  transition: all 0.3s ease;\n}\n:host-context(.app-dark) .layout-sidebar {\n  background: var(--surface-ground);\n  border-right-color: var(--surface-border);\n  box-shadow: 18px 0 36px rgba(3, 9, 20, 0.35);\n}\n:host-context(.app-dark) .layout-sidebar-brand {\n  color: var(--text-color);\n}\n:host-context(.app-dark) .layout-sidebar-brand-copy small,\n:host-context(.app-dark) .layout-sidebar-footer-link {\n  color: var(--text-color-secondary);\n}\n:host-context(.app-dark) .layout-sidebar-divider,\n:host-context(.app-dark) .menu-separator {\n  background: var(--surface-border);\n}\n:host-context(.app-dark) .layout-sidebar-footer {\n  background: transparent;\n  border-top-color: var(--surface-border);\n}\n:host-context(.app-dark) .layout-sidebar-footer-link i,\n:host-context(.app-dark) .layout-menu ul a .layout-menuitem-icon {\n  background: var(--surface-overlay);\n  color: inherit;\n}\n:host-context(.app-dark) .layout-menu ul a {\n  color: var(--text-color-secondary);\n}\n:host-context(.app-dark) .layout-sidebar-footer-link:hover {\n  background: var(--layout-hover-surface);\n  color: var(--text-color);\n}\n:host-context(.app-dark) .layout-menu ul a:hover,\n:host-context(.app-dark) .layout-menu ul a.active-route {\n  background: var(--layout-hover-surface);\n  color: var(--primary-color) !important;\n}\n:host-context(.app-dark) .layout-menu ul a .layout-submenu-toggler {\n  color: var(--text-color-secondary);\n}\n:host-context(.app-dark) .layout-menu ul ul {\n  border-left-color: var(--surface-border);\n}\n:host-context(.app-dark) .layout-menu ul a.active-route::after {\n  background: var(--primary-color);\n}\n:host-context(.app-dark) .layout-topbar {\n  background-color: var(--surface-card);\n  border-bottom-color: var(--surface-border);\n}\n:host-context(.app-dark) .layout-topbar-search-container,\n:host-context(.app-dark) .layout-topbar-action-button,\n:host-context(.app-dark) .layout-topbar-profile {\n  background: var(--surface-overlay);\n  border-color: var(--surface-border);\n}\n:host-context(.app-dark) .layout-topbar-profile-menu {\n  background: var(--surface-overlay);\n  border-color: var(--surface-border);\n  box-shadow: 0 24px 60px -30px rgba(2, 8, 20, 0.5);\n}\n:host-context(.app-dark) .layout-topbar-search-container i,\n:host-context(.app-dark) .layout-topbar-action-button i,\n:host-context(.app-dark) .layout-topbar-profile-copy small {\n  color: var(--text-color-secondary);\n}\n:host-context(.app-dark) .layout-topbar-search-container input,\n:host-context(.app-dark) .layout-topbar-profile .profile-name,\n:host-context(.app-dark) .layout-topbar-profile-menu__name {\n  color: var(--text-color);\n}\n:host-context(.app-dark) .layout-topbar-profile-menu__header,\n:host-context(.app-dark) .layout-topbar-profile-menu__section + .layout-topbar-profile-menu__section {\n  border-color: var(--surface-border);\n}\n:host-context(.app-dark) .layout-topbar-profile-menu__item:hover {\n  background: var(--layout-hover-surface);\n  color: var(--primary-color);\n}\n:host-context(.app-dark) .layout-topbar-profile-menu__item i {\n  color: var(--text-color-secondary);\n}\n:host-context(.app-dark) .layout-topbar-profile-menu__item:hover i {\n  color: var(--primary-color);\n}\n:host-context(.app-dark) .layout-topbar-avatar {\n  background:\n    linear-gradient(\n      145deg,\n      color-mix(in srgb, var(--primary-color) 76%, #91b9ff),\n      var(--primary-color));\n}\n:host-context(.app-dark) .layout-topbar-profile-menu__item--danger {\n  color: #ff6b76;\n}\n:host-context(.app-dark) .layout-topbar-profile-menu__item--danger:hover {\n  background: color-mix(in srgb, #ef4444 14%, transparent);\n  color: #ff8a92;\n}\n/*# sourceMappingURL=layout.component.css.map */\n"] }]
  }], () => [{ type: LayoutService }, { type: PharmacyStateService }, { type: Router }, { type: ElementRef }], { onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }], onEscapeKey: [{
    type: HostListener,
    args: ["document:keydown.escape"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppTopbar, { className: "AppTopbar", filePath: "app/layout/component/topbar/topbar.component.ts", lineNumber: 16 });
})();

// src/app/layout/component/layout.component.ts
var AppLayout = class _AppLayout {
  layoutService;
  renderer;
  router;
  overlayMenuOpenSubscription;
  menuOutsideClickListener;
  appSidebar;
  appTopBar;
  constructor(layoutService, renderer, router) {
    this.layoutService = layoutService;
    this.renderer = renderer;
    this.router = router;
    this.overlayMenuOpenSubscription = this.layoutService.overlayOpen$.subscribe(() => {
      if (!this.menuOutsideClickListener) {
        this.menuOutsideClickListener = this.renderer.listen("document", "click", (event) => {
          if (this.isOutsideClicked(event)) {
            this.hideMenu();
          }
        });
      }
      if (this.layoutService.layoutState().staticMenuMobileActive) {
        this.blockBodyScroll();
      }
    });
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.hideMenu();
    });
  }
  isOutsideClicked(event) {
    const sidebarEl = document.querySelector(".layout-sidebar");
    const topbarEl = document.querySelector(".layout-menu-button");
    const eventTarget = event.target;
    return !(sidebarEl?.isSameNode(eventTarget) || sidebarEl?.contains(eventTarget) || topbarEl?.isSameNode(eventTarget) || topbarEl?.contains(eventTarget));
  }
  hideMenu() {
    this.layoutService.layoutState.update((prev) => __spreadProps(__spreadValues({}, prev), { overlayMenuActive: false, staticMenuMobileActive: false, menuHoverActive: false }));
    if (this.menuOutsideClickListener) {
      this.menuOutsideClickListener();
      this.menuOutsideClickListener = null;
    }
    this.unblockBodyScroll();
  }
  blockBodyScroll() {
    if (document.body.classList) {
      document.body.classList.add("blocked-scroll");
    } else {
      document.body.className += " blocked-scroll";
    }
  }
  unblockBodyScroll() {
    if (document.body.classList) {
      document.body.classList.remove("blocked-scroll");
    } else {
      document.body.className = document.body.className.replace(new RegExp("(^|\\b)" + "blocked-scroll".split(" ").join("|") + "(\\b|$)", "gi"), " ");
    }
  }
  get containerClass() {
    return {
      "layout-overlay": this.layoutService.layoutConfig().menuMode === "overlay",
      "layout-static": this.layoutService.layoutConfig().menuMode === "static",
      "layout-static-inactive": this.layoutService.layoutState().staticMenuDesktopInactive && this.layoutService.layoutConfig().menuMode === "static",
      "layout-overlay-active": this.layoutService.layoutState().overlayMenuActive,
      "layout-mobile-active": this.layoutService.layoutState().staticMenuMobileActive,
      "layout-sidebar-collapsed": this.layoutService.isCollapsed
    };
  }
  ngOnDestroy() {
    if (this.overlayMenuOpenSubscription) {
      this.overlayMenuOpenSubscription.unsubscribe();
    }
    if (this.menuOutsideClickListener) {
      this.menuOutsideClickListener();
    }
  }
  static \u0275fac = function AppLayout_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppLayout)(\u0275\u0275directiveInject(LayoutService), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppLayout, selectors: [["app-layout"]], viewQuery: function AppLayout_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(AppSidebar, 5);
      \u0275\u0275viewQuery(AppTopbar, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.appSidebar = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.appTopBar = _t.first);
    }
  }, decls: 8, vars: 1, consts: [[1, "layout-wrapper", 3, "ngClass"], [1, "layout-main-container"], [1, "layout-main"], [1, "layout-mask", "animate-fadein"]], template: function AppLayout_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-topbar")(2, "app-sidebar");
      \u0275\u0275elementStart(3, "div", 1)(4, "div", 2);
      \u0275\u0275element(5, "router-outlet");
      \u0275\u0275elementEnd();
      \u0275\u0275element(6, "app-footer");
      \u0275\u0275elementEnd();
      \u0275\u0275element(7, "div", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", ctx.containerClass);
    }
  }, dependencies: [CommonModule, NgClass, AppTopbar, AppSidebar, RouterModule, RouterOutlet, AppFooter], styles: ["\n\n.layout-wrapper[_ngcontent-%COMP%] {\n  --sidebar-width: 250px;\n  --sidebar-collapsed-width: 80px;\n}\n.layout-wrapper.layout-sidebar-collapsed[_ngcontent-%COMP%] {\n  --sidebar-width: var(--sidebar-collapsed-width);\n}\n.layout-sidebar[_ngcontent-%COMP%] {\n  width: var(--sidebar-width);\n  transition: width 0.3s ease;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.layout-sidebar[_ngcontent-%COMP%]   .layout-sidebar-footer[_ngcontent-%COMP%] {\n  padding: 1rem;\n  padding-left: 2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.layout-sidebar.sidebar-collapsed[_ngcontent-%COMP%] {\n  width: var(--sidebar-collapsed-width);\n}\n.layout-sidebar.sidebar-collapsed[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.layout-sidebar.sidebar-collapsed[_ngcontent-%COMP%]   .hide-on-collapse[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.layout-sidebar.sidebar-collapsed[_ngcontent-%COMP%]     .layout-menuitem-text {\n  display: none;\n}\n.layout-sidebar.sidebar-collapsed[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  display: none;\n}\n.layout-sidebar.sidebar-collapsed[_ngcontent-%COMP%]   .layout-sidebar-footer-link[_ngcontent-%COMP%], \n.layout-sidebar.sidebar-collapsed[_ngcontent-%COMP%]   .collapse-button[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n.layout-sidebar.sidebar-collapsed[_ngcontent-%COMP%]   .layout-sidebar-footer[_ngcontent-%COMP%] {\n  align-items: center;\n  padding: 1rem 0;\n}\n.layout-sidebar.sidebar-collapsed[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.logout-link[_ngcontent-%COMP%] {\n  color: #ef4444 !important;\n}\n.logout-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.collapse-button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.layout-sidebar-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 1.5rem;\n  overflow: hidden;\n  transition: all 0.3s;\n}\n.layout-sidebar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 150px;\n  height: auto;\n  transition: all 0.3s;\n}\n.layout-sidebar.sidebar-collapsed[_ngcontent-%COMP%]   .layout-sidebar-brand[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 1rem 0;\n}\n.layout-sidebar.sidebar-collapsed[_ngcontent-%COMP%]   .layout-sidebar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 50px !important;\n  margin: 0 auto;\n  height: auto;\n}\n.layout-sidebar.sidebar-collapsed[_ngcontent-%COMP%]   .layout-sidebar-brand-copy[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  overflow: visible;\n}\n.layout-topbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 2rem;\n  background-color: rgba(255, 255, 255, 0.88);\n  border-bottom: 1px solid var(--surface-border);\n}\n.layout-topbar-left[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--text-color);\n  margin-bottom: 4px;\n}\n.layout-topbar-left[_ngcontent-%COMP%]   .page-date[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n  font-size: 0.875rem;\n}\n.layout-topbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-search-container[_ngcontent-%COMP%] {\n  position: relative;\n  background: var(--surface-card);\n  border-radius: 12px;\n  padding: 0.5rem 1rem;\n  display: flex;\n  align-items: center;\n  border: 1px solid var(--surface-border);\n  width: 300px;\n  height: 50px;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-search-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n  margin-right: 10px;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  outline: none;\n  width: 100%;\n  font-size: 0.9rem;\n  color: var(--text-color);\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-color-secondary);\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-action-button[_ngcontent-%COMP%] {\n  position: relative;\n  background: var(--surface-card);\n  border: 1px solid var(--surface-border);\n  border-radius: 12px;\n  width: 45px;\n  height: 45px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-action-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--text-color);\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-action-button[_ngcontent-%COMP%]:hover {\n  background: var(--surface-hover);\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-action-button[_ngcontent-%COMP%]   .notification-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -5px;\n  right: -5px;\n  background: #ef4444;\n  color: white;\n  font-size: 10px;\n  padding: 2px 6px;\n  border-radius: 50%;\n  border: 2px solid white;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 6px 12px;\n  border: 1px solid var(--surface-border);\n  border-radius: 12px;\n  background: var(--surface-card);\n  cursor: pointer;\n  transition: background 0.2s, box-shadow 0.2s;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile[_ngcontent-%COMP%]:hover {\n  background: var(--surface-hover);\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid rgba(59, 130, 246, 0.18);\n  outline-offset: 2px;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile[_ngcontent-%COMP%]   .layout-topbar-avatar[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  background:\n    linear-gradient(\n      135deg,\n      color-mix(in srgb, var(--primary-color) 72%, #8bb8ff),\n      var(--primary-color));\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.9rem;\n  box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.3);\n  flex-shrink: 0;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   .profile-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-color);\n  font-size: 0.95rem;\n  line-height: 1.2;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]   .profile-role[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n  font-size: 0.8rem;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 0.8rem);\n  right: 0;\n  width: 280px;\n  background: var(--surface-card);\n  border: 1px solid var(--surface-border);\n  border-radius: 1.5rem;\n  box-shadow: 0 24px 60px -30px rgba(15, 23, 42, 0.35);\n  overflow: hidden;\n  z-index: 1000;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile-menu__header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n  padding: 1.55rem 1.6rem;\n  border-bottom: 1px solid var(--surface-border);\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile-menu__name[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  font-size: 1.15rem;\n  font-weight: 700;\n  line-height: 1.2;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile-menu__email[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n  font-size: 0.95rem;\n  font-weight: 500;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile-menu__section[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile-menu__section[_ngcontent-%COMP%]    + .layout-topbar-profile-menu__section[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--surface-border);\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile-menu__item[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  box-sizing: border-box;\n  align-items: center;\n  gap: 0.95rem;\n  padding: 1rem 1.6rem;\n  border-radius: 0;\n  color: var(--text-color);\n  font-size: 0.98rem;\n  font-weight: 600;\n  transition: background-color 0.2s ease, color 0.2s ease;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile-menu__item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  text-align: center;\n  color: var(--text-color-secondary);\n  font-size: 1rem;\n  transition: color 0.2s ease;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile-menu__item[_ngcontent-%COMP%]:hover {\n  background: var(--layout-hover-surface);\n  color: var(--text-color);\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile-menu__item[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile-menu__item--danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile-menu__item--danger[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.layout-topbar-right[_ngcontent-%COMP%]   .layout-topbar-profile-menu__item--danger[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.12);\n  color: #dc2626;\n}\n.layout-main-container[_ngcontent-%COMP%] {\n  margin-left: var(--sidebar-width);\n  transition: margin-left 0.3s ease;\n  background: var(--surface-ground);\n}\n.layout-sidebar-collapsed[_ngcontent-%COMP%]   .layout-main-container[_ngcontent-%COMP%] {\n  margin-left: var(--sidebar-width);\n}\n.layout-sidebar-collapsed[_ngcontent-%COMP%]   .layout-topbar[_ngcontent-%COMP%] {\n  left: var(--sidebar-width);\n  width: calc(100% - var(--sidebar-width));\n  transition: all 0.3s ease;\n}\n.app-dark[_nghost-%COMP%]   .layout-sidebar[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-sidebar[_ngcontent-%COMP%] {\n  background: var(--surface-ground);\n  border-right-color: var(--surface-border);\n  box-shadow: 18px 0 36px rgba(3, 9, 20, 0.35);\n}\n.app-dark[_nghost-%COMP%]   .layout-sidebar-brand[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-sidebar-brand[_ngcontent-%COMP%] {\n  color: var(--text-color);\n}\n.app-dark[_nghost-%COMP%]   .layout-sidebar-brand-copy[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-sidebar-brand-copy[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   .layout-sidebar-footer-link[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-sidebar-footer-link[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n}\n.app-dark[_nghost-%COMP%]   .layout-sidebar-divider[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-sidebar-divider[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   .menu-separator[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .menu-separator[_ngcontent-%COMP%] {\n  background: var(--surface-border);\n}\n.app-dark[_nghost-%COMP%]   .layout-sidebar-footer[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-sidebar-footer[_ngcontent-%COMP%] {\n  background: transparent;\n  border-top-color: var(--surface-border);\n}\n.app-dark[_nghost-%COMP%]   .layout-sidebar-footer-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-sidebar-footer-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   .layout-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .layout-menuitem-icon[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .layout-menuitem-icon[_ngcontent-%COMP%] {\n  background: var(--surface-overlay);\n  color: inherit;\n}\n.app-dark[_nghost-%COMP%]   .layout-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n}\n.app-dark[_nghost-%COMP%]   .layout-sidebar-footer-link[_ngcontent-%COMP%]:hover, .app-dark   [_nghost-%COMP%]   .layout-sidebar-footer-link[_ngcontent-%COMP%]:hover {\n  background: var(--layout-hover-surface);\n  color: var(--text-color);\n}\n.app-dark[_nghost-%COMP%]   .layout-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .app-dark   [_nghost-%COMP%]   .layout-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, \n.app-dark[_nghost-%COMP%]   .layout-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a.active-route[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a.active-route[_ngcontent-%COMP%] {\n  background: var(--layout-hover-surface);\n  color: var(--primary-color) !important;\n}\n.app-dark[_nghost-%COMP%]   .layout-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .layout-submenu-toggler[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .layout-submenu-toggler[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n}\n.app-dark[_nghost-%COMP%]   .layout-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  border-left-color: var(--surface-border);\n}\n.app-dark[_nghost-%COMP%]   .layout-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a.active-route[_ngcontent-%COMP%]::after, .app-dark   [_nghost-%COMP%]   .layout-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a.active-route[_ngcontent-%COMP%]::after {\n  background: var(--primary-color);\n}\n.app-dark[_nghost-%COMP%]   .layout-topbar[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-topbar[_ngcontent-%COMP%] {\n  background-color: var(--surface-card);\n  border-bottom-color: var(--surface-border);\n}\n.app-dark[_nghost-%COMP%]   .layout-topbar-search-container[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-topbar-search-container[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   .layout-topbar-action-button[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-topbar-action-button[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   .layout-topbar-profile[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-topbar-profile[_ngcontent-%COMP%] {\n  background: var(--surface-overlay);\n  border-color: var(--surface-border);\n}\n.app-dark[_nghost-%COMP%]   .layout-topbar-profile-menu[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-topbar-profile-menu[_ngcontent-%COMP%] {\n  background: var(--surface-overlay);\n  border-color: var(--surface-border);\n  box-shadow: 0 24px 60px -30px rgba(2, 8, 20, 0.5);\n}\n.app-dark[_nghost-%COMP%]   .layout-topbar-search-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-topbar-search-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   .layout-topbar-action-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-topbar-action-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   .layout-topbar-profile-copy[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-topbar-profile-copy[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n}\n.app-dark[_nghost-%COMP%]   .layout-topbar-search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-topbar-search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   .layout-topbar-profile[_ngcontent-%COMP%]   .profile-name[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-topbar-profile[_ngcontent-%COMP%]   .profile-name[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   .layout-topbar-profile-menu__name[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-topbar-profile-menu__name[_ngcontent-%COMP%] {\n  color: var(--text-color);\n}\n.app-dark[_nghost-%COMP%]   .layout-topbar-profile-menu__header[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-topbar-profile-menu__header[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   .layout-topbar-profile-menu__section[_ngcontent-%COMP%]    + .layout-topbar-profile-menu__section[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-topbar-profile-menu__section[_ngcontent-%COMP%]    + .layout-topbar-profile-menu__section[_ngcontent-%COMP%] {\n  border-color: var(--surface-border);\n}\n.app-dark[_nghost-%COMP%]   .layout-topbar-profile-menu__item[_ngcontent-%COMP%]:hover, .app-dark   [_nghost-%COMP%]   .layout-topbar-profile-menu__item[_ngcontent-%COMP%]:hover {\n  background: var(--layout-hover-surface);\n  color: var(--primary-color);\n}\n.app-dark[_nghost-%COMP%]   .layout-topbar-profile-menu__item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-topbar-profile-menu__item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n}\n.app-dark[_nghost-%COMP%]   .layout-topbar-profile-menu__item[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-topbar-profile-menu__item[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n.app-dark[_nghost-%COMP%]   .layout-topbar-avatar[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-topbar-avatar[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      color-mix(in srgb, var(--primary-color) 76%, #91b9ff),\n      var(--primary-color));\n}\n.app-dark[_nghost-%COMP%]   .layout-topbar-profile-menu__item--danger[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .layout-topbar-profile-menu__item--danger[_ngcontent-%COMP%] {\n  color: #ff6b76;\n}\n.app-dark[_nghost-%COMP%]   .layout-topbar-profile-menu__item--danger[_ngcontent-%COMP%]:hover, .app-dark   [_nghost-%COMP%]   .layout-topbar-profile-menu__item--danger[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, #ef4444 14%, transparent);\n  color: #ff8a92;\n}\n/*# sourceMappingURL=layout.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppLayout, [{
    type: Component,
    args: [{ selector: "app-layout", standalone: true, imports: [CommonModule, AppTopbar, AppSidebar, RouterModule, AppFooter], template: '<div class="layout-wrapper" [ngClass]="containerClass">\r\n    <app-topbar></app-topbar>\r\n    <app-sidebar></app-sidebar>\r\n    <div class="layout-main-container">\r\n        <div class="layout-main">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n        <app-footer></app-footer>\r\n    </div>\r\n    <div class="layout-mask animate-fadein"></div>\r\n</div>', styles: ["/* src/app/layout/layout.component.scss */\n.layout-wrapper {\n  --sidebar-width: 250px;\n  --sidebar-collapsed-width: 80px;\n}\n.layout-wrapper.layout-sidebar-collapsed {\n  --sidebar-width: var(--sidebar-collapsed-width);\n}\n.layout-sidebar {\n  width: var(--sidebar-width);\n  transition: width 0.3s ease;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.layout-sidebar .layout-sidebar-footer {\n  padding: 1rem;\n  padding-left: 2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.layout-sidebar.sidebar-collapsed {\n  width: var(--sidebar-collapsed-width);\n}\n.layout-sidebar.sidebar-collapsed small,\n.layout-sidebar.sidebar-collapsed .hide-on-collapse {\n  display: none !important;\n}\n.layout-sidebar.sidebar-collapsed ::ng-deep .layout-menuitem-text {\n  display: none;\n}\n.layout-sidebar.sidebar-collapsed .label {\n  display: none;\n}\n.layout-sidebar.sidebar-collapsed .layout-sidebar-footer-link,\n.layout-sidebar.sidebar-collapsed .collapse-button {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n.layout-sidebar.sidebar-collapsed .layout-sidebar-footer {\n  align-items: center;\n  padding: 1rem 0;\n}\n.layout-sidebar.sidebar-collapsed i {\n  font-size: 18px;\n}\n.logout-link {\n  color: #ef4444 !important;\n}\n.logout-link i {\n  color: inherit;\n}\n.collapse-button {\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.layout-sidebar-brand {\n  display: flex;\n  align-items: center;\n  padding: 1.5rem;\n  overflow: hidden;\n  transition: all 0.3s;\n}\n.layout-sidebar-brand img {\n  max-width: 150px;\n  height: auto;\n  transition: all 0.3s;\n}\n.layout-sidebar.sidebar-collapsed .layout-sidebar-brand {\n  justify-content: center;\n  padding: 1rem 0;\n}\n.layout-sidebar.sidebar-collapsed .layout-sidebar-brand img {\n  max-width: 50px !important;\n  margin: 0 auto;\n  height: auto;\n}\n.layout-sidebar.sidebar-collapsed .layout-sidebar-brand-copy {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  overflow: visible;\n}\n.layout-topbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 2rem;\n  background-color: rgba(255, 255, 255, 0.88);\n  border-bottom: 1px solid var(--surface-border);\n}\n.layout-topbar-left .page-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--text-color);\n  margin-bottom: 4px;\n}\n.layout-topbar-left .page-date {\n  color: var(--text-color-secondary);\n  font-size: 0.875rem;\n}\n.layout-topbar-right {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n}\n.layout-topbar-right .layout-topbar-search-container {\n  position: relative;\n  background: var(--surface-card);\n  border-radius: 12px;\n  padding: 0.5rem 1rem;\n  display: flex;\n  align-items: center;\n  border: 1px solid var(--surface-border);\n  width: 300px;\n  height: 50px;\n}\n.layout-topbar-right .layout-topbar-search-container i {\n  color: var(--text-color-secondary);\n  margin-right: 10px;\n}\n.layout-topbar-right .layout-topbar-search-container input {\n  border: none;\n  background: transparent;\n  outline: none;\n  width: 100%;\n  font-size: 0.9rem;\n  color: var(--text-color);\n}\n.layout-topbar-right .layout-topbar-search-container input::placeholder {\n  color: var(--text-color-secondary);\n}\n.layout-topbar-right .layout-topbar-action-button {\n  position: relative;\n  background: var(--surface-card);\n  border: 1px solid var(--surface-border);\n  border-radius: 12px;\n  width: 45px;\n  height: 45px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.layout-topbar-right .layout-topbar-action-button i {\n  font-size: 1.2rem;\n  color: var(--text-color);\n}\n.layout-topbar-right .layout-topbar-action-button:hover {\n  background: var(--surface-hover);\n}\n.layout-topbar-right .layout-topbar-action-button .notification-badge {\n  position: absolute;\n  top: -5px;\n  right: -5px;\n  background: #ef4444;\n  color: white;\n  font-size: 10px;\n  padding: 2px 6px;\n  border-radius: 50%;\n  border: 2px solid white;\n}\n.layout-topbar-right .layout-topbar-profile-wrap {\n  position: relative;\n}\n.layout-topbar-right .layout-topbar-profile {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 6px 12px;\n  border: 1px solid var(--surface-border);\n  border-radius: 12px;\n  background: var(--surface-card);\n  cursor: pointer;\n  transition: background 0.2s, box-shadow 0.2s;\n}\n.layout-topbar-right .layout-topbar-profile:hover {\n  background: var(--surface-hover);\n}\n.layout-topbar-right .layout-topbar-profile:focus-visible {\n  outline: 2px solid rgba(59, 130, 246, 0.18);\n  outline-offset: 2px;\n}\n.layout-topbar-right .layout-topbar-profile .layout-topbar-avatar {\n  width: 42px;\n  height: 42px;\n  background:\n    linear-gradient(\n      135deg,\n      color-mix(in srgb, var(--primary-color) 72%, #8bb8ff),\n      var(--primary-color));\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.9rem;\n  box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.3);\n  flex-shrink: 0;\n}\n.layout-topbar-right .layout-topbar-profile .profile-details {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n}\n.layout-topbar-right .layout-topbar-profile .profile-details .profile-name {\n  font-weight: 600;\n  color: var(--text-color);\n  font-size: 0.95rem;\n  line-height: 1.2;\n}\n.layout-topbar-right .layout-topbar-profile .profile-details .profile-role {\n  color: var(--text-color-secondary);\n  font-size: 0.8rem;\n}\n.layout-topbar-right .layout-topbar-profile-menu {\n  position: absolute;\n  top: calc(100% + 0.8rem);\n  right: 0;\n  width: 280px;\n  background: var(--surface-card);\n  border: 1px solid var(--surface-border);\n  border-radius: 1.5rem;\n  box-shadow: 0 24px 60px -30px rgba(15, 23, 42, 0.35);\n  overflow: hidden;\n  z-index: 1000;\n}\n.layout-topbar-right .layout-topbar-profile-menu__header {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n  padding: 1.55rem 1.6rem;\n  border-bottom: 1px solid var(--surface-border);\n}\n.layout-topbar-right .layout-topbar-profile-menu__name {\n  color: var(--text-color);\n  font-size: 1.15rem;\n  font-weight: 700;\n  line-height: 1.2;\n}\n.layout-topbar-right .layout-topbar-profile-menu__email {\n  color: var(--text-color-secondary);\n  font-size: 0.95rem;\n  font-weight: 500;\n}\n.layout-topbar-right .layout-topbar-profile-menu__section {\n  padding: 0;\n}\n.layout-topbar-right .layout-topbar-profile-menu__section + .layout-topbar-profile-menu__section {\n  border-top: 1px solid var(--surface-border);\n}\n.layout-topbar-right .layout-topbar-profile-menu__item {\n  display: flex;\n  width: 100%;\n  box-sizing: border-box;\n  align-items: center;\n  gap: 0.95rem;\n  padding: 1rem 1.6rem;\n  border-radius: 0;\n  color: var(--text-color);\n  font-size: 0.98rem;\n  font-weight: 600;\n  transition: background-color 0.2s ease, color 0.2s ease;\n}\n.layout-topbar-right .layout-topbar-profile-menu__item i {\n  width: 1.25rem;\n  text-align: center;\n  color: var(--text-color-secondary);\n  font-size: 1rem;\n  transition: color 0.2s ease;\n}\n.layout-topbar-right .layout-topbar-profile-menu__item:hover {\n  background: var(--layout-hover-surface);\n  color: var(--text-color);\n}\n.layout-topbar-right .layout-topbar-profile-menu__item:hover i {\n  color: var(--primary-color);\n}\n.layout-topbar-right .layout-topbar-profile-menu__item--danger {\n  color: #ef4444;\n}\n.layout-topbar-right .layout-topbar-profile-menu__item--danger i {\n  color: inherit;\n}\n.layout-topbar-right .layout-topbar-profile-menu__item--danger:hover {\n  background: rgba(239, 68, 68, 0.12);\n  color: #dc2626;\n}\n.layout-main-container {\n  margin-left: var(--sidebar-width);\n  transition: margin-left 0.3s ease;\n  background: var(--surface-ground);\n}\n.layout-sidebar-collapsed .layout-main-container {\n  margin-left: var(--sidebar-width);\n}\n.layout-sidebar-collapsed .layout-topbar {\n  left: var(--sidebar-width);\n  width: calc(100% - var(--sidebar-width));\n  transition: all 0.3s ease;\n}\n:host-context(.app-dark) .layout-sidebar {\n  background: var(--surface-ground);\n  border-right-color: var(--surface-border);\n  box-shadow: 18px 0 36px rgba(3, 9, 20, 0.35);\n}\n:host-context(.app-dark) .layout-sidebar-brand {\n  color: var(--text-color);\n}\n:host-context(.app-dark) .layout-sidebar-brand-copy small,\n:host-context(.app-dark) .layout-sidebar-footer-link {\n  color: var(--text-color-secondary);\n}\n:host-context(.app-dark) .layout-sidebar-divider,\n:host-context(.app-dark) .menu-separator {\n  background: var(--surface-border);\n}\n:host-context(.app-dark) .layout-sidebar-footer {\n  background: transparent;\n  border-top-color: var(--surface-border);\n}\n:host-context(.app-dark) .layout-sidebar-footer-link i,\n:host-context(.app-dark) .layout-menu ul a .layout-menuitem-icon {\n  background: var(--surface-overlay);\n  color: inherit;\n}\n:host-context(.app-dark) .layout-menu ul a {\n  color: var(--text-color-secondary);\n}\n:host-context(.app-dark) .layout-sidebar-footer-link:hover {\n  background: var(--layout-hover-surface);\n  color: var(--text-color);\n}\n:host-context(.app-dark) .layout-menu ul a:hover,\n:host-context(.app-dark) .layout-menu ul a.active-route {\n  background: var(--layout-hover-surface);\n  color: var(--primary-color) !important;\n}\n:host-context(.app-dark) .layout-menu ul a .layout-submenu-toggler {\n  color: var(--text-color-secondary);\n}\n:host-context(.app-dark) .layout-menu ul ul {\n  border-left-color: var(--surface-border);\n}\n:host-context(.app-dark) .layout-menu ul a.active-route::after {\n  background: var(--primary-color);\n}\n:host-context(.app-dark) .layout-topbar {\n  background-color: var(--surface-card);\n  border-bottom-color: var(--surface-border);\n}\n:host-context(.app-dark) .layout-topbar-search-container,\n:host-context(.app-dark) .layout-topbar-action-button,\n:host-context(.app-dark) .layout-topbar-profile {\n  background: var(--surface-overlay);\n  border-color: var(--surface-border);\n}\n:host-context(.app-dark) .layout-topbar-profile-menu {\n  background: var(--surface-overlay);\n  border-color: var(--surface-border);\n  box-shadow: 0 24px 60px -30px rgba(2, 8, 20, 0.5);\n}\n:host-context(.app-dark) .layout-topbar-search-container i,\n:host-context(.app-dark) .layout-topbar-action-button i,\n:host-context(.app-dark) .layout-topbar-profile-copy small {\n  color: var(--text-color-secondary);\n}\n:host-context(.app-dark) .layout-topbar-search-container input,\n:host-context(.app-dark) .layout-topbar-profile .profile-name,\n:host-context(.app-dark) .layout-topbar-profile-menu__name {\n  color: var(--text-color);\n}\n:host-context(.app-dark) .layout-topbar-profile-menu__header,\n:host-context(.app-dark) .layout-topbar-profile-menu__section + .layout-topbar-profile-menu__section {\n  border-color: var(--surface-border);\n}\n:host-context(.app-dark) .layout-topbar-profile-menu__item:hover {\n  background: var(--layout-hover-surface);\n  color: var(--primary-color);\n}\n:host-context(.app-dark) .layout-topbar-profile-menu__item i {\n  color: var(--text-color-secondary);\n}\n:host-context(.app-dark) .layout-topbar-profile-menu__item:hover i {\n  color: var(--primary-color);\n}\n:host-context(.app-dark) .layout-topbar-avatar {\n  background:\n    linear-gradient(\n      145deg,\n      color-mix(in srgb, var(--primary-color) 76%, #91b9ff),\n      var(--primary-color));\n}\n:host-context(.app-dark) .layout-topbar-profile-menu__item--danger {\n  color: #ff6b76;\n}\n:host-context(.app-dark) .layout-topbar-profile-menu__item--danger:hover {\n  background: color-mix(in srgb, #ef4444 14%, transparent);\n  color: #ff8a92;\n}\n/*# sourceMappingURL=layout.component.css.map */\n"] }]
  }], () => [{ type: LayoutService }, { type: Renderer2 }, { type: Router }], { appSidebar: [{
    type: ViewChild,
    args: [AppSidebar]
  }], appTopBar: [{
    type: ViewChild,
    args: [AppTopbar]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppLayout, { className: "AppLayout", filePath: "app/layout/component/layout.component.ts", lineNumber: 18 });
})();

// src/app/pages/pages.routes.ts
var pages_routes_default = [
  {
    path: "",
    component: AppLayout,
    children: [
      {
        path: "",
        loadChildren: () => import("./chunk-2JRTFRJF.js").then((m) => m.default)
      }
    ]
  }
];
export {
  pages_routes_default as default
};
//# sourceMappingURL=chunk-4AFJJEHI.js.map
