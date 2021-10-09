resource "godaddy_domain_record" "apex" {
  // apex domain:
  domain = "<%- apex_domain %>"

  // sub-domains:
//  record {
//    name = "api"
//    type = "CNAME"
//    data = "cname.vercel-dns.com"
//    ttl = 3600
//  }

  addresses = local.dns_provider_ip
}
