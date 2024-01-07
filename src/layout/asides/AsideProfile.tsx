import React from 'react';
import styled from "styled-components";
import photo from '../../assets/images/avatar.webp'
import {TitleH3} from "../../components/titleH3/titleH3";
import {SocialLinks} from "../../components/socialLinks/SocialLinks";
import {PersonInfo} from "../../components/personInfo/PersonInfo";
import {ProgressBlockList} from "../../components/progressBlockList/ProgressBlockList";
import {SkillsList} from "../../components/skillsList/SkillsList";
import {Icon} from "../../components/icon/Icon";

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

            <DownloadBtn href="#">
                download cv
                <Icon iconId={'download'} width={'14'} height={'17'} viewBox={'0 0 14 17'} />
            </DownloadBtn>

        </StyledAsideProfile>
    );
};


const StyledAsideProfile = styled.aside`
  width: 375px;
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

const DownloadBtn = styled.a`
  background-color: #FFB400;
  width: 220px;
  height: 40px;
`