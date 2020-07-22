const { Comment } = require('../../models');

const commentData = [
	{
		comment_text:
			'vitae ultricies leo integer malesuada nunc vel risus commodo viverra',
		user_id: '1',
		post_id: '3',
	},
	{
		comment_text:
			'maecenas accumsan lacus vel facilisis volutpat est velit egestas dui',
		user_id: '2',
		post_id: '4',
	},
	{
		comment_text:
			'id porta nibh venenatis cras sed felis eget velit aliquet',
		user_id: '3',
		post_id: '5',
	},
	{
		comment_text:
			'tellus orci ac auctor augue mauris augue neque gravida in',
		user_id: '4',
		post_id: '2',
	},
	{
		comment_text: 'amet nisl purus in mollis nunc sed id semper risus',
		user_id: '5',
		post_id: '1',
	},
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
