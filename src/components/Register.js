import React from 'react'
import { Field, reduxForm } from 'redux-form'

// redux
import { connect } from 'react-redux'
import { registrationAction } from '../actions'



const renderInput = ({ input, label, meta:{ touched, error }, type, placeholder }) => { // render input fields

    return (
        <div className="form-group">
            <label>{ label }</label>
            <input { ...input } className="form-control" type={ type } placeholder={ placeholder }  />
            <div className="text-danger">{ touched && error && <small>{ error }</small> }</div>
        </div>
    )
}

const Register = ({ handleSubmit, registrationAction, history, errorMessage }) => {


    const handleError = () => {
        if (errorMessage) {
          return (
            <div className="text-danger">
              { errorMessage }
            </div>
          );
        }
      }

    const submitForm = (values) => {
        console.log("submitting", values)
        registrationAction(values, history);
    }
    
    return (
        <section className="container">
            <div className="row">

                <article className="col-10 mx-auto">
                    <h1 className="text-center py-4">Welcome Register</h1>
                    <form onSubmit={ handleSubmit(submitForm) }>
                        <Field name="identifier" component={ renderInput } label="Enter Username" type="text" placeholder="Enter Your Username" />
                        <Field name="email" component={ renderInput } label="Enter Email" type="email" placeholder="Enter Your Email" />
                        <Field name="password" component={ renderInput } label="Enter password" type="password" placeholder="Enter Your Password" />
                        <Field name="phone" component={ renderInput } label="Enter Phonez" type="tel" placeholder="Enter Your Phone Number" />
                        
                        <div className="col-6 mx-auto py-2">
                            <button type="submit" className="btn btn-success btn-block"><strong>Register</strong></button>
                        </div>
                    </form>

                    <div className="text-center">{ handleError() }</div>
                </article>
                
            </div>
        </section>
    )
}


const validate = (formValues) => {// validate form fields
    const errors = {}
    
    if(!formValues.identifier){
        errors.identifier = "Please enter your username"
    }

    if(!formValues.email){
        errors.email = "Please enter your email"
    }

    if(!formValues.password){
        errors.password = "Please enter your password"
    }

    return errors
}

const mapStateToProps = (state) => {
    return { errorMessage: state.auth.error }
}


const registrationForm = reduxForm({
    form: 'registrationForm',
    validate
  })(Register)

  export default connect(mapStateToProps, { registrationAction })(registrationForm)
