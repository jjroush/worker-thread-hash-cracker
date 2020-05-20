let passwords = [];

for (let i = 0; i <= 9999999; i++)
    passwords.push(i.toString().padStart(7, '0'));

export const passwordArray = passwords;

export const chunkArray = (array, parts) => {
    let tempArray = [];
    const chunkSize = Math.ceil(array.length / parts);

    for (let i = 0; i < array.length; i += chunkSize) {
        const chunk = array.slice(i, i + chunkSize);

        tempArray.push(chunk)
    }
    return tempArray;
}