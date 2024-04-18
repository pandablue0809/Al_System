import userReducer from './userSlice';
import authReducer from './authSlice';
import configReducer from './configSlice';
import chatReducer from './chatSlice';

export default {
  user: userReducer,
  auth: authReducer,
  config: configReducer,
  chat: chatReducer,
};
