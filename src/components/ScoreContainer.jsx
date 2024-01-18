import { useState } from "react";

import axios from "axios";

import Lower from "./Lower";
import Upper from "./Upper";
import TotalsContainer from "./TotalsContainer";

const ScoreContainer = () => {

    const [upperCategories, setUpperCategories] = useState({
        ONES:0,
        TWOES:0,
        THREES:0,
        FOURS:0,
        FIVES:0,
        SIXES:0
    });

    const [lowerCategories, setLowerCategories] = useState({
        THREE_OF_A_KIND:0,
         FOUR_OF_A_KIND:0,
          FULL_HOUSE:0,
           SMALL_STRAIGHT:0,
            LARGE_STRAIGHT:0,
             YAHTZEE:0,
              CHANCE:0
    });

    const [upperTotal, setUpperTotal] = useState(0);
    const [lowerTotal, setLowerTotal] = useState(0);
    const [grandTotal, setGrandTotal] = useState(0);

    const scorePoints = async (section, category) => {
        try {
            const response = await axios.post('http://localhost:8080/score', {section, category})
           

        }
        catch (error) {
        console.error('Error fetching data:', error);
    }
    }

    return ( <>
    <h2>Score Container</h2>
    <Upper categories = {upperCategories}/>
    <Lower categories = {lowerCategories}/>
    <TotalsContainer />
    </> );
}
 
export default ScoreContainer