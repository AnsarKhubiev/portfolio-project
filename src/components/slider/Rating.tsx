import React from 'react';
import {FlexWrapper} from "../FlexWrapper";
import {Icon} from "../icon/Icon";

type RatingPropsType = {
    value: number
}

const Rating = (props: RatingPropsType) => {

    const arrayOfStars = Array(props.value).fill(null)

    return (

        <FlexWrapper gap={'10px'}>
            {arrayOfStars.map(() => (
                <Icon iconId={'star'}/>
            ))}
        </FlexWrapper>

    );
};

export default Rating;