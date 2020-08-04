import { Pet } from '../../entities/pet.entity';
import { PetCreateInput } from './pets.types';

const pets: Pet[] = [
    { name: 'Pulgoso', type: 'dog' },
    { name: 'Pana Miguel', type: 'cat' },
    { name: 'Aurora', type: 'parrot' },
    { name: 'Mordelón', type: 'other' },
];

export class PetsService {
    getPets(): Pet[] {
        return pets;
    }

    getByType(type: string): Pet[] {
        return pets.filter((x) => x.type === type);
    }

    createPet(input: PetCreateInput): Pet {
        const pet = new Pet();
        pet.name = input.name;
        pet.type = input.type as any;
        pets.push(pet);

        return pet;
    }
}
