# graphql-hackernews-node
Following Tutorial on how to build a Hacker News clone in GraphQL: https://www.howtographql.com/graphql-js/0-introduction/

## Library includes
<ul>
    <li>`graphql-yoga`, a fully-featured GQL server based on Express</li>
    <li>`prisma`, a CLI for connecting to a Prisma Server</li>
    <li>`prisma-client-lib`, a dependency required to make the auto-generated Prisma work</li>

</ul>

To Deploy Code: `prisma deploy`.  There is a hook in the .yml file that automatically calls `prisma generate`

To Start: `node src/index.js`

## Fun Facts:

"Prisma client exposes a CRUD API for the models in your datamodel for you to read and write in your database. These methods are auto-generated based on your model definitions in `datamodel.prisma`."

## Verdict:

All in all a pretty good tutorial!  Was thorough, no mistakes, not much time spent head-scratching, and a lot of ways to learn.  Could use a little more "why" but that's probably just me.
