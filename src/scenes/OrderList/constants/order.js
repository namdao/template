export default {
  ORDER_STATUS: {
    CANCEL: -1,
    DRAFT: 0,
    SALE: 1,
    DESIGNING: 2,
    FEEDBACK_DESIGN: 3,
    FEEDBACK_DESIGNING: 4,
    DESIGNED: 5,
    PRINTING: 6,
    PRINTED: 7,
    STORED: 8,
    DELIVER: 9,
    DONE: 10,
  },
  ORDER_TYPE: {
    CUSTOM: 'CUSTOM',
    NORMAL: 'NORMAL',
  },
  ORDER_BY: {
    CREATED_TIME: 'created_time',
    UPDATED_TIME: 'updated_time',
    DELIVERY_DATE: 'delivery_date',
    NAME: 'name',
  },
  SORT_BY: {
    ASC: 'asc',
    DESC: 'desc',
  },
  PER_PAGE: {
    DEFAULT: 20,
  },
  FOLLOW: {
    NORMAL: 3,
    WARNING: 5,
  },
  ORDER_PAYMENT: {
    CASH: 'tiền mặt',
    DEBT: 'Công nợ',
  },
  ORDER_DEPARTMENT: {
    DESIGN: 'Phòng design',
    PRINT: 'Phòng in ấn',
    STORE: 'Phòng kho',
    DELIVER: 'Vận chuyển',
    DONE: 'Đã giao',
  },
  PROCESSING_TAB: {
    TAB_SALE: 'tab_sale',
    TAB_CONFIRM: 'tab_confirm',
    TAB_PROCESS: 'tab_process',
    TAB_DESIGNING: 'tab_designing',
    TAB_DESIGNING_FEEDBACK: 'tab_designing_feedback',
    TAB_DESIGNED: 'tab_designed',
    TAB_PRINTING: 'tab_printing',
    TAB_STORED: 'tab_stored',
    TAB_DELIVERY: 'tab_delivery',
  },
};
