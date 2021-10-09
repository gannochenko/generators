<p align="center">
  <h3 align="center">Infrastructure of the "<%- project_code %>" project</h3>

  <p align="center">
    <a href="https://github.com/gannochenko/<%- github_repository_name %>">Infra source</a>
    &bull;
    <a href="https://github.com/gannochenko/<%- project_code %>">Application source</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [Project list](#project-list)
* [Deploying the infrastructure](#deploying-the-infrastructure)
  * [Preparations](#preparations)
    * [AWS](#aws)
    * [Domain name](#domain-name)
    * [GoDaddy](#godaddy)
    * [Auth0](#auth0)
    * [Vercel](#vercel)
  * [Deployment](#deployment)
* [Setting up CD](#setting-up-cd)
* [Contact](#contact)

## Project list

|  Project 	|  Dev name 	|  Prod name 	|
|---	|---	|---	|
|   	| example.api  	|  ??? 	|

## Deploying the infrastructure

### Preparations

The infrastructure is managed by [Terraform](https://learn.hashicorp.com/tutorials/terraform/install-cli). In case if this is a new machine, or the project itself is a brand new one, we must obtain the required access keys first.

#### Google mail

Create a new Google Mail account for this project. The email account could be __gannochenko-<%- project_code %>@gmail.com__.

#### AWS

We use AWS to store Terraform states, as well as to host different resources, such as Lambdas, S3, DynamoDB, RDS, etc.
Ideally, there should be a separate AWS account per project.

Steps to follow:

1. Use the email account you just created to [create a new AWS account](https://portal.aws.amazon.com/billing/signup#/start).
2. Protect the root account with MFA (todo).
3. Create a billing alarm
    * [Official docs on how to do it](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html)
    * [There is also a document with screenshots](https://gannochenko.notion.site/Creating-AWS-Billing-alarm-20a6eed780b247cfb93c8a6cf23eaea8)
4. [Create a new non-root user](https://console.aws.amazon.com/iam/home#/users$new?step=details) and obtain the access credentials.
5. Paste the credentials into env vars in the `.envvars` file:
  ~~~bash
  export AWS_ACCESS_KEY_ID=
  export AWS_SECRET_ACCESS_KEY=
  ~~~

Useful resources:
* [AWS Terraform provider](https://registry.terraform.io/providers/hashicorp/aws/latest/docs)

#### Domain name

Purchase your new domain name at [GoDaddy](https://account.godaddy.com/products).
You can also try [RuCenter](https://www.nic.ru/en/), since ru-domains are cheaper there. Beware though, that they only allow changing the domain nameservers, but don't give fully-featured access to the DNS hosting free of charge, unlike GoDaddy.

#### GoDaddy

The Terraform provider adds the __A__ and __CNAME__ records to your GoDaddy domain.

Steps to follow:

* Go to Godaddy and [create a new key/secret](https://developer.godaddy.com/keys).
* Fill out the env vars in the `.envvars` file:
  ~~~bash
  export GODADDY_API_KEY=
  export GODADDY_API_SECRET=
  ~~~

Useful resources:
* [GoDaddy Terraform provider](https://registry.terraform.io/providers/n3integration/godaddy/latest)

#### Auth0

If we use Auth0 for authentication, then it also needs setup.

Steps to follow:

* Go to the [settings section of the RoboApp](https://manage.auth0.com/dashboard/eu/gannochenko/applications/xsZ4bfyjGVCcZX2uT1jar0fHLvf5FlOQ/settings) and retrieve the following data:
* Fill out the env vars in the `.envvars` file:
  ~~~bash
  export AUTH0_DOMAIN=
  export AUTH0_CLIENT_ID=
  export AUTH0_CLIENT_SECRET=
  ~~~

Useful resources:
* [Tutorial](https://auth0.com/blog/use-terraform-to-manage-your-auth0-configuration/)
* [Auth0 Terraform provider](https://registry.terraform.io/providers/alexkappa/auth0/latest/docs)

#### Vercel

Vercel is used to host web applications.

Steps to follow:

* Go to the [tokens page](https://vercel.com/account/tokens) and create a new token. Then retrieve the data:
* Fill out the env vars in the `.envvars` file:
  ~~~bash
  export VERCEL_TOKEN=
  ~~~

Useful resources:
* [Vercel Terraform provider](https://registry.terraform.io/providers/chronark/vercel/latest/docs)

### Deploying locally

~~~bash
./script/init.sh
./script/plan.sh
./script/apply.sh
~~~

## Deploying via CD

Take all variables from the `./.envvars` file and create [repository secrets](https://github.com/gannochenko/gannochenko.dev_infra/settings/secrets/actions) with the same names:

* AWS_ACCESS_KEY_ID
* AWS_SECRET_ACCESS_KEY
* AUTH0_DOMAIN
* AUTH0_CLIENT_ID
* AUTH0_CLIENT_SECRET
* VERCEL_TOKEN
* GODADDY_API_KEY
* GODADDY_API_SECRET

<!-- CONTACT -->
## Contact

Sergei Gannochenko - [Linkedin](https://www.linkedin.com/in/gannochenko/)
