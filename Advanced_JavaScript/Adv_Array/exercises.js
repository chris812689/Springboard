doubleValue = [1,2,3];

doubleValue.forEach(function(doubleValue,i){
    doubleValue= doubleValue*2;
    console.log(doubleValue, 'at index of:', i)
});

onlyEvens =[5,1,2,3,10,4];

const onlyEvenValues = onlyEvens.filter(function(onlyEven){
    return (onlyEven %2 == 0);
})

showLetters = ['colt' , 'matt' , 'tim', 'test'];

const showFirstAndLast = showLetters.map(function(showLetter){
    Array.from(showLetter)
    let last = showLetter.length -1;
    let letters = showLetter[0]+ showLetter[last];
    return letters;
});

numbers = [1,2,2,2,2,2,2,3,4,0,];

numbers.some(function(n){ //has an odd number
    return (n %2 === 1);
});

numbers.some(function(n){ // has a zero
    if(n ===0){
        return true;
    }
    return false;
});

odd = [1.3,5,7];

odd.every(function(o){
    return o % 2 !==0;
});

double=[1,2,30,4,1];
function checkDoubles(){
    for(let i = 0; i<double.length; i++){
        for(let j = i +1; j <double.length; j++){
            if(double[i] === double[j]){
                return true;
            }
        }return false;
    } 
};