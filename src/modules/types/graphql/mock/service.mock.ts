import { Type } from '../../../../entities/type.entity';

const types: Type[] = [{ name: 'other' }, { name: 'other' }];

export class TypesMockService {
    getTypes(): Type[] {
        return types;
    }
}
