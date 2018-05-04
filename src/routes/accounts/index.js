/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import userQuery from './user.graphql';
import { userLogin } from '../../actions/setUser';

async function action({ client, store, next }) {
  const {
    data: { me },
  } = await client.query({
    query: userQuery,
  });

  await store.dispatch(userLogin(me));

  const child = await next();
  return child;
}

export default action;
