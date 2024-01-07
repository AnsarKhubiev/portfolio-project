import React from 'react';
import photo from '../../../assets/images/avatar.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper>

                <FlexWrapper direction={'column'} align={'flex-start'} justify={'space-around'}>

                    <span>I’m Rayan Adlrdard</span>
                    <h1>Front-end Developer</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis.
                        Natoque
                        rutrum semper sed suspendisse nunc lectus.
                    </p>

                    <BtnHireMe href="#">
                        hire me
                        <Icon iconId={'arrow'} width={'16'} height={'16'} viewBox={'0 0 16 16'}/>
                    </BtnHireMe>

                </FlexWrapper>

                <img src={photo} alt="avatar"/>

            </FlexWrapper>

        </StyledMain>
    );
};

const StyledMain = styled.div`
  max-width: 970px;
  height: 467px;
  background-color: #edd1f8;
`

const BtnHireMe = styled.a`
  background-color: #FFB400;
  border-radius: 5px;
  padding: 16px 32px;
`