import { apiSlice } from './api';

const admin = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => `/api/category`,
      providesTags: ['admin'],
    }),
    getSingleProduct: builder.query({
      query: ({ id }) => `api/product/product/${id}`,
      providesTags: ['admin'],
    }),

    addProductUpdate: builder.mutation({
      query: (body, token) => ({
        url: 'api/product/',
        method: 'PATCH',
        headers: { Authorization: `Bearer ${token}` },
        body: body,
      }),
      invalidatesTags: ['admin'],
    }),
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
  useGetCategoryQuery,
  useGetSingleProductQuery,
  useAddProductUpdateMutation,
  //   useDeleteProductMutation,
} = admin;
