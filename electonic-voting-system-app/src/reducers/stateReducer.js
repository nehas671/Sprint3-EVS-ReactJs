const stateReducer = (state=[],  action) => {
    switch(action.type) {
        case 'SHOW_STATES':
            return action.payload;
           
        default:
            return [];
    }
}
export default stateReducer;
