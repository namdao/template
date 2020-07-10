export const mergeParamsToUrl = (
  status,
  order_by,
  sort_by,
  per_page,
  get_page = 1,
  paramsFilter
) => {
  const statusOrder = `status=${status}`;
  const orderBy = `order_by=${order_by}`;
  const sortBy = `sort_direction=${sort_by}`;
  const perPage = `per_page=${per_page}`;
  const page = `page=${get_page}`;
  const addMoreParams = paramsFilter?.field ? `&${paramsFilter.field}=${paramsFilter.value}` : '';
  return `?${statusOrder}&${orderBy}&${sortBy}&${perPage}&${page}${addMoreParams}`;
};
