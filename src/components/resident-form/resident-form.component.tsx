
import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { ResidentFormContainer } from './resident-form.styles';

export enum LEVELS_OF_CARE {
  INDEPENDENT = 'INDEPENDENT',
  ASSISTED = 'ASSISTED',
  MEMORY = 'MEMORY',
  LONGTERM = 'LONGTERM',
}

export enum AMBULATION {
  NOLIMITATIONS = 'NOLIMITATIONS',
  CANE = 'CANE',
  WALKER = 'WALKER',
  WHEELCHAIR = 'WHEELCHAIR',
}

export type LevelOfCare = keyof typeof LEVELS_OF_CARE | '';
type Ambulation = keyof typeof AMBULATION | '';

interface FormFields {
  firstName: string;
  lastName: string;
  preferredName: string;
  status: string;
  room: string;
  ambulation: Ambulation;
  levelOfCare: LevelOfCare;
  birthDate: string;
  moveInDate: string;
}

const defaultFormFields: FormFields = {
  firstName: '',
  lastName: '',
  preferredName: '',
  status: '',
  room: '',
  birthDate: '',
  moveInDate: '',
  ambulation: '',
  levelOfCare: ''
};

const ADD_RESIDENT = gql`
  mutation createResident($input: ResidentInput!) {
    createResident(input: $input) {
      id,
      name,
      preferredName,
      status,
      firstName,
      lastName,
      room,
      birthDate,
      moveInDate,
      createdAt,
      updatedAt,
      ambulation,
      levelOfCare
    }
  }
`;

const ResidentForm: React.FC = () => {
  const [formFields, setFormFields] = useState<FormFields>(defaultFormFields);
  const { firstName, lastName, preferredName, status, room, birthDate, moveInDate, ambulation, levelOfCare } = formFields;
  const [err, setError] = useState<string | undefined>(undefined);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  // eslint-disable-next-line 
  const [addResident, { data, loading, error: mutationError }] = useMutation(ADD_RESIDENT, {
    context: {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    },
  });

  const createResident = () => {
    addResident({ variables: { input: { name: `${firstName} ${lastName}`, ...formFields } } });
  };

  if (loading) return <p>Loading...</p>;
  if (mutationError) return <p>Error: {mutationError.message}</p>;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const ambulationValues = Object.keys(AMBULATION);
    const levelsOfCare = Object.keys(LEVELS_OF_CARE);

    if (!ambulationValues.includes(ambulation)) {
      setError(`Error: Ambulation value must be one of ${ambulationValues.join(", ")}`);
      return;
    }

    if (!levelsOfCare.includes(levelOfCare)) {
      setError(`Error: Level of Care value must be one of ${levelsOfCare.join(", ")}`);
      return;
    }

    setError('');

    try {
      createResident();
      resetFormFields();
    } catch (error) {
      console.error(error);
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <ResidentFormContainer>
      <h2>Create a new resident</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="First Name"
          type="text"
          required
          onChange={handleChange}
          name="firstName"
          value={formFields.firstName}
        />

        <FormInput
          label="Last Name"
          type="text"
          required
          onChange={handleChange}
          name="lastName"
          value={lastName}
        />

        <FormInput
          label="Preferred Name"
          type="text"
          required
          onChange={handleChange}
          name="preferredName"
          value={preferredName}
        />

        <FormInput
          label="Status"
          type="text"
          onChange={handleChange}
          name="status"
          value={status}
        />

        <FormInput
          label="Room"
          type="text"
          required
          onChange={handleChange}
          name="room"
          value={room}
        />

        <FormInput
          label="Ambulation"
          type="text"
          required
          onChange={handleChange}
          name="ambulation"
          value={ambulation}
        />

        <FormInput
          label="Level Of Care"
          type="text"
          required
          onChange={handleChange}
          name="levelOfCare"
          value={levelOfCare}
        />

        <FormInput
          label="Birth Date"
          type="date"
          required
          onChange={handleChange}
          name="birthDate"
          value={birthDate}
        />

        <FormInput
          label='Move In Date'
          type='date'
          required
          onChange={handleChange}
          name='moveInDate'
          value={moveInDate}
        />

        <Button type='submit'>Submit</Button>
        {err && <div style={{ color: "red" }}>{err}</div>}
      </form>
    </ResidentFormContainer>
  );
};

export default ResidentForm;
