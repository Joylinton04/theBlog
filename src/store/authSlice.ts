import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Users } from "./FirebaseAuth";

interface user {
    name: string | null;
    email: string | null;
    password: string | null;
    isAdmin?: boolean;
}

interface AuthState {
    isAuthenticated: boolean;
    hasAccount: boolean;
    currentUser: user | null;
    users: user[];
}

const initialState: AuthState = {
    isAuthenticated: false,
    hasAccount: true,
    currentUser: null,
    users: Users
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
        clearUser(state) {
            state.currentUser = null;
            state.isAuthenticated = false;
        },
        login(state, action: PayloadAction<{ name: string; password: string }>) {
            const { name, password } = action.payload;
            const foundUser = state.users.find(user => user.name === name && user.password === password);
            if (foundUser) {
                state.isAuthenticated = true;
                state.currentUser = foundUser;
                state.hasAccount = true;
            } else {
                state.hasAccount = false;
            }
        },
        signUp(state, action: PayloadAction<{ name: string; email: string; password: string }>) {
            const { name, email, password } = action.payload;
            const foundUser = state.users.find(user => user.name === name || user.email === email);
            if (!foundUser) {
                state.users.push({ name, email, password });
                state.isAuthenticated = true;
                state.currentUser = { name, email, password };
                state.hasAccount = true;
            } else {
                state.hasAccount = false;
            }
        },
        logout(state) {
            state.isAuthenticated = false;
            state.currentUser = null;
        }
    }
});

export const { login, signUp, logout, setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;