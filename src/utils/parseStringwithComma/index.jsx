export const parseStringwithComma = (data) => {
    let result = ''
    data.map((item, key) => {
        if (key === data.length - 2) return result += `${item} and `
        else if (key === data.length - 1) return result += `${item}`
        return result += `${item}, `
    })
    return result
}