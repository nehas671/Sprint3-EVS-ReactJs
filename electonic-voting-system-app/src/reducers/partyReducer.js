const initialState = [];
const partyReducer = (state={initialState:[],filter:[],statelist:[]}, action) => {
    switch(action.type) {
        case 'ADD_PARTY':
            console.log("reducer in",action.payload);
            return action.payload;
        case 'VIEW_PARTY':
            state.initialState=action.payload;
            return state;
        case 'SHOW_Leader':
            state.filter = action.payload;
            return state;
        case 'SHOW_Symbol':
            state.filter = action.payload;
            return state;
        
        default:
            return [];
    }
}

export default partyReducer;
