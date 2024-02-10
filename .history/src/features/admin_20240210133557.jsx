import { apiSlice } from './api';

const admin = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAdminData: builder.query({
      query: ({ id }) => `/api/admin/${id}`,
      providesTags: ['products'],
    }),
    getSingleProduct: builder.query({
      query: ({ id }) => `api/product/product/${id}`,
      providesTags: ['products'],
    }),
    getData: builder.query({
      query: (id) => ({
        url: '/api/user/admin',
        method: 'GET',
        body: id,
      }),
    }),
    getBlockData: builder.query({
      query: ({ id }) => ({
        url: `/api/admin/block/${id}`,
        method: 'GET',
      }),
      providesTags: ['products'],
    }),
    addAdmin: builder.mutation({
      query: ({ email, id }, token) => ({
        url: `api/admin/${id}`,
        method: 'PATCH',
        headers: { Authorization: `Bearer ${token}` },
        body: { email },
      }),
      invalidatesTags: ['category'],
    }),
    addDonate: builder.mutation({
      query: ({ id, productid }) => ({
        url: `api/admin/${id}`,
        method: 'PUT',
        body: { productid },
      }),
      invalidatesTags: ['products'],
    }),
    addBlock: builder.mutation({
      query: ({ id, productid }) => ({
        url: `api/admin/block/${id}`,
        method: 'PATCH',
        body: { productid },
      }),
      invalidatesTags: ['products'],
    }),
    unBlock: builder.mutation({
      query: ({ id, productid }) => ({
        url: `api/admin/block/${id}`,
        method: 'PUT',
        body: { productid },
      }),
      invalidatesTags: ['products'],
    }),
    addCity: builder.mutation({
      query: (city, token) => ({
        url: `api/city`,
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: city,
      }),
      invalidatesTags: ['city'],
    }),
  }),
});

export const {
  useGetAdminDataQuery,
  useAddAdminMutation,
  useGetDataQuery,
  useAddDonateMutation,
  useAddBlockMutation,
  useGetBlockDataQuery,
  useUnBlockMutation,
  useAddCityMutation,
} = admin;
