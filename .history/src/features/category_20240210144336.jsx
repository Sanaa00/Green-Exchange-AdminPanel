import { apiSlice } from './api';

const category = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => `/api/category`,
      providesTags: ['category'],
    }),
    getSingleProduct: builder.query({
      query: ({ id }) => `api/product/product/${id}`,
      providesTags: ['products'],
    }),

    addProductUpdate: builder.mutation({
      query: (body, token) => ({
        url: 'api/product/',
        method: 'PATCH',
        headers: { Authorization: `Bearer ${token}` },
        body: body,
      }),
      invalidatesTags: ['category'],
    }),
  }),
});

export const {
  useGetCategoryQuery,
  useGetSingleProductQuery,
  useAddProductUpdateMutation,
} = category;
