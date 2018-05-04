import { Device } from 'data/models';
import requiresAuth, { requiresDeviceAccess } from '../../../permissions';

export const queries = [
  `
  GetDevice(id: String!): Device!
`,
];

export const resolvers = {
  RootQuery: {
    GetDevice: requiresDeviceAccess.createResolver(
      async (parent, args, { user }) => {
        const device = await Device.findOne(
          { where: { id: args.id } },
          { raw: true },
        );

        return device;
      },
    ),
  },
};
