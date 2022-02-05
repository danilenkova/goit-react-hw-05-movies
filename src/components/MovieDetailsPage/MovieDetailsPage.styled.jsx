import styled from "styled-components";

export const MovieCard = styled.div`
  max-width: 90%;
  margin: 20px auto 0;
  padding: 20px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const MovieInfo = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Poster = styled.img`
  display: block;
  max-width: 100%;
  height: 500px;
  border-radius: 10px;
`;

export const MovieInfoDetails = styled.div`
  display: block;
  padding: 20px;
`;

export const MovieTitle = styled.h2`
  margin-bottom: 20px;
  color: #ff6c00;
`;

export const Title = styled.h3`
  margin-bottom: 20px;
  color: #ff8c00;
`;

export const Text = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
`;

export const InfoList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 20px;
`;

export const InfoItem = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;
