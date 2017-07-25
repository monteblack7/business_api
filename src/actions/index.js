import axios from "axios";

export function getData() {
    return (dispatch) => {
        return axios.get(`http://jservice.io/api/random`).then((response) => {
            console.log(response.data[0].title);
            dispatch(setData(response.data[0].category.title, response.data[0].question, response.data[0].answer));
        }).catch((error) => {
            throw error;
        })
    }
}

export function setData(title, question, answer) {
    return {
        type: "SET_DATA",
        title,
        question,
        answer
    }
}