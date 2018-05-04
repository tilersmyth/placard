/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

import AddAccountDialog from '../../components/AddAccountDialog';

const styles = theme => ({});

class AddAccountContainer extends React.Component {
  state = { open: false };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  submit = async values => {
    const { nickname, location } = values;

    const response = await this.props.mutate({
      variables: { nickname, location },
    });

    const { ok, account, errors } = response.data.createAccount;

    if (ok) {
      console.log(account);
      this.setState({ open: false });
      return;
    }

    console.log(errors);
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div>
        <Typography variant="headline"> Add new account</Typography>
        <Button onClick={this.handleClickOpen}>Add account</Button>
        <AddAccountDialog
          open={open}
          handleClose={this.handleClose}
          onSubmit={this.submit}
        />
      </div>
    );
  }
}

const accountMutation = gql`
  mutation($nickname: String!, $location: String!) {
    createAccount(nickname: $nickname, location: $location) {
      ok
      account {
        id
        nickname
        location
      }
      errors {
        path
        message
      }
    }
  }
`;

const AddAccountWithData = graphql(accountMutation)(AddAccountContainer);

export default withStyles(styles)(AddAccountWithData);
