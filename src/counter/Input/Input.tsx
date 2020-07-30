import React from "react";
import './Input.scss'

type PropsType = {}

export function Input(props: PropsType) {
    return (
        <div className={'Input'}>
            <input type="number"/>
        </div>
    )
}