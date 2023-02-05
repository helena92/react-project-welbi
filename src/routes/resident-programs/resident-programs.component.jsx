import { Fragment, useContext } from 'react';
import { useParams } from 'react-router-dom';
import AttendanceRecord from '../../components/attendance-record/attendance-record.component';
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
                  <AttendanceRecord key={id} residentName={name} programId={id} residentId={residentId} />
              ))}
          </ProgramsContainer>
        </Fragment>
  );
};

export default ResidentPrograms;
