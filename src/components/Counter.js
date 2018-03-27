import React, { Component } from 'react';
import './counter.css';
class Counter extends Component {
  
    state = {
      counterMessage: 0,
    };

    onclickButtonMinus() {
      if(this.state.counterMessage > 0) {
        this.setState({counterMessage: this.state.counterMessage - 1})
      }
    }

    onclickButtonPlus() {
      this.setState({counterMessage: this.state.counterMessage + 1})
    }


    render() {
    
        return (
          <div className='wrapper'>
            <button className='button' onClick={()=>{this.onclickButtonMinus()}}>-</button>
            <div className='textField'>{this.state.counterMessage}</div>
            <button className='button' onClick={()=>{this.onclickButtonPlus()}}>+</button>
          </div>
        );
      }

}

export default Counter;