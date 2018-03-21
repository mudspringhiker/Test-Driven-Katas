const wrap = (str, colNum) => {
    if (str.length <= 0 || !colNum) {
        return str;
    } else if (str.indexOf(' ') === -1) {
        return str;
    } else {
        const result = [];
        let lastSpaceIndex = str.lastIndexOf(' ', colNum);
        while (lastSpaceIndex > -1) {
            result.push(str.slice(0, lastSpaceIndex));
            str = str.slice(lastSpaceIndex + 1);
            if (str.length - 1 > colNum) {
                lastSpaceIndex = str.lastIndexOf(' ', colNum);
            } else {
                lastSpaceIndex = -1;
            }
        }
        result.push(str)
        return result.join('\n');
    }
}


module.exports = wrap;
