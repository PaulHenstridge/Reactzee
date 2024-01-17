import { styled } from "styled-components";

import CategoryBox from "./CategoryBox";

const UpperBox = styled.section`
    border:2px solid yellow;
    padding: 0 2rem 2rem 2rem;

`
const Upper = () => {
    return ( <UpperBox>
    <h2>UPPER</h2>
    <CategoryBox />
    <CategoryBox />
    <CategoryBox />
    <CategoryBox />
    <CategoryBox />
    <CategoryBox />
    </UpperBox> );
}
 
export default Upper;