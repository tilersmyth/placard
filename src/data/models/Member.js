import DataType from 'sequelize';
import Model from '../sequelize';

const Member = Model.define('Member', {
  admin: {
    type: DataType.BOOLEAN,
    defaultValue: false,
  },
});

export default Member;
