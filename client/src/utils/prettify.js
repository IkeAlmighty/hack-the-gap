export function decamelCase(text) {
    return text.replace(/([a-z])([A-Z])/g, '$1 $2') // Insert space before uppercase letters
        .replace(/^./, (match) => match.toUpperCase()); // Capitalize the first letter
}