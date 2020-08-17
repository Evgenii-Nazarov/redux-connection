import axios from "axios";


export function getNewList() {
    return (dispatch) => {
        axios.get('http://localhost:5000/todo')
            .then(res => {
                dispatch({
                    type: 'GET_TODO_LIST',
                    payload: res.data
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }
}

