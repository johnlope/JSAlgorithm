function canBePalindrome(str){
	console.log(str);
	let lettersArray = str.split("");
  var counter = {};
  
  for(let index = 0; index < lettersArray.length; index++){
  	if(!counter[lettersArray[index]])
    	counter[lettersArray[index]] = 1;
    else
    	counter[lettersArray[index]] += 1;
  }
  
  let valuesCounter = Object.values(counter);
  let oddCounter = 0;
  
  for(let value of valuesCounter){
  	if((value & 1) == 1)
    	oddCounter++;
      
    if(oddCounter > 1)
  		return false;
  }  
 
    
  return true; 
}

let canBe = canBePalindrome("geeksforgeeks");
console.log(canBe);

canBe = canBePalindrome("geeksogeeks");
console.log(canBe);
