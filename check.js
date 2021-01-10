let arr = [2, 1, 5, 6, 4];

function bubble(arr) {
    for (let i = 0; i < arr.length; i++) {
        let flag = true;
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                flag = false;
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
            if(flag) break;
        }
    }
    return arr;
}

console.log(bubble(arr));
