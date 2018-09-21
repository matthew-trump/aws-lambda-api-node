# hq-lambda-api-node

This is node.js implementation of the AWS Lambda and API Gateway backend of the HQ Trivia Assistant app. It was used in early testing of setting up the stack and accessing the database. It is no longer used and was superceded by the Python version at **hq-lambda-api-python**.  Unlike the Python version, it is *not* designed to used with the CloudFormation project pipeline.yaml in **hq-cloudformation-templates** (although in principle it could be).

## Usage of API

This is the temporary API for development. It can be used for simple testing of end to end. 

Note this WILL change at some point, even during testing, so I'll be providing updated docs as need. In particular the hashed unique id part of the AWS domain name (e.g. 6d9kid0a9) will change, and also 'Stage' will become 'Prod' at some point. 

We may of course need other calls depending on other client requirements that may pop up. So long as we're collecting the right data along the way and storing it properly, we should find it fairly straightforward to give stats and comparisons by other operations.

For testing, the two POST calls, for now simply send a body as a serialized json object of the params{ userId : 1, sessionId: 2}.

For the GET call, add query string as normal, i.e. 
?userId=1&sessionId=2. 

Param values are arbitrary for more. Params are actually more extensive than this for the POST calls, but since nothing is implemented in db for now, don't worry about others, or the values of the ones you send (i.e. can use dummy values for params for now).

POST https://c6d9kid0a9.execute-api.us-west-2.amazonaws.com/Stage/StartNewQuiz

POST https://c6d9kid0a9.execute-api.us-west-2.amazonaws.com/Stage/SaveQuestionResponse

GET https://c6d9kid0a9.execute-api.us-west-2.amazonaws.com/Stage/GetQuizScore 


This is the backend app for HQU Trivia Challenge, the Google Assistant application developed by the Brigade for HQU. The DialogFlow app connects to this backend (by configuration) in order to store and retrieve persistent data regarding user actions within the DialogFlow app.

## Description

This is an application for AWS, specifically using AWS CodePipeline, CodeBuild, and CloudFormation to build a set of AWS Lambda functions that share an API Gateway that can be called from DialogFlow using HTTP GET and POST commands (over SSL). Communication between the two tiers is secured by a shared secret key, passed from the DialogFlow app in the header of the HTTP call, which is then by the backend for authorization.

## Installation

1. On AWS, start a new CodePipeline project.
2. Follow the flow to set up a Source.
3. For the Source Provider, select Github.
4. Use the interface button to connect to Github. Once connected, select this repository, i.e. https://github.com/thebrigade/hqu-backend. (you will need a Github account with at least Read access to the repository for this step).
5. For the Branch, select master.
5. Make sure the OutputArtifact #1 is MyApp
6. Go to the next step to start a Build.
7. For Action Name, make up an approprite name and type it in.
8. For Build Provider, select AWS CodeBuild
9. Click on Create a New CodeBuild Project
10. For name, make up an appropriate name and type it in
11. Make sure the option to use the buildspec.yml in the project is selected.
12. Make sure the Input  Artifact #1 is MyApp
12. Make sure the Output Artifact #1 is MyAppBuild
12. Go to the next step to start a Deployment
13. 

