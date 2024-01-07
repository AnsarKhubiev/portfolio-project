import React from 'react';
import styled from "styled-components";

type WorkImgPropsType = {
    src: string,
    alt: string
}

export const WorkImg = (props: WorkImgPropsType) => {
    return (
        <StyledWorkImg>
            <img src={props.src} alt={props.alt}/>
        </StyledWorkImg>
    );
};

const StyledWorkImg = styled.div`
width: 30%;
  img {
    width: 100%;
  }
`