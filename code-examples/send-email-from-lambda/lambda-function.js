
var aws = require('aws-sdk');

var ses = new aws.SES({

  region: 'us-west-2' 
});

exports.handler = function(event, context) {
  console.log("Incoming: ", event);


  = require('aws-sdk');

  var ses = new aws.SES({

    region: 'us-west-2' 
  });

  exports.handler = function(event, context) {
    console.log("Incoming: ", event);
    var output = querystring.parse(event);

    var eParams =  = require('aws-sdk');

    var ses = new aws.SES({

      region: 'us-west-2' 
    });

    exports.handler = function(event, context) {
      console.log("Incoming: ", event);
      // var output = querystring.parse(event);

      var eParams = {
        Destination: {
                       ToAddresses: ["jim@wisdomofjim.com"]
                     },
        Message: {
                   Body: {
                           Text: {
                                   Data: "Hey! What is up?"
                                 }
                         },
                   Subject: {
                              Data: "Email Subject!!!"
                            }
                 },
        Source: "mrdotjim@gmail.com"
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

    };             Destination: {
      ToAddresses: ["jim@wisdomofjim.com"]
    },
      Message: {
                 Body: {
                         Text: {
                                 Data: "Hey! What is up?"
                               }
                       },
                 Subject: {
                            Data: "Email Subject!!!"
                          }
               },
      Source: "mrdotjim@gmail.com"
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

};var eParams = {
  Destination: {
                 ToAddresses: ["jim@wisdomofjim.com"]
               },
  Message: {
             Body: {
                     Text: {
                             Data: "Hey! What is up?"
                           }
                   },
             Subject: {
                        Data: "Email Subject!!!"
                      }
           },
  Source: "mrdotjim@gmail.com"
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



