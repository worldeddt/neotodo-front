import React, {useState} from "react";



function Hitting() {
    const [number, setNumber] = useState(0);
    const [script, setScript] = useState("")

    const onClickEventPlus = () => {
        setNumber(prevState => prevState+1);
        setScript("플러스");
    }

    const onClickEventMinus = () => {
        setNumber(prevState => prevState -1);
        setScript("마이너스");
    }

    return <div>
        <h2>{number}</h2>
        <button onClick={onClickEventPlus}>
            +
        </button><br/>
        <button onClick={onClickEventMinus}>
            -
        </button>
    </div>
}

export default Hitting;