import React from 'react';
import {TitleH3} from "../../../components/titleH3/titleH3";
import {Icon} from "../../../components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";

type ServiceCardPropsType = {
    title: string,
    iconId?: string,
    width?: string,
    height?: string,
    viewport?: string,
    description: string,
}

export const ServiceCard = (props: ServiceCardPropsType) => {
    return (
        <StyledServiceCard>
            <FlexWrapper direction={'column'} align={'center'}>
                <Icon iconId={props.iconId || ""} width={props.width} height={props.height} viewBox={props.viewport}/>
                <TitleH3 title={props.title}/>
                <span>{props.description}</span>
            </FlexWrapper>
        </StyledServiceCard>
    );
};

const StyledServiceCard = styled.div`
  background-color: #d4c7fa;
  width: 30%;
  margin: 10px;
`