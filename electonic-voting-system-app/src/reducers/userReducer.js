const initialState = [];
const userReducer = (state=initialState, action) => 
{
    switch(action.type) {
        case 'Add_VoterRequest':
            return action.payload;
        
        case 'SHOW_DISTRICTS':
                return action.payload;
        default:
            return [];
    }
}

export default userReducer;
