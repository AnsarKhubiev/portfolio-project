import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";

export const DarkModeToggle = () => {
    return (
        <StyledToggle>
            <Icon iconId={'darkMode'} viewBox={'0 0 30 30'} height={'30'} width={'30'}/>
        </StyledToggle>
    );
};

const StyledToggle = styled.a`

`