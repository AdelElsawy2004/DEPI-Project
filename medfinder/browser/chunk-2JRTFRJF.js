import "./chunk-R2QGWZ7S.js";

// src/app/pages/admin/admin.routes.ts
var admin_routes_default = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  {
    path: "dashboard",
    loadComponent: () => import("./chunk-H4SF2TPH.js").then((m) => m.DashboardComponent),
    data: { title: "Pharmacy Dashboard" }
  },
  {
    path: "inventory",
    loadComponent: () => import("./chunk-PE7RJV4I.js").then((m) => m.InventoryComponent),
    data: { title: "Inventory" }
  },
  {
    path: "reservations",
    loadComponent: () => import("./chunk-TIXBPYEP.js").then((m) => m.ReservationsComponent),
    data: { title: "Reservations" }
  },
  {
    path: "profile",
    loadComponent: () => import("./chunk-XQSFKM2S.js").then((m) => m.ProfileComponent),
    data: { title: "Profile" }
  }
];
export {
  admin_routes_default as default
};
//# sourceMappingURL=chunk-2JRTFRJF.js.map
