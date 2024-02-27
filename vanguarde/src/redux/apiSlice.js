import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'rearguarde',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/resources',
    }),
    endpoints: builder => ({
        getReleaseById: builder.query({
            query: (id) => `/releases/${id}`
        }),
    }),
});

export const { useGetPostsQuery } = apiSlice;
