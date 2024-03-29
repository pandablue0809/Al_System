import { createAsyncThunk, createSlice, createAction } from '@reduxjs/toolkit';
import { API_URL } from '../../config';
import { deleteToken, deleteUser, persistToken, persistUser } from '../../services/localStorage.service';
import { setUser } from './userSlice';

export type AuthSliceData = {
    isAuthenticated: boolean;
    errorMessage: string | unknown;
    verifying: boolean;
    isVerified: boolean;
    lastRefreshRequest: number | null;
    emailverifysend: boolean;
    resetPasswordStatus: boolean;
    register_success: boolean;
}

const initialState: AuthSliceData = {
    isAuthenticated: false,
    errorMessage: '',
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
    } catch (error: unknown) {
        if (error instanceof Error) {
            return rejectWithValue(error.message);
        } else {
            return rejectWithValue('An unknown error occurred');
        }
    }
})

export const doLogin = createAsyncThunk('auth/doLogin', async (loginPayload: LoginRequest, { dispatch, rejectWithValue }) => {
    try {
        const res = await fetch(`${API_URL}/api/authentication/login/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginPayload),
        })

        const data = await res.json();

        console.log('data from data', data);
        console.log('data from status=========>', res);

        if (res.status === 200) {
            persistToken(data.result.token);
            dispatch(setUser(data.result.user.username));
            persistUser(data.result.user);
        } else {
            return rejectWithValue(data.message || 'Login failed');
        }
    } catch (error: unknown) {
        if (error instanceof Error) {
            return rejectWithValue(error.message);
        } else {
            return rejectWithValue('An unknown error occurred');
        }
    }
})

export const doEmailVerify = createAsyncThunk('auth/doEmailVerify', async (token: string, { dispatch, rejectWithValue }) => {
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
        } else {
            return rejectWithValue(result.message || "Mail verify failed");
        }
    }
    catch (e) {
        dispatch(setMailVerifyDone());
    }
})

export const doLogout = createAsyncThunk('auth/doLogout', async (_, { dispatch }) => {
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
        })
        builder.addCase(doLogin.fulfilled, (state) => {
            state.isAuthenticated = true;
        })
            .addCase(doLogin.rejected, (state, action) => {
                state.isAuthenticated = false;
                state.errorMessage = action.payload;
            })
            .addCase(doLogin.pending, (state) => {
                state.isAuthenticated = false;
                state.errorMessage = ''
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
        builder.addCase(doLogout.fulfilled, (state) => {
            state.isAuthenticated = false;
        })
    }
})

export default authSlice.reducer;