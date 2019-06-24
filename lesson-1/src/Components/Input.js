import React from 'react';
import classes from './Input.css'

const Input  = (props) => {
    let inputElement = null;
    const elementType = props.elementType;
    let inputClass = null;
    let errorMsg = null;
    console.log("inputClass"+inputClass);
    if(props.invalid && props.touched){
        inputClass = {
            border:"1px solid red"
        }
        errorMsg = <p className="validationError">Enter valid {props.label}</p>
    }
    switch (elementType) {
        case 'textarea':
            inputElement = <textarea
                style={inputClass}
                onChange = {props.changeHandler}
                className="InputElement"
                {...props.elementConfig} value={props.value} />
            break;    
        case 'select':
            inputElement = (<select
                style={inputClass}
                onChange = {props.changeHandler}
                className="InputElement"
                value={props.value}>
                {props.elementConfig.options.map(e => (
                    <option key={e.value} value={e.value}>
                    {e.displayValue}
                    </option>
                ))}
            </select>
            );
            break;

        default:
            inputElement = <input
                style={inputClass}
                className="InputElement"
                onChange = {props.changeHandler}
                {...props.elementConfig} value={props.value} />
    }
    
    
    return (
        <div className="Input">
            <label className="Label">{props.label}</label>
            {inputElement}
            {errorMsg}
            
        </div>
    )
}


export default Input;