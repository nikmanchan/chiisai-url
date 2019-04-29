import { combineReducers } from 'redux';
import urlData from './urlReducer'
import user from './userReducer'
import loginMode from './loginModeReducer';


// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// It is made a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
    urlData, // will store URL data in redux state 
    user, // will have an id and username if someone is logged in
    loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
});

export default rootReducer;