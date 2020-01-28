import React, {Component} from 'react';
import './App.css';
import Tasklist from './components/Tasklist';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
          taskName: '',
          tasks: []
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
            tasks: this.state.tasks.concat(this.state.taskName)
        })
    }
    
    render() {
      console.log(this.state.tasks.length)
      return (
          <div>
            <input onChange={this.handleChange} type="text" />
            <button onClick={this.handleAddTask}>Add</button>
            <Tasklist tasks={this.state.tasks} />
          </div>
      );
    }
}

export default App;
