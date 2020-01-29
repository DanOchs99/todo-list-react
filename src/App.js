import React, {Component} from 'react';
import './App.css';
import Tasklist from './components/Tasklist';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
          taskName: '',
          tasksPending: [],
          tasksCompleted: []
        }
    }

    handleChange = (e) => {
        //console.log(e.target.value)
        this.setState({
            taskName: e.target.value
        })
    }

    handleAddTask = () => {
        this.setState({
            tasksPending: this.state.tasksPending.concat(this.state.taskName)
        })
        document.getElementById('textBox').value = '';
    }
    
    onCheckPending = (selection) => {
        const moved = this.state.tasksPending.filter(task => task==this.state.tasksPending[selection])
        const remaining = this.state.tasksPending.filter(task => task!=this.state.tasksPending[selection])
        const completed = this.state.tasksCompleted.concat(moved)
        this.setState({tasksPending: remaining, tasksCompleted: completed}) 
    }

    onCheckCompleted = (selection) => {
        const moved = this.state.tasksCompleted.filter(task => task==this.state.tasksCompleted[selection])
        const remaining = this.state.tasksCompleted.filter(task => task!=this.state.tasksCompleted[selection])
        const pending = this.state.tasksPending.concat(moved)
        this.setState({tasksPending: pending, tasksCompleted: remaining})
    }
    
    onDeletePending = (selection) => {
        const remaining = this.state.tasksPending.filter(task => task!=this.state.tasksPending[selection])
        this.setState({tasksPending: remaining})
    }

    onDeleteCompleted = (selection) => {
        const remaining = this.state.tasksCompleted.filter(task => task!=this.state.tasksCompleted[selection])
        this.setState({tasksCompleted: remaining})
    }

    render() {
      return (
          <div>
            <input onChange={this.handleChange} type="text" id="textBox"/>
            <button onClick={this.handleAddTask}>Add</button>
            <Tasklist tasks={this.state.tasksPending} name="Pending Tasks" onCheck={this.onCheckPending}  onDelete={this.onDeletePending} />
            <Tasklist tasks={this.state.tasksCompleted} name="Completed Tasks"  onCheck={this.onCheckCompleted}  onDelete={this.onDeleteCompleted} />
          </div>
      );
    }
}

export default App;
