import { combineReducers } from 'redux';
import ProfileReducer from './ProfileReducer';

const rootReducer = combineReducers({
  profile: ProfileReducer
});

export default rootReducer;
