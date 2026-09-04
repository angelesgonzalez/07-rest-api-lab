import React from 'react';
import { Formik, Form } from 'formik';
import Button from '@mui/material/Button';
import {
  TextFieldComponent,
} from '#common/components';
import { Character } from './character.vm';
import * as classes from './character.styles';

interface Props {
  character: Character;
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave } = props;

  return (
    <Formik
      onSubmit={onSave}
      initialValues={character}
      enableReinitialize={true}
    >
      {() => (
        <Form className={classes.root}>
          <TextFieldComponent name="name" label="Name" disabled />
          <TextFieldComponent name="status" label="Status" disabled />
          <TextFieldComponent name="species" label="Species" disabled />
          <TextFieldComponent name="gender" label="Gender" disabled />
          <TextFieldComponent
            name="bestSentence"
            label="Best sentence"
            multiline={true}
            rows={2}
          />
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
};
