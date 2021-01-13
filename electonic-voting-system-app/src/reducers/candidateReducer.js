const initialState = [];
const candidateReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'ADD_CANDIDATE':
            console.log("reducer in",action.payload);
            return action.payload;
            case 'SHOW_PARTYS':
                return action.payload;
                case 'VIEW_CANDIDATE':
                return action.payload;
        default:
            return [];
    }
}

export default candidateReducer;
