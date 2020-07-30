import React, {useState} from "react";
import './Counter.scss';
import {Screen} from "./Screen/Screen";
import {Button} from "./Button/Button";
import {SetCounter} from "./SetCounter/SetCounter";

type PropsType = {}

export function Counter(props: PropsType) {

    const incCounter: string = 'Inc';
    const resCounter: string = 'Res';
    const [count, setCount] = useState(0);
    const increaseCount = () => setCount(count + 1);
    const resetCounter = () => setCount(0);

    return (
        <div className={'Counter'}>
            <div className={'counterScreen'}>
                <Screen count={count}/>
                <div className={'btnBox'}>
                    <Button
                        disabled={count === 5}
                        btnType={incCounter}
                        onClick={increaseCount}/>
                    <Button
                        disabled={count === 0}
                        btnType={resCounter}
                        onClick={resetCounter}/>
                </div>
            </div>
            <SetCounter/>
        </div>
    )
}