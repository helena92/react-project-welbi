import { useContext, Fragment } from 'react';

import { ProgramsContext } from '../../contexts/programs.context';
import ProgramPreview from '../../components/program-preview/program-preview.component';
import {
    NavLinks,
    NavLink,
  } from './programs-preview.styles';

const ProgramsPreview = () => {
    const programs = useContext(ProgramsContext);
    return (
        <Fragment>
            <NavLinks>
                <NavLink to='/programs/add'>ADD PROGRAM</NavLink>
            </NavLinks>
            {programs.map(({ id, ...programInfo }) => {
                return (
                    <ProgramPreview key={id} id={id} programInfo={programInfo} />
                );
            })}
        </Fragment>
    );
};

export default ProgramsPreview;
