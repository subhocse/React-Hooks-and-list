import React, { Component } from 'react'

class MyComponent extends Component{
    constructor(props){
        super(props);
        this.state = {counter: 0}
    }

    componentDidMount(){
        console.log('componentDidMount')
    }
    componentDidUpdate(){
        console.log('componentDidUpdate') 
    }
   
    componentWillUnmount(){
        console.log('componentWillUnmount') 
    }

    clicked = () =>{
        let {counter} = {...this.state};
        counter++;
        this.setState({counter})
    }

    render(){
    console.log('Render');

        return(
            <>
                <h1>Hellow Class</h1>
                <h2>Counter: {this.state.counter}</h2>
                <button onClick={this.clicked}>Counter</button>
            </> 
        ) 
    }
}

export default MyComponent