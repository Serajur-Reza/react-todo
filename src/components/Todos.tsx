import React from 'react'
import Todo from './Todo';

interface ITodo {
    
    title: string,
    description: string,
}

const Todos = () => {
    const [todo, setTodo] = React.useState<ITodo>({} as ITodo);
    const [todoList, setTodoList] = React.useState<ITodo[]>([]);

    const onchange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setTodo({ ...todo, [e.target.name]: e.target.value })
        
    }

    const addTodo = () => {
        setTodoList([...todoList, todo])
        
    }

    const handleRemove = (index: number) => {
        console.log(index)
        const newTodoList = todoList.filter((item, idx)=> idx !== index)
        setTodoList([...newTodoList])
    }

    return (
        <div>
            <div className="head">
                <input type="text" name="title" onChange={onchange} placeholder="Todo name" />
                <input type="text" name="description" onChange={onchange} placeholder="Short Description" />

                <button onClick={(e) => addTodo()}>Add Todo</button>
            </div>

            
            
            {
                todoList.map((item, idx) => <Todo key={idx} id={idx} title={item.title} description={item.description} handleRemove={(e)=> handleRemove(idx)}></Todo>)
            }
            
        </div>
    )
}

export default Todos
