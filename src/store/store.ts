import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { errorLoggingMiddleware } from "./middlewares/errorLogging.middleware";
import rootReducer from "./slices";

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(errorLoggingMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;