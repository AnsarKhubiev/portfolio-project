import React from 'react';
import styled from "styled-components";

type WorkPropsType = {
    src: string
    title: string,
    text: string,
    demoLink: string,
    codeLink: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt={""}/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Link href={props.demoLink}>demo</Link>
            <Link href={props.codeLink}>code</Link>
        </StyledWork>
    );
};

const StyledWork = styled.div`
  max-width: 540px;
  width: 100%;
`

const Image = styled.img`
  height: 260px;
  width: 100%;
  object-fit: cover;
`

const Title = styled.h3`

`

const Text = styled.p`

`

const Link = styled.a`

`