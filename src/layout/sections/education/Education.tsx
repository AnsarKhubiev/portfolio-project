import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {WorkEduTimeline} from "../../../components/workEduTimeline/WorkEduTimeline";
import styled from "styled-components";

export const Education = () => {
    return (
        <StyledEducation>
            <FlexWrapper direction={'column'} align={'center'}>

                <SectionTitle title={'Education'}/>

                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                    duis
                    enim velit mollit. lorem ipsum</p>

                <WorkEduTimeline
                    info={[
                        {
                            place: 'University of Toronto',
                            certificate: 'Certificate of web training',
                            position: 'Student',
                            date: 'Jan 1016 - Dec 2021',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.'
                        },
                        {
                            place: 'Programming Course',
                            certificate: 'Certificate of web training',
                            position: 'Student',
                            date: 'Jan 1016 - Dec 2021',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.'
                        },
                        {
                            place: 'Web developer courses',
                            certificate: 'Certificate of web training',
                            position: 'Student',
                            date: 'Jan 1016 - Dec 2021',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.'
                        }

                    ]}
                />

            </FlexWrapper>
        </StyledEducation>
    );
};

const StyledEducation = styled.section`
  background-color: #cbfabe;
`