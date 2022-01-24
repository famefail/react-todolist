import React from "react"

class GameChance extends React.Component {
  constructor(props){
    super(props)
     this.state ={
    count:0,
    random:Number
  }

  this.handleClick = this.handleClick.bind(this)
  
}
 
  handleClick(){
    this.setState({
      count:this.state.count + 1,
      random : Math.random() >=0.5?"win":"lose"
    })
  }
  render() {
    return (
      <div>
        {this.state.random}
     <br></br> 
      {this.state.count}
     <br></br>
      <button onClick={this.handleClick}>click me</button>
      <br></br>
     </div>
    );
  }
}
export default GameChance