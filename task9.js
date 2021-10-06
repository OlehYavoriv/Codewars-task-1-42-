function padIt(str,n){
    let result = str;
    let i = 0;
   
     while (i < n) {
     if (i % 2 === 0) {
       result = `*${result}`
     } else {
       result = `${result}*`;
     }
 
     i += 1;
   }
 
   return result;
 }