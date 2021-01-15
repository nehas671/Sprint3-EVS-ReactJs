const scheduleReducer = (state={initialState:[],filter:[]}, action) => {
    switch(action.type) {
        case 'VIEW_SCHEDULE':
            state.initialState=action.payload;
            return state;
        case 'VIEW_SCHEDULE_STATE_LIST':
                console.log("reducer")
               state.filter= action.payload;
                return state;
        case 'VIEW_SCHEDULE_CONSTITUENCY':
                    console.log("reducer")
                   state.filter= action.payload;
                    return state;
         case 'VIEW_SCHEDULE_NAME':
                        console.log("reducer")
                       state.filter= action.payload;
                        return state;
         case 'VIEW_SCHEDULE_MONTH':
             state.filter=action.payload;
             return state;  
        case 'VIEW_SCHEDULE_DATE':
            state.filter=action.payload;
            return state;             
        default:
            return [];
    }
}
export default scheduleReducer;