function isolateIt(arr){
    return arr.map(function(one){                
       var res =one.length/2;
      
       if(one.length%2==0)
            return one.slice(0,res)+"|"+one.slice(res);
       else
            return one.slice(0,Math.floor(res))+"|"+one.slice(Math.ceil(res))
    
      } );
      
    }