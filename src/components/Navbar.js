import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <Link to="/" className="navbar-brand">Logistics</Link>

                <form className="form-inline">
                    <button className="btn btn-outline-success my-2 my-sm-0 mx-1" type="button">Register</button>
                    <button className="btn btn-outline-danger my-2 my-sm-0 mx-1" type="button">SignOut</button>
                </form>
            </nav>
        </>
    )
}

export default Navbar
