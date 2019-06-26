

import React, { Component } from 'react'
import Input from '../Components/Input';
import Button from '../Components/Button';

import './../Components/Input.css'


class CustomerContainer extends Component {

    state = {
        customerForm: {
            Name: {
                elementType: 'input',
                label:'name',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter name',
                },
                value: '',
                validation: {
                    required: true
                },
                valid:false,
                touched:false
            },
            Email: {
                elementType: 'input',
                label:'email address',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Enter Email',
                    required: true
                },
                value: '',
                validation: {
                    required: true
                },
                valid:false,
                touched:false
            },
            Phone: {
                elementType: 'input',
                label:'phone number',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Enter Mobile Number',
                    required: true
                },
                value: '',
                validation: {
                    required: true
                },
                valid:false,
                touched:false
            },
            Country: {
                elementType: 'input',
                label:'country name',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter Country'
                },
                value: '',
                validation: {
                    required: true
                },
                valid:false,
                touched:false
            },
            Qualification: {
                elementType: 'select',
                label:'Select Qualification',
                elementConfig: {
                    type: 'select',
                    placeholder: 'Select Qualification Method',
                    options: [
                        { value: 'master', displayValue: "Master Degree" },
                        { value: 'batcher', displayValue: "Bacheler Degree" }
                    ]
                },
                value: '',
                validation: {
                    required: false
                },
                valid:true,
                touched:false
            },
            Feedback: {
                elementType: 'textarea',
                label:'Enter Feedback',
                elementConfig: {
                    type: 'textArea',
                    placeholder: 'Enter Feedback here'

                },
                value: '',
                validation: {
                    required: false
                },
                valid:true,
                touched:false
            }
        },
        formIsvalid : false
    }

    inputChangeHandler = (event, key) => {
        const updateCustomerForm = { ...this.state.customerForm }
        const updateCusotmerFormElement = { ...updateCustomerForm[key] }

        updateCusotmerFormElement.value = event.target.value;
        updateCusotmerFormElement.valid = this.checkValidityRoles(updateCustomerForm[key].validation,updateCusotmerFormElement.value);
        updateCusotmerFormElement.touched = true;
        updateCustomerForm[key] = updateCusotmerFormElement;
        
        let isFormValid = true;
        for(let elementIdentifier in updateCustomerForm){
            console.log(">>"+updateCustomerForm[elementIdentifier].valid);
            isFormValid = updateCustomerForm[elementIdentifier].valid && isFormValid
        }
        console.log("isFormValid : "+isFormValid);
        
        this.setState({ customerForm: updateCustomerForm,formIsvalid:isFormValid });
        console.log("updateCusotmerFormElement"+JSON.stringify(this.state));

    }

    checkValidityRoles = (roles,value) =>{
        
        let isValid = true;
        if(roles.required){
            isValid = value.trim() !== '' && isValid 
        }
        return isValid;
    }

    customerFormHandler = (event) => {
        event.preventDefault();
        const formCustomer = {}
        for (let formElement in this.state.customerForm) {
            formCustomer[formElement] = this.state.customerForm[formElement].value;
        }
        console.log("submitted form is " + JSON.stringify(formCustomer));
    }

    render() {
        let formElementArray = [];
        for (let key in this.state.customerForm) {
            formElementArray.push({
                id: key,
                config: this.state.customerForm[key]
            })
        }
        return (
            <div>
                <form onSubmit={this.customerFormHandler}>
                    {
                        formElementArray.map(formElement => (
                            <Input
                                className="Input"
                                key={formElement.id}
                                label={formElement.config.label}
                                elementType={formElement.config.elementType}
                                elementConfig={formElement.config.elementConfig}
                                changeHandler={(e) => this.inputChangeHandler(e, formElement.id)}
                                invalid={!formElement.config.valid}
                                touched = {formElement.config.touched}
                                value={formElement.value} />
                        ))
                    }
                    <Button className="submit-button" disabled={!this.state.formIsvalid}>Submit</Button>
                </form>
            </div>
        )
    }
}

export default CustomerContainer;