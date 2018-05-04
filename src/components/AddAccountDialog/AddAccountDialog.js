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
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

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
    error={Boolean(touched && error)}
    helperText={touched ? error : ''}
  />
);

const AddAccountDialog = ({ open, handleClose, handleSubmit }) => (
  <div>
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <form onSubmit={handleSubmit}>
        <DialogTitle id="form-dialog-title">Add new account</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let us first collect some quick information
          </DialogContentText>

          <Field
            name="nickname"
            label="Nickname"
            component={renderTextField}
            margin="dense"
            fullWidth
          />
          <Field
            name="location"
            label="Location"
            component={renderTextField}
            margin="dense"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary">
            Submit
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  </div>
);

const validate = values => {
  const errors = {};

  if (!values.nickname) {
    errors.nickname = 'Required field';
  }

  return errors;
};

export default reduxForm({
  form: 'AddAccountForm',
  validate,
})(AddAccountDialog);
