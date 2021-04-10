import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    color: #111111;
    background: transparent;
    border: 2px solid #111111;
    border-radius: 4px;
    transition-duration: 0.2s;
    text-transform: uppercase;
    text-decoration: none;

    display: flex;
    justify-content: center;
    width: 100%;
    min-width: 50px;
    max-width: 250px;
    text-align: center;

    &:hover {
        cursor: pointer;
        background-color: #111111;
        color: white;
        text-decoration: none;
    }
    &.duel:hover {
        background-color: red;
    }
`

const Button = (props) => {
    return (
        <StyledButton as="a" href={props.href} type={props.type} className={props.className} style={{width:props.width, height:props.height, padding:props.padding, margin:props.margin}}>
            {props.children}
        </StyledButton>
    )
}

export default Button