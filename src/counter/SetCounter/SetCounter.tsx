import React from "react";
import './SetCounter.scss'
import {Button} from "../Button/Button";
import {Input} from "../Input/Input";

type PropsType = {}

export function SetCounter(props: PropsType) {

    const setBtn: string = 'Set';

    return (
        <div className={'SetCounter'}>
            <div className={'settings'}>
                <div className={'settingsValue'}>
                    <div className={'title'}>Max value</div>
                    <Input />
                </div>
                <div className={'settingsValue'}>
                    <div className={'title'}>Start value</div>
                    <Input />
                </div>
            </div>
            <div className={'btnBox'}>
                <Button btnType={setBtn} disabled={false} onClick={() => {}}/>
            </div>
        </div>
    )
}