// Default menu settings configurations

export interface MenuItem {
  title: string;
  icon: string;
  page: string;
  isExternalLink?: boolean;
  issupportExternalLink?: boolean;
  isStarterkitExternalLink?: boolean;
  badge: { type: string; value: string };
  submenu: {
    items: Partial<MenuItem>[];
  };
  section: string;
}

export interface MenuConfig {
  horizontal_menu: {
    items: Partial<MenuItem>[];
  };
  vertical_menu: {
    items: Partial<MenuItem>[];
  };
}

export const MenuSettingsConfig: MenuConfig = {
  horizontal_menu: {
    items: [
      {
        title: "Accueil",
        icon: "la-home",
        page: "/home",
      },
      {
        title: "Templates",
        icon: "la-television",
        page: "null",
        submenu: {
          items: [
            {
              title: "Horizontal",
              page: "null",
            },
            {
              title: "Vertical",
              page: "null",
            },
          ],
        },
      },
      {
        title: "APPS",
        icon: "la-mobile",
        page: "null",
        submenu: {
          items: [
            {
              title: "Remise de clé",
              icon: "la-edit",
              page: "/remisedecle",
            },
            {
              title: "Lot",
              icon: "la-clipboard",
              page: "/lot",
            },
            {
              title: "Immeuble",
              icon: "la-inbox",
              page: "/immeuble",
            },
            {
              title: "Abonnement",
              icon: "la-shopping-cart",
              page: "/abonnement",
            },

            {
              title: "Utilisateurs",
              icon: "la-users",
              page: "/user",
            },
          ],
        },
      },
    ],
  },
  vertical_menu: {
    items: [
      {
        title: "Accueil",
        icon: "la-home",
        page: "/home",
      },
      {
        title: "Templates",
        icon: "la-television",
        page: "null",
        submenu: {
          items: [
            {
              title: "Horizontal",
              page: "null",
            },
            {
              title: "Vertical",
              page: "null",
            },
          ],
        },
      },
      {
        title: "APPS",
        icon: "la-mobile",
        page: "null",
        submenu: {
          items: [
            {
              title: "Remise de clé",
              icon: "la-edit",
              page: "/remisedecle",
            },
            {
              title: "Lot",
              icon: "la-clipboard",
              page: "/lot",
            },
            {
              title: "Immeuble",
              icon: "la-inbox",
              page: "/immeuble",
            },

            {
              title: "Utilisateurs",
              icon: "la-users",
              page: "/user",
            },
          ],
        },
      },
    ],
  },
};
