import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState('')

  function addTask(e) {
    e.preventDefault()

    const text = inputValue.trim()
    if (!text) return

    const newTask = {
      id: Date.now(),
      text: text,
    }

    setTasks([...tasks, newTask])
    setInputValue('')
  }

  function removeTask(id) {
    const updatedTasks = tasks.filter(task => task.id !== id)
    setTasks(updatedTasks)
  }

  return (
    <div className="container">
      <h1>To-Do List</h1>

      <form className="input-row" onSubmit={addTask}>
        <input
          type="text"
          placeholder="Digite uma nova tarefa..."
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>

      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id}>
            <span>{task.text}</span>
            <button
              className="remove-btn"
              onClick={() => removeTask(task.id)}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App