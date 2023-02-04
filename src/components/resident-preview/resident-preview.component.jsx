import {
  ResidentPreviewContainer,
  Title,
} from './resident-preview.styles';

const ResidentPreview = ({ id, resident: { name } }) => {
  return (
    <ResidentPreviewContainer>
      <h2>
        <Title to={id}>{name}</Title>
      </h2>
    </ResidentPreviewContainer>
  );
};

export default ResidentPreview;
