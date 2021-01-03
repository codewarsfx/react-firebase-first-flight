import React, { Component } from 'react';
import './App.css';
import {database} from './firebase'

class App extends Component {
  constructor(props){
    super(props)
    this.state= {
      data:null,
      inputData:''
    }
  }

  componentDidMount(){

    database.ref('/').on('value',(snapshot)=>{
      this.setState({
        data: snapshot.val()
      })
    })
    
  }

  handleSubmit= (e)=>{
    e.preventDefault()
    database.ref('data')
    .push(this.state.inputData)

  }


  handleChange=(e)=>{
    this.setState({
      inputData:e.target.value,
    })

  }


  render() {
    return (
      <div className="App">
        <div className="App--header">
          <h2>Welcome to React and Firebase</h2>
        </div>
        <pre className="App--data">
           {JSON.stringify(this.state.data,null,2)}
        </pre>
        <form className='App-form' onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.inputData} onChange={this.handleChange}/>
          <input type='submit'/>
        </form>
      </div>
    );
  }
}

export default App;
