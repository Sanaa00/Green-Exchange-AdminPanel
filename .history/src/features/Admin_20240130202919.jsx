import { apiSlice } from './api';

const admin = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAdmin: builder.query({
      query: () => `/api/user/admin`,
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
        body: id, // Include the body in the GET request
      }),
    }),
    addAdmin: builder.mutation({
      query: (body, token) => ({
        url: 'api/admin',
        method: 'PATCH',
        headers: { Authorization: `Bearer ${token}` },
        body: body,
      }),
      invalidatesTags: ['category'],
    }),
    addDonate: builder.mutation({
      query: (id, productID) => ({
        url: `api/admin/${id}`,
        method: 'PUT',
        // headers: { Authorization: `Bearer ${token}` },
        body: productID,
      }),
      invalidatesTags: ['products'],
    }),
    //     addProductUpdate: builder.mutation({
    //       query: (body, token) => ({
    //         url: 'api/product/',
    //         method: 'PATCH',
    //         headers: { Authorization: `Bearer ${token}` },
    //         body: body,
    //       }),
    //       invalidatesTags: ['admin'],
    //     }),
    //     deleteProduct: builder.mutation({
    //       query: ({ user, product }) => ({
    //         url: `api/product/${user}/${product}`,
    //         method: 'DELETE',
    //         body: { user, product },
    //       }),
    //       invalidatesTags: ['products'],
    //     }),
  }),
});

export const {
  useGetAdminQuery,
  useAddAdminMutation,
  useGetDataQuery,
  useAddDonateMutation,
  //   useGetSingleProductQuery,
  //   useAddProductUpdateMutation,
  //   useDeleteProductMutation,
} = admin;
