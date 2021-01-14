const initialState=[];
const userReducer =(state=initialState,action)=>{
    switch(action.type){
        case 'VIEW_VOTERID':
            console.log("In reducer",action.payload);
            return action.payload;
        default:
            return [];

    }
}
export default userReducer;