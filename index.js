
var time = require('time');

exports.getQuizScore = (event, context, callback) => {
    var currentTime = new time.Date(); 
    var numberCorrect   = 9;
    var numberTotal     = 10;
    
    var pathParameters  = event['pathParameters'] ? "OK" : "NONE";
    var qsParameters    = event["queryStringParameters"] ? "OK" : "NONE";
    var userId          = event["queryStringParameters"] ?  (event["queryStringParameters"]["userId"] ? event["queryStringParameters"]["userId"] : "NONE" ) : "NO-QS";
    var sessionId       = event["queryStringParameters"] ?  (event["queryStringParameters"]["sessionId"] ? event["queryStringParameters"]["sessionId"] : "NONE" ) : "NO-QS";
    currentTime.setTimezone("America/Los_Angeles");
    callback(null, {
        statusCode: '200',
        body: 'Your score on the quiz (user='+userId+',sessionId='+sessionId+') was ' + numberCorrect + ' out of ' + numberTotal,
    });
};
exports.startNewQuiz = (event, context, callback) => {
    var currentTime = new time.Date(); 
    currentTime.setTimezone("America/Phoenix");
    
    var userId;
    var sessionId;
    if (event.body){
        userId       = event.body.userId;
        sessionId    = event.body.sessionId;
    }
    callback(null, {
        statusCode: '200',
        body: 'New quiz at '+currentTime + ' (userId='+userId+',sessionId='+sessionId+',questionId='+questionId+',wasCorrect='+wasCorrect+')',
    });
};
exports.saveQuestionResponse = (event, context, callback) => {
    var currentTime = new time.Date(); 
    currentTime.setTimezone("America/Phoenix");
    
    var userId;
    var sessionId;
    var questionId;
    var wasCorrect;
    var body = JSON.parse(event['body']);
    console.log("EVENT BODY >>");
    console.log(body);
    if (body){
        
       
        userId       = body['userId']     ? body['userId'] : "NO-PARAM";
        sessionId    = body['sessionId']  ? body['sessionId'] : "NO-PARAM";;
        questionId   = body['questionId'] ? body['questionId'] : "NO-PARAM";;
        wasCorrect   = body['wasCorrect'] ? body['wasCorrect'] : "NO-PARAM";;
    }else{
       userId       = "NO-BODY";
       sessionId    = "NO-BODY";
       questionId   = "NO-BODY";
       wasCorrect   = "NO-BODY";
        
    }
    callback(null, {
        statusCode: '200',
        body: 'Question response saved at '+currentTime + ' (userId='+userId+',sessionId='+sessionId+',questionId='+questionId+',wasCorrect='+wasCorrect+')',
    });
};
