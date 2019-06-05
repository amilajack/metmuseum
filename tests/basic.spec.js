import fetch from 'isomorphic-fetch';
import basic from '../';

describe('basic', () => {
    it.only('should get all items', async () => {
        console.log(await fetch('https://collectionapi.metmuseum.org/public/collection/v1/departments'));
        const res = await basic.getAllItems();
        expect(res).toEqual({});
    });

    it('should get item', async () => {
        const item = await basic.getItem(400);
    });

    it('should get departments', async () => {
        const res = await basic.getDepartments();
        expect(res).toEqual({});
    });

    it('should get departments', async () => {
        const res = await basic.search('foo');
        expect(res).toEqual({});
    });
});
