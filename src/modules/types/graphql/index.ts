import fs from 'fs';
import path from 'path';
import { GraphQLModule } from '@graphql-modules/core';
import { gql } from 'apollo-server-koa';

import queries from './queries';

import queriesMock from './mock/queries.mock';

const graphql = fs.readFileSync(path.join(__dirname, 'schema.gql'), 'utf8');

const TypesModule = new GraphQLModule({
    typeDefs: gql`
        ${graphql}
    `,
    resolvers: {
        Query: { ...queries },
    },
});

export const typesMock = {
    Query: {
        ...queriesMock,
    },
};

export default TypesModule;
