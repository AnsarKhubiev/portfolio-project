import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {LinkButton} from "../../../components/linkButton/LinkButton";

const socialItems = [
    {social: 'facebook', title: 'Facebook', url: '#'},
    {social: 'instagram', title: 'Instagram', url: '#'},
    {social: 'twitter', title: 'Twitter', url: '#'},
    {social: 'linkedin', title: 'Linkedin', url: '#'},
    {social: 'youtube', title: 'Youtube', url: '#'},
    {social: 'dribbble', title: 'Dribbble', url: '#'},
]

export const SocialLinks = () => {
    return (
        <StyledSocialLinks>
            <FlexWrapper justify={'space-between'}>
                {socialItems.map(item => (

                    <LinkButton
                        link={item.url}
                        title={item.title}
                        iconId={item.social}
                        iconWidth={'14px'}
                        iconHeight={'14px'}
                        iconViewBox={'0 0 14 14'}
                        btnWidth={'24px'}
                        btnHeight={'24px'}
                        borderRadius={'12px'}
                        justify={'center'}
                        align={'center'}
                    />

                ))}
            </FlexWrapper>
        </StyledSocialLinks>
    );
};

const StyledSocialLinks = styled.ul`
  list-style: none;
`