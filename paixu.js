// function sort(data) {
//     for (let i = 0; i < data.length - 1; i++) {
//         for (let j = 0; j < data.length - i - 1; j++) {
//             if (data[j] > data[j+ 1]) {
//                 let swap = data[j];
//                 data[j] = data[j + 1];
//                 data[j + 1] = j[i];
//             }
//         }
//     }
//     return data;
// }
//
// let arr = [3, 1, 2, 3, 5, 7];
// sort(arr);
//
// function quickSort(data) {
//     if (data.length <= 1) {
//         return data;
//     }
//     let midIndex = Math.floor(data.length / 2);
//     let midData = data.splice(midIndex, 1)[0];
//     let right = [],left = [];
//     for (let i = 0; i < data.length; i++) {
//         if (data[i] < midData) {
//             left.push(data[i]);
//         } else {
//             right.push(data[i]);
//         }
//     }
//     return  quickSort(left).concat([midData], quickSort(right));
// }
//
// quickSort(arr);
//
// function insertSort(data) {
//     for (let i = 1; i < data.length; i++) {
//         if (data[i] < data[i - 1]) {
//             let guard = data[i];
//             let j = i - 1;
//             data[i] = data[j];
//             while (j >= 0 && guard < data[j]) {
//                 data[j + 1] = data[j];
//                 j--;
//             }
//             data[j + 1] = guard;
//         }
//     }
// }
//
// function binartSerach(data, dest, start, end) {
//     let endData = end || data.length - 1,
//         startData = start || 0,
//         mid = Math.floor((start + end) / 2);
//     if (data[mid] == dest) {
//         return mid;
//     }
//     if (dest < data[mid]) {
//         return  binartSerach(data, dest, 0, mid - 1);
//     } else {
//         return  binartSerach(data, dest, mid + 1, end);
//     }
//     return false;
// }
//
// function binarySearch(data, dest) {
//     let last = data.length - 1,
//         start = 0;
//     while (start <= last) {
//         let mid = Math.floor((last + 1) / 2);
//         if (data[mid] == dest) {
//             return mid;
//         }
//         if (dest > data[mid]) {
//             start = mid + 1;
//         } else {
//             last = mid - 1;
//         }
//     }
//     return false;
// }
//
// binarySearch(arr, 5);
//
// binartSerach(arr, 5);
//
// insertSort(arr);
//
//
// function selectSort(data) {
//     let len = data.length;
//     let minIndex, temp;
//     for (let i = 0; i < len - 1; i++) {
//         minIndex = i;
//         for (let j = i + 1; j < len; j++) {
//             if (arr[j] < arr[minIndex]) {
//                 minIndex = j;
//             }
//         }
//         temp = arr[i];
//         arr[i] = arr[minIndex];
//         arr[minIndex] = temp;
//     }
//     return data;
// }
//
// function shellSort(arr) {
//     let len = arr.length,
//         temp,
//         gap = 1;
//     while (gap < len / 5) {
//         gap = gap * 5 + 1;
//     }
//     for (gap; gap > 0; gap = Math.floor(gap / 5)) {
//         for (let i = gap; i < len; i++) {
//             temp = arr[i];
//             for (let j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
//                 arr[j + gap] = arr[j];
//             }
//             arr[j + gap] = temp;
//         }
//     }
//     return arr;
// }


function mergerSort(arr) {
    function _mergeSort(arr) {
        if (arr.length == 1) {
            return arr;
        }
        let mid = Math.floor(arr.length / 2);
        console.log(mid);
        let left = arr.splice(0, mid);
        // let right = arr;

        // console.log(mid);
        // _mergeSort(arr, left, mid);
        // _mergeSort(arr, mid, right);
        let data =  _merge(_mergeSort(left), _mergeSort(arr));
        console.log(data);
        return data;
    }

    function _merge(a, b) {
        let n = a && a.length;
        let m = b && b.length;
        let c = [];
        let i = 0, j = 0;

        while (i < n && j < m)
        {
            if (a[i] < b[j])
                c.push(a[i++]);
            else
                c.push(b[j++]);
        }

        while (i < n)
            c.push(a[i++]);

        while (j < m)
            c.push(b[j++]);

        console.log("将数组",a,'和',b,'合并为',c)
        return c;
    }
    return  _mergeSort(arr);
}
let arr = [3, 1, 2, 3, 5, 7];
let mergeData = mergerSort(arr);
console.log(mergeData, 'merge');
