import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://620268dbb8735d00174cba60.mockapi.io/contacts',
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contact'],
    }),

    createContacts: builder.mutation({
      query: (name, number) => ({
        url: './contacts',
        method: 'POST',
        body: {
          name: name,
          phone: number,
        },
      }),
      invalidatesTags: ['Contact'],
    }),

    deleteContacts: builder.mutation({
      query: contactId => ({
        url: `./contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const { useFetchContactsQuery, useDeleteContactsMutation, useCreateContactsMutation } =
  contactsApi;
