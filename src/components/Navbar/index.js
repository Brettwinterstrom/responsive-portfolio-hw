import React from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
import { FaBars } from 'react-icons/fa';


const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/"> Portfolio</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" >About

                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="projects" >Projects

                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact-me" >Contact Me

                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar