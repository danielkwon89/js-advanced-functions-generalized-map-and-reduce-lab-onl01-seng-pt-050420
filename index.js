const map = (arr, callback) => {
    return arr.map(arr => callback(arr))
}

// const reduce = (arr, callback, initVal = 0) => {
//     return arr.reduce(callback, initVal)
// }

// function reduce(arr, cb, initVal = 0){
//     return arr.reduce(cb, initVal)
// }

function reduce(arr, cb, initVal = 0){
    let r = (!!initVal) ? initVal : arr[0]
    let i = (!!initVal) ? 0 : 1
  
    for (; i < arr.length; i++) {
      r = cb(arr[i], r)
    }

    return r;
}