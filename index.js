var jwtDecode = require('jwt-decode');

exports.handler = (event, context, callback) => {
    // let user = (event && event.user) || (event['pathParameters'] && event['pathParameters']['user'])
    // let q = event["queryStringParameters"]
    // let id = event['requestContext'] && event['requestContext']['identity'] || null
    // TODO implement
    
    const responseCode= 200;
    
    var responseBody = {
        event: event,
        context: context
    };
    
    // The output from a Lambda proxy integration must be 
    // of the following JSON object. The 'headers' property 
    // is for custom response headers in addition to standard 
    // ones. The 'body' property  must be a JSON string. For 
    // base64-encoded payload, you must also set the 'isBase64Encoded'
    // property to 'true'.
    var response = {
        statusCode: responseCode,
        headers: {
            "x-custom-header" : "my custom header value"
        },
        body: JSON.stringify(responseBody)
    };
    console.log("response: " + JSON.stringify(response))
    callback(null, response);

};