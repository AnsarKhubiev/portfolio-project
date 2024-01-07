import React from 'react';
import styled from "styled-components";

export const PersonInfo = () => {
    return (
        <StyledPersonInfo>
            <tbody>
            <tr>
                <th>Age:</th>
                <td>24</td>
            </tr>
            <tr>
                <th>Residence:</th>
                <td>BD</td>
            </tr>
            <tr>
                <th>Freelance:</th>
                <td>Available</td>
            </tr>
            <tr>
                <th>Address:</th>
                <td>Dhaka,Bangladesh</td>
            </tr>
            </tbody>
        </StyledPersonInfo>
    );
};

const StyledPersonInfo = styled.table`
  background-color: #ddf8a3;
  width: 100%;
  th {
    text-align: start;
  }
  td {
    text-align: end;
  }
`
