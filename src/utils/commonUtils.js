export const getRandomId = (prefix) => {
    return prefix + '_' + Math.random().toString(36).substring(2, 9)
}

export const convertNewLinesToBreaks = (string) => {
    const lines = string.split('\n');
    const wrappedLines = lines.map(str => `<span>${str}</span>`).join('');
    return wrappedLines;
}