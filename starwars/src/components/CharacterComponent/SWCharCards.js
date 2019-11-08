import React, {useState, useEffect} from "react";
import Template from "./CardTemplate";
import styled from "styled-components";
import axios from "axios";

import {All, NumSys} from "../../data";
import NumSpan from "./NumSpan";

const Paginacion = styled.div`
    width: 100%;
    margin: 20px;
`
const AllCards = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
`

function Character() {
    const [peeps, setPeeps] = useState(All)
    const [page, setPage] = useState(NumSys[0])

    useEffect(()=>{
        page.forEach(num => {
            let newPeeps = []
            axios.get(`https://swapi.co/api/people/${num}`)
                 .then (response => {
                     console.log(response.data)
                 })
                 .catch (error => {
                     console.log("GET!", error)
                 })
            newPeeps.push(response.data)
            setPeeps(newPeeps)
         })
    })
    
        

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
                <Paginacion>
                {
                    NumSys.map((group, ind)=>(
                        <NumSpan
                            number={ind+1} 
                            onClick={()=> setPage(group)}/>
                    ))
                }
                </Paginacion>
            </AllCards>
    )
}

export default Character;