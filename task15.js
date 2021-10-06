function howManySmaller(arr,n){
    var i=0;
    for (var key in arr){
      if(arr[key].toFixed(2)<n) i++;
      }
    return i;
  }