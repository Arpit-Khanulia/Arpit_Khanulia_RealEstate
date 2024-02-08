import { createSlice } from "@reduxjs/toolkit";

export const myslice = createSlice({

    initialState:0,
    name:'propertysaved',
    reducers:{


        propertysaved:(state,action)=>state = action.payload
    }
})


export const {propertysaved} = myslice.actions;
export default myslice.reducer;
