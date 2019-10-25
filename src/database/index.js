const mongoose = require('mongoose');

mongoose.connect('mongodb://admin:123456a@ds123500.mlab.com:23500/vvtcesjfvmarques', { useUnifiedTopology: true });

mongoose.Promise = global.Promise;
console.log(mongoose.connection.readyState);

module.exports = mongoose;

