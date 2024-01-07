import React from 'react';
import styled from "styled-components";
import {NavBar} from "../../components/navBar/navBar";
import {DarkModeToggle} from "../../components/darkModeToggle/DarkModeToggle";

export const AsideNav = () => {
    return (
        <StyledAsideNav>
            <DarkModeToggle/>
            <NavBar sections={[
                {title: 'Home', iconId: 'home'},
                {title: 'My services', iconId: 'fileCode', color: '#767676'},
                {title: 'CV', iconId: 'cv', color: '#767676'},
                {title: 'Portfolio', iconId: 'portfolio', color: '#767676'},
                {title: 'Blog', iconId: 'blog', color: '#767676'},
                {title: 'Contact', iconId: 'contact', color: '#767676'},
            ]} />
        </StyledAsideNav>
    );
};

const StyledAsideNav = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 108px;
  height: 1315px;
  background-color: #faaeae;
`