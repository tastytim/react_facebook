import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunkMiddelware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import appReducer from "./app-reducer";


// REACT-REDUX STORE 
 
//REDUCERS 
let reducers = combineReducers({
    profilePage : profileReducer,
    dialogsPage: dialogsReducer,
    sidebar : sidebarReducer,
    usersPage : usersReducer, 
    auth : authReducer,
    form: formReducer,
    app: appReducer,
});


//CREATE STORE
//AND APPLY MIDDLEWARE THUNKS
let store = createStore(reducers, applyMiddleware(thunkMiddelware));


//WINDOW STORE FOR TEST
window.store = store;

export default store;