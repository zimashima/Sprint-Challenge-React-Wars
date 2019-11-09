import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
    background-color: orange;
    width: 500px;
    margin: 20px;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 0 8px; 8px darkorange;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
`
export default function Template(props){

    return (
           <CardContainer>
           <h3>{props.name}</h3>
            <div>
                   <p><strong>Height: </strong> {props.height} cm</p>
                   <p><strong>Mass:</strong> {props.mass} kg</p>
                   <p><strong>Eye Color:</strong> {props.eye_color}</p>
                   <p><strong>Gender:</strong> {props.gender}</p>
            </div>         
            </CardContainer>
    )
}
        

