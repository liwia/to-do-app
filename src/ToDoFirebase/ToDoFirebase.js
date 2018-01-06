import React, { Component } from 'react'

import AddTaskForm from './AddTaskForm'
import TaskList from "./TaskList";

class ToDoFirebase extends Component {
    render() {
        return (
            <div>
                <h1>To Do Firebase</h1>

                <AddTaskForm/>
                <TaskList/>

            </div>
        )
    }
}

export default ToDoFirebase