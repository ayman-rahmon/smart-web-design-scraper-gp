import { ComponentPosition } from "Shared/types/types";

export function getAbsolutePosition(win: Window, bound: DOMRect): ComponentPosition {
    return {
        x: Math.floor(bound.x + win.scrollX),
        y: Math.floor(bound.y + win.scrollY),
        w: Math.floor(bound.width),
        h: Math.floor(bound.height)
    };
}
