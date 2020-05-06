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
};
