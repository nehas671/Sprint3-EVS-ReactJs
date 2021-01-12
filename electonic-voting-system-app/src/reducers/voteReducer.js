const intitialState = [];
const castVoteReducer = (state=intitialState, action) =>
{
    switch (action.type)
    {
        case 'GET_CANDIDATE':
            return action.payload;
        default:
            return state;
    }
}

export default castVoteReducer;