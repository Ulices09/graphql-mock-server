import { TypesService } from '../types.service';

const service = new TypesService();

export default {
    types() {
        return service.getTypes();
    },
};
