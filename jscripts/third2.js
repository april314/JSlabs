var numbers = [23, 45, 2, 4, 11, 109, -34, 45];
document.getElementById('array').innerHTML = numbers;

function ssort(){
  var minIdx, temp, 
      len = numbers.length;
  for(var i = 0; i < len; i++){
    minIdx = i;
    for(var  j = i+1; j<len; j++){
       if(numbers[j]<numbers[minIdx]){
          minIdx = j;
       }
    }
    temp = numbers[i];
    numbers[i] = numbers[minIdx];
    numbers[minIdx] = temp;
  }
  document.getElementById('sorted').innerHTML = numbers;
}