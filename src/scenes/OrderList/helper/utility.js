export const mergeParamsToUrl = (status, order_by, sort_by, per_page) => {
  const statusOrder = `status=${status}`;
  const orderBy = `order_by=${order_by}`;
  const sortBy = `sort_direction=${sort_by}`;
  const perPage = `per_page=${per_page}`;
  return `?${statusOrder}&${orderBy}&${sortBy}&${perPage}`;
};
