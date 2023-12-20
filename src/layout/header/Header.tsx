import React from 'react';
import styled from 'styled-components';
import Logo from "../../components/logo/Logo";
import Menu from "../../components/menu/Menu";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <Menu menuItems={items}/>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
  background-color: #67b767;
  display: flex;
  justify-content: space-between;
`

const items = [
    "Home", "Skills", "Works", "Testimony", "Contact"
]