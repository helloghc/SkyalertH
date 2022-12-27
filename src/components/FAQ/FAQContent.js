import React, {Component} from 'react';
import styled from 'styled-components';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  &.item {
  flex-grow: 2; /* default 0 */
}

`;

const Col1 = styled.div `
	width:100%;
	text-align: ${props => props.center ? 'center' : 'left'};
`;

const Text = styled.p `
	line-height: 2rem;
	display: block;
	margin: auto;
	padding-top: 2rem !important;
	padding-bottom: 2rem !important;
	font-style: ${props => props.cursiva ? 'italic' : 'normal'};
	font-weight: ${props => props.primary ? 'bold' : 'normal'};
	text-align: ${props => props.primary ? 'center' : 'left'};
	font-size: ${props => props.primary ? '2rem' : '1.3rem'};
	color: ${props => props.primary ? '#ea6911' : 'black'};
	padding-top: ${props => props.primary ? '10rem' : '0'};
`;




const Title = styled.h2`
  font-size: 1.5rem;
  line-height: 4rem;
  // max-width: 90rem;
  // text-align: center;
  display: block;
  margin: auto;
  font-weight: bold;
  cursor:pointer;
  &:hover{
    color:#ea6911;
  }
`;

class FAQContent extends Component {
  constructor() {
		super();
		this.state = {
		active: true,

		};
	}
  handleClick = (event) => {
  
     window.scrollTo(0,500);
    // close all items and show target item
    const items = document.getElementsByClassName('active')[0];
    if(items){
      items.className = "inactive";
    }
    if (event.target.parentNode.className === "inactive"){
      event.target.parentNode.className = "active";
    }
    // this.setState({
    //   active: !this.state.active,
    //   className: "active"
    // });

  }
   
  componentWillMount(){
    this.setState({ active: this.props.faq.state });
  }
  render(){
    const activeClass = this.state.active ? "active" : "inactive";
    const faqQuestion = this.props.faq;
    return(
      <Container>
        	<div id={faqQuestion.id} onClick={this.handleClick} className={activeClass}>
            <Title >{faqQuestion.title}</Title>
            <Col1 className="ResponseQuestionFAQ">
              <Text>{faqQuestion.content}</Text>
					  </Col1> 
					</div> 
      </Container>
    )
  }
}

export default FAQContent;