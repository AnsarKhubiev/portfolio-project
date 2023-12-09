import React from 'react';
import styled from 'styled-components';
import Icon from "../../../../components/icon/Icon";


type SkillPropsType = {
    iconId: string,
    title: string,
    description: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId}/>
            <StyledSkillTitle>{props.title}</StyledSkillTitle>
            <StyledSkillText>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim
            </StyledSkillText>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  width: 30%;
  background-color: rgba(255, 255, 255, 0.4);
  margin: 10px;
`

const StyledSkillTitle = styled.h3`
`

const StyledSkillText = styled.p`

`