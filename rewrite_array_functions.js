var a=[50,80,30,90,40];
// var b=a.push(30,20);
// console.log(a);

function myPush(array,value1,value2)
{
    var length=array.length;
    // console.log(length);
    array[length]=value1;
    var length=array.length;
    array[length]=value2;
    return array;
} 
// var a=myPush(a,30,20)
// console.log(a);

function myPop(array)
{
    newArray=[];
    for(i=0;i<array.length-1;i++)
    {
        newArray[i]=array[i];
        
    }
    return newArray;
}
// var a=myPop(a);
// console.log(a);

function myCopyWithIn(array,startvalue)
{   
    newArray=[];
    for(i=startvalue;i<array.length;i++)
    {
        newArray[i]=array[i];
    }
    return newArray;
}
// var a=myCopyWithIn(a,3);
// console.log(a);

function myReverse(array)
{
     newArray=[];
     index=0;
    for(i=array.length-1;i>=0;i--)
    {
        //  console.log(array[i]);
         newArray[index]=array[i];
         index++;
    }
    return newArray;
}
//  var a=myReverse(a);
// console.log(a); 

function myUnShift(array,value1,value2)
{
    newArray=[];   
    for(i=0;i<=array.length-1;i++)
    {
        newArray[i+2]=array[i]
    }
    newArray[0]=value1;
    newArray[1]=value2;
    return newArray;
}
// var a=myUnShift(a,21,8);
// console.log(a);

function myForEach(array)
{
    for(i=0;i<=array.length-1;i++)
    {
        // console.log(array[i]); 
    }
}
myForEach(a);

function myIncludes(array,value,indexvalue)
{
    for(i=0;i<=array.length-1;i++)
    {
        if((array[i]==value)&&(i==indexvalue))
        {
            var b="true";
            return b;
        }
    }
    
    var b="false";
    return b;
}
// var c=myIncludes(a,90,3);
// console.log(c);

function myShift(array)
{
    newArray=[];
    index=0;
    for(i=1;i<=array.length-1;i++)
    {
        newArray[index]=array[i];
        index++;
    }
    return newArray;
}
// var a=myShift(a);
// console.log(a);


