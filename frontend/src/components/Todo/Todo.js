// import React, { useEffect, useState } from 'react';
// import axios from '../../axios';
// import Form from '../Form/Form';
// import { Container } from './stylesTodo';
// import TodoList from '../TodoList/TodoList';

// function Todo() {
//     const [input, setInput] = useState('');
//     const [priority, setPriority] = useState('Medium'); // Priority state
//     const [todos, setTodos] = useState([]);

//     const fetchData = async () => {
//         try {
//             const response = await axios.get('/todos');
//             setTodos(response.data);
//         } catch (err) {
//             console.error(err.message);
//         }
//     };

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const addTodo = async (e) => {
//         e.preventDefault();
//         if (input.length === 0) return null;
//         await axios.post('/todos', {
//             text: input,
//             completed: false,
//             priority, // Include priority
//         });
//         fetchData();
//         setInput('');
//         setPriority('Medium'); // Reset priority
//     };

//     return (
//         <Container>
//             <h2>Enter Your Tasks Below</h2>
//             <Form
//                 input={input}
//                 setInput={setInput}
//                 addTodo={addTodo}
//                 priority={priority}
//                 setPriority={setPriority}
//             />
//             <TodoList todos={todos} fetchData={fetchData} />
//         </Container>
//     );
// }

// export default Todo;

// import React, { useEffect, useState } from 'react';
// import axios from '../../axios';
// import Form from '../Form/Form';
// import EditForm from '../EditForm/EditForm'; // New component for editing tasks
// import { Container } from './stylesTodo';
// import TodoList from '../TodoList/TodoList';

// function Todo() {
//     const [input, setInput] = useState('');
//     const [priority, setPriority] = useState('Medium');
//     const [todos, setTodos] = useState([]);
//     const [selectedTask, setSelectedTask] = useState(null); // State for selected task to edit

//     const fetchData = async () => {
//         try {
//             const response = await axios.get('/todos');
//             setTodos(response.data);
//         } catch (err) {
//             console.error(err.message);
//         }
//     };

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const addTodo = async (e) => {
//         e.preventDefault();
//         if (input.length === 0) return null;
//         await axios.post('/todos', {
//             text: input,
//             completed: false,
//             priority,
//         });
//         fetchData();
//         setInput('');
//         setPriority('Medium');
//     };

//     return (
//         <Container>
//             <h2>Enter Your Tasks Below</h2>
//             <Form input={input} setInput={setInput} addTodo={addTodo} priority={priority} setPriority={setPriority} />
//             <h3>Edit Task</h3>
//             <EditForm todos={todos} selectedTask={selectedTask} setSelectedTask={setSelectedTask} fetchData={fetchData} />
//             <TodoList todos={todos} fetchData={fetchData} />
//         </Container>
//     );
// }

// export default Todo;

// import React, { useEffect, useState } from 'react';
// import axios from '../../axios';
// import Form from '../Form/Form';
// import { Container } from './stylesTodo';
// import TodoList from '../TodoList/TodoList';

// function Todo() {
//     const [input, setInput] = useState('');
//     const [priority, setPriority] = useState('Medium');
//     const [todos, setTodos] = useState([]);
//     const [filterPriority, setFilterPriority] = useState(''); // State for filtering priority

//     // const fetchData = async () => {
//     //     try {
//     //         const response = await axios.get('/todos', {
//     //             params: { priority: filterPriority }, // Send filter as query parameter
//     //         });
//     //         setTodos(response.data);
//     //     } catch (err) {
//     //         console.error(err.message);
//     //     }
//     // };

//     const fetchData = async () => {
//         try {
//             const response = await axios.get('/todos', {
//                 params: { priority: filterPriority }, // Pass priority as a query parameter
//             });
//             console.log('Fetched tasks:', response.data); // Debugging log
//             setTodos(response.data);
//         } catch (err) {
//             console.error('Error fetching tasks:', err.message);
//         }
//     };
    
    

//     useEffect(() => {
//         fetchData();
//     }, [filterPriority]); // Refetch data when filter changes

//     const addTodo = async (e) => {
//         e.preventDefault();
//         if (input.length === 0) return null;
//         try {
//             await axios.post('/todos', {
//                 text: input,
//                 completed: false,
//                 priority,
//             });
//             fetchData(); // Refresh the list
//             setInput('');
//             setPriority('Medium');
//         } catch (err) {
//             console.error(err.message);
//         }
//     };

//     return (
//         <Container>
//             <h2>Enter Your Tasks Below</h2>
//             <Form input={input} setInput={setInput} addTodo={addTodo} priority={priority} setPriority={setPriority} />
//             <div>
//                 <label htmlFor="priority-filter">Filter by Priority:</label>
//                 <select
//                     id="priority-filter"
//                     value={filterPriority}
//                     onChange={(e) => setFilterPriority(e.target.value)}
//                 >
//                     <option value="">All</option>
//                     <option value="High">High</option>
//                     <option value="Medium">Medium</option>
//                     <option value="Low">Low</option>
//                 </select>
//             </div>
//             <TodoList todos={todos} fetchData={fetchData} />
//         </Container>
//     );
// }

// export default Todo;

import React, { useEffect, useState } from 'react';
import axios from '../../axios';
import Form from '../Form/Form';
import { Container } from './stylesTodo';
import TodoList from '../TodoList/TodoList';

function Todo() {
    const [input, setInput] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [todos, setTodos] = useState([]);
    const [filterPriority, setFilterPriority] = useState(''); // State for filtering priority
    const [selectedTask, setSelectedTask] = useState(''); // State for selected task in dropdown

    const fetchData = async () => {
        try {
            const response = await axios.get('/todos', {
                params: { priority: filterPriority }, // Pass priority as a query parameter
            });
            console.log('Fetched tasks:', response.data); // Debugging log
            setTodos(response.data);
        } catch (err) {
            console.error('Error fetching tasks:', err.message);
        }
    };

    useEffect(() => {
        fetchData();
    }, [filterPriority]); // Refetch data when filter changes

    const addTodo = async (e) => {
        e.preventDefault();
        if (input.length === 0) return null;
        try {
            await axios.post('/todos', {
                text: input,
                completed: false,
                priority,
            });
            fetchData(); // Refresh the list
            setInput('');
            setPriority('Medium');
        } catch (err) {
            console.error(err.message);
        }
    };

    const handleTaskSelect = (e) => {
        setSelectedTask(e.target.value); // Update selected task state
    };

    return (
        <Container>
            <h2>Enter Your Tasks Below</h2>
            <Form input={input} setInput={setInput} addTodo={addTodo} priority={priority} setPriority={setPriority} />
            <div>
                <label htmlFor="priority-filter">Filter by Priority:</label>
                <select
                    id="priority-filter"
                    value={filterPriority}
                    onChange={(e) => setFilterPriority(e.target.value)}
                >
                    <option value="">All</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
            </div>
            <div>
                <label htmlFor="task-dropdown">Select a Task:</label>
                <select
                    id="task-dropdown"
                    value={selectedTask}
                    onChange={handleTaskSelect}
                >
                    <option value="" disabled>
                        Choose a task
                    </option>
                    {todos.map((todo) => (
                        <option key={todo._id} value={todo._id}>
                            {todo.text}
                        </option>
                    ))}
                </select>
            </div>
            <p>
                Selected Task: {selectedTask ? todos.find((t) => t._id === selectedTask)?.text : 'None'}
            </p>
            <TodoList todos={todos} fetchData={fetchData} />
        </Container>
    );
}

export default Todo;
