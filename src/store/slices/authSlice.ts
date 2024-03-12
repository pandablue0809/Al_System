import { createAsyncThunk, createSlice, createAction, PrepareAction } from '@reduxjs/toolkit';
import { API_URL } from '../config';
import { deleteToken, deleteUser, persistToken, persistUser, readToken, readUser } from '../../services/localStorage.service';
import { UserModel } from '../../domain/UserModel';

export type AuthSliceData = {
    token: string | null;
    user: UserModel | null;
    isAuthenticated: boolean;
    errorCase: string;
    isVerified: boolean;
    lastRefreshRequest: number | null;
    emailverifysend: boolean;
    resetPasswordStatus: boolean;
    register_success: boolean;
}

const initialState: AuthSliceData = {
    token: readToken(),
    user: readUser(),
    isAuthenticated: false,
    errorCase: '',
    isVerified: false,
    register_success: false,
    lastRefreshRequest: null,
    emailverifysend: false,
    resetPasswordStatus: false,
}

export type SignUpRequest = {
    firstName: string,
    lastName: string,
    role: string,
    phoneNumber: string,
    email: string,
    password: string,
}

export const doSignUp = createAsyncThunk('auth/doSignUp', async (signUpPayload: SignUpRequest) => {
    const body = JSON.stringify(signUpPayload);
    const res = await fetch(`${API_URL}/api/authentication/register/`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: body,
    })
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(doSignUp.fulfilled, (state) => {
            state.register_success = true;
        });
    }
})

export default authSlice.reducer;