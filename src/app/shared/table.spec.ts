import { table } from './table';

describe('Table', () => {
    describe('isOutOfBounds', () => {
        it('Should return false', () => {
            const isValid = table.isOutOfBounds(1, 1);
            expect(isValid).toBeFalsy;
        });

        it('Should return true', () => {
            const isValid = table.isOutOfBounds(1, 5);
            expect(isValid).toBeTruthy;
        });
    });
});