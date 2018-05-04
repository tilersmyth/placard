/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import history from '../../history';

const styles = () => ({
  container: {
    paddingRight: 24,
    paddingLeft: 24,
  },
  root: {
    flexGrow: 1,
  },
  title: {
    paddingTop: 40,
    paddingBottom: 40,
  },
  card: {
    paddingBottom: 50,
    position: 'relative',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  device_id: {
    position: 'absolute',
    bottom: 20,
    fontSize: 12,
  },
});

const goToDevice = (accountId, deviceId) => {
  history.push(`/accounts/${accountId}/${deviceId}`);
};

const Devices = ({ classes, account, onMouseOver, onMouseOut, shadow }) => (
  <div className={classes.container}>
    <Typography variant="display2" className={classes.title}>
      Devices
    </Typography>

    <Grid container className={classes.root} spacing={16}>
      {account.devices.map(device => (
        <Grid key={device.id} item xs={12} md={6} lg={3}>
          <Card
            className={classes.card}
            onMouseOver={() => {
              onMouseOver(device.id);
            }}
            onMouseOut={onMouseOut}
            elevation={shadow === device.id ? 3 : 1}
            onClick={() => {
              goToDevice(account.id, device.id);
            }}
          >
            <CardContent>
              <Typography variant="headline" component="h2">
                {device.nickname}
              </Typography>
              <Typography color="textSecondary">{device.url}</Typography>
              <Typography className={classes.device_id} variant="button">
                ID: {device.deviceId}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </div>
);

export default withStyles(styles)(Devices);
