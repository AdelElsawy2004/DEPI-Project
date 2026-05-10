import {
  InventoryService
} from "./chunk-GPTXMCFV.js";
import {
  ReservationsService
} from "./chunk-G6NP3LRV.js";
import {
  PharmacyStateService
} from "./chunk-GJV7VJIM.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-LW7YESJ6.js";
import "./chunk-N2DG2MZF.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-6FH5EJK4.js";
import "./chunk-R2QGWZ7S.js";

// src/app/pages/admin/profile/profile.component.ts
var _c0 = () => ({ standalone: true });
var _forTrack0 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.title;
function ProfileComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 8)(1, "span", 22);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const contact_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classMap(contact_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(contact_r1.value);
  }
}
function ProfileComponent_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const stat_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r2.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r2.label);
  }
}
function ProfileComponent_For_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 26);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_For_30_Template_input_ngModelChange_3_listener($event) {
      const field_r4 = \u0275\u0275restoreView(_r3).$implicit;
      \u0275\u0275twoWayBindingSet(field_r4.value, $event) || (field_r4.value = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const field_r4 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(field_r4.label);
    \u0275\u0275advance();
    \u0275\u0275classProp("profile-field__input--editable", ctx_r4.isEditMode);
    \u0275\u0275twoWayProperty("ngModel", field_r4.value);
    \u0275\u0275property("readonly", !ctx_r4.isEditMode)("ngModelOptions", \u0275\u0275pureFunction0(6, _c0));
  }
}
function ProfileComponent_For_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "span");
    \u0275\u0275element(2, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 28);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const activity_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("activity-row__icon activity-row__icon--", activity_r6.tone));
    \u0275\u0275advance();
    \u0275\u0275classMap(activity_r6.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(activity_r6.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(activity_r6.time);
  }
}
var ProfileComponent = class _ProfileComponent {
  appState = inject(PharmacyStateService);
  inventoryService = inject(InventoryService);
  reservationsService = inject(ReservationsService);
  isEditMode = false;
  profileFields = this.buildProfileFields(this.appState.profile());
  activities = [
    {
      icon: "pi pi-check",
      time: "2 hours ago",
      title: "Confirmed reservation #204",
      tone: "green"
    },
    {
      icon: "pi pi-box",
      time: "5 hours ago",
      title: "Updated stock for Ibuprofen",
      tone: "blue"
    },
    {
      icon: "pi pi-plus",
      time: "1 day ago",
      title: "Added new medicine: Paracetamol",
      tone: "blue"
    },
    {
      icon: "pi pi-times",
      time: "2 days ago",
      title: "Rejected reservation #198",
      tone: "red"
    },
    {
      icon: "pi pi-user",
      time: "3 days ago",
      title: "Updated profile information",
      tone: "gray"
    }
  ];
  get initials() {
    return this.appState.profile().initials;
  }
  get fullName() {
    return this.appState.profile().fullName;
  }
  get role() {
    return this.appState.profile().role;
  }
  get contacts() {
    const profile = this.appState.profile();
    return [
      { icon: "pi pi-envelope", label: "Email", value: profile.email },
      { icon: "pi pi-phone", label: "Phone", value: profile.phone },
      { icon: "pi pi-map-marker", label: "Address", value: profile.address }
    ];
  }
  get quickStats() {
    const reservations = this.reservationsService.reservations();
    const medicines = this.inventoryService.inventoryItems();
    const uniquePatients = new Set(reservations.map((reservation) => reservation.patientName.toLowerCase())).size;
    return [
      { value: reservations.length.toLocaleString("en-US"), label: "Reservations" },
      { value: medicines.length.toLocaleString("en-US"), label: "Medicines" },
      { value: uniquePatients.toLocaleString("en-US"), label: "Patients" },
      { value: "3", label: "Years Active" }
    ];
  }
  toggleEditMode() {
    if (this.isEditMode) {
      this.saveProfile();
      this.isEditMode = false;
      return;
    }
    this.profileFields = this.buildProfileFields(this.appState.profile());
    this.isEditMode = true;
  }
  get editButtonLabel() {
    return this.isEditMode ? "Save Profile" : "Edit Profile";
  }
  get editButtonIcon() {
    return this.isEditMode ? "pi pi-check" : "pi pi-pencil";
  }
  saveProfile() {
    const profilePatch = this.profileFields.reduce((accumulator, field) => {
      accumulator[field.key] = field.value.trim();
      return accumulator;
    }, {});
    this.appState.updateProfile({
      fullName: profilePatch.fullName,
      email: profilePatch.email,
      phone: profilePatch.phone,
      pharmacyName: profilePatch.pharmacyName,
      licenseNumber: profilePatch.licenseNumber,
      address: profilePatch.address
    });
    this.profileFields = this.buildProfileFields(this.appState.profile());
  }
  buildProfileFields(profile) {
    return [
      { key: "fullName", label: "Full Name", value: profile.fullName },
      { key: "email", label: "Email Address", value: profile.email },
      { key: "phone", label: "Phone Number", value: profile.phone },
      { key: "pharmacyName", label: "Pharmacy Name", value: profile.pharmacyName },
      { key: "licenseNumber", label: "License Number", value: profile.licenseNumber },
      { key: "address", label: "Address", value: profile.address }
    ];
  }
  static \u0275fac = function ProfileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileComponent, selectors: [["app-profile"]], decls: 37, vars: 6, consts: [[1, "profile-page"], [1, "profile-layout"], [1, "profile-sidebar"], [1, "profile-card", "profile-card--identity"], [1, "profile-avatar"], [1, "profile-name"], [1, "profile-role"], [1, "profile-contact-list"], [1, "profile-contact-item"], [1, "profile-card", "profile-card--stats"], [1, "card-title"], [1, "stats-grid"], [1, "stat-tile"], ["type", "button", 1, "profile-edit-button", 3, "click"], [1, "profile-card", "profile-card--main"], [1, "section-block"], [1, "section-title"], [1, "profile-fields"], [1, "profile-field"], [1, "section-block", "section-block--activity"], [1, "activity-list"], [1, "activity-row"], [1, "profile-contact-item__icon"], [1, "profile-contact-item__text"], [1, "stat-tile__value"], [1, "stat-tile__label"], ["type", "text", 3, "ngModelChange", "ngModel", "readonly", "ngModelOptions"], [1, "activity-row__title"], [1, "activity-row__time"]], template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "aside", 2)(3, "article", 3)(4, "div", 4)(5, "span");
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "h1", 5);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 6);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "ul", 7);
      \u0275\u0275repeaterCreate(12, ProfileComponent_For_13_Template, 5, 3, "li", 8, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "article", 9)(15, "h2", 10);
      \u0275\u0275text(16, "Quick Stats");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 11);
      \u0275\u0275repeaterCreate(18, ProfileComponent_For_19_Template, 5, 2, "div", 12, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "button", 13);
      \u0275\u0275listener("click", function ProfileComponent_Template_button_click_20_listener() {
        return ctx.toggleEditMode();
      });
      \u0275\u0275element(21, "i");
      \u0275\u0275elementStart(22, "span");
      \u0275\u0275text(23);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(24, "article", 14)(25, "section", 15)(26, "h2", 16);
      \u0275\u0275text(27, "Profile Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 17);
      \u0275\u0275repeaterCreate(29, ProfileComponent_For_30_Template, 4, 7, "div", 18, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "section", 19)(32, "h2", 16);
      \u0275\u0275text(33, "Recent Activity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 20);
      \u0275\u0275repeaterCreate(35, ProfileComponent_For_36_Template, 7, 7, "div", 21, _forTrack1);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.initials);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.fullName);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.role);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.contacts);
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.quickStats);
      \u0275\u0275advance(3);
      \u0275\u0275classMap(ctx.editButtonIcon);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.editButtonLabel);
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.profileFields);
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.activities);
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.profile-page[_ngcontent-%COMP%] {\n  min-height: calc(100vh - var(--topbar-height));\n  padding: 1rem;\n  background:\n    linear-gradient(\n      180deg,\n      #f7f9fc 0%,\n      #fbfcfe 100%);\n}\n.profile-layout[_ngcontent-%COMP%] {\n  max-width: 1440px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 292px minmax(0, 1fr);\n  gap: 1rem;\n  align-items: start;\n}\n.profile-sidebar[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n}\n.profile-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #edf1f7;\n  border-radius: 16px;\n  box-shadow: 0 1px 1px rgba(15, 23, 42, 0.02), 0 8px 24px -18px rgba(15, 23, 42, 0.18);\n}\n.profile-card--identity[_ngcontent-%COMP%] {\n  padding: 1.55rem 1.35rem 1.45rem;\n  text-align: center;\n}\n.profile-avatar[_ngcontent-%COMP%] {\n  width: 6.4rem;\n  height: 6.4rem;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      135deg,\n      color-mix(in srgb, var(--primary-color) 72%, #8bb8ff) 0%,\n      var(--primary-color) 100%);\n  color: #ffffff;\n  font-size: 1.7rem;\n  font-weight: 800;\n  letter-spacing: 0.05em;\n  box-shadow: 0 14px 28px -18px rgba(59, 130, 246, 0.65);\n}\n.profile-name[_ngcontent-%COMP%] {\n  margin: 1.05rem 0 0;\n  color: #0f172a;\n  font-size: 1.02rem;\n  font-weight: 800;\n  line-height: 1.25;\n}\n.profile-role[_ngcontent-%COMP%] {\n  margin: 0.22rem 0 0;\n  color: #9aa7bf;\n  font-size: 0.88rem;\n  font-weight: 500;\n  line-height: 1.35;\n}\n.profile-contact-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 1.2rem 0 0;\n  padding: 0;\n  display: grid;\n  gap: 0.95rem;\n  text-align: left;\n}\n.profile-contact-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  color: #20324f;\n  font-size: 0.9rem;\n  line-height: 1.45;\n}\n.profile-contact-item__icon[_ngcontent-%COMP%] {\n  width: 1.15rem;\n  flex: 0 0 1.15rem;\n  color: #96a4ba;\n  display: inline-flex;\n  justify-content: center;\n  margin-top: 0.12rem;\n}\n.profile-card--stats[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n}\n.profile-edit-button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 0.95rem;\n  min-height: 2.85rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.55rem;\n  border: 1px solid #dbe7ff;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      color-mix(in srgb, var(--primary-color) 72%, #8bb8ff) 0%,\n      var(--primary-color) 100%);\n  color: #ffffff;\n  font: inherit;\n  font-size: 0.92rem;\n  font-weight: 700;\n  cursor: pointer;\n  box-shadow: 0 14px 26px -18px rgba(59, 130, 246, 0.7);\n  transition:\n    transform 160ms ease,\n    box-shadow 160ms ease,\n    filter 160ms ease;\n}\n.profile-edit-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  filter: brightness(1.02);\n  box-shadow: 0 18px 32px -20px rgba(59, 130, 246, 0.72);\n}\n.profile-edit-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.card-title[_ngcontent-%COMP%], \n.section-title[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #173055;\n  font-size: 0.94rem;\n  font-weight: 700;\n  line-height: 1.25;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.85rem;\n}\n.stat-tile[_ngcontent-%COMP%] {\n  min-height: 4rem;\n  padding: 0.95rem 0.75rem 0.9rem;\n  border-radius: 12px;\n  background: #fafbfd;\n  border: 1px solid #f1f4f9;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n.stat-tile__value[_ngcontent-%COMP%] {\n  color: #111827;\n  font-size: 1.45rem;\n  font-weight: 800;\n  line-height: 1;\n}\n.stat-tile__label[_ngcontent-%COMP%] {\n  margin-top: 0.22rem;\n  color: #9aa7bf;\n  font-size: 0.82rem;\n  font-weight: 500;\n  line-height: 1.25;\n}\n.profile-card--main[_ngcontent-%COMP%] {\n  padding: 1.35rem 1.3rem 1.05rem;\n}\n.section-block[_ngcontent-%COMP%]    + .section-block[_ngcontent-%COMP%] {\n  margin-top: 1.95rem;\n}\n.profile-fields[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1.05rem 1rem;\n}\n.profile-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.45rem;\n  color: #58708f;\n  font-size: 0.85rem;\n  font-weight: 500;\n  line-height: 1.2;\n}\n.profile-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 43px;\n  padding: 0 0.9rem;\n  border: 1px solid #edf1f7;\n  border-radius: 10px;\n  background: #ffffff;\n  color: #707b8e;\n  font: inherit;\n  font-size: 0.94rem;\n  outline: none;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.75);\n}\n.profile-field[_ngcontent-%COMP%]   input[readonly][_ngcontent-%COMP%] {\n  cursor: default;\n  background: #fbfcfe;\n}\n.profile-field__input--editable[_ngcontent-%COMP%] {\n  border-color: #dbe7ff;\n  background: #ffffff;\n  color: #334155;\n  box-shadow: 0 0 0 3px rgba(76, 136, 255, 0.06);\n  cursor: text;\n}\n.activity-list[_ngcontent-%COMP%] {\n  margin-top: 0.9rem;\n  display: grid;\n}\n.activity-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 32px minmax(0, 1fr) auto;\n  gap: 0.95rem;\n  align-items: center;\n  min-height: 4.25rem;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid #eef2f7;\n}\n.activity-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n.activity-row__icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 999px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.85rem;\n  flex-shrink: 0;\n}\n.activity-row__icon--green[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #22c55e;\n}\n.activity-row__icon--blue[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--primary-color) 12%, transparent);\n  color: var(--primary-color);\n}\n.activity-row__icon--red[_ngcontent-%COMP%] {\n  background: #fff1f2;\n  color: #ef4444;\n}\n.activity-row__icon--gray[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  color: #7a8ba6;\n}\n.activity-row__title[_ngcontent-%COMP%] {\n  min-width: 0;\n  color: #20324f;\n  font-size: 0.94rem;\n  font-weight: 500;\n  line-height: 1.45;\n}\n.activity-row__time[_ngcontent-%COMP%] {\n  color: #93a3bb;\n  font-size: 0.82rem;\n  font-weight: 500;\n  white-space: nowrap;\n  text-align: right;\n}\n@media (max-width: 1199px) {\n  .profile-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 767px) {\n  .profile-page[_ngcontent-%COMP%] {\n    padding: 0.85rem;\n  }\n  .profile-fields[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .activity-row[_ngcontent-%COMP%] {\n    grid-template-columns: 32px minmax(0, 1fr);\n  }\n  .activity-row__time[_ngcontent-%COMP%] {\n    grid-column: 2;\n    text-align: left;\n    margin-top: -0.35rem;\n    padding-left: 0;\n  }\n}\n.app-dark[_nghost-%COMP%]   .profile-page[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .profile-page[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      var(--surface-ground) 0%,\n      var(--surface-card) 100%);\n}\n.app-dark[_nghost-%COMP%]   .profile-card[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .profile-card[_ngcontent-%COMP%] {\n  background: var(--surface-card);\n  border-color: var(--surface-border);\n  box-shadow: 0 18px 45px -42px rgba(6, 16, 32, 0.68);\n}\n.app-dark[_nghost-%COMP%]   .profile-name[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .profile-name[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   .card-title[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .card-title[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   .section-title[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .section-title[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   .activity-row__title[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .activity-row__title[_ngcontent-%COMP%] {\n  color: var(--text-color);\n}\n.app-dark[_nghost-%COMP%]   .profile-role[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .profile-role[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   .profile-contact-item[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .profile-contact-item[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   .stat-tile__label[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .stat-tile__label[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   .profile-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .profile-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   .activity-row__time[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .activity-row__time[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n}\n.app-dark[_nghost-%COMP%]   .profile-contact-item__icon[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .profile-contact-item__icon[_ngcontent-%COMP%] {\n  color: color-mix(in srgb, var(--primary-color) 38%, var(--text-color-secondary));\n}\n.app-dark[_nghost-%COMP%]   .profile-card--stats[_ngcontent-%COMP%]   .stat-tile[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .profile-card--stats[_ngcontent-%COMP%]   .stat-tile[_ngcontent-%COMP%] {\n  background: var(--surface-hover);\n  border-color: var(--surface-border);\n}\n.app-dark[_nghost-%COMP%]   .profile-card--stats[_ngcontent-%COMP%]   .stat-tile__value[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .profile-card--stats[_ngcontent-%COMP%]   .stat-tile__value[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.app-dark[_nghost-%COMP%]   .profile-card--identity[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .profile-card--identity[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   .profile-card--stats[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .profile-card--stats[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   .profile-card--main[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .profile-card--main[_ngcontent-%COMP%] {\n  background: var(--surface-card);\n}\n.app-dark[_nghost-%COMP%]   .profile-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .profile-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: var(--surface-overlay);\n  border-color: var(--surface-border);\n  color: var(--text-color);\n  box-shadow: none;\n}\n.app-dark[_nghost-%COMP%]   .profile-field[_ngcontent-%COMP%]   input[readonly][_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .profile-field[_ngcontent-%COMP%]   input[readonly][_ngcontent-%COMP%] {\n  background: var(--surface-overlay);\n  color: var(--text-color-secondary);\n}\n.app-dark[_nghost-%COMP%]   .profile-field__input--editable[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .profile-field__input--editable[_ngcontent-%COMP%] {\n  background: var(--surface-overlay);\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary-color) 14%, transparent);\n  color: var(--text-color);\n}\n.app-dark[_nghost-%COMP%]   .activity-row[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .activity-row[_ngcontent-%COMP%] {\n  border-bottom-color: var(--surface-border);\n}\n.app-dark[_nghost-%COMP%]   .activity-row__icon--blue[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .activity-row__icon--blue[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--primary-color) 14%, transparent);\n  color: color-mix(in srgb, var(--primary-color) 56%, white);\n}\n.app-dark[_nghost-%COMP%]   .activity-row__icon--green[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .activity-row__icon--green[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, #22c55e 14%, transparent);\n  color: color-mix(in srgb, #22c55e 58%, white);\n}\n.app-dark[_nghost-%COMP%]   .activity-row__icon--red[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .activity-row__icon--red[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, #ef4444 14%, transparent);\n  color: color-mix(in srgb, #ef4444 58%, white);\n}\n.app-dark[_nghost-%COMP%]   .activity-row__icon--gray[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .activity-row__icon--gray[_ngcontent-%COMP%] {\n  background: var(--surface-hover);\n  color: var(--text-color-secondary);\n}\n/*# sourceMappingURL=profile.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileComponent, [{
    type: Component,
    args: [{ selector: "app-profile", standalone: true, imports: [FormsModule], template: '<div class="profile-page">\n    <section class="profile-layout">\n        <aside class="profile-sidebar">\n            <article class="profile-card profile-card--identity">\n                <div class="profile-avatar">\n                    <span>{{ initials }}</span>\n                </div>\n\n                <h1 class="profile-name">{{ fullName }}</h1>\n                <p class="profile-role">{{ role }}</p>\n\n                <ul class="profile-contact-list">\n                    @for (contact of contacts; track contact.label) {\n                        <li class="profile-contact-item">\n                            <span class="profile-contact-item__icon">\n                                <i class="{{ contact.icon }}"></i>\n                            </span>\n                            <span class="profile-contact-item__text">{{ contact.value }}</span>\n                        </li>\n                    }\n                </ul>\n            </article>\n\n            <article class="profile-card profile-card--stats">\n                <h2 class="card-title">Quick Stats</h2>\n\n                <div class="stats-grid">\n                    @for (stat of quickStats; track stat.label) {\n                        <div class="stat-tile">\n                            <div class="stat-tile__value">{{ stat.value }}</div>\n                            <div class="stat-tile__label">{{ stat.label }}</div>\n                        </div>\n                    }\n                </div>\n\n                <button type="button" class="profile-edit-button" (click)="toggleEditMode()">\n                    <i class="{{ editButtonIcon }}"></i>\n                    <span>{{ editButtonLabel }}</span>\n                </button>\n            </article>\n        </aside>\n\n        <article class="profile-card profile-card--main">\n            <section class="section-block">\n                <h2 class="section-title">Profile Information</h2>\n\n                <div class="profile-fields">\n                    @for (field of profileFields; track field.label) {\n                        <div class="profile-field">\n                            <label>{{ field.label }}</label>\n                            <input\n                                type="text"\n                                [(ngModel)]="field.value"\n                                [readonly]="!isEditMode"\n                                [class.profile-field__input--editable]="isEditMode"\n                                [ngModelOptions]="{ standalone: true }"\n                            />\n                        </div>\n                    }\n                </div>\n            </section>\n\n            <section class="section-block section-block--activity">\n                <h2 class="section-title">Recent Activity</h2>\n\n                <div class="activity-list">\n                    @for (activity of activities; track activity.title) {\n                        <div class="activity-row">\n                            <span class="activity-row__icon activity-row__icon--{{ activity.tone }}">\n                                <i class="{{ activity.icon }}"></i>\n                            </span>\n\n                            <div class="activity-row__title">{{ activity.title }}</div>\n                            <div class="activity-row__time">{{ activity.time }}</div>\n                        </div>\n                    }\n                </div>\n            </section>\n        </article>\n    </section>\n</div>\n', styles: ["/* src/app/pages/admin/profile/profile.component.scss */\n.profile-page {\n  min-height: calc(100vh - var(--topbar-height));\n  padding: 1rem;\n  background:\n    linear-gradient(\n      180deg,\n      #f7f9fc 0%,\n      #fbfcfe 100%);\n}\n.profile-layout {\n  max-width: 1440px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 292px minmax(0, 1fr);\n  gap: 1rem;\n  align-items: start;\n}\n.profile-sidebar {\n  display: grid;\n  gap: 1rem;\n}\n.profile-card {\n  background: #ffffff;\n  border: 1px solid #edf1f7;\n  border-radius: 16px;\n  box-shadow: 0 1px 1px rgba(15, 23, 42, 0.02), 0 8px 24px -18px rgba(15, 23, 42, 0.18);\n}\n.profile-card--identity {\n  padding: 1.55rem 1.35rem 1.45rem;\n  text-align: center;\n}\n.profile-avatar {\n  width: 6.4rem;\n  height: 6.4rem;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      135deg,\n      color-mix(in srgb, var(--primary-color) 72%, #8bb8ff) 0%,\n      var(--primary-color) 100%);\n  color: #ffffff;\n  font-size: 1.7rem;\n  font-weight: 800;\n  letter-spacing: 0.05em;\n  box-shadow: 0 14px 28px -18px rgba(59, 130, 246, 0.65);\n}\n.profile-name {\n  margin: 1.05rem 0 0;\n  color: #0f172a;\n  font-size: 1.02rem;\n  font-weight: 800;\n  line-height: 1.25;\n}\n.profile-role {\n  margin: 0.22rem 0 0;\n  color: #9aa7bf;\n  font-size: 0.88rem;\n  font-weight: 500;\n  line-height: 1.35;\n}\n.profile-contact-list {\n  list-style: none;\n  margin: 1.2rem 0 0;\n  padding: 0;\n  display: grid;\n  gap: 0.95rem;\n  text-align: left;\n}\n.profile-contact-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  color: #20324f;\n  font-size: 0.9rem;\n  line-height: 1.45;\n}\n.profile-contact-item__icon {\n  width: 1.15rem;\n  flex: 0 0 1.15rem;\n  color: #96a4ba;\n  display: inline-flex;\n  justify-content: center;\n  margin-top: 0.12rem;\n}\n.profile-card--stats {\n  padding: 1.25rem;\n}\n.profile-edit-button {\n  width: 100%;\n  margin-top: 0.95rem;\n  min-height: 2.85rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.55rem;\n  border: 1px solid #dbe7ff;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      color-mix(in srgb, var(--primary-color) 72%, #8bb8ff) 0%,\n      var(--primary-color) 100%);\n  color: #ffffff;\n  font: inherit;\n  font-size: 0.92rem;\n  font-weight: 700;\n  cursor: pointer;\n  box-shadow: 0 14px 26px -18px rgba(59, 130, 246, 0.7);\n  transition:\n    transform 160ms ease,\n    box-shadow 160ms ease,\n    filter 160ms ease;\n}\n.profile-edit-button:hover {\n  transform: translateY(-1px);\n  filter: brightness(1.02);\n  box-shadow: 0 18px 32px -20px rgba(59, 130, 246, 0.72);\n}\n.profile-edit-button i {\n  font-size: 0.9rem;\n}\n.card-title,\n.section-title {\n  margin: 0;\n  color: #173055;\n  font-size: 0.94rem;\n  font-weight: 700;\n  line-height: 1.25;\n}\n.stats-grid {\n  margin-top: 1rem;\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.85rem;\n}\n.stat-tile {\n  min-height: 4rem;\n  padding: 0.95rem 0.75rem 0.9rem;\n  border-radius: 12px;\n  background: #fafbfd;\n  border: 1px solid #f1f4f9;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n.stat-tile__value {\n  color: #111827;\n  font-size: 1.45rem;\n  font-weight: 800;\n  line-height: 1;\n}\n.stat-tile__label {\n  margin-top: 0.22rem;\n  color: #9aa7bf;\n  font-size: 0.82rem;\n  font-weight: 500;\n  line-height: 1.25;\n}\n.profile-card--main {\n  padding: 1.35rem 1.3rem 1.05rem;\n}\n.section-block + .section-block {\n  margin-top: 1.95rem;\n}\n.profile-fields {\n  margin-top: 1rem;\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1.05rem 1rem;\n}\n.profile-field label {\n  display: block;\n  margin-bottom: 0.45rem;\n  color: #58708f;\n  font-size: 0.85rem;\n  font-weight: 500;\n  line-height: 1.2;\n}\n.profile-field input {\n  width: 100%;\n  height: 43px;\n  padding: 0 0.9rem;\n  border: 1px solid #edf1f7;\n  border-radius: 10px;\n  background: #ffffff;\n  color: #707b8e;\n  font: inherit;\n  font-size: 0.94rem;\n  outline: none;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.75);\n}\n.profile-field input[readonly] {\n  cursor: default;\n  background: #fbfcfe;\n}\n.profile-field__input--editable {\n  border-color: #dbe7ff;\n  background: #ffffff;\n  color: #334155;\n  box-shadow: 0 0 0 3px rgba(76, 136, 255, 0.06);\n  cursor: text;\n}\n.activity-list {\n  margin-top: 0.9rem;\n  display: grid;\n}\n.activity-row {\n  display: grid;\n  grid-template-columns: 32px minmax(0, 1fr) auto;\n  gap: 0.95rem;\n  align-items: center;\n  min-height: 4.25rem;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid #eef2f7;\n}\n.activity-row:last-child {\n  border-bottom: 0;\n}\n.activity-row__icon {\n  width: 32px;\n  height: 32px;\n  border-radius: 999px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.85rem;\n  flex-shrink: 0;\n}\n.activity-row__icon--green {\n  background: #ecfdf5;\n  color: #22c55e;\n}\n.activity-row__icon--blue {\n  background: color-mix(in srgb, var(--primary-color) 12%, transparent);\n  color: var(--primary-color);\n}\n.activity-row__icon--red {\n  background: #fff1f2;\n  color: #ef4444;\n}\n.activity-row__icon--gray {\n  background: #f8fafc;\n  color: #7a8ba6;\n}\n.activity-row__title {\n  min-width: 0;\n  color: #20324f;\n  font-size: 0.94rem;\n  font-weight: 500;\n  line-height: 1.45;\n}\n.activity-row__time {\n  color: #93a3bb;\n  font-size: 0.82rem;\n  font-weight: 500;\n  white-space: nowrap;\n  text-align: right;\n}\n@media (max-width: 1199px) {\n  .profile-layout {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 767px) {\n  .profile-page {\n    padding: 0.85rem;\n  }\n  .profile-fields {\n    grid-template-columns: 1fr;\n  }\n  .stats-grid {\n    grid-template-columns: 1fr;\n  }\n  .activity-row {\n    grid-template-columns: 32px minmax(0, 1fr);\n  }\n  .activity-row__time {\n    grid-column: 2;\n    text-align: left;\n    margin-top: -0.35rem;\n    padding-left: 0;\n  }\n}\n:host-context(.app-dark) .profile-page {\n  background:\n    linear-gradient(\n      180deg,\n      var(--surface-ground) 0%,\n      var(--surface-card) 100%);\n}\n:host-context(.app-dark) .profile-card {\n  background: var(--surface-card);\n  border-color: var(--surface-border);\n  box-shadow: 0 18px 45px -42px rgba(6, 16, 32, 0.68);\n}\n:host-context(.app-dark) .profile-name,\n:host-context(.app-dark) .card-title,\n:host-context(.app-dark) .section-title,\n:host-context(.app-dark) .activity-row__title {\n  color: var(--text-color);\n}\n:host-context(.app-dark) .profile-role,\n:host-context(.app-dark) .profile-contact-item,\n:host-context(.app-dark) .stat-tile__label,\n:host-context(.app-dark) .profile-field label,\n:host-context(.app-dark) .activity-row__time {\n  color: var(--text-color-secondary);\n}\n:host-context(.app-dark) .profile-contact-item__icon {\n  color: color-mix(in srgb, var(--primary-color) 38%, var(--text-color-secondary));\n}\n:host-context(.app-dark) .profile-card--stats .stat-tile {\n  background: var(--surface-hover);\n  border-color: var(--surface-border);\n}\n:host-context(.app-dark) .profile-card--stats .stat-tile__value {\n  color: #ffffff;\n}\n:host-context(.app-dark) .profile-card--identity,\n:host-context(.app-dark) .profile-card--stats,\n:host-context(.app-dark) .profile-card--main {\n  background: var(--surface-card);\n}\n:host-context(.app-dark) .profile-field input {\n  background: var(--surface-overlay);\n  border-color: var(--surface-border);\n  color: var(--text-color);\n  box-shadow: none;\n}\n:host-context(.app-dark) .profile-field input[readonly] {\n  background: var(--surface-overlay);\n  color: var(--text-color-secondary);\n}\n:host-context(.app-dark) .profile-field__input--editable {\n  background: var(--surface-overlay);\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary-color) 14%, transparent);\n  color: var(--text-color);\n}\n:host-context(.app-dark) .activity-row {\n  border-bottom-color: var(--surface-border);\n}\n:host-context(.app-dark) .activity-row__icon--blue {\n  background: color-mix(in srgb, var(--primary-color) 14%, transparent);\n  color: color-mix(in srgb, var(--primary-color) 56%, white);\n}\n:host-context(.app-dark) .activity-row__icon--green {\n  background: color-mix(in srgb, #22c55e 14%, transparent);\n  color: color-mix(in srgb, #22c55e 58%, white);\n}\n:host-context(.app-dark) .activity-row__icon--red {\n  background: color-mix(in srgb, #ef4444 14%, transparent);\n  color: color-mix(in srgb, #ef4444 58%, white);\n}\n:host-context(.app-dark) .activity-row__icon--gray {\n  background: var(--surface-hover);\n  color: var(--text-color-secondary);\n}\n/*# sourceMappingURL=profile.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileComponent, { className: "ProfileComponent", filePath: "app/pages/admin/profile/profile.component.ts", lineNumber: 40 });
})();
export {
  ProfileComponent
};
//# sourceMappingURL=chunk-XQSFKM2S.js.map
