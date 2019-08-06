const { GraphQLServer } = require('graphql-yoga')

// import the prisma client instance to that the resolvers can get access to it.
const { prisma } = require('./generated/prisma-client')

// Import the resolvers:
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Link = require('./resolvers/Link')
const Subscription = require('./resolvers/Subscription')
const Vote = require('./resolvers/Vote')

const resolvers = {
    Query,
    Mutation,
    Subscription,
    User,
    Link,
    Vote,
}

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

// DUMMY LINKS -- REMOVED NOW THAT WE'RE CONNECTED WITH PRISMA
// let links= [
//     {
//         id: 'link-0',
//         url: 'www.howtographql.com',
//         description: 'Fullstack tutorial for GraphQL'
//     },
//     {
//         id: 'link-1',
//         url: 'www.wired.com',
//         description: 'Wired Magazine'
//     }
// ]

// let idCount = links.length

// 2  Resolvers object: actual implementation of the GraphQL schema.  Notice its similarity to // 1
// MOVING THE RESOLVERS EXTERNAL!
// const resolvers = {
//     Query: {
//         info: () => `This is the API of a Hackernews Clone`,
//         feed: () => (root, args, context, info) => {
//             return context.prisma.links()
//         }
//     },
//     // Link: { // We can remove this because the GraphQL server infers what they look like!
//     //     id: (parent) => parent.id,
//     //     description: (parent) => parent.description,
//     //     url: (parent) => parent.url
//     // }
//     Mutation: {
//         post: (root, args, context) => {
//             // const link = {
//             //     id: `link-${idCount++}`,
//             //     description: args.description,
//             //     url: args.url
//             // }
//             // links.push(link)
//             // return link
//             return context.prisma.createLink({
//                 url: args.url,
//                 description: args.description
//             })
//         }
//     }
// }

// 3  Bundle schema and resolvers and pass to GraphQLServer
const server = new GraphQLServer({
    typeDefs:  './src/schema.graphql', // it's external now!
    resolvers,
    context: request => { // Instead of attaching an object directly, create the context as a function which returns the context
        return {
            ...request,
            prisma, 
        } // initialize the context object and attach to client instance
    }
})

server.start(() => console.log(`Server is lit on localhost:4000!`))