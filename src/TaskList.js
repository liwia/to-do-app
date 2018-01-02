import React, { Component } from 'react';

class TaskList extends Component {
    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.tasks.map(
                            task => (
                                <li key={task.id}>
                                    <input
                                        data-task-id={task.id}
                                        type="checkbox"
                                        onChange={this.handleCheckboxChange}
                                        checked={this.state.checkedTaskIds.includes(task.id)}
                                    />
                                    {task.content}

                                    <button
                                        data-task-id={task.id}
                                        onClick={this.props.handleDeleteClick}
                                    >
                                        delete
                                    </button>
                                </li>
                            )
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default TaskList;
