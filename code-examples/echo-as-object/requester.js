var AWS = require('aws-sdk');

AWS.config.update({accessKeyId: 'XXXXXXXXXXXXXXXXXXXX', secretAccessKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'});
AWS.config.update({region:'us-west-2'});

var lambda = new AWS.Lambda();
var params = {
	FunctionName: 'echo-as-object',
	Payload: JSON.stringify({key1:"Bob", key2:"James" })
};
lambda.invoke(params, function(err, data) {
	if (err) { console.log(err, err.stack) } 
	else {

		var object = JSON.parse(data.Payload);
	
		console.log('response part1: ' + object.result1);
		console.log('response part2: ' + object.result2);
	}
});
