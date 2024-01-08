import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {LinkButton} from "../../../components/linkButton/LinkButton";

type MenuPropsType = {
    items: Array<{
        link: string,
        title: string,
        iconId: string,
        iconColor: string,
        btnColor: string
    }>
}

export const NavBar = (props: MenuPropsType) => {
    return (

        <StyledMenu>
            {props.items.map(item => (
                <LinkButton
                    link={item.link}
                    title={item.title}
                    iconId={item.iconId}
                    justify={'center'}
                    align={'center'}
                    btnWidth={'40px'}
                    btnHeight={'40px'}
                    btnColor={item.btnColor}
                    iconColor={item.iconColor}
                    borderRadius={'20px'}
                />
            ))}
        </StyledMenu>
    );
};

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 43px;
`