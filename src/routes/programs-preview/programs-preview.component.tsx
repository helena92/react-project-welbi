import React, { Fragment, useContext } from 'react';
import { ProgramsContext, ProgramsContextProps } from '../../contexts/programs.context';
import ProgramPreview from '../../components/program-preview/program-preview.component';
import Button from '../../components/button/button.component';
import { NavLinks, NavLink } from './programs-preview.styles';

const ProgramsPreview: React.FC = () => {
  const { programs } = useContext<ProgramsContextProps>(ProgramsContext);
  return (
    <Fragment>
      <NavLinks>
        <NavLink to='/programs/add'>
          <Button>ADD PROGRAM</Button>
        </NavLink>
      </NavLinks>
      {programs.map((program) => (
        <ProgramPreview key={program.id} {...program} />
      ))}
    </Fragment>
  );
};

export default ProgramsPreview;
