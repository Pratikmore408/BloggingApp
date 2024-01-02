import React from "react";

class Timer1 extends React.Component{
    constructor(){
        super();
        this.state = {
            time:0,
            run:false
        }

        this.timer = null;
        
    }



componentDidMount() {
   console.log("Timer1 ComponentDidMount");
   
}

getSnapshotBeforeUpdate( prevProps, prevState){
    console.log("time1 getSnapshotBeforeUpdate");
    return null;
}

// handleStart = ()=>{
//     this.setState({
//         run: !this.state.run
//     });
// }

componentDidUpdate(prevProps, prevState) {
    console.log("timer1 componentDidUpdate");

    if (this.props.run !== prevProps.run) {
        if (this.props.run) {
            this.timer = setInterval(() => {
                this.setState({
                    time: this.state.time + 1
                });
            }, 1000);
        } else {
            clearInterval(this.timer);
        }
    }
}

shouldComponentUpdate(nextPropes, nextState){

    // return nextPropes.run !== this.props.run || nextState.time % 5 ===  0;
    return true;    
}


render(){

    return(
        <>
        
        <h1>Time Spent:{new Date(this.state.time * 1000).toISOString().slice(11, 19)}</h1>
        </>
    )
}


static getDerivedStateFromProps(){
    console.log("timer1 getDerivedStateFromProps");
    return null;
}



}

export default Timer1;