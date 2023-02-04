import { Fragment, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ProgramCard from '../../components/program-card/program-card.component';
import { ProgramsContainer } from './resident-programs.styles';
import { ProgramsContext } from '../../contexts/programs.context';

const ResidentPrograms = () => {
  const programs = useContext(ProgramsContext);
  const { residentId } = useParams();
  return (
        <Fragment>
          <ProgramsContainer>
            {programs &&
              programs.map(({name, id}) => (
                  <ProgramCard key={id} residentName={name} programId={id} residentId={residentId} />
              ))}
          </ProgramsContainer>
        </Fragment>
  );
};

export default ResidentPrograms;
