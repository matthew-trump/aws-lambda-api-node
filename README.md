# hqu-backend

This is the backend app for HQU Trivia Challenge, the Google Assistant application developed by the Brigade for HQU. The DialogFlow app connects to this backend (by configuration) in order to store and retrieve persistent data regarding user actions within the DialogFlow app.

## Description

This is an application for AWS, specifically using AWS CodePipeline, CodeBuild, and CloudFormation to build a set of AWS Lambda functions that share an API Gateway that can be called from DialogFlow using HTTP GET and POST commands (over SSL). Communication between the two tiers is secured by a shared secret key, passed from the DialogFlow app in the header of the HTTP call, which is then by the backend for authorization.

## Installation

1. On AWS, start a new CodePipeline project.
2. For the Source, pick Github as the Source Provider
3. Connect to Github using the interface and select this repository, i.e. https://github.com/thebrigade/hqu-backend. (you will need a Github account with at least Read access to the repository for this step).
4. Pick the master branch.
