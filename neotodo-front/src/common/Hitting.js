import React, {useReducer, useState} from "react";

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

function Hitting() {
    // const [number, setNumber] = useState(0);
    // const [script, setScript] = useState("");

    const [number, dispatch] = useReducer(reducer, 0);

    const onClickEventPlus = () => {
        dispatch({ type: 'INCREMENT' });
        // setNumber(prevState => prevState+1);
        // setScript("플러스");
    }

    const onClickEventMinus = () => {
        dispatch({ type: 'DECREMENT' });
        // setNumber(prevState => prevState -1);
        // setScript("마이너스");
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