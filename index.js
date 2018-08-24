
var time = require('time');

exports.getQuizScore = (event, context, callback) => {
    var currentTime = new time.Date(); 
    var numberCorrect   = 9;
    var numberTotal     = 10;
    
    var pathParameters  = event['pathParameters'] ? "OK" : "NONE";
    var qsParameters    = event["queryStringParameters"] ? "OK" : "NONE";
    var userId          = event["queryStringParameters"] ?  (event["queryStringParameters"]["userId"] ? event["queryStringParameters"]["userId"] : "NONE" ) : "NO-QS";
    
    currentTime.setTimezone("America/Los_Angeles");
    callback(null, {
        statusCode: '200',
        body: 'Your score on the quiz (user='+userId+') was ' + numberCorrect + ' out of ' + numberTotal,
    });
};
exports.saveQuestionResponse = (event, context, callback) => {
    var currentTime = new time.Date(); 
    currentTime.setTimezone("America/Phoenix");
    callback(null, {
        statusCode: '200',
        body: 'Question response saved',
    });
};
