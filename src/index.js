module.exports = function optimizedReverse(n) {
    const reversed = parseInt(n.toString().split('').reverse().join(''))

    return reversed
}

