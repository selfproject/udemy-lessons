
import React, { Component } from 'react'
import Person from './Person'
import './Person.css'

class PersonContainer extends Component {
    state = {
        persons: [
            { id:1, name: 'ajay', age: 32 },
            { id:2, name: 'amit', age: 33 },
            { id:3, name: 'shyam', age: 54 }
        ],
        isToggle: true,
        buttonLabel: 'Hide',
        textValue:''
    }

    onToggleHandler = () => {
        const isToggleValue = this.state.isToggle;
        //const buttonLabel = isToggleValue === true ? "Show" : "Hide";
        this.setState({
            isToggle: !isToggleValue,
            buttonLabel: isToggleValue === true ? "Show" : "Hide"
        })
    }

    onDeletePersonHandler = (index) => {
        const persons = this.state.persons.slice();
        persons.splice(index,1);
        this.setState({
            persons:persons
        })
    }

    onTextChangeHandler = (e,index) =>{
        const elementIndex = this.state.persons.findIndex(e=>e.id === index );
        const person = {...this.state.persons[elementIndex]};
        person.name = e.target.value;

        const persons = [...this.state.persons]
        persons[elementIndex] = person;
        this.setState(
            {
                persons : persons
            }
        )
    }


    render() {
        let { buttonLabel } = this.state;
        const style = {
            backgroundColor: 'green',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            
          };

        let personView = null;
        if (this.state.isToggle) {
            personView = (
                this.state.persons.map((p, index) => {
                    return <Person name={p.name} age={p.age} 
                    onDelete = {()=>this.onDeletePersonHandler(p.id)} 
                    change={(e)=>this.onTextChangeHandler(e,p.id)}
                    key={p.id} />
                })
            )
        }
        
        return (<div>
            {personView}
            <button onClick={this.onToggleHandler} style={style}>{buttonLabel}</button>
            </div>);

    }
}

export default PersonContainer;