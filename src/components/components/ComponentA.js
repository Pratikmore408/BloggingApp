import React from "react";
import ComponentB from "./componentB";

class ComponentA extends React.Component{
    constructor(){
        super();
        this.state = {
            name: "ComponentA",
            data:[]
        }
    }
    static getDerivedStateFromProps(props, state){

    }

    componentDidMount(){
        
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({data}));
    }

    render(){
        return(
            <>
            <h1>{this.state.name}</h1>
            <ul>
                {this.state.data.map((d)=>(
                    <li>{d.name}</li>
                ))}
            </ul>
            <ComponentB />
            </>
        )
    }
}

export default ComponentA;