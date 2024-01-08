import React from 'react';
import iconsSprite from '../../assets/images/icons-sprite.svg'
import styled from "styled-components";

type IconPropsType = {
    iconId: string,
    width?: string,
    height?: string,
    viewBox?: string,
    color?: string
}

export const Icon = (props: IconPropsType) => {
    return (
        <StyledIcon xmlns="http://www.w3.org/2000/svg"
                    width={props.width || '18'}
                    height={props.height || '18'}
                    viewBox={props.viewBox || '0 0 18 18'}
                    fill={props.color || '#1B1B1B'}
        >
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </StyledIcon>
    );
};

const StyledIcon = styled.svg`
`