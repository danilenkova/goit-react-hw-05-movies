import { Link } from "react-router-dom";
import styled from "styled-components";

export const MovieGallery = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(224px, 1fr));
  grid-gap: 20px;
  padding: 0;
  margin: 0 auto 20px;
  list-style: none;
  max-width: calc(100vw - 100px);
`;

export const MovieGalleryItem = styled.li`
  display: block;
  overflow: hidden;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.6);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.5), 0px 1px 1px 0px rgba(0, 0, 0, 0.5),
    0px 2px 1px -1px rgba(0, 0, 0, 0.5);
  :hover {
    transform: scale(1.03);
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.6), 0px 2px 2px rgba(0, 0, 0, 0.5),
      1px 2px 3px rgba(0, 0, 0, 0.5), inset 0px 1px 1px rgba(0, 0, 0, 0.12),
      inset 0px 4px 4px rgba(0, 0, 0, 0.15),
      inset 1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const MovieGalleryPoster = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

export const MovieGalleryTitle = styled.div`
  display: flex;
  align-items: baseline;
  height: 60px;
  padding: 10px;
`;

export const Title = styled.h3`
  font-size: 16px;
  text-decoration: none;
  color: #ffffff;
`;
