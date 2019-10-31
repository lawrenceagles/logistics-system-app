import React from 'react'
import { Field, reduxForm } from 'redux-form'

const Login = () => {

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
                    <h1 className="text-center py-4">Welcome Login</h1>
                    <form>
                        <Field name="identifier" component={ renderInput } label="Enter Identifier" fieldType={ "text" } />
                        <Field name="password" component={ renderInput } label="Enter password" fieldType={ "password" } />
                        
                        <div className="col-6 mx-auto py-2">
                            <button type="button" className="btn btn-success btn-block"><strong>Login</strong></button>
                        </div>
                    </form>
                </article>
                
            </div>
        </section>
    )
}




export default reduxForm({
    form: 'loginForm'
  })(Login);
