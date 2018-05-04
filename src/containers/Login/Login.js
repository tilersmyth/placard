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
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import history from '../../history';
import AuthHeader from '../../components/AuthHeader';
import LoginForm from '../../components/LoginForm';
import Link from '../../components/Link';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
  },
  paper: {
    padding: '40px 20px',
  },
  title: {
    fontWeight: 800,
    marginBottom: 30,
  },
  link: {
    color: theme.palette.link,
    textDecoration: 'none',
    marginTop: 10,
    display: 'block',
  },
});

class LoginContainer extends React.Component {
  state = { errors: {} };

  submit = async values => {
    const { email, password } = values;

    const response = await this.props.mutate({
      variables: { email, password },
    });

    const { ok, errors } = response.data.login;

    if (ok) {
      history.push('/accounts');
      return;
    }

    const err = {};
    errors.forEach(({ path, message }) => {
      err[`${path}`] = message;
    });

    this.setState({ errors: err });
  };

  render() {
    const { classes } = this.props;
    const { errors } = this.state;

    return (
      <Grid
        container
        className={classes.root}
        justify="center"
        alignItems="center"
      >
        <Grid item xs={10} sm={6} md={4} lg={3}>
          <AuthHeader />
          <Paper className={classes.paper}>
            <Typography variant="headline" className={classes.title}>
              Login
            </Typography>
            <LoginForm onSubmit={this.submit} errors={errors} />
          </Paper>
          <Link to="/signup" className={classes.link}>
            Need an account? Sign up here
          </Link>
        </Grid>
      </Grid>
    );
  }
}

const loginMutation = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      ok
      token
      errors {
        path
        message
      }
    }
  }
`;

const LoginWithData = graphql(loginMutation)(LoginContainer);

export default withStyles(styles)(LoginWithData);
