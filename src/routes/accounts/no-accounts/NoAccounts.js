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
import Responsive from '../../../components/Responsive';
import Header from '../../../components/Header';

const styles = () => ({
  title: {
    textAlign: 'center',
    width: '100%',
    marginTop: 50,
  },
});

class AccountsNone extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header />
        <Responsive bp={[12, 11, 8]}>
          <Typography className={classes.title} variant="display2" gutterBottom>
            No accounts available
          </Typography>
        </Responsive>
      </div>
    );
  }
}

export default withStyles(styles)(AccountsNone);
