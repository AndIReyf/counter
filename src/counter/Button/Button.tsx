import React from "react";
import './Button.css'

type PropsType = {
    btnType: string
    disabled: boolean
    onClick: () => void
}

export function Button(props: PropsType) {

    const addClassDis = () => props.disabled ? 'dis' : '';

    return (
        <div className={'btnContainer'}>
            <button disabled={props.disabled}
                    className={`btn ${addClassDis()}`}
                    onClick={props.onClick}>
                {props.btnType}
            </button>
        </div>
    )
}