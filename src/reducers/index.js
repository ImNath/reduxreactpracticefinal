import * as actionTypes from '../actions/actionTypes'

const initialState = {
    //input initial state
    nameInput : "Enter Name",
    passInput : "Enter Pass",
    currentUser : null,
    tryAgain : false,
    users : [{username : "1", password : "1"}, {username : "2", password : "2"},]
};

const reducer = (state = initialState, action) => {

    switch (action.type){
        case actionTypes.FETCH_USERS :
            return {
                ...state, users : action.payload.data.map(user => ({username: user.username, password: 1}))
            }
        case actionTypes.UPDATE_NAMEINPUT :
            return{ ...state, 
                nameInput : action.nameInput
            
            };
            case actionTypes.UPDATE_PASSINPUT :
                    return{
                        ...state,
                        passInput : action.passInput
                    
                    };
            case actionTypes.LOGIN_USER :
                    let attempt = {
                        username : state.nameInput,
                        password : state.passInput,
                    }
                    let isValid = false;
                    let len = state.users.length;
                    for (let i = 0; i < len; i++){
                    
                    if (attempt.username == state.users[i].username && attempt.password == state.users[i].password)
                    {
                        isValid = true;
                        console.log("istrue")
                    
                    }
                    
                    
                    }
                    if (isValid){
                        console.log("madeit")
                        return {...state, currentUser : attempt.username,
                                tryAgain : false};
                    }
                    else {
                        return {...state, tryAgain : true};
                    }
                    return;

                case actionTypes.LOGOUT_USER :
                    return {
                        ...state, nameInput : "Enter Name",
                        passInput : "Enter Pass", currentUser : null
                    }
                    
        default:
            return state;
    }
    

}



export default reducer;