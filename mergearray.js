function merge(a, b) {
    let mergedFun = [];
    mergedFun[0] = a;
    mergedFun[1] = b;
    mergedFun.sort(function(a, b) {return a - b});
}
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);