/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../../components/Layout';
import Detail from './NoAccounts';

const title = 'No accounts available';

function action({ store }) {
  const { user } = store.getState();

  // Redirect if accounts exist for user
  if (user.accounts.length > 0) {
    // Default account
    for (let i = 0; user.accounts.length > i; i++) {
      if (user.accounts[i].default) {
        return { redirect: `/accounts/${user.accounts[i].id}` };
      }
    }
    // Catch all, first account
    return { redirect: `/accounts/${user.accounts[0].id}` };
  }

  return {
    chunks: ['accounts-none'],
    title,
    component: (
      <Layout>
        <Detail title={title} />
      </Layout>
    ),
  };
}

export default action;
