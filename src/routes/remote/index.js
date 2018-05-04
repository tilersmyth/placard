/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Remote from './Remote';
import RemoteQuery from './remote.graphql';

async function action({ client, params }) {
  const { accountId, deviceId } = params;

  const {
    data: { GetRemote },
  } = await client.query({
    query: RemoteQuery,
    variables: { accountId, deviceId },
  });

  const { device } = GetRemote;

  return {
    title: 'Remote container',
    chunks: ['remote'],
    component: <Remote device={device} />,
  };
}

export default action;
