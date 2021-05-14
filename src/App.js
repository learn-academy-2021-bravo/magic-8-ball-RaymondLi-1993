import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

      answerArray: ["I am not sure!", "Please Ask Again!", "Yes", "No", "All signs point to yes"],
      selectedAnswer: ""
    }
  }

  handleSubmit = () => {
    const { answerArray } = this.state
    let random = Math.floor(Math.random() * 4);
    this.setState({ selectedAnswer: answerArray[random]})
  }


  render(){
    return (
      <>
        <h1>Magic 8 Ball</h1>
        <input
          className="inputBox"
          type="text"
          placeholder="please ask a question"
        />
        <br />
        <button onClick={ this.handleSubmit }>
          Ask the Magic 8 Ball a Question
        </button>
        <p>{ this.state.selectedAnswer }</p>
      </>
    )
  }
}

export default App
