import React, { Component } from 'react';

class TaskForm extends Component {
    state = {
        taskInputValue: ''
    };
    render() {
        return (
            <form>
                <input
                    value={this.state.taskInputValue}
                />
                <button>Add task</button>
            </form>
        );
    }
}

export default TaskForm;
