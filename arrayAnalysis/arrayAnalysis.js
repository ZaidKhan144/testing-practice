
const arrayAnalysis = (arr) => {
    
    return{
        avg: arr.reduce((a,b) => a +b, 0)/arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        len: arr.length
    }
}


module.exports = arrayAnalysis