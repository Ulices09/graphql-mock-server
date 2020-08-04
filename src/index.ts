import { ApolloServer } from 'apollo-server-koa';
import Koa from 'koa';
import GraphqlModule, { mocks } from './graphql';

const { schema, context, typeDefs, resolvers } = GraphqlModule;

const app = new Koa();

const server = new ApolloServer({
    schema,
    context,
});

const mockServer = new ApolloServer({
    // schema,
    context,
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
