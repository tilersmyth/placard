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

const styles = theme => ({
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

const LoginForm = ({ classes, handleSubmit, errors }) => (
  <form className={classes.container} onSubmit={handleSubmit}>
    <Field
      name="email"
      label="E-mail"
      component={renderTextField}
      className={classes.textField}
      margin="normal"
    />

    <Field
      name="password"
      label="Password"
      component={renderTextField}
      className={classes.textField}
      margin="normal"
      type="password"
    />

    <Grid container spacing={24} className={classes.action}>
      <Grid item xs={12} sm={5}>
        <Button
          variant="raised"
          className={classes.button}
          color="primary"
          type="submit"
        >
          Login
        </Button>
      </Grid>

      <Grid item xs={12} sm={7}>
        <Link to="/signup" className={classes.link}>
          Lost your password?
        </Link>
      </Grid>
    </Grid>
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
  form: 'LoginForm',
  validate,
})(withStyles(styles)(LoginForm));
