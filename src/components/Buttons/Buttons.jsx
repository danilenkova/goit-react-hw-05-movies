import PropTypes from "prop-types";
import { ImSearch } from "react-icons/im";
import { VscChromeClose } from "react-icons/vsc";
import { LoadMore, SearchButtonStyled, Reset } from "./Buttons.styled";

export const LoadMoreButton = ({ onClick }) => (
  <LoadMore type="button" className="load-more-btn" onClick={onClick}>
    Load more
  </LoadMore>
);

export const SearchButton = () => (
  <SearchButtonStyled type="submit">
    <ImSearch />
  </SearchButtonStyled>
);

export const ResetButton = ({ onClick }) => (
  <Reset type="reset" onClick={onClick}>
    <VscChromeClose />
  </Reset>
);

LoadMoreButton.propTypes = {
  onSubmit: PropTypes.func,
};

ResetButton.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
