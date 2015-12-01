function merge(ar1, ar2) {
    var result = [];
    var i1 = 0;
    var i2 = 0;

    while(i1 < ar1.length && i2 < ar2.length) {
        if(ar1[i1] < ar2[i2]) {
            result.push(ar1[i1]);
            i1++;
        } else {
            result.push(ar2[i2]);
            i2++;
        }
    }
    if (i1 < ar1.length) {
        result = result.concat(ar1.slice(i1))
    }
    if (i2 < ar2.length) {
        result = result.concat(ar2.slice(i2))
    }

    return result;
}

function mergeSort(myarray) {
    if (myarray.length == 1) {
        return myarray;
    } else {
        var l = myarray.length / 2;
        var left = myarray.slice(0, Math.ceil(l));
        var right = myarray.slice(Math.ceil(l));
        return merge(mergeSort(left), mergeSort(right));
    }
}