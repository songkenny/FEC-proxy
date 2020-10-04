import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/styles.css';

const Reviews = ({ rating, count }) => {
  const starbar = [];
  for (let i = 0; i < Math.floor(rating); i += 1) {
    starbar.push(
      <svg width="100%" height="100%" viewBox="0 0 50 49" key={i}>
        <g stroke="none" strokeWidth="1" fill="#FFD500">
          <path d="M49.9,18.1 C49.3,16.2 47.1,15.9 47.1,15.9 L34,13.9 L28,2 C28,2 27,0 25,0 C23,0 22,2 22,2 L16.1,13.9 L3,15.9 C3,15.9 0.8,16.2 0.2,18.1 C-0.4,20 1.2,21.6 1.2,21.6 L10.8,31 L8.3,44 C8.3,44 7.9,46.2 9.5,47.4 C11.1,48.6 13.1,47.6 13.1,47.6 L25,41.8 L37.1,47.7 C37.1,47.7 39.1,48.7 40.7,47.5 C42.3,46.3 41.9,44.1 41.9,44.1 L39.4,31.1 L49,21.7 C48.9,21.6 50.5,20 49.9,18.1 Z" fillRule="nonzero" />
        </g>
      </svg>,
    );
  }
  const ratingDecimal = rating - Math.floor(rating);
  if (ratingDecimal >= 0.25 && ratingDecimal < 0.75) {
    starbar.push(
      <svg display="block" width="100%" height="100%" viewBox="0 0 28 27" key={starbar.length}>
        <g stroke="none" strokeWidth="1">
          <g fill="#FFCF00" fillRule="nonzero">
            <path d="M13.7254902,23.0326531 L13.7254902,0 C12.627451,0 12.0784314,1.10204082 12.0784314,1.10204082 L8.83921569,7.65918367 L1.64705882,8.76122449 C1.64705882,8.76122449 0.439215686,8.92653061 0.109803922,9.97346939 C-0.219607843,11.0204082 0.658823529,11.9020408 0.658823529,11.9020408 L5.92941176,17.0816327 L4.55686275,24.244898 C4.55686275,24.244898 4.3372549,25.4571429 5.21568627,26.1183673 C6.09411765,26.7795918 7.19215686,26.2285714 7.19215686,26.2285714 L13.7254902,23.0326531 Z" />
          </g>
          <g transform="translate(13.725490, 0.000000)" fill="#CCCCCC" fillRule="nonzero">
            <path d="M13.6705882,9.97346939 C13.3411765,8.92653061 12.1333333,8.76122449 12.1333333,8.76122449 L4.94117647,7.65918367 L1.64705882,1.10204082 C1.64705882,1.10204082 1.09803922,0 0,0 C0,0 0,0 0,0 L0,23.0326531 L6.64313725,26.2836735 C6.64313725,26.2836735 7.74117647,26.8346939 8.61960784,26.1734694 C9.49803922,25.5122449 9.27843137,24.3 9.27843137,24.3 L7.90588235,17.1367347 L13.1764706,11.9571429 C13.1215686,11.9020408 14,11.0204082 13.6705882,9.97346939 Z" />
          </g>
        </g>
      </svg>,
    );
  } else if (ratingDecimal >= 0.75) {
    starbar.push(
      <svg width="100%" height="100%" viewBox="0 0 50 49" key={starbar.length}>
        <g stroke="none" strokeWidth="1" fill="#FFD500">
          <path d="M49.9,18.1 C49.3,16.2 47.1,15.9 47.1,15.9 L34,13.9 L28,2 C28,2 27,0 25,0 C23,0 22,2 22,2 L16.1,13.9 L3,15.9 C3,15.9 0.8,16.2 0.2,18.1 C-0.4,20 1.2,21.6 1.2,21.6 L10.8,31 L8.3,44 C8.3,44 7.9,46.2 9.5,47.4 C11.1,48.6 13.1,47.6 13.1,47.6 L25,41.8 L37.1,47.7 C37.1,47.7 39.1,48.7 40.7,47.5 C42.3,46.3 41.9,44.1 41.9,44.1 L39.4,31.1 L49,21.7 C48.9,21.6 50.5,20 49.9,18.1 Z" fillRule="nonzero" />
        </g>
      </svg>,
    );
  }
  for (let i = starbar.length; i < 5; i += 1) {
    starbar.push(
      <svg width="100%" height="100%" viewBox="0 0 50 49" key={i}>
        <g stroke="none" strokeWidth="1" fill="#CACACA">
          <path d="M49.9,18.1 C49.3,16.2 47.1,15.9 47.1,15.9 L34,13.9 L28,2 C28,2 27,0 25,0 C23,0 22,2 22,2 L16.1,13.9 L3,15.9 C3,15.9 0.8,16.2 0.2,18.1 C-0.4,20 1.2,21.6 1.2,21.6 L10.8,31 L8.3,44 C8.3,44 7.9,46.2 9.5,47.4 C11.1,48.6 13.1,47.6 13.1,47.6 L25,41.8 L37.1,47.7 C37.1,47.7 39.1,48.7 40.7,47.5 C42.3,46.3 41.9,44.1 41.9,44.1 L39.4,31.1 L49,21.7 C48.9,21.6 50.5,20 49.9,18.1 Z" fillRule="nonzero" />
        </g>
      </svg>,
    );
  }
  return (
    <div className="reviews">
      {/* <div className={styles.stars}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </div> */}
      <div className={styles.stars}>
        {starbar}
      </div>
      <span className={styles.reviewText}>
        <span className={styles.reviewCount}>{`${count} `}</span>
        {`Reviews (${rating})`}
      </span>
    </div>
  );
};

Reviews.propTypes = {
  rating: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
};

export default Reviews;
