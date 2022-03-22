import React from "react";
import styled from "styled-components";

interface CommonProps {
    bgColor: string;
}

const Container = styled.div<CommonProps>`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: ${props => props.bgColor};
`;


function Circle( { bgColor }: CommonProps) {
    return <Container bgColor={bgColor}  />
}

export default Circle;

interface playerShape {
    name: string,
    age: number
}

const sayHello = (playerObj: playerShape) => {
    `Hello ${playerObj.name} you are ${playerObj.age} years old.`;
}

sayHello({name: "name", age: 45});