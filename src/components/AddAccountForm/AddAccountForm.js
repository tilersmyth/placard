/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';

import Link from '../Link';
import UserAutoComplete from '../UserAutoComplete';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: '100%',
    marginBottom: 20,
  },
  action: {
    marginTop: 20,
  },
  button: {
    width: '100%',
  },
  link: {
    color: theme.palette.link,
    textDecoration: 'none',
    lineHeight: '36px',
    verticalAlign: 'middle',
  },
});

const renderTextField = ({
  input,
  label,
  errors,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    label={label}
    {...input}
    {...custom}
    error={Boolean((touched && errors) || (touched && error))}
    helperText={touched ? error || errors : ''}
  />
);

const AddAccountForm = ({ classes, handleSubmit, errors }) => (
  <form className={classes.container} onSubmit={handleSubmit}>
    <Grid container className={classes.root} spacing={16}>
      <Grid item xs={12} md={6}>
        <Field
          name="name"
          label="Name"
          component={renderTextField}
          className={classes.textField}
          margin="normal"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <UserAutoComplete />
      </Grid>
    </Grid>
    <Button
      variant="raised"
      className={classes.button}
      color="primary"
      type="submit"
    >
      Create account
    </Button>
  </form>
);

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  }

  if (!values.password) {
    errors.password = 'Required';
  }

  return errors;
};

export default reduxForm({
  form: 'AddAccountForm',
  validate,
})(withStyles(styles)(AddAccountForm));
