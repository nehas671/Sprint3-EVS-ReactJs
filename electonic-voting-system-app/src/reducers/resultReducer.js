const  resultReducer = (state=[],  action) => {
    switch(action.type) {
            case 'SHOW_VOTECOUNT':
            return action.payload;
            case 'VIEW_RESULT':
                return action.payload;
        default:
            return [];
    }
}

export default resultReducer;

