import { USER } from './types';

const showUser = (user) => {
    return {
        type: USER,
        user
    }
};

