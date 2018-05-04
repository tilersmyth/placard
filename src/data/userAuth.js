import jwt from 'jsonwebtoken';
import _ from 'lodash';
import bcrypt from 'bcrypt';
import { User } from './models';

export const createTokens = async (user, secret) => {
  const createToken = jwt.sign(
    {
      user: _.pick(user, ['id', 'email', 'firstName', 'lastName']),
    },
    secret,
    {
      expiresIn: '1hr',
    },
  );

  return [createToken];
};

export const tryLogin = async (email, password, secret) => {
  const user = await User.findOne({ where: { email }, raw: true });

  if (!user) {
    return {
      ok: false,
      errors: [{ path: 'email', message: 'No user with this email exists' }],
    };
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    return {
      ok: false,
      errors: [{ path: 'password', message: 'Password incorrect' }],
    };
  }

  const [token] = await createTokens(user, secret);

  return {
    ok: true,
    user,
    token,
  };
};
