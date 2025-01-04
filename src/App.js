import Bill from './components/Bill';
import Payment from './components/Payment';
import { useState } from 'react';
export default function App() {
    const [ bill, setBill ] = useState(0)
    const [percent, setPercent] = useState(0)
    const [friendPercent, setFriendPercent] = useState(0)

    const tip = bill * ((percent + friendPercent) / 2 / 100)
    function handleReset() {
        setBill(0)
        setPercent(0)
        setFriendPercent(0)
    }


    const questions = ['How much was the bill?', 'How did you like the service?', 'How did your friend like the service?']
    return(
        <div>
            {questions.map((question, index) => 
            <Bill key={index} number={index+1} value={bill} 
             percent={percent} percentOnChange = {setPercent}
             friendPercent={friendPercent} friendPercentOnChange = {setFriendPercent}
             onChange={e => setBill(e.target.value)}><span>{question}</span></Bill>)}
            <Payment bill={bill} tip={tip} />
            <button onClick={() => handleReset()}>Reset</button>
        </div>

    )
}