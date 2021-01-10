const getIntersection = (...arrs) => {
    console.log(arrs);
    return Array.from(new Set(arrs.reduce((total, arr) => {
        return arr.filter(item => total.includes(item));
    })));
}

const data = getIntersection([1, 2, 3, 4], [2, 3, 4, 5, 6], [2, 3])

console.log(data);
