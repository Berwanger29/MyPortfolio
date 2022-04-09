import styled from "styled-components";

export const Container = styled.div`
    background-color: blue;
    position: absolute;
    height: 55%;
    left: 0;
    bottom: 0;
    width: 6rem;
    
    @media(max-width: 600px){
        display: none;
    }
`