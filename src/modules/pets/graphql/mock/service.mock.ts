import { Pet } from '../../../../entities/pet.entity';
import { PetCreateInput } from '../../pets.types';

const pets: Pet[] = [
    { name: 'Mock Manual', type: 'dog' },
    { name: 'Mock Manual 2', type: 'cat' },
];

export class PetsMockService {
    getPets(): Pet[] {
        return pets;
    }

    getByType(type: string): Pet[] {
        const pet = new Pet();
        pet.name = 'A mano';
        pet.type = 'dog';

        return [pet];
    }

    createPet(input: PetCreateInput): Pet {
        const pet = new Pet();
        pet.name = input.name;
        pet.type = input.type as any;

        return pet;
    }
}
