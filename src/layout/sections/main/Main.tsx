import React from 'react';
import photo from '../../../assets/images/avatar.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {Button} from "../../../components/button/Button";
import {LinkButton} from "../../../components/linkButton/LinkButton";

export const Main = () => {
    return (
        <StyledMain>

                <FlexWrapper direction={'column'} align={'flex-start'} justify={'space-around'}>

                    <span>I’m Rayan Adlrdard</span>
                    <h1>Front-end Developer</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.
                    </p>

                    <LinkButton
                        text={'hire me'}
                        iconId={'arrow'}
                        padding={'16px 32px'}
                        gap={'10px'}
                        borderRadius={'5px'}
                        iconViewBox={'0 0 16 16'}
                        iconWidth={'16px'}
                        iconHeight={'16px'}
                        justify={'center'}
                        align={'center'}
                    />

                </FlexWrapper>

                <img src={photo} alt="avatar"/>

        </StyledMain>
    );
};

const StyledMain = styled.div`
  height: 467px;
  display: flex;
  
  background-color: #edd1f8;
`