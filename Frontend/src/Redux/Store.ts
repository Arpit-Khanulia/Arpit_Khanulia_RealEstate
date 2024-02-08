import { configureStore } from '@reduxjs/toolkit'
import  myslice  from './Slices/data'
import { authApi } from './Slices/Auth'
import { setupListeners } from '@reduxjs/toolkit/query'
import authUser from './Slices/User'

export const store = configureStore({
  reducer: {

    propertySearched:myslice, 
    saveUserAndToken:authUser,
    [authApi.reducerPath] :authApi.reducer
    
  },

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(authApi.middleware),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch);