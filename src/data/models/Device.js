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

const Device = Model.define('Device', {
  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
  },

  deviceId: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    unique: true,
  },

  nickname: {
    type: DataType.STRING,
  },

  url: {
    type: DataType.STRING,
  },

  whitelist: {
    type: DataType.ARRAY(DataType.STRING),
    defaultValue: [],
  },
});

export default Device;
