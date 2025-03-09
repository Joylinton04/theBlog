import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

interface user {
    email: string | null;
    password: string | null;
    isAdmin?: boolean;
}

interface AuthState {
    isAuthenticated: boolean;
    currentUser: user | null;
}

const initialState: AuthState = {
    isAuthenticated: false,
    currentUser: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, action) {
            state.currentUser = action.payload;
            state.isAuthenticated = true;
            // state.loading = false;
        },
        clearUser (state) {
            try {
                signOut(auth)
                state.currentUser = null;
                state.isAuthenticated = false;
            } catch (err) {
                console.log(err);
            }
        },
        logout(state) {
            state.currentUser = null;
            state.isAuthenticated = false;
        }
    }
});

export const { logout, setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;