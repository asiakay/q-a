import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
//import { useState, useEffect } from 'react';
//import Badge from 'react-bootstrap/Badge';
//import Card from 'react-bootstrap/Card';
//import Question from './components/Questions';
//import Button from 'react-bootstrap/button';
// import Form from 'react-bootstrap/form';
import Start from "./components/Start.js";
import Quiz from "./components/Quiz.js";
import Navigation from "./components/Navigation.js";
import "./styles.css";



function App() {

  const [isStarted, setStarted] = React.useState(false);

  function start(){
    setStarted(true);
  }

  return (
<main>
  {!isStarted && <Start start={start} />}
  {isStarted && <> <Navigation />
<Quiz/></> }
</main>
  );
}

export default App;

// 1) install bootstrap for react, - https://react-bootstrap.github.io/ | https://create-react-app.dev/docs/adding-bootstrap/#using-a-custom-theme
// 2) pass `question` and randomized option choices as props to modal dialog, 
// 3) study useRef, 
// 4) make correct answer different color from incorrect answers, 
// 5) add checkboxes to select answer, 
// 6) add buttons to submit answer form and get score of correct answers,    