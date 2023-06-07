'use client'

import {CSSProperties} from 'react';
import styles from './Input.module.css';

type InputProps = {
    labelText?: string;
    type: string;
    name: string;
    placeholder?: string;
    width?: string;
    textTransform?: any;
    value?: any;
    onChange?: (e) => void;
    disabled?: boolean;
    maxWidth?: string;
    data?: []
}

export default function Input(props: InputProps) {

    const inputStyle: CSSProperties = {
        width: props.width,
        textTransform: props.textTransform,
        maxWidth: props.maxWidth
    };

    const divStyle: CSSProperties = {
        maxWidth: props.maxWidth
    };

    return (
        <div className={styles.input_container} style={divStyle}>
            <label>{props.labelText}</label>
            <input type={props.type}
                   name={props.name}
                   placeholder={props.placeholder}
                   value={props.value}
                   onChange={(e) => props.onChange ? props.onChange(e.target.value) : null}
                   style={inputStyle}
                   disabled={props.disabled}
                   autoComplete="off"/>
        </div>
    )
}