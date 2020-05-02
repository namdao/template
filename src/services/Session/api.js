import axios from 'axios';

export const getMe = () => axios.get('/users/me');
