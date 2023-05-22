var arr=[1,4,7]
let avg= 0;

function averageOfNumbers(array){
for(i=0; i < array.length;i++){
     avg += array[i];
 } return avg / array.length;

}
console.log(averageOfNumbers(arr))