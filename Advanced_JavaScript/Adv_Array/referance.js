function forEach(arr, callback){
    for(let i =0; i<arr.length; i++){
        callback(arr[i], i , arr);
    }
}

function myMap(arr, callback){
    let newArry=[];
    for(let i =0; i<arr.length; i++){
        newArray.push(callback(arr[i], i, arr));
    }
    return newArry;
}

function myFilter(arr, callback){
    const newArray = [];
    for( let i =0; i<arr.length; i++){
        if(callback(arr[i], i, arr)){
            newArray.push(arr[i])
        }
    }
    return newArray;
}

function mySum (arr, callback){
    for(let i= 0; i<arr.legth; i++){
        if(callback(arr[i],i, arr))return true;

    }
    return false;
}

function myEvery (arr, callback){
    for(let i= 0; i<arr.legth; i++){
        if(!callback(arr[i],i, arr))return false;

    }
    return true;
}