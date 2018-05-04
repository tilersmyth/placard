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
import AddDevice from './AddDevice';

const title = 'Admin Add Device';

function action({ store }) {
  const {
    user: { isAuth },
  } = store.getState();

  if (!isAuth) {
    return { redirect: '/login' };
  }

  return {
    chunks: ['admin-add-device'],
    title,
    component: (
      <Layout>
        <AddDevice title={title} />
      </Layout>
    ),
  };
}

export default action;
