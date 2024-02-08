import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../Store';


interface LoginRequest {
    username: string;
    email:string;
    password: string;
}

interface RegisterRequest {
    name:string;
    username: string;
   email: string;
   address:string;
   phoneno:string;
   password: string;
}

interface User {
    _id: string;
    name:string;
    username: string;
    email: string;
    password: string;
    address:string;
    phoneno:string;

  }

  interface Property{
    _id: string;
    uid: string;
    sellerEmail: string;
    location: string;
    type: string;
    price: number|string;
    photoPath: string;
    sell: boolean|string;
    rent: boolean|string;
    pincode: string;
    description: string;
  }
  interface Propertypost{
    uid: string;
    sellerEmail: string;
    location: string;
    type: string;
    price: number|string;
    photoPath: string;
    sell: boolean|string;
    rent: boolean|string;
    pincode: string;
    description: string;
  }
    export const authApi = createApi({
        
        reducerPath: 'authApi',
        baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000',
        prepareHeaders:(headers,{getState})=>{
            const authToken=(getState() as RootState).saveUserAndToken.accessToken;
            if(authToken){
                headers.set("authorization",`Bearer ${authToken}`);
            }
            return headers;
        }

                
 }),
   tagTypes: ['Auth'],
   endpoints: (builder) => ({

       login: builder.mutation<{ user: User ,accessToken:string}, LoginRequest>({
           query: (body) => ({
               url: '/login',
               method: 'POST', 
               body,
           }),
           invalidatesTags: ['Auth'],
       }),
       register: builder.mutation<void, RegisterRequest>({
           query: (body) => ({
               url: '/register',
               method: 'POST',
               body,
           }),
           invalidatesTags: ['Auth'],
       }),
       getProperties: builder.query<Array<Property>, void>({
           query: () => '/allproperty',
       }),
       addProperty: builder.mutation<void, Propertypost>({
           query: (body) => ({
               url: '/addproperty',
               method: 'POST',
               body,
           }),
           invalidatesTags: ['Auth'],
       }),

   }),
});

export const { useLoginMutation, useRegisterMutation,useGetPropertiesQuery,useAddPropertyMutation} = authApi;





