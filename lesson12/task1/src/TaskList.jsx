import React from 'react';
import Task from './Task';
import CreateTaskImput from './CreateTaskImput';
import { createTask, fetchTaskList, updateTask, deleteTaask } from './TasksGateway';

class TaskList extends React.Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.fetchTask();
  }

  fetchTask = () => {
    fetchTaskList().then(tasksList =>
      this.setState({
        tasks: tasksList,
      }),
    );
  };

  onCreate = text => {
    const newTask = {
      id: Math.random(),
      text,
      done: false,
    };

    createTask(newTask).then(() => this.fetchTask());
  };

  handeTaskStatusChange = id => {
    const { done, text } = this.state.tasks.find(task => task.id === id);
    const updatedTask = {
      text,
      done: !done,
    };
    updateTask(id, updatedTask).then(() => this.fetchTask());
  };

  handeleTaskDelete = id => {
    deleteTaask(id).then(() => this.fetchTask());
  };

  render() {
    const sortedList = this.state.tasks.slice().sort((a, b) => a.done - b.done);
    return (
      <div className="todo-list">
        <CreateTaskImput onCreate={this.onCreate} />
        <ul className="list">
          {sortedList.map(task => (
            <Task
              key={task.id}
              {...task}
              onChange={this.handeTaskStatusChange}
              onDeete={this.handeleTaskDelete}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskList;
