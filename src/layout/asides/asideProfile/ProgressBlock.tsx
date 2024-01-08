import React from 'react';
import styled from "styled-components";

type ProgressBlockPropsType = {
    name?: string,
    value: number
}

export const ProgressBlock = (props: ProgressBlockPropsType) => {
    return (
        <StyledProgressBlock>
            <tr>
                <th>{props.name}</th>
                <td>{props.value}%</td>
            </tr>
            <tr>
                <td colSpan={2}>
                    <StyledProgressBar value={props.value}>
                        <div/>
                    </StyledProgressBar>
                </td>
            </tr>
        </StyledProgressBlock>
    );
};


const StyledProgressBlock = styled.table`
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;

  th {
    text-align: start;
  }

  td {
    text-align: end;
  }
`

const StyledProgressBar = styled.div<ProgressBlockPropsType>`
  
  height: 5px;
  border: 0.5px solid #FFB400;
  border-radius: 2.25px;
  
  div {
    width: calc(${(props) => props.value}% - 2.4px);
    height: 2px;
    background-color: #FFB400;
    border-radius: 1px;
    margin: 1.2px 1.2px 1.2px 1.2px;
  }

`