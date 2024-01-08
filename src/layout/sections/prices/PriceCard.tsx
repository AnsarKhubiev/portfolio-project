import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";

type PriceCardPropsType = {
    title?: string,
    price?: string,
    popular: boolean,
    services?: Array<{
        service: string,
        available: boolean
    }>
}

export const PriceCard = (props: PriceCardPropsType) => {
    return (
        <StyledPriceCard>
            
            <FlexWrapper direction={'column'} align={'center'}>

                {props.popular ? <Label>most popular</Label> : ''}

                <h4>{props.title}</h4>

                <FlexWrapper>
                    <span>{props.price}</span>
                    <span>/hour</span>
                </FlexWrapper>

                <span>
                For most businesses that want to optimize web queries
            </span>

                <ul>
                    {props.services !== undefined && props.services.map((item) => (
                        <li>{item.service}</li>
                    ))}
                </ul>

                <OrderBtn popular={props.popular} href='#'>Order now</OrderBtn>
            </FlexWrapper>
            
        </StyledPriceCard>
    );
};

const StyledPriceCard = styled.div`
  background-color: #e8f6b2;
  width: 30%;
`


const OrderBtn = styled.a<PriceCardPropsType>`
  width: 169px;
  height: 38px;
  border-radius: 30px;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.15);
  background-color: ${props => props.popular ? "#FFB400" : '#FFFFFF'};
`

const Label = styled.span`
  background-color: #FFB400;
`