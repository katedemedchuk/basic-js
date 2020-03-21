module.exports = function transform(arr) {
    if (!Array.isArray(arr)) 
        throw new Error('arr is not a valid Array')
    
    if(arr.length == 0) return []
  
    return arr.map((e, idx) => {
    if (['--discard-next', '--discard-prev', '--double-next','--double-prev']
    .includes(e)) return []

    const ins = [e]
    let iNext = idx+1
    while (arr[iNext] == '--discard-next') iNext+=2
    if (arr[idx-1]=='--discard-next' || arr[iNext]=='--discard-prev') ins.pop()
    if (arr[idx-1]=='--double-next') ins.push(e)
    if (arr[idx+1]=='--double-prev') ins.push(e)
    return ins
    }).flat()
};