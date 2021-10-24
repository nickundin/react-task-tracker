// import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

// function approach
// function App() {
const App = () => {
  // store variables, such as Tasks, in a state
  // call this piece of state tasks and the function to update the state setTasks
  // useState accepts a default value for the state

  // note that a state is immutable, so you can't do something like tasks.push
  // instead, you would use setTasks
  // passing in the task state as a prop
  const [showAddTask, setShowAddTask] = useState(true)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true
    },
    {
      id: 2,
      text: 'Doctors appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true
    },
    {
      id: 3,
      text: 'Doctors appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true
    }
  ])

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete Task (note that all functions will be defined in this file,
  // so that they can be passed down to other components as props)
  const deleteTask = (id) => {
    // console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id)) // for the array of tasks, it shows the tasks whose id doesn't match
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    // console.log(id)
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task)) // if the current task id is equal to the id passed in, 
    // we're gonna spread the task into a new reminder with an opposite reminder value, else it's just gonna be the task
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks To Show'}
    </div>
  );
}

// class approach
// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class</h1>
//   }
// }

export default App;
