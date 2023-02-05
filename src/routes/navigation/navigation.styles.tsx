import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavLinks = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
`;

const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

export { NavLinks, NavLink };
