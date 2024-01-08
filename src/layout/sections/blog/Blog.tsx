import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {PostCard} from "./PostCard";
import work1 from '../../../assets/images/work1.webp'
import work2 from '../../../assets/images/work2.webp'
import work3 from '../../../assets/images/work3.webp'

const postItems = [
    {
        link: '#',
        imgSrc: work1,
        imgAlt: 'work1',
        title: 'How to make web tempates',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna '
    },
    {
        link: '#',
        imgSrc: work2,
        imgAlt: 'work2',
        title: 'make Business card',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna '
    },
    {
        link: '#',
        imgSrc: work3,
        imgAlt: 'work3',
        title: 'How to make Flyer Design',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna '
    }
]

export const Blog = () => {
    return (
        <StyledBlog>
            <FlexWrapper direction={'column'} align={'center'}>

                <SectionTitle title={'Blog'}/>
                <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                    duis enim velit mollit. lorem ipsum
                </p>

                <FlexWrapper justify={'space-between'}>

                    {postItems.map(item =>
                        <PostCard
                            link={item.link}
                            imgSrc={item.imgSrc}
                            imgAlt={item.imgAlt}
                            title={item.title}
                            description={item.text}
                        />
                    )}

                </FlexWrapper>

            </FlexWrapper>
        </StyledBlog>
    );
};

const StyledBlog = styled.section`
  background-color: #e3fadd;
`