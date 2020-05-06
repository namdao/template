import axios from 'axios';

export const getListOrders = (body) => axios.get(`orders/${body}`);
