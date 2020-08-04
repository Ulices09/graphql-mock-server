import { PetsService } from '../pets.service';
import { PetCreateInput } from '../pets.types';

const service = new PetsService();

export default {
    petCreate(parent: any, args: { input: PetCreateInput }) {
        return service.createPet(args.input);
    },
};
