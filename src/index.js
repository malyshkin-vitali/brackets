module.exports = function check(str, bracketsConfig) {
    let res = [];

    for (let h = 0; h < bracketsConfig.length; h++) {

        res.push(bracketsConfig[h][0] + bracketsConfig[h][1])

    }

    for (let i = 0; i < str.length; i++) {

        if (str.includes(res[i])) {

            str = str.replace(res[i], "")
            i = -1
        }
    }

    if (str.length === 0) {
        return true

    } else {

        return false
    }
}
