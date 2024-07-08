export function limitWords(input: string, maxWords: number): string {
    try {
        if (typeof input !== 'string') {
            throw new Error("Input must be a string.");
        }
        
        if (typeof maxWords !== 'number' || maxWords <= 0) {
            throw new Error("Max words must be a positive number.");
        }

        const words = input.split(/\s+/); // Split the input string by whitespace
        if (words.length <= maxWords) {
            return input; // If the input has fewer or equal words than maxWords, return the input as is
        }
        
        return words.slice(0, maxWords).join(' '); // Join the first maxWords words back into a string
    } catch (error) {
        console.error(error); // Log the error message to the console
        return ""; // Return an empty string if an error occurs
    }
}

 