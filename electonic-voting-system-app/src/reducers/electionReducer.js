
const electionReducer = (state={initialState:[],filter:[],statelist:[]}, action) => {
    switch(action.type) {
        case 'ADD_ELECTION':
            state.initialState=action.payload;
            return state;
        case 'SHOW_ELECTION':
            state.initialState=action.payload;
            return state;
            case 'SHOW_STATES':
                state.statelist=action.payload;
                return state;
            case 'CONSTITUENCY_NAME':
                 state.filter=action.payload;
            return state;
            case 'ELECTION_NAME':
                state.filter=action.payload;
           return state;
           case 'STATE':
            state.filter=action.payload;
          return state;
           case 'DATE':
                    state.filter=action.payload;
                 return state;
        default:
            return [];
    }
}

export default electionReducer;
