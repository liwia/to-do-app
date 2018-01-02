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
    handleDeleteClick = event => {
        console.log(event.target.dataset.taskId);
        this.setState({
            tasks: this.state.tasks.filter(
                task => task.id !== parseInt(event.target.dataset.taskId, 10)
            )
        })
    };

    render() {
        const tasks = this.state.tasks.filter(
            task =>
                task.content.includes(
                    this.props.searchPhrase
                )
        );
        return (
            <div>
                <TaskForm
                    addTask={this.addTask}/>
                <TaskList
                    tasks={tasks}
                    handleDeleteClick={this.handleDeleteClick}
                />
            </div>

        );
    }
}

export default TaskMainView;
