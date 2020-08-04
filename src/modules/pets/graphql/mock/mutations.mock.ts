import { PetsMockService } from './service.mock';
import { PetCreateInput } from '../../pets.types';

const service = new PetsMockService();

export default {
    petCreate(parent: any, args: { input: PetCreateInput }) {
        return service.createPet(args.input);
    },
};
