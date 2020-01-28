import React, {Component} from 'react';
import './Tasklist.css';

class Tasklist extends Component {
    render() {
        return (<div>{this.props.tasks}</div>)
    }
}

export default Tasklist;