var mongoose = require('mongoose');
var database_uri = 'mongodb://localhost:27017/loc8r';
var gracefulShutdown;

mongoose.connect(database_uri, {useMongoClient: true});

mongoose.connection.on('connected', function(){
	console.log('Mongoose connected to ' + database_uri);
})

mongoose.connection.on('error', function(err){
	console.log('Mongoose connection error ' + err);
})

mongoose.connection.on('disconnected', function(){
	console.log('Mongoose disconnected');
})

gracefulShutdown = function(msg, callback){
	mongoose.connection.close(function(){
		console.log('Mongoose disconnected through ' + msg);
		callback();
	});
};

process.once('SIGUSR2', function(){
	gracefulShutdown('nodemon restart', function(){
		process.kill(process.pid, 'SIGUSR2');
	});
})

process.on('SIGNINT', function(){
	gracefulShutdown('app termination', function(){
		process.exit(0);
	});
})

process.on('SIGTERM', function(){
	gracefulShutdown('Heroku app shutdown', function(){
		process.exit(0);
	});
})
