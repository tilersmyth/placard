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
import SignupForm from '../../components/SignupForm';
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

class SignupContainer extends React.Component {
  state = { errors: {} };

  submit = async values => {
    const { firstName, lastName, email, password } = values;

    const response = await this.props.mutate({
      variables: { firstName, lastName, email, password },
    });

    const { ok, user, errors } = response.data.signup;

    if (ok) {
      history.push('/');
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
    console.log(errors);
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
              Signup
            </Typography>
            <SignupForm onSubmit={this.submit} errors={errors} />
          </Paper>
          <Link to="/" className={classes.link}>
            Already have an account? Login here
          </Link>
        </Grid>
      </Grid>
    );
  }
}

const signupMutation = gql`
  mutation(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    signup(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      ok
      user {
        id
        firstName
        lastName
        email
      }
      errors {
        path
        message
      }
    }
  }
`;

const signupWithData = graphql(signupMutation)(SignupContainer);

export default withStyles(styles)(signupWithData);
