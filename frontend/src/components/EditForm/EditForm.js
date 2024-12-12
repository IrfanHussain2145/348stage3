import React, { useState } from 'react';
import axios from '../../axios';


function EditForm({ todos, selectedTask, setSelectedTask, fetchData }) {
    const [editText, setEditText] = useState('');
    const [editPriority, setEditPriority] = useState('Medium');

    const handleSelect = (e) => {
        const taskId = e.target.value;
        const task = todos.find((todo) => todo._id === taskId);
        setSelectedTask(task);
        if (task) {
            setEditText(task.text);
            setEditPriority(task.priority);
        }
    };

    const handleEdit = async (e) => {
        e.preventDefault();
        if (!selectedTask) return;
        try {
            await axios.put(`/todos/${selectedTask._id}`, {
                text: editText,
                priority: editPriority,
            });
            fetchData(); // Refresh the task list
            setSelectedTask(null); // Clear selection
            setEditText('');
            setEditPriority('Medium');
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <div>
            <select onChange={handleSelect} value={selectedTask?._id || ''}>
                <option value="" disabled>
                    Select a task to edit
                </option>
                {todos.map((todo) => (
                    <option key={todo._id} value={todo._id}>
                        {todo.text}
                    </option>
                ))}
            </select>
            {selectedTask && (
                <form onSubmit={handleEdit}>
                    <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        placeholder="Edit task name"
                    />
                    <select value={editPriority} onChange={(e) => setEditPriority(e.target.value)}>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                    <button type="submit">Save Changes</button>
                </form>
            )}
        </div>
    );
}

export default EditForm;
