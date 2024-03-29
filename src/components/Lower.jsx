import { styled } from "styled-components";

import CategoryBox from "./CategoryBox";

const LowerBox = styled.section`
    border:2px solid yellow;
    padding: 0 2rem 2rem 2rem;
    margin:2rem 0;
`
const Lower = ({categories, scorePoints}) => {

    const scoreClick = (category) => {
        scorePoints( "LOWER",category)
    }
    return ( <LowerBox>
    <h3>LOWER</h3>
    {Object.keys(categories).map((category, index) => 
    <CategoryBox category = {category} score = {categories[category]} key={index} scoreClick={scoreClick}/>
    )
    }
    </LowerBox> );
}
 
export default Lower;