import { styled } from "styled-components";

const TotalsBox = styled.section`
    display:flex;
    justify-content: space-around;
`
const TotalsContainer = () => {
    return ( <TotalsBox>
    <h3>Upper Total</h3>
    <h3>Lower Total</h3>
    <h3>Grand Total</h3>
    </TotalsBox> );
}
 
export default TotalsContainer;