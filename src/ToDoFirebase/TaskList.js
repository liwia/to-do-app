import React, { Component } from 'react'
import firebase from 'firebase'

class TaskList extends Component {

    state = {
        tasks: []
    };

    componentDidMount() {
        const uid = firebase.auth().currentUser.uid;
        firebase.database().ref('/dump/' + uid).on(
            'value',
            snapshot => {
                const snapshotValue = snapshot.val();
                const tasks = Object.entries(snapshotValue || {}).map(
                    ([id, value]) => ({ id, ...value })
                );

                this.setState({
                    tasks
                })
            }
        )
    }

    handleRemoveClick = event => {
        const taskId = event.target.dataset.taskId;
        const uid = firebase.auth().currentUser.uid;
        firebase.database().ref('/dump/' + uid + '/' + taskId).remove()
    };

    handleToggleDoneClick = event => {
        const taskId = event.target.dataset.taskId;
        const clickedTask = this.state.tasks.find(task => task.id === taskId);
        const uid = firebase.auth().currentUser.uid;

        firebase.database().ref('/dump/' + uid + '/' + taskId).set({
            id: clickedTask.id,
            title: clickedTask.title,
            isDone: !clickedTask.isDone
        })
    };

    render() {
        return (
            <div>
                <h1>Tasks</h1>
                <ul>
                    {
                        this.state.tasks.map(
                            task => (
                                <li key={task.id}>
                                    {
                                        task.isDone ?
                                            <del>
                                                {task.title}
                                            </del> :
                                            task.title
                                    }

                                    <button
                                        data-task-id={task.id}
                                        onClick={this.handleRemoveClick}
                                    >
                                        remove
                                    </button>

                                    <button
                                        data-task-id={task.id}
                                        onClick={this.handleToggleDoneClick}
                                    >
                                        toggle done
                                    </button>
                                </li>
                            )
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default TaskList