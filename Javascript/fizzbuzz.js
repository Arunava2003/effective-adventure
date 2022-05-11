var output = [];
var arr_ele = 1;
function fizzBuzz(){  
  if(arr_ele%3 == 0 && arr_ele%5 != 0){
    output.push("Fizz");
    console.log(output);
    arr_ele = arr_ele+1;
  }else if(arr_ele%5 == 0 && arr_ele%3 != 0){
    output.push("Buzz");
    console.log(output);
    arr_ele = arr_ele+1;
  }else if(arr_ele%3 == 0 && arr_ele%5 == 0){
    output.push("FizzBuzz");
    console.log(output);
    arr_ele = arr_ele+1;
  }else{
    output.push(arr_ele);
    console.log(output);
    arr_ele = arr_ele+1;
  }
}
