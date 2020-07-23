const { User } = require('../../models');

const userData = [
	{
		username: 'leterver',
		password: 'password',
	},
	{
		username: 'fankeybo',
		password: 'password',
	},
	{
		username: 'ishostor',
		password: 'password',
	},
	{
		username: 'lanotoro',
		password: 'password',
	},
	{
		username: 'dgesovat',
		password: 'password',
	},
];

const seedUsers = async () => User.bulkCreate(userData);

module.exports = seedUsers;
