import { Account, Member } from 'data/models';
import formatErrors from '../../../formatErrors';
import requiresAuth from '../../../permissions';
import Model from '../../../sequelize';

export const schema = [
  `
  type Account {
    id: String!
    nickname: String!
    location: String!
    default: Boolean!
    devices: [Device!]!
  }

  type CreateAccountResponse {
    ok: Boolean!
    account: Account
    errors: [Error!]
  }
`,
];

export const mutation = [
  `
  createAccount(nickname: String!, location: String!, default: Boolean): CreateAccountResponse!
`,
];

export const resolvers = {
  Mutation: {
    createAccount: requiresAuth.createResolver(
      async (parent, args, { user }) => {
        try {
          const response = await Model.transaction(async transaction => {
            const account = await Account.create({ ...args }, { transaction });
            await Member.create(
              { accountId: account.id, userId: user.id, admin: true },
              { transaction },
            );
            return account;
          });

          return {
            ok: true,
            account: response,
          };
        } catch (err) {
          console.log(err);
          return {
            ok: false,
            errors: formatErrors(err, [Account, Member]),
          };
        }
      },
    ),
  },
};
