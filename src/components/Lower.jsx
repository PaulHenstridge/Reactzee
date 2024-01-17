import { styled } from "styled-components";

import CategoryBox from "./CategoryBox";

const LowerBox = styled.section`
    border:2px solid yellow;
    padding: 0 2rem 2rem 2rem;
    margin:2rem 0;
`
const Lower = () => {
    return ( <LowerBox>
    <h3>LOWER</h3>
    <CategoryBox />
    <CategoryBox />
    <CategoryBox />
    <CategoryBox />
    <CategoryBox />
    </LowerBox> );
}
 
export default Lower;