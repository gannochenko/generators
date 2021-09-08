// gannochenko.app
resource "godaddy_domain_record" "<%- project_code %>-apex" {
  domain = local.apex_domain

  // applications on sub-domains

  record {
    name = "<%- project_code %>"
    type = "CNAME"
    data = "cname.vercel-dns.com"
    ttl = 3600
  }

  addresses = local.dns_provider_ip
}
