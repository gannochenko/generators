<p align="center">

<h3 align="center">The application.</h3>

  <p align="center">
    The application.
    <br />
    <br />
    <a href="https://github.com/<%- github_account_name %>/gannochenko.dev">Source</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [Installation](#installation)
* [Setting up CD](#setting-up-cd)
* [Contact](#contact)

## Installation

Include the module to the project's `terraform` `modules.tf` file the following snippet:

~~~
module "<%- application_code_tf %>" {
  source = "./<%- application_code %>"

  # input
  domain = godaddy_domain_record.apex.domain
  cors = "https://${godaddy_domain_record.apex.domain}"
  repository = local.<%- application_code_tf %>_repository
  gtag = "G-XXXXYYYYZZZ"
  ga_link = "https://analytics.google.com/analytics/web/?authuser=0#/pXXXXYYYZZZ/reports/reportinghub"
  deployment_link = "https://vercel.com/<%- github_account_name %>/<%- application_code_tf %>"

<% if (use_api) { %>
  api_url = module.<%- application_code_tf %>_api.api_gateway_deployment_invoke_url

  depends_on = [module.<%- application_code_tf %>_api]
<% } %>
}
~~~

Please, set Google Analytics `gtag` variable to a proper value which can be found or created [here](https://analytics.google.com/analytics/web/).
Also, fill-in the proper URLs and specify module dependency in case if this module is dependent on some API.

Then, re-initialize `terraform`:

~~~bash
./script/init.sh
~~~

Afterwards, apply the changes:

~~~bash
./script/plan.sh
./script/apply.sh
~~~

## Setting up CD

Vercel will automatically deploy the changes for you. The only thing you need to do is to provide the required env variables at build time.

## Contact

Sergei Gannochenko - [Linkedin](https://www.linkedin.com/in/gannochenko/)
