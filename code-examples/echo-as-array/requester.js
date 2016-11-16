var AWS = require('aws-sdk');

AWS.config.update({accessKeyId: 'XXXXXXXXXXXXXXXXXXXX', secretAccessKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'});
AWS.config.update({region:'us-west-2'});

var lambda = new AWS.Lambda();
var params = {
	FunctionName: 'echo-as-object',
	Payload: JSON.stringify([1,2])
};
lambda.invoke(params, function(err, data) {
	if (err) { console.log(err, err.stack) } 
	else {

		var array = JSON.parse(data.Payload);
	
		console.log('response first element: ' + array[0]);
		console.log('response second element: ' + array[1]);
	}
});
