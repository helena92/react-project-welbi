import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { LEVELS_OF_CARE, LevelOfCare } from '../resident-form/resident-form.component';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { ProgramFormContainer } from './program-form.styles';

interface FormFields {
  name: string;
  location: string;
  allDay: boolean;
  isRepeated: boolean;
  tags: string[];
  start: string;
  end: string;
  dimension: string;
  facilitators: string[];
  levelOfCare: LevelOfCare;
  hobbies: string[];
}

const defaultFormFields: FormFields = {
  name: '',
  location: '',
  allDay: false,
  isRepeated: false,
  tags: [],
  start: '',
  end: '',
  dimension: '',
  facilitators: [],
  levelOfCare: '',
  hobbies: [],
};

const ADD_PROGRAM = gql`
  mutation createProgram($input: ProgramInput!) {
    createProgram(input: $input) {
      id
      name
      location
      allDay
      tags
      start
      end
      dimension
      facilitators
      levelOfCare
      hobbies
    }
  }
`;

const ProgramForm: React.FC = () => {
  const [formFields, setFormFields] = useState<FormFields>(defaultFormFields);
  const [err, setError] = useState("");

  const { name, location, allDay, isRepeated, tags, start, end, dimension, facilitators, levelOfCare, hobbies } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  // eslint-disable-next-line 
  const [addProgram, { data, loading, error }] = useMutation(ADD_PROGRAM, {
    context: {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
  });

  const createProgram = () => {
    addProgram({ variables: { input: formFields } });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const levelsOfCare = Object.keys(LEVELS_OF_CARE);

    if (!levelsOfCare.includes(levelOfCare)) {
      setError(`Error: Level of Care value must be one of ${levelsOfCare.join(", ")}`);
      return;
    }

    setError("");

    try {
      createProgram();
      resetFormFields();
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    let formValue: string | string[] | boolean = value;
    if (/^(?:tags|facilitators|hobbies)$/.test(name)) {
      formValue = value.split(",").map((item) => item.trim());
    } else if (type === "checkbox") {
      formValue = checked;
    }

    setFormFields({
      ...formFields,
      [name]: formValue,
    });
  };

  return (
    <ProgramFormContainer>
      <h2>Create a new program</h2>

      <form onSubmit={handleSubmit}>
        <FormInput
          label='Name'
          type='text'
          required
          onChange={handleChange}
          name='name'
          value={name}
        />

        <FormInput
          label='Location'
          type='text'
          required
          onChange={handleChange}
          name='location'
          value={location}
        />

        <FormInput
          label='All Day'
          type='checkbox'
          onChange={handleChange}
          name='allDay'
          value={allDay}
        />

        <FormInput
          label='Is Repeated'
          type='checkbox'
          onChange={handleChange}
          name='isRepeated'
          value={isRepeated}
        />

        <FormInput
          label='Tags'
          type='text'
          required
          onChange={handleChange}
          name='tags'
          value={tags}
        />

        <FormInput
          label='Dimension'
          type='text'
          required
          onChange={handleChange}
          name='dimension'
          value={dimension}
        />

        <FormInput
          label='Facilitators'
          type='text'
          required
          onChange={handleChange}
          name='facilitators'
          value={facilitators}
        />

        <FormInput
          label='Hobbies'
          type='text'
          required
          onChange={handleChange}
          name='hobbies'
          value={hobbies}
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
          label='Start Date'
          type='date'
          required
          onChange={handleChange}
          name='start'
          value={start}
        />

        <FormInput
          label='End Date'
          type='date'
          required
          onChange={handleChange}
          name='end'
          value={end}
        />

        {err && <div style={{ color: "red" }}>{err}</div>}
        
        <Button type='submit'>Submit</Button>
      </form>
    </ProgramFormContainer>
  );
};

export default ProgramForm;
