import {createSlice} from "@reduxjs/toolkit";

const SearchSlice = createSlice({
    name:"search",
    initialState:{
        city:undefined,
        dates:[],
        options:{
            adult:undefined,
            children:undefined,
            room:undefined
        },
        userDetails:{
            user: JSON.parse(localStorage.getItem("user")) || null,
            loading:false,
            error:null,
            register:JSON.parse(localStorage.getItem("register")) || null
        }
    },
    reducers:{
        newSearch(state,action){
            return {...state, abc:action.payload}
        },
        resetSearch(state,action){
           return state
        },
        loginStart(state,action){
            return{...state,
                user: null,
                loading:true,
                error:null
            }
        },
        loginSuccess(state,action){
            return{...state,
                user:localStorage.setItem("user",JSON.stringify(action.payload)),
                loading:false,
                error:null
            }
        },
        registerSuccess(state,action){
            return{...state,
                register:localStorage.setItem("register",JSON.stringify(action.payload)),
                loading:false,
                error:null
            }
        },
        loginFailed(state,action){
            return{...state,
                user: null,
                loading:false,
                error:action.payload
            }
        },
        logout(state,action){
            return{
                user: null,
                loading:false,
                error:null
            }
        }
    }
    
})



export const {newSearch,resetSearch,loginStart,loginSuccess,loginFailed,logout,registerSuccess} = SearchSlice.actions;
export default SearchSlice.reducer;