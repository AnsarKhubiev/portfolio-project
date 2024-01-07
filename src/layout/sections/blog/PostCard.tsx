import React from 'react';
import styled from "styled-components";
import {WorkImg} from "../../../components/workImg/WorkImg";
import {TitleH3} from "../../../components/titleH3/titleH3";
import {Icon} from "../../../components/icon/Icon";

type PostCardPropsType = {
    src: string,
    alt: string,
    title: string,
    text: string
}

export const PostCard = (props: PostCardPropsType) => {
    return (
        <StyledPostCard>
            <WorkImg src={props.src} alt={props.alt}/>
            <TitleH3 title={props.title}/>
            <p>{props.text}</p>
            <a href="#">
                Learn more
                <Icon
                    iconId={'GreaterThanSign'}
                    width={'20'}
                    height={'20'}
                    viewBox={'20'}
                />
            </a>

        </StyledPostCard>
    );
};

const StyledPostCard = styled.div`
width: 30%;
`