export const ORDER_BY = 'ORDER_BY';

export const postsOrderBy = orderBy => ({
  type: ORDER_BY,
  payload: orderBy
});
