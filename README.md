# hqu-backend

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

