import { styled } from "styled-components";

const DieBox = styled.div`
width: max-content;
    aspect-ratio:1;
    border: 2px solid black;
    margin:1rem;
    padding: 1.5rem;

`


const Die = ({value}) => {
    return ( <DieBox>
    <span>{value}</span>
    </DieBox> );
}
 
export default Die;