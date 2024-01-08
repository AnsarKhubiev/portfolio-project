import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {ContactInfoCard} from "./ContactInfoCard";
import {Button} from "../../../components/button/Button";


const address = {
    iconId: 'location',
    addressItems: [
        {name: 'Country', value: 'Bangladesh'},
        {name: 'City', value: 'Dhaka'},
        {name: 'Street', value: '35 vhatara, Badda'}
    ]
}

const messengers = {
    iconId: 'mail',
    addressItems: [
        {name: 'Email', value: 'youremail@gmail.com'},
        {name: 'Skype', value: '@yourusername'},
        {name: 'Telegram', value: '@yourusername'}
    ]
}

const phones = {
    iconId: 'mobile',
    addressItems: [
        {name: 'Support services', value: '15369'},
        {name: 'Office', value: '+58 (021)356 587 235'},
        {name: 'Personal', value: '+58 (021)356 587 235'}
    ]
}


export const Contact = () => {
    return (
        <StyledContacts>

            <FlexWrapper direction={'column'}>
                <SectionTitle title={'Leave us your info'}/>
                <StyledForm action="">
                    <Field type="text" placeholder={'name'}/>
                    <Field type="email" placeholder={'email'}/>
                    <Field type="text" placeholder={'subject'}/>
                    <Field as={'textarea'}/>
                    <Button
                        type={'submit'}
                        text={'send message'}
                        border={'none'}
                        iconColor={'red'}
                        btnColor={'#FFB400'}
                    />
                </StyledForm>
            </FlexWrapper>

            <FlexWrapper direction={'column'}>
                <SectionTitle title={'Contact information'}/>
                <ContactInfoCard contactItems={address}/>
                <ContactInfoCard contactItems={messengers}/>
                <ContactInfoCard contactItems={phones}/>
            </FlexWrapper>

        </StyledContacts>
    );
};

const StyledContacts = styled.section`
  background-color: #caf3fd;
  display: flex;
  justify-content: space-between;
`

const StyledForm = styled.form`
  max-width: 570px;
  border: 1px solid black;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

const Field = styled.input`
  width: 100%;
`

const ContactInfo = styled.div`
  max-width: 370px;
  border: 1px solid black
`