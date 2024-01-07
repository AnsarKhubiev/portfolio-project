import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {PriceCard} from "../../../components/priceCard/PriceCard";

export const Prices = () => {
    return (
        <FlexWrapper direction={'column'}>
            <SectionTitle title={'Price plans'}/>
            <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
                enim velit mollit. lorem ipsum
            </p>

            <FlexWrapper justify={'space-between'}>
                <PriceCard title={'silver'} price={'$0.00'} popular={false} services={[
                    {service: 'UI Design', available: true},
                    {service: 'web development', available: true},
                    {service: 'logo design', available: false},
                    {service: 'seo optimization', available: false},
                    {service: 'wordPress integration', available: false},
                    {service: '5 Websites', available: false},
                    {service: 'unlimited user', available: false},
                    {service: '20 gB bandwith', available: false},
                    {service: 'UI Design', available: false},
                ]}
                />

                <PriceCard title={'gold'} price={'$50.00'} popular={true} services={[
                    {service: 'UI Design', available: true},
                    {service: 'web development', available: true},
                    {service: 'logo design', available: false},
                    {service: 'seo optimization', available: false},
                    {service: 'wordPress integration', available: false},
                    {service: '5 Websites', available: false},
                    {service: 'unlimited user', available: false},
                    {service: '20 gB bandwith', available: false},
                    {service: 'UI Design', available: false},
                ]}
                />

                <PriceCard title={'dimond'} price={'$80.00'} popular={false} services={[
                    {service: 'UI Design', available: true},
                    {service: 'web development', available: true},
                    {service: 'logo design', available: false},
                    {service: 'seo optimization', available: false},
                    {service: 'wordPress integration', available: false},
                    {service: '5 Websites', available: false},
                    {service: 'unlimited user', available: false},
                    {service: '20 gB bandwith', available: false},
                    {service: 'UI Design', available: false},
                ]}
                />
            </FlexWrapper>

        </FlexWrapper>
    );
};

