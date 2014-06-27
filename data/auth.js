(function (auth) {

	auth.ensureAuthenticated = function (req, res, next) {
		if (req.isAuthenticated()) {
			next();
		} else {
			res.redirect('/auth/login');
		}
	}

	auth.ensureApiAuthenticated = function (req, res, next) {
		if (req.isAuthenticated()) {
			next();
		} else {
			res.send(401, 'Not authorized');
		}
	}

}) (module.exports);