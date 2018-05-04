/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import DataType from 'sequelize';
import Model from '../sequelize';

const Account = Model.define('Account', {
  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
  },

  nickname: {
    type: DataType.STRING,
  },

  location: {
    type: DataType.STRING,
  },

  default: {
    type: DataType.BOOLEAN,
    defaultValue: false,
  },
});

export default Account;
