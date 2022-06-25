import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

const RootReducer = combineReducers({
    userAuth: AuthReducer,
});
export default RootReducer;