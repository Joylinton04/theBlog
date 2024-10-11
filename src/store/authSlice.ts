import { Password } from "@mui/icons-material";
import { Users } from "./Logins";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";


interface user {
    name: null|string,
    password: null|string ,
}

interface AuthState {
    isAuthenticated: boolean;
    hasAccount: boolean;
    currentUser: user | null;
    users: user[];
}


const initialState:AuthState = {
    isAuthenticated: false,
    hasAccount: false,
    currentUser: null,
    users:Users
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<{ name: string; password: string }>) {
            const { name, password } = action.payload
            const foundUser = state.users.find(user => user.name === name && user.password === password)
            if(foundUser) {
                state.isAuthenticated = true
                state.currentUser = foundUser
            } else {
                state.hasAccount = false
            }
        },
        signUp(state, action: PayloadAction<{ name: string; email:string; password: string }>) {
            const { name, email, password } = action.payload
            const foundUser = state.users.find(user => user.name === name && user.password === password && user.name === email)
                if(!foundUser) {
                    state.users.push(action.payload)
                    state.isAuthenticated = true
                } else {
                    state.hasAccount = true
                }
        },
        logout(state) {
            state.isAuthenticated = false
            state.currentUser = null
        }
    }
})

export default authSlice.reducer
export const {login, logout, signUp} = authSlice.actions