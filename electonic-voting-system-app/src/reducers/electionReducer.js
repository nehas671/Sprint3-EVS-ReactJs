const initialState = [];
const electionReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'ADD_ELECTION':
            return action.payload;
        case 'SHOW_ELECTION':
            return action.payload;
            case 'SHOW_STATES':
                return action.payload;
        default:
            return [];
    }
}

export default electionReducer;
