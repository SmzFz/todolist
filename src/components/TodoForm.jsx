import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")
    const [category, setCaterogy ]= useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value || !category) return;
        addTodo(value, category);
        setValue("")
        setCaterogy("")
    }
  return <div className='todo-form'>
    <h2> Criar Tarefa:</h2>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Digite o titulo'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        />

        <select value={category} onChange={(e) => setCaterogy(e.target.value)}
        >
<option value="">Selecione uma categoria</option>
<option value="Trabalho">Trabalho</option>
<option value="Pessoal">Pessoal</option>
<option value="Estudo">Estudo</option>
        </select>
        <button type='submit'>Criar Tarefa</button>
    </form>

  </div>
}

export default TodoForm