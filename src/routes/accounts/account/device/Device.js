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
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Responsive from '../../../../components/Responsive';
import Header from '../../../../components/Header';
import DeviceContainer from '../../../../containers/Device';
import DeviceStatus from '../../../../containers/DeviceStatus';
import BackButton from '../../../../components/BackButton';

const styles = () => ({
  container: {
    marginTop: 10,
    padding: 20,
  },
});

class AccountsDevice extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    const { classes, account, device } = this.props;

    return (
      <div>
        <Header />
        <Responsive bp={[12, 11, 8]}>
          <div className={classes.container}>
            <BackButton route={`/accounts/${account.id}`} text="Devices" />
            <Grid container justify="center" spacing={24}>
              <Grid item xs={12} md={3} lg={4}>
                <DeviceStatus device={device} />
              </Grid>
              <Grid item xs={12} md={9} lg={8}>
                <DeviceContainer />
              </Grid>
            </Grid>
          </div>
        </Responsive>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.account,
});

export default connect(mapStateToProps)(withStyles(styles)(AccountsDevice));
