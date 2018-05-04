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
import Grid from 'material-ui/Grid';

const Responsive = ({ children, bp }) => (
  <Grid container justify="center">
    <Grid item xs={bp[0]} md={bp[1]} lg={bp[2]}>
      {children}
    </Grid>
  </Grid>
);

export default Responsive;
