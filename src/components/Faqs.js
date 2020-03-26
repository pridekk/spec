import React, { Component } from 'react'
import Faq from './Faq'
const faqs = [{id: 1, question:"SPEC은　어떤　서비스　인가요？", answer: "몰라"},
{id: 2, question:"서비스 출시일은 언제인가요?​", answer: "몰라"},
{id: 3, question:"개인전문투자자란 무엇인가요?​", answer: "몰라"},
{id: 4, question:"개인전문투자자가 되면 무엇이 좋아지나요?​", answer: "몰라"},
{id: 5, question:"개인전문투자자가 되면 안 좋아 지는 것도 있나요?​", answer: "몰라"},
{id: 6, question:"CFD에 대해 설명해 주세요.​", answer: "몰라"},
{id: 7, question:"SPEC?", answer: "no"}]

export class Faqs extends Component {
 
  render() {
    let qas = faqs.map( faq => {
      // console.log(faq)
     return  (<Faq key={faq.id } question={faq.question} answer={faq.answer}/>)
    })
    return (
      <React.Fragment>
        {qas}
      </React.Fragment>
    )
  }
}

export default Faqs
