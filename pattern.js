// input: [ 2,3,1,4,6,2 ]
// output:
// ******
// ** ***
//  * **
//    **
//     *
//     *

var a=[2,3,1,4,6,2];
var str="";
for(var i=0;i<a.length;i++){
    str="";
    for(var j=0;j<a.length;j++){
        var c=a[j];
        if(i<c){
            str +="*";
            // console.log("*");
        }
        else{
            str+=" ";
            // console.log(" ");
        }
    }
    console.log(str);
}