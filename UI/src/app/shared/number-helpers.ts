export function roundToWithPercentage(value: number, precision = 1): string {
    return `${value.toFixed(precision)}%`;
}
