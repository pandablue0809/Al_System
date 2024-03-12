import { isRejectedWithValue, Middleware } from "@reduxjs/toolkit";
import { notificationController } from "../../controllers/notificationController";

/**
 * Log a warning and show a toast!
 */
export const errorLoggingMiddleware: Middleware = () => (next) => (action) => {
    if (isRejectedWithValue(action)) {
        if (typeof action.payload === 'string') {
            notificationController.error({ message: action.payload });
        } else {
            notificationController.error({ message: 'An unknown error occurred' });
        }
    }

    return next(action);
};