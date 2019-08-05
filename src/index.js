const { GraphQLServer } = require('graphql-yoga')

// 1  Define the GraphQL schema
// MOVED TO EXTERNAL FILE schema.graphql
// const typeDefs = `
// type Query {
//     info: String!
//     feed: [Link!]!
// }

// type Mutation {
//     post(url: String!, description: String!): Link!
// }

// type Link {
//     id: ID!
//     description: String!
//     url: String!
// }`

// DUMMY LINKS
let links= [
    {
        id: 'link-0',
        url: 'www.howtographql.com',
        description: 'Fullstack tutorial for GraphQL'
    },
    {
        id: 'link-1',
        url: 'www.wired.com',
        description: 'Wired Magazine'
    }
]

let idCount = links.length

// 2  Resolvers object: actual implementation of the GraphQL schema.  Notice its similarity to // 1
const resolvers = {
    Query: {
        info: () => `This is the API of a Hackernews Clone`,
        feed: () => links
    },
    // Link: { // We can remove this because the GraphQL server infers what they look like!
    //     id: (parent) => parent.id,
    //     description: (parent) => parent.description,
    //     url: (parent) => parent.url
    // }
    Mutation: {
        post: (parent, args) => {
            const link = {
                id: `link-${idCount++}`,
                description: args.description,
                url: args.url
            }
            links.push(link)
            return link
        }
    }
}

// 3  Bundle schema and resolvers and pass to GraphQLServer
const server = new GraphQLServer({
    typeDefs:  './src/schema.graphql', // it's external now!
    resolvers,
})

server.start(() => console.log(`Server is lit on localhost:4000!`))