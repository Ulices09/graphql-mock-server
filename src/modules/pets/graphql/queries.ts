import { PetsService } from '../pets.service';
import { PetsByTypeArgs } from '../pets.types';

const service = new PetsService();

export default {
    pets() {
        return service.getPets();
    },
    petsByType(parent: any, args: PetsByTypeArgs) {
        return service.getByType(args.type);
    },
};
