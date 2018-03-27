import React, {Component} from 'react';
import Task from './Task';
import './todo.css';


class TodoMain extends Component {

    state = {
        content: '',
        arrayOfTasks: [],
        ewrgerger: {}
    };

    addTask = () => {
        // console.log(this.state.content);
        // 1.запихнуть в this.state.arrayOfTasks
        let newArray = this.state.arrayOfTasks;
        newArray.unshift(this.state.content);
        this.setState({
            arrayOfTasks: newArray,
            // 2.очистить после ввода
            content: ''
        });
        // this.setState({content: ''});
    };

    inputIsChanging = (ev) => {
        this.setState({content: ev.target.value})
    };

    // this.setState({count: newValue});

    componentDidMount() {
        // срабатывает при первом рендеринге
    }

    deleteTask = (value) => {
        let newArray = []
        for (let i in this.state.arrayOfTasks) {
            if (this.state.arrayOfTasks[i] !== value) {
                newArray.push(this.state.arrayOfTasks[i])
            }
        }
        this.setState({arrayOfTasks: newArray})
    }

    render() {
        // рисует в компонент выше
        // console.log(this.state);
        return (
            <div>
                <input type="text" className={"input_class"} value = {this.state.content} onChange = {this.inputIsChanging} />
                <button className={"btn_class"} onClick={()=>{this.addTask()}}>+</button>
                {
                    this.state.arrayOfTasks.map((element, index)=>{return(
                        <div key={index} >
                            <Task value={element} deleteTask={(value)=>{
                                this.deleteTask(value)}} />
                        </div>
                    )})
                }
            </div>
        );
    }

}

export default TodoMain;