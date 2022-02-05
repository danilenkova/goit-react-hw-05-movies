import PropTypes from "prop-types";
import { ContainerStyled } from "./Container.styled";

const Container = ({ children }) => (
  <ContainerStyled>{children}</ContainerStyled>
);

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
