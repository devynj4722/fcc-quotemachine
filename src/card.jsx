import React, {Component} from 'react';
import $ from 'jquery'
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Button from 'react-bootstrap/Button'
import { Quote, Twitter } from 'react-bootstrap-icons'
import "bootstrap/dist/css/bootstrap.min.css"
import {quotes} from "./quotes"
import {motion} from "framer-motion"
class Card extends React.Component {
    constructor(props){
        super(props);
      
      this.state = {quote: "", author: ''}
      this.setQuote = this.setQuote.bind(this);
        
    }

   componentDidMount(){
  
      
    this.setState({quote: quotes[0].text})
    this.setState({author: quotes[0].author})
    }
    
setQuote(){
  let randomIndex = Math.floor(Math.random() * quotes.length);
  this.setState((state)=> ({quote: quotes[randomIndex].text, author: quotes[randomIndex].author}))
}

    render(){
   

        return(
            
<div className="container-md" id="wrapper">
  <motion.div 
  className="quote-box" 
  id="quote-box"
  whileHover={{
    scale: 1.1
  }}
  
  >
    <div id="text">
   <Quote />{this.state.quote}
    </div>
    <div className="author"><span id="author"><h4>- {this.state.author} </h4></span> </div>
    <div id="buttons">
    <a id="tweet-quote" href={`twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${this.state.quote}`} target="_blank"> <Button><Twitter /></Button></a>
    
      <Button className="newQuote" id="new-quote" onClick={this.setQuote}> New Quote </Button>
    </div>
  </motion.div>
  
</div>   
        );
        
    }
}

export default Card 