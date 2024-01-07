import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {ServiceCard} from "../../../components/serviceCard/ServiceCard";
import {TitleH3} from "../../../components/titleH3/titleH3";
import {Icon} from "../../../components/icon/Icon";


export const Services = () => {
    return (
        <StyledServices>
            <SectionTitle title={'my services'}/>
            <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
                enim velit mollit. lorem ipsum
            </p>
            <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                <ServiceCard
                    title={'web development'}
                    iconId={'coding'}
                    width={'68'}
                    height={'68'}
                    viewport={'0 0 68 68'}
                    description={"dasdass"}
                />

                <ServiceCard
                    title={'uI/uX design'}
                    iconId={'illustration'}
                    width={'68'}
                    height={'68'}
                    viewport={'0 0 68 68'}
                    description={"Mobile app, website design"}
                />

                <ServiceCard
                    title={'sound design'}
                    iconId={'microphone'}
                    width={'74'}
                    height={'74'}
                    viewport={'0 0 74 74'}
                    description={"Voice Over, Beat Making"}
                />

                <ServiceCard
                    title={'game design'}
                    iconId={'gameDevelopment'}
                    width={'74'}
                    height={'74'}
                    viewport={'0 0 74 74'}
                    description={"dasdass"}
                />

                <ServiceCard
                    title={'photography'}
                    iconId={'photographer'}
                    width={'78'}
                    height={'78'}
                    viewport={'0 0 78 78'}
                    description={"portrait, product photography"}
                />

                <AdvertisementCard>
                    <FlexWrapper direction={'column'} align={'center'}>
                        <TitleH3 title={'advertising'}/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna
                            viverra morbi. </p>
                        <a href="#">
                            order now
                            <Icon
                                iconId={'GreaterThanSign'}
                                width={'20'}
                                height={'20'}
                                viewBox={'20'}
                            />
                        </a>
                    </FlexWrapper>
                </AdvertisementCard>


            </FlexWrapper>
        </StyledServices>
    );
};

const StyledServices = styled.section`
  background-color: #fad9c2;
`

const AdvertisementCard = styled.div`
  background-color: #d4c7fa;
  width: 30%;
  margin: 10px;
`