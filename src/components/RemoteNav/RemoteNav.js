/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import HomeIcon from '@material-ui/icons/Home';
import history from '../../history';

const styles = () => ({
  root: {
    position: 'absolute',
    bottom: 50,
    left: 50,
  },
});

const goToHome = url => {
  document.getElementById('remote').src = url;
};

const RemoteNav = ({ classes, url }) => (
  <div className={classes.root}>
    <Button variant="fab" color="primary" aria-label="add">
      <HomeIcon
        onClick={() => {
          goToHome(url);
        }}
      />
    </Button>
  </div>
);

export default withStyles(styles)(RemoteNav);
