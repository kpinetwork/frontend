import { NavigationSettings } from './navigation.model';

export const getSettings = (logout: () => void): NavigationSettings => {
  return {
    accountMenuOptions: [
      {
        title: 'User Preferences',
        path: '/profile/endUserPreferences/edit',
      },
      {
        title: 'Logout',
        path: '/logout',
        func: logout,
      },
    ],
    helpUrl: undefined,
    logo: `assets/logo.png`,
    menuOptions: [
      {
        title: `My Portfolio`,
        path: `/my-portfolio`,
        icon: `ks-navigation-jRpKXsAAUM4hRhfFCnvXVF`,
        type: `workflow`,
        openInNewTab: false,
        areYouSure: false,
      },
      {
        title: `My Cohorts`,
        path: `/my-cohorts`,
        icon: `ks-navigation-hXuqvEZii6BShTb4oyzD2N`,
        type: `workflow`,
        openInNewTab: false,
        areYouSure: false,
      },
      {
        title: `About KPI Network`,
        path: `/about-kpi-network`,
        icon: `ks-navigation-8yWdh62tj9yVkYQ4rW2bXQ`,
        type: `workflow`,
        openInNewTab: false,
        areYouSure: false,
      },
      {
        title: `Admin Page`,
        path: `/admin-page`,
        icon: `ks-navigation-9MWG9AxuKDM4f2Lef9C1ag`,
        type: `workflow`,
        openInNewTab: false,
        areYouSure: false,
      },
    ],
  };
};
