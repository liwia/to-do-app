import React, { Component } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

class TaskMainView extends Component {
    state = {
        tasks: []
    };
    render() {
        return (
            <div>
                <TaskForm />
                <TaskList/>
            </div>

        );
    }
}

export default TaskMainView;
