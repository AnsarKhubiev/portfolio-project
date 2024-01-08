import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {LinkButton} from "../../../components/linkButton/LinkButton";

type MenuPropsType = {
    menuItems: Array<{
        title: string,
        link: string,
        textColor: string
    }>
}

export const Menu = (props: MenuPropsType) => {
    return (
        <StyledMenu>

                {props.menuItems.map((item) => (

                    <LinkButton
                        link={item.link}
                        text={item.title}
                        btnColor={'transparent'}
                        textColor={item.textColor}
                    />

                ))}

        </StyledMenu>
    );
};


const StyledMenu = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`