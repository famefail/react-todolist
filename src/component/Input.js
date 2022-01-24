import React from "react";

class Input extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            input : '',
            renderInput:[]
        }
        this.type = this.type.bind(this)
        this.add = this.add.bind(this)
    }

    type(event){
        this.setState({
            input:event.target.value 
        })
    }

    add(){    
            const {renderInput,input} = this.state
            if(input !== ""){
           renderInput.push(input)
           this.setState({
               input:""
           })}
    } 

    del(index){
        this.state.renderInput.splice(index,1)
        this.setState({
            renderInput:this.state.renderInput
        })
    }
    
render(){

    return(
        <div>
    <input
        className="myInput"
        type= "text"
        value = {this.state.input}
        onChange = {this.type}
    >
    </input>
    <button type = "del"onClick={this.add}>add</button>
    <ul>
            {this.state.renderInput.map((input,index) => <li key = {index}>
                {index}{input}
                <button onClick= {() => this.del(index)}>X</button>
                </li>)}
    </ul>
    </div>)
}
}

export default Input