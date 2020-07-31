import React from "react";
import './Screen.scss'

type PropsType = {
    count: number | null
    maxValue: boolean
    error: boolean
}

export function Screen(props: PropsType) {
    return (
        <div className={'Screen'}>
            <div className={`screenNumber ${props.maxValue ? 'max' : ''}`}>
                {
                    props.error
                        ? <span className={'error'}>Incorrect value</span>
                        : props.count !== null ? props.count : <span>Set Value</span>
                }
            </div>
        </div>
    )
}