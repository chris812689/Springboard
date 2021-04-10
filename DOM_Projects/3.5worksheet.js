function countDown(time){
    let count = setInterval(
        
        function(){
            time--;
            
            if(time>0){

                console.log(time);
            }
            else if(time === 0){
                console.log("done")
                clearInterval(count);
            }
        }
        ,1000)
}

function randomGame(){
    let tries = 0;
    let number = setInterval(() => {
        let numb = Math.random();
        tries++;
        console.log(numb, tries);
    
    if(numb > .75){
        clearInterval(number);
        console.log("It took " + times + " try/tries.");
        
        
    }
    else if(numb < .75){
        console.log("try again", numb);
        
    }
    }, 1000);
    
}
