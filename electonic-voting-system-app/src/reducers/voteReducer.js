
const castVoteReducer = (state={electionNamelist:[], statelist:[], candidates:[], castvote:[]}, action) =>
{
    switch (action.type)
    {
        case 'ELECTION_NAME':
            state.electionNamelist = action.payload;
            return state;

        case 'SHOW_STATES':
                state.statelist=action.payload;
                return state;

        case 'GET_CANDIDATE':
            state.candidates = action.payload;
            return state;

        case 'ADD_VOTE':
            state.castvote = action.payload;
            alert("Thank you for voting! You have voted successfully!");
            return state;

        default:
            return [];
    }
}

export default castVoteReducer;