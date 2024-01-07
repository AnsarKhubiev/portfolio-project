import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";

type MenuPropsType = {
    sections: Array<{
        title: string,
        iconId: string,
        color?: string
    }>
}

export const NavBar = (props: MenuPropsType) => {
    return (
        <StyledMenu>
            <ul>
                {props.sections.map(item => (
                    <li>
                        <a href='' title={item.title}>
                            <Icon iconId={item.iconId}
                                  width={'18'}
                                  height={'18'}
                                  viewBox={'0 0 18 18'}
                                  color={item.color}
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    flex-direction: column;
    gap: 42px;
    list-style: none;
  }
`