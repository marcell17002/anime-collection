import { parseStringwithSlash } from ".";

describe('Utils - Re-format Array of String to Single String with Slash', () => {
    it('should reformat multiple index string using slash', () => {
        const data = ['this', 'is', 'title']
        const result = parseStringwithSlash(data)
        expect(result).toBe('this / is / title')
    })
})