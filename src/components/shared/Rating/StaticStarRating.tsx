import "../../../assets/styles/rating.css";

interface RatingProps {
  rating: number;
  quantity: number;
}

const StaticStarRating: React.FC<RatingProps> = ({ rating, quantity }) => {
  const roundedRating = Math.round(rating);
  let empty = 5 - roundedRating;
  return (
    <div className="star-rating">
      {[...Array(roundedRating)].map((star) => {
        return (
          <span className="on" key={Math.random()}>
            &#9733;
          </span>
        );
      })}
      {[...Array(empty)].map((star) => {
        return (
          <span className="off" key={Math.random()}>
            &#9733;
          </span>
        );
      })}
      {quantity && <small>{"(" + quantity + ")"}</small>}
    </div>
  );
};

export default StaticStarRating;
