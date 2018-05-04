/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../../../components/Layout';
import Device from './Device';
import deviceQuery from './device.graphql';

const title = 'Device Page';

async function action({ client, params }) {
  const {
    data: { GetDevice },
  } = await client.query({
    query: deviceQuery,
    variables: { id: params.deviceId },
  });

  return {
    chunks: ['accounts-device'],
    title,
    component: (
      <Layout>
        <Device title={title} device={GetDevice} />
      </Layout>
    ),
  };
}

export default action;
