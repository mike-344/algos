import { binarySearch } from "./binary-search"

test("Returns location of item in sorted array using binary search", () => {
    expect(binarySearch([1, 3, 6, 8, 9], 8)).toBe(3)
})

test("Returns null if item not found", () => {
    expect(binarySearch([1, 3, 6, 8, 9], 4)).toBe(null)
})