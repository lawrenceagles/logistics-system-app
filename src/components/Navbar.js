import React from 'react'
import { Link } from 'react-router-dom'

// redux
import { connect } from 'react-redux'

const Navbar = ({ authenticated }) => {
    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <Link to="/" className="navbar-brand">Logistics</Link>

                <form className="form-inline">
                    { authenticated ? (<Link to="/logout">
                        <button className="btn btn-outline-danger my-2 my-sm-0 mx-1" type="button">logOut</button>
                    </Link>): (<Link to="/login">
                        <button className="btn btn-outline-success my-2 my-sm-0 mx-1" type="button">Login</button>
                    </Link>)}
                    {!authenticated && <Link to="/register">
                        <button className="btn btn-outline-primary my-2 my-sm-0 mx-1" type="button">Register</button>
                    </Link>}
                </form>
            </nav>
        </>
    )
}


const mapStateToProps = (state) => {
    return { authenticated: state.auth.authenticated }
}
export default connect(mapStateToProps)(Navbar)
