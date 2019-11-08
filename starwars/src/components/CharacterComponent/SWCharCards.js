import React, {useState} from "react";
import Template from "./CardTemplate";
import styled from "styled-components"
import {All} from "../../data"

const AllCards = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
`
function Character() {
    const [peeps] = useState(All)
    return(
            <AllCards>
                {
                    peeps.map((char, index) =>(
                        <Template 
                        key={index}
                        name={char.name}
                        height={char.height}
                        mass={char.mass}
                        eye_color={char.eye_color}
                        gender={char.gender}
                    />
                    ))
                }
            </AllCards>
    )
}

export default Character;