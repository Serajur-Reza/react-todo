import React from 'react'

interface Props {
    id: number
    title: string,
    description: string,
    handleRemove: ((idx: number) => void)
}

const Todo = (props: Props) => {
    return (
        <div className="card">
            <p><strong>Title: </strong> {props.title}</p>
            <p><strong>Description: </strong>{props.description}</p>
            <button onClick={()=> props.handleRemove(props.id)}>Remove</button>
        </div>
    )
}

export default Todo
