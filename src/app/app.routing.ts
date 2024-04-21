import { Routes, RouterModule } from "@angular/router";
import { PublicLayoutComponent } from "./_layout/public-layout/public-layout.component";
import { PrivateLayoutComponent } from "./_layout/private-layout/private-layout.component";
import { LoginComponent } from "./login";
import { ChangelogComponent } from "./changelog/changelog.component";
import { FullLayoutComponent } from "./_layout/full-layout/full-layout.component";
import { PrivacyPolicyComponent } from "./login/privacy-policy/privacy-policy.component";
import { TermsConditionComponent } from "./login/terms-condition/terms-condition.component";
import { HomeComponent } from "./client-vue/home/home.component";
import { ContactComponent } from "./client-vue/contact/contact.component";
import { AboutComponent } from "./client-vue/about/about.component";
const appRoutes: Routes = [
  { path: "privacypolicy", component: PrivacyPolicyComponent },
  { path: "home", component: HomeComponent },
  { path: "contact", component: ContactComponent },
  { path: "about", component: AboutComponent },
  { path: "termCondition", component: TermsConditionComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },

  // Public layout
  {
    path: "",
    component: PublicLayoutComponent,
    children: [{ path: "login", component: LoginComponent }],
  },

  // Private layout
  {
    path: "",
    component: PrivateLayoutComponent,
    children: [
      { path: "logout", component: LoginComponent },
      {
        path: "changelog",
        component: ChangelogComponent,
      },
      {
        path: "dashboard",
        loadChildren: () =>
          import("../app/content/dashboard/dashboard.module").then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: "components",
        loadChildren: () =>
          import("../app/content/ngbbootstrap/components.module").then(
            (m) => m.ComponentsModule
          ),
      },
      {
        path: "todo-app",
        loadChildren: () =>
          import("../app/content/applications/todo-app/todo-app.module").then(
            (m) => m.TodoAppModule
          ),
      },

      {
        path: "email",
        loadChildren: () =>
          import("../app/content/applications/email/email.module").then(
            (m) => m.EmailModule
          ),
      },
      {
        path: "calender",
        loadChildren: () =>
          import("../app/content/applications/calender/calender.module").then(
            (m) => m.CalenderModule
          ),
      },
      {
        path: "kanban",
        loadChildren: () =>
          import(
            "../app/content/applications/kanban-app/kanban-app.module"
          ).then((m) => m.KanbanAppModule),
      },
      {
        path: "contacts",
        loadChildren: () =>
          import("../app/content/applications/contacts/contacts.module").then(
            (m) => m.ContactsModule
          ),
      },
      {
        path: "abonnement",
        loadChildren: () =>
          import(
            "../app/content/applications/abonnement/abonnement.module"
          ).then((m) => m.AbonnementModule),
      },
      {
        path: "lot",
        loadChildren: () =>
          import("../app/content/applications/lot/lot.module").then(
            (m) => m.LotModule
          ),
      },
      {
        path: "remisedecle",
        loadChildren: () =>
          import(
            "../app/content/applications/remisedecle/remisedecle.module"
          ).then((m) => m.RemisedecleModule),
      },
      {
        path: "immeuble",
        loadChildren: () =>
          import("../app/content/applications/immeuble/immeuble.module").then(
            (m) => m.ImmeubleModule
          ),
      },
      {
        path: "treeview",
        loadChildren: () =>
          import(
            "../app/content/extra-components/treeview/treeview.module"
          ).then((m) => m.TreeViewModule),
      },
      {
        path: "chartjs",
        loadChildren: () =>
          import("../app/content/charts-maps/chartjs/chartjs.module").then(
            (m) => m.ChartjsModule
          ),
      },
      {
        path: "form-elements",
        loadChildren: () =>
          import(
            "../app/content/forms/form-elements/form-elements.module"
          ).then((m) => m.FormElementsModule),
      },
      {
        path: "form-layouts",
        loadChildren: () =>
          import("../app/content/forms/form-layouts/form-layouts.module").then(
            (m) => m.FormLayoutsModule
          ),
      },
      {
        path: "form-wizard",
        loadChildren: () =>
          import("../app/content/forms/form-wizard/form-wizard.module").then(
            (m) => m.FormWizardModule
          ),
      },
      {
        path: "form-repeater",
        loadChildren: () =>
          import(
            "../app/content/forms/form-repeater/form-repeater.module"
          ).then((m) => m.FormRepeaterModule),
      },
      {
        path: "ngchartist",
        loadChildren: () =>
          import(
            "../app/content/charts-maps/ngchartist/ngchartist.module"
          ).then((m) => m.NgchartistModule),
      },
      {
        path: "boostraptables",
        loadChildren: () =>
          import(
            "../app/content/table/boostraptables/boostraptables.module"
          ).then((m) => m.BoostraptablesModule),
      },
      {
        path: "datatables",
        loadChildren: () =>
          import("../app/content/table/datatables/datatables.module").then(
            (m) => m.DatatablesModule
          ),
      },
      {
        path: "datatablesext",
        loadChildren: () =>
          import(
            "../app/content/table/datatablesext/datatablesext.module"
          ).then((m) => m.DatatablesextModule),
      },
      {
        path: "icons",
        loadChildren: () =>
          import("../app/content/icons/icons.module").then(
            (m) => m.IconsModule
          ),
      },
      {
        path: "cards",
        loadChildren: () =>
          import("../app/content/cards/cards.module").then(
            (m) => m.CardsModule
          ),
      },
      {
        path: "maps",
        loadChildren: () =>
          import("../app/content/maps/maps.module").then((m) => m.MapsModule),
      },
      {
        path: "invoice",
        loadChildren: () =>
          import("../app/content/pages/invoice/invoice.module").then(
            (m) => m.InvoiceModule
          ),
      },
      {
        path: "timelines",
        loadChildren: () =>
          import("../app/content/pages/timelines/timelines.module").then(
            (m) => m.TimelinesModule
          ),
      },
      {
        path: "user",
        loadChildren: () =>
          import("../app/content/pages/user/user.module").then(
            (m) => m.UserModule
          ),
      },
      {
        path: "gallery",
        loadChildren: () =>
          import("../app/content/pages/gallery/gallery.module").then(
            (m) => m.GalleryModule
          ),
      },
      {
        path: "news-feed",
        loadChildren: () =>
          import("../app/content/pages/news-feed/news-feed.module").then(
            (m) => m.NewsFeedModule
          ),
      },
      {
        path: "dropzone",
        loadChildren: () =>
          import("../app/content/pages/dropzone/dropzone.module").then(
            (m) => m.DropzoneModule
          ),
      },
      {
        path: "social-feed",
        loadChildren: () =>
          import("../app/content/pages/social-feed/social-feed.module").then(
            (m) => m.SocialFeedModule
          ),
      },
      {
        path: "search",
        loadChildren: () =>
          import("../app/content/pages/search/search.module").then(
            (m) => m.SearchModule
          ),
      },
      {
        path: "advanceCards",
        loadChildren: () =>
          import("../app/content/advance-cards/advance-cards.module").then(
            (m) => m.AdvanceCardsModule
          ),
      },
      {
        path: "extraComponents",
        loadChildren: () =>
          import(
            "../app/content/extra-components/extra-components.module"
          ).then((m) => m.ExtraComponentsModule),
      },
    ],
  },
  // otherwise redirect to home
  { path: "**", redirectTo: "home" },
];

export const routing = RouterModule.forRoot(appRoutes, {
  scrollOffset: [0, 0],
  scrollPositionRestoration: "top",
  relativeLinkResolution: "legacy",
  enableTracing: true,
});
