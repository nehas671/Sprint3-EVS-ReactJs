const candidateReducer = (state = { initialState: [], filter: [], partylist: [] }, action) => {
    switch (action.type) {
        case 'ADD_CANDIDATE':
            state.initialState.push(action.payload);
            return state;

        case 'VIEW_CANDIDATE':
            state.initialState = action.payload;
            return state;


        case 'SHOW_PARTYS':
            state.partylist = action.payload;
            return state;

        case 'CANDIDATE_NAME':
            state.filter = action.payload;
            return state;

        case 'CANDIDATE_EMAIL':
            state.filter = action.payload;
            return state;

        case 'CANDIDATE_NUMBER':
            state.filter = action.payload;
            return state;

        case 'PARTY_NAME':
            state.filter = action.payload;
            return state;
        case 'DELETE_CANDIDATE':
            state.initialState = action.payload;
            return state;

        default:
            return [];
    }
}

export default candidateReducer;
