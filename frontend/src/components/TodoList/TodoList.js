// import React from 'react'
// import axios from '../../axios'
// import { ListContainer, Row, Text, DeleteIcon } from './stylesTodoList'

// function TodoList({todos, fetchData}) {
//     console.log("TODOS HERE", todos)
//     const updateTodo = async (id) => {
//         try {
//             const response = await axios.put(`/todos/${id}`, {
//                 id
//             })
//             fetchData()
//             return response.data.json
//         } catch (err) {
//             console.error(err.message);
//         }
//     }

//     const deleteTodo = async (id) => {
//         try {
//             const response = await axios.delete(`/todos/${id}`, {
//                 id
//             })
//             fetchData()
//             return response.data.json
//         } catch (err) {
//             console.error(err.message);
//         }
//     }

//   return (
//     <div>
//         <ListContainer>
//             {}
//             {todos?.map((todo) => (
//                 <Row key={todo._id}>
//                     <Text onClick={() => updateTodo(todo._id)}
//                         isCompleted={todo.completed}>
//                     {todo.text}
//                     </Text>
//                     <DeleteIcon onClick={() => deleteTodo(todo._id)}>delete task</DeleteIcon>
//                 </Row>
//             ))}
//         </ListContainer>
//     </div>
//   );
// }

// export default TodoList
// import React from 'react';
// import axios from '../../axios';
// import { ListContainer, Row, Text, DeleteIcon } from './stylesTodoList';

// function TodoList({ todos, fetchData }) {
//     const updateTodo = async (id) => {
//         try {
//             const response = await axios.put(`/todos/${id}`, { id });
//             fetchData();
//             return response.data.json;
//         } catch (err) {
//             console.error(err.message);
//         }
//     };

//     const deleteTodo = async (id) => {
//         try {
//             const response = await axios.delete(`/todos/${id}`, { id });
//             fetchData();
//             return response.data.json;
//         } catch (err) {
//             console.error(err.message);
//         }
//     };

//     return (
//         <div>
//             <ListContainer>
//                 {todos?.map((todo) => (
//                     <Row key={todo._id}>
//                         <Text
//                             onClick={() => updateTodo(todo._id)}
//                             isCompleted={todo.completed}
//                         >
//                             {todo.text} - <strong>{todo.priority}</strong>
//                         </Text>
//                         <DeleteIcon onClick={() => deleteTodo(todo._id)}>
//                             delete task
//                         </DeleteIcon>
//                     </Row>
//                 ))}
//             </ListContainer>
//         </div>
//     );
// }

// export default TodoList;

import React from 'react';
import axios from '../../axios';
import { ListContainer, Row, Text, DeleteIcon } from './stylesTodoList';

function TodoList({ todos, fetchData }) {
    const toggleComplete = async (id, currentStatus) => {
        try {
            // Toggle the completed status
            await axios.put(`/todos/${id}`, {
                completed: !currentStatus,
            });
            fetchData(); // Refresh the task list
        } catch (err) {
            console.error('Error toggling task completion:', err.message);
        }
    };

    // const toggleComplete = async (id, currentStatus) => {
    //     try {
    //         console.log(`Toggling completion for task ${id}. Current status: ${currentStatus}`); // Debugging log
    //         await axios.put(`/todos/${id}`, {
    //             completed: !currentStatus,
    //         });
    //         fetchData(); // Refresh the task list
    //     } catch (err) {
    //         console.error('Error toggling task completion:', err.message);
    //     }
    // };
    


    const deleteTodo = async (id) => {
        try {
            await axios.delete(`/todos/${id}`);
            fetchData();
        } catch (err) {
            console.error('Error deleting task:', err.message);
        }
    };

    return (
        <ListContainer>
            {todos?.map((todo) => (
                <Row key={todo._id}>
                    <Text
                        onClick={() => toggleComplete(todo._id, todo.completed)}
                        style={{
                            textDecoration: todo.completed ? 'line-through' : 'none', // Strike-through if completed
                            color: todo.completed ? 'red' : 'black', // Red if completed
                            cursor: 'pointer', // Add a pointer cursor for better UX
                        }}
                    >
                        {todo.text}
                    </Text>
                    <DeleteIcon onClick={() => deleteTodo(todo._id)}>delete task</DeleteIcon>
                </Row>
            ))}
        </ListContainer>
    );
}

export default TodoList;
