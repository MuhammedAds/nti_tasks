function sum(num1,num2,num3){
  for (var i = 1 ; i<4 ; i++){
    if(num1 == undefined){
      console.log("please check your entry")
    }
    else if(num2 == undefined){
      console.log("please check your entry")
    }
    else if(num3 == undefined){
      console.log("please check your entry")
    }
    else if(num1 == 3) {
     break; 
    }
    else if(num3 == 3){
      continue;
    }
    else{
      return num1
    }
  }
}
console.log(sum(1,2,3))