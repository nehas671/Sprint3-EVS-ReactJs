const  resultReducer = (state=[],  action) => {
    switch(action.type) {
            case 'SHOW_RESULT':
            return action.payload;
        default:
            return [];
    }
}

export default resultReducer;

