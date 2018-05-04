import { Account } from 'data/models';
import requiresAuth from '../../../permissions';

export const queries = [
  `
  allAccounts: [Account!]!
`,
];

export const resolvers = {
  RootQuery: {
    allAccounts: requiresAuth.createResolver(async (parent, args, { user }) => {
      const account = await Account.findAll(
        { where: { owner: user.id } },
        { raw: true },
      );

      if (account.length < 1) {
        return [];
      }

      return account;
    }),
  },
};
