import { apiSlice } from './api';

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (body) => ({
        url: 'api/user/signupauth/',
        method: 'POST',
        body: body,
      }),
    }),

    login: builder.mutation({
      query: (body) => ({
        url: 'api/admin',
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['userData'],
    }),
  }),
});

export const { useSignupMutation, useLoginMutation } = authApi;
