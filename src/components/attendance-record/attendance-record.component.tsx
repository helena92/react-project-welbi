import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import Button from '../button/button.component';
import { ProgramTitle } from './attendance-record.styles';

const SET_ATTENDANCE = gql`
  mutation SetAttendance($input: AttendanceInput!) {
    setAttendance(input: $input) {
      status
      resident {
        name
      }
      program {
        name
      }
      programId
      residentId
    }
  }
`;

interface AttendanceInput {
  status: string;
  residentId: string;
  programId: string;
}

interface SetAttendanceData {
  setAttendance: {
    status: string;
    resident: {
      name: string;
    };
    program: {
      name: string;
    };
    programId: string;
    residentId: string;
  };
}

interface AttendanceRecordProps {
  residentId: string;
  residentName: string;
  programId: string;
}

const AttendanceRecord: React.FC<AttendanceRecordProps> = ({ residentId, residentName, programId }) => {
  const [input, setInput] = useState<AttendanceInput>({
    status: 'Active',
    residentId,
    programId
  });
  // eslint-disable-next-line
  const [setAttendance, { data, loading, error }] = useMutation<SetAttendanceData, { input: AttendanceInput }>(SET_ATTENDANCE, {
    variables: {
      input
    },
    context: {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
  });
  
  const attendProgram = () => {
    setInput({
      status: 'Active',
      residentId,
      programId
    });
    setAttendance();
  };
  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ProgramTitle key={programId}>
      {residentName}
      <Button
        buttonType="inverted"
        onClick={attendProgram}
      >
        Attend program
      </Button>
    </ProgramTitle>
  );
};

export default AttendanceRecord;

