
import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { ResidentFormContainer } from './resident-form.styles';

import { gql, useMutation } from '@apollo/client';

const defaultFormFields = {
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

const allowedAmbulationValues = ["NOLIMITATIONS", "CANE", "WALKER", "WHEELCHAIR"];
const allowedLevelOfCareValues = ["INDEPENDENT", "ASSISTED", "MEMORY", "LONGTERM"];

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
}`

const ResidentForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { firstName, lastName, preferredName, status, room, birthDate, moveInDate, ambulation, levelOfCare } = formFields;
  const [err, setError] = useState("");

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const [addResident, { data, loading, error }] = useMutation(ADD_RESIDENT, {
    context: {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
  });

  const createResident = () => {
    addResident({ variables: { input: { name: `${firstName} ${lastName}`, ...formFields } } });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!allowedAmbulationValues.includes(ambulation)) {
      setError("Error: Ambulation value must be one of " + allowedAmbulationValues.join(", "));
      return null;
    }

    if (!allowedLevelOfCareValues.includes(levelOfCare)) {
      setError("Error: Level of Care value must be one of " + allowedLevelOfCareValues.join(", "));
      return null;
    }

    setError("");

    try {
      createResident();
      resetFormFields();
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <ResidentFormContainer>
      <h2>Create a new resident</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='First Name'
          type='text'
          required
          onChange={handleChange}
          name='firstName'
          value={firstName}
        />

        <FormInput
          label='Last Name'
          type='text'
          required
          onChange={handleChange}
          name='lastName'
          value={lastName}
        />

        <FormInput
          label='Preferred Name'
          type='text'
          required
          onChange={handleChange}
          name='preferredName'
          value={preferredName}
        />

        <FormInput
          label='Status'
          type='text'
          onChange={handleChange}
          name='status'
          value={status}
        />

        <FormInput
          label='Room'
          type='text'
          required
          onChange={handleChange}
          name='room'
          value={room}
        />

        <FormInput
          label='Ambulation'
          type='text'
          required
          onChange={handleChange}
          name='ambulation'
          value={ambulation}
        />

        <FormInput
          label='Level Of Care'
          type='text'
          required
          onChange={handleChange}
          name='levelOfCare'
          value={levelOfCare}
        />

        <FormInput
          label='Birth Date'
          type='date'
          required
          onChange={handleChange}
          name='birthDate'
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
