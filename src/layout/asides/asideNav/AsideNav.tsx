import React from 'react';
import styled from "styled-components";
import {NavBar} from "./navBar";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/button/Button";

const navItems = [
    {title: 'Home', iconId: 'home', iconColor: '#2B2B2B', link: '#', btnColor: '#FFB400'},
    {title: 'My services', iconId: 'fileCode', iconColor: '#767676', link: '#', btnColor: '#F0F0F6'},
    {title: 'CV', iconId: 'cv', iconColor: '#767676', link: '#', btnColor: '#F0F0F6'},
    {title: 'Portfolio', iconId: 'portfolio', iconColor: '#767676', link: '#', btnColor: '#F0F0F6'},
    {title: 'Blog', iconId: 'blog', iconColor: '#767676', link: '#', btnColor: '#F0F0F6'},
    {title: 'Contact', iconId: 'contact', iconColor: '#767676', link: '#', btnColor: '#F0F0F6'},
]


export const AsideNav = () => {
    return (
        <StyledAsideNav>

            <FlexWrapper direction={'column'} align={'center'} gap={'212px'}>
                <Button
                    iconId={'darkMode'}
                    iconHeight={'30'}
                    iconWidth={'30'}
                    iconViewBox={'0 0 30 30'}
                    btnColor={'transparent'}
                />
                <NavBar items={navItems}/>
            </FlexWrapper>

        </StyledAsideNav>
    );
};

const StyledAsideNav = styled.aside`
  height: 100vh;
  width: 108px;
  background-color: #d3f8ce;
  position: sticky;
  top: 0;
`