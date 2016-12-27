describe('test', ()=> {
    it('sqrt equals to Math.sqrt', ()=> {
        expect(sqrt(16)).toBe(4);
    });
    it('square equals to Math.pow(num, 2)', ()=> {
        expect(square(4)).toBe(16);
    });
    it('sqrt of square equals to original number', ()=> {
        expect(sqrt(square(4))).toBe(4);
    });
});
