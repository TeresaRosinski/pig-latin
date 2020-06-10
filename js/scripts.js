//Business Logic
/*
const pigLatinCreator = function(strText) {
  let lowerArray = strText.toLowerCase().split(" "); 
  let vowelArray = lowerArray.forEach(function(letter) {

    if (function(vowel) {  
      let len = lowerArray.length;
      for (let i=0; i < len; i++) {
        if(lowerArray[i].indexOf(vowel) == 0)
      }
      lowerArray.append("way");
    }
  });
  
  console.log(vowelArray);
  //return; 
  
  // 
  //}
  return vowelArray;
};
*/

const pigLatinCreator = function(strText) {
  let pigLatin= " ";
  let vowel = ["a", "e", "i" , "o", "u"];
  let lowerCase = strText.toLowerCase(); 
  //let vowelArray = lowerArray.forEach(function(letter) {
    if (vowel.indexOf(lowerCase.charAt(0))>-1) {
      pigLatin += lowerCase + "way";
      console.log(pigLatin);
    } else {
      return lowerCase;
    }
  /*let vowel = (function(){
    for (let i= 0; i < lowerArray.length-1; i++) {
        if(vowel.indexOf(lowerArray) > -1) {
          pigLatin += lowerArray[i].append("way");
          console.log(pigLatin);
        };
        */
      
      
    
    
    //return pigLatin;
    
};

 
  //return; 


//User Interface Logic
$(document).ready(function() {
  $("form#translator").submit(function(event) {
    event.preventDefault();
    const strText= $("input#change-text").val();
    const result = pigLatinCreator(strText);
    $("#translation").text(result);
  });
});

