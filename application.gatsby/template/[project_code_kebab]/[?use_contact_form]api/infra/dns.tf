resource "godaddy_domain_record" "routine-gannochenko-app" {
  domain = "gannochenko.app"

  record {
    name = "routine"
    type = "CNAME"
    data = "cname.vercel-dns.com"
    ttl = 3600
  }

  // A records
  addresses   = ["76.76.21.21"]
}
