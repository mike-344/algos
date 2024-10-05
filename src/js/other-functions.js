function sumRecursive(arr){
    if (arr.length === 0){
        return 0
    } 
    let val = arr.pop()
    return  val + sumRecursive(arr)
    
}

function itemCount(arr){
    if (arr.length === 0){
        return 0
    }
    arr.pop()
    return 1 + itemCount(arr)
    
}
function maxNumber(arr){
    if (arr.length === 0) return null
    if (arr.length === 1) return arr[0]
    if (arr[0] > arr[1]){
        arr.splice(1, 1)
    } else{
        arr.splice(0, 1)
    }
    return maxNumber(arr)
        
}
export{sumRecursive, itemCount, maxNumber}