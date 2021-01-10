let arr = [5, 2, 1, 3, 8, 10, 12, 11];

// 冒泡排序 -- 实际上就是把最大的数字找出来。
// function sort(data) {
//     for (let i = 0; i < data.length - 1; i++) {
//         for (let j = 0; j < data.length - i - 1; j++) {
//             if (data[j] > data[j + 1]) {
//                 let swap = data[j];
//                 data[j] = data[j + 1];
//                 data[j + 1] = swap;
//             }
//         }
//         // console.log(data);
//     }
//     return data;
// }

// 快速排序  找到个中间值，分为两部分进行处理。 递归
// function sort(data) {
//     if (data.length <= 1) {
//         return data;
//     }
//
//     let midIndex = Math.floor(data.length / 2);
//     let midData = data.splice(midIndex, 1)[0];
//     let right = [], left = [];
//     for (let i = 0; i < data.length; i++) {
//         if (data[i] < midData) {
//             left.push(data[i]);
//         } else {
//             right.push(data[i]);
//         }
//     }
//
//     return sort(left).concat([midData], sort(right));
// }

// 插入排序  就是将最小放到前面排好的序列。  扑克牌排序的机械化。
// function sort(data) {
//     for (let i = 1; i < data.length; i++) {
//        if (data[i] < data[i - 1]) {
//            let guard = data[i];
//            let j = i - 1;
//            while (j >= 0 && guard < data[j]) {
//                data[j + 1] = data[j];
//                j--;
//            }
//            data[j + 1] = guard;
//        }
//     }
//     return data;
// }

// 选择排序 -- 每次循环筛选最小值到前面。
function sort(data) {
    let minIndex, temp;
    for (let i = 0; i < data.length - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < data.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return data;
}

console.log(sort(arr));
