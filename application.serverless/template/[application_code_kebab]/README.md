<p align="center">
  <!--
  <a href="https://github.com/<%- github_account_name %>/<%- repository_name %>">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>
  -->

<h3 align="center">The source code of the "<%- application_code %>" application</h3>

  <p align="center">
    <a href="https://github.com/<%- github_account_name %>/<%- github_repository_name %>">Source</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [Installation](#installation)
* [Manual deployment](#manual-deployment)
* [Setup CD](#setup-cd)
* [Contact](#contact)

## Installation

To prepare the application, simply install `node_modules`:

~~~bash
yarn
~~~

Then, to start the lambda functions locally, run:

~~~bash
yarn dev
~~~

## Manual deployment

Before you do the deployment make sure that the lambda function really exists. The script described below can only do code updates, but does not create any functions whatsoever.

The deployment script uses AWS CLI, which you will have to [install](https://formulae.brew.sh/formula/awscli).

To deploy the lambda functions manually, first copy the `.env.example` file to `.env` and update the AWS secrets.

~~~bash
export AWS_ACCESS_KEY_ID=
export AWS_SECRET_ACCESS_KEY=
~~~

There are also two other variables, for `CORS` and `SENDIN_BLUE_API_KEY`.
`SendinBlue` is used to send email. Either [reuse your previous API key](https://account.sendinblue.com/advanced/api/), or [create a new one](https://account.sendinblue.com/advanced/api/).

~~~bash
export SENDIN_BLUE_API_KEY=
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

Create repository secrets to store the following variables:

* `AWS_ACCESS_KEY_ID`
* `AWS_SECRET_ACCESS_KEY`
* `SENDIN_BLUE_API_KEY`

There is no need to define the `CORS` variable, as it's value comes from the infrastructure.

Take the `cd-workflow.example.yml`, replace the #FUCNTION_NAME# placeholder and put the file into the `.github/workflows` folder in the root of the repository. Do it for every function you wish to run CD for.

## Contact

Sergei Gannochenko - [Linkedin](https://www.linkedin.com/in/gannochenko/)
