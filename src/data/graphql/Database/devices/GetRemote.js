import { Device } from 'data/models';
import formatErrors from '../../../formatErrors';

export const schema = [
  `
  type RemoteDevice {
    url: String!
    whitelist: [String]
  }

  type GetRemoteDeviceResponse {
    ok: Boolean!
    device: RemoteDevice
    errors: [Error!]
  }
`,
];

export const queries = [
  `
  GetRemote(deviceId: String!, accountId: String!): GetRemoteDeviceResponse!
`,
];

export const resolvers = {
  RootQuery: {
    GetRemote: async (parent, args) => {
      try {
        const device = await Device.findOne({
          where: { device_id: args.deviceId, account_id: args.accountId },
        });

        if (!device) {
          return {
            ok: false,
            errors: [
              {
                path: 'not_found',
                message: 'Device not found',
              },
            ],
          };
        }

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
    },
  },
};
