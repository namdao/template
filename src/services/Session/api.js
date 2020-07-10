import axios from 'axios';

export const getMe = () => axios.get('/users/me');

export const logout = () => axios.delete('/users/session');
