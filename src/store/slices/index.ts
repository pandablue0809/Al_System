import userReducer from "./userSlice";
import authReducer from "./authSlice";
import settingReducer from "./settingSlice";

export default {
    user: userReducer,
    auth: authReducer,
    setting: settingReducer,
};