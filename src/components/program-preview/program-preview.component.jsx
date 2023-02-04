import {
    ProgramPreviewContainer,
    Title,
} from './program-preview.styles';

const ProgramPreview = ({ id, programInfo: { name, start, end, location } }) => {
    return (
        <ProgramPreviewContainer>
            <h2>
                <Title to={id}>{name}</Title>
            </h2>
            <p>Start: {start}</p>
            <p>End: {end}</p>
            <p>Location: {location}</p>
        </ProgramPreviewContainer>
    );
};

export default ProgramPreview;
