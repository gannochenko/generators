<p align="center">
  <!--
  <a href="https://github.com/<%- github_account_name %>/<%- repository_name %>">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>
  -->

<h3 align="center">The source code of the "<%- application_code %>" application</h3>

  <p align="center">
    <a href="https://github.com/<%- github_account_name %>/<%- repository_name %>">Source</a>
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

The deployment script uses AWS CLI, which you will have to [install](https://formulae.brew.sh/formula/awscli).

To deploy the lambda functions manually, first copy the `.env.example` file to `.env` and update the AWS secrets.

~~~bash
export AWS_ACCESS_KEY_ID=
export AWS_SECRET_ACCESS_KEY=
~~~

There are also two other variables, for `CORS` and for `SendinBlue`. `SendinBlue` is used to send email. Either [reuse your previous API key](https://account.sendinblue.com/advanced/api/), or [create a new one](https://account.sendinblue.com/advanced/api/).

~~~bash
export CORS=
export SENDIN_BLUE_API_KEY=
~~~

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

It is possible to run Continuous Delivery for the lambda functions using Github Actions. Take the `.github/workflow.example.yml`, replace the function name with the actual function name, and put the file to the `.github/workflows` folder of your root project.

You will also need to create repository secrets to keep the `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY` and `SENDIN_BLUE_API_KEY` values.

## Contact

Sergei Gannochenko - [Linkedin](https://www.linkedin.com/in/gannochenko/)
