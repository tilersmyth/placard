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

import logo from './logo.png';

const styles = () => ({
  logoContainer: {
    width: '100%',
    textAlign: 'center',
    marginBottom: 30,
  },
});

const AuthHeader = ({ classes }) => (
  <div className={classes.logoContainer}>
    <img src={logo} alt="Placard logo" />
  </div>
);

export default withStyles(styles)(AuthHeader);
