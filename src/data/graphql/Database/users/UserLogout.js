export const mutation = [
  `
  logout: Boolean!
`,
];

export const resolvers = {
  Mutation: {
    logout: async parent => {
      const { response } = parent;

      await response.clearCookie('token');

      return true;
    },
  },
};
