import React from "react";
import './Screen.css'

type PropsType = {
    count: number
}

export function Screen(props: PropsType) {

    const addClassMax = () => props.count === 5 ? 'max' : '';

    return (
        <div className={'screen'}>
            <span className={`screenNumber ${addClassMax()}`}>{props.count}</span>
        </div>
    )
}