function threeInOne(arr){
    const arr1=[];
    for (let i=0;i<=arr.length;i+=3){
      arr1.push(arr.slice(i,i+3));
      }
      return arr1.map(v=>v.reduce((a,b)=>a+b,0)).slice(0,-1);
  }