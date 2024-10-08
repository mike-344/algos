import { findSmallest, selectionSort } from "./selection-sort"

test("finds smallest value", () => {
    expect(findSmallest([7, 3, 6, 8, 9])).toBe(1)
})
test("sorts array", () => {
    expect(selectionSort([7, 3, 6, 8, 9, 9])).toEqual([3, 6, 7, 8, 9, 9])
})