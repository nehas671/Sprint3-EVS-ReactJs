const intitialState = [];
const castVoteReducer = (state=intitialState, action) =>
{
    switch (action.type)
    {
        case 'GET_CANDIDATE':
            return action.payload;
        default:
            return [];
    }
}

export default castVoteReducer;