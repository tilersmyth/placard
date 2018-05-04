import { Account, Device } from 'data/models';
import { requiresAccountAccess } from '../../../permissions';
import Model from '../../../sequelize';

export const queries = [
  `
  GetAccount(id: String!): Account!
`,
];

export const resolvers = {
  Account: {
    devices: args =>
      Model.query('SELECT * FROM "Device" WHERE account_id = ?', {
        replacements: [args.id],
        model: Device,
        raw: true,
      }),
  },
  RootQuery: {
    GetAccount: requiresAccountAccess.createResolver(
      async (parent, args, { user }) => {
        const account = await Account.findOne(
          { where: { id: args.id } },
          { raw: true },
        );

        return account;
      },
    ),
  },
};
