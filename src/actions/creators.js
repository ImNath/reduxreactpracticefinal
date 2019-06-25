import * as actionTypes from './actionTypes';
import jsonPlaceholder from '../apis/jsonPlaceholder.js'

export const updateNameInput = (name) => {
    return {
        type: actionTypes.UPDATE_NAMEINPUT,
        nameInput: name
    }
};

export const updatePassInput = (pass) => {
    return {
        type: actionTypes.UPDATE_PASSINPUT,
        passInput: pass
    }
};

export const loginUser = () => {

    return {
        type: actionTypes.LOGIN_USER
    }

}

export const logoutUser = () => {

    return {
        type: actionTypes.LOGOUT_USER
    }

}

export const fetchUsers = () => {

    return async function(dispatch, /*getState*/) {
        const response = await jsonPlaceholder.get('/users');

        dispatch({type: actionTypes.FETCH_USERS, payload: response})
    };

};