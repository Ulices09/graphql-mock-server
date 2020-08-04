import { ApolloServer } from 'apollo-server-koa';
import Koa from 'koa';
import { GraphQLModule } from '@graphql-modules/core';
import PetsModule from './modules/pets/graphql';
import TypesModule from './modules/types/graphql';

const { schema, context, typeDefs, resolvers } = new GraphQLModule({
    imports: [PetsModule, TypesModule],
});

const app = new Koa();

const mocks = {
    Query: () => ({
        pets: () => [
            { name: 'Manual Mock', type: 'dog' },
            { name: 'Manual 2', type: 'cat' },
        ],
    }),
};

const server = new ApolloServer({
    // schema,
    context,
    typeDefs,
    resolvers,
});

const mockServer = new ApolloServer({
    // schema,
    // context,
    typeDefs,
    resolvers,
    mocks,
});

server.applyMiddleware({
    app,
    path: '/graphql',
});

mockServer.applyMiddleware({
    app,
    path: '/graphql-mock',
});

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`🚀  Server ready in port ${PORT}`);
});
