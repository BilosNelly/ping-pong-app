import React, { Component } from 'react';

import {
    Link,
  }from 'react-router-dom';

import {
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Navbar,
 } from 'reactstrap';

class NavBar extends Component {
    render() {
        return (
            <div className='NavBar-App'>
                <Navbar>
                    <NavbarBrand tag={Link} to="/">Pingis</NavbarBrand>
                    <Nav>
                    <NavItem>
                            <NavLink tag={Link} to="/">Dashboard</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/players">Players</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/teams">Teams</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/matches">Matches</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/leaderboard">Leaderboard</NavLink>
                        </NavItem>
                    </Nav>
            </Navbar>        
        </div>
        );
    }
}

export default NavBar;