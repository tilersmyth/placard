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
import List, { ListItem, ListItemText } from 'material-ui/List';
import Menu, { MenuItem } from 'material-ui/Menu';
import ExpandMore from 'material-ui-icons/ExpandMore';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  flex: {
    flex: 1,
  },
  root: {
    position: 'relative',
    display: 'inline-flex',
    marginLeft: 30,
  },
  nav: {
    padding: 0,
  },
  list: {
    paddingRight: 100,
  },
  listInner: {
    paddingRight: 100,
    position: 'relative',
  },
  default: {
    position: 'absolute',
    right: 0,
    top: 10,
    fontSize: '.7rem',
    color: theme.palette.primary.main,
  },
  listSub: {
    color: '#999999',
  },
  icon: {
    position: 'absolute',
    right: 5,
  },
});

const HeaderAccounts = ({
  anchorEl,
  accountId,
  accounts,
  classes,
  handleMenu,
  handleClose,
  selectAccount,
  currentAccount,
}) => (
  <div className={classes.flex}>
    <div className={classes.root}>
      <List component="nav" className={classes.nav}>
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="lock-menu"
          aria-label="When device is locked"
          className={classes.list}
          onClick={handleMenu}
        >
          <ListItemText
            primary={currentAccount.nickname}
            secondary={currentAccount.location}
          />
          <ExpandMore className={classes.icon} />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {accounts.map(option => (
          <MenuItem
            key={option.id}
            selected={option.id === currentAccount.id}
            onClick={() => {
              selectAccount(option.id);
            }}
          >
            <div className={classes.listInner}>
              {option.nickname}
              <Typography className={classes.listSub}>
                {option.location}
              </Typography>
              {option.default && (
                <Typography variant="button" className={classes.default}>
                  default
                </Typography>
              )}
            </div>
          </MenuItem>
        ))}
      </Menu>
    </div>
  </div>
);

export default withStyles(styles)(HeaderAccounts);
