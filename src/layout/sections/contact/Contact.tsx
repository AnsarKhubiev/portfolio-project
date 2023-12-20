import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button";

export const Contact = () => {
    return (
        <StyledContacts>
            <SectionTitle>Contact</SectionTitle>
            <StyledForm>
                    <Field placeholder={"name"}/>
                    <Field placeholder={"subject"}/>
                    <Field as={"textarea"} placeholder={"message"}/>
            <Button type={"submit"}>Send message</Button>
            </StyledForm>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
  background-color: #eeeea2;
  height: 50vh;
`
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 540px;
  width: 100%;
  gap: 10px;
  margin: 0 auto;
`

const Field = styled.input`

`