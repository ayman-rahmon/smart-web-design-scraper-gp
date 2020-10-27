export function equalWithTolerance(a: number, b: number, tolerance: number): boolean {
    let val = a - b;
    if (a - b < 0) val = -val;

    return val < tolerance;
}

export function componentToHex(c: number) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

export function rgbToHex(r: number, g: number, b: number) {
    return componentToHex(r) + componentToHex(g) + componentToHex(b);
}
