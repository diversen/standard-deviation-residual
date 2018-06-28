var simpleRegressionLine = require('simple-linear-regression')

function standardDeviationResiduals (x, y) {

    var regression = simpleRegressionLine(x, y)

    // y - y^
    var squaredSum = 0;
    for(let i = 0; i < x.length; i++) {
        let current = y[i] - (regression.a * x[i] + regression.b)
        squaredSum += Math.pow(current, 2)
    }

    var N = x.length - 1;
    return Math.sqrt(squaredSum / N)
    
}

module.exports = standardDeviationResiduals
