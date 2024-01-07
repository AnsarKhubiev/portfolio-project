import React from 'react';
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import styled from "styled-components";
import {Slider} from "../../../components/slider/Slider";

export const Recommendations = () => {
    return (
        <StyledRecommendations>
            <SectionTitle title={'recommendations'}/>
            <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
                enim velit mollit. lorem ipsum
            </p>
            <Slider/>
        </StyledRecommendations>
    );
};

const StyledRecommendations = styled.section`
  background-color: #debb93;
`
