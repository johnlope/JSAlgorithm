const isValid = function(s){

  let brackets ={
    '(':')',
    '{':'}',
    '[':']'
  };

  let stack = [];  

  for(let key of s){    
    if(brackets[key]){
      console.log(brackets[key]);
      stack.push(brackets[key]);
    }else{
    	let lastItem = stack.pop();
      console.log(lastItem);
      if (lastItem !== key){
         return false;
      }
    }
  }

  return !stack.length;
}

console.log(isValid("[()]{}"));
