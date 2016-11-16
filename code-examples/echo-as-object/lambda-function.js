exports.handler = (event, context, callback) => {

	console.log('key1: ' + event.key1 + ' ');
	console.log('key2: ' + event.key2 + ' ');

	var firstResponse = 'Your first key was: ' + event.key1;
	var secondResponse = 'Your second key was: ' + event.key2;

	callback(null, {result1: firstResponse, result2: secondResponse});
};
