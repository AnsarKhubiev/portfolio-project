import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import styled from "styled-components";
import {Menu} from "../../../components/menu/Menu";
import {WorkImg} from "../../../components/workImg/WorkImg";
import work1 from '../../../assets/images/work1.webp'
import work2 from '../../../assets/images/work2.webp'
import work3 from '../../../assets/images/work3.webp'
import work4 from '../../../assets/images/work4.webp'
import work5 from '../../../assets/images/work5.webp'
import work6 from '../../../assets/images/work6.webp'
import work7 from '../../../assets/images/work7.webp'
import work8 from '../../../assets/images/work8.webp'
import work9 from '../../../assets/images/work9.webp'


const items = [
    {title: 'All categories', url: '#', selected: true},
    {title: 'UI Design', url: '#', selected: false},
    {title: 'Web Templates', url: '#', selected: false},
    {title: 'Logo', url: '#', selected: false},
    {title: 'Branding', url: '#', selected: false}
]

const works = [
    {src: work1, alt: "work1"},
    {src: work2, alt: "work2"},
    {src: work3, alt: "work3"},
    {src: work4, alt: "work4"},
    {src: work5, alt: "work5"},
    {src: work6, alt: "work6"},
    {src: work7, alt: "work7"},
    {src: work8, alt: "work8"},
    {src: work9, alt: "work9"},
]


export const Portfolio = () => {
    return (
        <StyledPortfolio>
            <FlexWrapper direction={'column'} align={'center'}>

                <SectionTitle title={'Portfolio'}/>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                    duis enim velit mollit. lorem ipsum</p>
                <Menu menuItems={items}/>

                <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                    {works.map(item => <WorkImg src={item.src} alt={item.alt}/>)}
                </FlexWrapper>

            </FlexWrapper>
        </StyledPortfolio>
    );
};

const StyledPortfolio = styled.section`
  min-height: 100vh;
  background-color: #8f9db7;
`