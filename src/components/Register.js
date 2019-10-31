import React from 'react'
import { Field, reduxForm } from 'redux-form'

const Register = () => {
    const renderInput = ({ input, label, meta, fieldType }) => {

        return (
            <div className="form-group">
                <label>{ label }</label>
                <input { ...input } type={ fieldType } className="form-control"  />
            </div>
        )
    }
    
    return (
        <section className="container">
            <div className="row">

                <article className="col-10 mx-auto">
                    <h1 className="text-center py-4">Welcome Register</h1>
                    <form>
                        <Field name="identifier" component={ renderInput } label="Enter Username" fieldType={ "text" } />
                        <Field name="email" component={ renderInput } label="Enter Email" fieldType={ "email" } />
                        <Field name="password" component={ renderInput } label="Enter password" fieldType={ "password" } />
                        <Field name="phone" component={ renderInput } label="Enter Identifier" fieldType={ "tel" } />
                        
                        <div className="col-6 mx-auto py-2">
                            <button type="button" className="btn btn-success btn-block"><strong>Register</strong></button>
                        </div>
                    </form>
                </article>
                
            </div>
        </section>
    )
}




export default reduxForm({
    form: 'registrationForm'
  })(Register);

