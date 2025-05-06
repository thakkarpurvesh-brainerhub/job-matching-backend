export function generateMockEmbedding(text: string, dimensions = 10): number[] {
    const hash = Array.from(text).reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return Array.from({ length: dimensions }, (_, i) =>
        Math.sin(hash + i * 31.42) // arbitrary function to simulate a vector
    );
}  