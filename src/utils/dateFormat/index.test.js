import { dateFormat } from ".";

describe('Utils : Format ISO Date into DD-MMMM-YY', () => {
    it('will return formated date with full text month', () => {
        const result = dateFormat('2021-11-19T02:45:54+07:00')
        expect(result).toBe('19 November 2021')
    })
})