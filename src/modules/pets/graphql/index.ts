import fs from 'fs';
import path from 'path';
import { GraphQLModule } from '@graphql-modules/core';
import { gql } from 'apollo-server-koa';

import queries from './queries';
import mutations from './mutations';

import queriesMock from './mock/queries.mock';
import mutationMock from './mock/mutations.mock';

const graphql = fs.readFileSync(path.join(__dirname, 'schema.gql'), 'utf8');

const PetsModule = new GraphQLModule({
    typeDefs: gql`
        ${graphql}
    `,
    resolvers: {
        Mutation: { ...mutations },
        Query: { ...queries },
    },
});

export const petsMock = {
    Query: {
        ...queriesMock,
    },
    Mutation: {
        ...mutationMock,
    },
};

export default PetsModule;
