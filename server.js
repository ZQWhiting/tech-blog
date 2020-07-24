const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

let secret;
process.env.JAWSDB_URL
	? (secret = process.env.JAWSDB_URL)
	: (secret = process.env.SESS_SECRET);

const sess = {
	secret: secret,
	cookie: {
		secure: true,
		httpOnly: true,
		sameSite: true,
		maxAge: 10 * 60 * 1000,
	},
	rolling: true,
	resave: false,
	saveUninitialized: true,
	store: new SequelizeStore({
		db: sequelize,
	}),
};

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => console.log(`Now listening on port ${PORT}!`));
});
