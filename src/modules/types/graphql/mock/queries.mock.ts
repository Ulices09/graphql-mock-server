import { TypesMockService } from './service.mock';

const service = new TypesMockService();

export default {
    types() {
        return service.getTypes();
    },
};
