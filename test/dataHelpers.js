import { snakeCase } from 'lodash';

export const convertKeysToSnakecase = obj => {
    const keys = Object.keys(obj);
    let result = {};
    keys.forEach(key => {
        if (typeof obj[key] === 'object') {
            result[snakeCase(key)] = convertKeysToSnakecase(obj[key]);
        } else {
            result[snakeCase(key)] = obj[key];
        }
    });
    return result;
}