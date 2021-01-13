const initialState = [];
const scheduleReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'VIEW_SCHEDULE':
            return action.payload;
        default:
            return [];
    }
}

export default scheduleReducer;