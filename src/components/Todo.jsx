import React, { useState } from "react";

const Todo = () => {
    const [todo, setTodo] = useState("");
    const [tasks, setTasks] = useState([]);

    const addTodo = () => {
        if (todo === "") {
            alert("Please fill in the form.");
            return;
        }
        setTasks([...tasks, todo]);
        setTodo("");
    };

    const deleteItem = (itemToDelete) => {
        setTasks((prevTasks) => prevTasks.filter((item) => item !== itemToDelete));
    };

    return (
        <div className="resultDiv">
            <input className="todoInput"
                type="text" 
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Create a new Todo..."
            />
            <button className="createButton" onClick={addTodo}>+</button>

            <div className="resultDiv">
                {tasks.map((item) => (
                    <div key={item} style={{ 
                        display: "flex", 
                        gap: 10, 
                        marginTop: 25, 
                        alignItems: "center", 
                        justifyContent: "center", 
                        fontSize: 18, 
                        color: "#494C6B",
                        border: "2 white",
                        width: 400,
                        listStyleType: "none"
                        // backgroundColor: "white"
                         }}>
                        <li>{item}</li>
                        <button onClick={() => deleteItem(item)}>X</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Todo;
