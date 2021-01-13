const initialState = [];
const candidateReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'ADD_CANDIDATE':
            return action.payload;
            case 'SHOW_PARTYS':
                return action.payload;
        default:
            return [];
    }
}

export default candidateReducer;
