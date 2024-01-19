import { styled } from "styled-components";

const TotalsBox = styled.section`
    display:flex;
    justify-content: space-around;
`

const Total = styled.div`
    display:flex;
    flex-direction:column;
`
const TotalsContainer = ({upperTotal, lowerTotal}) => {
    return ( <TotalsBox>
        <Total>
         <h3>Upper Total</h3>   
         <div>{upperTotal}</div>
        </Total>
    
        <Total>
         <h3>Lower Total</h3> 
         {lowerTotal}  
        </Total>
    
        <Total>
         <h3>Grand Total</h3>   
        </Total>
    

    </TotalsBox> );
}
 
export default TotalsContainer;