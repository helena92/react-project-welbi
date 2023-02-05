import React from 'react';
import { ProgramPreviewContainer, Title } from './program-preview.styles';

interface ProgramPreviewProps {
    id: string;
    name: string;
    start: string;
    end: string;
    location: string;
}

const ProgramPreview: React.FC<ProgramPreviewProps> = ({ id, name, start, end, location }) => {
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
