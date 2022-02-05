import PropTypes from "prop-types";
import { CastListStyled, CastPhoto, CastName, Label } from "./CastList.styled";

const CastList = ({ cast }) => (
  <CastListStyled>
    {cast.map((item) => (
      <li key={item.id}>
        <CastPhoto src={item.profile_path} alt={item.name} />
        <CastName>{item.name}</CastName>
        <p>
          <Label>Character:</Label> {item.character}
        </p>
      </li>
    ))}
  </CastListStyled>
);

CastList.propTypes = {
  cast: PropTypes.array.isRequired,
};

export default CastList;
