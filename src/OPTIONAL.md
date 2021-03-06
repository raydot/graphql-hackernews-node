# Optional Exercises

## At the end of the section 'A Simple Mutation'
If you want to practice implementing GraphQL resolvers a bit more, here’s an optional challenge for you. Based on your current implementation, extend the GraphQL API with full CRUD functionality for the Link type. In particular, implement the queries and mutations that have the following definitions:

```
type Query {
  # Fetch a single link by its `id`
  link(id: ID!): Link
}

type Mutation {
  # Update a link
  updateLink(id: ID!, url: String, description: String): Link

  # Delete a link
  deleteLink(id: ID!): Link
}
```