import { sumRecursive, itemCount, maxNumber } from "./other-functions";
test("Adds array values and returns sum", () => {
    expect(sumRecursive([1,2,3])).toBe(6)
})

test("counts items in array", () => {
    expect(itemCount([1,2,3, 'the'])).toBe(4)
})

test("returns max number from array", () => {
    expect(maxNumber([1, 5, 4])).toBe(5)
})