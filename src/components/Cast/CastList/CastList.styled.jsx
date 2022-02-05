import styled from "styled-components";

export const CastListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
  padding: 0;
  margin: 0 auto;
  list-style: none;
  max-width: calc(100vw - 80px);
`;

export const CastPhoto = styled.img`
  margin-bottom: 10px;
  border-radius: 10px;
`;

export const CastName = styled.p`
  color: #ff6c00;
`;

export const Label = styled.span`
  color: #ff8c00;
`;
