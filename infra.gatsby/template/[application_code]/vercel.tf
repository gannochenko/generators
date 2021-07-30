resource "vercel_project" "blog" {
  name = local.code
  framework = "gatsby"
  git_repository {
    type = "github"
    repo = var.repository
  }
  root_directory = "apps/<%- application_code %>"
}

resource "vercel_alias" "blog_main" {
  project_id = vercel_project.blog.id
  domain = var.apex_domain
}

resource "vercel_env" "blog_env_api_url" {
  project_id = vercel_project.blog.id
  type = "plain"
  key = "API_URL"
  value = var.api_url
  target = ["production", "preview", "development"]
}

resource "vercel_env" "blog_env_ga_id" {
  project_id = vercel_project.blog.id
  type = "plain"
  key = "GA_TRACKING_ID"
  value = var.gtag
  target = ["production", "preview", "development"]
}

resource "vercel_env" "blog_env_ga_link" {
  project_id = vercel_project.blog.id
  type = "plain"
  key = "GA_LINK"
  value = var.ga_link
  target = ["production", "preview", "development"]
}

resource "vercel_env" "blog_env_deployment_link" {
  project_id = vercel_project.blog.id
  type = "plain"
  key = "DEPLOYMENT_LINK"
  value = var.deployment_link
  target = ["production", "preview", "development"]
}
