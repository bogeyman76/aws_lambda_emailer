// This script expects the following:
// { "TO": "to@whomever.com", "SUBJECT": "Your subject", "MSG":"Message content" }
// Requires SES to be setup correctly with your domain name

const REGION = "us-west-2";
const FROM_ADDRESS = "from@thisscript.com";

var aws = require("aws-sdk");
var ses = new aws.SES({ region: REGION });

exports.handler = async function (event, context) {
  var params = {
    Destination: {
      ToAddresses: [event['TO']],
    },
    Message: {
      Body: {
        Text: { Data: event['MSG']},
        Html: { Data: '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"/><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /><title>Email Alert From Softac</title><body>'+event["MSG"]+'</head></html>' }
      },

      Subject: { Data: event['SUBJECT'] },
    },
    Source: FROM_ADDRESS,
  };

  try {
    let result = await ses.sendEmail(params).promise();
    } catch (err) { 
      console.log(err); 
  }  
}
