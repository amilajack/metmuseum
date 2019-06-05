import basic from '../';

describe('basic', () => {
    it('should basic bar', () => {
        const res = Promise.all([
            basic.getAllItems(),
            basic.getItem(),
            basic.getDepartments(),
            basic.search(),
        ]);
    });
});
