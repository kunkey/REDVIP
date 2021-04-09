module.exports = function(app, redT) {
	// Home
	app.get('/', function(req, res) {
		// Lam gi khi get ip
	});

	// Admin
	app.get('/kunkeypr/', function(req, res) {
		return res.render('admin');
	});

	// Fanpage
	app.get('/fanpage/', function(req, res) {
		return require('./routes/fanpage/redirect')(res);
	});

	// Help IOS
	app.get('/help/ios/', function(req, res) {
		return res.render('help/ios');
	});

	// Sign API
	require('./routes/api')(app, redT);  // load routes API
};
