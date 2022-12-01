import React from "react";

function Start(props){
    return (
        <div className="start">
            <h1 className="title">Triviologyie v3</h1>
            <button className="start-button" onClick={props.start}>Begin</button>
        </div>
    )
}

export default Start;