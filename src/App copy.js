import 'bootstrap/dist/css/bootstrap.min.css';

import { useState, useEffect } from 'react';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
//import Button from 'react-bootstrap/button';
// import Form from 'react-bootstrap/form';


function App() {
  const [data,setData]=useState([]);
  const getData=()=>{
    console.log("code come here")
    fetch('./data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
        
      });


  }
  useEffect(()=>{
    getData()
    
  },[])

  return (
    <div className="App">
      
     {data && data.length>0 && data.map((item)=>

  
      <div>
        <Card>
          <Card.Body>
            <Card.Title>Category:{item.category}</Card.Title>
            <Card.Subtitle>Difficulty: {item.difficulty}</Card.Subtitle>
      
      <br></br>
      <Badge bg='primary' as="Button">Submit Answer</Badge>
      </Card.Body>
      </Card>
      </div>
 )}
     
    </div>
  );
}

export default App;

// 1) install bootstrap for react, - https://react-bootstrap.github.io/ | https://create-react-app.dev/docs/adding-bootstrap/#using-a-custom-theme
// 2) pass `question` and randomized option choices as props to modal dialog, 
// 3) study useRef, 
// 4) make correct answer different color from incorrect answers, 
// 5) add checkboxes to select answer, 
// 6) add buttons to submit answer form and get score of correct answers,    