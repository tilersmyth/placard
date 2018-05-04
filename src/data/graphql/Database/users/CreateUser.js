import { User, Account } from 'data/models';
import formatErrors from '../../../formatErrors';
import { tryLogin } from '../../../userAuth';
import Model from '../../../sequelize';

export const schema = [
  `
  type User {
    id: String!
    firstName: String!
    lastName: String!
    email: String!
    accounts: [Account!]!
  }

  type SignupResponse {
    ok: Boolean!
    user: User
    errors: [Error!]
  }

  type LoginResponse{
    ok: Boolean!
    token: String!
    errors: [Error!]
  }
`,
];

export const mutation = [
  `
  signup(
    firstName: String!, 
    lastName: String!, 
    email: String!, 
    password: String!
  ): SignupResponse!

  login(email:String!, password: String!): LoginResponse!
`,
];

export const resolvers = {
  User: {
    accounts: (parent, args, { user }) =>
      Model.query(
        'SELECT * from "Account" as account join "Member" as member on account.id = member.account_id where member.user_id = ?',
        { replacements: [user.id], model: Account, raw: true },
      ),
  },
  Mutation: {
    login: async (parent, { email, password }, { secret }) => {
      const login = await tryLogin(email, password, secret);

      if (!login.ok) {
        return login;
      }

      const { response } = parent;
      response.cookie('token', login.token);
      return login;
    },
    signup: async (parent, args) => {
      try {
        const user = await User.create(args);
        return {
          ok: true,
          user,
        };
      } catch (err) {
        return {
          ok: false,
          errors: formatErrors(err),
        };
      }
    },
  },
};
