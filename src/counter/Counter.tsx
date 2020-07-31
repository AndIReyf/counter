import React, {useState} from "react";
import './Counter.scss';
import {Screen} from "./Screen/Screen";
import {Button} from "./Button/Button";
import {SetCounter} from "./SetCounter/SetCounter";

export function Counter() {

    const incCounter: string = 'Inc';
    const resCounter: string = 'Res';
    const [error, setError] = useState(false)
    const [settings, setSettings] = useState<{[key:string]: number}>({});
    const [count, setCount] = useState<number | null>(null);

    const increaseCount = () => {
        if (count !== null) {
            setCount(count + 1);
        }
    }
    const resetCounter = () => setCount(settings.startValue);
    const setValueForCount = (valueS: string, valueM: string) => {
        const settingsValue = {startValue: +valueS, maxValue: +valueM};
        setSettings(settingsValue)
        setCount(settingsValue.startValue)
    }

    const isError = (value: boolean) => {
        setError(value)
    }

    return (
        <div className={'Counter'}>
            <div className={'counterScreen'}>
                <Screen error={error} maxValue={count === settings.maxValue} count={count}/>
                <div className={'btnBox'}>
                    <Button
                        disabled={count === settings.maxValue || count === null || error}
                        btnType={incCounter}
                        onClick={increaseCount}/>
                    <Button
                        disabled={count === settings.startValue || count === null || error}
                        btnType={resCounter}
                        onClick={resetCounter}/>
                </div>
            </div>
            <SetCounter isError={isError} setValueForCount={setValueForCount} />
        </div>
    )
}