function findSmallest(arr){
    let smallest = arr[0]
    let smallestIndex = 0
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < smallest){
            smallest = arr[i]
            smallestIndex = i
        } 
        
    }
    return smallestIndex
}

function selectionSort(arr){
    let sortedArray = []
    let copiedArray = [...arr]
    for (let i = 0; i < arr.length; i++){
        let smallestIndex = findSmallest(copiedArray)
        let smallest = copiedArray.splice(smallestIndex, 1)
        sortedArray.push(smallest[0])
    }
    return sortedArray
}

export{findSmallest, selectionSort}