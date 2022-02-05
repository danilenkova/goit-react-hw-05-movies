import { TailSpin } from "react-loader-spinner";
import { LoaderContainer } from "./Loader.styled";

const Loader = () => {
  return (
    <LoaderContainer>
      <TailSpin
        arialLabel="loading-indicator"
        color="#8ec5fc"
        heigth="40px"
        width="40px"
      />
    </LoaderContainer>
  );
};

export default Loader;
