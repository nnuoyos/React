let initialState = {
    count : 0,
}
function reducer(state=initialState, action){
    console.log("액션 확인!", action);
    /* if(action.type == "INCREMENT"){
        return {...state, count: state.count + 1}
    }
    return {...state} */

    /* switch문으로 행동지침을 작성한다면 */
    switch(action.type){
        case "INCREMENT": 
            return {...state, count: state.count + 1}
        case "DECREMENT": 
            return {...state, count: state.count - 1}
        default: return {...state}
    }
}

export default reducer;