import React from 'react';

class Navbar extends React.Component {

    render() {
        return (
            <nav className="nav bg-dark">
                <a className="nav-link active" href="#">Home</a>
                <a className="nav-link" href="#">Link</a>
                <a className="nav-link" href="#">Link</a>
            </nav>
        );
    }
}

export default Navbar;