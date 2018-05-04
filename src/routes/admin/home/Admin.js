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
import Grid from 'material-ui/Grid';
import Icon from 'material-ui/Icon';

import Link from '../../../components/Link';
import Header from '../../../components/Header';

const styles = theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
  },
  title: {
    textAlign: 'center',
    width: '100%',
    marginTop: 30,
  },
  item: {
    marginTop: 50,
  },
  link: {
    textDecoration: 'none',
    '&:hover': {
      '& $icon': {
        color: '#eeeeee',
      },
    },
  },
  icon: {
    fontSize: 50,
    color: '#dddddd',
    marginBottom: 10,
  },
  iconText: {
    fontSize: 16,
    display: 'block',
    textTransform: 'uppercase',
    color: '#dddddd',
  },
});

const pages = [
  {
    index: 0,
    icon: 'add_box',
    title: 'Add device(s)',
    route: '/admin/add-device',
  },
  {
    index: 1,
    icon: 'store_mall_directory',
    title: 'View accounts',
    route: 'accounts',
  },
  {
    index: 2,
    icon: 'supervisor_account',
    title: 'View users',
    route: 'users',
  },
];

class AdminHome extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Header />
        <Typography className={classes.title} variant="display1" gutterBottom>
          Admin Home
        </Typography>

        <Grid container className={classes.root} spacing={16} justify="center">
          <Grid item xs={12} md={8}>
            <Grid container>
              {pages.map(page => (
                <Grid
                  className={classes.item}
                  key={page.index}
                  item
                  xs={12}
                  md={4}
                >
                  <Link to={page.route} className={classes.link}>
                    <Icon className={classes.icon}>{page.icon}</Icon>
                    <span className={classes.iconText}>{page.title}</span>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(AdminHome);
