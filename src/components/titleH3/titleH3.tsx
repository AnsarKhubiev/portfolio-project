import React from 'react';
import styled from "styled-components";

type TitleH3PropsType = {
    title: string
}

export const TitleH3 = (props: TitleH3PropsType) => {
    return (
        <StyledTitleH3>
            {props.title}
        </StyledTitleH3>
    );
};

const StyledTitleH3 = styled.h3`

`