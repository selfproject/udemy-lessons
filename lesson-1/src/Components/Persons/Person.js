import React from 'react'

const Person = (props) =>{
    return (
        <div className="Person">
            <p onClick = {props.onDelete}>This is {props.name} and age is {props.age}</p>
            <p>hello {props.children}</p>
            <input type="text" value={props.name} onChange={props.change}/>
        </div>
    )

}

export default Person;