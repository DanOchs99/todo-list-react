import React, {Component} from 'react';
import './Tasklist.css';

class Tasklist extends Component {
    constructor(props) {
        super(props)
        this.state = {item: 0}
    }

    handleCheck = (e) => {
        const selection = e.target.id;
        this.setState({item: selection}, () => {this.props.onCheck(selection)})
    }

    handleDelete = (e) => {
        const selection = e.target.id;
        this.setState({item: selection}, () => {this.props.onDelete(selection)})
    }

    render() {
        let taskElements = [];
        taskElements.push(<div key={this.props.name} className="listName">{this.props.name}</div>);
        for (let i=0; i<this.props.tasks.length; i++) {
            taskElements.push(<div key={i}>
                                <div className="listItem">{this.props.tasks[i]}</div>
                                <button id={i} onClick={this.handleCheck} >✓</button>
                                <button id={i} onClick={this.handleDelete} >x</button>
                              </div>
            )
        }
        
        return (
            <div className="taskList">
              {taskElements}
            </div>
        )
    }
}

export default Tasklist;