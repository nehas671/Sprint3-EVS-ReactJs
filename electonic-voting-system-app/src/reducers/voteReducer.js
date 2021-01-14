
const castVoteReducer = (state={candidates:[], castvote:[]}, action) =>
{
    switch (action.type)
    {
        case 'GET_CANDIDATE':
            state.candidates = action.payload;
            return state;

        case 'ADD_VOTE':
            state.castvote = action.payload;
            return state;

        default:
            return [];
    }
}

export default castVoteReducer;