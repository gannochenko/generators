resource "vercel_project" "<%- application_code %>" {
  name = "<%- application_code_tf %>"
  framework = "gatsby"
  git_repository {
    type = "github"
    repo = var.repository
  }
  root_directory = "apps/<%- application_code %>"
}

resource "vercel_alias" "<%- application_code %>_main" {
  project_id = vercel_project.<%- application_code %>.id
  domain = var.domain
}

resource "vercel_env" "<%- application_code %>_env_api_url" {
  project_id = vercel_project.<%- application_code %>.id
  type = "plain"
  key = "API_URL"
  value = var.api_url
  target = ["production", "preview", "development"]
}

resource "vercel_env" "<%- application_code %>_env_api_env" {
  project_id = vercel_project.<%- application_code %>.id
  type = "plain"
  key = "API_ENV"
  value = "prod"
  target = ["production", "preview", "development"]
}

resource "vercel_env" "<%- application_code %>_env_ga_id" {
  project_id = vercel_project.<%- application_code %>.id
  type = "plain"
  key = "GA_TRACKING_ID"
  value = var.gtag
  target = ["production", "preview", "development"]
}

resource "vercel_env" "<%- application_code %>_env_ga_link" {
  project_id = vercel_project.<%- application_code %>.id
  type = "plain"
  key = "GA_LINK"
  value = var.ga_link
  target = ["production", "preview", "development"]
}

resource "vercel_env" "<%- application_code %>_env_deployment_link" {
  project_id = vercel_project.<%- application_code %>.id
  type = "plain"
  key = "DEPLOYMENT_LINK"
  value = var.deployment_link
  target = ["production", "preview", "development"]
}
