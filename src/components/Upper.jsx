import { styled } from "styled-components";

import CategoryBox from "./CategoryBox";

const UpperBox = styled.section`
    border:2px solid yellow;
    padding: 0 2rem 2rem 2rem;

`
const Upper = ({categories,scorePoints}) => {

const scoreClick = (category) => {
    scorePoints("UPPER", category)
}

    return ( <UpperBox>
    <h2>UPPER</h2>

    {Object.keys(categories).map((category, index) => 
    <CategoryBox category = {category} score = {categories[category]} key={index} scoreClick={scoreClick}/>
    )
    }
   

    </UpperBox> );
}
 
export default Upper;