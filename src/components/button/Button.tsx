import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {FlexWrapper} from "../FlexWrapper";

type ButtonPropsType = {
    type?: 'button' | 'submit' | 'reset',
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
    borderRadius?: string
}

export const Button = (props: ButtonPropsType) => {
    return (
        <StyledButton
            type={props.type || 'button'}
            textColor={props.textColor}
            border={props.border || 'none'}
            btnColor={props.btnColor || '#FFB400'}
            btnWidth={props.btnWidth}
            btnHeight={props.btnHeight}
            padding={props.padding}
            borderRadius={props.borderRadius}
        >

            <FlexWrapper
                direction={props.direction}
                justify={props.justify}
                align={props.align}
                wrap={props.wrap}
                gap={props.gap}
            >

                {props.text}

                {props.iconId && <Icon
                    iconId={props.iconId}
                    color={props.iconColor}
                    viewBox={props.iconViewBox}
                    height={props.iconHeight}
                    width={props.iconWidth}
                />}
            </FlexWrapper>

        </StyledButton>
    );
};

const StyledButton = styled.button<ButtonPropsType>`
  width: ${props => props.btnWidth};
  height: ${props => props.btnHeight};
  padding: ${props => props.padding};;
  background-color: ${props => props.btnColor};
  color: ${props => props.textColor};
  border: ${props => props.border};
  border-radius: ${props => props.borderRadius};
  text-decoration: none;
`