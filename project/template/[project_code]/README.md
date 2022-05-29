<p align="center">
  <!--
  <a href="https://github.com/<%- github_account_name %>/<%- github_repository_name %>">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>
  -->

<h3 align="center">The source code of the "<%- project_code %>" project</h3>

  <p align="center">
    <a href="https://github.com/c/<%- github_repository_name %>">Source</a>
  </p>
</p>

## Table of Contents

* [Github setup](#github-setup)
* [Local installation](#local-installation)
* [Running locally](#running-locally)
* [Contact](#contact)

## Github setup

* Create a [new repository](https://github.com/new) called "<%- github_repository_name %>".
* Change the default branch from master to dev [here](https://github.com/<%- github_account_name %>/<%- github_repository_name %>/settings/branches).

## Local installation

1. Clone the repo, `cd` to the folder.
2. Run `yarn setup` to install all npm modules for every application.

## Running locally

1. Run `yarn infra` to launch the local infrastructure. 
2. Wait until the infrastructure is ready.
3. If not done before, in the other terminal, run `yarn seed` to seed the resources in the Localstack.
4. In the other terminal, run `cd apps/someapp & yarn dev` to launch the **blah** application.

## Deployment

To deploy, just create a PR from `dev` branch to `master`, and merge it.

The infrastructure lives in the other repository.

## Contact

Sergei Gannochenko - [Linkedin](https://www.linkedin.com/in/gannochenko/)
