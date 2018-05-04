import { Device, Member } from './models';

const createResolver = resolver => {
  const baseResolver = resolver;
  baseResolver.createResolver = childResolver => {
    const newResolver = async (parent, args, context, info) => {
      await resolver(parent, args, context, info);
      return childResolver(parent, args, context, info);
    };
    return createResolver(newResolver);
  };
  return baseResolver;
};

// requiresAuth
export default createResolver((parent, args, { user }) => {
  if (!user || !user.id) {
    throw new Error('Not authenticated');
  }
});

export const requiresDeviceAccess = createResolver(
  async (parent, { id }, { user }) => {
    if (!user || !user.id) {
      throw new Error('Not authenticated');
    }

    const device = await Device.findOne({ where: { id } });

    const member = await Member.findOne({
      where: { accountId: device.accountId, userId: user.id },
    });

    if (!member) {
      throw new Error('You must be account admin to access a device');
    }
  },
);

export const requiresAccountAccess = createResolver(
  async (parent, { id }, { user }) => {
    if (!user || !user.id) {
      throw new Error('Not authenticated');
    }

    const member = await Member.findOne({
      where: { accountId: id, userId: user.id },
    });

    if (!member) {
      throw new Error('You must be an admin to access account');
    }
  },
);
