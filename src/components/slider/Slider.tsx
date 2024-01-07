import React from 'react';
import styled from "styled-components";
import {Slide} from "./Slide";
import profile1 from '../../assets/images/profile1.webp'
import profile2 from '../../assets/images/profile2.webp'
import profile3 from '../../assets/images/profile3.webp'
import {FlexWrapper} from "../FlexWrapper";

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper justify={'space-between'}>
                <Slide
                    title={'Great Quality!'}
                    value={5}
                    text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....'}
                    name={'James Gouse'}
                    position={'position'}
                    profileImg={profile1}
                />

                <Slide
                    title={'Amazing work!!'}
                    value={5}
                    text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....'}
                    name={'Tiana Philips'}
                    position={'Photographer'}
                    profileImg={profile2}
                />

                <Slide
                    title={'Great Quality!'}
                    value={5}
                    text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....'}
                    name={'Talan Westervelt'}
                    position={'Business man'}
                    profileImg={profile3}
                />
            </FlexWrapper>
            <Pagination>
                <span></span>
                <span></span>
                <span></span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Pagination = styled.div`
  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 5px;
    background-color: #407ae1;
  }
`