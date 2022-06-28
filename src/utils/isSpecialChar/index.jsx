export const isSpecialChar = (payload) => {
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
    return format.test(payload)
}