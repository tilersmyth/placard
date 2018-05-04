/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Icon from 'material-ui/Icon';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

import Link from '../../../components/Link';
import Header from '../../../components/Header';
import AddAccountForm from '../../../components/AddAccountForm';
import DeviceStepContainer from '../../../containers/DeviceStep';

const styles = theme => ({
  subHead: {
    position: 'relative',
  },
  title: {
    textAlign: 'center',
    width: '100%',
    marginTop: 30,
  },
  link: {
    position: 'absolute',
    top: 0,
    left: 20,
  },
  icon: {
    fontSize: 36,
    color: '#dddddd',
  },
  paper: {
    padding: 20,
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
  },
});

class AdminAddDevice extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header />
        <div className={classes.subHead}>
          <Typography className={classes.title} variant="display1" gutterBottom>
            Add device
          </Typography>
          <Link className={classes.link} to="/admin">
            <Icon className={classes.icon} color="action">
              arrow_back
            </Icon>
          </Link>
        </div>

        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} sm={5}>
            <Paper className={classes.paper}>
              <DeviceStepContainer />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(AdminAddDevice);
