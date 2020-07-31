import React, {ChangeEvent} from "react";
import './Input.scss'

type PropsType = {
    inpValue: string
    error: boolean
    changeInpValue: (e: ChangeEvent<HTMLInputElement>) => void
}

export function Input(props: PropsType) {
    return (
        <div className={`Input`}>
            <input
                className={`${props.error ? 'error' : ''}`}
                value={props.inpValue}
                onChange={props.changeInpValue}
                type="number"/>
        </div>
    )
}