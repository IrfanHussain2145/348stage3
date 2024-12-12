// import React from 'react'
// import { formContainer, Input, Button } from './stylesForm'

// function Form({input, setInput, addTodo }) {
//   return (
//     <formContainer>
//         <Input 
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         type='text'
//         role='input'/>
//         <Button type='submit' onClick={(e) => addTodo(e)}> Add a Task </Button>
//     </formContainer>
//   )
// }

// export default Form

import React from 'react';

function Form({ input, setInput, addTodo, priority, setPriority }) {
    return (
        <form onSubmit={addTodo}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add a new task"
            />
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <button type="submit">Add</button>
        </form>
    );
}

export default Form;
