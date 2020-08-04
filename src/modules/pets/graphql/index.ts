import fs from 'fs';
import path from 'path';
import { GraphQLModule } from '@graphql-modules/core';
import { gql } from 'apollo-server-koa';

import queries from './queries';
import mutations from './mutations';

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

export default PetsModule;
