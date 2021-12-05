import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { Star } from '../../ProductListingPage/styledComponents';

const StarRating = ({ count, rating, color, onRating }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const getColor = (index) => {
    if (hoverRating >= index) {
      return color.filled;
    } else if (!hoverRating && rating >= index) {
      return color.filled;
    }
    return color.unfilled;
  };

  const star = useMemo(() => {
    return Array(count)
      .fill(0)
      .map((_, i) => i + 1)
      .map((idx) => {
        console.log(idx);
        return (
          <i
            key={idx}
            onMouseEnter={() => setHoverRating(idx)}
            onMouseLeave={() => setHoverRating(0)}
            style={{ color: getColor(idx), cursor: 'pointer' }}
            className="fas fa-star"
            onClick={() => onRating(idx)}></i>
        );
      });
  }, [count, rating, hoverRating]);

  return <Star>{star}</Star>;
};

StarRating.propTypes = {
  count: PropTypes.number,
  rating: PropTypes.number,
  color: {
    filled: PropTypes.string,
    unfilled: PropTypes.string
  },
  onRating: PropTypes.func
};

StarRating.defaultProps = {
  count: 5,
  rating: 0,
  color: {
    filled: '#56504E',
    unfilled: '#E0AC9D'
  }
};

export default StarRating;
