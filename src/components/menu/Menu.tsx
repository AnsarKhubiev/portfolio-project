import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";

type MenuPropsType = {
    menuItems: Array<{
        title: string,
        url: string,
        selected: boolean
    }>
}

export const Menu = (props: MenuPropsType) => {
    return (
        <StyledMenu>
            <FlexWrapper justify={'space-between'} gap={'37px'}>
                {props.menuItems.map((item, index) => (
                    <li key={index}>
                        <a href={item.url}>{item.title}</a>
                    </li>
                ))}
            </FlexWrapper>
        </StyledMenu>
    );
};


const StyledMenu = styled.ul`
  list-style: none;
`