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
import Card, { CardHeader, CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  card: {
    width: '100%',
  },
});

class DeviceStatusContainer extends React.Component {
  render() {
    const { classes, device } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader title={device.nickname} subheader={device.deviceId} />
      </Card>
    );
  }
}

export default withStyles(styles)(DeviceStatusContainer);
