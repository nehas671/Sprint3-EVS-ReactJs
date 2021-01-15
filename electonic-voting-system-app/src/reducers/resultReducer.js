import { act } from "react-dom/test-utils";

const  resultReducer = (state={viewresult:[],votecount:[],addresult:[],statelist:[],refine:[], electionname:[], delete:[], viewall:[]},  action) => {
    switch(action.type) {
            case 'SHOW_VOTECOUNT':
                state.votecount=action.payload;
            return state;

            case 'VIEW_RESULT':
                state.viewresult=action.payload;
                return state;
            case 'ADD_RESULT':
                state.addresult=action.payload;
                return state;

            case 'SHOW_STATES':
                state.statelist=action.payload;
                return state;
                 
            case 'ELECTION_WISE':
                state.refine=action.payload;
                return state;
                    
            case 'STATE_WISE':
                state.refine=action.payload;
                return state;

                case 'PARTY_WISE':
                state.refine=action.payload;
                return state;

                case 'DELETE_RESULT':
                    state.delete=action.payload;
                    return state;

                 case 'VIEW_ALL_RESULT':
                     state.viewall=action.payload ;
                     return state;  

                    case 'SHOW_ELECTION_NAME':
                        state.electionname=action.payload;
                        return state;
                 default:
                    return [];
    }
}

export default resultReducer;

