function square(n) {
    return 0;
function square(n: unknown): number {
    if (typeof n === 'number')
    {
        return n * n;
    }
    return -1;
}

function numberString(i: number): string | number {
    let result: string = "";    
    if (i % 1 == 0 && i > 0) {
        for (let a = 1; a <= i; c++) {
        result += a.toString();
        }
    return result;
    }
    return -1
