import React from 'react';
import styled from "styled-components";
import {TitleH3} from "../titleH3/titleH3";

type WorkEduTimelinePropsType = {
    info: Array<{
        place: string,
        certificate: string,
        position: string,
        date: string,
        description: string
    }>
}

export const WorkEduTimeline = (props: WorkEduTimelinePropsType) => {
    return (
        <StyledWorkEduTimeline>
            {props.info.map(item => (
                <tbody>
                    <tr>
                        <th colSpan={2}><TitleH3 title={item.place}/></th>
                        <th><TitleH3 title={item.certificate}/></th>
                    </tr>
                    <tr>
                        <td>{item.position}</td>
                        <td>{item.date}</td>
                        <td>{item.description}</td>
                    </tr>
                </tbody>
            ))}
        </StyledWorkEduTimeline>
    )
};


const StyledWorkEduTimeline = styled.table`
  border-collapse: collapse;

  th, td {
    border: 1px solid black;
  }
`