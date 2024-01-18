import { styled } from "styled-components";

const FlexContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`

const DieBox = styled.div`
width: max-content;
    aspect-ratio:1;
    border: 2px solid black;
    margin:1rem;
    padding: 1.5rem;
`
const HoldButton = styled.button`
    background-color: ${props => props.isHeld ? 'yellow' : 'green'};
    width: max content;
    height: max-content;
    /* margin-right: 1rem; */
`


const Die = ({index, value, holdClicked, isHeld}) => {
 console.log("die ", index, "isHeld = ", isHeld)
    return ( 
    <FlexContainer> 
    <DieBox>
    <span>{value}</span>
    </DieBox> 
    <HoldButton onClick={() => holdClicked(index)} isHeld={isHeld}>HOLD</HoldButton>
    </FlexContainer>
    );
}
 
export default Die;