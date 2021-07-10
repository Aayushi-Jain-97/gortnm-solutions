let arr=[1,2,3,4,5,6];
let pos = 3;
let count=0;

while(count<pos){
    let val=arr[0];
    for(var i=0;i<arr.length-1;i++){
        arr[i]=arr[i+1];
    }
    arr[i]=val;
    count+=1;
}