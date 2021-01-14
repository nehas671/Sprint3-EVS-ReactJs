const initialState = [];
const registerReducer = (state=initialState, action) => 
{
    switch(action.type) {
        case 'Register_User':
            return action.payload;
        
        case 'SHOW_DISTRICTS':
            return action.payload;
        
         
        default:
            return [];
    }
}

export default registerReducer;

