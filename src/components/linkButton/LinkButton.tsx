import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {FlexWrapper} from "../FlexWrapper";

type LinkButtonPropsType = {
    link?: string,
    title?: string,
    text?: string,
    iconId?: string,
    textColor?: string,
    border?: string,
    iconColor?: string,
    iconViewBox?: string,
    iconHeight?: string,
    iconWidth?: string,
    btnColor?: string,
    btnWidth?: string,
    btnHeight?: string,
    padding?: string,
    direction?: string,
    justify?: string,
    align?: string,
    wrap?: string
    gap?: string,
    borderRadius?: string,
    lineHeight?: string
}

export const LinkButton = (props: LinkButtonPropsType) => {
    return (
        <StyledLinkButton
            href={props.link || '#'}
            title={props.title}
            textColor={props.textColor}
            border={props.border || 'none'}
            btnColor={props.btnColor || '#FFB400'}
            btnWidth={props.btnWidth}
            btnHeight={props.btnHeight}
            padding={props.padding}
            borderRadius={props.borderRadius}
            lineHeight={props.lineHeight}
        >

            <FlexWrapper
                direction={props.direction}
                justify={props.justify}
                align={props.align}
                wrap={props.wrap}
                gap={props.gap}
            >

                <span>{props.text}</span>


                    {props.iconId && <Icon
                        iconId={props.iconId}
                        color={props.iconColor}
                        viewBox={props.iconViewBox}
                        height={props.iconHeight}
                        width={props.iconWidth}
                    />}

            </FlexWrapper>

        </StyledLinkButton>
    );
};

const StyledLinkButton = styled.a<LinkButtonPropsType>`
  display: inline-block;
  width: ${props => props.btnWidth};
  height: ${props => props.btnHeight};
  padding: ${props => props.padding};
  background-color: ${props => props.btnColor};
  color: ${props => props.textColor || 'inherit'};
  border: ${props => props.border};
  border-radius: ${props => props.borderRadius};
  text-decoration: none;
  line-height: ${props => props.lineHeight};

`