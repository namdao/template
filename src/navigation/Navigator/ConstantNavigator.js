/**
 * Core stack
 */
export const STACK = {
  TAB_NAVIGATOR: 'TAB_NAVIGATOR',
  AUTH_NAVIGATOR: 'AUTH_NAVIGATOR',
  /**
   * Auth stack
   */
  SPLASH: 'SPLASH',
  LOGIN: 'LOGIN',
  /**
   * Order stack
   */
  ORDERLISTDRAFT: 'ORDERLISTDRAFT',
  DETAILS: 'DETAILS',
  /**
   * Drawer
   */
  DRAWER_MENU: {
    DASHBOARD: 'DRAWER_DASHBOARD',
  },
  /**
   * Tab name
   */
  TAB_MENU: {
    ORDER_DRAFT: 'ORDER_DRAFT',
    SETTINGS: 'TAB_SETTINGS',
  },
};

/**
 * Config Navigator
 */
export const CONFIG = {
  HEADER: {
    NONE: 'none',
    FLOAT: 'float',
    SCREEN: 'screen',
  },
  HEADERTITLE: {
    NONE: '',
  },
  HEADERALIGN: {
    LEFT: {
      headerTitleAlign: 'left',
    },
    CENTER: {
      headerTitleAlign: 'center',
    },
  },
  SWIPEBACK: {
    FALSE: false,
  },
  FADESCREEN: {
    cardStyleInterpolator: ({ current }) => ({
      cardStyle: {
        opacity: current.progress,
      },
    }),
  },
};
