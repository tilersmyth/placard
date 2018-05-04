/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import accountQuery from './account.graphql';
import { setAccount } from '../../../actions/setAccount';

async function action({ client, store, params, next }) {
  const {
    data: { GetAccount },
  } = await client.query({
    query: accountQuery,
    variables: { id: params.accountId },
  });

  await store.dispatch(setAccount(GetAccount));

  const child = await next();
  return child;
}

export default action;
