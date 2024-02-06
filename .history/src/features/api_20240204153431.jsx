import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACK_END,
    tagTypes: ['userData', 'products', 'profile', 'admin'],
    prepareHeaders: (headers) => {
      const data = JSON.parse(localStorage.getItem('admin'));
      const token = data?.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: () => ({}),
});
