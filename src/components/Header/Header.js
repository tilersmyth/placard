/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import HeaderMenu from './Menu';
import HeaderAccounts from './Accounts';
import Responsive from '../Responsive';
import history from '../../history';
import logoutQuery from './logout.graphql';
import logo from './logo.png';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  logo: {
    marginRight: 5,
  },
};

class Header extends React.Component {
  state = {
    anchorEl: null,
    accountAnchor: null,
  };

  accountMenu = event => {
    this.setState({ accountAnchor: event.currentTarget });
  };

  accountMenuClose = () => {
    this.setState({ accountAnchor: null });
  };

  selectAccount = id => {
    // history.push(`/accounts/${id}`);
    this.setState({ accountAnchor: null });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  logout = async () => {
    const { data } = await this.props.mutate();

    if (data.logout) {
      history.push('/logout');
    }
  };

  render() {
    const { classes, user, account } = this.props;
    const { anchorEl, accountAnchor } = this.state;
    const open = Boolean(anchorEl);
    return (
      <AppBar position="static" color="default">
        <Responsive bp={[12, 11, 10]}>
          <Toolbar>
            <img className={classes.logo} src={logo} />
            <Typography
              variant="title"
              color="primary"
              className={
                user.id && user.accounts.length > 0 && account
                  ? ''
                  : classes.flex
              }
            >
              Placard
            </Typography>
            {user.id &&
              user.accounts.length > 0 &&
              account && (
                <HeaderAccounts
                  anchorEl={accountAnchor}
                  handleMenu={this.accountMenu}
                  handleClose={this.accountMenuClose}
                  accounts={user.accounts}
                  selectAccount={this.selectAccount}
                  currentAccount={account}
                />
              )}
            <HeaderMenu
              user={user}
              open={open}
              anchorEl={anchorEl}
              handleMenu={this.handleMenu}
              handleClose={this.handleClose}
              logout={this.logout}
            />
          </Toolbar>
        </Responsive>
      </AppBar>
    );
  }
}

const HeaderWithData = graphql(logoutQuery)(Header);

const mapStateToProps = state => ({
  user: state.user,
  ...state.account,
});

export default connect(mapStateToProps)(withStyles(styles)(HeaderWithData));
