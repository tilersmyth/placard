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
import Button from 'material-ui/Button';
import ArrowBack from '@material-ui/icons/ArrowBack';
import history from '../../history';

const styles = theme => ({
  button: {
    marginBottom: 20,
  },
  icon: {
    marginRight: theme.spacing.unit,
  },
});

const navigate = route => {
  history.push(route);
};

const BackButton = ({ classes, text, route }) => (
  <Button
    aria-label="Back"
    className={classes.button}
    onClick={() => {
      navigate(route);
    }}
  >
    <ArrowBack className={classes.icon} /> {text}
  </Button>
);

export default withStyles(styles)(BackButton);
