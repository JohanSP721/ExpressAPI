const { User, UserSchema } = require('../../db/models/user.model');

const setupModels = sequelize => {
	User.init(UserSchema, User.config(sequelize));
};

module.exports = { setupModels };
