import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/FlexWrapper";

type ContactInfoCardPropsType = {
    contactItems: {
        iconId: string,
        addressItems: Array<{ name: string, value: string }>
    }
}

export const ContactInfoCard = (props: ContactInfoCardPropsType) => {
    return (
        <StyledContactInfoCard>
            <FlexWrapper direction={'column'}>
                <Icon iconId={props.contactItems.iconId} />
                <table>
                    <tbody>
                    {props.contactItems.addressItems.map(item => (
                        <tr>
                            <th>{item.name}:</th>
                            <td>{item.value}:</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </FlexWrapper>
        </StyledContactInfoCard>

    );
};


const StyledContactInfoCard = styled.div`
border: 1px solid black;
  margin-bottom: 10px;
`