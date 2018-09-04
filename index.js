
var time  = require('time');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host : "hqtriviaappcluster.cluster-cyiz2ptceqng.us-west-2.rds.amazonaws.com",
    user : "master",
    password : "ghW8CtiwXp",
    port : 3306
});

exports.ping = (event, context, callback) => {
    var currentTime = new time.Date(); 
    var numberCorrect   = 9;
    var numberTotal     = 10;
    
    var pathParameters  = event['pathParameters'] ? "OK" : "NONE";
    var qsParameters    = event["queryStringParameters"] ? "OK" : "NONE";
    var userId          = event["queryStringParameters"] ?  (event["queryStringParameters"]["userId"] ? event["queryStringParameters"]["userId"] : "NONE" ) : "NO-QS";
    var sessionId       = event["queryStringParameters"] ?  (event["queryStringParameters"]["sessionId"] ? event["queryStringParameters"]["sessionId"] : "NONE" ) : "NO-QS";
    currentTime.setTimezone("America/Los_Angeles");
    
    console.log('Lambda ping called.');
            callback(null, {
                 statusCode: '200',
                 body: 'Current time in Los Angeles is '+currentTime,
            });
    console.log('Lambda ping done.');
}

exports.testDbConnection = (event, context, callback) => {
    var currentTime = new time.Date(); 
    var numberCorrect   = 9;
    var numberTotal     = 10;
    
    var pathParameters  = event['pathParameters'] ? "OK" : "NONE";
    var qsParameters    = event["queryStringParameters"] ? "OK" : "NONE";
    var userId          = event["queryStringParameters"] ?  (event["queryStringParameters"]["userId"] ? event["queryStringParameters"]["userId"] : "NONE" ) : "NO-QS";
    var sessionId       = event["queryStringParameters"] ?  (event["queryStringParameters"]["sessionId"] ? event["queryStringParameters"]["sessionId"] : "NONE" ) : "NO-QS";
    currentTime.setTimezone("America/Los_Angeles");
    
    console.log('Connecting to database...');
    connection.connect(function(err) {
        if (err) {
            callback(null, {
                 statusCode: '200',
                 body: "ERROR: "+err.stack,
            });
            console.error('Database connection failed: ' + err.stack);
        }else{
            callback(null, {
                 statusCode: '200',
                 body: 'CONNECTED: Your score on the quiz (user='+userId+',sessionId='+sessionId+') was ' + numberCorrect + ' out of ' + numberTotal,
            });
        }

        console.log('Connected to database.');
    });  
    console.log('Done.');
}

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
                 body: 'CONNECTED: Your score on the quiz (user='+userId+',sessionId='+sessionId+') was ' + numberCorrect + ' out of ' + numberTotal,
            });
   


    connection.end();
    
    
};
exports.startNewQuiz = (event, context, callback) => {
    var currentTime = new time.Date(); 
    currentTime.setTimezone("America/Phoenix");
    
    var userId;
    var sessionId;
   
    var body = JSON.parse(event['body']);
    if (body){
        
       
        userId       = body['userId']     ? body['userId'] : "NO-PARAM";
        sessionId    = body['sessionId']  ? body['sessionId'] : "NO-PARAM";;
      
    }else{
       userId       = "NO-BODY";
       sessionId    = "NO-BODY";
     
        
    }
    callback(null, {
        statusCode: '200',
        body: 'New quiz at '+currentTime + ' (userId='+userId+',sessionId='+sessionId+')',
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
