const candidateReducer = (state={initialState:[],filter:[]}, action) => {
    switch(action.type) {
        case 'ADD_CANDIDATE':
<<<<<<< HEAD
            state.initialState.push(action.payload);
            return state;
        
            case 'VIEW_CANDIDATE':
                state.initialState=action.payload;
                return state;

            
                case 'SHOW_PARTYS':
                    state.initialState=action.payload;
                    return state;

                case 'CANDIDATE_NAME':
                 state.filter=action.payload;
                return state;

                case 'PARTY_NAME':
                 state.filter=action.payload;
                return state;

=======
            console.log("reducer in",action.payload);
            return action.payload;
            case 'SHOW_PARTYS':
                return action.payload;
                case 'VIEW_CANDIDATE':
                return action.payload;
                case 'DELETE_CANDIDATE':
                return action.payload;
>>>>>>> 9b2be4ce1d8848a7ff5353c3064f204dd734f8d8
        default:
            return [];
    }
}

export default candidateReducer;
