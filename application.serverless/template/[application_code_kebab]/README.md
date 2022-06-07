<p align="center">
  <h3 align="center">The source code of the "<%- application_code %>" application</h3>

  <p align="center">
    <a href="https://github.com/<%- github_account_name %>/<%- github_repository_name %>">Source</a>
  </p>
</p>

## Table of Contents

* [Local installation](#local-installation)
* [Local launch](#local-launch)
* [How it works](#how-it-works)
* [Manual deployment](#manual-deployment)
* [Setup CD](#setup-cd)
* [Contact](#contact)

## Local installation

1. copy `.env.example` to `.env`
2. run `yarn` to install the dependencies, if wasn't done before

## Local launch

1. run `yarn dev`

## How it works

The microservice contains the following serverless functions:

* `someFunction` - function provides access to some stuff.

## Manual deployment

Before you do the deployment make sure that the lambda function really exists. The script described below can only do code updates, but does not create any functions whatsoever.

The deployment script uses AWS CLI, which you will have to [install](https://formulae.brew.sh/formula/awscli).

To deploy the lambda functions manually, first copy the `.env.example` file to `.env` and update the AWS secrets.

~~~bash
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
~~~

There are also two other variables, for `CORS` and `SENDIN_BLUE_API_KEY`.
`SendinBlue` is used to send email. Either [reuse your previous API key](https://account.sendinblue.com/advanced/api/), or [create a new one](https://account.sendinblue.com/advanced/api/).

~~~bash
SENDIN_BLUE_API_KEY=
~~~

As for `CORS`, it is not required to define it here, because the value of this variable comes from the infrastructure.

As soon as the variables are in place, execute the deployment script:

~~~bash
./script/deploy.sh <function_name>
~~~

where `function_name` is the actual name of the function being deployed. Note, that the function should exist, otherwise nothing will be updated.

Example:

~~~bash
./script/deploy.sh sendMessage
~~~

## Setup CD

It is possible to run Continuous Delivery for the lambda functions using Github Actions. Take the `.github/workflow.example.yml`, replace the function name placeholder with the actual function name, and put the file to the `.github/workflows` folder of your root project.

Take the following variables from the `./.env` file and create [a new "production" environment](https://github.com/gannochenko/legacy/settings/environments/new) with the corresponding secrets:

* AWS_ACCESS_KEY_ID
* AWS_SECRET_ACCESS_KEY
* AWS_REGION

There could be more variables in case if the project has other API keys crucial to be stored as secrets.

Take the `cd-workflow.example.yml`, replace the #FUCNTION_NAME# placeholder and put the file into the `.github/workflows` folder in the root of the repository. Do it for every function you wish to run the CD for.

## Contact

Sergei Gannochenko - [Linkedin](https://www.linkedin.com/in/gannochenko/)
