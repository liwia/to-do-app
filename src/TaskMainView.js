import React, { Component } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

class TaskMainView extends Component {
    state = {
        tasks: []
    };
    addTask = (taskContent) => {
        if(taskContent.trim() === ''){
            return;
        }
        this.setState({
            tasks: this.state.tasks.concat({
                id: this.state.tasks.map(
                    task => task.id
                ).reduce(
                    (biggest, next) => Math.max(biggest, next),
                    0
                ) + 1,
                content: taskContent
            })
        });
    };
    componentWillMount(){
        console.log('TODO VIEW WILL MOUNT');
        this.setState({
            tasks: JSON.parse(localStorage.getItem('tasks') || '[]')
        })
    }

    componentDidUpdate(){
        localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    }

    deleteTasks = (taskIds) => {
        this.setState({
            tasks: this.state.tasks.filter(
                task => !taskIds.includes(task.id)
            )
        })
    };

    render() {
        return (
            <div>
                <TaskForm
                    addTask={this.addTask}/>
                <TaskList
                    tasks={this.state.tasks}/>
            </div>

        );
    }
}

export default TaskMainView;
