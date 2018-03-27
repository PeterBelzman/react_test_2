import React, {Component} from 'react';

class Task extends Component {

    state = {
        // count: 0,
    };

    // this.setState({count: newValue});

    componentDidMount() {
        // срабатывает при первом рендеринге

    }

    render() {
        // рисует в компонент выше
        // this.state
        // this.setState()
        // this.componentDidMount()
        // this.render()
        // this.props
        return (
            <div>
                <div className={"div_class"}>{this.props.value}</div>
                <button className={"btn_class btn_task_class"} onClick={()=>{this.props.deleteTask(this.props.value)}} >-</button>
            </div>
        );
    }

}

export default Task;