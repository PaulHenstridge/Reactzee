import { styled} from "styled-components";

const CatBox = styled.div`
    width: 100%;
    display:flex;
    /* border: 1px solid red; */
    & span:nth-child(1){
        width:80%;
        border: 1px solid blue;
    }
    & span:nth-child(2){
        width:20%;
        border: 1px solid green;
    }
`

const CategoryBox = ({category, score}) => {

 
    return ( <CatBox>
    <span>{category}</span>
    <span>{score}</span>
    </CatBox> );
}
 
export default CategoryBox;