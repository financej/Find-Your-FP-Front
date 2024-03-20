export const getRandomId = (prefix) => {
    return prefix + '_' + Math.random().toString(36).substring(2, 9)
}