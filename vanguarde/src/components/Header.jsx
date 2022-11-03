import React, {Component} from 'react';
import {
    MDBCollapse, MDBDropdown, MDBDropdownItem, MDBDropdownMenu,
    MDBDropdownToggle, MDBNavbar, MDBIcon, MDBNavbarBrand, MDBNavbarNav,
    MDBNavbarToggler, MDBNavbarItem, MDBNavbarLink, MDBBtn,
} from 'mdb-react-ui-kit';

export class Header extends Component {
    render() {
        return (
            <MDBNavbar color="elegant-color" dark expand="md">
                <MDBNavbarBrand>
                    <strong className="white-text">Taburette</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler/>
                <MDBCollapse id="navbarCollapse3" navbar>
                    <MDBNavbarNav left>
                        <MDBNavbarItem active>
                            <MDBNavbarLink to="#!">Home</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                    <span className="mr-2">Dropdown</span>
                                </MDBDropdownToggle>
                                <MDBBtn rippleColor='primary' color='light'>
                                    Primary
                                </MDBBtn>
                                <MDBBtn rippleColor='secondary' color='light'>
                                    Secondary
                                </MDBBtn>
                                <MDBBtn rippleColor='success' color='light'>
                                    Success
                                </MDBBtn>
                                <MDBBtn rippleColor='danger' color='light'>
                                    Danger
                                </MDBBtn>
                                <MDBBtn rippleColor='info' color='light'>
                                    Info
                                </MDBBtn>
                                <MDBBtn rippleColor='light' color='dark'>
                                    Light
                                </MDBBtn>
                                <MDBBtn rippleColor='dark' color='light'>
                                    Dark
                                </MDBBtn>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                                    <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                        <MDBNavbarItem>
                            <MDBNavbarLink to="#!">
                                <MDBIcon icon="user" className="d-inline-inline" />{' '}
                                <div className="d-none d-md-inline">Sign In</div>
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
    }
}
