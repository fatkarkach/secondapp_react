import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    // this.state={
    //   name:undefined
    // }
    // this.state={
    //   tunisia:undefined,
    //   maroc:undefined
    // }
     this.state={
      country:"",
      
    }
    
  }
  
  // handlename=(e)=>{
  //   console.log(e.target.value)
  //   this.setState({
  //     name:e.target.value
  //   })
  // }

  //  handletextarea=(e)=>{
  //   console.log(e.target.value)
   
  // }
  // handlechek=(e)=>{
  //   console.log(e.target.name)
  //   if(e.target.name=="tunisia" && e.target.checked==true){

  //     this.setState({
  //       tunisia:"tunisia",
  //     })
  //   }
  //   if(e.target.name=="maroc" && e.target.checked==true){

  //     this.setState({
  //       maroc:"maroc",
  //     })
  //   }
   
  // }

  handleselect=(e)=>{
    this.setState({
      country:e.target.value

    })
    console.log(e.target.value)


  }
  render()
  {
    return (
      <div className="App">
      {/* <input type="text" onChange={this.handlename} placeholder="nom" />
      <p>{this.state.name}</p> */}
      <textarea onChange={this.handletextarea}>

      </textarea>
      <br/>
      man:<input type="radio" name="b" value="man"/>
      women:<input type="radio"  name="b" value="women"/>
      tunisia:<input type="checkbox" name="tunisia" onChange={this.handlechek}></input>
      maroc:<input type="checkbox" name="maroc" onChange={this.handlechek}></input>
      <p>{this.state.tunisia}</p>
      <p>{this.state.maroc}</p>
      <br/>
      <select onChange={this.handleselect} value={this.state.country}>
      <option value="" disabled>country</option>
        <option value="tunisie" >tunisie</option>
        <option value="maroc">maroc</option>
        <option value="algerie">algerie</option>
      </select>

      </div>
    );
  }
}

export default App;
