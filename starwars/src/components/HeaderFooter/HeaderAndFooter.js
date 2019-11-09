import React from "react";
import styled from "styled-components"


const MyHeader = styled.header`
    color: yellow;
    background-color: black;
`
const MyFooter = styled.footer`
    text-align: center;
    color: yellow;
    background-color: black;
    font-size: 3rem;
`

export const Header = ()=>{
    return (
        <MyHeader>
        <h1>STARWARS</h1>
        </MyHeader>
    )    
}

export const Footer = ()=>{
    return (
        <MyFooter>
        May the Force Be with You
        </MyFooter>
    )
}