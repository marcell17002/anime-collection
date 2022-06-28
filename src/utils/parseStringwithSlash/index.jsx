export const parseStringwithSlash = (data) => {
    let result = ''
    data.map((item, key) => {
        if (key === data.length - 1) return result += `${item}`
        return result += `${item} / `
    })
    return result
}