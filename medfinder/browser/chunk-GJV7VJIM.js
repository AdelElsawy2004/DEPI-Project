import {
  Injectable,
  computed,
  effect,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-6FH5EJK4.js";
import {
  __spreadValues
} from "./chunk-R2QGWZ7S.js";

// src/app/state/pharmacy-state.service.ts
var STORAGE_KEY = "medfinder.pharmacist.profile";
var DEFAULT_PROFILE = {
  initials: "PH",
  fullName: "Dr. Pharmacist",
  role: "Pharmacy Manager",
  email: "admin@pharmacy.com",
  phone: "+20 100 123 4567",
  pharmacyName: "MedFinder Pharmacy",
  licenseNumber: "PH-L-48291",
  address: "123 Health St, Cairo, Egypt"
};
function sanitizeProfile(profile) {
  return {
    initials: typeof profile.initials === "string" && profile.initials.trim() ? profile.initials.trim() : DEFAULT_PROFILE.initials,
    fullName: typeof profile.fullName === "string" && profile.fullName.trim() ? profile.fullName.trim() : DEFAULT_PROFILE.fullName,
    role: typeof profile.role === "string" && profile.role.trim() ? profile.role.trim() : DEFAULT_PROFILE.role,
    email: typeof profile.email === "string" && profile.email.trim() ? profile.email.trim() : DEFAULT_PROFILE.email,
    phone: typeof profile.phone === "string" && profile.phone.trim() ? profile.phone.trim() : DEFAULT_PROFILE.phone,
    pharmacyName: typeof profile.pharmacyName === "string" && profile.pharmacyName.trim() ? profile.pharmacyName.trim() : DEFAULT_PROFILE.pharmacyName,
    licenseNumber: typeof profile.licenseNumber === "string" && profile.licenseNumber.trim() ? profile.licenseNumber.trim() : DEFAULT_PROFILE.licenseNumber,
    address: typeof profile.address === "string" && profile.address.trim() ? profile.address.trim() : DEFAULT_PROFILE.address
  };
}
function loadProfile(isBrowser) {
  if (!isBrowser) {
    return __spreadValues({}, DEFAULT_PROFILE);
  }
  try {
    const storedValue = localStorage.getItem(STORAGE_KEY);
    if (!storedValue) {
      return __spreadValues({}, DEFAULT_PROFILE);
    }
    const parsedValue = JSON.parse(storedValue);
    if (!parsedValue || typeof parsedValue !== "object") {
      return __spreadValues({}, DEFAULT_PROFILE);
    }
    return sanitizeProfile(parsedValue);
  } catch {
    return __spreadValues({}, DEFAULT_PROFILE);
  }
}
var PharmacyStateService = class _PharmacyStateService {
  isBrowser = typeof window !== "undefined";
  profileState = signal(loadProfile(this.isBrowser), ...ngDevMode ? [{ debugName: "profileState" }] : []);
  searchState = signal("", ...ngDevMode ? [{ debugName: "searchState" }] : []);
  profile = computed(() => this.profileState(), ...ngDevMode ? [{ debugName: "profile" }] : []);
  searchQuery = computed(() => this.searchState(), ...ngDevMode ? [{ debugName: "searchQuery" }] : []);
  constructor() {
    effect(() => {
      this.persistProfile(this.profileState());
    });
  }
  setSearchQuery(query) {
    this.searchState.set(query);
  }
  clearSearchQuery() {
    this.searchState.set("");
  }
  updateProfile(patch) {
    let updatedProfile = this.profileState();
    this.profileState.update((current) => {
      const nextProfile = sanitizeProfile(__spreadValues(__spreadValues({}, current), patch));
      updatedProfile = nextProfile;
      return nextProfile;
    });
    return updatedProfile;
  }
  resetProfile() {
    this.profileState.set(__spreadValues({}, DEFAULT_PROFILE));
  }
  persistProfile(profile) {
    if (!this.isBrowser) {
      return;
    }
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    } catch {
    }
  }
  static \u0275fac = function PharmacyStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PharmacyStateService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PharmacyStateService, factory: _PharmacyStateService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PharmacyStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  PharmacyStateService
};
//# sourceMappingURL=chunk-GJV7VJIM.js.map
