export function capitalizeEachWord(string) {
    if (string) {
        return string.split(" ").map(item => {
            let lower = item.toLowerCase()
            return lower[0].toUpperCase() + lower.slice(1)
        }).join(" ")
    } else {
        return ''
    }
}

export function trimString(string, length) {
    if (string) {
        return string.length > length ? string.substring(0, length) + '...' : string
    } else {
        return ''
    }
}