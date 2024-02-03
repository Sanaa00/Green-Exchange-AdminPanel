import { apiSlice } from './api';

const admin = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAdminData: builder.query({
      query: ({ id }) => `/api/admin/${id}`,
      providesTags: ['admin'],
    }),
    getSingleProduct: builder.query({
      query: ({ id }) => `api/product/product/${id}`,
      providesTags: ['admin'],
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
        url: '/api/admin/',
        // method: 'GET',
        body: id,
      }),
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
  }),
});

export const {
  useGetAdminDataQuery,
  useAddAdminMutation,
  useGetDataQuery,
  useAddDonateMutation,
  useAddBlockMutation,
  useGetBlockDataQuery,
} = admin;
