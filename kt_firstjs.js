function calculator(operatorOne, operatorTwo, operance){
  var result = 0 ;
  if(operance == "+"){
     result = operatorOne + operatorTwo;
  }else {
    result = operatorOne - operatorTwo;
  }
  return result;
}
