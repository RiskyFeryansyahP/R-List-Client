import React from 'react';

class Navbar extends React.Component {
    constructor(props : never) {
        super(props)
    }
    
    public render() {
        return(
            <nav className="navbar is-primary is-fixed-top box-shadow-y">
                <div className="navbar-brand">
                    <a href="#" className="navbar-burger toggler">
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                    <a href="#" className="navbar-item has-text-weight-bold has-text-white">R-List</a>
                    <a href="#" className="navbar-burger nav-toggler">
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-start"></div>
                    <div className="navbar-end">
                        <a href="#" className="navbar-item">Notifications</a>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a href="#" className="navbar-link">Admin</a>
                            <div className="navbar-dropdown is-right">
                                <a href="#" className="navbar-item">Profile</a>
                                <a href="#" className="navbar-item">Settings</a>
                                <hr className="navbar-divider"/>
                                <a href="#" className="navbar-item">Log out</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar