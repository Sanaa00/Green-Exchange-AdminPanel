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
 fetchDataWithBody: builder.query({
      query: (bodyData) => ({
        url: '/api/user/admin',
        method: 'GET',
        body: bodyData, // Include the body in the GET request
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
  //   useGetSingleProductQuery,
  //   useAddProductUpdateMutation,
  //   useDeleteProductMutation,
} = admin;
