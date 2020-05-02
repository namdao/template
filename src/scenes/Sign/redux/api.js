import axios from 'axios';

export const login = (body) => axios.post('users/session', body);
