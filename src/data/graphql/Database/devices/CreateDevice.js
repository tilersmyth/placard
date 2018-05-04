import { Device, Account } from 'data/models';
import formatErrors from '../../../formatErrors';
import requiresAuth from '../../../permissions';

export const schema = [
  `
  type Device {
    id: String!
    deviceId: String!
    url: String!
    nickname: String
    whitelist: [String]
  }

  type CreateDeviceResponse {
    ok: Boolean!
    device: Device
    errors: [Error!]
  }
`,
];

export const mutation = [
  `
  createDevice(accountId: String!, url: String!, nickname: String, whitelist: [String]): CreateDeviceResponse!
`,
];

export const resolvers = {
  Mutation: {
    createDevice: requiresAuth.createResolver(async (parent, args) => {
      try {
        const account = await Account.findOne({
          where: { id: args.accountId },
        });

        if (!account) {
          return {
            ok: false,
            errors: [
              {
                path: 'account',
                message: 'Account with ID provided does not exist',
              },
            ],
          };
        }

        const device = await Device.create({ ...args });
        return {
          ok: true,
          device,
        };
      } catch (err) {
        console.log(err);
        return {
          ok: false,
          errors: formatErrors(err, [Device]),
        };
      }
    }),
  },
};
