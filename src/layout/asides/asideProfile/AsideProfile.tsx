import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/avatar.webp'
import {TitleH3} from "../../../components/titleH3/titleH3";
import {SocialLinks} from "./SocialLinks";
import {PersonInfo} from "./PersonInfo";
import {ProgressBlockList} from "./ProgressBlockList";
import {SkillsList} from "./SkillsList";
import {Icon} from "../../../components/icon/Icon";
import {Button} from "../../../components/button/Button";

export const AsideProfile = () => {
    return (
        <StyledAsideProfile>

            <Avatar/>
            <TitleH3 title={'Rayan Adlardard'}/>
            <span>Front-end Developer</span>
            <SocialLinks/>
            <PersonInfo/>

            <ProgressBlockList
                title={'Languages'}
                skills={[
                    {name: 'Bangla', value: 100},
                    {name: 'English', value: 80},
                    {name: 'Spanish', value: 60},
                ]}
            />

            <ProgressBlockList
                title={'Skills'}
                skills={[
                    {name: 'Html', value: 90},
                    {name: 'CSS', value: 85},
                    {name: 'Js', value: 80},
                    {name: 'PHP', value: 75},
                    {name: 'WordPress', value: 85},
                ]}
            />

            <SkillsList
                skills={[
                    'Bootstrap, Materialize',
                    'Stylus, Sass, Less',
                    'Gulp, Webpack, Grunt',
                    'GIT Knowledge'
                ]}
            />

            <Button
                btnColor={'#FFB400'}
                type={'button'}
                text={'download'}
                iconId={'download'}
                iconWidth={'14'}
                iconHeight={'17'}
                iconViewBox={'0 0 14 17'}
                btnWidth={'220px'}
                justify={'center'}
                gap={'19px'}
                padding={'0 40px'}
            />

        </StyledAsideProfile>
    );
};


const StyledAsideProfile = styled.aside`
  height: 1315px;
  background-color: #c5edf6;
`

const Avatar = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 150px;
  background-image: url(${photo});
  background-color: lightgray;
  background-size: cover;
`