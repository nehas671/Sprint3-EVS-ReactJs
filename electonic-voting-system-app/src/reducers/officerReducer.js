const initialState=[];
const OfficerReducer =(state={initialState:[],filter:[],statelist:[]},action)=>{
    switch(action.type){
        case 'VIEW_VOTERREQ':
            return action.payload;
        case 'APPROVE_REQUEST':
            return action.payload;
        case 'VIEW_DISTRICT':
            state.filter=action.payload;
            return state;
        case 'VIEW_STATUS':
            state.filter=action.payload;
            return state;    
        default:
            return [];

    }
}
export default OfficerReducer;
