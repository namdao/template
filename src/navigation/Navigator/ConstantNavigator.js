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
  ORDER_LIST_DRAFT: 'ORDER_LIST_DRAFT',
  ORDER_LIST_PROCESS: 'ORDER_LIST_PROCESS',
  CUSTOMER: 'CUSTOMER',
  ORDER_CREATION: 'ORDER_CREATION',
  ORDER_DETAIL: 'ORDER_DETAIL',
  ORDER_LIST_CANCEL: 'ORDER_LIST_CANCEL',
  ORDER_LIST_SEARCH: 'ORDER_LIST_SEARCH',
  ORDER_LIST_DESIGN: 'ORDER_LIST_DESIGN',
  ORDER_LIST_PRINT: 'ORDER_LIST_PRINT',
  ORDER_LIST_PRINTING: 'ORDER_LIST_PRINTING',
  ORDER_LIST_PRINTED: 'ORDER_LIST_PRINTED',
  ORDER_LIST_STORED: 'ORDER_LIST_STORED',
  ORDER_LIST_DELIVER: 'ORDER_LIST_DELIVER',
  /**
   * Notification stack
   */
  NOTIFICATION_LIST: 'NOTIFICATION_LIST',
  ORDER_LIST_CONFIRM: 'ORDER_LIST_CONFIRM',
  /**
   * Customer List stack
   */
  CUSTOMER_LIST: 'CUSTOMER_LIST',
  /**
   * Company List stack
   */
  COMPANY: 'COMPANY',
  COMPANY_LIST: 'COMPANY_LIST',
  /**
   * Drawer
   */
  DRAWER_MENU: {
    DASHBOARD: 'DRAWER_DASHBOARD',
    HOME: 'DRAWER_HOME',
    CUSTOMER_LIST: 'DRAWER_CUSTOMER_LIST',
    COMPANY_LIST: 'DRAWER_COMPANY_LIST',
  },
  /**
   * Tab name
   */
  TAB_MENU: {
    /** Sale */
    ORDER_DRAFT: 'TAB_ORDER_DRAFT',
    ORDER_LIST: 'TAB_ORDER_LIST',
    ORDER_CANCEL: 'TAB_ORDER_CANCEL',
    SETTINGS: 'TAB_SETTINGS',
    ACTION_BUTTON: 'ACTION_BUTTON',
    /** Design */
    ORDER_LIST_DESIGN: 'TAB_ORDER_LIST_DESIGN',
    ORDER_LIST_DESIGNING: 'TAB_ORDER_LIST_DESIGNING',
    /** Printer */
    ORDER_LIST_DESIGNED: 'TAB_ORDER_LIST_DESIGNED',
    ORDER_LIST_PRINTING: 'TAB_ORDER_LIST_PRINTING',
    /** Storer */
    ORDER_LIST_PRINTED: 'TAB_ORDER_LIST_PRINTED',
    ORDER_LIST_STORED: 'TAB_ORDER_LIST_STORED',
    ORDER_LIST_DELIVER: 'TAB_ORDER_LIST_DELIVER',
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
  HEADER_TITLE: {
    NONE: '',
  },
  HEADER_ALIGN: {
    LEFT: {
      headerTitleAlign: 'left',
    },
    CENTER: {
      headerTitleAlign: 'center',
    },
  },
  SWIPE_BACK: {
    FALSE: false,
  },
  FADE_SCREEN: {
    cardStyleInterpolator: ({ current }) => ({
      cardStyle: {
        opacity: current.progress,
      },
    }),
  },
};
