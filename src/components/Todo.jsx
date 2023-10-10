import React, { useState } from "react";

const Todo = () => {
    const [todo, setTodo] = useState("");
    const [tasks, setTasks] = useState([]);
    const [itemCount, setItemCount] = useState(0);

    const addTodo = () => {
        if (todo === "") {
            alert("Please fill in the form.");
            return;
        }
        setTasks([...tasks, todo]);
        setTodo("");
        setItemCount(itemCount + 1);
    };

    const deleteItem = (itemToDelete) => {
        setTasks((prevTasks) => prevTasks.filter((item) => item !== itemToDelete));
        setItemCount(itemCount - 1);
    };

    const clearAll = () => {
        setTasks([]);
        setItemCount(0);
    };
    
    return (
        <div className="resultsDiv">
            <div style={{display: "flex", alignItems: "center"}}>
                <div style={{ flex: 1 }}>
                    <input 
                        className="todoInput"
                        type="text" 
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                        placeholder="Create a new Todo..."
                    />
                </div>
                <button className="createButton" onClick={addTodo}>+</button>
            </div>
            <div className="itemsDiv" style={{ maxHeight: "300px", overflowX: "scroll", maxWidth: "600px" }}>
                {tasks.map((item, index) => (
                    <div key={item} style={{ 
                        display: "flex", 
                        gap: 10, 
                        marginTop: 25, 
                        alignItems: "center", 
                        justifyContent: "start", 
                        marginLeft: 10,
                        fontSize: 18, 
                        textAlign: "left",
                        color: "#494C6B",
                        width: 400,
                        listStyleType: "none"
                    }}>
                        <li>{item}</li>
                        <button onClick={() => deleteItem(item)}>X</button>
                        {index === tasks.length - 1 && (
                            <button style={{borderRadius: 5, border: 0,}} className="clearButton" onClick={clearAll}>Clear all </button>
                        )}
                    </div>
                    
                ))}
                
            </div>
            <div style={{color: "white"}}>({itemCount} items)</div>

        </div>
    );
}

export default Todo;
