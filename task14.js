function colorOf(r,g,b){
    var rx, gy, bz
    
    if(r < 16){
       rx = "0" + r.toString(16);
    } 
      else{
        rx = r.toString(16);
      }  
    if(g < 16){
      gy = "0"+g.toString(16);
      }
      else {
        gy = g.toString(16);
      }
    if(b < 16){
      bz = "0"+b.toString(16);
      }
      else{
        bz=b.toString(16);
      }
    return "#"+rx+gy+bz;
  }