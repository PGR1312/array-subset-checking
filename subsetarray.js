var arr=[1,2,3,4,5,6,7,8];
var arr1=[6,7,8];
var sub=[];
 
var arrmerge=[...arr,...arr1];
//console.log(arrmerge);

for(var i of arrmerge)
{
    if(sub.indexOf(i)==-1)
    {
        sub.push(i);
       // console.log(sub);
    }
}
//console.log(sub);
//console.log(arr.length,sub.length);
if(arr.length===sub.length)
{
    console.log('in');
}
else
{
    console.log('not');
}
