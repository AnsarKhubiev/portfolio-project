import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper justify={'center'} align={'center'} gap={'15px'}>
                <Icon
                    iconId={'copyright'}
                    width={'24'}
                    height={'24'}
                    viewBox={'0 0 24 24'}
                />
                <span>2021 All Rights Reserved.Ojjomedia</span>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  height: 60px;
  background-color: #b5d3a9;
  //display: flex;
  //justify-content: center;
  //align-items: center;
  //gap: 15px;
`
