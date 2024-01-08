import React from 'react';
import styled from "styled-components";
import {WorkImg} from "../../../components/workImg/WorkImg";
import {TitleH3} from "../../../components/titleH3/titleH3";
import {LinkButton} from "../../../components/linkButton/LinkButton";

type PostCardPropsType = {
    link: string,
    imgSrc: string,
    imgAlt: string,
    title: string,
    description: string,

}

export const PostCard = (props: PostCardPropsType) => {
    return (
        <StyledPostCard>
            <WorkImg src={props.imgSrc} alt={props.imgAlt}/>
            <TitleH3 title={props.title}/>
            <p>{props.description}</p>

            <LinkButton
                link={props.link}
                text={'Learn more'}
                iconId={'GreaterThanSign'}
                iconWidth={'20'}
                iconHeight={'20'}
                iconViewBox={'0 0 20 20'}
                btnColor={'transparent'}
                align={'center'}
                textColor={'#FFB400'}

            />

        </StyledPostCard>
    );
};

const StyledPostCard = styled.div`
width: 30%;
`