import { createAsyncThunk, createSlice, createAction } from '@reduxjs/toolkit';
import { API_URL } from '../../config';
import { deleteToken, deleteUser, persistToken, persistUser, readToken, readUser } from '../../services/localStorage.service';
import { setUser } from './userSlice';
import { UserModel } from '../../domain/UserModel';

export type AuthSliceData = {
    user: UserModel | null;
    isAuthenticated: boolean;
    errorCase: string;
    verifying: boolean;
    isVerified: boolean;
    lastRefreshRequest: number | null;
    emailverifysend: boolean;
    resetPasswordStatus: boolean;
    register_success: boolean;
}

const initialState: AuthSliceData = {
    user: readUser(),
    isAuthenticated: false,
    errorCase: '',
    verifying: false,
    isVerified: false,
    register_success: false,
    lastRefreshRequest: null,
    emailverifysend: false,
    resetPasswordStatus: false,
}

export type SignUpRequest = {
    firstName: string,
    lastName: string,
    user_type: string,
    phoneNumber: string,
    email: string,
    password: string,
}

export type LoginRequest = {
    email: string;
    password: string;
}

export const setMailVerifying = createAction('auth/setMailVerifying', () => {
    return {
        payload: true,
    }
});

export const setMailVerifyDone = createAction('auth/setMailVerifyDone', () => {
    return {
        payload: false,
    }
})

export const setVerifiedStatus = createAction('auth/setVerifiedStatus', () => {
    return {
        payload: true,
    };
})

export const doSignUp = createAsyncThunk('auth/doSignUp', async (signUpPayload: SignUpRequest, { rejectWithValue }) => {
    try {
        const response = await fetch(`${API_URL}/api/authentication/register/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(signUpPayload),
        })

        // Check if the request was successful
        if (!response.ok) {
            throw new Error('Signup failed');
        }
    } catch (error: any) {
        return rejectWithValue(error.message);
    }
})

export const doLogin = createAsyncThunk('auth/doLogin', async (loginPayload: LoginRequest, { dispatch, rejectWithValue }) => {
    try {
        const response = await fetch(`${API_URL}/api/authentication/login/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginPayload),
        })

        const data = await response.json();

        console.log('data from backend', data, response);

        if (response.status === 200) {
            persistToken(data.result.token);
            dispatch(setUser(data.result.user));
        }
    } catch (error: any) {
        return rejectWithValue(error.message);
    }
})

export const doEmailVerify = createAsyncThunk('auth/doEmailVerify', async (token: string, { dispatch }) => {
    dispatch(setMailVerifying());
    try {
        const res = await fetch(`${API_URL}/api/authentication/mail-verify/`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            },
        })
        dispatch(setMailVerifyDone());
        const result = await res.json();
        if (result.success) {
            dispatch(setVerifiedStatus());
        }
    }
    catch (e) {
        dispatch(setMailVerifyDone());
    }
})

export const doLogout = createAsyncThunk('auth/doLogout', (payload, { dispatch }) => {
    deleteToken();
    deleteUser();
    dispatch(setUser(null));
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(doSignUp.fulfilled, (state) => {
            state.register_success = true;
        });
        builder.addCase(doLogin.fulfilled, (state) => {
            state.isAuthenticated = true;
        })
        builder.addCase(setMailVerifying, (state, action) => {
            state.verifying = action.payload;
        });
        builder.addCase(setMailVerifyDone, (state, action) => {
            state.verifying = action.payload;
        });
        builder.addCase(setVerifiedStatus, (state, action) => {
            state.isVerified = action.payload;
        });
    }
})

export default authSlice.reducer;