import { merge } from 'lodash';

/** * Queries ** */
import {
  queries as GetAllUsersQueries,
  resolvers as GetAllUsersResolver,
} from './users/GetUsers';
import {
  queries as GetLoggedInUserQueries,
  resolvers as GetLoggedInUserResolver,
} from './users/GetLoggedInUser';

import {
  queries as GetAccount,
  resolvers as GetAccountResolver,
} from './accounts/GetAccount';

import {
  queries as GetDevice,
  resolvers as GetDeviceResolver,
} from './devices/GetDevice';

import {
  schema as GetRemoteInput,
  queries as GetRemote,
  resolvers as GetRemoteResolver,
} from './devices/GetRemote';

/** * Mutations ** */
import {
  schema as CreateUserInput,
  mutation as CreateUser,
  resolvers as CreateUserResolver,
} from './users/CreateUser';

import {
  schema as CreateAccountInput,
  mutation as CreateAccount,
  resolvers as CreateAccountResolver,
} from './accounts/CreateAccount';

import {
  mutation as UserLogout,
  resolvers as UserLogoutResolver,
} from './users/UserLogout';

import {
  schema as CreateDeviceInput,
  mutation as CreateDevice,
  resolvers as CreateDeviceResolver,
} from './devices/CreateDevice';

/** * Errors ** */
import errorSchema from './errorSchema';

export const schema = [
  ...CreateUserInput,
  ...errorSchema,
  ...CreateAccountInput,
  ...CreateDeviceInput,
  ...GetRemoteInput,
];

export const queries = [
  ...GetAllUsersQueries,
  ...GetLoggedInUserQueries,
  ...GetAccount,
  ...GetDevice,
  ...GetRemote,
];

export const mutations = [
  ...CreateUser,
  ...CreateAccount,
  ...CreateDevice,
  ...UserLogout,
];

export const resolvers = merge(
  GetAllUsersResolver,
  GetLoggedInUserResolver,
  CreateUserResolver,
  CreateAccountResolver,
  GetAccountResolver,
  CreateDeviceResolver,
  GetDeviceResolver,
  GetRemoteResolver,
  UserLogoutResolver,
);
