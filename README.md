### Sample Merchant Subgraph GraphQL Server

Sample Query:

query {
  merchants {
    capabilities
    email
    id
    name
    transactions {
      id
    }
  }
}

