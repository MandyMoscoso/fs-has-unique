// Write your code below

const hasUniqueChars = (word)=>{
    answer = true;
    for (i = 0; i < word.length && answer; i++){
        for (x =i+ 1; x < word.length && answer; x ++){
            if (word[i]=== word[x]){
                return false
                answer = false;
            } 
        }
        if(i === word.length-1){
            return true;
        }
    }
}
// console.log(hasUniqueChars("heIiloi"))