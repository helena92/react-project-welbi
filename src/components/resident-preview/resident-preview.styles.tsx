import styled from 'styled-components';
import { Link, LinkProps } from 'react-router-dom';

interface TitleProps extends LinkProps {}

export const ResidentPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const Title = styled(Link)<TitleProps>`
  font-size: 18px;
  margin-bottom: 25px;
  cursor: pointer;
`;
