import React from "react";

class ComponentB extends React.Component{
    constructor(){
        super();
        this.state = {
            name: "ComponentB"
        }
    }
    static getDerivedStateFromProps(props, state){
        
    }

    componentDidMount(){

    }

    render(){
        return(
            <>
            <h1>{this.state.name}</h1>
            </>
        )
    }
}

export default ComponentB;