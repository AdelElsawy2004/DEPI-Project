import {
  InventoryService
} from "./chunk-GPTXMCFV.js";
import {
  DatePicker,
  Dialog,
  DialogModule,
  InputNumber,
  InputNumberModule,
  Select,
  SelectModule
} from "./chunk-VMC24EZG.js";
import {
  InputText,
  InputTextModule
} from "./chunk-TMZOMM52.js";
import {
  PrimeTemplate
} from "./chunk-Q4VSGNER.js";
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
  Router,
  RouterLink
} from "./chunk-I2GZOOFQ.js";
import {
  CommonModule,
  NgClass
} from "./chunk-N2DG2MZF.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-6FH5EJK4.js";
import {
  __objRest,
  __restKey,
  __spreadProps,
  __spreadValues
} from "./chunk-R2QGWZ7S.js";

// src/app/pages/admin/Inventory/inventory.component.ts
var _c0 = () => ({ width: "520px" });
var _c1 = () => ({ "overflow": "visible" });
var _c2 = () => ({ width: "100%" });
var _forTrack0 = ($index, $item) => $item.id;
function InventoryComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 4);
    \u0275\u0275element(1, "i", 24);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Manage Inventory");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", ctx_r0.inventoryPageLink);
  }
}
function InventoryComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function InventoryComponent_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openAddDialog());
    });
    \u0275\u0275element(1, "i", 26);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Add Medicine");
    \u0275\u0275elementEnd()();
  }
}
function InventoryComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275listener("click", function InventoryComponent_For_11_Template_div_click_0_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openEditDialog(item_r4));
    })("keydown.enter", function InventoryComponent_For_11_Template_div_keydown_enter_0_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openEditDialog(item_r4));
    })("keydown.space", function InventoryComponent_For_11_Template_div_keydown_space_0_listener($event) {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r0.openEditDialog(item_r4));
    });
    \u0275\u0275elementStart(1, "div", 28)(2, "div", 29);
    \u0275\u0275element(3, "i", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 31)(5, "div", 32);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 33);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 34)(10, "span", 35);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 36);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(item_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", item_r4.category, " - Exp: ", item_r4.expiry);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r4.stock);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "inventory-level-pill--" + item_r4.level.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r4.level, " ");
  }
}
function InventoryComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38);
    \u0275\u0275element(2, "i", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "div", 40);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 41);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("dialog-header__icon--edit", ctx_r0.isEditMode);
    \u0275\u0275advance();
    \u0275\u0275classProp("pi-plus", !ctx_r0.isEditMode)("pi-pencil", ctx_r0.isEditMode);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.isEditMode ? "Edit Medicine" : "Add New Medicine");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.isEditMode ? "Update the medicine details below" : "Fill in the medicine details below", " ");
  }
}
function InventoryComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errors["name"]);
  }
}
function InventoryComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errors["quantity"]);
  }
}
function InventoryComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errors["category"]);
  }
}
function InventoryComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errors["expiry"]);
  }
}
function InventoryComponent_ng_template_47_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function InventoryComponent_ng_template_47_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.deleteMedicine());
    });
    \u0275\u0275element(1, "i", 48);
    \u0275\u0275text(2, " Delete ");
    \u0275\u0275elementEnd();
  }
}
function InventoryComponent_ng_template_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275conditionalCreate(1, InventoryComponent_ng_template_47_Conditional_1_Template, 3, 0, "button", 43);
    \u0275\u0275elementStart(2, "div", 44)(3, "button", 45);
    \u0275\u0275listener("click", function InventoryComponent_ng_template_47_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeAddDialog());
    });
    \u0275\u0275text(4, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 46);
    \u0275\u0275listener("click", function InventoryComponent_ng_template_47_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveMedicine());
    });
    \u0275\u0275element(6, "i", 39);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isEditMode ? 1 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("pi-plus", !ctx_r0.isEditMode)("pi-check", ctx_r0.isEditMode);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isEditMode ? "Save Changes" : "Add Medicine", " ");
  }
}
var InventoryComponent = class _InventoryComponent {
  router;
  inventoryService;
  appState;
  showAddDialog = false;
  isEditMode = false;
  editingMedicineId = null;
  medicineName = "";
  quantity = null;
  expiryDate = null;
  selectedCategory = null;
  errors = {};
  inventoryPageLink = ["/inventory"];
  categories = [
    { label: "Antibiotic", value: "Antibiotic" },
    { label: "Pain Relief", value: "Pain Relief" },
    { label: "Diabetes", value: "Diabetes" },
    { label: "Hypertension", value: "Hypertension" },
    { label: "Cholesterol", value: "Cholesterol" },
    { label: "Gastric", value: "Gastric" },
    { label: "Allergy", value: "Allergy" }
  ];
  constructor(router, inventoryService, appState) {
    this.router = router;
    this.inventoryService = inventoryService;
    this.appState = appState;
  }
  get isInventoryPage() {
    return this.router.url.startsWith("/inventory");
  }
  get cardTitle() {
    return this.isInventoryPage ? "Medicine Inventory" : "Inventory Preview";
  }
  get cardSubtitle() {
    return this.isInventoryPage ? "Manage current medicine stock" : "Current stock overview";
  }
  get inventoryItems() {
    return this.inventoryService.inventoryItems();
  }
  get filteredInventoryItems() {
    const normalizedQuery = this.appState.searchQuery().trim().toLowerCase();
    if (!normalizedQuery) {
      return this.inventoryItems;
    }
    return this.inventoryItems.filter((item) => [
      item.name,
      item.category,
      item.expiry,
      item.level,
      item.stock.toString()
    ].some((value) => value.toLowerCase().includes(normalizedQuery)));
  }
  get visibleInventory() {
    return this.isInventoryPage ? this.filteredInventoryItems : this.filteredInventoryItems.slice(0, 6);
  }
  get displayedInventoryCount() {
    return this.visibleInventory.length;
  }
  get totalInventoryCount() {
    return this.filteredInventoryItems.length;
  }
  getLevel(stock) {
    if (stock >= 100)
      return "High";
    if (stock >= 40)
      return "Normal";
    return "Low";
  }
  formatExpiry(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    return `${year}-${month}`;
  }
  validate() {
    this.errors = {};
    if (!this.medicineName.trim())
      this.errors["name"] = "Medicine name is required";
    if (!this.quantity || this.quantity <= 0)
      this.errors["quantity"] = "Quantity must be greater than 0";
    if (!this.selectedCategory)
      this.errors["category"] = "Category is required";
    if (!this.expiryDate)
      this.errors["expiry"] = "Expiry date is required";
    return Object.keys(this.errors).length === 0;
  }
  validateField(field) {
    switch (field) {
      case "name":
        if (this.medicineName.trim()) {
          this.removeFieldError("name");
        } else {
          this.setFieldError("name", "Medicine name is required");
        }
        break;
      case "quantity":
        if (this.quantity !== null && this.quantity > 0) {
          this.removeFieldError("quantity");
        } else {
          this.setFieldError("quantity", "Quantity must be greater than 0");
        }
        break;
      case "category":
        if (this.selectedCategory) {
          this.removeFieldError("category");
        } else {
          this.setFieldError("category", "Category is required");
        }
        break;
      case "expiry":
        if (this.expiryDate) {
          this.removeFieldError("expiry");
        } else {
          this.setFieldError("expiry", "Expiry date is required");
        }
        break;
    }
  }
  setFieldError(field, message) {
    this.errors = __spreadProps(__spreadValues({}, this.errors), {
      [field]: message
    });
  }
  removeFieldError(field) {
    if (!this.errors[field]) {
      return;
    }
    const _a = this.errors, { [field]: _removed } = _a, remainingErrors = __objRest(_a, [__restKey(field)]);
    this.errors = remainingErrors;
  }
  openAddDialog() {
    this.isEditMode = false;
    this.resetForm();
    this.showAddDialog = true;
  }
  openEditDialog(item) {
    this.isEditMode = true;
    this.editingMedicineId = item.id;
    this.medicineName = item.name;
    this.quantity = item.stock;
    this.selectedCategory = item.category;
    const [year, month] = item.expiry.split("-").map(Number);
    this.expiryDate = new Date(year, month - 1, 1);
    this.errors = {};
    this.showAddDialog = true;
  }
  saveMedicine() {
    if (!this.validate())
      return;
    const stock = this.quantity ?? 0;
    const item = {
      id: this.editingMedicineId ?? "",
      name: this.medicineName.trim(),
      category: this.selectedCategory,
      expiry: this.formatExpiry(this.expiryDate),
      stock,
      level: this.getLevel(stock)
    };
    if (this.isEditMode && this.editingMedicineId) {
      this.inventoryService.updateMedicine(this.editingMedicineId, item);
    } else {
      this.inventoryService.addMedicine(item);
    }
    this.closeAddDialog();
  }
  deleteMedicine() {
    if (this.editingMedicineId) {
      this.inventoryService.deleteMedicine(this.editingMedicineId);
      this.closeAddDialog();
    }
  }
  closeAddDialog() {
    this.showAddDialog = false;
    this.isEditMode = false;
    this.editingMedicineId = null;
    this.resetForm();
  }
  resetForm() {
    this.medicineName = "";
    this.quantity = null;
    this.expiryDate = null;
    this.selectedCategory = null;
    this.errors = {};
    this.editingMedicineId = null;
  }
  static \u0275fac = function InventoryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InventoryComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(InventoryService), \u0275\u0275directiveInject(PharmacyStateService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InventoryComponent, selectors: [["app-inventory"]], decls: 48, vars: 49, consts: [[1, "card", "inventory-card", "mt-6", "shadow-sm", "rounded-[1.75rem]", "border", "border-[#eef2fb]", "bg-white", "overflow-hidden"], [1, "inventory-card__header"], [1, "inventory-card__title", "m-0"], [1, "inventory-card__subtitle", "m-0"], [1, "inventory-card__action", 3, "routerLink"], [1, "inventory-card__action"], [1, "inventory-list"], ["role", "button", "tabindex", "0", 1, "inventory-row", "inventory-row--clickable"], [1, "inventory-card__footer"], [1, "inventory-card__footer-count"], ["styleClass", "custom-add-dialog", 3, "visibleChange", "visible", "modal", "closable", "contentStyle"], ["pTemplate", "header"], [1, "dialog-body"], [1, "form-group", "full"], [1, "form-label"], [1, "form-label__required"], ["type", "text", "pInputText", "", "placeholder", "e.g. Amoxicillin 500mg", 1, "full-width-input", 3, "ngModelChange", "ngModel"], [1, "form-error"], [1, "form-grid"], [1, "form-group"], ["styleClass", "full-width-input", 3, "ngModelChange", "ngModel"], ["optionLabel", "label", "optionValue", "value", "placeholder", "Select...", "styleClass", "full-width-input", 3, "ngModelChange", "options", "ngModel"], ["iconDisplay", "input", "view", "month", "dateFormat", "mm/yy", "styleClass", "full-width-input", 3, "ngModelChange", "ngModel", "showIcon"], ["pTemplate", "footer"], [1, "pi", "pi-box", "inventory-card__action-icon"], [1, "inventory-card__action", 3, "click"], [1, "pi", "pi-plus", "inventory-card__action-icon"], ["role", "button", "tabindex", "0", 1, "inventory-row", "inventory-row--clickable", 3, "click", "keydown.enter", "keydown.space"], [1, "inventory-row__main"], [1, "inventory-row__icon-wrap"], [1, "pi", "pi-link", "inventory-row__icon"], [1, "inventory-row__content"], [1, "inventory-row__name"], [1, "inventory-row__meta"], [1, "inventory-row__stats"], [1, "inventory-row__stock"], [1, "inventory-level-pill", 3, "ngClass"], [1, "dialog-header"], [1, "dialog-header__icon"], [1, "pi"], [1, "dialog-header__title"], [1, "dialog-header__subtitle"], [1, "dialog-footer"], ["type", "button", 1, "btn-delete"], [1, "dialog-footer__actions"], ["type", "button", 1, "btn-cancel", 3, "click"], ["type", "button", 1, "btn-add", 3, "click"], ["type", "button", 1, "btn-delete", 3, "click"], [1, "pi", "pi-trash"]], template: function InventoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h3", 2);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(7, InventoryComponent_Conditional_7_Template, 4, 1, "a", 4);
      \u0275\u0275conditionalCreate(8, InventoryComponent_Conditional_8_Template, 4, 0, "button", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 6);
      \u0275\u0275repeaterCreate(10, InventoryComponent_For_11_Template, 14, 6, "div", 7, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 8)(13, "span", 9);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "p-dialog", 10);
      \u0275\u0275twoWayListener("visibleChange", function InventoryComponent_Template_p_dialog_visibleChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.showAddDialog, $event) || (ctx.showAddDialog = $event);
        return $event;
      });
      \u0275\u0275template(16, InventoryComponent_ng_template_16_Template, 8, 8, "ng-template", 11);
      \u0275\u0275elementStart(17, "div", 12)(18, "div", 13)(19, "label", 14);
      \u0275\u0275text(20, " Medicine Name ");
      \u0275\u0275elementStart(21, "span", 15);
      \u0275\u0275text(22, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "input", 16);
      \u0275\u0275twoWayListener("ngModelChange", function InventoryComponent_Template_input_ngModelChange_23_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.medicineName, $event) || (ctx.medicineName = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function InventoryComponent_Template_input_ngModelChange_23_listener() {
        return ctx.validateField("name");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(24, InventoryComponent_Conditional_24_Template, 2, 1, "span", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 18)(26, "div", 19)(27, "label", 14);
      \u0275\u0275text(28, " Quantity ");
      \u0275\u0275elementStart(29, "span", 15);
      \u0275\u0275text(30, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "p-inputNumber", 20);
      \u0275\u0275twoWayListener("ngModelChange", function InventoryComponent_Template_p_inputNumber_ngModelChange_31_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.quantity, $event) || (ctx.quantity = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function InventoryComponent_Template_p_inputNumber_ngModelChange_31_listener() {
        return ctx.validateField("quantity");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(32, InventoryComponent_Conditional_32_Template, 2, 1, "span", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 19)(34, "label", 14);
      \u0275\u0275text(35, " Category ");
      \u0275\u0275elementStart(36, "span", 15);
      \u0275\u0275text(37, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "p-select", 21);
      \u0275\u0275twoWayListener("ngModelChange", function InventoryComponent_Template_p_select_ngModelChange_38_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedCategory, $event) || (ctx.selectedCategory = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function InventoryComponent_Template_p_select_ngModelChange_38_listener() {
        return ctx.validateField("category");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(39, InventoryComponent_Conditional_39_Template, 2, 1, "span", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "div", 13)(41, "label", 14);
      \u0275\u0275text(42, " Expiry Date ");
      \u0275\u0275elementStart(43, "span", 15);
      \u0275\u0275text(44, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "p-datepicker", 22);
      \u0275\u0275twoWayListener("ngModelChange", function InventoryComponent_Template_p_datepicker_ngModelChange_45_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.expiryDate, $event) || (ctx.expiryDate = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function InventoryComponent_Template_p_datepicker_ngModelChange_45_listener() {
        return ctx.validateField("expiry");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(46, InventoryComponent_Conditional_46_Template, 2, 1, "span", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(47, InventoryComponent_ng_template_47_Template, 8, 6, "ng-template", 23);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.cardTitle);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.cardSubtitle);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isInventoryPage ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isInventoryPage ? 8 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.visibleInventory);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate2(" Showing ", ctx.displayedInventoryCount, " of ", ctx.totalInventoryCount, " medicines ");
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(44, _c0));
      \u0275\u0275twoWayProperty("visible", ctx.showAddDialog);
      \u0275\u0275property("modal", true)("closable", true)("contentStyle", \u0275\u0275pureFunction0(45, _c1));
      \u0275\u0275advance(4);
      \u0275\u0275classProp("form-label--error", ctx.errors["name"]);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("input-error", ctx.errors["name"]);
      \u0275\u0275twoWayProperty("ngModel", ctx.medicineName);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.errors["name"] ? 24 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("form-label--error", ctx.errors["quantity"]);
      \u0275\u0275advance(4);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(46, _c2));
      \u0275\u0275classProp("input-error", ctx.errors["quantity"]);
      \u0275\u0275twoWayProperty("ngModel", ctx.quantity);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.errors["quantity"] ? 32 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("form-label--error", ctx.errors["category"]);
      \u0275\u0275advance(4);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(47, _c2));
      \u0275\u0275classProp("input-error", ctx.errors["category"]);
      \u0275\u0275property("options", ctx.categories);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedCategory);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.errors["category"] ? 39 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("form-label--error", ctx.errors["expiry"]);
      \u0275\u0275advance(4);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(48, _c2));
      \u0275\u0275classProp("input-error", ctx.errors["expiry"]);
      \u0275\u0275twoWayProperty("ngModel", ctx.expiryDate);
      \u0275\u0275property("showIcon", true);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.errors["expiry"] ? 46 : -1);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    RouterLink,
    DialogModule,
    Dialog,
    PrimeTemplate,
    InputNumberModule,
    InputNumber,
    SelectModule,
    Select,
    DatePicker,
    InputTextModule,
    InputText
  ], styles: ['@charset "UTF-8";\n\n\n\n.inventory-card[_ngcontent-%COMP%] {\n  box-shadow: 0 18px 45px -38px rgba(33, 56, 115, 0.35);\n}\n.inventory-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1.5rem;\n  padding: 1.1rem 1.1rem 0.75rem 1.1rem;\n}\n.inventory-card__title[_ngcontent-%COMP%] {\n  color: #16325c;\n  font-size: 1.28rem;\n  font-weight: 700;\n  letter-spacing: -0.01em;\n  line-height: 1.2;\n}\n.inventory-card__subtitle[_ngcontent-%COMP%] {\n  margin-top: 0.28rem;\n  color: #97a4be;\n  font-size: 0.96rem;\n  font-weight: 500;\n  line-height: 1.35;\n}\n.inventory-card__action[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.45rem;\n  padding: 0.8rem 1.1rem;\n  border-radius: 0.8rem;\n  background:\n    linear-gradient(\n      135deg,\n      color-mix(in srgb, var(--primary-color) 72%, #8bb8ff),\n      var(--primary-color));\n  color: #ffffff;\n  font-size: 0.95rem;\n  font-weight: 600;\n  text-decoration: none;\n  line-height: 1;\n  box-shadow: 0 16px 28px -22px rgba(76, 136, 255, 0.95);\n  transition: background-color 160ms ease, transform 160ms ease;\n}\n.inventory-card__action[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      color-mix(in srgb, var(--primary-color) 66%, #8bb8ff),\n      color-mix(in srgb, var(--primary-color) 90%, #1d4ed8));\n  transform: translateY(-1px);\n}\n.inventory-card__action-icon[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n}\n.inventory-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.inventory-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 0.78rem 1.1rem;\n  border-top: 1px solid #eff3fb;\n  cursor: pointer;\n  transition: background-color 160ms ease;\n}\n.inventory-row[_ngcontent-%COMP%]:hover {\n  background: #fbfcff;\n}\n.inventory-row--clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.inventory-row[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid rgba(76, 136, 255, 0.28);\n  outline-offset: -2px;\n  background: #fbfcff;\n}\n.inventory-row__main[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.7rem;\n  min-width: 0;\n}\n.inventory-row__icon-wrap[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 1.75rem;\n  height: 1.75rem;\n  border-radius: 0.6rem;\n  background: color-mix(in srgb, var(--primary-color) 12%, transparent);\n  color: var(--primary-color);\n  flex-shrink: 0;\n}\n.inventory-row__icon[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.inventory-row__content[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.inventory-row__name[_ngcontent-%COMP%] {\n  color: #233a63;\n  font-size: 0.94rem;\n  font-weight: 600;\n  line-height: 1.25;\n}\n.inventory-row__meta[_ngcontent-%COMP%] {\n  margin-top: 0.16rem;\n  color: #9aa7bf;\n  font-size: 0.76rem;\n  font-weight: 500;\n  line-height: 1.2;\n}\n.inventory-row__stats[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-shrink: 0;\n}\n.inventory-row__stock[_ngcontent-%COMP%] {\n  min-width: 2rem;\n  color: #233a63;\n  font-size: 0.96rem;\n  font-weight: 700;\n  text-align: right;\n}\n.inventory-level-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 3rem;\n  padding: 0.35rem 0.6rem;\n  border-radius: 999px;\n  font-size: 0.74rem;\n  font-weight: 600;\n  line-height: 1;\n  background: #eef6ff;\n  color: #2f6df6;\n}\n.inventory-level-pill--high[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--primary-color) 12%, transparent);\n  color: var(--primary-color);\n}\n.inventory-level-pill--normal[_ngcontent-%COMP%] {\n  background: #eef8ff;\n  color: #1f8ed8;\n}\n.inventory-level-pill--low[_ngcontent-%COMP%] {\n  background: #fff7e8;\n  color: #de8a11;\n}\n.inventory-card__footer[_ngcontent-%COMP%] {\n  padding: 0.78rem 1.1rem 0.9rem;\n  border-top: 1px solid #eff3fb;\n}\n.inventory-card__footer-count[_ngcontent-%COMP%] {\n  color: #9aa7bf;\n  font-size: 0.82rem;\n  font-weight: 500;\n}\n.full-width-input[_ngcontent-%COMP%], \n.full-width-input[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%], \n.full-width-input[_ngcontent-%COMP%]   .p-dropdown[_ngcontent-%COMP%], \n.full-width-input[_ngcontent-%COMP%]   .p-inputnumber[_ngcontent-%COMP%], \n.full-width-input[_ngcontent-%COMP%]   .p-datepicker[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n[_ngcontent-%COMP%]::v-deep   .custom-add-dialog[_ngcontent-%COMP%]   .p-dialog[_ngcontent-%COMP%] {\n  border-radius: 20px !important;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);\n}\n[_ngcontent-%COMP%]::v-deep   .custom-add-dialog[_ngcontent-%COMP%]   .p-dialog-header[_ngcontent-%COMP%] {\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  padding: 24px;\n}\n[_ngcontent-%COMP%]::v-deep   .full-width-input[_ngcontent-%COMP%], \n[_ngcontent-%COMP%]::v-deep   .full-width-input[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%], \n[_ngcontent-%COMP%]::v-deep   .full-width-input.p-dropdown[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 48px !important;\n  background: #f8fafc !important;\n  border: 1px solid #e2e8f0 !important;\n  border-radius: 12px !important;\n  display: flex;\n  align-items: center;\n}\n[_ngcontent-%COMP%]::v-deep   .p-calendar.full-width-input[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%] {\n  border: none !important;\n}\n.form-group[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.form-label[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-weight: 600;\n  color: #475569;\n  margin-bottom: 8px;\n  font-size: 0.9rem;\n}\n.form-label__required[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-weight: 700;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  border: none;\n  border-radius: 12px;\n  padding: 12px 30px;\n  font-weight: 600;\n  color: #475569;\n  cursor: pointer;\n  transition: 0.3s;\n  min-width: 120px;\n}\n.btn-add[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      color-mix(in srgb, var(--primary-color) 72%, #8bb8ff),\n      var(--primary-color));\n  border: none;\n  border-radius: 12px;\n  padding: 12px 30px;\n  font-weight: 600;\n  color: white;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  transition: 0.3s;\n  min-width: 160px;\n}\n.btn-add[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      color-mix(in srgb, var(--primary-color) 66%, #8bb8ff),\n      color-mix(in srgb, var(--primary-color) 90%, #1d4ed8));\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.form-group.full[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n.form-group[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.dialog-body[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 18px;\n}\n.dialog-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.dialog-header__title[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-size: 1.03rem;\n  font-weight: 700;\n  line-height: 1.2;\n}\n.dialog-header__subtitle[_ngcontent-%COMP%] {\n  margin-top: 0.15rem;\n  color: #94a3b8;\n  font-size: 0.86rem;\n  font-weight: 500;\n  line-height: 1.35;\n}\n.dialog-header__icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background: #e8f0ff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.dialog-header__icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-size: 18px;\n}\n.dialog-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.dialog-footer__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-left: auto;\n}\n.btn-delete[_ngcontent-%COMP%] {\n  background: #fff1f1;\n  border: 1px solid #fecaca;\n  border-radius: 12px;\n  padding: 12px 20px;\n  font-weight: 600;\n  color: #dc2626;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  transition: 0.3s;\n}\n.btn-delete[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  border-color: #f87171;\n}\n.form-error[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 4px;\n  font-size: 0.78rem;\n  font-weight: 500;\n  color: #dc2626;\n}\n.input-error[_ngcontent-%COMP%], \n.input-error[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%], \n.input-error.p-inputnumber[_ngcontent-%COMP%], \n.input-error.p-datepicker[_ngcontent-%COMP%] {\n  border-color: #f87171 !important;\n}\n.dialog-header__icon--edit[_ngcontent-%COMP%] {\n  background: #fef3c7;\n}\n.dialog-header__icon--edit[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n[_ngcontent-%COMP%]::v-deep   .input-error[_ngcontent-%COMP%], \n[_ngcontent-%COMP%]::v-deep   .input-error[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%], \n[_ngcontent-%COMP%]::v-deep   .input-error[_ngcontent-%COMP%]   .p-inputnumber-input[_ngcontent-%COMP%], \n[_ngcontent-%COMP%]::v-deep   .input-error[_ngcontent-%COMP%]   .p-select-label[_ngcontent-%COMP%], \n[_ngcontent-%COMP%]::v-deep   .input-error[_ngcontent-%COMP%]   .p-datepicker-input[_ngcontent-%COMP%] {\n  border-color: #f87171 !important;\n  box-shadow: 0 0 0 1px rgba(248, 113, 113, 0.14);\n}\n[_ngcontent-%COMP%]::v-deep   .input-error.p-inputnumber[_ngcontent-%COMP%], \n[_ngcontent-%COMP%]::v-deep   .input-error.p-select[_ngcontent-%COMP%], \n[_ngcontent-%COMP%]::v-deep   .input-error.p-datepicker[_ngcontent-%COMP%] {\n  border-color: #f87171 !important;\n  box-shadow: 0 0 0 1px rgba(248, 113, 113, 0.14);\n}\n.app-dark[_nghost-%COMP%]   .inventory-card[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .inventory-card[_ngcontent-%COMP%] {\n  background: var(--surface-card);\n  border-color: var(--surface-border);\n  box-shadow: 0 18px 45px -42px rgba(6, 16, 32, 0.68);\n}\n.app-dark[_nghost-%COMP%]   .inventory-card__title[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .inventory-card__title[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   .inventory-row__name[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .inventory-row__name[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   .inventory-row__stock[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .inventory-row__stock[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   .dialog-header__title[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .dialog-header__title[_ngcontent-%COMP%] {\n  color: var(--text-color);\n}\n.app-dark[_nghost-%COMP%]   .inventory-card__subtitle[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .inventory-card__subtitle[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   .inventory-row__meta[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .inventory-row__meta[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   .inventory-card__footer-count[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .inventory-card__footer-count[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   .dialog-header__subtitle[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .dialog-header__subtitle[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   .form-label[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n}\n.app-dark[_nghost-%COMP%]   .inventory-row[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .inventory-row[_ngcontent-%COMP%] {\n  border-top-color: var(--surface-border);\n}\n.app-dark[_nghost-%COMP%]   .inventory-row[_ngcontent-%COMP%]:hover, .app-dark   [_nghost-%COMP%]   .inventory-row[_ngcontent-%COMP%]:hover {\n  background: var(--surface-hover);\n}\n.app-dark[_nghost-%COMP%]   .inventory-row__icon-wrap[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .inventory-row__icon-wrap[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--primary-color) 14%, transparent);\n  color: color-mix(in srgb, var(--primary-color) 56%, white);\n}\n.app-dark[_nghost-%COMP%]   .inventory-level-pill[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .inventory-level-pill[_ngcontent-%COMP%] {\n  background: var(--surface-hover);\n  color: var(--text-color-secondary);\n}\n.app-dark[_nghost-%COMP%]   .inventory-level-pill--high[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .inventory-level-pill--high[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--primary-color) 12%, transparent);\n  color: color-mix(in srgb, var(--primary-color) 56%, white);\n}\n.app-dark[_nghost-%COMP%]   .inventory-level-pill--normal[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .inventory-level-pill--normal[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, #22c55e 12%, transparent);\n  color: color-mix(in srgb, #22c55e 58%, white);\n}\n.app-dark[_nghost-%COMP%]   .inventory-level-pill--low[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .inventory-level-pill--low[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, #f59e0b 14%, transparent);\n  color: #fbbf24;\n}\n.app-dark[_nghost-%COMP%]   .dialog-header__icon[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .dialog-header__icon[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--primary-color) 14%, transparent);\n}\n.app-dark[_nghost-%COMP%]   .dialog-header__icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .dialog-header__icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: color-mix(in srgb, var(--primary-color) 56%, white);\n}\n.app-dark[_nghost-%COMP%]   .dialog-header__icon--edit[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .dialog-header__icon--edit[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, #f59e0b 16%, transparent);\n}\n.app-dark[_nghost-%COMP%]   .dialog-header__icon--edit[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .dialog-header__icon--edit[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fbbf24;\n}\n.app-dark[_nghost-%COMP%]   .form-error[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .form-error[_ngcontent-%COMP%] {\n  color: #ff8a92;\n}\n.app-dark[_nghost-%COMP%]   .btn-cancel[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .btn-cancel[_ngcontent-%COMP%] {\n  background: var(--surface-hover);\n  color: var(--text-color);\n}\n.app-dark[_nghost-%COMP%]   .btn-cancel[_ngcontent-%COMP%]:hover, .app-dark   [_nghost-%COMP%]   .btn-cancel[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--surface-hover) 78%, var(--surface-card));\n}\n.app-dark[_nghost-%COMP%]   .btn-add[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      color-mix(in srgb, var(--primary-color) 70%, #8bb8ff),\n      var(--primary-color));\n}\n.app-dark[_nghost-%COMP%]   .btn-delete[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .btn-delete[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, #ef4444 12%, transparent);\n  border-color: color-mix(in srgb, #ef4444 22%, transparent);\n  color: #ff8a92;\n}\n.app-dark[_nghost-%COMP%]   .btn-delete[_ngcontent-%COMP%]:hover, .app-dark   [_nghost-%COMP%]   .btn-delete[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, #ef4444 18%, transparent);\n  border-color: color-mix(in srgb, #ef4444 30%, transparent);\n}\n.app-dark[_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .custom-add-dialog[_ngcontent-%COMP%]   .p-dialog[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .custom-add-dialog[_ngcontent-%COMP%]   .p-dialog[_ngcontent-%COMP%] {\n  background: var(--surface-card);\n  border: 1px solid var(--surface-border);\n}\n.app-dark[_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .custom-add-dialog[_ngcontent-%COMP%]   .p-dialog-header[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .custom-add-dialog[_ngcontent-%COMP%]   .p-dialog-header[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .custom-add-dialog[_ngcontent-%COMP%]   .p-dialog-content[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .custom-add-dialog[_ngcontent-%COMP%]   .p-dialog-content[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .custom-add-dialog[_ngcontent-%COMP%]   .p-dialog-footer[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .custom-add-dialog[_ngcontent-%COMP%]   .p-dialog-footer[_ngcontent-%COMP%] {\n  background: var(--surface-card);\n  color: var(--text-color);\n}\n.app-dark[_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .full-width-input[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .full-width-input[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .full-width-input[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .full-width-input[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .full-width-input.p-dropdown[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .full-width-input.p-dropdown[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .full-width-input[_ngcontent-%COMP%]   .p-inputnumber-input[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .full-width-input[_ngcontent-%COMP%]   .p-inputnumber-input[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .full-width-input[_ngcontent-%COMP%]   .p-datepicker-input[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .full-width-input[_ngcontent-%COMP%]   .p-datepicker-input[_ngcontent-%COMP%] {\n  background: var(--surface-overlay) !important;\n  border-color: var(--surface-border) !important;\n  color: var(--text-color) !important;\n}\n.app-dark[_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .p-select-label[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .p-select-label[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .p-datepicker-input[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .p-datepicker-input[_ngcontent-%COMP%] {\n  color: var(--text-color) !important;\n}\n.app-dark[_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .input-error[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .input-error[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .input-error[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .input-error[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .input-error[_ngcontent-%COMP%]   .p-inputnumber-input[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .input-error[_ngcontent-%COMP%]   .p-inputnumber-input[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .input-error[_ngcontent-%COMP%]   .p-select-label[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .input-error[_ngcontent-%COMP%]   .p-select-label[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .input-error[_ngcontent-%COMP%]   .p-datepicker-input[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   [_ngcontent-%COMP%]::v-deep   .input-error[_ngcontent-%COMP%]   .p-datepicker-input[_ngcontent-%COMP%] {\n  border-color: #ff8a92 !important;\n  box-shadow: 0 0 0 1px color-mix(in srgb, #ff8a92 16%, transparent);\n}\n/*# sourceMappingURL=inventory.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InventoryComponent, [{
    type: Component,
    args: [{ selector: "app-inventory", standalone: true, imports: [
      CommonModule,
      FormsModule,
      RouterLink,
      DialogModule,
      InputNumberModule,
      SelectModule,
      DatePicker,
      InputTextModule
    ], template: `<div class="card inventory-card mt-6 shadow-sm rounded-[1.75rem] border border-[#eef2fb] bg-white overflow-hidden">
    <div class="inventory-card__header">
        <div>
            <h3 class="inventory-card__title m-0">{{ cardTitle }}</h3>
            <p class="inventory-card__subtitle m-0">{{ cardSubtitle }}</p>
        </div>

        @if (!isInventoryPage) {
            <a class="inventory-card__action" [routerLink]="inventoryPageLink">
                <i class="pi pi-box inventory-card__action-icon"></i>
                <span>Manage Inventory</span>
            </a>
        }

        @if (isInventoryPage) {
            <button class="inventory-card__action" (click)="openAddDialog()">
                <i class="pi pi-plus inventory-card__action-icon"></i>
                <span>Add Medicine</span>
            </button>
        }
    </div>

    <div class="inventory-list">
        @for (item of visibleInventory; track item.id) {
            <div class="inventory-row inventory-row--clickable" role="button" tabindex="0"
                (click)="openEditDialog(item)"
                (keydown.enter)="openEditDialog(item)"
                (keydown.space)="$event.preventDefault(); openEditDialog(item)">
                <div class="inventory-row__main">
                    <div class="inventory-row__icon-wrap">
                        <i class="pi pi-link inventory-row__icon"></i>
                    </div>

                    <div class="inventory-row__content">
                        <div class="inventory-row__name">{{ item.name }}</div>
                        <div class="inventory-row__meta">{{ item.category }} - Exp: {{ item.expiry }}</div>
                    </div>
                </div>

                <div class="inventory-row__stats">
                    <span class="inventory-row__stock">{{ item.stock }}</span>
                    <span class="inventory-level-pill" [ngClass]="'inventory-level-pill--' + item.level.toLowerCase()">
                        {{ item.level }}
                    </span>
                </div>
            </div>
        }
    </div>

    <div class="inventory-card__footer">
        <span class="inventory-card__footer-count">
            Showing {{ displayedInventoryCount }} of {{ totalInventoryCount }} medicines
        </span>
    </div>
</div>

<p-dialog [(visible)]="showAddDialog" [modal]="true" [closable]="true" [style]="{width: '520px'}"
    [contentStyle]="{'overflow': 'visible'}" styleClass="custom-add-dialog">

    <ng-template pTemplate="header">
        <div class="dialog-header">
            <div class="dialog-header__icon" [class.dialog-header__icon--edit]="isEditMode">
                <i class="pi" [class.pi-plus]="!isEditMode" [class.pi-pencil]="isEditMode"></i>
            </div>
            <div>
                <div class="dialog-header__title">{{ isEditMode ? 'Edit Medicine' : 'Add New Medicine' }}</div>
                <div class="dialog-header__subtitle">
                    {{ isEditMode ? 'Update the medicine details below' : 'Fill in the medicine details below' }}
                </div>
            </div>
        </div>
    </ng-template>

    <div class="dialog-body">

        <!-- Medicine Name -->
        <div class="form-group full">
            <label class="form-label" [class.form-label--error]="errors['name']">
                Medicine Name
                <span class="form-label__required">*</span>
            </label>
            <input type="text" pInputText placeholder="e.g. Amoxicillin 500mg" class="full-width-input"
                [(ngModel)]="medicineName" (ngModelChange)="validateField('name')"
                [class.input-error]="errors['name']" />
            @if (errors['name']) {
                <span class="form-error">{{ errors['name'] }}</span>
            }
        </div>

        <!-- Row: Quantity + Category -->
        <div class="form-grid">

            <div class="form-group">
                <label class="form-label" [class.form-label--error]="errors['quantity']">
                    Quantity
                    <span class="form-label__required">*</span>
                </label>
                <p-inputNumber [(ngModel)]="quantity" styleClass="full-width-input" [style]="{ width: '100%' }"
                    (ngModelChange)="validateField('quantity')"
                    [class.input-error]="errors['quantity']">
                </p-inputNumber>
                @if (errors['quantity']) {
                    <span class="form-error">{{ errors['quantity'] }}</span>
                }
            </div>

            <div class="form-group">
                <label class="form-label" [class.form-label--error]="errors['category']">
                    Category
                    <span class="form-label__required">*</span>
                </label>
                <p-select [options]="categories" optionLabel="label" optionValue="value"
                    [(ngModel)]="selectedCategory" placeholder="Select..."
                    (ngModelChange)="validateField('category')"
                    styleClass="full-width-input" [style]="{ width: '100%' }"
                    [class.input-error]="errors['category']">
                </p-select>
                @if (errors['category']) {
                    <span class="form-error">{{ errors['category'] }}</span>
                }
            </div>

        </div>

        <div class="form-group full">
            <label class="form-label" [class.form-label--error]="errors['expiry']">
                Expiry Date
                <span class="form-label__required">*</span>
            </label>
            <p-datepicker [(ngModel)]="expiryDate" [showIcon]="true" iconDisplay="input" view="month"
                dateFormat="mm/yy" styleClass="full-width-input" (ngModelChange)="validateField('expiry')"
                [style]="{ width: '100%' }" [class.input-error]="errors['expiry']">
            </p-datepicker>
            @if (errors['expiry']) {
                <span class="form-error">{{ errors['expiry'] }}</span>
            }
        </div>

    </div>

    <ng-template pTemplate="footer">
        <div class="dialog-footer">
            @if (isEditMode) {
                <button type="button" class="btn-delete" (click)="deleteMedicine()">
                    <i class="pi pi-trash"></i>
                    Delete
                </button>
            }
            <div class="dialog-footer__actions">
                <button type="button" class="btn-cancel" (click)="closeAddDialog()">Cancel</button>
                <button type="button" class="btn-add" (click)="saveMedicine()">
                    <i class="pi" [class.pi-plus]="!isEditMode" [class.pi-check]="isEditMode"></i>
                    {{ isEditMode ? 'Save Changes' : 'Add Medicine' }}
                </button>
            </div>
        </div>
    </ng-template>
</p-dialog>
`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/admin/Inventory/inventory.component.scss */\n.inventory-card {\n  box-shadow: 0 18px 45px -38px rgba(33, 56, 115, 0.35);\n}\n.inventory-card__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1.5rem;\n  padding: 1.1rem 1.1rem 0.75rem 1.1rem;\n}\n.inventory-card__title {\n  color: #16325c;\n  font-size: 1.28rem;\n  font-weight: 700;\n  letter-spacing: -0.01em;\n  line-height: 1.2;\n}\n.inventory-card__subtitle {\n  margin-top: 0.28rem;\n  color: #97a4be;\n  font-size: 0.96rem;\n  font-weight: 500;\n  line-height: 1.35;\n}\n.inventory-card__action {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.45rem;\n  padding: 0.8rem 1.1rem;\n  border-radius: 0.8rem;\n  background:\n    linear-gradient(\n      135deg,\n      color-mix(in srgb, var(--primary-color) 72%, #8bb8ff),\n      var(--primary-color));\n  color: #ffffff;\n  font-size: 0.95rem;\n  font-weight: 600;\n  text-decoration: none;\n  line-height: 1;\n  box-shadow: 0 16px 28px -22px rgba(76, 136, 255, 0.95);\n  transition: background-color 160ms ease, transform 160ms ease;\n}\n.inventory-card__action:hover {\n  background:\n    linear-gradient(\n      135deg,\n      color-mix(in srgb, var(--primary-color) 66%, #8bb8ff),\n      color-mix(in srgb, var(--primary-color) 90%, #1d4ed8));\n  transform: translateY(-1px);\n}\n.inventory-card__action-icon {\n  font-size: 0.78rem;\n}\n.inventory-list {\n  display: flex;\n  flex-direction: column;\n}\n.inventory-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 0.78rem 1.1rem;\n  border-top: 1px solid #eff3fb;\n  cursor: pointer;\n  transition: background-color 160ms ease;\n}\n.inventory-row:hover {\n  background: #fbfcff;\n}\n.inventory-row--clickable {\n  cursor: pointer;\n}\n.inventory-row:focus-visible {\n  outline: 2px solid rgba(76, 136, 255, 0.28);\n  outline-offset: -2px;\n  background: #fbfcff;\n}\n.inventory-row__main {\n  display: flex;\n  align-items: center;\n  gap: 0.7rem;\n  min-width: 0;\n}\n.inventory-row__icon-wrap {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 1.75rem;\n  height: 1.75rem;\n  border-radius: 0.6rem;\n  background: color-mix(in srgb, var(--primary-color) 12%, transparent);\n  color: var(--primary-color);\n  flex-shrink: 0;\n}\n.inventory-row__icon {\n  font-size: 0.8rem;\n}\n.inventory-row__content {\n  min-width: 0;\n}\n.inventory-row__name {\n  color: #233a63;\n  font-size: 0.94rem;\n  font-weight: 600;\n  line-height: 1.25;\n}\n.inventory-row__meta {\n  margin-top: 0.16rem;\n  color: #9aa7bf;\n  font-size: 0.76rem;\n  font-weight: 500;\n  line-height: 1.2;\n}\n.inventory-row__stats {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-shrink: 0;\n}\n.inventory-row__stock {\n  min-width: 2rem;\n  color: #233a63;\n  font-size: 0.96rem;\n  font-weight: 700;\n  text-align: right;\n}\n.inventory-level-pill {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 3rem;\n  padding: 0.35rem 0.6rem;\n  border-radius: 999px;\n  font-size: 0.74rem;\n  font-weight: 600;\n  line-height: 1;\n  background: #eef6ff;\n  color: #2f6df6;\n}\n.inventory-level-pill--high {\n  background: color-mix(in srgb, var(--primary-color) 12%, transparent);\n  color: var(--primary-color);\n}\n.inventory-level-pill--normal {\n  background: #eef8ff;\n  color: #1f8ed8;\n}\n.inventory-level-pill--low {\n  background: #fff7e8;\n  color: #de8a11;\n}\n.inventory-card__footer {\n  padding: 0.78rem 1.1rem 0.9rem;\n  border-top: 1px solid #eff3fb;\n}\n.inventory-card__footer-count {\n  color: #9aa7bf;\n  font-size: 0.82rem;\n  font-weight: 500;\n}\n.full-width-input,\n.full-width-input .p-inputtext,\n.full-width-input .p-dropdown,\n.full-width-input .p-inputnumber,\n.full-width-input .p-datepicker {\n  width: 100% !important;\n}\n::v-deep .custom-add-dialog .p-dialog {\n  border-radius: 20px !important;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);\n}\n::v-deep .custom-add-dialog .p-dialog-header {\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  padding: 24px;\n}\n::v-deep .full-width-input,\n::v-deep .full-width-input .p-inputtext,\n::v-deep .full-width-input.p-dropdown {\n  width: 100% !important;\n  height: 48px !important;\n  background: #f8fafc !important;\n  border: 1px solid #e2e8f0 !important;\n  border-radius: 12px !important;\n  display: flex;\n  align-items: center;\n}\n::v-deep .p-calendar.full-width-input .p-inputtext {\n  border: none !important;\n}\n.form-group {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.form-label {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-weight: 600;\n  color: #475569;\n  margin-bottom: 8px;\n  font-size: 0.9rem;\n}\n.form-label__required {\n  color: #ef4444;\n  font-weight: 700;\n}\n.btn-cancel {\n  background: #f1f5f9;\n  border: none;\n  border-radius: 12px;\n  padding: 12px 30px;\n  font-weight: 600;\n  color: #475569;\n  cursor: pointer;\n  transition: 0.3s;\n  min-width: 120px;\n}\n.btn-add {\n  background:\n    linear-gradient(\n      135deg,\n      color-mix(in srgb, var(--primary-color) 72%, #8bb8ff),\n      var(--primary-color));\n  border: none;\n  border-radius: 12px;\n  padding: 12px 30px;\n  font-weight: 600;\n  color: white;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  transition: 0.3s;\n  min-width: 160px;\n}\n.btn-add:hover {\n  background:\n    linear-gradient(\n      135deg,\n      color-mix(in srgb, var(--primary-color) 66%, #8bb8ff),\n      color-mix(in srgb, var(--primary-color) 90%, #1d4ed8));\n}\n.btn-cancel:hover {\n  background: #e2e8f0;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.form-group.full {\n  grid-column: span 2;\n}\n.form-group {\n  width: 100%;\n}\n.dialog-body {\n  display: grid;\n  gap: 18px;\n}\n.dialog-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.dialog-header__title {\n  color: #0f172a;\n  font-size: 1.03rem;\n  font-weight: 700;\n  line-height: 1.2;\n}\n.dialog-header__subtitle {\n  margin-top: 0.15rem;\n  color: #94a3b8;\n  font-size: 0.86rem;\n  font-weight: 500;\n  line-height: 1.35;\n}\n.dialog-header__icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background: #e8f0ff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.dialog-header__icon i {\n  color: var(--primary-color);\n  font-size: 18px;\n}\n.dialog-footer {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.dialog-footer__actions {\n  display: flex;\n  gap: 12px;\n  margin-left: auto;\n}\n.btn-delete {\n  background: #fff1f1;\n  border: 1px solid #fecaca;\n  border-radius: 12px;\n  padding: 12px 20px;\n  font-weight: 600;\n  color: #dc2626;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  transition: 0.3s;\n}\n.btn-delete:hover {\n  background: #fee2e2;\n  border-color: #f87171;\n}\n.form-error {\n  display: block;\n  margin-top: 4px;\n  font-size: 0.78rem;\n  font-weight: 500;\n  color: #dc2626;\n}\n.input-error,\n.input-error .p-inputtext,\n.input-error.p-inputnumber,\n.input-error.p-datepicker {\n  border-color: #f87171 !important;\n}\n.dialog-header__icon--edit {\n  background: #fef3c7;\n}\n.dialog-header__icon--edit i {\n  color: #d97706;\n}\n::v-deep .input-error,\n::v-deep .input-error .p-inputtext,\n::v-deep .input-error .p-inputnumber-input,\n::v-deep .input-error .p-select-label,\n::v-deep .input-error .p-datepicker-input {\n  border-color: #f87171 !important;\n  box-shadow: 0 0 0 1px rgba(248, 113, 113, 0.14);\n}\n::v-deep .input-error.p-inputnumber,\n::v-deep .input-error.p-select,\n::v-deep .input-error.p-datepicker {\n  border-color: #f87171 !important;\n  box-shadow: 0 0 0 1px rgba(248, 113, 113, 0.14);\n}\n:host-context(.app-dark) .inventory-card {\n  background: var(--surface-card);\n  border-color: var(--surface-border);\n  box-shadow: 0 18px 45px -42px rgba(6, 16, 32, 0.68);\n}\n:host-context(.app-dark) .inventory-card__title,\n:host-context(.app-dark) .inventory-row__name,\n:host-context(.app-dark) .inventory-row__stock,\n:host-context(.app-dark) .dialog-header__title {\n  color: var(--text-color);\n}\n:host-context(.app-dark) .inventory-card__subtitle,\n:host-context(.app-dark) .inventory-row__meta,\n:host-context(.app-dark) .inventory-card__footer-count,\n:host-context(.app-dark) .dialog-header__subtitle,\n:host-context(.app-dark) .form-label {\n  color: var(--text-color-secondary);\n}\n:host-context(.app-dark) .inventory-row {\n  border-top-color: var(--surface-border);\n}\n:host-context(.app-dark) .inventory-row:hover {\n  background: var(--surface-hover);\n}\n:host-context(.app-dark) .inventory-row__icon-wrap {\n  background: color-mix(in srgb, var(--primary-color) 14%, transparent);\n  color: color-mix(in srgb, var(--primary-color) 56%, white);\n}\n:host-context(.app-dark) .inventory-level-pill {\n  background: var(--surface-hover);\n  color: var(--text-color-secondary);\n}\n:host-context(.app-dark) .inventory-level-pill--high {\n  background: color-mix(in srgb, var(--primary-color) 12%, transparent);\n  color: color-mix(in srgb, var(--primary-color) 56%, white);\n}\n:host-context(.app-dark) .inventory-level-pill--normal {\n  background: color-mix(in srgb, #22c55e 12%, transparent);\n  color: color-mix(in srgb, #22c55e 58%, white);\n}\n:host-context(.app-dark) .inventory-level-pill--low {\n  background: color-mix(in srgb, #f59e0b 14%, transparent);\n  color: #fbbf24;\n}\n:host-context(.app-dark) .dialog-header__icon {\n  background: color-mix(in srgb, var(--primary-color) 14%, transparent);\n}\n:host-context(.app-dark) .dialog-header__icon i {\n  color: color-mix(in srgb, var(--primary-color) 56%, white);\n}\n:host-context(.app-dark) .dialog-header__icon--edit {\n  background: color-mix(in srgb, #f59e0b 16%, transparent);\n}\n:host-context(.app-dark) .dialog-header__icon--edit i {\n  color: #fbbf24;\n}\n:host-context(.app-dark) .form-error {\n  color: #ff8a92;\n}\n:host-context(.app-dark) .btn-cancel {\n  background: var(--surface-hover);\n  color: var(--text-color);\n}\n:host-context(.app-dark) .btn-cancel:hover {\n  background: color-mix(in srgb, var(--surface-hover) 78%, var(--surface-card));\n}\n:host-context(.app-dark) .btn-add {\n  background:\n    linear-gradient(\n      135deg,\n      color-mix(in srgb, var(--primary-color) 70%, #8bb8ff),\n      var(--primary-color));\n}\n:host-context(.app-dark) .btn-delete {\n  background: color-mix(in srgb, #ef4444 12%, transparent);\n  border-color: color-mix(in srgb, #ef4444 22%, transparent);\n  color: #ff8a92;\n}\n:host-context(.app-dark) .btn-delete:hover {\n  background: color-mix(in srgb, #ef4444 18%, transparent);\n  border-color: color-mix(in srgb, #ef4444 30%, transparent);\n}\n:host-context(.app-dark) ::v-deep .custom-add-dialog .p-dialog {\n  background: var(--surface-card);\n  border: 1px solid var(--surface-border);\n}\n:host-context(.app-dark) ::v-deep .custom-add-dialog .p-dialog-header,\n:host-context(.app-dark) ::v-deep .custom-add-dialog .p-dialog-content,\n:host-context(.app-dark) ::v-deep .custom-add-dialog .p-dialog-footer {\n  background: var(--surface-card);\n  color: var(--text-color);\n}\n:host-context(.app-dark) ::v-deep .full-width-input,\n:host-context(.app-dark) ::v-deep .full-width-input .p-inputtext,\n:host-context(.app-dark) ::v-deep .full-width-input.p-dropdown,\n:host-context(.app-dark) ::v-deep .full-width-input .p-inputnumber-input,\n:host-context(.app-dark) ::v-deep .full-width-input .p-datepicker-input {\n  background: var(--surface-overlay) !important;\n  border-color: var(--surface-border) !important;\n  color: var(--text-color) !important;\n}\n:host-context(.app-dark) ::v-deep .p-select-label,\n:host-context(.app-dark) ::v-deep .p-datepicker-input {\n  color: var(--text-color) !important;\n}\n:host-context(.app-dark) ::v-deep .input-error,\n:host-context(.app-dark) ::v-deep .input-error .p-inputtext,\n:host-context(.app-dark) ::v-deep .input-error .p-inputnumber-input,\n:host-context(.app-dark) ::v-deep .input-error .p-select-label,\n:host-context(.app-dark) ::v-deep .input-error .p-datepicker-input {\n  border-color: #ff8a92 !important;\n  box-shadow: 0 0 0 1px color-mix(in srgb, #ff8a92 16%, transparent);\n}\n/*# sourceMappingURL=inventory.component.css.map */\n'] }]
  }], () => [{ type: Router }, { type: InventoryService }, { type: PharmacyStateService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InventoryComponent, { className: "InventoryComponent", filePath: "app/pages/admin/inventory/inventory.component.ts", lineNumber: 21 });
})();

export {
  InventoryComponent
};
//# sourceMappingURL=chunk-IRE57KCI.js.map
