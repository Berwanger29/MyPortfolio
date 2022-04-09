import styled from "styled-components";

export const Container = styled.div`
    background-color: yellow;
    position: absolute;
    height: 55%;
    right: 0;
    bottom: 0;
    width: 6rem;
    @media(max-width: 600px){
        display: none;
    }
`;