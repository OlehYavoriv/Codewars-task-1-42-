function bigToSmall(arr){
    let result = [].concat(...arr);
    result.sort(function(a, b){return a - b});
    result.reverse();
    res1 = result.join(">");
    return res1;
  }