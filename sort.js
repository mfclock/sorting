function sort_an_array(arr,index){
  if(Array.isArray(arr)){
    if(index){
      arr.sort(function(a,b){
        if(a[index] < b[index]){
          return -1;
        }else if(a[index] > b[index]){
          return 1;
        }else{
          return 0;
        }
      }
    }else{
      arr.sort();
    }
  }
  return arr;
}
