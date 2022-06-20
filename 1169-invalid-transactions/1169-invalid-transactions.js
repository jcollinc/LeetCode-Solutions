/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function(transactions) {
    let invalid = []
    for (let i = 0; i < transactions.length - 1; i++) {
        let transaction = transactions[i].split(",")
        for (let j = i + 1; j < transactions.length; j++) {
            let next = transactions[j].split(",")
            if (transaction.join(",") == next.join(",") && transactions.length === 2) {invalid.push(transaction.join(","), next.join(","))}
            else if (transaction.join(",") == next.join(",")) {invalid.push(transaction.join(","))}
            else if (transaction[0] === next[0] && Math.abs(transaction[1] - next[1]) <= 60 && transaction[3] !== next[3]) {
                if (!invalid.includes(transaction.join(","))) invalid.push(transaction.join(","))
                if (!invalid.includes(next.join(","))) invalid.push(next.join(","))
            } else if (transaction[2] > 1000 && !invalid.includes(transaction.join(","))) {
                invalid.push(transaction.join(","))
            } else if (j === transactions.length - 1 && next[2] > 1000 && !invalid.includes(next.join(","))) invalid.push(next.join(","))
        }
    }
    return invalid
}
