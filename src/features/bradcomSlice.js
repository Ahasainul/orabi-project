import { createSlice } from '@reduxjs/toolkit'

export const bradcomSlice = createSlice({
name:'bradcomSlice',
 initialState:{
    currentname: "",
    previousname:"",
 },
 reducers:{
    pageName:(state,action) =>{
        state.currentname=state.previousname
        state.previousname=action.payload
    },
 },


});
export const {pageName } = bradcomSlice.actions;
export default bradcomSlice.reducer;