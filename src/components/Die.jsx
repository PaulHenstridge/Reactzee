import { styled } from "styled-components";

const DieBox = styled.div`
width: max-content;
    aspect-ratio:1;
    border: 2px solid black;
    margin:1rem;

`


const Die = () => {
    return ( <DieBox>
    I'm a Die!
    </DieBox> );
}
 
export default Die;