const router = require('express').Router();
const { Post, Comment, User } = require('../models');

router.get('/', (req, res) => {
	if (!req.session.loggedIn) {
		res.redirect('/login');
		return;
	}
	Post.findAll({
		where: {},
		attributes: ['id', 'title', 'post_text', 'created_at'],
		include: [
			{
				model: User,
				attributes: ['username'],
			},
		],
	}).then((dbPostData) => {
		const posts = dbPostData.map((post) => post.get({ plain: true }));
		res.render('dashboard', {
			posts,
			loggedIn: req.session.loggedIn,
			dashboard: true,
		});
	});
});

router.get('/post', (req, res) => {
	if (!req.session.loggedIn) {
		res.redirect('/login');
		return;
	}
	res.render('new-post', { dashboard: true });
});

router.get('/edit/:id', (req, res) => {
	if (!req.session.loggedIn) {
		res.redirect('/login');
		return;
	}
	Post.findOne({
		where: {
			id: req.params.id,
		},
		attributes: ['id', 'post_text', 'title', 'created_at'],
		include: [
			{
				model: User,
				attributes: ['username'],
			},
		],
	})
		.then((dbPostData) => {
			if (!dbPostData) {
				res.status(404).json({ message: 'No post found with this id' });
				return;
			}
			const post = dbPostData.get({ plain: true });
			res.render('edit-post', {
				post,
				loggedIn: req.session.loggedIn,
				dashboard: true,
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

module.exports = router;
