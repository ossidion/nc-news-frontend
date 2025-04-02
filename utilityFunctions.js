export function reverseDate(string) {
    let reversedString = string.slice(8, 10) + string.slice(4, 7) + "-" +  string.slice(0, 4)
    return reversedString
}