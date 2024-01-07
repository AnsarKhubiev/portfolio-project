import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";

const socialItems = [
    {social: 'facebook', url: '#'},
    {social: 'instagram', url: '#'},
    {social: 'twitter', url: '#'},
    {social: 'linkedin', url: '#'},
    {social: 'youtube', url: '#'},
    {social: 'dribbble', url: '#'},
]

export const SocialLinks = () => {
    return (
        <StyledSocialLinks>
            <FlexWrapper justify={'space-between'}>
                {socialItems.map(item => (
                    <li>
                        <a href={item.url}>
                            <Icon
                                iconId={item.social}
                                width={'14'}
                                height={'14'}
                                viewBox={'0 0 14 14'}
                            />
                        </a>
                    </li>
                ))}
            </FlexWrapper>
        </StyledSocialLinks>
    );
};

const StyledSocialLinks = styled.ul`
  list-style: none;

  li {
    background-color: #FFB400;
    width: 24px;
    height: 24px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`