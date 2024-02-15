import React, { useState } from 'react';
import {
    MDBCollapse, MDBNavbar, MDBNavbarBrand, MDBNavbarNav,
    MDBNavbarItem, MDBNavbarLink, MDBNavbarToggler, MDBContainer, MDBIcon, 
} from 'mdb-react-ui-kit';

export function Header() {

    const [showNav, setShowNav] = useState(true);

    return (
        <MDBNavbar bgColor='dark' color="elegant-color" dark expand='xl'>
            <MDBContainer>
                <MDBNavbarBrand href='/'>
                    <strong className="white-text">Taburette</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler
                    type='button'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={ () => setShowNav(!showNav) } 
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>
                <MDBCollapse open={showNav} navbar>
                    <MDBNavbarNav>
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='home' href="/">Home</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink disabled aria-disabled='true' href="#!">About</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink disabled aria-disabled='true' href="#!">Help</MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right fullWidth={false}>
                        <MDBNavbarItem>
                            <MDBNavbarLink disabled aria-disabled='true' href="#!">
                                <span>Sign&nbsp;In</span>
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}
