import { isSpecialChar } from ".";

describe('Utils : Check If String Has a Special Character', () => {
    it('should return false with string with special char', () => {
        const data = 'test'
        const result = isSpecialChar(data)
        expect(result).toBe(false)
    })

    it('should return false with string with no special char', () => {
        const data = 'test!@%^%^'
        const result = isSpecialChar(data)
        expect(result).toBe(true)
    })
})