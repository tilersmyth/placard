import { User } from 'data/models';
import requiresAuth from '../../../permissions';

export const queries = [
  `
  me: User!
  GetAllUsers: [User]
`,
];

export const resolvers = {
  RootQuery: {
    me: (parent, args, { user }) => {
      const { request } = parent;

      return User.findOne({ where: { id: request.user.user.id } });
    },
    GetAllUsers: async () => {
      const users = await User.findAll();
      return users;
    },
  },
};
