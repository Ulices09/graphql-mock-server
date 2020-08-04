import { ApolloServer, gql } from 'apollo-server-koa';
import { PetService } from './services/pet.service';
import Koa from 'koa';

type PetsByTypeArgs = {
    type: string;
};

const service = new PetService();

const typeDefs = gql`
    type Pet {
        name: String
        type: String
    }

    type Query {
        pets: [Pet]
        petsByType(type: String): [Pet]
    }
`;

const resolvers = {
    Query: {
        pets: () => service.getPets(),
        petsByType: (parent: any, args: PetsByTypeArgs) =>
            service.getByType(args.type),
    },
};

const mocks = {
    Query: () => ({
        pets: () => [
            { name: 'Manual Mock', type: 'dog' },
            { name: 'Manual 2', type: 'cat' },
        ],
    }),
};

const app = new Koa();

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const mockServer = new ApolloServer({
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

app.listen(4000, () => {
    console.log(`🚀  Server ready`);
});
