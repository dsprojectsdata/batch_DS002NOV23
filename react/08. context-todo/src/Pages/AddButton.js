import React from 'react'

const AddButton = ({ addTodo, input }) => {
    return (
        <>
            <button onClick={() => addTodo(input)}>Add Todo</button>
        </>
    )
}

export default AddButton