
const initialState = [];
const userReducer = (state=initialState, action) => 
{
    switch(action.type) {
        case 'Add_VoterRequest':
            return action.payload;

        case 'Register_User':
                return action.payload;
        
        case 'SHOW_DISTRICTS':
            return action.payload;
        
         case 'VIEW_VOTERID':
             console.log("In reducer",action.payload);
            return action.payload;
            case 'USER_LOGIN':
                return  action.payload;
        default:
            return [];
    }
}

export default userReducer;

