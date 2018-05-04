/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import DataType from 'sequelize';
import bcrypt from 'bcrypt';
import Model from '../sequelize';

const User = Model.define(
  'User',
  {
    id: {
      type: DataType.UUID,
      defaultValue: DataType.UUIDV1,
      primaryKey: true,
    },

    firstName: {
      type: DataType.STRING,
      field: 'first_name',
    },

    lastName: {
      type: DataType.STRING,
      field: 'last_name',
    },

    email: {
      type: DataType.STRING(255),
      unique: { args: true, msg: 'This e-mail is already in use' },
      validate: {
        isEmail: { args: true, msg: 'Email is invalid' },
      },
    },

    password: {
      type: DataType.STRING,
      validate: {
        len: { args: [5, 100], msg: 'Password must be atleast 5 characters' },
      },
    },

    role: {
      type: DataType.STRING,
      defaultValue: 'user',
    },

    active: {
      type: DataType.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    hooks: {
      afterValidate: async user => {
        // eslint-disable-next-line no-param-reassign
        user.password = await bcrypt.hash(user.password, 12);
      },
    },
  },
);

export default User;
