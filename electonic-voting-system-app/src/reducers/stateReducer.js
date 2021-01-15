const stateReducer = (state={statename:[]},  action) => {
    switch(action.type) {
        case 'SHOW_STATES':
            state.statename=action.payload;
            return state;
        default:
            return [];
    }
}
export default stateReducer;


/*
const stateReducer = (state = {statename:[]},  action) => {
    switch(action.type) {
        case 'SHOW_STATES':
            state.statename = action.payload;
            return state;
        default:
            return [];
    }
}
export default stateReducer;
*/