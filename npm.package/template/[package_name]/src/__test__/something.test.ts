import { doSomething } from '../something';

describe('doSomething()', () => {
    it('should work', async () => {
        expect(doSomething()).toEqual(true);
    });
});
