let defaultState = {
    title: "",
    question: "",
    answer: ""
};

let mainReducer = (state = defaultState, action) => {
    if(action.type === "SET_DATA") {
        return {
            ...state,
            title: action.title,
            question: action.question,
            answer: action.answer
        }
    } else {
        return {
            ...state
        }
    }
};

export default mainReducer;