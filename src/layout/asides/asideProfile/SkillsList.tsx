import React from 'react';
import {TitleH3} from "../../../components/titleH3/titleH3";
import styled from "styled-components";
import Icons from "../../../assets/images/icons-sprite.svg";


type SkillsListType = {
    skills: Array<string>
}

export const SkillsList = (props: SkillsListType) => {
    return (
        <div>
            <TitleH3 title={'Extra Skills'} />

            <StyledList>
                {props.skills.map((item) =>(
                    <li>{item}</li>
                ))}
            </StyledList>

        </div>
    );
};

const StyledList = styled.ul`
  padding: 20px;
  list-style: none;
  li::before {
    content: url(${Icons}#fsfsfsd);
  }
`