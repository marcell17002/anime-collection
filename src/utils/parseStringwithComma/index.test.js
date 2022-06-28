import { parseStringwithComma } from ".";

describe('Utils - Re-format Array of String to Single String with Comma', () => {
    it('should reformat multiple index string using comma', () => {
        const data = ['this', 'is', 'title']
        const result = parseStringwithComma(data)
        expect(result).toBe('this, is and title')
    })
})