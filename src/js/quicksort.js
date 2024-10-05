function quicksort(arr){
    if (arr.length < 2) return arr
    let pivot = arr[0]
    const lower = arr.filter((item) => item < pivot)
    const higher = arr.filter((item) => item > pivot)
    const equal = arr.filter((item) => item === pivot)
    
    return quicksort(lower).concat(equal,quicksort(higher))

    
}

export{quicksort}