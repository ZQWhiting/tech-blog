const { Post } = require('../../models');

const postData = [
	{
		title: 'RunBuddy reaches 2 million subscribers!',
		post_text:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Vel pharetra vel turpis nunc eget lorem dolor sed viverra.',
		user_id: '1',
	},
	{
		title: 'Robots are taking over the world!',
		post_text:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis aenean et tortor at risus viverra adipiscing. Elementum eu facilisis sed odio.',
		user_id: '2',
	},
	{
		title: 'Cats are on decline! Stocks lowest in centuries!',
		post_text:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut. Lacus vestibulum sed arcu non odio euismod lacinia at.',
		user_id: '3',
	},
	{
		title: 'Rexburg, ID new capital city?!',
		post_text:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut. Lacus vestibulum sed arcu non odio euismod lacinia at.',
		user_id: '4',
	},
	{
		title: 'COOKIES COOKIES COOKIES COOKIES',
		post_text:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut. Lacus vestibulum sed arcu non odio euismod lacinia at.',
		user_id: '5',
	},
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
