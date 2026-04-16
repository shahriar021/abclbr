import { createSlice } from "@reduxjs/toolkit";

const initialState={
    firstName:null,
    lastName:null,
    email:null,
    proPic:null,
}

const profileSlice=createSlice({
    name:'profile',
    initialState,
    reducers:{
        setFirstName:(state,action)=>{
            state.firstName=action.payload
        },
        setLastName:(state,action)=>{
            state.lastName=action.payload
        },
        setEmail:(state,action)=>{
            state.email=action.payload
        },
        setProPic:(state,action)=>{
            state.proPic=action.payload
        }
    }
})

export const {setFirstName,setLastName,setEmail,setProPic}=profileSlice.actions
export default profileSlice.reducer