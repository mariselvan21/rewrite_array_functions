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
// var c=myIncludes(a,90,2);
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

var b=[5,10,15,20,25];
function myConcat(array1,array2)
{
    newArray=[];
    var j=0
    for(i=0;i<=array1.length-1;i++)
    {
        newArray[j]=array1[i];
       j++ 
    }
    var j=newArray.length;
    for(i=0;i<=array2.length-1;i++)
    {
        newArray[j]=array2[i];
        j++
        
    }

    return newArray;
}
// var a=myConcat(a,b);
// console.log(a);

function mySlice1(array,indexValue)
{
    newArray=[];
    j=0
    for(i=indexValue;i<=array.length-1;i++)
    {
        newArray[j]=array[i];
        j++;
    }
    return newArray;
}
// var a=mySlice1(a,2)
// console.log(a);

function mySlice2(array,indexValue1,indexValue2)
{
    newArray=[];
    j=0
    for(i=indexValue1;i<=indexValue2-1;i++)
    {
        newArray[j]=array[i];
        j++;
    }
    return newArray;
}
//  var a=mySlice2(a,1,4)
// console.log(a);

function myFill(array,value,indexValue1,indexValue2)
{
    
    for(i=indexValue1;i<indexValue2;i++)
    {
        array[i]=value;
    }
    return array;
}
var b=myFill(a,100,1,4);
console.log(b);










