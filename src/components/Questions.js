import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import {decode} from 'html-entities';


function Question() {
  const [data, setData] = useState([]);
  const getData = () => {
    console.log("test")
    fetch('../data.json'
/*     {
        headers: {
           'Content-Type': 'application/json',
            'Accept': 'application/json',
             "access-control-allow-origin": "*"

        }
    } */
    )
    .then(function(response){
        console.log(response)
        return response.json();
    })
    .then(function(myJson){
        console.log(myJson);
        setData(myJson)
    });

/*     const response = await fetch('https://opentdb.com/api.php?amount=21') 
        if (!response.ok){
            throw new Error('Data could not be fetched!')
        } else {
            
            return response.json()
    } */
}
  useEffect(() => {
     getData()
     decode('&lt; &gt; &quot; &apos; &amp; &#169; &#8710;');

/*     .then((items) => {
        
        setData(items)
    })
    .catch((e) => {
        console.log(e.message)
    }) */
    }, [])


 
        return (
            <div className='row'>
                      <h2 className="mb-3">Triviologiye v3</h2>
       {data && data.length && data.map((item) => 
        <div className='col-lg-3 col-md-4 col-sm-6 mb-3'>
                        <div className="card h-100">
        Category: {item.category}
        <Card.Text>
        <h5 className="card-title">{item.question}</h5>
              </Card.Text>
        </div>
       </div>
       )}
       </div>
       );
}
    
  

export default Question;

//https://www.positronx.io/how-to-handle-http-request-with-async-await-in-react/