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
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  card: {
    width: '100%',
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabsRoot: {
    borderBottom: '1px solid #e8e8e8',
  },
  tabsIndicator: {
    backgroundColor: theme.palette.primary.main,
  },
  tabRoot: {
    textTransform: 'initial',
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing.unit * 4,
    '&:hover': {
      color: theme.palette.primary.main,
      opacity: 1,
    },
    '&$tabSelected': {
      color: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: theme.palette.primary.main,
    },
  },
  tabSelected: {},
  typography: {
    padding: theme.spacing.unit * 3,
  },
});

class DeviceContainer extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <Card className={classes.card}>
        <div className={classes.root}>
          <Tabs
            value={value}
            onChange={this.handleChange}
            classes={{
              root: classes.tabsRoot,
              indicator: classes.tabsIndicator,
            }}
          >
            <Tab
              disableRipple
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              label="Interactions"
            />
            <Tab
              disableRipple
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              label="Configuration"
            />
            <Tab
              disableRipple
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              label="Preferences"
            />
          </Tabs>
          <Typography className={classes.typography}>Ant Design</Typography>
        </div>
      </Card>
    );
  }
}

export default withStyles(styles)(DeviceContainer);
