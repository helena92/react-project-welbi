import React from 'react';
import { ResidentPreviewContainer, Title } from './resident-preview.styles';

interface ResidentPreviewProps {
  id: string;
  resident: { name: string };
}

const ResidentPreview: React.FC<ResidentPreviewProps> = ({ id, resident: { name } }) => {
  return (
    <ResidentPreviewContainer>
      <h2>
        <Title to={id}>{name}</Title>
      </h2>
    </ResidentPreviewContainer>
  );
};

export default ResidentPreview;
