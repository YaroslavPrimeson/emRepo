import React, {useEffect, useState} from "react";
import './index.scss'


const Rating = ({ratingProp}) => {
    const [stars, setStars] = useState([])

    useEffect(() => {
            let stars = [];
            for (let i = 0; i < 5; i++) {
                stars.push(
                    <div className={'star'}>
                        {i + 1 <= Math.floor(ratingProp / 2) &&
                        <div className={'starRatingWrapper'}>
                            <div className={'starRating'}></div>
                        </div>
                        }
                        {(ratingProp / 2) % 2 !== 0 && i + 1 === Math.ceil(ratingProp / 2) &&
                        <div className={'starRatingWrapper starRatingHalf'}>
                            <div className={'starRating'}></div>
                        </div>
                        }
                    </div>
                );
            }

            setStars(stars)

        }
        , [])

    return (
        <div className="rating">
            {stars}
        </div>
    );

}

export default Rating;
