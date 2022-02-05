import PropTypes from "prop-types";
import { ReviewsListStyled, ReviewsItem, Author } from "./ReviewsList.styled";

const ReviewsList = ({ review }) => (
  <ReviewsListStyled>
    {review.map((item) => (
      <ReviewsItem key={item.id}>
        <Author>{item.author}</Author>
        <p>{item.content}</p>
      </ReviewsItem>
    ))}
  </ReviewsListStyled>
);

ReviewsList.propTypes = {
  review: PropTypes.object.isRequired,
};

export default ReviewsList;
