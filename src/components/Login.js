import React from 'react'
import { Field, reduxForm } from 'redux-form'


const renderInput = ({ input, label, meta:{ touched, error }, type, placeholder }) => { // render input fields

    return (
        <div className="form-group">
            <label>{ label }</label>
            <input { ...input } className="form-control" type={ type } placeholder={ placeholder }  />
            <div className="text-danger">{ touched && error && <small>{ error }</small> }</div>
        </div>
    )
}

const Login = ({ handleSubmit }) => {

    const submitForm = (formValues) => {
        console.log("form values", formValues)
    }
    
    return (
        <section className="container">
            <div className="row">

                <article className="col-10 mx-auto">
                    <h1 className="text-center py-4">Welcome Login</h1>
                    <form onSubmit={ handleSubmit(submitForm) }>
                        <Field name="identifier" component={ renderInput } label="Enter Username" type="text" placeholder="Enter your username" />
                        <Field name="password" component={ renderInput } label="Enter password" type="password" placeholder="Enter Your Password" />
                        
                        <div className="col-6 mx-auto py-2">
                            <button type="submit" className="btn btn-success btn-block"><strong>Login</strong></button>
                        </div>
                    </form>
                </article>
                
            </div>
        </section>
    )
}


const validate = (formValues) => {// validate form fields
    const errors = {}
    
    if(!formValues.identifier){
        errors.identifier = "Please enter a username"
    }

    if(!formValues.password){
        errors.password = "Please enter a password"
    }

    console.log("validating", errors)
    return errors
}


export default reduxForm({
    form: 'loginForm',
    validate
  })(Login)
