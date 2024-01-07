import React from 'react';
import styled from "styled-components";

type SectionTitlePropsType = {
    title: string
}

export const SectionTitle = (props: SectionTitlePropsType) => {
    return (
        <StyledSectionTitle>
            {props.title}
        </StyledSectionTitle>
    );
};

const StyledSectionTitle = styled.h2`

`