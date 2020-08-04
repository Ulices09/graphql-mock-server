import { PetsMockService } from './service.mock';
import { PetsByTypeArgs } from '../../pets.types';

const service = new PetsMockService();

export default {
    pets() {
        return service.getPets();
    },
    petsByType(parent: any, args: PetsByTypeArgs) {
        return service.getByType(args.type);
    },
};
