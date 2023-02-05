import { useContext, Fragment } from 'react';

import { ProgramsContext } from '../../contexts/programs.context';
import ProgramPreview from '../program-preview/program-preview.component';

const ProgramsPreview = ({ children }) => {
    const programs = useContext(ProgramsContext);
    return (
        <Fragment>
            {programs.map(({ id, ...programInfo }) => {
                return (
                    <Fragment>
                        <ProgramPreview key={id} id={id} programInfo={programInfo} />
                        {children}
                    </Fragment>
                );
            })}
        </Fragment>
    );
};

export default ProgramsPreview;
