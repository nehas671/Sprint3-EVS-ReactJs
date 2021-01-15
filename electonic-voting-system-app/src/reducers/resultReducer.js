import { act } from "react-dom/test-utils";

const  resultReducer = (state={viewresult:[],votecount:[],statelist:[],addresult:[]},  action) => {
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
        default:
            return [];
    }
}

export default resultReducer;

