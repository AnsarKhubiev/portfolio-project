import React from 'react';
import {FlexWrapper} from "../FlexWrapper";
import {TitleH3} from "../titleH3/titleH3";
import Rating from "./Rating";
import styled from "styled-components";


type RecommendationPropsType = {
    title: string,
    value: number,
    text: string,
    name: string,
    position: string,
    profileImg: string
}

export const Slide = (props: RecommendationPropsType) => {

    return (
        <StyledRecommendation>

            <FlexWrapper direction={'column'}>

                <Rating value={props.value}/>
                <TitleH3 title={props.title}/>
                <p>{props.text}</p>

                <FlexWrapper align={'center'}>
                    <img src={props.profileImg} alt=""/>
                    <div>
                        <TitleH3 title={props.name}/>
                        <span>{props.position}</span>
                    </div>
                </FlexWrapper>

            </FlexWrapper>

        </StyledRecommendation>
    );
};

const StyledRecommendation = styled.div`
  width: 30%;
  background-color: #b5edf8;
`
