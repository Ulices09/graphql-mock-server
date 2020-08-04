import { Type } from '../../entities/type.entity';

const types: Type[] = [
    { name: 'dog' },
    { name: 'cat' },
    { name: 'parrot' },
    { name: 'other' },
];

export class TypesService {
    getTypes(): Type[] {
        return types;
    }
}
