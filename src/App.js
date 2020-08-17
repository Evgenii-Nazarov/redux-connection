import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import {getNewList} from "./redux/actios";

function App(props) {
    const [newTodo, setNewTodo] = useState('')
    console.log(props)
    const {todos=[]} = props;

    const addButtonHandler = () => {
        props.addTodo(newTodo);
        setNewTodo('')
    }

    useEffect(() => {
        props.getList()
    }, [])


    return (
        <div className="App">

            {todos.map(el => (

                <li>
                    {el.name}
                    <button onClick={() => props.deleteTodo(el.id)}>DELETE</button>

                </li>

            ))}

            <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
            <button onClick={addButtonHandler}>add new todo</button>
        </div>
    );
}

const mapStateToProps = (state) => ({
    todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
    addTodo: (todo) => dispatch({type: 'TODO_ADD', payload: todo}),
    deleteTodo: (todoId) => dispatch({type: 'TODO_DELETE', payload: todoId}),
    getList: () => dispatch(getNewList())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
