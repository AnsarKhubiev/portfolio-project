import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {WorkEduTimeline} from "../../../components/workEduTimeline/WorkEduTimeline";

export const WorkHistory = () => {
    return (
        <FlexWrapper direction={'column'} align={'center'}>

            <SectionTitle title={'Work History'}/>

            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</p>

            <WorkEduTimeline
                info={[
                    {
                        place: 'Dell Technologies',
                        certificate: 'Certificate of web training',
                        position: 'Lead Web Designer',
                        date: 'Jan 1016 - Dec 2021',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.'
                    },
                    {
                        place: 'IBM',
                        certificate: 'Certificate of web training',
                        position: 'Junior Web Designer',
                        date: 'Jan 1016 - Dec 2021',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.'
                    },
                    {
                        place: 'HP Enterprise',
                        certificate: 'Certificate of web training',
                        position: 'Senior Web Designer',
                        date: 'Jan 1016 - Dec 2021',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.'
                    }

                ]}
            />

        </FlexWrapper>
    );
};