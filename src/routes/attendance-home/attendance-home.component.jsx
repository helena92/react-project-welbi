import { Fragment, useContext } from 'react';
import { useParams } from 'react-router-dom';
import AttendanceRecord from '../../components/attendance-record/attendance-record.component';
import { AttendanceContainer } from './attendance-home.styles';
import { ProgramsContext } from '../../contexts/programs.context';

const AttendanceHome = () => {
  const programs = useContext(ProgramsContext);
  const { residentId } = useParams();
  return (
        <Fragment>
          <AttendanceContainer>
            {programs &&
              programs.map(({name, id}) => (
                  <AttendanceRecord key={id} residentName={name} programId={id} residentId={residentId} />
              ))}
          </AttendanceContainer>
        </Fragment>
  );
};

export default AttendanceHome;
