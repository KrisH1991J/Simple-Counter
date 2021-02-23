import React from 'react'

export function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="search" aria-label="Search"></input>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </nav>
        </div>

    )
}
