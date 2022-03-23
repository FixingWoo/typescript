import React from "react";
import styled from "styled-components";

interface ContainerProps {
    bgColor: string,
    borderColor: string
}

interface CircleProps {
    bgColor: string,
    borderColor?: string,
    text?: string 
}

const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: ${(props) => props.bgColor};
    border: 1px solid ${(props) => props.borderColor};
`;

function Circle( { bgColor, borderColor, text}: CircleProps) {
    return (
        <Container bgColor={bgColor} borderColor={borderColor || "black"}>
            {text}
        </Container>
    )
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