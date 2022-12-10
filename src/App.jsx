import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import $ from 'jquery'
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Button from 'react-bootstrap/Button'
import { Quote, Twitter } from 'react-bootstrap-icons'
import "bootstrap/dist/css/bootstrap.min.css"
import { quotes } from './quotes';
import Card from './card';
import 'animate.css';
function App() {

console.log(quotes)
  return (
<div className="App">
<Card />
    </div>
  )
}

export default App
