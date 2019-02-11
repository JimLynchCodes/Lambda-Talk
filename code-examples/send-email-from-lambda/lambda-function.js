var aws = require('aws-sdk');

var ses = new aws.SES({
   region: 'us-west-2' 
});

exports.handler = function(event, context) {
    console.log("Incoming: ", event);
   // var output = querystring.parse(event);

    var eParams = {
        Destination: {
            ToAddresses: ["jigglypuff@wisdomofjim.com"]
        },
        Message: {
            Body: {
                Text: {
                    Data: "A test from Jimbo..."
                }
            },
            Subject: {
                Data: "Test Worked!"
            }
        },
        Source: "pikachu@gmail.com"
    };

    console.log('===SENDING EMAIL===');
    var email = ses.sendEmail(eParams, function(err, data){
        if(err) console.log(err);
        else {
            console.log("===EMAIL SENT===");
            console.log(data);
            
            
            console.log("EMAIL CODE END");
    console.log('EMAIL: ', email);
    context.succeed(event);
            
        }
    });
    
};
