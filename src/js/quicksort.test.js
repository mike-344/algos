import { quicksort } from "./quicksort";

test("sorts an array", () => {
    expect(quicksort([7, 3, 6, 4, 4, 8, 9, 3])).toEqual([3, 3, 4, 4, 6, 7, 8, 9])
})