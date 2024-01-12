const AreaRating = ({area, rating}) => {
  return (

    <div className={`area ${area.toLowerCase()}`}>
      <div className="area-name">
        <img src={`icon-${area.toLowerCase()}.svg`} alt="" />
        <h4>{area}</h4>
      </div>
      <div className="area-rating">
        <p className="rating-number">{rating} </p>
        <p className="of100">/ 100</p>
      </div>
    </div>
  );
};

export default AreaRating;
