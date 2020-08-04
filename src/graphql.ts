import { GraphQLModule } from '@graphql-modules/core';
import PetsModule, { petsMock } from './modules/pets/graphql';
import TypesModule, { typesMock } from './modules/types/graphql';

export default new GraphQLModule({
    imports: [PetsModule, TypesModule],
});

export const mocks = {
    Query: () => ({
        ...petsMock.Query,
        ...typesMock.Query,
    }),
    Mutation: () => ({
        ...petsMock.Mutation,
    }),
};

// export const mocks = {
//     Query: () => ({
//         pets: () => [
//             { name: 'Manual Mock', type: 'dog' },
//             { name: 'Manual 2', type: 'cat' },
//         ],
//     }),
//     Mutation: () => ({
//         petCreate: () => ({
//             name: 'Manual',
//             type: 'Mock',
//         }),
//     }),
// };
