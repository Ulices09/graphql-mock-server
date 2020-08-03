import { Pet } from '../entities/pet.entity';

const pets: Pet[] = [
    { name: 'Pulgoso', type: 'dog' },
    { name: 'Pana Miguel', type: 'cat' },
    { name: 'Aurora', type: 'parrot' },
    { name: 'Mordelón', type: 'other' },
];

export class PetService {
    getPets(): Pet[] {
        return pets;
    }

    getByType(type: string): Pet[] {
        return pets.filter((x) => x.type === type);
    }
}
