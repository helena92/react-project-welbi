import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavLinks = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 25px;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
