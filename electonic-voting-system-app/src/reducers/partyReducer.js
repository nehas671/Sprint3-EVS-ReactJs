const initialState = [];
const partyReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'ADD_PARTY':
            console.log("reducer in",action.payload);
            return action.payload;
        case 'VIEW_PARTY':
            return action.payload;
        default:
            return [];
    }
}

export default partyReducer;
