var aws = require('aws-sdk');

exports.handler = (event, context, callback) => {

  var sns = new aws.SNS();

  var endpointArn = "arn:aws:sns:us-west-2:954459734159:Jims_Tips";

  var payload = {
    default: 'Good Morning! It\'s time to wake up! :)',
      APNS: {
        aps: {
          alert: 'Good Morning!',
          sound: 'default',
          badge: 1
        }
      }
  };

  payload.APNS = JSON.stringify(payload.APNS);
  payload = JSON.stringify(payload);

  console.log('sending push');
  sns.publish({
    Message: payload,
    MessageStructure: 'json',
    TargetArn: endpointArn
  }, function(err, data) {
    if (err) {
      console.log(err.stack);
      return;
    }
  });

  callback(null, 'executed successfully');
};
