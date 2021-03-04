import React from 'react';
import { SideBtnWrap } from './SidebarElements';
import { SidebarContainer, Icon, CloseIcon, SidebarLink, SidebarWrapper, SidebarRoute, SidebarMenu } from './SidebarElements';

const SideBar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="projects" onClick={toggle}>
                        Projects
                    </SidebarLink>
                    <SidebarLink to="contactme" onClick={toggle}>
                        Contact Me
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default SideBar
