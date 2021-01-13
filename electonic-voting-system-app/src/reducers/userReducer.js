const initialState=[];
const UserReducer =(state=initialState,action)=>{
    switch(action.type){
        case 'VIEW_VOTERID':
            return action.payload;
        default:
            return [];

    }
}
export default UserReducer;