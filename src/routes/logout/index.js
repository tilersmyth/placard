/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { userLogout } from '../../actions/setUser';

async function action({ client, store }) {
  store.dispatch(userLogout());

  // Clear graphql cache
  await client.resetStore();

  return {
    chunks: ['logout'],
    redirect: '/',
  };
}

export default action;
