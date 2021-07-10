let arr=[1,2,3,4,5,6];
let pos = 3;
let count=0;

while(count<pos){
    var val = arr[0];
    arr.shift();
    arr.push(val);
    count+=1;
}
console.log(arr);