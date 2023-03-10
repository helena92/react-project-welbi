import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const ProgramPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const Title = styled(Link)`
  font-size: 18px;
  margin-bottom: 25px;
  cursor: pointer;
`;
