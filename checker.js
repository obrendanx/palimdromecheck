function palindrome(str) {
  var lowerNewStr =  str.toLowerCase();
  var patt = /0-9\s_\W/g;
  var newStr = lowerNewStr.replace(patt);
  newStr = newStr.replace(/\s/g, "");
  newStr = newStr.replace(/_/g).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace('undefined','');
  
  var splitNewStr = newStr.split("");
  var checkingStr = splitNewStr;
  var newArr = [];

  console.log(newStr);
  
  for(let i = 0; i <= checkingStr.length; i++){
    newArr.unshift(checkingStr[i]);
  }

  newArr.shift();
  var finalStr = newArr.join('');
  if(finalStr == newStr){
    return true;
  }else{
    return false;
  };

  //fcc js challenge
}



palindrome("A man, a plan, a canal. Panama");
