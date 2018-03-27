import React, { Component } from 'react';

// setTimout(()=>{}, 1000);

class Header extends Component {
  
  state = {
    messages: 0,
  };

  messagesTimer = function(){
        setTimeout(()=>{this.messagesPlus()}, 1000)
  };

  messagesPlus = function(){

    // if(this.state.messages < 5){
    //   this.setState({messages: this.state.messages + 1});
    // } else {
    //   this.setState({messages: 0});
    // }
    // this.messagesTimer();

    if(this.state.messages < 5){
      this.setState({messages: this.state.messages + 1});
      this.messagesTimer();
    } else {
      this.setState({messages: 0});
    }

  }
  componentDidMount() {
    // console.log(this.state);
    this.messagesTimer(); 
  }

  render() {
    console.log(this.state);
    return (
      <div>{this.state.messages}</div>
    );
  }

}

export default Header;
