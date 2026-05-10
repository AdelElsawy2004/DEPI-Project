import {
  LayoutService
} from "./chunk-AP5ILEDC.js";
import "./chunk-SNDVMDYD.js";
import {
  PharmacyStateService
} from "./chunk-GJV7VJIM.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-LW7YESJ6.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-I2GZOOFQ.js";
import {
  CommonModule,
  NgClass,
  NgForOf
} from "./chunk-N2DG2MZF.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-6FH5EJK4.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-R2QGWZ7S.js";

// src/app/pages/patient/home/home.component.ts
function HomeComponent_button_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function HomeComponent_button_54_Template_button_click_0_listener() {
      const medicine_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectMedicine(medicine_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const medicine_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", medicine_r2, " ");
  }
}
var HomeComponent = class _HomeComponent {
  appState;
  layoutService;
  searchTerm = "";
  popularMedicines = ["Amoxicillin", "Metformin", "Paracetamol", "Cetirizine", "Ibuprofen", "Omeprazole"];
  constructor(appState, layoutService) {
    this.appState = appState;
    this.layoutService = layoutService;
  }
  get profileAvatar() {
    return this.appState.profile().initials?.trim().charAt(0) || "P";
  }
  get profileName() {
    return this.appState.profile().fullName;
  }
  get profileRole() {
    return this.appState.profile().role;
  }
  toggleTheme() {
    this.layoutService.layoutConfig.update((state) => __spreadProps(__spreadValues({}, state), {
      darkTheme: !state.darkTheme
    }));
  }
  submitSearch() {
    this.searchTerm = this.searchTerm.trim();
  }
  selectMedicine(medicine) {
    this.searchTerm = medicine;
  }
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)(\u0275\u0275directiveInject(PharmacyStateService), \u0275\u0275directiveInject(LayoutService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-patient-home"]], decls: 55, vars: 8, consts: [[1, "flex", "min-h-screen", "flex-col", "bg-surface-50", "text-surface-900", "dark:bg-surface-950", "dark:text-surface-0"], [1, "border-b", "border-surface-200/80", "bg-surface-0/95", "backdrop-blur", "dark:border-surface-800/80", "dark:bg-surface-950/90"], [1, "mx-auto", "flex", "h-16", "w-full", "max-w-[1280px]", "items-center", "justify-between", "gap-4", "px-6", "lg:px-8"], ["routerLink", "/patient/home", 1, "flex", "items-center", "gap-3", "transition-opacity", "hover:opacity-90"], [1, "flex", "h-9", "w-9", "items-center", "justify-center", "rounded-xl", "bg-primary-500", "text-white", "shadow-sm", "shadow-primary-500/30"], [1, "pi", "pi-link", "text-sm"], [1, "text-lg", "font-semibold", "tracking-tight", "text-surface-900", "dark:text-surface-0"], [1, "text-primary-500"], [1, "hidden", "items-center", "gap-2", "md:flex"], ["type", "button", 1, "inline-flex", "h-10", "items-center", "gap-2", "rounded-xl", "bg-primary-50", "px-4", "text-sm", "font-semibold", "text-primary-700", "shadow-sm", "ring-1", "ring-primary-100", "dark:bg-primary-900/35", "dark:text-primary-200", "dark:ring-primary-800/70"], [1, "pi", "pi-search", "text-sm"], ["type", "button", 1, "inline-flex", "h-10", "items-center", "gap-2", "rounded-xl", "px-4", "text-sm", "font-medium", "text-surface-500", "transition", "hover:bg-surface-100", "hover:text-surface-900", "dark:text-surface-300", "dark:hover:bg-surface-900/70", "dark:hover:text-surface-0"], [1, "pi", "pi-calendar", "text-sm"], [1, "flex", "items-center", "gap-3"], ["type", "button", 1, "inline-flex", "h-10", "w-10", "items-center", "justify-center", "rounded-full", "text-surface-500", "transition", "hover:bg-surface-100", "hover:text-surface-900", "dark:text-surface-300", "dark:hover:bg-surface-900/70", "dark:hover:text-surface-0", 3, "click"], [1, "pi", 3, "ngClass"], ["type", "button", 1, "flex", "items-center", "gap-2", "rounded-full", "px-2", "py-1.5", "transition", "hover:bg-surface-100", "dark:hover:bg-surface-900/70"], [1, "flex", "h-9", "w-9", "items-center", "justify-center", "rounded-full", "bg-primary-100", "text-sm", "font-semibold", "text-primary-700", "dark:bg-primary-900/50", "dark:text-primary-200"], [1, "hidden", "flex-col", "items-start", "leading-tight", "sm:flex"], [1, "text-sm", "font-semibold", "text-surface-900", "dark:text-surface-0"], [1, "text-xs", "text-surface-500", "dark:text-surface-300"], [1, "pi", "pi-angle-down", "text-xs", "text-surface-400", "dark:text-surface-300"], [1, "flex", "flex-1"], [1, "mx-auto", "flex", "w-full", "max-w-[1280px]", "flex-1", "flex-col", "px-6", "pb-16", "lg:px-8"], [1, "flex", "flex-1", "items-start", "justify-center", "pt-16", "sm:pt-20"], [1, "w-full", "max-w-3xl", "text-center"], [1, "space-y-4"], [1, "text-3xl", "font-semibold", "tracking-tight", "text-surface-900", "dark:text-surface-0", "sm:text-[2.2rem]"], [1, "text-sm", "leading-6", "text-surface-500", "dark:text-surface-400", "sm:text-base"], [1, "mx-auto", "mt-10", "w-full", "max-w-[560px]", 3, "ngSubmit"], ["for", "medicine-search", 1, "sr-only"], [1, "flex", "items-center", "gap-3", "rounded-2xl", "border", "border-surface-200", "bg-surface-0", "px-5", "py-4", "shadow-sm", "transition", "focus-within:border-primary-300", "focus-within:ring-4", "focus-within:ring-primary-100", "dark:border-surface-700", "dark:bg-surface-900", "dark:focus-within:border-primary-500/50", "dark:focus-within:ring-primary-500/10"], [1, "pi", "pi-search", "text-base", "text-surface-400", "dark:text-surface-500"], ["id", "medicine-search", "name", "medicine-search", "type", "text", "autocomplete", "off", "placeholder", "Enter medicine name...", 1, "min-w-0", "flex-1", "bg-transparent", "text-sm", "text-surface-900", "outline-none", "placeholder:text-surface-400", "dark:text-surface-0", "dark:placeholder:text-surface-500", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "mt-4", "inline-flex", "h-12", "w-full", "items-center", "justify-center", "gap-2", "rounded-xl", "border", "border-transparent", "bg-surface-200", "text-sm", "font-medium", "text-surface-500", "transition", "hover:bg-surface-300", "hover:text-surface-700", "disabled:cursor-not-allowed", "disabled:hover:bg-surface-200", "disabled:hover:text-surface-500", "dark:bg-surface-700", "dark:text-surface-300", "dark:hover:bg-surface-600", "dark:hover:text-surface-0", "dark:disabled:hover:bg-surface-700", 3, "disabled"], [1, "mx-auto", "mt-10", "w-full", "max-w-[560px]", "text-left"], [1, "text-sm", "font-medium", "uppercase", "tracking-[0.2em]", "text-surface-500", "dark:text-surface-400"], [1, "mt-3", "flex", "flex-wrap", "gap-2"], ["type", "button", "class", "rounded-full border border-surface-200 bg-surface-0 px-4 py-2 text-xs font-medium text-surface-600 transition hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700 dark:border-surface-700 dark:bg-surface-900 dark:text-surface-300 dark:hover:border-primary-500/50 dark:hover:bg-primary-900/30 dark:hover:text-primary-200", 3, "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "rounded-full", "border", "border-surface-200", "bg-surface-0", "px-4", "py-2", "text-xs", "font-medium", "text-surface-600", "transition", "hover:border-primary-300", "hover:bg-primary-50", "hover:text-primary-700", "dark:border-surface-700", "dark:bg-surface-900", "dark:text-surface-300", "dark:hover:border-primary-500/50", "dark:hover:bg-primary-900/30", "dark:hover:text-primary-200", 3, "click"]], template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "a", 3)(4, "span", 4);
      \u0275\u0275element(5, "i", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "span", 6);
      \u0275\u0275text(7, " Med");
      \u0275\u0275elementStart(8, "span", 7);
      \u0275\u0275text(9, "Finder");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "nav", 8)(11, "button", 9);
      \u0275\u0275element(12, "i", 10);
      \u0275\u0275elementStart(13, "span");
      \u0275\u0275text(14, "Search");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "button", 11);
      \u0275\u0275element(16, "i", 12);
      \u0275\u0275elementStart(17, "span");
      \u0275\u0275text(18, "My Reservations");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "div", 13)(20, "button", 14);
      \u0275\u0275listener("click", function HomeComponent_Template_button_click_20_listener() {
        return ctx.toggleTheme();
      });
      \u0275\u0275element(21, "i", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "button", 16)(23, "span", 17);
      \u0275\u0275text(24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "span", 18)(26, "span", 19);
      \u0275\u0275text(27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "span", 20);
      \u0275\u0275text(29);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(30, "i", 21);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(31, "main", 22)(32, "div", 23)(33, "section", 24)(34, "div", 25)(35, "div", 26)(36, "h1", 27);
      \u0275\u0275text(37, " Find your medicine ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "p", 28);
      \u0275\u0275text(39, " Search for medicines available at pharmacies near you ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "form", 29);
      \u0275\u0275listener("ngSubmit", function HomeComponent_Template_form_ngSubmit_40_listener() {
        return ctx.submitSearch();
      });
      \u0275\u0275elementStart(41, "label", 30);
      \u0275\u0275text(42, "Enter medicine name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 31);
      \u0275\u0275element(44, "i", 32);
      \u0275\u0275elementStart(45, "input", 33);
      \u0275\u0275twoWayListener("ngModelChange", function HomeComponent_Template_input_ngModelChange_45_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "button", 34);
      \u0275\u0275element(47, "i", 10);
      \u0275\u0275elementStart(48, "span");
      \u0275\u0275text(49, "Search");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(50, "div", 35)(51, "p", 36);
      \u0275\u0275text(52, " Popular Medicines ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "div", 37);
      \u0275\u0275template(54, HomeComponent_button_54_Template, 2, 1, "button", 38);
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(20);
      \u0275\u0275attribute("aria-label", ctx.layoutService.isDarkTheme() ? "Switch to light mode" : "Switch to dark mode");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.layoutService.isDarkTheme() ? "pi-sun" : "pi-moon");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.profileAvatar, " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.profileName);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.profileRole);
      \u0275\u0275advance(16);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !ctx.searchTerm.trim());
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.popularMedicines);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeComponent, [{
    type: Component,
    args: [{ selector: "app-patient-home", standalone: true, imports: [CommonModule, FormsModule, RouterModule], template: `<div class="flex min-h-screen flex-col bg-surface-50 text-surface-900 dark:bg-surface-950 dark:text-surface-0">
    <header class="border-b border-surface-200/80 bg-surface-0/95 backdrop-blur dark:border-surface-800/80 dark:bg-surface-950/90">
        <div class="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between gap-4 px-6 lg:px-8">
            <a routerLink="/patient/home" class="flex items-center gap-3 transition-opacity hover:opacity-90">
                <span class="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-500 text-white shadow-sm shadow-primary-500/30">
                    <i class="pi pi-link text-sm"></i>
                </span>
                <span class="text-lg font-semibold tracking-tight text-surface-900 dark:text-surface-0">
                    Med<span class="text-primary-500">Finder</span>
                </span>
            </a>

            <nav class="hidden items-center gap-2 md:flex">
                <button
                    type="button"
                    class="inline-flex h-10 items-center gap-2 rounded-xl bg-primary-50 px-4 text-sm font-semibold text-primary-700 shadow-sm ring-1 ring-primary-100 dark:bg-primary-900/35 dark:text-primary-200 dark:ring-primary-800/70"
                >
                    <i class="pi pi-search text-sm"></i>
                    <span>Search</span>
                </button>

                <button
                    type="button"
                    class="inline-flex h-10 items-center gap-2 rounded-xl px-4 text-sm font-medium text-surface-500 transition hover:bg-surface-100 hover:text-surface-900 dark:text-surface-300 dark:hover:bg-surface-900/70 dark:hover:text-surface-0"
                >
                    <i class="pi pi-calendar text-sm"></i>
                    <span>My Reservations</span>
                </button>
            </nav>

            <div class="flex items-center gap-3">
                <button
                    type="button"
                    class="inline-flex h-10 w-10 items-center justify-center rounded-full text-surface-500 transition hover:bg-surface-100 hover:text-surface-900 dark:text-surface-300 dark:hover:bg-surface-900/70 dark:hover:text-surface-0"
                    (click)="toggleTheme()"
                    [attr.aria-label]="layoutService.isDarkTheme() ? 'Switch to light mode' : 'Switch to dark mode'"
                >
                    <i class="pi" [ngClass]="layoutService.isDarkTheme() ? 'pi-sun' : 'pi-moon'"></i>
                </button>

                <button
                    type="button"
                    class="flex items-center gap-2 rounded-full px-2 py-1.5 transition hover:bg-surface-100 dark:hover:bg-surface-900/70"
                >
                    <span class="flex h-9 w-9 items-center justify-center rounded-full bg-primary-100 text-sm font-semibold text-primary-700 dark:bg-primary-900/50 dark:text-primary-200">
                        {{ profileAvatar }}
                    </span>
                    <span class="hidden flex-col items-start leading-tight sm:flex">
                        <span class="text-sm font-semibold text-surface-900 dark:text-surface-0">{{ profileName }}</span>
                        <span class="text-xs text-surface-500 dark:text-surface-300">{{ profileRole }}</span>
                    </span>
                    <i class="pi pi-angle-down text-xs text-surface-400 dark:text-surface-300"></i>
                </button>
            </div>
        </div>
    </header>

    <main class="flex flex-1">
        <div class="mx-auto flex w-full max-w-[1280px] flex-1 flex-col px-6 pb-16 lg:px-8">
            <section class="flex flex-1 items-start justify-center pt-16 sm:pt-20">
                <div class="w-full max-w-3xl text-center">
                    <div class="space-y-4">
                        <h1 class="text-3xl font-semibold tracking-tight text-surface-900 dark:text-surface-0 sm:text-[2.2rem]">
                            Find your medicine
                        </h1>
                        <p class="text-sm leading-6 text-surface-500 dark:text-surface-400 sm:text-base">
                            Search for medicines available at pharmacies near you
                        </p>
                    </div>

                    <form class="mx-auto mt-10 w-full max-w-[560px]" (ngSubmit)="submitSearch()">
                        <label class="sr-only" for="medicine-search">Enter medicine name</label>

                        <div class="flex items-center gap-3 rounded-2xl border border-surface-200 bg-surface-0 px-5 py-4 shadow-sm transition focus-within:border-primary-300 focus-within:ring-4 focus-within:ring-primary-100 dark:border-surface-700 dark:bg-surface-900 dark:focus-within:border-primary-500/50 dark:focus-within:ring-primary-500/10">
                            <i class="pi pi-search text-base text-surface-400 dark:text-surface-500"></i>
                            <input
                                id="medicine-search"
                                [(ngModel)]="searchTerm"
                                name="medicine-search"
                                type="text"
                                autocomplete="off"
                                placeholder="Enter medicine name..."
                                class="min-w-0 flex-1 bg-transparent text-sm text-surface-900 outline-none placeholder:text-surface-400 dark:text-surface-0 dark:placeholder:text-surface-500"
                            />
                        </div>

                        <button
                            type="submit"
                            [disabled]="!searchTerm.trim()"
                            class="mt-4 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-transparent bg-surface-200 text-sm font-medium text-surface-500 transition hover:bg-surface-300 hover:text-surface-700 disabled:cursor-not-allowed disabled:hover:bg-surface-200 disabled:hover:text-surface-500 dark:bg-surface-700 dark:text-surface-300 dark:hover:bg-surface-600 dark:hover:text-surface-0 dark:disabled:hover:bg-surface-700"
                        >
                            <i class="pi pi-search text-sm"></i>
                            <span>Search</span>
                        </button>
                    </form>

                    <div class="mx-auto mt-10 w-full max-w-[560px] text-left">
                        <p class="text-sm font-medium uppercase tracking-[0.2em] text-surface-500 dark:text-surface-400">
                            Popular Medicines
                        </p>

                        <div class="mt-3 flex flex-wrap gap-2">
                            <button
                                *ngFor="let medicine of popularMedicines"
                                type="button"
                                class="rounded-full border border-surface-200 bg-surface-0 px-4 py-2 text-xs font-medium text-surface-600 transition hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700 dark:border-surface-700 dark:bg-surface-900 dark:text-surface-300 dark:hover:border-primary-500/50 dark:hover:bg-primary-900/30 dark:hover:text-primary-200"
                                (click)="selectMedicine(medicine)"
                            >
                                {{ medicine }}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>
</div>
` }]
  }], () => [{ type: PharmacyStateService }, { type: LayoutService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "app/pages/patient/home/home.component.ts", lineNumber: 14 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-P77QI7U2.js.map
