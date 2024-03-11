import { createAsyncThunk, createSlice, createAction, PrepareAction } from '@reduxjs/toolkit';
import { API_URL } from '../config';
import { deleteToken, deleteUser, persistToken, persistUser, readToken, readUser } from '../../services/localStorage.service';
import { UserModel } from '../../domain/UserModel';

export interface AuthSliceData extends VerifiedStateData {
    token: string | null;
    user: UserModel | null;
    isAuthenticated: boolean;
    errorCase: string;
    isVerified: boolean;
    lastRefreshRequest: number | null;
    emailverifysend: boolean;
    resetPasswordStatus: boolean;
}

export type VerifiedStateData = {
    register_success: boolean;
}

export type SignUpRequest = {
    firstName: string,
    lastName: string,
    role: string,
    phoneNumber: string,
    email: string,
    password: string,
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

export const doSignUp = createAsyncThunk('auth/doSignUp', async (signUpPayload: SignUpRequest, { dispatch }) => {
    const body = JSON.stringify(signUpPayload);
    const response = await fetch(`${API_URL}/api/authentication/register/`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: body,
    })
    console.log("response========>", response);
    const data = await response.json();
    return data;
})

// export const setRegisterVerifiedState = createAction<PrepareAction<VerifiedStateData>>('auth/setRegisterVerifiedState', (data) => {
//     console.log("verifyState===================>", data);
//     return (
//         payload: data.data,
//     )
// })

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(doSignUp.fulfilled, (state, action) => {
            state.register_success = action.payload;
        })
    }
})

export default authSlice.reducer;