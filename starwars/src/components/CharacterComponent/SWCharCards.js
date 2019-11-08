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
    const [peeps, setPeeps] = useState([])
    const [page, setPage] = useState(NumSys[0])


    useEffect(()=>{
        axios.get(`https://swapi.co/api/people/?page=${page}`)
        .then(response => {
            setPeeps(response.data.results)
        })
        
        .catch(err =>{
            console.log(`GET`, err)
        })

    }, [page])



    
    

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
                    NumSys.map((num)=>(
                        <NumSpan
                            number={num} 
                            setThePage={setPage}/>
                    ))
                }
                </Paginacion>
            </AllCards>
    )
}

export default Character;