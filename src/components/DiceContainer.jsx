import { useState } from 'react';

import { styled } from 'styled-components';
import axios from 'axios';

import Die from './Die';

const DiceBox = styled.section`
    display:flex;
    justify-content:space-around;
`


const DiceContainer = () => {

    const [diceVals, setDiceVals] = useState(['?','?','?','?','?'])

    const fetchDiceValues = async () => {
        try {
            const response = await axios.get('http://localhost:8080/roll');
            console.log("response data-->", response.data)
            setDiceVals(response.data.dice);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    return ( 
    <DiceBox>
        {Array.from({ length: 5 }, (_, index) => <Die key={index} index={index} value={diceVals[index]} />)
}

    <button onClick={fetchDiceValues}>Roll Dice</button>
    </DiceBox> 
    );
}
 
export default DiceContainer;