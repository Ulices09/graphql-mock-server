import { ApolloServer, gql } from 'apollo-server';
import { PetService } from './services/pet.service';

type PetsByTypeArgs = {
    type: string;
};

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
        // ...resolvers.Query,
        pets: () => [
            { name: 'Manual Mock', type: 'dog' },
            { name: 'Manual 2', type: 'cat' },
        ],
    }),
};

const service = new PetService();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    mocks,
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
