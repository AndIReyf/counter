import React, {ChangeEvent, useState} from "react";
import './SetCounter.scss'
import {Button} from "../Button/Button";
import {Input} from "../Input/Input";

type PropsType = {
    setValueForCount: (valueS: string, valueM: string) => void
    isError: (v: boolean) => void
}

function restoreState<T>(key: string, defaultState: T) {
    const stateAsString = localStorage.getItem(key);
    if (stateAsString !== null) defaultState = JSON.parse(stateAsString) as T;
    return defaultState;
}

export function SetCounter(props: PropsType) {

    const setBtn: string = 'Set';
    const [inpValueMax, setInpValueMax] = useState(restoreState('maxValue', '1'));
    const [inpValueStart, setInpValueStart] = useState(restoreState('startValue', '0'));
    const changeInpValueMax = (e: ChangeEvent<HTMLInputElement>) => setInpValueMax(e.currentTarget.value)
    const changeInpValueStart = (e: ChangeEvent<HTMLInputElement>) => setInpValueStart(e.currentTarget.value)
    const setValue = () => props.setValueForCount(inpValueStart, inpValueMax)
    const setBtnDis = () => +inpValueMax <= +inpValueStart || +inpValueMax < 0 || +inpValueStart < 0 || +inpValueStart >= +inpValueMax
    const checkMaxVError = () => {
        let value = +inpValueMax <= +inpValueStart || +inpValueMax < 0
        props.isError(value);
        return value
    }
    const checkStartVError = () => {
        let value = +inpValueStart < 0 || +inpValueStart >= +inpValueMax
        props.isError(value);
        return value
    }

    return (
        <div className={'SetCounter'}>
            <div className={'settings'}>
                <div className={'settingsValue'}>
                    <div className={'title'}>Max value</div>
                    <Input
                        error={checkMaxVError()}
                        inpValue={inpValueMax}
                        changeInpValue={changeInpValueMax}/>
                </div>
                <div className={'settingsValue'}>
                    <div className={'title'}>Start value</div>
                    <Input
                        error={checkStartVError()}
                        inpValue={inpValueStart}
                        changeInpValue={changeInpValueStart}/>
                </div>
            </div>
            <div className={'btnBox'}>
                <Button
                    btnType={setBtn}
                    disabled={setBtnDis()}
                    onClick={setValue}/>
            </div>
        </div>
    )
}