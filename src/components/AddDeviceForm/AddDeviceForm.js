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
import ChipInput from 'material-ui-chip-input';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from 'material-ui/IconButton';

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
  chipContainer: {
    minHeight: 'auto',
    marginTop: '16px !important',
    marginBottom: 0,
  },
  chipField: {
    width: '100%',
    marginBottom: 20,
    marginTop: -5,
  },
  addBtnContainer: {
    display: 'block',
    width: '100%',
    marginTop: 30,
    marginBottom: 40,
  },
});

class AddDeviceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { devices: [{ name: '' }] };
  }

  addDevice = () => {
    // const newInput = `input-${this.state.inputs.length}`;
    // this.setState({ inputs: this.state.inputs.concat([newInput]) });
    this.setState({
      devices: this.state.devices.concat([{ name: '' }]),
    });
  };

  removeDevice = idx => {
    this.setState({
      devices: this.state.devices.filter((s, sidx) => idx !== sidx),
    });
  };

  handleChange = chip => {
    console.log(chip);
  };

  renderTextField = ({
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

  render() {
    const { classes, handleSubmit, errors } = this.props;
    const { devices } = this.state;
    return (
      <form className={classes.container} onSubmit={handleSubmit}>
        {devices.map((device, idx) => (
          <Grid container className={classes.root} spacing={16} key={idx}>
            <Grid item xs={10}>
              <Grid container spacing={16}>
                <Grid item xs={12} md={5}>
                  <Field
                    name={`id-${idx}`}
                    label="Device ID"
                    component={this.renderTextField}
                    className={classes.textField}
                  />
                </Grid>
                <Grid item xs={12} md={7}>
                  <ChipInput
                    defaultValue={[]}
                    onChange={domain => this.handleChange(domain, device)}
                    label="Whitelist domains"
                    className={classes.chipField}
                    classes={{ chipContainer: classes.chipContainer }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2}>
              <IconButton aria-label="Delete">
                <DeleteIcon
                  onClick={() => {
                    this.removeDevice(idx);
                  }}
                />
              </IconButton>
            </Grid>
          </Grid>
        ))}
        <div className={classes.addBtnContainer}>
          <Button onClick={this.addDevice}>Add device</Button>
        </div>
      </form>
    );
  }
}

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
  form: 'AddDeviceForm',
  validate,
})(withStyles(styles)(AddDeviceForm));
