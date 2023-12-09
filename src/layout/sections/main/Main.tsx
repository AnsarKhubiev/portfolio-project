import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/avatar.webp';
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (

        <StyledMain>
            <FlexWrapper justify={"space-around"} align={"center"}>
                <div>
                    <span>Hi There</span>
                    <Name>I am Ansar Khubiev</Name>
                    <MainTitle>A Web Developer</MainTitle>
                </div>

                <div>
                    <Photo src={photo} alt="photo"/>
                </div>
            </FlexWrapper>
        </StyledMain>
    );
};

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`

const StyledMain = styled.div`
background-color: antiquewhite;
  height: 100vh;
`

const MainTitle = styled.h1`

`

const Name = styled.h2 `

`
