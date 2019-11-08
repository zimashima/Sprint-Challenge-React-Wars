import React from "react";
import styled from "styled-components"

const SpanOfNum = styled.span`
    width: 100px;
    padding: 20px;
    margin: 5px
    font-size: 2.4rem;
    background-color: white;
    color: orange;
    border-radius: 10px;
    cursor: pointer;
`



function NumSpan(props){

    return(
        <SpanOfNum>{props.number}
        </SpanOfNum>
    )
}

export default NumSpan;