
import React from 'react';
import './style.css'; 

const Todo = ({ data }) => {
    const handleChage=(e)=>{
        e.target.nextSibling.classList.toggle('done')
    }
    return (
        <div className="card">
            <h3>{data.label}</h3>
            <div style={{ display: "flex" }}>
                {data.additionalInfo === "todo" && (
                    <input type="checkbox" name="todo" style={{ marginRight: "5px" }} onChange={handleChage} />
                )}
                <p>{data.content}</p>
            </div>
            
        </div>
    );
};

export default Todo;