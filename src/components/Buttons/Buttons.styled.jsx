import styled from "styled-components";

export const LoadMore = styled.button`
  display: flex;
  width: 200px;
  height: 40px;
  margin: 0 auto;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  padding: 12px;
  font-weight: 500;
  font-size: 24px;
  border: 1px solid #ff6c00;
  border-radius: 10px;
  color: #ffffff;
  background-color: #ff6c00;
`;

export const SearchButtonStyled = styled.button`
  position: relative;
  cursor: pointer;
  display: block;
  height: 40px;
  width: 60px;
  border: 0;
  padding: 0;
  border-radius: 0 20px 20px 0;
  background-color: #ff8c00;
  color: #ffffff;
  text-shadow: -1px -2px 1px #000;
  :disabled {
    color: #ffffff;
    background-color: #ff8c00;
    background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
  }
  :focus,
  :hover {
    color: #ffffff;
    background-color: #ff6c00;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Reset = styled.button`
  position: absolute;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  padding: 0;
  right: 60px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #ffffff;
  border: none;
  background: transparent;
  svg: {
    width: 30px;
    height: 30px;
    fill: currentColor;
  }
  :hover {
    color: #ff8c00;
  }
`;
