import {
  InventoryComponent
} from "./chunk-IRE57KCI.js";
import {
  InventoryService
} from "./chunk-GPTXMCFV.js";
import {
  ReservationsComponent,
  TableModule
} from "./chunk-R6YMSHHN.js";
import {
  ReservationsService
} from "./chunk-G6NP3LRV.js";
import "./chunk-5Y54QTX6.js";
import "./chunk-VMC24EZG.js";
import "./chunk-TMZOMM52.js";
import "./chunk-UTSE7XOD.js";
import "./chunk-Q4VSGNER.js";
import "./chunk-APMFUUV6.js";
import "./chunk-GJV7VJIM.js";
import {
  FormsModule
} from "./chunk-LW7YESJ6.js";
import "./chunk-I2GZOOFQ.js";
import {
  CommonModule
} from "./chunk-N2DG2MZF.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-6FH5EJK4.js";
import "./chunk-R2QGWZ7S.js";

// src/app/pages/admin/dashboard/dashboard.component.ts
var DashboardComponent = class _DashboardComponent {
  reservationsService;
  inventoryService;
  constructor(reservationsService, inventoryService) {
    this.reservationsService = reservationsService;
    this.inventoryService = inventoryService;
  }
  get totalReservationsCount() {
    return this.reservationsService.reservations().length;
  }
  get pendingReservationsCount() {
    return this.countReservationsByStatus("Pending");
  }
  get confirmedReservationsCount() {
    return this.countReservationsByStatus("Confirmed");
  }
  get lowStockMedicineCount() {
    return this.inventoryService.inventoryItems().filter((item) => item.level === "Low").length;
  }
  countReservationsByStatus(status) {
    return this.reservationsService.reservations().filter((reservation) => reservation.status === status).length;
  }
  static \u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardComponent)(\u0275\u0275directiveInject(ReservationsService), \u0275\u0275directiveInject(InventoryService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], decls: 55, vars: 4, consts: [[1, "grid", "grid-cols-12", "gap-4"], [1, "col-span-12", "lg:col-span-6", "xl:col-span-3"], [1, "dashboard-metric-card", "dashboard-metric-card--blue"], [1, "dashboard-metric-card__header"], [1, "dashboard-metric-card__icon", "dashboard-metric-card__icon--blue"], [1, "pi", "pi-file-pdf"], [1, "dashboard-metric-card__delta", "dashboard-metric-card__delta--green"], [1, "pi", "pi-chart-line", "mr-1"], [1, "dashboard-metric-card__body"], [1, "dashboard-metric-card__label"], [1, "dashboard-metric-card__value"], [1, "dashboard-metric-card", "dashboard-metric-card--indigo"], [1, "dashboard-metric-card__icon", "dashboard-metric-card__icon--indigo"], [1, "pi", "pi-clipboard"], [1, "dashboard-metric-card__delta", "dashboard-metric-card__delta--red"], [1, "pi", "pi-exclamation-circle", "mr-1"], [1, "dashboard-metric-card", "dashboard-metric-card--green"], [1, "dashboard-metric-card__icon", "dashboard-metric-card__icon--green"], [1, "pi", "pi-check-circle"], [1, "pi", "pi-check", "mr-1"], [1, "dashboard-metric-card", "dashboard-metric-card--red"], [1, "dashboard-metric-card__icon", "dashboard-metric-card__icon--red"], [1, "pi", "pi-exclamation-triangle"], [1, "pi", "pi-star-fill", "mr-1"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275element(5, "i", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 6);
      \u0275\u0275element(7, "i", 7);
      \u0275\u0275text(8, " +12% ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 8)(10, "span", 9);
      \u0275\u0275text(11, "Total Reservations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 10);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(14, "div", 1)(15, "div", 11)(16, "div", 3)(17, "div", 12);
      \u0275\u0275element(18, "i", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 14);
      \u0275\u0275element(20, "i", 15);
      \u0275\u0275text(21, " 18 High ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 8)(23, "span", 9);
      \u0275\u0275text(24, "Pending Reservations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 10);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(27, "div", 1)(28, "div", 16)(29, "div", 3)(30, "div", 17);
      \u0275\u0275element(31, "i", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 6);
      \u0275\u0275element(33, "i", 19);
      \u0275\u0275text(34, " 98% Rate ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 8)(36, "span", 9);
      \u0275\u0275text(37, "Confirmed Reservations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 10);
      \u0275\u0275text(39);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(40, "div", 1)(41, "div", 20)(42, "div", 3)(43, "div", 21);
      \u0275\u0275element(44, "i", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 14);
      \u0275\u0275element(46, "i", 23);
      \u0275\u0275text(47, " Critical ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "div", 8)(49, "span", 9);
      \u0275\u0275text(50, "Low Stock Medicines");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div", 10);
      \u0275\u0275text(52);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(53, "app-reservations")(54, "app-inventory");
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275textInterpolate(ctx.totalReservationsCount);
      \u0275\u0275advance(13);
      \u0275\u0275textInterpolate(ctx.pendingReservationsCount);
      \u0275\u0275advance(13);
      \u0275\u0275textInterpolate(ctx.confirmedReservationsCount);
      \u0275\u0275advance(13);
      \u0275\u0275textInterpolate(ctx.lowStockMedicineCount);
    }
  }, dependencies: [FormsModule, CommonModule, TableModule, ReservationsComponent, InventoryComponent], styles: ["\n\n.dashboard-metric-card[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 1rem;\n  border-radius: 16px;\n  border: 1px solid var(--surface-border);\n  background: var(--surface-card);\n  box-shadow: 0 18px 45px -38px rgba(33, 56, 115, 0.35);\n  transition:\n    transform 160ms ease,\n    box-shadow 160ms ease,\n    background-color 160ms ease,\n    border-color 160ms ease;\n}\n.dashboard-metric-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 22px 48px -40px rgba(33, 56, 115, 0.42);\n}\n.dashboard-metric-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 0.75rem;\n}\n.dashboard-metric-card__icon[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.8rem;\n}\n.dashboard-metric-card__icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.dashboard-metric-card__icon--blue[_ngcontent-%COMP%] {\n  background: #e8f1ff;\n  color: #2166f3;\n}\n.dashboard-metric-card__icon--indigo[_ngcontent-%COMP%] {\n  background: #eff0ff;\n  color: #3f4bd8;\n}\n.dashboard-metric-card__icon--green[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #16a34a;\n}\n.dashboard-metric-card__icon--red[_ngcontent-%COMP%] {\n  background: #fff1f2;\n  color: #dc2626;\n}\n.dashboard-metric-card__delta[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-size: 0.72rem;\n  font-weight: 800;\n  letter-spacing: 0.02em;\n}\n.dashboard-metric-card__delta--green[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.dashboard-metric-card__delta--red[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.dashboard-metric-card__body[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.dashboard-metric-card__label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.25rem;\n  color: var(--text-color-secondary);\n  font-size: 0.88rem;\n  font-weight: 600;\n}\n.dashboard-metric-card__value[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  font-size: 1.7rem;\n  font-weight: 800;\n  line-height: 1.1;\n}\n.app-dark[_nghost-%COMP%]   .dashboard-metric-card[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .dashboard-metric-card[_ngcontent-%COMP%] {\n  background: var(--surface-card);\n  border-color: var(--surface-border);\n  box-shadow: 0 18px 45px -42px rgba(6, 16, 32, 0.65);\n}\n.app-dark[_nghost-%COMP%]   .dashboard-metric-card__icon--blue[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .dashboard-metric-card__icon--blue[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--primary-color) 14%, transparent);\n  color: color-mix(in srgb, var(--primary-color) 58%, white);\n}\n.app-dark[_nghost-%COMP%]   .dashboard-metric-card__icon--indigo[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .dashboard-metric-card__icon--indigo[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, #4f46e5 14%, transparent);\n  color: color-mix(in srgb, #4f46e5 58%, white);\n}\n.app-dark[_nghost-%COMP%]   .dashboard-metric-card__icon--green[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .dashboard-metric-card__icon--green[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, #22c55e 14%, transparent);\n  color: color-mix(in srgb, #22c55e 58%, white);\n}\n.app-dark[_nghost-%COMP%]   .dashboard-metric-card__icon--red[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .dashboard-metric-card__icon--red[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, #ef4444 14%, transparent);\n  color: color-mix(in srgb, #ef4444 58%, white);\n}\n.app-dark[_nghost-%COMP%]   .dashboard-metric-card__label[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .dashboard-metric-card__label[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n}\n.app-dark[_nghost-%COMP%]   .dashboard-metric-card__value[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .dashboard-metric-card__value[_ngcontent-%COMP%] {\n  color: var(--text-color);\n}\n@media (max-width: 767px) {\n  .dashboard-metric-card__header[_ngcontent-%COMP%] {\n    align-items: center;\n  }\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: true, imports: [FormsModule, CommonModule, TableModule, ReservationsComponent, InventoryComponent], template: '<div class="grid grid-cols-12 gap-4">\n    <div class="col-span-12 lg:col-span-6 xl:col-span-3">\n        <div class="dashboard-metric-card dashboard-metric-card--blue">\n            <div class="dashboard-metric-card__header">\n                <div class="dashboard-metric-card__icon dashboard-metric-card__icon--blue">\n                    <i class="pi pi-file-pdf"></i>\n                </div>\n                <div class="dashboard-metric-card__delta dashboard-metric-card__delta--green">\n                    <i class="pi pi-chart-line mr-1"></i> +12%\n                </div>\n            </div>\n            <div class="dashboard-metric-card__body">\n                <span class="dashboard-metric-card__label">Total Reservations</span>\n                <div class="dashboard-metric-card__value">{{ totalReservationsCount }}</div>\n            </div>\n        </div>\n    </div>\n\n    <div class="col-span-12 lg:col-span-6 xl:col-span-3">\n        <div class="dashboard-metric-card dashboard-metric-card--indigo">\n            <div class="dashboard-metric-card__header">\n                <div class="dashboard-metric-card__icon dashboard-metric-card__icon--indigo">\n                    <i class="pi pi-clipboard"></i>\n                </div>\n                <div class="dashboard-metric-card__delta dashboard-metric-card__delta--red">\n                    <i class="pi pi-exclamation-circle mr-1"></i> 18 High\n                </div>\n            </div>\n            <div class="dashboard-metric-card__body">\n                <span class="dashboard-metric-card__label">Pending Reservations</span>\n                <div class="dashboard-metric-card__value">{{ pendingReservationsCount }}</div>\n            </div>\n        </div>\n    </div>\n\n    <div class="col-span-12 lg:col-span-6 xl:col-span-3">\n        <div class="dashboard-metric-card dashboard-metric-card--green">\n            <div class="dashboard-metric-card__header">\n                <div class="dashboard-metric-card__icon dashboard-metric-card__icon--green">\n                    <i class="pi pi-check-circle"></i>\n                </div>\n                <div class="dashboard-metric-card__delta dashboard-metric-card__delta--green">\n                    <i class="pi pi-check mr-1"></i> 98% Rate\n                </div>\n            </div>\n            <div class="dashboard-metric-card__body">\n                <span class="dashboard-metric-card__label">Confirmed Reservations</span>\n                <div class="dashboard-metric-card__value">{{ confirmedReservationsCount }}</div>\n            </div>\n        </div>\n    </div>\n\n    <div class="col-span-12 lg:col-span-6 xl:col-span-3">\n        <div class="dashboard-metric-card dashboard-metric-card--red">\n            <div class="dashboard-metric-card__header">\n                <div class="dashboard-metric-card__icon dashboard-metric-card__icon--red">\n                    <i class="pi pi-exclamation-triangle"></i>\n                </div>\n                <div class="dashboard-metric-card__delta dashboard-metric-card__delta--red">\n                    <i class="pi pi-star-fill mr-1"></i> Critical\n                </div>\n            </div>\n            <div class="dashboard-metric-card__body">\n                <span class="dashboard-metric-card__label">Low Stock Medicines</span>\n                <div class="dashboard-metric-card__value">{{ lowStockMedicineCount }}</div>\n            </div>\n        </div>\n    </div>\n</div>\n<app-reservations></app-reservations>\n<app-inventory></app-inventory>\n', styles: ["/* src/app/pages/admin/dashboard/dashboard.component.scss */\n.dashboard-metric-card {\n  height: 100%;\n  padding: 1rem;\n  border-radius: 16px;\n  border: 1px solid var(--surface-border);\n  background: var(--surface-card);\n  box-shadow: 0 18px 45px -38px rgba(33, 56, 115, 0.35);\n  transition:\n    transform 160ms ease,\n    box-shadow 160ms ease,\n    background-color 160ms ease,\n    border-color 160ms ease;\n}\n.dashboard-metric-card:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 22px 48px -40px rgba(33, 56, 115, 0.42);\n}\n.dashboard-metric-card__header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 0.75rem;\n}\n.dashboard-metric-card__icon {\n  width: 2.5rem;\n  height: 2.5rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.8rem;\n}\n.dashboard-metric-card__icon i {\n  font-size: 1rem;\n}\n.dashboard-metric-card__icon--blue {\n  background: #e8f1ff;\n  color: #2166f3;\n}\n.dashboard-metric-card__icon--indigo {\n  background: #eff0ff;\n  color: #3f4bd8;\n}\n.dashboard-metric-card__icon--green {\n  background: #ecfdf5;\n  color: #16a34a;\n}\n.dashboard-metric-card__icon--red {\n  background: #fff1f2;\n  color: #dc2626;\n}\n.dashboard-metric-card__delta {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-size: 0.72rem;\n  font-weight: 800;\n  letter-spacing: 0.02em;\n}\n.dashboard-metric-card__delta--green {\n  color: #16a34a;\n}\n.dashboard-metric-card__delta--red {\n  color: #dc2626;\n}\n.dashboard-metric-card__body {\n  margin-top: 1rem;\n}\n.dashboard-metric-card__label {\n  display: block;\n  margin-bottom: 0.25rem;\n  color: var(--text-color-secondary);\n  font-size: 0.88rem;\n  font-weight: 600;\n}\n.dashboard-metric-card__value {\n  color: var(--text-color);\n  font-size: 1.7rem;\n  font-weight: 800;\n  line-height: 1.1;\n}\n:host-context(.app-dark) .dashboard-metric-card {\n  background: var(--surface-card);\n  border-color: var(--surface-border);\n  box-shadow: 0 18px 45px -42px rgba(6, 16, 32, 0.65);\n}\n:host-context(.app-dark) .dashboard-metric-card__icon--blue {\n  background: color-mix(in srgb, var(--primary-color) 14%, transparent);\n  color: color-mix(in srgb, var(--primary-color) 58%, white);\n}\n:host-context(.app-dark) .dashboard-metric-card__icon--indigo {\n  background: color-mix(in srgb, #4f46e5 14%, transparent);\n  color: color-mix(in srgb, #4f46e5 58%, white);\n}\n:host-context(.app-dark) .dashboard-metric-card__icon--green {\n  background: color-mix(in srgb, #22c55e 14%, transparent);\n  color: color-mix(in srgb, #22c55e 58%, white);\n}\n:host-context(.app-dark) .dashboard-metric-card__icon--red {\n  background: color-mix(in srgb, #ef4444 14%, transparent);\n  color: color-mix(in srgb, #ef4444 58%, white);\n}\n:host-context(.app-dark) .dashboard-metric-card__label {\n  color: var(--text-color-secondary);\n}\n:host-context(.app-dark) .dashboard-metric-card__value {\n  color: var(--text-color);\n}\n@media (max-width: 767px) {\n  .dashboard-metric-card__header {\n    align-items: center;\n  }\n}\n/*# sourceMappingURL=dashboard.component.css.map */\n"] }]
  }], () => [{ type: ReservationsService }, { type: InventoryService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "app/pages/admin/dashboard/dashboard.component.ts", lineNumber: 18 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-H4SF2TPH.js.map
