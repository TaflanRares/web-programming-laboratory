import { useState } from 'react';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    function handleAdd() {
        if (input.trim() === '') return; // Nu adauga text gol
        setTodos([...todos, input]); // Creeaza array NOU cu tot ce era + input
        setInput(''); // Goleste input-ul
    }

    function handleDelete(index) {
        setTodos(todos.filter(function (_, i) {
            return i !== index;
        }));
    }

    return (
        <section className="todo-list-widget" aria-label="Todo list">
            <h3>Todo List</h3>
            <div className="todo-list-controls">
                <input
                    className="todo-list-input"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    type="button"
                    className="todo-list-add-button"
                    onClick={handleAdd}
                > Add </button>
            </div>

            <ul className="todo-list-items">
                {todos.map((todo, index) => (
                    <li key={index} className="todo-list-item">
                        <span>{todo}</span>
                        <button
                            type="button"
                            className="todo-list-delete-button"
                            onClick={() => handleDelete(index)}
                        > Delete </button>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default TodoList;