module.exports = function towelSort(matrix) {
    if (typeof matrix === "undefined") {
        return [];
    }
    return matrix.reduce((newArr, el, index) => {
        if (index % 2 === 0) {
            return newArr.concat(el);
        } else return newArr.concat(el.reverse());
    }, []);
};
