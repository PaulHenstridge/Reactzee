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
    const [rollsRemaining, setRollsRemaining] = useState(3)
    const [holdList, setHoldList] = useState([false, false, false, false, false])

    const fetchDiceValues = async () => {
        try {
            const response = await axios.get('http://localhost:8080/roll');
            setDiceVals(response.data.dice);
            setRollsRemaining(response.data.turnsRemaining)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };  

     const holdClicked = async (index) => {
        try {
            const response = await axios.post('http://localhost:8080/hold', {index:index})
            setHoldList(response.data.holdList)

        }
        catch (error) {
        console.error('Error fetching data:', error);
    }
    }




    return ( 
    <DiceBox>
        {Array.from({ length: 5 }, (_, index) => <Die key={index} index={index} value={diceVals[index]} holdClicked={holdClicked} isHeld={holdList[index]}/>)
}

    <button onClick={fetchDiceValues}>{rollsRemaining} rolls remaining</button>
    </DiceBox> 
    );
}
 
export default DiceContainer;