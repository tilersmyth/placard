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
import Responsive from '../../../../components/Responsive';
import Header from '../../../../components/Header';
import Devices from '../../../../components/Devices';

const styles = () => ({
  title: {
    textAlign: 'center',
    width: '100%',
    marginTop: 50,
  },
});

class AccountsHome extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { shadow: null };
  }

  onMouseOver = id => this.setState({ shadow: id });
  onMouseOut = () => this.setState({ shadow: null });

  render() {
    const { classes, account } = this.props;
    const { shadow } = this.state;

    return (
      <div>
        <Header />
        <Responsive bp={[12, 11, 10]}>
          {!account.devices || account.devices.length === 0 ? (
            <Typography
              className={classes.title}
              variant="display2"
              gutterBottom
            >
              This account has no devices
            </Typography>
          ) : (
            <Devices
              account={account}
              onMouseOver={this.onMouseOver}
              onMouseOut={this.onMouseOut}
              shadow={shadow}
            />
          )}
        </Responsive>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.account,
});

export default connect(mapStateToProps)(withStyles(styles)(AccountsHome));
