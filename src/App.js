import React from "react";
// import ComponentA from "./components/components/ComponentA";
// import Timer1 from "./Timer/Timer1";
import Input from "./components/Hooks";

class App extends React.Component {
  constructor(){
    super();

    this.state={
      run : false
    }
  }

  handleStart= ()=>{
  this.setState((prev)=>({run: !prev.run}))
}

  render(){
  return (
    <>
    {/* <ComponentA /> */}
    {/* <button onClick={this.handleMount}>{this.state.mount ? "UN-MOUNT":"MOUNT"}</button>
    {this.state.mount ? <Timer1 /> : null } */}
    {/* <Timer1 run={this.state.run}/>
    <button onClick={this.handleStart}>{this.state.run ? "Stop":"Start"}</button> */}
    <Input />
    </>
  );
  }
}

export default App;
