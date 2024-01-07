import React from 'react';
import styled from "styled-components";
import {TitleH3} from "../titleH3/titleH3";
import {ProgressBlock} from "../progressBlock/ProgressBlock";

type ProgressBlockListPropsType = {
    title: string,
    skills: Array<{
        name: string,
        value: number
    }>
}

export const ProgressBlockList = (props: ProgressBlockListPropsType) => {
    return (
        <StyledProgressBlockList>

            <TitleH3 title={props.title}/>

            {props.skills.map(skill => (
                <ProgressBlock name={skill.name} value={skill.value}/>
            ))}

        </StyledProgressBlockList>
    );
};

const StyledProgressBlockList = styled.div`
  background-color: #ffe9e3;
`


