import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Configurar interceptor para incluir token en todas las peticiones
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para manejar errores de autorización
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expirado o inválido
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const authService = {
  login: async (email: string, password: string) => {
    const response = await axios.post(`${API_URL}/auth/login`, { email, password });
    return response.data;
  },

  register: async (email: string, password: string) => {
    const response = await axios.post(`${API_URL}/auth/register`, { email, password });
    return response.data;
  },

  getProfile: async () => {
    const response = await axios.get(`${API_URL}/auth/profile`);
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('token');
  }
};

export const userService = {
  getUsers: async () => {
    const response = await axios.get(`${API_URL}/users/`);
    return response.data;
  },

  getUser: async (id: number) => {
    const response = await axios.get(`${API_URL}/users/${id}`);
    return response.data;
  },

  updateUser: async (id: number, data: any) => {
    const response = await axios.put(`${API_URL}/users/${id}`, data);
    return response.data;
  },

  deleteUser: async (id: number) => {
    const response = await axios.delete(`${API_URL}/users/${id}`);
    return response.data;
  }
};