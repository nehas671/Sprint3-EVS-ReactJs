
const castVoteReducer = (state={statelist:[], candidates:[], castvote:[]}, action) =>
{
    switch (action.type)
    {
        case 'SHOW_STATES':
                state.statelist=action.payload;
                return state;

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