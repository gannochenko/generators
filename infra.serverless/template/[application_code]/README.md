<p align="center">

<h3 align="center">The infrastructure of the "<%- application_code %>" application</h3>

  <p align="center">
    <a href="https://github.com/<%- github_account_name %>/<%- github_repository_name %>_infra">Source</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [Installation](#installation)
* [Contact](#contact)

## Installation

Include the module to the project's `terraform` `modules.tf` file:

~~~
module "<%- application_code_tf %>" {
  source = "./<%- application_code %>"

  # input
  domain = godaddy_domain_record.apex.domain
  cors = "https://${godaddy_domain_record.apex.domain}"
  stage_name = var.stage_name
  aws_region = local.aws_region
  aws_lambda_bucket = local.aws_lambda_bucket
  aws_iam_role_lambda_arn = aws_iam_role.lambda.arn
}
~~~

Then, re-initialize `terraform`:

~~~bash
./script/init.sh
~~~

Afterwards, apply the changes:

~~~bash
./script/plan.sh
./script/apply.sh
~~~

## Contact

Sergei Gannochenko - [Linkedin](https://www.linkedin.com/in/gannochenko/)
