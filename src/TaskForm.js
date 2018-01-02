import React, { Component } from 'react';

class TaskForm extends Component {
    state = {
        taskInputValue: ''
    };
    handleChange = (event) => {
        this.setState({
            taskInputValue: event.target.value
        })
    };
    render() {
        return (
            <form>
                <input
                    value={this.state.taskInputValue}
                    onChange={this.handleChange}
                />
                <button>Add task</button>
            </form>
        );
    }
}

export default TaskForm;
