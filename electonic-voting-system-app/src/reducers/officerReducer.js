const initialState=[];
const OfficerReducer =(state=initialState,action)=>{
    switch(action.type){
        case 'VIEW_VOTERREQ':
            return action.payload;
        case 'APPROVE_REQUEST':
            return action.payload;
        default:
            return [];

    }
}
export default OfficerReducer;
