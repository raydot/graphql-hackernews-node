const { GraphQLServer } = require('graphql-yoga')

// 1  Define the GraphQL schema
const typeDefs = 
type Query {
    info: String!
}

// 2  Resolvers object: actual implementation of the GraphQL schema.  Notice it's similarity to // 1
const resolvers = {
    Query: {
        info: () => `This is the API of a Hackernews Clone`
    }
}

// 3  Bundle schema and resolvers and pass to GraphQLServer
const server = new GraphQLServer({
    typeDefs,
    resolvers,
})

server.start(() => console.log(`Server is lit on localhost:4000!`))