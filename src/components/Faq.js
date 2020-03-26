import React, { Component} from 'react'
import { Typography } from '@material-ui/core'
import {Help} from '@material-ui/icons'
export class Faq extends Component {
  constructor(){
    super()
    this.state = {
      clicked: false,
      question: '',
      answer: ''
    }
  }
 
  render(){
    let display = {display: 'none'}
    if (this.state.clicked){
      display = {}
    }
    console.log(this.props)
    let {question, answer} = this.props
     
    
    return (
      
      <div>
        <Typography onClick={() => this.setState({clicked: !this.state.clicked})}><Help/>{this.props.question}</Typography>
        <div style={display}>{answer}</div>
      </div>
    )
    
  }
 
}
export default Faq
