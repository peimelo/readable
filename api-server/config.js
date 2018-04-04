exports.port = process.env.PORT || 3001;
exports.origin = process.env.ORIGIN || `https://readablee.herokuapp.com/:${exports.port}`;
