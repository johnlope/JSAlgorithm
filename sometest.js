const isValid = function(s){

  let brackets ={
    '(':')',
    '{':'}',
    '[':']'
  };

  let stack = [];  

  for(let key of s){    
    if(brackets[key]){      
      stack.push(brackets[key]);
    } else if (stack.pop() !== key){
         return false;      
    }
  }

  return !stack.length;
}

console.log(isValid("[()]{}"));
