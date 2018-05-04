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
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: '100%',
    marginBottom: 20,
  },

  names: {
    padding: 12,
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
  [theme.breakpoints.up('md')]: {
    firstName: {
      paddingRight: 5,
    },
    lastName: {
      paddingLeft: 5,
    },
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

const SignupForm = ({ classes, handleSubmit, errors }) => (
  <form className={classes.container} onSubmit={handleSubmit}>
    <Grid container>
      <Grid item xs={12} sm={6} className={classes.firstName}>
        <Field
          name="firstName"
          label="First name"
          component={renderTextField}
          className={classes.textField}
          margin="normal"
        />
      </Grid>

      <Grid item xs={12} sm={6} className={classes.lastName}>
        <Field
          name="lastName"
          label="Last name"
          component={renderTextField}
          className={classes.textField}
          margin="normal"
        />
      </Grid>
    </Grid>
    <Field
      name="email"
      label="E-mail"
      component={renderTextField}
      className={classes.textField}
      errors={errors.email}
      margin="normal"
      type="email"
    />
    <Field
      name="password"
      label="Password"
      component={renderTextField}
      className={classes.textField}
      margin="normal"
      type="password"
      errors={errors.password}
    />
    <Field
      name="confirmPassword"
      label="Confirm Password"
      component={renderTextField}
      className={classes.textField}
      margin="normal"
      type="password"
    />
    <Grid container spacing={24} className={classes.action}>
      <Grid item xs={12} sm={7}>
        <Button
          variant="raised"
          className={classes.button}
          color="primary"
          type="submit"
        >
          Create account
        </Button>
      </Grid>

      <Grid item xs={12} sm={5} />
    </Grid>
  </form>
);

const validate = values => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'Required';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  }

  if (!values.email) {
    errors.email = 'Required';
  }

  if (!values.password) {
    errors.password = 'Required';
  }

  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Passwords must match';
  }

  return errors;
};

export default reduxForm({
  form: 'SignupForm',
  validate,
})(withStyles(styles)(SignupForm));
