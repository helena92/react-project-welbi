import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { Title } from './program-card.styles';

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

const ProgramCard = ({ residentId, residentName, programId }) => {
  const [input, setInput] = useState({
    status: 'Active',
    residentId,
    programId
  });

  const [setAttendance, { data, loading, error }] = useMutation(SET_ATTENDANCE, {
    context: {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
  });

  const attendProgram = () => {
    setAttendance({ variables: { input } });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Title key={programId}>
      {residentName}
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={attendProgram}
      >
        Attend program
      </Button>
    </Title>
  );
};

export default ProgramCard;
